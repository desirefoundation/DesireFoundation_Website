_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,o=void 0!==i&&i;return n||a&&o}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";var r=n("lSNA");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(i=n("Xuae"))&&i.__esModule?i:{default:i},s=n("lwAK"),d=n("FYa8"),l=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var s=0,d=m.length;s<d;s++){var l=m[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var u=a.props[l],f=r[l]||new Set;"name"===l&&o||!f.has(u)?(f.add(u),r[l]=f):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,o.default.cloneElement(e,c)}return o.default.cloneElement(e,{key:i})}))}function b(e){var t=e.children,n=(0,o.useContext)(s.AmpStateContext),r=(0,o.useContext)(d.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}b.rewind=function(){};var j=b;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Pecq:function(e,t){e.exports="/_next/static/images/jumbotron-b9a7f8ec39b93d21d208b355e222fd92.jpg"},"RAs/":function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||i(e)||o()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return G})),n.d(t,"default",(function(){return ee}));var r=n("nKUr"),a=n("vOnD"),i=n("g4pe"),o=n.n(i),c=n("RKfv"),s=n("q1tI"),d=n.n(s),l=n("Pecq"),u=n.n(l),f=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"p-10 bg-cover bg-center",style:{backgroundImage:'url("'.concat(u.a,'")')},children:Object(r.jsxs)("div",{className:"bg-white h-full p-7 w-full lg:w-3/12",children:[Object(r.jsx)("p",{className:"font-display text-3xl pr-10 sm:",children:"On a mission to bring quality education to blighted areas"}),Object(r.jsx)("hr",{className:"my-5 w-2/3 border-solid border-1 border-black"}),Object(r.jsxs)("div",{className:"flex-row text-3xl pt-4",children:[Object(r.jsx)("a",{href:"https://www.facebook.com/thedesirefoundation/",children:Object(r.jsx)("i",{className:"fab fa-facebook mr-7"})}),Object(r.jsx)("a",{href:"https://www.instagram.com/desirefoundation/",children:Object(r.jsx)("i",{className:"fab fa-instagram mr-7"})}),Object(r.jsx)("a",{href:"https://twitter.com/DesireFoundatn",children:Object(r.jsx)("i",{className:"fab fa-twitter"})})]})]})})})},p=n("naWs"),m=n("YFqc"),h=n.n(m),b=n("RAs/"),j=n("hVfy"),g=n("TSYQ"),x=n.n(g),O=n("17x9"),v=n.n(O),_=n("vUet"),y=(v.a.string,v.a.bool,v.a.bool,v.a.bool,v.a.bool,d.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.fluid,i=e.rounded,o=e.roundedCircle,c=e.thumbnail,s=Object(j.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);n=Object(_.a)(n,"img");var l=x()(a&&n+"-fluid",i&&"rounded",o&&"rounded-circle",c&&n+"-thumbnail");return d.a.createElement("img",Object(b.a)({ref:t},s,{className:x()(r,l)}))})));y.displayName="Image",y.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var w=y,N=a.a.div.withConfig({displayName:"EPBigCard__CardContainer",componentId:"x0dn6h-0"})(["width:25rem;margin-right:1.2rem;@media screen and (max-width:1000px){width:100%;}.title{font-size:1.4rem;}.author{font-size:0.9rem;font-weight:700;}.timestamp{font-size:0.7rem;}"]),C=function(e){var t=e.split("T")[0].split("-"),n=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"][parseInt(t[1])-1];return"".concat(t[2]," ").concat(n," ").concat(t[0])},P=function(e){var t=e.title,n=e.author,a=e.timestamp,i=e.id,o=e.header_img;return Object(r.jsx)("div",{children:Object(r.jsx)(h.a,{href:"/article/".concat(i,".html"),style:{color:"black",textDecoration:"none"},children:Object(r.jsxs)(N,{className:"cursor-pointer",children:[Object(r.jsx)(w,{src:o,fluid:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h5",{className:"title",children:t}),Object(r.jsx)("h6",{className:"author",children:n}),Object(r.jsx)("p",{className:"timestamp",children:C(a)})]})})})},k=a.a.div.withConfig({displayName:"EPSmallCard__CardContainer",componentId:"vstyrg-0"})(["margin:0.3rem;.title{font-size:1.3rem;}.author{font-size:0.8rem;}.timestamp{font-size:0.6rem;}"]),I=function(e){var t=e.split("T")[0].split("-"),n=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"][parseInt(t[1])-1];return"".concat(t[2]," ").concat(n," ").concat(t[0])},M=function(e){var t=e.title,n=e.author,a=e.timestamp,i=e.id,o=e.header_img;return Object(r.jsx)("div",{children:Object(r.jsx)(h.a,{href:"/article/".concat(i,".html"),style:{color:"black",textDecoration:"none"},children:Object(r.jsx)(k,{className:"cursor-pointer",children:Object(r.jsxs)("div",{className:"flex flex-row justify-start",children:[Object(r.jsx)("img",{className:"mr-3 w-20 object-cover",src:o,alt:"Header Image"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h5",{className:"title",children:t}),Object(r.jsx)("h6",{className:"author",children:Object(r.jsx)("b",{children:n})}),Object(r.jsx)("p",{className:"timestamp",children:I(a)}),Object(r.jsx)("br",{})]})]})})})})},S=a.a.p.withConfig({displayName:"EditorsPicks__EditorsPickHeader",componentId:"sc-36u512-0"})(["font-weight:700;margin-bottom:1.5rem;padding-top:2rem;"]),A=a.a.div.withConfig({displayName:"EditorsPicks__EPContainer",componentId:"sc-36u512-1"})(["display:flex;flex-direction:row;flex-wrap:wrap;"]),R=a.a.div.withConfig({displayName:"EditorsPicks__EPSmallCardContainer",componentId:"sc-36u512-2"})(["display:flex;flex-direction:column;flex-wrap:wrap;width:22rem;@media screen and (max-width:800px){width:90%;margin-top:3rem}"]),D=function(e){var t=e.data.filter((function(e,t){return 0!==t}));return Object(r.jsxs)("div",{className:"font-sans",children:[Object(r.jsx)(S,{className:"text-3xl font-sans",children:"Editor's Pick"}),Object(r.jsxs)(A,{children:[Object(r.jsx)(P,{title:e.data[0].blog_headline,author:e.data[0].user_name,timestamp:e.data[0].create_timestamp,id:e.data[0].pk_df_blog_page_id,header_img:e.data[0].header_img_path}),Object(r.jsx)(R,{children:t.map((function(e){return Object(r.jsx)(M,{title:e.blog_headline,author:e.user_name,timestamp:e.create_timestamp,id:e.pk_df_blog_page_id,header_img:e.header_img_path},e.pk_df_blog_page_id)}))})]})]})},E=a.a.div.withConfig({displayName:"RecentsCard__RecentsCardContainer",componentId:"suwchr-0"})(["display:flex;flex-direction:row;width:100%;"]),J=a.a.h1.withConfig({displayName:"RecentsCard__RecentsCardNumber",componentId:"suwchr-1"})(["font-size:3.5rem;font-weight:700;color:#80cbc4;"]),T=a.a.p.withConfig({displayName:"RecentsCard__RecentsArticleTitle",componentId:"suwchr-2"})(["margin-top:0.55rem;margin-left:0.6rem;"]),q=a.a.p.withConfig({displayName:"RecentsCard__RecentsAuthorName",componentId:"suwchr-3"})(["font-size:0.9rem;margin-left:0.6rem;margin-bottom:0rem;font-weight:700;"]),F=a.a.p.withConfig({displayName:"RecentsCard__RecentsDateAndReadingTime",componentId:"suwchr-4"})(["font-size:0.7rem;margin-left:0.6rem;"]),H=function(e){var t=e.split("T")[0].split("-"),n=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"][parseInt(t[1])-1];return"".concat(t[2]," ").concat(n," ").concat(t[0])},z=function(e){var t=e.index,n=e.title,a=e.author,i=e.timestamp,o=e.blog_id;return Object(r.jsxs)(E,{children:[Object(r.jsx)(J,{className:"font-sans",children:t}),Object(r.jsx)(h.a,{href:"/article/".concat(o,".html"),style:{color:"black",textDecoration:"none"},children:Object(r.jsxs)("div",{className:"cursor-pointer",children:[Object(r.jsx)(T,{className:"text-xl font-sans",children:n}),Object(r.jsx)(q,{children:a}),Object(r.jsx)(F,{children:H(i)})]})})]})},B=a.a.p.withConfig({displayName:"Recents__RecentsContainer",componentId:"we2m8z-0"})(["width:30%;@media screen and (max-width:800px){width:100%;}"]),W=a.a.h3.withConfig({displayName:"Recents__RecentsHeader",componentId:"we2m8z-1"})(['font-family:"Open Sans",sans;font-weight:700;margin-bottom:1rem;padding-top:2rem;']),Y=function(e){return Object(r.jsxs)(B,{children:[Object(r.jsx)(W,{className:"text-3xl font-sans",children:"Recent Posts"}),Object(r.jsx)("div",{children:e.data.map((function(e,t){return Object(r.jsx)(z,{index:t+1,title:e.blog_headline,author:e.user_name,timestamp:e.create_timestamp,blog_id:e.pk_df_blog_page_id},t)}))}),Object(r.jsx)("br",{}),Object(r.jsx)(h.a,{href:"/recents",children:Object(r.jsx)("b",{className:"text-blue-600 cursor-pointer",children:"Read More..."})})]})},K=function(e){var t=e.split("T")[0].split("-"),n=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"][parseInt(t[1])-1];return"".concat(t[2]," ").concat(n," ").concat(t[0])},U=function(e){var t=e.title,n=e.author,a=e.timestamp,i=e.blog_id,o=e.header_img;return Object(r.jsx)("div",{className:"pr-3",children:Object(r.jsx)(h.a,{href:"/article/".concat(i,".html"),className:"no-underline text-black font-sans",children:Object(r.jsxs)("div",{className:"shadow rounded-lg cursor-pointer h-full",children:[Object(r.jsx)("img",{src:o,className:"object-cover w-full rounded-t-lg h-56"}),Object(r.jsxs)("div",{className:"p-3",children:[Object(r.jsx)("h3",{className:"font-bold",children:t}),Object(r.jsxs)("p",{children:[n," ",Object(r.jsx)("br",{})," ",K(a)]})]})]})})})},V=a.a.div.withConfig({displayName:"Section__SectionCardContainer",componentId:"sc-1hmfx02-0"})(["display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:auto;grid-gap:1rem;padding:1.6rem 3rem 1rem 3rem;@media screen and (max-width:800px){grid-template-columns:repeat(1,1fr);padding:2rem;}"]),X=a.a.p.withConfig({displayName:"Section__SectionTitle",componentId:"sc-1hmfx02-1"})(["font-weight:700;padding:0 0 0 3rem;margin:0;@media screen and (max-width:800px){padding:0 0 0 2rem;}"]),Z=a.a.div.withConfig({displayName:"Section__LinkContainer",componentId:"sc-1hmfx02-2"})(["font-weight:700;margin-top:0.4rem;padding-left:3rem;@media screen and (max-width:800px){padding:0 0 0 2rem;}"]),Q=function(e){return Object(r.jsxs)("div",{className:"font-sans",children:[Object(r.jsx)(X,{className:"text-3xl",children:e.title}),Object(r.jsx)(V,{children:e.data.map((function(e){return Object(r.jsx)(U,{title:e.blog_headline,author:e.user_name,timestamp:e.create_timestamp,blog_id:e.pk_df_blog_page_id,header_img:e.header_img_path},e.pk_df_blog_page_id)}))}),Object(r.jsx)(Z,{className:"text-blue-700",children:Object(r.jsx)(h.a,{href:"/category/".concat(e.title),children:"Read More ..."})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{})]})},L=a.a.div.withConfig({displayName:"pages__EPAndRecentsContainer",componentId:"sc-1rfppha-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;padding:2rem;@media screen and (max-width:1000px){justify-content:flex-start;}"]),$=a.a.div.withConfig({displayName:"pages__SectionContainer",componentId:"sc-1rfppha-1"})(["display:flex;justify-content:flex-start;"]),G=!0;function ee(e){var t=e.articleData;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:"Blog - Desire Foundation"}),Object(r.jsx)("meta",{name:"og:title",content:"Blog - Desire Foundation"}),Object(r.jsx)("meta",{name:"og:type",content:"article"}),Object(r.jsx)("meta",{name:"og:url",content:"http://blog.desirefoundation.org"}),Object(r.jsx)("meta",{name:"og:image",content:"http://desirefoundation.org/img/Vision.jpg"}),Object(r.jsx)("meta",{name:"og:site_name",content:"Blog - Desire Foundation"}),Object(r.jsx)("meta",{name:"og:description",content:"The official Blog of Desire Foundation"}),Object(r.jsx)("meta",{name:"twitter:title",content:"Blog - Desire Foundation"}),Object(r.jsx)("meta",{name:"twitter:description",content:"The official Blog of Desire Foundation"}),Object(r.jsx)("meta",{name:"twitter:image",content:"http://desirefoundation.org/img/Vision.jpg"}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),Object(r.jsx)(c.a,{}),Object(r.jsx)(f,{}),Object(r.jsxs)(L,{children:[Object(r.jsx)(D,{data:t.editorsPick}),Object(r.jsx)(Y,{data:t.recents})]}),Object(r.jsx)("br",{}),Object.keys(t.sections).map((function(e,n){return Object(r.jsx)($,{children:Object(r.jsx)(Q,{title:e,data:t.sections[e]})},n)})),Object(r.jsx)(p.a,{})]})}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),i=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),u=function(e){o(n,e);var t=d(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=u},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},hVfy:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("RAs/");var r=n("q1tI"),a=n.n(r),i=a.a.createContext({});i.Consumer,i.Provider;function o(e,t){var n=Object(r.useContext)(i);return e||n[t]||t}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);