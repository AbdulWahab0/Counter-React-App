(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),s=(n(14),n(8)),u=n(7),l=n(1),i=n(2),m=n(4),b=n(3),h=(n(15),function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand"},"Navbar"," ",r.a.createElement("span",{className:"badge badge-pill badge-secondary"},"Total Count : ",this.props.totalCounters)))}}]),n}(a.Component)),v=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onIncrement,n=e.counter,a=e.onDelete;return r.a.createElement("div",null,r.a.createElement("spam",{className:this.getBadgeClasses()},this.formatCount()),r.a.createElement("button",{onClick:function(){return t(n)},className:"btn btn-secondary btn-sm"},"Increament"),r.a.createElement("button",{onClick:function(){return a(n.id)},className:"btn btn-danger btn-sm m-2"},"Delete"))}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),n}(a.Component),d=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onReset,n=e.counters,a=e.onDelete,o=e.onIncrement;return r.a.createElement("div",null,r.a.createElement("button",{onClick:t,className:"btn btn-primary btn-sm m-2"},"Reset"),n.map((function(e){return r.a.createElement(v,{key:e.id,onDelete:a,onIncrement:o,counter:e})})))}}]),n}(a.Component),p=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e.handleIncrement=function(t){var n=Object(u.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(s.a)({},t),n[a].value++,e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),r.a.createElement("main",{className:"container"},r.a.createElement(d,{counters:this.state.counters,onDelete:this.handleDelete,onIncrement:this.handleIncrement,onReset:this.handleReset})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.105addea.chunk.js.map