"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[560769],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||p;return r?a.createElement(g,i(i({ref:t},u),{},{components:r})):a.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},451854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var a=r(487462),n=(r(667294),r(603905));const p={sidebar_label:"Page.setViewport"},i="Page.setViewport() method",o={unversionedId:"api/puppeteer.page.setviewport",id:"version-16.0.0/api/puppeteer.page.setviewport",title:"Page.setViewport() method",description:"page.setViewport will resize the page. A lot of websites don't expect phones to change size, so you should set the viewport before navigating to the page.",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.page.setviewport.md",sourceDirName:"api",slug:"/api/puppeteer.page.setviewport",permalink:"/16.0.0/api/puppeteer.page.setviewport",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"Page.setViewport"},sidebar:"sidebar",previous:{title:"Page.setUserAgent",permalink:"/16.0.0/api/puppeteer.page.setuseragent"},next:{title:"Page.tap",permalink:"/16.0.0/api/puppeteer.page.tap"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pagesetviewport-method"},"Page.setViewport() method"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"page.setViewport")," will resize the page. A lot of websites don't expect phones to change size, so you should set the viewport before navigating to the page."),(0,n.kt)("p",null,"In the case of multiple pages in a single browser, each page can have its own viewport size."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  setViewport(viewport: Viewport): Promise<void>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"viewport"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.viewport"},"Viewport")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"Argument viewport have following properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"width"),": page width in pixels. required")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"height"),": page height in pixels. required")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"deviceScaleFactor"),": Specify device scale factor (can be thought of as DPR). Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"isMobile"),": Whether the meta viewport tag is taken into account. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"hasTouch"),": Specifies if viewport supports touch events. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"isLandScape"),": Specifies if viewport is in landscape mode. Defaults to false."))),(0,n.kt)("p",null,"NOTE: in certain cases, setting viewport will reload the page in order to set the isMobile or hasTouch properties."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const page = await browser.newPage();\nawait page.setViewport({\n  width: 640,\n  height: 480,\n  deviceScaleFactor: 1,\n});\nawait page.goto('https://example.com');\n")))}c.isMDXComponent=!0}}]);