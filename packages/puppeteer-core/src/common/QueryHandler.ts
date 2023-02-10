/**
 * Copyright 2020 Google Inc. All rights reserved.
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
import type {Frame} from './Frame.js';
import type {WaitForSelectorOptions} from './IsolatedWorld.js';
import {MAIN_WORLD, PUPPETEER_WORLD} from './IsolatedWorlds.js';
import type {AwaitableIterable} from './types.js';

/**
 * @internal
 */
export class QueryHandler {
  /**
   * Queries for multiple nodes given a selector and {@link ElementHandle}.
   *
   * Akin to {@link Document.prototype.querySelectorAll}.
   */
  static async *queryAll(
    element: ElementHandle<Node>,
    selector: string
  ): AwaitableIterable<ElementHandle<Node>> {
    const result = await this.queryOne(element, selector);
    if (result) {
      yield result;
    }
  }

  /**
   * Queries for a single node given a selector and {@link ElementHandle}.
   *
   * Akin to {@link Document.prototype.querySelector}.
   */
  static async queryOne(
    element: ElementHandle<Node>,
    selector: string
  ): Promise<ElementHandle<Node> | null> {
    const results = this.queryAll(element, selector);
    let first = true;
    let handle: ElementHandle<Node> | null = null;
    for await (const result of results) {
      if (!first) {
        await result.dispose();
        continue;
      }
      first = false;
      handle = result;
    }
    return handle;
  }

  /**
   * Waits until a single node appears for a given selector and
   * {@link ElementHandle}.
   */
  static async waitFor(
    elementOrFrame: ElementHandle<Node> | Frame,
    selector: string,
    options: WaitForSelectorOptions
  ): Promise<ElementHandle<Node> | null> {
    let frame: Frame;
    let element: ElementHandle<Node> | undefined;
    if (!(elementOrFrame instanceof ElementHandle)) {
      frame = elementOrFrame;
    } else {
      frame = elementOrFrame.frame;
      element = await frame.worlds[PUPPETEER_WORLD].adoptHandle(elementOrFrame);
    }

    const __querySelector = async (selector: string) => {
      return this.queryOne(
        element ?? (await frame.worlds[PUPPETEER_WORLD].document()),
        selector
      );
    };

    const result = await frame.worlds[PUPPETEER_WORLD]._waitForSelectorInPage(
      (_: Element, selector: string) => {
        return (
          globalThis as unknown as {
            __querySelector(selector: string): Node | null;
          }
        ).__querySelector(selector);
      },
      element,
      selector,
      options,
      new Map([['__querySelector', __querySelector]])
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
