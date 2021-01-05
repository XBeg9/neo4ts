(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),i=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=i(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),o=i(a),O=n,m=o["".concat(c,".").concat(O)]||o[O]||d[O]||b;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<b;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return i}));var n=a(3),r=a(7),b=(a(0),a(101)),c={id:"match",title:"Class: Match",sidebar_label:"Match"},l={unversionedId:"api/classes/match",id:"api/classes/match",isDocsHomePage:!1,title:"Class: Match",description:"The MATCH clause is used to search for the pattern described in it.",source:"@site/docs/api/classes/match.md",slug:"/api/classes/match",permalink:"/neo4ts/api/classes/match",editUrl:"https://github.com/XBeg9/neo4ts/edit/master/website/docs/api/classes/match.md",version:"current",sidebar_label:"Match",sidebar:"someSidebar",previous:{title:"Class: ExistsOperator",permalink:"/neo4ts/api/classes/existsoperator"},next:{title:"Class: MaxHopsError",permalink:"/neo4ts/api/classes/maxhopserror"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Methods",id:"methods",children:[{value:"getDSL",id:"getdsl",children:[]},{value:"nested",id:"nested",children:[]},{value:"node",id:"node",children:[]},{value:"nodes",id:"nodes",children:[]},{value:"related",id:"related",children:[]}]}],s={toc:p};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The MATCH clause is used to search for the pattern described in it."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"MatchBase"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"Match")))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/neo4ts/api/interfaces/querydsl"}),"QueryDSL"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"getdsl"},"getDSL"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getDSL"),"(): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/neo4ts/api/interfaces/querydsl"}),"QueryDSL"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/a4e94e6/packages/builder/src/match.ts#L70"}),"packages/builder/src/match.ts:70"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nested"},"nested"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"nested"),"(",Object(b.b)("inlineCode",{parentName:"p"},"n"),": boolean): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/a4e94e6/packages/builder/src/match.ts#L65"}),"packages/builder/src/match.ts:65"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"n")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"node"},"node"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"node"),"(",Object(b.b)("inlineCode",{parentName:"p"},"node"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/neo4ts/api/classes/node"}),"Node"),"): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/a4e94e6/packages/builder/src/match.ts#L26"}),"packages/builder/src/match.ts:26"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"node")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/neo4ts/api/classes/node"}),"Node"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nodes"},"nodes"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"nodes"),"(",Object(b.b)("inlineCode",{parentName:"p"},"nodes"),": Array<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/neo4ts/api/classes/node"}),"Node")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/neo4ts/api/classes/noderelation"}),"NodeRelation"),">","): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/a4e94e6/packages/builder/src/match.ts#L21"}),"packages/builder/src/match.ts:21"))),Object(b.b)("p",null,"Add nodes to be added into MATCH clause"),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"nodes")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/neo4ts/api/classes/node"}),"Node")," ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/neo4ts/api/classes/noderelation"}),"NodeRelation"),">"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nodes to be matched")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"related"},"related"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"related"),"(",Object(b.b)("inlineCode",{parentName:"p"},"related"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/neo4ts/api/classes/noderelation"}),"NodeRelation"),"): this"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from void")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/XBeg9/neo4ts/blob/a4e94e6/packages/builder/src/match.ts#L30"}),"packages/builder/src/match.ts:30"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"related")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/neo4ts/api/classes/noderelation"}),"NodeRelation"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," this"))}i.isMDXComponent=!0}}]);