(function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);m&&m(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"9cee7e04"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var m=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("main",[n("router-view")],1),e._m(0)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("a",{attrs:{href:"https:kubapietruszewski.pl"}},[e._v("KubaPietruszewski.pl")])])}],c=n("2877"),i={},s=Object(c["a"])(i,o,a,!1,null,null,null),u=s.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("FormNickname")],1)},p=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Wrapper",attrs:{id:"FormNickname"}},[n("p",[e._v("Type your nickname:")]),n("form",{staticClass:"Item",on:{submit:e.checkForm}},[n("label",{attrs:{for:"nickname"}},[e._v("Nickname:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nickname2,expression:"nickname2"}],attrs:{name:"nickname",type:"text",id:"nickname",placeholder:"Nickname"},domProps:{value:e.nickname2},on:{input:function(t){t.target.composing||(e.nickname2=t.target.value)}}}),e.error?n("p",{staticClass:"Error"},[n("b",[e._v("Please correct the following error:")]),n("br"),e._v(" "+e._s(e.error)+" ")]):e._e(),n("input",{staticClass:"Button",attrs:{type:"submit",value:"Continue"}})])])},d=[],h=n("5530"),v=n("2f62"),k={name:"FormNickname",data:function(){return{nickname2:null,error:null}},computed:Object(h["a"])({},Object(v["d"])(["nickname"])),methods:Object(h["a"])(Object(h["a"])({},Object(v["c"])(["SAVE_NICKNAME"],["RESET"])),{},{checkForm:function(e){this.nickname2&&(this.SAVE_NICKNAME(this.nickname2),this.$router.push({name:"Catcher"})),this.nickname2||(this.error="Nickname is required"),e.preventDefault()}})},b=k,_=Object(c["a"])(b,f,d,!1,null,null,null),O=_.exports,g={name:"Home",components:{FormNickname:O}},P=g,E=Object(c["a"])(P,m,p,!1,null,null,null),w=E.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Wrapper",attrs:{id:"Catcher"}},[n("p",[e._v("Hello, "+e._s(this.nickname)+"!")]),n("p",[e._v("You can catch them!")]),n("div",{staticClass:"Row"},e._l(e.pokes,(function(e){return n("Pokemon",{key:e,attrs:{pokemonUrl:e}})})),1),n("div",{staticClass:"Row"},[n("Catchem")],1)])},j=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Pokemon Item"},[n("img",{attrs:{src:e.single.artwork}}),n("h2",[e._v(e._s(e.single.nameToShow))])])},S=[],N=(n("b0c0"),n("5319"),n("ac1f"),n("d81d"),n("bc3a")),A=n.n(N),M={name:"Pokemon",data:function(){return{pokemon:[],errors:[],single:{name:String,nameToShow:String,artwork:String,stats:[{name:""},{value:0}]}}},methods:{loadData:function(){var e=this;A.a.get(this.pokemonUrl).then((function(t){var n=t.data.stats;e.single.name=t.data.name,e.single.nameToShow=e.single.name.replace("-"," ").toUpperCase(),e.single.artwork=t.data.sprites.other["official-artwork"].front_default,e.single.stats=n.map((function(e){return{name:e.stat.name,value:e.base_stat}})),e.$store.commit("SAVE_POKEMON",e.single)})).catch((function(t){e.errors.push(t)}))}},mounted:function(){this.loadData()},props:{pokemonUrl:String}},x=M,T=Object(c["a"])(x,y,S,!1,null,null,null),K=T.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Catchem"}},[n("button",{on:{click:e.greet}},[e._v("Catch'em!")]),e._v(" "+e._s(e.nickname)+" ")])},H=[],R={name:"Catchem",data:function(){var e=this.nickname;return{nickname:e}},computed:Object(h["a"])({},Object(v["d"])(["savedPokemons"],["nickname"],["catchedPokemons"])),methods:Object(h["a"])(Object(h["a"])({},Object(v["c"])(["CATCH_POKEMON"])),{},{greet:function(){console.clear();for(var e=0;e<this.savedPokemons.length;e++){var t=this.savedPokemons[e];Math.random()>=.5&&this.CATCH_POKEMON(t)}console.log({pokemons:this.catchedPokemons})}})},V=R,F=Object(c["a"])(V,$,H,!1,null,null,null),L=F.exports,I={name:"Catcher",data:function(){return{}},components:{Pokemon:K,Catchem:L},computed:{...Object(v["d"])(["pokes","nickname"])},methods:{...Object(v["b"])(["fetchPokemons"])},mounted(){this.fetchPokemons(this.nickname)}},U=I,D=Object(c["a"])(U,C,j,!1,null,null,null),q=D.exports;r["a"].use(l["a"]);var z=[{path:"/",name:"Home",component:w},{path:"/catcher/:id",name:"Catcher",component:q,props:!0},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],J=new l["a"]({mode:"history",base:"/",routes:z}),W=J,B=n("1da1");n("96cf");r["a"].use(v["a"]);var Y=new v["a"].Store({state:{pokes:[],savedPokemons:[],nickname:"",catchedPokemons:[]},mutations:{SAVE_POKEMON:function(e,t){e.savedPokemons.push(t)},RESET_POKEMONS:function(e){e.savedPokemons=[],e.catchedPokemons=[]},CATCH_POKEMON:function(e,t){e.catchedPokemons.push(t)},SAVE_NICKNAME:function(e,t){e.nickname=t},SAVE_ALL_POKEMONS:function(e,t){e.pokes=t}},actions:{fetchPokemons:function(e,t){return Object(B["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("RESET_POKEMONS"),n.abrupt("return",A.a.get("https://pokeapi.co/api/v2/pokemon?limit=5&offset="+t.length).then((function(t){var n=t.data.results.map((function(e){return e.url}));e.commit("SAVE_ALL_POKEMONS",n)})));case 2:case"end":return n.stop()}}),n)})))()}}});n("e4c9");r["a"].config.productionTip=!1,new r["a"]({router:W,store:Y,render:function(e){return e(u)}}).$mount("#app")},e4c9:function(e,t,n){}});
//# sourceMappingURL=app.59027d97.js.map