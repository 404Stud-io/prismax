(this.webpackJsonpprimax=this.webpackJsonpprimax||[]).push([[1],{16:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));var c=n(12),a=n(0),r=n.n(a),o=n(4),i=r.a.createContext(),s=function(e){var t=e.children,n=Object(a.useState)({EMAIL:"",FNAME:"",LNAME:"",INSTITUT:"",COUNTRY:"",TYPEINST:"",AGENT:"",DEGREE:"",PERMISO:"",checkOne:!1}),r=Object(c.a)(n,2),s=r[0],u=r[1],l=Object(a.useState)({name:"",email:"",commentary:""}),j=Object(c.a)(l,2),b=j[0],O=j[1],h=Object(a.useState)(!1),m=Object(c.a)(h,2),d=m[0],x=m[1],g=Object(a.useState)(!1),f=Object(c.a)(g,2),p=f[0],v=f[1],S=Object(a.useState)(!1),I=Object(c.a)(S,2),E=I[0],C=I[1];return Object(o.jsx)(i.Provider,{value:{isAuth:E,setIsAuth:C,valueForm:s,setValueForm:u,valueContactForm:b,setValueContactForm:O,dialogOpen:d,setDialogOpen:x,login:p,setLogin:v},children:t})}},57:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(32),r=n.n(a),o=n(39),i=n(2),s=n(70),u=n(73),l=n(4),j=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"center"}}}));function b(){var e=j();return Object(l.jsx)("div",{className:e.root,children:Object(l.jsx)(u.a,{})})}var O=n(16),h=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,124))})),m=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,133))}));function d(){var e=Object(c.useContext)(O.a),t=e.login,n=e.setLogin,a=e.isAuth,r=e.setIsAuth;return console.log(t,localStorage.getItem("token")),localStorage.getItem("token")&&n(!0),t&&localStorage.getItem("token")&&r(!0),Object(l.jsx)(o.a,{children:Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)(b,{}),children:a?Object(l.jsx)(i.c,{children:Object(l.jsx)(i.a,{exact:!0,path:"/",component:m})}):Object(l.jsx)(i.c,{children:Object(l.jsx)(i.a,{exact:!0,path:"/",component:h})})})})}var x=n(40),g=n(75),f=Object(x.a)({palette:{primary:{main:"#e88622"},secondary:{main:"#edefee"}}});var p=function(){return Object(l.jsx)(g.a,{theme:f,children:Object(l.jsx)(d,{})})},v=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,131)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};r.a.render(Object(l.jsx)(O.b,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),v()}},[[57,2,3]]]);
//# sourceMappingURL=main.69e79ea3.chunk.js.map