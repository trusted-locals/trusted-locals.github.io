(this["webpackJsonptrusted-locals-frontend"]=this["webpackJsonptrusted-locals-frontend"]||[]).push([[8],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"Profile",(function(){return g}));var n=a(1),r=a.n(n),l=a(21),c=a(46),i=a(4),o=a(173),m=a(80),s=a(168),u=(a(61),a(43)),f=a(68),p=a(37),d=a(51),g=function(){var e,t,a,g=Object(l.b)(),E=Object(l.c)(p.j),b=Object(c.g)(),j=b.location.pathname.split("/profile/")[1],O=E===j||"me"===j,h=O?p.i:p.h,v=null!==(e=null===(t=Object(l.c)(h))||void 0===t?void 0:t.profile)&&void 0!==e?e:null,y=Object(l.c)((function(e){var t;return Object(u.g)(e,null!==(t=null===v||void 0===v?void 0:v.postIDs)&&void 0!==t?t:[])}));return Object(n.useEffect)((function(){g(Object(p.e)({isOwnProfile:O,userNameParam:null!==j&&void 0!==j?j:""}))}),[]),Object(n.useEffect)((function(){v||g(Object(p.c)({username:j}))})),v?r.a.createElement(i.a,d.a,r.a.createElement(i.a,null,r.a.createElement(i.a,{alignItems:"center",display:"flex",flexDirection:"column",marginTop:8},r.a.createElement(o.a,{size:"lg",name:v.username,src:null!==(a=v.imageURL)&&void 0!==a?a:""}),r.a.createElement(m.a,{color:"gray.600",fontWeight:"semibold",marginTop:2},v.firstName?"".concat(v.firstName," ").concat(v.lastName):v.username),r.a.createElement(m.a,{color:"gray.500"},v.cityName)),r.a.createElement(i.a,{color:"gray.500",display:"flex",justifyContent:"center",marginTop:4},r.a.createElement(i.a,{marginRight:6},r.a.createElement(m.a,{textAlign:"center"},v.postsCount),r.a.createElement(m.a,null,"Posts")),r.a.createElement(i.a,null,r.a.createElement(m.a,{textAlign:"center"},v.rating),r.a.createElement(m.a,null,"Rating")))),r.a.createElement(s.a,{borderColor:"gray.400"}),r.a.createElement(i.a,{display:"grid",gridTemplateColumns:["100%","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)"],gridGap:8,marginTop:8},Object.values(y).map((function(e){return e.post})).map((function(e){return e&&r.a.createElement(f.b,Object.assign({key:e.postID},e,{detailViewRedirectToProfile:!0}))}))),O&&!1):r.a.createElement("h3",null,"Should fetch data here. Will do that later.")}}}]);
//# sourceMappingURL=8.f995032f.chunk.js.map