(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6xyR":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("TSYQ"),c=a.n(i),o=a("q1tI"),s=a.n(o),l=a("vUet"),u=a("YdCC"),f=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(n.a)({},t,{ref:a,className:c()(t.className,e)}))}))},m=a("Wzyw"),d=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,o=e.variant,u=e.as,f=void 0===u?"img":u,m=Object(r.a)(e,["bsPrefix","className","variant","as"]),d=Object(l.a)(a,"card-img");return s.a.createElement(f,Object(n.a)({ref:t,className:c()(o?d+"-"+o:d,i)},m))}));d.displayName="CardImg",d.defaultProps={variant:null};var p=d,b=f("h5"),g=f("h6"),v=Object(u.a)("card-body"),y=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,u=e.bg,f=e.text,d=e.border,p=e.body,b=e.children,g=e.as,y=void 0===g?"div":g,h=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(l.a)(a,"card"),w=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return s.a.createElement(m.a.Provider,{value:w},s.a.createElement(y,Object(n.a)({ref:t},h,{className:c()(i,x,u&&"bg-"+u,f&&"text-"+f,d&&"border-"+d)}),p?s.a.createElement(v,null,b):b))}));y.displayName="Card",y.defaultProps={body:!1},y.Img=p,y.Title=Object(u.a)("card-title",{Component:b}),y.Subtitle=Object(u.a)("card-subtitle",{Component:g}),y.Body=v,y.Link=Object(u.a)("card-link",{Component:"a"}),y.Text=Object(u.a)("card-text",{Component:"p"}),y.Header=Object(u.a)("card-header"),y.Footer=Object(u.a)("card-footer"),y.ImgOverlay=Object(u.a)("card-img-overlay");t.a=y},IUeL:function(e,t,a){"use strict";t.a="http://52.146.57.246:5000"},PbE3:function(e,t,a){"use strict";a.r(t),a.d(t,"CategoryPage",(function(){return I}));a("VRzm"),a("Btvt"),a("KKXr");var n=a("o0o1"),r=a.n(n),i=(a("OG14"),a("ls82"),a("q1tI")),c=a.n(i),o=a("qhky"),s=a("vOnD"),l=a("boqk"),u=a.n(l),f=a("cr+I"),m=a("BoQL"),d=a("JwsL"),p=a("6xyR"),b=a("cWnB"),g=a("IUeL");function v(e,t,a,n,r,i,c){try{var o=e[i](c),s=o.value}catch(l){return void a(l)}o.done?t(s):Promise.resolve(s).then(n,r)}function y(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function c(e){v(i,n,r,c,o,"next",e)}function o(e){v(i,n,r,c,o,"throw",e)}c(void 0)}))}}function h(){var e=N(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\tmargin: 2rem;\n"]);return h=function(){return e},e}function x(){var e=N(["\n\twidth: 60%;\n\tmargin: 1rem;\n\n\t@media screen and (max-width: 800px) {\n\t\twidth: 80%;\n\t}\n"]);return x=function(){return e},e}function w(){var e=N(['\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-content: center;\n\tfont-family: "Open Sans", sans-serif;\n']);return w=function(){return e},e}function E(){var e=N(['\n\ttext-align: center;\n\tfont-family: "Open Sans", sans-serif;\n\tpadding: 1rem;\n\tfont-weight: 500;\n']);return E=function(){return e},e}function O(){var e=N(['\n\ttext-align: center;\n\tfont-family: "Open Sans", sans-serif;\n\tpadding: 1rem;\n\tfont-weight: 700;\n']);return O=function(){return e},e}function N(e,t){return t||(t=e.slice(0)),e.raw=t,e}var j=s.a.h2(O()),P=s.a.h4(E()),k=s.a.div(w()),_=s.a.div(x()),C=s.a.div(h()),I=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={pageNumber:1,results:[],title:"",nextPage:!0},t.getCategoriesResults=y(r.a.mark((function e(){var a,n,i,c,o,s,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.parse(t.props.location.search),n=a.id,i=n,c=t.state.pageNumber,e.next=5,fetch(g.a+"/api/blog/category/"+i+"/"+c);case 5:return o=e.sent,e.next=8,o.json();case 8:return s=e.sent,e.next=11,fetch(g.a+"/api/blog/category/"+i+"/"+(c+1));case 11:return e.next=13,e.sent.json();case 13:l=e.sent,t.setState({results:s,title:n,nextPage:0!==l.length});case 15:case"end":return e.stop()}}),e)}))),t.getDateLine=function(e){var t=e.split("T")[0].split("-"),a=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"][parseInt(t[1])-1];return t[2]+" "+a+" "+t[0]},t.componentDidMount=function(){t.getCategoriesResults()},t.pageIncrement=function(){t.setState((function(e){return{pageNumber:e.pageNumber+1}}),(function(){t.getCategoriesResults()}))},t.pageDecrement=function(){t.setState((function(e){return{pageNumber:e.pageNumber-1}}),(function(){t.getCategoriesResults()}))},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return c.a.createElement("div",null,c.a.createElement(o.b,null,c.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Playfair+Display:wght@700&display=swap",rel:"stylesheet"}),c.a.createElement("script",{src:"https://kit.fontawesome.com/f0e3875af3.js",crossorigin:"anonymous"})),c.a.createElement(m.a,null),c.a.createElement("br",null),c.a.createElement(j,{id:"category-top"},"Articles on ",this.state.title),0===this.state.results.length?c.a.createElement(P,null,"Oops, No more Articles"):c.a.createElement("div",null,this.state.results.map((function(t){return c.a.createElement(k,{key:t.pk_df_blog_page_id},c.a.createElement(_,null,c.a.createElement(p.a,null,c.a.createElement(p.a.Body,null,c.a.createElement(p.a.Title,{style:{fontWeight:700}},t.blog_headline),c.a.createElement(p.a.Subtitle,{className:"mb-2 text-muted"},"By ",t.user_name," on"," ",e.getDateLine(t.create_timestamp)),c.a.createElement(p.a.Text,null,t.blog_subtitle),c.a.createElement(p.a.Link,{href:"/article?id="+t.pk_df_blog_page_id},"Open Post")))))})),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement(C,null,c.a.createElement(b.a,{variant:"outline-primary",style:{marginRight:"3rem"},onClick:function(){e.pageDecrement(),u()("#category-top")},disabled:1===this.state.pageNumber},c.a.createElement("i",{style:{padding:"0.4rem"},className:"fas fa-arrow-left"}),"Previous Page"," "),c.a.createElement(b.a,{variant:"outline-primary",onClick:function(){u()("#category-top"),e.pageIncrement()},disabled:!this.state.nextPage},"Next Page"," ",c.a.createElement("i",{style:{padding:"0.4rem"},className:"fas fa-arrow-right"}))),c.a.createElement(d.a,null))},n}(c.a.Component);t.default=I},boqk:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e,t){void 0===t&&(t="start");var a=document.querySelector(e);return!!a&&(a.scrollIntoView({behavior:"smooth",block:t}),!0)};t.default=n},cWnB:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("TSYQ"),c=a.n(i),o=a("q1tI"),s=a.n(o),l=a("vUet"),u=a("dbZe"),f=s.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.variant,o=e.size,f=e.active,m=e.className,d=e.block,p=e.type,b=e.as,g=Object(r.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(l.a)(a,"btn"),y=c()(m,v,f&&"active",v+"-"+i,d&&v+"-block",o&&v+"-"+o);if(g.href)return s.a.createElement(u.a,Object(n.a)({},g,{as:b,ref:t,className:c()(y,g.disabled&&"disabled")}));t&&(g.ref=t),b||(g.type=p);var h=b||"button";return s.a.createElement(h,Object(n.a)({},g,{className:y}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"},t.a=f}}]);
//# sourceMappingURL=component---src-pages-category-js-6922e96ccb8d07723905.js.map