(this.webpackJsonpekomerc=this.webpackJsonpekomerc||[]).push([[0],{48:function(e,t,n){},50:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),i=n(28),a=n.n(i),s=(n(48),n(14)),l=n.n(s),o=n(4),u=n(19),d=(n(50),n(9)),b=n(8),m=n(6),p=(n(57),n(20)),j=(n(58),Object(d.g)((function(e){var t=e.title,n=e.imageUrl,r=e.size,i=e.history,a=e.linkUrl,s=e.match;return Object(c.jsxs)("div",{className:"".concat(r," menu-item"),onClick:function(){return i.push("".concat(s.url).concat(a))},children:[Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(n,")")},className:"background-image"}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(c.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),h=(n(62),Object(m.a)([function(e){return e.directory}],(function(e){return e.sections}))),g=Object(m.b)({sections:h}),O=Object(b.b)(g)((function(e){var t=e.sections;return Object(c.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(p.a)(e,["id"]);return Object(c.jsx)(j,Object(o.a)({},n),t)}))})})),f=function(){return Object(c.jsx)("div",{className:"homepage",children:Object(c.jsx)(O,{})})},v={hats:1,sneakers:2,jackets:3,womens:4,mens:5},x=Object(m.a)([function(e){return e.shop}],(function(e){return e.collections})),y=(n(63),function(e){var t=e.children,n=e.isGoogleSignIn,r=e.inverted,i=Object(p.a)(e,["children","isGoogleSignIn","inverted"]);return Object(c.jsx)("button",Object(o.a)(Object(o.a)({className:"".concat(r?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},i),{},{children:t}))}),w=(n(64),{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"}),k=function(){return{type:w.TOGGLE_CART_HIDDEN}},N=function(e){return{type:w.ADD_ITEM,payload:e}},E=Object(b.b)(null,(function(e){return{addItem:function(t){return e(N(t))}}}))((function(e){var t=e.item,n=e.addItem,r=t.name,i=t.price,a=t.imageUrl;return Object(c.jsxs)("div",{className:"collection-item",children:[Object(c.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(c.jsxs)("div",{className:"collection-footer",children:[Object(c.jsx)("span",{className:"name",children:r}),Object(c.jsx)("span",{className:"name",children:i})]}),Object(c.jsx)(y,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})})),U=(n(65),function(e){var t=e.title,n=e.items;return Object(c.jsxs)("div",{className:"collection-preview",children:[Object(c.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(c.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(c.jsx)(E,{item:e},e.id)}))})]})}),I=(n(66),Object(m.b)({collections:x})),C=Object(b.b)(I)((function(e){var t=e.collections;return Object(c.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(p.a)(e,["id"]);return Object(c.jsx)(U,Object(o.a)({},n),t)}))})})),T=(n(67),Object(b.b)((function(e,t){return{collection:(n=t.match.params.collectionID,void Object(m.a)([x],(function(e){return e.find((function(e){return e.id===v[n]}))})))(e)};var n}))((function(e){var t=e.collection,n=t.title,r=t.items;return console.log(r),Object(c.jsxs)("div",{className:"category",children:[Object(c.jsx)("h2",{className:"title",children:n}),Object(c.jsx)("div",{className:"items",children:r.map((function(e){return Object(c.jsx)(E,{item:e},e.id)}))})]})}))),S=function(e){var t=e.match;return Object(c.jsxs)("div",{className:"shop-page",children:[Object(c.jsx)(d.b,{exact:!0,path:"".concat(t.path),component:C}),Object(c.jsx)(d.b,{path:"".concat(t.path,"/:categoryId"),component:T})]})},R=n(24),M=n(31),B=(n(68),n(69),function(e){var t=e.handleChange,n=e.label,r=Object(p.a)(e,["handleChange","label"]);return Object(c.jsxs)("div",{className:"group",children:[n?Object(c.jsx)("label",{className:"".concat(r.value.length?"shrink":""," form-input-label"),children:n}):null,Object(c.jsx)("input",Object(o.a)({className:"form-input",onChange:t},r))]})}),D=n(25),_=(n(70),n(73),function(){var e=Object(u.a)(l.a.mark((function e(t,n){var c,r,i,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return c=P.doc("users/".concat(t.uid)),e.next=5,c.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,a=new Date,e.prev=9,e.next=12,c.set(Object(o.a)({displayName:r,email:i,createdAt:a},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());D.a.initializeApp({apiKey:"AIzaSyDKzQIDLOxE_4ROwF8Y89N0lfl73F2RujI",authDomain:"ekomerc-b859a.firebaseapp.com",databaseURL:"https://ekomerc-b859a.firebaseio.com",projectId:"ekomerc-b859a",storageBucket:"ekomerc-b859a.appspot.com",messagingSenderId:"760037469874",appId:"1:760037469874:web:5004e3e90d1a3846ee23ab",measurementId:"G-3KZZNDGH77"});var A=D.a.auth(),P=D.a.firestore(),G=new D.a.auth.GoogleAuthProvider;G.setCustomParameters({prompt:"select_account"});var H=function(){return A.signInWithPopup(G)},L=(D.a,function(){var e=Object(r.useState)({email:"",password:""}),t=Object(M.a)(e,2),n=t[0],i=t[1],a=n.email,s=n.password,d=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,A.signInWithEmailAndPassword(a,s);case 4:i({email:"",password:""}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,c=t.value,r=t.name;i(Object(o.a)(Object(o.a)({},n),{},Object(R.a)({},r,c)))};return Object(c.jsxs)("div",{className:"sign-in",children:[Object(c.jsx)("h2",{children:"I already have an account."}),Object(c.jsx)("span",{children:"Sign in with your email and password"}),Object(c.jsxs)("form",{onSubmit:d,children:[Object(c.jsx)(B,{name:"email",type:"email",value:a,handleChange:b,label:"email",required:!0}),Object(c.jsx)(B,{name:"password",type:"password",value:s,handleChange:b,label:"password",required:!0}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)(y,{type:"submit",value:"Submit Form",children:"Sign in"}),Object(c.jsx)(y,{onClick:H,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}),q=(n(75),function(){var e=Object(r.useState)({displayName:"",email:"",password:"",confirmPassword:""}),t=Object(M.a)(e,2),n=t[0],i=t[1],a=n.displayName,s=n.email,d=n.password,b=n.confirmPassword,m=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),d===b){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,A.createUserWithEmailAndPassword(s,d);case 7:return n=e.sent,c=n.user,e.next=11,_(c,{displayName:a});case 11:i({displayName:"",email:"",password:"",confirmPassword:""}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,c=t.name,r=t.value;i(Object(o.a)(Object(o.a)({},n),{},Object(R.a)({},c,r)))};return Object(c.jsxs)("div",{className:"sign-up",children:[Object(c.jsx)("h2",{className:"title",children:"I do not have a account"}),Object(c.jsx)("span",{children:"Sing Up with your email and password"}),Object(c.jsxs)("form",{className:"sign-up-form",onSubmit:m,children:[Object(c.jsx)(B,{type:"text",name:"displayName",value:a,onChange:p,label:"Display Name",required:!0}),Object(c.jsx)(B,{type:"email",name:"email",value:s,onChange:p,label:"email",required:!0}),Object(c.jsx)(B,{type:"password",name:"password",value:d,onChange:p,label:"password",required:!0}),Object(c.jsx)(B,{type:"password",name:"confirmPassword",value:b,onChange:p,label:"Confrim Password",required:!0}),Object(c.jsx)(y,{type:"submit",children:"SIGN UP "})]})]})}),F=(n(76),function(){return Object(c.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(c.jsx)(L,{}),Object(c.jsx)(q,{})]})}),W=(n(77),n(78),Object(b.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:w.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(N(t))},removeItem:function(t){return e(function(e){return{type:w.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,i=e.removeItem,a=t.name,s=t.imageUrl,l=t.price,o=t.quantity;return Object(c.jsxs)("div",{className:"checkout-item",children:[Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)("img",{src:s,alt:"shop item"})}),Object(c.jsx)("span",{className:"name",children:a}),Object(c.jsxs)("span",{className:"quantity",children:[Object(c.jsx)("div",{className:"arrow",onClick:function(){return i(t)},children:"\u276e"}),Object(c.jsx)("span",{className:"value",children:o}),Object(c.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object(c.jsx)("span",{className:"price",children:l}),Object(c.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),J=function(e){return e.cart},z=Object(m.a)([J],(function(e){return e.cartItems})),V=Object(m.a)([J],(function(e){return e.hidden})),K=Object(m.a)([z],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Q=Object(m.a)([z],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Y=Object(m.b)({cartItems:z,total:Q}),X=Object(b.b)(Y)((function(e){var t=e.cartItems,n=e.total;return Object(c.jsxs)("div",{className:"checkout-page",children:[Object(c.jsxs)("div",{className:"checkout-header",children:[Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Product"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Description"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Quantity"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Price"})}),Object(c.jsx)("div",{className:"header-block",children:Object(c.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(c.jsx)(W,{cartItem:e},e.id)})),Object(c.jsx)("div",{className:"total",children:Object(c.jsxs)("span",{children:["Total: $",n]})})]})})),Z=n(17);n(79);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var te=r.createElement("desc",null,"Created with Sketch."),ne=r.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function ce(e,t){var n=e.title,c=e.titleId,i=ee(e,["title","titleId"]);return r.createElement("svg",$({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},i),void 0===n?r.createElement("title",{id:c},"Group"):n?r.createElement("title",{id:c},n):null,te,ne)}var re=r.forwardRef(ce);n.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var se=r.createElement("g",null),le=r.createElement("g",null),oe=r.createElement("g",null),ue=r.createElement("g",null),de=r.createElement("g",null),be=r.createElement("g",null),me=r.createElement("g",null),pe=r.createElement("g",null),je=r.createElement("g",null),he=r.createElement("g",null),ge=r.createElement("g",null),Oe=r.createElement("g",null),fe=r.createElement("g",null),ve=r.createElement("g",null),xe=r.createElement("g",null);function ye(e,t){var n=e.title,c=e.titleId,i=ae(e,["title","titleId"]);return r.createElement("svg",ie({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},i),n?r.createElement("title",{id:c},n):null,r.createElement("g",null,r.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),se,le,oe,ue,de,be,me,pe,je,he,ge,Oe,fe,ve,xe)}var we=r.forwardRef(ye),ke=(n.p,n(80),Object(m.b)({itemCount:K})),Ne=Object(b.b)(ke,(function(e){return{toggleCartHidden:function(){return e(k())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(c.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(c.jsx)(we,{className:"shopping-icon"}),Object(c.jsx)("span",{className:"item-count",children:n})]})})),Ee=(n(81),n(82),function(e){var t=e.item,n=t.imageUrl,r=t.price,i=t.name,a=t.quantity;return Object(c.jsxs)("div",{className:"cart-item",children:[Object(c.jsx)("img",{src:n,alt:"item"}),Object(c.jsxs)("div",{className:"item-details",children:[Object(c.jsx)("span",{className:"name",children:i}),Object(c.jsxs)("span",{className:"price",children:[a," x $",r]})]})]})}),Ue=Object(m.b)({cartItems:z}),Ie=Object(d.g)(Object(b.b)(Ue,(function(e){return{toggleCartHidden:function(){return e(k())}}}))((function(e){var t=e.cartItems,n=e.history,r=e.toggleCartHidden;return Object(c.jsxs)("div",{className:"cart-dropdown",children:[Object(c.jsx)("span",{className:"cart-hide-icon",onClick:r,children:"\u2715"}),Object(c.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(c.jsx)(Ee,{item:e},e.id)})):Object(c.jsx)("span",{className:"empty-message",children:"Your cart is empty"})}),Object(c.jsx)(y,{onClick:function(){n.push("/checkout"),r()},children:"GO TO CHECKOUT"})]})}))),Ce=Object(m.a)([function(e){return e.user}],(function(e){return e.currentUser})),Te=Object(m.b)({currentUser:Ce,hidden:V}),Se=Object(b.b)(Te)((function(e){var t=e.currentUser,n=e.hidden;return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(Z.b,{className:"logo-container",to:"/",children:Object(c.jsx)(re,{className:"logo"})}),Object(c.jsxs)("div",{className:"options",children:[Object(c.jsx)(Z.b,{className:"option",to:"/shop",children:"SHOP"}),Object(c.jsx)(Z.b,{className:"option",to:"/contact",children:"CONTACT"}),t?Object(c.jsx)("div",{className:"option",onClick:function(){return A.signOut()},children:"SIGN OUT"}):Object(c.jsx)(Z.b,{to:"signin",children:" SIGN IN"}),Object(c.jsx)(Ne,{})]}),n?null:Object(c.jsx)(Ie,{})]})})),Re="SET_CURRENT_USER",Me=Object(m.b)({currentUser:Ce}),Be=Object(b.b)(Me,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Re,payload:e}}(t))}}}))((function(e){var t=e.setCurrentUser,n=e.currentUser,i=null;return Object(r.useEffect)((function(){return i=A.onAuthStateChanged(function(){var e=Object(u.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=7;break}return e.next=3,_(n);case 3:e.sent.onSnapshot((function(e){t(Object(o.a)({id:e.id},e.data()))})),e.next=8;break;case 7:t(n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){i()}}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(Se,{}),Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{exact:!0,path:"/",component:f}),Object(c.jsx)(d.b,{exact:!0,path:"/shop",component:S}),Object(c.jsx)(d.b,{exact:!0,path:"/checkout",component:X}),Object(c.jsx)(d.b,{exact:!0,path:"/signin",render:function(){return n?Object(c.jsx)(d.a,{to:"/"}):Object(c.jsx)(F,{})}})]})]})})),De=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},_e=n(39),Ae=n(18),Pe=n(30),Ge=n(40),He=n.n(Ge),Le=n(41),qe=n.n(Le),Fe={currentUser:null},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return Object(o.a)(Object(o.a)({},e),{},{currentUser:t.payload});default:return e}},Je=n(42),ze=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Je.a)(e),[Object(o.a)(Object(o.a)({},t),{},{quantity:1})])},Ve=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity-1}):e}))},Ke={hidden:!0,cartItems:[]},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.TOGGLE_CART_HIDDEN:return Object(o.a)(Object(o.a)({},e),{},{hidden:!e.hidden});case w.ADD_ITEM:return Object(o.a)(Object(o.a)({},e),{},{cartItems:ze(e.cartItems,t.payload)});case w.REMOVE_ITEM:return Object(o.a)(Object(o.a)({},e),{},{cartItems:Ve(e.cartItems,t.payload)});case w.CLEAR_ITEM_FROM_CART:return Object(o.a)(Object(o.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},Ye={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ze={collections:[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}]},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;return t.type,e},et={key:"root",storage:qe.a,whitelist:["cart"]},tt=Object(Ae.c)({user:We,cart:Qe,directory:Xe,shop:$e}),nt=Object(Pe.a)(et,tt),ct=[He.a],rt=Object(Ae.d)(nt,Ae.a.apply(void 0,ct)),it=Object(Pe.b)(rt);a.a.render(Object(c.jsx)(b.a,{store:rt,children:Object(c.jsx)(Z.a,{children:Object(c.jsx)(_e.a,{persistor:it,children:Object(c.jsx)(Be,{})})})}),document.getElementById("root")),De()}},[[85,1,2]]]);
//# sourceMappingURL=main.900b2fd8.chunk.js.map