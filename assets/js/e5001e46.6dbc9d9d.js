"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[657875],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},w=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),w=c(t),f=a,m=w["".concat(s,".").concat(f)]||w[f]||u[f]||o;return t?n.createElement(m,p(p({ref:r},l),{},{components:t})):n.createElement(m,p({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=w;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}w.displayName="MDXCreateElement"},147200:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(487462),a=(t(667294),t(603905));const o={sidebar_label:"Browser.newPage"},p="Browser.newPage() method",i={unversionedId:"api/puppeteer.browser.newpage",id:"version-16.1.0/api/puppeteer.browser.newpage",title:"Browser.newPage() method",description:"Promise which resolves to a new Page object. The Page is created in a default browser context.",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.browser.newpage.md",sourceDirName:"api",slug:"/api/puppeteer.browser.newpage",permalink:"/api/puppeteer.browser.newpage",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"Browser.newPage"},sidebar:"sidebar",previous:{title:"Browser.isConnected",permalink:"/api/puppeteer.browser.isconnected"},next:{title:"Browser.pages",permalink:"/api/puppeteer.browser.pages"}},s={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"browsernewpage-method"},"Browser.newPage() method"),(0,a.kt)("p",null,"Promise which resolves to a new ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.page"},"Page")," object. The Page is created in a default browser context."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Browser {\n  newPage(): Promise<Page>;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.page"},"Page"),">"))}u.isMDXComponent=!0}}]);