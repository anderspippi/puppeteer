/**
 * Copyright 2023 Google Inc. All rights reserved.
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

import type {JSHandle} from '../api/JSHandle.js';
import type {AwaitableIterable, HandleFor} from './types.js';

/**
 * @internal
 */
export class IterableUtil {
  static async *map<T, U>(
    iterable: AwaitableIterable<T>,
    map: (item: T) => Promise<U>
  ): AwaitableIterable<U> {
    for await (const value of iterable) {
      yield await map(value);
    }
  }

  static async *flatMap<T>(
    iterable: AwaitableIterable<T>,
    map: (item: T) => AwaitableIterable<T>
  ): AwaitableIterable<T> {
    for await (const value of iterable) {
      yield* map(value);
    }
  }

  static async collect<T>(iterable: AwaitableIterable<T>): Promise<T[]> {
    const result = [];
    for await (const value of iterable) {
      result.push(value);
    }
    return result;
  }

  static async first<T>(
    iterable: AwaitableIterable<T>
  ): Promise<T | undefined> {
    for await (const value of iterable) {
      return value;
    }
    return undefined;
  }

  static async *transposeHandle<T>(
    handle: JSHandle<AwaitableIterable<T>>
  ): AwaitableIterable<HandleFor<T>> {
    const iterator = await handle.evaluateHandle(iterable => {
      return (async function* () {
        yield* iterable;
      })();
    });
    try {
      while (true) {
        const handle = await iterator.evaluateHandle(async iterator => {
          const result = await iterator.next();
          if (result.done) {
            return;
          }
          return result.value;
        });
        if (handle.remoteObject().type === 'undefined') {
          break;
        }
        yield handle as HandleFor<T>;
      }
    } finally {
      await iterator.dispose();
    }
  }
}
