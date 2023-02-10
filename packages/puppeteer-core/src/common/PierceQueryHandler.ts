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

import type PuppeteerUtil from '../injected/injected.js';
import {DOMQueryHandler} from './DOMQueryHandler.js';

/**
 * @internal
 */
export class PierceQueryHandler extends DOMQueryHandler {
  static override querySelector = (
    element: Node,
    selector: string,
    {pierceQuerySelector}: PuppeteerUtil
  ): Node | null => {
    return pierceQuerySelector(element, selector);
  };
  static override querySelectorAll = (
    element: Node,
    selector: string,
    {pierceQuerySelectorAll}: PuppeteerUtil
  ): Iterable<Node> => {
    return pierceQuerySelectorAll(element, selector);
  };
}
