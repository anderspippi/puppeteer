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

import {DOMQueryHandler} from './DOMQueryHandler.js';

/**
 * @internal
 */
export class CSSQueryHandler extends DOMQueryHandler {
  static override querySelector = (
    element: Node,
    selector: string
  ): Node | null => {
    if (!('querySelector' in element)) {
      throw new Error(
        `Could not invoke \`querySelector\` on node of type ${element.nodeName}.`
      );
    }
    return (
      element as unknown as {querySelector(selector: string): Element}
    ).querySelector(selector);
  };
  static override querySelectorAll = (
    element: Node,
    selector: string
  ): Iterable<Node> => {
    if (!('querySelectorAll' in element)) {
      throw new Error(
        `Could not invoke \`querySelectorAll\` on node of type ${element.nodeName}.`
      );
    }
    return [
      ...(
        element as unknown as {
          querySelectorAll(selector: string): NodeList;
        }
      ).querySelectorAll(selector),
    ];
  };
}
