"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[339251],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(r),b=a,g=f["".concat(i,".").concat(b)]||f[b]||s[b]||l;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},376001:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(487462),a=(r(667294),r(603905));const l={sidebar_label:"TargetFilterCallback"},o="TargetFilterCallback type",p={unversionedId:"api/puppeteer.targetfiltercallback",id:"version-16.0.0/api/puppeteer.targetfiltercallback",title:"TargetFilterCallback type",description:"Signature:",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.targetfiltercallback.md",sourceDirName:"api",slug:"/api/puppeteer.targetfiltercallback",permalink:"/16.0.0/api/puppeteer.targetfiltercallback",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"TargetFilterCallback"},sidebar:"sidebar",previous:{title:"Target.worker",permalink:"/16.0.0/api/puppeteer.target.worker"},next:{title:"TimeoutError",permalink:"/16.0.0/api/puppeteer.timeouterror"}},i={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"targetfiltercallback-type"},"TargetFilterCallback type"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type TargetFilterCallback = (\n  target: Protocol.Target.TargetInfo\n) => boolean;\n")))}s.isMDXComponent=!0}}]);