"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87834],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(g,p(p({ref:t},c),{},{components:r})):n.createElement(g,p({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},446544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=r(487462),a=(r(667294),r(603905));const l={sidebar_label:"Page.select"},p="Page.select() method",o={unversionedId:"api/puppeteer.page.select",id:"version-16.1.0/api/puppeteer.page.select",title:"Page.select() method",description:"Triggers a change and input event once all the provided options have been selected. If there's no ` element matching selector`, the method throws an error.",source:"@site/versioned_docs/version-16.1.0/api/puppeteer.page.select.md",sourceDirName:"api",slug:"/api/puppeteer.page.select",permalink:"/api/puppeteer.page.select",draft:!1,tags:[],version:"16.1.0",frontMatter:{sidebar_label:"Page.select"},sidebar:"sidebar",previous:{title:"Page.screenshot",permalink:"/api/puppeteer.page.screenshot"},next:{title:"Page.setBypassCSP",permalink:"/api/puppeteer.page.setbypasscsp"}},s={},i=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pageselect-method"},"Page.select() method"),(0,a.kt)("p",null,"Triggers a ",(0,a.kt)("inlineCode",{parentName:"p"},"change")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," event once all the provided options have been selected. If there's no ",(0,a.kt)("inlineCode",{parentName:"p"},"<select>")," element matching ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  select(selector: string, ...values: string[]): Promise<string[]>;\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"A ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"},"Selector")," to query the page for")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"values"),(0,a.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,a.kt)("td",{parentName:"tr",align:null},"Values of options to select. If the ",(0,a.kt)("code",null,"<","select",">")," has the ",(0,a.kt)("code",null,"multiple")," attribute, all values are considered, otherwise only the first one is taken into account.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","string","[","]",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Shortcut for ",(0,a.kt)("a",{parentName:"p",href:"/api/puppeteer.frame.select"},"page.mainFrame().select()")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"page.select('select#colors', 'blue'); // single selection\npage.select('select#colors', 'red', 'green', 'blue'); // multiple selections\n")))}u.isMDXComponent=!0}}]);