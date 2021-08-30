(this["webpackJsonpself-site"]=this["webpackJsonpself-site"]||[]).push([[0],{405:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(13),c=n.n(r),o=n(51),l=n(35),s=n(72),u=n(71),j=n(12),d=n(438),p=n(439),b=n(125),h=n(73),m=n(74),x=Object(b.a)({palette:{background:{default:"#000000"},primary:{main:h.a[900]},secondary:{main:m.a[500]},typography:{allVariants:{color:"#FAFAFA"}},text:{primary:"#000000"}}}),f=n(59),O=n(18),g=n(119),v=n(4),y=n(435),k=n(436),w=n(437),C=n(434),E=n(443),I=n(122),_=n.n(I),A=n(123),S=n.n(A),T=n(433),z=n(42),F=n(442),M=n(444),R=n(121),U=n.n(R),B=n(5),D=function(){var e=i.a.useState(null),t=Object(z.a)(e,2),n=t[0],r=t[1];return Object(B.jsxs)(a.Fragment,{children:[Object(B.jsx)(E.a,{title:"Misc. React Apps",children:Object(B.jsx)(T.a,{color:"inherit","aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",onClick:function(e){n!==e.currentTarget&&r(e.currentTarget)},children:Object(B.jsx)(U.a,{})})}),Object(B.jsx)(F.a,{id:"simple-menu",anchorEl:n,getContentAnchorEl:null,open:Boolean(n),onClose:function(){r(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:Object(B.jsx)(M.a,{onClick:function(){return window.location.replace("https://ionice.me/course-finder")},children:"UofT Course Finder"})})]})},H=["classes"],J=function(e){return{root:{flexGrow:1},flex:{flex:1},homeButton:{marginLeft:-12,marginRight:20},toolbarMargin:e.mixins.toolbar}},L=Object(j.a)(J)(function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={scrolling:!1,scrollTop:0},e.onScroll=function(t){e.setState((function(e){return{scrollTop:t.target.documentElement.scrollTop,scrolling:t.target.documentElement.scrollTop>e.scrollTop}}))},e}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.scrolling!==t.scrolling}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.title;return Object(B.jsxs)(a.Fragment,{children:[Object(B.jsx)(C.a,{in:!this.state.scrolling,children:Object(B.jsx)(y.a,{children:Object(B.jsxs)(k.a,{children:[Object(B.jsx)(w.a,{variant:"subtitle1",color:"inherit",className:t.flex,children:n}),Object(B.jsx)(E.a,{title:"Home","aria-label":"home",children:Object(B.jsx)(T.a,{color:"inherit",component:f.b,to:"/",children:Object(B.jsx)(_.a,{})})}),Object(B.jsx)(E.a,{title:"Misc. React Apps","aria-label":"quick apps",children:Object(B.jsx)(D,{})}),Object(B.jsx)(E.a,{title:"Resume","aria-label":"resume",children:Object(B.jsx)(T.a,{color:"inherit",component:f.b,to:"/resume",children:Object(B.jsx)(S.a,{})})})]})})}),Object(B.jsx)("div",{className:t.toolbarMargin})]})}}]),n}(a.Component)),N=Object(j.a)(J)((function(e){var t=e.classes,n=Object(v.a)(e,H);return Object(B.jsx)("div",{className:t.root,children:Object(B.jsx)(L,Object(g.a)({},n))})})),q=n(441),G=function(){return Object(B.jsxs)("div",{children:[Object(B.jsx)(N,{title:"Home"}),Object(B.jsxs)(q.a,{justifyContent:"center",display:"flex",flexDirection:"column",children:[Object(B.jsxs)(q.a,{mx:20,mt:20,height:"25vh",alignItems:"flex-start",justifyContent:"center",display:"flex",flexDirection:"column",children:[Object(B.jsx)(w.a,{variant:"h5",display:"inline",paragraph:"true",children:"Hi there! I'm Julian."}),Object(B.jsx)(w.a,{variant:"body1",display:"inline",paragraph:"true",children:"I'm currently studying Computer Science and Statistics at the University of Toronto. I'm interested in designing UIs that place equal emphasis on form and function, as well as manipulating data and extracting insights from it."}),Object(B.jsx)(w.a,{variant:"body1",display:"inline",paragraph:"true",children:"In my spare time, I enjoy developing tools that solves problems that I run into, such as extracting data from games that I like, or signing up for sessions at the gym automatically."})]}),Object(B.jsx)(q.a,{mx:20,height:"25vh",alignItems:"center",justifyContent:"center",display:"flex",children:Object(B.jsx)(w.a,{variant:"body1",display:"inline",paragraph:"true",children:"Site is a WIP. Check again later!"})})]})]})},W=function(){return Object(B.jsx)("div",{children:Object(B.jsx)(N,{title:"Misc. Apps"})})},P=function(){return Object(B.jsx)("div",{children:Object(B.jsx)(N,{title:"Resume"})})},V=function(){return Object(B.jsx)(f.a,{children:Object(B.jsxs)(O.c,{children:[Object(B.jsx)(O.a,{path:"/",exact:!0,component:G}),Object(B.jsx)(O.a,{path:"/apps",component:W}),Object(B.jsx)(O.a,{path:"/resume",component:P})]})})},X=n(124),Y=n.n(X),K=function(){return Object(B.jsx)("div",{style:{position:"absolute",top:0,left:0,flex:1},children:Object(B.jsx)(Y.a,{width:"100vw",height:"100vh",params:{fullScreen:{enable:!0,zIndex:-1},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle"},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:2,direction:"bottom",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.5}},bubble:{distance:400,size:4,duration:.3,opacity:1,speed:3},repulse:{distance:100},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,background:{color:"#EEEEEE",image:"",position:"50% 50%",repeat:"no-repeat",size:"cover"}}})})},Q=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(B.jsxs)(d.a,{theme:x,children:[Object(B.jsx)(p.a,{}),Object(B.jsx)(K,{}),Object(B.jsx)(V,{})]})}}]),n}(a.Component),Z=Object(j.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}))(Q);c.a.render(Object(B.jsx)(Z,{options:{justify:"center"}}),document.getElementById("root"))}},[[405,1,2]]]);
//# sourceMappingURL=main.c934b77e.chunk.js.map