(function(e){function t(t){for(var n,o,a=t[0],l=t[1],s=t[2],u=0,b=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,s||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,a=1;a<i.length;a++){var l=i[a];0!==c[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},c={app:0},r=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/nitflix/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"2b36":function(e,t,i){"use strict";i("648c")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("7a23"),c=i("cf05"),r=i.n(c),o=Object(n["d"])("img",{alt:"Vue logo",src:r.a},null,-1),a=Object(n["d"])("div",{class:"header-title"},[Object(n["d"])("h4",null,"Recently Added Movies")],-1),l={class:"uk-position-relative uk-visible-toggle uk-light",tabindex:"-1","uk-slider":""},s={class:"uk-slider-items"},d=Object(n["d"])("a",{class:"uk-position-center-left uk-position-small uk-hidden-hover",href:"#","uk-slidenav-previous":"","uk-slider-item":"previous"},null,-1),u=Object(n["d"])("a",{class:"uk-position-center-right uk-position-small uk-hidden-hover",href:"#","uk-slidenav-next":"","uk-slider-item":"next"},null,-1),b=Object(n["d"])("div",{class:"header-title"},[Object(n["d"])("h4",null,"Trending Movies")],-1),m={class:"uk-position-relative uk-visible-toggle uk-light",tabindex:"-1","uk-slider":""},p={class:"uk-slider-items"},j=Object(n["d"])("a",{class:"uk-position-center-left uk-position-small uk-hidden-hover",href:"#","uk-slidenav-previous":"","uk-slider-item":"previous"},null,-1),O=Object(n["d"])("a",{class:"uk-position-center-right uk-position-small uk-hidden-hover",href:"#","uk-slidenav-next":"","uk-slider-item":"next"},null,-1);function f(e,t,i,c,r,f){var v=Object(n["k"])("CardInfo"),g=Object(n["k"])("Card"),h=Object(n["k"])("Modal");return Object(n["i"])(),Object(n["c"])(n["a"],null,[o,a,Object(n["d"])("div",l,[Object(n["d"])("ul",s,[(Object(n["i"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(f.recent,(function(e){return Object(n["i"])(),Object(n["c"])("li",{key:"card-"+e.id},[Object(n["n"])(Object(n["f"])(v,{movie:e},null,8,["movie"]),[[n["m"],e.id==r.openMovieId]]),Object(n["f"])(g,{onClick:function(t){return f.open(e)},movie:e},null,8,["onClick","movie"])])})),128))]),d,u]),b,Object(n["d"])("div",m,[Object(n["d"])("ul",p,[(Object(n["i"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(f.trending,(function(e){return Object(n["i"])(),Object(n["c"])("li",{key:"card-"+e.id},[Object(n["n"])(Object(n["f"])(v,{movie:e},null,8,["movie"]),[[n["m"],e.id==r.openMovieId]]),Object(n["f"])(g,{onClick:function(t){return f.open(e)},movie:e},null,8,["onClick","movie"])])})),128))]),j,O]),Object(n["f"])(h,{movie:r.movie_details},null,8,["movie"])],64)}i("4de4"),i("c740");var v={class:"uk-card"},g={class:"uk-card-media"},h=["src"];function k(e,t,i,c,r,o){return Object(n["i"])(),Object(n["c"])("div",v,[Object(n["d"])("div",g,[Object(n["d"])("img",{src:"https://picsum.photos/id/".concat(i.movie.id,"/300/200"),alt:""},null,8,h)])])}var y={props:{movie:Object},mounted:function(){}};i("2b36");y.render=k;var x=y,A={class:"card-info"},M={class:"uk-card-media"},T=["src"],w={class:"movie-title"},S={class:"card-body"},C={class:"card-buttons"},I={class:"info"},z={class:"rating"},P={class:"info tags"};function R(e,t,i,c,r,o){var a=Object(n["k"])("Fab");return Object(n["i"])(),Object(n["c"])("div",A,[Object(n["d"])("div",M,[Object(n["d"])("img",{src:"https://picsum.photos/id/".concat(i.movie.id,"/300/200"),alt:""},null,8,T),Object(n["d"])("h3",w,Object(n["l"])(i.movie.title),1)]),Object(n["d"])("div",S,[Object(n["d"])("div",C,[Object(n["f"])(a,{name:"play",size:"40px"}),Object(n["f"])(a,{name:"plus",size:"40px"}),Object(n["f"])(a,{onClick:o.openModal,class:"uk-float-right",name:"chevron-down",size:"40px"},null,8,["onClick"])]),Object(n["d"])("div",I,[Object(n["d"])("p",z,Object(n["l"])(i.movie.rating),1),Object(n["d"])("p",null,Object(n["l"])(i.movie.time),1)]),Object(n["d"])("div",P,[(Object(n["i"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(i.movie.tags,(function(e){return Object(n["i"])(),Object(n["c"])("p",{key:"tag-"+e},Object(n["l"])(e),1)})),128))])])])}i("b0c0");var _=["uk-icon"];function F(e,t,i,c,r,o){return Object(n["i"])(),Object(n["c"])("button",{class:Object(n["g"])(["fab",{dark:i.dark}]),style:Object(n["h"])({width:i.size,height:i.size})},[Object(n["d"])("span",{"uk-icon":i.name},null,8,_)],6)}var H={props:["name","size","dark"]};i("c125");H.render=F;var q=H,D=i("8323"),B=i.n(D),E={components:{Fab:q},props:{movie:Object},mounted:function(){},methods:{openModal:function(){B.a.modal("#modal-center").show()}}};i("f686");E.render=R;var J=E,V={id:"modal-center",class:"uk-flex-top uk-modal","uk-modal":""},G={class:"uk-modal-dialog uk-margin-auto-vertical"},L=Object(n["d"])("button",{class:"uk-modal-close-default",type:"button","uk-close":""},null,-1),U={class:"media-top"},K=["src"],N={class:"movie-title"},Q=Object(n["d"])("div",{class:"dark-fade-overlay"},null,-1),W={class:"modal-buttons"},X=Object(n["d"])("button",{class:"uk-button uk-button-default"},[Object(n["d"])("span",{"uk-icon":"play"}),Object(n["e"])(" Play")],-1),Y={class:"uk-container content-info"},Z={class:"uk-grid"},$={class:"uk-width-2-3"},ee={class:"info"},te={class:"rating"},ie=Object(n["d"])("p",{class:"description"},"Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit.",-1),ne={class:"uk-width-1-3"},ce={class:"more-info"},re=Object(n["d"])("span",{class:"title"},"Tags:",-1);function oe(e,t,i,c,r,o){var a=Object(n["k"])("Fab");return Object(n["i"])(),Object(n["c"])("div",V,[Object(n["d"])("div",G,[L,Object(n["d"])("div",U,[Object(n["d"])("img",{src:"https://picsum.photos/id/".concat(i.movie.id||1,"/800/500"),alt:"","uk-img":""},null,8,K),Object(n["d"])("h1",N,Object(n["l"])(i.movie.title),1),Q,Object(n["d"])("div",W,[X,Object(n["f"])(a,{name:"plus",dark:!0,size:"40px"}),Object(n["f"])(a,{name:"check",dark:!0,size:"40px"}),Object(n["f"])(a,{name:"close",dark:!0,size:"40px"})])]),Object(n["d"])("div",Y,[Object(n["d"])("div",Z,[Object(n["d"])("div",$,[Object(n["d"])("div",ee,[Object(n["d"])("p",te,Object(n["l"])(i.movie.rating),1),Object(n["d"])("p",null,Object(n["l"])(i.movie.time),1)]),ie]),Object(n["d"])("div",ne,[Object(n["d"])("p",ce,[re,(Object(n["i"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(i.movie.tags,(function(e){return Object(n["i"])(),Object(n["c"])("span",{key:"tag-"+e},Object(n["l"])(e),1)})),128))])])])])])])}var ae={components:{Fab:q},props:["movie"]};i("b3d2");ae.render=oe;var le=ae,se={name:"App",components:{Card:x,Modal:le,CardInfo:J},mounted:function(){var e=this,t=document.getElementById("app"),i=document.querySelector("[uk-slider]");t.addEventListener("click",(function(t){t.target.contains(i)&&(e.openMovieId=null)}))},data:function(){return{movies:[{id:721,title:"Interstellar",rating:"16+",time:"2h 1m",tags:["Asian Action","Suspense","recent"]},{id:782,title:"Silence",rating:"18+",time:"1h 30m",tags:["Action","Thriller","recent"]},{id:783,title:"Monkey",rating:"16+",time:"2h 1m",tags:["Asian","Suspense","recent"]},{id:784,title:"The Field",rating:"18+",time:"1h 30m",tags:["Action","Horror","recent"]},{id:785,title:"Plants",rating:"16+",time:"2h 1m",tags:["Asian Action","Romance","recent"]},{id:786,title:"Forest",rating:"18+",time:"1h 30m",tags:["Romance","Thriller","recent"]},{id:787,title:"The Sea",rating:"16+",time:"2h 1m",tags:["Asian","Suspense","recent"]},{id:788,title:"The Ocean",rating:"18+",time:"1h 30m",tags:["Horror","Romance","recent"]},{id:789,title:"Cactus 3",rating:"16+",time:"2h 1m",tags:["Horror","Thriller","recent"]},{id:780,title:"Mountain",rating:"18+",time:"1h 30m",tags:["Romance","Thriller","recent"]},{id:791,title:"The Canyon",rating:"16+",time:"2h 1m",tags:["Asian Action","Suspense","trending"]},{id:790,title:"The Deer",rating:"18+",time:"1h 30m",tags:["Action","Thriller","trending"]},{id:793,title:"The Cross",rating:"16+",time:"2h 1m",tags:["Asian","Suspense","trending"]},{id:794,title:"Mountain",rating:"18+",time:"1h 30m",tags:["Action","Horror","trending"]},{id:795,title:"Mountain 2",rating:"16+",time:"2h 1m",tags:["Asian Action","Romance","trending"]},{id:796,title:"Dune",rating:"18+",time:"1h 30m",tags:["Romance","Thriller","trending"]},{id:797,title:"Umbrella",rating:"16+",time:"2h 1m",tags:["Asian","Suspense","trending"]},{id:798,title:"Flower",rating:"18+",time:"1h 30m",tags:["Horror","Romance","trending"]},{id:799,title:"Bridge",rating:"16+",time:"2h 1m",tags:["Horror","Thriller","trending"]},{id:760,title:"Tower Girl",rating:"18+",time:"1h 30m",tags:["Romance","Thriller","trending"]}],movie_details:{id:721,title:"Interstellar",rating:"16+",time:"2h 1m",tags:["Asian Action","Suspense","recent"]},openMovieId:null}},computed:{recent:function(){return this.movies.filter((function(e){return e.tags.findIndex((function(e){return"recent"==e}))>-1}))},trending:function(){return this.movies.filter((function(e){return e.tags.findIndex((function(e){return"trending"==e}))>-1}))}},methods:{open:function(e){this.openMovieId=e.id,this.movie_details=e}}};i("c2e4");se.render=f;var de=se,ue=i("263c"),be=i.n(ue);B.a.use(be.a),Object(n["b"])(de).mount("#app")},"648c":function(e,t,i){},"8e0e":function(e,t,i){},ada3:function(e,t,i){},b3d2:function(e,t,i){"use strict";i("ada3")},c125:function(e,t,i){"use strict";i("f593")},c2e4:function(e,t,i){"use strict";i("ecfb")},cf05:function(e,t,i){e.exports=i.p+"img/logo.ff7d77a5.png"},ecfb:function(e,t,i){},f593:function(e,t,i){},f686:function(e,t,i){"use strict";i("8e0e")}});
//# sourceMappingURL=app.c8509e94.js.map