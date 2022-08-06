"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[932193],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=n,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||i;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},299702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(487462),n=(r(667294),r(603905));const i={sidebar_label:"Frame.waitForNavigation"},o="Frame.waitForNavigation() method",p={unversionedId:"api/puppeteer.frame.waitfornavigation",id:"version-16.1.0/api/puppeteer.frame.waitfornavigation",title:"Frame.waitForNavigation() method",description:"Signature:",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.frame.waitfornavigation.md",sourceDirName:"api",slug:"/api/puppeteer.frame.waitfornavigation",permalink:"/api/puppeteer.frame.waitfornavigation",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"Frame.waitForNavigation"},sidebar:"sidebar",previous:{title:"Frame.waitForFunction",permalink:"/api/puppeteer.frame.waitforfunction"},next:{title:"Frame.waitForSelector",permalink:"/api/puppeteer.frame.waitforselector"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"framewaitfornavigation-method"},"Frame.waitForNavigation() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  waitForNavigation(options?: {\n    timeout?: number;\n    waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];\n  }): Promise<HTTPResponse | null>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},"{ timeout?: number; waitUntil?: ",(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/api/puppeteer.puppeteerlifecycleevent"},"PuppeteerLifeCycleEvent"),"[","]","; }"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," options to configure when the navigation is consided finished.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/api/puppeteer.httpresponse"},"HTTPResponse")," ","|"," null",">"),(0,n.kt)("p",null,"a promise that resolves when the frame navigates to a new URL."),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"This resolves when the frame navigates to a new URL. It is useful for when you run code which will indirectly cause the frame to navigate. Consider this example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const [response] = await Promise.all([\n  // The navigation promise resolves after navigation has finished\n  frame.waitForNavigation(),\n  // Clicking the link will indirectly cause a navigation\n  frame.click('a.my-link'),\n]);\n")),(0,n.kt)("p",null,"Usage of the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API"},"History API")," to change the URL is considered a navigation."))}c.isMDXComponent=!0}}]);