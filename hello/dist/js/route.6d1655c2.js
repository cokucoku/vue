(function(t){function e(e){for(var o,a,i=e[0],c=e[1],l=e[2],p=0,s=[];p<i.length;p++)a=i[p],r[a]&&s.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(s.length)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={route:0},u=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=c;u.push([18,"chunk-vendors"]),n()})({18:function(t,e,n){t.exports=n("d307")},3095:function(t,e,n){},5812:function(t,e,n){"use strict";var o=n("3095"),r=n.n(o);r.a},"5f9a":function(t,e,n){},"82ef":function(t,e,n){"use strict";var o=n("5f9a"),r=n.n(o);r.a},d307:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"routeapp"}},[t._m(0),n("routecon")],1)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[n("li",[n("a",{attrs:{href:"#"}},[t._v("Home")])]),n("li",[n("a",{attrs:{href:"#about"}},[t._v("About")])]),n("li",[n("a",{attrs:{href:"#todo"}},[t._v("Todo")])]),n("li",[n("a",{attrs:{href:"#othertodo"}},[t._v("Othertodo")])])])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"con"}},[t._v("dfdf")])},i=[],c=n("1157"),l=n.n(c),f={template:"<p>Page not found</p>"},p={template:"<p>home page</p>"},s={template:"<p>about page</p>"},d={template:"<p>todo page</p>"},v={template:"<p>othertodo page</p>"},h={no:f,"":p,"#about":s,"#todo":d,"#othertodo":v},m={data:function(){return{currentRoute:window.location.hash}},computed:{ViewComponent:function(){return h[this.currentRoute]||f}},mounted:function(){var t=this;window.addEventListener("hashchange",function(){function e(e){l()(t.$el).removeClass("move")}t.currentRoute=window.location.hash,l()(t.$el).addClass("move"),l()(t.$el).html(t.ViewComponent.template),setTimeout(e,400)})}},b=m,_=(n("82ef"),n("2877")),g=Object(_["a"])(b,a,i,!1,null,null,null);g.options.__file="routecon.vue";var w=g.exports,y={components:{routecon:w}},O=y,j=(n("5812"),Object(_["a"])(O,r,u,!1,null,"a805749c",null));j.options.__file="route.vue";var x=j.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(x)}}).$mount("#app")}});
//# sourceMappingURL=route.6d1655c2.js.map