webpackJsonp([1],{"+Gxq":function(e,t,n){"use strict";var o=n("fnDg").a,i=n("VU/8")(o,null,!1,function(e){n("NCXI")},null,null);t.a=i.exports},"1ZUK":function(e,t){},"1oVT":function(e,t){},"9M+g":function(e,t){},"9R6X":function(e,t){},"C9v/":function(e,t){},"HUt/":function(e,t,n){"use strict";var o=n("qRo1").a,i=n("VU/8")(o,null,!1,function(e){n("LH4V")},null,null);t.a=i.exports},JCpY:function(e,t,n){"use strict";var o=n("rKsW").a,i=n("VU/8")(o,null,!1,function(e){n("C9v/")},null,null);t.a=i.exports},JDVb:function(e,t,n){"use strict";var o=n("9NuQ").a,i=n("VU/8")(o,null,!1,function(e){n("1oVT")},null,null);t.a=i.exports},Jmt5:function(e,t){},LH4V:function(e,t){},NCXI:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},a=n("VU/8")({name:"app"},i,!1,function(e){n("rkBG")},null,null).exports,r=n("NYxO"),s=n("/ocq"),l=n("e6fC"),c=n("mtWM"),u=n.n(c);u.a.defaults.xsrfHeaderName="Csrf-Token",u.a.defaults.xsrfCookieName="PLAY_CSRF_TOKEN";var f="http://localhost:9000",d={Accept:"application/json","Content-Type":"application/json"},m={authenticate:function(e,t,n){var o=f+e;u.a.post(o,t,d).then(function(e){n(e)}).catch(function(e){console.log(e)})},home:function(e,t){u.a.get("http://localhost:9000/home").then(function(t){e(t)}).catch(function(e){t(e)})}},p=n("VU/8")(m,null,!1,null,null,null).exports,h={name:"SignIn",data:function(){return{form:{email:"",password:""}}},methods:{signIn:function(e){var t=this,n={email:this.form.email,password:this.form.password,rememberMe:!0};p.authenticate("/signIn",n,function(e){t.$router.push("/coffee-shops")})},home:function(e,t){p.home(e,t)}},created:function(){var e=this;this.home(function(t){200===t.status?e.$router.push("/coffee-shops"):e.$router.push("/signIn")},function(t){console.log(t),e.$router.push("/signIn")})}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[n("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),e._v(" "),n("b-navbar-brand",{attrs:{href:"#"}},[e._v("Coffee")])],1)],1),e._v(" "),n("div",[n("b-form",{on:{submit:function(t){e.signIn()}}},[n("b-form-group",{attrs:{id:"emailGroup",label:"Email address:",description:"We'll never share your email with anyone else."}},[n("b-form-input",{attrs:{id:"email",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),n("b-form-group",{attrs:{id:"passwordGroup",label:"Password:"}},[n("b-form-input",{attrs:{id:"password",type:"password",required:"",placeholder:"Enter Password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Sign In")])],1)],1)])},staticRenderFns:[]},b=n("VU/8")(h,v,!1,null,null,null).exports;u.a.defaults.xsrfHeaderName="Csrf-Token",u.a.defaults.xsrfCookieName="PLAY_CSRF_TOKEN",u.a.defaults.withCredentials=!0;var _="http://localhost:9000",g={Accept:"application/json","Content-Type":"application/json"},y={data:function(){return{}},find:function(e,t,n,o){var i=_+e+t;return u.a.get(i,g).then(function(e){n(e)}).catch(function(e){o(e)})},search:function(e,t,n){var o=_+e;return u.a.get(o,g).then(function(e){t(e)}).catch(function(e){n(e)})},update:function(e,t,n,o){var i=_+e;u.a.put(i,t,g).then(function(e){n(e)}).catch(function(e){o(e)})},create:function(e,t,n,o){var i=_+e;u.a.post(i,t,g).then(function(e){n(e)}).catch(function(e){o(e)})},destroy:function(e,t,n,o){var i=_+e+"/"+t;u.a.delete(i,{},g).then(function(e){n(e)}).catch(function(e){o(e)})}},k=n("VU/8")(y,null,!1,null,null,null).exports,C={name:"SignOut",methods:{signOut:function(){var e=new s.a;k.search("/signOut",function(t){e.go("/signIn")},function(t){console.log(t),e.go("/signIn")})}}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app-header"}},[t("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[t("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),this._v(" "),t("b-navbar-brand",{attrs:{href:"#"}},[this._v("Coffee")]),this._v(" "),t("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{href:"#/coffee-shops"}},[this._v("Shop List")]),this._v(" "),t("b-nav-item",{attrs:{href:"#/users"}},[this._v("User List")])],1),this._v(" "),t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-form",[t("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"text",placeholder:"Search"}}),this._v(" "),t("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[this._v("Search")])],1),this._v(" "),t("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[t("b-dropdown-item",{attrs:{href:"#"}},[this._v("EN")]),this._v(" "),t("b-dropdown-item",{attrs:{href:"#"}},[this._v("JA")])],1),this._v(" "),t("b-nav-item-dropdown",{attrs:{right:""}},[t("template",{slot:"button-content"},[t("em",[this._v("User")])]),this._v(" "),t("b-dropdown-item",{attrs:{href:"#"}},[this._v("Profile")]),this._v(" "),t("b-dropdown-item-button",{on:{click:this.signOut}},[this._v("Signout")])],2)],1)],1)],1)],1)},staticRenderFns:[]},w=n("VU/8")(C,x,!1,null,null,null).exports,S={render:function(){this.$createElement;this._self._c;return this._m(0,!1,!1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app-footer"}},[t("footer",[t("div",{staticClass:"container"},[t("span",{staticClass:"text-muted"},[this._v("Copyright 2017-2018 Wonder Soft")])])])])}]},U=n("VU/8")(null,S,!1,function(e){n("Z9qb")},null,null).exports,$={data:function(){return{coffeeShopId:0,addToggle:!1,fields:{id:{label:"-",sortable:!1},name:{label:"name",sortable:!0},kind:{label:"kind",sortable:!0}},coffeeBeans:[],form:{cid:"",name:"",kind:"",coffee_shop_id:""}}},components:{AppHeader:w,AppFooter:U},methods:{find:function(e){k.find("/api/coffee-beans/",e,function(e){console.log(e.data)},function(e){console.log(e)})},reSearch:function(){var e=this,t="/api/coffee-beans?coffee-shop-id="+this.coffeeShopId;k.search(t,function(t){e.coffeeBeans=t.data},function(t){console.log(t),e.$router.push("/signIn")})},create:function(){var e=this,t={id:0,name:this.form.name,kind:this.form.kind,coffee_shop_id:Number(this.coffeeShopId)};k.create("/api/coffee-beans",t,function(t){e.reSearch(),e.addToggle=!1},function(e){console.log(e)})},update:function(){var e=this,t={id:Number(this.form.cid),name:this.form.name,kind:this.form.kind,coffee_shop_id:Number(this.form.coffee_shop_id)};k.update("/api/coffee-beans",t,function(t){e.reSearch()},function(e){console.log(e)})},destroy:function(){var e=this;k.destroy("/api/coffee-beans",this.form.cid,function(t){e.reSearch(),e.addToggle=!1},function(e){console.log(e)})}},created:function(){this.coffeeShopId=this.$route.query["coffee-shop-id"],this.reSearch()}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("app-header"),e._v(" "),n("b-table",{attrs:{striped:"",hover:"",items:e.coffeeBeans,fields:e.fields},scopedSlots:e._u([{key:"id",fn:function(t){return[n("b-button",{staticClass:"mr-2",attrs:{size:"sm",variant:"success"},on:{click:function(e){e.stopPropagation(),t.toggleDetails(e)}}},[e._v("\n        "+e._s(t.detailsShowing?"Cancel":"Update")+" Coffee Beans\n      ")])]}},{key:"row-details",fn:function(t){return[n("b-card",[n("b-form",{on:{submit:e.update}},[n("b-row",{staticClass:"mb-2"},[n("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:""+t.item.name},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("b-row",{staticClass:"mb-2"},[n("b-form-input",{attrs:{id:"kind",type:"text",required:"",placeholder:""+t.item.kind},model:{value:e.form.kind,callback:function(t){e.$set(e.form,"kind",t)},expression:"form.kind"}})],1),e._v(" "),n("b-row",{staticClass:"sr-only"},[n("b-form-input",{attrs:{id:"cid",value:""+(e.form.cid=t.item.id)}}),e._v(" "),n("b-form-input",{attrs:{id:"coffee_shop_id",value:""+(e.form.coffee_shop_id=t.item.coffee_shop_id)}})],1),e._v(" "),n("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[e._v("Update")]),e._v(" "),n("br"),e._v(" "),n("br")],1),e._v(" "),n("b-form",{on:{submit:e.destroy}},[n("b-row",{staticClass:"sr-only"},[n("b-form-input",{attrs:{id:"cid",value:""+(e.form.cid=t.item.id)}})],1),e._v(" "),n("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[e._v("Destroy")])],1)],1)]}}])}),e._v(" "),[n("b-button",{staticClass:"mr-2",attrs:{pressed:e.addToggle,size:"sm",variant:"outline-success"},on:{"update:pressed":function(t){e.addToggle=t}}},[e._v("\n      "+e._s(e.addToggle?"Cancel":"")+" Add new Coffee Beans\n    ")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),e.addToggle?n("b-card",[n("b-form",{on:{submit:e.create}},[n("b-row",{staticClass:"mb-2"},[n("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"coffee name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("b-row",{staticClass:"mb-2"},[n("b-form-input",{attrs:{id:"kind",type:"text",required:"",placeholder:"coffee kind"},model:{value:e.form.kind,callback:function(t){e.$set(e.form,"kind",t)},expression:"form.kind"}})],1),e._v(" "),n("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[e._v("Create")])],1)],1):e._e()],e._v(" "),n("app-footer")],2)},staticRenderFns:[]},V=n("VU/8")($,I,!1,null,null,null).exports,N="/api/coffee-shops",T={name:"CoffeeShop",data:function(){return{coffeeShops:[]}},components:{AppHeader:w,AppFooter:U},methods:{list:function(e,t){k.search(N,function(t){e(t)},function(e){t(e)})},find:function(e,t){k.find(N,e,function(e){t(e)},function(e){console.log(e)})}},created:function(){var e=this;this.list(function(t){e.coffeeShops=t.data},function(t){console.log(t),e.$router.push("/signIn")})}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("app-header"),e._v(" "),n("b-table",{attrs:{striped:"",hover:"",items:e.coffeeShops},scopedSlots:e._u([{key:"id",fn:function(t){return[n("b-link",{attrs:{href:"#/coffee-beans?coffee-shop-id="+t.item.id}},[e._v(e._s(t.item.id))])]}}])}),e._v(" "),n("app-footer")],1)},staticRenderFns:[]},R=n("VU/8")(T,E,!1,null,null,null).exports,A={data:function(){return{users:[],fields:{id:{label:"-",sortable:!1},email:{label:"email",sortable:!0},role:{label:"role",sortable:!0},update:{label:" ",sortable:!0}},form:{uid:"",email:"",role:""}}},components:{AppHeader:w,AppFooter:U},methods:{blurHandler:function(e){!1===this.editableRow?this.editableRow=!0:(console.log(e),this.editableRow=!1)},find:function(e){k.find("/api/users/",e,function(e){console.log(e.data)},function(e){console.log(e)})},reSearch:function(){var e=this;k.search("/api/users",function(t){e.users=t.data.map(function(e){return e.editable=!1,e.changed=!1,e.options=[{value:e.role,text:e.role},{value:"admin"===e.role?"normal":"admin",text:"admin"===e.role?"normal":"admin"}],e.selected=e.role,e})},function(t){console.log(t),e.$router.push("/signIn")})},update:function(){var e=this,t={id:Number(this.form.uid),role:this.form.role};k.update("/api/users",t,function(t){e.reSearch()},function(e){console.log(e)})},create:function(){var e=this,t={id:0,name:this.form.name,kind:this.form.email};k.create("/api/users",t,function(t){e.reSearch()},function(e){console.log(e)})},destroy:function(){var e=this;k.destroy("/api/users",this.form.uid,function(t){e.reSearch(),e.addToggle=!1},function(e){console.log(e)})}},created:function(){this.reSearch()}},F={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("app-header"),e._v(" "),n("b-table",{attrs:{striped:"",hover:"",items:e.users,fields:e.fields},scopedSlots:e._u([{key:"role",fn:function(t){return[t.item.editable?e._e():n("div",[n("div",{domProps:{textContent:e._s(t.item.role)},on:{click:function(e){t.item.editable=!0}}})]),e._v(" "),t.item.editable?n("div",[n("b-form-select",{staticClass:"sb-3",attrs:{options:t.item.options},on:{input:function(e){t.item.editable=!1,t.item.changed=!0,t.item.role=t.item.selected}},model:{value:t.item.selected,callback:function(n){e.$set(t.item,"selected",n)},expression:"row.item.selected"}})],1):e._e()]}},{key:"update",fn:function(t){return[n("b-form",{on:{submit:e.update}},[t.item.changed?n("div",[n("b-button",{attrs:{type:"submit",size:"sm",variant:"primary"}},[e._v("update")]),e._v(" "),n("b-row",{staticClass:"sr-only"},[n("b-form-input",{attrs:{id:"uid",value:""+(e.form.uid=t.item.id)}}),e._v(" "),n("b-form-input",{attrs:{id:"roleName",value:""+(e.form.role=t.item.role)}})],1)],1):e._e(),e._v(" "),t.item.changed?e._e():n("div")])]}}])}),e._v(" "),n("app-footer")],1)},staticRenderFns:[]},q=n("VU/8")(A,F,!1,null,null,null).exports;n("Jmt5"),n("9M+g");o.a.use(r.a),o.a.use(s.a),o.a.use(l.a);var H=new s.a({routes:[{path:"/signIn",name:"SignIn",component:b},{path:"/coffee-beans",name:"CoffeeBean",component:V},{path:"/coffee-shops",name:"CoffeeShop",component:R},{path:"/users",name:"User",component:q}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:H,template:"<App/>",components:{App:a}})},SsFf:function(e,t,n){"use strict";var o=n("xT7b").a,i=n("VU/8")(o,null,!1,function(e){n("1ZUK")},null,null);t.a=i.exports},Z9qb:function(e,t){},r15W:function(e,t,n){"use strict";var o=n("E9Zr").a,i=n("VU/8")(o,null,!1,function(e){n("9R6X")},null,null);t.a=i.exports},rkBG:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.0de7c13f412308bdeecf.js.map