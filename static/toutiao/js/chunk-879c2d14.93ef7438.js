(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-879c2d14"],{"165e":function(t,e,n){},"89d2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"登录","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-form",{ref:"loginForm",on:{submit:t.onSubmit}},[n("van-field",{attrs:{name:"mobile",placeholder:"请输入手机号",rules:t.userRules.mobile,type:"number",maxlength:"11"},model:{value:t.user.mobile,callback:function(e){t.$set(t.user,"mobile",e)},expression:"user.mobile"}},[n("i",{staticClass:"iconfont iconshouji",attrs:{slot:"left-icon"},slot:"left-icon"})]),n("van-field",{attrs:{name:"code",placeholder:"验证码",rules:t.userRules.code,type:"number",maxlength:"6"},scopedSlots:t._u([{key:"button",fn:function(){return[t.isCount?n("van-count-down",{staticClass:"daojishi",attrs:{time:6e4,format:"ss 秒后重发"},on:{finish:t.countFinish}}):n("van-button",{staticClass:"yanzhengma",attrs:{size:"small",type:"primary","native-type":"button"},on:{click:t.onVerify}},[t._v("发送验证码")])]},proxy:!0}]),model:{value:t.user.code,callback:function(e){t.$set(t.user,"code",e)},expression:"user.code"}},[n("i",{staticClass:"shuxian",attrs:{slot:"right-icon"},slot:"right-icon"}),n("i",{staticClass:"iconfont iconyanzhengma",attrs:{slot:"left-icon"},slot:"left-icon"})]),n("div",{staticClass:"login"},[n("van-button",{attrs:{block:"",type:"info","native-type":" submit"}},[t._v(" 登录 ")])],1)],1)],1)},a=[],o=(n("96cf"),n("1da1")),u=n("c24f"),s={data:function(){return{isCount:!1,user:{mobile:"13911111111",code:"246810"},userRules:{mobile:[{required:!0,message:"请输入手机号"},{pattern:/^1(3|4|5|6|7|8|9)\d{9}$/,message:"请输入正确手机号"}],code:[{required:!0,message:"请填写验证码"},{pattern:/\d{6}/,message:"验证码需要6位"}]}}},methods:{onClickLeft:function(){this.$router.back()},countFinish:function(){this.isCount=!1},onVerify:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$refs.loginForm.validate("mobile");case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return",!1);case 8:return t.isCount=!0,e.prev=9,e.next=12,Object(u["g"])(t.user.mobile);case 12:e.next=17;break;case 14:e.prev=14,e.t1=e["catch"](9),429===e.t1.response.status&&t.$toast.fail("发送太频繁了！");case 17:case"end":return e.stop()}}),e,null,[[0,5],[9,14]])})))()},onSubmit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),e.prev=1,e.next=4,Object(u["m"])(t.user);case 4:n=e.sent,r=n.data,t.$store.commit("setToken",r.data),t.$toast.success("登录成功！"),t.$store.commit("removeCache","MyLayout"),t.$router.push("/my"),e.next=17;break;case 12:if(e.prev=12,e.t0=e["catch"](1),400!==(null===(a=e.t0.response)||void 0===a?void 0:a.status)){e.next=16;break}return e.abrupt("return",t.$toast.fail("账号或验证码出错！"));case 16:t.$toast.fail("登录失败！");case 17:case"end":return e.stop()}}),e,null,[[1,12]])})))()}}},i=s,c=(n("d4a8"),n("2877")),l=Object(c["a"])(i,r,a,!1,null,"00d94522",null);e["default"]=l.exports},c24f:function(t,e,n){"use strict";n.d(e,"m",(function(){return a})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return u})),n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"n",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"k",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"j",(function(){return d})),n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return v})),n.d(e,"l",(function(){return h})),n.d(e,"i",(function(){return b})),n.d(e,"o",(function(){return g})),n.d(e,"p",(function(){return k}));var r=n("b775"),a=function(t){return r["a"].post("/app/v1_0/authorizations",t)},o=function(t){return r["a"].get("/app/v1_0/sms/codes/".concat(t))},u=function(){return r["a"].get("/app/v1_0/user")},s=function(){return r["a"].get("/app/v1_0/user/channels")},i=function(t){return r["a"].get("/app/v1_0/channels")},c=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/channels",data:{channels:t}})},l=function(t){return r["a"].delete("/app/v1_0/user/channels/".concat(t))},f=function(t){return r["a"].post("/app/v1_0/user/followings",{target:t})},p=function(t){return r["a"].delete("/app/v1_0/user/followings/".concat(t))},d=function(t){return r["a"].post("/app/v1_0/article/collections",{target:t})},m=function(t){return r["a"].delete("/app/v1_0/article/collections/".concat(t))},v=function(t){return r["a"].post("/app/v1_0/article/dislikes",{target:t})},h=function(t){return r["a"].post("/app/v1_0/article/likings",{target:t})},b=function(){return r["a"].get("/app/v1_0/user/profile")},g=function(t){return r["a"].patch("/app/v1_0/user/profile",t)},k=function(t){return r["a"].patch("/app/v1_0/user/photo",t)}},d4a8:function(t,e,n){"use strict";var r=n("165e"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-879c2d14.93ef7438.js.map