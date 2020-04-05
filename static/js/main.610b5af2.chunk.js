(this["webpackJsonptrusted-locals-frontend"]=this["webpackJsonptrusted-locals-frontend"]||[]).push([[0],{115:function(e,t,n){e.exports=n(155)},155:function(e,t,n){"use strict";n.r(t);var a,r=n(1),o=n.n(r),i=n(36),c=n.n(i),l=n(38),u=n(20),s=n(54),d=n(16),m=n(171),f=n(4),p=n(22),g=n(112),b=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){return a(!0)}),500);return function(){clearTimeout(e)}}),[]),o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(g.a,{label:"Loading..."}))},h=n(37);!function(e){e[e.LoggedIn=0]="LoggedIn",e[e.LoggedOut=1]="LoggedOut"}(a||(a={}));var y=function(e){var t=e.children,n=e.lazyload,i=e.path,c=e.redirect,l=Object(p.c)(h.g);if((null===c||void 0===c?void 0:c.when)===a.LoggedIn&&l||(null===c||void 0===c?void 0:c.when)===a.LoggedOut&&!l)return o.a.createElement(s.a,{to:{pathname:null===c||void 0===c?void 0:c.path}});var u=o.a.createElement(s.b,{path:i||""},t);return n?o.a.createElement(r.Suspense,{fallback:o.a.createElement(b,null)},u):u},v=n(164),E=n(167),O=n(74),j=n(160),w=n(166),x=n(169),I=n(51),L=n(107),k=n(170),D=n(85),T=n(79),P=n(75),R=n(70),S=n(42),C=function(e){return e/parseFloat(z())},z=function(){return getComputedStyle(document.querySelector("body"))["font-size"]},U={advice:"Advice",grocery:"Grocery",medical_supply:"Medical Supply",news:"News"},W={advice:"/feed/advice",grocery:"/feed/grocery",medical_supply:"/feed/medical-supply",news:"/feed/news"},N=j.a,M=(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!window.MSStream?{marginTop:24}:{},_=function(e){var t,n,a=e.match,i=e.previousPathname,c=Object(p.b)(),l=Object(s.g)(),d=Object(w.a)(),m=null!==(t=Object(p.c)(h.i).profile)&&void 0!==t?t:null,g=Object(O.a)(0,{leading:!0,wait:250}),b=C(g)<=30,y=null!==(n=a.params.postID)&&void 0!==n?n:null,v=Object(p.c)((function(e){return Object(S.e)(e,parseInt(y))}));if(Object(r.useEffect)((function(){null===v&&c(Object(S.c)(+y))}),[c,v,y]),null===v||void 0===v?void 0:v.async.error)return o.a.createElement(o.a.Fragment,null,"TODO: Error state");if(null===v||!v.post)return o.a.createElement(o.a.Fragment,null,"TODO: Null state");var E=v.post,j=E.categories,z=E.date,_=E.imageURL,B=E.rating,A=E.text,H=E.title,F=E.userImageURL,q=E.username,V=function(){var e=null!==i&&void 0!==i?i:"/";l.push(e)},J=function(){d({title:"Vote saved.",description:"Thank you for making ".concat((null===m||void 0===m?void 0:m.cityName)?"content in ".concat(m.cityName):"local content"," more reliable."),status:"success",duration:9e3,isClosable:!0})};return o.a.createElement(x.a,{scrollBehavior:"inside",isFullHeight:b,isOpen:!0,onClose:V,placement:"bottom"},o.a.createElement(x.d,null),o.a.createElement(x.c,null,o.a.createElement(x.b,Object.assign({},M,{"aria-label":"return to feed"})),o.a.createElement(I.f,Object.assign({margin:["inherit","inherit","0 auto"],width:["initial","initial",1e3]},M),o.a.createElement(L.a,{as:"h2"},H),o.a.createElement(f.a,{marginTop:2,onClick:function(e){e.stopPropagation()}},j.map((function(e){return o.a.createElement(N,{as:u.b,key:e,to:W[e]},o.a.createElement(k.a,{marginRight:2,size:"sm"},U[e]))}))),o.a.createElement("div",{onClick:function(e){e.stopPropagation()},role:"presentation"},o.a.createElement(P.a,{date:z,style:{marginTop:4},userImageURL:F,username:q}))),o.a.createElement(I.b,{margin:"0 auto",maxWidth:"1000px",width:["initial","initial",1e3]},_&&o.a.createElement(D.a,{alt:"post image",maxHeight:150,src:_}),o.a.createElement(f.a,{marginTop:6},o.a.createElement(L.a,null,A)),o.a.createElement(f.a,{display:"flex",marginTop:[4,8,12]},o.a.createElement(R.a,{boxProps:{height:"100%",width:"100%",maxWidth:70,maxHeight:70},labelProps:{fontSize:"16px"},rating:B,shouldShowDescription:!0}))),o.a.createElement(I.e,{maxWidth:"1000px",width:["initial","initial",1e3],margin:["initial","initial","0 auto"]},o.a.createElement(T.a,{onClick:function(){J(),V()},variant:"ghost",variantColor:"blue"},"Disconfirm"),o.a.createElement(T.a,{marginLeft:4,onClick:function(){J(),V()},variantColor:"blue"},"Confirm"))))},B=n(96),A=function(e){var t=e.category,n=Object(p.b)(),a=Object(p.c)((function(e){return Object(S.f)(e,t)})),i=a.async,c=a.posts;return Object(r.useEffect)((function(){null===i.error&&null===c&&n(Object(S.b)(t))}),[i,t,n,c]),i.error?o.a.createElement("h1",null,"An error occured"):"pending"===i.loading?o.a.createElement("h1",null,"Loading..."):null===c?o.a.createElement(o.a.Fragment,null,"TODO: Loading state"):0===Object.keys(c).length?o.a.createElement(o.a.Fragment,null,"TODO: Empty state"):o.a.createElement(f.a,{display:"grid",gridTemplateColumns:["100%","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)"],gridGap:8,marginTop:8},Object.values(c).map((function(e){return o.a.createElement(B.a,Object.assign({key:e.postID},e))})))},H=n(163),F=n(88),q=n(39),V=n(97),J=n(49),K=function(){var e,t=null!==(e=Object(p.c)(h.i).profile)&&void 0!==e?e:null;return null===t?null:o.a.createElement(L.a,{as:"a",fontWeight:"semibold",textDecoration:"underline"},t.cityName)},X=function(e){var t,n=null!==(t=Object(p.c)(h.i).profile)&&void 0!==t?t:null,a=o.a.useState(!1),r=Object(l.a)(a,2),i=r[0],c=r[1],s=Object(w.a)();return n?o.a.createElement(f.a,J.a,o.a.createElement(L.a,{color:"gray.600",fontSize:"lg"},"Good morning, ",n.firstName||n.cityName),o.a.createElement(L.a,{color:"gray.600",cursor:"pointer",fontSize:"lg",marginTop:1,onClick:function(){c(!0)}},"Here are the latest for ",o.a.createElement(K,null)),o.a.createElement(H.a,{marginTop:4},o.a.createElement(F.a,null,o.a.createElement(q.a,{color:"gray.400",name:"search"})),o.a.createElement(V.a,{fontSize:["xs","sm","md"],maxWidth:400,onFocus:function(){s({title:"Not yet implemented",description:"This demo does not support searching posts yet.",status:"info",duration:9e3,isClosable:!0})},placeholder:"Use keywords to search for information",type:"text"})),o.a.createElement(I.a,{isOpen:i,onClose:function(){c(!1)}},o.a.createElement(I.g,null),o.a.createElement(I.d,null,o.a.createElement(I.f,null,"Changing the feed's location"),o.a.createElement(I.c,null),o.a.createElement(I.b,null,o.a.createElement(L.a,{fontWeight:"semibold"},"Not yet implemented"),o.a.createElement(L.a,{marginTop:4},"Here you will be able to change the feed's location and see posts from all over the world. However, creating posts and validating other posts is restricted to your location.")),o.a.createElement(I.e,null,o.a.createElement(T.a,{onClick:function(){c(!1)},variantColor:"blue"},"OK"))))):o.a.createElement(f.a,J.a,o.a.createElement("p",null,"Sign in to vote and contribute."),o.a.createElement(u.b,{to:"/account/login"},o.a.createElement(T.a,{marginTop:4,size:"sm",variantColor:"blue"},"Sign in")))},G=[{category:"news",id:"tabs-news-tab",name:"News",to:"/feed/news"},{category:"medical_supply",id:"tabs-medical-supply-tab",name:"Medical Supply",to:"/feed/medical-supply"},{category:"grocery",id:"tabs-grocery-tab",name:"Grocery",to:"/feed/grocery"},{category:"advice",id:"tabs-advice-tab",name:"Advice",to:"/feed/advice"}],Q=function(){var e=Object(s.h)().pathname,t=Object(v.a)(e),n=Object(O.a)(0,{leading:!0,wait:250}),a=C(n)<=30?"sm":"md";return o.a.createElement(f.a,{marginTop:2},o.a.createElement(X,null),o.a.createElement(E.e,{marginTop:[6,6,8],size:a},o.a.createElement(E.c,Object.assign({id:"tabs"},J.a,{width:["100%","100%","90%","80%","70%"]}),G.map((function(t){var n=t.id,a=t.name,r=t.to;return o.a.createElement(E.a,{"aria-controls":"tabs","aria-selected":e===r,as:u.b,id:n,key:a,tabIndex:0,to:r},a)}))),o.a.createElement(E.d,Object.assign({marginTop:8,outline:"none"},J.a),o.a.createElement(s.d,null,G.map((function(e){var t=e.category,n=e.to;return o.a.createElement(s.b,{exact:!0,key:t,path:n},o.a.createElement(A,{category:t}))})),o.a.createElement(s.b,{path:"/feed/detail/:postID",render:function(e){return o.a.createElement(_,Object.assign({},e,{previousPathname:t}))}}),o.a.createElement(s.a,{from:"/",to:"/feed/news"})))))},Y=n(165),$=function(e){var t=e.ariaLabel,n=e.icon,a=e.isActive,r=e.name,i=e.to;return o.a.createElement(u.b,{to:i},o.a.createElement(f.a,{alignItems:"center",display:"flex",flexDirection:"column",paddingY:2},o.a.createElement(Y.a,{"aria-label":t,as:"span",icon:n,isActive:a,size:"md",variant:"link",variantColor:"gray"}),o.a.createElement(L.a,{as:"span",color:a?"black":"gray.600",fontSize:"sm"},r)))},Z=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,180)).then((function(e){return{default:e.Submit}}))})),ee=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,175)).then((function(e){return{default:e.Profile}}))})),te=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,181)).then((function(e){return{default:e.Account}}))})),ne=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,176)).then((function(e){return{default:e.Login}}))})),ae=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,177)).then((function(e){return{default:e.ResetPassword}}))})),re=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,178)).then((function(e){return{default:e.Registration}}))})),oe=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,179)).then((function(e){return{default:e.Page404}}))})),ie={home:{ariaLabel:"home button",icon:"mdHome",name:"Home",to:"/feed"},submit:{ariaLabel:"submit button",icon:"mdAdd",name:"Submit",to:"/submit"},profile:{ariaLabel:"profile button",icon:"mdPerson",name:"Profile",to:"/profile/me"},account:{ariaLabel:"account button",icon:"mdPerson",name:"Account",to:"/account"}},ce={home:ie.home,submit:ie.submit,profile:ie.profile},le={home:ie.home,submit:ie.submit,account:ie.account},ue=function(){var e,t=Object(s.h)(),n=Object(p.c)(h.g),r=(e=n,Object.values(e?ce:le));return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.d,null,o.a.createElement(y,{lazyload:!1,path:"/feed"},o.a.createElement(Q,null)),o.a.createElement(y,{lazyload:!0,path:"/submit"},o.a.createElement(Z,null)),o.a.createElement(y,{lazyload:!0,path:"/profile/me",redirect:{path:"/account",when:a.LoggedOut}},o.a.createElement(ee,null)),o.a.createElement(y,{lazyload:!0,path:"/account/reset-password",redirect:{path:"/profile/me",when:a.LoggedIn}},o.a.createElement(ae,null)),o.a.createElement(y,{lazyload:!0,path:"/account/login",redirect:{path:"/profile/me",when:a.LoggedIn}},o.a.createElement(ne,null)),o.a.createElement(y,{lazyload:!0,path:"/account/register",redirect:{path:"/profile/me",when:a.LoggedIn}},o.a.createElement(re,null)),o.a.createElement(y,{lazyload:!0,path:"/account",redirect:{path:"/profile/me",when:a.LoggedIn}},o.a.createElement(te,null)),o.a.createElement(s.a,{exact:!0,from:"/profile",to:"/profile/me"}),o.a.createElement(y,{lazyload:!0,path:"/profile"},o.a.createElement(ee,null)),o.a.createElement(s.a,{exact:!0,from:"/",to:"/feed"}),o.a.createElement(y,{lazyload:!0,path:null},o.a.createElement(oe,null))),o.a.createElement("nav",null,o.a.createElement(f.a,{backgroundColor:"white",borderTop:"1px solid",borderColor:"gray.300",bottom:"0",display:"flex",position:"fixed",width:"100%",zIndex:1},r.map((function(e){return o.a.createElement(f.a,{flex:"1 1 0",key:e.name},o.a.createElement($,Object.assign({},e,{isActive:t.pathname.startsWith(e.to)})))})))))},se=function(e){var t=e.onClose,n=e.visible;return o.a.createElement(x.a,{isOpen:n,isFullHeight:!0,placement:"top",onClose:t},o.a.createElement(x.d,null),o.a.createElement(x.c,null,o.a.createElement(x.b,null),o.a.createElement(I.f,{margin:["inherit","inherit","0 auto"],maxWidth:500},"Welcome to Trusted Locals!"),o.a.createElement(I.b,{margin:"0 auto",maxWidth:500},o.a.createElement(T.a,{onClick:t,padding:0,variant:"ghost",variantColor:"blue"},"Show the demo"),o.a.createElement(L.a,{marginTop:8,fontSize:16,fontWeight:"semibold"},"About"),o.a.createElement(L.a,null,"Trusted Locals is a platform built for finding reliable on-site information in times of crisis. With Trusted Locals you can avoid the chaos of social media content that is duplicate, irrelevant, and uncategorized."),o.a.createElement(L.a,{marginTop:8,fontSize:16,fontWeight:"semibold"},"Disclaimer"),o.a.createElement(L.a,null,"In this demo, you will be logged in with the profile of one of our developers. None of your votes or created posts will be saved. The posts you see are made up, and should not be taken seriously.")),o.a.createElement(I.e,{margin:["inherit","inherit","0 auto"],maxWidth:500},o.a.createElement(T.a,{onClick:t,variantColor:"blue"},"Show the demo"))))},de=n(53),me=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("did-see-welcome-drawer-01");console.log(e),a("true"!==e)}),[]),o.a.createElement(d.a,{theme:J.b},o.a.createElement(m.a,null),o.a.createElement(u.a,{basename:de.a},o.a.createElement(s.c,{history:de.b},o.a.createElement(se,{onClose:function(){localStorage.setItem("did-see-welcome-drawer-01","true"),a(!1)},visible:n}),o.a.createElement(f.a,{marginBottom:24},o.a.createElement(ue,null)))))},fe=n(26),pe=n(24),ge=n(47),be=n(111),he=n.n(be),ye=n(98),ve={key:"root",storage:he.a,blacklist:["feed","profile","submit","user"]},Ee=Object(fe.c)({feed:S.a,submit:ye.b,user:h.k}),Oe=Object(ge.g)(ve,Ee),je=Object(pe.a)({reducer:Oe,middleware:Object(pe.d)({serializableCheck:{ignoredActions:[ge.a,ge.f,ge.b,ge.c,ge.d,ge.e]}})});Object(ge.h)(je),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(r.StrictMode,null,o.a.createElement(p.a,{store:je},o.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return y})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return w})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return I})),n.d(t,"g",(function(){return L})),n.d(t,"h",(function(){return k})),n.d(t,"i",(function(){return D})),n.d(t,"j",(function(){return T})),n.d(t,"k",(function(){return P}));var a,r=n(34),o=n(7),i=n(24),c=n(19),l=n(63),u=n(53),s=n(56),d=n(42),m="".concat("user","/ownProfile/pending"),f="".concat("user","/ownProfile/fulfilled"),p="".concat("user","/ownProfile/rejected"),g={cityName:"Richmond",email:"foo@bar.com",firstName:"Oliver",lastName:"Micke",postsCount:4,postIDs:[1,2,4,5],rating:49,username:"olivermicke",imageURL:s.d},b={emily_rose28:{cityName:"Richmond",rating:78,postsCount:2,postIDs:[3,6],username:"emily_rose28",imageURL:s.c}},h=Object(i.b)("".concat("user","/loggedIn"),(function(e){return Object(l.a)("/user/login",{body:JSON.stringify(e),method:"POST"}).then((function(e){return u.b.push("/feed"),e}))})),y=Object(i.b)("".concat("user","/registered"),(function(e){return Object(l.a)("/user",{body:JSON.stringify(e),method:"POST"}).then((function(e){return u.b.push("/feed"),e}))})),v=Object(i.b)("".concat("user","/openedOtherProfile"),(function(e){var t=e.username;return Promise.resolve(b[t])})),E=Object(i.c)({name:"user",initialState:{async:{error:null,loading:"idle"},isLoggedIn:!0,profile:{async:{error:null,loading:"idle"},profile:g},otherProfile:{async:{error:null,loading:"idle"},profile:null}},reducers:{loggedOut:function(e){e.profile.profile=null,e.isLoggedIn=!1}},extraReducers:(a={},Object(o.a)(a,h.pending.type,(function(e){"idle"===e.async.loading&&(e.async.loading="pending")})),Object(o.a)(a,h.fulfilled.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle",e.isLoggedIn=!0,e.profile={async:{error:null,loading:"idle"},profile:g})})),Object(o.a)(a,h.rejected.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle",e.async.error=t.error.message)})),Object(o.a)(a,y.pending.type,(function(e){"idle"===e.async.loading&&(e.async.loading="pending")})),Object(o.a)(a,y.fulfilled.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle",e.isLoggedIn=!0,e.profile.profile=g)})),Object(o.a)(a,y.rejected.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle",e.async.error=t.error.message)})),Object(o.a)(a,v.pending.type,(function(e){e.otherProfile.async.error=null,e.otherProfile.async.loading="pending"})),Object(o.a)(a,v.fulfilled.type,(function(e,t){e.otherProfile.async.loading="idle",e.otherProfile.profile=t.payload})),Object(o.a)(a,v.rejected.type,(function(e,t){e.otherProfile.async.loading="idle",e.otherProfile.async.error=t.error.message})),Object(o.a)(a,m,(function(e){e.profile.async.error=null,e.profile.async.loading="pending"})),Object(o.a)(a,f,(function(e,t){e.profile.async.loading="idle",e.profile.profile=t.payload.profile})),Object(o.a)(a,p,(function(e,t){e.profile.async.loading="idle",e.profile.async.error=t.error.message})),a)}),O={requestedPostsOfUser:function(e){var t=e.isOwnProfile,n=e.userNameParam;return function(e,a){Promise.resolve({profile:t?g:b[n]}).then((function(t){var n=t.profile;e(Object(d.d)(n.postIDs)),e({type:f,payload:{profile:n}})})).catch((function(t){e({error:t,type:p})}))}}},j=Object(r.a)({},E.actions,{},O),w=j.loggedOut,x=j.requestedPostsOfUser,I=function(e){return Object(c.a)((function(e){return e.user.async}),(function(e){return e}))(e)},L=function(e){return Object(c.a)((function(e){return e.user.isLoggedIn}),(function(e){return e}))(e)},k=function(e){return Object(c.a)((function(e){return e.user.otherProfile}),(function(e){return e}))(e)},D=function(e){return Object(c.a)((function(e){return e.user.profile}),(function(e){return e}))(e)},T=function(e){return Object(c.a)((function(e){return e.user.profile&&e.user.profile.profile?e.user.profile.profile.username:null}),(function(e){return e}))(e)},P=E.reducer},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"g",(function(){return p})),n.d(t,"f",(function(){return g})),n.d(t,"a",(function(){return b}));var a,r=n(7),o=n(34),i=n(24),c=n(19),l=n(56),u=Object(i.b)("".concat("feed","/loadRequested"),(function(e){return Promise.resolve({posts:l.a[e]})})),s=Object(i.b)("".concat("feed","/postRequested"),(function(e){return Promise.resolve({post:l.b[e]})})),d=Object(i.b)("".concat("feed","/requestedPostsByIDs"),(function(e){return Promise.resolve({posts:e.reduce((function(e,t){return Object(o.a)({},e,Object(r.a)({},t,l.b[t]))}),{})})})),m=Object(i.c)({name:"feed",initialState:{categories:{advice:{async:{error:null,loading:"idle"},postIDs:null},grocery:{async:{error:null,loading:"idle"},postIDs:null},medical_supply:{async:{error:null,loading:"idle"},postIDs:null},news:{async:{error:null,loading:"idle"},postIDs:null}},posts:{}},reducers:{},extraReducers:(a={},Object(r.a)(a,u.pending.type,(function(e,t){var n=t.meta.arg;e.categories[n].async.loading="pending"})),Object(r.a)(a,u.fulfilled.type,(function(e,t){var n=t.meta.arg,a=e.categories[n];a.async.error=null,a.async.loading="idle",a.postIDs=Object.values(t.payload.posts).map((function(e){return e.postID}));var i=Object.values(t.payload.posts).reduce((function(e,t){return Object(o.a)({},e,Object(r.a)({},t.postID,{async:{error:null,loading:"idle"},post:t}))}),{});Object.assign(e.posts,i)})),Object(r.a)(a,u.rejected.type,(function(e,t){var n=t.meta.arg,a=e.categories[n].async;a.loading="idle",a.error=t.error.message})),Object(r.a)(a,s.pending.type,(function(e,t){var n,a=t.meta.arg,r=null!==(n=e.posts[a])&&void 0!==n?n:{async:{}};r.async.loading="pending",e.posts[a]=r})),Object(r.a)(a,s.fulfilled.type,(function(e,t){var n=t.meta.arg,a=e.posts[n];a.async.error=null,a.async.loading="idle",a.post=t.payload.post})),Object(r.a)(a,s.rejected.type,(function(e,t){var n,a=t.meta.arg,r=null!==(n=e.posts[a])&&void 0!==n?n:{};r.async={error:t.error.message,loading:"idle"},r.post=null,e.posts[a]=r})),Object(r.a)(a,d.pending.type,(function(e,t){})),Object(r.a)(a,d.fulfilled.type,(function(e,t){var n=Object.values(t.payload.posts).reduce((function(e,t){return Object(o.a)({},e,Object(r.a)({},t.postID,{async:{error:null,loading:"idle"},post:t}))}),{});Object.assign(e.posts,n)})),Object(r.a)(a,d.rejected.type,(function(e,t){})),a)}),f=function(e,t){return Object(c.a)((function(e){var n;return null!==(n=e.feed.posts[t])&&void 0!==n?n:null}),(function(e){return e}))(e)},p=function(e,t){return Object(c.a)((function(e){return t.map((function(t){var n;return null!==(n=e.feed.posts[t])&&void 0!==n?n:null})).filter(Boolean).reduce((function(e,t){var n;return Object(o.a)({},e,Object(r.a)({},null===(n=t.post)||void 0===n?void 0:n.postID,t))}),{})}),(function(e){return e}))(e)},g=function(e,t){return Object(c.a)((function(e){var n=e.feed.categories[t].postIDs,a=null===n?null:Object.values(e.feed.posts).reduce((function(e,t){var a=t.post;return null!==a&&n.includes(a.postID)?Object(o.a)({},e,Object(r.a)({},a.postID,a)):e}),{});return{async:e.feed.categories[t].async,posts:a}}),(function(e){return e}))(e)},b=m.reducer},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(34),r=n(1),o=n.n(r),i=n(78),c=n(87),l=n(114),u={marginTop:[4,4,8],marginX:"auto",width:["80%","90%","90%","80%","70%"]},s=Object(a.a)({},l.a,{icons:Object(a.a)({},l.a.icons,{ioMdEye:{path:o.a.createElement(c.a,null),viewBox:"0 0 16 16"},ioMdEyeOff:{path:o.a.createElement(c.b,null),viewBox:"0 0 16 16"},mdAdd:{path:o.a.createElement(i.a,null),viewBox:"0 0 16 16"},mdHome:{path:o.a.createElement(i.b,null),viewBox:"0 0 16 16"},mdPerson:{path:o.a.createElement(i.c,null),viewBox:"0 0 16 16"}})})},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(32),r="/",o=Object(a.b)({basename:r})},56:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a="/img/oliver-micke.jpg",r="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date(Date.now()-1e8),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return+new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))},i={1:{categories:["news","medical_supply"],date:o(),postID:1,rating:74,text:"Found some N95 masks available in the home depot in Henrico. I saw at least 3 boxes when I was there at around 9:30 AM",title:"N95 masks available again in Home Depot in Henrico",username:"olivermicke",imageURL:"https://d1icd6shlvmxi6.cloudfront.net/gsc/X9IVK7/3c/bd/d1/3cbdd1179713474eabfb78be3cf8629b/images/home_screen/rectangle_u179.svg?token=be03a14c6f0ed738daf690859452a87a150fdecde15c5a477fd7def9bb5fb483",userImageURL:a},2:{categories:["news"],date:o(),postID:2,rating:23,text:"Lorem ipsum dolor sit amet.",title:"VCU Developed CODVID-19 test",username:"olivermicke",imageURL:"https://d1icd6shlvmxi6.cloudfront.net/gsc/X9IVK7/3c/bd/d1/3cbdd1179713474eabfb78be3cf8629b/images/home_screen/rectangle_u82.svg?token=03f8946f6d34850c79b1d05c4aea91b82cc010f882f8813cf39a69c9c3ab2b26",userImageURL:a},3:{categories:["grocery"],date:o(),postID:3,rating:72,text:"We will have a limited supply of toilet paper at Target on Broad street for the next days \u2013 source: I work there.",title:"Limited supply of toilet paper at Target on Broad street",username:"emily_rose28",imageURL:"https://images.unsplash.com/photo-1584556812952-905ffd0c611a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",userImageURL:r},4:{categories:["advice"],date:o(),postID:4,rating:44,text:"Especially in areas with community-spread, it's recommended to wear face masks whenever possible.",title:"CDC recommends to wear face masks",username:"olivermicke",imageURL:"https://images.unsplash.com/photo-1582795003154-35736cf26353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",userImageURL:a},5:{categories:["news","grocery"],date:o(),postID:5,rating:54,text:"A friend of mine just told me that toilet paper production was ramped up to keep up with the incresed demand.",title:"Toilet paper production ramping up",username:"olivermicke",imageURL:"https://d1icd6shlvmxi6.cloudfront.net/gsc/X9IVK7/3c/bd/d1/3cbdd1179713474eabfb78be3cf8629b/images/home_screen/rectangle_u66.svg?token=96914e934d88a61faaecb0930cbabccb579d79c0ed63c8b00eabe4b0e4f98b4b",userImageURL:a},6:{categories:["news"],date:o(),postID:6,rating:84,text:"Service disconnection has been suspended. Lorem ipsum dolor sit amet. Amet sit dolor ipsum lorem? Lorem ipsum dolor sit amet!",title:"Service disconnection has been suspended",username:"emily_rose28",imageURL:"https://d1icd6shlvmxi6.cloudfront.net/gsc/X9IVK7/3c/bd/d1/3cbdd1179713474eabfb78be3cf8629b/images/home_screen/rectangle_u40.svg?token=f23c8c9de4fa5bfa0831193450eb20706a9de08b17e27baacb18cabb5cc57713",userImageURL:r}},c={news:{1:i[1],2:i[2],5:i[5],6:i[6]},medical_supply:{1:i[1]},grocery:{3:i[3],5:i[5]},advice:{4:i[4]}}},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(34),r={credentials:"include",headers:{"Content-Type":"application/json"}};function o(e,t){return window.fetch("https://ec2-54-89-76-249.compute-1.amazonaws.com"+e,Object(a.a)({},r,{},t)).then((function(e){return e.json().then((function(t){if(e.ok)return t;throw t}))})).catch((function(e){throw new Error(e.errorMessage||"An unknown error has occured.")}))}},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(1),r=n.n(a),o=n(113),i=n(4),c=n(107),l="Based on information gathered, we are confident of this data.",u=function(e){var t=e.boxProps,n=e.labelProps,a=e.rating,u=e.shouldShowDescription,s=function(e){return null===e||e<40?"gray":e>=40&&e<=70?"yellow":"green"}(a),d=r.a.createElement(o.b,{"aria-label":"reliability score of post",color:s,role:"presentation",style:t,trackColor:s,value:null!==a&&void 0!==a?a:100},r.a.createElement(o.a,{style:n},null!==a&&void 0!==a?a:"?"));return u?r.a.createElement(i.a,{display:"flex",flex:1},r.a.createElement(i.a,{flex:3,marginRight:4},r.a.createElement(c.a,{as:"h3",color:"gray.700",fontWeight:"semibold",marginBottom:1},"Confidence score:"),r.a.createElement(c.a,null,function(e){return null===e||e<40?l:e>=40&&e<=70?"Based on information gathered, we do not have enough information to be confident of this data.":l}(a))),r.a.createElement(i.a,{flex:1},d)):d}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(1),r=n.n(a),o=n(4),i=n(107),c=n(162),l=n(20),u=n(160),s=n(168),d=u.a,m=function(e){var t=e.style,n=e.userImageURL,a=e.username,o="/profile"+"/".concat(a);return r.a.createElement(d,{as:l.b,to:o,style:t},n&&r.a.createElement(s.a,{marginRight:2,name:a,size:"xs",src:null!==n&&void 0!==n?n:""}),r.a.createElement(i.a,{as:"span",color:"blue.500",fontSize:"sm"},a))},f=function(e){var t=e.date;return r.a.createElement(r.a.Fragment,null,function(e){"object"!==typeof e&&(e=new Date(e));var t,n=Math.floor((new Date-e)/1e3),a=Math.floor(n/31536e3);return a>=1?t="year":(a=Math.floor(n/2592e3))>=1?t="month":(a=Math.floor(n/86400))>=1?t="day":(a=Math.floor(n/3600))>=1?t="hour":(a=Math.floor(n/60))>=1?t="minute":(a=n,t="second"),(a>1||0===a)&&(t+="s"),a+" "+t}(t)," ago")},p=function(e){var t=e.date,n=e.userImageURL,a=e.username,l=e.style;return r.a.createElement(o.a,Object.assign({alignItems:"center",display:"flex",marginTop:2},l),r.a.createElement(i.a,{alignItems:"center",as:"span",color:"gray.500",display:"flex",fontSize:"sm",fontWeight:"normal",height:"100%"},r.a.createElement(f,{date:new Date(t)})),r.a.createElement(c.a,{borderColor:"gray.300",height:"24px",orientation:"vertical"}),r.a.createElement(m,{style:{alignItems:"center",display:"flex",height:"100%"},userImageURL:n,username:a}))}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(1),r=n.n(a),o=n(20),i=n(4),c=n(160),l=n(30),u=n(85),s=n(79),d=n(75),m=n(70),f={padding:2},p=function(e){var t=e.date,n=e.detailViewRedirectToProfile,a=e.imageURL,p=e.postID,g=e.rating,b=e.title,h=e.userImageURL,y=e.username,v="/feed/detail/".concat(p).concat(n?"?redirect=profile":"");return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{boxShadow:"0px 8px 12px rgba(42, 52, 61, 0.16078431372549)",borderRadius:8,maxWidth:["initial","initial",350]},r.a.createElement(c.a,{as:o.b,to:v},r.a.createElement(i.a,{height:128,position:"relative"},r.a.createElement(l.a,Object.assign({},f,{background:"#ffffffdd",borderTopRightRadius:8,bottom:0,_hover:{textDecoration:"underline"},position:"absolute",width:"80%"}),b),a&&r.a.createElement(u.a,{alt:"post background image",borderTopLeftRadius:8,borderTopRightRadius:8,height:"100%",objectFit:"cover",src:a,width:"100%"}))),r.a.createElement(d.a,{date:t,userImageURL:h,username:y,style:f}),r.a.createElement(i.a,Object.assign({},f,{alignItems:"center",display:"flex"}),r.a.createElement(m.a,{rating:g,shouldShowDescription:!1}),r.a.createElement(s.a,{as:o.b,marginLeft:6,to:v,variant:"outline",variantColor:"blue"},"More"))))}},98:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a,r=n(7),o=n(24),i=n(19),c=n(63),l=n(53),u=Object(o.b)("".concat("submit","/submitted"),(function(e){return Object(c.a)("/TODO:Route",{body:JSON.stringify(e),method:"POST"}).then((function(e){return l.b.push("/feed"),e}))})),s=Object(o.c)({name:"submit",initialState:{async:{error:null,loading:"idle"}},reducers:{},extraReducers:(a={},Object(r.a)(a,u.pending.type,(function(e){"idle"===e.async.loading&&(e.async.loading="pending")})),Object(r.a)(a,u.fulfilled.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle")})),Object(r.a)(a,u.rejected.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle",e.async.error=t.error.message)})),a)}),d=function(e){return Object(i.a)((function(e){return e.submit.async}),(function(e){return e}))(e)},m=s.reducer}},[[115,1,2]]]);
//# sourceMappingURL=main.610b5af2.chunk.js.map