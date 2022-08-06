"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[777766],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),g=a,d=s["".concat(i,".").concat(g)]||s[g]||m[g]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},826385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(487462),a=(r(667294),r(603905));const l={sidebar_label:"Page.emulateCPUThrottling"},o="Page.emulateCPUThrottling() method",p={unversionedId:"api/puppeteer.page.emulatecputhrottling",id:"version-16.1.0/api/puppeteer.page.emulatecputhrottling",title:"Page.emulateCPUThrottling() method",description:"Enables CPU throttling to emulate slow CPUs.",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.page.emulatecputhrottling.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatecputhrottling",permalink:"/api/puppeteer.page.emulatecputhrottling",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"Page.emulateCPUThrottling"},sidebar:"sidebar",previous:{title:"Page.emulate",permalink:"/api/puppeteer.page.emulate"},next:{title:"Page.emulateIdleState",permalink:"/api/puppeteer.page.emulateidlestate"}},i={},u=[{value:"Parameters",id:"parameters",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pageemulatecputhrottling-method"},"Page.emulateCPUThrottling() method"),(0,a.kt)("p",null,"Enables CPU throttling to emulate slow CPUs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  emulateCPUThrottling(factor: number | null): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"factor"),(0,a.kt)("td",{parentName:"tr",align:null},"number ","|"," null"),(0,a.kt)("td",{parentName:"tr",align:null},"slowdown factor (1 is no throttle, 2 is 2x slowdown, etc).")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"))}m.isMDXComponent=!0}}]);