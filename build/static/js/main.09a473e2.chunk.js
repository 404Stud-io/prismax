(this.webpackJsonpprimax=this.webpackJsonpprimax||[]).push([[1],{16:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var c=n(12),a=n(0),r=n.n(a),o=n(4),i=r.a.createContext(),s=function(e){var t=e.children,n=Object(a.useState)({EMAIL:"",FNAME:"",LNAME:"",INSTITUT:"",COUNTRY:"",TYPEINST:"",AGENT:"",DEGREE:"",PERMISO:"",checkOne:!1}),r=Object(c.a)(n,2),s=r[0],u=r[1],j=Object(a.useState)({name:"",email:"",commentary:""}),l=Object(c.a)(j,2),b=l[0],O=l[1],h=Object(a.useState)(!1),d=Object(c.a)(h,2),m=d[0],x=d[1],f=Object(a.useState)(!1),p=Object(c.a)(f,2),g=p[0],v=p[1],S=Object(a.useState)(!1),I=Object(c.a)(S,2),E=I[0],C=I[1];return Object(o.jsx)(i.Provider,{value:{isAuth:E,setIsAuth:C,valueForm:s,setValueForm:u,valueContactForm:b,setValueContactForm:O,dialogOpen:m,setDialogOpen:x,login:g,setLogin:v},children:t})}},57:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(31),r=n.n(a),o=n(39),i=n(2),s=n(70),u=n(73),j=n(4),l=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"center"}}}));function b(){var e=l();return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(u.a,{})})}var O=n(16),h=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,141))})),d=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,150))}));function m(){var e=Object(c.useContext)(O.a),t=e.login,n=e.setLogin,a=e.isAuth,r=e.setIsAuth;return localStorage.getItem("token")&&n(!0),t&&localStorage.getItem("token")&&r(!0),Object(j.jsx)(o.a,{children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(b,{}),children:a?Object(j.jsx)(i.c,{children:Object(j.jsx)(i.a,{exact:!0,path:"/",component:d})}):Object(j.jsx)(i.c,{children:Object(j.jsx)(i.a,{exact:!0,path:"/",component:h})})})})}var x=n(40),f=n(75),p=Object(x.a)({palette:{primary:{main:"#e88622"},secondary:{main:"#edefee"}}});var g=function(){return Object(j.jsx)(f.a,{theme:p,children:Object(j.jsx)(m,{})})},v=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,148)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};r.a.render(Object(j.jsx)(O.b,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),v()}},[[57,2,3]]]);
//# sourceMappingURL=main.09a473e2.chunk.js.map