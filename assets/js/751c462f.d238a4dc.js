"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[800785],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(667294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=s(r),f=i,d=c["".concat(u,".").concat(f)]||c[f]||m[f]||o;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},680935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(487462),i=(r(667294),r(603905));const o={sidebar_label:"WaitTimeoutOptions.timeout"},a="WaitTimeoutOptions.timeout property",p={unversionedId:"api/puppeteer.waittimeoutoptions.timeout",id:"version-16.0.0/api/puppeteer.waittimeoutoptions.timeout",title:"WaitTimeoutOptions.timeout property",description:"Maximum wait time in milliseconds, defaults to 30 seconds, pass 0 to disable the timeout.",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.waittimeoutoptions.timeout.md",sourceDirName:"api",slug:"/api/puppeteer.waittimeoutoptions.timeout",permalink:"/16.0.0/api/puppeteer.waittimeoutoptions.timeout",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"WaitTimeoutOptions.timeout"},sidebar:"sidebar",previous:{title:"WaitTimeoutOptions",permalink:"/16.0.0/api/puppeteer.waittimeoutoptions"},next:{title:"WebWorker",permalink:"/16.0.0/api/puppeteer.webworker"}},u={},s=[{value:"Remarks",id:"remarks",level:2}],l={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"waittimeoutoptionstimeout-property"},"WaitTimeoutOptions.timeout property"),(0,i.kt)("p",null,"Maximum wait time in milliseconds, defaults to 30 seconds, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to disable the timeout."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface WaitTimeoutOptions {\n  timeout?: number;\n}\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The default value can be changed by using the ",(0,i.kt)("a",{parentName:"p",href:"/16.0.0/api/puppeteer.page.setdefaulttimeout"},"Page.setDefaultTimeout()")," method."))}m.isMDXComponent=!0}}]);