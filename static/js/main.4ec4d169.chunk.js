(this["webpackJsonpmemory-cards"]=this["webpackJsonpmemory-cards"]||[]).push([[0],{10:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),i=c(3),s=c.n(i),a=(c(10),c(4)),m=c.n(a),r=c(5),g=c(0);var h=e=>{const[t,c]=Object(n.useState)(r);return Object(n.useEffect)((()=>{var e=[...t];!function(e){for(let t=e.length-1;t>0;t--){let c=Math.floor(Math.random()*t);[e[c],e[t]]=[e[t],e[c]]}}(e),c(e)}),[e.score,e.highScore]),Object(g.jsx)("div",{className:"board",children:t.map((t=>Object(g.jsxs)("div",{className:"card",onClick:e.handleGameLogic.bind(void 0,t.name),children:[Object(g.jsx)("img",{src:t.image,alt:t.name}),Object(g.jsx)("h3",{children:Object(g.jsx)("strong",{children:t.name})})]},m()())))})};var j=e=>Object(g.jsxs)("header",{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Memory Game"}),Object(g.jsx)("p",{children:"Get points by clicking on an image but don't click on any more than once! Can you get to 12?"})]}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{children:["Score: ",e.score," / 12"]}),Object(g.jsxs)("h2",{children:["High Score: ",e.highScore]})]})]});var p=()=>{const[e,t]=Object(n.useState)(0),[c,o]=Object(n.useState)(0),[i,s]=Object(n.useState)([]);return Object(g.jsxs)("div",{children:[Object(g.jsx)(j,{score:c,highScore:e}),Object(g.jsx)(h,{handleGameLogic:function(e){i.includes(e)?(t(c),o(0),s([])):(!function(e){s((t=>[...t,e]))}(e),o(c+1))},score:c,highScore:e})]})};s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('[{"name":"Bear","image":"https://img.icons8.com/cotton/50/000000/bear.png"},{"name":"Jellyfish","image":"https://img.icons8.com/cotton/50/000000/jellyfish--v2.png"},{"name":"Crab","image":"https://img.icons8.com/cotton/50/000000/crab--v1.png"},{"name":"Dog","image":"https://img.icons8.com/cotton/50/000000/dog-jump--v1.png"},{"name":"Cat","image":"https://img.icons8.com/cotton/50/000000/cat--v2.png"},{"name":"Roster","image":"https://img.icons8.com/cotton/50/000000/screaming-rooster.png"},{"name":"Cow","image":"https://img.icons8.com/cotton/50/000000/cow--v2.png"},{"name":"Owl","image":"https://img.icons8.com/cotton/50/000000/owl--v1.png"},{"name":"Pigeon","image":"https://img.icons8.com/cotton/50/000000/pigeon--v3.png"},{"name":"Pig","image":"https://img.icons8.com/cotton/50/000000/pig--v1.png"},{"name":"Spider","image":"https://img.icons8.com/cotton/50/000000/spider.png"},{"name":"Octopus","image":"https://img.icons8.com/cotton/50/000000/octopus.png"}]')}},[[13,1,2]]]);
//# sourceMappingURL=main.4ec4d169.chunk.js.map