(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),m=a,u=l["".concat(i,".").concat(m)]||l[m]||d[m]||c;return r?n.a.createElement(u,o(o({ref:t},b),{},{components:r})):n.a.createElement(u,o({ref:t},b))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=r[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),c=(r(0),r(100)),i={id:"nodewithparam",title:"Class: NodeWithParam",sidebar_label:"NodeWithParam"},o={unversionedId:"api/classes/nodewithparam",id:"api/classes/nodewithparam",isDocsHomePage:!1,title:"Class: NodeWithParam",description:"Hierarchy",source:"@site/docs/api/classes/nodewithparam.md",slug:"/api/classes/nodewithparam",permalink:"/neo4ts/api/classes/nodewithparam",editUrl:"https://github.com/XBeg9/neo4ts/edit/master/website/docs/api/classes/nodewithparam.md",version:"current",sidebar_label:"NodeWithParam",sidebar:"someSidebar",previous:{title:"Class: NodeStatementError",permalink:"/neo4ts/api/classes/nodestatementerror"},next:{title:"Class: OptionalMatch",permalink:"/neo4ts/api/classes/optionalmatch"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Methods",id:"methods",children:[{value:"getDSL",id:"getdsl",children:[]},{value:"nodes",id:"nodes",children:[]}]}],b={toc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"NodeWithParam")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/neo4ts/api/classes/orderby"}),"OrderBy")),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/neo4ts/api/classes/return"}),"Return")))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/neo4ts/api/interfaces/querydsl"}),"QueryDSL"))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"getdsl"},"getDSL"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getDSL"),"(): string"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Implementation of ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/neo4ts/api/interfaces/querydsl"}),"QueryDSL"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/661d68c/packages/builder/src/node-with-param.ts#L17"}),"packages/builder/src/node-with-param.ts:17"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," string"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"nodes"},"nodes"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"nodes"),"(",Object(c.b)("inlineCode",{parentName:"p"},"nodes"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/neo4ts/api/interfaces/nodewithproperty"}),"NodeWithProperty")," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/neo4ts/api/interfaces/nodewithproperty"}),"NodeWithProperty"),"[]): this"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/661d68c/packages/builder/src/node-with-param.ts#L12"}),"packages/builder/src/node-with-param.ts:12"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"nodes")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/neo4ts/api/interfaces/nodewithproperty"}),"NodeWithProperty")," ","|"," ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/neo4ts/api/interfaces/nodewithproperty"}),"NodeWithProperty"),"[]")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," this"))}s.isMDXComponent=!0}}]);