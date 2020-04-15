(this["webpackJsonptrusted-locals-frontend"]=this["webpackJsonptrusted-locals-frontend"]||[]).push([[0],{120:function(e,t,n){e.exports=n(161)},161:function(e,t,n){"use strict";n.r(t);var a,r=n(1),o=n.n(r),i=n(36),l=n.n(i),c=n(38),u=n(19),s=n(46),d=n(16),m=n(174),f=n(4),p=n(21),g=n(105),b=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){return a(!0)}),500);return function(){clearTimeout(e)}}),[]),o.a.createElement(o.a.Fragment,null,n&&o.a.createElement(g.a,{label:"Loading..."}))},h=n(37);!function(e){e[e.LoggedIn=0]="LoggedIn",e[e.LoggedOut=1]="LoggedOut"}(a||(a={}));var y=function(e){var t=e.children,n=e.lazyload,i=e.path,l=e.redirect,c=Object(p.c)(h.g);if((null===l||void 0===l?void 0:l.when)===a.LoggedIn&&c||(null===l||void 0===l?void 0:l.when)===a.LoggedOut&&!c)return o.a.createElement(s.a,{to:{pathname:null===l||void 0===l?void 0:l.path}});var u=o.a.createElement(s.b,{path:i||""},t);return n?o.a.createElement(r.Suspense,{fallback:o.a.createElement(b,null)},u):u},v=n(170),E=n(172),O=n(77),j=n(95),w=n(68),x=n(43),I=function(e){var t=e.category,n=Object(p.b)(),a=Object(p.c)((function(e){return Object(x.f)(e,t)})),i=a.async,l=a.posts;if(Object(r.useEffect)((function(){null===i.error&&null===l&&n(Object(x.b)(t))}),[i,t,n,l]),i.error)return o.a.createElement("h1",null,"An error occured");if("pending"===i.loading)return o.a.createElement("h1",null,"Loading...");if(null===l)return o.a.createElement(o.a.Fragment,null,"TODO: Loading state");if(0===Object.keys(l).length)return o.a.createElement(o.a.Fragment,null,"TODO: Empty state");var c=Object.values(l).sort((function(e,t){return e.date>t.date?-1:1}));return o.a.createElement(f.a,{display:"grid",gridTemplateColumns:["100%","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)"],gridGap:8,marginTop:8},c.map((function(e){return o.a.createElement(w.b,Object.assign({key:e.postID},e))})))},D=n(80),L=n(165),k=n(61),R=n(169),T=n(92),P=n(39),S=n(103),C=n(40),z=n(51),U=function(){var e,t=null!==(e=Object(p.c)(h.i).profile)&&void 0!==e?e:null;return null===t?null:o.a.createElement(D.a,{as:"a",fontWeight:"semibold",textDecoration:"underline"},t.cityName)},W=function(e){var t,n=null!==(t=Object(p.c)(h.i).profile)&&void 0!==t?t:null,a=o.a.useState(!1),r=Object(c.a)(a,2),i=r[0],l=r[1],s=Object(L.a)();return n?o.a.createElement(f.a,z.a,o.a.createElement(D.a,{color:"gray.600",fontSize:"lg"},"Good morning, ",n.firstName||n.cityName),o.a.createElement(D.a,{color:"gray.600",cursor:"pointer",fontSize:"lg",marginTop:1,onClick:function(){l(!0)}},"Here are the latest for ",o.a.createElement(U,null)),o.a.createElement(R.a,{marginTop:4},o.a.createElement(T.a,null,o.a.createElement(P.a,{color:"gray.400",name:"search"})),o.a.createElement(S.a,{fontSize:["xs","sm","md"],maxWidth:400,onFocus:function(){s({title:"Not yet implemented",description:"This demo does not support searching posts yet.",status:"info",duration:7e3,isClosable:!0})},placeholder:"Use keywords to search for information",type:"text"})),o.a.createElement(C.a,{isOpen:i,onClose:function(){l(!1)}},o.a.createElement(C.g,null),o.a.createElement(C.d,null,o.a.createElement(C.f,null,"Changing the feed's location"),o.a.createElement(C.c,null),o.a.createElement(C.b,null,o.a.createElement(D.a,{fontWeight:"semibold"},"Not yet implemented"),o.a.createElement(D.a,{marginTop:4},"Here you will be able to change the feed's location and see posts from all over the world. However, creating posts and validating other posts is restricted to your location.")),o.a.createElement(C.e,null,o.a.createElement(k.a,{onClick:function(){l(!1)},variantColor:"blue"},"OK"))))):o.a.createElement(f.a,z.a,o.a.createElement("p",null,"Sign in to vote and contribute."),o.a.createElement(u.b,{to:"/account/login"},o.a.createElement(k.a,{marginTop:4,size:"sm",variantColor:"blue"},"Sign in")))},M=n(74),B=[{category:"news",id:"tabs-news-tab",name:"News",to:"/feed/news"},{category:"medical_supply",id:"tabs-medical-supply-tab",name:"Medical Supply",to:"/feed/medical-supply"},{category:"grocery",id:"tabs-grocery-tab",name:"Grocery",to:"/feed/grocery"},{category:"advice",id:"tabs-advice-tab",name:"Advice",to:"/feed/advice"}],H=function(){var e=Object(s.h)().pathname,t=Object(v.a)(e),n=Object(O.a)(0,{leading:!0,wait:250}),a=Object(M.a)(n)<=30?"sm":"md";return o.a.createElement(f.a,{marginTop:2},o.a.createElement(W,null),o.a.createElement(E.e,{marginTop:[6,6,8],size:a},o.a.createElement(E.c,Object.assign({id:"tabs"},z.a,{width:["100%","100%","90%","80%","70%"]}),B.map((function(t){var n=t.id,a=t.name,r=t.to;return o.a.createElement(E.a,{"aria-controls":"tabs","aria-selected":e===r,as:u.b,id:n,key:a,tabIndex:0,to:r},a)}))),o.a.createElement(E.d,Object.assign({marginTop:8,outline:"none"},z.a),o.a.createElement(s.d,null,B.map((function(e){var t=e.category,n=e.to;return o.a.createElement(s.b,{exact:!0,key:t,path:n},o.a.createElement(I,{category:t}))})),o.a.createElement(s.b,{path:"/feed/detail/:postID",render:function(e){return o.a.createElement(j.b,Object.assign({},e,{previousPathname:t}))}}),o.a.createElement(s.a,{from:"/",to:"/feed/news"})))))},N=n(171),A=function(e){var t=e.ariaLabel,n=e.icon,a=e.isActive,r=e.name,i=e.to;return o.a.createElement(u.b,{to:i},o.a.createElement(f.a,{alignItems:"center",display:"flex",flexDirection:"column",paddingY:2},o.a.createElement(N.a,{"aria-label":t,as:"span",icon:n,isActive:a,size:"md",variant:"link",variantColor:"gray"}),o.a.createElement(D.a,{as:"span",color:a?"black":"gray.600",fontSize:"sm"},r)))},q=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,183)).then((function(e){return{default:e.Submit}}))})),F=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,178)).then((function(e){return{default:e.Profile}}))})),J=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,184)).then((function(e){return{default:e.Account}}))})),_=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,179)).then((function(e){return{default:e.Login}}))})),Q=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,180)).then((function(e){return{default:e.ResetPassword}}))})),G=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,181)).then((function(e){return{default:e.Registration}}))})),V=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,182)).then((function(e){return{default:e.Page404}}))})),K={home:{ariaLabel:"home button",icon:"mdHome",name:"Home",to:"/feed"},submit:{ariaLabel:"submit button",icon:"mdAdd",name:"Submit",to:"/submit"},profile:{ariaLabel:"profile button",icon:"mdPerson",name:"Profile",to:"/profile/me"},account:{ariaLabel:"account button",icon:"mdPerson",name:"Account",to:"/account"}},X={home:K.home,submit:K.submit,profile:K.profile},Y={home:K.home,submit:K.submit,account:K.account},$=function(){var e,t=Object(s.h)(),n=Object(p.c)(h.g),r=(e=n,Object.values(e?X:Y));return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.d,null,o.a.createElement(y,{lazyload:!1,path:"/feed"},o.a.createElement(H,null)),o.a.createElement(y,{lazyload:!0,path:"/submit"},o.a.createElement(q,null)),o.a.createElement(y,{lazyload:!0,path:"/profile/me",redirect:{path:"/account",when:a.LoggedOut}},o.a.createElement(F,null)),o.a.createElement(y,{lazyload:!0,path:"/account/reset-password",redirect:{path:"/profile/me",when:a.LoggedIn}},o.a.createElement(Q,null)),o.a.createElement(y,{lazyload:!0,path:"/account/login",redirect:{path:"/profile/me",when:a.LoggedIn}},o.a.createElement(_,null)),o.a.createElement(y,{lazyload:!0,path:"/account/register",redirect:{path:"/profile/me",when:a.LoggedIn}},o.a.createElement(G,null)),o.a.createElement(y,{lazyload:!0,path:"/account",redirect:{path:"/profile/me",when:a.LoggedIn}},o.a.createElement(J,null)),o.a.createElement(s.a,{exact:!0,from:"/profile",to:"/profile/me"}),o.a.createElement(y,{lazyload:!0,path:"/profile"},o.a.createElement(F,null)),o.a.createElement(s.a,{exact:!0,from:"/",to:"/feed"}),o.a.createElement(y,{lazyload:!0,path:null},o.a.createElement(V,null))),o.a.createElement("nav",null,o.a.createElement(f.a,{backgroundColor:"white",borderTop:"1px solid",borderColor:"gray.300",bottom:"0",display:"flex",position:"fixed",width:"100%",zIndex:1},r.map((function(e){return o.a.createElement(f.a,{flex:"1 1 0",key:e.name},o.a.createElement(A,Object.assign({},e,{isActive:t.pathname.startsWith(e.to)})))})))))},Z=n(84),ee=function(e){var t=e.onClose,n=e.visible;return o.a.createElement(Z.a,{isOpen:n,isFullHeight:!0,placement:"top",onClose:t},o.a.createElement(Z.d,null),o.a.createElement(Z.c,null,o.a.createElement(Z.b,null),o.a.createElement(C.f,{margin:["inherit","inherit","0 auto"],maxWidth:500},"Welcome to Trusted Locals!"),o.a.createElement(C.b,{margin:"0 auto",maxWidth:500},o.a.createElement(k.a,{onClick:t,padding:0,variant:"ghost",variantColor:"blue"},"Show the demo"),o.a.createElement(D.a,{marginTop:8,fontSize:16,fontWeight:"semibold"},"About"),o.a.createElement(D.a,null,"Trusted Locals is a platform built for finding reliable on-site information in times of crisis. With Trusted Locals you can avoid the chaos of social media content that is duplicate, irrelevant, and uncategorized."),o.a.createElement(D.a,{marginTop:8,fontSize:16,fontWeight:"semibold"},"Disclaimer"),o.a.createElement(D.a,null,"In this demo, you will be logged in with the profile of one of our developers. None of your votes or created posts will be saved. The posts you see are made up, and should not be taken seriously.")),o.a.createElement(C.e,{margin:["inherit","inherit","0 auto"],maxWidth:500},o.a.createElement(k.a,{onClick:t,variantColor:"blue"},"Show the demo"))))},te=n(54),ne=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){var e=localStorage.getItem("did-see-welcome-drawer-01");a("true"!==e)}),[]),o.a.createElement(d.a,{theme:z.b},o.a.createElement(m.a,null),o.a.createElement(u.a,{basename:te.a},o.a.createElement(s.c,{history:te.b},o.a.createElement(ee,{onClose:function(){localStorage.setItem("did-see-welcome-drawer-01","true"),a(!1)},visible:n}),o.a.createElement(f.a,{marginBottom:24},o.a.createElement($,null)))))},ae=n(25),re=n(23),oe=n(49),ie=n(116),le=n.n(ie),ce=n(67),ue={key:"root",storage:le.a,blacklist:["profile","submit","user"]},se=Object(ae.c)({feed:x.a,submit:ce.b,user:h.k}),de=Object(oe.g)(ue,se),me=Object(re.a)({reducer:de,middleware:Object(re.d)({serializableCheck:{ignoredActions:[oe.a,oe.f,oe.b,oe.c,oe.d,oe.e]}})});Object(oe.h)(me),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(r.StrictMode,null,o.a.createElement(p.a,{store:me},o.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return x})),n.d(t,"e",(function(){return I})),n.d(t,"f",(function(){return D})),n.d(t,"g",(function(){return L})),n.d(t,"h",(function(){return k})),n.d(t,"i",(function(){return R})),n.d(t,"j",(function(){return T})),n.d(t,"k",(function(){return P}));var a=n(34),r=n(7),o=n(23),i=n(26),l={credentials:"include",headers:{"Content-Type":"application/json"}};function c(e,t){return window.fetch("https://ec2-54-89-76-249.compute-1.amazonaws.com"+e,Object(a.a)({},l,{},t)).then((function(e){return e.json().then((function(t){if(e.ok)return t;throw t}))})).catch((function(e){throw new Error(e.errorMessage||"An unknown error has occured.")}))}var u,s=n(54),d=n(56),m=n(43),f="".concat("user","/ownProfile/pending"),p="".concat("user","/ownProfile/fulfilled"),g="".concat("user","/ownProfile/rejected"),b={cityName:"Richmond",email:"foo@bar.com",firstName:"Oliver",lastName:"Micke",postsCount:4,postIDs:[1,3,4,5],rating:49,username:"olivermicke",imageURL:d.d},h={emily_rose28:{cityName:"Richmond",rating:78,postsCount:2,postIDs:[2,6],username:"emily_rose28",imageURL:d.c}},y=Object(o.b)("".concat("user","/loggedIn"),(function(e){return c("/user/login",{body:JSON.stringify(e),method:"POST"}).then((function(e){return s.b.push("/feed"),e}))})),v=Object(o.b)("".concat("user","/registered"),(function(e){return c("/user",{body:JSON.stringify(e),method:"POST"}).then((function(e){return s.b.push("/feed"),e}))})),E=Object(o.b)("".concat("user","/openedOtherProfile"),(function(e){var t=e.username;return Promise.resolve(h[t])})),O=Object(o.c)({name:"user",initialState:{async:{error:null,loading:"idle"},isLoggedIn:!0,profile:{async:{error:null,loading:"idle"},profile:b},otherProfile:{async:{error:null,loading:"idle"},profile:null}},reducers:{loggedOut:function(e){e.profile.profile=null,e.isLoggedIn=!1}},extraReducers:(u={},Object(r.a)(u,y.pending.type,(function(e){"idle"===e.async.loading&&(e.async.loading="pending")})),Object(r.a)(u,y.fulfilled.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle",e.isLoggedIn=!0,e.profile={async:{error:null,loading:"idle"},profile:b})})),Object(r.a)(u,y.rejected.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle",e.async.error=t.error.message)})),Object(r.a)(u,v.pending.type,(function(e){"idle"===e.async.loading&&(e.async.loading="pending")})),Object(r.a)(u,v.fulfilled.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle",e.isLoggedIn=!0,e.profile.profile=b)})),Object(r.a)(u,v.rejected.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle",e.async.error=t.error.message)})),Object(r.a)(u,E.pending.type,(function(e){e.otherProfile.async.error=null,e.otherProfile.async.loading="pending"})),Object(r.a)(u,E.fulfilled.type,(function(e,t){e.otherProfile.async.loading="idle",e.otherProfile.profile=t.payload})),Object(r.a)(u,E.rejected.type,(function(e,t){e.otherProfile.async.loading="idle",e.otherProfile.async.error=t.error.message})),Object(r.a)(u,f,(function(e){e.profile.async.error=null,e.profile.async.loading="pending"})),Object(r.a)(u,p,(function(e,t){e.profile.async.loading="idle",e.profile.profile=t.payload.profile})),Object(r.a)(u,g,(function(e,t){e.profile.async.loading="idle",e.profile.async.error=t.error.message})),u)}),j={requestedPostsOfUser:function(e){var t=e.isOwnProfile,n=e.userNameParam;return function(e,a){Promise.resolve({profile:t?b:h[n]}).then((function(t){var n=t.profile;e(Object(m.d)(n.postIDs)),e({type:p,payload:{profile:n}})})).catch((function(t){e({error:t,type:g})}))}}},w=Object(a.a)({},O.actions,{},j),x=w.loggedOut,I=w.requestedPostsOfUser,D=function(e){return Object(i.a)((function(e){return e.user.async}),(function(e){return e}))(e)},L=function(e){return Object(i.a)((function(e){return e.user.isLoggedIn}),(function(e){return e}))(e)},k=function(e){return Object(i.a)((function(e){return e.user.otherProfile}),(function(e){return e}))(e)},R=function(e){return Object(i.a)((function(e){return e.user.profile}),(function(e){return e}))(e)},T=function(e){return Object(i.a)((function(e){return e.user.profile&&e.user.profile.profile?e.user.profile.profile.username:null}),(function(e){return e}))(e)},P=O.reducer},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return p})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return b})),n.d(t,"a",(function(){return h}));var a,r=n(7),o=n(34),i=n(23),l=n(26),c=n(56),u=n(67),s=Object(i.b)("".concat("feed","/loadRequested"),(function(e){return Promise.resolve({posts:c.a[e]})})),d=Object(i.b)("".concat("feed","/postRequested"),(function(e){return Promise.resolve({post:c.b[e]})})),m=Object(i.b)("".concat("feed","/requestedPostsByIDs"),(function(e){return Promise.resolve({posts:e.reduce((function(e,t){return Object(o.a)({},e,Object(r.a)({},t,c.b[t]))}),{})})})),f=Object(i.c)({name:"feed",initialState:{categories:{advice:{async:{error:null,loading:"idle"},postIDs:null},grocery:{async:{error:null,loading:"idle"},postIDs:null},medical_supply:{async:{error:null,loading:"idle"},postIDs:null},news:{async:{error:null,loading:"idle"},postIDs:null}},posts:{}},reducers:{},extraReducers:(a={},Object(r.a)(a,u.c.fulfilled.type,(function(e,t){var n,a,r=t.meta.arg,o={categories:r.categories,date:+new Date,imageURL:r.image,postID:null!==(n=(null===(a=Object.values(e.posts))||void 0===a?void 0:a.length)+1)&&void 0!==n?n:1,rating:null,text:r.text,title:r.title,userImageURL:r.userImageURL,username:r.username||""};e.posts[o.postID]={async:{error:null,loading:"idle"},post:o},o.categories.forEach((function(t){var n=e.categories[t];n.postIDs?n.postIDs.push(o.postID):n.postIDs=[o.postID]}))})),Object(r.a)(a,s.pending.type,(function(e,t){var n=t.meta.arg;e.categories[n].async.loading="pending"})),Object(r.a)(a,s.fulfilled.type,(function(e,t){var n=t.meta.arg,a=e.categories[n];a.async.error=null,a.async.loading="idle",a.postIDs=Object.values(t.payload.posts).map((function(e){return e.postID}));var i=Object.values(t.payload.posts).reduce((function(e,t){return Object(o.a)({},e,Object(r.a)({},t.postID,{async:{error:null,loading:"idle"},post:t}))}),{});Object.assign(e.posts,i)})),Object(r.a)(a,s.rejected.type,(function(e,t){var n=t.meta.arg,a=e.categories[n].async;a.loading="idle",a.error=t.error.message})),Object(r.a)(a,d.pending.type,(function(e,t){var n,a=t.meta.arg,r=null!==(n=e.posts[a])&&void 0!==n?n:{async:{}};r.async.loading="pending",e.posts[a]=r})),Object(r.a)(a,d.fulfilled.type,(function(e,t){var n=t.meta.arg,a=e.posts[n];a.async.error=null,a.async.loading="idle",a.post=t.payload.post})),Object(r.a)(a,d.rejected.type,(function(e,t){var n,a=t.meta.arg,r=null!==(n=e.posts[a])&&void 0!==n?n:{};r.async={error:t.error.message,loading:"idle"},r.post=null,e.posts[a]=r})),Object(r.a)(a,m.pending.type,(function(e,t){})),Object(r.a)(a,m.fulfilled.type,(function(e,t){var n=Object.values(t.payload.posts).reduce((function(e,t){return Object(o.a)({},e,Object(r.a)({},t.postID,{async:{error:null,loading:"idle"},post:t}))}),{});Object.assign(e.posts,n)})),Object(r.a)(a,m.rejected.type,(function(e,t){})),a)}),p=function(e,t){return Object(l.a)((function(e){var n;return null!==(n=e.feed.posts[t])&&void 0!==n?n:null}),(function(e){return e}))(e)},g=function(e,t){return Object(l.a)((function(e){return t.map((function(t){var n;return null!==(n=e.feed.posts[t])&&void 0!==n?n:null})).filter(Boolean).reduce((function(e,t){var n;return Object(o.a)({},e,Object(r.a)({},null===(n=t.post)||void 0===n?void 0:n.postID,t))}),{})}),(function(e){return e}))(e)},b=function(e,t){return Object(l.a)((function(e){var n=e.feed.categories[t].postIDs,a=null===n?null:Object.values(e.feed.posts).reduce((function(e,t){var a=t.post;return null!==a&&n.includes(a.postID)?Object(o.a)({},e,Object(r.a)({},a.postID,a)):e}),{});return{async:e.feed.categories[t].async,posts:a}}),(function(e){return e}))(e)},h=f.reducer},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(34),r=n(1),o=n.n(r),i=n(83),l=n(91),c=n(119),u={marginTop:[4,4,8],marginX:"auto",width:["80%","90%","90%","80%","70%"]},s=Object(a.a)({},c.a,{icons:Object(a.a)({},c.a.icons,{ioMdEye:{path:o.a.createElement(l.a,null),viewBox:"0 0 16 16"},ioMdEyeOff:{path:o.a.createElement(l.b,null),viewBox:"0 0 16 16"},mdAdd:{path:o.a.createElement(i.a,null),viewBox:"0 0 16 16"},mdHome:{path:o.a.createElement(i.b,null),viewBox:"0 0 16 16"},mdPerson:{path:o.a.createElement(i.c,null),viewBox:"0 0 16 16"}})})},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(32),r="/",o=Object(a.b)({basename:r})},56:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var a="/img/oliver-micke.jpg",r="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date(Date.now()-1e8),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return+new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))},i={1:{categories:["news"],date:o(),postID:1,rating:23,text:"Lorem ipsum dolor sit amet.",title:"VCU Developed CODVID-19 test",username:"olivermicke",imageURL:"https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",userImageURL:a},2:{categories:["grocery"],date:o(),postID:2,rating:72,text:"We will have a limited supply of toilet paper at Target on Broad street for the next days \u2013 source: I work there.",title:"Limited supply of toilet paper at Target on Broad street",username:"emily_rose28",imageURL:"https://images.unsplash.com/photo-1584556812952-905ffd0c611a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",userImageURL:r},3:{categories:["news","medical_supply"],date:o(),postID:3,rating:74,text:"Found some N95 masks available in the home depot in Henrico. I saw at least 3 boxes when I was there at around 9:30 AM",title:"N95 masks available again in Home Depot in Henrico",username:"olivermicke",imageURL:"https://images.unsplash.com/photo-1584462198614-03c2a523945d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",userImageURL:a},4:{categories:["advice"],date:o(),postID:4,rating:44,text:"Especially in areas with community-spread, it's recommended to wear face masks whenever possible.",title:"CDC recommends to wear face masks",username:"olivermicke",imageURL:"https://images.unsplash.com/photo-1582795003154-35736cf26353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",userImageURL:a},5:{categories:["news","grocery"],date:o(),postID:5,rating:54,text:"A friend of mine just told me that toilet paper production was ramped up to keep up with the incresed demand.",title:"Toilet paper production ramping up",username:"olivermicke",imageURL:"https://images.unsplash.com/photo-1583541988180-fdf816b632e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",userImageURL:a},6:{categories:["news"],date:o(),postID:6,rating:84,text:"Service disconnection has just been suspended!",title:"Service disconnection has been suspended",username:"emily_rose28",imageURL:"https://images.unsplash.com/uploads/141086319550951a179e1/a07e0918?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",userImageURL:r}},l={news:{1:i[1],3:i[3],5:i[5],6:i[6]},medical_supply:{3:i[3]},grocery:{2:i[2],5:i[5]},advice:{4:i[4]}}},67:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a,r=n(7),o=n(23),i=n(26),l=n(54),c=Object(o.b)("".concat("submit","/submitted"),(function(e){l.b.push("/")})),u=Object(o.c)({name:"submit",initialState:{async:{error:null,loading:"idle"}},reducers:{},extraReducers:(a={},Object(r.a)(a,c.pending.type,(function(e){"idle"===e.async.loading&&(e.async.loading="pending")})),Object(r.a)(a,c.fulfilled.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle")})),Object(r.a)(a,c.rejected.type,(function(e,t){"pending"===e.async.loading&&(e.async.loading="idle",e.async.error=t.error.message)})),a)}),s=function(e){return Object(i.a)((function(e){return e.submit.async}),(function(e){return e}))(e)},d=u.reducer},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(1),r=n.n(a),o=n(19),i=n(4),l=n(117),c=n(30),u=n(79),s=n(61),d=n(78),m=n(73),f={padding:2},p="https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",g=function(e){var t=e.date,n=e.detailViewRedirectToProfile,a=e.imageURL,g=e.postID,b=e.rating,h=e.title,y=e.userImageURL,v=e.username,E="/feed/detail/".concat(g).concat(n?"?redirect=profile":"");return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{boxShadow:"0px 8px 12px rgba(42, 52, 61, 0.16078431372549)",borderRadius:8,maxWidth:["initial","initial",350]},r.a.createElement(l.a,{as:o.b,to:E},r.a.createElement(i.a,{height:128,position:"relative"},r.a.createElement(c.a,Object.assign({},f,{background:"#ffffffdd",borderTopRightRadius:8,bottom:0,_hover:{textDecoration:"underline"},position:"absolute",width:"80%"}),h),r.a.createElement(u.a,{alt:"post background image",borderTopLeftRadius:8,borderTopRightRadius:8,height:"100%",objectFit:"cover",src:null!==a&&void 0!==a?a:p,width:"100%"}))),r.a.createElement(d.a,{date:t,userImageURL:y,username:v,style:f}),r.a.createElement(i.a,Object.assign({},f,{alignItems:"center",display:"flex"}),r.a.createElement(m.a,{rating:b,shouldShowDescription:!1}),r.a.createElement(s.a,{as:o.b,marginLeft:6,to:E,variant:"outline",variantColor:"blue"},"More"))))}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(1),r=n.n(a),o=n(118),i=n(4),l=n(80),c="Based on information gathered, we do not have enough information to be confident of this data.",u=function(e){var t=e.boxProps,n=e.labelProps,a=e.rating,u=e.shouldShowDescription,s=function(e){return null===e||e<40?"gray":e>=40&&e<=70?"yellow":"green"}(a),d=r.a.createElement(o.b,{"aria-label":"reliability score of post",color:s,role:"presentation",style:t,trackColor:s,value:null!==a&&void 0!==a?a:100},r.a.createElement(o.a,{style:n},null!==a&&void 0!==a?a:"?"));return u?r.a.createElement(i.a,{display:"flex",flex:1},r.a.createElement(i.a,{flex:3,marginRight:4},r.a.createElement(l.a,{as:"h3",color:"gray.700",fontWeight:"semibold",marginBottom:1},"Confidence score:"),r.a.createElement(l.a,null,function(e){return null===e||e<40||e>=40&&e<=70?c:"Based on information gathered, we are confident of this data."}(a))),r.a.createElement(i.a,{flex:1},d)):d}},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return e/parseFloat(r())},r=function(){return getComputedStyle(document.querySelector("body"))["font-size"]}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(1),r=n.n(a),o=n(4),i=n(80),l=n(168),c=n(19),u=n(117),s=n(173),d=u.a,m=function(e){var t=e.style,n=e.userImageURL,a=e.username,o="/profile"+"/".concat(a);return r.a.createElement(d,{as:c.b,to:o,style:t},n&&r.a.createElement(s.a,{marginRight:2,name:a,size:"xs",src:null!==n&&void 0!==n?n:""}),r.a.createElement(i.a,{as:"span",color:"blue.500",fontSize:"sm"},a))},f=function(e){var t=e.date;return r.a.createElement(r.a.Fragment,null,function(e){"object"!==typeof e&&(e=new Date(e));var t,n=Math.floor((new Date-e)/1e3),a=Math.floor(n/31536e3);return a>=1?t="year":(a=Math.floor(n/2592e3))>=1?t="month":(a=Math.floor(n/86400))>=1?t="day":(a=Math.floor(n/3600))>=1?t="hour":(a=Math.floor(n/60))>=1?t="minute":(a=n,t="second"),(a>1||0===a)&&(t+="s"),a+" "+t}(t)," ago")},p=function(e){var t=e.date,n=e.userImageURL,a=e.username,c=e.style;return r.a.createElement(o.a,Object.assign({alignItems:"center",display:"flex",marginTop:2},c),r.a.createElement(i.a,{alignItems:"center",as:"span",color:"gray.500",display:"flex",fontSize:"sm",fontWeight:"normal",height:"100%"},r.a.createElement(f,{date:new Date(t)})),r.a.createElement(l.a,{borderColor:"gray.300",height:"24px",orientation:"vertical"}),r.a.createElement(m,{style:{alignItems:"center",display:"flex",height:"100%"},userImageURL:n,username:a}))}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return k}));var a=n(1),r=n.n(a),o=n(21),i=n(46),l=n(19),c=n(77),u=n(117),s=n(165),d=n(84),m=n(40),f=n(80),p=n(4),g=n(166),b=n(79),h=n(61),y=n(78),v=n(73),E=n(43),O=n(37),j=n(74),w=n(68),x={news:"News",medical_supply:"Medical Supply",grocery:"Grocery",advice:"Advice"},I={advice:"/feed/advice",grocery:"/feed/grocery",medical_supply:"/feed/medical-supply",news:"/feed/news"},D=u.a,L=(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!window.MSStream?{marginTop:24}:{},k=function(e){var t,n,u=e.match,k=e.previousPathname,R=Object(o.b)(),T=Object(i.g)(),P=Object(s.a)(),S=null!==(t=Object(o.c)(O.i).profile)&&void 0!==t?t:null,C=Object(c.a)(0,{leading:!0,wait:250}),z=Object(j.a)(C)<=30,U=null!==(n=u.params.postID)&&void 0!==n?n:null,W=Object(o.c)((function(e){return Object(E.e)(e,parseInt(U))}));if(Object(a.useEffect)((function(){null===W&&R(Object(E.c)(+U))}),[R,W,U]),null===W||void 0===W?void 0:W.async.error)return r.a.createElement(r.a.Fragment,null,"TODO: Error state");if(null===W||!W.post)return r.a.createElement(r.a.Fragment,null,"TODO: Null state");var M=W.post,B=M.categories,H=M.date,N=M.imageURL,A=M.rating,q=M.text,F=M.title,J=M.userImageURL,_=M.username,Q=function(){var e=null!==k&&void 0!==k?k:"/";T.push(e)},G=function(){P({title:"Vote saved.",description:"Thank you for making ".concat((null===S||void 0===S?void 0:S.cityName)?"content in ".concat(S.cityName):"local content"," more reliable."),status:"success",duration:7e3,isClosable:!0})};return r.a.createElement(d.a,{scrollBehavior:"inside",isFullHeight:z,isOpen:!0,onClose:Q,placement:"bottom"},r.a.createElement(d.d,null),r.a.createElement(d.c,null,r.a.createElement(d.b,Object.assign({},L,{"aria-label":"return to feed"})),r.a.createElement(m.f,Object.assign({margin:["inherit","inherit","0 auto"],width:["initial","initial",1e3]},L),r.a.createElement(f.a,{as:"h2"},F),r.a.createElement(p.a,{marginTop:2,onClick:function(e){e.stopPropagation()}},B.map((function(e){return r.a.createElement(D,{as:l.b,key:e,to:I[e]},r.a.createElement(g.a,{marginRight:2,size:"sm"},x[e]))}))),r.a.createElement("div",{onClick:function(e){e.stopPropagation()},role:"presentation"},r.a.createElement(y.a,{date:H,style:{marginTop:4},userImageURL:J,username:_}))),r.a.createElement(m.b,{margin:"0 auto",maxWidth:"1000px",width:["initial","initial",1e3]},r.a.createElement(b.a,{alt:"post image",maxHeight:150,src:null!==N&&void 0!==N?N:w.a}),r.a.createElement(p.a,{marginTop:6},r.a.createElement(f.a,null,q)),r.a.createElement(p.a,{display:"flex",marginTop:[4,8,12]},r.a.createElement(v.a,{boxProps:{height:"100%",width:"100%",maxWidth:70,maxHeight:70},labelProps:{fontSize:"16px"},rating:A,shouldShowDescription:!0}))),r.a.createElement(m.e,{maxWidth:"1000px",width:["initial","initial",1e3],margin:["initial","initial","0 auto"]},r.a.createElement(h.a,{onClick:function(){G(),Q()},variant:"ghost",variantColor:"blue"},"Disconfirm"),r.a.createElement(h.a,{marginLeft:4,onClick:function(){G(),Q()},variantColor:"blue"},"Confirm"))))}}},[[120,1,2]]]);
//# sourceMappingURL=main.85887aac.chunk.js.map