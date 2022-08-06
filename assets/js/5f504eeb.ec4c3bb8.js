"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[458508],{603905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),o=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=o(a),k=n,c=s["".concat(m,".").concat(k)]||s[k]||u[k]||l;return a?r.createElement(c,p(p({ref:t},d),{},{components:a})):r.createElement(c,p({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},854036:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(487462),n=(a(667294),a(603905));const l={sidebar_label:"Frame"},p="Frame class",i={unversionedId:"api/puppeteer.frame",id:"version-16.0.0/api/puppeteer.frame",title:"Frame class",description:"At every point of time, page exposes its current frame tree via the page.mainFrame and frame.childFrames methods.",source:"@site/versioned_docs/version-16.0.0/api/puppeteer.frame.md",sourceDirName:"api",slug:"/api/puppeteer.frame",permalink:"/16.0.0/api/puppeteer.frame",draft:!1,tags:[],version:"16.0.0",frontMatter:{sidebar_label:"Frame"},sidebar:"sidebar",previous:{title:"FlattenHandle",permalink:"/16.0.0/api/puppeteer.flattenhandle"},next:{title:"Frame.$",permalink:"/16.0.0/api/puppeteer.frame._"}},m={},o=[{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}],d={toc:o};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"frame-class"},"Frame class"),(0,n.kt)("p",null,"At every point of time, page exposes its current frame tree via the ",(0,n.kt)("a",{parentName:"p",href:"/16.0.0/api/puppeteer.page.mainframe"},"page.mainFrame")," and ",(0,n.kt)("a",{parentName:"p",href:"/16.0.0/api/puppeteer.frame.childframes"},"frame.childFrames")," methods."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Frame\n")),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Frame")," object lifecycles are controlled by three events that are all dispatched on the page object:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/16.0.0/api/puppeteer.pageemittedevents"},"PageEmittedEvents.FrameAttached"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/16.0.0/api/puppeteer.pageemittedevents"},"PageEmittedEvents.FrameNavigated"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/16.0.0/api/puppeteer.pageemittedevents"},"PageEmittedEvents.FrameDetached")))),(0,n.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"Frame")," class."),(0,n.kt)("h2",{id:"example-1"},"Example 1"),(0,n.kt)("p",null,"An example of dumping frame tree:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const puppeteer = require('puppeteer');\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com/chrome/browser/canary.html');\n  dumpFrameTree(page.mainFrame(), '');\n  await browser.close();\n\n  function dumpFrameTree(frame, indent) {\n    console.log(indent + frame.url());\n    for (const child of frame.childFrames()) {\n      dumpFrameTree(child, indent + '  ');\n    }\n  }\n})();\n")),(0,n.kt)("h2",{id:"example-2"},"Example 2"),(0,n.kt)("p",null,"An example of getting text from an iframe element:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const frame = page.frames().find(frame => frame.name() === 'myframe');\nconst text = await frame.$eval('.selector', element => element.textContent);\nconsole.log(text);\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame._"},"$(selector)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"This method queries the frame for the given selector.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.__"},"$$(selector)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"This runs ",(0,n.kt)("code",null,"document.querySelectorAll")," in the frame and returns the result.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.__eval"},"$$eval(selector, pageFunction, args)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame._eval"},"$eval(selector, pageFunction, args)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame._x"},"$x(expression)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"This method evaluates the given XPath expression and returns the results.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.addscripttag"},"addScriptTag(options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Adds a ",(0,n.kt)("code",null,"<","script",">")," tag into the page with the desired url or content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.addstyletag"},"addStyleTag(options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Adds a ",(0,n.kt)("code",null,"<","link rel=",'"',"stylesheet",'"',">")," tag into the page with the desired url or a ",(0,n.kt)("code",null,"<","style type=",'"',"text/css",'"',">")," tag with the content.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.childframes"},"childFrames()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.click"},"click(selector, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"This method clicks the first element found that matches ",(0,n.kt)("code",null,"selector"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.content"},"content()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.evaluate"},"evaluate(pageFunction, args)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.evaluatehandle"},"evaluateHandle(pageFunction, args)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.executioncontext"},"executionContext()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.focus"},"focus(selector)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"This method fetches an element with ",(0,n.kt)("code",null,"selector")," and focuses it.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.goto"},"goto(url, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.hover"},"hover(selector)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"This method fetches an element with ",(0,n.kt)("code",null,"selector"),", scrolls it into view if needed, and then uses ",(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.page.mouse"},"Page.mouse")," to hover over the center of the element.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.isdetached"},"isDetached()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.isoopframe"},"isOOPFrame()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.name"},"name()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.page"},"page()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.parentframe"},"parentFrame()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.select"},"select(selector, values)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Triggers a ",(0,n.kt)("code",null,"change")," and ",(0,n.kt)("code",null,"input")," event once all the provided options have been selected.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.setcontent"},"setContent(html, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Set the content of the frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.tap"},"tap(selector)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"This method fetches an element with ",(0,n.kt)("code",null,"selector"),", scrolls it into view if needed, and then uses ",(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.page.touchscreen"},"Page.touchscreen")," to tap in the center of the element.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.title"},"title()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.type"},"type(selector, text, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Sends a ",(0,n.kt)("code",null,"keydown"),", ",(0,n.kt)("code",null,"keypress"),"/",(0,n.kt)("code",null,"input"),", and ",(0,n.kt)("code",null,"keyup")," event for each character in the text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.url"},"url()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.waitforfunction"},"waitForFunction(pageFunction, options, args)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.waitfornavigation"},"waitForNavigation(options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.waitforselector"},"waitForSelector(selector, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.waitfortimeout"},"waitForTimeout(milliseconds)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Causes your script to wait for the given number of milliseconds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/16.0.0/api/puppeteer.frame.waitforxpath"},"waitForXPath(xpath, options)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);