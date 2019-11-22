webpackJsonp([1],{"+MJ6":function(t,e){},"/+xR":function(t,e,a){t.exports=a.p+"static/img/logo_nomads_01_white.cc8ee43.svg"},"1oZg":function(t,e,a){t.exports=a.p+"static/img/thumb_02-2.cf892b6.jpg"},"5NVl":function(t,e){},"5c1G":function(t,e,a){t.exports=a.p+"static/img/thumb_01-1.b8229ea.jpg"},FRzB:function(t,e,a){t.exports=a.p+"static/img/thumb_04.01d46b6.jpg"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("mtWM"),r=a.n(i),n=a("Rf8U"),o=a.n(n),c=a("ZZvs"),l=a.n(c),d=(a("SYh3"),a("K3J8"),a("sUu7")),u=a("NYxO"),v={namespaced:!0,state:{tickets:[]},actions:{getTickets:function(t){t.commit("LOADING",!0,{root:!0}),r.a.get("https://vue-course-api.hexschool.io/api/hexfestival/products").then(function(e){t.commit("TICKETS",e.data.products),t.commit("LOADING",!1,{root:!0})})}},mutations:{TICKETS:function(t,e){t.tickets=e}},getters:{tickets:function(t){return t.tickets}}},_={namespaced:!0,state:{cart:{carts:[]}},actions:{getCart:function(t){t.commit("LOADING",!0,{root:!0});r.a.get("https://vue-course-api.hexschool.io/api/hexfestival/cart").then(function(e){e.data.data.carts&&t.commit("CART",e.data.data),t.commit("LOADING",!1,{root:!0}),console.log("取得購物車",e.data.data)})},addtoCart:function(t,e){var a=e.id,s=e.qty;t.commit("LOADING",!0,{root:!0});var i={product_id:a,qty:s};r.a.post("https://vue-course-api.hexschool.io/api/hexfestival/cart",{data:i}).then(function(e){console.log("加入購物車:",e),t.commit("LOADING",!1,{root:!0}),t.dispatch("getCart")})},removeCart:function(t,e){console.log("觸發removeCart");var a="https://vue-course-api.hexschool.io/api/hexfestival/cart/"+e;t.commit("LOADING",!0,{root:!0}),r.a.delete(a).then(function(e){t.commit("LOADING",!1,{root:!0}),t.dispatch("getCart"),console.log("刪除購物車項目",e)})}},mutations:{CART:function(t,e){t.cart=e}},getters:{cart:function(t){return t.cart}}};s.default.use(u.a);var m=new u.a.Store({strict:!0,state:{isLoading:!1},actions:{updateLoading:function(t,e){t.commit("LOADING",e)}},mutations:{LOADING:function(t,e){t.isLoading=e}},getters:{isLoading:function(t){return t.isLoading}},modules:{ticketModules:v,cartModules:_}}),p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var f=a("VU/8")({name:"App"},p,!1,function(t){a("5NVl")},null,null).exports,h=a("/ocq"),g=a("Dd8w"),C=a.n(g),b=a("7t+N"),x=a.n(b),k=a("R5/K"),w={name:"Navbar",data:function(){return{hamburgerOpen:!1}},computed:C()({},Object(u.c)("cartModules",["cart"]),Object(u.c)(["isLoading"])),methods:C()({hamburgerToggle:function(){this.hamburgerOpen=!this.hamburgerOpen},removeCart:function(t){this.$store.dispatch("cartModules/removeCart",t)}},Object(u.b)("cartModules",["getCart"])),created:function(){this.getCart()},watch:{cart:function(){k.a.from(".circle",1.5,{scale:1.1,opacity:1,backgroundColor:"#b5c4fd"})}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("nav",{staticClass:"nav mt-md-4 mt-sm-2",class:{"nav-open":t.hamburgerOpen},attrs:{id:"siteNav"}},[t._m(0),t._v(" "),a("div",{staticClass:"nav-toggle",on:{click:t.hamburgerToggle}},[a("span",{staticClass:"nav-toggle__picto"},[t.hamburgerOpen?t._e():a("i",{staticClass:"fa fa-bars"}),t._v(" "),t.hamburgerOpen?a("i",{staticClass:"fas fa-times"}):t._e()])]),t._v(" "),a("div",{staticClass:"nav__bg"}),t._v(" "),a("ul",{staticClass:"nav__items"},[a("li",{staticClass:"nav__item"},[a("router-link",{staticClass:"nav__link",attrs:{to:"/lineup"}},[t._v("\n          LINE UP\n        ")])],1),t._v(" "),a("li",{staticClass:"nav__item"},[a("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[t._v("\n          EXPERIENCES\n        ")])],1),t._v(" "),a("li",{staticClass:"nav__item"},[a("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[t._v("\n        ABOUT\n        ")])],1),t._v(" "),a("li",{staticClass:"nav__item"},[a("router-link",{staticClass:"nav__link",attrs:{to:"/"}},[t._v("\n          INFO & TRAVEL\n        ")])],1)]),t._v(" "),a("div",{staticClass:"dropdown cart "},[a("div",{staticClass:"cart-toggle d-flex align-items-center",attrs:{"data-toggle":"dropdown","data-flip":"false"}},[a("span",{staticClass:"cart-toggle__label mr-1"},[t._v("Cart")]),t._v(" "),t.cart.carts.length>0?a("span",{staticClass:"cart-toggle__count"},[a("div",{staticClass:"circle"},[t._v("\n            "+t._s(t.cart.carts.length)+"\n          ")])]):t._e()]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-right p-3",staticStyle:{"min-width":"300px"},attrs:{"data-offset":"400"}},[a("h6",[t._v("Your Cart")]),t._v(" "),a("table",{staticClass:"table table-sm"},[a("tbody",t._l(t.cart.carts,function(e){return t.cart.carts.length?a("tr",{key:e.id},[a("td",{staticClass:"align-middle text-center"},[a("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeCart(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+t._s(e.product.unit))]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(e.total)))])]):t._e()}),0)]),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-block",attrs:{to:"/checkout"}},[a("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}}),t._v(" Checkout!\n        ")])],1)])]),t._v(" "),t._m(1),t._v(" "),a("div")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"logo mx-auto",attrs:{href:"/"}},[e("img",{attrs:{src:a("n6BQ")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"cart"}},[e("div",{attrs:{id:"cart__bg"}})])}]};var L=a("VU/8")(w,y,!1,function(t){a("X9t2")},"data-v-54fbf2ae",null).exports,E=a("TVmP"),N={name:"CustomerOrder",components:{Navbar:L,Footer:E.default},computed:C()({},Object(u.c)("cartModules",["cart"]),Object(u.c)(["isLoading"])),data:function(){return{coupon_code:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:C()({removeCart:function(t){this.$store.dispatch("cartModules/removeCart",t)}},Object(u.b)("cartModules",["getCart"]),{addCouponCode:function(){var t=this,e={code:t.coupon_code};t.isLoading=!0,this.$http.post("https://vue-course-api.hexschool.io/api/hexfestival/coupon",{data:e}).then(function(e){console.log(e),t.getCart(),t.isLoading=!1})},createOrder:function(){var t=this,e=this,a=e.form;this.$validator.validate().then(function(s){s?t.$http.post("https://vue-course-api.hexschool.io/api/hexfestival/order",{data:a}).then(function(t){console.log("訂單已建立",t),t.data.success&&e.$router.push("/checkout/"+t.data.orderId),e.isLoading=!1}):console.log("欄位填寫不完整")})}}),created:function(){this.getCart()}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customOrders"},[a("Navbar"),t._v(" "),a("div",{staticClass:"container pb-5"},[a("div",{staticClass:"row pt-5"},[a("div",{staticClass:"col-md-6 right-line"},[a("div",{staticClass:"mb-5 row col-md-12 justify-content-center"},[a("table",{staticClass:"table mt-4"},[t._m(0),t._v(" "),a("tbody",t._l(t.cart.carts,function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeCart(e.id)}}},[a("i",{staticClass:"far fa-trash-alt"})])]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v("\n                  "+t._s(e.product.title)+"\n                  "),e.coupon?a("div",{staticClass:"text-success"},[t._v("\n                    use coupon\n                  ")]):t._e()]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(e.final_total)))])])}),0),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("Total")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.cart.total)))])]),t._v(" "),t.cart.final_total!==t.cart.total?a("tr",[a("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("sale")]),t._v(" "),a("td",{staticClass:"text-right text-success"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])]):t._e()])]),t._v(" "),a("div",{staticClass:"input-group mb-3 input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter your coupon"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("\n                Coupon code\n              ")])])])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("form",{staticClass:"col-md-11",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"Email"},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t._v(" "),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.first("email")))]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("Full Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"Full Name"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t._v(" "),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("Please enter your full name")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("Phone Number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required|digits:10",expression:"'required|digits:10'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("tel")},attrs:{type:"tel",id:"usertel",name:"tel",placeholder:"Phone Number"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t._v(" "),t.errors.has("tel")?a("span",{staticClass:"text-danger"},[t._v("Please enter your phone number")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"Address"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t._v(" "),t.errors.has("address")?a("span",{staticClass:"text-danger"},[t._v("Please enter your address")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("Something to say")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._v(" "),t._m(1)])])])]),t._v(" "),a("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th"),this._v(" "),e("th",[this._v("Item")]),this._v(" "),e("th",[this._v("Unit")]),this._v(" "),e("th",[this._v("Price")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-secondary"},[this._v("Check Out!")])])}]},O=a("VU/8")(N,T,!1,null,null,null).exports,$={data:function(){return{orderId:"",order:{user:{}}}},components:{Navbar:L,Footer:E.default},methods:{getOrder:function(){var t=this,e="https://vue-course-api.hexschool.io/api/hexfestival/order/"+t.orderId;t.isLoading=!0,this.$http.get(e).then(function(e){t.order=e.data.order,t.isLoading=!1})},payOrder:function(){var t=this,e="https://vue-course-api.hexschool.io/api/hexfestival/pay/"+t.orderId;t.isLoading=!0,this.$http.post(e,t.orderId).then(function(e){console.log(e),e.data.success&&t.getOrder(),t.isLoading=!1})}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customOrders"},[a("Navbar"),t._v(" "),a("div",{staticClass:"container pb-5"},[a("h2",{staticClass:"text-center pt-5"},[t._v("Payment Confirmation")]),t._v(" "),a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[a("table",{staticClass:"table"},[t._m(0),t._v(" "),a("tbody",t._l(t.order.products,function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(e.final_total)))])])}),0),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("Total")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.order.total)))])])])]),t._v(" "),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{attrs:{width:"100"}},[t._v("Email")]),t._v(" "),a("td",[t._v(t._s(t.order.user.email))])]),t._v(" "),a("tr",[a("th",[t._v("Name")]),t._v(" "),a("td",[t._v(t._s(t.order.user.name))])]),t._v(" "),a("tr",[a("th",[t._v("Phone Number")]),t._v(" "),a("td",[t._v(t._s(t.order.user.tel))])]),t._v(" "),a("tr",[a("th",[t._v("Address")]),t._v(" "),a("td",[t._v(t._s(t.order.user.address))])]),t._v(" "),a("tr",[a("th",[t._v("Payment")]),t._v(" "),a("td",[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("Payment Completed.")]):a("span",[t._v("Unpaid")])])])])]),t._v(" "),!1===t.order.is_paid?a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-secondary"},[t._v("GO pay")])]):t._e()])])]),t._v(" "),a("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("Item")]),this._v(" "),e("th",[this._v("Unit")]),this._v(" "),e("th",[this._v("Price")])])}]},M=a("VU/8")($,P,!1,null,null,null).exports,A={name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(t,e){var a=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:a}),this.removeMessageWithTiming(a)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var e=this;setTimeout(function(){e.messages.forEach(function(a,s){a.timestamp===t&&e.messages.splice(s,1)})},5e3)}},created:function(){var t=this;t.$bus.$on("messsage:push",function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(e,a)})}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-alert"},t._l(t.messages,function(e,s){return a("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v("\n    "+t._s(e.message)+"\n    "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(s)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},staticRenderFns:[]};var F=a("VU/8")(A,I,!1,function(t){a("e8HM")},null,null).exports,U=a("c/Tr"),S=a.n(U),R=a("lHA8"),D=a.n(R),V={name:"LineupCards",data:function(){return{products:[],product:{},isLoading:!1,status:{loadingItem:!1},searchText:"",categories:[]}},computed:{filterData:function(){var t=this;return t.searchText?t.products.filter(function(e){return e.title.toLowerCase().includes(t.searchText.toLowerCase())||e.category.toLowerCase().includes(t.searchText.toLowerCase())}):this.products}},components:{},methods:{getProducts:function(){var t=this;t.isLoading=!0,this.$http.get("https://vue-course-api.hexschool.io/api/hexlineup/products/all").then(function(e){t.products=e.data.products,t.getCategories(),t.isLoading=!1})},getProduct:function(t){var e=this,a="https://vue-course-api.hexschool.io/api/hexlineup/product/"+t;e.isLoading=!0,e.status.loadingItem=t,this.$http.get(a).then(function(t){console.log(t),e.product=t.data.product,e.isLoading=!1,x()("#productModal").modal("show"),e.status.loadingItem=""})},getCategories:function(){var t=new D.a;this.products.forEach(function(e){t.add(e.category)}),this.categories=S()(t),console.log(this.categories)}},created:function(){this.getProducts()}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"list-group sticky-top"},[t._l(t.categories,function(e){return a("a",{key:e,staticClass:"list-group-item list-group-item-action",class:{active:e===t.searchText},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.searchText=e}}},[t._v("\n              "+t._s(e)+"\n            ")])}),t._v(" "),a("a",{staticClass:"list-group-item list-group-item-action",class:{active:""===t.searchText},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.searchText=""}}},[t._v("\n              All\n            ")])],2)]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"d-flex mb-4"},[a("form",{staticClass:"form-inline my-3 my-lg-0"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.searchText=""}}},[a("i",{staticClass:"fa fa-times"})])])])]),t._v(" "),a("button",{staticClass:"btn btn-outline-primary ml-auto d-none d-md-block",attrs:{type:"button"},on:{click:t.getProducts}},[t._v("\n              Retrive new data\n            ")])]),t._v(" "),a("div",{staticClass:"tab-pane",attrs:{id:"list-gift"}},[a("div",{staticClass:"row "},t._l(t.filterData,function(e){return a("div",{key:e.id,staticClass:"col-md-4 mb-4 "},[a("div",{staticClass:"card border-0 lineupCard",on:{click:function(a){return t.getProduct(e.id)}}},[a("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),t._v(" "),a("div",{staticClass:"card-footer d-flex"},[a("div",{staticClass:"lineupCard__title"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t\t\t")])])])])}),0)])])]),t._v(" "),a("div",{staticClass:"modal fade lineupModal",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.product.title))]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"modal-body pt-0"},[a("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}}),t._v(" "),a("p",{staticClass:"mt-3"},[t._v(t._s(t.product.description))])])])])])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var j={name:"Lineup",components:{Navbar:L,Alert:F,LineupCards:a("VU/8")(V,q,!1,function(t){a("g9Ub")},"data-v-3a82bfb2",null).exports,Footer:E.default},data:function(){return{isLoading:!1}},methods:{},created:function(){}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"pageTickets"}},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("Navbar"),t._v(" "),a("Alert"),t._v(" "),t._m(0),t._v(" "),a("LineupCards"),t._v(" "),a("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"products__header"},[e("div",{staticClass:"products__header__cover-wrapper"})])}]};var G=a("VU/8")(j,B,!1,function(t){a("d72E")},"data-v-41a2aad2",null).exports,H={name:"Test",data:function(){return{}},computed:{},methods:{},mounted:function(){var t=new ScrollMagic.Controller,e=new ScrollMagic.Scene({duration:500}).setPin("#triggerOne"),a=new ScrollMagic.Scene({triggerElement:"#triggerTwo",duration:460}).setPin("#triggerTwo");t.addScene([e,a])},created:function(){}},z={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"container"}},[e("section",{staticClass:"sceneContainer"},[e("div",{staticClass:"triggerShape",attrs:{id:"triggerOne"}},[e("p",{staticStyle:{position:"fixed",top:"10px",left:"10px"}},[this._v("Take on me!")])])]),this._v(" "),e("section",{staticClass:"sceneContainer"},[e("div",{staticClass:"triggerShape",attrs:{id:"triggerTwo"}},[e("p",[this._v("Take me on!")])])])])])}]};var Q=a("VU/8")(H,z,!1,function(t){a("PC5m")},"data-v-9dd6a85a",null).exports,K={name:"HomeBanner",components:{Navbar:L},data:function(){return{}},computed:{},methods:{},mounted:function(){var t=new ScrollMagic.Controller,e=new TimelineMax;e.to("#fifth",6,{y:-500},"-=6").to("#forth",6,{y:-400},"-=6").to("#third",6,{y:-300},"-=6").to("#second",6,{y:-200},"-=6").to("#first",6,{y:-100},"-=6").to(".content, .blur",6,{top:"35%"},"-=6").to(".headline__wrapper",3,{y:-50},"-=4").from(".one",3,{top:"0px",autoAlpha:0},"-=4").from(".two",3,{top:"0px",autoAlpha:0},"-=3.5").from(".three",3,{top:"0px",autoAlpha:0},"-=3.5").from(".four",3,{top:"0px",autoAlpha:0},"-=3.5").to(".text",3,{y:70},"-=4");new ScrollMagic.Scene({triggerElement:"section",duration:"200%",triggerHook:0}).setTween(e).setPin("section").addTo(t)},created:function(){}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navbar"),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"container-fluid",attrs:{id:"first-section"}},[s("div",{staticClass:"hero-wrapper"},[s("div",{staticClass:"title"},[t._v("Going Wild.")]),t._v(" "),s("div",{staticClass:"images"},[s("div",{staticClass:"image-wrapper",attrs:{id:"first"}}),t._v(" "),s("div",{staticClass:"image-wrapper",attrs:{id:"second"}}),t._v(" "),s("div",{staticClass:"image-wrapper",attrs:{id:"third"}}),t._v(" "),s("div",{staticClass:"image-wrapper",attrs:{id:"forth"}}),t._v(" "),s("div",{staticClass:"image-wrapper",attrs:{id:"fifth"}})]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"container headline__wrapper"},[s("h2",{staticClass:"ticket__headline"},[s("span",{staticClass:"ticket__sub ticket__sub__blue"},[t._v("A Place Like No Other")])]),t._v(" "),s("div",{staticClass:"header-subtitle"},[t._v("— festival nomads —")])]),t._v(" "),s("div",{staticClass:"content-images"},[s("div",{staticClass:"content-image-wrapper one"},[s("img",{attrs:{src:a("5c1G")}})]),t._v(" "),s("div",{staticClass:"content-image-wrapper two"},[s("img",{attrs:{src:a("1oZg")}})]),t._v(" "),s("div",{staticClass:"content-image-wrapper three"},[s("img",{attrs:{src:a("QEbn")}})]),t._v(" "),s("div",{staticClass:"content-image-wrapper four"},[s("img",{attrs:{src:a("FRzB")}})])]),t._v(" "),s("p",{staticClass:"text"},[t._v("\n            A multi award-winning music, arts and culture festival, located in our magical coastal home of Portmeirion, with an eclectic mix of iconic and the best new artists. Our main stage is a Mediterranean-inspired, Grade II-listed fantasy village, surrounded by estuary, mountains and woodlands. During the festival, the village and surrounding woodlands come alive as a unique series of surreal and inspiring venues.\n          ")])])])])])}]};var W=a("VU/8")(K,Z,!1,function(t){a("cMHE")},"data-v-74026a9a",null).exports,J={name:"TicketCards",computed:C()({},Object(u.c)("ticketModules",["tickets"])),data:function(){return{swiperOption:{slidesPerView:3,spaceBetween:10,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},centeredSlides:!1,breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:1,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},cart:{}}},components:{},methods:C()({bgcss:function(t){return{"background-image":"url("+t+")","background-position":"center center","background-size":"cover"}}},Object(u.b)("ticketModules",["getTickets"]),{addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("cartModules/addtoCart",{id:t,qty:e})}}),created:function(){this.getTickets()}},X={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("md-card",[a("md-card-actions",[a("md-button",{staticClass:"md-icon-button",attrs:{target:"_blank",href:"https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/21-infinite-loop-with-slides-per-group.vue"}})],1),t._v(" "),a("md-card-media",[a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.tickets,function(e){return a("swiper-slide",{key:e.id,staticClass:"col-md-4 col-sm-12 d-flex align-items-stretch"},[a("div",{staticClass:"card h-100 ticket__card"},[a("img",{staticClass:"card-img-top",attrs:{src:e.imageUrl,alt:"..."}}),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(e.description))]),t._v(" "),a("div",{staticClass:"ticket__price"},[t._v("$"+t._s(e.price))])]),t._v(" "),a("div",{staticClass:"card-footer"},[a("button",{staticClass:"add-to-cart cta cta-box",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),t.addtoCart(e.id)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\tReserve\n\t\t\t\t\t\t\t\t\t")])])])])}),t._v(" "),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),a("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[t._v("Back")]),t._v(" "),a("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[t._v("See more")])],2)],1)],1)],1)},staticRenderFns:[]};var Y={name:"Tickets",components:{Navbar:L,HomeBanner:W,Alert:F,TicketCards:a("VU/8")(J,X,!1,function(t){a("+MJ6")},"data-v-1586bf76",null).exports,Footer:E.default},data:function(){return{tempProduct:{},isNew:!1,isLoading:!1}},methods:{},created:function(){}},tt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("Alert"),t._v(" "),a("HomeBanner"),t._v(" "),a("div",{attrs:{id:"home-lineup"}},[a("div",{attrs:{id:"home-lineup__overlay"}}),t._v(" "),t._m(0),t._v(" "),a("div",{attrs:{id:"home-lineup__title-wrapper"}},[t._m(1),t._v(" "),a("button",{staticClass:"add-to-cart cta cta-box mt-3",attrs:{type:"submit"}},[a("router-link",{staticClass:"nav__link",attrs:{to:"/lineup"}},[t._v("\n          Line Up\n        ")])],1)])]),t._v(" "),a("section",{staticClass:"tickets"},[a("div",{staticClass:"container"},[t._m(2),t._v(" "),a("div",{staticClass:"header-subtitle"},[t._v("— festival nomads —")]),t._v(" "),t._m(3),t._v(" "),a("TicketCards")],1)]),t._v(" "),a("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:" lazyloaded",attrs:{id:"home-lineup__img"}},[e("picture",{staticStyle:{display:"none"}},[e("source"),this._v(" "),e("img",{staticClass:"lazyautosizes lazyloaded",attrs:{sizes:"1181px",alt:"festival"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{attrs:{id:"home-lineup__title"}},[a("span",[t._v("Music ")]),t._v(" "),a("span",[t._v("experiences ")]),t._v(" "),a("span",[t._v("& activities ")]),t._v(" "),a("span",[t._v("culture ")]),t._v(" "),a("span",[t._v("food & drink.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"ticket__headline"},[e("span",{staticClass:"ticket__sub"},[this._v("The Funkest Festival")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home__section-1__top"},[e("div",{staticClass:"home__section-1__letter"},[e("img",{attrs:{src:a("uk5A"),alt:"element"}})])])}]};var et=a("VU/8")(Y,tt,!1,function(t){a("zDQC")},"data-v-85f47658",null).exports;s.default.use(h.a);var at=new h.a({linkActiveClass:"active",routes:[{path:"/",name:"Home",component:et},{path:"/lineup",name:"Lineup",component:G},{path:"/checkout",name:"CustomerOrders",component:O},{path:"/checkout/:orderId",name:"CustomerCheckout",component:M},{path:"/test",name:"test",component:Q},{path:"*",redirect:"/"}]});s.default.prototype.$bus=new s.default;var st=a("7QTg"),it=a.n(st),rt=a("Lgyv"),nt=a.n(rt);s.default.use(it.a),s.default.use(nt.a),s.default.config.productionTip=!1,s.default.use(o.a,r.a),s.default.use(d.a),r.a.defaults.withCredentials=!0,s.default.component("Loading",l.a),s.default.filter("currency",function(t){return"$"+Number(t).toFixed(0).replace(/./g,function(t,e,a){return e&&"."!==t&&(a.length-e)%3==0?(", "+t).replace(/\s/g,""):t})}),new s.default({el:"#app",router:at,store:m,components:{App:f},template:"<App/>"}),at.beforeEach(function(t,e,a){if(t.meta.requiresAuth){r.a.post("https://vue-course-api.hexschool.io/api/user/check").then(function(t){console.log(t.data),t.data.success?a():a({path:"/login"})})}else a()})},PC5m:function(t,e){},QEbn:function(t,e,a){t.exports=a.p+"static/img/thumb_03.cba7cdf.jpg"},SYh3:function(t,e){},TVmP:function(t,e,a){"use strict";var s=a("UthT"),i=a.n(s),r=a("l5Q5");var n=function(t){a("uZoK")},o=a("VU/8")(i.a,r.a,!1,n,"data-v-787f6e36",null);e.default=o.exports},UthT:function(t,e){},X9t2:function(t,e){},cMHE:function(t,e){},d72E:function(t,e){},e8HM:function(t,e){},g9Ub:function(t,e){},l5Q5:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{attrs:{id:"footer"}},[a("div",{attrs:{id:"footer__inner"}},[a("nav",{attrs:{id:"footer__nav"}},[a("ul",[a("li",{staticClass:"footer__nav__item"},[a("router-link",{staticClass:"footer__nav__link",attrs:{to:"/lineup"}},[t._v("\n              LINE UP\n            ")])],1),t._v(" "),a("li",{staticClass:"footer__nav__item"},[a("router-link",{staticClass:"footer__nav__link",attrs:{to:"/"}},[t._v("\n              EXPERIENCES\n            ")])],1),t._v(" "),a("li",{staticClass:"footer__nav__item"},[a("router-link",{staticClass:"footer__nav__link",attrs:{to:"/"}},[t._v("\n              ABOUT\n            ")])],1),t._v(" "),a("li",{staticClass:"footer__nav__item"},[a("router-link",{staticClass:"footer__nav__link",attrs:{to:"/"}},[t._v("\n              INFO & TRAVEL\n            ")])],1)]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"footer__social"}},[e("div",{staticClass:"footer__social__item"},[e("a",{staticClass:"footer__social__link",attrs:{href:"#",target:"_blank"}},[e("i",{staticClass:"fab fa-twitter"})])]),this._v(" "),e("div",{staticClass:"footer__social__item"},[e("a",{staticClass:"footer__social__link",attrs:{href:"#",target:"_blank"}},[e("i",{staticClass:"fab fa-instagram"})])]),this._v(" "),e("div",{staticClass:"footer__social__item"},[e("a",{staticClass:"footer__social__link",attrs:{href:"#",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"footer__logo"}},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:a("/+xR"),alt:"logo"}})]),this._v(" "),e("a",{staticClass:"mt-3",attrs:{id:"footer__credits",href:"/"}},[this._v("© 2019 Nomads Festival")])])}]};e.a=s},n6BQ:function(t,e,a){t.exports=a.p+"static/img/logo_nomads_01.42cd9c2.svg"},uZoK:function(t,e){},uk5A:function(t,e,a){t.exports=a.p+"static/img/element_02.62b8a47.png"},zDQC:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6523fd4340e29e5bdeef.js.map