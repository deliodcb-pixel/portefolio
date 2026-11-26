function T_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function A_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ug={exports:{}},nc={},dg={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),R_=Symbol.for("react.portal"),C_=Symbol.for("react.fragment"),b_=Symbol.for("react.strict_mode"),P_=Symbol.for("react.profiler"),L_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),N_=Symbol.for("react.forward_ref"),I_=Symbol.for("react.suspense"),U_=Symbol.for("react.memo"),F_=Symbol.for("react.lazy"),oh=Symbol.iterator;function O_(t){return t===null||typeof t!="object"?null:(t=oh&&t[oh]||t["@@iterator"],typeof t=="function"?t:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hg=Object.assign,pg={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||fg}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mg(){}mg.prototype=Ks.prototype;function Wd(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||fg}var jd=Wd.prototype=new mg;jd.constructor=Wd;hg(jd,Ks.prototype);jd.isPureReactComponent=!0;var lh=Array.isArray,gg=Object.prototype.hasOwnProperty,Xd={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function _g(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)gg.call(e,i)&&!vg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:so,type:t,key:s,ref:a,props:r,_owner:Xd.current}}function k_(t,e){return{$$typeof:so,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===so}function B_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ch=/\/+/g;function Pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B_(""+t.key):e.toString(36)}function al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case so:case R_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Pc(a,0):i,lh(r)?(n="",t!=null&&(n=t.replace(ch,"$&/")+"/"),al(r,e,n,"",function(c){return c})):r!=null&&(qd(r)&&(r=k_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ch,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",lh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Pc(s,o);a+=al(s,e,n,l,r)}else if(l=O_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Pc(s,o++),a+=al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function vo(t,e,n){if(t==null)return t;var i=[],r=0;return al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function z_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},ol={transition:null},H_={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:ol,ReactCurrentOwner:Xd};function xg(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:vo,forEach:function(t,e,n){vo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vo(t,function(){e++}),e},toArray:function(t){return vo(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=Ks;Qe.Fragment=C_;Qe.Profiler=P_;Qe.PureComponent=Wd;Qe.StrictMode=b_;Qe.Suspense=I_;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_;Qe.act=xg;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Xd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)gg.call(e,l)&&!vg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:so,type:t.type,key:r,ref:s,props:i,_owner:a}};Qe.createContext=function(t){return t={$$typeof:D_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:L_,_context:t},t.Consumer=t};Qe.createElement=_g;Qe.createFactory=function(t){var e=_g.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:N_,render:t}};Qe.isValidElement=qd;Qe.lazy=function(t){return{$$typeof:F_,_payload:{_status:-1,_result:t},_init:z_}};Qe.memo=function(t,e){return{$$typeof:U_,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=ol.transition;ol.transition={};try{t()}finally{ol.transition=e}};Qe.unstable_act=xg;Qe.useCallback=function(t,e){return sn.current.useCallback(t,e)};Qe.useContext=function(t){return sn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return sn.current.useEffect(t,e)};Qe.useId=function(){return sn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return sn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Qe.useRef=function(t){return sn.current.useRef(t)};Qe.useState=function(t){return sn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return sn.current.useTransition()};Qe.version="18.3.1";dg.exports=Qe;var Z=dg.exports;const G_=A_(Z),V_=T_({__proto__:null,default:G_},[Z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_=Z,j_=Symbol.for("react.element"),X_=Symbol.for("react.fragment"),q_=Object.prototype.hasOwnProperty,$_=W_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y_={key:!0,ref:!0,__self:!0,__source:!0};function yg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)q_.call(e,i)&&!Y_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:j_,type:t,key:s,ref:a,props:r,_owner:$_.current}}nc.Fragment=X_;nc.jsx=yg;nc.jsxs=yg;ug.exports=nc;var E=ug.exports,Sg={exports:{}},Mn={},Mg={exports:{}},Eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,k){var z=N.length;N.push(k);e:for(;0<z;){var te=z-1>>>1,Q=N[te];if(0<r(Q,k))N[te]=k,N[z]=Q,z=te;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var k=N[0],z=N.pop();if(z!==k){N[0]=z;e:for(var te=0,Q=N.length,V=Q>>>1;te<V;){var ne=2*(te+1)-1,ce=N[ne],ue=ne+1,xe=N[ue];if(0>r(ce,z))ue<Q&&0>r(xe,ce)?(N[te]=xe,N[ue]=z,te=ue):(N[te]=ce,N[ne]=z,te=ne);else if(ue<Q&&0>r(xe,z))N[te]=xe,N[ue]=z,te=ue;else break e}}return k}function r(N,k){var z=N.sortIndex-k.sortIndex;return z!==0?z:N.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,m=!1,x=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=N)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function y(N){if(_=!1,v(N),!x)if(n(l)!==null)x=!0,Y(P);else{var k=n(c);k!==null&&ee(y,k.startTime-N)}}function P(N,k){x=!1,_&&(_=!1,u(F),F=-1),m=!0;var z=h;try{for(v(k),f=n(l);f!==null&&(!(f.expirationTime>k)||N&&!$());){var te=f.callback;if(typeof te=="function"){f.callback=null,h=f.priorityLevel;var Q=te(f.expirationTime<=k);k=t.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(l)&&i(l),v(k)}else i(l);f=n(l)}if(f!==null)var V=!0;else{var ne=n(c);ne!==null&&ee(y,ne.startTime-k),V=!1}return V}finally{f=null,h=z,m=!1}}var C=!1,A=null,F=-1,M=5,T=-1;function $(){return!(t.unstable_now()-T<M)}function J(){if(A!==null){var N=t.unstable_now();T=N;var k=!0;try{k=A(!0,N)}finally{k?le():(C=!1,A=null)}}else C=!1}var le;if(typeof g=="function")le=function(){g(J)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,G=L.port2;L.port1.onmessage=J,le=function(){G.postMessage(null)}}else le=function(){p(J,0)};function Y(N){A=N,C||(C=!0,le())}function ee(N,k){F=p(function(){N(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,Y(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var z=h;h=k;try{return N()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,k){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=h;h=N;try{return k()}finally{h=z}},t.unstable_scheduleCallback=function(N,k,z){var te=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?te+z:te):z=te,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=z+Q,N={id:d++,callback:k,priorityLevel:N,startTime:z,expirationTime:Q,sortIndex:-1},z>te?(N.sortIndex=z,e(c,N),n(l)===null&&N===n(c)&&(_?(u(F),F=-1):_=!0,ee(y,z-te))):(N.sortIndex=Q,e(l,N),x||m||(x=!0,Y(P))),N},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(N){var k=h;return function(){var z=h;h=k;try{return N.apply(this,arguments)}finally{h=z}}}})(Eg);Mg.exports=Eg;var K_=Mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_=Z,Sn=K_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wg=new Set,Oa={};function Gr(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(Oa[t]=e,t=0;t<e.length;t++)wg.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=Object.prototype.hasOwnProperty,Q_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uh={},dh={};function J_(t){return Fu.call(dh,t)?!0:Fu.call(uh,t)?!1:Q_.test(t)?dh[t]=!0:(uh[t]=!0,!1)}function ex(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tx(t,e,n,i){if(e===null||typeof e>"u"||ex(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function Yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($d,Yd);Ht[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($d,Yd);Ht[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($d,Yd);Ht[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kd(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tx(e,n,r,i)&&(n=null),i||r===null?J_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=Z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_o=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),Ag=Symbol.for("react.context"),Qd=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),Bu=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),Rg=Symbol.for("react.offscreen"),fh=Symbol.iterator;function sa(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Lc;function xa(t){if(Lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lc=e&&e[1]||""}return`
`+Lc+t}var Dc=!1;function Nc(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xa(t):""}function nx(t){switch(t.tag){case 5:return xa(t.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case hs:return"Portal";case Ou:return"Profiler";case Zd:return"StrictMode";case ku:return"Suspense";case Bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ag:return(t.displayName||"Context")+".Consumer";case Tg:return(t._context.displayName||"Context")+".Provider";case Qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:zu(t.type)||"Memo";case Ui:e=t._payload,t=t._init;try{return zu(t(e))}catch{}}return null}function ix(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zu(e);case 8:return e===Zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rx(t){var e=Cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xo(t){t._valueTracker||(t._valueTracker=rx(t))}function bg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Cg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pg(t,e){e=e.checked,e!=null&&Kd(t,"checked",e,!1)}function Gu(t,e){Pg(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ya=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ya(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function Lg(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yo,Ng=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yo=yo||document.createElement("div"),yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sx=["Webkit","ms","Moz","O"];Object.keys(Ta).forEach(function(t){sx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ta[e]=Ta[t]})});function Ig(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ta.hasOwnProperty(t)&&Ta[t]?(""+e).trim():e+"px"}function Ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ig(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ax=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xu(t,e){if(e){if(ax[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yu=null,Cs=null,bs=null;function vh(t){if(t=lo(t)){if(typeof Yu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=oc(e),Yu(t.stateNode,t.type,e))}}function Fg(t){Cs?bs?bs.push(t):bs=[t]:Cs=t}function Og(){if(Cs){var t=Cs,e=bs;if(bs=Cs=null,vh(t),e)for(t=0;t<e.length;t++)vh(e[t])}}function kg(t,e){return t(e)}function Bg(){}var Ic=!1;function zg(t,e,n){if(Ic)return t(e,n);Ic=!0;try{return kg(t,e,n)}finally{Ic=!1,(Cs!==null||bs!==null)&&(Bg(),Og())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var i=oc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Ku=!1;if(Si)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){Ku=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{Ku=!1}function ox(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Aa=!1,Sl=null,Ml=!1,Zu=null,lx={onError:function(t){Aa=!0,Sl=t}};function cx(t,e,n,i,r,s,a,o,l){Aa=!1,Sl=null,ox.apply(lx,arguments)}function ux(t,e,n,i,r,s,a,o,l){if(cx.apply(this,arguments),Aa){if(Aa){var c=Sl;Aa=!1,Sl=null}else throw Error(oe(198));Ml||(Ml=!0,Zu=c)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _h(t){if(Vr(t)!==t)throw Error(oe(188))}function dx(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return _h(r),t;if(s===i)return _h(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Gg(t){return t=dx(t),t!==null?Vg(t):null}function Vg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Vg(t);if(e!==null)return e;t=t.sibling}return null}var Wg=Sn.unstable_scheduleCallback,xh=Sn.unstable_cancelCallback,fx=Sn.unstable_shouldYield,hx=Sn.unstable_requestPaint,wt=Sn.unstable_now,px=Sn.unstable_getCurrentPriorityLevel,tf=Sn.unstable_ImmediatePriority,jg=Sn.unstable_UserBlockingPriority,El=Sn.unstable_NormalPriority,mx=Sn.unstable_LowPriority,Xg=Sn.unstable_IdlePriority,ic=null,Jn=null;function gx(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:xx,vx=Math.log,_x=Math.LN2;function xx(t){return t>>>=0,t===0?32:31-(vx(t)/_x|0)|0}var So=64,Mo=4194304;function Sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Sa(o):(s&=a,s!==0&&(i=Sa(s)))}else a=n&~r,a!==0?i=Sa(a):s!==0&&(i=Sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function yx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Xn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=yx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qg(){var t=So;return So<<=1,!(So&4194240)&&(So=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function Mx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function $g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yg,rf,Kg,Zg,Qg,Ju=!1,Eo=[],ji=null,Xi=null,qi=null,za=new Map,Ha=new Map,Oi=[],Ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yh(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function oa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=lo(e),e!==null&&rf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function wx(t,e,n,i,r){switch(e){case"focusin":return ji=oa(ji,t,e,n,i,r),!0;case"dragenter":return Xi=oa(Xi,t,e,n,i,r),!0;case"mouseover":return qi=oa(qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return za.set(s,oa(za.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,oa(Ha.get(s)||null,t,e,n,i,r)),!0}return!1}function Jg(t){var e=Ar(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=Hg(n),e!==null){t.blockedOn=e,Qg(t.priority,function(){Kg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=lo(n),e!==null&&rf(e),t.blockedOn=n,!1;e.shift()}return!0}function Sh(t,e,n){ll(t)&&n.delete(e)}function Tx(){Ju=!1,ji!==null&&ll(ji)&&(ji=null),Xi!==null&&ll(Xi)&&(Xi=null),qi!==null&&ll(qi)&&(qi=null),za.forEach(Sh),Ha.forEach(Sh)}function la(t,e){t.blockedOn===e&&(t.blockedOn=null,Ju||(Ju=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Tx)))}function Ga(t){function e(r){return la(r,t)}if(0<Eo.length){la(Eo[0],t);for(var n=1;n<Eo.length;n++){var i=Eo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&la(ji,t),Xi!==null&&la(Xi,t),qi!==null&&la(qi,t),za.forEach(e),Ha.forEach(e),n=0;n<Oi.length;n++)i=Oi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Oi.length&&(n=Oi[0],n.blockedOn===null);)Jg(n),n.blockedOn===null&&Oi.shift()}var Ps=Ai.ReactCurrentBatchConfig,Tl=!0;function Ax(t,e,n,i){var r=rt,s=Ps.transition;Ps.transition=null;try{rt=1,sf(t,e,n,i)}finally{rt=r,Ps.transition=s}}function Rx(t,e,n,i){var r=rt,s=Ps.transition;Ps.transition=null;try{rt=4,sf(t,e,n,i)}finally{rt=r,Ps.transition=s}}function sf(t,e,n,i){if(Tl){var r=ed(t,e,n,i);if(r===null)jc(t,e,i,Al,n),yh(t,i);else if(wx(r,t,e,n,i))i.stopPropagation();else if(yh(t,i),e&4&&-1<Ex.indexOf(t)){for(;r!==null;){var s=lo(r);if(s!==null&&Yg(s),s=ed(t,e,n,i),s===null&&jc(t,e,i,Al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else jc(t,e,i,null,n)}}var Al=null;function ed(t,e,n,i){if(Al=null,t=ef(i),t=Ar(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function e0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(px()){case tf:return 1;case jg:return 4;case El:case mx:return 16;case Xg:return 536870912;default:return 16}default:return 16}}var zi=null,af=null,cl=null;function t0(){if(cl)return cl;var t,e=af,n=e.length,i,r="value"in zi?zi.value:zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return cl=r.slice(t,1<i?1-i:void 0)}function ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wo(){return!0}function Mh(){return!1}function En(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wo:Mh,this.isPropagationStopped=Mh,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},of=En(Zs),oo=xt({},Zs,{view:0,detail:0}),Cx=En(oo),Fc,Oc,ca,rc=xt({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(Fc=t.screenX-ca.screenX,Oc=t.screenY-ca.screenY):Oc=Fc=0,ca=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),Eh=En(rc),bx=xt({},rc,{dataTransfer:0}),Px=En(bx),Lx=xt({},oo,{relatedTarget:0}),kc=En(Lx),Dx=xt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),Nx=En(Dx),Ix=xt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ux=En(Ix),Fx=xt({},Zs,{data:0}),wh=En(Fx),Ox={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Bx[t])?!!e[t]:!1}function lf(){return zx}var Hx=xt({},oo,{key:function(t){if(t.key){var e=Ox[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gx=En(Hx),Vx=xt({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Th=En(Vx),Wx=xt({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),jx=En(Wx),Xx=xt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),qx=En(Xx),$x=xt({},rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=En($x),Kx=[9,13,27,32],cf=Si&&"CompositionEvent"in window,Ra=null;Si&&"documentMode"in document&&(Ra=document.documentMode);var Zx=Si&&"TextEvent"in window&&!Ra,n0=Si&&(!cf||Ra&&8<Ra&&11>=Ra),Ah=" ",Rh=!1;function i0(t,e){switch(t){case"keyup":return Kx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function Qx(t,e){switch(t){case"compositionend":return r0(e);case"keypress":return e.which!==32?null:(Rh=!0,Ah);case"textInput":return t=e.data,t===Ah&&Rh?null:t;default:return null}}function Jx(t,e){if(ms)return t==="compositionend"||!cf&&i0(t,e)?(t=t0(),cl=af=zi=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n0&&e.locale!=="ko"?null:e.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ey[t.type]:e==="textarea"}function s0(t,e,n,i){Fg(i),e=Rl(e,"onChange"),0<e.length&&(n=new of("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ca=null,Va=null;function ty(t){g0(t,0)}function sc(t){var e=_s(t);if(bg(e))return t}function ny(t,e){if(t==="change")return e}var a0=!1;if(Si){var Bc;if(Si){var zc="oninput"in document;if(!zc){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),zc=typeof bh.oninput=="function"}Bc=zc}else Bc=!1;a0=Bc&&(!document.documentMode||9<document.documentMode)}function Ph(){Ca&&(Ca.detachEvent("onpropertychange",o0),Va=Ca=null)}function o0(t){if(t.propertyName==="value"&&sc(Va)){var e=[];s0(e,Va,t,ef(t)),zg(ty,e)}}function iy(t,e,n){t==="focusin"?(Ph(),Ca=e,Va=n,Ca.attachEvent("onpropertychange",o0)):t==="focusout"&&Ph()}function ry(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sc(Va)}function sy(t,e){if(t==="click")return sc(e)}function ay(t,e){if(t==="input"||t==="change")return sc(e)}function oy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:oy;function Wa(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fu.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dh(t,e){var n=Lh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lh(n)}}function l0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c0(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ly(t){var e=c0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&l0(n.ownerDocument.documentElement,n)){if(i!==null&&uf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Dh(n,s);var a=Dh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cy=Si&&"documentMode"in document&&11>=document.documentMode,gs=null,td=null,ba=null,nd=!1;function Nh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||gs==null||gs!==yl(i)||(i=gs,"selectionStart"in i&&uf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ba&&Wa(ba,i)||(ba=i,i=Rl(td,"onSelect"),0<i.length&&(e=new of("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gs)))}function To(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},Hc={},u0={};Si&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function ac(t){if(Hc[t])return Hc[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in u0)return Hc[t]=e[n];return t}var d0=ac("animationend"),f0=ac("animationiteration"),h0=ac("animationstart"),p0=ac("transitionend"),m0=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){m0.set(t,e),Gr(e,[t])}for(var Gc=0;Gc<Ih.length;Gc++){var Vc=Ih[Gc],uy=Vc.toLowerCase(),dy=Vc[0].toUpperCase()+Vc.slice(1);or(uy,"on"+dy)}or(d0,"onAnimationEnd");or(f0,"onAnimationIteration");or(h0,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(p0,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Uh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ux(i,e,void 0,t),t.currentTarget=null}function g0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Uh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Uh(r,o,c),s=l}}}if(Ml)throw t=Zu,Ml=!1,Zu=null,t}function lt(t,e){var n=e[od];n===void 0&&(n=e[od]=new Set);var i=t+"__bubble";n.has(i)||(v0(e,t,2,!1),n.add(i))}function Wc(t,e,n){var i=0;e&&(i|=4),v0(n,t,i,e)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function ja(t){if(!t[Ao]){t[Ao]=!0,wg.forEach(function(n){n!=="selectionchange"&&(fy.has(n)||Wc(n,!1,t),Wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ao]||(e[Ao]=!0,Wc("selectionchange",!1,e))}}function v0(t,e,n,i){switch(e0(e)){case 1:var r=Ax;break;case 4:r=Rx;break;default:r=sf}n=r.bind(null,e,n,t),r=void 0,!Ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function jc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ar(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}zg(function(){var c=s,d=ef(n),f=[];e:{var h=m0.get(t);if(h!==void 0){var m=of,x=t;switch(t){case"keypress":if(ul(n)===0)break e;case"keydown":case"keyup":m=Gx;break;case"focusin":x="focus",m=kc;break;case"focusout":x="blur",m=kc;break;case"beforeblur":case"afterblur":m=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Eh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=jx;break;case d0:case f0:case h0:m=Nx;break;case p0:m=qx;break;case"scroll":m=Cx;break;case"wheel":m=Yx;break;case"copy":case"cut":case"paste":m=Ux;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Th}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?h!==null?h+"Capture":null:h;_=[];for(var g=c,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,u!==null&&(y=Ba(g,u),y!=null&&_.push(Xa(g,y,v)))),p)break;g=g.return}0<_.length&&(h=new m(h,x,null,n,d),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==$u&&(x=n.relatedTarget||n.fromElement)&&(Ar(x)||x[Mi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Ar(x):null,x!==null&&(p=Vr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(_=Eh,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=Th,y="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?h:_s(m),v=x==null?h:_s(x),h=new _(y,g+"leave",m,n,d),h.target=p,h.relatedTarget=v,y=null,Ar(d)===c&&(_=new _(u,g+"enter",x,n,d),_.target=v,_.relatedTarget=p,y=_),p=y,m&&x)t:{for(_=m,u=x,g=0,v=_;v;v=qr(v))g++;for(v=0,y=u;y;y=qr(y))v++;for(;0<g-v;)_=qr(_),g--;for(;0<v-g;)u=qr(u),v--;for(;g--;){if(_===u||u!==null&&_===u.alternate)break t;_=qr(_),u=qr(u)}_=null}else _=null;m!==null&&Fh(f,h,m,_,!1),x!==null&&p!==null&&Fh(f,p,x,_,!0)}}e:{if(h=c?_s(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=ny;else if(Ch(h))if(a0)P=ay;else{P=ry;var C=iy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=sy);if(P&&(P=P(t,c))){s0(f,P,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Vu(h,"number",h.value)}switch(C=c?_s(c):window,t){case"focusin":(Ch(C)||C.contentEditable==="true")&&(gs=C,td=c,ba=null);break;case"focusout":ba=td=gs=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,Nh(f,n,d);break;case"selectionchange":if(cy)break;case"keydown":case"keyup":Nh(f,n,d)}var A;if(cf)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else ms?i0(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(n0&&n.locale!=="ko"&&(ms||F!=="onCompositionStart"?F==="onCompositionEnd"&&ms&&(A=t0()):(zi=d,af="value"in zi?zi.value:zi.textContent,ms=!0)),C=Rl(c,F),0<C.length&&(F=new wh(F,t,null,n,d),f.push({event:F,listeners:C}),A?F.data=A:(A=r0(n),A!==null&&(F.data=A)))),(A=Zx?Qx(t,n):Jx(t,n))&&(c=Rl(c,"onBeforeInput"),0<c.length&&(d=new wh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}g0(f,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Rl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ba(t,n),s!=null&&i.unshift(Xa(t,s,r)),s=Ba(t,e),s!=null&&i.push(Xa(t,s,r))),t=t.return}return i}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ba(n,s),l!=null&&a.unshift(Xa(n,l,o))):r||(l=Ba(n,s),l!=null&&a.push(Xa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var hy=/\r\n?/g,py=/\u0000|\uFFFD/g;function Oh(t){return(typeof t=="string"?t:""+t).replace(hy,`
`).replace(py,"")}function Ro(t,e,n){if(e=Oh(e),Oh(t)!==e&&n)throw Error(oe(425))}function Cl(){}var id=null,rd=null;function sd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(t){return kh.resolve(null).then(t).catch(vy)}:ad;function vy(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ga(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Qs,qa="__reactProps$"+Qs,Mi="__reactContainer$"+Qs,od="__reactEvents$"+Qs,_y="__reactListeners$"+Qs,xy="__reactHandles$"+Qs;function Ar(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bh(t);t!==null;){if(n=t[Qn])return n;t=Bh(t)}return e}t=n,n=t.parentNode}return null}function lo(t){return t=t[Qn]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function oc(t){return t[qa]||null}var ld=[],xs=-1;function lr(t){return{current:t}}function dt(t){0>xs||(t.current=ld[xs],ld[xs]=null,xs--)}function ot(t,e){xs++,ld[xs]=t.current,t.current=e}var rr={},Zt=lr(rr),un=lr(!1),Or=rr;function Os(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function bl(){dt(un),dt(Zt)}function zh(t,e,n){if(Zt.current!==rr)throw Error(oe(168));ot(Zt,e),ot(un,n)}function _0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,ix(t)||"Unknown",r));return xt({},n,i)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Or=Zt.current,ot(Zt,t),ot(un,un.current),!0}function Hh(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=_0(t,e,Or),i.__reactInternalMemoizedMergedChildContext=t,dt(un),dt(Zt),ot(Zt,t)):dt(un),ot(un,n)}var mi=null,lc=!1,qc=!1;function x0(t){mi===null?mi=[t]:mi.push(t)}function yy(t){lc=!0,x0(t)}function cr(){if(!qc&&mi!==null){qc=!0;var t=0,e=rt;try{var n=mi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,lc=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),Wg(tf,cr),r}finally{rt=e,qc=!1}}return null}var ys=[],Ss=0,Ll=null,Dl=0,Rn=[],Cn=0,kr=null,vi=1,_i="";function xr(t,e){ys[Ss++]=Dl,ys[Ss++]=Ll,Ll=t,Dl=e}function y0(t,e,n){Rn[Cn++]=vi,Rn[Cn++]=_i,Rn[Cn++]=kr,kr=t;var i=vi;t=_i;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,vi=1<<32-Xn(e)+r|n<<r|i,_i=s+t}else vi=1<<s|n<<r|i,_i=t}function df(t){t.return!==null&&(xr(t,1),y0(t,1,0))}function ff(t){for(;t===Ll;)Ll=ys[--Ss],ys[Ss]=null,Dl=ys[--Ss],ys[Ss]=null;for(;t===kr;)kr=Rn[--Cn],Rn[Cn]=null,_i=Rn[--Cn],Rn[Cn]=null,vi=Rn[--Cn],Rn[Cn]=null}var yn=null,xn=null,mt=!1,Gn=null;function S0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,xn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:vi,overflow:_i}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,xn=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(mt){var e=xn;if(e){var n=e;if(!Gh(t,e)){if(cd(t))throw Error(oe(418));e=$i(n.nextSibling);var i=yn;e&&Gh(t,e)?S0(i,n):(t.flags=t.flags&-4097|2,mt=!1,yn=t)}}else{if(cd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,mt=!1,yn=t}}}function Vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function Co(t){if(t!==yn)return!1;if(!mt)return Vh(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sd(t.type,t.memoizedProps)),e&&(e=xn)){if(cd(t))throw M0(),Error(oe(418));for(;e;)S0(t,e),e=$i(e.nextSibling)}if(Vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=yn?$i(t.stateNode.nextSibling):null;return!0}function M0(){for(var t=xn;t;)t=$i(t.nextSibling)}function ks(){xn=yn=null,mt=!1}function hf(t){Gn===null?Gn=[t]:Gn.push(t)}var Sy=Ai.ReactCurrentBatchConfig;function ua(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function bo(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wh(t){var e=t._init;return e(t._payload)}function E0(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Qi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,y){return g===null||g.tag!==6?(g=eu(v,u.mode,y),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,y){var P=v.type;return P===ps?d(u,g,v.props.children,y,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ui&&Wh(P)===g.type)?(y=r(g,v.props),y.ref=ua(u,g,v),y.return=u,y):(y=vl(v.type,v.key,v.props,null,u.mode,y),y.ref=ua(u,g,v),y.return=u,y)}function c(u,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=tu(v,u.mode,y),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,y,P){return g===null||g.tag!==7?(g=Dr(v,u.mode,y,P),g.return=u,g):(g=r(g,v),g.return=u,g)}function f(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=eu(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _o:return v=vl(g.type,g.key,g.props,null,u.mode,v),v.ref=ua(u,null,g),v.return=u,v;case hs:return g=tu(g,u.mode,v),g.return=u,g;case Ui:var y=g._init;return f(u,y(g._payload),v)}if(ya(g)||sa(g))return g=Dr(g,u.mode,v,null),g.return=u,g;bo(u,g)}return null}function h(u,g,v,y){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:o(u,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _o:return v.key===P?l(u,g,v,y):null;case hs:return v.key===P?c(u,g,v,y):null;case Ui:return P=v._init,h(u,g,P(v._payload),y)}if(ya(v)||sa(v))return P!==null?null:d(u,g,v,y,null);bo(u,v)}return null}function m(u,g,v,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(v)||null,o(g,u,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _o:return u=u.get(y.key===null?v:y.key)||null,l(g,u,y,P);case hs:return u=u.get(y.key===null?v:y.key)||null,c(g,u,y,P);case Ui:var C=y._init;return m(u,g,v,C(y._payload),P)}if(ya(y)||sa(y))return u=u.get(v)||null,d(g,u,y,P,null);bo(g,y)}return null}function x(u,g,v,y){for(var P=null,C=null,A=g,F=g=0,M=null;A!==null&&F<v.length;F++){A.index>F?(M=A,A=null):M=A.sibling;var T=h(u,A,v[F],y);if(T===null){A===null&&(A=M);break}t&&A&&T.alternate===null&&e(u,A),g=s(T,g,F),C===null?P=T:C.sibling=T,C=T,A=M}if(F===v.length)return n(u,A),mt&&xr(u,F),P;if(A===null){for(;F<v.length;F++)A=f(u,v[F],y),A!==null&&(g=s(A,g,F),C===null?P=A:C.sibling=A,C=A);return mt&&xr(u,F),P}for(A=i(u,A);F<v.length;F++)M=m(A,u,F,v[F],y),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?F:M.key),g=s(M,g,F),C===null?P=M:C.sibling=M,C=M);return t&&A.forEach(function($){return e(u,$)}),mt&&xr(u,F),P}function _(u,g,v,y){var P=sa(v);if(typeof P!="function")throw Error(oe(150));if(v=P.call(v),v==null)throw Error(oe(151));for(var C=P=null,A=g,F=g=0,M=null,T=v.next();A!==null&&!T.done;F++,T=v.next()){A.index>F?(M=A,A=null):M=A.sibling;var $=h(u,A,T.value,y);if($===null){A===null&&(A=M);break}t&&A&&$.alternate===null&&e(u,A),g=s($,g,F),C===null?P=$:C.sibling=$,C=$,A=M}if(T.done)return n(u,A),mt&&xr(u,F),P;if(A===null){for(;!T.done;F++,T=v.next())T=f(u,T.value,y),T!==null&&(g=s(T,g,F),C===null?P=T:C.sibling=T,C=T);return mt&&xr(u,F),P}for(A=i(u,A);!T.done;F++,T=v.next())T=m(A,u,F,T.value,y),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?F:T.key),g=s(T,g,F),C===null?P=T:C.sibling=T,C=T);return t&&A.forEach(function(J){return e(u,J)}),mt&&xr(u,F),P}function p(u,g,v,y){if(typeof v=="object"&&v!==null&&v.type===ps&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case _o:e:{for(var P=v.key,C=g;C!==null;){if(C.key===P){if(P=v.type,P===ps){if(C.tag===7){n(u,C.sibling),g=r(C,v.props.children),g.return=u,u=g;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ui&&Wh(P)===C.type){n(u,C.sibling),g=r(C,v.props),g.ref=ua(u,C,v),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===ps?(g=Dr(v.props.children,u.mode,y,v.key),g.return=u,u=g):(y=vl(v.type,v.key,v.props,null,u.mode,y),y.ref=ua(u,g,v),y.return=u,u=y)}return a(u);case hs:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=tu(v,u.mode,y),g.return=u,u=g}return a(u);case Ui:return C=v._init,p(u,g,C(v._payload),y)}if(ya(v))return x(u,g,v,y);if(sa(v))return _(u,g,v,y);bo(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=eu(v,u.mode,y),g.return=u,u=g),a(u)):n(u,g)}return p}var Bs=E0(!0),w0=E0(!1),Nl=lr(null),Il=null,Ms=null,pf=null;function mf(){pf=Ms=Il=null}function gf(t){var e=Nl.current;dt(Nl),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Il=t,pf=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(pf!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(Il===null)throw Error(oe(308));Ms=t,Il.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Rr=null;function vf(t){Rr===null?Rr=[t]:Rr.push(t)}function T0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,vf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nf(t,n)}}function jh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,i){var r=t.updateQueue;Fi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,_=o;switch(h=e,m=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=xt({},f,h);break e;case 2:Fi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=a,t.lanes=a,t.memoizedState=f}}function Xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var co={},ei=lr(co),$a=lr(co),Ya=lr(co);function Cr(t){if(t===co)throw Error(oe(174));return t}function xf(t,e){switch(ot(Ya,e),ot($a,t),ot(ei,co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}dt(ei),ot(ei,e)}function zs(){dt(ei),dt($a),dt(Ya)}function R0(t){Cr(Ya.current);var e=Cr(ei.current),n=ju(e,t.type);e!==n&&(ot($a,t),ot(ei,n))}function yf(t){$a.current===t&&(dt(ei),dt($a))}var vt=lr(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $c=[];function Sf(){for(var t=0;t<$c.length;t++)$c[t]._workInProgressVersionPrimary=null;$c.length=0}var fl=Ai.ReactCurrentDispatcher,Yc=Ai.ReactCurrentBatchConfig,Br=0,_t=null,bt=null,Ot=null,Ol=!1,Pa=!1,Ka=0,My=0;function Wt(){throw Error(oe(321))}function Mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Ef(t,e,n,i,r,s){if(Br=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fl.current=t===null||t.memoizedState===null?Ay:Ry,t=n(i,r),Pa){s=0;do{if(Pa=!1,Ka=0,25<=s)throw Error(oe(301));s+=1,Ot=bt=null,e.updateQueue=null,fl.current=Cy,t=n(i,r)}while(Pa)}if(fl.current=kl,e=bt!==null&&bt.next!==null,Br=0,Ot=bt=_t=null,Ol=!1,e)throw Error(oe(300));return t}function wf(){var t=Ka!==0;return Ka=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?_t.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function In(){if(bt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Ot===null?_t.memoizedState:Ot.next;if(e!==null)Ot=e,bt=t;else{if(t===null)throw Error(oe(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ot===null?_t.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Za(t,e){return typeof e=="function"?e(t):e}function Kc(t){var e=In(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Br&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,_t.lanes|=d,zr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,$n(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=In(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);$n(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function C0(){}function b0(t,e){var n=_t,i=In(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Tf(D0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,Qa(9,L0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(oe(349));Br&30||P0(n,e,r)}return r}function P0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L0(t,e,n,i){e.value=n,e.getSnapshot=i,N0(e)&&I0(t)}function D0(t,e,n){return n(function(){N0(e)&&I0(t)})}function N0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function I0(t){var e=Ei(t,1);e!==null&&qn(e,t,1,-1)}function qh(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e.queue=t,t=t.dispatch=Ty.bind(null,_t,t),[e.memoizedState,t]}function Qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function U0(){return In().memoizedState}function hl(t,e,n,i){var r=Kn();_t.flags|=t,r.memoizedState=Qa(1|e,n,void 0,i===void 0?null:i)}function cc(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&Mf(i,a.deps)){r.memoizedState=Qa(e,n,s,i);return}}_t.flags|=t,r.memoizedState=Qa(1|e,n,s,i)}function $h(t,e){return hl(8390656,8,t,e)}function Tf(t,e){return cc(2048,8,t,e)}function F0(t,e){return cc(4,2,t,e)}function O0(t,e){return cc(4,4,t,e)}function k0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function B0(t,e,n){return n=n!=null?n.concat([t]):null,cc(4,4,k0.bind(null,e,t),n)}function Af(){}function z0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function H0(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function G0(t,e,n){return Br&21?($n(n,e)||(n=qg(),_t.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function Ey(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Yc.transition;Yc.transition={};try{t(!1),e()}finally{rt=n,Yc.transition=i}}function V0(){return In().memoizedState}function wy(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},W0(t))j0(e,n);else if(n=T0(t,e,n,i),n!==null){var r=nn();qn(n,t,i,r),X0(n,e,i)}}function Ty(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(W0(t))j0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,$n(o,a)){var l=e.interleaved;l===null?(r.next=r,vf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=T0(t,e,r,i),n!==null&&(r=nn(),qn(n,t,i,r),X0(n,e,i))}}function W0(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function j0(t,e){Pa=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function X0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nf(t,n)}}var kl={readContext:Nn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},Ay={readContext:Nn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:$h,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hl(4194308,4,k0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return hl(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=wy.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:qh,useDebugValue:Af,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=qh(!1),e=t[0];return t=Ey.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=Kn();if(mt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),kt===null)throw Error(oe(349));Br&30||P0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$h(D0.bind(null,i,s,t),[t]),i.flags|=2048,Qa(9,L0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=kt.identifierPrefix;if(mt){var n=_i,i=vi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=My++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ry={readContext:Nn,useCallback:z0,useContext:Nn,useEffect:Tf,useImperativeHandle:B0,useInsertionEffect:F0,useLayoutEffect:O0,useMemo:H0,useReducer:Kc,useRef:U0,useState:function(){return Kc(Za)},useDebugValue:Af,useDeferredValue:function(t){var e=In();return G0(e,bt.memoizedState,t)},useTransition:function(){var t=Kc(Za)[0],e=In().memoizedState;return[t,e]},useMutableSource:C0,useSyncExternalStore:b0,useId:V0,unstable_isNewReconciler:!1},Cy={readContext:Nn,useCallback:z0,useContext:Nn,useEffect:Tf,useImperativeHandle:B0,useInsertionEffect:F0,useLayoutEffect:O0,useMemo:H0,useReducer:Zc,useRef:U0,useState:function(){return Zc(Za)},useDebugValue:Af,useDeferredValue:function(t){var e=In();return bt===null?e.memoizedState=t:G0(e,bt.memoizedState,t)},useTransition:function(){var t=Zc(Za)[0],e=In().memoizedState;return[t,e]},useMutableSource:C0,useSyncExternalStore:b0,useId:V0,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uc={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Zi(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(qn(e,t,r,i),dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Zi(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(qn(e,t,r,i),dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=Zi(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(qn(e,t,i,n),dl(e,t,i))}};function Yh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,i)||!Wa(r,s):!0}function q0(t,e,n){var i=!1,r=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=dn(e)?Or:Zt.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function hd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},_f(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=dn(e)?Or:Zt.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(fd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uc.enqueueReplaceState(r,r.state,null),Ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=nx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var by=typeof WeakMap=="function"?WeakMap:Map;function $0(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zl||(zl=!0,wd=i),pd(t,e)},n}function Y0(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Zh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new by;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Vy.bind(null,t,e,n),e.then(t,t))}function Qh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var Py=Ai.ReactCurrentOwner,cn=!1;function en(t,e,n,i){e.child=t===null?w0(e,null,n,i):Bs(e,t.child,n,i)}function ep(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=Ef(t,e,n,i,s,r),n=wf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(mt&&n&&df(e),e.flags|=1,en(t,e,i,r),e.child)}function tp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!If(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,K0(t,e,s,i,r)):(t=vl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(a,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function K0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wa(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,wi(t,e,r)}return md(t,e,n,i,r)}function Z0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(ws,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(ws,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(ws,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(ws,vn),vn|=i;return en(t,e,r,n),e.child}function Q0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,i,r){var s=dn(n)?Or:Zt.current;return s=Os(e,s),Ls(e,r),n=Ef(t,e,n,i,s,r),i=wf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(mt&&i&&df(e),e.flags|=1,en(t,e,n,r),e.child)}function np(t,e,n,i,r){if(dn(n)){var s=!0;Pl(e)}else s=!1;if(Ls(e,r),e.stateNode===null)pl(t,e),q0(e,n,i),hd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nn(c):(c=dn(n)?Or:Zt.current,c=Os(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Kh(e,a,i,c),Fi=!1;var h=e.memoizedState;a.state=h,Ul(e,i,a,r),l=e.memoizedState,o!==i||h!==l||un.current||Fi?(typeof d=="function"&&(fd(e,n,d,i),l=e.memoizedState),(o=Fi||Yh(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,A0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:zn(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=dn(n)?Or:Zt.current,l=Os(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Kh(e,a,i,l),Fi=!1,h=e.memoizedState,a.state=h,Ul(e,i,a,r);var x=e.memoizedState;o!==f||h!==x||un.current||Fi?(typeof m=="function"&&(fd(e,n,m,i),x=e.memoizedState),(c=Fi||Yh(e,n,c,i,h,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return gd(t,e,n,i,s,r)}function gd(t,e,n,i,r,s){Q0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Hh(e,n,!1),wi(t,e,s);i=e.stateNode,Py.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Bs(e,t.child,null,s),e.child=Bs(e,null,o,s)):en(t,e,o,s),e.memoizedState=i.state,r&&Hh(e,n,!0),e.child}function J0(t){var e=t.stateNode;e.pendingContext?zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zh(t,e.context,!1),xf(t,e.containerInfo)}function ip(t,e,n,i,r){return ks(),hf(r),e.flags|=256,en(t,e,n,i),e.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function ev(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(vt,r&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=hc(a,i,0,null),t=Dr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_d(n),e.memoizedState=vd,t):Rf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ly(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Qi(o,s):(s=Dr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?_d(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=vd,i}return s=t.child,t=s.sibling,i=Qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rf(t,e){return e=hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Po(t,e,n,i){return i!==null&&hf(i),Bs(e,t.child,null,n),t=Rf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ly(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Qc(Error(oe(422))),Po(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=hc({mode:"visible",children:i.children},r,0,null),s=Dr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bs(e,t.child,null,a),e.child.memoizedState=_d(a),e.memoizedState=vd,s);if(!(e.mode&1))return Po(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=Qc(s,i,void 0),Po(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=kt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),qn(i,t,r,-1))}return Nf(),i=Qc(Error(oe(421))),Po(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Wy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=$i(r.nextSibling),yn=e,mt=!0,Gn=null,t!==null&&(Rn[Cn++]=vi,Rn[Cn++]=_i,Rn[Cn++]=kr,vi=t.id,_i=t.overflow,kr=e),e=Rf(e,i.children),e.flags|=4096,e)}function rp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function Jc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rp(t,n,e);else if(t.tag===19)rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Jc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Jc(e,!0,n,null,s);break;case"together":Jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dy(t,e,n){switch(e.tag){case 3:J0(e),ks();break;case 5:R0(e);break;case 1:dn(e.type)&&Pl(e);break;case 4:xf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?ev(t,e,n):(ot(vt,vt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);ot(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,Z0(t,e,n)}return wi(t,e,n)}var nv,xd,iv,rv;nv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xd=function(){};iv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(ei.current);var s=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Wu(t,r),i=Wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cl)}Xu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rv=function(t,e,n,i){n!==i&&(e.flags|=4)};function da(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ny(t,e,n){var i=e.pendingProps;switch(ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return dn(e.type)&&bl(),jt(e),null;case 3:return i=e.stateNode,zs(),dt(un),dt(Zt),Sf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Rd(Gn),Gn=null))),xd(t,e),jt(e),null;case 5:yf(e);var r=Cr(Ya.current);if(n=e.type,t!==null&&e.stateNode!=null)iv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return jt(e),null}if(t=Cr(ei.current),Co(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[qa]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Ma.length;r++)lt(Ma[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":hh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":mh(i,s),lt("invalid",i)}Xu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ro(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ro(i.textContent,o,t),r=["children",""+o]):Oa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&lt("scroll",i)}switch(n){case"input":xo(i),ph(i,s,!0);break;case"textarea":xo(i),gh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Qn]=e,t[qa]=i,nv(t,e,!1,!1),e.stateNode=t;e:{switch(a=qu(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ma.length;r++)lt(Ma[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":hh(t,i),r=Hu(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":mh(t,i),r=Wu(t,i),lt("invalid",t);break;default:r=i}Xu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Ug(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ng(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ka(t,l):typeof l=="number"&&ka(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&Kd(t,s,l,a))}switch(n){case"input":xo(t),ph(t,i,!1);break;case"textarea":xo(t),gh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)rv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Cr(Ya.current),Cr(ei.current),Co(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Ro(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ro(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return jt(e),null;case 13:if(dt(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&xn!==null&&e.mode&1&&!(e.flags&128))M0(),ks(),e.flags|=98560,s=!1;else if(s=Co(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Qn]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Gn!==null&&(Rd(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Lt===0&&(Lt=3):Nf())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return zs(),xd(t,e),t===null&&ja(e.stateNode.containerInfo),jt(e),null;case 10:return gf(e.type._context),jt(e),null;case 17:return dn(e.type)&&bl(),jt(e),null;case 19:if(dt(vt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)da(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Fl(t),a!==null){for(e.flags|=128,da(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Gs&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!mt)return jt(e),null}else 2*wt()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=vt.current,ot(vt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Df(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function Iy(t,e){switch(ff(e),e.tag){case 1:return dn(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),dt(un),dt(Zt),Sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return yf(e),null;case 13:if(dt(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(vt),null;case 4:return zs(),null;case 10:return gf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var Lo=!1,$t=!1,Uy=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function yd(t,e,n){try{n()}catch(i){St(t,e,i)}}var sp=!1;function Fy(t,e){if(id=Tl,t=c0(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rd={focusedElem:t,selectionRange:n},Tl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,p=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:zn(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){St(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return x=sp,sp=!1,x}function La(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&yd(e,n,s)}r=r.next}while(r!==i)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sv(t){var e=t.alternate;e!==null&&(t.alternate=null,sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[qa],delete e[od],delete e[_y],delete e[xy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function av(t){return t.tag===5||t.tag===3||t.tag===4}function ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(i!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}var Bt=null,Hn=!1;function Ci(t,e,n){for(n=n.child;n!==null;)ov(t,e,n),n=n.sibling}function ov(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:$t||Es(n,e);case 6:var i=Bt,r=Hn;Bt=null,Ci(t,e,n),Bt=i,Hn=r,Bt!==null&&(Hn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Hn?(t=Bt,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),Ga(t)):Xc(Bt,n.stateNode));break;case 4:i=Bt,r=Hn,Bt=n.stateNode.containerInfo,Hn=!0,Ci(t,e,n),Bt=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&yd(n,e,a),r=r.next}while(r!==i)}Ci(t,e,n);break;case 1:if(!$t&&(Es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){St(n,e,o)}Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Ci(t,e,n),$t=i):Ci(t,e,n);break;default:Ci(t,e,n)}}function op(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Uy),e.forEach(function(i){var r=jy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,Hn=!1;break e;case 3:Bt=o.stateNode.containerInfo,Hn=!0;break e;case 4:Bt=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(Bt===null)throw Error(oe(160));ov(s,a,r),Bt=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lv(e,t),e=e.sibling}function lv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Yn(t),i&4){try{La(3,t,t.return),dc(3,t)}catch(_){St(t,t.return,_)}try{La(5,t,t.return)}catch(_){St(t,t.return,_)}}break;case 1:Fn(e,t),Yn(t),i&512&&n!==null&&Es(n,n.return);break;case 5:if(Fn(e,t),Yn(t),i&512&&n!==null&&Es(n,n.return),t.flags&32){var r=t.stateNode;try{ka(r,"")}catch(_){St(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Pg(r,s),qu(o,a);var c=qu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Ug(r,f):d==="dangerouslySetInnerHTML"?Ng(r,f):d==="children"?ka(r,f):Kd(r,d,f,c)}switch(o){case"input":Gu(r,s);break;case"textarea":Lg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Rs(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[qa]=s}catch(_){St(t,t.return,_)}}break;case 6:if(Fn(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){St(t,t.return,_)}}break;case 3:if(Fn(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(_){St(t,t.return,_)}break;case 4:Fn(e,t),Yn(t);break;case 13:Fn(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Pf=wt())),i&4&&op(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||d,Fn(e,t),$t=c):Fn(e,t),Yn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ye=t,d=t.child;d!==null;){for(f=ye=d;ye!==null;){switch(h=ye,m=h.child,h.tag){case 0:case 11:case 14:case 15:La(4,h,h.return);break;case 1:Es(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){St(i,n,_)}}break;case 5:Es(h,h.return);break;case 22:if(h.memoizedState!==null){cp(f);continue}}m!==null?(m.return=h,ye=m):cp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Ig("display",a))}catch(_){St(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){St(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),Yn(t),i&4&&op(t);break;case 21:break;default:Fn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(av(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ka(r,""),i.flags&=-33);var s=ap(t);Ed(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ap(t);Md(t,o,a);break;default:throw Error(oe(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Oy(t,e,n){ye=t,cv(t)}function cv(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Lo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||$t;o=Lo;var c=$t;if(Lo=a,($t=l)&&!c)for(ye=r;ye!==null;)a=ye,l=a.child,a.tag===22&&a.memoizedState!==null?up(r):l!==null?(l.return=a,ye=l):up(r);for(;s!==null;)ye=s,cv(s),s=s.sibling;ye=r,Lo=o,$t=c}lp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):lp(t)}}function lp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}$t||e.flags&512&&Sd(e)}catch(h){St(e,e.return,h)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function cp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function up(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Sd(e)}catch(l){St(e,s,l)}break;case 5:var a=e.return;try{Sd(e)}catch(l){St(e,a,l)}}}catch(l){St(e,e.return,l)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var ky=Math.ceil,Bl=Ai.ReactCurrentDispatcher,Cf=Ai.ReactCurrentOwner,Dn=Ai.ReactCurrentBatchConfig,tt=0,kt=null,At=null,zt=0,vn=0,ws=lr(0),Lt=0,Ja=null,zr=0,fc=0,bf=0,Da=null,on=null,Pf=0,Gs=1/0,pi=null,zl=!1,wd=null,Ki=null,Do=!1,Hi=null,Hl=0,Na=0,Td=null,ml=-1,gl=0;function nn(){return tt&6?wt():ml!==-1?ml:ml=wt()}function Zi(t){return t.mode&1?tt&2&&zt!==0?zt&-zt:Sy.transition!==null?(gl===0&&(gl=qg()),gl):(t=rt,t!==0||(t=window.event,t=t===void 0?16:e0(t.type)),t):1}function qn(t,e,n,i){if(50<Na)throw Na=0,Td=null,Error(oe(185));ao(t,n,i),(!(tt&2)||t!==kt)&&(t===kt&&(!(tt&2)&&(fc|=n),Lt===4&&ki(t,zt)),fn(t,i),n===1&&tt===0&&!(e.mode&1)&&(Gs=wt()+500,lc&&cr()))}function fn(t,e){var n=t.callbackNode;Sx(t,e);var i=wl(t,t===kt?zt:0);if(i===0)n!==null&&xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&xh(n),e===1)t.tag===0?yy(dp.bind(null,t)):x0(dp.bind(null,t)),gy(function(){!(tt&6)&&cr()}),n=null;else{switch($g(i)){case 1:n=tf;break;case 4:n=jg;break;case 16:n=El;break;case 536870912:n=Xg;break;default:n=El}n=vv(n,uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uv(t,e){if(ml=-1,gl=0,tt&6)throw Error(oe(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=wl(t,t===kt?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gl(t,i);else{e=i;var r=tt;tt|=2;var s=fv();(kt!==t||zt!==e)&&(pi=null,Gs=wt()+500,Lr(t,e));do try{Hy();break}catch(o){dv(t,o)}while(!0);mf(),Bl.current=s,tt=r,At!==null?e=0:(kt=null,zt=0,e=Lt)}if(e!==0){if(e===2&&(r=Qu(t),r!==0&&(i=r,e=Ad(t,r))),e===1)throw n=Ja,Lr(t,0),ki(t,i),fn(t,wt()),n;if(e===6)ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!By(r)&&(e=Gl(t,i),e===2&&(s=Qu(t),s!==0&&(i=s,e=Ad(t,s))),e===1))throw n=Ja,Lr(t,0),ki(t,i),fn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:yr(t,on,pi);break;case 3:if(ki(t,i),(i&130023424)===i&&(e=Pf+500-wt(),10<e)){if(wl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(yr.bind(null,t,on,pi),e);break}yr(t,on,pi);break;case 4:if(ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Xn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ky(i/1960))-i,10<i){t.timeoutHandle=ad(yr.bind(null,t,on,pi),i);break}yr(t,on,pi);break;case 5:yr(t,on,pi);break;default:throw Error(oe(329))}}}return fn(t,wt()),t.callbackNode===n?uv.bind(null,t):null}function Ad(t,e){var n=Da;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Gl(t,e),t!==2&&(e=on,on=n,e!==null&&Rd(e)),t}function Rd(t){on===null?on=t:on.push.apply(on,t)}function By(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ki(t,e){for(e&=~bf,e&=~fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function dp(t){if(tt&6)throw Error(oe(327));Ds();var e=wl(t,0);if(!(e&1))return fn(t,wt()),null;var n=Gl(t,e);if(t.tag!==0&&n===2){var i=Qu(t);i!==0&&(e=i,n=Ad(t,i))}if(n===1)throw n=Ja,Lr(t,0),ki(t,e),fn(t,wt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,on,pi),fn(t,wt()),null}function Lf(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(Gs=wt()+500,lc&&cr())}}function Hr(t){Hi!==null&&Hi.tag===0&&!(tt&6)&&Ds();var e=tt;tt|=1;var n=Dn.transition,i=rt;try{if(Dn.transition=null,rt=1,t)return t()}finally{rt=i,Dn.transition=n,tt=e,!(tt&6)&&cr()}}function Df(){vn=ws.current,dt(ws)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,my(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(ff(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bl();break;case 3:zs(),dt(un),dt(Zt),Sf();break;case 5:yf(i);break;case 4:zs();break;case 13:dt(vt);break;case 19:dt(vt);break;case 10:gf(i.type._context);break;case 22:case 23:Df()}n=n.return}if(kt=t,At=t=Qi(t.current,null),zt=vn=e,Lt=0,Ja=null,bf=fc=zr=0,on=Da=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Rr=null}return t}function dv(t,e){do{var n=At;try{if(mf(),fl.current=kl,Ol){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ol=!1}if(Br=0,Ot=bt=_t=null,Pa=!1,Ka=0,Cf.current=null,n===null||n.return===null){Lt=1,Ja=e,At=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=zt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Qh(a);if(m!==null){m.flags&=-257,Jh(m,a,o,s,e),m.mode&1&&Zh(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Zh(s,c,e),Nf();break e}l=Error(oe(426))}}else if(mt&&o.mode&1){var p=Qh(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Jh(p,a,o,s,e),hf(Hs(l,o));break e}}s=l=Hs(l,o),Lt!==4&&(Lt=2),Da===null?Da=[s]:Da.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=$0(s,l,e);jh(s,u);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ki===null||!Ki.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Y0(s,o,e);jh(s,y);break e}}s=s.return}while(s!==null)}pv(n)}catch(P){e=P,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function fv(){var t=Bl.current;return Bl.current=kl,t===null?kl:t}function Nf(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),kt===null||!(zr&268435455)&&!(fc&268435455)||ki(kt,zt)}function Gl(t,e){var n=tt;tt|=2;var i=fv();(kt!==t||zt!==e)&&(pi=null,Lr(t,e));do try{zy();break}catch(r){dv(t,r)}while(!0);if(mf(),tt=n,Bl.current=i,At!==null)throw Error(oe(261));return kt=null,zt=0,Lt}function zy(){for(;At!==null;)hv(At)}function Hy(){for(;At!==null&&!fx();)hv(At)}function hv(t){var e=gv(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?pv(t):At=e,Cf.current=null}function pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Iy(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,At=null;return}}else if(n=Ny(n,e,vn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Lt===0&&(Lt=5)}function yr(t,e,n){var i=rt,r=Dn.transition;try{Dn.transition=null,rt=1,Gy(t,e,n,i)}finally{Dn.transition=r,rt=i}return null}function Gy(t,e,n,i){do Ds();while(Hi!==null);if(tt&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Mx(t,s),t===kt&&(At=kt=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Do||(Do=!0,vv(El,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=rt;rt=1;var o=tt;tt|=4,Cf.current=null,Fy(t,n),lv(n,t),ly(rd),Tl=!!id,rd=id=null,t.current=n,Oy(n),hx(),tt=o,rt=a,Dn.transition=s}else t.current=n;if(Do&&(Do=!1,Hi=t,Hl=r),s=t.pendingLanes,s===0&&(Ki=null),gx(n.stateNode),fn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zl)throw zl=!1,t=wd,wd=null,t;return Hl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===Td?Na++:(Na=0,Td=t):Na=0,cr(),null}function Ds(){if(Hi!==null){var t=$g(Hl),e=Dn.transition,n=rt;try{if(Dn.transition=null,rt=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,Hl=0,tt&6)throw Error(oe(331));var r=tt;for(tt|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ye=c;ye!==null;){var d=ye;switch(d.tag){case 0:case 11:case 15:La(8,d,s)}var f=d.child;if(f!==null)f.return=d,ye=f;else for(;ye!==null;){d=ye;var h=d.sibling,m=d.return;if(sv(d),d===c){ye=null;break}if(h!==null){h.return=m,ye=h;break}ye=m}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:La(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ye=u;break e}ye=s.return}}var g=t.current;for(ye=g;ye!==null;){a=ye;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ye=v;else e:for(a=g;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:dc(9,o)}}catch(P){St(o,o.return,P)}if(o===a){ye=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ye=y;break e}ye=o.return}}if(tt=r,cr(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(ic,t)}catch{}i=!0}return i}finally{rt=n,Dn.transition=e}}return!1}function fp(t,e,n){e=Hs(n,e),e=$0(t,e,1),t=Yi(t,e,1),e=nn(),t!==null&&(ao(t,1,e),fn(t,e))}function St(t,e,n){if(t.tag===3)fp(t,t,n);else for(;e!==null;){if(e.tag===3){fp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Hs(n,t),t=Y0(e,t,1),e=Yi(e,t,1),t=nn(),e!==null&&(ao(e,1,t),fn(e,t));break}}e=e.return}}function Vy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(zt&n)===n&&(Lt===4||Lt===3&&(zt&130023424)===zt&&500>wt()-Pf?Lr(t,0):bf|=n),fn(t,e)}function mv(t,e){e===0&&(t.mode&1?(e=Mo,Mo<<=1,!(Mo&130023424)&&(Mo=4194304)):e=1);var n=nn();t=Ei(t,e),t!==null&&(ao(t,e,n),fn(t,n))}function Wy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mv(t,n)}function jy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),mv(t,n)}var gv;gv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,Dy(t,e,n);cn=!!(t.flags&131072)}else cn=!1,mt&&e.flags&1048576&&y0(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pl(t,e),t=e.pendingProps;var r=Os(e,Zt.current);Ls(e,n),r=Ef(null,e,i,t,r,n);var s=wf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,Pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_f(e),r.updater=uc,e.stateNode=r,r._reactInternals=e,hd(e,i,t,n),e=gd(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&df(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qy(i),t=zn(i,t),r){case 0:e=md(null,e,i,t,n);break e;case 1:e=np(null,e,i,t,n);break e;case 11:e=ep(null,e,i,t,n);break e;case 14:e=tp(null,e,i,zn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),np(t,e,i,r,n);case 3:e:{if(J0(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,A0(t,e),Ul(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(oe(423)),e),e=ip(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(oe(424)),e),e=ip(t,e,i,n,r);break e}else for(xn=$i(e.stateNode.containerInfo.firstChild),yn=e,mt=!0,Gn=null,n=w0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=wi(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return R0(e),t===null&&ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,sd(i,r)?a=null:s!==null&&sd(i,s)&&(e.flags|=32),Q0(t,e),en(t,e,a,n),e.child;case 6:return t===null&&ud(e),null;case 13:return ev(t,e,n);case 4:return xf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bs(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),ep(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ot(Nl,i._currentValue),i._currentValue=a,s!==null)if($n(s.value,a)){if(s.children===r.children&&!un.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),dd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=Nn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),tp(t,e,i,r,n);case 15:return K0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),pl(t,e),e.tag=1,dn(i)?(t=!0,Pl(e)):t=!1,Ls(e,n),q0(e,i,r),hd(e,i,r,n),gd(null,e,i,!0,t,n);case 19:return tv(t,e,n);case 22:return Z0(t,e,n)}throw Error(oe(156,e.tag))};function vv(t,e){return Wg(t,e)}function Xy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Xy(t,e,n,i)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qy(t){if(typeof t=="function")return If(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qd)return 11;if(t===Jd)return 14}return 2}function Qi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")If(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ps:return Dr(n.children,r,s,e);case Zd:a=8,r|=8;break;case Ou:return t=Ln(12,n,e,r|2),t.elementType=Ou,t.lanes=s,t;case ku:return t=Ln(13,n,e,r),t.elementType=ku,t.lanes=s,t;case Bu:return t=Ln(19,n,e,r),t.elementType=Bu,t.lanes=s,t;case Rg:return hc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tg:a=10;break e;case Ag:a=9;break e;case Qd:a=11;break e;case Jd:a=14;break e;case Ui:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Dr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function hc(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=Rg,t.lanes=n,t.stateNode={isHidden:!1},t}function eu(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function tu(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $y(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Uf(t,e,n,i,r,s,a,o,l){return t=new $y(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(s),t}function Yy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function _v(t){if(!t)return rr;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(dn(n))return _0(t,n,e)}return e}function xv(t,e,n,i,r,s,a,o,l){return t=Uf(n,i,!0,t,r,s,a,o,l),t.context=_v(null),n=t.current,i=nn(),r=Zi(n),s=yi(i,r),s.callback=e??null,Yi(n,s,r),t.current.lanes=r,ao(t,r,i),fn(t,i),t}function pc(t,e,n,i){var r=e.current,s=nn(),a=Zi(r);return n=_v(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,a),t!==null&&(qn(t,r,a,s),dl(t,r,a)),a}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ff(t,e){hp(t,e),(t=t.alternate)&&hp(t,e)}function Ky(){return null}var yv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}mc.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));pc(t,e,null,null)};mc.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){pc(null,t,null,null)}),e[Mi]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Oi.length&&e!==0&&e<Oi[n].priority;n++);Oi.splice(n,0,t),n===0&&Jg(t)}};function kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pp(){}function Zy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vl(a);s.call(c)}}var a=xv(e,i,t,0,null,!1,!1,"",pp);return t._reactRootContainer=a,t[Mi]=a.current,ja(t.nodeType===8?t.parentNode:t),Hr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Vl(l);o.call(c)}}var l=Uf(t,0,!1,null,null,!1,!1,"",pp);return t._reactRootContainer=l,t[Mi]=l.current,ja(t.nodeType===8?t.parentNode:t),Hr(function(){pc(e,l,n,i)}),l}function vc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Vl(a);o.call(l)}}pc(e,a,t,r)}else a=Zy(n,e,t,r,i);return Vl(a)}Yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Sa(e.pendingLanes);n!==0&&(nf(e,n|1),fn(e,wt()),!(tt&6)&&(Gs=wt()+500,cr()))}break;case 13:Hr(function(){var i=Ei(t,1);if(i!==null){var r=nn();qn(i,t,1,r)}}),Ff(t,1)}};rf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=nn();qn(e,t,134217728,n)}Ff(t,134217728)}};Kg=function(t){if(t.tag===13){var e=Zi(t),n=Ei(t,e);if(n!==null){var i=nn();qn(n,t,e,i)}Ff(t,e)}};Zg=function(){return rt};Qg=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Yu=function(t,e,n){switch(e){case"input":if(Gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=oc(i);if(!r)throw Error(oe(90));bg(i),Gu(i,r)}}}break;case"textarea":Lg(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};kg=Lf;Bg=Hr;var Qy={usingClientEntryPoint:!1,Events:[lo,_s,oc,Fg,Og,Lf]},fa={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jy={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Gg(t),t===null?null:t.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||Ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{ic=No.inject(Jy),Jn=No}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qy;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(e))throw Error(oe(200));return Yy(t,e,null,n)};Mn.createRoot=function(t,e){if(!kf(t))throw Error(oe(299));var n=!1,i="",r=yv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Uf(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,ja(t.nodeType===8?t.parentNode:t),new Of(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Gg(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Hr(t)};Mn.hydrate=function(t,e,n){if(!gc(e))throw Error(oe(200));return vc(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!kf(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=yv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=xv(e,null,t,1,n??null,r,!1,s,a),t[Mi]=e.current,ja(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mc(e)};Mn.render=function(t,e,n){if(!gc(e))throw Error(oe(200));return vc(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!gc(t))throw Error(oe(40));return t._reactRootContainer?(Hr(function(){vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};Mn.unstable_batchedUpdates=Lf;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return vc(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function Sv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sv)}catch(t){console.error(t)}}Sv(),Sg.exports=Mn;var eS=Sg.exports,Mv,mp=eS;Mv=mp.createRoot,mp.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eo(){return eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},eo.apply(this,arguments)}var Gi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gi||(Gi={}));const gp="popstate";function tS(t){t===void 0&&(t={});function e(r,s){let{pathname:a="/",search:o="",hash:l=""}=Wr(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Cd("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof s=="string"?s:Wl(s))}function i(r,s){Bf(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return iS(e,n,i,t)}function Rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Bf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nS(){return Math.random().toString(36).substr(2,8)}function vp(t,e){return{usr:t.state,key:t.key,idx:e}}function Cd(t,e,n,i){return n===void 0&&(n=null),eo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Wr(e):e,{state:n,key:e&&e.key||i||nS()})}function Wl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Wr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function iS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Gi.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(eo({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=Gi.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:o,location:_.location,delta:u})}function h(p,u){o=Gi.Push;let g=Cd(_.location,p,u);n&&n(g,p),c=d()+1;let v=vp(g,c),y=_.createHref(g);try{a.pushState(v,"",y)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(y)}s&&l&&l({action:o,location:_.location,delta:1})}function m(p,u){o=Gi.Replace;let g=Cd(_.location,p,u);n&&n(g,p),c=d();let v=vp(g,c),y=_.createHref(g);a.replaceState(v,"",y),s&&l&&l({action:o,location:_.location,delta:0})}function x(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:Wl(p);return g=g.replace(/ $/,"%20"),Rt(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let _={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(gp,f),l=p,()=>{r.removeEventListener(gp,f),l=null}},createHref(p){return e(r,p)},createURL:x,encodeLocation(p){let u=x(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:m,go(p){return a.go(p)}};return _}var _p;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_p||(_p={}));function rS(t,e,n){return n===void 0&&(n="/"),sS(t,e,n)}function sS(t,e,n,i){let r=typeof e=="string"?Wr(e):e,s=zf(r.pathname||"/",n);if(s==null)return null;let a=Ev(t);aS(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=_S(s);o=mS(a[l],c)}return o}function Ev(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Rt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Ji([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Rt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ev(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:hS(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of wv(s.path))r(s,a,l)}),e}function wv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=wv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function aS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const oS=/^:[\w-]+$/,lS=3,cS=2,uS=1,dS=10,fS=-2,xp=t=>t==="*";function hS(t,e){let n=t.split("/"),i=n.length;return n.some(xp)&&(i+=fS),e&&(i+=cS),n.filter(r=>!xp(r)).reduce((r,s)=>r+(oS.test(s)?lS:s===""?uS:dS),i)}function pS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function mS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=gS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Ji([s,f.pathname]),pathnameBase:MS(Ji([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Ji([s,f.pathnameBase]))}return a}function gS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=vS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:m}=d;if(h==="*"){let _=o[f]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const x=o[f];return m&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function vS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Bf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function _S(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function zf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function xS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Wr(t):t;return{pathname:n?n.startsWith("/")?n:yS(n,e):e,search:ES(i),hash:wS(r)}}function yS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function nu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function SS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Tv(t,e){let n=SS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Av(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Wr(t):(r=eo({},t),Rt(!r.pathname||!r.pathname.includes("?"),nu("?","pathname","search",r)),Rt(!r.pathname||!r.pathname.includes("#"),nu("#","pathname","hash",r)),Rt(!r.search||!r.search.includes("#"),nu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=xS(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Ji=t=>t.join("/").replace(/\/\/+/g,"/"),MS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ES=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function TS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Rv=["post","put","patch","delete"];new Set(Rv);const AS=["get",...Rv];new Set(AS);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},to.apply(this,arguments)}const Hf=Z.createContext(null),RS=Z.createContext(null),jr=Z.createContext(null),_c=Z.createContext(null),ur=Z.createContext({outlet:null,matches:[],isDataRoute:!1}),Cv=Z.createContext(null);function CS(t,e){let{relative:n}=e===void 0?{}:e;uo()||Rt(!1);let{basename:i,navigator:r}=Z.useContext(jr),{hash:s,pathname:a,search:o}=Lv(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Ji([i,a])),r.createHref({pathname:l,search:o,hash:s})}function uo(){return Z.useContext(_c)!=null}function dr(){return uo()||Rt(!1),Z.useContext(_c).location}function bv(t){Z.useContext(jr).static||Z.useLayoutEffect(t)}function xc(){let{isDataRoute:t}=Z.useContext(ur);return t?HS():bS()}function bS(){uo()||Rt(!1);let t=Z.useContext(Hf),{basename:e,future:n,navigator:i}=Z.useContext(jr),{matches:r}=Z.useContext(ur),{pathname:s}=dr(),a=JSON.stringify(Tv(r,n.v7_relativeSplatPath)),o=Z.useRef(!1);return bv(()=>{o.current=!0}),Z.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=Av(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ji([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,a,s,t])}function Pv(){let{matches:t}=Z.useContext(ur),e=t[t.length-1];return e?e.params:{}}function Lv(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=Z.useContext(jr),{matches:r}=Z.useContext(ur),{pathname:s}=dr(),a=JSON.stringify(Tv(r,i.v7_relativeSplatPath));return Z.useMemo(()=>Av(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function PS(t,e){return LS(t,e)}function LS(t,e,n,i){uo()||Rt(!1);let{navigator:r}=Z.useContext(jr),{matches:s}=Z.useContext(ur),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=dr(),d;if(e){var f;let p=typeof e=="string"?Wr(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||Rt(!1),d=p}else d=c;let h=d.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let x=rS(t,{pathname:m}),_=FS(x&&x.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:Ji([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Ji([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&_?Z.createElement(_c.Provider,{value:{location:to({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Gi.Pop}},_):_}function DS(){let t=zS(),e=TS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),n?Z.createElement("pre",{style:r},n):null,null)}const NS=Z.createElement(DS,null);class IS extends Z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?Z.createElement(ur.Provider,{value:this.props.routeContext},Z.createElement(Cv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function US(t){let{routeContext:e,match:n,children:i}=t,r=Z.useContext(Hf);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),Z.createElement(ur.Provider,{value:e},i)}function FS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||Rt(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:m}=n,x=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,h)=>{let m,x=!1,_=null,p=null;n&&(m=o&&f.route.id?o[f.route.id]:void 0,_=f.route.errorElement||NS,l&&(c<0&&h===0?(GS("route-fallback"),x=!0,p=null):c===h&&(x=!0,p=f.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,h+1)),g=()=>{let v;return m?v=_:x?v=p:f.route.Component?v=Z.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,Z.createElement(US,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?Z.createElement(IS,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var Dv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Dv||{}),Nv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Nv||{});function OS(t){let e=Z.useContext(Hf);return e||Rt(!1),e}function kS(t){let e=Z.useContext(RS);return e||Rt(!1),e}function BS(t){let e=Z.useContext(ur);return e||Rt(!1),e}function Iv(t){let e=BS(),n=e.matches[e.matches.length-1];return n.route.id||Rt(!1),n.route.id}function zS(){var t;let e=Z.useContext(Cv),n=kS(),i=Iv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function HS(){let{router:t}=OS(Dv.UseNavigateStable),e=Iv(Nv.UseNavigateStable),n=Z.useRef(!1);return bv(()=>{n.current=!0}),Z.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,to({fromRouteId:e},s)))},[t,e])}const yp={};function GS(t,e,n){yp[t]||(yp[t]=!0)}const Sp={};function VS(t,e){Sp[e]||(Sp[e]=!0,console.warn(e))}const Mp=(t,e,n)=>VS(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function WS(t,e){t!=null&&t.v7_startTransition||Mp("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),t!=null&&t.v7_relativeSplatPath||Mp("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Sr(t){Rt(!1)}function jS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Gi.Pop,navigator:s,static:a=!1,future:o}=t;uo()&&Rt(!1);let l=e.replace(/^\/*/,"/"),c=Z.useMemo(()=>({basename:l,navigator:s,static:a,future:to({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Wr(i));let{pathname:d="/",search:f="",hash:h="",state:m=null,key:x="default"}=i,_=Z.useMemo(()=>{let p=zf(d,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:x},navigationType:r}},[l,d,f,h,m,x,r]);return _==null?null:Z.createElement(jr.Provider,{value:c},Z.createElement(_c.Provider,{children:n,value:_}))}function XS(t){let{children:e,location:n}=t;return PS(bd(e),n)}new Promise(()=>{});function bd(t,e){e===void 0&&(e=[]);let n=[];return Z.Children.forEach(t,(i,r)=>{if(!Z.isValidElement(i))return;let s=[...e,r];if(i.type===Z.Fragment){n.push.apply(n,bd(i.props.children,s));return}i.type!==Sr&&Rt(!1),!i.props.index||!i.props.children||Rt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=bd(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pd(){return Pd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Pd.apply(this,arguments)}function qS(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function $S(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function YS(t,e){return t.button===0&&(!e||e==="_self")&&!$S(t)}const KS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ZS="6";try{window.__reactRouterVersion=ZS}catch{}const QS="startTransition",Ep=V_[QS];function JS(t){let{basename:e,children:n,future:i,window:r}=t,s=Z.useRef();s.current==null&&(s.current=tS({window:r,v5Compat:!0}));let a=s.current,[o,l]=Z.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=Z.useCallback(f=>{c&&Ep?Ep(()=>l(f)):l(f)},[l,c]);return Z.useLayoutEffect(()=>a.listen(d),[a,d]),Z.useEffect(()=>WS(i),[i]),Z.createElement(jS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const eM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ln=Z.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,h=qS(e,KS),{basename:m}=Z.useContext(jr),x,_=!1;if(typeof c=="string"&&tM.test(c)&&(x=c,eM))try{let v=new URL(window.location.href),y=c.startsWith("//")?new URL(v.protocol+c):new URL(c),P=zf(y.pathname,m);y.origin===v.origin&&P!=null?c=P+y.search+y.hash:_=!0}catch{}let p=CS(c,{relative:r}),u=nM(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function g(v){i&&i(v),v.defaultPrevented||u(v)}return Z.createElement("a",Pd({},h,{href:x||p,onClick:_||s?i:g,ref:n,target:l}))});var wp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(wp||(wp={}));var Tp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Tp||(Tp={}));function nM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=xc(),c=dr(),d=Lv(t,{relative:a});return Z.useCallback(f=>{if(YS(f,n)){f.preventDefault();let h=i!==void 0?i:Wl(c)===Wl(d);l(t,{replace:h,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}const iM={"1ere-annee":{label:"1ère année",periode:"2025 — 2026",blocs:[{matiere:"Atelier Pro — Développement Web",court:"Atelier",description:"HTML, CSS et gestion de projet (diagramme de Gantt) au fil des séances d'Atelier Professionnel.",competences:["HTML5","CSS3","Gestion de projet"],comptes_rendus:[{date:"2025-09-11",titre:"Rapport Atelier Pro n°1",fichier:"atelier-pro-rapport-1.pdf"},{date:"2025-09-17",titre:"TP HTML",fichier:"atelier-pro-tp-html.pdf"},{date:"2025-09-20",titre:"TP CSS",fichier:"atelier-pro-tp-css.pdf"},{date:"2025-10-02",titre:"HTML/CSS avancé (2)",fichier:"atelier-pro-html-css-avance-2.pdf"},{date:"2025-10-16",titre:"TP HTML & CSS avancé",fichier:"atelier-pro-tp-html-css-avance.pdf"},{date:"2026-05-17",titre:"Diagramme de Gantt",fichier:"atelier-pro-diagramme-gantt.pdf"}]},{matiere:"Beauvallet — Algorithmique Java",court:"Java",description:"Découverte de Java et exercices d'algorithmique : quiz, mini-jeux et manipulation d'objets.",competences:["Java","Algorithmique","Programmation orientée objet"],comptes_rendus:[{date:"2025-09-11",titre:"Rapport TP n°1",fichier:"beauvallet-rapport-1.pdf"},{date:"2025-09-14",titre:"Compte rendu Java",fichier:"beauvallet-cr-java.pdf"},{date:"2025-09-22",titre:"Compte rendu Java 2",fichier:"beauvallet-cr-java-2.pdf"},{date:"2025-10-06",titre:"Compte rendu Shifumi",fichier:"beauvallet-cr-shifumi.pdf"},{date:"2025-10-14",titre:"TP Java 05",fichier:"beauvallet-tp-java-05.pdf"},{date:"2025-11-26",titre:"TP07 — Bataille navale",fichier:"beauvallet-tp07-bataille-navale.pdf"}]},{matiere:"Semestre 2 SLAM — POO, BDD & UML",court:"SLAM",description:"Accès aux données (JDBC), SQL avancé, modélisation UML et une application JavaFX complète.",competences:["JDBC","SQL avancé","UML","JavaFX"],comptes_rendus:[{date:"2026-01-26",titre:"TD3 — JDBC",fichier:"slam-s2-td3-jdbc.pdf"},{date:"2026-02-25",titre:"Introduction UML",fichier:"slam-s2-intro-uml.pdf"},{date:"2026-03-01",titre:"TP2 — Diagramme de classe",fichier:"slam-s2-tp2-diagramme-classe.pdf"},{date:"2026-03-17",titre:"TD7 — Banque",fichier:"slam-s2-td7-banque.pdf"},{date:"2026-04-27",titre:"SQL avancé",fichier:"slam-s2-sql-avance.pdf"},{date:"2026-05-21",titre:"TP8 — CarDealer & JavaFX",fichier:"slam-s2-tp8-cardealer-javafx.pdf"}]},{matiere:"B1 Semestre 2 — BDD & PHP",court:"PHP",description:"Requêtes SQL, droits utilisateurs, bases du PHP côté serveur et un projet complet de gestion de films.",competences:["SQL","PHP","Gestion des droits utilisateurs"],comptes_rendus:[{date:"2026-03-04",titre:"BDD — Leclerc",fichier:"b1-s2-bdd-leclerc.pdf"},{date:"2026-03-04",titre:"BDD — Zoo",fichier:"b1-s2-bdd-zoo.pdf"},{date:"2026-03-24",titre:"Gestion des users / PHP",fichier:"b1-s2-gestion-users-php.pdf"},{date:"2026-03-31",titre:"PHP 1",fichier:"b1-s2-php-1.pdf"},{date:"2026-05-05",titre:"PHP 2",fichier:"b1-s2-php-2.pdf"},{date:"2026-05-05",titre:"PHP 3",fichier:"b1-s2-php-3.pdf"},{date:"2026-05-17",titre:"PHP 4",fichier:"b1-s2-php-4.pdf"},{date:"2026-05-17",titre:"PHP 5",fichier:"b1-s2-php-5.pdf"},{date:"2026-05-21",titre:"Projet — Gestion de films",fichier:"b1-s2-gestion-films.pdf"},{date:"2026-05-21",titre:"TP Droit SQL",fichier:"b1-s2-tp-droit-sql.pdf"}]},{matiere:"Sotoca — Systèmes & réseaux",court:"Réseaux",description:"Réseau, Active Directory, GPO, DHCP, Linux et maintenance matérielle sous Windows Server.",competences:["Windows Server","Active Directory","GPO","DHCP","Linux"],comptes_rendus:[{date:"2025-09-11",titre:"Rapport TP n°2",fichier:"sotoca-rapport-2.pdf"},{date:"2025-09-13",titre:"Capture d'écran (doc. utilisateur)",fichier:"sotoca-capture-ecran.pdf"},{date:"2025-09-13",titre:"Logiciels de diagnostic",fichier:"sotoca-logiciels-diagnostic.pdf"},{date:"2025-10-07",titre:"Commandes CMD",fichier:"sotoca-commandes-cmd.pdf"},{date:"2025-10-11",titre:"Serveur NAS",fichier:"sotoca-serveur-nas.pdf"},{date:"2025-10-14",titre:"TechCorp — ligne de commande",fichier:"sotoca-techcorp-ligne-commande.pdf"},{date:"2026-03-17",titre:"Active Directory",fichier:"sotoca-active-directory.pdf"},{date:"2026-05-10",titre:"Scénario Linux",fichier:"sotoca-scenario-linux.pdf"},{date:"2026-05-10",titre:"Connexion au domaine",fichier:"sotoca-connexion-domaine.pdf"},{date:"2026-05-17",titre:"Rôle DHCP",fichier:"sotoca-role-dhcp.pdf"},{date:"2026-05-20",titre:"Stratégies de groupe (GPO)",fichier:"sotoca-gpo.pdf"}]},{matiere:"Cybersécurité",court:"Cyber",description:"RGPD, audit de sécurité, chiffrement PGP et codage sécurisé face aux injections SQL.",competences:["RGPD","Audit de sécurité","Chiffrement PGP","Codage sécurisé"],comptes_rendus:[{date:"2025-10-02",titre:"Données personnelles",fichier:"cyber-donnees-personnelles.pdf"},{date:"2025-11-08",titre:"Étude PIA (RGPD)",fichier:"cyber-pia-rgpd.pdf"},{date:"2026-03-02",titre:"Veille sécurité",fichier:"cyber-veille-securite.pdf"},{date:"2026-03-08",titre:"Audit de sécurité",fichier:"cyber-audit-securite.pdf"},{date:"2026-03-08",titre:"Chiffrement PGP",fichier:"cyber-chiffrement-pgp.pdf"},{date:"2026-04-26",titre:"Deep Freeze",fichier:"cyber-deep-freeze.pdf"},{date:"2026-05-21",titre:"Codage sécurisé",fichier:"cyber-codage-securise.pdf"}]}]},"2de-annee":{label:"2de année",periode:"2026 — 2027",blocs:[{matiere:"Bloc 1 — Beauvallet",court:"PGI",description:"Progiciel de gestion intégré : exploitation d'une base de données Excel multi-feuilles pour un concessionnaire, puis étude de gestion d'un restaurant (charges, bilan, résultat).",competences:["PGI","Excel avancé","Analyse de gestion"],comptes_rendus:[{date:"2026-09-10",titre:"TD PGI — Concessionnaire Senghor",fichier:"pgi-td.pdf"},{date:"2026-09-10",titre:"PGI — fichier Excel",fichier:"PGI_exercice.xlsx"},{date:"2026-09-23",titre:"TD restaurant (SI7) — fichier Excel",fichier:"td-restaurant-si7.xlsx"}]},{matiere:"Bloc 2 — Beauvallet",court:"Apps",description:"Développement d'applications : plateforme de gestion d'événements en Symfony, prise en main de Flutter/Dart, persistance des données en PHP avec PDO, architecture MVC, initiation au PL/pgSQL, découverte de React et triggers PostgreSQL et MySQL.",competences:["Symfony","Flutter / Dart","PHP (PDO)","PL/pgSQL"],comptes_rendus:[{date:"2026-09-10",titre:"Compte rendu — Eventify (Symfony)",fichier:"eventify-compte-rendu.pdf"},{date:"2026-09-11",titre:"Installation de Flutter et Dart",fichier:"slam-b2-flutter-installation.pdf"},{date:"2026-09-16",titre:"TP PHP (PDO)",fichier:"slam-b2-tp-php-pdo.pdf"},{date:"2026-09-17",titre:"Initiation au PL/pgSQL",fichier:"slam-b2-pl-pgsql.pdf"},{date:"2026-09-17",titre:"TD3 — Architecture MVC (PHP)",fichier:"slam-b2-mvc-php-td3.pdf"},{date:"2026-09-17",titre:"TD4 — Architecture MVC en PHP",fichier:"slam-b2-mvc-php-td4.pdf"},{date:"2026-09-18",titre:"TP Flutter — Interface et thèmes",fichier:"slam-b2-flutter-interface.pdf"},{date:"2026-10-01",titre:"TP PHP 5 & 6 — Architecture MVC",fichier:"slam-b2-mvc-php-td5-6.pdf"},{date:"2026-10-02",titre:"Firebase — Firestore et Authentication",fichier:"slam-b2-firebase.pdf"},{date:"2026-10-16",titre:"TP — TRIGGERS 1 (PostgreSQL)",fichier:"slam-b2-triggers-1.pdf"},{date:"2026-11-05",titre:"TP1 React — Installation et découverte",fichier:"slam-b2-react-tp1.pdf"},{date:"2026-11-12",titre:"TP2 React — État, formulaires, API et routage",fichier:"slam-b2-react-tp2.pdf"},{date:"2026-11-13",titre:"TP — TRIGGERS 2 (MySQL)",fichier:"slam-b2-triggers-mysql.pdf"}]},{matiere:"Bloc 1 — Sotoca",court:"GLPI",description:"Patrimoine informatique et gestion de parc : inventaire, valorisation et helpdesk. Autoformation par MOOC : choix d'un parcours, planning de formation, suivi de l'avancement et bilan de compétences.",competences:["Gestion de parc informatique","GLPI","Helpdesk"],comptes_rendus:[{date:"2026-09-06",titre:"TP01 — Le patrimoine informatique",fichier:"patrimoine-informatique-tp01.pdf"},{date:"2026-09-13",titre:"TP02 — Veille sur GLPI",fichier:"glpi.pdf"},{date:"2026-09-16",titre:"MOOC TP1 — Découverte du MOOC et autoformation",fichier:"sotoca-mooc-tp1-decouverte.pdf"},{date:"2026-09-23",titre:"MOOC TP2 — Planning de formation",fichier:"sotoca-mooc-tp2-planning.pdf"},{date:"2026-09-30",titre:"MOOC TP3 — Suivi de la planification",fichier:"sotoca-mooc-tp3-suivi.pdf"},{date:"2026-10-07",titre:"MOOC TP4 — Bilan de compétences et plan d'action",fichier:"sotoca-mooc-tp4-bilan.pdf"},{date:"2026-10-07",titre:"MOOC TP4 — Bilan généré (document d'origine)",fichier:"sotoca-mooc-tp4-bilan-genere.pdf"},{date:"2026-11-22",titre:"TP05 — GLPI : gestion des incidents (Helpdesk)",fichier:"sotoca-b1-tp05-glpi-incidents.pdf"},{date:"2026-11-22",titre:"TP06 — GLPI : déploiement de logiciel",fichier:"sotoca-b1-tp06-glpi-deploiement.pdf"},{date:"2026-11-22",titre:"TP07 — GLPI : guide utilisateur et procédure de test",fichier:"sotoca-b1-tp07-glpi-guide-utilisateur.pdf"}]},{matiere:"Bloc 3 — Cybersécurité",court:"B3",description:"Mise en place d'un environnement d'analyse sous Kali Linux en machine virtuelle : installation de l'ISO, additions invité VirtualBox et mise à jour du système.",competences:[],comptes_rendus:[{date:"2026-09-15",titre:"TP1 — Kali Linux en machine virtuelle",fichier:"cyber-b3-tp1-kali.pdf"}]}]}},rM={sujet:"Intelligence artificielle & Santé",debut:"2025-11-11",maj:"2026-09-07",informations:37,mois:11,sources:25,frequence:"7-14 jours entre deux relevés"},sM=[{mois:"Septembre 2026",entrees:[{date:"2026-09-01",outil:"À préciser",source:"BusinessWire",url:"https://www.businesswire.com/news/home/20260901360645/en/Vara-Receives-World-First-CE-Certification-for-Autonomous-AI-in-Breast-Cancer-Screening",texte:"La medtech allemande Vara obtient la première certification CE au monde pour un système d'IA autonome de dépistage du cancer du sein, capable de classer une mammographie comme normale sans relecture par un radiologue."},{date:"2026-09-07",outil:"À préciser",source:"Insilico Medicine",url:"https://insilico.com/news/rnt0709261-rentosertib-proteomic-aging-clocks",texte:"Insilico Medicine publie dans Nature Biotechnology les résultats d'un essai sur le rentosertib, médicament dont la cible et la molécule ont toutes deux été conçues par IA, montrant un rajeunissement biologique de 3 à 4 ans."}]},{mois:"Août 2026",entrees:[{date:"2026-08-04",outil:"À préciser",source:"MIT News",url:"https://news.mit.edu/2026/medical-ai-assistance-benefits-vary-based-on-user-expertise-0804",texte:"Une étude du MIT montre qu'une IA de diagnostic dermatologique profite surtout aux non-experts, qui lui font trop confiance, alors que les cliniciens expérimentés résistent mieux à ses erreurs."},{date:"2026-08-11",outil:"À préciser",source:"PR Newswire",url:"https://www.prnewswire.com/news-releases/leica-biosystems-enables-faster-cancer-diagnoses-through-multiple-digital-pathology-fda-clearances-including-industry-first-ai-assisted-quality-control-software-302848503.html",texte:"La FDA autorise Aperio iQC DX de Leica Biosystems, premier logiciel de contrôle qualité assisté par IA en pathologie numérique : jusqu'à 24 % d'artefacts détectés en plus, temps de relecture réduit de 69 %."},{date:"2026-08-17",outil:"À préciser",source:"Nature Biomedical Engineering",url:"https://www.nature.com/articles/s41551-026-01764-x",texte:"Une équipe de recherche internationale publie ConceptCLIP dans Nature Biomedical Engineering, un modèle d'IA biomédical explicable entraîné sur 23 millions de triplets image-texte-concept, validé sur 78 jeux de données."},{date:"2026-08-20",outil:"À préciser",source:"JAMA Network Open",url:"https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2853099",texte:"Une étude de Stanford publiée dans JAMA Network Open montre qu'un outil d'IA intégré au dossier médical électronique repère les patients chirurgicaux à risque avec 94 % de sensibilité et 78 % de spécificité."}]},{mois:"Juillet 2026",entrees:[{date:"2026-07-04",outil:"À préciser",source:"NHS England",url:"https://www.england.nhs.uk/2026/07/nhs-accelerates-artificial-intelligence-rollout-to-cut-waiting-times-and-improve-care-for-millions/",texte:"Le NHS anglais généralise les logiciels de prise de notes par IA aux urgences : à l'hôpital St George's, le temps gagné permet à chaque soignant de voir un patient supplémentaire par service."},{date:"2026-07-15",outil:"À préciser",source:"OMS Europe",url:"https://www.who.int/europe/fr/news/item/15-07-2026-statement---govern-ai-in-health-before-the-gaps-become-irreversible",texte:"L'OMS Europe alerte : seuls 8 % des pays européens disposent d'une stratégie dédiée à l'IA en santé, alors que près des deux tiers l'utilisent déjà pour le diagnostic."},{date:"2026-07-23",outil:"À préciser",source:"TechCrunch",url:"https://techcrunch.com/2026/07/23/openai-makes-chatgpt-health-available-to-all-u-s-users/",texte:"OpenAI déploie ChatGPT Health pour tous les utilisateurs américains, une fonction reliée aux dossiers médicaux qui traite désormais 300 millions de requêtes de santé par semaine."}]},{mois:"Juin 2026",entrees:[{date:"2026-06-02",outil:"À préciser",source:"Microsoft (communiqué)",url:"https://news.microsoft.com/source/2026/06/02/mayo-clinic-and-microsoft-collaborate-to-develop-a-frontier-ai-model-for-healthcare/",texte:"Mayo Clinic et Microsoft annoncent un partenariat pour développer un modèle d'IA « frontière » dédié à la santé, dont la propriété reviendra à Mayo Clinic et qui sera déployé via la plateforme Azure Foundry."},{date:"2026-06-09",outil:"À préciser",source:"RSNA",url:"https://www.rsna.org/news/2026/june/ai-flags-breast-cancer-early",texte:"Une étude suédoise du Karolinska University Hospital (revue Radiology, plus de 88 000 mammographies) montre qu'une IA détecte des signes de cancer du sein jusqu'à 6 ans avant le diagnostic dans environ 20 % des cas confirmés."},{date:"2026-06-16",outil:"À préciser",source:"CNews",url:"https://www.cnews.fr/france/2026-06-16/alliance-sante-ia-quel-est-ce-projet-dhopital-augmente-qui-doit-revolutionner-la",texte:"Le CHU de Montpellier lance le projet « Alliance Santé IA », un hôpital augmenté par l'IA financé à hauteur de 14,9 millions d'euros dans le cadre du plan France 2030, testé par 200 utilisateurs pilotes."},{date:"2026-06-23",outil:"À préciser",source:"NewYork-Presbyterian",url:"https://www.nyp.org/news/ai-tool-developed-at-newyork-presbyterian-and-columbia-to-detect-hidden-heart-disease-receives-fda-approval",texte:"L'IA EchoNext (NewYork-Presbyterian/Columbia) obtient l'autorisation de la FDA pour détecter les maladies cardiaques structurelles via un simple ECG, avec 77 % de précision contre 64 % pour les cardiologues seuls."}]},{mois:"Mai 2026",entrees:[{date:"2026-05-03",outil:"À préciser",source:"TechCrunch",url:"https://techcrunch.com/2026/05/03/in-harvard-study-ai-offered-more-accurate-diagnoses-than-emergency-room-doctors/",texte:"Une étude de Harvard Medical School et du Beth Israel Deaconess Medical Center (revue Science) montre que le modèle d'IA o1 d'OpenAI pose un diagnostic exact ou très proche dans 67 % des cas aux urgences, contre 55 % et 50 % pour deux médecins."},{date:"2026-05-12",outil:"À préciser",source:"Nature Communications",url:"https://www.nature.com/articles/s41467-026-72960-1",texte:"Une étude de la Mayo Clinic publiée dans Nature Communications montre qu'un outil d'IA prédisant les admissions hospitalières depuis les urgences réduit la durée médiane de passage des patients de 12 minutes (-4 %) sur plus de 54 000 visites."}]},{mois:"Avril 2026",entrees:[{date:"2026-04-08",outil:"À préciser",source:"Anumana (communiqué)",url:"https://anumana.ai/anumana-receives-first-and-only-fda-clearance-for-ecg-ai-cardiac-amyloidosis-algorithm-using-a-standard-12-lead-ecg/",texte:"La FDA autorise l'algorithme ECG-IA d'Anumana, premier outil détectant l'amylose cardiaque via un simple électrocardiogramme à 12 dérivations, avec 78,9 % de sensibilité et 91,2 % de spécificité sur 25 525 patients."},{date:"2026-04-20",outil:"À préciser",source:"OMS Europe",url:"https://www.who.int/europe/news/item/20-04-2026-new-who-europe-report-provides-first-ever-snapshot-of-ai-in-health-care-across-european-union-member-states",texte:"Un rapport de l'OMS Europe révèle que près des trois quarts des pays de l'Union européenne utilisent déjà des diagnostics médicaux assistés par IA."},{date:"2026-04-29",outil:"À préciser",source:"Mayo Clinic News Network",url:"https://newsnetwork.mayoclinic.org/discussion/mayo-clinic-ai-detects-pancreatic-cancer-up-to-3-years-before-diagnosis-in-landmark-validation-study/",texte:"Une étude de la Mayo Clinic montre que son IA REDMOD détecte un cancer du pancréas dans 73 % des cas, en moyenne 16 mois avant le diagnostic clinique."}]},{mois:"Mars 2026",entrees:[{date:"2026-03-05",outil:"Google Alert",source:"who.int",url:"https://www.who.int/health-topics/artificial-intelligence",texte:"L'OMS rappelle que l'intelligence artificielle doit rester un outil d'aide à la décision et ne remplace pas les médecins."},{date:"2026-03-12",outil:"À préciser",source:"Fortune",url:"https://fortune.com/2026/03/12/microsoft-copilot-health-ai-medical-personal-health-data/",texte:"Microsoft lance Copilot Health, un assistant IA qui centralise les données de santé personnelles des utilisateurs à partir de plus de 50 000 prestataires de santé américains."},{date:"2026-03-24",outil:"À préciser",source:"MIT News",url:"https://news.mit.edu/2026/creating-humble-ai-0324",texte:"Des chercheurs du MIT présentent un cadre d'IA « humble » qui signale son incertitude dans les diagnostics médicaux au lieu de formuler des recommandations trop confiantes."}]},{mois:"Février 2026",entrees:[{date:"2026-02-03",outil:"Syft",source:"reuters.com",url:"https://www.reuters.com/business/healthcare-pharmaceuticals",texte:"Plusieurs entreprises développent des systèmes d'IA capables d'assister les chirurgiens pendant certaines opérations."},{date:"2026-02-10",outil:"Twitter",source:"nasa.gov",url:"https://www.nasa.gov/technology/artificial-intelligence",texte:"Des technologies d'IA développées pour l'espace sont aussi utilisées dans la recherche médicale pour analyser des données complexes."},{date:"2026-02-17",outil:"Google Alert",source:"weforum.org",url:"https://www.weforum.org/artificial-intelligence-healthcare",texte:"Les experts estiment que l'IA pourrait réduire les erreurs médicales en aidant à l'analyse des données cliniques."},{date:"2026-02-24",outil:"Syft",source:"reuters.com",url:"https://www.reuters.com/technology/ai-hospital-systems",texte:"Certains hôpitaux utilisent des algorithmes d'IA pour organiser les flux de patients et améliorer la gestion des urgences."}]},{mois:"Janvier 2026",entrees:[{date:"2026-01-06",outil:"Google Alert",source:"inserm.fr",url:"https://www.inserm.fr/dossier/intelligence-artificielle-et-sante",texte:"L'INSERM explique que l'IA peut assister les médecins dans l'interprétation d'images médicales comme les scanners ou les IRM."},{date:"2026-01-13",outil:"Twitter",source:"reuters.com",url:"https://www.reuters.com/technology/ai-medical-research",texte:"Des chercheurs utilisent l'IA pour accélérer la découverte de nouveaux médicaments en analysant de grandes bases de données."},{date:"2026-01-20",outil:"Syft",source:"mit.edu",url:"https://www.mit.edu/news/artificial-intelligence-medicine",texte:"Le MIT développe des modèles d'IA capables d'aider à prédire certaines maladies avant l'apparition des symptômes."},{date:"2026-01-27",outil:"Google Alert",source:"bbc.com",url:"https://www.bbc.com/news/health",texte:"L'intelligence artificielle est utilisée dans certains hôpitaux pour analyser les radiographies et détecter plus rapidement des fractures."}]},{mois:"Décembre 2025",entrees:[{date:"2025-12-02",outil:"Google Alert",source:"who.int",url:"https://www.who.int/fr/news-room/fact-sheets/detail/artificial-intelligence-in-health",texte:"L'OMS indique que l'intelligence artificielle peut améliorer le diagnostic médical et aider les médecins à analyser plus rapidement les données de santé."},{date:"2025-12-09",outil:"Syft",source:"reuters.com",url:"https://www.reuters.com/technology/artificial-intelligence-healthcare",texte:"Des hôpitaux utilisent l'IA pour analyser les scanners et détecter plus tôt certaines maladies pulmonaires."},{date:"2025-12-16",outil:"Twitter",source:"bbc.com",url:"https://www.bbc.com/news/technology",texte:"Des chercheurs expliquent que l'IA peut aider les radiologues à repérer certaines anomalies dans les images médicales plus rapidement."},{date:"2025-12-23",outil:"Google Alert",source:"weforum.org",url:"https://www.weforum.org/agenda/2023/02/ai-healthcare-future",texte:"L'IA pourrait améliorer la médecine préventive en analysant de grandes bases de données de patients."},{date:"2025-12-30",outil:"Syft",source:"ibm.com",url:"https://www.ibm.com/artificial-intelligence/healthcare",texte:"Les systèmes d'IA peuvent analyser les dossiers médicaux pour aider les médecins à choisir les traitements les plus adaptés."}]},{mois:"Novembre 2025",entrees:[{date:"2025-11-11",outil:"Google",source:"inserm.fr",url:"https://www.inserm.fr/dossier/intelligence-artificielle-et-sante",texte:"L'IA et le médecin collaborent pour analyser les symptômes, le médecin gardant la décision finale."},{date:"2025-11-17",outil:"Syft",source:"medvasc.info",url:"https://medvasc.info/archives-blog/infarctus-du-myocarde-apport-de-l-ia",texte:"L'IA prédit les infarctus du myocarde via IRM cardiaque avec une précision de 94,3 %."},{date:"2025-11-25",outil:"Twitter",source:"nypost.com",url:"https://nypost.com/2025/07/12/science/ai-trained-robot-completes-groundbreaking-gall-bladder-operation-with-100-success-the-future-is-bright/",texte:"Un robot chirurgical IA (SRT-H, Johns Hopkins) retire de façon autonome une vésicule biliaire sur un modèle porcin avec 100 % de réussite (8/8 essais)."}]}],Ld={meta:rM,mois:sM},Ns="deliodcb@gmail.com",Gf="cv-delio-duchesne-brajon.pdf",Io=["#2c4f63","#c62420","#195433","#f7d547","#2d86cf","#494e68","#013eb0","#ae4716","#021f42","#076368","#b8acd3","#cfa94d","#f57664","#0a291c","#e6bd7e","#6b1405","#02878a","#1c565e","#7893a3","#d1cd8c"];function no(t){return Io[(t%Io.length+Io.length)%Io.length]}function Ap(t){return t.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}const aM=["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."];function br(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t||"");return e?`${Number(e[3])} ${aM[Number(e[2])-1]} ${e[1]}`:t}function Vf(t){return String(t).padStart(2,"0")}function Vs(t){return`./reports/${encodeURIComponent(t)}`}function Uv(t){return t.toLowerCase().endsWith(".pdf")}let oM=0;const Wf=Object.entries(iM).map(([t,e])=>({cle:t,label:e.label,periode:e.periode,blocs:e.blocs.map(n=>{const i=Ap(`${e.label}-${n.matiere}`),r=no(oM++);return{...n,slug:i,couleur:r,anneeLabel:e.label,periode:e.periode,comptes_rendus:n.comptes_rendus.map(s=>({...s,slug:Ap(s.fichier.replace(/\.[^.]+$/,"")),matiereSlug:i}))}})})),fo=Wf.flatMap(t=>t.blocs);function lM(t){return fo.find(e=>e.slug===t)}function cM(t){for(const e of fo){const n=e.comptes_rendus.findIndex(i=>i.slug===t);if(n!==-1)return{bloc:e,cr:e.comptes_rendus[n],index:n}}return null}const uM=fo.reduce((t,e)=>t+e.comptes_rendus.length,0);function Fv(t){const e=fo.findIndex(n=>n.slug===t.slug);return t.comptes_rendus.map((n,i)=>({kicker:t.matiere,title:n.titre,footer:br(n.date),color:i===0?t.couleur:no(e*3+i*5),styleIndex:e+i,to:`/cr/${n.slug}`}))}function dM(){return E.jsx("svg",{className:"chev",viewBox:"0 0 10 6","aria-hidden":"true",children:E.jsx("path",{d:"M1 1l4 4 4-4",fill:"none",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}function fM(){const t=Z.useRef(null),[e,n]=Z.useState(!1),[i,r]=Z.useState(!1),s=dr();return Z.useEffect(()=>{const a=()=>n(window.scrollY>window.innerHeight*.6);return a(),window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),Z.useEffect(()=>r(!1),[s.pathname]),Z.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!t.current)return;const a=t.current.animate([{opacity:0,transform:"translateY(-1.2vh)"},{opacity:1,transform:"translateY(0)"}],{duration:900,delay:700,easing:"cubic-bezier(.2,.8,.2,1)",fill:"both"});return()=>a.cancel()},[]),E.jsx("header",{className:`site-nav${e?" is-solid":""}`,children:E.jsxs("div",{ref:t,className:"site-nav-inner",children:[E.jsxs(ln,{to:"/",className:"logo","aria-label":"Accueil — Délio Duchesne-Brajon",children:[E.jsx("span",{className:"logo-tile","aria-hidden":"true",children:E.jsx("span",{})}),E.jsxs("span",{className:"logo-text",children:[E.jsx("span",{className:"logo-name",children:"Délio"}),E.jsx("span",{className:"logo-sub",children:"BTS SIO · SLAM"})]})]}),E.jsxs("nav",{className:"nav-center","aria-label":"Navigation principale",children:[E.jsxs("div",{className:`nav-drop${i?" is-open":""}`,onMouseLeave:()=>r(!1),children:[E.jsxs("button",{type:"button",className:"nav-link","aria-expanded":i,onClick:()=>r(a=>!a),onMouseEnter:()=>r(!0),children:["Comptes rendus ",E.jsx(dM,{})]}),E.jsx("div",{className:"nav-menu",children:Wf.map(a=>E.jsxs("div",{className:"nav-menu-col",children:[E.jsx("div",{className:"nav-menu-head",children:a.label}),a.blocs.map(o=>E.jsxs(ln,{to:`/matiere/${o.slug}`,children:[E.jsx("i",{style:{background:o.couleur}}),o.matiere]},o.slug))]},a.cle))})]}),E.jsx(ln,{className:"nav-link",to:"/veille",children:"Veille"}),E.jsx(ln,{className:"nav-link",to:"/controle",children:"Contrôle"}),E.jsx(ln,{className:"nav-link",to:"/",state:{scrollTo:"contact"},children:"Contact"})]}),E.jsxs("div",{className:"nav-right",children:[E.jsx("a",{className:"nav-link nav-cv",href:Vs(Gf),download:!0,children:"CV"}),E.jsx(ln,{className:"pill",to:"/",state:{scrollTo:"sommaire"},children:"Voir les comptes rendus"})]})]})})}function hM(){return E.jsxs("footer",{className:"site-footer",children:[E.jsxs("span",{children:["© ",new Date().getFullYear()," Délio Duchesne-Brajon"]}),E.jsx("span",{children:"BTS SIO SLAM — Lycée Dominique Villars, Gap"}),E.jsx("a",{href:`mailto:${Ns}`,children:Ns})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="160",pM=0,Rp=1,mM=2,Ov=1,kv=2,ui=3,sr=0,rn=1,gi=2,er=0,Is=1,Cp=2,bp=3,Pp=4,gM=5,wr=100,vM=101,_M=102,Lp=103,Dp=104,xM=200,yM=201,SM=202,MM=203,Dd=204,Nd=205,EM=206,wM=207,TM=208,AM=209,RM=210,CM=211,bM=212,PM=213,LM=214,DM=0,NM=1,IM=2,jl=3,UM=4,FM=5,OM=6,kM=7,Bv=0,BM=1,zM=2,tr=0,HM=1,GM=2,VM=3,zv=4,WM=5,jM=6,Hv=300,Ws=301,js=302,Id=303,Ud=304,yc=306,Xl=1e3,Wn=1001,Fd=1002,tn=1003,Np=1004,iu=1005,bn=1006,XM=1007,Xs=1008,nr=1009,qM=1010,$M=1011,Xf=1012,Gv=1013,Vi=1014,Wi=1015,io=1016,Vv=1017,Wv=1018,Nr=1020,YM=1021,jn=1023,KM=1024,ZM=1025,Ir=1026,qs=1027,QM=1028,jv=1029,JM=1030,Xv=1031,qv=1033,ru=33776,su=33777,au=33778,ou=33779,Ip=35840,Up=35841,Fp=35842,Op=35843,$v=36196,kp=37492,Bp=37496,zp=37808,Hp=37809,Gp=37810,Vp=37811,Wp=37812,jp=37813,Xp=37814,qp=37815,$p=37816,Yp=37817,Kp=37818,Zp=37819,Qp=37820,Jp=37821,lu=36492,em=36494,tm=36495,eE=36283,nm=36284,im=36285,rm=36286,Yv=3e3,Ur=3001,tE=3200,nE=3201,Kv=0,iE=1,Pn="",Pt="srgb",ii="srgb-linear",qf="display-p3",Sc="display-p3-linear",ql="linear",ct="srgb",$l="rec709",Yl="p3",$r=7680,sm=519,rE=512,sE=513,aE=514,Zv=515,oE=516,lE=517,cE=518,uE=519,am=35044,om="300 es",Od=1035,xi=2e3,Kl=2001;class Js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lm=1234567;const Ia=Math.PI/180,ro=180/Math.PI;function ea(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function $f(t,e){return(t%e+e)%e}function dE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function fE(t,e,n){return t!==e?(n-t)/(e-t):0}function Ua(t,e,n){return(1-n)*t+n*e}function hE(t,e,n,i){return Ua(t,e,1-Math.exp(-n*i))}function pE(t,e=1){return e-Math.abs($f(t,e*2)-e)}function mE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function gE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function vE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function _E(t,e){return t+Math.random()*(e-t)}function xE(t){return t*(.5-Math.random())}function yE(t){t!==void 0&&(lm=t);let e=lm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SE(t){return t*Ia}function ME(t){return t*ro}function kd(t){return(t&t-1)===0&&t!==0}function EE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Zl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function wE(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*f,l*h,o*c);break;case"YZY":t.set(l*h,o*d,l*f,o*c);break;case"ZXZ":t.set(l*f,l*h,o*d,o*c);break;case"XZX":t.set(o*d,l*x,l*m,o*c);break;case"YXY":t.set(l*m,o*d,l*x,o*c);break;case"ZYZ":t.set(l*x,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const cm={DEG2RAD:Ia,RAD2DEG:ro,generateUUID:ea,clamp:Yt,euclideanModulo:$f,mapLinear:dE,inverseLerp:fE,lerp:Ua,damp:hE,pingpong:pE,smoothstep:mE,smootherstep:gE,randInt:vE,randFloat:_E,randFloatSpread:xE,seededRandom:yE,degToRad:SE,radToDeg:ME,isPowerOfTwo:kd,ceilPowerOfTwo:EE,floorPowerOfTwo:Zl,setQuaternionFromProperEuler:wE,normalize:Qt,denormalize:fs};class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],x=i[8],_=r[0],p=r[3],u=r[6],g=r[1],v=r[4],y=r[7],P=r[2],C=r[5],A=r[8];return s[0]=a*_+o*g+l*P,s[3]=a*p+o*v+l*C,s[6]=a*u+o*y+l*A,s[1]=c*_+d*g+f*P,s[4]=c*p+d*v+f*C,s[7]=c*u+d*y+f*A,s[2]=h*_+m*g+x*P,s[5]=h*p+m*v+x*C,s[8]=h*u+m*y+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,m=c*s-a*l,x=n*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=m*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(cu.makeScale(e,n)),this}rotate(e){return this.premultiply(cu.makeRotation(-e)),this}translate(e,n){return this.premultiply(cu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cu=new Ye;function Qv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function TE(){const t=Ql("canvas");return t.style.display="block",t}const um={};function Fa(t){t in um||(um[t]=!0,console.warn(t))}const dm=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fm=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Uo={[ii]:{transfer:ql,primaries:$l,toReference:t=>t,fromReference:t=>t},[Pt]:{transfer:ct,primaries:$l,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Sc]:{transfer:ql,primaries:Yl,toReference:t=>t.applyMatrix3(fm),fromReference:t=>t.applyMatrix3(dm)},[qf]:{transfer:ct,primaries:Yl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(fm),fromReference:t=>t.applyMatrix3(dm).convertLinearToSRGB()}},AE=new Set([ii,Sc]),st={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!AE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Uo[e].toReference,r=Uo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Uo[t].primaries},getTransfer:function(t){return t===Pn?ql:Uo[t].transfer}};function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Yr;class Jv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yr===void 0&&(Yr=Ql("canvas")),Yr.width=e.width,Yr.height=e.height;const i=Yr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Yr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Us(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RE=0;class e_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=ea(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(du(r[a].image)):s.push(du(r[a]))}else s=du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Jv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CE=0;class hn extends Js{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Wn,r=Wn,s=bn,a=Xs,o=jn,l=nr,c=hn.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=ea(),this.name="",this.source=new e_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ur?Pt:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xl:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xl:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?Ur:Yv}set encoding(e){Fa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ur?Pt:Pn}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Hv;hn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],x=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(m+1)/2,P=(u+1)/2,C=(d+h)/4,A=(f+_)/4,F=(x+p)/4;return v>y&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=A/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=F/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=A/s,r=F/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(f-_)/g,this.z=(h-d)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bE extends Js{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Fa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ur?Pt:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new e_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends bE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class t_ extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PE extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ho{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],x=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=_;return}if(f!==_||l!==h||c!==m||d!==x){let p=1-o;const u=l*h+c*m+d*x+f*_,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),C=Math.atan2(P,u*g);p=Math.sin(p*C)/P,o=Math.sin(o*C)/P}const y=o*g;if(l=l*p+h*y,c=c*p+m*y,d=d*p+x*y,f=f*p+_*y,p===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+d*f+l*m-c*h,e[n+1]=l*x+d*h+c*f-o*m,e[n+2]=c*x+d*m+o*h-l*f,e[n+3]=d*x-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f-h*m*x;break;case"YXZ":this._x=h*d*f+c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f+h*m*x;break;case"ZXY":this._x=h*d*f-c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f-h*m*x;break;case"ZYX":this._x=h*d*f-c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f+h*m*x;break;case"YZX":this._x=h*d*f+c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f-h*m*x;break;case"XZY":this._x=h*d*f-c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fu=new I,hm=new ho;class po{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Oo.subVectors(this.max,ha),Kr.subVectors(e.a,ha),Zr.subVectors(e.b,ha),Qr.subVectors(e.c,ha),bi.subVectors(Zr,Kr),Pi.subVectors(Qr,Zr),mr.subVectors(Kr,Qr);let n=[0,-bi.z,bi.y,0,-Pi.z,Pi.y,0,-mr.z,mr.y,bi.z,0,-bi.x,Pi.z,0,-Pi.x,mr.z,0,-mr.x,-bi.y,bi.x,0,-Pi.y,Pi.x,0,-mr.y,mr.x,0];return!hu(n,Kr,Zr,Qr,Oo)||(n=[1,0,0,0,1,0,0,0,1],!hu(n,Kr,Zr,Qr,Oo))?!1:(ko.crossVectors(bi,Pi),n=[ko.x,ko.y,ko.z],hu(n,Kr,Zr,Qr,Oo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new I,new I,new I,new I,new I,new I,new I,new I],On=new I,Fo=new po,Kr=new I,Zr=new I,Qr=new I,bi=new I,Pi=new I,mr=new I,ha=new I,Oo=new I,ko=new I,gr=new I;function hu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){gr.fromArray(t,s);const o=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),d=i.dot(gr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const LE=new po,pa=new I,pu=new I;class Yf{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const n=pa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(pu)),this.expandByPoint(pa.copy(e.center).sub(pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new I,mu=new I,Bo=new I,Li=new I,gu=new I,zo=new I,vu=new I;class n_{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mu.copy(e).add(n).multiplyScalar(.5),Bo.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(mu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Bo),o=Li.dot(this.direction),l=-Li.dot(Bo),c=Li.lengthSq(),d=Math.abs(1-a*a);let f,h,m,x;if(d>0)if(f=a*l-o,h=a*o-l,x=s*d,f>=0)if(h>=-x)if(h<=x){const _=1/d;f*=_,h*=_,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(mu).addScaledVector(Bo,h),m}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){gu.subVectors(n,e),zo.subVectors(i,e),vu.crossVectors(gu,zo);let a=this.direction.dot(vu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot(zo.crossVectors(Li,zo));if(l<0)return null;const c=o*this.direction.dot(gu.cross(Li));if(c<0||l+c>a)return null;const d=-o*Li.dot(vu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,a,o,l,c,d,f,h,m,x,_,p){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,m,x,_,p)}set(e,n,i,r,s,a,o,l,c,d,f,h,m,x,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=x,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),a=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*f,x=o*d,_=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+x*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,x=c*d,_=c*f;n[0]=h+_*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=m*o-x,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,x=c*d,_=c*f;n[0]=h-_*o,n[4]=-a*f,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*d,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*f,x=o*d,_=o*f;n[0]=l*d,n[4]=x*c-m,n[8]=h*c+_,n[1]=l*f,n[5]=_*c+h,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,x=o*l,_=o*c;n[0]=l*d,n[4]=_-h*f,n[8]=x*f+m,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*f+x,n[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,m=a*c,x=o*l,_=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+_,n[5]=a*d,n[9]=m*f-x,n[2]=x*f-m,n[6]=o*d,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DE,e,NE)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Di.crossVectors(i,mn),Di.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Di.crossVectors(i,mn)),Di.normalize(),Ho.crossVectors(mn,Di),r[0]=Di.x,r[4]=Ho.x,r[8]=mn.x,r[1]=Di.y,r[5]=Ho.y,r[9]=mn.y,r[2]=Di.z,r[6]=Ho.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],x=i[2],_=i[6],p=i[10],u=i[14],g=i[3],v=i[7],y=i[11],P=i[15],C=r[0],A=r[4],F=r[8],M=r[12],T=r[1],$=r[5],J=r[9],le=r[13],L=r[2],G=r[6],Y=r[10],ee=r[14],N=r[3],k=r[7],z=r[11],te=r[15];return s[0]=a*C+o*T+l*L+c*N,s[4]=a*A+o*$+l*G+c*k,s[8]=a*F+o*J+l*Y+c*z,s[12]=a*M+o*le+l*ee+c*te,s[1]=d*C+f*T+h*L+m*N,s[5]=d*A+f*$+h*G+m*k,s[9]=d*F+f*J+h*Y+m*z,s[13]=d*M+f*le+h*ee+m*te,s[2]=x*C+_*T+p*L+u*N,s[6]=x*A+_*$+p*G+u*k,s[10]=x*F+_*J+p*Y+u*z,s[14]=x*M+_*le+p*ee+u*te,s[3]=g*C+v*T+y*L+P*N,s[7]=g*A+v*$+y*G+P*k,s[11]=g*F+v*J+y*Y+P*z,s[15]=g*M+v*le+y*ee+P*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],x=e[3],_=e[7],p=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+_*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*d-s*l*d)+p*(+n*c*f-n*o*m-s*a*f+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],x=e[12],_=e[13],p=e[14],u=e[15],g=f*p*c-_*h*c+_*l*m-o*p*m-f*l*u+o*h*u,v=x*h*c-d*p*c-x*l*m+a*p*m+d*l*u-a*h*u,y=d*_*c-x*f*c+x*o*m-a*_*m-d*o*u+a*f*u,P=x*f*l-d*_*l-x*o*h+a*_*h+d*o*p-a*f*p,C=n*g+i*v+r*y+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=g*A,e[1]=(_*h*s-f*p*s-_*r*m+i*p*m+f*r*u-i*h*u)*A,e[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*u+i*l*u)*A,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*A,e[4]=v*A,e[5]=(d*p*s-x*h*s+x*r*m-n*p*m-d*r*u+n*h*u)*A,e[6]=(x*l*s-a*p*s-x*r*c+n*p*c+a*r*u-n*l*u)*A,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*m+n*l*m)*A,e[8]=y*A,e[9]=(x*f*s-d*_*s-x*i*m+n*_*m+d*i*u-n*f*u)*A,e[10]=(a*_*s-x*o*s+x*i*c-n*_*c-a*i*u+n*o*u)*A,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*m-n*o*m)*A,e[12]=P*A,e[13]=(d*_*r-x*f*r+x*i*h-n*_*h-d*i*p+n*f*p)*A,e[14]=(x*o*r-a*_*r-x*i*l+n*_*l+a*i*p-n*o*p)*A,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,m=s*d,x=s*f,_=a*d,p=a*f,u=o*f,g=l*c,v=l*d,y=l*f,P=i.x,C=i.y,A=i.z;return r[0]=(1-(_+u))*P,r[1]=(m+y)*P,r[2]=(x-v)*P,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(h+u))*C,r[6]=(p+g)*C,r[7]=0,r[8]=(x+v)*A,r[9]=(p-g)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Jr.set(r[0],r[1],r[2]).length();const a=Jr.set(r[4],r[5],r[6]).length(),o=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,d=1/a,f=1/o;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,n.setFromRotationMatrix(kn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=xi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(o===xi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Kl)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=xi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),h=(n+e)*c,m=(i+r)*d;let x,_;if(o===xi)x=(a+s)*f,_=-2*f;else if(o===Kl)x=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jr=new I,kn=new Ct,DE=new I(0,0,0),NE=new I(1,1,1),Di=new I,Ho=new I,mn=new I,pm=new Ct,mm=new ho;class Mc{constructor(e=0,n=0,i=0,r=Mc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mc.DEFAULT_ORDER="XYZ";class Kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IE=0;const gm=new I,es=new ho,oi=new Ct,Go=new I,ma=new I,UE=new I,FE=new ho,vm=new I(1,0,0),_m=new I(0,1,0),xm=new I(0,0,1),OE={type:"added"},kE={type:"removed"};class Kt extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new I,n=new Mc,i=new ho,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ye}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,n){return es.setFromAxisAngle(e,n),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(_m,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,n){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(_m,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Go.copy(e):Go.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ma,Go,this.up):oi.lookAt(Go,ma,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),es.setFromRotationMatrix(oi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(OE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,UE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,FE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new I(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new I,li=new I,_u=new I,ci=new I,ts=new I,ns=new I,ym=new I,xu=new I,yu=new I,Su=new I;let Vo=!1;class Vn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),li.subVectors(i,n),_u.subVectors(e,n);const a=Bn.dot(Bn),o=Bn.dot(li),l=Bn.dot(_u),c=li.dot(li),d=li.dot(_u),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*d)*h,x=(a*d-o*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,n,i,r,s,a,o,l){return Vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vo=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),li.subVectors(e,n),Bn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Bn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vo=!0),Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ts.subVectors(r,i),ns.subVectors(s,i),xu.subVectors(e,i);const l=ts.dot(xu),c=ns.dot(xu);if(l<=0&&c<=0)return n.copy(i);yu.subVectors(e,r);const d=ts.dot(yu),f=ns.dot(yu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(ts,a);Su.subVectors(e,s);const m=ts.dot(Su),x=ns.dot(Su);if(x>=0&&m<=x)return n.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(ns,o);const p=d*x-m*f;if(p<=0&&f-d>=0&&m-x>=0)return ym.subVectors(s,r),o=(f-d)/(f-d+(m-x)),n.copy(r).addScaledVector(ym,o);const u=1/(p+_+h);return a=_*u,o=h*u,n.copy(i).addScaledVector(ts,a).addScaledVector(ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function Mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=$f(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Mu(a,s,e+1/3),this.g=Mu(a,s,e),this.b=Mu(a,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pt){const i=i_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=uu(e.r),this.g=uu(e.g),this.b=uu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return st.fromWorkingColorSpace(qt.copy(this),e),Math.round(Yt(qt.r*255,0,255))*65536+Math.round(Yt(qt.g*255,0,255))*256+Math.round(Yt(qt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Pt){st.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+n,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ni),e.getHSL(Wo);const i=Ua(Ni.h,Wo.h,n),r=Ua(Ni.s,Wo.s,n),s=Ua(Ni.l,Wo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ze;Ze.NAMES=i_;let BE=0;class ta extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Is,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Nd,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dd&&(i.blendSrc=this.blendSrc),this.blendDst!==Nd&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zf extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new I,jo=new Je;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=am,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)jo.fromBufferAttribute(this,n),jo.applyMatrix3(e),this.setXY(n,jo.x,jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==am&&(e.usage=this.usage),e}}class r_ extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class s_ extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Fr extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let zE=0;const Tn=new Ct,Eu=new Kt,is=new I,gn=new po,ga=new po,Ft=new I;class Xr extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qv(e)?s_:r_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Fr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(gn.min,ga.min),gn.expandByPoint(Ft),Ft.addVectors(gn.max,ga.max),gn.expandByPoint(Ft)):(gn.expandByPoint(ga.min),gn.expandByPoint(ga.max))}gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ft.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(e,c),Ft.add(is)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<o;T++)c[T]=new I,d[T]=new I;const f=new I,h=new I,m=new I,x=new Je,_=new Je,p=new Je,u=new I,g=new I;function v(T,$,J){f.fromArray(r,T*3),h.fromArray(r,$*3),m.fromArray(r,J*3),x.fromArray(a,T*2),_.fromArray(a,$*2),p.fromArray(a,J*2),h.sub(f),m.sub(f),_.sub(x),p.sub(x);const le=1/(_.x*p.y-p.x*_.y);isFinite(le)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(le),g.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(le),c[T].add(u),c[$].add(u),c[J].add(u),d[T].add(g),d[$].add(g),d[J].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,$=y.length;T<$;++T){const J=y[T],le=J.start,L=J.count;for(let G=le,Y=le+L;G<Y;G+=3)v(i[G+0],i[G+1],i[G+2])}const P=new I,C=new I,A=new I,F=new I;function M(T){A.fromArray(s,T*3),F.copy(A);const $=c[T];P.copy($),P.sub(A.multiplyScalar(A.dot($))).normalize(),C.crossVectors(F,$);const le=C.dot(d[T])<0?-1:1;l[T*4]=P.x,l[T*4+1]=P.y,l[T*4+2]=P.z,l[T*4+3]=le}for(let T=0,$=y.length;T<$;++T){const J=y[T],le=J.start,L=J.count;for(let G=le,Y=le+L;G<Y;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,d=new I,f=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*d;for(let u=0;u<d;u++)h[x++]=c[m++]}return new ti(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new Ct,vr=new n_,Xo=new Yf,Mm=new I,rs=new I,ss=new I,as=new I,wu=new I,qo=new I,$o=new Je,Yo=new Je,Ko=new Je,Em=new I,wm=new I,Tm=new I,Zo=new I,Qo=new I;class at extends Kt{constructor(e=new Xr,n=new Zf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(wu.fromBufferAttribute(f,e),a?qo.addScaledVector(wu,d):qo.addScaledVector(wu.sub(n),d))}n.add(qo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(Xo.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Xo,Mm)===null||vr.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(Sm.copy(s).invert(),vr.copy(e.ray).applyMatrix4(Sm),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const p=h[x],u=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,P=v;y<P;y+=3){const C=o.getX(y),A=o.getX(y+1),F=o.getX(y+2);r=Jo(this,u,e,i,c,d,f,C,A,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const g=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);r=Jo(this,a,e,i,c,d,f,g,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const p=h[x],u=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=g,P=v;y<P;y+=3){const C=y,A=y+1,F=y+2;r=Jo(this,u,e,i,c,d,f,C,A,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const g=p,v=p+1,y=p+2;r=Jo(this,a,e,i,c,d,f,g,v,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function HE(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===sr,o),l===null)return null;Qo.copy(o),Qo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qo);return c<n.near||c>n.far?null:{distance:c,point:Qo.clone(),object:t}}function Jo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,rs),t.getVertexPosition(l,ss),t.getVertexPosition(c,as);const d=HE(t,e,n,i,rs,ss,as,Zo);if(d){r&&($o.fromBufferAttribute(r,o),Yo.fromBufferAttribute(r,l),Ko.fromBufferAttribute(r,c),d.uv=Vn.getInterpolation(Zo,rs,ss,as,$o,Yo,Ko,new Je)),s&&($o.fromBufferAttribute(s,o),Yo.fromBufferAttribute(s,l),Ko.fromBufferAttribute(s,c),d.uv1=Vn.getInterpolation(Zo,rs,ss,as,$o,Yo,Ko,new Je),d.uv2=d.uv1),a&&(Em.fromBufferAttribute(a,o),wm.fromBufferAttribute(a,l),Tm.fromBufferAttribute(a,c),d.normal=Vn.getInterpolation(Zo,rs,ss,as,Em,wm,Tm,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};Vn.getNormal(rs,ss,as,f.normal),d.face=f}return d}class Ti extends Xr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fr(c,3)),this.setAttribute("normal",new Fr(d,3)),this.setAttribute("uv",new Fr(f,2));function x(_,p,u,g,v,y,P,C,A,F,M){const T=y/A,$=P/F,J=y/2,le=P/2,L=C/2,G=A+1,Y=F+1;let ee=0,N=0;const k=new I;for(let z=0;z<Y;z++){const te=z*$-le;for(let Q=0;Q<G;Q++){const V=Q*T-J;k[_]=V*g,k[p]=te*v,k[u]=L,c.push(k.x,k.y,k.z),k[_]=0,k[p]=0,k[u]=C>0?1:-1,d.push(k.x,k.y,k.z),f.push(Q/A),f.push(1-z/F),ee+=1}}for(let z=0;z<F;z++)for(let te=0;te<A;te++){const Q=h+te+G*z,V=h+te+G*(z+1),ne=h+(te+1)+G*(z+1),ce=h+(te+1)+G*z;l.push(Q,V,ce),l.push(V,ne,ce),N+=6}o.addGroup(m,N,M),m+=N,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const r in i)e[r]=i[r]}return e}function GE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function a_(t){return t.getRenderTarget()===null?t.outputColorSpace:st.workingColorSpace}const VE={clone:$s,merge:Jt};var WE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WE,this.fragmentShader=jE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=GE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Qf extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends Qf{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const os=-90,ls=1;class XE extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(os,ls,e,n);r.layers=this.layers,this.add(r);const s=new _n(os,ls,e,n);s.layers=this.layers,this.add(s);const a=new _n(os,ls,e,n);a.layers=this.layers,this.add(a);const o=new _n(os,ls,e,n);o.layers=this.layers,this.add(o);const l=new _n(os,ls,e,n);l.layers=this.layers,this.add(l);const c=new _n(os,ls,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class o_ extends hn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qE extends ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Fa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ur?Pt:Pn),this.texture=new o_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ti(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:er});s.uniforms.tEquirect.value=n;const a=new at(r,s),o=n.minFilter;return n.minFilter===Xs&&(n.minFilter=bn),new XE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Tu=new I,$E=new I,YE=new Ye;class Mr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tu.subVectors(i,n).cross($E.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Tu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YE.getNormalMatrix(e),r=this.coplanarPoint(Tu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Yf,el=new I;class Jf{constructor(e=new Mr,n=new Mr,i=new Mr,r=new Mr,s=new Mr,a=new Mr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],x=r[9],_=r[10],p=r[11],u=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,p-m,y-u).normalize(),i[1].setComponents(l+s,h+c,p+m,y+u).normalize(),i[2].setComponents(l+a,h+d,p+x,y+g).normalize(),i[3].setComponents(l-a,h-d,p-x,y-g).normalize(),i[4].setComponents(l-o,h-f,p-_,y-v).normalize(),n===xi)i[5].setComponents(l+o,h+f,p+_,y+v).normalize();else if(n===Kl)i[5].setComponents(o,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function l_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,m=f.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,f){const h=d.array,m=d._updateRange,x=d.updateRanges;if(t.bindBuffer(f,c),m.count===-1&&x.length===0&&t.bufferSubData(f,0,h),x.length!==0){for(let _=0,p=x.length;_<p;_++){const u=x[_];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:a,remove:o,update:l}}class Ys extends Xr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,m=[],x=[],_=[],p=[];for(let u=0;u<d;u++){const g=u*h-a;for(let v=0;v<c;v++){const y=v*f-s;x.push(y,-g,0),_.push(0,0,1),p.push(v/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,y=g+c*(u+1),P=g+1+c*(u+1),C=g+1+c*u;m.push(v,y,C),m.push(y,P,C)}this.setIndex(m),this.setAttribute("position",new Fr(x,3)),this.setAttribute("normal",new Fr(_,3)),this.setAttribute("uv",new Fr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,a1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,o1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,y1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,M1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R1="gl_FragColor = linearToOutputTexel( gl_FragColor );",C1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,b1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,I1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,j1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,K1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Z1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,J1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ew=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ow=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_w=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ww=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Nw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Iw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ow=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ww=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_T=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ST=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:ZE,alphahash_pars_fragment:QE,alphamap_fragment:JE,alphamap_pars_fragment:e1,alphatest_fragment:t1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:r1,batching_pars_vertex:s1,batching_vertex:a1,begin_vertex:o1,beginnormal_vertex:l1,bsdfs:c1,iridescence_fragment:u1,bumpmap_pars_fragment:d1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:v1,color_pars_vertex:_1,color_vertex:x1,common:y1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:M1,displacementmap_pars_vertex:E1,displacementmap_vertex:w1,emissivemap_fragment:T1,emissivemap_pars_fragment:A1,colorspace_fragment:R1,colorspace_pars_fragment:C1,envmap_fragment:b1,envmap_common_pars_fragment:P1,envmap_pars_fragment:L1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:W1,envmap_vertex:N1,fog_vertex:I1,fog_pars_vertex:U1,fog_fragment:F1,fog_pars_fragment:O1,gradientmap_pars_fragment:k1,lightmap_fragment:B1,lightmap_pars_fragment:z1,lights_lambert_fragment:H1,lights_lambert_pars_fragment:G1,lights_pars_begin:V1,lights_toon_fragment:j1,lights_toon_pars_fragment:X1,lights_phong_fragment:q1,lights_phong_pars_fragment:$1,lights_physical_fragment:Y1,lights_physical_pars_fragment:K1,lights_fragment_begin:Z1,lights_fragment_maps:Q1,lights_fragment_end:J1,logdepthbuf_fragment:ew,logdepthbuf_pars_fragment:tw,logdepthbuf_pars_vertex:nw,logdepthbuf_vertex:iw,map_fragment:rw,map_pars_fragment:sw,map_particle_fragment:aw,map_particle_pars_fragment:ow,metalnessmap_fragment:lw,metalnessmap_pars_fragment:cw,morphcolor_vertex:uw,morphnormal_vertex:dw,morphtarget_pars_vertex:fw,morphtarget_vertex:hw,normal_fragment_begin:pw,normal_fragment_maps:mw,normal_pars_fragment:gw,normal_pars_vertex:vw,normal_vertex:_w,normalmap_pars_fragment:xw,clearcoat_normal_fragment_begin:yw,clearcoat_normal_fragment_maps:Sw,clearcoat_pars_fragment:Mw,iridescence_pars_fragment:Ew,opaque_fragment:ww,packing:Tw,premultiplied_alpha_fragment:Aw,project_vertex:Rw,dithering_fragment:Cw,dithering_pars_fragment:bw,roughnessmap_fragment:Pw,roughnessmap_pars_fragment:Lw,shadowmap_pars_fragment:Dw,shadowmap_pars_vertex:Nw,shadowmap_vertex:Iw,shadowmask_pars_fragment:Uw,skinbase_vertex:Fw,skinning_pars_vertex:Ow,skinning_vertex:kw,skinnormal_vertex:Bw,specularmap_fragment:zw,specularmap_pars_fragment:Hw,tonemapping_fragment:Gw,tonemapping_pars_fragment:Vw,transmission_fragment:Ww,transmission_pars_fragment:jw,uv_pars_fragment:Xw,uv_pars_vertex:qw,uv_vertex:$w,worldpos_vertex:Yw,background_vert:Kw,background_frag:Zw,backgroundCube_vert:Qw,backgroundCube_frag:Jw,cube_vert:eT,cube_frag:tT,depth_vert:nT,depth_frag:iT,distanceRGBA_vert:rT,distanceRGBA_frag:sT,equirect_vert:aT,equirect_frag:oT,linedashed_vert:lT,linedashed_frag:cT,meshbasic_vert:uT,meshbasic_frag:dT,meshlambert_vert:fT,meshlambert_frag:hT,meshmatcap_vert:pT,meshmatcap_frag:mT,meshnormal_vert:gT,meshnormal_frag:vT,meshphong_vert:_T,meshphong_frag:xT,meshphysical_vert:yT,meshphysical_frag:ST,meshtoon_vert:MT,meshtoon_frag:ET,points_vert:wT,points_frag:TT,shadow_vert:AT,shadow_frag:RT,sprite_vert:CT,sprite_frag:bT},he={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Zn={basic:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Jt([he.points,he.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Jt([he.common,he.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Jt([he.sprite,he.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Jt([he.common,he.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Jt([he.lights,he.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Zn.physical={uniforms:Jt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const tl={r:0,b:0,g:0};function PT(t,e,n,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function x(p,u){let g=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===yc)?(d===void 0&&(d=new at(new Ti(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:$s(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=st.getTransfer(v.colorSpace)!==ct,(f!==v||h!==v.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=v,h=v.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new at(new Ys(2,2),new ni({name:"BackgroundMaterial",uniforms:$s(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=st.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(tl,a_(t)),i.buffers.color.setClear(tl.r,tl.g,tl.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:x}}function LT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,d=!1;function f(L,G,Y,ee,N){let k=!1;if(a){const z=_(ee,Y,G);c!==z&&(c=z,m(c.object)),k=u(L,ee,Y,N),k&&g(L,ee,Y,N)}else{const z=G.wireframe===!0;(c.geometry!==ee.id||c.program!==Y.id||c.wireframe!==z)&&(c.geometry=ee.id,c.program=Y.id,c.wireframe=z,k=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,F(L,G,Y,ee),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,G,Y){const ee=Y.wireframe===!0;let N=o[L.id];N===void 0&&(N={},o[L.id]=N);let k=N[G.id];k===void 0&&(k={},N[G.id]=k);let z=k[ee];return z===void 0&&(z=p(h()),k[ee]=z),z}function p(L){const G=[],Y=[],ee=[];for(let N=0;N<r;N++)G[N]=0,Y[N]=0,ee[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:ee,object:L,attributes:{},index:null}}function u(L,G,Y,ee){const N=c.attributes,k=G.attributes;let z=0;const te=Y.getAttributes();for(const Q in te)if(te[Q].location>=0){const ne=N[Q];let ce=k[Q];if(ce===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),ne===void 0||ne.attribute!==ce||ce&&ne.data!==ce.data)return!0;z++}return c.attributesNum!==z||c.index!==ee}function g(L,G,Y,ee){const N={},k=G.attributes;let z=0;const te=Y.getAttributes();for(const Q in te)if(te[Q].location>=0){let ne=k[Q];ne===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));const ce={};ce.attribute=ne,ne&&ne.data&&(ce.data=ne.data),N[Q]=ce,z++}c.attributes=N,c.attributesNum=z,c.index=ee}function v(){const L=c.newAttributes;for(let G=0,Y=L.length;G<Y;G++)L[G]=0}function y(L){P(L,0)}function P(L,G){const Y=c.newAttributes,ee=c.enabledAttributes,N=c.attributeDivisors;Y[L]=1,ee[L]===0&&(t.enableVertexAttribArray(L),ee[L]=1),N[L]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),N[L]=G)}function C(){const L=c.newAttributes,G=c.enabledAttributes;for(let Y=0,ee=G.length;Y<ee;Y++)G[Y]!==L[Y]&&(t.disableVertexAttribArray(Y),G[Y]=0)}function A(L,G,Y,ee,N,k,z){z===!0?t.vertexAttribIPointer(L,G,Y,N,k):t.vertexAttribPointer(L,G,Y,ee,N,k)}function F(L,G,Y,ee){if(i.isWebGL2===!1&&(L.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=ee.attributes,k=Y.getAttributes(),z=G.defaultAttributeValues;for(const te in k){const Q=k[te];if(Q.location>=0){let V=N[te];if(V===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const ne=V.normalized,ce=V.itemSize,ue=n.get(V);if(ue===void 0)continue;const xe=ue.buffer,Ne=ue.type,Ce=ue.bytesPerElement,Te=i.isWebGL2===!0&&(Ne===t.INT||Ne===t.UNSIGNED_INT||V.gpuType===Gv);if(V.isInterleavedBufferAttribute){const be=V.data,B=be.stride,Mt=V.offset;if(be.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Q.locationSize;Pe++)P(Q.location+Pe,be.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Pe=0;Pe<Q.locationSize;Pe++)y(Q.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Pe=0;Pe<Q.locationSize;Pe++)A(Q.location+Pe,ce/Q.locationSize,Ne,ne,B*Ce,(Mt+ce/Q.locationSize*Pe)*Ce,Te)}else{if(V.isInstancedBufferAttribute){for(let be=0;be<Q.locationSize;be++)P(Q.location+be,V.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let be=0;be<Q.locationSize;be++)y(Q.location+be);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let be=0;be<Q.locationSize;be++)A(Q.location+be,ce/Q.locationSize,Ne,ne,ce*Ce,ce/Q.locationSize*be*Ce,Te)}}else if(z!==void 0){const ne=z[te];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(Q.location,ne);break;case 3:t.vertexAttrib3fv(Q.location,ne);break;case 4:t.vertexAttrib4fv(Q.location,ne);break;default:t.vertexAttrib1fv(Q.location,ne)}}}}C()}function M(){J();for(const L in o){const G=o[L];for(const Y in G){const ee=G[Y];for(const N in ee)x(ee[N].object),delete ee[N];delete G[Y]}delete o[L]}}function T(L){if(o[L.id]===void 0)return;const G=o[L.id];for(const Y in G){const ee=G[Y];for(const N in ee)x(ee[N].object),delete ee[N];delete G[Y]}delete o[L.id]}function $(L){for(const G in o){const Y=o[G];if(Y[L.id]===void 0)continue;const ee=Y[L.id];for(const N in ee)x(ee[N].object),delete ee[N];delete Y[L.id]}}function J(){le(),d=!0,c!==l&&(c=l,m(c.object))}function le(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:J,resetDefaultState:le,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:$,initAttributes:v,enableAttribute:y,disableUnusedAttributes:C}}function DT(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}function o(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<h;x++)this.render(d[x],f[x]);else{m.multiDrawArraysWEBGL(s,d,0,f,0,h);let x=0;for(let _=0;_<h;_++)x+=f[_];n.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function NT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=a||e.has("OES_texture_float"),P=v&&y,C=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:C}}function IT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Mr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!p)s?d(null):c();else{const g=s?0:i,v=g*4;let y=u.clippingState||null;l.value=y,y=d(x,h,v,m);for(let P=0;P!==v;++P)y[P]=n[P];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,x){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const u=m+_*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,y=m;v!==_;++v,y+=4)a.copy(f[v]).applyMatrix4(g,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function UT(t){let e=new WeakMap;function n(a,o){return o===Id?a.mapping=Ws:o===Ud&&(a.mapping=js),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Id||o===Ud)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qE(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class c_ extends Qf{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ts=4,Am=[.125,.215,.35,.446,.526,.582],Tr=20,Au=new c_,Rm=new Ze;let Ru=null,Cu=0,bu=0;const Er=(1+Math.sqrt(5))/2,cs=1/Er,Cm=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Er,cs),new I(0,Er,-cs),new I(cs,0,Er),new I(-cs,0,Er),new I(Er,cs,0),new I(-Er,cs,0)];class Bd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ru=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ru,Cu,bu),e.scissorTest=!1,nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ru=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:io,format:jn,colorSpace:ii,depthBuffer:!1},r=bm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FT(s)),this._blurMaterial=OT(s,e,n)}return r}_compileMaterial(e){const n=new at(this._lodPlanes[0],e);this._renderer.compile(n,Au)}_sceneToCubeUV(e,n,i,r){const o=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Rm),d.toneMapping=tr,d.autoClear=!1;const m=new Zf({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new at(new Ti,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Rm),_=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;nl(r,g*v,u>2?v:0,v,v),d.setRenderTarget(r),_&&d.render(x,o),d.render(e,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ws||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;nl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Au)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cm[(r-1)%Cm.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new at(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Tr-1),_=s/x,p=isFinite(s)?1+Math.floor(d*_):Tr;p>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tr}`);const u=[];let g=0;for(let A=0;A<Tr;++A){const F=A/_,M=Math.exp(-F*F/2);u.push(M),A===0?g+=M:A<p&&(g+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],P=3*y*(r>v-Ts?r-v+Ts:0),C=4*(this._cubeSize-y);nl(n,P,C,3*y,2*y),l.setRenderTarget(n),l.render(f,Au)}}function FT(t){const e=[],n=[],i=[];let r=t;const s=t-Ts+1+Am.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ts?l=Am[a-t+Ts-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,x=6,_=3,p=2,u=1,g=new Float32Array(_*x*m),v=new Float32Array(p*x*m),y=new Float32Array(u*x*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,F=C>2?0:-1,M=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];g.set(M,_*x*C),v.set(h,p*x*C);const T=[C,C,C,C,C,C];y.set(T,u*x*C)}const P=new Xr;P.setAttribute("position",new ti(g,_)),P.setAttribute("uv",new ti(v,p)),P.setAttribute("faceIndex",new ti(y,u)),e.push(P),r>Ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bm(t,e,n){const i=new ar(t,e,n);return i.texture.mapping=yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function nl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function OT(t,e,n){const i=new Float32Array(Tr),r=new I(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Pm(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Lm(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function eh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Id||l===Ud,d=l===Ws||l===js;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Bd(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new Bd(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function BT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function zT(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const _=m[x];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let _=0;if(m!==null){const g=m.array;_=m.version;for(let v=0,y=g.length;v<y;v+=3){const P=g[v+0],C=g[v+1],A=g[v+2];h.push(P,C,C,A,A,P)}}else if(x!==void 0){const g=x.array;_=x.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const P=v+0,C=v+1,A=v+2;h.push(P,C,C,A,A,P)}}else return;const p=new(Qv(h)?s_:r_)(h,1);p.version=_;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function HT(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,x){t.drawElements(s,x,o,m*l),n.update(x,s,1)}function f(m,x,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,o,m*l,_),n.update(x,s,_)}function h(m,x,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,o,m,0,_);let u=0;for(let g=0;g<_;g++)u+=x[g];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function GT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function VT(t,e){return t[0]-e[0]}function WT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function jT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(d);if(p===void 0||p.count!==_){let G=function(){le.dispose(),s.delete(d),d.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const v=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),P===!0&&(M=3);let T=d.attributes.position.count*M,$=1;T>e.maxTextureSize&&($=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const J=new Float32Array(T*$*4*_),le=new t_(J,T,$,_);le.type=Wi,le.needsUpdate=!0;const L=M*4;for(let Y=0;Y<_;Y++){const ee=C[Y],N=A[Y],k=F[Y],z=T*$*4*Y;for(let te=0;te<ee.count;te++){const Q=te*L;v===!0&&(a.fromBufferAttribute(ee,te),J[z+Q+0]=a.x,J[z+Q+1]=a.y,J[z+Q+2]=a.z,J[z+Q+3]=0),y===!0&&(a.fromBufferAttribute(N,te),J[z+Q+4]=a.x,J[z+Q+5]=a.y,J[z+Q+6]=a.z,J[z+Q+7]=0),P===!0&&(a.fromBufferAttribute(k,te),J[z+Q+8]=a.x,J[z+Q+9]=a.y,J[z+Q+10]=a.z,J[z+Q+11]=k.itemSize===4?a.w:1)}}p={count:_,texture:le,size:new Je(T,$)},s.set(d,p),d.addEventListener("dispose",G)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const g=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let _=i[d.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];i[d.id]=_}for(let y=0;y<x;y++){const P=_[y];P[0]=y,P[1]=h[y]}_.sort(WT);for(let y=0;y<8;y++)y<x&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(VT);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const P=o[y],C=P[0],A=P[1];C!==Number.MAX_SAFE_INTEGER&&A?(p&&d.getAttribute("morphTarget"+y)!==p[C]&&d.setAttribute("morphTarget"+y,p[C]),u&&d.getAttribute("morphNormal"+y)!==u[C]&&d.setAttribute("morphNormal"+y,u[C]),r[y]=A,g+=A):(p&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),u&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const v=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function XT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class u_ extends hn{constructor(e,n,i,r,s,a,o,l,c,d){if(d=d!==void 0?d:Ir,d!==Ir&&d!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ir&&(i=Vi),i===void 0&&d===qs&&(i=Nr),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const d_=new hn,f_=new u_(1,1);f_.compareFunction=Zv;const h_=new t_,p_=new PE,m_=new o_,Dm=[],Nm=[],Im=new Float32Array(16),Um=new Float32Array(9),Fm=new Float32Array(4);function na(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Dm[r];if(s===void 0&&(s=new Float32Array(r),Dm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ec(t,e){let n=Nm[e];n===void 0&&(n=new Int32Array(e),Nm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function YT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function ZT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;Fm.set(i),t.uniformMatrix2fv(this.addr,!1,Fm),Nt(n,i)}}function QT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;Um.set(i),t.uniformMatrix3fv(this.addr,!1,Um),Nt(n,i)}}function JT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Dt(n,i))return;Im.set(i),t.uniformMatrix4fv(this.addr,!1,Im),Nt(n,i)}}function e2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function r2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function l2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?f_:d_;n.setTexture2D(e||s,r)}function c2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||p_,r)}function u2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||m_,r)}function d2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||h_,r)}function f2(t){switch(t){case 5126:return qT;case 35664:return $T;case 35665:return YT;case 35666:return KT;case 35674:return ZT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return e2;case 35667:case 35671:return t2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return r2;case 36294:return s2;case 36295:return a2;case 36296:return o2;case 35678:case 36198:case 36298:case 36306:case 35682:return l2;case 35679:case 36299:case 36307:return c2;case 35680:case 36300:case 36308:case 36293:return u2;case 36289:case 36303:case 36311:case 36292:return d2}}function h2(t,e){t.uniform1fv(this.addr,e)}function p2(t,e){const n=na(e,this.size,2);t.uniform2fv(this.addr,n)}function m2(t,e){const n=na(e,this.size,3);t.uniform3fv(this.addr,n)}function g2(t,e){const n=na(e,this.size,4);t.uniform4fv(this.addr,n)}function v2(t,e){const n=na(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _2(t,e){const n=na(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function x2(t,e){const n=na(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function y2(t,e){t.uniform1iv(this.addr,e)}function S2(t,e){t.uniform2iv(this.addr,e)}function M2(t,e){t.uniform3iv(this.addr,e)}function E2(t,e){t.uniform4iv(this.addr,e)}function w2(t,e){t.uniform1uiv(this.addr,e)}function T2(t,e){t.uniform2uiv(this.addr,e)}function A2(t,e){t.uniform3uiv(this.addr,e)}function R2(t,e){t.uniform4uiv(this.addr,e)}function C2(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||d_,s[a])}function b2(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||p_,s[a])}function P2(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||m_,s[a])}function L2(t,e,n){const i=this.cache,r=e.length,s=Ec(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||h_,s[a])}function D2(t){switch(t){case 5126:return h2;case 35664:return p2;case 35665:return m2;case 35666:return g2;case 35674:return v2;case 35675:return _2;case 35676:return x2;case 5124:case 35670:return y2;case 35667:case 35671:return S2;case 35668:case 35672:return M2;case 35669:case 35673:return E2;case 5125:return w2;case 36294:return T2;case 36295:return A2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return P2;case 36289:case 36303:case 36311:case 36292:return L2}}class N2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=f2(n.type)}}class I2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=D2(n.type)}}class U2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function Om(t,e){t.seq.push(e),t.map[e.id]=e}function F2(t,e,n){const i=t.name,r=i.length;for(Pu.lastIndex=0;;){const s=Pu.exec(i),a=Pu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Om(n,c===void 0?new N2(o,t,e):new I2(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new U2(o),Om(n,f)),n=f}}}class _l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);F2(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function km(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const O2=37297;let k2=0;function B2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function z2(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===Yl&&n===$l?i="LinearDisplayP3ToLinearSRGB":e===$l&&n===Yl&&(i="LinearSRGBToLinearDisplayP3"),t){case ii:case Sc:return[i,"LinearTransferOETF"];case Pt:case qf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Bm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+B2(t.getShaderSource(e),a)}else return r}function H2(t,e){const n=z2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function G2(t,e){let n;switch(e){case HM:n="Linear";break;case GM:n="Reinhard";break;case VM:n="OptimizedCineon";break;case zv:n="ACESFilmic";break;case jM:n="AgX";break;case WM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function V2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function W2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function j2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function X2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function As(t){return t!==""}function zm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(t){return t.replace(q2,Y2)}const $2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Y2(t,e){let n=Xe[e];if(n===void 0){const i=$2.get(e);if(i!==void 0)n=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zd(n)}const K2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(t){return t.replace(K2,Z2)}function Z2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ov?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===kv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function J2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ws:case js:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function tA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Bv:e="ENVMAP_BLENDING_MULTIPLY";break;case BM:e="ENVMAP_BLENDING_MIX";break;case zM:e="ENVMAP_BLENDING_ADD";break}return e}function nA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Q2(n),c=J2(n),d=eA(n),f=tA(n),h=nA(n),m=n.isWebGL2?"":V2(n),x=W2(n),_=j2(s),p=r.createProgram();let u,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(As).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(As).join(`
`),g.length>0&&(g+=`
`)):(u=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),g=[m,Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==tr?G2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,H2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(As).join(`
`)),a=zd(a),a=zm(a,n),a=Hm(a,n),o=zd(o),o=zm(o,n),o=Hm(o,n),a=Gm(a),o=Gm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===om?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+u+a,P=v+g+o,C=km(r,r.VERTEX_SHADER,y),A=km(r,r.FRAGMENT_SHADER,P);r.attachShader(p,C),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function F(J){if(t.debug.checkShaderErrors){const le=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(A).trim();let Y=!0,ee=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,C,A);else{const N=Bm(r,C,"vertex"),k=Bm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+le+`
`+N+`
`+k)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(L===""||G==="")&&(ee=!1);ee&&(J.diagnostics={runnable:Y,programLog:le,vertexShader:{log:L,prefix:u},fragmentShader:{log:G,prefix:g}})}r.deleteShader(C),r.deleteShader(A),M=new _l(r,p),T=X2(r,p)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let $=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=r.getProgramParameter(p,O2)),$},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=k2++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let rA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aA(e),n.set(e,i)),i}}class aA{constructor(e){this.id=rA++,this.code=e,this.usedTimes=0}}function oA(t,e,n,i,r,s,a){const o=new Kf,l=new sA,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,T,$,J,le){const L=J.fog,G=le.geometry,Y=M.isMeshStandardMaterial?J.environment:null,ee=(M.isMeshStandardMaterial?n:e).get(M.envMap||Y),N=ee&&ee.mapping===yc?ee.image.height:null,k=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=z!==void 0?z.length:0;let Q=0;G.morphAttributes.position!==void 0&&(Q=1),G.morphAttributes.normal!==void 0&&(Q=2),G.morphAttributes.color!==void 0&&(Q=3);let V,ne,ce,ue;if(k){const ft=Zn[k];V=ft.vertexShader,ne=ft.fragmentShader}else V=M.vertexShader,ne=M.fragmentShader,l.update(M),ce=l.getVertexShaderID(M),ue=l.getFragmentShaderID(M);const xe=t.getRenderTarget(),Ne=le.isInstancedMesh===!0,Ce=le.isBatchedMesh===!0,Te=!!M.map,be=!!M.matcap,B=!!ee,Mt=!!M.aoMap,Pe=!!M.lightMap,Fe=!!M.bumpMap,Ee=!!M.normalMap,nt=!!M.displacementMap,Ue=!!M.emissiveMap,R=!!M.metalnessMap,S=!!M.roughnessMap,O=M.anisotropy>0,re=M.clearcoat>0,ie=M.iridescence>0,se=M.sheen>0,Me=M.transmission>0,fe=O&&!!M.anisotropyMap,ge=re&&!!M.clearcoatMap,Ae=re&&!!M.clearcoatNormalMap,Be=re&&!!M.clearcoatRoughnessMap,j=ie&&!!M.iridescenceMap,Se=ie&&!!M.iridescenceThicknessMap,ve=se&&!!M.sheenColorMap,Re=se&&!!M.sheenRoughnessMap,we=!!M.specularMap,pe=!!M.specularColorMap,Oe=!!M.specularIntensityMap,ze=Me&&!!M.transmissionMap,et=Me&&!!M.thicknessMap,Ie=!!M.gradientMap,D=!!M.alphaMap,b=M.alphaTest>0,X=!!M.alphaHash,K=!!M.extensions,de=!!G.attributes.uv1,me=!!G.attributes.uv2,ae=!!G.attributes.uv3;let Ge=tr;return M.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ge=t.toneMapping),{isWebGL2:d,shaderID:k,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:ne,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ce,instancing:Ne,instancingColor:Ne&&le.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:ii,map:Te,matcap:be,envMap:B,envMapMode:B&&ee.mapping,envMapCubeUVHeight:N,aoMap:Mt,lightMap:Pe,bumpMap:Fe,normalMap:Ee,displacementMap:h&&nt,emissiveMap:Ue,normalMapObjectSpace:Ee&&M.normalMapType===iE,normalMapTangentSpace:Ee&&M.normalMapType===Kv,metalnessMap:R,roughnessMap:S,anisotropy:O,anisotropyMap:fe,clearcoat:re,clearcoatMap:ge,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,iridescence:ie,iridescenceMap:j,iridescenceThicknessMap:Se,sheen:se,sheenColorMap:ve,sheenRoughnessMap:Re,specularMap:we,specularColorMap:pe,specularIntensityMap:Oe,transmission:Me,transmissionMap:ze,thicknessMap:et,gradientMap:Ie,opaque:M.transparent===!1&&M.blending===Is,alphaMap:D,alphaTest:b,alphaHash:X,combine:M.combine,mapUv:Te&&_(M.map.channel),aoMapUv:Mt&&_(M.aoMap.channel),lightMapUv:Pe&&_(M.lightMap.channel),bumpMapUv:Fe&&_(M.bumpMap.channel),normalMapUv:Ee&&_(M.normalMap.channel),displacementMapUv:nt&&_(M.displacementMap.channel),emissiveMapUv:Ue&&_(M.emissiveMap.channel),metalnessMapUv:R&&_(M.metalnessMap.channel),roughnessMapUv:S&&_(M.roughnessMap.channel),anisotropyMapUv:fe&&_(M.anisotropyMap.channel),clearcoatMapUv:ge&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:pe&&_(M.specularColorMap.channel),specularIntensityMapUv:Oe&&_(M.specularIntensityMap.channel),transmissionMapUv:ze&&_(M.transmissionMap.channel),thicknessMapUv:et&&_(M.thicknessMap.channel),alphaMapUv:D&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ee||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:de,vertexUv2s:me,vertexUv3s:ae,pointsUvs:le.isPoints===!0&&!!G.attributes.uv&&(Te||D),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:le.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ge,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Te&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gi,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:K&&M.extensions.derivatives===!0,extensionFragDepth:K&&M.extensions.fragDepth===!0,extensionDrawBuffers:K&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:K&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:K&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const $ in M.defines)T.push($),T.push(M.defines[$]);return M.isRawShaderMaterial===!1&&(g(T,M),v(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function v(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const T=x[M.type];let $;if(T){const J=Zn[T];$=VE.clone(J.uniforms)}else $=M.uniforms;return $}function P(M,T){let $;for(let J=0,le=c.length;J<le;J++){const L=c[J];if(L.cacheKey===T){$=L,++$.usedTimes;break}}return $===void 0&&($=new iA(t,T,M,s),c.push($)),$}function C(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:P,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:F}}function lA(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function cA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,m,x,_,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:_,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function o(f,h,m,x,_,p){const u=a(f,h,m,x,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,x,_,p){const u=a(f,h,m,x,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||cA),i.length>1&&i.sort(h||Wm),r.length>1&&r.sort(h||Wm)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function uA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new jm,t.set(i,[a])):r>=s.length?(a=new jm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function dA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ze};break;case"SpotLight":n={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function fA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let hA=0;function pA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mA(t,e){const n=new dA,i=fA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new I);const s=new I,a=new Ct,o=new Ct;function l(d,f){let h=0,m=0,x=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let _=0,p=0,u=0,g=0,v=0,y=0,P=0,C=0,A=0,F=0,M=0;d.sort(pA);const T=f===!0?Math.PI:1;for(let J=0,le=d.length;J<le;J++){const L=d[J],G=L.color,Y=L.intensity,ee=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*Y*T,m+=G.g*Y*T,x+=G.b*Y*T;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],Y);M++}else if(L.isDirectionalLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const z=L.shadow,te=i.get(L);te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,r.directionalShadow[_]=te,r.directionalShadowMap[_]=N,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=k,_++}else if(L.isSpotLight){const k=n.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(G).multiplyScalar(Y*T),k.distance=ee,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[u]=k;const z=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,z.updateMatrices(L),L.castShadow&&F++),r.spotLightMatrix[u]=z.matrix,L.castShadow){const te=i.get(L);te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,r.spotShadow[u]=te,r.spotShadowMap[u]=N,C++}u++}else if(L.isRectAreaLight){const k=n.get(L);k.color.copy(G).multiplyScalar(Y),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=k,g++}else if(L.isPointLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*T),k.distance=L.distance,k.decay=L.decay,L.castShadow){const z=L.shadow,te=i.get(L);te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,te.shadowCameraNear=z.camera.near,te.shadowCameraFar=z.camera.far,r.pointShadow[p]=te,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=L.shadow.matrix,P++}r.point[p]=k,p++}else if(L.isHemisphereLight){const k=n.get(L);k.skyColor.copy(L.color).multiplyScalar(Y*T),k.groundColor.copy(L.groundColor).multiplyScalar(Y*T),r.hemi[v]=k,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const $=r.hash;($.directionalLength!==_||$.pointLength!==p||$.spotLength!==u||$.rectAreaLength!==g||$.hemiLength!==v||$.numDirectionalShadows!==y||$.numPointShadows!==P||$.numSpotShadows!==C||$.numSpotMaps!==A||$.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+A-F,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=M,$.directionalLength=_,$.pointLength=p,$.spotLength=u,$.rectAreaLength=g,$.hemiLength=v,$.numDirectionalShadows=y,$.numPointShadows=P,$.numSpotShadows=C,$.numSpotMaps=A,$.numLightProbes=M,r.version=hA++)}function c(d,f){let h=0,m=0,x=0,_=0,p=0;const u=f.matrixWorldInverse;for(let g=0,v=d.length;g<v;g++){const y=d[g];if(y.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),h++}else if(y.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),x++}else if(y.isRectAreaLight){const P=r.rectArea[_];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(u),o.identity(),a.copy(y.matrixWorld),a.premultiply(u),o.extractRotation(a),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Xm(t,e){const n=new mA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function gA(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Xm(t,e),n.set(s,[l])):a>=o.length?(l=new Xm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class vA extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _A extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SA(t,e,n){let i=new Jf;const r=new Je,s=new Je,a=new ut,o=new vA({depthPacking:nE}),l=new _A,c={},d=n.maxTextureSize,f={[sr]:rn,[rn]:sr,[gi]:gi},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:xA,fragmentShader:yA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Xr;x.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ov;let u=this.type;this.render=function(C,A,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const M=t.getRenderTarget(),T=t.getActiveCubeFace(),$=t.getActiveMipmapLevel(),J=t.state;J.setBlending(er),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const le=u!==ui&&this.type===ui,L=u===ui&&this.type!==ui;for(let G=0,Y=C.length;G<Y;G++){const ee=C[G],N=ee.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const k=N.getFrameExtents();if(r.multiply(k),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,N.mapSize.y=s.y)),N.map===null||le===!0||L===!0){const te=this.type!==ui?{minFilter:tn,magFilter:tn}:{};N.map!==null&&N.map.dispose(),N.map=new ar(r.x,r.y,te),N.map.texture.name=ee.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const z=N.getViewportCount();for(let te=0;te<z;te++){const Q=N.getViewport(te);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),J.viewport(a),N.updateMatrices(ee,te),i=N.getFrustum(),y(A,F,N.camera,ee,this.type)}N.isPointLightShadow!==!0&&this.type===ui&&g(N,F),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(M,T,$)};function g(C,A){const F=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ar(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,F,h,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,F,m,_,null)}function v(C,A,F,M){let T=null;const $=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if($!==void 0)T=$;else if(T=F.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const J=T.uuid,le=A.uuid;let L=c[J];L===void 0&&(L={},c[J]=L);let G=L[le];G===void 0&&(G=T.clone(),L[le]=G,A.addEventListener("dispose",P)),T=G}if(T.visible=A.visible,T.wireframe=A.wireframe,M===ui?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:f[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const J=t.properties.get(T);J.light=F}return T}function y(C,A,F,M,T){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===ui)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const le=e.update(C),L=C.material;if(Array.isArray(L)){const G=le.groups;for(let Y=0,ee=G.length;Y<ee;Y++){const N=G[Y],k=L[N.materialIndex];if(k&&k.visible){const z=v(C,k,M,T);C.onBeforeShadow(t,C,A,F,le,z,N),t.renderBufferDirect(F,null,le,z,C,N),C.onAfterShadow(t,C,A,F,le,z,N)}}}else if(L.visible){const G=v(C,L,M,T);C.onBeforeShadow(t,C,A,F,le,G,null),t.renderBufferDirect(F,null,le,G,C,null),C.onAfterShadow(t,C,A,F,le,G,null)}}const J=C.children;for(let le=0,L=J.length;le<L;le++)y(J[le],A,F,M,T)}function P(C){C.target.removeEventListener("dispose",P);for(const F in c){const M=c[F],T=C.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function MA(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const X=new ut;let K=null;const de=new ut(0,0,0,0);return{setMask:function(me){K!==me&&!b&&(t.colorMask(me,me,me,me),K=me)},setLocked:function(me){b=me},setClear:function(me,ae,Ge,it,ft){ft===!0&&(me*=it,ae*=it,Ge*=it),X.set(me,ae,Ge,it),de.equals(X)===!1&&(t.clearColor(me,ae,Ge,it),de.copy(X))},reset:function(){b=!1,K=null,de.set(-1,0,0,0)}}}function s(){let b=!1,X=null,K=null,de=null;return{setTest:function(me){me?Ce(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(me){X!==me&&!b&&(t.depthMask(me),X=me)},setFunc:function(me){if(K!==me){switch(me){case DM:t.depthFunc(t.NEVER);break;case NM:t.depthFunc(t.ALWAYS);break;case IM:t.depthFunc(t.LESS);break;case jl:t.depthFunc(t.LEQUAL);break;case UM:t.depthFunc(t.EQUAL);break;case FM:t.depthFunc(t.GEQUAL);break;case OM:t.depthFunc(t.GREATER);break;case kM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=me}},setLocked:function(me){b=me},setClear:function(me){de!==me&&(t.clearDepth(me),de=me)},reset:function(){b=!1,X=null,K=null,de=null}}}function a(){let b=!1,X=null,K=null,de=null,me=null,ae=null,Ge=null,it=null,ft=null;return{setTest:function(Ve){b||(Ve?Ce(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(Ve){X!==Ve&&!b&&(t.stencilMask(Ve),X=Ve)},setFunc:function(Ve,ht,It){(K!==Ve||de!==ht||me!==It)&&(t.stencilFunc(Ve,ht,It),K=Ve,de=ht,me=It)},setOp:function(Ve,ht,It){(ae!==Ve||Ge!==ht||it!==It)&&(t.stencilOp(Ve,ht,It),ae=Ve,Ge=ht,it=It)},setLocked:function(Ve){b=Ve},setClear:function(Ve){ft!==Ve&&(t.clearStencil(Ve),ft=Ve)},reset:function(){b=!1,X=null,K=null,de=null,me=null,ae=null,Ge=null,it=null,ft=null}}}const o=new r,l=new s,c=new a,d=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,_=[],p=null,u=!1,g=null,v=null,y=null,P=null,C=null,A=null,F=null,M=new Ze(0,0,0),T=0,$=!1,J=null,le=null,L=null,G=null,Y=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=k>=2);let te=null,Q={};const V=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ce=new ut().fromArray(V),ue=new ut().fromArray(ne);function xe(b,X,K,de){const me=new Uint8Array(4),ae=t.createTexture();t.bindTexture(b,ae),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<K;Ge++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(X,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(X+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ae}const Ne={};Ne[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(t.DEPTH_TEST),l.setFunc(jl),Ue(!1),R(Rp),Ce(t.CULL_FACE),Ee(er);function Ce(b){h[b]!==!0&&(t.enable(b),h[b]=!0)}function Te(b){h[b]!==!1&&(t.disable(b),h[b]=!1)}function be(b,X){return m[b]!==X?(t.bindFramebuffer(b,X),m[b]=X,i&&(b===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=X),b===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=X)),!0):!1}function B(b,X){let K=_,de=!1;if(b)if(K=x.get(X),K===void 0&&(K=[],x.set(X,K)),b.isWebGLMultipleRenderTargets){const me=b.texture;if(K.length!==me.length||K[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Ge=me.length;ae<Ge;ae++)K[ae]=t.COLOR_ATTACHMENT0+ae;K.length=me.length,de=!0}}else K[0]!==t.COLOR_ATTACHMENT0&&(K[0]=t.COLOR_ATTACHMENT0,de=!0);else K[0]!==t.BACK&&(K[0]=t.BACK,de=!0);de&&(n.isWebGL2?t.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Mt(b){return p!==b?(t.useProgram(b),p=b,!0):!1}const Pe={[wr]:t.FUNC_ADD,[vM]:t.FUNC_SUBTRACT,[_M]:t.FUNC_REVERSE_SUBTRACT};if(i)Pe[Lp]=t.MIN,Pe[Dp]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(Pe[Lp]=b.MIN_EXT,Pe[Dp]=b.MAX_EXT)}const Fe={[xM]:t.ZERO,[yM]:t.ONE,[SM]:t.SRC_COLOR,[Dd]:t.SRC_ALPHA,[RM]:t.SRC_ALPHA_SATURATE,[TM]:t.DST_COLOR,[EM]:t.DST_ALPHA,[MM]:t.ONE_MINUS_SRC_COLOR,[Nd]:t.ONE_MINUS_SRC_ALPHA,[AM]:t.ONE_MINUS_DST_COLOR,[wM]:t.ONE_MINUS_DST_ALPHA,[CM]:t.CONSTANT_COLOR,[bM]:t.ONE_MINUS_CONSTANT_COLOR,[PM]:t.CONSTANT_ALPHA,[LM]:t.ONE_MINUS_CONSTANT_ALPHA};function Ee(b,X,K,de,me,ae,Ge,it,ft,Ve){if(b===er){u===!0&&(Te(t.BLEND),u=!1);return}if(u===!1&&(Ce(t.BLEND),u=!0),b!==gM){if(b!==g||Ve!==$){if((v!==wr||C!==wr)&&(t.blendEquation(t.FUNC_ADD),v=wr,C=wr),Ve)switch(b){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cp:t.blendFunc(t.ONE,t.ONE);break;case bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case bp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}y=null,P=null,A=null,F=null,M.set(0,0,0),T=0,g=b,$=Ve}return}me=me||X,ae=ae||K,Ge=Ge||de,(X!==v||me!==C)&&(t.blendEquationSeparate(Pe[X],Pe[me]),v=X,C=me),(K!==y||de!==P||ae!==A||Ge!==F)&&(t.blendFuncSeparate(Fe[K],Fe[de],Fe[ae],Fe[Ge]),y=K,P=de,A=ae,F=Ge),(it.equals(M)===!1||ft!==T)&&(t.blendColor(it.r,it.g,it.b,ft),M.copy(it),T=ft),g=b,$=!1}function nt(b,X){b.side===gi?Te(t.CULL_FACE):Ce(t.CULL_FACE);let K=b.side===rn;X&&(K=!K),Ue(K),b.blending===Is&&b.transparent===!1?Ee(er):Ee(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),o.setMask(b.colorWrite);const de=b.stencilWrite;c.setTest(de),de&&(c.setMask(b.stencilWriteMask),c.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),c.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),O(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Ce(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(b){J!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),J=b)}function R(b){b!==pM?(Ce(t.CULL_FACE),b!==le&&(b===Rp?t.cullFace(t.BACK):b===mM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),le=b}function S(b){b!==L&&(N&&t.lineWidth(b),L=b)}function O(b,X,K){b?(Ce(t.POLYGON_OFFSET_FILL),(G!==X||Y!==K)&&(t.polygonOffset(X,K),G=X,Y=K)):Te(t.POLYGON_OFFSET_FILL)}function re(b){b?Ce(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function ie(b){b===void 0&&(b=t.TEXTURE0+ee-1),te!==b&&(t.activeTexture(b),te=b)}function se(b,X,K){K===void 0&&(te===null?K=t.TEXTURE0+ee-1:K=te);let de=Q[K];de===void 0&&(de={type:void 0,texture:void 0},Q[K]=de),(de.type!==b||de.texture!==X)&&(te!==K&&(t.activeTexture(K),te=K),t.bindTexture(b,X||Ne[b]),de.type=b,de.texture=X)}function Me(){const b=Q[te];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function fe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function j(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ve(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Re(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pe(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Oe(b){ce.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),ce.copy(b))}function ze(b){ue.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),ue.copy(b))}function et(b,X){let K=f.get(X);K===void 0&&(K=new WeakMap,f.set(X,K));let de=K.get(b);de===void 0&&(de=t.getUniformBlockIndex(X,b.name),K.set(b,de))}function Ie(b,X){const de=f.get(X).get(b);d.get(X)!==de&&(t.uniformBlockBinding(X,de,b.__bindingPointIndex),d.set(X,de))}function D(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},te=null,Q={},m={},x=new WeakMap,_=[],p=null,u=!1,g=null,v=null,y=null,P=null,C=null,A=null,F=null,M=new Ze(0,0,0),T=0,$=!1,J=null,le=null,L=null,G=null,Y=null,ce.set(0,0,t.canvas.width,t.canvas.height),ue.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:Te,bindFramebuffer:be,drawBuffers:B,useProgram:Mt,setBlending:Ee,setMaterial:nt,setFlipSided:Ue,setCullFace:R,setLineWidth:S,setPolygonOffset:O,setScissorTest:re,activeTexture:ie,bindTexture:se,unbindTexture:Me,compressedTexImage2D:fe,compressedTexImage3D:ge,texImage2D:we,texImage3D:pe,updateUBOMapping:et,uniformBlockBinding:Ie,texStorage2D:ve,texStorage3D:Re,texSubImage2D:Ae,texSubImage3D:Be,compressedTexSubImage2D:j,compressedTexSubImage3D:Se,scissor:Oe,viewport:ze,reset:D}}function EA(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return m?new OffscreenCanvas(R,S):Ql("canvas")}function _(R,S,O,re){let ie=1;if((R.width>re||R.height>re)&&(ie=re/Math.max(R.width,R.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const se=S?Zl:Math.floor,Me=se(ie*R.width),fe=se(ie*R.height);f===void 0&&(f=x(Me,fe));const ge=O?x(Me,fe):f;return ge.width=Me,ge.height=fe,ge.getContext("2d").drawImage(R,0,0,Me,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Me+"x"+fe+")."),ge}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return kd(R.width)&&kd(R.height)}function u(R){return o?!1:R.wrapS!==Wn||R.wrapT!==Wn||R.minFilter!==tn&&R.minFilter!==bn}function g(R,S){return R.generateMipmaps&&S&&R.minFilter!==tn&&R.minFilter!==bn}function v(R){t.generateMipmap(R)}function y(R,S,O,re,ie=!1){if(o===!1)return S;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=S;if(S===t.RED&&(O===t.FLOAT&&(se=t.R32F),O===t.HALF_FLOAT&&(se=t.R16F),O===t.UNSIGNED_BYTE&&(se=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(se=t.R8UI),O===t.UNSIGNED_SHORT&&(se=t.R16UI),O===t.UNSIGNED_INT&&(se=t.R32UI),O===t.BYTE&&(se=t.R8I),O===t.SHORT&&(se=t.R16I),O===t.INT&&(se=t.R32I)),S===t.RG&&(O===t.FLOAT&&(se=t.RG32F),O===t.HALF_FLOAT&&(se=t.RG16F),O===t.UNSIGNED_BYTE&&(se=t.RG8)),S===t.RGBA){const Me=ie?ql:st.getTransfer(re);O===t.FLOAT&&(se=t.RGBA32F),O===t.HALF_FLOAT&&(se=t.RGBA16F),O===t.UNSIGNED_BYTE&&(se=Me===ct?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function P(R,S,O){return g(R,O)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){return R===tn||R===Np||R===iu?t.NEAREST:t.LINEAR}function A(R){const S=R.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&d.delete(S)}function F(R){const S=R.target;S.removeEventListener("dispose",F),$(S)}function M(R){const S=i.get(R);if(S.__webglInit===void 0)return;const O=R.source,re=h.get(O);if(re){const ie=re[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(R),Object.keys(re).length===0&&h.delete(O)}i.remove(R)}function T(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const O=R.source,re=h.get(O);delete re[S.__cacheKey],a.memory.textures--}function $(R){const S=R.texture,O=i.get(R),re=i.get(S);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(O.__webglFramebuffer[ie]))for(let se=0;se<O.__webglFramebuffer[ie].length;se++)t.deleteFramebuffer(O.__webglFramebuffer[ie][se]);else t.deleteFramebuffer(O.__webglFramebuffer[ie]);O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[ie])}else{if(Array.isArray(O.__webglFramebuffer))for(let ie=0;ie<O.__webglFramebuffer.length;ie++)t.deleteFramebuffer(O.__webglFramebuffer[ie]);else t.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ie=0;ie<O.__webglColorRenderbuffer.length;ie++)O.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[ie]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ie=0,se=S.length;ie<se;ie++){const Me=i.get(S[ie]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(S[ie])}i.remove(S),i.remove(R)}let J=0;function le(){J=0}function L(){const R=J;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),J+=1,R}function G(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Y(R,S){const O=i.get(R);if(R.isVideoTexture&&nt(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(O,R,S);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function ee(R,S){const O=i.get(R);if(R.version>0&&O.__version!==R.version){ce(O,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function N(R,S){const O=i.get(R);if(R.version>0&&O.__version!==R.version){ce(O,R,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function k(R,S){const O=i.get(R);if(R.version>0&&O.__version!==R.version){ue(O,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const z={[Xl]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[Fd]:t.MIRRORED_REPEAT},te={[tn]:t.NEAREST,[Np]:t.NEAREST_MIPMAP_NEAREST,[iu]:t.NEAREST_MIPMAP_LINEAR,[bn]:t.LINEAR,[XM]:t.LINEAR_MIPMAP_NEAREST,[Xs]:t.LINEAR_MIPMAP_LINEAR},Q={[rE]:t.NEVER,[uE]:t.ALWAYS,[sE]:t.LESS,[Zv]:t.LEQUAL,[aE]:t.EQUAL,[cE]:t.GEQUAL,[oE]:t.GREATER,[lE]:t.NOTEQUAL};function V(R,S,O){if(O?(t.texParameteri(R,t.TEXTURE_WRAP_S,z[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,z[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,z[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,te[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,te[S.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Wn||S.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,C(S.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,C(S.minFilter)),S.minFilter!==tn&&S.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===tn||S.minFilter!==iu&&S.minFilter!==Xs||S.type===Wi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===io&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ne(R,S){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const re=S.source;let ie=h.get(re);ie===void 0&&(ie={},h.set(re,ie));const se=G(S);if(se!==R.__cacheKey){ie[se]===void 0&&(ie[se]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ie[se].usedTimes++;const Me=ie[R.__cacheKey];Me!==void 0&&(ie[R.__cacheKey].usedTimes--,Me.usedTimes===0&&T(S)),R.__cacheKey=se,R.__webglTexture=ie[se].texture}return O}function ce(R,S,O){let re=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=t.TEXTURE_3D);const ie=ne(R,S),se=S.source;n.bindTexture(re,R.__webglTexture,t.TEXTURE0+O);const Me=i.get(se);if(se.version!==Me.__version||ie===!0){n.activeTexture(t.TEXTURE0+O);const fe=st.getPrimaries(st.workingColorSpace),ge=S.colorSpace===Pn?null:st.getPrimaries(S.colorSpace),Ae=S.colorSpace===Pn||fe===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Be=u(S)&&p(S.image)===!1;let j=_(S.image,Be,!1,r.maxTextureSize);j=Ue(S,j);const Se=p(j)||o,ve=s.convert(S.format,S.colorSpace);let Re=s.convert(S.type),we=y(S.internalFormat,ve,Re,S.colorSpace,S.isVideoTexture);V(re,S,Se);let pe;const Oe=S.mipmaps,ze=o&&S.isVideoTexture!==!0&&we!==$v,et=Me.__version===void 0||ie===!0,Ie=P(S,j,Se);if(S.isDepthTexture)we=t.DEPTH_COMPONENT,o?S.type===Wi?we=t.DEPTH_COMPONENT32F:S.type===Vi?we=t.DEPTH_COMPONENT24:S.type===Nr?we=t.DEPTH24_STENCIL8:we=t.DEPTH_COMPONENT16:S.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ir&&we===t.DEPTH_COMPONENT&&S.type!==Xf&&S.type!==Vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Vi,Re=s.convert(S.type)),S.format===qs&&we===t.DEPTH_COMPONENT&&(we=t.DEPTH_STENCIL,S.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Nr,Re=s.convert(S.type))),et&&(ze?n.texStorage2D(t.TEXTURE_2D,1,we,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,we,j.width,j.height,0,ve,Re,null));else if(S.isDataTexture)if(Oe.length>0&&Se){ze&&et&&n.texStorage2D(t.TEXTURE_2D,Ie,we,Oe[0].width,Oe[0].height);for(let D=0,b=Oe.length;D<b;D++)pe=Oe[D],ze?n.texSubImage2D(t.TEXTURE_2D,D,0,0,pe.width,pe.height,ve,Re,pe.data):n.texImage2D(t.TEXTURE_2D,D,we,pe.width,pe.height,0,ve,Re,pe.data);S.generateMipmaps=!1}else ze?(et&&n.texStorage2D(t.TEXTURE_2D,Ie,we,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,j.width,j.height,ve,Re,j.data)):n.texImage2D(t.TEXTURE_2D,0,we,j.width,j.height,0,ve,Re,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,we,Oe[0].width,Oe[0].height,j.depth);for(let D=0,b=Oe.length;D<b;D++)pe=Oe[D],S.format!==jn?ve!==null?ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,D,0,0,0,pe.width,pe.height,j.depth,ve,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,D,we,pe.width,pe.height,j.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,D,0,0,0,pe.width,pe.height,j.depth,ve,Re,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,D,we,pe.width,pe.height,j.depth,0,ve,Re,pe.data)}else{ze&&et&&n.texStorage2D(t.TEXTURE_2D,Ie,we,Oe[0].width,Oe[0].height);for(let D=0,b=Oe.length;D<b;D++)pe=Oe[D],S.format!==jn?ve!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_2D,D,0,0,pe.width,pe.height,ve,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,D,we,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?n.texSubImage2D(t.TEXTURE_2D,D,0,0,pe.width,pe.height,ve,Re,pe.data):n.texImage2D(t.TEXTURE_2D,D,we,pe.width,pe.height,0,ve,Re,pe.data)}else if(S.isDataArrayTexture)ze?(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,we,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ve,Re,j.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,j.width,j.height,j.depth,0,ve,Re,j.data);else if(S.isData3DTexture)ze?(et&&n.texStorage3D(t.TEXTURE_3D,Ie,we,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ve,Re,j.data)):n.texImage3D(t.TEXTURE_3D,0,we,j.width,j.height,j.depth,0,ve,Re,j.data);else if(S.isFramebufferTexture){if(et)if(ze)n.texStorage2D(t.TEXTURE_2D,Ie,we,j.width,j.height);else{let D=j.width,b=j.height;for(let X=0;X<Ie;X++)n.texImage2D(t.TEXTURE_2D,X,we,D,b,0,ve,Re,null),D>>=1,b>>=1}}else if(Oe.length>0&&Se){ze&&et&&n.texStorage2D(t.TEXTURE_2D,Ie,we,Oe[0].width,Oe[0].height);for(let D=0,b=Oe.length;D<b;D++)pe=Oe[D],ze?n.texSubImage2D(t.TEXTURE_2D,D,0,0,ve,Re,pe):n.texImage2D(t.TEXTURE_2D,D,we,ve,Re,pe);S.generateMipmaps=!1}else ze?(et&&n.texStorage2D(t.TEXTURE_2D,Ie,we,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Re,j)):n.texImage2D(t.TEXTURE_2D,0,we,ve,Re,j);g(S,Se)&&v(re),Me.__version=se.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ue(R,S,O){if(S.image.length!==6)return;const re=ne(R,S),ie=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const se=i.get(ie);if(ie.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+O);const Me=st.getPrimaries(st.workingColorSpace),fe=S.colorSpace===Pn?null:st.getPrimaries(S.colorSpace),ge=S.colorSpace===Pn||Me===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,j=[];for(let D=0;D<6;D++)!Ae&&!Be?j[D]=_(S.image[D],!1,!0,r.maxCubemapSize):j[D]=Be?S.image[D].image:S.image[D],j[D]=Ue(S,j[D]);const Se=j[0],ve=p(Se)||o,Re=s.convert(S.format,S.colorSpace),we=s.convert(S.type),pe=y(S.internalFormat,Re,we,S.colorSpace),Oe=o&&S.isVideoTexture!==!0,ze=se.__version===void 0||re===!0;let et=P(S,Se,ve);V(t.TEXTURE_CUBE_MAP,S,ve);let Ie;if(Ae){Oe&&ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,et,pe,Se.width,Se.height);for(let D=0;D<6;D++){Ie=j[D].mipmaps;for(let b=0;b<Ie.length;b++){const X=Ie[b];S.format!==jn?Re!==null?Oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,b,0,0,X.width,X.height,Re,X.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,b,pe,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,b,0,0,X.width,X.height,Re,we,X.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,b,pe,X.width,X.height,0,Re,we,X.data)}}}else{Ie=S.mipmaps,Oe&&ze&&(Ie.length>0&&et++,n.texStorage2D(t.TEXTURE_CUBE_MAP,et,pe,j[0].width,j[0].height));for(let D=0;D<6;D++)if(Be){Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,j[D].width,j[D].height,Re,we,j[D].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,pe,j[D].width,j[D].height,0,Re,we,j[D].data);for(let b=0;b<Ie.length;b++){const K=Ie[b].image[D].image;Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,b+1,0,0,K.width,K.height,Re,we,K.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,b+1,pe,K.width,K.height,0,Re,we,K.data)}}else{Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Re,we,j[D]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,pe,Re,we,j[D]);for(let b=0;b<Ie.length;b++){const X=Ie[b];Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,b+1,0,0,Re,we,X.image[D]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+D,b+1,pe,Re,we,X.image[D])}}}g(S,ve)&&v(t.TEXTURE_CUBE_MAP),se.__version=ie.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xe(R,S,O,re,ie,se){const Me=s.convert(O.format,O.colorSpace),fe=s.convert(O.type),ge=y(O.internalFormat,Me,fe,O.colorSpace);if(!i.get(S).__hasExternalTextures){const Be=Math.max(1,S.width>>se),j=Math.max(1,S.height>>se);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,se,ge,Be,j,S.depth,0,Me,fe,null):n.texImage2D(ie,se,ge,Be,j,0,Me,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ee(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ie,i.get(O).__webglTexture,0,Fe(S)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ie,i.get(O).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(R,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let re=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(O||Ee(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Wi?re=t.DEPTH_COMPONENT32F:ie.type===Vi&&(re=t.DEPTH_COMPONENT24));const se=Fe(S);Ee(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,re,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,re,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const re=Fe(S);O&&Ee(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,S.width,S.height):Ee(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<re.length;ie++){const se=re[ie],Me=s.convert(se.format,se.colorSpace),fe=s.convert(se.type),ge=y(se.internalFormat,Me,fe,se.colorSpace),Ae=Fe(S);O&&Ee(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ge,S.width,S.height):Ee(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,ge,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ge,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const re=i.get(S.depthTexture).__webglTexture,ie=Fe(S);if(S.depthTexture.format===Ir)Ee(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(S.depthTexture.format===qs)Ee(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Te(R){const S=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,R)}else if(O){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=t.createRenderbuffer(),Ne(S.__webglDepthbuffer[re],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ne(S.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(R,S,O){const re=i.get(R);S!==void 0&&xe(re.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Te(R)}function B(R){const S=R.texture,O=i.get(R),re=i.get(S);R.addEventListener("dispose",F),R.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=S.version,a.memory.textures++);const ie=R.isWebGLCubeRenderTarget===!0,se=R.isWebGLMultipleRenderTargets===!0,Me=p(R)||o;if(ie){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let ge=0;ge<S.mipmaps.length;ge++)O.__webglFramebuffer[fe][ge]=t.createFramebuffer()}else O.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)O.__webglFramebuffer[fe]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const fe=R.texture;for(let ge=0,Ae=fe.length;ge<Ae;ge++){const Be=i.get(fe[ge]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Ee(R)===!1){const fe=se?S:[S];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ge=0;ge<fe.length;ge++){const Ae=fe[ge];O.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ge]);const Be=s.convert(Ae.format,Ae.colorSpace),j=s.convert(Ae.type),Se=y(Ae.internalFormat,Be,j,Ae.colorSpace,R.isXRRenderTarget===!0),ve=Fe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Se,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,O.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),V(t.TEXTURE_CUBE_MAP,S,Me);for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)xe(O.__webglFramebuffer[fe][ge],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else xe(O.__webglFramebuffer[fe],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(S,Me)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const fe=R.texture;for(let ge=0,Ae=fe.length;ge<Ae;ge++){const Be=fe[ge],j=i.get(Be);n.bindTexture(t.TEXTURE_2D,j.__webglTexture),V(t.TEXTURE_2D,Be,Me),xe(O.__webglFramebuffer,R,Be,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),g(Be,Me)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,re.__webglTexture),V(fe,S,Me),o&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)xe(O.__webglFramebuffer[ge],R,S,t.COLOR_ATTACHMENT0,fe,ge);else xe(O.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,fe,0);g(S,Me)&&v(fe),n.unbindTexture()}R.depthBuffer&&Te(R)}function Mt(R){const S=p(R)||o,O=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let re=0,ie=O.length;re<ie;re++){const se=O[re];if(g(se,S)){const Me=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(se).__webglTexture;n.bindTexture(Me,fe),v(Me),n.unbindTexture()}}}function Pe(R){if(o&&R.samples>0&&Ee(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],O=R.width,re=R.height;let ie=t.COLOR_BUFFER_BIT;const se=[],Me=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),ge=R.isWebGLMultipleRenderTargets===!0;if(ge)for(let Ae=0;Ae<S.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){se.push(t.COLOR_ATTACHMENT0+Ae),R.depthBuffer&&se.push(Me);const Be=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Be===!1&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),ge&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Ae]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),ge){const j=i.get(S[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,j,0)}t.blitFramebuffer(0,0,O,re,0,0,O,re,ie,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Ae=0;Ae<S.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Ae]);const Be=i.get(S[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Fe(R){return Math.min(r.maxSamples,R.samples)}function Ee(R){const S=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(R){const S=a.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function Ue(R,S){const O=R.colorSpace,re=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Od||O!==ii&&O!==Pn&&(st.getTransfer(O)===ct?o===!1?e.has("EXT_sRGB")===!0&&re===jn?(R.format=Od,R.minFilter=bn,R.generateMipmaps=!1):S=Jv.sRGBToLinear(S):(re!==jn||ie!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=L,this.resetTextureUnits=le,this.setTexture2D=Y,this.setTexture2DArray=ee,this.setTexture3D=N,this.setTextureCube=k,this.rebindTextures=be,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ee}function wA(t,e,n){const i=n.isWebGL2;function r(s,a=Pn){let o;const l=st.getTransfer(a);if(s===nr)return t.UNSIGNED_BYTE;if(s===Vv)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Wv)return t.UNSIGNED_SHORT_5_5_5_1;if(s===qM)return t.BYTE;if(s===$M)return t.SHORT;if(s===Xf)return t.UNSIGNED_SHORT;if(s===Gv)return t.INT;if(s===Vi)return t.UNSIGNED_INT;if(s===Wi)return t.FLOAT;if(s===io)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===YM)return t.ALPHA;if(s===jn)return t.RGBA;if(s===KM)return t.LUMINANCE;if(s===ZM)return t.LUMINANCE_ALPHA;if(s===Ir)return t.DEPTH_COMPONENT;if(s===qs)return t.DEPTH_STENCIL;if(s===Od)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===QM)return t.RED;if(s===jv)return t.RED_INTEGER;if(s===JM)return t.RG;if(s===Xv)return t.RG_INTEGER;if(s===qv)return t.RGBA_INTEGER;if(s===ru||s===su||s===au||s===ou)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ru)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===su)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ou)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ru)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===su)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ou)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ip||s===Up||s===Fp||s===Op)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ip)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Up)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Op)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$v)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kp||s===Bp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===kp)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Bp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zp||s===Hp||s===Gp||s===Vp||s===Wp||s===jp||s===Xp||s===qp||s===$p||s===Yp||s===Kp||s===Zp||s===Qp||s===Jp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===zp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===$p)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Kp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lu||s===em||s===tm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===lu)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===em)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===tm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===eE||s===nm||s===im||s===rm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===lu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===nm)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===im)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Nr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class TA extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pr extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AA={type:"move"};class Lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class RA extends Js{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,x=null;const _=n.getContextAttributes();let p=null,u=null;const g=[],v=[],y=new Je;let P=null;const C=new _n;C.layers.enable(1),C.viewport=new ut;const A=new _n;A.layers.enable(2),A.viewport=new ut;const F=[C,A],M=new TA;M.layers.enable(1),M.layers.enable(2);let T=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ne=g[V];return ne===void 0&&(ne=new Lu,g[V]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(V){let ne=g[V];return ne===void 0&&(ne=new Lu,g[V]=ne),ne.getGripSpace()},this.getHand=function(V){let ne=g[V];return ne===void 0&&(ne=new Lu,g[V]=ne),ne.getHandSpace()};function J(V){const ne=v.indexOf(V.inputSource);if(ne===-1)return;const ce=g[ne];ce!==void 0&&(ce.update(V.inputSource,V.frame,c||a),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function le(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",le),r.removeEventListener("inputsourceschange",L);for(let V=0;V<g.length;V++){const ne=v[V];ne!==null&&(v[V]=null,g[V].disconnect(ne))}T=null,$=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,u=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",le),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new ar(m.framebufferWidth,m.framebufferHeight,{format:jn,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ne=null,ce=null,ue=null;_.depth&&(ue=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=_.stencil?qs:Ir,ce=_.stencil?Nr:Vi);const xe={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new ar(h.textureWidth,h.textureHeight,{format:jn,type:nr,depthTexture:new u_(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ne=e.properties.get(u);Ne.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(V){for(let ne=0;ne<V.removed.length;ne++){const ce=V.removed[ne],ue=v.indexOf(ce);ue>=0&&(v[ue]=null,g[ue].disconnect(ce))}for(let ne=0;ne<V.added.length;ne++){const ce=V.added[ne];let ue=v.indexOf(ce);if(ue===-1){for(let Ne=0;Ne<g.length;Ne++)if(Ne>=v.length){v.push(ce),ue=Ne;break}else if(v[Ne]===null){v[Ne]=ce,ue=Ne;break}if(ue===-1)break}const xe=g[ue];xe&&xe.connect(ce)}}const G=new I,Y=new I;function ee(V,ne,ce){G.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const ue=G.distanceTo(Y),xe=ne.projectionMatrix.elements,Ne=ce.projectionMatrix.elements,Ce=xe[14]/(xe[10]-1),Te=xe[14]/(xe[10]+1),be=(xe[9]+1)/xe[5],B=(xe[9]-1)/xe[5],Mt=(xe[8]-1)/xe[0],Pe=(Ne[8]+1)/Ne[0],Fe=Ce*Mt,Ee=Ce*Pe,nt=ue/(-Mt+Pe),Ue=nt*-Mt;ne.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ue),V.translateZ(nt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const R=Ce+nt,S=Te+nt,O=Fe-Ue,re=Ee+(ue-Ue),ie=be*Te/S*R,se=B*Te/S*R;V.projectionMatrix.makePerspective(O,re,ie,se,R,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function N(V,ne){ne===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ne.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;M.near=A.near=C.near=V.near,M.far=A.far=C.far=V.far,(T!==M.near||$!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,$=M.far);const ne=V.parent,ce=M.cameras;N(M,ne);for(let ue=0;ue<ce.length;ue++)N(ce[ue],ne);ce.length===2?ee(M,C,A):M.projectionMatrix.copy(C.projectionMatrix),k(V,M,ne)};function k(V,ne,ce){ce===null?V.matrix.copy(ne.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(ne.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ro*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let z=null;function te(V,ne){if(d=ne.getViewerPose(c||a),x=ne,d!==null){const ce=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ue=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let xe=0;xe<ce.length;xe++){const Ne=ce[xe];let Ce=null;if(m!==null)Ce=m.getViewport(Ne);else{const be=f.getViewSubImage(h,Ne);Ce=be.viewport,xe===0&&(e.setRenderTargetTextures(u,be.colorTexture,h.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(u))}let Te=F[xe];Te===void 0&&(Te=new _n,Te.layers.enable(xe),Te.viewport=new ut,F[xe]=Te),Te.matrix.fromArray(Ne.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ne.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),xe===0&&(M.matrix.copy(Te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(Te)}}for(let ce=0;ce<g.length;ce++){const ue=v[ce],xe=g[ce];ue!==null&&xe!==void 0&&xe.update(ue,ne,c||a)}z&&z(V,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const Q=new l_;Q.setAnimationLoop(te),this.setAnimationLoop=function(V){z=V},this.dispose=function(){}}}function CA(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,a_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===rn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===rn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function bA(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function c(g,v){let y=r[g.id];y===void 0&&(x(g),y=d(g),r[g.id]=y,g.addEventListener("dispose",p));const P=v.program;i.updateUBOMapping(g,P);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function d(g){const v=f();g.__bindingPointIndex=v;const y=t.createBuffer(),P=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],y=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,A=y.length;C<A;C++){const F=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,T=F.length;M<T;M++){const $=F[M];if(m($,C,M,P)===!0){const J=$.__offset,le=Array.isArray($.value)?$.value:[$.value];let L=0;for(let G=0;G<le.length;G++){const Y=le[G],ee=_(Y);typeof Y=="number"||typeof Y=="boolean"?($.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,J+L,$.__data)):Y.isMatrix3?($.__data[0]=Y.elements[0],$.__data[1]=Y.elements[1],$.__data[2]=Y.elements[2],$.__data[3]=0,$.__data[4]=Y.elements[3],$.__data[5]=Y.elements[4],$.__data[6]=Y.elements[5],$.__data[7]=0,$.__data[8]=Y.elements[6],$.__data[9]=Y.elements[7],$.__data[10]=Y.elements[8],$.__data[11]=0):(Y.toArray($.__data,L),L+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,J,$.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,y,P){const C=g.value,A=v+"_"+y;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const F=P[A];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return P[A]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function x(g){const v=g.uniforms;let y=0;const P=16;for(let A=0,F=v.length;A<F;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let T=0,$=M.length;T<$;T++){const J=M[T],le=Array.isArray(J.value)?J.value:[J.value];for(let L=0,G=le.length;L<G;L++){const Y=le[L],ee=_(Y),N=y%P;N!==0&&P-N<ee.boundary&&(y+=P-N),J.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=y,y+=ee.storage}}}const C=y%P;return C>0&&(y+=P-C),g.__size=y,g.__cache={},this}function _(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class th{constructor(e={}){const{canvas:n=TE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const v=this;let y=!1,P=0,C=0,A=null,F=-1,M=null;const T=new ut,$=new ut;let J=null;const le=new Ze(0);let L=0,G=n.width,Y=n.height,ee=1,N=null,k=null;const z=new ut(0,0,G,Y),te=new ut(0,0,G,Y);let Q=!1;const V=new Jf;let ne=!1,ce=!1,ue=null;const xe=new Ct,Ne=new Je,Ce=new I,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return A===null?ee:1}let B=i;function Mt(w,U){for(let W=0;W<w.length;W++){const q=w[W],H=n.getContext(q,U);if(H!==null)return H}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jf}`),n.addEventListener("webglcontextlost",D,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",X,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),B=Mt(U,w),B===null)throw Mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Pe,Fe,Ee,nt,Ue,R,S,O,re,ie,se,Me,fe,ge,Ae,Be,j,Se,ve,Re,we,pe,Oe,ze;function et(){Pe=new BT(B),Fe=new NT(B,Pe,e),Pe.init(Fe),pe=new wA(B,Pe,Fe),Ee=new MA(B,Pe,Fe),nt=new GT(B),Ue=new lA,R=new EA(B,Pe,Ee,Ue,Fe,pe,nt),S=new UT(v),O=new kT(v),re=new KE(B,Fe),Oe=new LT(B,Pe,re,Fe),ie=new zT(B,re,nt,Oe),se=new XT(B,ie,re,nt),ve=new jT(B,Fe,R),Be=new IT(Ue),Me=new oA(v,S,O,Pe,Fe,Oe,Be),fe=new CA(v,Ue),ge=new uA,Ae=new gA(Pe,Fe),Se=new PT(v,S,O,Ee,se,h,l),j=new SA(v,se,Fe),ze=new bA(B,nt,Fe,Ee),Re=new DT(B,Pe,nt,Fe),we=new HT(B,Pe,nt,Fe),nt.programs=Me.programs,v.capabilities=Fe,v.extensions=Pe,v.properties=Ue,v.renderLists=ge,v.shadowMap=j,v.state=Ee,v.info=nt}et();const Ie=new RA(v,B);this.xr=Ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=Pe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Pe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(w){w!==void 0&&(ee=w,this.setSize(G,Y,!1))},this.getSize=function(w){return w.set(G,Y)},this.setSize=function(w,U,W=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Y=U,n.width=Math.floor(w*ee),n.height=Math.floor(U*ee),W===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(G*ee,Y*ee).floor()},this.setDrawingBufferSize=function(w,U,W){G=w,Y=U,ee=W,n.width=Math.floor(w*W),n.height=Math.floor(U*W),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(z)},this.setViewport=function(w,U,W,q){w.isVector4?z.set(w.x,w.y,w.z,w.w):z.set(w,U,W,q),Ee.viewport(T.copy(z).multiplyScalar(ee).floor())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,U,W,q){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,U,W,q),Ee.scissor($.copy(te).multiplyScalar(ee).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){Ee.setScissorTest(Q=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){k=w},this.getClearColor=function(w){return w.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(w=!0,U=!0,W=!0){let q=0;if(w){let H=!1;if(A!==null){const _e=A.texture.format;H=_e===qv||_e===Xv||_e===jv}if(H){const _e=A.texture.type,Le=_e===nr||_e===Vi||_e===Xf||_e===Nr||_e===Vv||_e===Wv,ke=Se.getClearColor(),He=Se.getClearAlpha(),qe=ke.r,We=ke.g,je=ke.b;Le?(m[0]=qe,m[1]=We,m[2]=je,m[3]=He,B.clearBufferuiv(B.COLOR,0,m)):(x[0]=qe,x[1]=We,x[2]=je,x[3]=He,B.clearBufferiv(B.COLOR,0,x))}else q|=B.COLOR_BUFFER_BIT}U&&(q|=B.DEPTH_BUFFER_BIT),W&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",D,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",X,!1),ge.dispose(),Ae.dispose(),Ue.dispose(),S.dispose(),O.dispose(),se.dispose(),Oe.dispose(),ze.dispose(),Me.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",ft),Ie.removeEventListener("sessionend",Ve),ue&&(ue.dispose(),ue=null),ht.stop()};function D(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=nt.autoReset,U=j.enabled,W=j.autoUpdate,q=j.needsUpdate,H=j.type;et(),nt.autoReset=w,j.enabled=U,j.autoUpdate=W,j.needsUpdate=q,j.type=H}function X(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function K(w){const U=w.target;U.removeEventListener("dispose",K),de(U)}function de(w){me(w),Ue.remove(w)}function me(w){const U=Ue.get(w).programs;U!==void 0&&(U.forEach(function(W){Me.releaseProgram(W)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,W,q,H,_e){U===null&&(U=Te);const Le=H.isMesh&&H.matrixWorld.determinant()<0,ke=wc(w,U,W,q,H);Ee.setMaterial(q,Le);let He=W.index,qe=1;if(q.wireframe===!0){if(He=ie.getWireframeAttribute(W),He===void 0)return;qe=2}const We=W.drawRange,je=W.attributes.position;let Et=We.start*qe,pn=(We.start+We.count)*qe;_e!==null&&(Et=Math.max(Et,_e.start*qe),pn=Math.min(pn,(_e.start+_e.count)*qe)),He!==null?(Et=Math.max(Et,0),pn=Math.min(pn,He.count)):je!=null&&(Et=Math.max(Et,0),pn=Math.min(pn,je.count));const Ut=pn-Et;if(Ut<0||Ut===1/0)return;Oe.setup(H,q,ke,W,He);let ri,gt=Re;if(He!==null&&(ri=re.get(He),gt=we,gt.setIndex(ri)),H.isMesh)q.wireframe===!0?(Ee.setLineWidth(q.wireframeLinewidth*be()),gt.setMode(B.LINES)):gt.setMode(B.TRIANGLES);else if(H.isLine){let $e=q.linewidth;$e===void 0&&($e=1),Ee.setLineWidth($e*be()),H.isLineSegments?gt.setMode(B.LINES):H.isLineLoop?gt.setMode(B.LINE_LOOP):gt.setMode(B.LINE_STRIP)}else H.isPoints?gt.setMode(B.POINTS):H.isSprite&&gt.setMode(B.TRIANGLES);if(H.isBatchedMesh)gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)gt.renderInstances(Et,Ut,H.count);else if(W.isInstancedBufferGeometry){const $e=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ac=Math.min(W.instanceCount,$e);gt.renderInstances(Et,Ut,Ac)}else gt.render(Et,Ut)};function ae(w,U,W){w.transparent===!0&&w.side===gi&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,fr(w,U,W),w.side=sr,w.needsUpdate=!0,fr(w,U,W),w.side=gi):fr(w,U,W)}this.compile=function(w,U,W=null){W===null&&(W=w),p=Ae.get(W),p.init(),g.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),w!==W&&w.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(v._useLegacyLights);const q=new Set;return w.traverse(function(H){const _e=H.material;if(_e)if(Array.isArray(_e))for(let Le=0;Le<_e.length;Le++){const ke=_e[Le];ae(ke,W,H),q.add(ke)}else ae(_e,W,H),q.add(_e)}),g.pop(),p=null,q},this.compileAsync=function(w,U,W=null){const q=this.compile(w,U,W);return new Promise(H=>{function _e(){if(q.forEach(function(Le){Ue.get(Le).currentProgram.isReady()&&q.delete(Le)}),q.size===0){H(w);return}setTimeout(_e,10)}Pe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ge=null;function it(w){Ge&&Ge(w)}function ft(){ht.stop()}function Ve(){ht.start()}const ht=new l_;ht.setAnimationLoop(it),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(w){Ge=w,Ie.setAnimationLoop(w),w===null?ht.stop():ht.start()},Ie.addEventListener("sessionstart",ft),Ie.addEventListener("sessionend",Ve),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(U),U=Ie.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,A),p=Ae.get(w,g.length),p.init(),g.push(p),xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V.setFromProjectionMatrix(xe),ce=this.localClippingEnabled,ne=Be.init(this.clippingPlanes,ce),_=ge.get(w,u.length),_.init(),u.push(_),It(w,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(N,k),this.info.render.frame++,ne===!0&&Be.beginShadows();const W=p.state.shadowsArray;if(j.render(W,w,U),ne===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(_,w),p.setupLights(v._useLegacyLights),U.isArrayCamera){const q=U.cameras;for(let H=0,_e=q.length;H<_e;H++){const Le=q[H];Ri(_,w,Le,Le.viewport)}}else Ri(_,w,U);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,U),Oe.resetDefaultState(),F=-1,M=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function It(w,U,W,q){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||V.intersectsSprite(w)){q&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);const Le=se.update(w),ke=w.material;ke.visible&&_.push(w,Le,ke,W,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||V.intersectsObject(w))){const Le=se.update(w),ke=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ce.copy(Le.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(ke)){const He=Le.groups;for(let qe=0,We=He.length;qe<We;qe++){const je=He[qe],Et=ke[je.materialIndex];Et&&Et.visible&&_.push(w,Le,Et,W,Ce.z,je)}}else ke.visible&&_.push(w,Le,ke,W,Ce.z,null)}}const _e=w.children;for(let Le=0,ke=_e.length;Le<ke;Le++)It(_e[Le],U,W,q)}function Ri(w,U,W,q){const H=w.opaque,_e=w.transmissive,Le=w.transparent;p.setupLightsView(W),ne===!0&&Be.setGlobalState(v.clippingPlanes,W),_e.length>0&&Gt(H,_e,U,W),q&&Ee.viewport(T.copy(q)),H.length>0&&Un(H,U,W),_e.length>0&&Un(_e,U,W),Le.length>0&&Un(Le,U,W),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Gt(w,U,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const _e=Fe.isWebGL2;ue===null&&(ue=new ar(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?io:nr,minFilter:Xs,samples:_e?4:0})),v.getDrawingBufferSize(Ne),_e?ue.setSize(Ne.x,Ne.y):ue.setSize(Zl(Ne.x),Zl(Ne.y));const Le=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(le),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const ke=v.toneMapping;v.toneMapping=tr,Un(w,W,q),R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue);let He=!1;for(let qe=0,We=U.length;qe<We;qe++){const je=U[qe],Et=je.object,pn=je.geometry,Ut=je.material,ri=je.group;if(Ut.side===gi&&Et.layers.test(q.layers)){const gt=Ut.side;Ut.side=rn,Ut.needsUpdate=!0,ia(Et,W,q,pn,Ut,ri),Ut.side=gt,Ut.needsUpdate=!0,He=!0}}He===!0&&(R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue)),v.setRenderTarget(Le),v.setClearColor(le,L),v.toneMapping=ke}function Un(w,U,W){const q=U.isScene===!0?U.overrideMaterial:null;for(let H=0,_e=w.length;H<_e;H++){const Le=w[H],ke=Le.object,He=Le.geometry,qe=q===null?Le.material:q,We=Le.group;ke.layers.test(W.layers)&&ia(ke,U,W,He,qe,We)}}function ia(w,U,W,q,H,_e){w.onBeforeRender(v,U,W,q,H,_e),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(v,U,W,q,w,_e),H.transparent===!0&&H.side===gi&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,v.renderBufferDirect(W,U,q,H,w,_e),H.side=sr,H.needsUpdate=!0,v.renderBufferDirect(W,U,q,H,w,_e),H.side=gi):v.renderBufferDirect(W,U,q,H,w,_e),w.onAfterRender(v,U,W,q,H,_e)}function fr(w,U,W){U.isScene!==!0&&(U=Te);const q=Ue.get(w),H=p.state.lights,_e=p.state.shadowsArray,Le=H.state.version,ke=Me.getParameters(w,H.state,_e,U,W),He=Me.getProgramCacheKey(ke);let qe=q.programs;q.environment=w.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(w.isMeshStandardMaterial?O:S).get(w.envMap||q.environment),qe===void 0&&(w.addEventListener("dispose",K),qe=new Map,q.programs=qe);let We=qe.get(He);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Le)return go(w,ke),We}else ke.uniforms=Me.getUniforms(w),w.onBuild(W,ke,v),w.onBeforeCompile(ke,v),We=Me.acquireProgram(ke,He),qe.set(He,We),q.uniforms=ke.uniforms;const je=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=Be.uniform),go(w,ke),q.needsLights=E_(w),q.lightsStateVersion=Le,q.needsLights&&(je.ambientLightColor.value=H.state.ambient,je.lightProbe.value=H.state.probe,je.directionalLights.value=H.state.directional,je.directionalLightShadows.value=H.state.directionalShadow,je.spotLights.value=H.state.spot,je.spotLightShadows.value=H.state.spotShadow,je.rectAreaLights.value=H.state.rectArea,je.ltc_1.value=H.state.rectAreaLTC1,je.ltc_2.value=H.state.rectAreaLTC2,je.pointLights.value=H.state.point,je.pointLightShadows.value=H.state.pointShadow,je.hemisphereLights.value=H.state.hemi,je.directionalShadowMap.value=H.state.directionalShadowMap,je.directionalShadowMatrix.value=H.state.directionalShadowMatrix,je.spotShadowMap.value=H.state.spotShadowMap,je.spotLightMatrix.value=H.state.spotLightMatrix,je.spotLightMap.value=H.state.spotLightMap,je.pointShadowMap.value=H.state.pointShadowMap,je.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function mo(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=_l.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function go(w,U){const W=Ue.get(w);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function wc(w,U,W,q,H){U.isScene!==!0&&(U=Te),R.resetTextureUnits();const _e=U.fog,Le=q.isMeshStandardMaterial?U.environment:null,ke=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ii,He=(q.isMeshStandardMaterial?O:S).get(q.envMap||Le),qe=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),je=!!W.morphAttributes.position,Et=!!W.morphAttributes.normal,pn=!!W.morphAttributes.color;let Ut=tr;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ut=v.toneMapping);const ri=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=ri!==void 0?ri.length:0,$e=Ue.get(q),Ac=p.state.lights;if(ne===!0&&(ce===!0||w!==M)){const wn=w===M&&q.id===F;Be.setState(q,w,wn)}let yt=!1;q.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ac.state.version||$e.outputColorSpace!==ke||H.isBatchedMesh&&$e.batching===!1||!H.isBatchedMesh&&$e.batching===!0||H.isInstancedMesh&&$e.instancing===!1||!H.isInstancedMesh&&$e.instancing===!0||H.isSkinnedMesh&&$e.skinning===!1||!H.isSkinnedMesh&&$e.skinning===!0||H.isInstancedMesh&&$e.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$e.instancingColor===!1&&H.instanceColor!==null||$e.envMap!==He||q.fog===!0&&$e.fog!==_e||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Be.numPlanes||$e.numIntersection!==Be.numIntersection)||$e.vertexAlphas!==qe||$e.vertexTangents!==We||$e.morphTargets!==je||$e.morphNormals!==Et||$e.morphColors!==pn||$e.toneMapping!==Ut||Fe.isWebGL2===!0&&$e.morphTargetsCount!==gt)&&(yt=!0):(yt=!0,$e.__version=q.version);let hr=$e.currentProgram;yt===!0&&(hr=fr(q,U,H));let sh=!1,ra=!1,Rc=!1;const Vt=hr.getUniforms(),pr=$e.uniforms;if(Ee.useProgram(hr.program)&&(sh=!0,ra=!0,Rc=!0),q.id!==F&&(F=q.id,ra=!0),sh||M!==w){Vt.setValue(B,"projectionMatrix",w.projectionMatrix),Vt.setValue(B,"viewMatrix",w.matrixWorldInverse);const wn=Vt.map.cameraPosition;wn!==void 0&&wn.setValue(B,Ce.setFromMatrixPosition(w.matrixWorld)),Fe.logarithmicDepthBuffer&&Vt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Vt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ra=!0,Rc=!0)}if(H.isSkinnedMesh){Vt.setOptional(B,H,"bindMatrix"),Vt.setOptional(B,H,"bindMatrixInverse");const wn=H.skeleton;wn&&(Fe.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Vt.setValue(B,"boneTexture",wn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Vt.setOptional(B,H,"batchingTexture"),Vt.setValue(B,"batchingTexture",H._matricesTexture,R));const Cc=W.morphAttributes;if((Cc.position!==void 0||Cc.normal!==void 0||Cc.color!==void 0&&Fe.isWebGL2===!0)&&ve.update(H,W,hr),(ra||$e.receiveShadow!==H.receiveShadow)&&($e.receiveShadow=H.receiveShadow,Vt.setValue(B,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(pr.envMap.value=He,pr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ra&&(Vt.setValue(B,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&Tc(pr,Rc),_e&&q.fog===!0&&fe.refreshFogUniforms(pr,_e),fe.refreshMaterialUniforms(pr,q,ee,Y,ue),_l.upload(B,mo($e),pr,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(_l.upload(B,mo($e),pr,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Vt.setValue(B,"center",H.center),Vt.setValue(B,"modelViewMatrix",H.modelViewMatrix),Vt.setValue(B,"normalMatrix",H.normalMatrix),Vt.setValue(B,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const wn=q.uniformsGroups;for(let bc=0,w_=wn.length;bc<w_;bc++)if(Fe.isWebGL2){const ah=wn[bc];ze.update(ah,hr),ze.bind(ah,hr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hr}function Tc(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function E_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,U,W){Ue.get(w.texture).__webglTexture=U,Ue.get(w.depthTexture).__webglTexture=W;const q=Ue.get(w);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,U){const W=Ue.get(w);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,W=0){A=w,P=U,C=W;let q=!0,H=null,_e=!1,Le=!1;if(w){const He=Ue.get(w);He.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(B.FRAMEBUFFER,null),q=!1):He.__webglFramebuffer===void 0?R.setupRenderTarget(w):He.__hasExternalTextures&&R.rebindTextures(w,Ue.get(w.texture).__webglTexture,Ue.get(w.depthTexture).__webglTexture);const qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const We=Ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[U])?H=We[U][W]:H=We[U],_e=!0):Fe.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?H=Ue.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?H=We[W]:H=We,T.copy(w.viewport),$.copy(w.scissor),J=w.scissorTest}else T.copy(z).multiplyScalar(ee).floor(),$.copy(te).multiplyScalar(ee).floor(),J=Q;if(Ee.bindFramebuffer(B.FRAMEBUFFER,H)&&Fe.drawBuffers&&q&&Ee.drawBuffers(w,H),Ee.viewport(T),Ee.scissor($),Ee.setScissorTest(J),_e){const He=Ue.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,He.__webglTexture,W)}else if(Le){const He=Ue.get(w.texture),qe=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.__webglTexture,W||0,qe)}F=-1},this.readRenderTargetPixels=function(w,U,W,q,H,_e,Le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){Ee.bindFramebuffer(B.FRAMEBUFFER,ke);try{const He=w.texture,qe=He.format,We=He.type;if(qe!==jn&&pe.convert(qe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=We===io&&(Pe.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(We!==nr&&pe.convert(We)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===Wi&&(Fe.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-q&&W>=0&&W<=w.height-H&&B.readPixels(U,W,q,H,pe.convert(qe),pe.convert(We),_e)}finally{const He=A!==null?Ue.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(B.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(w,U,W=0){const q=Math.pow(2,-W),H=Math.floor(U.image.width*q),_e=Math.floor(U.image.height*q);R.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,w.x,w.y,H,_e),Ee.unbindTexture()},this.copyTextureToTexture=function(w,U,W,q=0){const H=U.image.width,_e=U.image.height,Le=pe.convert(W.format),ke=pe.convert(W.type);R.setTexture2D(W,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,q,w.x,w.y,H,_e,Le,ke,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,q,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,Le,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,q,w.x,w.y,Le,ke,U.image),q===0&&W.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,U,W,q,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=w.max.x-w.min.x+1,Le=w.max.y-w.min.y+1,ke=w.max.z-w.min.z+1,He=pe.convert(q.format),qe=pe.convert(q.type);let We;if(q.isData3DTexture)R.setTexture3D(q,0),We=B.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)R.setTexture2DArray(q,0),We=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const je=B.getParameter(B.UNPACK_ROW_LENGTH),Et=B.getParameter(B.UNPACK_IMAGE_HEIGHT),pn=B.getParameter(B.UNPACK_SKIP_PIXELS),Ut=B.getParameter(B.UNPACK_SKIP_ROWS),ri=B.getParameter(B.UNPACK_SKIP_IMAGES),gt=W.isCompressedTexture?W.mipmaps[H]:W.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,gt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,w.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,w.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?B.texSubImage3D(We,H,U.x,U.y,U.z,_e,Le,ke,He,qe,gt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(We,H,U.x,U.y,U.z,_e,Le,ke,He,gt.data)):B.texSubImage3D(We,H,U.x,U.y,U.z,_e,Le,ke,He,qe,gt),B.pixelStorei(B.UNPACK_ROW_LENGTH,je),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ut),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ri),H===0&&q.generateMipmaps&&B.generateMipmap(We),Ee.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,Ee.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===qf?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===Sc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?Ur:Yv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ur?Pt:ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class PA extends th{}PA.prototype.isWebGL1Renderer=!0;class Jl extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class g_ extends hn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class LA extends ta{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Bi extends ta{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kv,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qm extends Bi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nh extends Kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Du=new Ct,$m=new I,Ym=new I;class v_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jf,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;$m.setFromMatrixPosition(e.matrixWorld),n.position.copy($m),Ym.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ym),n.updateMatrixWorld(),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Km=new Ct,va=new I,Nu=new I;class DA extends v_{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),va.setFromMatrixPosition(e.matrixWorld),i.position.copy(va),Nu.copy(i.position),Nu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Nu),i.updateMatrixWorld(),r.makeTranslation(-va.x,-va.y,-va.z),Km.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km)}}class NA extends nh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new DA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class IA extends v_{constructor(){super(new c_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zm extends nh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new IA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class UA extends nh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class FA{constructor(e,n,i=0,r=1/0){this.ray=new n_(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Kf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Hd(e,this,i,n),i.sort(Qm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Hd(e[r],this,i,n);return i.sort(Qm),i}}function Qm(t,e){return t.distance-e.distance}function Hd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)Hd(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);const De=600,Ke=900,Ii='"Libre Caslon Display", Georgia, serif',Gd="Inter, system-ui, sans-serif",di="Délio Duchesne-Brajon";function ec(t){const e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function Ea(t){const[e,n,i]=ec(t).map(r=>{const s=r/255;return s<=.03928?s/12.92:((s+.055)/1.055)**2.4});return .2126*e+.7152*n+.0722*i}function il(t,e){const[n,i,r]=ec(t).map(s=>Math.max(0,Math.min(255,Math.round(s*e))));return`rgb(${n},${i},${r})`}function OA(t,e,n){const i=ec(t),r=ec(e);return`rgb(${i.map((s,a)=>Math.round(s+(r[a]-s)*n)).join(",")})`}function Jm(t){return Ea(t)>.42?"#111":"#fff"}function eg(t,e,n){const i=String(e).split(/\s+/),r=[];let s="";for(const a of i){const o=s?`${s} ${a}`:a;t.measureText(o).width>n&&s?(r.push(s),s=a):s=o}return s&&r.push(s),r}function fi(t,e,{family:n,weight:i=400,maxW:r,maxH:s,start:a=120,min:o=26,lh:l=1.02}){for(let c=a;c>=o;c-=2){t.font=`${i} ${c}px ${n}`;const d=eg(t,e,r),f=Math.max(...d.map(h=>t.measureText(h).width));if(d.length*c*l<=s&&f<=r)return{size:c,lines:d,lh:l}}return t.font=`${i} ${o}px ${n}`,{size:o,lines:eg(t,e,r),lh:l}}function hi(t,{size:e,lines:n,lh:i},r,s,a="left"){return t.textAlign=a,t.textBaseline="alphabetic",n.forEach((o,l)=>t.fillText(o,r,s+e*.82+l*e*i)),s+n.length*e*i}function pt(t,e,n,i,r,s="left",a=19,o=.16){t.save(),t.fillStyle=r,t.font=`500 ${a}px ${Gd}`,t.textAlign=s,"letterSpacing"in t&&(t.letterSpacing=`${o}em`),t.fillText(String(e).toUpperCase(),n,i),t.restore()}function kA(t,e=18){const n=t.getImageData(0,0,De,Ke),i=n.data;for(let r=0;r<i.length;r+=4){const s=(Math.random()-.5)*e;i[r]+=s,i[r+1]+=s,i[r+2]+=s}t.putImageData(n,0,0)}const tg=[(t,e)=>{t.fillStyle="#f2f0ea",t.fillRect(0,0,De,Ke),t.fillStyle="#111",t.fillRect(48,56,De-96,3),pt(t,e.kicker,48,100,"#111"),t.fillStyle="#111";const n=fi(t,e.title,{family:Gd,weight:600,maxW:De-96,maxH:430,start:104});hi(t,n,48,140),t.fillStyle=e.color,t.beginPath(),t.arc(De-150,Ke-250,104,0,Math.PI*2),t.fill(),t.fillStyle="#111",t.fillRect(48,Ke-104,De-96,1.5),pt(t,di,48,Ke-64,"#111","left",17),pt(t,e.footer,De-48,Ke-64,"#111","right",17)},(t,e)=>{t.fillStyle=e.color,t.fillRect(0,0,De,Ke);const n=Jm(e.color),i=Ea(e.color)>.42?"#111":"#f2f0ea";t.fillStyle=il(e.color,Ea(e.color)>.42?.78:1.45),t.beginPath(),t.arc(De*.66,250,190,0,Math.PI*2),t.fill(),t.fillStyle=i,t.beginPath(),t.arc(De*.3,330,120,Math.PI,0),t.fill(),t.fillRect(De*.3-120,330,240,22),t.fillStyle=n,pt(t,e.kicker,48,80,n);const r=fi(t,e.title,{family:Ii,maxW:De-96,maxH:290,start:110});hi(t,r,48,Ke-120-r.lines.length*r.size*r.lh),pt(t,`${di}  ·  ${e.footer}`,48,Ke-60,n,"left",16)},(t,e)=>{const n=t.createLinearGradient(0,0,De*.3,Ke);n.addColorStop(0,OA(e.color,"#ffffff",.35)),n.addColorStop(.55,e.color),n.addColorStop(1,il(e.color,.35)),t.fillStyle=n,t.fillRect(0,0,De,Ke),t.globalAlpha=.22;for(let r=0;r<7;r++)t.fillStyle=r%2?"#ffffff":il(e.color,.5),t.beginPath(),t.ellipse(De*(.2+r*.13%.7),Ke*(.25+r*.17%.6),160,60,r*.6,0,Math.PI*2),t.fill();t.globalAlpha=1,kA(t,22),t.fillStyle="#fff",pt(t,e.kicker,De/2,96,"#fff","center");const i=fi(t,e.title,{family:Ii,maxW:De-110,maxH:380,start:112});t.fillStyle="#fff",hi(t,i,De/2,Ke/2-i.lines.length*i.size*i.lh/2,"center"),pt(t,di,De/2,Ke-90,"#fff","center",17),pt(t,e.footer,De/2,Ke-58,"rgba(255,255,255,.75)","center",15)},(t,e)=>{t.fillStyle="#f3f3f1",t.fillRect(0,0,De,Ke);let n=48,i=e.index*7+3;for(t.fillStyle="#111";n<De-48;){i=(i*9301+49297)%233280;const s=2+i%9;t.fillRect(n,56,s,430),n+=s+8+i%13}t.fillStyle=e.color,t.fillRect(48,470,120,16),pt(t,e.kicker,48,540,"#111"),t.fillStyle="#111";const r=fi(t,e.title,{family:Ii,maxW:De-96,maxH:250,start:92});hi(t,r,48,560),pt(t,`${di}  ·  ${e.footer}`,48,Ke-56,"#111","left",15)},(t,e)=>{t.fillStyle="#05070f",t.fillRect(0,0,De,Ke);const n=Ea(e.color)<.08?"#4f8cff":e.color;t.strokeStyle=n,t.globalAlpha=.75,t.lineWidth=2;const i=430;for(let a=-10;a<=10;a++)t.beginPath(),t.moveTo(De/2+a*22,i),t.lineTo(De/2+a*110,Ke),t.stroke();for(let a=0;a<12;a++){const o=i+(Ke-i)*(a/12)**1.8;t.beginPath(),t.moveTo(0,o),t.lineTo(De,o),t.stroke()}t.globalAlpha=1;const r=t.createLinearGradient(0,0,0,i);r.addColorStop(0,"#05070f"),r.addColorStop(1,il(n.startsWith("#")?n:"#4f8cff",.35)),t.fillStyle=r,t.fillRect(0,0,De,i),pt(t,e.kicker,48,92,n),t.fillStyle="#fff";const s=fi(t,e.title.toUpperCase(),{family:Gd,weight:600,maxW:De-96,maxH:270,start:84});hi(t,s,48,130),pt(t,`${di}  ·  ${e.footer}`,48,Ke-52,"#fff","left",15)},(t,e)=>{t.fillStyle="#0c0b0b",t.fillRect(0,0,De,Ke),t.strokeStyle="rgba(255,255,255,.8)",t.lineWidth=1.2;const n=De/2,i=360;for(let s=0;s<48;s++){const a=s/48*Math.PI*2;t.beginPath(),t.ellipse(n+Math.cos(a)*70,i+Math.sin(a)*70,130,34,a,0,Math.PI*2),t.stroke()}t.fillStyle=e.color,t.beginPath(),t.arc(n,i,42,0,Math.PI*2),t.fill(),pt(t,e.kicker,n,92,"rgba(255,255,255,.85)","center"),t.fillStyle="#fff";const r=fi(t,e.title,{family:Ii,maxW:De-110,maxH:220,start:84});hi(t,r,n,600,"center"),pt(t,di,n,Ke-82,"#fff","center",16),pt(t,e.footer,n,Ke-52,"rgba(255,255,255,.6)","center",14)},(t,e)=>{t.fillStyle="#efe7d6",t.fillRect(0,0,De,Ke),t.fillStyle=e.color,t.fillRect(0,0,De,Ke*.48);const n=Jm(e.color);t.fillStyle=n,t.font=`400 300px ${Ii}`,t.textAlign="right",t.globalAlpha=.22,t.fillText(String(e.index%99+1).padStart(2,"0"),De-30,Ke*.46),t.globalAlpha=1,pt(t,e.kicker,48,92,n),t.fillStyle="#16120d";const i=fi(t,e.title,{family:Ii,maxW:De-96,maxH:300,start:96});hi(t,i,48,Ke*.48+50),pt(t,`${di}  ·  ${e.footer}`,48,Ke-56,"#16120d","left",15)},(t,e)=>{const n=Ea(e.color)>.25?"#021f42":e.color;t.fillStyle=n,t.fillRect(0,0,De,Ke);const i="#d9b65d";for(let s=0;s<5;s++){const a=90+s*105,o=250;t.fillStyle=i,t.beginPath(),t.arc(a,o,40,0,Math.PI*2),t.fill(),t.fillStyle=n,t.beginPath(),t.arc(a+(s-2)*22,o,40,0,Math.PI*2),t.fill()}pt(t,e.kicker,De/2,110,i,"center"),t.fillStyle=i;const r=fi(t,e.title,{family:Ii,maxW:De-110,maxH:300,start:100});hi(t,r,De/2,400,"center"),t.fillRect(De/2-40,Ke-140,80,2),pt(t,di,De/2,Ke-90,i,"center",16),pt(t,e.footer,De/2,Ke-58,"rgba(217,182,93,.7)","center",14)}];function ih({kicker:t="",title:e,footer:n="",color:i="#2c4f63",index:r=0,style:s}){const a=document.createElement("canvas");a.width=De,a.height=Ke;const o=a.getContext("2d",{willReadFrequently:!0}),l=tg[(s??r)%tg.length];return l(o,{kicker:t,title:e,footer:n,color:i,index:r}),a}function ng(t){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="#efe7d6",n.fillRect(0,0,256,256);for(let i=0;i<256;i+=2)n.fillStyle=`rgba(90,62,30,${.05+Math.random()*.12})`,t?n.fillRect(i,0,1,256):n.fillRect(0,i,256,1);return e}function BA({kicker:t="",title:e,footer:n="",color:i="#2c4f63"}){const r=document.createElement("canvas");r.width=De,r.height=Ke;const s=r.getContext("2d"),a=s.createLinearGradient(0,0,De,0);a.addColorStop(0,"#e4dccb"),a.addColorStop(.08,"#f4eedf"),a.addColorStop(1,"#f1ead9"),s.fillStyle=a,s.fillRect(0,0,De,Ke),s.fillStyle=i,s.fillRect(De/2-30,150,60,4),pt(s,t,De/2,230,"#6b5a43","center",16),s.fillStyle="#16120d";const o=fi(s,e,{family:Ii,maxW:De-150,maxH:330,start:70,min:24,lh:1.08});return hi(s,o,De/2,280,"center"),s.fillStyle="#16120d",s.fillRect(De/2-18,660,36,1.5),pt(s,di,De/2,720,"#16120d","center",16),pt(s,n,De/2,756,"#6b5a43","center",14),pt(s,"BTS SIO · SLAM",De/2,Ke-70,"#8a7a63","center",12),r}function zA(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="#808080",n.fillRect(0,0,256,256);for(let r=0;r<256;r+=2)n.fillStyle=`rgba(255,255,255,${.05+Math.random()*.12})`,n.fillRect(0,r,256,1),n.fillStyle=`rgba(0,0,0,${.05+Math.random()*.12})`,n.fillRect(r,0,1,256);const i=n.getImageData(0,0,256,256);for(let r=0;r<i.data.length;r+=4){const s=(Math.random()-.5)*30;i.data[r]+=s,i.data[r+1]+=s,i.data[r+2]+=s}return n.putImageData(i,0,0),e}async function __(){if(document.fonts)try{await Promise.all([document.fonts.load('400 80px "Libre Caslon Display"'),document.fonts.load("500 20px Inter"),document.fonts.load("600 80px Inter")])}catch{}}const Vd=.1786,HA=.174,tc=1.6,GA=2.5,VA="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";function x_(t){return Math.max(3,Math.ceil(1.9/(Math.max(t,1)*Vd)))}const wa={NOIR:[.055,.055,.065],ROUGE:[.085,.05,.06],VERT:[.059,.055,.078],JAUNE:[.08,.075,.05],BLEU:[.05,.06,.09]},ig=(t,e,n)=>{const i=Math.min(1,Math.max(0,(n-t)/(e-t)));return i*i*(3-2*i)};function WA(){const t=e=>Array.from({length:e},()=>VA[Math.random()*36|0]).join("");return`${t(2+(Math.random()*2|0))} ${t(3+(Math.random()*2|0))}`}const rg=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }
`,jA=`
uniform vec3 uBase; uniform vec2 uRes; uniform float uT;
varying vec2 vUv;
float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec2 q = vUv - 0.5; q.x *= uRes.x / uRes.y;
  float r = clamp(length(q) / 0.9, 0.0, 1.0);
  vec3 c = uBase * (1.0 + 0.25 * (1.0 - r));
  c += (h(floor(vUv * uRes) + fract(uT) * 91.7) - 0.5) * 0.012;
  gl_FragColor = vec4(c, 1.0);
}
`,XA=`
uniform float uX; uniform vec2 uRes; uniform float uS; uniform float uGrid; uniform vec4 uGR;
uniform float uMob; uniform float uCW;
varying vec2 vUv;
float topAt(float px) {
  float dxn = (px - uRes.x * 0.5) / uRes.x;
  float k = uMob > 0.5 ? ${tc.toFixed(1)} : 1.0;
  float base = uMob > 0.5 ? 0.26 : 0.217;
  return uRes.y * (base - 0.03 * smoothstep(0.30, 0.45, abs(dxn) * k));
}
float botAt() {
  float k = uMob > 0.5 ? ${tc.toFixed(1)} : 1.0;
  float base = uMob > 0.5 ? 0.60 : 0.659;
  return uRes.y * (base - 0.135 * smoothstep(0.12, 0.39, abs(uX) * k));
}
void main() {
  vUv = uv;
  float cx = uRes.x * 0.5 + uX * uRes.x;
  float px = cx + position.x * uCW;
  float bot = botAt();
  float py = mix(bot, topAt(px), uv.y);
  vec2 c = vec2(cx, (topAt(cx) + bot) * 0.5);
  vec2 p = c + (vec2(px, py) - c) * uS;
  vec2 g = vec2(uGR.x + uv.x * uGR.z, uGR.y + (1.0 - uv.y) * uGR.w);
  p = mix(p, g, uGrid);
  gl_Position = vec4(p.x / uRes.x * 2.0 - 1.0, 1.0 - p.y / uRes.y * 2.0, 0.0, 1.0);
}
`,qA=`
uniform sampler2D uTex; uniform vec2 uSize; uniform float uRev; uniform float uSeed;
uniform float uHover; uniform float uAlpha; uniform float uImgA;
varying vec2 vUv;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float sdRound(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
vec2 coverUv(vec2 uv) {
  float ca = uSize.x / max(uSize.y, 1.0);
  vec2 s = vec2(1.0);
  if (ca > uImgA) s.y = uImgA / ca; else s.x = ca / uImgA;
  vec2 o = vec2((1.0 - s.x) * 0.5, (1.0 - s.y) * 0.72);
  return o + uv * s;
}
void main() {
  vec2 p = (vUv - 0.5) * uSize;
  float d = sdRound(p, uSize * 0.5, 0.048 * uSize.x);
  float alpha = 1.0 - smoothstep(-0.8, 0.8, d);
  vec3 col = texture2D(uTex, coverUv(vUv)).rgb;
  col *= 1.0 + 0.08 * uHover;
  vec2 cell = floor(vUv * vec2(5.0, 7.0));
  float r = hash(cell + uSeed) * 0.92 + 0.04;
  if (r > uRev) {
    col = vec3(0.043, 0.043, 0.058);
  } else if (r > uRev - 0.12) {
    vec3 px = texture2D(uTex, coverUv((cell + 0.5) / vec2(5.0, 7.0))).rgb * 0.8;
    col = mix(col, px, 0.85);
  }
  gl_FragColor = vec4(col, alpha * uAlpha);
}
`,$A=`
uniform sampler2D uScene; uniform vec2 uRes; uniform float uT;
varying vec2 vUv;
float sdBox(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
float inside(vec2 px) {
  vec2 c = uRes * 0.5;
  return -sdBox(px - c, c, 0.22 * min(uRes.x, uRes.y));
}
vec2 tc(vec2 px) { return clamp(px / uRes, vec2(0.0005), vec2(0.9995)); }
void main() {
  vec2 px = vUv * uRes;
  float m = min(uRes.x, uRes.y);
  float d = inside(px);
  float rim = 0.17 * m * (1.0 + 0.3 * smoothstep(0.25, 0.0, vUv.y));
  float t = clamp(1.0 - d / rim, 0.0, 1.0);

  // Normale sortante (gradient du SDF, qui croît vers l'intérieur).
  vec2 g = vec2(inside(px + vec2(1.0, 0.0)) - inside(px - vec2(1.0, 0.0)),
                inside(px + vec2(0.0, 1.0)) - inside(px - vec2(0.0, 1.0)));
  vec2 n = -g / max(length(g), 1e-5);
  vec2 off = -n * t * t * rim * 0.46;
  vec2 tang = vec2(-n.y, n.x);
  float spread = t * t * t * 0.003 * m;

  vec3 col = vec3(0.0);
  for (int k = -2; k <= 2; k++) {
    vec2 o = tang * float(k) * spread;
    col.r += texture2D(uScene, tc(px + off * 1.06 + o)).r;
    col.g += texture2D(uScene, tc(px + off * 1.00 + o)).g;
    col.b += texture2D(uScene, tc(px + off * 0.94 + o)).b;
  }
  col /= 5.0;

  // Lumières de bord R, V, B indépendantes.
  vec2 q = (px - uRes * 0.5) / uRes;
  float ang = atan(q.y, q.x);
  float T = uT;
  float lr = 0.5 + 0.5 * (0.62 * sin(2.0 * ang + 0.55 * T) + 0.38 * sin(3.0 * ang - 0.41 * T + 1.7));
  float lg = 0.5 + 0.5 * (0.62 * sin(2.0 * ang - 0.47 * T + 2.3) + 0.38 * sin(ang - 0.33 * T + 4.1));
  float lb = 0.5 + 0.5 * (0.62 * sin(ang + 0.38 * T + 4.6) + 0.38 * sin(3.0 * ang + 0.52 * T + 0.9));
  vec3 L = vec3(smoothstep(0.32, 0.9, lr), smoothstep(0.32, 0.9, lg), smoothstep(0.32, 0.9, lb));
  L.g *= 1.0 - 0.65 * L.r;
  float xEdge = min(px.x, uRes.x - px.x);
  float bottom = px.y;
  float top = uRes.y - px.y;
  float k = clamp(min(min(xEdge / (0.12 * uRes.x), bottom / (0.19 * uRes.y)), top / (0.09 * uRes.y)), 0.0, 1.0);
  float mask = pow(1.0 - k, 1.7);
  vec3 light = L + vec3(0.16, 0.15, 0.34);
  light = mix(light, vec3(dot(light, vec3(0.299, 0.587, 0.114))), 0.12);
  col += light * mask * 0.34;
  gl_FragColor = vec4(col, 1.0);
}
`;function YA(t){var Ie;const{container:e,canvas:n,items:i,labelEls:r=[],titleEl:s,tickEl:a,crossVideo:o,embedded:l=!1,onSelect:c,onCentre:d}=t,f=i.length,h=x_(f),m=f*h,x=window.matchMedia("(prefers-reduced-motion: reduce)").matches,_=new th({canvas:n,antialias:!0,alpha:!1});_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.outputColorSpace=ii,_.autoClear=!1;const p=new Qf,u=[],g=D=>(u.push(D),D),v=new Jl,y=g(new Ys(1,1)),P={uBase:{value:new I(...wa.VERT)},uRes:{value:new Je(1,1)},uT:{value:0}},C=new at(y,g(new ni({uniforms:P,vertexShader:rg,fragmentShader:jA,depthTest:!1,depthWrite:!1})));C.frustumCulled=!1,C.renderOrder=0,v.add(C);const A=g(new Ys(1,1,48,1)),F=i.map((D,b)=>{const X=g(new g_(ih({...D.cover,index:D.cover.styleIndex??b})));return X.minFilter=Xs,X.anisotropy=_.capabilities.getMaxAnisotropy(),X}),M=Array.from({length:m},(D,b)=>{const X=b%f,K={uTex:{value:F[X]},uX:{value:0},uRes:{value:P.uRes.value},uS:{value:1},uGrid:{value:0},uGR:{value:new ut},uMob:{value:0},uCW:{value:1},uSize:{value:new Je(1,1)},uRev:{value:0},uSeed:{value:Math.random()*100},uHover:{value:0},uAlpha:{value:1},uImgA:{value:600/900}},de=new at(A,g(new ni({uniforms:K,vertexShader:XA,fragmentShader:qA,transparent:!0,depthTest:!1,depthWrite:!1})));return de.frustumCulled=!1,de.renderOrder=1,v.add(de),{m:b,item:X,copy:Math.floor(b/f),mesh:de,uni:K,x:0,s:1,hover:0,gr:[0,0,1,1],seen:!1,revStart:0,revDur:900,size:[1,1]}}),T=g(new ar(1,1,{depthBuffer:!1})),$={uScene:{value:T.texture},uRes:{value:P.uRes.value},uT:{value:0}},J=new Jl,le=new at(y,g(new ni({uniforms:$,vertexShader:rg,fragmentShader:$A,depthTest:!1,depthWrite:!1})));le.frustumCulled=!1,J.add(le);const L={W:1,H:1,mob:!1,cw:1,pitch:Vd};function G(){const D=e.getBoundingClientRect();L.W=Math.max(1,D.width),L.H=Math.max(1,D.height),L.mob=L.W<760;const b=L.mob?GA:1;L.cw=HA*b*L.W,L.pitch=Vd*b,_.setSize(L.W,L.H,!1);const X=_.getPixelRatio();T.setSize(Math.round(L.W*X),Math.round(L.H*X)),P.uRes.value.set(L.W,L.H),Y(),s!=null&&s.textContent&&pe(s.dataset.scrambling==="1"?"XXXX XXXX":s.textContent)}function Y(){const{W:D,H:b}=L,X=Math.min(L.mob?2:5,f),K=Math.ceil(f/X),de=.012*D;let me=(L.mob?.36:.13)*D,ae=me/.68;const Ge=b*.74;K*ae+(K-1)*de>Ge&&(ae=(Ge-(K-1)*de)/K,me=ae*.68);const it=X*me+(X-1)*de,ft=K*ae+(K-1)*de,Ve=(D-it)/2,ht=b*.52-ft/2;for(const It of M){const Ri=It.item%X,Gt=Math.floor(It.item/X);It.gr=[Ve+Ri*(me+de),ht+Gt*(ae+de),me,ae]}}const ee=new ResizeObserver(G);ee.observe(e),G();let N=0,k=0;function z(D){const{W:b,H:X,mob:K}=L,de=(D-b/2)/b;return X*((K?.26:.217)-.03*ig(.3,.45,Math.abs(de)*(K?tc:1)))}function te(D){const{H:b,mob:X}=L;return b*((X?.6:.659)-.135*ig(.12,.39,Math.abs(D)*(X?tc:1)))}function Q(D,b,X){const{W:K,cw:de}=L,me=K/2+D.x*K,ae=me+(b-.5)*de,Ge=te(D.x),it=Ge+(z(ae)-Ge)*X,ft=(z(me)+Ge)/2;let Ve=me+(ae-me)*D.s,ht=ft+(it-ft)*D.s;if(N>0){const[It,Ri,Gt,Un]=D.gr;Ve+=(It+b*Gt-Ve)*N,ht+=(Ri+(1-X)*Un-ht)*N}return[Ve,ht]}function V(D){return D.copy===0?1:1-N}function ne(D,b){let X=null;for(const K of M){if(V(K)<.5||N<.5&&Math.abs(K.x)>.62)continue;const[de]=Q(K,0,.5),[me]=Q(K,1,.5);if(D<Math.min(de,me)||D>Math.max(de,me))continue;const ae=(D-de)/(me-de),[,Ge]=Q(K,ae,1),[,it]=Q(K,ae,0);b>=Ge&&b<=it&&(X=K)}return X}let ce=null,ue=!1;function xe(D){if(ue)try{ce||(ce=new(window.AudioContext||window.webkitAudioContext));const b=ce.createOscillator(),X=ce.createGain();b.type="square",b.frequency.value=D,X.gain.setValueAtTime(.03,ce.currentTime),X.gain.exponentialRampToValueAtTime(1e-4,ce.currentTime+.07),b.connect(X).connect(ce.destination),b.start(),b.stop(ce.currentTime+.08)}catch{}}let Ne=0,Ce=0,Te=null;const be={on:!1,id:null,x0:0,y0:0,start:0,moved:!1},B=D=>{const b=e.getBoundingClientRect();return[D.clientX-b.left,D.clientY-b.top]};function Mt(D){if(N>.5)return;const b=D.deltaMode===1?16:D.deltaMode===2?L.H:1;let X;if(l){if(Math.abs(D.deltaX)<=Math.abs(D.deltaY))return;X=D.deltaX}else X=Math.abs(D.deltaX)>Math.abs(D.deltaY)?D.deltaX:D.deltaY;D.preventDefault(),Ce+=X*b*42e-5*(L.mob?2:1)}function Pe(D){D.button!==0||D.target.closest("a, button")||(be.on=!0,be.id=D.pointerId,[be.x0,be.y0]=B(D),be.start=Ce,be.moved=!1)}function Fe(D){const[b,X]=B(D);if(be.on&&D.pointerId===be.id){const de=b-be.x0;(Math.abs(de)>6||Math.abs(X-be.y0)>6)&&(be.moved=!0),N<.5&&be.moved&&(!l||Math.abs(de)>Math.abs(X-be.y0))&&(Ce=be.start-de/L.W*1.1)}const K=b>=0&&X>=0&&b<=L.W&&X<=L.H?ne(b,X):null;K!==Te&&(Te=K,e.classList.toggle("is-pointing",!!K))}function Ee(D){if(!be.on||D.pointerId!==be.id||(be.on=!1,be.moved))return;const[b,X]=B(D),K=ne(b,X);K&&(xe(440),c==null||c(K.item))}function nt(){Te&&(Te=null,e.classList.remove("is-pointing"))}function Ue(D){Ce=(Math.round(Ce/L.pitch)+D)*L.pitch}function R(D){N>.5||(D.key==="ArrowRight"&&(Ue(1),D.preventDefault()),D.key==="ArrowLeft"&&(Ue(-1),D.preventDefault()))}const S=l?e:window;e.addEventListener("wheel",Mt,{passive:!1}),e.addEventListener("pointerdown",Pe),window.addEventListener("pointermove",Fe,{passive:!0}),window.addEventListener("pointerup",Ee),e.addEventListener("pointerleave",nt),S.addEventListener("keydown",R);const O=performance.now();function re(D,b=0){for(const X of M)X.revStart=D+b+Math.random()*120,X.revDur=750}let ie=!0;const se=new IntersectionObserver(([D])=>{ie=D.isIntersecting});se.observe(e);let Me=0,fe=O,ge=0,Ae=-1,Be=null,j=0;const Se=new I(...wa.VERT),ve=Se.clone();let Re=!1;function we(D){!s||s.textContent===D||(s.textContent=D)}function pe(D){if(!s)return;const b=(L.mob?.88:.64)*L.W,X=Math.min((L.mob?.1:.045)*L.W,b/(.6*Math.max(D.length,1)));s.style.fontSize=`${X}px`}function Oe(D){var me;Me=requestAnimationFrame(Oe);const b=Math.min(.05,(D-fe)/1e3);if(fe=D,!ie||document.hidden)return;ge++;const X=(D-O)/1e3;if(!Re){Re=!0;for(const ae of M)ae.x=ze(ae.m*L.pitch-Ne),ae.revStart=O+200+Math.abs(ae.x)*800,ae.revDur=900,ae.seen=Math.abs(ae.x)<.62}Ne+=(Ce-Ne)*(1-Math.pow(1-.12,b*30)),N+=(k-N)*(1-Math.pow(.88,b*60)),Math.abs(k-N)<5e-4&&(N=k),Se.lerp(ve,.05),P.uBase.value.copy(Se),P.uT.value=X,$.uT.value=X;let K=null;for(const ae of M){ae.x=ze(ae.m*L.pitch-Ne);const Ge=Math.abs(ae.x)<.62;Ge&&!ae.seen&&N<.5&&(ae.revStart=D+Math.random()*120,ae.revDur=750),ae.seen=Ge;const it=x?1.12:Math.min(1,Math.max(0,(D-ae.revStart)/ae.revDur))*1.12,ft=Te===ae?1:0;ae.hover+=(ft-ae.hover)*.2,ae.s=1+.015*ae.hover;const[Ve]=Q(ae,0,.5),[ht]=Q(ae,1,.5),[,It]=Q(ae,.5,1),[,Ri]=Q(ae,.5,0),Gt=ae.uni;Gt.uX.value=ae.x,Gt.uS.value=ae.s,Gt.uGrid.value=N,Gt.uGR.value.set(...ae.gr),Gt.uMob.value=L.mob?1:0,Gt.uCW.value=L.cw,Gt.uSize.value.set(Math.abs(ht-Ve),Math.abs(Ri-It)),Gt.uRev.value=it,Gt.uHover.value=ae.hover,Gt.uAlpha.value=V(ae),ae.mesh.visible=V(ae)>.01&&(N>.01||Math.abs(ae.x)<.75);const Un=r[ae.m];if(Un){const[ia,fr]=Q(ae,0,1),[mo,go]=Q(ae,1,1),wc=Math.atan2(go-fr,mo-ia),Tc=ae.mesh.visible&&(N>.5?ae.copy===0:Math.abs(ae.x)<.56);Un.style.transform=`translate(${ia+2}px, ${fr-.006*L.H}px) rotate(${wc}rad) translateY(-100%)`,Un.style.maxWidth=`${Math.abs(ht-Ve)-4}px`,Un.style.opacity=Tc?String(Math.min(1,it*1.4)*V(ae)):"0"}(!K||Math.abs(ae.x)<Math.abs(K.x))&&(K=ae)}K&&K.item!==Ae&&(Ae=K.item,a&&(a.style.left=`${f>1?Ae/(f-1)*100:0}%`),xe(1400),d==null||d(Ae));const de=Math.abs(Ce-Ne)>.004;if(de&&!x)ge%3===0&&(we(WA()),Be=null);else if(Be!==Ae){Be=Ae;const ae=((me=i[Ae])==null?void 0:me.label)??"";pe(ae),we(ae)}if(de&&s&&s.dataset.scrambling!=="1"?(s.dataset.scrambling="1",pe("XXXX XXXX")):!de&&s&&(s.dataset.scrambling="0"),o&&b>0){const ae=Math.abs(Ne-j)/b,Ge=Math.min(4,1+ae*6);Math.abs(o.playbackRate-Ge)>.05&&(o.playbackRate=Ge)}j=Ne,_.setRenderTarget(T),_.clear(),_.render(v,p),_.setRenderTarget(null),_.clear(),_.render(J,p)}function ze(D){const b=m*L.pitch;return((D+b/2)%b+b)%b-b/2}let et=!1;return(((Ie=document.fonts)==null?void 0:Ie.ready)??Promise.resolve()).then(()=>{et||(Me=requestAnimationFrame(Oe))}),{setGrid(D){k=D?1:0,re(performance.now(),80)},jump(){Ue(3+Math.floor(Math.random()*4)),xe(220)},next(D=1){Ue(D)},setPalette(D){wa[D]&&ve.set(...wa[D])},setSfx(D){ue=D,D&&xe(660)},get centre(){return Ae},advance(D){const b=Math.round(D*30);let X=performance.now();for(let K=0;K<b;K++)X+=1e3/30,cancelAnimationFrame(Me),fe=X-1e3/30,Oe(X)},dispose(){var D;et=!0,cancelAnimationFrame(Me),ee.disconnect(),se.disconnect(),e.removeEventListener("wheel",Mt),e.removeEventListener("pointerdown",Pe),window.removeEventListener("pointermove",Fe),window.removeEventListener("pointerup",Ee),e.removeEventListener("pointerleave",nt),S.removeEventListener("keydown",R),u.forEach(b=>b.dispose()),_.dispose(),(D=ce==null?void 0:ce.close)==null||D.call(ce)}}}const KA="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261119_115952_fb332608-6f05-451c-9416-bbba87baffce.mp4",y_=Z.forwardRef(function({items:e,embedded:n=!1,onSelect:i,onCentre:r,className:s="",grid:a=!1,children:o},l){const c=Z.useRef(null),d=Z.useRef(null),f=Z.useRef(null),h=Z.useRef(null),m=Z.useRef(null),x=Z.useRef([]),_=Z.useRef(null),p=Z.useRef({onSelect:i,onCentre:r}),[u,g]=Z.useState(!1),[v,y]=Z.useState(!0);p.current={onSelect:i,onCentre:r};const P=x_(e.length);return Z.useImperativeHandle(l,()=>({setGrid:C=>{var A;return(A=_.current)==null?void 0:A.setGrid(C)},jump:()=>{var C;return(C=_.current)==null?void 0:C.jump()},next:C=>{var A;return(A=_.current)==null?void 0:A.next(C)},setPalette:C=>{var A;return(A=_.current)==null?void 0:A.setPalette(C)},setSfx:C=>{var A;return(A=_.current)==null?void 0:A.setSfx(C)}}),[]),Z.useEffect(()=>{let C=!1,A=null;return __().then(()=>{if(!(C||!d.current))try{A=YA({container:c.current,canvas:d.current,items:e,labelEls:x.current,titleEl:f.current,tickEl:h.current,crossVideo:m.current,embedded:n,onSelect:F=>{var M,T;return(T=(M=p.current).onSelect)==null?void 0:T.call(M,F)},onCentre:F=>{var M,T;return(T=(M=p.current).onCentre)==null?void 0:T.call(M,F)}}),_.current=A}catch(F){console.warn("WebGL indisponible : galerie désactivée.",F),g(!0)}}),()=>{C=!0,A==null||A.dispose(),_.current=null}},[e,n]),Z.useEffect(()=>{var C;(C=_.current)==null||C.setGrid(a)},[a]),E.jsxs("div",{ref:c,className:`cg${n?" cg--embedded":""}${a?" is-grid":""} ${s}`,tabIndex:n?0:void 0,"aria-label":n?"Galerie : glissez ou utilisez les flèches pour parcourir":void 0,children:[!u&&E.jsx("canvas",{ref:d,className:"cg-canvas","aria-hidden":"true"}),E.jsx("div",{className:"cg-labels","aria-hidden":"true",children:Array.from({length:e.length*P},(C,A)=>E.jsx("span",{ref:F=>{x.current[A]=F},className:"cg-label",children:e[A%e.length].label},A))}),E.jsx("div",{ref:f,className:"cg-title","aria-live":"polite"}),E.jsx("div",{className:"cg-rule","aria-hidden":"true",children:E.jsx("i",{ref:h})}),v&&E.jsx("button",{type:"button",className:"cg-cross","aria-label":"Avancer de quelques cartes",onClick:()=>{var C;return(C=_.current)==null?void 0:C.jump()},children:E.jsx("video",{ref:m,src:KA,muted:!0,loop:!0,playsInline:!0,autoPlay:!0,crossOrigin:"anonymous",onError:()=>y(!1)})}),u&&E.jsx("div",{className:"cg-fallback",children:e.map((C,A)=>E.jsx("button",{type:"button",onClick:()=>{var F,M;return(M=(F=p.current).onSelect)==null?void 0:M.call(F,A)},children:C.label},C.label+A))}),o]})});function ZA(){const[t,e]=Z.useState(null);function n(i){i.preventDefault();const r=i.currentTarget;if(r.site_web.value)return;const s=r.nom.value.trim(),a=r.email.value.trim(),o=r.message.value.trim();if(!s||!a||!o){e({ok:!1,text:"Merci de remplir les trois champs."});return}const l=encodeURIComponent(`Contact portfolio — ${s}`),c=encodeURIComponent(`${o}

— ${s} (${a})`);window.location.href=`mailto:${Ns}?subject=${l}&body=${c}`,e({ok:!0,text:"Ta messagerie va s’ouvrir avec le message prêt à envoyer."})}return E.jsxs("form",{className:"form",onSubmit:n,noValidate:!0,children:[E.jsxs("div",{className:"form-honeypot","aria-hidden":"true",children:[E.jsx("label",{htmlFor:"site_web",children:"Ne pas remplir"}),E.jsx("input",{id:"site_web",name:"site_web",tabIndex:-1,autoComplete:"off"})]}),E.jsxs("label",{className:"form-row",children:[E.jsx("span",{children:"Nom"}),E.jsx("input",{name:"nom",required:!0,autoComplete:"name"})]}),E.jsxs("label",{className:"form-row",children:[E.jsx("span",{children:"Email"}),E.jsx("input",{name:"email",type:"email",required:!0,autoComplete:"email"})]}),E.jsxs("label",{className:"form-row",children:[E.jsx("span",{children:"Message"}),E.jsx("textarea",{name:"message",rows:4,required:!0})]}),E.jsx("button",{className:"pill pill-lg",type:"submit",children:"Envoyer"}),t&&E.jsx("p",{className:`form-note${t.ok?" is-ok":" is-err"}`,role:"status",children:t.text})]})}const S_=[...Wf].reverse(),sg=[...S_.flatMap(t=>t.blocs).map(t=>{const e=t.comptes_rendus.length;return{label:t.matiere,to:`/matiere/${t.slug}`,cover:{kicker:t.anneeLabel,title:t.matiere,footer:`${e} compte${e>1?"s":""} rendu${e>1?"s":""}`,color:t.couleur}}}),{label:"Veille technologique",to:"/veille",cover:{kicker:"Veille technologique",title:Ld.meta.sujet,footer:`${Ld.meta.informations} informations`,color:"#021f42",styleIndex:7}},{label:"Contrôle",to:"/controle",cover:{kicker:"Travaux évalués · 2de année",title:"Contrôle",footer:"PHP · GSB · Flutter",color:"#ae4716",styleIndex:4}},{label:"Curriculum vitae",href:Vs(Gf),cover:{kicker:"Délio Duchesne-Brajon",title:"Curriculum vitae",footer:"PDF",color:"#c62420",styleIndex:0}}];function QA(){const t=dr(),e=xc(),n=Z.useRef(null),i=Z.useMemo(()=>sg.map(({label:s,cover:a})=>({label:s,cover:a})),[]);function r(s){const a=sg[s];a.href?window.open(a.href,"_blank","noopener"):e(a.to)}return Z.useEffect(()=>{var o;const s=(o=t.state)==null?void 0:o.scrollTo;if(!s)return;const a=document.getElementById(s);a&&setTimeout(()=>a.scrollIntoView({behavior:"smooth",block:"start"}),50)},[t.key,t.state]),E.jsxs("main",{children:[E.jsx("section",{className:"hero-gallery",children:E.jsxs(y_,{ref:n,items:i,embedded:!0,onSelect:r,children:[E.jsx("div",{className:"hg-eyebrow",children:"Portfolio — Délio Duchesne-Brajon · BTS SIO SLAM"}),E.jsxs("div",{className:"hg-controls",children:[E.jsx("button",{type:"button",onClick:()=>{var s;return(s=n.current)==null?void 0:s.next(-1)},"aria-label":"Carte précédente",children:"←"}),E.jsx("span",{children:"Glissez · cliquez sur une carte"}),E.jsx("button",{type:"button",onClick:()=>{var s;return(s=n.current)==null?void 0:s.next(1)},"aria-label":"Carte suivante",children:"→"})]})]})}),E.jsxs("section",{className:"intro wrap",children:[E.jsx("div",{className:"eyebrow",children:"Portfolio — BTS SIO SLAM"}),E.jsx("p",{className:"lede-xl",children:"Étudiant en BTS SIO SLAM, je conçois des applications web métier et j’entretiens des infrastructures IT — du code jusqu’au câblage. J’aime transformer un besoin concret en outil fiable."}),E.jsxs("dl",{className:"facts",children:[E.jsxs("div",{children:[E.jsx("dt",{children:"Formation"}),E.jsx("dd",{children:"BTS SIO — SLAM, Lycée Dominique Villars, Gap"})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Compétences"}),E.jsx("dd",{children:"PHP · MySQL · JavaScript · Java · UML · Réseaux"})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Comptes rendus"}),E.jsxs("dd",{children:[uM," documents, ",fo.length," matières"]})]})]})]}),E.jsxs("section",{className:"sommaire wrap",id:"sommaire",children:[E.jsxs("div",{className:"section-head",children:[E.jsx("div",{className:"eyebrow",children:"01 — Sommaire"}),E.jsx("h2",{className:"display",children:"Comptes rendus"}),E.jsx("p",{className:"muted",children:"Classés par année puis par bloc / matière. Cliquez sur un titre pour ouvrir sa galerie."})]}),S_.map(s=>{const a=s.blocs.reduce((o,l)=>o+l.comptes_rendus.length,0);return E.jsxs("div",{className:"annee",id:`annee-${s.cle}`,children:[E.jsxs("div",{className:"annee-head",children:[E.jsx("h3",{className:"display",children:s.label}),E.jsxs("span",{className:"muted",children:[s.periode," · ",s.blocs.length," matières · ",a," comptes rendus"]})]}),E.jsx("div",{className:"matieres",children:s.blocs.map((o,l)=>E.jsx("div",{className:"matiere-row",style:{"--c":o.couleur},children:E.jsxs(ln,{to:`/matiere/${o.slug}`,className:"matiere-title",children:[E.jsx("span",{className:"matiere-idx",children:Vf(l+1)}),E.jsx("span",{className:"matiere-name",children:o.matiere}),E.jsxs("span",{className:"matiere-meta",children:[o.comptes_rendus.length," CR"]}),E.jsx("span",{className:"matiere-go","aria-hidden":"true",children:"→"})]})},o.slug))})]},s.cle)})]}),E.jsxs("section",{className:"contact wrap",id:"contact",children:[E.jsx("div",{className:"eyebrow",children:"02 — Contact"}),E.jsx("h2",{className:"display contact-cta",children:E.jsx("a",{href:`mailto:${Ns}`,children:"Discutons de votre projet →"})}),E.jsxs("div",{className:"contact-grid",children:[E.jsxs("dl",{className:"facts",children:[E.jsxs("div",{children:[E.jsx("dt",{children:"Email"}),E.jsx("dd",{children:E.jsx("a",{href:`mailto:${Ns}`,children:Ns})})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Formation"}),E.jsx("dd",{children:"BTS SIO — SLAM"})]}),E.jsxs("div",{children:[E.jsx("dt",{children:"Curriculum vitae"}),E.jsx("dd",{children:E.jsx("a",{href:Vs(Gf),download:!0,children:"Télécharger le CV ↓"})})]})]}),E.jsx(ZA,{})]})]})]})}function rh(){return E.jsx("main",{className:"page-pad",children:E.jsxs("section",{className:"wrap notfound",children:[E.jsx("h1",{className:"display",children:"Page introuvable"}),E.jsx("p",{className:"muted",children:"Ce livre n’est pas (encore) sur l’étagère."}),E.jsx(ln,{to:"/",className:"pill pill-lg",children:"Retour à l’accueil"})]})})}function JA(){return E.jsxs("svg",{className:"gx-glyph",viewBox:"0 0 40 46",fill:"none",stroke:"#e7e4ee",strokeWidth:"1.6","aria-hidden":"true",children:[E.jsx("line",{x1:"20",y1:"2",x2:"20",y2:"15"}),E.jsx("line",{x1:"13",y1:"8",x2:"27",y2:"8"}),E.jsx("circle",{cx:"20",cy:"22",r:"7"}),E.jsx("circle",{cx:"20",cy:"22",r:"2.4",fill:"#e7e4ee",stroke:"none"}),E.jsx("line",{x1:"6",y1:"22",x2:"11",y2:"22"}),E.jsx("line",{x1:"29",y1:"22",x2:"34",y2:"22"}),E.jsx("line",{x1:"20",y1:"29",x2:"20",y2:"36"}),E.jsx("path",{d:"M20 36 L14 44 M20 36 L26 44"})]})}function eR({on:t}){return E.jsxs("svg",{className:"gx-speaker",viewBox:"0 0 16 12",fill:"none",stroke:"currentColor",strokeWidth:"1.2","aria-hidden":"true",children:[E.jsx("path",{d:"M1 4h3l4-3v10l-4-3H1z",fill:"currentColor",stroke:"none"}),t&&E.jsx("path",{d:"M10.5 3.5a3.5 3.5 0 0 1 0 5M12.5 1.5a6.3 6.3 0 0 1 0 9"})]})}function tR({bloc:t,index:e,onClose:n}){const i=t.comptes_rendus[e],r=Z.useMemo(()=>Fv(t)[e],[t,e]),s=Z.useMemo(()=>ih({...r,index:r.styleIndex}).toDataURL("image/png"),[r]),a=Z.useMemo(()=>Array.from({length:35},()=>300+Math.random()*700),[e]);return Z.useEffect(()=>{const o=l=>{l.key==="Escape"&&n()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[n]),E.jsxs("div",{className:"gx-detail",role:"dialog","aria-modal":"true","aria-label":i.titre,children:[E.jsx("button",{type:"button",className:"gx-link gx-close",onClick:n,children:"FERMER"}),E.jsxs("div",{className:"gx-detail-img",children:[E.jsx("img",{src:s,alt:""}),E.jsx("div",{className:"gx-blocks","aria-hidden":"true",children:a.map((o,l)=>E.jsx("i",{style:{animationDelay:`${o}ms`}},l))})]}),E.jsxs("div",{className:"gx-detail-txt",children:[E.jsxs("div",{className:"gx-mute",children:["COMPTE RENDU ",Vf(e+1)]}),E.jsx("h2",{className:"gx-detail-title",children:i.titre}),E.jsxs("p",{children:[br(i.date)," — ",t.matiere,". ",t.description]}),E.jsxs("div",{className:"gx-detail-actions",children:[E.jsx(ln,{to:`/cr/${i.slug}`,className:"gx-btn",children:"OUVRIR LA FICHE →"}),E.jsxs("a",{href:Vs(i.fichier),download:!0,className:"gx-link",children:["TÉLÉCHARGER ",Uv(i.fichier)?"LE PDF":"LE FICHIER"," ↓"]})]})]})]})}function nR(){const{slug:t}=Pv(),e=lM(t),n=xc(),i=Z.useRef(null),[r,s]=Z.useState(!1),[a,o]=Z.useState(!1),[l,c]=Z.useState("VERT"),[d,f]=Z.useState(null),[h,m]=Z.useState(null),x=Z.useMemo(()=>e?Fv(e).map((u,g)=>({label:e.comptes_rendus[g].titre,cover:u})):[],[e]);if(Z.useEffect(()=>(document.documentElement.classList.add("gx-lock"),()=>document.documentElement.classList.remove("gx-lock")),[]),Z.useEffect(()=>{if(!h)return;const u=setTimeout(()=>m(null),h.length>60?4200:1800);return()=>clearTimeout(u)},[h]),!e)return E.jsx(rh,{});const _=()=>{var g;const u=!a;o(u),(g=i.current)==null||g.setSfx(u)},p=u=>{var g;c(u),(g=i.current)==null||g.setPalette(u)};return E.jsxs("main",{className:"gx",children:[E.jsxs(y_,{ref:i,items:x,grid:r,onSelect:u=>f(u),children:[E.jsxs("nav",{className:"gx-nav","aria-label":"Navigation de la galerie",children:[E.jsx("button",{type:"button",className:"gx-link gx-n1",onClick:()=>n("/",{state:{scrollTo:"sommaire"}}),children:"← SOMMAIRE"}),E.jsx("button",{type:"button",className:"gx-link gx-n2",onClick:()=>s(u=>!u),children:r?"BANDE":"LISTE/GRILLE"}),E.jsxs(ln,{to:"/",className:"gx-logo","aria-label":"Accueil",children:[E.jsx(JA,{}),E.jsx("span",{children:"DDB"})]}),E.jsx("button",{type:"button",className:"gx-link gx-n3",onClick:()=>m(e.description),children:"INFOS"}),E.jsx("button",{type:"button",className:"gx-link gx-n4",onClick:()=>n("/",{state:{scrollTo:"contact"}}),children:"CONTACT"})]}),E.jsxs("footer",{className:"gx-foot",children:[E.jsxs("button",{type:"button",className:"gx-link gx-sfx","aria-pressed":a,onClick:_,children:[E.jsx(eR,{on:a})," SON"]}),E.jsxs("span",{className:"gx-f2",children:[e.comptes_rendus.length," COMPTES RENDUS"]}),E.jsx("span",{className:"gx-f3",children:e.matiere.toUpperCase()}),E.jsx("span",{className:"gx-f4",children:"©2026"}),E.jsx("ul",{className:"gx-palette","aria-label":"Couleur de fond",children:Object.keys(wa).map(u=>E.jsx("li",{children:E.jsxs("button",{type:"button",className:u===l?"is-on":"",onClick:()=>p(u),children:[u===l?"▪ ":"",u]})},u))})]})]}),h&&E.jsx("div",{className:"gx-toast",role:"status",children:h}),d!==null&&E.jsx(tR,{bloc:e,index:d,onClose:()=>f(null)})]})}function iR(){var c;const{slug:t}=Pv(),e=cM(t);if(!e)return E.jsx(rh,{});const{bloc:n,cr:i,index:r}=e,s=Uv(i.fichier),a=n.comptes_rendus[r-1],o=n.comptes_rendus[r+1],l=i.fichier.split(".").pop().toUpperCase();return E.jsx("main",{className:"page-pad",children:E.jsxs("section",{className:"wrap cr-detail",children:[E.jsxs(ln,{to:`/matiere/${n.slug}`,className:"back",children:["← ",n.matiere]}),E.jsxs("header",{className:"cr-head",children:[E.jsxs("div",{className:"eyebrow",style:{"--c":n.couleur},children:[E.jsx("i",{className:"dot"})," ",n.anneeLabel," — ",n.matiere]}),E.jsx("h1",{className:"display cr-h1",children:i.titre}),E.jsx("div",{className:"muted",children:br(i.date)})]}),E.jsxs("div",{className:"cr-body",children:[E.jsxs("aside",{className:"cr-side",children:[E.jsx("p",{className:"lede",children:n.description}),((c=n.competences)==null?void 0:c.length)>0&&E.jsx("div",{className:"tags",children:n.competences.map(d=>E.jsx("span",{className:"tag",children:d},d))}),E.jsxs("a",{className:"pill pill-lg",href:Vs(i.fichier),download:!0,children:["Télécharger ",s?"le PDF":"le fichier"," ↓"]}),E.jsxs("nav",{className:"cr-pager","aria-label":"Comptes rendus de la matière",children:[a?E.jsxs(ln,{to:`/cr/${a.slug}`,children:["← ",a.titre]}):E.jsx("span",{}),o?E.jsxs(ln,{to:`/cr/${o.slug}`,children:[o.titre," →"]}):E.jsx("span",{})]})]}),E.jsx("div",{className:"cr-preview",children:s?E.jsx("iframe",{src:Vs(i.fichier),title:`Aperçu du PDF — ${i.titre}`,loading:"lazy"}):E.jsx("div",{className:"cr-fallback",children:E.jsxs("p",{children:["Ce document (",l,") ne s’affiche pas directement ici — télécharge-le pour le consulter."]})})})]})]})})}class rR extends Jl{constructor(e=null){super();const n=new Ti;n.deleteAttribute("uv");const i=new Bi({side:rn}),r=new Bi;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const a=new NA(16777215,s,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new at(n,i);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const l=new at(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new at(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const d=new at(n,r);d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),this.add(d);const f=new at(n,r);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const h=new at(n,r);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const m=new at(n,r);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);const x=new at(n,us(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);const _=new at(n,us(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);const p=new at(n,us(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const u=new at(n,us(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const g=new at(n,us(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const v=new at(n,us(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function us(t){const e=new Zf;return e.color.setScalar(t),e}const _a=new I;function An(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;_a.copy(e),_a[i]=0,_a.normalize();const c=.5*a/(a+o),d=1-_a.angleTo(t)/l;return Math.sign(_a[n])===1?d*c:o/(a+o)+c+c*(1-d)}class sR extends Ti{constructor(e=1,n=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,n/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,n,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,m=d.length/6,x=new I,_=.5/r;for(let p=0,u=0;p<d.length;p+=3,u+=2)switch(o.fromArray(d,p),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),d[p+0]=c.x*Math.sign(o.x)+l.x*s,d[p+1]=c.y*Math.sign(o.y)+l.y*s,d[p+2]=c.z*Math.sign(o.z)+l.z*s,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:x.set(1,0,0),h[u+0]=An(x,l,"z","y",s,i),h[u+1]=1-An(x,l,"y","z",s,n);break;case 1:x.set(-1,0,0),h[u+0]=1-An(x,l,"z","y",s,i),h[u+1]=1-An(x,l,"y","z",s,n);break;case 2:x.set(0,1,0),h[u+0]=1-An(x,l,"x","z",s,e),h[u+1]=An(x,l,"z","x",s,i);break;case 3:x.set(0,-1,0),h[u+0]=1-An(x,l,"x","z",s,e),h[u+1]=1-An(x,l,"z","x",s,i);break;case 4:x.set(0,0,1),h[u+0]=1-An(x,l,"x","y",s,e),h[u+1]=1-An(x,l,"y","x",s,n);break;case 5:x.set(0,0,-1),h[u+0]=An(x,l,"x","y",s,e),h[u+1]=1-An(x,l,"y","x",s,n);break}}}const Iu=70,Uu=12.5,ag=4,ds=1,xl=1.5,rl=.2,sl=.024,og=.03,aR=-1.12-xl/2,lg={hero:{pos:[3.6,2.15,7.4],look:[-1.4,.05,-.6],fov:19.5,fovPortrait:40,x0:1.55,center:!1},shelf:{pos:[3.2,1,9.2],look:[-.9,-.95,-.6],fov:21,x0:-1.1,center:!0,maxStep:.68,fitWidth:36}};function oR(t,{books:e,onHover:n,reduceMotion:i=!1,framing:r="hero"}){const s=lg[r]||lg.hero,a=new th({canvas:t,antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.toneMapping=zv,a.toneMappingExposure=1.05,a.outputColorSpace=Pt,a.setClearColor(0,0),a.shadowMap.enabled=!0,a.shadowMap.type=kv;const o=new Jl,l=new Bd(a),c=l.fromScene(new rR,.04);o.environment=c.texture;const d=.55;o.environmentIntensity=d;const f=new Zm(16774116,2.4);f.position.set(-4,6,6),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),f.shadow.radius=6,f.shadow.bias=-4e-4,f.shadow.normalBias=.02,Object.assign(f.shadow.camera,{left:-12,right:8,top:7,bottom:-7,near:.5,far:30});const h=new Zm(12571391,1.1);h.position.set(6,3,-4),o.add(f,h,new UA(16777215,.12));const m=new LA({opacity:.42,depthWrite:!1}),x=new at(new Ys(60,60),m);x.rotation.x=-Math.PI/2,x.position.y=aR-.002,x.receiveShadow=!0,o.add(x);const _=new _n(s.fov,1,.1,100);_.position.set(...s.pos),_.lookAt(new I(...s.look));const p=a.capabilities.getMaxAnisotropy(),u=[c,l,m,x.geometry],g=(j,Se=!0)=>{const ve=new g_(j);return Se&&(ve.colorSpace=Pt),ve.anisotropy=p,u.push(ve),ve},v=g(ng(!1)),y=g(ng(!0)),P=g(zA(),!1);P.wrapS=P.wrapT=Xl,P.repeat.set(5,7.5);const C=j=>(u.push(j),j),A=C(new Bi({map:v,roughness:.92,envMapIntensity:d})),F=C(new Bi({map:y,roughness:.92,envMapIntensity:d})),M=C(new Bi({color:15854297,roughness:.95,envMapIntensity:d})),T=ds-.03,$=xl-.04,J=rl-2*sl-.004,le=new Ti(ds,xl,sl),L=new Ti(T,$,J),G=new sR(og*2,xl,rl,3,.012);u.push(le,L,G);const Y=e.length,ee=Math.min(s.maxStep??.95,Math.max(.5,12/Math.max(Y,1))),N=s.center?(Y-1)*ee/2+s.x0:s.x0,k=s.center?(Y-1)*ee*.4/2:.9,z=[],te=e.map((j,Se)=>{const ve=new Ze(j.color),Re=ve.clone().multiplyScalar(.62),we=g(ih({...j,index:j.styleIndex??Se})),pe=g(BA(j)),Oe=C(new qm({map:we,roughness:.42,clearcoat:.55,clearcoatRoughness:.35,bumpMap:P,bumpScale:.6,envMapIntensity:d})),ze=C(new qm({color:Re,roughness:.62,clearcoat:.25,bumpMap:P,bumpScale:.9,envMapIntensity:d})),et=C(new Bi({color:ve.clone().lerp(new Ze(15854297),.78),roughness:.9,envMapIntensity:d})),Ie=C(new Bi({map:pe,roughness:.9,envMapIntensity:d})),D=new Pr;D.position.set(N-Se*ee,-1.12,k-Se*ee*.4),D.rotation.y=.32;const b=new Pr;D.add(b);const X=(me,ae,Ge,it,ft=b)=>{const Ve=new at(me,ae);return Ve.position.set(Ge,0,it),Ve.castShadow=!0,Ve.receiveShadow=!0,Ve.userData.index=Se,ft.add(Ve),z.push(Ve),Ve};X(L,[A,M,F,F,Ie,M],-ds/2+og+T/2-.012,0),X(le,[ze,ze,ze,ze,et,ze],0,-rl/2+sl/2);const K=new Pr;K.position.set(-ds/2,0,rl/2-sl/2),b.add(K),X(le,[ze,ze,ze,ze,Oe,et],ds/2,0,K),X(G,ze,-ds/2+.002,0),o.add(D);const de=i?0:-3;return b.position.y=de,{group:D,root:b,hinge:K,y:de,vy:0,z:0,vz:0,a:0,va:0,delay:.25+(Y-Se)*.035}});let Q=1,V=1;function ne(){const j=t.getBoundingClientRect();if(Q=Math.max(1,j.width),V=Math.max(1,j.height),a.setSize(Q,V,!1),_.aspect=Q/V,s.fitWidth){const Se=Math.tan(cm.degToRad(s.fitWidth/2))/_.aspect;_.fov=Math.max(s.fov,cm.radToDeg(2*Math.atan(Se)))}else _.fov=Q<V?s.fovPortrait:s.fov;_.updateProjectionMatrix()}const ce=new ResizeObserver(ne);ce.observe(t),ne();const ue={x:0,y:0,inside:!1,lastMove:-1/0},xe=window.matchMedia("(pointer: coarse)").matches;let Ne=document.hasFocus(),Ce=null,Te=null;const be=new FA,B=new Je;function Mt(j,Se){const ve=t.getBoundingClientRect();if(j<ve.left||j>ve.right||Se<ve.top||Se>ve.bottom)return null;B.set((j-ve.left)/ve.width*2-1,-((Se-ve.top)/ve.height)*2+1),be.setFromCamera(B,_);const Re=be.intersectObjects(z,!1)[0];return Re?Re.object.userData.index:null}function Pe(j){const Se=t.getBoundingClientRect();ue.x=j.clientX-Se.left,ue.y=j.clientY-Se.top,ue.inside=ue.x>=0&&ue.y>=0&&ue.x<=Se.width&&ue.y<=Se.height,ue.lastMove=performance.now();const ve=ue.inside?Mt(j.clientX,j.clientY):null;ve!==Ce&&(Ce=ve,n==null||n(ve))}function Fe(){ue.inside=!1,Ce!==null&&(Ce=null,n==null||n(null))}const Ee=()=>{Ne=!1,Fe()},nt=()=>{Ne=!0};window.addEventListener("pointermove",Pe,{passive:!0}),document.documentElement.addEventListener("pointerleave",Fe),window.addEventListener("blur",Ee),window.addEventListener("focus",nt);const Ue=new I,R=(j,Se)=>(Ue.set(0,.1,0),j.root.localToWorld(Ue),Ue.project(_),Se.x=(Ue.x*.5+.5)*Q,Se.y=(-Ue.y*.5+.5)*V,Se),S={x:0,y:0},O={x:0,y:0},re={x:0,y:0};let ie=!0;const se=new IntersectionObserver(([j])=>{ie=j.isIntersecting});se.observe(t);let Me=0,fe=performance.now();const ge=fe;function Ae(j){Me=requestAnimationFrame(Ae);const Se=Math.min(.05,(j-fe)/1e3);fe=j,!(!ie||document.hidden)&&Be(Se,j,(j-ge)/1e3)}function Be(j,Se,ve){let Re=ue.x,we=ue.y,pe=ue.inside&&Ne;const Oe=Se-ue.lastMove>4e3;if(!i&&Y>1&&Te===null&&(xe||Oe)){const Ie=(Math.sin(ve*.45)+1)/2;R(te[Math.min(Y-1,Math.max(1,Y-3))],O),R(te[Math.min(1,Y-1)],re),Re=O.x+(re.x-O.x)*Ie,we=O.y+(re.y-O.y)*Ie,pe=!0}const ze=Math.max(window.innerWidth,window.innerHeight)*.085,et=j/ag;for(let Ie=0;Ie<Y;Ie++){const D=te[Ie];let b=0;if(pe&&Te===null){R(D,S);const me=S.x-Re,ae=(S.y-we)*.55;b=.78*Math.exp(-(me*me+ae*ae)/(ze*ze))}let X=0;Ce===Ie&&Te===null&&(b=Math.max(b,.55),X=.32),Te===Ie&&(b=.9,X=1.95);const K=!i&&ve<=D.delay?-3:b,de=b*.35+(Te===Ie?.45:0);for(let me=0;me<ag;me++)D.vy+=((K-D.y)*Iu-D.vy*Uu)*et,D.y+=D.vy*et,D.vz+=((de-D.z)*Iu-D.vz*Uu)*et,D.z+=D.vz*et,D.va+=((X-D.a)*Iu*.6-D.va*Uu)*et,D.a+=D.va*et;D.root.position.y=D.y,D.root.position.z=D.z,D.root.rotation.x=-D.vy*.012,D.hinge.rotation.y=-Math.max(0,D.a)}a.render(o,_)}return Me=requestAnimationFrame(Ae),{pick:Mt,open(j){return Te=j,new Promise(Se=>setTimeout(Se,i?0:520))},close(){Te=null},advance(j,Se={x:-1,y:-1},ve=null){Se.x>=0&&(ue.x=Se.x,ue.y=Se.y,ue.inside=!0,ue.lastMove=performance.now()+j*1e3,Ne=!0),ve!==null&&(Ce=ve);const Re=Math.round(j*60),we=performance.now()-ge;for(let pe=1;pe<=Re;pe++)Be(1/60,ge+we+pe*1e3/60,(we+pe*1e3/60)/1e3+5)},dispose(){cancelAnimationFrame(Me),ce.disconnect(),se.disconnect(),window.removeEventListener("pointermove",Pe),document.documentElement.removeEventListener("pointerleave",Fe),window.removeEventListener("blur",Ee),window.removeEventListener("focus",nt),u.forEach(j=>j.dispose()),a.dispose()}}}const lR=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function cR({books:t,framing:e="hero",targetRef:n,className:i=""}){const r=Z.useRef(null),s=Z.useRef(null),a=Z.useRef(null),o=Z.useRef(!1),[l,c]=Z.useState(null),[d,f]=Z.useState(!1),h=xc();Z.useEffect(()=>{let x=!1,_=null;return __().then(()=>{if(!(x||!r.current))try{_=oR(r.current,{books:t,onHover:c,reduceMotion:lR(),framing:e}),a.current=_}catch(p){console.warn("WebGL indisponible : livres 3D désactivés.",p),f(!0)}}),()=>{x=!0,_==null||_.dispose(),a.current=null,c(null)}},[t,e]),Z.useEffect(()=>{const x=_=>{s.current&&(s.current.style.transform=`translate(${_.clientX+18}px, ${_.clientY+18}px)`)};return window.addEventListener("pointermove",x,{passive:!0}),()=>window.removeEventListener("pointermove",x)},[]),Z.useEffect(()=>{const x=n==null?void 0:n.current;if(!x)return;async function _(p){var y;if(o.current||p.target.closest("a, button, input, textarea, iframe"))return;const u=a.current,g=u==null?void 0:u.pick(p.clientX,p.clientY);if(g==null)return;const v=t[g];v.href&&window.open(v.href,"_blank","noopener"),o.current=!0,await u.open(g),o.current=!1,v.action?(u.close(),v.action()):v.to?h(v.to):(u.close(),v.anchor&&((y=document.getElementById(v.anchor))==null||y.scrollIntoView({behavior:"smooth",block:"start"})))}return x.addEventListener("click",_),()=>x.removeEventListener("click",_)},[t,h,n]),Z.useEffect(()=>{const x=n==null?void 0:n.current;x&&x.classList.toggle("is-pointing",l!=null)},[l,n]);const m=l!=null?t[l]:null;return E.jsxs(E.Fragment,{children:[!d&&E.jsx("canvas",{ref:r,className:`book-canvas ${i}`,"aria-hidden":"true"}),E.jsx("div",{ref:s,className:`hero-tip${m?" is-on":""}`,"aria-hidden":"true",children:m&&E.jsxs(E.Fragment,{children:[E.jsx("span",{className:"hero-tip-kicker",children:m.footer}),E.jsx("span",{children:m.title})]})})]})}const cg="cubic-bezier(.2,.8,.2,1)",uR=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function M_({wordmark:t,eyebrow:e,links:n=[],books:i}){const r=Z.useRef(null),s=Z.useRef(null),a=Z.useRef(null);Z.useEffect(()=>{if(uR())return;const l=[];return s.current&&l.push(s.current.animate([{opacity:0,transform:"translateY(4vh)",filter:"blur(14px)"},{opacity:1,transform:"translateY(0)",filter:"blur(0)"}],{duration:1400,delay:150,easing:cg,fill:"both"})),a.current&&l.push(a.current.animate([{opacity:0,transform:"translateY(1.2vh)"},{opacity:1,transform:"translateY(0)"}],{duration:900,delay:850,easing:cg,fill:"both"})),()=>l.forEach(c=>c.cancel())},[t]);const o=Math.max(5,[...t].length);return E.jsxs("section",{ref:r,className:`hero${o>12?" hero--long":""}`,style:{"--len":o},children:[e&&E.jsx("div",{className:"hero-eyebrow",children:e}),E.jsx("h1",{ref:s,className:"wordmark",children:t}),n.length>0&&E.jsx("nav",{ref:a,className:"hero-links","aria-label":"Accès direct",children:n.map(l=>l.onClick?E.jsx("button",{type:"button",onClick:l.onClick,children:l.label},l.label):E.jsx(ln,{to:l.to,children:l.label},l.to+l.label))}),E.jsx(cR,{books:i,framing:"hero",targetRef:r,className:"hero-canvas"}),E.jsx("div",{className:"hero-hint","aria-hidden":"true",children:"Survolez les livres · cliquez pour ouvrir"})]})}function dR(){const{meta:t,mois:e}=Ld,n=Z.useMemo(()=>e.map((i,r)=>({kicker:"Veille · IA & Santé",title:i.mois,footer:`${i.entrees.length} info${i.entrees.length>1?"s":""}`,color:no(r*3+1),styleIndex:r+2,anchor:`mois-${r}`})),[e]);return E.jsxs("main",{children:[E.jsx(M_,{wordmark:"Veille",eyebrow:`${t.sujet} — depuis le ${br(t.debut)}`,books:n}),E.jsxs("section",{className:"wrap veille",children:[E.jsxs("div",{className:"section-head",children:[E.jsx("div",{className:"eyebrow",children:"Veille technologique — BTS SIO SLAM"}),E.jsx("h2",{className:"display",children:"IA & Santé"}),E.jsxs("p",{className:"lede",children:["Suivi régulier de l’actualité sur l’intelligence artificielle appliquée à la médecine — une information relevée tous les ",t.frequence," depuis le ",br(t.debut),"."]})]}),E.jsxs("div",{className:"stats",children:[E.jsxs("div",{children:[E.jsx("b",{className:"display",children:t.informations}),E.jsx("span",{children:"informations suivies"})]}),E.jsxs("div",{children:[E.jsx("b",{className:"display",children:t.mois}),E.jsx("span",{children:"mois de veille"})]}),E.jsxs("div",{children:[E.jsx("b",{className:"display",children:t.sources}),E.jsx("span",{children:"sources différentes"})]}),E.jsxs("div",{children:[E.jsx("b",{className:"display",children:"↻"}),E.jsx("span",{children:t.frequence})]})]}),E.jsxs("p",{className:"muted",children:["Mise à jour le ",br(t.maj),". Chaque entrée précise l’outil de veille utilisé et renvoie vers la source."]}),e.map((i,r)=>E.jsxs("div",{className:"mois",id:`mois-${r}`,children:[E.jsxs("div",{className:"mois-label",children:[E.jsx("h3",{className:"display",children:i.mois}),E.jsxs("span",{className:"muted",children:[i.entrees.length," info",i.entrees.length>1?"s":""]})]}),E.jsx("div",{className:"entrees",children:i.entrees.map(s=>E.jsxs("article",{className:"entree",children:[E.jsx("div",{className:"entree-date",children:br(s.date)}),E.jsxs("div",{children:[E.jsxs("div",{className:"entree-head",children:[E.jsx("span",{className:"tag",children:s.outil}),E.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",children:[s.source," ↗"]})]}),E.jsx("p",{children:s.texte})]})]},s.date+s.source))})]},i.mois))]})]})}const fR="PHP · GSB · FLUTTER",hR="Travaux évalués de 2de année en développement Symfony : le contrôle de PHP du 15 octobre 2026, une application de médiathèque contenant cinq anomalies à trouver et à corriger, et le projet GSB Frais réalisé en équipe et rendu le 14 octobre 2026. S'y ajoute le contrôle de Flutter du 6 novembre 2026, une application mobile de médiathèque à corriger.",pR=[{valeur:"2",label:"projets Symfony"},{valeur:"5",label:"anomalies corrigées"},{valeur:"3",label:"profils dans GSB"},{valeur:"7.4",label:"version de Symfony"}],mR={eyebrow:"01 — Livrables",titre:"Ce qui a été rendu",lede:"Le contrôle de PHP, le projet GSB puis le contrôle de Flutter : documents, archives et code source.",groupes:[{periode:"2de année · 15 oct. 2026",titre:"Contrôle PHP — Médiathèque",description_html:"Le projet est livré sans le dossier <code>vendor</code>. Pour le lancer : <code>composer install</code>, <code>php bin/console doctrine:migrations:migrate</code>, <code>php bin/console doctrine:fixtures:load</code> puis <code>symfony serve</code>. Les fixtures créent un compte élève et un compte documentaliste.",elements:[{titre:"Réponses du contrôle (REPONSES.md)",date:"15 oct. 2026",href:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/REPONSES.md",telechargement:!1},{titre:"Projet Symfony corrigé (.zip)",date:"15 oct. 2026",href:"reports/controle-php-mediatheque.zip",telechargement:!0},{titre:"Code source sur GitHub",date:"15 oct. 2026",href:"https://github.com/deliodcb-pixel/portefolio/tree/main/projets/controle-php",telechargement:!1}]},{periode:"AP en binôme · 14 oct. 2026",titre:"GSB Frais — Gestion des frais de déplacement",description_html:"Projet réalisé en binôme avec Fadi. Le projet est livré sans les dossiers <code>vendor</code> et <code>var</code> ni le fichier <code>.env.local</code> (identifiants de la base Supabase). Pour le lancer : <code>composer install</code>, renseigner <code>DATABASE_URL</code> dans <code>.env.local</code>, puis <code>php bin/console doctrine:migrations:migrate</code>.",elements:[{titre:"Présentation du projet",date:"14 oct. 2026",href:"reports/gsb-presentation.pdf",telechargement:!0},{titre:"Notice utilisateur",date:"14 oct. 2026",href:"reports/gsb-notice-utilisateur.pdf",telechargement:!0},{titre:"Dossier AP-GSB (cahier des charges, charte, diagramme de classe)",date:"14 oct. 2026",href:"reports/gsb-dossier-ap.pdf",telechargement:!0},{titre:"Maquette de l'écran de validation",date:"14 oct. 2026",href:"projets/gsb-frais/public/maquette/validation.html",telechargement:!1},{titre:"Projet Symfony complet (.zip)",date:"14 oct. 2026",href:"reports/gsb-frais-projet.zip",telechargement:!0},{titre:"Code source sur GitHub",date:"14 oct. 2026",href:"https://github.com/deliodcb-pixel/portefolio/tree/main/projets/gsb-frais",telechargement:!1}]},{periode:"2de année · 6 nov. 2026",titre:"Contrôle Flutter — MediaTech",description_html:"Le projet est livré sans les dossiers de plateforme. Pour le lancer : <code>flutter create . --project-name mediatech</code> et <code>flutter pub get</code> dans <code>mediatech_start</code>, <code>python3 serveur.py</code> dans <code>mediatech_api</code>, puis <code>flutter run -d chrome</code>.",elements:[{titre:"Réponses du contrôle (reponses.MD)",date:"6 nov. 2026",href:"https://github.com/deliodcb-pixel/controle_flutter/blob/main/mediatech_start/reponses.MD",telechargement:!1},{titre:"Projet Flutter corrigé (.zip)",date:"6 nov. 2026",href:"reports/DUCHESNE-BRAJON_Delio.zip",telechargement:!0},{titre:"Code source sur GitHub",date:"6 nov. 2026",href:"https://github.com/deliodcb-pixel/controle_flutter",telechargement:!1}]}]},gR=[{id:"anomalies",eyebrow:"02 — Contrôle PHP : anomalies",titre:"Cinq anomalies, cinq corrections",lede:"Pour chaque anomalie : ce que l'on constate, la cause trouvée dans le code et la correction apportée. Les numéros de ligne correspondent au projet fourni.",groupes:[{label:"Fonctionnement",count:"2 anomalies",entrees:[{titre:"Anomalie 01",tag:"Routage",source:{url:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/src/Controller/LivreController.php",label:"LivreController.php ↗"},html:`<p><span class="lbl">Constat</span>Avec le compte documentaliste, on ne peut pas ajouter de livre : on arrive sur une erreur 404 (dans <code>var/log/dev.log</code> : « App\\Entity\\Livre object not found »).</p> <p><span class="lbl">Cause</span>Ligne 27, la route <code>livre_show</code> (<code>/livres/{id}</code>) est déclarée avant <code>livre_new</code> (<code>/livres/nouveau</code>) et <code>{id}</code> accepte n'importe quel texte, donc Symfony prend « nouveau » pour l'id d'un livre. On le voit avec <code>debug:router</code>.</p> <p><span class="lbl">Correction</span>Ajout de <code>requirements: ['id' =&gt; '\\d+']</code> sur <code>livre_show</code> pour que <code>{id}</code> n'accepte que des chiffres.</p>`},{titre:"Anomalie 03",tag:"Doctrine",source:{url:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/src/Controller/LivreController.php",label:"LivreController.php ↗"},html:`<p><span class="lbl">Constat</span>Une fois la page d'ajout réparée, le message « Le livre a été ajouté au catalogue » s'affiche mais le livre n'apparaît pas dans le catalogue.</p> <p><span class="lbl">Cause</span>Ligne 43, il y a <code>$em-&gt;persist($livre)</code> mais pas de <code>$em-&gt;flush()</code>, donc rien n'est enregistré en base.</p> <p><span class="lbl">Correction</span>Ajout de <code>$em-&gt;flush()</code> après le <code>persist()</code>.</p>`}]},{label:"Sécurité",count:"3 anomalies",entrees:[{titre:"Anomalie 02",tag:"Faille XSS",source:{url:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/templates/livre/show.html.twig",label:"show.html.twig ↗"},html:`<p><span class="lbl">Constat</span>Quel que soit le compte, en ouvrant le septième livre (« Voyage au centre de la Terre »), un pop-up oblige à cliquer sur OK avant d'afficher la page. Même chose après une modification.</p> <p><span class="lbl">Cause</span>Ligne 15, la description est affichée avec <code>|raw</code> : Twig n'échappe pas le HTML et le script <code>alert(1)</code> présent dans la description est exécuté par le navigateur. Un script malveillant pourrait voler la session des utilisateurs.</p> <p><span class="lbl">Correction</span>Suppression du <code>|raw</code> : le script s'affiche maintenant comme du texte.</p>`},{titre:"Anomalie 04",tag:"Injection DQL",source:{url:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/src/Repository/LivreRepository.php",label:"LivreRepository.php ↗"},html:`<p><span class="lbl">Constat</span>Une recherche contenant une apostrophe (par exemple « l' ») provoque une erreur 500.</p> <p><span class="lbl">Cause</span>Ligne 32, le texte de la recherche est collé directement dans la requête DQL, l'utilisateur peut donc modifier la requête.</p> <p><span class="lbl">Correction</span>Utilisation d'un paramètre : <code>-&gt;andWhere('l.titre LIKE :q')-&gt;setParameter('q', '%' . $q . '%')</code>.</p>`},{titre:"Anomalie 05",tag:"Contrôle d'accès",source:{url:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/config/packages/security.yaml",label:"security.yaml ↗"},html:`<p><span class="lbl">Constat</span>Avec le compte élève, on peut aller sur <code>/livres/1/modifier</code> et modifier un livre, alors que c'est réservé aux documentalistes.</p> <p><span class="lbl">Cause</span>Lignes 32-33, la règle <code>^/livres</code> (<code>ROLE_USER</code>) est placée avant celle des documentalistes. Symfony applique seulement la première règle qui correspond, celle des documentalistes n'est donc jamais utilisée.</p> <p><span class="lbl">Correction</span>La règle des documentalistes est placée avant <code>^/livres</code>. L'élève obtient maintenant une erreur 403 sur l'ajout, la modification et la suppression.</p>`}]}]},{id:"fonctionnalites",eyebrow:"03 — GSB Frais : fonctionnalités",titre:"Trois profils, trois espaces",lede:"Un formulaire de connexion commun, puis chaque utilisateur est envoyé vers son espace selon son rôle.",groupes:[{label:"Visiteur",count:"/visiteur",entrees:[{titre:"Fiche du mois",tag:"Saisie",source:null,html:"<p>Saisie des frais forfaitisés (nuitées, repas, étapes, kilomètres) et des frais hors forfait, modifiables tant que la fiche est en saisie.</p>"},{titre:"Véhicule",tag:"Barème",source:null,html:"<p>Le visiteur déclare sur chaque fiche le véhicule utilisé parmi les six possibilités du barème (trois tranches de puissance, diesel ou essence). Le tarif au kilomètre en dépend.</p>"},{titre:"Trajets",tag:"Distances",source:null,html:"<p>Le visiteur saisit une ville de départ et une ville d'arrivée, la distance par la route est calculée automatiquement et reportée sur la fiche.</p>"},{titre:"Justificatifs",tag:"Upload",source:null,html:"<p>Dépôt de factures (PDF, JPEG, PNG, WebP, 5 Mo maximum) rattachées à une ligne hors forfait, export PDF de la fiche et historique des fiches précédentes.</p>"}]},{label:"Comptable",count:"/comptable",entrees:[{titre:"Validation",tag:"Cas d'utilisation",source:null,html:"<p>Choix d'un visiteur et d'un mois, contrôle des montants et des justificatifs, correction des quantités forfaitisées, refus des lignes hors forfait non justifiées puis validation de la fiche.</p>"},{titre:"Paiement",tag:"Suivi",source:null,html:"<p>Mise en paiement des fiches validées et suivi jusqu'au remboursement, avec une vue de toutes les fiches rangées par état.</p>"},{titre:"Éditions",tag:"PDF",source:null,html:"<p>Impression d'une fiche, de toutes les fiches d'un visiteur ou du lot mensuel des fiches clôturées.</p>"}]},{label:"Administrateur",count:"/admin",entrees:[{titre:"Comptes",tag:"Gestion des accès",source:null,html:"<p>Création des comptes visiteurs et comptables, réinitialisation des mots de passe et suppression. L'administrateur peut aussi traiter les fiches comme un comptable, mais l'inverse n'est pas possible.</p>"}]}]},{id:"technique",eyebrow:"04 — GSB Frais : points techniques",titre:"Ce qui a demandé le plus de travail",lede:"",groupes:[{label:"Métier",count:"2 points",entrees:[{titre:"Distances",tag:"API publiques",source:null,html:"<p>Chaque ville est convertie en coordonnées GPS avec la Base Adresse Nationale, puis OSRM donne la distance par la route. Si OSRM ne répond pas, l'application calcule la distance à vol d'oiseau (formule de haversine) majorée de 30 % et le signale. Les résultats sont mis en cache.</p>"},{titre:"Barème",tag:"Frais kilométriques",source:null,html:'<p>Le forfait unique de 0,62 €/km est remplacé par un barème selon la puissance fiscale et le carburant :</p> <table class="bareme"> <thead><tr><th>Puissance</th><th>Diesel</th><th>Essence</th></tr></thead> <tbody> <tr><td>4 CV</td><td>0,52 €</td><td>0,62 €</td></tr> <tr><td>5 et 6 CV</td><td>0,58 €</td><td>0,67 €</td></tr> <tr><td>7 CV et plus</td><td>0,65 €</td><td>0,72 €</td></tr> </tbody> </table>'}]},{label:"Technique",count:"3 points",entrees:[{titre:"Base",tag:"Supabase",source:null,html:"<p>La base PostgreSQL existait déjà avec ses contraintes. Les six migrations sont uniquement additives : aucune table ni colonne n'a été supprimée ou renommée.</p>"},{titre:"PDF",tag:"Dompdf",source:null,html:"<p>Les fiches sont générées en PDF avec Dompdf à partir d'un gabarit Twig, au format de l'annexe 1 de l'énoncé.</p>"},{titre:"Sécurité",tag:"Justificatifs",source:null,html:"<p>Les factures sont stockées hors de la racine web, sous un nom non devinable, et servies par un contrôleur qui vérifie les droits. Tous les formulaires sont protégés par un jeton CSRF.</p>"}]}]}],vR={sous:fR,lede:hR,stats:pR,livrables:mR,sections:gR};function _R(t){return/^https?:/.test(t)?t:`./${t}`}function xR(){const{sous:t,lede:e,stats:n,livrables:i,sections:r}=vR,s=Z.useMemo(()=>[...i.groupes.map((a,o)=>({kicker:a.periode,title:a.titre,footer:`${a.elements.length} éléments`,color:no(o*4+2),styleIndex:o*3+1,anchor:`livrable-${o}`})),...r.map((a,o)=>({kicker:a.eyebrow.replace(/^\d+\s—\s/,""),title:a.titre,footer:"Analyse",color:no(o*5+9),styleIndex:o*3+4,anchor:a.id}))],[i,r]);return E.jsxs("main",{children:[E.jsx(M_,{wordmark:"Contrôle",eyebrow:t,books:s}),E.jsxs("section",{className:"wrap veille",children:[E.jsxs("div",{className:"section-head",children:[E.jsx("div",{className:"eyebrow",children:"Travaux évalués — 2de année"}),E.jsx("h2",{className:"display",children:t}),E.jsx("p",{className:"lede",children:e})]}),E.jsx("div",{className:"stats",children:n.map(a=>E.jsxs("div",{children:[E.jsx("b",{className:"display",children:a.valeur}),E.jsx("span",{children:a.label})]},a.label))}),E.jsxs("div",{className:"section-head controle-sub",children:[E.jsx("div",{className:"eyebrow",children:i.eyebrow}),E.jsx("h2",{className:"display",children:i.titre}),E.jsx("p",{className:"lede",children:i.lede})]}),i.groupes.map((a,o)=>E.jsxs("div",{className:"mois",id:`livrable-${o}`,children:[E.jsxs("div",{className:"mois-label",children:[E.jsx("h3",{className:"display",children:a.titre}),E.jsx("span",{className:"muted",children:a.periode})]}),E.jsxs("div",{children:[E.jsx("p",{className:"rich muted",dangerouslySetInnerHTML:{__html:a.description_html}}),E.jsx("ol",{className:"cr-list",children:a.elements.map((l,c)=>{const d=/^https?:/.test(l.href);return E.jsx("li",{children:E.jsxs("a",{className:"cr-item",href:_R(l.href),...l.telechargement?{download:!0}:{target:"_blank",rel:"noopener noreferrer"},children:[E.jsx("span",{className:"cr-idx",children:Vf(c+1)}),E.jsx("span",{className:"cr-title",children:l.titre}),E.jsx("span",{className:"cr-date",children:l.date}),E.jsx("span",{className:"cr-arrow","aria-hidden":"true",children:l.telechargement?"↓":d?"↗":"→"})]})},l.href)})})]})]},a.titre)),r.map(a=>E.jsxs("div",{id:a.id,className:"controle-section",children:[E.jsxs("div",{className:"section-head controle-sub",children:[E.jsx("div",{className:"eyebrow",children:a.eyebrow}),E.jsx("h2",{className:"display",children:a.titre}),a.lede&&E.jsx("p",{className:"lede",children:a.lede})]}),a.groupes.map(o=>E.jsxs("div",{className:"mois",children:[E.jsxs("div",{className:"mois-label",children:[E.jsx("h3",{className:"display",children:o.label}),E.jsx("span",{className:"muted",children:o.count})]}),E.jsx("div",{className:"entrees",children:o.entrees.map(l=>E.jsxs("article",{className:"entree",children:[E.jsx("div",{className:"entree-date",children:l.titre}),E.jsxs("div",{children:[E.jsxs("div",{className:"entree-head",children:[l.tag&&E.jsx("span",{className:"tag",children:l.tag}),l.source&&E.jsx("a",{href:l.source.url,target:"_blank",rel:"noopener noreferrer",children:l.source.label})]}),E.jsx("div",{className:"rich",dangerouslySetInnerHTML:{__html:l.html}})]})]},l.titre+l.tag))})]},o.label))]},a.id))]})]})}function yR(){const{pathname:t,state:e}=dr();return Z.useEffect(()=>{e!=null&&e.scrollTo||window.scrollTo(0,0)},[t,e]),null}function SR(){const{pathname:t}=dr(),e=t.startsWith("/matiere/");return E.jsxs(E.Fragment,{children:[E.jsx(yR,{}),!e&&E.jsx(fM,{}),E.jsxs(XS,{children:[E.jsx(Sr,{path:"/",element:E.jsx(QA,{})}),E.jsx(Sr,{path:"/matiere/:slug",element:E.jsx(nR,{})}),E.jsx(Sr,{path:"/cr/:slug",element:E.jsx(iR,{})}),E.jsx(Sr,{path:"/veille",element:E.jsx(dR,{})}),E.jsx(Sr,{path:"/controle",element:E.jsx(xR,{})}),E.jsx(Sr,{path:"*",element:E.jsx(rh,{})})]}),!e&&E.jsx(hM,{})]})}Mv(document.getElementById("root")).render(E.jsx(Z.StrictMode,{children:E.jsx(JS,{children:E.jsx(SR,{})})}));
