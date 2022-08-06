"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68227],{603905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,f=c["".concat(i,".").concat(d)]||c[d]||s[d]||l;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},746801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(487462),n=(r(667294),r(603905));const l={sidebar_label:"Frame.$$eval"},o="Frame.$$eval() method",p={unversionedId:"api/puppeteer.frame.__eval",id:"version-16.1.0/api/puppeteer.frame.__eval",title:"Frame.$$eval() method",description:"Signature:",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.frame.__eval.md",sourceDirName:"api",slug:"/api/puppeteer.frame.__eval",permalink:"/api/puppeteer.frame.__eval",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"Frame.$$eval"},sidebar:"sidebar",previous:{title:"Frame.$$",permalink:"/api/puppeteer.frame.__"},next:{title:"Frame.$eval",permalink:"/api/puppeteer.frame._eval"}},i={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],m={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frameeval-method"},"Frame.$$eval() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Frame {\n  $$eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFunc<\n      [Array<NodeFor<Selector>>, ...Params]\n    > = EvaluateFunc<[Array<NodeFor<Selector>>, ...Params]>\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"selector"),(0,n.kt)("td",{parentName:"tr",align:null},"Selector"),(0,n.kt)("td",{parentName:"tr",align:null},"the selector to query for")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,n.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,n.kt)("td",{parentName:"tr",align:null},"the function to be evaluated in the frame's context")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"args"),(0,n.kt)("td",{parentName:"tr",align:null},"Params"),(0,n.kt)("td",{parentName:"tr",align:null},"additional arguments to pass to ",(0,n.kt)("code",null,"pageFunction"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","Awaited","<","ReturnType","<","Func",">",">",">"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"This method runs ",(0,n.kt)("inlineCode",{parentName:"p"},"Array.from(document.querySelectorAll(selector))")," within the frame and passes it as the first argument to ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction")," returns a Promise, then ",(0,n.kt)("inlineCode",{parentName:"p"},"frame.$$eval")," would wait for the promise to resolve and return its value."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const divsCounts = await frame.$$eval('div', divs => divs.length);\n")))}s.isMDXComponent=!0}}]);