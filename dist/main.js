!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["zap-app-utils"]=t(require("react")):e["zap-app-utils"]=t(e.react)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(t,n){t.exports=e},function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return r});const r=()=>new Promise(t=>e(t))}).call(this,n(3).setImmediate)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function u(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new u(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new u(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},u.prototype.unref=u.prototype.ref=function(){},u.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(4),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(2))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,u,i,c,s=1,a={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){p(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((u=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){u.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(p,0,e)}:(i="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(i)&&p(+t.data.slice(i.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),r=function(t){e.postMessage(i+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return a[s]=o,r(s),s++},d.clearImmediate=m}function m(e){delete a[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=a[e];if(t){l=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{m(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(2),n(5))},function(e,t){var n,r,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:u}catch(e){n=u}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,a=[],l=!1,f=-1;function d(){l&&s&&(l=!1,s.length?a=s.concat(a):f=-1,a.length&&m())}function m(){if(!l){var e=c(d);l=!0;for(var t=a.length;t;){for(s=a,a=[];++f<t;)s&&s[f].run();f=-1,t=a.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||l||c(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function u(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var i,c,s,a=function(e,t){var n;void 0===t&&(t=u);var r,o=[],i=!1;return function(){for(var u=arguments.length,c=new Array(u),s=0;s<u;s++)c[s]=arguments[s];return i&&n===this&&t(c,o)?r:(r=e.apply(this,c),i=!0,n=this,o=c,r)}};!function(e){e.dealCard="deal_card",e.leadCard="lead_card",e.personCard="person_card",e.companyCard="company_card",e.modal="modal"}(i||(i={})),function(e){e.success="success",e.error="error",e.loading="loading"}(c||(c={})),function(e){e.accountTimezone="account",e.formatDate="formatDate",e.formatDateAndTime="formatDateAndTime",e.formatCurrency="formatCurrency"}(s||(s={}));const l=e=>{const{feedback:t}=e;return!t||t.status===c.loading},f=e=>{const{feedback:t}=e;return!!t&&t.status===c.error},d=e=>{const{data:t}=e;return[null,void 0].includes(t)||"object"==typeof t&&0===Object.keys(t).length};const m=a(e=>e.map(e=>e.data));function p({children:e,response:t,responses:n,loadingView:o=null,emptyView:u=null,errorView:i=null,isEmpty:c,isLoading:s,hasError:a}){const p=Object(r.useMemo)(()=>{return(t?[t]:n)||[]},[t,n]),h=function(e){return(t,n)=>{const r=n||t;return e.find(r)}}(p),y=h(f,a);return y?"function"==typeof i?i(y.error):i:h(l,s)?o:h(d,c)?u:e(m(p))}const h=o.a.createContext(void 0),y=()=>Object(r.useContext)(h),v=h.Provider,b=e=>{const t=Object(r.useContext)(h);if(!t)throw new Error("You forgot to use ZAFClientContext");Object(r.useEffect)(()=>{t.invoke("resize",{height:e})},[e])};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}function O(e,t,n,r){return new(n||(n=Promise))(function(o,u){function i(e){try{s(r.next(e))}catch(e){u(e)}}function c(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,c)}s((r=r.apply(e,t||[])).next())})}var j=()=>{const[e,t]=Object(r.useState)(0);return{counter:e,increment:Object(r.useCallback)(()=>t(e=>e+1),[])}};function w(e,t=[],n={skip:!1}){const o=Object(r.useContext)(h),[u,i]=Object(r.useState)(null),[s,a]=Object(r.useState)(null),[l,f]=Object(r.useState)(null),{counter:d,increment:m}=j(),p=()=>O(this,void 0,void 0,function*(){f({status:c.loading});try{if(!o)throw new Error("You forgot to use ZAFClientContext");const t=yield o.get(e);i(t[e]),f({status:c.success}),t.errors&&Object.keys(t.errors).length>0&&(a(t.errors),f({status:c.error}))}catch(e){a(e),f({status:c.error})}});return Object(r.useEffect)(()=>{n.skip||p()},[e,d,...t]),{data:u,error:s,feedback:l,refetch:m}}var C=w;const T={};function k(e,t={skip:!1},n,o){const u=Object(r.useContext)(h),[i,s]=Object(r.useState)(null),[a,l]=Object(r.useState)(null),[f,d]=Object(r.useState)(null),{counter:m,increment:p}=j(),y=()=>O(this,void 0,void 0,function*(){l({status:c.loading});try{if(!u)throw new Error("You forgot to use ZAFClientContext");if(n&&n.some(e=>!e))return;let r;const{transformResponse:a,skip:f}=t,m=g(t,["transformResponse","skip"]);o&&T[o]?r=T[o]:(r=u.request(Object.assign({url:e},m)),o&&(T[o]=r));const p=yield r;s(a?a(p,i):p),l({status:c.success})}catch(e){o&&delete T[o],s(null),d(e),l({status:c.error})}}),v=n||[];return Object(r.useEffect)(()=>{t.skip||y()},[e,m,o,...v]),{data:i,feedback:a,error:f,refetch:p}}var x=k;const S={};function E(e,t={skip:!1},n,o){const u=y(),[i,s]=Object(r.useState)(null),[a,l]=Object(r.useState)(null),[f,d]=Object(r.useState)(null);return{performRequest:()=>O(this,void 0,void 0,function*(){l({status:c.loading});try{if(!u)throw new Error("You forgot to use ZAFClientContext");if(n&&n.some(e=>!e))return;let r;const{transformResponse:a,skip:f}=t,m=g(t,["transformResponse","skip"]);o&&S[o]?r=S[o]:(r=u.request(Object.assign({url:e},m)),o&&(S[o]=r));const p=yield r;s(a?a(p,i):p),l({status:c.success})}catch(e){o&&delete S[o],s(null),d(e),l({status:c.error})}}),data:i,feedback:a,error:f}}function _(e,t={skip:!1},n,r){return x(e,Object.assign({secure:!0,dataType:"json",contentType:"application/json",headers:{authorization:"Bearer {{setting.access_token}}"}},t),n,r)}const A=e=>O(void 0,void 0,void 0,function*(){return yield e.context()});const F={[i.personCard]:"contact.email",[i.companyCard]:"contact.email",[i.leadCard]:"lead.email",[i.dealCard]:"deal.contact.email"},I=(e,t)=>O(void 0,void 0,void 0,function*(){const n=F[t],r=yield e.get(n);if(r.errors&&Object.keys(r.errors).length>0)throw new Error(JSON.stringify(r.errors));return r[n]});function D(){const e=Object(r.useContext)(h),[t,n]=Object(r.useState)(null),[o,u]=Object(r.useState)(null),[i,s]=Object(r.useState)(null),a=()=>O(this,void 0,void 0,function*(){if(!e)throw new Error("You forgot to use ZAFClientContext");s({status:c.loading});try{const{location:t}=yield A(e),r=yield I(e,t);n(r),s({status:c.success}),e.on(`${F[t]}.changed`,e=>{n(e.newValue)})}catch(e){u(e),s({status:c.error})}});return Object(r.useEffect)(()=>{a()},[]),{data:t,error:o,feedback:i}}var P=function(e,...t){const[n,o]=Object(r.useState)(null),[u,i]=Object(r.useState)(null),[s,a]=Object(r.useState)(null),l=Object(r.useContext)(h),f=()=>O(this,void 0,void 0,function*(){a({status:c.loading});try{if(!l)throw new Error("You forgot to use ZAFClientContext");const n=yield l.invoke(e,...t);o(n[e]),a({status:c.success}),n.errors&&Object.keys(n.errors).length>0&&(i(n.errors),a({status:c.error}))}catch(e){i(e),a({status:c.error})}});return Object(r.useEffect)(()=>{f()},[]),{data:n,error:u,feedback:s}};function L(e,t){return P(s.formatCurrency,e,t)}const M=(e,t)=>{const{data:n,error:r}=L(e,t);return r?t?`${t} ${e}`:`${e}`:n||""};function R(e){return P(s.formatDate,e,s.accountTimezone)}const Z=e=>{const{data:t,error:n}=R(e);let r=t;return n&&(r=(e=>e.toLocaleDateString())(e instanceof Date?e:new Date(e))),r||""};function q(e){return P(s.formatDateAndTime,e,s.accountTimezone)}const $=e=>{const{data:t,error:n}=q(e);let r=t;return n&&(r=(e=>`${e.toLocaleDateString()} ${e.toLocaleTimeString()}`)(e instanceof Date?e:new Date(e))),r||""};function z(e){return P(s.formatDate,e)}function Y(e){return P(s.formatDateAndTime,e)}const U=Object(r.createContext)({}),V=({children:e})=>{let{data:t}=C("currentUser");return console.log("userProvider",t),t||(t={}),o.a.createElement(U.Provider,{value:t},e)},H=()=>(console.log("useCurrentUser",U),Object(r.useContext)(U)),B=Object(r.createContext)({}),G=({children:e})=>{let{data:t}=C("ticket");return t||(t={}),o.a.createElement(B.Provider,{value:t},e)},J=()=>Object(r.useContext)(B);var N=n(1);function W(e){return e.reduce((e,t)=>t?t.status===c.error?Object.assign({},t):(t.status!==c.loading||e.status&&e.status!==c.success)&&(t.status!==c.success||e.status)?e:Object.assign({},t):e)}n.d(t,"ResponseHandler",function(){return p}),n.d(t,"useClientHeight",function(){return b}),n.d(t,"useClientGet",function(){return w}),n.d(t,"useClientRequest",function(){return k}),n.d(t,"useCallbackClientRequest",function(){return E}),n.d(t,"useClientRequestWithAuth",function(){return _}),n.d(t,"useSellContactEmail",function(){return D}),n.d(t,"useFormattedCurrency",function(){return M}),n.d(t,"useFormattedDate",function(){return Z}),n.d(t,"useFormattedDateTime",function(){return $}),n.d(t,"useLocalDateFormat",function(){return z}),n.d(t,"useAccountDateFormat",function(){return R}),n.d(t,"useLocalDateTimeFormat",function(){return Y}),n.d(t,"useAccountDateTimeFormat",function(){return q}),n.d(t,"useCurrencyFormat",function(){return L}),n.d(t,"ZAFClientContextProvider",function(){return v}),n.d(t,"ZAFClientContext",function(){return h}),n.d(t,"useZAFClient",function(){return y}),n.d(t,"useCurrentUser",function(){return H}),n.d(t,"UserProvider",function(){return V}),n.d(t,"useTicketInfo",function(){return J}),n.d(t,"TicketProvider",function(){return G}),n.d(t,"flushPromises",function(){return N.a}),n.d(t,"mergeFeedbacks",function(){return W}),n.d(t,"getAppContextAsync",function(){return A}),n.d(t,"hasError",function(){return f}),n.d(t,"AppLocations",function(){return i}),n.d(t,"FeedbackStatus",function(){return c}),n.d(t,"ClientInvokeOptions",function(){return s}),n.d(t,"version",function(){return"0.0.5"})}])});