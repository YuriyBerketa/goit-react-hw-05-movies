"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[140],{127:function(n,A,r){r.d(A,{OT:function(){return s},QY:function(){return i},Y5:function(){return u},oO:function(){return l},y:function(){return p}});var e=r(861),t=r(687),o=r.n(t),a=r(243),c="414e626a6dd93e46a20c42c05170abc8";a.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,e.Z)(o().mark((function n(){var A,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/movie/day?api_key=".concat(c,"&page=1"));case 2:return A=n.sent,r=A.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(A){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(A,"&language=en-US&page=1&include_adult=false"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(o().mark((function n(A){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(A,"?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(A){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(A,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(A){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(A,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}()},834:function(n,A,r){r.d(A,{Z:function(){return c}});var e,t=r(168),o=(0,r(686).Z)("div")(e||(e=(0,t.Z)(["\nmargin-left: auto; \n  margin-right: auto; \n  min-width: 320px; \n  padding-left: 20px; \n  padding-right: 20px; \n  padding-top: 20px;\n"]))),a=r(184),c=function(n){var A=n.children;return(0,a.jsx)(o,{children:A})}},140:function(n,A,r){r.r(A),r.d(A,{default:function(){return H}});var e,t,o,a,c,i,s,u,p,l=r(861),d=r(439),f=r(687),x=r.n(f),g=r(127),h=r(549),Z=r(168),b=r(686),v=(0,b.Z)("div")(e||(e=(0,Z.Z)(["\n  display: flex;\n  padding: 20px;\n  gap: 50px;\n  justify-content: center;\n  background-color: black;\n"]))),k=(0,b.Z)("img")(t||(t=(0,Z.Z)(["\n  display: block;\n"]))),Q=(0,b.Z)("div")(o||(o=(0,Z.Z)(["\n  padding: 20px;\n  border: 2px solid black;\n  width: 600px;\n  background-color: white;\n"]))),y=(0,b.Z)("h2")(a||(a=(0,Z.Z)(["\n  text-align: center;\n  font-size: 35px;\n"]))),w=(0,b.Z)("p")(c||(c=(0,Z.Z)(["\n  font-size: 25px;\n"]))),m=(0,b.Z)("h3")(i||(i=(0,Z.Z)(["\n  font-size: 25px;\n"]))),U=(0,b.Z)("p")(s||(s=(0,Z.Z)(["\n  font-size: 20px;\n"]))),B=(0,b.Z)("h3")(u||(u=(0,Z.Z)(["\n  font-size: 25px;\n"]))),j=(0,b.Z)("p")(p||(p=(0,Z.Z)(["\n  font-size: 25px;\n"]))),C=r(184),K=function(n){var A,r=n.movie,e=r.overview,t=r.title,o=r.release_date,a=r.genres,c=r.vote_average;return A=r.poster_path?"https://image.tmdb.org/t/p/w400".concat(r.poster_path):h,(0,C.jsxs)(v,{children:[(0,C.jsx)(k,{src:A,alt:t}),(0,C.jsxs)(Q,{children:[(0,C.jsxs)(y,{children:['"',t,'"(',new Date(o).getFullYear(),")"]}),(0,C.jsxs)(w,{children:["User Score: ",Math.round(10*c),"%"]}),(0,C.jsx)(m,{children:"Overview"}),(0,C.jsx)(U,{children:e}),(0,C.jsx)(B,{children:"Genres"}),(0,C.jsx)(j,{children:a.map((function(n){return n.name})).join(", ")})]})]})},z=r(791),F=r(689),D=r(444),S=r(834),H=function(){var n,A,r=(0,F.TH)(),e=(0,z.useState)(null),t=(0,d.Z)(e,2),o=t[0],a=t[1],c=(0,z.useState)(null),i=(0,d.Z)(c,2),s=i[0],u=i[1],p=(0,F.UO)().movieId,f=null!==(n=null===(A=r.state)||void 0===A?void 0:A.from)&&void 0!==n?n:"/";return(0,z.useEffect)((function(){var n=function(){var n=(0,l.Z)(x().mark((function n(){var A;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,g.Y5)(p);case 3:A=n.sent,a(A),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),u(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[p]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(S.Z,{children:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(D.fG,{children:[" ",(0,C.jsx)(D.Qj,{to:f,children:"Back to all movies"})]}),s&&(0,C.jsx)("div",{children:"Something wrong"}),o&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(K,{movie:o}),(0,C.jsxs)(D.tP,{children:[(0,C.jsx)(D.z_,{children:"Additiona information"}),(0,C.jsx)(D.LY,{to:"cast",state:r.state,children:"Cast"}),(0,C.jsx)(D.LY,{to:"reviews",state:r.state,children:"Reviews"})]})]})]})}),(0,C.jsx)(z.Suspense,{fallback:null,children:(0,C.jsx)(F.j3,{})})]})}},444:function(n,A,r){r.d(A,{$L:function(){return H},H:function(){return S},LY:function(){return z},MA:function(){return B},OM:function(){return Q},Qj:function(){return w},fG:function(){return F},kD:function(){return U},nf:function(){return k},qX:function(){return m},rS:function(){return y},tP:function(){return C},tk:function(){return j},vr:function(){return D},z_:function(){return K}});var e,t,o,a,c,i,s,u,p,l,d,f,x,g,h,Z=r(168),b=r(686),v=r(87),k=(0,b.Z)(v.rU)(e||(e=(0,Z.Z)(["\n  width: 400px;\n  background-color: black;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  text-decoration: none;\n  margin-bottom: 40px;\n  transition: scale 250ms linear, box-shadow 250ms linear;\n  &:hover {\n    scale: calc(1.03);\n    box-shadow: 0px 0px 20px 8px gray;\n  }\n  &:nth-last-of-type(-n + 4) {\n    margin-bottom: 0;\n  }\n  //  &:nth-last-child(-n + 4) {\n  //   margin-bottom: 0;\n  // }\n  \n"]))),Q=(0,b.Z)("div")(t||(t=(0,Z.Z)(["\n  // padding: 50px;\n  gap: 20px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),y=(0,b.Z)("h2")(o||(o=(0,Z.Z)(["\n  text-align: center;\n  font-size: 25px;\n  color: white;\n"]))),w=(0,b.Z)(v.rU)(a||(a=(0,Z.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  border-radius: 5px;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  border: 2px solid black;\n  background-color: black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  :focus {\n    background-color: white;\n    color: black;\n  }\n"]))),m=(0,b.Z)("button")(c||(c=(0,Z.Z)(["\n  font-size: 20px;\n  background-color: black;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  border: 2px solid black;\n  transition: background-color 250ms linear, color 250ms linear;\n  &:hover,\n  focus {\n    color: black;\n    background-color: white;\n  }\n"]))),U=(0,b.Z)("form")(i||(i=(0,Z.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 20px;\n"]))),B=(0,b.Z)("input")(s||(s=(0,Z.Z)(["\n  padding: 10px;\n  font-size: 20px;\n  outline: none;\n  border: 2px solid black;\n  border-radius: 5px;\n"]))),j=(0,b.Z)("h1")(u||(u=(0,Z.Z)(["\n  text-align: center;\n  font-weight: 900;\n  font-size: 40px;\n"]))),C=(0,b.Z)("div")(p||(p=(0,Z.Z)(["\n  padding: 50px;\n"]))),K=(0,b.Z)("h3")(l||(l=(0,Z.Z)(["\n  margin-top: 0;\n  font-size: 25px;\n"]))),z=(0,b.Z)(v.OL)(d||(d=(0,Z.Z)(["\n  display: inline-block;\n  padding: 10px;\n  text-decoration: none;\n  font-size: 25px;\n  color: black;\n  border-radius: 5px;\n  border: 2px solid black;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:focus,\n  :hover {\n    color: white;\n    background-color: black;\n  }\n  &.active {\n    color: white;\n    background-color: black;\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n"]))),F=(0,b.Z)("div")(f||(f=(0,Z.Z)(["\n  padding: 20px;\n"]))),D=(0,b.Z)("div")(x||(x=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),S=(0,b.Z)("p")(g||(g=(0,Z.Z)(["\n  font-size: 40px;\n"]))),H=(0,b.Z)(v.rU)(h||(h=(0,Z.Z)([""])))},549:function(n){n.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=140.22cf7ba6.chunk.js.map