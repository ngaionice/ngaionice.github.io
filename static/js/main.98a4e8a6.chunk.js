(this["webpackJsonpself-site"]=this["webpackJsonpself-site"]||[]).push([[0],{83:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(11),o=n.n(r),s=n(10),a=n(65),i=n(43),l=n(44),j=Object(a.a)({palette:{primary:{main:i.a[900]},secondary:{main:l.a[500]}}}),b=n(114),u=n(30),p=n(6),d=n(59),h=n(2),O=n(60),x=n(28),m=n(67),f=n(66),v=n(117),g=n(112),y=n(113),w=n(111),k=n(116),E=n(62),M=n.n(E),T=n(63),A=n.n(T),N=n(64),R=n.n(N),S=n(115),L=n(3),B=["classes"],C=function(e){return{root:{flexGrow:1},flex:{flex:1},homeButton:{marginLeft:-12,marginRight:20},toolbarMargin:e.mixins.toolbar}},G=Object(s.a)(C)(function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(O.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={scrolling:!1,scrollTop:0},e.onScroll=function(t){e.setState((function(e){return{scrollTop:t.target.documentElement.scrollTop,scrolling:t.target.documentElement.scrollTop>e.scrollTop}}))},e}return Object(x.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.scrolling!==t.scrolling}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.title;return Object(L.jsxs)(c.Fragment,{children:[Object(L.jsx)(w.a,{in:!this.state.scrolling,children:Object(L.jsx)(v.a,{children:Object(L.jsxs)(g.a,{children:[Object(L.jsx)(y.a,{variant:"subtitle1",color:"inherit",className:t.flex,children:n}),Object(L.jsx)(k.a,{title:"Home","aria-label":"home",children:Object(L.jsx)(S.a,{color:"inherit",component:u.b,to:"/",children:Object(L.jsx)(M.a,{})})}),Object(L.jsx)(k.a,{title:"Misc. React Apps","aria-label":"quick apps",children:Object(L.jsx)(S.a,{color:"inherit",component:u.b,to:"/apps",children:Object(L.jsx)(A.a,{})})}),Object(L.jsx)(k.a,{title:"Resume","aria-label":"resume",children:Object(L.jsx)(S.a,{color:"inherit",component:u.b,to:"/resume",children:Object(L.jsx)(R.a,{})})})]})})}),Object(L.jsx)("div",{className:t.toolbarMargin})]})}}]),n}(c.Component)),H=Object(s.a)(C)((function(e){var t=e.classes,n=Object(h.a)(e,B);return Object(L.jsx)("div",{className:t.root,children:Object(L.jsx)(G,Object(d.a)({},n))})})),J=function(){return Object(L.jsx)("div",{children:Object(L.jsx)(H,{title:"Home"})})},U=function(){return Object(L.jsx)("div",{children:Object(L.jsx)(H,{title:"Misc. Apps"})})},q=function(){return Object(L.jsx)("div",{children:Object(L.jsx)(H,{title:"Resume"})})},D=function(){return Object(L.jsx)(u.a,{children:Object(L.jsxs)(p.c,{children:[Object(L.jsx)(p.a,{path:"/",exact:!0,component:J}),Object(L.jsx)(p.a,{path:"/apps",component:U}),Object(L.jsx)(p.a,{path:"/resume",component:q})]})})},F=Object(s.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}))((function(e){var t=e.classes;return Object(L.jsx)(b.a,{theme:j,children:Object(L.jsx)("div",{className:t.root,children:Object(L.jsx)(D,{})})})}));o.a.render(Object(L.jsx)(F,{options:{justify:"center"}}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.98a4e8a6.chunk.js.map