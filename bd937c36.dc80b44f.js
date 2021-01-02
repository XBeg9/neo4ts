(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=o(n),m=a,j=s["".concat(c,".").concat(m)]||s[m]||O[m]||b;return n?r.a.createElement(j,l(l({ref:t},p),{},{components:n})):r.a.createElement(j,l({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<b;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),b=(n(0),n(100)),c={id:"noderelation",title:"Class: NodeRelation",sidebar_label:"NodeRelation"},l={unversionedId:"api/classes/noderelation",id:"api/classes/noderelation",isDocsHomePage:!1,title:"Class: NodeRelation",description:"Hierarchy",source:"@site/docs/api/classes/noderelation.md",slug:"/api/classes/noderelation",permalink:"/neo4ts/api/classes/noderelation",editUrl:"https://github.com/XBeg9/neo4ts/edit/master/website/docs/api/classes/noderelation.md",version:"current",sidebar_label:"NodeRelation",sidebar:"someSidebar",previous:{title:"Class: Node",permalink:"/neo4ts/api/classes/node"},next:{title:"Class: NodeStatement",permalink:"/neo4ts/api/classes/nodestatement"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Methods",id:"methods",children:[{value:"getDSL",id:"getdsl",children:[]},{value:"in",id:"in",children:[]},{value:"maxHops",id:"maxhops",children:[]},{value:"minHops",id:"minhops",children:[]},{value:"out",id:"out",children:[]},{value:"type",id:"type",children:[]},{value:"types",id:"types",children:[]},{value:"uni",id:"uni",children:[]},{value:"variable",id:"variable",children:[]}]}],p={toc:i};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"NodeRelation"))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/neo4ts/api/interfaces/querydsl"}),"QueryDSL"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"getdsl"},"getDSL"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getDSL"),"(): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/neo4ts/api/interfaces/querydsl"}),"QueryDSL"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/c31f538/packages/builder/src/node-relation.ts#L66"}),"packages/builder/src/node-relation.ts:66"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"in"},"in"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"in"),"(): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/c31f538/packages/builder/src/node-relation.ts#L27"}),"packages/builder/src/node-relation.ts:27"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"maxhops"},"maxHops"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"maxHops"),"(",Object(b.b)("inlineCode",{parentName:"p"},"hops"),": number): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/c31f538/packages/builder/src/node-relation.ts#L52"}),"packages/builder/src/node-relation.ts:52"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hops")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"minhops"},"minHops"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"minHops"),"(",Object(b.b)("inlineCode",{parentName:"p"},"hops"),": number): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/c31f538/packages/builder/src/node-relation.ts#L47"}),"packages/builder/src/node-relation.ts:47"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hops")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"out"},"out"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"out"),"(): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/c31f538/packages/builder/src/node-relation.ts#L32"}),"packages/builder/src/node-relation.ts:32"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"type"},"type"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"type"),"(",Object(b.b)("inlineCode",{parentName:"p"},"type"),": string): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/c31f538/packages/builder/src/node-relation.ts#L57"}),"packages/builder/src/node-relation.ts:57"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"types"},"types"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"types"),"(",Object(b.b)("inlineCode",{parentName:"p"},"types"),": string[]): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/c31f538/packages/builder/src/node-relation.ts#L61"}),"packages/builder/src/node-relation.ts:61"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"types")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"uni"},"uni"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"uni"),"(): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/c31f538/packages/builder/src/node-relation.ts#L37"}),"packages/builder/src/node-relation.ts:37"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"variable"},"variable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"variable"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": string): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/c31f538/packages/builder/src/node-relation.ts#L42"}),"packages/builder/src/node-relation.ts:42"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"))}o.isMDXComponent=!0}}]);