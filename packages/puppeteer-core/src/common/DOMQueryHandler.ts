/**
 * Copyright 2022 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ElementHandle} from '../api/ElementHandle.js';
import type PuppeteerUtil from '../injected/injected.js';
import {assert} from '../util/assert.js';
import type {Frame} from './Frame.js';
import type {WaitForSelectorOptions} from './IsolatedWorld.js';
import {MAIN_WORLD, PUPPETEER_WORLD} from './IsolatedWorlds.js';
import {IterableUtil} from './IterableUtil.js';
import {LazyArg} from './LazyArg.js';
import {QueryHandler} from './QueryHandler.js';
import type {AwaitableIterable} from './types.js';

/**
 * @internal
 */
export class DOMQueryHandler extends QueryHandler {
  static querySelectorAll?: (
    node: Node,
    selector: string,
    PuppeteerUtil: PuppeteerUtil
  ) => AwaitableIterable<Node>;
  static querySelector?: (
    node: Node,
    selector: string,
    PuppeteerUtil: PuppeteerUtil
  ) => Node | null;

  /**
   * Queries for multiple nodes given a selector and {@link ElementHandle}.
   *
   * Akin to {@link Window.prototype.querySelectorAll}.
   */
  static override async *queryAll(
    element: ElementHandle<Node>,
    selector: string
  ): AwaitableIterable<ElementHandle<Node>> {
    if (!this.querySelectorAll) {
      return yield* super.queryAll(element, selector);
    }
    const world = element.executionContext()._world;
    assert(world);
    const handle = await element.evaluateHandle(
      this.querySelectorAll,
      selector,
      LazyArg.create(context => {
        return context.puppeteerUtil;
      })
    );
    yield* IterableUtil.transposeHandle(handle);
  }

  /**
   * Queries for a single node given a selector and {@link ElementHandle}.
   *
   * Akin to {@link Window.prototype.querySelector}.
   */
  static override async queryOne(
    element: ElementHandle<Node>,
    selector: string
  ): Promise<ElementHandle<Node> | null> {
    if (!this.querySelector) {
      return super.queryOne(element, selector);
    }
    const world = element.executionContext()._world;
    assert(world);
    const result = await element.evaluateHandle(
      this.querySelector,
      selector,
      LazyArg.create(context => {
        return context.puppeteerUtil;
      })
    );
    if (!(result instanceof ElementHandle)) {
      await result.dispose();
      return null;
    }
    return result;
  }

  /**
   * Waits until a single node appears for a given selector and
   * {@link ElementHandle}.
   */
  static override async waitFor(
    elementOrFrame: ElementHandle<Node> | Frame,
    selector: string,
    options: WaitForSelectorOptions
  ): Promise<ElementHandle<Node> | null> {
    if (!this.querySelector) {
      return super.waitFor(elementOrFrame, selector, options);
    }
    let frame: Frame;
    let element: ElementHandle<Node> | undefined;
    if (!(elementOrFrame instanceof ElementHandle)) {
      frame = elementOrFrame;
    } else {
      frame = elementOrFrame.frame;
      element = await frame.worlds[PUPPETEER_WORLD].adoptHandle(elementOrFrame);
    }
    const result = await frame.worlds[PUPPETEER_WORLD]._waitForSelectorInPage(
      this.querySelector,
      element,
      selector,
      options
    );
    if (element) {
      await element.dispose();
    }
    if (!(result instanceof ElementHandle)) {
      await result?.dispose();
      return null;
    }
    return frame.worlds[MAIN_WORLD].transferHandle(result);
  }
}
