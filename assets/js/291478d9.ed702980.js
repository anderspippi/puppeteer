"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78885],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(r),s=a,f=c["".concat(i,".").concat(s)]||c[s]||u[s]||l;return r?n.createElement(f,p(p({ref:t},m),{},{components:r})):n.createElement(f,p({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var d=2;d<l;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},167540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(487462),a=(r(667294),r(603905));const l={sidebar_label:"ElementHandle.drop"},p="ElementHandle.drop() method",o={unversionedId:"api/puppeteer.elementhandle.drop",id:"version-16.0.0/api/puppeteer.elementhandle.drop",title:"ElementHandle.drop() method",description:"This method triggers a drop on the element.",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.elementhandle.drop.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.drop",permalink:"/16.0.0/api/puppeteer.elementhandle.drop",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"ElementHandle.drop"},sidebar:"sidebar",previous:{title:"ElementHandle.dragOver",permalink:"/16.0.0/api/puppeteer.elementhandle.dragover"},next:{title:"ElementHandle.focus",permalink:"/16.0.0/api/puppeteer.elementhandle.focus"}},i={},d=[{value:"Parameters",id:"parameters",level:2}],m={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"elementhandledrop-method"},"ElementHandle.drop() method"),(0,a.kt)("p",null,"This method triggers a drop on the element."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class ElementHandle {\n  drop(\n    this: ElementHandle<Element>,\n    data?: Protocol.Input.DragData\n  ): Promise<void>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"this"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.elementhandle"},"ElementHandle"),"<","Element",">"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"data"),(0,a.kt)("td",{parentName:"tr",align:null},"Protocol.Input.DragData"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"))}u.isMDXComponent=!0}}]);