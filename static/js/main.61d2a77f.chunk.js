(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/initialIcon.a085693a.png"},,,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),l=t.n(c),i=(t(14),t(4)),s=t(5),o=t(8),m=t(7),u=(t(15),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("nav",{className:"headerNav"},r.a.createElement("a",{className:"link",href:"https://iguan19.github.io/weather-app/",title:"Home"},"Weather APP")))}),d=(t(16),function(e){var a=e.handleChange;return r.a.createElement("div",{className:"inputField"},r.a.createElement("input",{className:"input",type:"search",placeholder:"Enter City",onChange:a,value:a.value}))}),h=(t(17),function(e){return r.a.createElement("div",null,r.a.createElement("button",{className:"button",name:"searchSubmit",type:"submit",position:"onForm",onClick:e.handleClick},"Set"))}),p=(t(18),function(e){return r.a.createElement("div",{className:"searchbox"},r.a.createElement(d,{handleChange:e.onChangeHandler,value:e.onChangeHandler.value}),r.a.createElement(h,{handleClick:e.onClickHandler}))}),E=(t(19),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("nav",{className:"footerNav"},r.a.createElement("a",{className:"link",href:"https://github.com/Iguan19",title:"GitHub"},"Created by Francisco Egea")))}),v=t(1),f=t.n(v),w=(t(20),new Date),g=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(e.data.icon,"@2x.png"),className:"image",title:"weather icon",alt:"Icon not available"})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{className:"city"},e.city)),r.a.createElement("div",null,r.a.createElement("span",{className:"temperature"},Math.round(e.data.temperature)," \xb0C")),r.a.createElement("div",null,r.a.createElement("span",{className:"description"},e.data.description)),r.a.createElement("br",null),r.a.createElement("div",{className:"date"},f()(w,"dddd, mmmm dS, yyyy, h:MM:ss TT"))))},N=function(e){return r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},"404"),r.a.createElement("div",{className:""},r.a.createElement("h2",{className:""},"Oops!"),r.a.createElement("p",{className:""},"We can't find the city you are looking for")))},y=t(6),b=t.n(y),C=(t(21),new Date),k=function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement("img",{src:b.a,className:"image",title:"weather icon",alt:"weather icon"})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{className:"city"},"City")),r.a.createElement("div",null,r.a.createElement("span",{className:"temperature"},"Temperature \xb0C")),r.a.createElement("div",null,r.a.createElement("span",{className:"description"},"Description available when a city is set")),r.a.createElement("br",null),r.a.createElement("div",{className:"date"},f()(C,"dddd, mmmm dS, yyyy, h:MM:ss TT"))))},H=(t(22),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).searchBarHandler=function(a){e.setState({searchBarInput:a.target.value})},e.tryAgainHandler=function(){e.setState({searchBarInput:"",weatherDetails:{temperature:"",description:"??",icon:""},error:!1})},e.onSubmit=function(){e.setState({weatherDetails:{},error:!1}),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.searchBarInput,"&appid=").concat("3e0a1ade01bf9f4d59e46fa9515ee8d2","&units=metric")).then((function(e){return e.json()})).then((function(a){if(200===a.cod)return e.setState({weatherDetails:{temperature:a.main.temp,description:a.weather[0].main,icon:a.weather[0].icon}});throw a.cod})).catch((function(a){console.log(a),e.setState({error:!0})}))},e.state={searchBarInput:"",weatherDetails:{temperature:"",description:"??",icon:""},error:!1},e}return Object(s.a)(t,[{key:"render",value:function(){var e=r.a.createElement(k,null);return this.state.error?e=r.a.createElement(N,{onClickHandler:this.tryAgainHandler}):this.state.weatherDetails.temperature&&""!==this.state.weatherDetails.description&&(e=r.a.createElement(g,{data:this.state.weatherDetails,city:this.state.searchBarInput})),r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(p,{onChangeHandler:this.searchBarHandler,onClickHandler:this.onSubmit}),e,r.a.createElement(E,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(23);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.61d2a77f.chunk.js.map