webpackJsonp([1],{"+skl":function(t,e){},ANbT:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"#app{height:100%}",""])},G6wb:function(t,e,n){var i=n("cPsX");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("182f5998",i,!0,{})},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},o,!1,function(t){n("QURS")},null,null).exports,a=n("/ocq"),l={data:function(){return{scrollTop:0,scrollChange:!0,navColor:["#dddddd","#bbbbbb","#999999","#777777","#555555"],navItem:["javaScript","css3","hTML5","Vue","nodeJs"],navSelect:0,pageTitle:"javaScript",loginPageTemp:!0}},methods:{formSubmit:function(){document.getElementById("submit").submit().then(function(t){console.log(t.data)})},pageScroll:function(){var t=document.getElementById("container-head"),e=document.getElementById("content"),n=document.getElementById("head-img"),i=document.getElementsByClassName("nav-item"),o=document.getElementsByClassName("show-demo"),s=document.getElementById("pageTitle");if(this.scrollTop>0&&this.scrollChange){this.scrollChange=!1,t.style.height="60px",e.style.top="0",e.style.height="100%",n.style.opacity="0";for(var a=0;a<i.length;a++)i[a].style.transform="rotate(45deg)";s.style.opacity="1"}else if(0===this.scrollTop){this.scrollChange=!0,t.style.height="40%",e.style.top="30%",e.style.height="70%",n.style.opacity="1";for(var l=0;l<i.length;l++)i[l].style.transform="none",i[l].style.margin="3px auto";for(var r=0;r<o.length;r++)o[r].style.height="0";s.style.opacity="0"}this.navToggle(this.navSelect)},handleScroll:function(){this.scrollTop=document.getElementById("content").scrollTop},toggleLogin:function(){var t=document.getElementById("loginPageContainer");"block"===t.style.display?t.style.display="none":t.style.display="block"},hoverChange:function(t){if(0!==this.scrollTop){for(var e=document.getElementsByClassName("show-demo"),n=0;n<e.length;n++)e[n].style.height="0";e[t].style.height="300px"}},navToggle:function(t){if(this.navSelect=t,document.getElementById("content").style.backgroundColor=this.navColor[t],0!==this.scrollTop){for(var e=document.getElementsByClassName("nav-item"),n=0;n<e.length;n++)e[n].style.margin="40px auto";e[t].style.margin="0px 0px 0px 150px",this.pageTitle=this.navItem[t]}}},mounted:function(){document.getElementById("content").addEventListener("scroll",this.handleScroll);for(var t=document.getElementsByClassName("nav-item"),e=0;e<t.length;e++)t[e].style.backgroundColor=this.navColor[e]},watch:{scrollTop:function(){this.pageScroll()}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("button",{staticClass:"login",attrs:{id:"login"},on:{click:t.toggleLogin}},[t._v("登录")]),t._v(" "),n("div",{staticClass:"loginPageContainer",attrs:{id:"loginPageContainer"}},[t.loginPageTemp?n("div",{staticClass:"loginPage",attrs:{id:"loginPage"}},[n("form",{attrs:{action:"/login",method:"post"}},[t._v("\n        用户名："),n("input",{attrs:{type:"text",id:"username",name:"username",placeholder:"用户名"}}),t._v(" "),n("br"),t._v("\n        密码: "),n("input",{attrs:{type:"text",id:"password",name:"password",placeholder:"密码"}}),n("br"),t._v(" "),n("button",{attrs:{type:"button",id:"submit"},on:{click:t.formSubmit}},[t._v("提交")]),t._v(" "),n("a",{on:{click:t.toggleLogin}},[t._v("x")])]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){t.loginPageTemp=!1}}},[t._v("去注册")])]):t._e(),t._v(" "),t.loginPageTemp?t._e():n("div",{staticClass:"loginPage"},[t._m(0),t._v(" "),n("button",{attrs:{type:"button"},on:{click:function(e){t.loginPageTemp=!0}}},[t._v("去登录")])])]),t._v(" "),t._m(1),t._v(" "),n("h1",{staticClass:"pageTitle",attrs:{id:"pageTitle"}},[t._v("\n    "+t._s(t.pageTitle)+"\n  ")]),t._v(" "),t._m(2),t._v(" "),n("div",{attrs:{id:"container-body"}},[n("div",{staticClass:"page-nav-left"},[n("router-link",{attrs:{to:"/homePage/js"}},[n("div",{staticClass:"nav-item",on:{click:function(e){t.navToggle(0)}}},[t._v("javaScript")])]),t._v(" "),n("router-link",{attrs:{to:"/homePage/css"}},[n("div",{staticClass:"nav-item",on:{click:function(e){t.navToggle(1)}}},[t._v("css3")])]),t._v(" "),n("router-link",{attrs:{to:"/homePage/html"}},[n("div",{staticClass:"nav-item",on:{click:function(e){t.navToggle(2)}}},[t._v("html5")])]),t._v(" "),n("router-link",{attrs:{to:"/homePage/vue"}},[n("div",{staticClass:"nav-item",on:{click:function(e){t.navToggle(3)}}},[t._v("vue")])]),t._v(" "),n("router-link",{attrs:{to:"/homePage/nodejs"}},[n("div",{staticClass:"nav-item",on:{click:function(e){t.navToggle(4)}}},[t._v("nodejs")])])],1),t._v(" "),n("div",{staticClass:"page-nav-right"},[n("router-link",{attrs:{to:"/adminPage"}},[n("div",{staticClass:"nav-item-right",on:{mouseover:function(e){t.hoverChange(0)}}},[t._v("管理中心")])]),t._v(" "),n("div",{staticClass:"show-demo"}),t._v(" "),n("router-link",{attrs:{to:"/postbar"}},[n("div",{staticClass:"nav-item-right",on:{mouseover:function(e){t.hoverChange(1)}}},[t._v("留言板")])]),t._v(" "),n("div",{staticClass:"show-demo"}),t._v(" "),n("router-link",{attrs:{to:"/todolist"}},[n("div",{staticClass:"nav-item-right",on:{mouseover:function(e){t.hoverChange(2)}}},[t._v("todolist")])]),t._v(" "),n("div",{staticClass:"show-demo"}),t._v(" "),n("router-link",{attrs:{to:"/selfCon"}},[n("div",{staticClass:"nav-item-right",on:{mouseover:function(e){t.hoverChange(3)}}},[t._v("个人作品")])]),t._v(" "),n("div",{staticClass:"show-demo"})],1)]),t._v(" "),n("div",{staticClass:"content",attrs:{id:"content"}},[n("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{attrs:{action:"/register",method:"post"}},[this._v("\n        用户名："),e("input",{attrs:{type:"text",id:"username",name:"username",placeholder:"用户名"}}),e("br"),this._v("\n        密码: "),e("input",{attrs:{type:"text",id:"password",name:"password",placeholder:"密码"}}),e("br"),this._v(" "),e("input",{attrs:{type:"submit",value:"注册"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-nav",attrs:{id:"user-nav"}},[e("h1",[this._v("welcome")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"container-head"}},[e("div",{staticClass:"head-img",attrs:{id:"head-img"}},[e("img",{attrs:{src:n("lBov")}})])])}]};var c=n("VU/8")(l,r,!1,function(t){n("G6wb")},null,null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"js-container"},[e("h1",[this._v("js show here")])])}]},h=n("VU/8")(null,d,!1,null,null,null).exports,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"css-container"},[e("h1",[this._v("css show here")])])}]},p=n("VU/8")(null,u,!1,null,null,null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"html-container"},[e("h1",[this._v("html5 show here")])])}]},v=n("VU/8")(null,m,!1,null,null,null).exports,g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"node-container"},[e("h1",[this._v("nodejs show here")])])}]},f=n("VU/8")(null,g,!1,null,null,null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-container"},[e("h1",[this._v("vue show here")])])}]},b=n("VU/8")(null,_,!1,null,null,null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"admin-container"},[this._v("\r\n  xx\r\n")])},staticRenderFns:[]},y=n("VU/8")(null,x,!1,null,null,null).exports,k=n("VU/8")(null,null,!1,null,null,null).exports,w=n("VU/8")(null,null,!1,null,null,null).exports,C=n("mvHQ"),T=n.n(C),E={data:function(){return{addText:"",prolist:[],tempEdit:void 0,picked:""}},methods:{getSelect:function(t){this.picked=t},addList:function(){""!==this.addText&&this.prolist.push({name:this.addText,status:!1,marked:!1}),this.addText=void 0},removeList:function(t){this.prolist.splice(t,1)}},mounted:function(){this.prolist=JSON.parse(window.localStorage.getItem("prolist")||"[]")},watch:{picked:function(t){var e=document.getElementsByClassName("todo-block");if("all"===t)for(var n=0;n<e.length;n++)e[n].style.height="49%",e[n].style.width="49%";else{for(var i=0;i<e.length;i++)e[i].style.height="0",e[i].style.width="0";document.getElementById(t).style.width="100%",document.getElementById(t).style.height="100%"}},prolist:{handler:function(){window.localStorage?localStorage.setItem("prolist",T()(this.prolist)):window.Cookie.write("menuTitle",this.prolist)},deep:!0}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-container"},[n("Menu",{staticClass:"nav-bar",attrs:{"active-name":"all","open-names":["1"]},on:{"on-select":t.getSelect}},[n("Submenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"md-checkmark"}}),t._v("\n        完成情况\n      ")],1),t._v(" "),n("MenuItem",{attrs:{name:"toFinish"}},[t._v("待完成")]),t._v(" "),n("MenuItem",{attrs:{name:"finished"}},[t._v("已完成")]),t._v(" "),n("MenuItem",{attrs:{name:"all"}},[t._v("全部")]),t._v(" "),n("MenuItem",{attrs:{name:"marking"}},[t._v("标记中")])],2),t._v(" "),n("Submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n        设置\n      ")],1),t._v(" "),n("MenuItem",{attrs:{name:"tubiao"}},[t._v("图表")]),t._v(" "),n("MenuItem",{attrs:{name:"other"}},[t._v("其他设置")])],2)],1),t._v(" "),n("div",{staticClass:"todo-list"},[n("div",{staticClass:"addItem"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.addText,expression:"addText"}],attrs:{type:"text",value:"",placeholder:"请输入要做的事情"},domProps:{value:t.addText},on:{input:function(e){e.target.composing||(t.addText=e.target.value)}}}),t._v(" "),n("Button",{staticStyle:{display:"inline-block",margin:"0 0 0 20px"},attrs:{type:"default"},on:{click:t.addList}},[t._v("添加")])],1),t._v(" "),n("div",{staticClass:"show-area"},[n("div",{staticClass:"todo-block",staticStyle:{position:"absolute",top:"0",left:"0"},attrs:{id:"toFinish"}},[n("Card",{staticStyle:{height:"100%",padding:"10px"}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("待完成")]),t._v(" "),n("ul",t._l(t.prolist,function(e,i){return e.status?t._e():n("li",{key:i},[n("span",{class:e.status?"finished":"toFinish",on:{click:function(t){e.status=!e.status}}}),t._v("\n                "+t._s(e.status?"":e.name)+"\n                "),n("span",{staticClass:"closed",on:{click:function(e){t.removeList(i)}}},[t._v("X")])])}))])],1),t._v(" "),n("div",{staticClass:"todo-block",staticStyle:{position:"absolute",top:"0",right:"0","text-decoration":"line-through"},attrs:{id:"finished"}},[n("Card",{staticStyle:{height:"100%",padding:"10px"}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("已完成")]),t._v(" "),n("ul",t._l(t.prolist,function(e,i){return e.status?n("li",{key:i},[n("span",{class:e.status?"finished":"toFinish",on:{click:function(t){e.status=!e.status}}}),t._v("\n              "+t._s(e.status?e.name:null)+"\n              "),n("span",{staticClass:"closed",on:{click:function(e){t.removeList(i)}}},[t._v("X")])]):t._e()}))])],1),t._v(" "),n("div",{staticClass:"todo-block",staticStyle:{position:"absolute",bottom:"0",left:"0"},attrs:{id:"marking"}},[n("Card",{staticStyle:{height:"100%",padding:"10px"}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._v("标记中")]),t._v(" "),n("ul",t._l(t.prolist,function(e,i){return n("li",{key:i},[t._v(t._s(e.marked?e.name:null))])}))])],1),t._v(" "),n("div",{staticClass:"todo-block",attrs:{id:"tubiao"}})])])],1)},staticRenderFns:[]};var I=n("VU/8")(E,S,!1,function(t){n("Z1c9")},null,null).exports;i.default.use(a.a);var P=new a.a({routes:[{path:"/",name:"homePage",component:c,children:[{path:"js",name:"js",component:h},{path:"css",name:"css",component:p},{path:"html",name:"html",component:v},{path:"vue",name:"vue",component:b},{path:"nodejs",name:"nodejs",component:f}]},{path:"/todolist",name:"todolist",component:I},{path:"/postbar",name:"postbar",component:k},{path:"/adminPage",name:"adminPage",component:y},{path:"/selfCon",name:"selfCon",component:w}]}),B=n("NYxO");i.default.use(B.a);var j=new B.a.Store({state:{},mutations:{}}),$=n("BTaQ"),F=n.n($),N=n("mtWM"),U=n.n(N);n("+skl");i.default.prototype.$axios=U.a,i.default.use(F.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:P,store:j,components:{App:s},template:"<App/>"}),P.beforeEach(function(t,e,n){F.a.LoadingBar.start(),n()}),P.afterEach(function(t){F.a.LoadingBar.finish()})},O2Z1:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".todo-container{height:100%;width:100%}.nav-bar,.todo-list{height:100%}.todo-list{position:absolute;left:240px;top:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.addItem{display:block;padding:100px 0;text-align:center;height:250px}.addItem>input{display:inline-block;width:300px;border-top:none;border-left:none;border-right:none;outline:none;padding-left:30px;font-size:2em}.show-area{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;position:relative;margin:20px}.todo-block{width:49%;height:49%;margin:0;overflow:hidden;-webkit-transition:height 1s,width 1s;transition:height 1s,width 1s;display:inline-block;float:left;padding:1px}li{font-size:20px;list-style:none}.finished,.toFinish{display:inline-block;width:13px;height:13px;border:1px solid #1f1f1f}.finished{border:none;background-color:aqua}.closed{float:right;color:red}",""])},QURS:function(t,e,n){var i=n("ANbT");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("a6000c12",i,!0,{})},Z1c9:function(t,e,n){var i=n("O2Z1");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("a2b440f2",i,!0,{})},cPsX:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".container{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}#container-head{height:40%;width:100%;background-color:#ccc;-webkit-transition:height 1s;transition:height 1s;margin:0;padding:0}#container-body{position:relative;width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:#3f3f3f;overflow:hidden}.content{position:absolute;-webkit-transition:top 1s,height 1s,background-color 1s;transition:top 1s,height 1s,background-color 1s;top:30%;left:20%;width:60%;height:70%;background-color:#fff;overflow:auto}.lists-item{margin:100px}.head-img{display:block;-webkit-transition:opacity 1s ease-in-out;transition:opacity 1s ease-in-out;background-color:#ccc;width:100%;height:100%;overflow:hidden}.user-nav{position:absolute;top:25%;right:25%;z-index:inherit}.login{width:60px;height:40px;position:fixed;top:1%;right:1%;background-color:#fff;border:none;border-radius:5px;z-index:1}.loginPage{position:fixed;width:500px;height:300px;margin:-150px 0 0 -250px;top:50%;left:50%;background-color:#ccc;z-index:inherit}.loginPageContainer{display:none;position:fixed;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:1}.page-nav-right{right:2%}.page-nav-left,.page-nav-right{position:absolute;top:50px;width:15%}.page-nav-left{left:20px}.nav-item-right{display:block;width:100%;height:40px;margin:0 0 10px;padding:10px 0 0}.nav-item,.nav-item-right{background-color:#ccc;text-align:center}.nav-item{width:100px;height:100px;margin:3px auto;-webkit-transition:margin 1s,-webkit-transform 1s;transition:margin 1s,-webkit-transform 1s;transition:transform 1s,margin 1s;transition:transform 1s,margin 1s,-webkit-transform 1s}a,a:focus,s:hover{text-decoration:none;color:#000}.show-demo{display:true;background-color:#ccc;width:100%;-webkit-transition:height .5s;transition:height .5s;height:0;margin:15px 0;overflow:hidden}.pageTitle{opacity:0;position:absolute;top:6px;left:20px}",""])},lBov:function(t,e,n){t.exports=n.p+"static/img/head.089a45e.jpg"}},["NHnr"]);
//# sourceMappingURL=app.c78e7915a531735ac213.js.map