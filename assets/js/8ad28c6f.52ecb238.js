"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[818236],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=c(r),f=a,d=g["".concat(s,".").concat(f)]||g[f]||u[f]||p;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},246884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=r(487462),a=(r(667294),r(603905));const p={sidebar_label:"Target.type"},o="Target.type() method",i={unversionedId:"api/puppeteer.target.type",id:"version-16.0.0/api/puppeteer.target.type",title:"Target.type() method",description:"Identifies what kind of target this is.",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.target.type.md",sourceDirName:"api",slug:"/api/puppeteer.target.type",permalink:"/16.0.0/api/puppeteer.target.type",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"Target.type"},sidebar:"sidebar",previous:{title:"Target.page",permalink:"/16.0.0/api/puppeteer.target.page"},next:{title:"Target.url",permalink:"/16.0.0/api/puppeteer.target.url"}},s={},c=[{value:"Remarks",id:"remarks",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"targettype-method"},"Target.type() method"),(0,a.kt)("p",null,"Identifies what kind of target this is."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Target {\n  type():\n    | 'page'\n    | 'background_page'\n    | 'service_worker'\n    | 'shared_worker'\n    | 'other'\n    | 'browser'\n    | 'webview';\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"'page' ","|"," 'background_page' ","|"," 'service_worker' ","|"," 'shared_worker' ","|"," 'other' ","|"," 'browser' ","|"," 'webview'"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/extensions/background_pages"},"docs")," for more info about background pages."))}u.isMDXComponent=!0}}]);