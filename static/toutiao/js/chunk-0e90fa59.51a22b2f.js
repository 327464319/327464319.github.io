(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e90fa59"],{"02c6":function(t,e,n){"use strict";var a=n("04aa"),r=n.n(a);r.a},"04aa":function(t,e,n){},2423:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var a=n("b775"),r=function(t){return a["a"].get("/app/v1_1/articles",{params:t})},i=function(t){return a["a"].get("/app/v1_0/articles/".concat(t))}},2432:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-container"},[n("van-nav-bar",{attrs:{fixed:""}}),n("div",{staticClass:"search",on:{click:t.search}},[t._m(0)]),n("div",{staticClass:"footer"},[n("van-tabs",{attrs:{animated:"",swipeable:"","swipe-threshold":"3"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.channels,(function(t){return n("van-tab",{key:t.id,attrs:{title:t.name}},[n("home-list",{attrs:{aId:t.id}})],1)})),n("div",{staticClass:"placeholder",attrs:{slot:"nav-right"},slot:"nav-right"}),n("div",{staticClass:"hambarger-btn",attrs:{slot:"nav-right"},on:{click:t.showPopup},slot:"nav-right"},[n("i",{staticClass:"iconfont icongengduo"})])],2)],1),n("van-popup",{style:{height:"100%"},attrs:{position:"bottom",closeable:"","close-icon-position":"top-left"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"wode"},[n("div",{staticClass:"top"},[n("span",{staticClass:"title"},[t._v("我的频道")]),n("van-button",{attrs:{type:"default",color:"red",round:"",plain:"",size:"mini"},on:{click:t.edit}},[t._v(t._s(t.isEdit?"完成":"编辑"))])],1),n("van-grid",{attrs:{gutter:10}},t._l(t.channels,(function(e,a){return n("van-grid-item",{key:e.id,on:{click:function(n){return t.setMyChannel(e.id,a)}}},[n("van-icon",{directives:[{name:"show",rawName:"v-show",value:!t.fixedChanls.includes(a)&&t.isEdit,expression:"!fixedChanls.includes(index) && isEdit"}],attrs:{slot:"icon",name:"clear"},slot:"icon"}),n("span",{staticClass:"van-grid-item__text text28",class:a===t.active?"gridActive":"",attrs:{slot:"text"},slot:"text"},[t._v(t._s(e.name))])],1)})),1)],1),n("div",{staticClass:"wode"},[n("div",{staticClass:"top"},[n("span",{staticClass:"title"},[t._v("频道推荐")])]),n("van-grid",{attrs:{gutter:10,direction:"horizontal"}},t._l(t.recChannels,(function(e){return n("van-grid-item",{key:e.id,attrs:{icon:"plus",text:e.name},on:{click:function(n){return t.delRecChannel(e)}}})})),1)],1)])])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"iconfont iconsousuo"}),n("span",[t._v("搜索")])])}],i=(n("4de4"),n("7db0"),n("c740"),n("caad"),n("a434"),n("2532"),n("96cf"),n("1da1")),s=n("c24f"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"listContainRef",staticClass:"list-contain"},[n("van-pull-refresh",{attrs:{"animation-duration":1500,"loading-text":t.loadingtext},on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"请求失败，点击重新加载"},on:{load:t.onLoad,"update:error":function(e){t.error=e}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t){return n("van-cell",{key:t.art_id.toString()},[n("list-item",{attrs:{article:t}})],1)})),1)],1)],1)},o=[],l=(n("a9e3"),n("2909")),u=n("2423"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-cell-group",[n("van-cell",{attrs:{to:{name:"articleRouter",params:{articleId:t.article.art_id}}}},[n("div",{staticClass:"title van-multi-ellipsis--l2",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(t.article.title)+" ")]),n("div",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[3===t.article.cover.images.length?n("div",{staticClass:"top"},t._l(t.article.cover.images,(function(t,e){return n("van-image",{key:e,attrs:{fit:"cover",src:t}})})),1):t._e(),n("div",{staticClass:"bottom"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(" "+t._s(t.article.comm_count)+" 评论")]),n("span",[t._v(t._s(t._f("format")(t.article.pubdate)))])])]),1===t.article.cover.images.length?n("div",{staticClass:"default",attrs:{slot:"default"},slot:"default"},[n("van-image",{staticClass:"oneImg",attrs:{fit:"cover",src:t.article.cover.images[0]}})],1):t._e()])],1)],1)},f=[],h={props:{article:{type:Object,required:!0}},created:function(){}},p=h,v=(n("9bf9"),n("2877")),g=Object(v["a"])(p,d,f,!1,null,"668a3fc8",null),m=g.exports,b=n("2ef0"),_={name:"ArticleList",props:{aId:{required:!0,style:String|Number}},data:function(){return{loadingtext:"正在努力加载哦...",obj:{channel_id:this.aId,timestamp:Date.now(),with_top:1},list:[],loading:!1,finished:!1,refreshing:!1,error:!1,scrollTop:0}},methods:{getArt:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(u["a"])(e.obj);case 3:a=n.sent,r=a.data,"load"===t?(i=e.list).push.apply(i,Object(l["a"])(r.data.results)):((s=e.list).unshift.apply(s,Object(l["a"])(r.data.results)),e.refreshing&&(e.loadingtext="正在努力加载中...")),e.obj.timestamp=r.data.pre_timestamp,r.data.results.lenght<10&&(e.error=!1,e.finished=!0),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),"load"===t&&n.t0?e.error=!0:"refresh"===t&&n.t0&&(e.loadingtext="加载失败！");case 13:return n.prev=13,e.loading=!1,e.refreshing=!1,n.finish(13);case 17:case"end":return n.stop()}}),n,null,[[0,10,13,17]])})))()},onLoad:function(){this.getArt("load")},onRefresh:function(){this.finished=!1,this.loading=!0,this.getArt("refresh")},handleScroll:function(t){this.scrollTop=t.target.scrollTop}},created:function(){},mounted:function(){this.$refs.listContainRef.addEventListener("scroll",Object(b["debounce"])(this.handleScroll,300))},components:{ListItem:m},activated:function(){this.$refs.listContainRef.scrollTop=this.scrollTop}},x=_,C=(n("02c6"),Object(v["a"])(x,c,o,!1,null,"72b8321e",null)),w=C.exports,k={data:function(){return{fixedChanls:[0],isEdit:!1,active:0,channels:[],allChannels:[],show:!1}},methods:{search:function(){this.$router.push("/search")},setMyChannel:function(t,e){if(this.isEdit){if(this.fixedChanls.includes(e))return!1;var n=this.channels.findIndex((function(e){return e.id===t}));this.channels.splice(n,1),this.active>=e&&this.active--}else this.active=e,this.show=!1;this.delMyChannels(t)},delMyChannels:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.$store.state.token){n.next=11;break}return n.prev=1,n.next=4,Object(s["d"])(t);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),e.$toast.fail("删除频道失败！");case 9:n.next=12;break;case 11:window.localStorage.setItem("myChannels",JSON.stringify(e.channels));case 12:case"end":return n.stop()}}),n,null,[[1,6]])})))()},edit:function(){this.isEdit=!this.isEdit},delRecChannel:function(t){this.channels.push(t),this.patchMyChannels({id:t.id,seq:this.channels.length})},patchMyChannels:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.$store.state.token){n.next=14;break}return n.prev=1,n.next=4,Object(s["n"])([t]);case 4:a=n.sent,r=a.data,console.log(r),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](1),e.$toast.fail("添加失败！");case 12:n.next=15;break;case 14:window.localStorage.setItem("myChannels",JSON.stringify(e.channels));case 15:case"end":return n.stop()}}),n,null,[[1,9]])})))()},showPopup:function(){this.show=!0},getChannels:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$store.state.token){e.next=14;break}return e.prev=1,e.next=4,Object(s["f"])();case 4:n=e.sent,a=n.data,t.channels=a.data.channels,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),t.$toast.fail("获取我的频道失败！");case 12:e.next=29;break;case 14:if(!window.localStorage.getItem("myChannels")){e.next=18;break}t.channels=JSON.parse(window.localStorage.getItem("myChannels")),e.next=29;break;case 18:return e.prev=18,e.next=21,Object(s["f"])();case 21:r=e.sent,i=r.data,t.channels=i.data.channels,e.next=29;break;case 26:e.prev=26,e.t1=e["catch"](18),t.$toast.fail("获取我的频道失败！");case 29:case"end":return e.stop()}}),e,null,[[1,9],[18,26]])})))()},getAllChannels:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s["e"])();case 3:n=e.sent,a=n.data,t.allChannels=a.data.channels,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$toast.fail("获取全部列表失败！");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},computed:{recChannels:function(){var t=this;return this.allChannels.filter((function(e){return!t.channels.find((function(t){return t.id===e.id}))}))}},created:function(){this.getChannels(),this.getAllChannels()},components:{"home-list":w}},y=k,O=(n("a987"),Object(v["a"])(y,a,r,!1,null,"3a399795",null));e["default"]=O.exports},2532:function(t,e,n){"use strict";var a=n("23e7"),r=n("5a34"),i=n("1d80"),s=n("ab13");a({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(i(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,n){var a=n("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5ba2":function(t,e,n){},"7db0":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").find,i=n("44d2"),s=n("ae40"),c="find",o=!0,l=s(c);c in[]&&Array(1)[c]((function(){o=!1})),a({target:"Array",proto:!0,forced:o||!l},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},"7e4f":function(t,e,n){},"9bf9":function(t,e,n){"use strict";var a=n("5ba2"),r=n.n(a);r.a},a987:function(t,e,n){"use strict";var a=n("7e4f"),r=n.n(a);r.a},ab13:function(t,e,n){var a=n("b622"),r=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(a){}}return!1}},c24f:function(t,e,n){"use strict";n.d(e,"m",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"h",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return o})),n.d(e,"n",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"k",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"j",(function(){return h})),n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return v})),n.d(e,"l",(function(){return g})),n.d(e,"i",(function(){return m})),n.d(e,"o",(function(){return b})),n.d(e,"p",(function(){return _}));var a=n("b775"),r=function(t){return a["a"].post("/app/v1_0/authorizations",t)},i=function(t){return a["a"].get("/app/v1_0/sms/codes/".concat(t))},s=function(){return a["a"].get("/app/v1_0/user")},c=function(){return a["a"].get("/app/v1_0/user/channels")},o=function(t){return a["a"].get("/app/v1_0/channels")},l=function(t){return Object(a["a"])({method:"PATCH",url:"/app/v1_0/user/channels",data:{channels:t}})},u=function(t){return a["a"].delete("/app/v1_0/user/channels/".concat(t))},d=function(t){return a["a"].post("/app/v1_0/user/followings",{target:t})},f=function(t){return a["a"].delete("/app/v1_0/user/followings/".concat(t))},h=function(t){return a["a"].post("/app/v1_0/article/collections",{target:t})},p=function(t){return a["a"].delete("/app/v1_0/article/collections/".concat(t))},v=function(t){return a["a"].post("/app/v1_0/article/dislikes",{target:t})},g=function(t){return a["a"].post("/app/v1_0/article/likings",{target:t})},m=function(){return a["a"].get("/app/v1_0/user/profile")},b=function(t){return a["a"].patch("/app/v1_0/user/profile",t)},_=function(t){return a["a"].patch("/app/v1_0/user/photo",t)}},caad:function(t,e,n){"use strict";var a=n("23e7"),r=n("4d64").includes,i=n("44d2"),s=n("ae40"),c=s("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!c},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);
//# sourceMappingURL=chunk-0e90fa59.51a22b2f.js.map