"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[149039],{603905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var a=r(667294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},p=Object.keys(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),d=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,p=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=d(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||p;return r?a.createElement(f,i(i({ref:e},c),{},{components:r})):a.createElement(f,i({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=r.length,i=new Array(p);i[0]=u;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var d=2;d<p;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},823236:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var a=r(487462),n=(r(667294),r(603905));const p={sidebar_label:"FrameAddScriptTagOptions"},i="FrameAddScriptTagOptions interface",o={unversionedId:"api/puppeteer.frameaddscripttagoptions",id:"version-16.0.0/api/puppeteer.frameaddscripttagoptions",title:"FrameAddScriptTagOptions interface",description:"Signature:",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.frameaddscripttagoptions.md",sourceDirName:"api",slug:"/api/puppeteer.frameaddscripttagoptions",permalink:"/16.0.0/api/puppeteer.frameaddscripttagoptions",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"FrameAddScriptTagOptions"},sidebar:"sidebar",previous:{title:"Frame.waitForXPath",permalink:"/16.0.0/api/puppeteer.frame.waitforxpath"},next:{title:"FrameAddScriptTagOptions.content",permalink:"/16.0.0/api/puppeteer.frameaddscripttagoptions.content"}},l={},d=[{value:"Properties",id:"properties",level:2}],c={toc:d};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frameaddscripttagoptions-interface"},"FrameAddScriptTagOptions interface"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface FrameAddScriptTagOptions\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frameaddscripttagoptions.content"},"content?")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," Raw JavaScript content to be injected into the frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frameaddscripttagoptions.path"},"path?")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," The path to a JavaScript file to be injected into the frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frameaddscripttagoptions.type"},"type?")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," Set the script's ",(0,n.kt)("code",null,"type"),". Use ",(0,n.kt)("code",null,"module")," in order to load an ES2015 module.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frameaddscripttagoptions.url"},"url?")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," the URL of the script to be added.")))))}s.isMDXComponent=!0}}]);