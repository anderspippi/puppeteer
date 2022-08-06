"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[109500],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),g=n,m=d["".concat(i,".").concat(g)]||d[g]||c[g]||s;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},928626:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var a=r(487462),n=(r(667294),r(603905));const s={sidebar_label:"Page.setExtraHTTPHeaders"},o="Page.setExtraHTTPHeaders() method",p={unversionedId:"api/puppeteer.page.setextrahttpheaders",id:"version-16.1.0/api/puppeteer.page.setextrahttpheaders",title:"Page.setExtraHTTPHeaders() method",description:"The extra HTTP headers will be sent with every request the page initiates. NOTE page.setExtraHTTPHeaders does not guarantee the order of headers in the outgoing requests.",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.page.setextrahttpheaders.md",sourceDirName:"api",slug:"/api/puppeteer.page.setextrahttpheaders",permalink:"/api/puppeteer.page.setextrahttpheaders",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"Page.setExtraHTTPHeaders"},sidebar:"sidebar",previous:{title:"Page.setDragInterception",permalink:"/api/puppeteer.page.setdraginterception"},next:{title:"Page.setGeolocation",permalink:"/api/puppeteer.page.setgeolocation"}},i={},l=[{value:"Parameters",id:"parameters",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pagesetextrahttpheaders-method"},"Page.setExtraHTTPHeaders() method"),(0,n.kt)("p",null,"The extra HTTP headers will be sent with every request the page initiates. NOTE: All HTTP header names are lowercased. (HTTP headers are case-insensitive, so this shouldn\u2019t impact your server code.) NOTE: page.setExtraHTTPHeaders does not guarantee the order of headers in the outgoing requests."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  setExtraHTTPHeaders(headers: Record<string, string>): Promise<void>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"headers"),(0,n.kt)("td",{parentName:"tr",align:null},"Record","<","string, string",">"),(0,n.kt)("td",{parentName:"tr",align:null},"An object containing additional HTTP headers to be sent with every request. All header values must be strings.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"))}c.isMDXComponent=!0}}]);