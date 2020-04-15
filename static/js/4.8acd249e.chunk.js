(this["webpackJsonptrusted-locals-frontend"]=this["webpackJsonptrusted-locals-frontend"]||[]).push([[4],{175:function(e,a,t){"use strict";var n=t(3),r=t.n(n),i=t(5),s=t.n(i),l=t(2),o=t(4),c=t(1),d={"2xl":["4xl",null,"5xl"],xl:["3xl",null,"4xl"],lg:["xl",null,"2xl"],md:"xl",sm:"md",xs:"sm"},m=Object(c.forwardRef)((function(e,a){var t=e.size,n=void 0===t?"xl":t,i=s()(e,["size"]);return Object(l.d)(o.a,r()({ref:a,as:"h2",fontSize:d[n],lineHeight:"shorter",fontWeight:"bold",fontFamily:"heading"},i))}));m.displayName="Heading",a.a=m},176:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(1),r=t.n(n),i=t(93),s=t(177),l=t(169),o=t(103),c=t(92),d=t(171),m=function(e){var a=e.containerStyles,t=e.isPasswordVisible,n=e.password,m=e.setIsPasswordVisible,u=e.setPassword;return r.a.createElement(i.a,a,r.a.createElement(s.a,{htmlFor:"password"},"Password"),r.a.createElement(l.a,{size:"md"},r.a.createElement(o.a,{id:"password",isRequired:!0,maxLength:64,minLength:8,onChange:function(e){var a=e.target;u(a.value)},value:n,type:t?"text":"password"}),r.a.createElement(c.b,{width:"4.5rem"},r.a.createElement(d.a,{"aria-label":t?"hide password":"show password",height:"65%",icon:t?"ioMdEyeOff":"ioMdEye",onClick:function(){m(!t)},title:t?"Hide password":"Show password",variant:"outline",size:"sm"}))))}},177:function(e,a,t){"use strict";var n=t(5),r=t.n(n),i=t(3),s=t.n(i),l=t(2),o=t(1),c=t(4),d=t(93),m=t(15),u=function(e){var a=Object(m.a)().colorMode;return Object(l.d)(c.a,s()({as:"span",ml:1,color:{light:"red.500",dark:"red.300"}[a],"aria-hidden":"true",children:"*"},e))},b=Object(o.forwardRef)((function(e,a){var t=e.children,n=r()(e,["children"]),i=Object(d.b)(n);return Object(l.d)(c.a,s()({ref:a,fontSize:"md",pr:"12px",pb:"4px",opacity:i.isDisabled?"0.4":"1",fontWeight:"medium",textAlign:"left",verticalAlign:"middle",display:"inline-block",as:"label"},n),t,i.isRequired&&Object(l.d)(u,null))}));b.displayName="FormLabel",a.a=b},181:function(e,a,t){"use strict";t.r(a),t.d(a,"Registration",(function(){return O}));var n=t(38),r=t(1),i=t.n(r),s=t(21),l=t(19),o=t(46),c=t(4),d=t(175),m=t(93),u=t(177),b=t(103),f=t(61),p=t(64),g=t(117),h=t(37),E=t(176),v=t(51),w={marginTop:4},O=Object(o.i)((function(){var e=Object(s.b)(),a=Object(s.c)(h.f),t=a.error,o=a.loading,O=Object(r.useState)(""),j=Object(n.a)(O,2),x=j[0],y=j[1],S=Object(r.useState)(""),R=Object(n.a)(S,2),L=R[0],P=R[1],z=Object(r.useState)(""),k=Object(n.a)(z,2),C=k[0],F=k[1],T=Object(r.useState)(!1),q=Object(n.a)(T,2),V=q[0],W=q[1];return i.a.createElement(c.a,Object.assign({},v.a,{maxWidth:"500px"}),i.a.createElement(d.a,{as:"h2"},"Register"),i.a.createElement(c.a,{marginTop:8},i.a.createElement("form",{onSubmit:function(a){a.preventDefault(),e(Object(h.d)({country:"test-country",email:L,name:x,password:C}))}},i.a.createElement(m.a,w,i.a.createElement(u.a,{htmlFor:"username"},"Username"),i.a.createElement(b.a,{id:"username",isRequired:!0,maxLength:16,minLength:3,onChange:function(e){var a=e.target;y(a.value)},type:"text",value:x})),i.a.createElement(m.a,w,i.a.createElement(u.a,{htmlFor:"email"},"Email address"),i.a.createElement(b.a,{isRequired:!0,id:"email",onChange:function(e){var a=e.target;P(a.value)},type:"email",value:L})),i.a.createElement(E.a,{containerStyles:w,isPasswordVisible:V,password:C,setIsPasswordVisible:W,setPassword:F}),i.a.createElement(f.a,{isLoading:"pending"===o,marginTop:6,type:"submit",variantColor:"blue"},"Register")),t&&i.a.createElement(p.a,{marginTop:6,status:"error",variant:"left-accent"},i.a.createElement(p.c,null),t)),i.a.createElement(c.a,{marginTop:12},"Already have an account?"," ",i.a.createElement(l.b,{to:"/account/login"},i.a.createElement(g.a,{as:"span",color:"blue.500",fontWeight:"semibold"},"Login here."))))}))}}]);
//# sourceMappingURL=4.8acd249e.chunk.js.map