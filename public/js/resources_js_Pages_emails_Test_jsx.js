(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_emails_Test_jsx"],{

/***/ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,e){ true?module.exports=e(__webpack_require__(/*! react */ "./node_modules/react/index.js")):0}(self,(t=>(()=>{var e={703:(t,e,r)=>{"use strict";var o=r(414);function n(){}function i(){}i.resetWarningCache=n,t.exports=function(){function t(t,e,r,n,i,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},697:(t,e,r)=>{t.exports=r(703)()},414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:e=>{"use strict";e.exports=t}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{"use strict";o.r(n),o.d(n,{CKEditor:()=>to,CKEditorContext:()=>Xr});var t=o(787),e=o.n(t),r=o(697),i=o.n(r);const s=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};const a="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g;var c="object"==typeof self&&self&&self.Object===Object&&self;const u=a||c||Function("return this")();const h=function(){return u.Date.now()};var d=/\s/;const l=function(t){for(var e=t.length;e--&&d.test(t.charAt(e)););return e};var p=/^\s+/;const f=function(t){return t?t.slice(0,l(t)+1).replace(p,""):t};const _=u.Symbol;var y=Object.prototype,g=y.hasOwnProperty,b=y.toString,v=_?_.toStringTag:void 0;const m=function(t){var e=g.call(t,v),r=t[v];try{t[v]=void 0;var o=!0}catch(t){}var n=b.call(t);return o&&(e?t[v]=r:delete t[v]),n};var j=Object.prototype.toString;const w=function(t){return j.call(t)};var x=_?_.toStringTag:void 0;const E=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":x&&x in Object(t)?m(t):w(t)};const O=function(t){return null!=t&&"object"==typeof t};const C=function(t){return"symbol"==typeof t||O(t)&&"[object Symbol]"==E(t)};var P=/^[-+]0x[0-9a-f]+$/i,A=/^0b[01]+$/i,T=/^0o[0-7]+$/i,S=parseInt;const R=function(t){if("number"==typeof t)return t;if(C(t))return NaN;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=f(t);var r=A.test(t);return r||T.test(t)?S(t.slice(2),r?2:8):P.test(t)?NaN:+t};var W=Math.max,I=Math.min;const D=function(t,e,r){var o,n,i,a,c,u,d=0,l=!1,p=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function _(e){var r=o,i=n;return o=n=void 0,d=e,a=t.apply(i,r)}function y(t){return d=t,c=setTimeout(b,e),l?_(t):a}function g(t){var r=t-u;return void 0===u||r>=e||r<0||p&&t-d>=i}function b(){var t=h();if(g(t))return v(t);c=setTimeout(b,function(t){var r=e-(t-u);return p?I(r,i-(t-d)):r}(t))}function v(t){return c=void 0,f&&o?_(t):(o=n=void 0,a)}function m(){var t=h(),r=g(t);if(o=arguments,n=this,u=t,r){if(void 0===c)return y(u);if(p)return clearTimeout(c),c=setTimeout(b,e),_(u)}return void 0===c&&(c=setTimeout(b,e)),a}return e=R(e)||0,s(r)&&(l=!!r.leading,i=(p="maxWait"in r)?W(R(r.maxWait)||0,e):i,f="trailing"in r?!!r.trailing:f),m.cancel=function(){void 0!==c&&clearTimeout(c),d=0,o=u=n=c=void 0},m.flush=function(){return void 0===c?a:v(h())},m};const z=function(t,e,r){var o=!0,n=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return s(r)&&(o="leading"in r?!!r.leading:o,n="trailing"in r?!!r.trailing:n),D(t,e,{leading:o,maxWait:e,trailing:n})};const M=function(){this.__data__=[],this.size=0};const N=function(t,e){return t===e||t!=t&&e!=e};const U=function(t,e){for(var r=t.length;r--;)if(N(t[r][0],e))return r;return-1};var F=Array.prototype.splice;const q=function(t){var e=this.__data__,r=U(e,t);return!(r<0)&&(r==e.length-1?e.pop():F.call(e,r,1),--this.size,!0)};const k=function(t){var e=this.__data__,r=U(e,t);return r<0?void 0:e[r][1]};const L=function(t){return U(this.__data__,t)>-1};const B=function(t,e){var r=this.__data__,o=U(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};function $(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}$.prototype.clear=M,$.prototype.delete=q,$.prototype.get=k,$.prototype.has=L,$.prototype.set=B;const H=$;const V=function(){this.__data__=new H,this.size=0};const K=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};const Q=function(t){return this.__data__.get(t)};const G=function(t){return this.__data__.has(t)};const Y=function(t){if(!s(t))return!1;var e=E(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};const J=u["__core-js_shared__"];var X=function(){var t=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const Z=function(t){return!!X&&X in t};var tt=Function.prototype.toString;const et=function(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var rt=/^\[object .+?Constructor\]$/,ot=Function.prototype,nt=Object.prototype,it=ot.toString,st=nt.hasOwnProperty,at=RegExp("^"+it.call(st).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const ct=function(t){return!(!s(t)||Z(t))&&(Y(t)?at:rt).test(et(t))};const ut=function(t,e){return null==t?void 0:t[e]};const ht=function(t,e){var r=ut(t,e);return ct(r)?r:void 0};const dt=ht(u,"Map");const lt=ht(Object,"create");const pt=function(){this.__data__=lt?lt(null):{},this.size=0};const ft=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var _t=Object.prototype.hasOwnProperty;const yt=function(t){var e=this.__data__;if(lt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return _t.call(e,t)?e[t]:void 0};var gt=Object.prototype.hasOwnProperty;const bt=function(t){var e=this.__data__;return lt?void 0!==e[t]:gt.call(e,t)};const vt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=lt&&void 0===e?"__lodash_hash_undefined__":e,this};function mt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}mt.prototype.clear=pt,mt.prototype.delete=ft,mt.prototype.get=yt,mt.prototype.has=bt,mt.prototype.set=vt;const jt=mt;const wt=function(){this.size=0,this.__data__={hash:new jt,map:new(dt||H),string:new jt}};const xt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const Et=function(t,e){var r=t.__data__;return xt(e)?r["string"==typeof e?"string":"hash"]:r.map};const Ot=function(t){var e=Et(this,t).delete(t);return this.size-=e?1:0,e};const Ct=function(t){return Et(this,t).get(t)};const Pt=function(t){return Et(this,t).has(t)};const At=function(t,e){var r=Et(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this};function Tt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}Tt.prototype.clear=wt,Tt.prototype.delete=Ot,Tt.prototype.get=Ct,Tt.prototype.has=Pt,Tt.prototype.set=At;const St=Tt;const Rt=function(t,e){var r=this.__data__;if(r instanceof H){var o=r.__data__;if(!dt||o.length<199)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new St(o)}return r.set(t,e),this.size=r.size,this};function Wt(t){var e=this.__data__=new H(t);this.size=e.size}Wt.prototype.clear=V,Wt.prototype.delete=K,Wt.prototype.get=Q,Wt.prototype.has=G,Wt.prototype.set=Rt;const It=Wt;const Dt=function(t,e){for(var r=-1,o=null==t?0:t.length;++r<o&&!1!==e(t[r],r,t););return t};const zt=function(){try{var t=ht(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();const Mt=function(t,e,r){"__proto__"==e&&zt?zt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r};var Nt=Object.prototype.hasOwnProperty;const Ut=function(t,e,r){var o=t[e];Nt.call(t,e)&&N(o,r)&&(void 0!==r||e in t)||Mt(t,e,r)};const Ft=function(t,e,r,o){var n=!r;r||(r={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=o?o(r[a],t[a],a,r,t):void 0;void 0===c&&(c=t[a]),n?Mt(r,a,c):Ut(r,a,c)}return r};const qt=function(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o};const kt=function(t){return O(t)&&"[object Arguments]"==E(t)};var Lt=Object.prototype,Bt=Lt.hasOwnProperty,$t=Lt.propertyIsEnumerable;const Ht=kt(function(){return arguments}())?kt:function(t){return O(t)&&Bt.call(t,"callee")&&!$t.call(t,"callee")};const Vt=Array.isArray;const Kt=function(){return!1};var Qt= true&&exports&&!exports.nodeType&&exports,Gt=Qt&&"object"=="object"&&module&&!module.nodeType&&module,Yt=Gt&&Gt.exports===Qt?u.Buffer:void 0;const Jt=(Yt?Yt.isBuffer:void 0)||Kt;var Xt=/^(?:0|[1-9]\d*)$/;const Zt=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Xt.test(t))&&t>-1&&t%1==0&&t<e};const te=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var ee={};ee["[object Float32Array]"]=ee["[object Float64Array]"]=ee["[object Int8Array]"]=ee["[object Int16Array]"]=ee["[object Int32Array]"]=ee["[object Uint8Array]"]=ee["[object Uint8ClampedArray]"]=ee["[object Uint16Array]"]=ee["[object Uint32Array]"]=!0,ee["[object Arguments]"]=ee["[object Array]"]=ee["[object ArrayBuffer]"]=ee["[object Boolean]"]=ee["[object DataView]"]=ee["[object Date]"]=ee["[object Error]"]=ee["[object Function]"]=ee["[object Map]"]=ee["[object Number]"]=ee["[object Object]"]=ee["[object RegExp]"]=ee["[object Set]"]=ee["[object String]"]=ee["[object WeakMap]"]=!1;const re=function(t){return O(t)&&te(t.length)&&!!ee[E(t)]};const oe=function(t){return function(e){return t(e)}};var ne= true&&exports&&!exports.nodeType&&exports,ie=ne&&"object"=="object"&&module&&!module.nodeType&&module,se=ie&&ie.exports===ne&&a.process;const ae=function(){try{var t=ie&&ie.require&&ie.require("util").types;return t||se&&se.binding&&se.binding("util")}catch(t){}}();var ce=ae&&ae.isTypedArray;const ue=ce?oe(ce):re;var he=Object.prototype.hasOwnProperty;const de=function(t,e){var r=Vt(t),o=!r&&Ht(t),n=!r&&!o&&Jt(t),i=!r&&!o&&!n&&ue(t),s=r||o||n||i,a=s?qt(t.length,String):[],c=a.length;for(var u in t)!e&&!he.call(t,u)||s&&("length"==u||n&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||Zt(u,c))||a.push(u);return a};var le=Object.prototype;const pe=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||le)};const fe=function(t,e){return function(r){return t(e(r))}};const _e=fe(Object.keys,Object);var ye=Object.prototype.hasOwnProperty;const ge=function(t){if(!pe(t))return _e(t);var e=[];for(var r in Object(t))ye.call(t,r)&&"constructor"!=r&&e.push(r);return e};const be=function(t){return null!=t&&te(t.length)&&!Y(t)};const ve=function(t){return be(t)?de(t):ge(t)};const me=function(t,e){return t&&Ft(e,ve(e),t)};const je=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e};var we=Object.prototype.hasOwnProperty;const xe=function(t){if(!s(t))return je(t);var e=pe(t),r=[];for(var o in t)("constructor"!=o||!e&&we.call(t,o))&&r.push(o);return r};const Ee=function(t){return be(t)?de(t,!0):xe(t)};const Oe=function(t,e){return t&&Ft(e,Ee(e),t)};var Ce= true&&exports&&!exports.nodeType&&exports,Pe=Ce&&"object"=="object"&&module&&!module.nodeType&&module,Ae=Pe&&Pe.exports===Ce?u.Buffer:void 0,Te=Ae?Ae.allocUnsafe:void 0;const Se=function(t,e){if(e)return t.slice();var r=t.length,o=Te?Te(r):new t.constructor(r);return t.copy(o),o};const Re=function(t,e){var r=-1,o=t.length;for(e||(e=Array(o));++r<o;)e[r]=t[r];return e};const We=function(t,e){for(var r=-1,o=null==t?0:t.length,n=0,i=[];++r<o;){var s=t[r];e(s,r,t)&&(i[n++]=s)}return i};const Ie=function(){return[]};var De=Object.prototype.propertyIsEnumerable,ze=Object.getOwnPropertySymbols;const Me=ze?function(t){return null==t?[]:(t=Object(t),We(ze(t),(function(e){return De.call(t,e)})))}:Ie;const Ne=function(t,e){return Ft(t,Me(t),e)};const Ue=function(t,e){for(var r=-1,o=e.length,n=t.length;++r<o;)t[n+r]=e[r];return t};const Fe=fe(Object.getPrototypeOf,Object);const qe=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Ue(e,Me(t)),t=Fe(t);return e}:Ie;const ke=function(t,e){return Ft(t,qe(t),e)};const Le=function(t,e,r){var o=e(t);return Vt(t)?o:Ue(o,r(t))};const Be=function(t){return Le(t,ve,Me)};const $e=function(t){return Le(t,Ee,qe)};const He=ht(u,"DataView");const Ve=ht(u,"Promise");const Ke=ht(u,"Set");const Qe=ht(u,"WeakMap");var Ge="[object Map]",Ye="[object Promise]",Je="[object Set]",Xe="[object WeakMap]",Ze="[object DataView]",tr=et(He),er=et(dt),rr=et(Ve),or=et(Ke),nr=et(Qe),ir=E;(He&&ir(new He(new ArrayBuffer(1)))!=Ze||dt&&ir(new dt)!=Ge||Ve&&ir(Ve.resolve())!=Ye||Ke&&ir(new Ke)!=Je||Qe&&ir(new Qe)!=Xe)&&(ir=function(t){var e=E(t),r="[object Object]"==e?t.constructor:void 0,o=r?et(r):"";if(o)switch(o){case tr:return Ze;case er:return Ge;case rr:return Ye;case or:return Je;case nr:return Xe}return e});const sr=ir;var ar=Object.prototype.hasOwnProperty;const cr=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&ar.call(t,"index")&&(r.index=t.index,r.input=t.input),r};const ur=u.Uint8Array;const hr=function(t){var e=new t.constructor(t.byteLength);return new ur(e).set(new ur(t)),e};const dr=function(t,e){var r=e?hr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)};var lr=/\w*$/;const pr=function(t){var e=new t.constructor(t.source,lr.exec(t));return e.lastIndex=t.lastIndex,e};var fr=_?_.prototype:void 0,_r=fr?fr.valueOf:void 0;const yr=function(t){return _r?Object(_r.call(t)):{}};const gr=function(t,e){var r=e?hr(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};const br=function(t,e,r){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return hr(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return dr(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return gr(t,r);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return pr(t);case"[object Symbol]":return yr(t)}};var vr=Object.create;const mr=function(){function t(){}return function(e){if(!s(e))return{};if(vr)return vr(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const jr=function(t){return"function"!=typeof t.constructor||pe(t)?{}:mr(Fe(t))};const wr=function(t){return O(t)&&"[object Map]"==sr(t)};var xr=ae&&ae.isMap;const Er=xr?oe(xr):wr;const Or=function(t){return O(t)&&"[object Set]"==sr(t)};var Cr=ae&&ae.isSet;const Pr=Cr?oe(Cr):Or;var Ar="[object Arguments]",Tr="[object Function]",Sr="[object Object]",Rr={};Rr[Ar]=Rr["[object Array]"]=Rr["[object ArrayBuffer]"]=Rr["[object DataView]"]=Rr["[object Boolean]"]=Rr["[object Date]"]=Rr["[object Float32Array]"]=Rr["[object Float64Array]"]=Rr["[object Int8Array]"]=Rr["[object Int16Array]"]=Rr["[object Int32Array]"]=Rr["[object Map]"]=Rr["[object Number]"]=Rr["[object Object]"]=Rr["[object RegExp]"]=Rr["[object Set]"]=Rr["[object String]"]=Rr["[object Symbol]"]=Rr["[object Uint8Array]"]=Rr["[object Uint8ClampedArray]"]=Rr["[object Uint16Array]"]=Rr["[object Uint32Array]"]=!0,Rr["[object Error]"]=Rr[Tr]=Rr["[object WeakMap]"]=!1;const Wr=function t(e,r,o,n,i,a){var c,u=1&r,h=2&r,d=4&r;if(o&&(c=i?o(e,n,i,a):o(e)),void 0!==c)return c;if(!s(e))return e;var l=Vt(e);if(l){if(c=cr(e),!u)return Re(e,c)}else{var p=sr(e),f=p==Tr||"[object GeneratorFunction]"==p;if(Jt(e))return Se(e,u);if(p==Sr||p==Ar||f&&!i){if(c=h||f?{}:jr(e),!u)return h?ke(e,Oe(c,e)):Ne(e,me(c,e))}else{if(!Rr[p])return i?e:{};c=br(e,p,u)}}a||(a=new It);var _=a.get(e);if(_)return _;a.set(e,c),Pr(e)?e.forEach((function(n){c.add(t(n,r,o,n,e,a))})):Er(e)&&e.forEach((function(n,i){c.set(i,t(n,r,o,i,e,a))}));var y=l?void 0:(d?h?$e:Be:h?Ee:ve)(e);return Dt(y||e,(function(n,i){y&&(n=e[i=n]),Ut(c,i,t(n,r,o,i,e,a))})),c};const Ir=function(t,e){return Wr(t,5,e="function"==typeof e?e:void 0)};var Dr=Function.prototype,zr=Object.prototype,Mr=Dr.toString,Nr=zr.hasOwnProperty,Ur=Mr.call(Object);const Fr=function(t){if(!O(t)||"[object Object]"!=E(t))return!1;var e=Fe(t);if(null===e)return!0;var r=Nr.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&Mr.call(r)==Ur};const qr=function(t){return O(t)&&1===t.nodeType&&!Fr(t)};function kr(t,e=new Set){const r=[t],o=new Set;let n=0;for(;r.length>n;){const t=r[n++];if(!(o.has(t)||Lr(t)||e.has(t)))if(o.add(t),t[Symbol.iterator])try{for(const e of t)r.push(e)}catch(t){}else for(const e in t)"defaultValue"!==e&&r.push(t[e])}return o}function Lr(t){const e=Object.prototype.toString.call(t),r=typeof t;return"number"===r||"boolean"===r||"string"===r||"symbol"===r||"function"===r||"[object Date]"===e||"[object RegExp]"===e||"[object Module]"===e||null==t||t instanceof EventTarget||t instanceof Event}function Br(t,e,r=new Set){if(t===e&&("object"==typeof(o=t)&&null!==o))return!0;var o;const n=kr(t,r),i=kr(e,r);for(const t of n)if(i.has(t))return!0;return!1}class $r{constructor(t){if(this.crashes=[],this.state="initializing",this._crashNumberLimit="number"==typeof t.crashNumberLimit?t.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod="number"==typeof t.minimumNonErrorTimePeriod?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const e=t.error||t.reason;e instanceof Error&&this._handleError(e,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter((t=>t!==e))}_fire(t,...e){const r=this._listeners[t]||[];for(const t of r)t.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e.filename,lineno:e.lineno,colno:e.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&void 0!==t.context&&null!==t.context&&"ready"===this.state&&this._isErrorComingFromThisItem(t)}_shouldRestart(){if(this.crashes.length<=this._crashNumberLimit)return!0;return(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class Hr extends $r{constructor(t,e={}){super(e),this._editor=null,this._throttledSave=z(this._save.bind(this),"number"==typeof e.saveInterval?e.saveInterval:5e3),this._creator=(e,r)=>t.create(e,r),this._destructor=t=>t.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then((()=>(this.state="initializing",this._fire("stateChange"),this._destroy()))).catch((t=>{console.error("An error happened during the editor destroying.",t)})).then((()=>{if("string"==typeof this._elementOrData)return this.create(this._data,this._config,this._config.context);{const t=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,t,t.context)}})).then((()=>{this._fire("restart")}))}create(t=this._elementOrData,e=this._config,r){return Promise.resolve().then((()=>(super._startErrorHandling(),this._elementOrData=t,this._config=this._cloneEditorConfiguration(e)||{},this._config.context=r,this._creator(t,this._config)))).then((t=>{this._editor=t,t.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=t.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")}))}destroy(){return Promise.resolve().then((()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())))}_destroy(){return Promise.resolve().then((()=>{this._stopErrorHandling(),this._throttledSave.flush();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)}))}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=t}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t={};for(const e of this._editor.model.document.getRootNames())t[e]=this._editor.data.get({rootName:e});return t}_isErrorComingFromThisItem(t){return Br(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return Ir(t,((t,e)=>qr(t)||"context"===e?t:void 0))}}const Vr=new Array(256).fill().map(((t,e)=>("0"+e.toString(16)).slice(-2)));const Kr=Symbol("MainQueueId");class Qr extends $r{constructor(t,e={}){super(e),this._watchdogs=new Map,this._watchdogConfig=e,this._context=null,this._contextProps=new Set,this._actionQueues=new Gr,this._creator=e=>t.create(e),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty((()=>{"initializing"===this.state&&(this.state="ready",this._fire("stateChange"))}))}get context(){return this._context}create(t={}){return this._actionQueues.enqueue(Kr,(()=>(this._contextConfig=t,this._create())))}getItem(t){return this._getWatchdog(t)._item}getItemState(t){return this._getWatchdog(t).state}add(t){const e=Yr(t);return Promise.all(e.map((t=>this._actionQueues.enqueue(t.id,(()=>{if("destroyed"===this.state)throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let e;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if("editor"===t.type)return e=new Hr(this._watchdogConfig),e.setCreator(t.creator),e._setExcludedProperties(this._contextProps),t.destructor&&e.setDestructor(t.destructor),this._watchdogs.set(t.id,e),e.on("error",((r,{error:o,causesRestart:n})=>{this._fire("itemError",{itemId:t.id,error:o}),n&&this._actionQueues.enqueue(t.id,(()=>new Promise((r=>{e.on("restart",function o(){e.off("restart",o),this._fire("itemRestart",{itemId:t.id}),r()}.bind(this))}))))})),e.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))))}remove(t){const e=Yr(t);return Promise.all(e.map((t=>this._actionQueues.enqueue(t,(()=>{const e=this._getWatchdog(t);return this._watchdogs.delete(t),e.destroy()})))))}destroy(){return this._actionQueues.enqueue(Kr,(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())))}_restart(){return this._actionQueues.enqueue(Kr,(()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch((t=>{console.error("An error happened during destroying the context or items.",t)})).then((()=>this._create())).then((()=>this._fire("restart"))))))}_create(){return Promise.resolve().then((()=>(this._startErrorHandling(),this._creator(this._contextConfig)))).then((t=>(this._context=t,this._contextProps=kr(this._context),Promise.all(Array.from(this._watchdogs.values()).map((t=>(t._setExcludedProperties(this._contextProps),t.create(void 0,void 0,this._context))))))))}_destroy(){return Promise.resolve().then((()=>{this._stopErrorHandling();const t=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map((t=>t.destroy()))).then((()=>this._destructor(t)))}))}_getWatchdog(t){const e=this._watchdogs.get(t);if(!e)throw new Error(`Item with the given id was not registered: ${t}.`);return e}_isErrorComingFromThisItem(t){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(t))return!1;return Br(this._context,t.context)}}class Gr{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const r=t===Kr;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const o=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Kr),this._queues.get(t)])).then(e),n=o.catch((()=>{}));return this._queues.set(t,n),o.finally((()=>{this._activeActions--,this._queues.get(t)===n&&0===this._activeActions&&this._onEmptyCallbacks.forEach((t=>t()))}))}}function Yr(t){return Array.isArray(t)?t:[t]}const Jr=e().createContext("contextWatchdog");class Xr extends e().Component{constructor(t,e){super(t,e),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(t){return t.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(t.config)),t.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(t.config),!0):this.props.children!==t.children}render(){return e().createElement(Jr.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(t){this.contextWatchdog=new Qr(this.props.context),this.contextWatchdog.on("error",((t,e)=>{this.props.onError(e.error,{phase:"runtime",willContextRestart:e.causesRestart})})),this.contextWatchdog.on("stateChange",(()=>{"ready"===this.contextWatchdog.state&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)})),await this.contextWatchdog.create(t).catch((t=>{this.props.onError(t,{phase:"initialization",willContextRestart:!1})}))}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Xr.defaultProps={isLayoutReady:!0,onError:(t,e)=>console.error(t,e)},Xr.propTypes={id:i().string,isLayoutReady:i().bool,context:i().func,config:i().object,onReady:i().func,onError:i().func};const Zr="Lock from React integration (@ckeditor/ckeditor5-react)";class to extends e().Component{constructor(t){super(t),this.domContainer=e().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:r}=window;if(r){const[t]=r.split(".").map(Number);t<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(t){return!!this.editor&&(t.id!==this.props.id||(this._shouldUpdateEditor(t)&&this.editor.setData(t.data),"disabled"in t&&(t.disabled?this.editor.enableReadOnlyMode(Zr):this.editor.disableReadOnlyMode(Zr)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return e().createElement("div",{ref:this.domContainer})}async _initializeEditor(){this.watchdog||(this.context instanceof Qr?this.watchdog=new eo(this.context):this.watchdog=new to._EditorWatchdog(this.props.editor),this.watchdog.setCreator(((t,e)=>this._createEditor(t,e))),this.watchdog.on("error",((t,{error:e,causesRestart:r})=>{this.props.onError(e,{phase:"runtime",willEditorRestart:r})})),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch((t=>this.props.onError(t,{phase:"initialization",willEditorRestart:!1}))))}_createEditor(t,e){return this.props.editor.create(t,e).then((t=>{"disabled"in this.props&&this.props.disabled&&t.enableReadOnlyMode(Zr);const e=t.model.document,r=t.editing.view.document;return e.on("change:data",(e=>{this.props.onChange&&this.props.onChange(e,t)})),r.on("focus",(e=>{this.props.onFocus&&this.props.onFocus(e,t)})),r.on("blur",(e=>{this.props.onBlur&&this.props.onBlur(e,t)})),setTimeout((()=>{this.props.onReady&&this.props.onReady(this.editor)})),t}))}async _destroyEditor(){this.editor&&(await this.watchdog.destroy(),this.watchdog=null)}_shouldUpdateEditor(t){return this.props.data!==t.data&&this.editor.getData()!==t.data}_getConfig(){return this.props.data&&this.props.config.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class eo{constructor(t){this._contextWatchdog=t,this._id=function(){const t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+Vr[t>>0&255]+Vr[t>>8&255]+Vr[t>>16&255]+Vr[t>>24&255]+Vr[e>>0&255]+Vr[e>>8&255]+Vr[e>>16&255]+Vr[e>>24&255]+Vr[r>>0&255]+Vr[r>>8&255]+Vr[r>>16&255]+Vr[r>>24&255]+Vr[o>>0&255]+Vr[o>>8&255]+Vr[o>>16&255]+Vr[o>>24&255]}()}setCreator(t){this._creator=t}create(t,e){return this._contextWatchdog.add({sourceElementOrData:t,config:e,creator:this._creator,id:this._id,type:"editor"})}on(t,e){this._contextWatchdog.on("itemError",((t,{itemId:r,causesRestart:o,error:n})=>{r===this._id&&e(null,{error:n,causesRestart:o})}))}destroy(){this._contextWatchdog.remove(this._id)}get editor(){return this._contextWatchdog.getItem(this._id)}}to.contextType=Jr,to.propTypes={editor:i().func.isRequired,data:i().string,config:i().object,onChange:i().func,onReady:i().func,onFocus:i().func,onBlur:i().func,onError:i().func,disabled:i().bool,onInit:(t,e)=>{if(t[e])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},to.defaultProps={config:{},onError:(t,e)=>console.error(t,e)},to._EditorWatchdog=Hr})(),n})()));
//# sourceMappingURL=ckeditor.js.map

/***/ }),

/***/ "./resources/js/Data/data.js":
/*!***********************************!*\
  !*** ./resources/js/Data/data.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ckEditorConfig": () => (/* binding */ ckEditorConfig),
/* harmony export */   "team_members": () => (/* binding */ team_members)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./resources/js/Data/functions.js");

var colors = {
  ndetek: "#0354ac",
  blue: "#0d6efd",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#d63384",
  red: "#dc3545",
  orange: "#fd7e14",
  yellow: "#ffc107",
  green: "#198754",
  teal: "#20c997",
  cyan: "#0dcaf0",
  white: "#fff",
  gray: "#6c757d",
  "gray-dark": "#343a40",
  "gray-100": "#f8f9fa",
  "gray-200": "#e9ecef",
  "gray-300": "#dee2e6",
  "gray-400": "#ced4da",
  "gray-500": "#adb5bd",
  "gray-600": "#6c757d",
  "gray-700": "#495057",
  "gray-800": "#343a40",
  "gray-900": "#212529",
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  info: "#0dcaf0",
  warning: "#ffc107",
  danger: "#dc3545",
  light: "#f8f9fa",
  dark: "#212529"
};
var team_members = [{
  image: "nde.jpg",
  name: "nfor nde nyambi",
  post: "CEO",
  social_medias: [{
    name: "twitter",
    link: "#"
  }, {
    name: "facebook-f",
    link: "#"
  }, {
    name: "instagram",
    link: "#"
  }, {
    name: "linkedin",
    link: "#"
  }]
}, {
  image: "duke.jpg",
  name: "kum leslie mua",
  post: "Director",
  social_medias: [{
    name: "twitter",
    link: "#"
  }, {
    name: "facebook-f",
    link: "#"
  }, {
    name: "instagram",
    link: "#"
  }, {
    name: "linkedin",
    link: "#"
  }]
}, {
  image: "gedeon.jpg",
  name: "soh mangwa gedeon",
  post: "Director",
  social_medias: [{
    name: "twitter",
    link: "#"
  }, {
    name: "facebook-f",
    link: "#"
  }, {
    name: "instagram",
    link: "#"
  }, {
    name: "linkedin",
    link: "#"
  }]
}, {
  image: "ronard.jpg",
  name: "fon ronard sauh",
  post: "Director",
  social_medias: [{
    name: "twitter",
    link: "#"
  }, {
    name: "facebook-f",
    link: "#"
  }, {
    name: "instagram",
    link: "#"
  }, {
    name: "linkedin",
    link: "#"
  }]
}];
var ckEditorConfig = {
  extraPlugins: [_functions__WEBPACK_IMPORTED_MODULE_0__.uploadPlugin],
  fontColor: {
    colors: arrangeColors(colors)
  },
  fontBackgroundColor: {
    colors: arrangeColors(colors)
  }
};

function arrangeColors(colors) {
  var labels = Object.keys(colors);
  var values = Object.values(colors);
  var result = [];

  for (var i = 0; i < labels.length; i++) {
    result.push({
      color: values[i],
      label: labels[i]
    });
  }

  return result;
}

/***/ }),

/***/ "./resources/js/Data/functions.js":
/*!****************************************!*\
  !*** ./resources/js/Data/functions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcTime": () => (/* binding */ calcTime),
/* harmony export */   "handleLike": () => (/* binding */ handleLike),
/* harmony export */   "showPassword": () => (/* binding */ showPassword),
/* harmony export */   "uploadPlugin": () => (/* binding */ uploadPlugin)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function calcTime(offset) {
  var d = new Date();
  var utc = d.getTime() + d.getTimezoneOffset() * 60000;
  var nd = new Date(utc + 3600000 * offset); // return nd.toLocaleString();
  // return nd.toLocaleTimeString();

  return {
    hours: 24 - nd.getHours(),
    minutes: 60 - nd.getMinutes(),
    seconds: 60 - nd.getSeconds()
  };
}
function showPassword() {
  var showIcon = document.getElementById("showIcon");
  var pass = document.getElementById("password");

  if (pass.type === "password") {
    pass.type = "text";
    showIcon.classList.remove("fa-eye-slash");
    showIcon.classList.add("fa-eye");
  } else {
    pass.type = "password";
    showIcon.classList.remove("fa-eye");
    showIcon.classList.add("fa-eye-slash");
  }
}
var handleLike = function handleLike(id, form) {
  form.get("/like/".concat(id), {
    onError: function onError(e) {
      if (e.hasOwnProperty("login")) {
        document.getElementById("show-auth-modal").click();
      }
    }
  });
};

var uploadAdapter = function uploadAdapter(loader) {
  return {
    upload: function upload() {
      return new Promise(function (resolve, reject) {
        var body = new FormData();
        loader.file.then(function (file) {
          body.append("image", file);
          axios__WEBPACK_IMPORTED_MODULE_0___default().post("/admin/insert-image", body).then(function (res) {
            return resolve({
              "default": "/storage/".concat(res.data)
            });
          });
        });
      });
    }
  };
};

var uploadPlugin = function uploadPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = function (loader) {
    return uploadAdapter(loader);
  };
};

/***/ }),

/***/ "./resources/js/Pages/emails/Test.jsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/emails/Test.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'ckeditor-ndetek'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Data/data */ "./resources/js/Data/data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// // // // import React from "react";
// // // // import Box from "@material-ui/core/Box";
// // // // import CircularProgress from "@material-ui/core/CircularProgress";
// // // // export default function Test() {
// // // //     const [uploadOrDownloadCount, setUploadOrDownloadCount] =
// // // //         React.useState(10);
// // // //     React.useEffect(() => {
// // // //         const timer = setInterval(() => {
// // // //             setUploadOrDownloadCount((beforeValue) =>
// // // //                 beforeValue >= 100 ? 0 : beforeValue + 10
// // // //             );
// // // //         }, 800);
// // // //         return () => {
// // // //             clearInterval(timer);
// // // //         };
// // // //     }, []);
// // // //     return (
// // // //         <div>
// // // //             <h4>How to show upload/download percentage in ReactJS?</h4>
// // // //             <Box position="relative" display="inline-flex">
// // // //                 <CircularProgress
// // // //                     variant="determinate"
// // // //                     value={uploadOrDownloadCount}
// // // //                 />
// // // //                 <Box
// // // //                     bottom={0}
// // // //                     right={0}
// // // //                     top={0}
// // // //                     justifyContent="center"
// // // //                     left={0}
// // // //                     display="flex"
// // // //                     alignItems="center"
// // // //                     position="absolute"
// // // //                 >
// // // //                     {`${Math.round(uploadOrDownloadCount)}%`}
// // // //                 </Box>
// // // //             </Box>
// // // //         </div>
// // // //     );
// // // // }
// // // // import React from "react";
// // // // import { CKEditor } from "@ckeditor/ckeditor5-react";
// // // // import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// // // // import axios from "axios";
// // // // import { uploadPlugin } from "../../Data/functions";
// // // // const Test = () => {
// // // //     return (
// // // //         <div className="App">
// // // //             <h2>Using CKEditor 5 build in React</h2>
// // // //             <CKEditor
// // // //                 config={{
// // // //                     extraPlugins: [uploadPlugin],
// // // //                 }}
// // // //                 editor={ClassicEditor}
// // // //                 data="<p>Hello from CKEditor 5!</p>"
// // // //                 // onReady={(editor) => {
// // // //                 //     // You can store the "editor" and use when it is needed.
// // // //                 //     console.log("Editor is ready to use!", editor);
// // // //                 // }}
// // // //                 onChange={(event, editor) => {
// // // //                     const data = editor.getData();
// // // //                     // console.log({ event, editor, data });
// // // //                     console.log(data);
// // // //                 }}
// // // //                 // onBlur={(event, editor) => {
// // // //                 //     console.log("Blur.", editor);
// // // //                 // }}
// // // //                 // onFocus={(event, editor) => {
// // // //                 //     console.log("Focus.", editor);
// // // //                 // }}
// // // //             />
// // // //         </div>
// // // //     );
// // // // };
// // // // export default Test;
// // // // import React, { Suspense } from "react";
// // // // import { useTranslation } from "react-i18next";
// // // // function HeaderComponent() {
// // // //     const { t, i18n } = useTranslation("common");
// // // //     return (
// // // //         <>
// // // //             <h1>{t("welcome.title", { framework: "NdeTek" })}</h1>
// // // //             <button onClick={() => i18n.changeLanguage("fre")}>Fre</button>
// // // //             <button onClick={() => i18n.changeLanguage("en")}>en</button>
// // // //         </>
// // // //     );
// // // // }
// // // // function App() {
// // // //     return (
// // // //         <Suspense fallback="loading">
// // // //             <div className="App">
// // // //                 <HeaderComponent />
// // // //             </div>
// // // //         </Suspense>
// // // //     );
// // // // }
// // // // export default App;
// // // import React, { Component } from "react";
// // // import Editor from "ckeditor5-custom-build/build/ckeditor";
// // // import { CKEditor } from "@ckeditor/ckeditor5-react";
// // // const editorConfiguration = {
// // //     toolbar: ["bold", "italic"],
// // // };
// // // class App extends Component {
// // //     render() {
// // //         return (
// // //             <div className="App">
// // //                 <h2>Using CKEditor 5 from online builder in React</h2>
// // //                 <CKEditor
// // //                     editor={Editor}
// // //                     config={editorConfiguration}
// // //                     data="<p>Hello from CKEditor 5!</p>"
// // //                     onReady={(editor) => {
// // //                         // You can store the "editor" and use when it is needed.
// // //                         console.log("Editor is ready to use!", editor);
// // //                     }}
// // //                     onChange={(event, editor) => {
// // //                         const data = editor.getData();
// // //                         console.log({ event, editor, data });
// // //                     }}
// // //                     onBlur={(event, editor) => {
// // //                         console.log("Blur.", editor);
// // //                     }}
// // //                     onFocus={(event, editor) => {
// // //                         console.log("Focus.", editor);
// // //                     }}
// // //                 />
// // //             </div>
// // //         );
// // //     }
// // // }
// // // export default App;
// // import ClassicEditor from "../../ckeditor5/build/ckeditor";
// // import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// // import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
// // import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// // import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
// // ClassicEditor.create(document.querySelector("#editor"), {
// //     plugins: [Essentials, Paragraph, Bold, Italic],
// //     toolbar: ["bold", "italic"],
// // })
// //     .then((editor) => {
// //         console.log("Editor was initialized", editor);
// //     })
// //     .catch((error) => {
// //         console.error(error.stack);
// //     });
// import React, { Component } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "../../ckeditor5";
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <h2>Using CKEditor 5 build in React</h2>
//                 <CKEditor
//                     editor={ClassicEditor}
//                     data="<p>Hello from CKEditor 5!</p>"
//                     onReady={(editor) => {
//                         // You can store the "editor" and use when it is needed.
//                         console.log("Editor is ready to use!", editor);
//                     }}
//                     onChange={(event, editor) => {
//                         const data = editor.getData();
//                         console.log({ event, editor, data });
//                     }}
//                     onBlur={(event, editor) => {
//                         console.log("Blur.", editor);
//                     }}
//                     onFocus={(event, editor) => {
//                         console.log("Focus.", editor);
//                     }}
//                 />
//             </div>
//         );
//     }
// }
// export default App;





var Test = function Test() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_0__.CKEditor, {
    editor: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'ckeditor-ndetek'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    config: _Data_data__WEBPACK_IMPORTED_MODULE_2__.ckEditorConfig,
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      console.log(data);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);

/***/ })

}]);