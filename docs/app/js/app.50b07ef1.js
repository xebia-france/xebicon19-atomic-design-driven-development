(function(t){function e(e){for(var n,s,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var o=r[c];0!==a[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/xebicon19-atomic-design-driven-development/app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"375d":function(t,e,r){"use strict";var n=r("4df6"),a=r.n(n);a.a},"44b2":function(t,e,r){"use strict";var n=r("47f6"),a=r.n(n);a.a},"47f6":function(t,e,r){},"4df6":function(t,e,r){},"4e39":function(t,e,r){"use strict";var n=r("d0f8"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app"},[t.atomicMode?r("DiscoverTechTrendsTemplate",{attrs:{"tt-categories":t.ttCategories}}):t._e(),t.atomicMode?t._e():r("MonoliticPage")],1)},i=[],s=(r("96cf"),r("3b8d")),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"discover-tts-template"},[r("h1",{staticClass:"discover-tts-template__title"},[t._v("Great list of available Tech Trends for XebiCon19!")]),t._l(t.ttCategories,(function(t){return r("TechTrendCategory",{key:t.title,staticClass:"discover-tts-template__category",attrs:{"tech-trends":t.techTrends,title:t.title,subtitle:t.subtitle}})}))],2)},o=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"tt-category"},[r("HeaderList",{attrs:{title:t.title,subtitle:t.subtitle}}),r("div",{staticClass:"tt-category__items"},t._l(t.randomTechTrends,(function(e){return r("TechTrendWithTitle",{key:e.title,staticClass:"tt-category__item",attrs:{image:e.image}},[t._v(t._s(e.title)+"\n    ")])})),1)],1)},u=[],d=r("75fc"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-list"},[r("h2",{staticClass:"header-list__title"},[t._v(t._s(t.title))]),r("p",{staticClass:"header-list__subtitle"},[t._v(t._s(t.subtitle))])])},f=[],h={name:"HeaderList",props:{title:{type:String,required:!0},subtitle:{type:String}}},m=h,v=r("2877"),g=Object(v["a"])(m,p,f,!1,null,"102da4e8",null),_=g.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tt-with-title"},[r("TechTrendImage",{staticClass:"tt-with-title__image",attrs:{src:t.image.src,alt:t.image.alt}}),r("p",{staticClass:"tt-with-title__title"},[t._t("default")],2)],1)},T=[],y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{staticClass:"tt-image",attrs:{src:t.src,alt:t.alt}})},C=[],w={name:"TechTrendImage",props:{src:{type:String,required:!0},alt:{type:String}}},O=w,j=(r("44b2"),Object(v["a"])(O,y,C,!1,null,"3d3ae7c4",null)),x=j.exports,M={name:"TechTrendWithTitle",components:{TechTrendImage:x},props:{image:{type:Object,required:!0}}},k=M,S=(r("4e39"),Object(v["a"])(k,b,T,!1,null,"5b6fc9dd",null)),P=S.exports,$=void 0,E={name:"TechTrendCategory",components:{TechTrendWithTitle:P,HeaderList:_},props:{title:{type:String,required:!0},subtitle:{type:String},techTrends:{type:Array,required:!0}},methods:{shuffle:function(t){for(var e=t.length()-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=[t[r],t[e]];t[e]=n[0],t[r]=n[1]}}},computed:{randomTechTrends:function(){return $.shuffle(Object(d["a"])($.techTrends))}}},q=E,R=(r("375d"),Object(v["a"])(q,l,u,!1,null,"0585df4c",null)),D=R.exports,H={name:"DiscoverTechTrendsTemplate",components:{TechTrendCategory:D},props:{ttCategories:{type:Array,required:!0}}},I=H,L=(r("6a53"),Object(v["a"])(I,c,o,!1,null,"761cca4a",null)),W=L.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"discover-tts-template"},[r("h1",{staticClass:"discover-tts-template__title"},[t._v("Great list of available Tech Trends for XebiCon19!")]),t._l(t.ttCategories,(function(e){return r("div",{key:e.title,staticClass:"discover-tts-template__category"},[r("section",{staticClass:"tt-category"},[r("div",{staticClass:"header-list"},[r("h2",{staticClass:"header-list__title"},[t._v(t._s(e.title))]),r("p",{staticClass:"header-list__subtitle"},[t._v(t._s(e.subtitle))])]),r("div",{staticClass:"tt-category__items"},t._l(e.techTrends,(function(e){return r("div",{key:e.title,staticClass:"tt-category__item"},[r("div",{staticClass:"tt-with-title"},[r("div",{staticClass:"tt-with-title__image"},[r("img",{staticClass:"tt-image",attrs:{src:e.image.src,alt:e.image.alt}})]),r("p",{staticClass:"tt-with-title__title"},[t._v(t._s(e.title))])])])})),0)])])}))],2)},G=[],J=r("d225"),X=r("b0b4"),z=r("bc3a"),B=r.n(z),F=function(){function t(){Object(J["a"])(this,t)}return Object(X["a"])(t,[{key:"getTtCategories",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B.a.get("".concat("/xebicon19-atomic-design-driven-development/app/api","/tt-categories.json"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),K=new F,N={name:"MonoliticPage",components:{},data:function(){return{ttCategories:[]}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,K.getTtCategories();case 2:this.ttCategories=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},Q=N,U=(r("a9b3"),Object(v["a"])(Q,A,G,!1,null,"1dfd2a36",null)),V=U.exports,Y={name:"app",components:{DiscoverTechTrendsTemplate:W,MonoliticPage:V},data:function(){return{ttCategories:[],atomicMode:!1}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,K.getTtCategories();case 2:this.ttCategories=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},Z=Y,tt=(r("034f"),Object(v["a"])(Z,a,i,!1,null,null,null)),et=tt.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(et)}}).$mount("#app")},"64a9":function(t,e,r){},"6a53":function(t,e,r){"use strict";var n=r("79d2"),a=r.n(n);a.a},"79d2":function(t,e,r){},a9b3:function(t,e,r){"use strict";var n=r("ee12"),a=r.n(n);a.a},d0f8:function(t,e,r){},ee12:function(t,e,r){}});
//# sourceMappingURL=app.50b07ef1.js.map