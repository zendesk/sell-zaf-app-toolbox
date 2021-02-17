!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["zap-app-utils"]=t(require("react")):e["zap-app-utils"]=t(e.react)}(window,function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(t,n){t.exports=e},function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return r});const r=()=>new Promise(t=>e(t))}).call(this,n(3).setImmediate)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(4),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(2))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,u,c,a=1,s={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){p(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(p,0,e)}:(u="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(u)&&p(+t.data.slice(u.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),r=function(t){e.postMessage(u+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[a]=o,r(a),a++},d.clearImmediate=m}function m(e){delete s[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=s[e];if(t){l=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{m(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(2),n(5))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,s=[],l=!1,f=-1;function d(){l&&a&&(l=!1,a.length?s=a.concat(s):f=-1,s.length&&m())}function m(){if(!l){var e=c(d);l=!0;for(var t=s.length;t;){for(a=s,s=[];++f<t;)a&&a[f].run();f=-1,t=s.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||l||c(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=n(0);function o(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}var i,u,c,a=function(e,t){var n;void 0===t&&(t=o);var r,i=[],u=!1;return function(){for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return u&&n===this&&t(c,i)?r:(r=e.apply(this,c),u=!0,n=this,i=c,r)}};!function(e){e.dealCard="deal_card",e.leadCard="lead_card",e.personCard="person_card",e.companyCard="company_card",e.modal="modal"}(i||(i={})),function(e){e.success="success",e.error="error",e.loading="loading"}(u||(u={})),function(e){e.accountTimezone="account",e.formatDate="formatDate",e.formatDateAndTime="formatDateAndTime",e.formatCurrency="formatCurrency"}(c||(c={}));const s=e=>{const{feedback:t}=e;return!t||t.status===u.loading},l=e=>{const{feedback:t}=e;return!!t&&t.status===u.error},f=e=>{const{data:t}=e;return[null,void 0].includes(t)||"object"==typeof t&&0===Object.keys(t).length};const d=a(e=>e.map(e=>e.data));function m({children:e,response:t,responses:n,loadingView:o=null,emptyView:i=null,errorView:u=null,isEmpty:c,isLoading:a,hasError:m}){const p=Object(r.useMemo)(()=>{return(t?[t]:n)||[]},[t,n]),h=function(e){return(t,n)=>{const r=n||t;return e.find(r)}}(p),y=h(l,m);return y?"function"==typeof u?u(y.error):u:h(s,a)?o:h(f,c)?i:e(d(p))}const p=r.createContext(void 0),h=p.Provider,y=e=>{const t=Object(r.useContext)(p);if(!t)throw new Error("You forgot to use ZAFClientContext");Object(r.useEffect)(()=>{t.invoke("resize",{height:e})},[e])};function g(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,c)}a((r=r.apply(e,t||[])).next())})}var v=()=>{const[e,t]=Object(r.useState)(0);return{counter:e,increment:Object(r.useCallback)(()=>t(e=>e+1),[])}};function b(e,t=[],n={skip:!1}){const o=Object(r.useContext)(p),[i,c]=Object(r.useState)(null),[a,s]=Object(r.useState)(null),[l,f]=Object(r.useState)(null),{counter:d,increment:m}=v(),h=()=>g(this,void 0,void 0,function*(){f({status:u.loading});try{if(!o)throw new Error("You forgot to use ZAFClientContext");const t=yield o.get(e);c(t[e]),f({status:u.success}),t.errors&&Object.keys(t.errors).length>0&&(s(t.errors),f({status:u.error}))}catch(e){s(e),f({status:u.error})}});return Object(r.useEffect)(()=>{n.skip||h()},[e,d,...t]),{data:i,error:a,feedback:l,refetch:m}}const O={};function w(e,t={skip:!1},n,o){const i=Object(r.useContext)(p),[c,a]=Object(r.useState)(null),[s,l]=Object(r.useState)(null),[f,d]=Object(r.useState)(null),{counter:m,increment:h}=v(),y=()=>g(this,void 0,void 0,function*(){l({status:u.loading});try{if(!i)throw new Error("You forgot to use ZAFClientContext");if(n&&n.some(e=>!e))return;let r;const{transformResponse:s,skip:f}=t,m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}(t,["transformResponse","skip"]);o&&O[o]?r=O[o]:(r=i.request(Object.assign({url:e},m)),o&&(O[o]=r));const p=yield r;a(s?s(p,c):p),l({status:u.success})}catch(e){o&&delete O[o],a(null),d(e),l({status:u.error})}}),b=n||[];return Object(r.useEffect)(()=>{t.skip||y()},[e,m,o,...b]),{data:c,feedback:s,error:f,refetch:h}}var j=w;function T(e,t={skip:!1},n,r){return j(e,Object.assign({secure:!0,dataType:"json",contentType:"application/json",headers:{authorization:"Bearer {{setting.access_token}}"}},t),n,r)}const C=e=>g(void 0,void 0,void 0,function*(){return yield e.context()});const x={[i.personCard]:"contact.email",[i.companyCard]:"contact.email",[i.leadCard]:"lead.email",[i.dealCard]:"deal.contact.email"},k=(e,t)=>g(void 0,void 0,void 0,function*(){const n=x[t],r=yield e.get(n);if(r.errors&&Object.keys(r.errors).length>0)throw new Error(JSON.stringify(r.errors));return r[n]});function S(){const e=Object(r.useContext)(p),[t,n]=Object(r.useState)(null),[o,i]=Object(r.useState)(null),[c,a]=Object(r.useState)(null),s=()=>g(this,void 0,void 0,function*(){if(!e)throw new Error("You forgot to use ZAFClientContext");a({status:u.loading});try{const{location:t}=yield C(e),r=yield k(e,t);n(r),a({status:u.success}),e.on(`${x[t]}.changed`,e=>{n(e.newValue)})}catch(e){i(e),a({status:u.error})}});return Object(r.useEffect)(()=>{s()},[]),{data:t,error:o,feedback:c}}var _=function(e,...t){const[n,o]=Object(r.useState)(null),[i,c]=Object(r.useState)(null),[a,s]=Object(r.useState)(null),l=Object(r.useContext)(p),f=()=>g(this,void 0,void 0,function*(){s({status:u.loading});try{if(!l)throw new Error("You forgot to use ZAFClientContext");const n=yield l.invoke(e,...t);o(n[e]),s({status:u.success}),n.errors&&Object.keys(n.errors).length>0&&(c(n.errors),s({status:u.error}))}catch(e){c(e),s({status:u.error})}});return Object(r.useEffect)(()=>{f()},[]),{data:n,error:i,feedback:a}};function E(e,t){return _(c.formatCurrency,e,t)}const A=(e,t)=>{const{data:n,error:r}=E(e,t);return r?t?`${t} ${e}`:`${e}`:n||""};function F(e){return _(c.formatDate,e,c.accountTimezone)}const I=e=>{const{data:t,error:n}=F(e);let r=t;return n&&(r=(e=>e.toLocaleDateString())(e instanceof Date?e:new Date(e))),r||""};function D(e){return _(c.formatDateAndTime,e,c.accountTimezone)}const P=e=>{const{data:t,error:n}=D(e);let r=t;return n&&(r=(e=>`${e.toLocaleDateString()} ${e.toLocaleTimeString()}`)(e instanceof Date?e:new Date(e))),r||""};function L(e){return _(c.formatDate,e)}function M(e){return _(c.formatDateAndTime,e)}var $=n(1);function z(e){return e.reduce((e,t)=>t?t.status===u.error?Object.assign({},t):(t.status!==u.loading||e.status&&e.status!==u.success)&&(t.status!==u.success||e.status)?e:Object.assign({},t):e)}n.d(t,"ResponseHandler",function(){return m}),n.d(t,"useClientHeight",function(){return y}),n.d(t,"useClientGet",function(){return b}),n.d(t,"useClientRequest",function(){return w}),n.d(t,"useClientRequestWithAuth",function(){return T}),n.d(t,"useSellContactEmail",function(){return S}),n.d(t,"useFormattedCurrency",function(){return A}),n.d(t,"useFormattedDate",function(){return I}),n.d(t,"useFormattedDateTime",function(){return P}),n.d(t,"useLocalDateFormat",function(){return L}),n.d(t,"useAccountDateFormat",function(){return F}),n.d(t,"useLocalDateTimeFormat",function(){return M}),n.d(t,"useAccountDateTimeFormat",function(){return D}),n.d(t,"useCurrencyFormat",function(){return E}),n.d(t,"ZAFClientContextProvider",function(){return h}),n.d(t,"ZAFClientContext",function(){return p}),n.d(t,"flushPromises",function(){return $.a}),n.d(t,"mergeFeedbacks",function(){return z}),n.d(t,"getAppContextAsync",function(){return C}),n.d(t,"AppLocations",function(){return i}),n.d(t,"FeedbackStatus",function(){return u}),n.d(t,"ClientInvokeOptions",function(){return c}),n.d(t,"version",function(){return"0.0.5"})}])});