/**
 * Copyright 2017 Google Inc. All rights reserved.
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

export {Protocol} from 'devtools-protocol';

export * from './common/Device.js';
export * from './common/Errors.js';
export * from './common/PredefinedNetworkConditions.js';
export * from './common/Puppeteer.js';
/**
 * @deprecated Use the query handler API defined on {@link Puppeteer}
 */
export * from './common/QueryHandler.js';
export * from './node/BrowserFetcher.js';
export * from './api/Browser.js';
export * from './api/BrowserContext.js';
export * from './api/Page.js';
export * from './common/Accessibility.js';
export * from './common/AriaQueryHandler.js';
export * from './common/Browser.js';
export * from './common/BrowserConnector.js';
export * from './common/BrowserWebSocketTransport.js';
export * from './common/ChromeTargetManager.js';
export * from './common/Configuration.js';
export * from './common/Connection.js';
export * from './common/ConnectionTransport.js';
export * from './common/ConsoleMessage.js';
export * from './common/Coverage.js';
export * from './common/Debug.js';
export * from './common/Dialog.js';
export * from './common/ElementHandle.js';
export * from './common/EmulationManager.js';
export * from './common/EventEmitter.js';
export * from './common/ExecutionContext.js';
export * from './common/fetch.js';
export * from './common/FileChooser.js';
export * from './common/FirefoxTargetManager.js';
export * from './common/Frame.js';
export * from './common/FrameManager.js';
export * from './common/FrameTree.js';
export * from './common/HTTPRequest.js';
export * from './common/HTTPResponse.js';
export * from './common/Input.js';
export * from './common/IsolatedWorld.js';
export * from './common/JSHandle.js';
export * from './common/LazyArg.js';
export * from './common/LifecycleWatcher.js';
export * from './common/NetworkEventManager.js';
export * from './common/NetworkManager.js';
export * from './common/NodeWebSocketTransport.js';
export * from './common/Page.js';
export * from './common/PDFOptions.js';
export * from './common/Product.js';
export * from './common/Puppeteer.js';
export * from './common/PuppeteerViewport.js';
export * from './common/SecurityDetails.js';
export * from './common/Target.js';
export * from './common/TargetManager.js';
export * from './common/TaskQueue.js';
export * from './common/TimeoutSettings.js';
export * from './common/Tracing.js';
export * from './common/types.js';
export * from './common/USKeyboardLayout.js';
export * from './common/util.js';
export * from './common/WaitTask.js';
export * from './common/WebWorker.js';
export * from './environment.js';
export * from './generated/injected.js';
export * from './generated/version.js';
export * from './node/BrowserFetcher.js';
export * from './node/BrowserRunner.js';
export * from './node/ChromeLauncher.js';
export * from './node/FirefoxLauncher.js';
export * from './node/LaunchOptions.js';
export * from './node/PipeTransport.js';
export * from './node/ProductLauncher.js';
export * from './node/PuppeteerNode.js';
export * from './puppeteer-core.js';
export * from './revisions.js';
export * from './util/assert.js';
export * from './util/DebuggableDeferredPromise.js';
export * from './util/DeferredPromise.js';
export * from './util/ErrorLike.js';

import {PuppeteerNode} from './node/PuppeteerNode.js';

/**
 * @public
 */
const puppeteer = new PuppeteerNode({
  isPuppeteerCore: true,
});

export const {
  connect,
  /**
   * @deprecated Construct {@link BrowserFetcher} manually.
   *
   * @public
   */
  createBrowserFetcher,
  defaultArgs,
  executablePath,
  launch,
} = puppeteer;

export default puppeteer;
