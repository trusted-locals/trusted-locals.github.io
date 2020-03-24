(this["webpackJsonptrusted-locals-frontend"]=this["webpackJsonptrusted-locals-frontend"]||[]).push([[4],{75:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a),o=n(79),i=n(96),s=n(97),c=n(86),l=n(85),u=n(100),d=function(e){var t=e.containerStyles,n=e.isPasswordVisible,a=e.password,d=e.setIsPasswordVisible,f=e.setPassword;return r.a.createElement(o.a,t,r.a.createElement(i.a,{htmlFor:"password"},"Password"),r.a.createElement(s.a,{size:"md"},r.a.createElement(c.a,{id:"password",isRequired:!0,maxLength:64,minLength:8,onChange:function(e){var t=e.target;f(t.value)},value:a,type:n?"text":"password"}),r.a.createElement(l.b,{width:"4.5rem"},r.a.createElement(u.a,{"aria-label":"toggle password visibility",height:"65%",onClick:function(){d(!n)},variant:"outline",size:"sm"},n?"Hide":"Show"))))}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(84);function r(e,t){var n;return null===(n=t.onStart)||void 0===n||n.call(t),window.fetch("http://localhost:8080"+e,Object(a.a)({credentials:"include",headers:{"Content-Type":"application/json"}},t.fetchOptions)).then((function(e){return e.json().then((function(t){if(e.ok)return t;throw t}))})).then((function(e){t.onSuccess(e)})).catch((function(e){t.onFailure({errorMessage:e.errorMessage||"An unknown error has occured."})})).finally((function(){var e;null===(e=t.onEnd)||void 0===e||e.call(t)}))}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginPage",(function(){return y}));var a=n(45),r=n(0),o=n.n(r),i=n(22),s=n(30),c=n(79),l=n(96),u=n(86),d=n(100),f=n(27),m=n.n(f),b=n(43),p=n.n(b),h=n(5),v=n(78),w={transition:"all 0.15s ease-out",cursor:"pointer",textDecoration:"none",outline:"none",_focus:{boxShadow:"outline"},_disabled:{opacity:"0.4",cursor:"not-allowed",textDecoration:"none"}},g=Object(r.forwardRef)((function(e,t){var n=e.isDisabled,a=e.isExternal,r=e.onClick,o=p()(e,["isDisabled","isExternal","onClick"]),i=a?{target:"_blank",rel:"noopener noreferrer"}:null;return Object(h.d)(v.a,m()({as:"a",ref:t,tabIndex:n?-1:void 0,"aria-disabled":n,onClick:n?function(e){return e.preventDefault()}:r,_hover:{textDecoration:"underline"}},i,w,o))}));g.displayName="Link";var E=g,O=n(101),j=n(75),S=n(77),x={marginTop:4},y=function(){var e=Object(i.f)(),t=Object(r.useState)(""),n=Object(a.a)(t,2),f=n[0],m=n[1],b=Object(r.useState)(""),p=Object(a.a)(b,2),h=p[0],v=p[1],w=Object(r.useState)(!1),g=Object(a.a)(w,2),y=g[0],k=g[1],C=Object(r.useState)(!1),P=Object(a.a)(C,2),L=P[0],D=P[1],F=Object(r.useState)(""),T=Object(a.a)(F,2),V=T[0],_=T[1];return o.a.createElement(s.a,{maxWidth:"500px"},o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),Object(S.a)("/user/login",{fetchOptions:{body:JSON.stringify({name:f,password:h}),method:"POST"},onStart:function(){D(!0)},onSuccess:function(t){e.push("/")},onFailure:function(e){var t=e.errorMessage;_(t)},onEnd:function(){D(!1)}})}},o.a.createElement(c.a,x,o.a.createElement(l.a,{htmlFor:"username"},"Username"),o.a.createElement(u.a,{id:"username",isRequired:!0,maxLength:16,minLength:3,onChange:function(e){var t=e.target;m(t.value)},type:"text",value:f})),o.a.createElement(j.a,{containerStyles:x,isPasswordVisible:y,password:h,setIsPasswordVisible:k,setPassword:v}),o.a.createElement(s.a,{display:"flex",justifyContent:"space-between",marginTop:6},o.a.createElement(d.a,{isLoading:L,variantColor:"teal",type:"submit"},"Login"),o.a.createElement(E,{display:"flex",href:"/"},o.a.createElement(d.a,{variant:"link",size:"sm"},"Forgot password?")))),V&&o.a.createElement(O.a,{marginTop:6,status:"error",variant:"left-accent"},o.a.createElement(O.b,null),V))}}}]);
//# sourceMappingURL=4.c2f8d85b.chunk.js.map