(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(2),o=r.n(c),i=(r(14),r(3)),l=r(4),s=r(5),u=r(7),m=r(6);function h(e){var t,r,n=e.match.homeTeam,c=e.match.awayTeam;n.name;var o=e.match.utcDate,i=new Date(o),l=i.getUTCFullYear()+"/"+(i.getUTCMonth()+1)+"/"+i.getUTCDate()+" "+i.getUTCHours()+":"+i.getUTCMinutes()+":"+i.getUTCSeconds();return a.a.createElement("div",{className:"col-lg-12"},a.a.createElement("div",{className:"card shadow rounded-pill mt-5",style:{overflow:"hidden"}},a.a.createElement("div",{className:"card-body p-0"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-3 bg-primary d-flex flex-direction-column justify-content-center align-items-center",style:{borderRight:"solid 5px #5b0d25"}},a.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{textAlign:"center",margin:"auto 0"}},a.a.createElement("div",null,a.a.createElement("div",{className:"flag"},a.a.createElement("img",{className:"rounded-circle border border-2",src:n.crest,alt:"",style:{width:"40px",height:"40px",objectFit:"contain"}})),a.a.createElement("h5",{title:n.name,style:{margin:"auto 4px"}},null===n.tla?"TBD":n.tla)))),a.a.createElement("div",{className:"col-lg-6",style:{textAlign:"center"}},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-4",style:{margin:"auto 0px"}},a.a.createElement("h3",null,null!==(t=e.match.score.fullTime.home)&&void 0!==t?t:"-")),a.a.createElement("div",{className:"col-lg-4"},a.a.createElement("i",null,function(e){switch(e){case"FINISHED":return"\u0627\u0646\u062a\u0647\u062a";case"TIMED":return"\u0645\u0628\u0631\u0645\u062c\u0629";case"IN_PLAY":return"\u062a\u0644\u0639\u0628 \u0627\u0644\u0622\u0646"}}(e.match.status)),a.a.createElement("h6",null,l)),a.a.createElement("div",{className:"col-lg-4",style:{margin:"auto 0px"}},a.a.createElement("h3",null,null!==(r=e.match.score.fullTime.away)&&void 0!==r?r:"-")))),a.a.createElement("div",{className:"col-lg-3 bg-primary d-flex flex-direction-column justify-content-center align-items-center",style:{borderLeft:"solid 5px #5b0d25"}},a.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{textAlign:"center",margin:"auto 0"}},a.a.createElement("div",null,a.a.createElement("div",{className:"flag"},a.a.createElement("img",{className:"rounded-circle border border-2",src:c.crest,alt:"",style:{width:"40px",height:"40px",objectFit:"contain"}})),a.a.createElement("h5",{title:c.name,style:{margin:"auto 4px"}},null===c.tla?"TBD":c.tla))))))))}function d(e){return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-3"}),a.a.createElement("div",{className:"col-lg-6"},a.a.createElement("div",{className:"card shadow border-none"},a.a.createElement("div",{className:"card-header bg-primary",style:{textAlign:"center"}},a.a.createElement("b",null,e.standing.group)),a.a.createElement("div",{className:"row m-0 bg-secondary"},a.a.createElement("div",{className:"col-lg-4",style:{textAlign:"center"}},"team"),a.a.createElement("div",{className:"col-lg-2"},"W"),a.a.createElement("div",{className:"col-lg-2"},"L"),a.a.createElement("div",{className:"col-lg-2"},"D"),a.a.createElement("div",{className:"col-lg-2"},"Pts")),a.a.createElement("ul",{className:"list-group list-group-flush"},e.standing.table.map(function(e,t){return a.a.createElement("li",{key:"standing"+t,className:"list-group-item"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-4 d-flex align-items-center justify-content-center",style:{textAlign:"center"}},a.a.createElement("span",{className:"flag"},a.a.createElement("img",{className:"rounded-circle border border-2",src:e.team.crest,alt:"",style:{width:"40px",height:"40px"}})),a.a.createElement("h5",{style:{margin:"auto 4px"}},e.team.tla)),a.a.createElement("div",{className:"col-lg-2"},e.won),a.a.createElement("div",{className:"col-lg-2"},e.lost),a.a.createElement("div",{className:"col-lg-2"},e.draw),a.a.createElement("div",{className:"col-lg-2"},a.a.createElement("b",null,e.points))))})))),a.a.createElement("div",{className:"col-lg-3"}))}function f(){f=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(O){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var c=t&&t.prototype instanceof h?t:h,o=Object.create(c.prototype),i=new k(a||[]);return n(o,"_invoke",{value:b(e,r,i)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=s;var m={};function h(){}function d(){}function g(){}var p={};l(p,c,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(T([])));y&&y!==t&&r.call(y,c)&&(p=y);var E=g.prototype=h.prototype=Object.create(p);function w(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var a;n(this,"_invoke",{value:function(n,c){function o(){return new t(function(a,o){!function n(a,c,o,i){var l=u(e[a],e,c);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){n("next",e,o,i)},function(e){n("throw",e,o,i)}):t.resolve(m).then(function(e){s.value=e,o(s)},function(e){return n("throw",e,o,i)})}i(l.arg)}(n,c,a,o)})}return a=a?a.then(o,o):o()}})}function b(e,t,r){var n="suspendedStart";return function(a,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw c;return _()}for(r.method=a,r.arg=c;;){var o=r.delegate;if(o){var i=N(o,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function N(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var c=a.arg;return c?c.done?(t[e.resultName]=c.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):c:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function T(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=g,n(E,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:d,configurable:!0}),d.displayName=l(g,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},w(x.prototype),l(x.prototype,o,function(){return this}),e.AsyncIterator=x,e.async=function(t,r,n,a,c){void 0===c&&(c=Promise);var o=new x(s(t,r,n,a),c);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},w(E),l(E,i,"Generator"),l(E,c,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=T,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],o=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var i=r.call(c,"catchLoc"),l=r.call(c,"finallyLoc");if(i&&l){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}function g(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{id:"logo-header"},a.a.createElement("img",{id:"logo-img",src:"logo.png",alt:"",style:{height:"300px"}})),a.a.createElement("div",{id:"header",style:{height:"20rem"},className:"bg-primary"},a.a.createElement("div",{id:"header-background",style:{height:"100%",width:"100%"}},a.a.createElement("div",{style:{direction:"rtl",fontSize:"50px",marginRight:"100px"},className:"p-5"},a.a.createElement("h1",{style:{fontWeight:800,fontSize:"70px"}},"\u0643\u0623\u0633"),a.a.createElement("h1",{style:{fontWeight:800,fontSize:"90px"}},"\u0627\u0644\u0639\u0627\u0644\u0645")))),a.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:"30px"}},a.a.createElement("img",{src:"qatar-word.png",alt:"",style:{width:"400px",margin:"0px auto"}})))}var p=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={standings:[],matches:[]},e.componentDidMount=Object(i.a)(f().mark(function t(){var r,n;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.fetch("/api/matches").then(function(e){return e.json()});case 2:return r=t.sent,t.next=5,window.fetch("/api/standings").then(function(e){return e.json()});case 5:n=t.sent,e.setState({standings:n,matches:r});case 7:case"end":return t.stop()}},t)})),e}return Object(s.a)(r,[{key:"render",value:function(){var e=this,t=[];if(0!==this.state.matches.length){var r=(t=this.state.matches.matches.reduce(function(e,t){var r=e.filter(function(e){return e.stage===t.stage});if(0===r.length){var n={stage:t.stage,matches:[t]};e.push(n)}else r[0].matches.push(t);return e},[]))[0].matches.reduce(function(t,r){var n=t.filter(function(e){return e.group===r.group});if(0===n.length){var a={group:r.group,matches:[r],standing:e.state.standings.standings.filter(function(e){return e.group===r.group})};t.push(a)}else n[0].matches.push(r);return t},[]);t[0].groupMatches=r}return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{title:""}),a.a.createElement("section",{className:"container"},t.map(function(e){return a.a.createElement("div",{className:"ac",key:e.stage},a.a.createElement("label",{className:"ac-label",htmlFor:e.stage,style:{direction:"rtl",paddingRight:50}},function(e){switch(e){case"GROUP_STAGE":return"\u062f\u0648\u0631 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a";case"LAST_16":return"\u062f\u0648\u0631 \u0627\u0644\u064016";case"QUARTER_FINALS":return"\u0631\u0628\u0639 \u0627\u0644\u0646\u0647\u0627\u0626\u064a";case"SEMI_FINALS":return"\u0646\u0635\u0641 \u0627\u0644\u0646\u0647\u0627\u0626\u064a";case"THIRD_PLACE":return"\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u062b\u0627\u0644\u062b";case"FINAL":return"\u0627\u0644\u0646\u0647\u0627\u0626\u064a"}}(e.stage)),a.a.createElement("input",{className:"ac-input",id:e.stage,name:e.stage,type:"checkbox"}),a.a.createElement("article",{className:"ac-text"},e.groupMatches?e.groupMatches.map(function(e){return a.a.createElement("div",{className:"ac-sub",key:e.group},a.a.createElement("label",{className:"ac-label",htmlFor:e.group,style:{direction:"rtl"}},e.group.replace("GROUP_","\u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0629 ")),a.a.createElement("input",{className:"ac-input",id:e.group,name:e.group,type:"checkbox"}),a.a.createElement("article",{className:"ac-sub-text"},e.matches.map(function(e,t){return a.a.createElement(h,{key:"match"+t,match:e})}),e.standing.map(function(e,t){return a.a.createElement(d,{key:"standingtable"+t,standing:e})})))}):e.matches.map(function(e,t){return a.a.createElement(h,{key:"match"+t,match:e})})))})),a.a.createElement("div",{style:{height:300}}))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,r){e.exports=r(9)},9:function(e,t,r){e.exports=r(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.50d9b321.chunk.js.map