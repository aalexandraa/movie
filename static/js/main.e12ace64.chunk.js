(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),s=c(5),n=c.n(s),i=(c(11),c(3)),l=c.n(i),o=c(6),j=c(4),u=c(0);function d(e){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.movie.poster_path),alt:e.movie.title+" poster"}),Object(u.jsxs)("div",{className:"card--content",children:[Object(u.jsx)("h3",{className:"card--title",children:e.movie.title}),Object(u.jsx)("p",{children:Object(u.jsxs)("small",{children:["RELEASE DATE: ",e.movie.release_date]})}),Object(u.jsx)("p",{children:Object(u.jsxs)("small",{children:["RATING: ",e.movie.vote_average]})}),Object(u.jsx)("p",{className:"card--desc",children:e.movie.overview})]})]})}function b(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)([]),n=Object(j.a)(s,2),i=n[0],b=n[1],m=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a="https://api.themoviedb.org/3/search/movie?api_key=9d16314c20d0b78eb0f8742546cddf9d&language=en-US&query=".concat(c,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(a);case 5:return r=e.sent,e.next=8,r.json();case 8:s=e.sent,b(s.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{className:"form",onSubmit:m,children:[Object(u.jsx)("label",{className:"label",htmlFor:"query"}),Object(u.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"i.e. Jurassic Park",value:c,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("button",{className:"button",type:"submit",children:"Search"})]}),Object(u.jsx)("div",{className:"card-list",children:i.filter((function(e){return e.poster_path})).map((function(e){return Object(u.jsx)(d,{movie:e},e.id)}))})]})}var m=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"title",children:"React Movie Search"}),Object(u.jsx)(b,{})]})};n.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e12ace64.chunk.js.map