function L_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function D_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pg={exports:{}},sc={},mg={exports:{}},Ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),N_=Symbol.for("react.portal"),U_=Symbol.for("react.fragment"),I_=Symbol.for("react.strict_mode"),F_=Symbol.for("react.profiler"),O_=Symbol.for("react.provider"),k_=Symbol.for("react.context"),B_=Symbol.for("react.forward_ref"),z_=Symbol.for("react.suspense"),H_=Symbol.for("react.memo"),G_=Symbol.for("react.lazy"),ch=Symbol.iterator;function V_(t){return t===null||typeof t!="object"?null:(t=ch&&t[ch]||t["@@iterator"],typeof t=="function"?t:null)}var gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vg=Object.assign,_g={};function Js(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||gg}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xg(){}xg.prototype=Js.prototype;function Xd(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||gg}var qd=Xd.prototype=new xg;qd.constructor=Xd;vg(qd,Js.prototype);qd.isPureReactComponent=!0;var uh=Array.isArray,yg=Object.prototype.hasOwnProperty,$d={current:null},Sg={key:!0,ref:!0,__self:!0,__source:!0};function Mg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)yg.call(e,i)&&!Sg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:uo,type:t,key:s,ref:a,props:r,_owner:$d.current}}function W_(t,e){return{$$typeof:uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===uo}function j_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dh=/\/+/g;function Dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j_(""+t.key):e.toString(36)}function ul(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case uo:case N_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Dc(a,0):i,uh(r)?(n="",t!=null&&(n=t.replace(dh,"$&/")+"/"),ul(r,e,n,"",function(c){return c})):r!=null&&(Yd(r)&&(r=W_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(dh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",uh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Dc(s,o);a+=ul(s,e,n,l,r)}else if(l=V_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Dc(s,o++),a+=ul(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function So(t,e,n){if(t==null)return t;var i=[],r=0;return ul(t,i,"","",function(s){return e.call(n,s,r++)}),i}function X_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},dl={transition:null},q_={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:dl,ReactCurrentOwner:$d};function Eg(){throw Error("act(...) is not supported in production builds of React.")}Ke.Children={map:So,forEach:function(t,e,n){So(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return So(t,function(){e++}),e},toArray:function(t){return So(t,function(e){return e})||[]},only:function(t){if(!Yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ke.Component=Js;Ke.Fragment=U_;Ke.Profiler=F_;Ke.PureComponent=Xd;Ke.StrictMode=I_;Ke.Suspense=z_;Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q_;Ke.act=Eg;Ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=vg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=$d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)yg.call(e,l)&&!Sg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:uo,type:t.type,key:r,ref:s,props:i,_owner:a}};Ke.createContext=function(t){return t={$$typeof:k_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:O_,_context:t},t.Consumer=t};Ke.createElement=Mg;Ke.createFactory=function(t){var e=Mg.bind(null,t);return e.type=t,e};Ke.createRef=function(){return{current:null}};Ke.forwardRef=function(t){return{$$typeof:B_,render:t}};Ke.isValidElement=Yd;Ke.lazy=function(t){return{$$typeof:G_,_payload:{_status:-1,_result:t},_init:X_}};Ke.memo=function(t,e){return{$$typeof:H_,type:t,compare:e===void 0?null:e}};Ke.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};Ke.unstable_act=Eg;Ke.useCallback=function(t,e){return sn.current.useCallback(t,e)};Ke.useContext=function(t){return sn.current.useContext(t)};Ke.useDebugValue=function(){};Ke.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Ke.useEffect=function(t,e){return sn.current.useEffect(t,e)};Ke.useId=function(){return sn.current.useId()};Ke.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Ke.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Ke.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Ke.useMemo=function(t,e){return sn.current.useMemo(t,e)};Ke.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Ke.useRef=function(t){return sn.current.useRef(t)};Ke.useState=function(t){return sn.current.useState(t)};Ke.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Ke.useTransition=function(){return sn.current.useTransition()};Ke.version="18.3.1";mg.exports=Ke;var Q=mg.exports;const $_=D_(Q),Y_=L_({__proto__:null,default:$_},[Q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=Q,Z_=Symbol.for("react.element"),Q_=Symbol.for("react.fragment"),J_=Object.prototype.hasOwnProperty,ex=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tx={key:!0,ref:!0,__self:!0,__source:!0};function wg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)J_.call(e,i)&&!tx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Z_,type:t,key:s,ref:a,props:r,_owner:ex.current}}sc.Fragment=Q_;sc.jsx=wg;sc.jsxs=wg;pg.exports=sc;var w=pg.exports,Tg={exports:{}},Mn={},Ag={exports:{}},Rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,k){var z=D.length;D.push(k);e:for(;0<z;){var ie=z-1>>>1,Z=D[ie];if(0<r(Z,k))D[ie]=k,D[z]=Z,z=ie;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var k=D[0],z=D.pop();if(z!==k){D[0]=z;e:for(var ie=0,Z=D.length,V=Z>>>1;ie<V;){var re=2*(ie+1)-1,de=D[re],fe=re+1,ye=D[fe];if(0>r(de,z))fe<Z&&0>r(ye,de)?(D[ie]=ye,D[fe]=z,ie=fe):(D[ie]=de,D[re]=z,ie=re);else if(fe<Z&&0>r(ye,z))D[ie]=ye,D[fe]=z,ie=fe;else break e}}return k}function r(D,k){var z=D.sortIndex-k.sortIndex;return z!==0?z:D.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,m=!1,x=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=D)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function y(D){if(_=!1,g(D),!x)if(n(l)!==null)x=!0,$(P);else{var k=n(c);k!==null&&ee(y,k.startTime-D)}}function P(D,k){x=!1,_&&(_=!1,u(O),O=-1),m=!0;var z=h;try{for(g(k),f=n(l);f!==null&&(!(f.expirationTime>k)||D&&!q());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var Z=ie(f.expirationTime<=k);k=t.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&i(l),g(k)}else i(l);f=n(l)}if(f!==null)var V=!0;else{var re=n(c);re!==null&&ee(y,re.startTime-k),V=!1}return V}finally{f=null,h=z,m=!1}}var R=!1,C=null,O=-1,M=5,T=-1;function q(){return!(t.unstable_now()-T<M)}function J(){if(C!==null){var D=t.unstable_now();T=D;var k=!0;try{k=C(!0,D)}finally{k?ue():(R=!1,C=null)}}else R=!1}var ue;if(typeof v=="function")ue=function(){v(J)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,G=L.port2;L.port1.onmessage=J,ue=function(){G.postMessage(null)}}else ue=function(){p(J,0)};function $(D){C=D,R||(R=!0,ue())}function ee(D,k){O=p(function(){D(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,$(P))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var z=h;h=k;try{return D()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,k){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=h;h=D;try{return k()}finally{h=z}},t.unstable_scheduleCallback=function(D,k,z){var ie=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ie+z:ie):z=ie,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=z+Z,D={id:d++,callback:k,priorityLevel:D,startTime:z,expirationTime:Z,sortIndex:-1},z>ie?(D.sortIndex=z,e(c,D),n(l)===null&&D===n(c)&&(_?(u(O),O=-1):_=!0,ee(y,z-ie))):(D.sortIndex=Z,e(l,D),x||m||(x=!0,$(P))),D},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(D){var k=h;return function(){var z=h;h=k;try{return D.apply(this,arguments)}finally{h=z}}}})(Rg);Ag.exports=Rg;var nx=Ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix=Q,Sn=nx;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cg=new Set,Ha={};function Br(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(Ha[t]=e,t=0;t<e.length;t++)Cg.add(e[t])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=Object.prototype.hasOwnProperty,rx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fh={},hh={};function sx(t){return ku.call(hh,t)?!0:ku.call(fh,t)?!1:rx.test(t)?hh[t]=!0:(fh[t]=!0,!1)}function ax(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ox(t,e,n,i){if(e===null||typeof e>"u"||ax(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kd=/[\-:]([a-z])/g;function Zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Bt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kd,Zd);Bt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kd,Zd);Bt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ox(e,n,r,i)&&(n=null),i||r===null?sx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ei=ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mo=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),bg=Symbol.for("react.provider"),Pg=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),zu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),Lg=Symbol.for("react.offscreen"),ph=Symbol.iterator;function la(t){return t===null||typeof t!="object"?null:(t=ph&&t[ph]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Nc;function Ea(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Uc=!1;function Ic(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ea(t):""}function lx(t){switch(t.tag){case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 2:case 15:return t=Ic(t.type,!1),t;case 11:return t=Ic(t.type.render,!1),t;case 1:return t=Ic(t.type,!0),t;default:return""}}function Gu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case Bu:return"Profiler";case Jd:return"StrictMode";case zu:return"Suspense";case Hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pg:return(t.displayName||"Context")+".Consumer";case bg:return(t._context.displayName||"Context")+".Provider";case ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tf:return e=t.displayName||null,e!==null?e:Gu(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return Gu(t(e))}catch{}}return null}function cx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gu(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ux(t){var e=Dg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eo(t){t._valueTracker||(t._valueTracker=ux(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Dg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ug(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function Wu(t,e){Ug(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&ju(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ju(t,e,n){(e!=="number"||wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wa=Array.isArray;function Ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(wa(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function Ig(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function _h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wo,Og=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dx=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){dx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function kg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function Bg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=kg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var fx=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(t,e){if(e){if(fx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Yu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ku=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zu=null,Ls=null,Ds=null;function xh(t){if(t=po(t)){if(typeof Zu!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=uc(e),Zu(t.stateNode,t.type,e))}}function zg(t){Ls?Ds?Ds.push(t):Ds=[t]:Ls=t}function Hg(){if(Ls){var t=Ls,e=Ds;if(Ds=Ls=null,xh(t),e)for(t=0;t<e.length;t++)xh(e[t])}}function Gg(t,e){return t(e)}function Vg(){}var Fc=!1;function Wg(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return Gg(t,e,n)}finally{Fc=!1,(Ls!==null||Ds!==null)&&(Vg(),Hg())}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var i=uc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Qu=!1;if(_i)try{var ca={};Object.defineProperty(ca,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{Qu=!1}function hx(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ba=!1,Tl=null,Al=!1,Ju=null,px={onError:function(t){ba=!0,Tl=t}};function mx(t,e,n,i,r,s,a,o,l){ba=!1,Tl=null,hx.apply(px,arguments)}function gx(t,e,n,i,r,s,a,o,l){if(mx.apply(this,arguments),ba){if(ba){var c=Tl;ba=!1,Tl=null}else throw Error(ce(198));Al||(Al=!0,Ju=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yh(t){if(zr(t)!==t)throw Error(ce(188))}function vx(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yh(r),t;if(s===i)return yh(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function Xg(t){return t=vx(t),t!==null?qg(t):null}function qg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qg(t);if(e!==null)return e;t=t.sibling}return null}var $g=Sn.unstable_scheduleCallback,Sh=Sn.unstable_cancelCallback,_x=Sn.unstable_shouldYield,xx=Sn.unstable_requestPaint,Mt=Sn.unstable_now,yx=Sn.unstable_getCurrentPriorityLevel,rf=Sn.unstable_ImmediatePriority,Yg=Sn.unstable_UserBlockingPriority,Rl=Sn.unstable_NormalPriority,Sx=Sn.unstable_LowPriority,Kg=Sn.unstable_IdlePriority,ac=null,Jn=null;function Mx(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(ac,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:Tx,Ex=Math.log,wx=Math.LN2;function Tx(t){return t>>>=0,t===0?32:31-(Ex(t)/wx|0)|0}var To=64,Ao=4194304;function Ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ta(o):(s&=a,s!==0&&(i=Ta(s)))}else a=n&~r,a!==0?i=Ta(a):s!==0&&(i=Ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ax(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Xn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Ax(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zg(){var t=To;return To<<=1,!(To&4194240)&&(To=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function Cx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function Qg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jg,af,ev,tv,nv,td=!1,Ro=[],Hi=null,Gi=null,Vi=null,Wa=new Map,ja=new Map,Ni=[],bx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mh(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":Wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(e.pointerId)}}function ua(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=po(e),e!==null&&af(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Px(t,e,n,i,r){switch(e){case"focusin":return Hi=ua(Hi,t,e,n,i,r),!0;case"dragenter":return Gi=ua(Gi,t,e,n,i,r),!0;case"mouseover":return Vi=ua(Vi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Wa.set(s,ua(Wa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ja.set(s,ua(ja.get(s)||null,t,e,n,i,r)),!0}return!1}function iv(t){var e=Er(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=jg(n),e!==null){t.blockedOn=e,nv(t.priority,function(){ev(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ku=i,n.target.dispatchEvent(i),Ku=null}else return e=po(n),e!==null&&af(e),t.blockedOn=n,!1;e.shift()}return!0}function Eh(t,e,n){fl(t)&&n.delete(e)}function Lx(){td=!1,Hi!==null&&fl(Hi)&&(Hi=null),Gi!==null&&fl(Gi)&&(Gi=null),Vi!==null&&fl(Vi)&&(Vi=null),Wa.forEach(Eh),ja.forEach(Eh)}function da(t,e){t.blockedOn===e&&(t.blockedOn=null,td||(td=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Lx)))}function Xa(t){function e(r){return da(r,t)}if(0<Ro.length){da(Ro[0],t);for(var n=1;n<Ro.length;n++){var i=Ro[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&da(Hi,t),Gi!==null&&da(Gi,t),Vi!==null&&da(Vi,t),Wa.forEach(e),ja.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)iv(n),n.blockedOn===null&&Ni.shift()}var Ns=Ei.ReactCurrentBatchConfig,bl=!0;function Dx(t,e,n,i){var r=nt,s=Ns.transition;Ns.transition=null;try{nt=1,of(t,e,n,i)}finally{nt=r,Ns.transition=s}}function Nx(t,e,n,i){var r=nt,s=Ns.transition;Ns.transition=null;try{nt=4,of(t,e,n,i)}finally{nt=r,Ns.transition=s}}function of(t,e,n,i){if(bl){var r=nd(t,e,n,i);if(r===null)qc(t,e,i,Pl,n),Mh(t,i);else if(Px(r,t,e,n,i))i.stopPropagation();else if(Mh(t,i),e&4&&-1<bx.indexOf(t)){for(;r!==null;){var s=po(r);if(s!==null&&Jg(s),s=nd(t,e,n,i),s===null&&qc(t,e,i,Pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var Pl=null;function nd(t,e,n,i){if(Pl=null,t=nf(i),t=Er(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pl=t,null}function rv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yx()){case rf:return 1;case Yg:return 4;case Rl:case Sx:return 16;case Kg:return 536870912;default:return 16}default:return 16}}var Fi=null,lf=null,hl=null;function sv(){if(hl)return hl;var t,e=lf,n=e.length,i,r="value"in Fi?Fi.value:Fi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return hl=r.slice(t,1<i?1-i:void 0)}function pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Co(){return!0}function wh(){return!1}function En(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Co:wh,this.isPropagationStopped=wh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cf=En(ea),ho=gt({},ea,{view:0,detail:0}),Ux=En(ho),kc,Bc,fa,oc=gt({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(kc=t.screenX-fa.screenX,Bc=t.screenY-fa.screenY):Bc=kc=0,fa=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Th=En(oc),Ix=gt({},oc,{dataTransfer:0}),Fx=En(Ix),Ox=gt({},ho,{relatedTarget:0}),zc=En(Ox),kx=gt({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Bx=En(kx),zx=gt({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hx=En(zx),Gx=gt({},ea,{data:0}),Ah=En(Gx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jx[t])?!!e[t]:!1}function uf(){return Xx}var qx=gt({},ho,{key:function(t){if(t.key){var e=Vx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$x=En(qx),Yx=gt({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=En(Yx),Kx=gt({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),Zx=En(Kx),Qx=gt({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jx=En(Qx),ey=gt({},oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ty=En(ey),ny=[9,13,27,32],df=_i&&"CompositionEvent"in window,Pa=null;_i&&"documentMode"in document&&(Pa=document.documentMode);var iy=_i&&"TextEvent"in window&&!Pa,av=_i&&(!df||Pa&&8<Pa&&11>=Pa),Ch=" ",bh=!1;function ov(t,e){switch(t){case"keyup":return ny.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function ry(t,e){switch(t){case"compositionend":return lv(e);case"keypress":return e.which!==32?null:(bh=!0,Ch);case"textInput":return t=e.data,t===Ch&&bh?null:t;default:return null}}function sy(t,e){if(vs)return t==="compositionend"||!df&&ov(t,e)?(t=sv(),hl=lf=Fi=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return av&&e.locale!=="ko"?null:e.data;default:return null}}var ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ay[t.type]:e==="textarea"}function cv(t,e,n,i){zg(i),e=Ll(e,"onChange"),0<e.length&&(n=new cf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var La=null,qa=null;function oy(t){yv(t,0)}function lc(t){var e=ys(t);if(Ng(e))return t}function ly(t,e){if(t==="change")return e}var uv=!1;if(_i){var Hc;if(_i){var Gc="oninput"in document;if(!Gc){var Lh=document.createElement("div");Lh.setAttribute("oninput","return;"),Gc=typeof Lh.oninput=="function"}Hc=Gc}else Hc=!1;uv=Hc&&(!document.documentMode||9<document.documentMode)}function Dh(){La&&(La.detachEvent("onpropertychange",dv),qa=La=null)}function dv(t){if(t.propertyName==="value"&&lc(qa)){var e=[];cv(e,qa,t,nf(t)),Wg(oy,e)}}function cy(t,e,n){t==="focusin"?(Dh(),La=e,qa=n,La.attachEvent("onpropertychange",dv)):t==="focusout"&&Dh()}function uy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lc(qa)}function dy(t,e){if(t==="click")return lc(e)}function fy(t,e){if(t==="input"||t==="change")return lc(e)}function hy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:hy;function $a(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ku.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Nh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var n=Nh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nh(n)}}function fv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hv(){for(var t=window,e=wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wl(t.document)}return e}function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function py(t){var e=hv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fv(n.ownerDocument.documentElement,n)){if(i!==null&&ff(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Uh(n,s);var a=Uh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var my=_i&&"documentMode"in document&&11>=document.documentMode,_s=null,id=null,Da=null,rd=!1;function Ih(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rd||_s==null||_s!==wl(i)||(i=_s,"selectionStart"in i&&ff(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&$a(Da,i)||(Da=i,i=Ll(id,"onSelect"),0<i.length&&(e=new cf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function bo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Vc={},pv={};_i&&(pv=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function cc(t){if(Vc[t])return Vc[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pv)return Vc[t]=e[n];return t}var mv=cc("animationend"),gv=cc("animationiteration"),vv=cc("animationstart"),_v=cc("transitionend"),xv=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){xv.set(t,e),Br(e,[t])}for(var Wc=0;Wc<Fh.length;Wc++){var jc=Fh[Wc],gy=jc.toLowerCase(),vy=jc[0].toUpperCase()+jc.slice(1);ir(gy,"on"+vy)}ir(mv,"onAnimationEnd");ir(gv,"onAnimationIteration");ir(vv,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(_v,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function Oh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,gx(i,e,void 0,t),t.currentTarget=null}function yv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Oh(r,o,c),s=l}}}if(Al)throw t=Ju,Al=!1,Ju=null,t}function lt(t,e){var n=e[cd];n===void 0&&(n=e[cd]=new Set);var i=t+"__bubble";n.has(i)||(Sv(e,t,2,!1),n.add(i))}function Xc(t,e,n){var i=0;e&&(i|=4),Sv(n,t,i,e)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Ya(t){if(!t[Po]){t[Po]=!0,Cg.forEach(function(n){n!=="selectionchange"&&(_y.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Po]||(e[Po]=!0,Xc("selectionchange",!1,e))}}function Sv(t,e,n,i){switch(rv(e)){case 1:var r=Dx;break;case 4:r=Nx;break;default:r=of}n=r.bind(null,e,n,t),r=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Wg(function(){var c=s,d=nf(n),f=[];e:{var h=xv.get(t);if(h!==void 0){var m=cf,x=t;switch(t){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":m=$x;break;case"focusin":x="focus",m=zc;break;case"focusout":x="blur",m=zc;break;case"beforeblur":case"afterblur":m=zc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Zx;break;case mv:case gv:case vv:m=Bx;break;case _v:m=Jx;break;case"scroll":m=Ux;break;case"wheel":m=ty;break;case"copy":case"cut":case"paste":m=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Rh}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?h!==null?h+"Capture":null:h;_=[];for(var v=c,g;v!==null;){g=v;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,u!==null&&(y=Va(v,u),y!=null&&_.push(Ka(v,y,g)))),p)break;v=v.return}0<_.length&&(h=new m(h,x,null,n,d),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Ku&&(x=n.relatedTarget||n.fromElement)&&(Er(x)||x[xi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Er(x):null,x!==null&&(p=zr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(_=Th,y="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Rh,y="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?h:ys(m),g=x==null?h:ys(x),h=new _(y,v+"leave",m,n,d),h.target=p,h.relatedTarget=g,y=null,Er(d)===c&&(_=new _(u,v+"enter",x,n,d),_.target=g,_.relatedTarget=p,y=_),p=y,m&&x)t:{for(_=m,u=x,v=0,g=_;g;g=Xr(g))v++;for(g=0,y=u;y;y=Xr(y))g++;for(;0<v-g;)_=Xr(_),v--;for(;0<g-v;)u=Xr(u),g--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=Xr(_),u=Xr(u)}_=null}else _=null;m!==null&&kh(f,h,m,_,!1),x!==null&&p!==null&&kh(f,p,x,_,!0)}}e:{if(h=c?ys(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=ly;else if(Ph(h))if(uv)P=fy;else{P=uy;var R=cy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=dy);if(P&&(P=P(t,c))){cv(f,P,n,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&ju(h,"number",h.value)}switch(R=c?ys(c):window,t){case"focusin":(Ph(R)||R.contentEditable==="true")&&(_s=R,id=c,Da=null);break;case"focusout":Da=id=_s=null;break;case"mousedown":rd=!0;break;case"contextmenu":case"mouseup":case"dragend":rd=!1,Ih(f,n,d);break;case"selectionchange":if(my)break;case"keydown":case"keyup":Ih(f,n,d)}var C;if(df)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else vs?ov(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(av&&n.locale!=="ko"&&(vs||O!=="onCompositionStart"?O==="onCompositionEnd"&&vs&&(C=sv()):(Fi=d,lf="value"in Fi?Fi.value:Fi.textContent,vs=!0)),R=Ll(c,O),0<R.length&&(O=new Ah(O,t,null,n,d),f.push({event:O,listeners:R}),C?O.data=C:(C=lv(n),C!==null&&(O.data=C)))),(C=iy?ry(t,n):sy(t,n))&&(c=Ll(c,"onBeforeInput"),0<c.length&&(d=new Ah("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=C))}yv(f,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Va(t,n),s!=null&&i.unshift(Ka(t,s,r)),s=Va(t,e),s!=null&&i.push(Ka(t,s,r))),t=t.return}return i}function Xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Va(n,s),l!=null&&a.unshift(Ka(n,l,o))):r||(l=Va(n,s),l!=null&&a.push(Ka(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var xy=/\r\n?/g,yy=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace(xy,`
`).replace(yy,"")}function Lo(t,e,n){if(e=Bh(e),Bh(t)!==e&&n)throw Error(ce(425))}function Dl(){}var sd=null,ad=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ld=typeof setTimeout=="function"?setTimeout:void 0,Sy=typeof clearTimeout=="function"?clearTimeout:void 0,zh=typeof Promise=="function"?Promise:void 0,My=typeof queueMicrotask=="function"?queueMicrotask:typeof zh<"u"?function(t){return zh.resolve(null).then(t).catch(Ey)}:ld;function Ey(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xa(e)}function Wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ta=Math.random().toString(36).slice(2),Qn="__reactFiber$"+ta,Za="__reactProps$"+ta,xi="__reactContainer$"+ta,cd="__reactEvents$"+ta,wy="__reactListeners$"+ta,Ty="__reactHandles$"+ta;function Er(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hh(t);t!==null;){if(n=t[Qn])return n;t=Hh(t)}return e}t=n,n=t.parentNode}return null}function po(t){return t=t[Qn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function uc(t){return t[Za]||null}var ud=[],Ss=-1;function rr(t){return{current:t}}function dt(t){0>Ss||(t.current=ud[Ss],ud[Ss]=null,Ss--)}function ot(t,e){Ss++,ud[Ss]=t.current,t.current=e}var er={},Yt=rr(er),cn=rr(!1),Ur=er;function Hs(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function Nl(){dt(cn),dt(Yt)}function Gh(t,e,n){if(Yt.current!==er)throw Error(ce(168));ot(Yt,e),ot(cn,n)}function Mv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,cx(t)||"Unknown",r));return gt({},n,i)}function Ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Ur=Yt.current,ot(Yt,t),ot(cn,cn.current),!0}function Vh(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Mv(t,e,Ur),i.__reactInternalMemoizedMergedChildContext=t,dt(cn),dt(Yt),ot(Yt,t)):dt(cn),ot(cn,n)}var fi=null,dc=!1,Yc=!1;function Ev(t){fi===null?fi=[t]:fi.push(t)}function Ay(t){dc=!0,Ev(t)}function sr(){if(!Yc&&fi!==null){Yc=!0;var t=0,e=nt;try{var n=fi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,dc=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),$g(rf,sr),r}finally{nt=e,Yc=!1}}return null}var Ms=[],Es=0,Il=null,Fl=0,Rn=[],Cn=0,Ir=null,pi=1,mi="";function mr(t,e){Ms[Es++]=Fl,Ms[Es++]=Il,Il=t,Fl=e}function wv(t,e,n){Rn[Cn++]=pi,Rn[Cn++]=mi,Rn[Cn++]=Ir,Ir=t;var i=pi;t=mi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,pi=1<<32-Xn(e)+r|n<<r|i,mi=s+t}else pi=1<<s|n<<r|i,mi=t}function hf(t){t.return!==null&&(mr(t,1),wv(t,1,0))}function pf(t){for(;t===Il;)Il=Ms[--Es],Ms[Es]=null,Fl=Ms[--Es],Ms[Es]=null;for(;t===Ir;)Ir=Rn[--Cn],Rn[Cn]=null,mi=Rn[--Cn],Rn[Cn]=null,pi=Rn[--Cn],Rn[Cn]=null}var yn=null,xn=null,ft=!1,Hn=null;function Tv(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,xn=Wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:pi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,xn=null,!0):!1;default:return!1}}function dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fd(t){if(ft){var e=xn;if(e){var n=e;if(!Wh(t,e)){if(dd(t))throw Error(ce(418));e=Wi(n.nextSibling);var i=yn;e&&Wh(t,e)?Tv(i,n):(t.flags=t.flags&-4097|2,ft=!1,yn=t)}}else{if(dd(t))throw Error(ce(418));t.flags=t.flags&-4097|2,ft=!1,yn=t}}}function jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function Do(t){if(t!==yn)return!1;if(!ft)return jh(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=xn)){if(dd(t))throw Av(),Error(ce(418));for(;e;)Tv(t,e),e=Wi(e.nextSibling)}if(jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=Wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=yn?Wi(t.stateNode.nextSibling):null;return!0}function Av(){for(var t=xn;t;)t=Wi(t.nextSibling)}function Gs(){xn=yn=null,ft=!1}function mf(t){Hn===null?Hn=[t]:Hn.push(t)}var Ry=Ei.ReactCurrentBatchConfig;function ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function No(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xh(t){var e=t._init;return e(t._payload)}function Rv(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=$i(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,g,y){return v===null||v.tag!==6?(v=nu(g,u.mode,y),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,y){var P=g.type;return P===gs?d(u,v,g.props.children,y,g.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Li&&Xh(P)===v.type)?(y=r(v,g.props),y.ref=ha(u,v,g),y.return=u,y):(y=Sl(g.type,g.key,g.props,null,u.mode,y),y.ref=ha(u,v,g),y.return=u,y)}function c(u,v,g,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=iu(g,u.mode,y),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function d(u,v,g,y,P){return v===null||v.tag!==7?(v=br(g,u.mode,y,P),v.return=u,v):(v=r(v,g),v.return=u,v)}function f(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=nu(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Mo:return g=Sl(v.type,v.key,v.props,null,u.mode,g),g.ref=ha(u,null,v),g.return=u,g;case ms:return v=iu(v,u.mode,g),v.return=u,v;case Li:var y=v._init;return f(u,y(v._payload),g)}if(wa(v)||la(v))return v=br(v,u.mode,g,null),v.return=u,v;No(u,v)}return null}function h(u,v,g,y){var P=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:o(u,v,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mo:return g.key===P?l(u,v,g,y):null;case ms:return g.key===P?c(u,v,g,y):null;case Li:return P=g._init,h(u,v,P(g._payload),y)}if(wa(g)||la(g))return P!==null?null:d(u,v,g,y,null);No(u,g)}return null}function m(u,v,g,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(g)||null,o(v,u,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Mo:return u=u.get(y.key===null?g:y.key)||null,l(v,u,y,P);case ms:return u=u.get(y.key===null?g:y.key)||null,c(v,u,y,P);case Li:var R=y._init;return m(u,v,g,R(y._payload),P)}if(wa(y)||la(y))return u=u.get(g)||null,d(v,u,y,P,null);No(v,y)}return null}function x(u,v,g,y){for(var P=null,R=null,C=v,O=v=0,M=null;C!==null&&O<g.length;O++){C.index>O?(M=C,C=null):M=C.sibling;var T=h(u,C,g[O],y);if(T===null){C===null&&(C=M);break}t&&C&&T.alternate===null&&e(u,C),v=s(T,v,O),R===null?P=T:R.sibling=T,R=T,C=M}if(O===g.length)return n(u,C),ft&&mr(u,O),P;if(C===null){for(;O<g.length;O++)C=f(u,g[O],y),C!==null&&(v=s(C,v,O),R===null?P=C:R.sibling=C,R=C);return ft&&mr(u,O),P}for(C=i(u,C);O<g.length;O++)M=m(C,u,O,g[O],y),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?O:M.key),v=s(M,v,O),R===null?P=M:R.sibling=M,R=M);return t&&C.forEach(function(q){return e(u,q)}),ft&&mr(u,O),P}function _(u,v,g,y){var P=la(g);if(typeof P!="function")throw Error(ce(150));if(g=P.call(g),g==null)throw Error(ce(151));for(var R=P=null,C=v,O=v=0,M=null,T=g.next();C!==null&&!T.done;O++,T=g.next()){C.index>O?(M=C,C=null):M=C.sibling;var q=h(u,C,T.value,y);if(q===null){C===null&&(C=M);break}t&&C&&q.alternate===null&&e(u,C),v=s(q,v,O),R===null?P=q:R.sibling=q,R=q,C=M}if(T.done)return n(u,C),ft&&mr(u,O),P;if(C===null){for(;!T.done;O++,T=g.next())T=f(u,T.value,y),T!==null&&(v=s(T,v,O),R===null?P=T:R.sibling=T,R=T);return ft&&mr(u,O),P}for(C=i(u,C);!T.done;O++,T=g.next())T=m(C,u,O,T.value,y),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?O:T.key),v=s(T,v,O),R===null?P=T:R.sibling=T,R=T);return t&&C.forEach(function(J){return e(u,J)}),ft&&mr(u,O),P}function p(u,v,g,y){if(typeof g=="object"&&g!==null&&g.type===gs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mo:e:{for(var P=g.key,R=v;R!==null;){if(R.key===P){if(P=g.type,P===gs){if(R.tag===7){n(u,R.sibling),v=r(R,g.props.children),v.return=u,u=v;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Li&&Xh(P)===R.type){n(u,R.sibling),v=r(R,g.props),v.ref=ha(u,R,g),v.return=u,u=v;break e}n(u,R);break}else e(u,R);R=R.sibling}g.type===gs?(v=br(g.props.children,u.mode,y,g.key),v.return=u,u=v):(y=Sl(g.type,g.key,g.props,null,u.mode,y),y.ref=ha(u,v,g),y.return=u,u=y)}return a(u);case ms:e:{for(R=g.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=iu(g,u.mode,y),v.return=u,u=v}return a(u);case Li:return R=g._init,p(u,v,R(g._payload),y)}if(wa(g))return x(u,v,g,y);if(la(g))return _(u,v,g,y);No(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=nu(g,u.mode,y),v.return=u,u=v),a(u)):n(u,v)}return p}var Vs=Rv(!0),Cv=Rv(!1),Ol=rr(null),kl=null,ws=null,gf=null;function vf(){gf=ws=kl=null}function _f(t){var e=Ol.current;dt(Ol),t._currentValue=e}function hd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){kl=t,gf=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(gf!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(kl===null)throw Error(ce(308));ws=t,kl.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var wr=null;function xf(t){wr===null?wr=[t]:wr.push(t)}function bv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xf(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,xf(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sf(t,n)}}function qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,_=o;switch(h=e,m=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=gt({},f,h);break e;case 2:Di=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Or|=a,t.lanes=a,t.memoizedState=f}}function $h(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var mo={},ei=rr(mo),Qa=rr(mo),Ja=rr(mo);function Tr(t){if(t===mo)throw Error(ce(174));return t}function Sf(t,e){switch(ot(Ja,e),ot(Qa,t),ot(ei,mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}dt(ei),ot(ei,e)}function Ws(){dt(ei),dt(Qa),dt(Ja)}function Lv(t){Tr(Ja.current);var e=Tr(ei.current),n=qu(e,t.type);e!==n&&(ot(Qa,t),ot(ei,n))}function Mf(t){Qa.current===t&&(dt(ei),dt(Qa))}var pt=rr(0);function zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function Ef(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var gl=Ei.ReactCurrentDispatcher,Zc=Ei.ReactCurrentBatchConfig,Fr=0,mt=null,Ct=null,It=null,Hl=!1,Na=!1,eo=0,Cy=0;function Gt(){throw Error(ce(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Tf(t,e,n,i,r,s){if(Fr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gl.current=t===null||t.memoizedState===null?Dy:Ny,t=n(i,r),Na){s=0;do{if(Na=!1,eo=0,25<=s)throw Error(ce(301));s+=1,It=Ct=null,e.updateQueue=null,gl.current=Uy,t=n(i,r)}while(Na)}if(gl.current=Gl,e=Ct!==null&&Ct.next!==null,Fr=0,It=Ct=mt=null,Hl=!1,e)throw Error(ce(300));return t}function Af(){var t=eo!==0;return eo=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?mt.memoizedState=It=t:It=It.next=t,It}function Un(){if(Ct===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?mt.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw Error(ce(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?mt.memoizedState=It=t:It=It.next=t}return It}function to(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Fr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,mt.lanes|=d,Or|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,$n(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Or|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=Un(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);$n(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Dv(){}function Nv(t,e){var n=mt,i=Un(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,Rf(Fv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,no(9,Iv.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ce(349));Fr&30||Uv(n,e,r)}return r}function Uv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Iv(t,e,n,i){e.value=n,e.getSnapshot=i,Ov(e)&&kv(t)}function Fv(t,e,n){return n(function(){Ov(e)&&kv(t)})}function Ov(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function kv(t){var e=yi(t,1);e!==null&&qn(e,t,1,-1)}function Yh(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=Ly.bind(null,mt,t),[e.memoizedState,t]}function no(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Bv(){return Un().memoizedState}function vl(t,e,n,i){var r=Kn();mt.flags|=t,r.memoizedState=no(1|e,n,void 0,i===void 0?null:i)}function fc(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var a=Ct.memoizedState;if(s=a.destroy,i!==null&&wf(i,a.deps)){r.memoizedState=no(e,n,s,i);return}}mt.flags|=t,r.memoizedState=no(1|e,n,s,i)}function Kh(t,e){return vl(8390656,8,t,e)}function Rf(t,e){return fc(2048,8,t,e)}function zv(t,e){return fc(4,2,t,e)}function Hv(t,e){return fc(4,4,t,e)}function Gv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vv(t,e,n){return n=n!=null?n.concat([t]):null,fc(4,4,Gv.bind(null,e,t),n)}function Cf(){}function Wv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function jv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Xv(t,e,n){return Fr&21?($n(n,e)||(n=Zg(),mt.lanes|=n,Or|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function by(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Zc.transition;Zc.transition={};try{t(!1),e()}finally{nt=n,Zc.transition=i}}function qv(){return Un().memoizedState}function Py(t,e,n){var i=qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$v(t))Yv(e,n);else if(n=bv(t,e,n,i),n!==null){var r=nn();qn(n,t,i,r),Kv(n,e,i)}}function Ly(t,e,n){var i=qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($v(t))Yv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,$n(o,a)){var l=e.interleaved;l===null?(r.next=r,xf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=bv(t,e,r,i),n!==null&&(r=nn(),qn(n,t,i,r),Kv(n,e,i))}}function $v(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function Yv(t,e){Na=Hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sf(t,n)}}var Gl={readContext:Nn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},Dy={readContext:Nn,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:Kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vl(4194308,4,Gv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return vl(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Py.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:Yh,useDebugValue:Cf,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=Yh(!1),e=t[0];return t=by.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Kn();if(ft){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Ft===null)throw Error(ce(349));Fr&30||Uv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Kh(Fv.bind(null,i,s,t),[t]),i.flags|=2048,no(9,Iv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Ft.identifierPrefix;if(ft){var n=mi,i=pi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ny={readContext:Nn,useCallback:Wv,useContext:Nn,useEffect:Rf,useImperativeHandle:Vv,useInsertionEffect:zv,useLayoutEffect:Hv,useMemo:jv,useReducer:Qc,useRef:Bv,useState:function(){return Qc(to)},useDebugValue:Cf,useDeferredValue:function(t){var e=Un();return Xv(e,Ct.memoizedState,t)},useTransition:function(){var t=Qc(to)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Dv,useSyncExternalStore:Nv,useId:qv,unstable_isNewReconciler:!1},Uy={readContext:Nn,useCallback:Wv,useContext:Nn,useEffect:Rf,useImperativeHandle:Vv,useInsertionEffect:zv,useLayoutEffect:Hv,useMemo:jv,useReducer:Jc,useRef:Bv,useState:function(){return Jc(to)},useDebugValue:Cf,useDeferredValue:function(t){var e=Un();return Ct===null?e.memoizedState=t:Xv(e,Ct.memoizedState,t)},useTransition:function(){var t=Jc(to)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Dv,useSyncExternalStore:Nv,useId:qv,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function pd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hc={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=qi(t),s=vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(qn(e,t,r,i),ml(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=qi(t),s=vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(qn(e,t,r,i),ml(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=qi(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(qn(e,t,i,n),ml(e,t,i))}};function Zh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!$a(n,i)||!$a(r,s):!0}function Zv(t,e,n){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=un(e)?Ur:Yt.current,i=e.contextTypes,s=(i=i!=null)?Hs(t,r):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&hc.enqueueReplaceState(e,e.state,null)}function md(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=un(e)?Ur:Yt.current,r.context=Hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&hc.enqueueReplaceState(r,r.state,null),Bl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e){try{var n="",i=e;do n+=lx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Iy=typeof WeakMap=="function"?WeakMap:Map;function Qv(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Wl||(Wl=!0,Ad=i),gd(t,e)},n}function Jv(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gd(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Jh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Iy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Yy.bind(null,t,e,n),e.then(t,t))}function ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var Fy=Ei.ReactCurrentOwner,ln=!1;function Jt(t,e,n,i){e.child=t===null?Cv(e,null,n,i):Vs(e,t.child,n,i)}function np(t,e,n,i,r){n=n.render;var s=e.ref;return Us(e,r),i=Tf(t,e,n,i,s,r),n=Af(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ft&&n&&hf(e),e.flags|=1,Jt(t,e,i,r),e.child)}function ip(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,e0(t,e,s,i,r)):(t=Sl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(a,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function e0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($a(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Si(t,e,r)}return vd(t,e,n,i,r)}function t0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(As,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(As,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(As,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(As,gn),gn|=i;return Jt(t,e,r,n),e.child}function n0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vd(t,e,n,i,r){var s=un(n)?Ur:Yt.current;return s=Hs(e,s),Us(e,r),n=Tf(t,e,n,i,s,r),i=Af(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ft&&i&&hf(e),e.flags|=1,Jt(t,e,n,r),e.child)}function rp(t,e,n,i,r){if(un(n)){var s=!0;Ul(e)}else s=!1;if(Us(e,r),e.stateNode===null)_l(t,e),Zv(e,n,i),md(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nn(c):(c=un(n)?Ur:Yt.current,c=Hs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Qh(e,a,i,c),Di=!1;var h=e.memoizedState;a.state=h,Bl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||cn.current||Di?(typeof d=="function"&&(pd(e,n,d,i),l=e.memoizedState),(o=Di||Zh(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Pv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Bn(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=un(n)?Ur:Yt.current,l=Hs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Qh(e,a,i,l),Di=!1,h=e.memoizedState,a.state=h,Bl(e,i,a,r);var x=e.memoizedState;o!==f||h!==x||cn.current||Di?(typeof m=="function"&&(pd(e,n,m,i),x=e.memoizedState),(c=Di||Zh(e,n,c,i,h,x,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return _d(t,e,n,i,s,r)}function _d(t,e,n,i,r,s){n0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Vh(e,n,!1),Si(t,e,s);i=e.stateNode,Fy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,o,s)):Jt(t,e,o,s),e.memoizedState=i.state,r&&Vh(e,n,!0),e.child}function i0(t){var e=t.stateNode;e.pendingContext?Gh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gh(t,e.context,!1),Sf(t,e.containerInfo)}function sp(t,e,n,i,r){return Gs(),mf(r),e.flags|=256,Jt(t,e,n,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function r0(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(pt,r&1),t===null)return fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=gc(a,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yd(n),e.memoizedState=xd,t):bf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Oy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=$i(o,s):(s=br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?yd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=xd,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bf(t,e){return e=gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Uo(t,e,n,i){return i!==null&&mf(i),Vs(e,t.child,null,n),t=bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Oy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=eu(Error(ce(422))),Uo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gc({mode:"visible",children:i.children},r,0,null),s=br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,a),e.child.memoizedState=yd(a),e.memoizedState=xd,s);if(!(e.mode&1))return Uo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=eu(s,i,void 0),Uo(t,e,a,i)}if(o=(a&t.childLanes)!==0,ln||o){if(i=Ft,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),qn(i,t,r,-1))}return If(),i=eu(Error(ce(421))),Uo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ky.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=Wi(r.nextSibling),yn=e,ft=!0,Hn=null,t!==null&&(Rn[Cn++]=pi,Rn[Cn++]=mi,Rn[Cn++]=Ir,pi=t.id,mi=t.overflow,Ir=e),e=bf(e,i.children),e.flags|=4096,e)}function ap(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),hd(t.return,e,n)}function tu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function s0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,n,e);else if(t.tag===19)ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tu(e,!0,n,null,s);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Or|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ky(t,e,n){switch(e.tag){case 3:i0(e),Gs();break;case 5:Lv(e);break;case 1:un(e.type)&&Ul(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Ol,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?r0(t,e,n):(ot(pt,pt.current&1),t=Si(t,e,n),t!==null?t.sibling:null);ot(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return s0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,t0(t,e,n)}return Si(t,e,n)}var a0,Sd,o0,l0;a0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sd=function(){};o0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(ei.current);var s=null;switch(n){case"input":r=Vu(t,r),i=Vu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=Xu(t,r),i=Xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Dl)}$u(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};l0=function(t,e,n,i){n!==i&&(e.flags|=4)};function pa(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function By(t,e,n){var i=e.pendingProps;switch(pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return un(e.type)&&Nl(),Vt(e),null;case 3:return i=e.stateNode,Ws(),dt(cn),dt(Yt),Ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Do(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(bd(Hn),Hn=null))),Sd(t,e),Vt(e),null;case 5:Mf(e);var r=Tr(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)o0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Vt(e),null}if(t=Tr(ei.current),Do(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Za]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Aa.length;r++)lt(Aa[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":mh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":vh(i,s),lt("invalid",i)}$u(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,o,t),r=["children",""+o]):Ha.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&lt("scroll",i)}switch(n){case"input":Eo(i),gh(i,s,!0);break;case"textarea":Eo(i),_h(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Qn]=e,t[Za]=i,a0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Yu(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Aa.length;r++)lt(Aa[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":mh(t,i),r=Vu(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":vh(t,i),r=Xu(t,i),lt("invalid",t);break;default:r=i}$u(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Bg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Og(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ga(t,l):typeof l=="number"&&Ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&Qd(t,s,l,a))}switch(n){case"input":Eo(t),gh(t,i,!1);break;case"textarea":Eo(t),_h(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)l0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Tr(Ja.current),Tr(ei.current),Do(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:Lo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Lo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Vt(e),null;case 13:if(dt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&xn!==null&&e.mode&1&&!(e.flags&128))Av(),Gs(),e.flags|=98560,s=!1;else if(s=Do(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Qn]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Hn!==null&&(bd(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Pt===0&&(Pt=3):If())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Ws(),Sd(t,e),t===null&&Ya(e.stateNode.containerInfo),Vt(e),null;case 10:return _f(e.type._context),Vt(e),null;case 17:return un(e.type)&&Nl(),Vt(e),null;case 19:if(dt(pt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)pa(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=zl(t),a!==null){for(e.flags|=128,pa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Xs&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304)}else{if(!i)if(t=zl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ft)return Vt(e),null}else 2*Mt()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=pt.current,ot(pt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Uf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function zy(t,e){switch(pf(e),e.tag){case 1:return un(e.type)&&Nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),dt(cn),dt(Yt),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mf(e),null;case 13:if(dt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(pt),null;case 4:return Ws(),null;case 10:return _f(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var Io=!1,Xt=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Md(t,e,n){try{n()}catch(i){_t(t,e,i)}}var op=!1;function Gy(t,e){if(sd=bl,t=hv(),ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},bl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,p=x.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Bn(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){_t(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return x=op,op=!1,x}function Ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Md(e,n,s)}r=r.next}while(r!==i)}}function pc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ed(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function c0(t){var e=t.alternate;e!==null&&(t.alternate=null,c0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Za],delete e[cd],delete e[wy],delete e[Ty])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function u0(t){return t.tag===5||t.tag===3||t.tag===4}function lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dl));else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var Ot=null,zn=!1;function wi(t,e,n){for(n=n.child;n!==null;)d0(t,e,n),n=n.sibling}function d0(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 5:Xt||Ts(n,e);case 6:var i=Ot,r=zn;Ot=null,wi(t,e,n),Ot=i,zn=r,Ot!==null&&(zn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(zn?(t=Ot,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),Xa(t)):$c(Ot,n.stateNode));break;case 4:i=Ot,r=zn,Ot=n.stateNode.containerInfo,zn=!0,wi(t,e,n),Ot=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Md(n,e,a),r=r.next}while(r!==i)}wi(t,e,n);break;case 1:if(!Xt&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){_t(n,e,o)}wi(t,e,n);break;case 21:wi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,wi(t,e,n),Xt=i):wi(t,e,n);break;default:wi(t,e,n)}}function cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hy),e.forEach(function(i){var r=Zy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ot=o.stateNode,zn=!1;break e;case 3:Ot=o.stateNode.containerInfo,zn=!0;break e;case 4:Ot=o.stateNode.containerInfo,zn=!0;break e}o=o.return}if(Ot===null)throw Error(ce(160));d0(s,a,r),Ot=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f0(e,t),e=e.sibling}function f0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Yn(t),i&4){try{Ua(3,t,t.return),pc(3,t)}catch(_){_t(t,t.return,_)}try{Ua(5,t,t.return)}catch(_){_t(t,t.return,_)}}break;case 1:In(e,t),Yn(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(In(e,t),Yn(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Ga(r,"")}catch(_){_t(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Ug(r,s),Yu(o,a);var c=Yu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Bg(r,f):d==="dangerouslySetInnerHTML"?Og(r,f):d==="children"?Ga(r,f):Qd(r,d,f,c)}switch(o){case"input":Wu(r,s);break;case"textarea":Ig(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ps(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(_){_t(t,t.return,_)}}break;case 6:if(In(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){_t(t,t.return,_)}}break;case 3:if(In(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(e.containerInfo)}catch(_){_t(t,t.return,_)}break;case 4:In(e,t),Yn(t);break;case 13:In(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Df=Mt())),i&4&&cp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||d,In(e,t),Xt=c):In(e,t),Yn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Se=t,d=t.child;d!==null;){for(f=Se=d;Se!==null;){switch(h=Se,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ua(4,h,h.return);break;case 1:Ts(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){_t(i,n,_)}}break;case 5:Ts(h,h.return);break;case 22:if(h.memoizedState!==null){dp(f);continue}}m!==null?(m.return=h,Se=m):dp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=kg("display",a))}catch(_){_t(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){_t(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),Yn(t),i&4&&cp(t);break;case 21:break;default:In(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(u0(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ga(r,""),i.flags&=-33);var s=lp(t);Td(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=lp(t);wd(t,o,a);break;default:throw Error(ce(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vy(t,e,n){Se=t,h0(t)}function h0(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Io;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Xt;o=Io;var c=Xt;if(Io=a,(Xt=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?fp(r):l!==null?(l.return=a,Se=l):fp(r);for(;s!==null;)Se=s,h0(s),s=s.sibling;Se=r,Io=o,Xt=c}up(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):up(t)}}function up(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||pc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$h(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$h(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Xa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Xt||e.flags&512&&Ed(e)}catch(h){_t(e,e.return,h)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function dp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function fp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pc(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Ed(e)}catch(l){_t(e,s,l)}break;case 5:var a=e.return;try{Ed(e)}catch(l){_t(e,a,l)}}}catch(l){_t(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var Wy=Math.ceil,Vl=Ei.ReactCurrentDispatcher,Pf=Ei.ReactCurrentOwner,Dn=Ei.ReactCurrentBatchConfig,et=0,Ft=null,Tt=null,kt=0,gn=0,As=rr(0),Pt=0,io=null,Or=0,mc=0,Lf=0,Ia=null,on=null,Df=0,Xs=1/0,di=null,Wl=!1,Ad=null,Xi=null,Fo=!1,Oi=null,jl=0,Fa=0,Rd=null,xl=-1,yl=0;function nn(){return et&6?Mt():xl!==-1?xl:xl=Mt()}function qi(t){return t.mode&1?et&2&&kt!==0?kt&-kt:Ry.transition!==null?(yl===0&&(yl=Zg()),yl):(t=nt,t!==0||(t=window.event,t=t===void 0?16:rv(t.type)),t):1}function qn(t,e,n,i){if(50<Fa)throw Fa=0,Rd=null,Error(ce(185));fo(t,n,i),(!(et&2)||t!==Ft)&&(t===Ft&&(!(et&2)&&(mc|=n),Pt===4&&Ui(t,kt)),dn(t,i),n===1&&et===0&&!(e.mode&1)&&(Xs=Mt()+500,dc&&sr()))}function dn(t,e){var n=t.callbackNode;Rx(t,e);var i=Cl(t,t===Ft?kt:0);if(i===0)n!==null&&Sh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Sh(n),e===1)t.tag===0?Ay(hp.bind(null,t)):Ev(hp.bind(null,t)),My(function(){!(et&6)&&sr()}),n=null;else{switch(Qg(i)){case 1:n=rf;break;case 4:n=Yg;break;case 16:n=Rl;break;case 536870912:n=Kg;break;default:n=Rl}n=S0(n,p0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function p0(t,e){if(xl=-1,yl=0,et&6)throw Error(ce(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=Cl(t,t===Ft?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Xl(t,i);else{e=i;var r=et;et|=2;var s=g0();(Ft!==t||kt!==e)&&(di=null,Xs=Mt()+500,Cr(t,e));do try{qy();break}catch(o){m0(t,o)}while(!0);vf(),Vl.current=s,et=r,Tt!==null?e=0:(Ft=null,kt=0,e=Pt)}if(e!==0){if(e===2&&(r=ed(t),r!==0&&(i=r,e=Cd(t,r))),e===1)throw n=io,Cr(t,0),Ui(t,i),dn(t,Mt()),n;if(e===6)Ui(t,i);else{if(r=t.current.alternate,!(i&30)&&!jy(r)&&(e=Xl(t,i),e===2&&(s=ed(t),s!==0&&(i=s,e=Cd(t,s))),e===1))throw n=io,Cr(t,0),Ui(t,i),dn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:gr(t,on,di);break;case 3:if(Ui(t,i),(i&130023424)===i&&(e=Df+500-Mt(),10<e)){if(Cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ld(gr.bind(null,t,on,di),e);break}gr(t,on,di);break;case 4:if(Ui(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Xn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Wy(i/1960))-i,10<i){t.timeoutHandle=ld(gr.bind(null,t,on,di),i);break}gr(t,on,di);break;case 5:gr(t,on,di);break;default:throw Error(ce(329))}}}return dn(t,Mt()),t.callbackNode===n?p0.bind(null,t):null}function Cd(t,e){var n=Ia;return t.current.memoizedState.isDehydrated&&(Cr(t,e).flags|=256),t=Xl(t,e),t!==2&&(e=on,on=n,e!==null&&bd(e)),t}function bd(t){on===null?on=t:on.push.apply(on,t)}function jy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ui(t,e){for(e&=~Lf,e&=~mc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function hp(t){if(et&6)throw Error(ce(327));Is();var e=Cl(t,0);if(!(e&1))return dn(t,Mt()),null;var n=Xl(t,e);if(t.tag!==0&&n===2){var i=ed(t);i!==0&&(e=i,n=Cd(t,i))}if(n===1)throw n=io,Cr(t,0),Ui(t,e),dn(t,Mt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,on,di),dn(t,Mt()),null}function Nf(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Xs=Mt()+500,dc&&sr())}}function kr(t){Oi!==null&&Oi.tag===0&&!(et&6)&&Is();var e=et;et|=1;var n=Dn.transition,i=nt;try{if(Dn.transition=null,nt=1,t)return t()}finally{nt=i,Dn.transition=n,et=e,!(et&6)&&sr()}}function Uf(){gn=As.current,dt(As)}function Cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Sy(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(pf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nl();break;case 3:Ws(),dt(cn),dt(Yt),Ef();break;case 5:Mf(i);break;case 4:Ws();break;case 13:dt(pt);break;case 19:dt(pt);break;case 10:_f(i.type._context);break;case 22:case 23:Uf()}n=n.return}if(Ft=t,Tt=t=$i(t.current,null),kt=gn=e,Pt=0,io=null,Lf=mc=Or=0,on=Ia=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}wr=null}return t}function m0(t,e){do{var n=Tt;try{if(vf(),gl.current=Gl,Hl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hl=!1}if(Fr=0,It=Ct=mt=null,Na=!1,eo=0,Pf.current=null,n===null||n.return===null){Pt=1,io=e,Tt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=ep(a);if(m!==null){m.flags&=-257,tp(m,a,o,s,e),m.mode&1&&Jh(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){Jh(s,c,e),If();break e}l=Error(ce(426))}}else if(ft&&o.mode&1){var p=ep(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),tp(p,a,o,s,e),mf(js(l,o));break e}}s=l=js(l,o),Pt!==4&&(Pt=2),Ia===null?Ia=[s]:Ia.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Qv(s,l,e);qh(s,u);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xi===null||!Xi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Jv(s,o,e);qh(s,y);break e}}s=s.return}while(s!==null)}_0(n)}catch(P){e=P,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function g0(){var t=Vl.current;return Vl.current=Gl,t===null?Gl:t}function If(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ft===null||!(Or&268435455)&&!(mc&268435455)||Ui(Ft,kt)}function Xl(t,e){var n=et;et|=2;var i=g0();(Ft!==t||kt!==e)&&(di=null,Cr(t,e));do try{Xy();break}catch(r){m0(t,r)}while(!0);if(vf(),et=n,Vl.current=i,Tt!==null)throw Error(ce(261));return Ft=null,kt=0,Pt}function Xy(){for(;Tt!==null;)v0(Tt)}function qy(){for(;Tt!==null&&!_x();)v0(Tt)}function v0(t){var e=y0(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?_0(t):Tt=e,Pf.current=null}function _0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zy(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Tt=null;return}}else if(n=By(n,e,gn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Pt===0&&(Pt=5)}function gr(t,e,n){var i=nt,r=Dn.transition;try{Dn.transition=null,nt=1,$y(t,e,n,i)}finally{Dn.transition=r,nt=i}return null}function $y(t,e,n,i){do Is();while(Oi!==null);if(et&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Cx(t,s),t===Ft&&(Tt=Ft=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fo||(Fo=!0,S0(Rl,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=nt;nt=1;var o=et;et|=4,Pf.current=null,Gy(t,n),f0(n,t),py(ad),bl=!!sd,ad=sd=null,t.current=n,Vy(n),xx(),et=o,nt=a,Dn.transition=s}else t.current=n;if(Fo&&(Fo=!1,Oi=t,jl=r),s=t.pendingLanes,s===0&&(Xi=null),Mx(n.stateNode),dn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wl)throw Wl=!1,t=Ad,Ad=null,t;return jl&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===Rd?Fa++:(Fa=0,Rd=t):Fa=0,sr(),null}function Is(){if(Oi!==null){var t=Qg(jl),e=Dn.transition,n=nt;try{if(Dn.transition=null,nt=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,jl=0,et&6)throw Error(ce(331));var r=et;for(et|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var d=Se;switch(d.tag){case 0:case 11:case 15:Ua(8,d,s)}var f=d.child;if(f!==null)f.return=d,Se=f;else for(;Se!==null;){d=Se;var h=d.sibling,m=d.return;if(c0(d),d===c){Se=null;break}if(h!==null){h.return=m,Se=h;break}Se=m}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ua(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Se=u;break e}Se=s.return}}var v=t.current;for(Se=v;Se!==null;){a=Se;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,Se=g;else e:for(a=v;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:pc(9,o)}}catch(P){_t(o,o.return,P)}if(o===a){Se=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,Se=y;break e}Se=o.return}}if(et=r,sr(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(ac,t)}catch{}i=!0}return i}finally{nt=n,Dn.transition=e}}return!1}function pp(t,e,n){e=js(n,e),e=Qv(t,e,1),t=ji(t,e,1),e=nn(),t!==null&&(fo(t,1,e),dn(t,e))}function _t(t,e,n){if(t.tag===3)pp(t,t,n);else for(;e!==null;){if(e.tag===3){pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=js(n,t),t=Jv(e,t,1),e=ji(e,t,1),t=nn(),e!==null&&(fo(e,1,t),dn(e,t));break}}e=e.return}}function Yy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(kt&n)===n&&(Pt===4||Pt===3&&(kt&130023424)===kt&&500>Mt()-Df?Cr(t,0):Lf|=n),dn(t,e)}function x0(t,e){e===0&&(t.mode&1?(e=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):e=1);var n=nn();t=yi(t,e),t!==null&&(fo(t,e,n),dn(t,n))}function Ky(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),x0(t,n)}function Zy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),x0(t,n)}var y0;y0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,ky(t,e,n);ln=!!(t.flags&131072)}else ln=!1,ft&&e.flags&1048576&&wv(e,Fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;_l(t,e),t=e.pendingProps;var r=Hs(e,Yt.current);Us(e,n),r=Tf(null,e,i,t,r,n);var s=Af();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Ul(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yf(e),r.updater=hc,e.stateNode=r,r._reactInternals=e,md(e,i,t,n),e=_d(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&hf(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Jy(i),t=Bn(i,t),r){case 0:e=vd(null,e,i,t,n);break e;case 1:e=rp(null,e,i,t,n);break e;case 11:e=np(null,e,i,t,n);break e;case 14:e=ip(null,e,i,Bn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),rp(t,e,i,r,n);case 3:e:{if(i0(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Pv(t,e),Bl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=js(Error(ce(423)),e),e=sp(t,e,i,n,r);break e}else if(i!==r){r=js(Error(ce(424)),e),e=sp(t,e,i,n,r);break e}else for(xn=Wi(e.stateNode.containerInfo.firstChild),yn=e,ft=!0,Hn=null,n=Cv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),i===r){e=Si(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return Lv(e),t===null&&fd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,od(i,r)?a=null:s!==null&&od(i,s)&&(e.flags|=32),n0(t,e),Jt(t,e,a,n),e.child;case 6:return t===null&&fd(e),null;case 13:return r0(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),np(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ot(Ol,i._currentValue),i._currentValue=a,s!==null)if($n(s.value,a)){if(s.children===r.children&&!cn.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),hd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),hd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Us(e,n),r=Nn(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),ip(t,e,i,r,n);case 15:return e0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),_l(t,e),e.tag=1,un(i)?(t=!0,Ul(e)):t=!1,Us(e,n),Zv(e,i,r),md(e,i,r,n),_d(null,e,i,!0,t,n);case 19:return s0(t,e,n);case 22:return t0(t,e,n)}throw Error(ce(156,e.tag))};function S0(t,e){return $g(t,e)}function Qy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Qy(t,e,n,i)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jy(t){if(typeof t=="function")return Ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ef)return 11;if(t===tf)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Ff(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case gs:return br(n.children,r,s,e);case Jd:a=8,r|=8;break;case Bu:return t=Ln(12,n,e,r|2),t.elementType=Bu,t.lanes=s,t;case zu:return t=Ln(13,n,e,r),t.elementType=zu,t.lanes=s,t;case Hu:return t=Ln(19,n,e,r),t.elementType=Hu,t.lanes=s,t;case Lg:return gc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bg:a=10;break e;case Pg:a=9;break e;case ef:a=11;break e;case tf:a=14;break e;case Li:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function gc(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=Lg,t.lanes=n,t.stateNode={isHidden:!1},t}function nu(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function iu(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Of(t,e,n,i,r,s,a,o,l){return t=new eS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(s),t}function tS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function M0(t){if(!t)return er;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(un(n))return Mv(t,n,e)}return e}function E0(t,e,n,i,r,s,a,o,l){return t=Of(n,i,!0,t,r,s,a,o,l),t.context=M0(null),n=t.current,i=nn(),r=qi(n),s=vi(i,r),s.callback=e??null,ji(n,s,r),t.current.lanes=r,fo(t,r,i),dn(t,i),t}function vc(t,e,n,i){var r=e.current,s=nn(),a=qi(r);return n=M0(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,a),t!==null&&(qn(t,r,a,s),ml(t,r,a)),a}function ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kf(t,e){mp(t,e),(t=t.alternate)&&mp(t,e)}function nS(){return null}var w0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bf(t){this._internalRoot=t}_c.prototype.render=Bf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));vc(t,e,null,null)};_c.prototype.unmount=Bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){vc(null,t,null,null)}),e[xi]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var e=tv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&iv(t)}};function zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function iS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ql(a);s.call(c)}}var a=E0(e,i,t,0,null,!1,!1,"",gp);return t._reactRootContainer=a,t[xi]=a.current,Ya(t.nodeType===8?t.parentNode:t),kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=ql(l);o.call(c)}}var l=Of(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=l,t[xi]=l.current,Ya(t.nodeType===8?t.parentNode:t),kr(function(){vc(e,l,n,i)}),l}function yc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=ql(a);o.call(l)}}vc(e,a,t,r)}else a=iS(n,e,t,r,i);return ql(a)}Jg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ta(e.pendingLanes);n!==0&&(sf(e,n|1),dn(e,Mt()),!(et&6)&&(Xs=Mt()+500,sr()))}break;case 13:kr(function(){var i=yi(t,1);if(i!==null){var r=nn();qn(i,t,1,r)}}),kf(t,1)}};af=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=nn();qn(e,t,134217728,n)}kf(t,134217728)}};ev=function(t){if(t.tag===13){var e=qi(t),n=yi(t,e);if(n!==null){var i=nn();qn(n,t,e,i)}kf(t,e)}};tv=function(){return nt};nv=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Zu=function(t,e,n){switch(e){case"input":if(Wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=uc(i);if(!r)throw Error(ce(90));Ng(i),Wu(i,r)}}}break;case"textarea":Ig(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};Gg=Nf;Vg=kr;var rS={usingClientEntryPoint:!1,Events:[po,ys,uc,zg,Hg,Nf]},ma={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sS={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xg(t),t===null?null:t.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||nS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{ac=Oo.inject(sS),Jn=Oo}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(e))throw Error(ce(200));return tS(t,e,null,n)};Mn.createRoot=function(t,e){if(!zf(t))throw Error(ce(299));var n=!1,i="",r=w0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Of(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,Ya(t.nodeType===8?t.parentNode:t),new Bf(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=Xg(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return kr(t)};Mn.hydrate=function(t,e,n){if(!xc(e))throw Error(ce(200));return yc(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!zf(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=w0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=E0(e,null,t,1,n??null,r,!1,s,a),t[xi]=e.current,Ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new _c(e)};Mn.render=function(t,e,n){if(!xc(e))throw Error(ce(200));return yc(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!xc(t))throw Error(ce(40));return t._reactRootContainer?(kr(function(){yc(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};Mn.unstable_batchedUpdates=Nf;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!xc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return yc(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function T0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T0)}catch(t){console.error(t)}}T0(),Tg.exports=Mn;var aS=Tg.exports,A0,vp=aS;A0=vp.createRoot,vp.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ro.apply(this,arguments)}var ki;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ki||(ki={}));const _p="popstate";function oS(t){t===void 0&&(t={});function e(r,s){let{pathname:a="/",search:o="",hash:l=""}=Hr(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Pd("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof s=="string"?s:$l(s))}function i(r,s){Hf(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return cS(e,n,i,t)}function At(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Hf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lS(){return Math.random().toString(36).substr(2,8)}function xp(t,e){return{usr:t.state,key:t.key,idx:e}}function Pd(t,e,n,i){return n===void 0&&(n=null),ro({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Hr(e):e,{state:n,key:e&&e.key||i||lS()})}function $l(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Hr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function cS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=ki.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(ro({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=ki.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:o,location:_.location,delta:u})}function h(p,u){o=ki.Push;let v=Pd(_.location,p,u);n&&n(v,p),c=d()+1;let g=xp(v,c),y=_.createHref(v);try{a.pushState(g,"",y)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(y)}s&&l&&l({action:o,location:_.location,delta:1})}function m(p,u){o=ki.Replace;let v=Pd(_.location,p,u);n&&n(v,p),c=d();let g=xp(v,c),y=_.createHref(v);a.replaceState(g,"",y),s&&l&&l({action:o,location:_.location,delta:0})}function x(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:$l(p);return v=v.replace(/ $/,"%20"),At(u,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,u)}let _={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(_p,f),l=p,()=>{r.removeEventListener(_p,f),l=null}},createHref(p){return e(r,p)},createURL:x,encodeLocation(p){let u=x(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:m,go(p){return a.go(p)}};return _}var yp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(yp||(yp={}));function uS(t,e,n){return n===void 0&&(n="/"),dS(t,e,n)}function dS(t,e,n,i){let r=typeof e=="string"?Hr(e):e,s=Gf(r.pathname||"/",n);if(s==null)return null;let a=R0(t);fS(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=wS(s);o=SS(a[l],c)}return o}function R0(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(At(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Yi([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(At(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),R0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:xS(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of C0(s.path))r(s,a,l)}),e}function C0(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=C0(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function fS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const hS=/^:[\w-]+$/,pS=3,mS=2,gS=1,vS=10,_S=-2,Sp=t=>t==="*";function xS(t,e){let n=t.split("/"),i=n.length;return n.some(Sp)&&(i+=_S),e&&(i+=mS),n.filter(r=>!Sp(r)).reduce((r,s)=>r+(hS.test(s)?pS:s===""?gS:vS),i)}function yS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function SS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=MS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:Yi([s,f.pathname]),pathnameBase:CS(Yi([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Yi([s,f.pathnameBase]))}return a}function MS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ES(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:m}=d;if(h==="*"){let _=o[f]||"";a=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const x=o[f];return m&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function ES(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Hf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function wS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Gf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function TS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Hr(t):t;return{pathname:n?n.startsWith("/")?n:AS(n,e):e,search:bS(i),hash:PS(r)}}function AS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ru(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function b0(t,e){let n=RS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function P0(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Hr(t):(r=ro({},t),At(!r.pathname||!r.pathname.includes("?"),ru("?","pathname","search",r)),At(!r.pathname||!r.pathname.includes("#"),ru("#","pathname","hash",r)),At(!r.search||!r.search.includes("#"),ru("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=TS(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Yi=t=>t.join("/").replace(/\/\/+/g,"/"),CS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),bS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,PS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const L0=["post","put","patch","delete"];new Set(L0);const DS=["get",...L0];new Set(DS);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},so.apply(this,arguments)}const Vf=Q.createContext(null),NS=Q.createContext(null),Gr=Q.createContext(null),Sc=Q.createContext(null),ar=Q.createContext({outlet:null,matches:[],isDataRoute:!1}),D0=Q.createContext(null);function US(t,e){let{relative:n}=e===void 0?{}:e;go()||At(!1);let{basename:i,navigator:r}=Q.useContext(Gr),{hash:s,pathname:a,search:o}=I0(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:Yi([i,a])),r.createHref({pathname:l,search:o,hash:s})}function go(){return Q.useContext(Sc)!=null}function or(){return go()||At(!1),Q.useContext(Sc).location}function N0(t){Q.useContext(Gr).static||Q.useLayoutEffect(t)}function Wf(){let{isDataRoute:t}=Q.useContext(ar);return t?qS():IS()}function IS(){go()||At(!1);let t=Q.useContext(Vf),{basename:e,future:n,navigator:i}=Q.useContext(Gr),{matches:r}=Q.useContext(ar),{pathname:s}=or(),a=JSON.stringify(b0(r,n.v7_relativeSplatPath)),o=Q.useRef(!1);return N0(()=>{o.current=!0}),Q.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=P0(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Yi([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,a,s,t])}function U0(){let{matches:t}=Q.useContext(ar),e=t[t.length-1];return e?e.params:{}}function I0(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=Q.useContext(Gr),{matches:r}=Q.useContext(ar),{pathname:s}=or(),a=JSON.stringify(b0(r,i.v7_relativeSplatPath));return Q.useMemo(()=>P0(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function FS(t,e){return OS(t,e)}function OS(t,e,n,i){go()||At(!1);let{navigator:r}=Q.useContext(Gr),{matches:s}=Q.useContext(ar),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=or(),d;if(e){var f;let p=typeof e=="string"?Hr(e):e;l==="/"||(f=p.pathname)!=null&&f.startsWith(l)||At(!1),d=p}else d=c;let h=d.pathname||"/",m=h;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(p.length).join("/")}let x=uS(t,{pathname:m}),_=GS(x&&x.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:Yi([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Yi([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&_?Q.createElement(Sc.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ki.Pop}},_):_}function kS(){let t=XS(),e=LS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),n?Q.createElement("pre",{style:r},n):null,null)}const BS=Q.createElement(kS,null);class zS extends Q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?Q.createElement(ar.Provider,{value:this.props.routeContext},Q.createElement(D0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HS(t){let{routeContext:e,match:n,children:i}=t,r=Q.useContext(Vf);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),Q.createElement(ar.Provider,{value:e},i)}function GS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||At(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:m}=n,x=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,f,h)=>{let m,x=!1,_=null,p=null;n&&(m=o&&f.route.id?o[f.route.id]:void 0,_=f.route.errorElement||BS,l&&(c<0&&h===0?($S("route-fallback"),x=!0,p=null):c===h&&(x=!0,p=f.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,h+1)),v=()=>{let g;return m?g=_:x?g=p:f.route.Component?g=Q.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,Q.createElement(HS,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?Q.createElement(zS,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:v(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):v()},null)}var F0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(F0||{}),O0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(O0||{});function VS(t){let e=Q.useContext(Vf);return e||At(!1),e}function WS(t){let e=Q.useContext(NS);return e||At(!1),e}function jS(t){let e=Q.useContext(ar);return e||At(!1),e}function k0(t){let e=jS(),n=e.matches[e.matches.length-1];return n.route.id||At(!1),n.route.id}function XS(){var t;let e=Q.useContext(D0),n=WS(),i=k0();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function qS(){let{router:t}=VS(F0.UseNavigateStable),e=k0(O0.UseNavigateStable),n=Q.useRef(!1);return N0(()=>{n.current=!0}),Q.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,so({fromRouteId:e},s)))},[t,e])}const Mp={};function $S(t,e,n){Mp[t]||(Mp[t]=!0)}const Ep={};function YS(t,e){Ep[e]||(Ep[e]=!0,console.warn(e))}const wp=(t,e,n)=>YS(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function KS(t,e){t!=null&&t.v7_startTransition||wp("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),t!=null&&t.v7_relativeSplatPath||wp("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function vr(t){At(!1)}function ZS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=ki.Pop,navigator:s,static:a=!1,future:o}=t;go()&&At(!1);let l=e.replace(/^\/*/,"/"),c=Q.useMemo(()=>({basename:l,navigator:s,static:a,future:so({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Hr(i));let{pathname:d="/",search:f="",hash:h="",state:m=null,key:x="default"}=i,_=Q.useMemo(()=>{let p=Gf(d,l);return p==null?null:{location:{pathname:p,search:f,hash:h,state:m,key:x},navigationType:r}},[l,d,f,h,m,x,r]);return _==null?null:Q.createElement(Gr.Provider,{value:c},Q.createElement(Sc.Provider,{children:n,value:_}))}function QS(t){let{children:e,location:n}=t;return FS(Ld(e),n)}new Promise(()=>{});function Ld(t,e){e===void 0&&(e=[]);let n=[];return Q.Children.forEach(t,(i,r)=>{if(!Q.isValidElement(i))return;let s=[...e,r];if(i.type===Q.Fragment){n.push.apply(n,Ld(i.props.children,s));return}i.type!==vr&&At(!1),!i.props.index||!i.props.children||At(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Ld(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dd(){return Dd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Dd.apply(this,arguments)}function JS(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function eM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tM(t,e){return t.button===0&&(!e||e==="_self")&&!eM(t)}const nM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],iM="6";try{window.__reactRouterVersion=iM}catch{}const rM="startTransition",Tp=Y_[rM];function sM(t){let{basename:e,children:n,future:i,window:r}=t,s=Q.useRef();s.current==null&&(s.current=oS({window:r,v5Compat:!0}));let a=s.current,[o,l]=Q.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=Q.useCallback(f=>{c&&Tp?Tp(()=>l(f)):l(f)},[l,c]);return Q.useLayoutEffect(()=>a.listen(d),[a,d]),Q.useEffect(()=>KS(i),[i]),Q.createElement(ZS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const aM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",oM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,en=Q.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,h=JS(e,nM),{basename:m}=Q.useContext(Gr),x,_=!1;if(typeof c=="string"&&oM.test(c)&&(x=c,aM))try{let g=new URL(window.location.href),y=c.startsWith("//")?new URL(g.protocol+c):new URL(c),P=Gf(y.pathname,m);y.origin===g.origin&&P!=null?c=P+y.search+y.hash:_=!0}catch{}let p=US(c,{relative:r}),u=lM(c,{replace:a,state:o,target:l,preventScrollReset:d,relative:r,viewTransition:f});function v(g){i&&i(g),g.defaultPrevented||u(g)}return Q.createElement("a",Dd({},h,{href:x||p,onClick:_||s?i:v,ref:n,target:l}))});var Ap;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ap||(Ap={}));var Rp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rp||(Rp={}));function lM(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=Wf(),c=or(),d=I0(t,{relative:a});return Q.useCallback(f=>{if(tM(f,n)){f.preventDefault();let h=i!==void 0?i:$l(c)===$l(d);l(t,{replace:h,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,d,i,r,n,t,s,a,o])}const cM={"1ere-annee":{label:"1ère année",periode:"2025 — 2026",blocs:[{matiere:"Atelier Pro — Développement Web",court:"Atelier",description:"HTML, CSS et gestion de projet (diagramme de Gantt) au fil des séances d'Atelier Professionnel.",competences:["HTML5","CSS3","Gestion de projet"],comptes_rendus:[{date:"2025-09-11",titre:"Rapport Atelier Pro n°1",fichier:"atelier-pro-rapport-1.pdf"},{date:"2025-09-17",titre:"TP HTML",fichier:"atelier-pro-tp-html.pdf"},{date:"2025-09-20",titre:"TP CSS",fichier:"atelier-pro-tp-css.pdf"},{date:"2025-10-02",titre:"HTML/CSS avancé (2)",fichier:"atelier-pro-html-css-avance-2.pdf"},{date:"2025-10-16",titre:"TP HTML & CSS avancé",fichier:"atelier-pro-tp-html-css-avance.pdf"},{date:"2026-05-17",titre:"Diagramme de Gantt",fichier:"atelier-pro-diagramme-gantt.pdf"}]},{matiere:"Beauvallet — Algorithmique Java",court:"Java",description:"Découverte de Java et exercices d'algorithmique : quiz, mini-jeux et manipulation d'objets.",competences:["Java","Algorithmique","Programmation orientée objet"],comptes_rendus:[{date:"2025-09-11",titre:"Rapport TP n°1",fichier:"beauvallet-rapport-1.pdf"},{date:"2025-09-14",titre:"Compte rendu Java",fichier:"beauvallet-cr-java.pdf"},{date:"2025-09-22",titre:"Compte rendu Java 2",fichier:"beauvallet-cr-java-2.pdf"},{date:"2025-10-06",titre:"Compte rendu Shifumi",fichier:"beauvallet-cr-shifumi.pdf"},{date:"2025-10-14",titre:"TP Java 05",fichier:"beauvallet-tp-java-05.pdf"},{date:"2025-11-26",titre:"TP07 — Bataille navale",fichier:"beauvallet-tp07-bataille-navale.pdf"}]},{matiere:"Semestre 2 SLAM — POO, BDD & UML",court:"SLAM",description:"Accès aux données (JDBC), SQL avancé, modélisation UML et une application JavaFX complète.",competences:["JDBC","SQL avancé","UML","JavaFX"],comptes_rendus:[{date:"2026-01-26",titre:"TD3 — JDBC",fichier:"slam-s2-td3-jdbc.pdf"},{date:"2026-02-25",titre:"Introduction UML",fichier:"slam-s2-intro-uml.pdf"},{date:"2026-03-01",titre:"TP2 — Diagramme de classe",fichier:"slam-s2-tp2-diagramme-classe.pdf"},{date:"2026-03-17",titre:"TD7 — Banque",fichier:"slam-s2-td7-banque.pdf"},{date:"2026-04-27",titre:"SQL avancé",fichier:"slam-s2-sql-avance.pdf"},{date:"2026-05-21",titre:"TP8 — CarDealer & JavaFX",fichier:"slam-s2-tp8-cardealer-javafx.pdf"}]},{matiere:"B1 Semestre 2 — BDD & PHP",court:"PHP",description:"Requêtes SQL, droits utilisateurs, bases du PHP côté serveur et un projet complet de gestion de films.",competences:["SQL","PHP","Gestion des droits utilisateurs"],comptes_rendus:[{date:"2026-03-04",titre:"BDD — Leclerc",fichier:"b1-s2-bdd-leclerc.pdf"},{date:"2026-03-04",titre:"BDD — Zoo",fichier:"b1-s2-bdd-zoo.pdf"},{date:"2026-03-24",titre:"Gestion des users / PHP",fichier:"b1-s2-gestion-users-php.pdf"},{date:"2026-03-31",titre:"PHP 1",fichier:"b1-s2-php-1.pdf"},{date:"2026-05-05",titre:"PHP 2",fichier:"b1-s2-php-2.pdf"},{date:"2026-05-05",titre:"PHP 3",fichier:"b1-s2-php-3.pdf"},{date:"2026-05-17",titre:"PHP 4",fichier:"b1-s2-php-4.pdf"},{date:"2026-05-17",titre:"PHP 5",fichier:"b1-s2-php-5.pdf"},{date:"2026-05-21",titre:"Projet — Gestion de films",fichier:"b1-s2-gestion-films.pdf"},{date:"2026-05-21",titre:"TP Droit SQL",fichier:"b1-s2-tp-droit-sql.pdf"}]},{matiere:"Sotoca — Systèmes & réseaux",court:"Réseaux",description:"Réseau, Active Directory, GPO, DHCP, Linux et maintenance matérielle sous Windows Server.",competences:["Windows Server","Active Directory","GPO","DHCP","Linux"],comptes_rendus:[{date:"2025-09-11",titre:"Rapport TP n°2",fichier:"sotoca-rapport-2.pdf"},{date:"2025-09-13",titre:"Capture d'écran (doc. utilisateur)",fichier:"sotoca-capture-ecran.pdf"},{date:"2025-09-13",titre:"Logiciels de diagnostic",fichier:"sotoca-logiciels-diagnostic.pdf"},{date:"2025-10-07",titre:"Commandes CMD",fichier:"sotoca-commandes-cmd.pdf"},{date:"2025-10-11",titre:"Serveur NAS",fichier:"sotoca-serveur-nas.pdf"},{date:"2025-10-14",titre:"TechCorp — ligne de commande",fichier:"sotoca-techcorp-ligne-commande.pdf"},{date:"2026-03-17",titre:"Active Directory",fichier:"sotoca-active-directory.pdf"},{date:"2026-05-10",titre:"Scénario Linux",fichier:"sotoca-scenario-linux.pdf"},{date:"2026-05-10",titre:"Connexion au domaine",fichier:"sotoca-connexion-domaine.pdf"},{date:"2026-05-17",titre:"Rôle DHCP",fichier:"sotoca-role-dhcp.pdf"},{date:"2026-05-20",titre:"Stratégies de groupe (GPO)",fichier:"sotoca-gpo.pdf"}]},{matiere:"Cybersécurité",court:"Cyber",description:"RGPD, audit de sécurité, chiffrement PGP et codage sécurisé face aux injections SQL.",competences:["RGPD","Audit de sécurité","Chiffrement PGP","Codage sécurisé"],comptes_rendus:[{date:"2025-10-02",titre:"Données personnelles",fichier:"cyber-donnees-personnelles.pdf"},{date:"2025-11-08",titre:"Étude PIA (RGPD)",fichier:"cyber-pia-rgpd.pdf"},{date:"2026-03-02",titre:"Veille sécurité",fichier:"cyber-veille-securite.pdf"},{date:"2026-03-08",titre:"Audit de sécurité",fichier:"cyber-audit-securite.pdf"},{date:"2026-03-08",titre:"Chiffrement PGP",fichier:"cyber-chiffrement-pgp.pdf"},{date:"2026-04-26",titre:"Deep Freeze",fichier:"cyber-deep-freeze.pdf"},{date:"2026-05-21",titre:"Codage sécurisé",fichier:"cyber-codage-securise.pdf"}]}]},"2de-annee":{label:"2de année",periode:"2026 — 2027",blocs:[{matiere:"Bloc 1 — Beauvallet",court:"PGI",description:"Progiciel de gestion intégré : exploitation d'une base de données Excel multi-feuilles pour un concessionnaire, puis étude de gestion d'un restaurant (charges, bilan, résultat).",competences:["PGI","Excel avancé","Analyse de gestion"],comptes_rendus:[{date:"2026-09-10",titre:"TD PGI — Concessionnaire Senghor",fichier:"pgi-td.pdf"},{date:"2026-09-10",titre:"PGI — fichier Excel",fichier:"PGI_exercice.xlsx"},{date:"2026-09-23",titre:"TD restaurant (SI7) — fichier Excel",fichier:"td-restaurant-si7.xlsx"}]},{matiere:"Bloc 2 — Beauvallet",court:"Apps",description:"Développement d'applications : plateforme de gestion d'événements en Symfony, prise en main de Flutter/Dart, persistance des données en PHP avec PDO, architecture MVC, initiation au PL/pgSQL, découverte de React et triggers PostgreSQL et MySQL.",competences:["Symfony","Flutter / Dart","PHP (PDO)","PL/pgSQL"],comptes_rendus:[{date:"2026-09-10",titre:"Compte rendu — Eventify (Symfony)",fichier:"eventify-compte-rendu.pdf"},{date:"2026-09-11",titre:"Installation de Flutter et Dart",fichier:"slam-b2-flutter-installation.pdf"},{date:"2026-09-16",titre:"TP PHP (PDO)",fichier:"slam-b2-tp-php-pdo.pdf"},{date:"2026-09-17",titre:"Initiation au PL/pgSQL",fichier:"slam-b2-pl-pgsql.pdf"},{date:"2026-09-17",titre:"TD3 — Architecture MVC (PHP)",fichier:"slam-b2-mvc-php-td3.pdf"},{date:"2026-09-17",titre:"TD4 — Architecture MVC en PHP",fichier:"slam-b2-mvc-php-td4.pdf"},{date:"2026-09-18",titre:"TP Flutter — Interface et thèmes",fichier:"slam-b2-flutter-interface.pdf"},{date:"2026-10-01",titre:"TP PHP 5 & 6 — Architecture MVC",fichier:"slam-b2-mvc-php-td5-6.pdf"},{date:"2026-10-02",titre:"Firebase — Firestore et Authentication",fichier:"slam-b2-firebase.pdf"},{date:"2026-10-16",titre:"TP — TRIGGERS 1 (PostgreSQL)",fichier:"slam-b2-triggers-1.pdf"},{date:"2026-11-05",titre:"TP1 React — Installation et découverte",fichier:"slam-b2-react-tp1.pdf"},{date:"2026-11-12",titre:"TP2 React — État, formulaires, API et routage",fichier:"slam-b2-react-tp2.pdf"},{date:"2026-11-13",titre:"TP — TRIGGERS 2 (MySQL)",fichier:"slam-b2-triggers-mysql.pdf"}]},{matiere:"Bloc 1 — Sotoca",court:"GLPI",description:"Patrimoine informatique et gestion de parc : inventaire, valorisation et helpdesk. Autoformation par MOOC : choix d'un parcours, planning de formation, suivi de l'avancement et bilan de compétences.",competences:["Gestion de parc informatique","GLPI","Helpdesk"],comptes_rendus:[{date:"2026-09-06",titre:"TP01 — Le patrimoine informatique",fichier:"patrimoine-informatique-tp01.pdf"},{date:"2026-09-13",titre:"TP02 — Veille sur GLPI",fichier:"glpi.pdf"},{date:"2026-09-16",titre:"MOOC TP1 — Découverte du MOOC et autoformation",fichier:"sotoca-mooc-tp1-decouverte.pdf"},{date:"2026-09-23",titre:"MOOC TP2 — Planning de formation",fichier:"sotoca-mooc-tp2-planning.pdf"},{date:"2026-09-30",titre:"MOOC TP3 — Suivi de la planification",fichier:"sotoca-mooc-tp3-suivi.pdf"},{date:"2026-10-07",titre:"MOOC TP4 — Bilan de compétences et plan d'action",fichier:"sotoca-mooc-tp4-bilan.pdf"},{date:"2026-10-07",titre:"MOOC TP4 — Bilan généré (document d'origine)",fichier:"sotoca-mooc-tp4-bilan-genere.pdf"},{date:"2026-11-22",titre:"TP05 — GLPI : gestion des incidents (Helpdesk)",fichier:"sotoca-b1-tp05-glpi-incidents.pdf"},{date:"2026-11-22",titre:"TP06 — GLPI : déploiement de logiciel",fichier:"sotoca-b1-tp06-glpi-deploiement.pdf"},{date:"2026-11-22",titre:"TP07 — GLPI : guide utilisateur et procédure de test",fichier:"sotoca-b1-tp07-glpi-guide-utilisateur.pdf"}]},{matiere:"Bloc 3 — Cybersécurité",court:"B3",description:"Mise en place d'un environnement d'analyse sous Kali Linux en machine virtuelle : installation de l'ISO, additions invité VirtualBox et mise à jour du système.",competences:[],comptes_rendus:[{date:"2026-09-15",titre:"TP1 — Kali Linux en machine virtuelle",fichier:"cyber-b3-tp1-kali.pdf"}]}]}},uM={sujet:"Intelligence artificielle & Santé",debut:"2025-11-11",maj:"2026-09-07",informations:37,mois:11,sources:25,frequence:"7-14 jours entre deux relevés"},dM=[{mois:"Septembre 2026",entrees:[{date:"2026-09-01",outil:"À préciser",source:"BusinessWire",url:"https://www.businesswire.com/news/home/20260901360645/en/Vara-Receives-World-First-CE-Certification-for-Autonomous-AI-in-Breast-Cancer-Screening",texte:"La medtech allemande Vara obtient la première certification CE au monde pour un système d'IA autonome de dépistage du cancer du sein, capable de classer une mammographie comme normale sans relecture par un radiologue."},{date:"2026-09-07",outil:"À préciser",source:"Insilico Medicine",url:"https://insilico.com/news/rnt0709261-rentosertib-proteomic-aging-clocks",texte:"Insilico Medicine publie dans Nature Biotechnology les résultats d'un essai sur le rentosertib, médicament dont la cible et la molécule ont toutes deux été conçues par IA, montrant un rajeunissement biologique de 3 à 4 ans."}]},{mois:"Août 2026",entrees:[{date:"2026-08-04",outil:"À préciser",source:"MIT News",url:"https://news.mit.edu/2026/medical-ai-assistance-benefits-vary-based-on-user-expertise-0804",texte:"Une étude du MIT montre qu'une IA de diagnostic dermatologique profite surtout aux non-experts, qui lui font trop confiance, alors que les cliniciens expérimentés résistent mieux à ses erreurs."},{date:"2026-08-11",outil:"À préciser",source:"PR Newswire",url:"https://www.prnewswire.com/news-releases/leica-biosystems-enables-faster-cancer-diagnoses-through-multiple-digital-pathology-fda-clearances-including-industry-first-ai-assisted-quality-control-software-302848503.html",texte:"La FDA autorise Aperio iQC DX de Leica Biosystems, premier logiciel de contrôle qualité assisté par IA en pathologie numérique : jusqu'à 24 % d'artefacts détectés en plus, temps de relecture réduit de 69 %."},{date:"2026-08-17",outil:"À préciser",source:"Nature Biomedical Engineering",url:"https://www.nature.com/articles/s41551-026-01764-x",texte:"Une équipe de recherche internationale publie ConceptCLIP dans Nature Biomedical Engineering, un modèle d'IA biomédical explicable entraîné sur 23 millions de triplets image-texte-concept, validé sur 78 jeux de données."},{date:"2026-08-20",outil:"À préciser",source:"JAMA Network Open",url:"https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2853099",texte:"Une étude de Stanford publiée dans JAMA Network Open montre qu'un outil d'IA intégré au dossier médical électronique repère les patients chirurgicaux à risque avec 94 % de sensibilité et 78 % de spécificité."}]},{mois:"Juillet 2026",entrees:[{date:"2026-07-04",outil:"À préciser",source:"NHS England",url:"https://www.england.nhs.uk/2026/07/nhs-accelerates-artificial-intelligence-rollout-to-cut-waiting-times-and-improve-care-for-millions/",texte:"Le NHS anglais généralise les logiciels de prise de notes par IA aux urgences : à l'hôpital St George's, le temps gagné permet à chaque soignant de voir un patient supplémentaire par service."},{date:"2026-07-15",outil:"À préciser",source:"OMS Europe",url:"https://www.who.int/europe/fr/news/item/15-07-2026-statement---govern-ai-in-health-before-the-gaps-become-irreversible",texte:"L'OMS Europe alerte : seuls 8 % des pays européens disposent d'une stratégie dédiée à l'IA en santé, alors que près des deux tiers l'utilisent déjà pour le diagnostic."},{date:"2026-07-23",outil:"À préciser",source:"TechCrunch",url:"https://techcrunch.com/2026/07/23/openai-makes-chatgpt-health-available-to-all-u-s-users/",texte:"OpenAI déploie ChatGPT Health pour tous les utilisateurs américains, une fonction reliée aux dossiers médicaux qui traite désormais 300 millions de requêtes de santé par semaine."}]},{mois:"Juin 2026",entrees:[{date:"2026-06-02",outil:"À préciser",source:"Microsoft (communiqué)",url:"https://news.microsoft.com/source/2026/06/02/mayo-clinic-and-microsoft-collaborate-to-develop-a-frontier-ai-model-for-healthcare/",texte:"Mayo Clinic et Microsoft annoncent un partenariat pour développer un modèle d'IA « frontière » dédié à la santé, dont la propriété reviendra à Mayo Clinic et qui sera déployé via la plateforme Azure Foundry."},{date:"2026-06-09",outil:"À préciser",source:"RSNA",url:"https://www.rsna.org/news/2026/june/ai-flags-breast-cancer-early",texte:"Une étude suédoise du Karolinska University Hospital (revue Radiology, plus de 88 000 mammographies) montre qu'une IA détecte des signes de cancer du sein jusqu'à 6 ans avant le diagnostic dans environ 20 % des cas confirmés."},{date:"2026-06-16",outil:"À préciser",source:"CNews",url:"https://www.cnews.fr/france/2026-06-16/alliance-sante-ia-quel-est-ce-projet-dhopital-augmente-qui-doit-revolutionner-la",texte:"Le CHU de Montpellier lance le projet « Alliance Santé IA », un hôpital augmenté par l'IA financé à hauteur de 14,9 millions d'euros dans le cadre du plan France 2030, testé par 200 utilisateurs pilotes."},{date:"2026-06-23",outil:"À préciser",source:"NewYork-Presbyterian",url:"https://www.nyp.org/news/ai-tool-developed-at-newyork-presbyterian-and-columbia-to-detect-hidden-heart-disease-receives-fda-approval",texte:"L'IA EchoNext (NewYork-Presbyterian/Columbia) obtient l'autorisation de la FDA pour détecter les maladies cardiaques structurelles via un simple ECG, avec 77 % de précision contre 64 % pour les cardiologues seuls."}]},{mois:"Mai 2026",entrees:[{date:"2026-05-03",outil:"À préciser",source:"TechCrunch",url:"https://techcrunch.com/2026/05/03/in-harvard-study-ai-offered-more-accurate-diagnoses-than-emergency-room-doctors/",texte:"Une étude de Harvard Medical School et du Beth Israel Deaconess Medical Center (revue Science) montre que le modèle d'IA o1 d'OpenAI pose un diagnostic exact ou très proche dans 67 % des cas aux urgences, contre 55 % et 50 % pour deux médecins."},{date:"2026-05-12",outil:"À préciser",source:"Nature Communications",url:"https://www.nature.com/articles/s41467-026-72960-1",texte:"Une étude de la Mayo Clinic publiée dans Nature Communications montre qu'un outil d'IA prédisant les admissions hospitalières depuis les urgences réduit la durée médiane de passage des patients de 12 minutes (-4 %) sur plus de 54 000 visites."}]},{mois:"Avril 2026",entrees:[{date:"2026-04-08",outil:"À préciser",source:"Anumana (communiqué)",url:"https://anumana.ai/anumana-receives-first-and-only-fda-clearance-for-ecg-ai-cardiac-amyloidosis-algorithm-using-a-standard-12-lead-ecg/",texte:"La FDA autorise l'algorithme ECG-IA d'Anumana, premier outil détectant l'amylose cardiaque via un simple électrocardiogramme à 12 dérivations, avec 78,9 % de sensibilité et 91,2 % de spécificité sur 25 525 patients."},{date:"2026-04-20",outil:"À préciser",source:"OMS Europe",url:"https://www.who.int/europe/news/item/20-04-2026-new-who-europe-report-provides-first-ever-snapshot-of-ai-in-health-care-across-european-union-member-states",texte:"Un rapport de l'OMS Europe révèle que près des trois quarts des pays de l'Union européenne utilisent déjà des diagnostics médicaux assistés par IA."},{date:"2026-04-29",outil:"À préciser",source:"Mayo Clinic News Network",url:"https://newsnetwork.mayoclinic.org/discussion/mayo-clinic-ai-detects-pancreatic-cancer-up-to-3-years-before-diagnosis-in-landmark-validation-study/",texte:"Une étude de la Mayo Clinic montre que son IA REDMOD détecte un cancer du pancréas dans 73 % des cas, en moyenne 16 mois avant le diagnostic clinique."}]},{mois:"Mars 2026",entrees:[{date:"2026-03-05",outil:"Google Alert",source:"who.int",url:"https://www.who.int/health-topics/artificial-intelligence",texte:"L'OMS rappelle que l'intelligence artificielle doit rester un outil d'aide à la décision et ne remplace pas les médecins."},{date:"2026-03-12",outil:"À préciser",source:"Fortune",url:"https://fortune.com/2026/03/12/microsoft-copilot-health-ai-medical-personal-health-data/",texte:"Microsoft lance Copilot Health, un assistant IA qui centralise les données de santé personnelles des utilisateurs à partir de plus de 50 000 prestataires de santé américains."},{date:"2026-03-24",outil:"À préciser",source:"MIT News",url:"https://news.mit.edu/2026/creating-humble-ai-0324",texte:"Des chercheurs du MIT présentent un cadre d'IA « humble » qui signale son incertitude dans les diagnostics médicaux au lieu de formuler des recommandations trop confiantes."}]},{mois:"Février 2026",entrees:[{date:"2026-02-03",outil:"Syft",source:"reuters.com",url:"https://www.reuters.com/business/healthcare-pharmaceuticals",texte:"Plusieurs entreprises développent des systèmes d'IA capables d'assister les chirurgiens pendant certaines opérations."},{date:"2026-02-10",outil:"Twitter",source:"nasa.gov",url:"https://www.nasa.gov/technology/artificial-intelligence",texte:"Des technologies d'IA développées pour l'espace sont aussi utilisées dans la recherche médicale pour analyser des données complexes."},{date:"2026-02-17",outil:"Google Alert",source:"weforum.org",url:"https://www.weforum.org/artificial-intelligence-healthcare",texte:"Les experts estiment que l'IA pourrait réduire les erreurs médicales en aidant à l'analyse des données cliniques."},{date:"2026-02-24",outil:"Syft",source:"reuters.com",url:"https://www.reuters.com/technology/ai-hospital-systems",texte:"Certains hôpitaux utilisent des algorithmes d'IA pour organiser les flux de patients et améliorer la gestion des urgences."}]},{mois:"Janvier 2026",entrees:[{date:"2026-01-06",outil:"Google Alert",source:"inserm.fr",url:"https://www.inserm.fr/dossier/intelligence-artificielle-et-sante",texte:"L'INSERM explique que l'IA peut assister les médecins dans l'interprétation d'images médicales comme les scanners ou les IRM."},{date:"2026-01-13",outil:"Twitter",source:"reuters.com",url:"https://www.reuters.com/technology/ai-medical-research",texte:"Des chercheurs utilisent l'IA pour accélérer la découverte de nouveaux médicaments en analysant de grandes bases de données."},{date:"2026-01-20",outil:"Syft",source:"mit.edu",url:"https://www.mit.edu/news/artificial-intelligence-medicine",texte:"Le MIT développe des modèles d'IA capables d'aider à prédire certaines maladies avant l'apparition des symptômes."},{date:"2026-01-27",outil:"Google Alert",source:"bbc.com",url:"https://www.bbc.com/news/health",texte:"L'intelligence artificielle est utilisée dans certains hôpitaux pour analyser les radiographies et détecter plus rapidement des fractures."}]},{mois:"Décembre 2025",entrees:[{date:"2025-12-02",outil:"Google Alert",source:"who.int",url:"https://www.who.int/fr/news-room/fact-sheets/detail/artificial-intelligence-in-health",texte:"L'OMS indique que l'intelligence artificielle peut améliorer le diagnostic médical et aider les médecins à analyser plus rapidement les données de santé."},{date:"2025-12-09",outil:"Syft",source:"reuters.com",url:"https://www.reuters.com/technology/artificial-intelligence-healthcare",texte:"Des hôpitaux utilisent l'IA pour analyser les scanners et détecter plus tôt certaines maladies pulmonaires."},{date:"2025-12-16",outil:"Twitter",source:"bbc.com",url:"https://www.bbc.com/news/technology",texte:"Des chercheurs expliquent que l'IA peut aider les radiologues à repérer certaines anomalies dans les images médicales plus rapidement."},{date:"2025-12-23",outil:"Google Alert",source:"weforum.org",url:"https://www.weforum.org/agenda/2023/02/ai-healthcare-future",texte:"L'IA pourrait améliorer la médecine préventive en analysant de grandes bases de données de patients."},{date:"2025-12-30",outil:"Syft",source:"ibm.com",url:"https://www.ibm.com/artificial-intelligence/healthcare",texte:"Les systèmes d'IA peuvent analyser les dossiers médicaux pour aider les médecins à choisir les traitements les plus adaptés."}]},{mois:"Novembre 2025",entrees:[{date:"2025-11-11",outil:"Google",source:"inserm.fr",url:"https://www.inserm.fr/dossier/intelligence-artificielle-et-sante",texte:"L'IA et le médecin collaborent pour analyser les symptômes, le médecin gardant la décision finale."},{date:"2025-11-17",outil:"Syft",source:"medvasc.info",url:"https://medvasc.info/archives-blog/infarctus-du-myocarde-apport-de-l-ia",texte:"L'IA prédit les infarctus du myocarde via IRM cardiaque avec une précision de 94,3 %."},{date:"2025-11-25",outil:"Twitter",source:"nypost.com",url:"https://nypost.com/2025/07/12/science/ai-trained-robot-completes-groundbreaking-gall-bladder-operation-with-100-success-the-future-is-bright/",texte:"Un robot chirurgical IA (SRT-H, Johns Hopkins) retire de façon autonome une vésicule biliaire sur un modèle porcin avec 100 % de réussite (8/8 essais)."}]}],fM={meta:uM,mois:dM},Fs="deliodcb@gmail.com",B0="cv-delio-duchesne-brajon.pdf",ko=["#2b3a45","#3b4637","#5a332f","#433c4f","#5f5444","#2f3d40","#6e5f4e","#3a3a3a","#4b5660","#574a3a","#34403a","#4a3a36"];function ao(t){return ko[(t%ko.length+ko.length)%ko.length]}function Cp(t){return t.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}const hM=["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."];function Ar(t){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t||"");return e?`${Number(e[3])} ${hM[Number(e[2])-1]} ${e[1]}`:t}function jf(t){return String(t).padStart(2,"0")}function oo(t){return`./reports/${encodeURIComponent(t)}`}function z0(t){return t.toLowerCase().endsWith(".pdf")}let pM=0;const Oa=Object.entries(cM).map(([t,e])=>({cle:t,label:e.label,periode:e.periode,blocs:e.blocs.map(n=>{const i=Cp(`${e.label}-${n.matiere}`),r=ao(pM++);return{...n,slug:i,couleur:r,anneeLabel:e.label,periode:e.periode,comptes_rendus:n.comptes_rendus.map(s=>({...s,slug:Cp(s.fichier.replace(/\.[^.]+$/,"")),matiereSlug:i}))}})})),Mc=Oa.flatMap(t=>t.blocs);function mM(t){return Mc.find(e=>e.slug===t)}function gM(t){for(const e of Mc){const n=e.comptes_rendus.findIndex(i=>i.slug===t);if(n!==-1)return{bloc:e,cr:e.comptes_rendus[n],index:n}}return null}Mc.reduce((t,e)=>t+e.comptes_rendus.length,0);const Vn=Oa.find(t=>t.cle==="2de-annee")??Oa[Oa.length-1],Nd=Oa.filter(t=>t!==Vn),bp=t=>Number((/Bloc\s+(\d+)/i.exec(t)||[])[1]||9),Os=[...Vn.blocs].sort((t,e)=>bp(t.matiere)-bp(e.matiere)||t.matiere.localeCompare(e.matiere,"fr")),Pp=Os.reduce((t,e)=>t+e.comptes_rendus.length,0);function H0(t){const e=Mc.findIndex(n=>n.slug===t.slug);return t.comptes_rendus.map((n,i)=>({kicker:`${t.anneeLabel} · ${t.matiere}`,title:n.titre,footer:Ar(n.date),color:i===0?t.couleur:ao(e*3+i*5),styleIndex:e+i,to:`/cr/${n.slug}`}))}function vM(){return w.jsx("svg",{className:"chev",viewBox:"0 0 10 6","aria-hidden":"true",children:w.jsx("path",{d:"M1 1l4 4 4-4",fill:"none",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})}function _M(){const t=Q.useRef(null),[e,n]=Q.useState(!1),[i,r]=Q.useState(!1),s=or();return Q.useEffect(()=>{const a=()=>n(window.scrollY>window.innerHeight*.6);return a(),window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),Q.useEffect(()=>r(!1),[s.pathname]),Q.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!t.current)return;const a=t.current.animate([{opacity:0,transform:"translateY(-1.2vh)"},{opacity:1,transform:"translateY(0)"}],{duration:900,delay:700,easing:"cubic-bezier(.2,.8,.2,1)",fill:"both"});return()=>a.cancel()},[]),w.jsx("header",{className:`site-nav${e?" is-solid":""}`,children:w.jsxs("div",{ref:t,className:"site-nav-inner",children:[w.jsxs(en,{to:"/",className:"logo","aria-label":"Accueil — Délio Duchesne-Brajon",children:[w.jsx("span",{className:"logo-tile","aria-hidden":"true",children:w.jsx("span",{})}),w.jsxs("span",{className:"logo-text",children:[w.jsx("span",{className:"logo-name",children:"Délio"}),w.jsx("span",{className:"logo-sub",children:"BTS SIO · SLAM"})]})]}),w.jsxs("nav",{className:"nav-center","aria-label":"Navigation principale",children:[w.jsxs("div",{className:`nav-drop${i?" is-open":""}`,onMouseLeave:()=>r(!1),children:[w.jsxs("button",{type:"button",className:"nav-link","aria-expanded":i,onClick:()=>r(a=>!a),onMouseEnter:()=>r(!0),children:["Comptes rendus ",w.jsx(vM,{})]}),w.jsx("div",{className:"nav-menu",children:w.jsxs("div",{className:"nav-menu-col",children:[w.jsxs("div",{className:"nav-menu-head",children:[Vn.label," · ",Vn.periode]}),Os.map(a=>w.jsxs(en,{to:`/matiere/${a.slug}`,children:[w.jsx("i",{style:{background:a.couleur}}),a.matiere]},a.slug)),Nd.length>0&&w.jsxs(en,{to:"/",state:{scrollTo:"archives"},className:"nav-menu-archives",children:["Archives — ",Nd.map(a=>a.label).join(", ")]})]})})]}),w.jsx(en,{className:"nav-link",to:"/veille",children:"Veille"}),w.jsx(en,{className:"nav-link",to:"/controle",children:"Contrôle"}),w.jsx(en,{className:"nav-link",to:"/",state:{scrollTo:"contact"},children:"Contact"})]}),w.jsxs("div",{className:"nav-right",children:[w.jsx("a",{className:"nav-link nav-cv",href:oo(B0),download:!0,children:"CV"}),w.jsx(en,{className:"pill",to:"/",state:{scrollTo:"sommaire"},children:"Voir les comptes rendus"})]})]})})}function xM(){return w.jsxs("footer",{className:"site-footer",children:[w.jsxs("span",{children:["© ",new Date().getFullYear()," Délio Duchesne-Brajon"]}),w.jsx("span",{children:"BTS SIO SLAM — Lycée Dominique Villars, Gap"}),w.jsx("a",{href:`mailto:${Fs}`,children:Fs})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xf="160",yM=0,Lp=1,SM=2,G0=1,V0=2,ui=3,tr=0,rn=1,hi=2,Ki=0,ks=1,Dp=2,Np=3,Up=4,MM=5,Sr=100,EM=101,wM=102,Ip=103,Fp=104,TM=200,AM=201,RM=202,CM=203,Ud=204,Id=205,bM=206,PM=207,LM=208,DM=209,NM=210,UM=211,IM=212,FM=213,OM=214,kM=0,BM=1,zM=2,Yl=3,HM=4,GM=5,VM=6,WM=7,W0=0,jM=1,XM=2,Zi=0,qM=1,$M=2,YM=3,j0=4,KM=5,ZM=6,X0=300,qs=301,$s=302,Fd=303,Od=304,Ec=306,Kl=1e3,Wn=1001,kd=1002,tn=1003,Op=1004,su=1005,bn=1006,QM=1007,Ys=1008,Qi=1009,JM=1010,eE=1011,qf=1012,q0=1013,Bi=1014,zi=1015,lo=1016,$0=1017,Y0=1018,Pr=1020,tE=1021,jn=1023,nE=1024,iE=1025,Lr=1026,Ks=1027,rE=1028,K0=1029,sE=1030,Z0=1031,Q0=1033,au=33776,ou=33777,lu=33778,cu=33779,kp=35840,Bp=35841,zp=35842,Hp=35843,J0=36196,Gp=37492,Vp=37496,Wp=37808,jp=37809,Xp=37810,qp=37811,$p=37812,Yp=37813,Kp=37814,Zp=37815,Qp=37816,Jp=37817,em=37818,tm=37819,nm=37820,im=37821,uu=36492,rm=36494,sm=36495,aE=36283,am=36284,om=36285,lm=36286,e_=3e3,Dr=3001,oE=3200,lE=3201,t_=0,cE=1,Pn="",bt="srgb",ii="srgb-linear",$f="display-p3",wc="display-p3-linear",Zl="linear",ct="srgb",Ql="rec709",Jl="p3",qr=7680,cm=519,uE=512,dE=513,fE=514,n_=515,hE=516,pE=517,mE=518,gE=519,um=35044,dm="300 es",Bd=1035,gi=2e3,ec=2001;class na{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fm=1234567;const ka=Math.PI/180,co=180/Math.PI;function ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function Yf(t,e){return(t%e+e)%e}function vE(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function _E(t,e,n){return t!==e?(n-t)/(e-t):0}function Ba(t,e,n){return(1-n)*t+n*e}function xE(t,e,n,i){return Ba(t,e,1-Math.exp(-n*i))}function yE(t,e=1){return e-Math.abs(Yf(t,e*2)-e)}function SE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function ME(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function EE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function wE(t,e){return t+Math.random()*(e-t)}function TE(t){return t*(.5-Math.random())}function AE(t){t!==void 0&&(fm=t);let e=fm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RE(t){return t*ka}function CE(t){return t*co}function zd(t){return(t&t-1)===0&&t!==0}function bE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function tc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function PE(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),x=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*f,l*h,o*c);break;case"YZY":t.set(l*h,o*d,l*f,o*c);break;case"ZXZ":t.set(l*f,l*h,o*d,o*c);break;case"XZX":t.set(o*d,l*x,l*m,o*c);break;case"YXY":t.set(l*m,o*d,l*x,o*c);break;case"ZYZ":t.set(l*x,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const hm={DEG2RAD:ka,RAD2DEG:co,generateUUID:ia,clamp:qt,euclideanModulo:Yf,mapLinear:vE,inverseLerp:_E,lerp:Ba,damp:xE,pingpong:yE,smoothstep:SE,smootherstep:ME,randInt:EE,randFloat:wE,randFloatSpread:TE,seededRandom:AE,degToRad:RE,radToDeg:CE,isPowerOfTwo:zd,ceilPowerOfTwo:bE,floorPowerOfTwo:tc,setQuaternionFromProperEuler:PE,normalize:Zt,denormalize:fs};class Qe{constructor(e=0,n=0){Qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],x=i[8],_=r[0],p=r[3],u=r[6],v=r[1],g=r[4],y=r[7],P=r[2],R=r[5],C=r[8];return s[0]=a*_+o*v+l*P,s[3]=a*p+o*g+l*R,s[6]=a*u+o*y+l*C,s[1]=c*_+d*v+f*P,s[4]=c*p+d*g+f*R,s[7]=c*u+d*y+f*C,s[2]=h*_+m*v+x*P,s[5]=h*p+m*g+x*R,s[8]=h*u+m*y+x*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,m=c*s-a*l,x=n*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=m*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(du.makeScale(e,n)),this}rotate(e){return this.premultiply(du.makeRotation(-e)),this}translate(e,n){return this.premultiply(du.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const du=new $e;function i_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function LE(){const t=nc("canvas");return t.style.display="block",t}const pm={};function za(t){t in pm||(pm[t]=!0,console.warn(t))}const mm=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gm=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bo={[ii]:{transfer:Zl,primaries:Ql,toReference:t=>t,fromReference:t=>t},[bt]:{transfer:ct,primaries:Ql,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[wc]:{transfer:Zl,primaries:Jl,toReference:t=>t.applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm)},[$f]:{transfer:ct,primaries:Jl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(gm),fromReference:t=>t.applyMatrix3(mm).convertLinearToSRGB()}},DE=new Set([ii,wc]),rt={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!DE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Bo[e].toReference,r=Bo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Bo[t].primaries},getTransfer:function(t){return t===Pn?Zl:Bo[t].transfer}};function Bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class r_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=nc("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bs(n[i]/255)*255):n[i]=Bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NE=0;class s_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=ia(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(hu(r[a].image)):s.push(hu(r[a]))}else s=hu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?r_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UE=0;class fn extends na{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Wn,r=Wn,s=bn,a=Ys,o=jn,l=Qi,c=fn.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=ia(),this.name="",this.source=new s_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Dr?bt:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kl:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kl:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?Dr:e_}set encoding(e){za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Dr?bt:Pn}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=X0;fn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],x=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(m+1)/2,P=(u+1)/2,R=(d+h)/4,C=(f+_)/4,O=(x+p)/4;return g>y&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=C/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=O/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=O/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-x)*(p-x)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(f-_)/v,this.z=(h-d)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IE extends na{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(za("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Dr?bt:Pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new s_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends IE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class a_ extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class FE extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],x=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=_;return}if(f!==_||l!==h||c!==m||d!==x){let p=1-o;const u=l*h+c*m+d*x+f*_,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const P=Math.sqrt(g),R=Math.atan2(P,u*v);p=Math.sin(p*R)/P,o=Math.sin(o*R)/P}const y=o*v;if(l=l*p+h*y,c=c*p+m*y,d=d*p+x*y,f=f*p+_*y,p===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+d*f+l*m-c*h,e[n+1]=l*x+d*h+c*f-o*m,e[n+2]=c*x+d*m+o*h-l*f,e[n+3]=d*x-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f-h*m*x;break;case"YXZ":this._x=h*d*f+c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f+h*m*x;break;case"ZXY":this._x=h*d*f-c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f-h*m*x;break;case"ZYX":this._x=h*d*f-c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f+h*m*x;break;case"YZX":this._x=h*d*f+c*m*x,this._y=c*m*f+h*d*x,this._z=c*d*x-h*m*f,this._w=c*d*f-h*m*x;break;case"XZY":this._x=h*d*f-c*m*x,this._y=c*m*f-h*d*x,this._z=c*d*x+h*m*f,this._w=c*d*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pu.copy(this).projectOnVector(e),this.sub(pu)}reflect(e){return this.sub(pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pu=new I,vm=new vo;class _o{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zo.copy(i.boundingBox)),zo.applyMatrix4(e.matrixWorld),this.union(zo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),Ho.subVectors(this.max,ga),Yr.subVectors(e.a,ga),Kr.subVectors(e.b,ga),Zr.subVectors(e.c,ga),Ti.subVectors(Kr,Yr),Ai.subVectors(Zr,Kr),dr.subVectors(Yr,Zr);let n=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-dr.z,dr.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,dr.z,0,-dr.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-dr.y,dr.x,0];return!mu(n,Yr,Kr,Zr,Ho)||(n=[1,0,0,0,1,0,0,0,1],!mu(n,Yr,Kr,Zr,Ho))?!1:(Go.crossVectors(Ti,Ai),n=[Go.x,Go.y,Go.z],mu(n,Yr,Kr,Zr,Ho))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,zo=new _o,Yr=new I,Kr=new I,Zr=new I,Ti=new I,Ai=new I,dr=new I,ga=new I,Ho=new I,Go=new I,fr=new I;function mu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){fr.fromArray(t,s);const o=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=n.dot(fr),d=i.dot(fr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const OE=new _o,va=new I,gu=new I;class Kf{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):OE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);const n=va.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(va,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(gu)),this.expandByPoint(va.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new I,vu=new I,Vo=new I,Ri=new I,_u=new I,Wo=new I,xu=new I;class o_{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vu.copy(e).add(n).multiplyScalar(.5),Vo.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(vu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Vo),o=Ri.dot(this.direction),l=-Ri.dot(Vo),c=Ri.lengthSq(),d=Math.abs(1-a*a);let f,h,m,x;if(d>0)if(f=a*l-o,h=a*o-l,x=s*d,f>=0)if(h>=-x)if(h<=x){const _=1/d;f*=_,h*=_,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(vu).addScaledVector(Vo,h),m}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){_u.subVectors(n,e),Wo.subVectors(i,e),xu.crossVectors(_u,Wo);let a=this.direction.dot(xu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const l=o*this.direction.dot(Wo.crossVectors(Ri,Wo));if(l<0)return null;const c=o*this.direction.dot(_u.cross(Ri));if(c<0||l+c>a)return null;const d=-o*Ri.dot(xu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,a,o,l,c,d,f,h,m,x,_,p){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,m,x,_,p)}set(e,n,i,r,s,a,o,l,c,d,f,h,m,x,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=x,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Qr.setFromMatrixColumn(e,0).length(),s=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*f,x=o*d,_=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+x*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=x+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,x=c*d,_=c*f;n[0]=h+_*o,n[4]=x*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=m*o-x,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,x=c*d,_=c*f;n[0]=h-_*o,n[4]=-a*f,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*d,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*f,x=o*d,_=o*f;n[0]=l*d,n[4]=x*c-m,n[8]=h*c+_,n[1]=l*f,n[5]=_*c+h,n[9]=m*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,x=o*l,_=o*c;n[0]=l*d,n[4]=_-h*f,n[8]=x*f+m,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*f+x,n[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,m=a*c,x=o*l,_=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+_,n[5]=a*d,n[9]=m*f-x,n[2]=x*f-m,n[6]=o*d,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kE,e,BE)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ci.crossVectors(i,pn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ci.crossVectors(i,pn)),Ci.normalize(),jo.crossVectors(pn,Ci),r[0]=Ci.x,r[4]=jo.x,r[8]=pn.x,r[1]=Ci.y,r[5]=jo.y,r[9]=pn.y,r[2]=Ci.z,r[6]=jo.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],x=i[2],_=i[6],p=i[10],u=i[14],v=i[3],g=i[7],y=i[11],P=i[15],R=r[0],C=r[4],O=r[8],M=r[12],T=r[1],q=r[5],J=r[9],ue=r[13],L=r[2],G=r[6],$=r[10],ee=r[14],D=r[3],k=r[7],z=r[11],ie=r[15];return s[0]=a*R+o*T+l*L+c*D,s[4]=a*C+o*q+l*G+c*k,s[8]=a*O+o*J+l*$+c*z,s[12]=a*M+o*ue+l*ee+c*ie,s[1]=d*R+f*T+h*L+m*D,s[5]=d*C+f*q+h*G+m*k,s[9]=d*O+f*J+h*$+m*z,s[13]=d*M+f*ue+h*ee+m*ie,s[2]=x*R+_*T+p*L+u*D,s[6]=x*C+_*q+p*G+u*k,s[10]=x*O+_*J+p*$+u*z,s[14]=x*M+_*ue+p*ee+u*ie,s[3]=v*R+g*T+y*L+P*D,s[7]=v*C+g*q+y*G+P*k,s[11]=v*O+g*J+y*$+P*z,s[15]=v*M+g*ue+y*ee+P*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],x=e[3],_=e[7],p=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+_*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*d-s*l*d)+p*(+n*c*f-n*o*m-s*a*f+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],x=e[12],_=e[13],p=e[14],u=e[15],v=f*p*c-_*h*c+_*l*m-o*p*m-f*l*u+o*h*u,g=x*h*c-d*p*c-x*l*m+a*p*m+d*l*u-a*h*u,y=d*_*c-x*f*c+x*o*m-a*_*m-d*o*u+a*f*u,P=x*f*l-d*_*l-x*o*h+a*_*h+d*o*p-a*f*p,R=n*v+i*g+r*y+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=v*C,e[1]=(_*h*s-f*p*s-_*r*m+i*p*m+f*r*u-i*h*u)*C,e[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*u+i*l*u)*C,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*C,e[4]=g*C,e[5]=(d*p*s-x*h*s+x*r*m-n*p*m-d*r*u+n*h*u)*C,e[6]=(x*l*s-a*p*s-x*r*c+n*p*c+a*r*u-n*l*u)*C,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*m+n*l*m)*C,e[8]=y*C,e[9]=(x*f*s-d*_*s-x*i*m+n*_*m+d*i*u-n*f*u)*C,e[10]=(a*_*s-x*o*s+x*i*c-n*_*c-a*i*u+n*o*u)*C,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*m-n*o*m)*C,e[12]=P*C,e[13]=(d*_*r-x*f*r+x*i*h-n*_*h-d*i*p+n*f*p)*C,e[14]=(x*o*r-a*_*r-x*i*l+n*_*l+a*i*p-n*o*p)*C,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,m=s*d,x=s*f,_=a*d,p=a*f,u=o*f,v=l*c,g=l*d,y=l*f,P=i.x,R=i.y,C=i.z;return r[0]=(1-(_+u))*P,r[1]=(m+y)*P,r[2]=(x-g)*P,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(h+u))*R,r[6]=(p+v)*R,r[7]=0,r[8]=(x+g)*C,r[9]=(p-v)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Qr.set(r[0],r[1],r[2]).length();const a=Qr.set(r[4],r[5],r[6]).length(),o=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const c=1/s,d=1/a,f=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=d,On.elements[5]*=d,On.elements[6]*=d,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=gi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(o===gi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ec)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=gi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),h=(n+e)*c,m=(i+r)*d;let x,_;if(o===gi)x=(a+s)*f,_=-2*f;else if(o===ec)x=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Qr=new I,On=new Rt,kE=new I(0,0,0),BE=new I(1,1,1),Ci=new I,jo=new I,pn=new I,_m=new Rt,xm=new vo;class Tc{constructor(e=0,n=0,i=0,r=Tc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tc.DEFAULT_ORDER="XYZ";class Zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zE=0;const ym=new I,Jr=new vo,oi=new Rt,Xo=new I,_a=new I,HE=new I,GE=new vo,Sm=new I(1,0,0),Mm=new I(0,1,0),Em=new I(0,0,1),VE={type:"added"},WE={type:"removed"};class $t extends na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new I,n=new Tc,i=new vo,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new $e}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(Em,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(Em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xo.copy(e):Xo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(_a,Xo,this.up):oi.lookAt(Xo,_a,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(oi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(VE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,HE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,GE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new I(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new I,li=new I,yu=new I,ci=new I,es=new I,ts=new I,wm=new I,Su=new I,Mu=new I,Eu=new I;let qo=!1;class Gn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),li.subVectors(i,n),yu.subVectors(e,n);const a=kn.dot(kn),o=kn.dot(li),l=kn.dot(yu),c=li.dot(li),d=li.dot(yu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*d)*h,x=(a*d-o*l)*h;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,n,i,r,s,a,o,l){return qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qo=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),li.subVectors(e,n),kn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),kn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return qo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qo=!0),Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;es.subVectors(r,i),ts.subVectors(s,i),Su.subVectors(e,i);const l=es.dot(Su),c=ts.dot(Su);if(l<=0&&c<=0)return n.copy(i);Mu.subVectors(e,r);const d=es.dot(Mu),f=ts.dot(Mu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(es,a);Eu.subVectors(e,s);const m=es.dot(Eu),x=ts.dot(Eu);if(x>=0&&m<=x)return n.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(ts,o);const p=d*x-m*f;if(p<=0&&f-d>=0&&m-x>=0)return wm.subVectors(s,r),o=(f-d)/(f-d+(m-x)),n.copy(r).addScaledVector(wm,o);const u=1/(p+_+h);return a=_*u,o=h*u,n.copy(i).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},$o={h:0,s:0,l:0};function wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=Yf(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=wu(a,s,e+1/3),this.g=wu(a,s,e),this.b=wu(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bt){const i=l_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=fu(e.r),this.g=fu(e.g),this.b=fu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return rt.fromWorkingColorSpace(jt.copy(this),e),Math.round(qt(jt.r*255,0,255))*65536+Math.round(qt(jt.g*255,0,255))*256+Math.round(qt(jt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=bt){rt.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==bt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL($o);const i=Ba(bi.h,$o.h,n),r=Ba(bi.s,$o.s,n),s=Ba(bi.l,$o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ye;Ye.NAMES=l_;let jE=0;class ra extends na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=ks,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Id,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ud&&(i.blendSrc=this.blendSrc),this.blendDst!==Id&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qf extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=W0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new I,Yo=new Qe;class ti{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=um,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Yo.fromBufferAttribute(this,n),Yo.applyMatrix3(e),this.setXY(n,Yo.x,Yo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class c_ extends ti{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class u_ extends ti{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nr extends ti{constructor(e,n,i){super(new Float32Array(e),n,i)}}let XE=0;const Tn=new Rt,Tu=new $t,ns=new I,mn=new _o,xa=new _o,Ut=new I;class Vr extends na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(i_(e)?u_:c_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Tu.lookAt(e),Tu.updateMatrix(),this.applyMatrix4(Tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(mn.min,xa.min),mn.expandByPoint(Ut),Ut.addVectors(mn.max,xa.max),mn.expandByPoint(Ut)):(mn.expandByPoint(xa.min),mn.expandByPoint(xa.max))}mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ut.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),Ut.add(ns)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<o;T++)c[T]=new I,d[T]=new I;const f=new I,h=new I,m=new I,x=new Qe,_=new Qe,p=new Qe,u=new I,v=new I;function g(T,q,J){f.fromArray(r,T*3),h.fromArray(r,q*3),m.fromArray(r,J*3),x.fromArray(a,T*2),_.fromArray(a,q*2),p.fromArray(a,J*2),h.sub(f),m.sub(f),_.sub(x),p.sub(x);const ue=1/(_.x*p.y-p.x*_.y);isFinite(ue)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ue),v.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(ue),c[T].add(u),c[q].add(u),c[J].add(u),d[T].add(v),d[q].add(v),d[J].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,q=y.length;T<q;++T){const J=y[T],ue=J.start,L=J.count;for(let G=ue,$=ue+L;G<$;G+=3)g(i[G+0],i[G+1],i[G+2])}const P=new I,R=new I,C=new I,O=new I;function M(T){C.fromArray(s,T*3),O.copy(C);const q=c[T];P.copy(q),P.sub(C.multiplyScalar(C.dot(q))).normalize(),R.crossVectors(O,q);const ue=R.dot(d[T])<0?-1:1;l[T*4]=P.x,l[T*4+1]=P.y,l[T*4+2]=P.z,l[T*4+3]=ue}for(let T=0,q=y.length;T<q;++T){const J=y[T],ue=J.start,L=J.count;for(let G=ue,$=ue+L;G<$;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ti(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,d=new I,f=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*d;for(let u=0;u<d;u++)h[x++]=c[m++]}return new ti(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tm=new Rt,hr=new o_,Ko=new Kf,Am=new I,is=new I,rs=new I,ss=new I,Au=new I,Zo=new I,Qo=new Qe,Jo=new Qe,el=new Qe,Rm=new I,Cm=new I,bm=new I,tl=new I,nl=new I;class at extends $t{constructor(e=new Vr,n=new Qf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Au.fromBufferAttribute(f,e),a?Zo.addScaledVector(Au,d):Zo.addScaledVector(Au.sub(n),d))}n.add(Zo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(Ko.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Ko,Am)===null||hr.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(Tm.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Tm),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const p=h[x],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,P=g;y<P;y+=3){const R=o.getX(y),C=o.getX(y+1),O=o.getX(y+2);r=il(this,u,e,i,c,d,f,R,C,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const v=o.getX(p),g=o.getX(p+1),y=o.getX(p+2);r=il(this,a,e,i,c,d,f,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const p=h[x],u=a[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,P=g;y<P;y+=3){const R=y,C=y+1,O=y+2;r=il(this,u,e,i,c,d,f,R,C,O),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){const v=p,g=p+1,y=p+2;r=il(this,a,e,i,c,d,f,v,g,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function qE(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===tr,o),l===null)return null;nl.copy(o),nl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(nl);return c<n.near||c>n.far?null:{distance:c,point:nl.clone(),object:t}}function il(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,is),t.getVertexPosition(l,rs),t.getVertexPosition(c,ss);const d=qE(t,e,n,i,is,rs,ss,tl);if(d){r&&(Qo.fromBufferAttribute(r,o),Jo.fromBufferAttribute(r,l),el.fromBufferAttribute(r,c),d.uv=Gn.getInterpolation(tl,is,rs,ss,Qo,Jo,el,new Qe)),s&&(Qo.fromBufferAttribute(s,o),Jo.fromBufferAttribute(s,l),el.fromBufferAttribute(s,c),d.uv1=Gn.getInterpolation(tl,is,rs,ss,Qo,Jo,el,new Qe),d.uv2=d.uv1),a&&(Rm.fromBufferAttribute(a,o),Cm.fromBufferAttribute(a,l),bm.fromBufferAttribute(a,c),d.normal=Gn.getInterpolation(tl,is,rs,ss,Rm,Cm,bm,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};Gn.getNormal(is,rs,ss,f.normal),d.face=f}return d}class Mi extends Vr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nr(c,3)),this.setAttribute("normal",new Nr(d,3)),this.setAttribute("uv",new Nr(f,2));function x(_,p,u,v,g,y,P,R,C,O,M){const T=y/C,q=P/O,J=y/2,ue=P/2,L=R/2,G=C+1,$=O+1;let ee=0,D=0;const k=new I;for(let z=0;z<$;z++){const ie=z*q-ue;for(let Z=0;Z<G;Z++){const V=Z*T-J;k[_]=V*v,k[p]=ie*g,k[u]=L,c.push(k.x,k.y,k.z),k[_]=0,k[p]=0,k[u]=R>0?1:-1,d.push(k.x,k.y,k.z),f.push(Z/C),f.push(1-z/O),ee+=1}}for(let z=0;z<O;z++)for(let ie=0;ie<C;ie++){const Z=h+ie+G*z,V=h+ie+G*(z+1),re=h+(ie+1)+G*(z+1),de=h+(ie+1)+G*z;l.push(Z,V,de),l.push(V,re,de),D+=6}o.addGroup(m,D,M),m+=D,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Zs(t[n]);for(const r in i)e[r]=i[r]}return e}function $E(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function d_(t){return t.getRenderTarget()===null?t.outputColorSpace:rt.workingColorSpace}const YE={clone:Zs,merge:Qt};var KE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KE,this.fragmentShader=ZE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=$E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Jf extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends Jf{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ka*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const as=-90,os=1;class QE extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(as,os,e,n);r.layers=this.layers,this.add(r);const s=new _n(as,os,e,n);s.layers=this.layers,this.add(s);const a=new _n(as,os,e,n);a.layers=this.layers,this.add(a);const o=new _n(as,os,e,n);o.layers=this.layers,this.add(o);const l=new _n(as,os,e,n);l.layers=this.layers,this.add(l);const c=new _n(as,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class f_ extends fn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:qs,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class JE extends nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(za("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Dr?bt:Pn),this.texture=new f_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mi(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Ki});s.uniforms.tEquirect.value=n;const a=new at(r,s),o=n.minFilter;return n.minFilter===Ys&&(n.minFilter=bn),new QE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Ru=new I,e1=new I,t1=new $e;class _r{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ru.subVectors(i,n).cross(e1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ru),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||t1.getNormalMatrix(e),r=this.coplanarPoint(Ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Kf,rl=new I;class eh{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,a=new _r){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],x=r[9],_=r[10],p=r[11],u=r[12],v=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,p-m,y-u).normalize(),i[1].setComponents(l+s,h+c,p+m,y+u).normalize(),i[2].setComponents(l+a,h+d,p+x,y+v).normalize(),i[3].setComponents(l-a,h-d,p-x,y-v).normalize(),i[4].setComponents(l-o,h-f,p-_,y-g).normalize(),n===gi)i[5].setComponents(l+o,h+f,p+_,y+g).normalize();else if(n===ec)i[5].setComponents(o,f,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function h_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function n1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,m=f.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,f){const h=d.array,m=d._updateRange,x=d.updateRanges;if(t.bindBuffer(f,c),m.count===-1&&x.length===0&&t.bufferSubData(f,0,h),x.length!==0){for(let _=0,p=x.length;_<p;_++){const u=x[_];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:a,remove:o,update:l}}class Qs extends Vr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,m=[],x=[],_=[],p=[];for(let u=0;u<d;u++){const v=u*h-a;for(let g=0;g<c;g++){const y=g*f-s;x.push(y,-v,0),_.push(0,0,1),p.push(g/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const g=v+c*u,y=v+c*(u+1),P=v+1+c*(u+1),R=v+1+c*u;m.push(g,y,R),m.push(y,P,R)}this.setIndex(m),this.setAttribute("position",new Nr(x,3)),this.setAttribute("normal",new Nr(_,3)),this.setAttribute("uv",new Nr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var i1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r1=`#ifdef USE_ALPHAHASH
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
#endif`,s1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,l1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c1=`#ifdef USE_AOMAP
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
#endif`,u1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d1=`#ifdef USE_BATCHING
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
#endif`,f1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,h1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g1=`#ifdef USE_IRIDESCENCE
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
#endif`,v1=`#ifdef USE_BUMPMAP
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
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,A1=`#define PI 3.141592653589793
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
} // validated`,R1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C1=`vec3 transformedNormal = objectNormal;
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
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N1="gl_FragColor = linearToOutputTexel( gl_FragColor );",U1=`
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
}`,I1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W1=`#ifdef USE_GRADIENTMAP
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
}`,j1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,X1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y1=`uniform bool receiveShadow;
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
#endif`,K1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tw=`PhysicalMaterial material;
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
#endif`,nw=`struct PhysicalMaterial {
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
}`,iw=`
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
#endif`,rw=`#if defined( RE_IndirectDiffuse )
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
#endif`,sw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ow=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hw=`#if defined( USE_POINTS_UV )
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
#endif`,pw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vw=`#ifdef USE_MORPHNORMALS
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
#endif`,_w=`#ifdef USE_MORPHTARGETS
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
#endif`,xw=`#ifdef USE_MORPHTARGETS
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
#endif`,yw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ww=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tw=`#ifdef USE_NORMALMAP
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
#endif`,Aw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hw=`float getShadowMask() {
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
}`,Gw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vw=`#ifdef USE_SKINNING
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
#endif`,Ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jw=`#ifdef USE_SKINNING
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
#endif`,Xw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$w=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kw=`#ifdef USE_TRANSMISSION
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
#endif`,Zw=`#ifdef USE_TRANSMISSION
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
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iT=`uniform sampler2D t2D;
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`#include <common>
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
}`,cT=`#if DEPTH_PACKING == 3200
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
}`,uT=`#define DISTANCE
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
}`,dT=`#define DISTANCE
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`uniform float scale;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,vT=`uniform vec3 diffuse;
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
}`,_T=`#define LAMBERT
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
}`,xT=`#define LAMBERT
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
}`,yT=`#define MATCAP
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
}`,ST=`#define MATCAP
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
}`,MT=`#define NORMAL
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
}`,ET=`#define NORMAL
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
}`,wT=`#define PHONG
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
}`,TT=`#define PHONG
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
}`,AT=`#define STANDARD
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
}`,RT=`#define STANDARD
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
}`,CT=`#define TOON
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
}`,bT=`#define TOON
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
}`,PT=`uniform float size;
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
}`,LT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,NT=`uniform vec3 color;
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
}`,UT=`uniform float rotation;
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
}`,IT=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:i1,alphahash_pars_fragment:r1,alphamap_fragment:s1,alphamap_pars_fragment:a1,alphatest_fragment:o1,alphatest_pars_fragment:l1,aomap_fragment:c1,aomap_pars_fragment:u1,batching_pars_vertex:d1,batching_vertex:f1,begin_vertex:h1,beginnormal_vertex:p1,bsdfs:m1,iridescence_fragment:g1,bumpmap_pars_fragment:v1,clipping_planes_fragment:_1,clipping_planes_pars_fragment:x1,clipping_planes_pars_vertex:y1,clipping_planes_vertex:S1,color_fragment:M1,color_pars_fragment:E1,color_pars_vertex:w1,color_vertex:T1,common:A1,cube_uv_reflection_fragment:R1,defaultnormal_vertex:C1,displacementmap_pars_vertex:b1,displacementmap_vertex:P1,emissivemap_fragment:L1,emissivemap_pars_fragment:D1,colorspace_fragment:N1,colorspace_pars_fragment:U1,envmap_fragment:I1,envmap_common_pars_fragment:F1,envmap_pars_fragment:O1,envmap_pars_vertex:k1,envmap_physical_pars_fragment:K1,envmap_vertex:B1,fog_vertex:z1,fog_pars_vertex:H1,fog_fragment:G1,fog_pars_fragment:V1,gradientmap_pars_fragment:W1,lightmap_fragment:j1,lightmap_pars_fragment:X1,lights_lambert_fragment:q1,lights_lambert_pars_fragment:$1,lights_pars_begin:Y1,lights_toon_fragment:Z1,lights_toon_pars_fragment:Q1,lights_phong_fragment:J1,lights_phong_pars_fragment:ew,lights_physical_fragment:tw,lights_physical_pars_fragment:nw,lights_fragment_begin:iw,lights_fragment_maps:rw,lights_fragment_end:sw,logdepthbuf_fragment:aw,logdepthbuf_pars_fragment:ow,logdepthbuf_pars_vertex:lw,logdepthbuf_vertex:cw,map_fragment:uw,map_pars_fragment:dw,map_particle_fragment:fw,map_particle_pars_fragment:hw,metalnessmap_fragment:pw,metalnessmap_pars_fragment:mw,morphcolor_vertex:gw,morphnormal_vertex:vw,morphtarget_pars_vertex:_w,morphtarget_vertex:xw,normal_fragment_begin:yw,normal_fragment_maps:Sw,normal_pars_fragment:Mw,normal_pars_vertex:Ew,normal_vertex:ww,normalmap_pars_fragment:Tw,clearcoat_normal_fragment_begin:Aw,clearcoat_normal_fragment_maps:Rw,clearcoat_pars_fragment:Cw,iridescence_pars_fragment:bw,opaque_fragment:Pw,packing:Lw,premultiplied_alpha_fragment:Dw,project_vertex:Nw,dithering_fragment:Uw,dithering_pars_fragment:Iw,roughnessmap_fragment:Fw,roughnessmap_pars_fragment:Ow,shadowmap_pars_fragment:kw,shadowmap_pars_vertex:Bw,shadowmap_vertex:zw,shadowmask_pars_fragment:Hw,skinbase_vertex:Gw,skinning_pars_vertex:Vw,skinning_vertex:Ww,skinnormal_vertex:jw,specularmap_fragment:Xw,specularmap_pars_fragment:qw,tonemapping_fragment:$w,tonemapping_pars_fragment:Yw,transmission_fragment:Kw,transmission_pars_fragment:Zw,uv_pars_fragment:Qw,uv_pars_vertex:Jw,uv_vertex:eT,worldpos_vertex:tT,background_vert:nT,background_frag:iT,backgroundCube_vert:rT,backgroundCube_frag:sT,cube_vert:aT,cube_frag:oT,depth_vert:lT,depth_frag:cT,distanceRGBA_vert:uT,distanceRGBA_frag:dT,equirect_vert:fT,equirect_frag:hT,linedashed_vert:pT,linedashed_frag:mT,meshbasic_vert:gT,meshbasic_frag:vT,meshlambert_vert:_T,meshlambert_frag:xT,meshmatcap_vert:yT,meshmatcap_frag:ST,meshnormal_vert:MT,meshnormal_frag:ET,meshphong_vert:wT,meshphong_frag:TT,meshphysical_vert:AT,meshphysical_frag:RT,meshtoon_vert:CT,meshtoon_frag:bT,points_vert:PT,points_frag:LT,shadow_vert:DT,shadow_frag:NT,sprite_vert:UT,sprite_frag:IT},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Zn={basic:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Qt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Qt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Qt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Qt([pe.points,pe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Qt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Qt([pe.common,pe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Qt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Qt([pe.sprite,pe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Qt([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Qt([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Zn.physical={uniforms:Qt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const sl={r:0,b:0,g:0};function FT(t,e,n,i,r,s,a){const o=new Ye(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function x(p,u){let v=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?_(o,l):g&&g.isColor&&(_(g,1),v=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ec)?(d===void 0&&(d=new at(new Mi(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Zs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=rt.getTransfer(g.colorSpace)!==ct,(f!==g||h!==g.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new at(new Qs(2,2),new ni({name:"BackgroundMaterial",uniforms:Zs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=rt.getTransfer(g.colorSpace)!==ct,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(sl,d_(t)),i.buffers.color.setClear(sl.r,sl.g,sl.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:x}}function OT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,d=!1;function f(L,G,$,ee,D){let k=!1;if(a){const z=_(ee,$,G);c!==z&&(c=z,m(c.object)),k=u(L,ee,$,D),k&&v(L,ee,$,D)}else{const z=G.wireframe===!0;(c.geometry!==ee.id||c.program!==$.id||c.wireframe!==z)&&(c.geometry=ee.id,c.program=$.id,c.wireframe=z,k=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(k||d)&&(d=!1,O(L,G,$,ee),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,G,$){const ee=$.wireframe===!0;let D=o[L.id];D===void 0&&(D={},o[L.id]=D);let k=D[G.id];k===void 0&&(k={},D[G.id]=k);let z=k[ee];return z===void 0&&(z=p(h()),k[ee]=z),z}function p(L){const G=[],$=[],ee=[];for(let D=0;D<r;D++)G[D]=0,$[D]=0,ee[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:ee,object:L,attributes:{},index:null}}function u(L,G,$,ee){const D=c.attributes,k=G.attributes;let z=0;const ie=$.getAttributes();for(const Z in ie)if(ie[Z].location>=0){const re=D[Z];let de=k[Z];if(de===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;z++}return c.attributesNum!==z||c.index!==ee}function v(L,G,$,ee){const D={},k=G.attributes;let z=0;const ie=$.getAttributes();for(const Z in ie)if(ie[Z].location>=0){let re=k[Z];re===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const de={};de.attribute=re,re&&re.data&&(de.data=re.data),D[Z]=de,z++}c.attributes=D,c.attributesNum=z,c.index=ee}function g(){const L=c.newAttributes;for(let G=0,$=L.length;G<$;G++)L[G]=0}function y(L){P(L,0)}function P(L,G){const $=c.newAttributes,ee=c.enabledAttributes,D=c.attributeDivisors;$[L]=1,ee[L]===0&&(t.enableVertexAttribArray(L),ee[L]=1),D[L]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),D[L]=G)}function R(){const L=c.newAttributes,G=c.enabledAttributes;for(let $=0,ee=G.length;$<ee;$++)G[$]!==L[$]&&(t.disableVertexAttribArray($),G[$]=0)}function C(L,G,$,ee,D,k,z){z===!0?t.vertexAttribIPointer(L,G,$,D,k):t.vertexAttribPointer(L,G,$,ee,D,k)}function O(L,G,$,ee){if(i.isWebGL2===!1&&(L.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const D=ee.attributes,k=$.getAttributes(),z=G.defaultAttributeValues;for(const ie in k){const Z=k[ie];if(Z.location>=0){let V=D[ie];if(V===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const re=V.normalized,de=V.itemSize,fe=n.get(V);if(fe===void 0)continue;const ye=fe.buffer,Ne=fe.type,be=fe.bytesPerElement,Ae=i.isWebGL2===!0&&(Ne===t.INT||Ne===t.UNSIGNED_INT||V.gpuType===q0);if(V.isInterleavedBufferAttribute){const Pe=V.data,B=Pe.stride,xt=V.offset;if(Pe.isInstancedInterleavedBuffer){for(let Le=0;Le<Z.locationSize;Le++)P(Z.location+Le,Pe.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Le=0;Le<Z.locationSize;Le++)y(Z.location+Le);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Le=0;Le<Z.locationSize;Le++)C(Z.location+Le,de/Z.locationSize,Ne,re,B*be,(xt+de/Z.locationSize*Le)*be,Ae)}else{if(V.isInstancedBufferAttribute){for(let Pe=0;Pe<Z.locationSize;Pe++)P(Z.location+Pe,V.meshPerAttribute);L.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Pe=0;Pe<Z.locationSize;Pe++)y(Z.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,ye);for(let Pe=0;Pe<Z.locationSize;Pe++)C(Z.location+Pe,de/Z.locationSize,Ne,re,de*be,de/Z.locationSize*Pe*be,Ae)}}else if(z!==void 0){const re=z[ie];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(Z.location,re);break;case 3:t.vertexAttrib3fv(Z.location,re);break;case 4:t.vertexAttrib4fv(Z.location,re);break;default:t.vertexAttrib1fv(Z.location,re)}}}}R()}function M(){J();for(const L in o){const G=o[L];for(const $ in G){const ee=G[$];for(const D in ee)x(ee[D].object),delete ee[D];delete G[$]}delete o[L]}}function T(L){if(o[L.id]===void 0)return;const G=o[L.id];for(const $ in G){const ee=G[$];for(const D in ee)x(ee[D].object),delete ee[D];delete G[$]}delete o[L.id]}function q(L){for(const G in o){const $=o[G];if($[L.id]===void 0)continue;const ee=$[L.id];for(const D in ee)x(ee[D].object),delete ee[D];delete $[L.id]}}function J(){ue(),d=!0,c!==l&&(c=l,m(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:J,resetDefaultState:ue,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:q,initAttributes:g,enableAttribute:y,disableUnusedAttributes:R}}function kT(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}function o(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let m,x;if(r)m=t,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<h;x++)this.render(d[x],f[x]);else{m.multiDrawArraysWEBGL(s,d,0,f,0,h);let x=0;for(let _=0;_<h;_++)x+=f[_];n.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function BT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,y=a||e.has("OES_texture_float"),P=g&&y,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:R}}function zT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new _r,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,g=v*4;let y=u.clippingState||null;l.value=y,y=d(x,h,g,m);for(let P=0;P!==g;++P)y[P]=n[P];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,x){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const u=m+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,y=m;g!==_;++g,y+=4)a.copy(f[g]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function HT(t){let e=new WeakMap;function n(a,o){return o===Fd?a.mapping=qs:o===Od&&(a.mapping=$s),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fd||o===Od)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new JE(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class p_ extends Jf{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Rs=4,Pm=[.125,.215,.35,.446,.526,.582],Mr=20,Cu=new p_,Lm=new Ye;let bu=null,Pu=0,Lu=0;const xr=(1+Math.sqrt(5))/2,ls=1/xr,Dm=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,xr,ls),new I(0,xr,-ls),new I(ls,0,xr),new I(-ls,0,xr),new I(xr,ls,0),new I(-xr,ls,0)];class Hd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Pu,Lu),e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:lo,format:jn,colorSpace:ii,depthBuffer:!1},r=Nm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GT(s)),this._blurMaterial=VT(s,e,n)}return r}_compileMaterial(e){const n=new at(this._lodPlanes[0],e);this._renderer.compile(n,Cu)}_sceneToCubeUV(e,n,i,r){const o=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Lm),d.toneMapping=Zi,d.autoClear=!1;const m=new Qf({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new at(new Mi,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Lm),_=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;al(r,v*g,u>2?g:0,g,g),d.setRenderTarget(r),_&&d.render(x,o),d.render(e,o)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qs||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Um());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;al(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Cu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dm[(r-1)%Dm.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new at(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mr-1),_=s/x,p=isFinite(s)?1+Math.floor(d*_):Mr;p>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mr}`);const u=[];let v=0;for(let C=0;C<Mr;++C){const O=C/_,M=Math.exp(-O*O/2);u.push(M),C===0?v+=M:C<p&&(v+=2*M)}for(let C=0;C<u.length;C++)u[C]=u[C]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const y=this._sizeLods[r],P=3*y*(r>g-Rs?r-g+Rs:0),R=4*(this._cubeSize-y);al(n,P,R,3*y,2*y),l.setRenderTarget(n),l.render(f,Cu)}}function GT(t){const e=[],n=[],i=[];let r=t;const s=t-Rs+1+Pm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Rs?l=Pm[a-t+Rs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,x=6,_=3,p=2,u=1,v=new Float32Array(_*x*m),g=new Float32Array(p*x*m),y=new Float32Array(u*x*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,O=R>2?0:-1,M=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];v.set(M,_*x*R),g.set(h,p*x*R);const T=[R,R,R,R,R,R];y.set(T,u*x*R)}const P=new Vr;P.setAttribute("position",new ti(v,_)),P.setAttribute("uv",new ti(g,p)),P.setAttribute("faceIndex",new ti(y,u)),e.push(P),r>Rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Nm(t,e,n){const i=new nr(t,e,n);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function al(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function VT(t,e,n){const i=new Float32Array(Mr),r=new I(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:th(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Um(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Im(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function th(){return`

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
	`}function WT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fd||l===Od,d=l===qs||l===$s;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Hd(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new Hd(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function jT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function XT(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const _=m[x];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let g=0,y=v.length;g<y;g+=3){const P=v[g+0],R=v[g+1],C=v[g+2];h.push(P,R,R,C,C,P)}}else if(x!==void 0){const v=x.array;_=x.version;for(let g=0,y=v.length/3-1;g<y;g+=3){const P=g+0,R=g+1,C=g+2;h.push(P,R,R,C,C,P)}}else return;const p=new(i_(h)?u_:c_)(h,1);p.version=_;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function qT(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,x){t.drawElements(s,x,o,m*l),n.update(x,s,1)}function f(m,x,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,o,m*l,_),n.update(x,s,_)}function h(m,x,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,o,m,0,_);let u=0;for(let v=0;v<_;v++)u+=x[v];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function $T(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function YT(t,e){return t[0]-e[0]}function KT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ZT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(d);if(p===void 0||p.count!==_){let G=function(){ue.dispose(),s.delete(d),d.removeEventListener("dispose",G)};var m=G;p!==void 0&&p.texture.dispose();const g=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),P===!0&&(M=3);let T=d.attributes.position.count*M,q=1;T>e.maxTextureSize&&(q=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const J=new Float32Array(T*q*4*_),ue=new a_(J,T,q,_);ue.type=zi,ue.needsUpdate=!0;const L=M*4;for(let $=0;$<_;$++){const ee=R[$],D=C[$],k=O[$],z=T*q*4*$;for(let ie=0;ie<ee.count;ie++){const Z=ie*L;g===!0&&(a.fromBufferAttribute(ee,ie),J[z+Z+0]=a.x,J[z+Z+1]=a.y,J[z+Z+2]=a.z,J[z+Z+3]=0),y===!0&&(a.fromBufferAttribute(D,ie),J[z+Z+4]=a.x,J[z+Z+5]=a.y,J[z+Z+6]=a.z,J[z+Z+7]=0),P===!0&&(a.fromBufferAttribute(k,ie),J[z+Z+8]=a.x,J[z+Z+9]=a.y,J[z+Z+10]=a.z,J[z+Z+11]=k.itemSize===4?a.w:1)}}p={count:_,texture:ue,size:new Qe(T,q)},s.set(d,p),d.addEventListener("dispose",G)}let u=0;for(let g=0;g<h.length;g++)u+=h[g];const v=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let _=i[d.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];i[d.id]=_}for(let y=0;y<x;y++){const P=_[y];P[0]=y,P[1]=h[y]}_.sort(KT);for(let y=0;y<8;y++)y<x&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(YT);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const P=o[y],R=P[0],C=P[1];R!==Number.MAX_SAFE_INTEGER&&C?(p&&d.getAttribute("morphTarget"+y)!==p[R]&&d.setAttribute("morphTarget"+y,p[R]),u&&d.getAttribute("morphNormal"+y)!==u[R]&&d.setAttribute("morphNormal"+y,u[R]),r[y]=C,v+=C):(p&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),u&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const g=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function QT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class m_ extends fn{constructor(e,n,i,r,s,a,o,l,c,d){if(d=d!==void 0?d:Lr,d!==Lr&&d!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Lr&&(i=Bi),i===void 0&&d===Ks&&(i=Pr),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const g_=new fn,v_=new m_(1,1);v_.compareFunction=n_;const __=new a_,x_=new FE,y_=new f_,Fm=[],Om=[],km=new Float32Array(16),Bm=new Float32Array(9),zm=new Float32Array(4);function sa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Fm[r];if(s===void 0&&(s=new Float32Array(r),Fm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ac(t,e){let n=Om[e];n===void 0&&(n=new Int32Array(e),Om[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function JT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function e2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function i2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;zm.set(i),t.uniformMatrix2fv(this.addr,!1,zm),Dt(n,i)}}function r2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Bm.set(i),t.uniformMatrix3fv(this.addr,!1,Bm),Dt(n,i)}}function s2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;km.set(i),t.uniformMatrix4fv(this.addr,!1,km),Dt(n,i)}}function a2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function c2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function u2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function d2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function f2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function p2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?v_:g_;n.setTexture2D(e||s,r)}function m2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x_,r)}function g2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||y_,r)}function v2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||__,r)}function _2(t){switch(t){case 5126:return JT;case 35664:return e2;case 35665:return t2;case 35666:return n2;case 35674:return i2;case 35675:return r2;case 35676:return s2;case 5124:case 35670:return a2;case 35667:case 35671:return o2;case 35668:case 35672:return l2;case 35669:case 35673:return c2;case 5125:return u2;case 36294:return d2;case 36295:return f2;case 36296:return h2;case 35678:case 36198:case 36298:case 36306:case 35682:return p2;case 35679:case 36299:case 36307:return m2;case 35680:case 36300:case 36308:case 36293:return g2;case 36289:case 36303:case 36311:case 36292:return v2}}function x2(t,e){t.uniform1fv(this.addr,e)}function y2(t,e){const n=sa(e,this.size,2);t.uniform2fv(this.addr,n)}function S2(t,e){const n=sa(e,this.size,3);t.uniform3fv(this.addr,n)}function M2(t,e){const n=sa(e,this.size,4);t.uniform4fv(this.addr,n)}function E2(t,e){const n=sa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function w2(t,e){const n=sa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function T2(t,e){const n=sa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function A2(t,e){t.uniform1iv(this.addr,e)}function R2(t,e){t.uniform2iv(this.addr,e)}function C2(t,e){t.uniform3iv(this.addr,e)}function b2(t,e){t.uniform4iv(this.addr,e)}function P2(t,e){t.uniform1uiv(this.addr,e)}function L2(t,e){t.uniform2uiv(this.addr,e)}function D2(t,e){t.uniform3uiv(this.addr,e)}function N2(t,e){t.uniform4uiv(this.addr,e)}function U2(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||g_,s[a])}function I2(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||x_,s[a])}function F2(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||y_,s[a])}function O2(t,e,n){const i=this.cache,r=e.length,s=Ac(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||__,s[a])}function k2(t){switch(t){case 5126:return x2;case 35664:return y2;case 35665:return S2;case 35666:return M2;case 35674:return E2;case 35675:return w2;case 35676:return T2;case 5124:case 35670:return A2;case 35667:case 35671:return R2;case 35668:case 35672:return C2;case 35669:case 35673:return b2;case 5125:return P2;case 36294:return L2;case 36295:return D2;case 36296:return N2;case 35678:case 36198:case 36298:case 36306:case 35682:return U2;case 35679:case 36299:case 36307:return I2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return O2}}class B2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_2(n.type)}}class z2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k2(n.type)}}class H2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Du=/(\w+)(\])?(\[|\.)?/g;function Hm(t,e){t.seq.push(e),t.map[e.id]=e}function G2(t,e,n){const i=t.name,r=i.length;for(Du.lastIndex=0;;){const s=Du.exec(i),a=Du.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Hm(n,c===void 0?new B2(o,t,e):new z2(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new H2(o),Hm(n,f)),n=f}}}class Ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);G2(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Gm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const V2=37297;let W2=0;function j2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function X2(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===Jl&&n===Ql?i="LinearDisplayP3ToLinearSRGB":e===Ql&&n===Jl&&(i="LinearSRGBToLinearDisplayP3"),t){case ii:case wc:return[i,"LinearTransferOETF"];case bt:case $f:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Vm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+j2(t.getShaderSource(e),a)}else return r}function q2(t,e){const n=X2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function $2(t,e){let n;switch(e){case qM:n="Linear";break;case $M:n="Reinhard";break;case YM:n="OptimizedCineon";break;case j0:n="ACESFilmic";break;case ZM:n="AgX";break;case KM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Y2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function K2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cs).join(`
`)}function Z2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Q2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Cs(t){return t!==""}function Wm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const J2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(t){return t.replace(J2,tA)}const eA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tA(t,e){let n=je[e];if(n===void 0){const i=eA.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gd(n)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(t){return t.replace(nA,iA)}function iA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===G0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===V0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function sA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qs:case $s:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function aA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function oA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case W0:e="ENVMAP_BLENDING_MULTIPLY";break;case jM:e="ENVMAP_BLENDING_MIX";break;case XM:e="ENVMAP_BLENDING_ADD";break}return e}function lA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function cA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=rA(n),c=sA(n),d=aA(n),f=oA(n),h=lA(n),m=n.isWebGL2?"":Y2(n),x=K2(n),_=Z2(s),p=r.createProgram();let u,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Cs).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Cs).join(`
`),v.length>0&&(v+=`
`)):(u=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),v=[m,qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?je.tonemapping_pars_fragment:"",n.toneMapping!==Zi?$2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,q2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Cs).join(`
`)),a=Gd(a),a=Wm(a,n),a=jm(a,n),o=Gd(o),o=Wm(o,n),o=jm(o,n),a=Xm(a),o=Xm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=g+u+a,P=g+v+o,R=Gm(r,r.VERTEX_SHADER,y),C=Gm(r,r.FRAGMENT_SHADER,P);r.attachShader(p,R),r.attachShader(p,C),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function O(J){if(t.debug.checkShaderErrors){const ue=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(R).trim(),G=r.getShaderInfoLog(C).trim();let $=!0,ee=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,R,C);else{const D=Vm(r,R,"vertex"),k=Vm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ue+`
`+D+`
`+k)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(L===""||G==="")&&(ee=!1);ee&&(J.diagnostics={runnable:$,programLog:ue,vertexShader:{log:L,prefix:u},fragmentShader:{log:G,prefix:v}})}r.deleteShader(R),r.deleteShader(C),M=new Ml(r,p),T=Q2(r,p)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(p,V2)),q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=W2++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=C,this}let uA=0;class dA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fA(e),n.set(e,i)),i}}class fA{constructor(e){this.id=uA++,this.code=e,this.usedTimes=0}}function hA(t,e,n,i,r,s,a){const o=new Zf,l=new dA,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,T,q,J,ue){const L=J.fog,G=ue.geometry,$=M.isMeshStandardMaterial?J.environment:null,ee=(M.isMeshStandardMaterial?n:e).get(M.envMap||$),D=ee&&ee.mapping===Ec?ee.image.height:null,k=x[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ie=z!==void 0?z.length:0;let Z=0;G.morphAttributes.position!==void 0&&(Z=1),G.morphAttributes.normal!==void 0&&(Z=2),G.morphAttributes.color!==void 0&&(Z=3);let V,re,de,fe;if(k){const st=Zn[k];V=st.vertexShader,re=st.fragmentShader}else V=M.vertexShader,re=M.fragmentShader,l.update(M),de=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const ye=t.getRenderTarget(),Ne=ue.isInstancedMesh===!0,be=ue.isBatchedMesh===!0,Ae=!!M.map,Pe=!!M.matcap,B=!!ee,xt=!!M.aoMap,Le=!!M.lightMap,Ie=!!M.bumpMap,Te=!!M.normalMap,tt=!!M.displacementMap,Ue=!!M.emissiveMap,A=!!M.metalnessMap,S=!!M.roughnessMap,F=M.anisotropy>0,oe=M.clearcoat>0,se=M.iridescence>0,le=M.sheen>0,Me=M.transmission>0,he=F&&!!M.anisotropyMap,ge=oe&&!!M.clearcoatMap,Re=oe&&!!M.clearcoatNormalMap,ke=oe&&!!M.clearcoatRoughnessMap,j=se&&!!M.iridescenceMap,Ee=se&&!!M.iridescenceThicknessMap,ve=le&&!!M.sheenColorMap,Ce=le&&!!M.sheenRoughnessMap,we=!!M.specularMap,me=!!M.specularColorMap,Oe=!!M.specularIntensityMap,Be=Me&&!!M.transmissionMap,Y=Me&&!!M.thicknessMap,ne=!!M.gradientMap,N=!!M.alphaMap,b=M.alphaTest>0,te=!!M.alphaHash,ae=!!M.extensions,_e=!!G.attributes.uv1,K=!!G.attributes.uv2,He=!!G.attributes.uv3;let Ze=Zi;return M.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ze=t.toneMapping),{isWebGL2:d,shaderID:k,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:re,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:be,instancing:Ne,instancingColor:Ne&&ue.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:ii,map:Ae,matcap:Pe,envMap:B,envMapMode:B&&ee.mapping,envMapCubeUVHeight:D,aoMap:xt,lightMap:Le,bumpMap:Ie,normalMap:Te,displacementMap:h&&tt,emissiveMap:Ue,normalMapObjectSpace:Te&&M.normalMapType===cE,normalMapTangentSpace:Te&&M.normalMapType===t_,metalnessMap:A,roughnessMap:S,anisotropy:F,anisotropyMap:he,clearcoat:oe,clearcoatMap:ge,clearcoatNormalMap:Re,clearcoatRoughnessMap:ke,iridescence:se,iridescenceMap:j,iridescenceThicknessMap:Ee,sheen:le,sheenColorMap:ve,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:me,specularIntensityMap:Oe,transmission:Me,transmissionMap:Be,thicknessMap:Y,gradientMap:ne,opaque:M.transparent===!1&&M.blending===ks,alphaMap:N,alphaTest:b,alphaHash:te,combine:M.combine,mapUv:Ae&&_(M.map.channel),aoMapUv:xt&&_(M.aoMap.channel),lightMapUv:Le&&_(M.lightMap.channel),bumpMapUv:Ie&&_(M.bumpMap.channel),normalMapUv:Te&&_(M.normalMap.channel),displacementMapUv:tt&&_(M.displacementMap.channel),emissiveMapUv:Ue&&_(M.emissiveMap.channel),metalnessMapUv:A&&_(M.metalnessMap.channel),roughnessMapUv:S&&_(M.roughnessMap.channel),anisotropyMapUv:he&&_(M.anisotropyMap.channel),clearcoatMapUv:ge&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Re&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:me&&_(M.specularColorMap.channel),specularIntensityMapUv:Oe&&_(M.specularIntensityMap.channel),transmissionMapUv:Be&&_(M.transmissionMap.channel),thicknessMapUv:Y&&_(M.thicknessMap.channel),alphaMapUv:N&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Te||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:_e,vertexUv2s:K,vertexUv3s:He,pointsUvs:ue.isPoints===!0&&!!G.attributes.uv&&(Ae||N),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ue.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hi,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const q in M.defines)T.push(q),T.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(v(T,M),g(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function g(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){const T=x[M.type];let q;if(T){const J=Zn[T];q=YE.clone(J.uniforms)}else q=M.uniforms;return q}function P(M,T){let q;for(let J=0,ue=c.length;J<ue;J++){const L=c[J];if(L.cacheKey===T){q=L,++q.usedTimes;break}}return q===void 0&&(q=new cA(t,T,M,s),c.push(q)),q}function R(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:P,releaseProgram:R,releaseShaderCache:C,programs:c,dispose:O}}function pA(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function mA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $m(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ym(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,m,x,_,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:_,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function o(f,h,m,x,_,p){const u=a(f,h,m,x,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,x,_,p){const u=a(f,h,m,x,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||mA),i.length>1&&i.sort(h||$m),r.length>1&&r.sort(h||$m)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function gA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ym,t.set(i,[a])):r>=s.length?(a=new Ym,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function vA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ye};break;case"SpotLight":n={position:new I,direction:new I,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function _A(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xA=0;function yA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SA(t,e){const n=new vA,i=_A(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new I);const s=new I,a=new Rt,o=new Rt;function l(d,f){let h=0,m=0,x=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let _=0,p=0,u=0,v=0,g=0,y=0,P=0,R=0,C=0,O=0,M=0;d.sort(yA);const T=f===!0?Math.PI:1;for(let J=0,ue=d.length;J<ue;J++){const L=d[J],G=L.color,$=L.intensity,ee=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*$*T,m+=G.g*$*T,x+=G.b*$*T;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],$);M++}else if(L.isDirectionalLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const z=L.shadow,ie=i.get(L);ie.shadowBias=z.bias,ie.shadowNormalBias=z.normalBias,ie.shadowRadius=z.radius,ie.shadowMapSize=z.mapSize,r.directionalShadow[_]=ie,r.directionalShadowMap[_]=D,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=k,_++}else if(L.isSpotLight){const k=n.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(G).multiplyScalar($*T),k.distance=ee,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[u]=k;const z=L.shadow;if(L.map&&(r.spotLightMap[C]=L.map,C++,z.updateMatrices(L),L.castShadow&&O++),r.spotLightMatrix[u]=z.matrix,L.castShadow){const ie=i.get(L);ie.shadowBias=z.bias,ie.shadowNormalBias=z.normalBias,ie.shadowRadius=z.radius,ie.shadowMapSize=z.mapSize,r.spotShadow[u]=ie,r.spotShadowMap[u]=D,R++}u++}else if(L.isRectAreaLight){const k=n.get(L);k.color.copy(G).multiplyScalar($),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=k,v++}else if(L.isPointLight){const k=n.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*T),k.distance=L.distance,k.decay=L.decay,L.castShadow){const z=L.shadow,ie=i.get(L);ie.shadowBias=z.bias,ie.shadowNormalBias=z.normalBias,ie.shadowRadius=z.radius,ie.shadowMapSize=z.mapSize,ie.shadowCameraNear=z.camera.near,ie.shadowCameraFar=z.camera.far,r.pointShadow[p]=ie,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=L.shadow.matrix,P++}r.point[p]=k,p++}else if(L.isHemisphereLight){const k=n.get(L);k.skyColor.copy(L.color).multiplyScalar($*T),k.groundColor.copy(L.groundColor).multiplyScalar($*T),r.hemi[g]=k,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const q=r.hash;(q.directionalLength!==_||q.pointLength!==p||q.spotLength!==u||q.rectAreaLength!==v||q.hemiLength!==g||q.numDirectionalShadows!==y||q.numPointShadows!==P||q.numSpotShadows!==R||q.numSpotMaps!==C||q.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+C-O,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=M,q.directionalLength=_,q.pointLength=p,q.spotLength=u,q.rectAreaLength=v,q.hemiLength=g,q.numDirectionalShadows=y,q.numPointShadows=P,q.numSpotShadows=R,q.numSpotMaps=C,q.numLightProbes=M,r.version=xA++)}function c(d,f){let h=0,m=0,x=0,_=0,p=0;const u=f.matrixWorldInverse;for(let v=0,g=d.length;v<g;v++){const y=d[v];if(y.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),h++}else if(y.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),x++}else if(y.isRectAreaLight){const P=r.rectArea[_];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(u),o.identity(),a.copy(y.matrixWorld),a.premultiply(u),o.extractRotation(a),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Km(t,e){const n=new SA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function MA(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Km(t,e),n.set(s,[l])):a>=o.length?(l=new Km(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class EA extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wA extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AA=`uniform sampler2D shadow_pass;
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
}`;function RA(t,e,n){let i=new eh;const r=new Qe,s=new Qe,a=new ut,o=new EA({depthPacking:lE}),l=new wA,c={},d=n.maxTextureSize,f={[tr]:rn,[rn]:tr,[hi]:hi},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:TA,fragmentShader:AA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Vr;x.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=G0;let u=this.type;this.render=function(R,C,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const M=t.getRenderTarget(),T=t.getActiveCubeFace(),q=t.getActiveMipmapLevel(),J=t.state;J.setBlending(Ki),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ue=u!==ui&&this.type===ui,L=u===ui&&this.type!==ui;for(let G=0,$=R.length;G<$;G++){const ee=R[G],D=ee.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const k=D.getFrameExtents();if(r.multiply(k),s.copy(D.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,D.mapSize.y=s.y)),D.map===null||ue===!0||L===!0){const ie=this.type!==ui?{minFilter:tn,magFilter:tn}:{};D.map!==null&&D.map.dispose(),D.map=new nr(r.x,r.y,ie),D.map.texture.name=ee.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const z=D.getViewportCount();for(let ie=0;ie<z;ie++){const Z=D.getViewport(ie);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),J.viewport(a),D.updateMatrices(ee,ie),i=D.getFrustum(),y(C,O,D.camera,ee,this.type)}D.isPointLightShadow!==!0&&this.type===ui&&v(D,O),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(M,T,q)};function v(R,C){const O=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new nr(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(C,null,O,h,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(C,null,O,m,_,null)}function g(R,C,O,M){let T=null;const q=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(q!==void 0)T=q;else if(T=O.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const J=T.uuid,ue=C.uuid;let L=c[J];L===void 0&&(L={},c[J]=L);let G=L[ue];G===void 0&&(G=T.clone(),L[ue]=G,C.addEventListener("dispose",P)),T=G}if(T.visible=C.visible,T.wireframe=C.wireframe,M===ui?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const J=t.properties.get(T);J.light=O}return T}function y(R,C,O,M,T){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===ui)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const ue=e.update(R),L=R.material;if(Array.isArray(L)){const G=ue.groups;for(let $=0,ee=G.length;$<ee;$++){const D=G[$],k=L[D.materialIndex];if(k&&k.visible){const z=g(R,k,M,T);R.onBeforeShadow(t,R,C,O,ue,z,D),t.renderBufferDirect(O,null,ue,z,R,D),R.onAfterShadow(t,R,C,O,ue,z,D)}}}else if(L.visible){const G=g(R,L,M,T);R.onBeforeShadow(t,R,C,O,ue,G,null),t.renderBufferDirect(O,null,ue,G,R,null),R.onAfterShadow(t,R,C,O,ue,G,null)}}const J=R.children;for(let ue=0,L=J.length;ue<L;ue++)y(J[ue],C,O,M,T)}function P(R){R.target.removeEventListener("dispose",P);for(const O in c){const M=c[O],T=R.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function CA(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const te=new ut;let ae=null;const _e=new ut(0,0,0,0);return{setMask:function(K){ae!==K&&!b&&(t.colorMask(K,K,K,K),ae=K)},setLocked:function(K){b=K},setClear:function(K,He,Ze,it,st){st===!0&&(K*=it,He*=it,Ze*=it),te.set(K,He,Ze,it),_e.equals(te)===!1&&(t.clearColor(K,He,Ze,it),_e.copy(te))},reset:function(){b=!1,ae=null,_e.set(-1,0,0,0)}}}function s(){let b=!1,te=null,ae=null,_e=null;return{setTest:function(K){K?be(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(K){te!==K&&!b&&(t.depthMask(K),te=K)},setFunc:function(K){if(ae!==K){switch(K){case kM:t.depthFunc(t.NEVER);break;case BM:t.depthFunc(t.ALWAYS);break;case zM:t.depthFunc(t.LESS);break;case Yl:t.depthFunc(t.LEQUAL);break;case HM:t.depthFunc(t.EQUAL);break;case GM:t.depthFunc(t.GEQUAL);break;case VM:t.depthFunc(t.GREATER);break;case WM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=K}},setLocked:function(K){b=K},setClear:function(K){_e!==K&&(t.clearDepth(K),_e=K)},reset:function(){b=!1,te=null,ae=null,_e=null}}}function a(){let b=!1,te=null,ae=null,_e=null,K=null,He=null,Ze=null,it=null,st=null;return{setTest:function(Ge){b||(Ge?be(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(Ge){te!==Ge&&!b&&(t.stencilMask(Ge),te=Ge)},setFunc:function(Ge,yt,zt){(ae!==Ge||_e!==yt||K!==zt)&&(t.stencilFunc(Ge,yt,zt),ae=Ge,_e=yt,K=zt)},setOp:function(Ge,yt,zt){(He!==Ge||Ze!==yt||it!==zt)&&(t.stencilOp(Ge,yt,zt),He=Ge,Ze=yt,it=zt)},setLocked:function(Ge){b=Ge},setClear:function(Ge){st!==Ge&&(t.clearStencil(Ge),st=Ge)},reset:function(){b=!1,te=null,ae=null,_e=null,K=null,He=null,Ze=null,it=null,st=null}}}const o=new r,l=new s,c=new a,d=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,_=[],p=null,u=!1,v=null,g=null,y=null,P=null,R=null,C=null,O=null,M=new Ye(0,0,0),T=0,q=!1,J=null,ue=null,L=null,G=null,$=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,k=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=k>=2);let ie=null,Z={};const V=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),de=new ut().fromArray(V),fe=new ut().fromArray(re);function ye(b,te,ae,_e){const K=new Uint8Array(4),He=t.createTexture();t.bindTexture(b,He),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ze=0;Ze<ae;Ze++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(te,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,K):t.texImage2D(te+Ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,K);return He}const Ne={};Ne[t.TEXTURE_2D]=ye(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ne[t.TEXTURE_2D_ARRAY]=ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(t.DEPTH_TEST),l.setFunc(Yl),Ue(!1),A(Lp),be(t.CULL_FACE),Te(Ki);function be(b){h[b]!==!0&&(t.enable(b),h[b]=!0)}function Ae(b){h[b]!==!1&&(t.disable(b),h[b]=!1)}function Pe(b,te){return m[b]!==te?(t.bindFramebuffer(b,te),m[b]=te,i&&(b===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=te),b===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=te)),!0):!1}function B(b,te){let ae=_,_e=!1;if(b)if(ae=x.get(te),ae===void 0&&(ae=[],x.set(te,ae)),b.isWebGLMultipleRenderTargets){const K=b.texture;if(ae.length!==K.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let He=0,Ze=K.length;He<Ze;He++)ae[He]=t.COLOR_ATTACHMENT0+He;ae.length=K.length,_e=!0}}else ae[0]!==t.COLOR_ATTACHMENT0&&(ae[0]=t.COLOR_ATTACHMENT0,_e=!0);else ae[0]!==t.BACK&&(ae[0]=t.BACK,_e=!0);_e&&(n.isWebGL2?t.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function xt(b){return p!==b?(t.useProgram(b),p=b,!0):!1}const Le={[Sr]:t.FUNC_ADD,[EM]:t.FUNC_SUBTRACT,[wM]:t.FUNC_REVERSE_SUBTRACT};if(i)Le[Ip]=t.MIN,Le[Fp]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(Le[Ip]=b.MIN_EXT,Le[Fp]=b.MAX_EXT)}const Ie={[TM]:t.ZERO,[AM]:t.ONE,[RM]:t.SRC_COLOR,[Ud]:t.SRC_ALPHA,[NM]:t.SRC_ALPHA_SATURATE,[LM]:t.DST_COLOR,[bM]:t.DST_ALPHA,[CM]:t.ONE_MINUS_SRC_COLOR,[Id]:t.ONE_MINUS_SRC_ALPHA,[DM]:t.ONE_MINUS_DST_COLOR,[PM]:t.ONE_MINUS_DST_ALPHA,[UM]:t.CONSTANT_COLOR,[IM]:t.ONE_MINUS_CONSTANT_COLOR,[FM]:t.CONSTANT_ALPHA,[OM]:t.ONE_MINUS_CONSTANT_ALPHA};function Te(b,te,ae,_e,K,He,Ze,it,st,Ge){if(b===Ki){u===!0&&(Ae(t.BLEND),u=!1);return}if(u===!1&&(be(t.BLEND),u=!0),b!==MM){if(b!==v||Ge!==q){if((g!==Sr||R!==Sr)&&(t.blendEquation(t.FUNC_ADD),g=Sr,R=Sr),Ge)switch(b){case ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFunc(t.ONE,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Up:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Up:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}y=null,P=null,C=null,O=null,M.set(0,0,0),T=0,v=b,q=Ge}return}K=K||te,He=He||ae,Ze=Ze||_e,(te!==g||K!==R)&&(t.blendEquationSeparate(Le[te],Le[K]),g=te,R=K),(ae!==y||_e!==P||He!==C||Ze!==O)&&(t.blendFuncSeparate(Ie[ae],Ie[_e],Ie[He],Ie[Ze]),y=ae,P=_e,C=He,O=Ze),(it.equals(M)===!1||st!==T)&&(t.blendColor(it.r,it.g,it.b,st),M.copy(it),T=st),v=b,q=!1}function tt(b,te){b.side===hi?Ae(t.CULL_FACE):be(t.CULL_FACE);let ae=b.side===rn;te&&(ae=!ae),Ue(ae),b.blending===ks&&b.transparent===!1?Te(Ki):Te(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),o.setMask(b.colorWrite);const _e=b.stencilWrite;c.setTest(_e),_e&&(c.setMask(b.stencilWriteMask),c.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),c.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),F(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?be(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(b){J!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),J=b)}function A(b){b!==yM?(be(t.CULL_FACE),b!==ue&&(b===Lp?t.cullFace(t.BACK):b===SM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),ue=b}function S(b){b!==L&&(D&&t.lineWidth(b),L=b)}function F(b,te,ae){b?(be(t.POLYGON_OFFSET_FILL),(G!==te||$!==ae)&&(t.polygonOffset(te,ae),G=te,$=ae)):Ae(t.POLYGON_OFFSET_FILL)}function oe(b){b?be(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function se(b){b===void 0&&(b=t.TEXTURE0+ee-1),ie!==b&&(t.activeTexture(b),ie=b)}function le(b,te,ae){ae===void 0&&(ie===null?ae=t.TEXTURE0+ee-1:ae=ie);let _e=Z[ae];_e===void 0&&(_e={type:void 0,texture:void 0},Z[ae]=_e),(_e.type!==b||_e.texture!==te)&&(ie!==ae&&(t.activeTexture(ae),ie=ae),t.bindTexture(b,te||Ne[b]),_e.type=b,_e.texture=te)}function Me(){const b=Z[ie];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function j(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ve(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function me(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Oe(b){de.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),de.copy(b))}function Be(b){fe.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),fe.copy(b))}function Y(b,te){let ae=f.get(te);ae===void 0&&(ae=new WeakMap,f.set(te,ae));let _e=ae.get(b);_e===void 0&&(_e=t.getUniformBlockIndex(te,b.name),ae.set(b,_e))}function ne(b,te){const _e=f.get(te).get(b);d.get(te)!==_e&&(t.uniformBlockBinding(te,_e,b.__bindingPointIndex),d.set(te,_e))}function N(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ie=null,Z={},m={},x=new WeakMap,_=[],p=null,u=!1,v=null,g=null,y=null,P=null,R=null,C=null,O=null,M=new Ye(0,0,0),T=0,q=!1,J=null,ue=null,L=null,G=null,$=null,de.set(0,0,t.canvas.width,t.canvas.height),fe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:be,disable:Ae,bindFramebuffer:Pe,drawBuffers:B,useProgram:xt,setBlending:Te,setMaterial:tt,setFlipSided:Ue,setCullFace:A,setLineWidth:S,setPolygonOffset:F,setScissorTest:oe,activeTexture:se,bindTexture:le,unbindTexture:Me,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:we,texImage3D:me,updateUBOMapping:Y,uniformBlockBinding:ne,texStorage2D:ve,texStorage3D:Ce,texSubImage2D:Re,texSubImage3D:ke,compressedTexSubImage2D:j,compressedTexSubImage3D:Ee,scissor:Oe,viewport:Be,reset:N}}function bA(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return m?new OffscreenCanvas(A,S):nc("canvas")}function _(A,S,F,oe){let se=1;if((A.width>oe||A.height>oe)&&(se=oe/Math.max(A.width,A.height)),se<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const le=S?tc:Math.floor,Me=le(se*A.width),he=le(se*A.height);f===void 0&&(f=x(Me,he));const ge=F?x(Me,he):f;return ge.width=Me,ge.height=he,ge.getContext("2d").drawImage(A,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+he+")."),ge}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return zd(A.width)&&zd(A.height)}function u(A){return o?!1:A.wrapS!==Wn||A.wrapT!==Wn||A.minFilter!==tn&&A.minFilter!==bn}function v(A,S){return A.generateMipmaps&&S&&A.minFilter!==tn&&A.minFilter!==bn}function g(A){t.generateMipmap(A)}function y(A,S,F,oe,se=!1){if(o===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=S;if(S===t.RED&&(F===t.FLOAT&&(le=t.R32F),F===t.HALF_FLOAT&&(le=t.R16F),F===t.UNSIGNED_BYTE&&(le=t.R8)),S===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(le=t.R8UI),F===t.UNSIGNED_SHORT&&(le=t.R16UI),F===t.UNSIGNED_INT&&(le=t.R32UI),F===t.BYTE&&(le=t.R8I),F===t.SHORT&&(le=t.R16I),F===t.INT&&(le=t.R32I)),S===t.RG&&(F===t.FLOAT&&(le=t.RG32F),F===t.HALF_FLOAT&&(le=t.RG16F),F===t.UNSIGNED_BYTE&&(le=t.RG8)),S===t.RGBA){const Me=se?Zl:rt.getTransfer(oe);F===t.FLOAT&&(le=t.RGBA32F),F===t.HALF_FLOAT&&(le=t.RGBA16F),F===t.UNSIGNED_BYTE&&(le=Me===ct?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)}return(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function P(A,S,F){return v(A,F)===!0||A.isFramebufferTexture&&A.minFilter!==tn&&A.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){return A===tn||A===Op||A===su?t.NEAREST:t.LINEAR}function C(A){const S=A.target;S.removeEventListener("dispose",C),M(S),S.isVideoTexture&&d.delete(S)}function O(A){const S=A.target;S.removeEventListener("dispose",O),q(S)}function M(A){const S=i.get(A);if(S.__webglInit===void 0)return;const F=A.source,oe=h.get(F);if(oe){const se=oe[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(A),Object.keys(oe).length===0&&h.delete(F)}i.remove(A)}function T(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const F=A.source,oe=h.get(F);delete oe[S.__cacheKey],a.memory.textures--}function q(A){const S=A.texture,F=i.get(A),oe=i.get(S);if(oe.__webglTexture!==void 0&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(F.__webglFramebuffer[se]))for(let le=0;le<F.__webglFramebuffer[se].length;le++)t.deleteFramebuffer(F.__webglFramebuffer[se][le]);else t.deleteFramebuffer(F.__webglFramebuffer[se]);F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer[se])}else{if(Array.isArray(F.__webglFramebuffer))for(let se=0;se<F.__webglFramebuffer.length;se++)t.deleteFramebuffer(F.__webglFramebuffer[se]);else t.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&t.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&t.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let se=0;se<F.__webglColorRenderbuffer.length;se++)F.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(F.__webglColorRenderbuffer[se]);F.__webglDepthRenderbuffer&&t.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let se=0,le=S.length;se<le;se++){const Me=i.get(S[se]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(S[se])}i.remove(S),i.remove(A)}let J=0;function ue(){J=0}function L(){const A=J;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),J+=1,A}function G(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function $(A,S){const F=i.get(A);if(A.isVideoTexture&&tt(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const oe=A.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(F,A,S);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+S)}function ee(A,S){const F=i.get(A);if(A.version>0&&F.__version!==A.version){de(F,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+S)}function D(A,S){const F=i.get(A);if(A.version>0&&F.__version!==A.version){de(F,A,S);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+S)}function k(A,S){const F=i.get(A);if(A.version>0&&F.__version!==A.version){fe(F,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+S)}const z={[Kl]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[kd]:t.MIRRORED_REPEAT},ie={[tn]:t.NEAREST,[Op]:t.NEAREST_MIPMAP_NEAREST,[su]:t.NEAREST_MIPMAP_LINEAR,[bn]:t.LINEAR,[QM]:t.LINEAR_MIPMAP_NEAREST,[Ys]:t.LINEAR_MIPMAP_LINEAR},Z={[uE]:t.NEVER,[gE]:t.ALWAYS,[dE]:t.LESS,[n_]:t.LEQUAL,[fE]:t.EQUAL,[mE]:t.GEQUAL,[hE]:t.GREATER,[pE]:t.NOTEQUAL};function V(A,S,F){if(F?(t.texParameteri(A,t.TEXTURE_WRAP_S,z[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,z[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,z[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ie[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ie[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Wn||S.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,R(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==tn&&S.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===tn||S.minFilter!==su&&S.minFilter!==Ys||S.type===zi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===lo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(A,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function re(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const oe=S.source;let se=h.get(oe);se===void 0&&(se={},h.set(oe,se));const le=G(S);if(le!==A.__cacheKey){se[le]===void 0&&(se[le]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),se[le].usedTimes++;const Me=se[A.__cacheKey];Me!==void 0&&(se[A.__cacheKey].usedTimes--,Me.usedTimes===0&&T(S)),A.__cacheKey=le,A.__webglTexture=se[le].texture}return F}function de(A,S,F){let oe=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=t.TEXTURE_3D);const se=re(A,S),le=S.source;n.bindTexture(oe,A.__webglTexture,t.TEXTURE0+F);const Me=i.get(le);if(le.version!==Me.__version||se===!0){n.activeTexture(t.TEXTURE0+F);const he=rt.getPrimaries(rt.workingColorSpace),ge=S.colorSpace===Pn?null:rt.getPrimaries(S.colorSpace),Re=S.colorSpace===Pn||he===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ke=u(S)&&p(S.image)===!1;let j=_(S.image,ke,!1,r.maxTextureSize);j=Ue(S,j);const Ee=p(j)||o,ve=s.convert(S.format,S.colorSpace);let Ce=s.convert(S.type),we=y(S.internalFormat,ve,Ce,S.colorSpace,S.isVideoTexture);V(oe,S,Ee);let me;const Oe=S.mipmaps,Be=o&&S.isVideoTexture!==!0&&we!==J0,Y=Me.__version===void 0||se===!0,ne=P(S,j,Ee);if(S.isDepthTexture)we=t.DEPTH_COMPONENT,o?S.type===zi?we=t.DEPTH_COMPONENT32F:S.type===Bi?we=t.DEPTH_COMPONENT24:S.type===Pr?we=t.DEPTH24_STENCIL8:we=t.DEPTH_COMPONENT16:S.type===zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Lr&&we===t.DEPTH_COMPONENT&&S.type!==qf&&S.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Bi,Ce=s.convert(S.type)),S.format===Ks&&we===t.DEPTH_COMPONENT&&(we=t.DEPTH_STENCIL,S.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Pr,Ce=s.convert(S.type))),Y&&(Be?n.texStorage2D(t.TEXTURE_2D,1,we,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,we,j.width,j.height,0,ve,Ce,null));else if(S.isDataTexture)if(Oe.length>0&&Ee){Be&&Y&&n.texStorage2D(t.TEXTURE_2D,ne,we,Oe[0].width,Oe[0].height);for(let N=0,b=Oe.length;N<b;N++)me=Oe[N],Be?n.texSubImage2D(t.TEXTURE_2D,N,0,0,me.width,me.height,ve,Ce,me.data):n.texImage2D(t.TEXTURE_2D,N,we,me.width,me.height,0,ve,Ce,me.data);S.generateMipmaps=!1}else Be?(Y&&n.texStorage2D(t.TEXTURE_2D,ne,we,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,j.width,j.height,ve,Ce,j.data)):n.texImage2D(t.TEXTURE_2D,0,we,j.width,j.height,0,ve,Ce,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Be&&Y&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,we,Oe[0].width,Oe[0].height,j.depth);for(let N=0,b=Oe.length;N<b;N++)me=Oe[N],S.format!==jn?ve!==null?Be?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,N,0,0,0,me.width,me.height,j.depth,ve,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,N,we,me.width,me.height,j.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?n.texSubImage3D(t.TEXTURE_2D_ARRAY,N,0,0,0,me.width,me.height,j.depth,ve,Ce,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,N,we,me.width,me.height,j.depth,0,ve,Ce,me.data)}else{Be&&Y&&n.texStorage2D(t.TEXTURE_2D,ne,we,Oe[0].width,Oe[0].height);for(let N=0,b=Oe.length;N<b;N++)me=Oe[N],S.format!==jn?ve!==null?Be?n.compressedTexSubImage2D(t.TEXTURE_2D,N,0,0,me.width,me.height,ve,me.data):n.compressedTexImage2D(t.TEXTURE_2D,N,we,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?n.texSubImage2D(t.TEXTURE_2D,N,0,0,me.width,me.height,ve,Ce,me.data):n.texImage2D(t.TEXTURE_2D,N,we,me.width,me.height,0,ve,Ce,me.data)}else if(S.isDataArrayTexture)Be?(Y&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,we,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ve,Ce,j.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,j.width,j.height,j.depth,0,ve,Ce,j.data);else if(S.isData3DTexture)Be?(Y&&n.texStorage3D(t.TEXTURE_3D,ne,we,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ve,Ce,j.data)):n.texImage3D(t.TEXTURE_3D,0,we,j.width,j.height,j.depth,0,ve,Ce,j.data);else if(S.isFramebufferTexture){if(Y)if(Be)n.texStorage2D(t.TEXTURE_2D,ne,we,j.width,j.height);else{let N=j.width,b=j.height;for(let te=0;te<ne;te++)n.texImage2D(t.TEXTURE_2D,te,we,N,b,0,ve,Ce,null),N>>=1,b>>=1}}else if(Oe.length>0&&Ee){Be&&Y&&n.texStorage2D(t.TEXTURE_2D,ne,we,Oe[0].width,Oe[0].height);for(let N=0,b=Oe.length;N<b;N++)me=Oe[N],Be?n.texSubImage2D(t.TEXTURE_2D,N,0,0,ve,Ce,me):n.texImage2D(t.TEXTURE_2D,N,we,ve,Ce,me);S.generateMipmaps=!1}else Be?(Y&&n.texStorage2D(t.TEXTURE_2D,ne,we,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Ce,j)):n.texImage2D(t.TEXTURE_2D,0,we,ve,Ce,j);v(S,Ee)&&g(oe),Me.__version=le.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function fe(A,S,F){if(S.image.length!==6)return;const oe=re(A,S),se=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+F);const le=i.get(se);if(se.version!==le.__version||oe===!0){n.activeTexture(t.TEXTURE0+F);const Me=rt.getPrimaries(rt.workingColorSpace),he=S.colorSpace===Pn?null:rt.getPrimaries(S.colorSpace),ge=S.colorSpace===Pn||Me===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Re=S.isCompressedTexture||S.image[0].isCompressedTexture,ke=S.image[0]&&S.image[0].isDataTexture,j=[];for(let N=0;N<6;N++)!Re&&!ke?j[N]=_(S.image[N],!1,!0,r.maxCubemapSize):j[N]=ke?S.image[N].image:S.image[N],j[N]=Ue(S,j[N]);const Ee=j[0],ve=p(Ee)||o,Ce=s.convert(S.format,S.colorSpace),we=s.convert(S.type),me=y(S.internalFormat,Ce,we,S.colorSpace),Oe=o&&S.isVideoTexture!==!0,Be=le.__version===void 0||oe===!0;let Y=P(S,Ee,ve);V(t.TEXTURE_CUBE_MAP,S,ve);let ne;if(Re){Oe&&Be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Y,me,Ee.width,Ee.height);for(let N=0;N<6;N++){ne=j[N].mipmaps;for(let b=0;b<ne.length;b++){const te=ne[b];S.format!==jn?Ce!==null?Oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,b,0,0,te.width,te.height,Ce,te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,b,me,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,b,0,0,te.width,te.height,Ce,we,te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,b,me,te.width,te.height,0,Ce,we,te.data)}}}else{ne=S.mipmaps,Oe&&Be&&(ne.length>0&&Y++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Y,me,j[0].width,j[0].height));for(let N=0;N<6;N++)if(ke){Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,j[N].width,j[N].height,Ce,we,j[N].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,me,j[N].width,j[N].height,0,Ce,we,j[N].data);for(let b=0;b<ne.length;b++){const ae=ne[b].image[N].image;Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,b+1,0,0,ae.width,ae.height,Ce,we,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,b+1,me,ae.width,ae.height,0,Ce,we,ae.data)}}else{Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,Ce,we,j[N]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,me,Ce,we,j[N]);for(let b=0;b<ne.length;b++){const te=ne[b];Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,b+1,0,0,Ce,we,te.image[N]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,b+1,me,Ce,we,te.image[N])}}}v(S,ve)&&g(t.TEXTURE_CUBE_MAP),le.__version=se.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ye(A,S,F,oe,se,le){const Me=s.convert(F.format,F.colorSpace),he=s.convert(F.type),ge=y(F.internalFormat,Me,he,F.colorSpace);if(!i.get(S).__hasExternalTextures){const ke=Math.max(1,S.width>>le),j=Math.max(1,S.height>>le);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,le,ge,ke,j,S.depth,0,Me,he,null):n.texImage2D(se,le,ge,ke,j,0,Me,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Te(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,se,i.get(F).__webglTexture,0,Ie(S)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,oe,se,i.get(F).__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(A,S,F){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let oe=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(F||Te(S)){const se=S.depthTexture;se&&se.isDepthTexture&&(se.type===zi?oe=t.DEPTH_COMPONENT32F:se.type===Bi&&(oe=t.DEPTH_COMPONENT24));const le=Ie(S);Te(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,oe,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,oe,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,oe,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const oe=Ie(S);F&&Te(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,S.width,S.height):Te(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const oe=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let se=0;se<oe.length;se++){const le=oe[se],Me=s.convert(le.format,le.colorSpace),he=s.convert(le.type),ge=y(le.internalFormat,Me,he,le.colorSpace),Re=Ie(S);F&&Te(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ge,S.width,S.height):Te(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,ge,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ge,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const oe=i.get(S.depthTexture).__webglTexture,se=Ie(S);if(S.depthTexture.format===Lr)Te(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0);else if(S.depthTexture.format===Ks)Te(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ae(A){const S=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");be(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]=t.createRenderbuffer(),Ne(S.__webglDepthbuffer[oe],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ne(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(A,S,F){const oe=i.get(A);S!==void 0&&ye(oe.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ae(A)}function B(A){const S=A.texture,F=i.get(A),oe=i.get(S);A.addEventListener("dispose",O),A.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture()),oe.__version=S.version,a.memory.textures++);const se=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,Me=p(A)||o;if(se){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let ge=0;ge<S.mipmaps.length;ge++)F.__webglFramebuffer[he][ge]=t.createFramebuffer()}else F.__webglFramebuffer[he]=t.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<S.mipmaps.length;he++)F.__webglFramebuffer[he]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(le)if(r.drawBuffers){const he=A.texture;for(let ge=0,Re=he.length;ge<Re;ge++){const ke=i.get(he[ge]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Te(A)===!1){const he=le?S:[S];F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){const Re=he[ge];F.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ge]);const ke=s.convert(Re.format,Re.colorSpace),j=s.convert(Re.type),Ee=y(Re.internalFormat,ke,j,Re.colorSpace,A.isXRRenderTarget===!0),ve=Ie(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Ee,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,F.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),V(t.TEXTURE_CUBE_MAP,S,Me);for(let he=0;he<6;he++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)ye(F.__webglFramebuffer[he][ge],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else ye(F.__webglFramebuffer[he],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);v(S,Me)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const he=A.texture;for(let ge=0,Re=he.length;ge<Re;ge++){const ke=he[ge],j=i.get(ke);n.bindTexture(t.TEXTURE_2D,j.__webglTexture),V(t.TEXTURE_2D,ke,Me),ye(F.__webglFramebuffer,A,ke,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),v(ke,Me)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?he=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,oe.__webglTexture),V(he,S,Me),o&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)ye(F.__webglFramebuffer[ge],A,S,t.COLOR_ATTACHMENT0,he,ge);else ye(F.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,he,0);v(S,Me)&&g(he),n.unbindTexture()}A.depthBuffer&&Ae(A)}function xt(A){const S=p(A)||o,F=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let oe=0,se=F.length;oe<se;oe++){const le=F[oe];if(v(le,S)){const Me=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(le).__webglTexture;n.bindTexture(Me,he),g(Me),n.unbindTexture()}}}function Le(A){if(o&&A.samples>0&&Te(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],F=A.width,oe=A.height;let se=t.COLOR_BUFFER_BIT;const le=[],Me=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(A),ge=A.isWebGLMultipleRenderTargets===!0;if(ge)for(let Re=0;Re<S.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Re=0;Re<S.length;Re++){le.push(t.COLOR_ATTACHMENT0+Re),A.depthBuffer&&le.push(Me);const ke=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ke===!1&&(A.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),ge&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Re]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),ge){const j=i.get(S[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,j,0)}t.blitFramebuffer(0,0,F,oe,0,0,F,oe,se,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Re=0;Re<S.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,he.__webglColorRenderbuffer[Re]);const ke=i.get(S[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ie(A){return Math.min(r.maxSamples,A.samples)}function Te(A){const S=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function tt(A){const S=a.render.frame;d.get(A)!==S&&(d.set(A,S),A.update())}function Ue(A,S){const F=A.colorSpace,oe=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Bd||F!==ii&&F!==Pn&&(rt.getTransfer(F)===ct?o===!1?e.has("EXT_sRGB")===!0&&oe===jn?(A.format=Bd,A.minFilter=bn,A.generateMipmaps=!1):S=r_.sRGBToLinear(S):(oe!==jn||se!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=L,this.resetTextureUnits=ue,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=D,this.setTextureCube=k,this.rebindTextures=Pe,this.setupRenderTarget=B,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Te}function PA(t,e,n){const i=n.isWebGL2;function r(s,a=Pn){let o;const l=rt.getTransfer(a);if(s===Qi)return t.UNSIGNED_BYTE;if(s===$0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Y0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===JM)return t.BYTE;if(s===eE)return t.SHORT;if(s===qf)return t.UNSIGNED_SHORT;if(s===q0)return t.INT;if(s===Bi)return t.UNSIGNED_INT;if(s===zi)return t.FLOAT;if(s===lo)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===tE)return t.ALPHA;if(s===jn)return t.RGBA;if(s===nE)return t.LUMINANCE;if(s===iE)return t.LUMINANCE_ALPHA;if(s===Lr)return t.DEPTH_COMPONENT;if(s===Ks)return t.DEPTH_STENCIL;if(s===Bd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===rE)return t.RED;if(s===K0)return t.RED_INTEGER;if(s===sE)return t.RG;if(s===Z0)return t.RG_INTEGER;if(s===Q0)return t.RGBA_INTEGER;if(s===au||s===ou||s===lu||s===cu)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===au)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ou)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===au)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ou)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kp||s===Bp||s===zp||s===Hp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===kp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===J0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Gp||s===Vp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Gp)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Vp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wp||s===jp||s===Xp||s===qp||s===$p||s===Yp||s===Kp||s===Zp||s===Qp||s===Jp||s===em||s===tm||s===nm||s===im)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Wp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$p)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jp)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===em)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nm)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===im)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uu||s===rm||s===sm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===uu)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===aE||s===am||s===om||s===lm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===uu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===am)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===om)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class LA extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rr extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DA={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(DA)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class NA extends na{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,x=null;const _=n.getContextAttributes();let p=null,u=null;const v=[],g=[],y=new Qe;let P=null;const R=new _n;R.layers.enable(1),R.viewport=new ut;const C=new _n;C.layers.enable(2),C.viewport=new ut;const O=[R,C],M=new LA;M.layers.enable(1),M.layers.enable(2);let T=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let re=v[V];return re===void 0&&(re=new Nu,v[V]=re),re.getTargetRaySpace()},this.getControllerGrip=function(V){let re=v[V];return re===void 0&&(re=new Nu,v[V]=re),re.getGripSpace()},this.getHand=function(V){let re=v[V];return re===void 0&&(re=new Nu,v[V]=re),re.getHandSpace()};function J(V){const re=g.indexOf(V.inputSource);if(re===-1)return;const de=v[re];de!==void 0&&(de.update(V.inputSource,V.frame,c||a),de.dispatchEvent({type:V.type,data:V.inputSource}))}function ue(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",ue),r.removeEventListener("inputsourceschange",L);for(let V=0;V<v.length;V++){const re=g[V];re!==null&&(g[V]=null,v[V].disconnect(re))}T=null,q=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",ue),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const re={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new nr(m.framebufferWidth,m.framebufferHeight,{format:jn,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let re=null,de=null,fe=null;_.depth&&(fe=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=_.stencil?Ks:Lr,de=_.stencil?Pr:Bi);const ye={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new nr(h.textureWidth,h.textureHeight,{format:jn,type:Qi,depthTexture:new m_(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ne=e.properties.get(u);Ne.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(V){for(let re=0;re<V.removed.length;re++){const de=V.removed[re],fe=g.indexOf(de);fe>=0&&(g[fe]=null,v[fe].disconnect(de))}for(let re=0;re<V.added.length;re++){const de=V.added[re];let fe=g.indexOf(de);if(fe===-1){for(let Ne=0;Ne<v.length;Ne++)if(Ne>=g.length){g.push(de),fe=Ne;break}else if(g[Ne]===null){g[Ne]=de,fe=Ne;break}if(fe===-1)break}const ye=v[fe];ye&&ye.connect(de)}}const G=new I,$=new I;function ee(V,re,de){G.setFromMatrixPosition(re.matrixWorld),$.setFromMatrixPosition(de.matrixWorld);const fe=G.distanceTo($),ye=re.projectionMatrix.elements,Ne=de.projectionMatrix.elements,be=ye[14]/(ye[10]-1),Ae=ye[14]/(ye[10]+1),Pe=(ye[9]+1)/ye[5],B=(ye[9]-1)/ye[5],xt=(ye[8]-1)/ye[0],Le=(Ne[8]+1)/Ne[0],Ie=be*xt,Te=be*Le,tt=fe/(-xt+Le),Ue=tt*-xt;re.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ue),V.translateZ(tt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const A=be+tt,S=Ae+tt,F=Ie-Ue,oe=Te+(fe-Ue),se=Pe*Ae/S*A,le=B*Ae/S*A;V.projectionMatrix.makePerspective(F,oe,se,le,A,S),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function D(V,re){re===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(re.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;M.near=C.near=R.near=V.near,M.far=C.far=R.far=V.far,(T!==M.near||q!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,q=M.far);const re=V.parent,de=M.cameras;D(M,re);for(let fe=0;fe<de.length;fe++)D(de[fe],re);de.length===2?ee(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),k(V,M,re)};function k(V,re,de){de===null?V.matrix.copy(re.matrixWorld):(V.matrix.copy(de.matrixWorld),V.matrix.invert(),V.matrix.multiply(re.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(re.projectionMatrix),V.projectionMatrixInverse.copy(re.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=co*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let z=null;function ie(V,re){if(d=re.getViewerPose(c||a),x=re,d!==null){const de=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let fe=!1;de.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let ye=0;ye<de.length;ye++){const Ne=de[ye];let be=null;if(m!==null)be=m.getViewport(Ne);else{const Pe=f.getViewSubImage(h,Ne);be=Pe.viewport,ye===0&&(e.setRenderTargetTextures(u,Pe.colorTexture,h.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(u))}let Ae=O[ye];Ae===void 0&&(Ae=new _n,Ae.layers.enable(ye),Ae.viewport=new ut,O[ye]=Ae),Ae.matrix.fromArray(Ne.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Ne.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(be.x,be.y,be.width,be.height),ye===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(Ae)}}for(let de=0;de<v.length;de++){const fe=g[de],ye=v[de];fe!==null&&ye!==void 0&&ye.update(fe,re,c||a)}z&&z(V,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),x=null}const Z=new h_;Z.setAnimationLoop(ie),this.setAnimationLoop=function(V){z=V},this.dispose=function(){}}}function UA(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,d_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,g,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===rn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===rn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function IA(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const y=g.program;i.uniformBlockBinding(v,y)}function c(v,g){let y=r[v.id];y===void 0&&(x(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",p));const P=g.program;i.updateUBOMapping(v,P);const R=e.render.frame;s[v.id]!==R&&(h(v),s[v.id]=R)}function d(v){const g=f();v.__bindingPointIndex=g;const y=t.createBuffer(),P=v.__size,R=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],y=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,C=y.length;R<C;R++){const O=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,T=O.length;M<T;M++){const q=O[M];if(m(q,R,M,P)===!0){const J=q.__offset,ue=Array.isArray(q.value)?q.value:[q.value];let L=0;for(let G=0;G<ue.length;G++){const $=ue[G],ee=_($);typeof $=="number"||typeof $=="boolean"?(q.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,J+L,q.__data)):$.isMatrix3?(q.__data[0]=$.elements[0],q.__data[1]=$.elements[1],q.__data[2]=$.elements[2],q.__data[3]=0,q.__data[4]=$.elements[3],q.__data[5]=$.elements[4],q.__data[6]=$.elements[5],q.__data[7]=0,q.__data[8]=$.elements[6],q.__data[9]=$.elements[7],q.__data[10]=$.elements[8],q.__data[11]=0):($.toArray(q.__data,L),L+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,J,q.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,y,P){const R=v.value,C=g+"_"+y;if(P[C]===void 0)return typeof R=="number"||typeof R=="boolean"?P[C]=R:P[C]=R.clone(),!0;{const O=P[C];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return P[C]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function x(v){const g=v.uniforms;let y=0;const P=16;for(let C=0,O=g.length;C<O;C++){const M=Array.isArray(g[C])?g[C]:[g[C]];for(let T=0,q=M.length;T<q;T++){const J=M[T],ue=Array.isArray(J.value)?J.value:[J.value];for(let L=0,G=ue.length;L<G;L++){const $=ue[L],ee=_($),D=y%P;D!==0&&P-D<ee.boundary&&(y+=P-D),J.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=y,y+=ee.storage}}}const R=y%P;return R>0&&(y+=P-R),v.__size=y,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const y=a.indexOf(g.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class nh{constructor(e={}){const{canvas:n=LE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;const g=this;let y=!1,P=0,R=0,C=null,O=-1,M=null;const T=new ut,q=new ut;let J=null;const ue=new Ye(0);let L=0,G=n.width,$=n.height,ee=1,D=null,k=null;const z=new ut(0,0,G,$),ie=new ut(0,0,G,$);let Z=!1;const V=new eh;let re=!1,de=!1,fe=null;const ye=new Rt,Ne=new Qe,be=new I,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return C===null?ee:1}let B=i;function xt(E,U){for(let W=0;W<E.length;W++){const X=E[W],H=n.getContext(X,U);if(H!==null)return H}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xf}`),n.addEventListener("webglcontextlost",N,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",te,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),B=xt(U,E),B===null)throw xt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Le,Ie,Te,tt,Ue,A,S,F,oe,se,le,Me,he,ge,Re,ke,j,Ee,ve,Ce,we,me,Oe,Be;function Y(){Le=new jT(B),Ie=new BT(B,Le,e),Le.init(Ie),me=new PA(B,Le,Ie),Te=new CA(B,Le,Ie),tt=new $T(B),Ue=new pA,A=new bA(B,Le,Te,Ue,Ie,me,tt),S=new HT(g),F=new WT(g),oe=new n1(B,Ie),Oe=new OT(B,Le,oe,Ie),se=new XT(B,oe,tt,Oe),le=new QT(B,se,oe,tt),ve=new ZT(B,Ie,A),ke=new zT(Ue),Me=new hA(g,S,F,Le,Ie,Oe,ke),he=new UA(g,Ue),ge=new gA,Re=new MA(Le,Ie),Ee=new FT(g,S,F,Te,le,h,l),j=new RA(g,le,Ie),Be=new IA(B,tt,Ie,Te),Ce=new kT(B,Le,tt,Ie),we=new qT(B,Le,tt,Ie),tt.programs=Me.programs,g.capabilities=Ie,g.extensions=Le,g.properties=Ue,g.renderLists=ge,g.shadowMap=j,g.state=Te,g.info=tt}Y();const ne=new NA(g,B);this.xr=ne,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const E=Le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(G,$,!1))},this.getSize=function(E){return E.set(G,$)},this.setSize=function(E,U,W=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,$=U,n.width=Math.floor(E*ee),n.height=Math.floor(U*ee),W===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(G*ee,$*ee).floor()},this.setDrawingBufferSize=function(E,U,W){G=E,$=U,ee=W,n.width=Math.floor(E*W),n.height=Math.floor(U*W),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(z)},this.setViewport=function(E,U,W,X){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,U,W,X),Te.viewport(T.copy(z).multiplyScalar(ee).floor())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,U,W,X){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,U,W,X),Te.scissor(q.copy(ie).multiplyScalar(ee).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(E){Te.setScissorTest(Z=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){k=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(E=!0,U=!0,W=!0){let X=0;if(E){let H=!1;if(C!==null){const xe=C.texture.format;H=xe===Q0||xe===Z0||xe===K0}if(H){const xe=C.texture.type,De=xe===Qi||xe===Bi||xe===qf||xe===Pr||xe===$0||xe===Y0,Fe=Ee.getClearColor(),ze=Ee.getClearAlpha(),Xe=Fe.r,Ve=Fe.g,We=Fe.b;De?(m[0]=Xe,m[1]=Ve,m[2]=We,m[3]=ze,B.clearBufferuiv(B.COLOR,0,m)):(x[0]=Xe,x[1]=Ve,x[2]=We,x[3]=ze,B.clearBufferiv(B.COLOR,0,x))}else X|=B.COLOR_BUFFER_BIT}U&&(X|=B.DEPTH_BUFFER_BIT),W&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",N,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",te,!1),ge.dispose(),Re.dispose(),Ue.dispose(),S.dispose(),F.dispose(),le.dispose(),Oe.dispose(),Be.dispose(),Me.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",st),ne.removeEventListener("sessionend",Ge),fe&&(fe.dispose(),fe=null),yt.stop()};function N(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=tt.autoReset,U=j.enabled,W=j.autoUpdate,X=j.needsUpdate,H=j.type;Y(),tt.autoReset=E,j.enabled=U,j.autoUpdate=W,j.needsUpdate=X,j.type=H}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ae(E){const U=E.target;U.removeEventListener("dispose",ae),_e(U)}function _e(E){K(E),Ue.remove(E)}function K(E){const U=Ue.get(E).programs;U!==void 0&&(U.forEach(function(W){Me.releaseProgram(W)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,W,X,H,xe){U===null&&(U=Ae);const De=H.isMesh&&H.matrixWorld.determinant()<0,Fe=Rc(E,U,W,X,H);Te.setMaterial(X,De);let ze=W.index,Xe=1;if(X.wireframe===!0){if(ze=se.getWireframeAttribute(W),ze===void 0)return;Xe=2}const Ve=W.drawRange,We=W.attributes.position;let St=Ve.start*Xe,hn=(Ve.start+Ve.count)*Xe;xe!==null&&(St=Math.max(St,xe.start*Xe),hn=Math.min(hn,(xe.start+xe.count)*Xe)),ze!==null?(St=Math.max(St,0),hn=Math.min(hn,ze.count)):We!=null&&(St=Math.max(St,0),hn=Math.min(hn,We.count));const Nt=hn-St;if(Nt<0||Nt===1/0)return;Oe.setup(H,X,Fe,W,ze);let ri,ht=Ce;if(ze!==null&&(ri=oe.get(ze),ht=we,ht.setIndex(ri)),H.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*Pe()),ht.setMode(B.LINES)):ht.setMode(B.TRIANGLES);else if(H.isLine){let qe=X.linewidth;qe===void 0&&(qe=1),Te.setLineWidth(qe*Pe()),H.isLineSegments?ht.setMode(B.LINES):H.isLineLoop?ht.setMode(B.LINE_LOOP):ht.setMode(B.LINE_STRIP)}else H.isPoints?ht.setMode(B.POINTS):H.isSprite&&ht.setMode(B.TRIANGLES);if(H.isBatchedMesh)ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ht.renderInstances(St,Nt,H.count);else if(W.isInstancedBufferGeometry){const qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Cc=Math.min(W.instanceCount,qe);ht.renderInstances(St,Nt,Cc)}else ht.render(St,Nt)};function He(E,U,W){E.transparent===!0&&E.side===hi&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,jr(E,U,W),E.side=tr,E.needsUpdate=!0,jr(E,U,W),E.side=hi):jr(E,U,W)}this.compile=function(E,U,W=null){W===null&&(W=E),p=Re.get(W),p.init(),v.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(g._useLegacyLights);const X=new Set;return E.traverse(function(H){const xe=H.material;if(xe)if(Array.isArray(xe))for(let De=0;De<xe.length;De++){const Fe=xe[De];He(Fe,W,H),X.add(Fe)}else He(xe,W,H),X.add(xe)}),v.pop(),p=null,X},this.compileAsync=function(E,U,W=null){const X=this.compile(E,U,W);return new Promise(H=>{function xe(){if(X.forEach(function(De){Ue.get(De).currentProgram.isReady()&&X.delete(De)}),X.size===0){H(E);return}setTimeout(xe,10)}Le.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ze=null;function it(E){Ze&&Ze(E)}function st(){yt.stop()}function Ge(){yt.start()}const yt=new h_;yt.setAnimationLoop(it),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(E){Ze=E,ne.setAnimationLoop(E),E===null?yt.stop():yt.start()},ne.addEventListener("sessionstart",st),ne.addEventListener("sessionend",Ge),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(U),U=ne.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,U,C),p=Re.get(E,v.length),p.init(),v.push(p),ye.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V.setFromProjectionMatrix(ye),de=this.localClippingEnabled,re=ke.init(this.clippingPlanes,de),_=ge.get(E,u.length),_.init(),u.push(_),zt(E,U,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(D,k),this.info.render.frame++,re===!0&&ke.beginShadows();const W=p.state.shadowsArray;if(j.render(W,E,U),re===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ee.render(_,E),p.setupLights(g._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let H=0,xe=X.length;H<xe;H++){const De=X[H];Kt(_,E,De,De.viewport)}}else Kt(_,E,U);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(g,E,U),Oe.resetDefaultState(),O=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function zt(E,U,W,X){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){X&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ye);const De=le.update(E),Fe=E.material;Fe.visible&&_.push(E,De,Fe,W,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const De=le.update(E),Fe=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),be.copy(De.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(ye)),Array.isArray(Fe)){const ze=De.groups;for(let Xe=0,Ve=ze.length;Xe<Ve;Xe++){const We=ze[Xe],St=Fe[We.materialIndex];St&&St.visible&&_.push(E,De,St,W,be.z,We)}}else Fe.visible&&_.push(E,De,Fe,W,be.z,null)}}const xe=E.children;for(let De=0,Fe=xe.length;De<Fe;De++)zt(xe[De],U,W,X)}function Kt(E,U,W,X){const H=E.opaque,xe=E.transmissive,De=E.transparent;p.setupLightsView(W),re===!0&&ke.setGlobalState(g.clippingPlanes,W),xe.length>0&&Wr(H,xe,U,W),X&&Te.viewport(T.copy(X)),H.length>0&&lr(H,U,W),xe.length>0&&lr(xe,U,W),De.length>0&&lr(De,U,W),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Wr(E,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const xe=Ie.isWebGL2;fe===null&&(fe=new nr(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?lo:Qi,minFilter:Ys,samples:xe?4:0})),g.getDrawingBufferSize(Ne),xe?fe.setSize(Ne.x,Ne.y):fe.setSize(tc(Ne.x),tc(Ne.y));const De=g.getRenderTarget();g.setRenderTarget(fe),g.getClearColor(ue),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Fe=g.toneMapping;g.toneMapping=Zi,lr(E,W,X),A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe);let ze=!1;for(let Xe=0,Ve=U.length;Xe<Ve;Xe++){const We=U[Xe],St=We.object,hn=We.geometry,Nt=We.material,ri=We.group;if(Nt.side===hi&&St.layers.test(X.layers)){const ht=Nt.side;Nt.side=rn,Nt.needsUpdate=!0,aa(St,W,X,hn,Nt,ri),Nt.side=ht,Nt.needsUpdate=!0,ze=!0}}ze===!0&&(A.updateMultisampleRenderTarget(fe),A.updateRenderTargetMipmap(fe)),g.setRenderTarget(De),g.setClearColor(ue,L),g.toneMapping=Fe}function lr(E,U,W){const X=U.isScene===!0?U.overrideMaterial:null;for(let H=0,xe=E.length;H<xe;H++){const De=E[H],Fe=De.object,ze=De.geometry,Xe=X===null?De.material:X,Ve=De.group;Fe.layers.test(W.layers)&&aa(Fe,U,W,ze,Xe,Ve)}}function aa(E,U,W,X,H,xe){E.onBeforeRender(g,U,W,X,H,xe),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(g,U,W,X,E,xe),H.transparent===!0&&H.side===hi&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,g.renderBufferDirect(W,U,X,H,E,xe),H.side=tr,H.needsUpdate=!0,g.renderBufferDirect(W,U,X,H,E,xe),H.side=hi):g.renderBufferDirect(W,U,X,H,E,xe),E.onAfterRender(g,U,W,X,H,xe)}function jr(E,U,W){U.isScene!==!0&&(U=Ae);const X=Ue.get(E),H=p.state.lights,xe=p.state.shadowsArray,De=H.state.version,Fe=Me.getParameters(E,H.state,xe,U,W),ze=Me.getProgramCacheKey(Fe);let Xe=X.programs;X.environment=E.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(E.isMeshStandardMaterial?F:S).get(E.envMap||X.environment),Xe===void 0&&(E.addEventListener("dispose",ae),Xe=new Map,X.programs=Xe);let Ve=Xe.get(ze);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===De)return yo(E,Fe),Ve}else Fe.uniforms=Me.getUniforms(E),E.onBuild(W,Fe,g),E.onBeforeCompile(Fe,g),Ve=Me.acquireProgram(Fe,ze),Xe.set(ze,Ve),X.uniforms=Fe.uniforms;const We=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=ke.uniform),yo(E,Fe),X.needsLights=b_(E),X.lightsStateVersion=De,X.needsLights&&(We.ambientLightColor.value=H.state.ambient,We.lightProbe.value=H.state.probe,We.directionalLights.value=H.state.directional,We.directionalLightShadows.value=H.state.directionalShadow,We.spotLights.value=H.state.spot,We.spotLightShadows.value=H.state.spotShadow,We.rectAreaLights.value=H.state.rectArea,We.ltc_1.value=H.state.rectAreaLTC1,We.ltc_2.value=H.state.rectAreaLTC2,We.pointLights.value=H.state.point,We.pointLightShadows.value=H.state.pointShadow,We.hemisphereLights.value=H.state.hemi,We.directionalShadowMap.value=H.state.directionalShadowMap,We.directionalShadowMatrix.value=H.state.directionalShadowMatrix,We.spotShadowMap.value=H.state.spotShadowMap,We.spotLightMatrix.value=H.state.spotLightMatrix,We.spotLightMap.value=H.state.spotLightMap,We.pointShadowMap.value=H.state.pointShadowMap,We.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function xo(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ml.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function yo(E,U){const W=Ue.get(E);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Rc(E,U,W,X,H){U.isScene!==!0&&(U=Ae),A.resetTextureUnits();const xe=U.fog,De=X.isMeshStandardMaterial?U.environment:null,Fe=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ii,ze=(X.isMeshStandardMaterial?F:S).get(X.envMap||De),Xe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),We=!!W.morphAttributes.position,St=!!W.morphAttributes.normal,hn=!!W.morphAttributes.color;let Nt=Zi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Nt=g.toneMapping);const ri=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=ri!==void 0?ri.length:0,qe=Ue.get(X),Cc=p.state.lights;if(re===!0&&(de===!0||E!==M)){const wn=E===M&&X.id===O;ke.setState(X,E,wn)}let vt=!1;X.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Cc.state.version||qe.outputColorSpace!==Fe||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||qe.envMap!==ze||X.fog===!0&&qe.fog!==xe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ke.numPlanes||qe.numIntersection!==ke.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==Ve||qe.morphTargets!==We||qe.morphNormals!==St||qe.morphColors!==hn||qe.toneMapping!==Nt||Ie.isWebGL2===!0&&qe.morphTargetsCount!==ht)&&(vt=!0):(vt=!0,qe.__version=X.version);let cr=qe.currentProgram;vt===!0&&(cr=jr(X,U,H));let oh=!1,oa=!1,bc=!1;const Ht=cr.getUniforms(),ur=qe.uniforms;if(Te.useProgram(cr.program)&&(oh=!0,oa=!0,bc=!0),X.id!==O&&(O=X.id,oa=!0),oh||M!==E){Ht.setValue(B,"projectionMatrix",E.projectionMatrix),Ht.setValue(B,"viewMatrix",E.matrixWorldInverse);const wn=Ht.map.cameraPosition;wn!==void 0&&wn.setValue(B,be.setFromMatrixPosition(E.matrixWorld)),Ie.logarithmicDepthBuffer&&Ht.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ht.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,oa=!0,bc=!0)}if(H.isSkinnedMesh){Ht.setOptional(B,H,"bindMatrix"),Ht.setOptional(B,H,"bindMatrixInverse");const wn=H.skeleton;wn&&(Ie.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Ht.setValue(B,"boneTexture",wn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Ht.setOptional(B,H,"batchingTexture"),Ht.setValue(B,"batchingTexture",H._matricesTexture,A));const Pc=W.morphAttributes;if((Pc.position!==void 0||Pc.normal!==void 0||Pc.color!==void 0&&Ie.isWebGL2===!0)&&ve.update(H,W,cr),(oa||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,Ht.setValue(B,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ur.envMap.value=ze,ur.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),oa&&(Ht.setValue(B,"toneMappingExposure",g.toneMappingExposure),qe.needsLights&&C_(ur,bc),xe&&X.fog===!0&&he.refreshFogUniforms(ur,xe),he.refreshMaterialUniforms(ur,X,ee,$,fe),Ml.upload(B,xo(qe),ur,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ml.upload(B,xo(qe),ur,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ht.setValue(B,"center",H.center),Ht.setValue(B,"modelViewMatrix",H.modelViewMatrix),Ht.setValue(B,"normalMatrix",H.normalMatrix),Ht.setValue(B,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const wn=X.uniformsGroups;for(let Lc=0,P_=wn.length;Lc<P_;Lc++)if(Ie.isWebGL2){const lh=wn[Lc];Be.update(lh,cr),Be.bind(lh,cr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return cr}function C_(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function b_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,U,W){Ue.get(E.texture).__webglTexture=U,Ue.get(E.depthTexture).__webglTexture=W;const X=Ue.get(E);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,U){const W=Ue.get(E);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,W=0){C=E,P=U,R=W;let X=!0,H=null,xe=!1,De=!1;if(E){const ze=Ue.get(E);ze.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(B.FRAMEBUFFER,null),X=!1):ze.__webglFramebuffer===void 0?A.setupRenderTarget(E):ze.__hasExternalTextures&&A.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);const Xe=E.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(De=!0);const Ve=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?H=Ve[U][W]:H=Ve[U],xe=!0):Ie.isWebGL2&&E.samples>0&&A.useMultisampledRTT(E)===!1?H=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[W]:H=Ve,T.copy(E.viewport),q.copy(E.scissor),J=E.scissorTest}else T.copy(z).multiplyScalar(ee).floor(),q.copy(ie).multiplyScalar(ee).floor(),J=Z;if(Te.bindFramebuffer(B.FRAMEBUFFER,H)&&Ie.drawBuffers&&X&&Te.drawBuffers(E,H),Te.viewport(T),Te.scissor(q),Te.setScissorTest(J),xe){const ze=Ue.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,ze.__webglTexture,W)}else if(De){const ze=Ue.get(E.texture),Xe=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.__webglTexture,W||0,Xe)}O=-1},this.readRenderTargetPixels=function(E,U,W,X,H,xe,De){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){Te.bindFramebuffer(B.FRAMEBUFFER,Fe);try{const ze=E.texture,Xe=ze.format,Ve=ze.type;if(Xe!==jn&&me.convert(Xe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===lo&&(Le.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Ve!==Qi&&me.convert(Ve)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===zi&&(Ie.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-X&&W>=0&&W<=E.height-H&&B.readPixels(U,W,X,H,me.convert(Xe),me.convert(Ve),xe)}finally{const ze=C!==null?Ue.get(C).__webglFramebuffer:null;Te.bindFramebuffer(B.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(E,U,W=0){const X=Math.pow(2,-W),H=Math.floor(U.image.width*X),xe=Math.floor(U.image.height*X);A.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,E.x,E.y,H,xe),Te.unbindTexture()},this.copyTextureToTexture=function(E,U,W,X=0){const H=U.image.width,xe=U.image.height,De=me.convert(W.format),Fe=me.convert(W.type);A.setTexture2D(W,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,E.x,E.y,H,xe,De,Fe,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,E.x,E.y,U.mipmaps[0].width,U.mipmaps[0].height,De,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,X,E.x,E.y,De,Fe,U.image),X===0&&W.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,U,W,X,H=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=E.max.x-E.min.x+1,De=E.max.y-E.min.y+1,Fe=E.max.z-E.min.z+1,ze=me.convert(X.format),Xe=me.convert(X.type);let Ve;if(X.isData3DTexture)A.setTexture3D(X,0),Ve=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),Ve=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const We=B.getParameter(B.UNPACK_ROW_LENGTH),St=B.getParameter(B.UNPACK_IMAGE_HEIGHT),hn=B.getParameter(B.UNPACK_SKIP_PIXELS),Nt=B.getParameter(B.UNPACK_SKIP_ROWS),ri=B.getParameter(B.UNPACK_SKIP_IMAGES),ht=W.isCompressedTexture?W.mipmaps[H]:W.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ht.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ht.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,E.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,E.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?B.texSubImage3D(Ve,H,U.x,U.y,U.z,xe,De,Fe,ze,Xe,ht.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ve,H,U.x,U.y,U.z,xe,De,Fe,ze,ht.data)):B.texSubImage3D(Ve,H,U.x,U.y,U.z,xe,De,Fe,ze,Xe,ht),B.pixelStorei(B.UNPACK_ROW_LENGTH,We),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St),B.pixelStorei(B.UNPACK_SKIP_PIXELS,hn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ri),H===0&&X.generateMipmaps&&B.generateMipmap(Ve),Te.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){P=0,R=0,C=null,Te.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===$f?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===wc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?Dr:e_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Dr?bt:ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class FA extends nh{}FA.prototype.isWebGL1Renderer=!0;class ic extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class S_ extends fn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class OA extends ra{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ii extends ra{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=t_,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zm extends Ii{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ih extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Uu=new Rt,Qm=new I,Jm=new I;class M_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Qm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qm),Jm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jm),n.updateMatrixWorld(),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const eg=new Rt,ya=new I,Iu=new I;class kA extends M_{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),i.position.copy(ya),Iu.copy(i.position),Iu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Iu),i.updateMatrixWorld(),r.makeTranslation(-ya.x,-ya.y,-ya.z),eg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eg)}}class BA extends ih{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zA extends M_{constructor(){super(new p_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends ih{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new zA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class HA extends ih{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class GA{constructor(e,n,i=0,r=1/0){this.ray=new o_(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Vd(e,this,i,n),i.sort(ng),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Vd(e[r],this,i,n);return i.sort(ng),i}}function ng(t,e){return t.distance-e.distance}function Vd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)Vd(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xf);const Je=600,wt=900,Ra='"Libre Caslon Display", Georgia, serif',E_="Inter, system-ui, sans-serif",rh="Délio Duchesne-Brajon";function Wd(t){const e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function VA(t){const[e,n,i]=Wd(t).map(r=>{const s=r/255;return s<=.03928?s/12.92:((s+.055)/1.055)**2.4});return .2126*e+.7152*n+.0722*i}function WA(t,e,n){const i=Wd(t),r=Wd(e);return`rgb(${i.map((s,a)=>Math.round(s+(r[a]-s)*n)).join(",")})`}function ig(t,e,n){const i=String(e).split(/\s+/),r=[];let s="";for(const a of i){const o=s?`${s} ${a}`:a;t.measureText(o).width>n&&s?(r.push(s),s=a):s=o}return s&&r.push(s),r}function hs(t,e,{family:n,weight:i=400,maxW:r,maxH:s,start:a=120,min:o=26,lh:l=1.02}){for(let c=a;c>=o;c-=2){t.font=`${i} ${c}px ${n}`;const d=ig(t,e,r),f=Math.max(...d.map(h=>t.measureText(h).width));if(d.length*c*l<=s&&f<=r)return{size:c,lines:d,lh:l}}return t.font=`${i} ${o}px ${n}`,{size:o,lines:ig(t,e,r),lh:l}}function ps(t,{size:e,lines:n,lh:i},r,s,a="left"){return t.textAlign=a,t.textBaseline="alphabetic",n.forEach((o,l)=>t.fillText(o,r,s+e*.82+l*e*i)),s+n.length*e*i}function vn(t,e,n,i,r,s="left",a=19,o=.16){t.save(),t.fillStyle=r,t.font=`500 ${a}px ${E_}`,t.textAlign=s,"letterSpacing"in t&&(t.letterSpacing=`${o}em`),t.fillText(String(e).toUpperCase(),n,i),t.restore()}function Sa(t,e=18){const n=t.getImageData(0,0,Je,wt),i=n.data;for(let r=0;r<i.length;r+=4){const s=(Math.random()-.5)*e;i[r]+=s,i[r+1]+=s,i[r+2]+=s}t.putImageData(n,0,0)}const yr="#ece8e1",Pi="#161616",cs="#6a665f";function jA(t){return VA(t)>.35?Pi:yr}function ol(t,e,n,i){vn(t,rh,56,wt-62,n,"left",15,.14),vn(t,e.footer,Je-56,wt-62,i,"right",15,.14)}const rg=[(t,e)=>{t.fillStyle=yr,t.fillRect(0,0,Je,wt),Sa(t,7),vn(t,e.kicker,56,98,cs,"left",16),t.fillStyle=e.color,t.fillRect(Je-56-22,80,22,22),t.fillStyle=Pi,t.fillRect(56,124,Je-112,1.5);const n=hs(t,e.title,{family:Ra,maxW:Je-112,maxH:420,start:96,lh:1.04});ps(t,n,56,170),t.fillRect(56,wt-104,Je-112,1),ol(t,e,Pi,cs)},(t,e)=>{t.fillStyle=e.color,t.fillRect(0,0,Je,wt),Sa(t,9);const n=jA(e.color),i=n===yr?"rgba(236,232,225,.62)":"rgba(22,22,22,.6)";vn(t,e.kicker,56,98,i,"left",16),t.fillStyle=i,t.fillRect(56,124,64,1.5),t.fillStyle=n;const r=hs(t,e.title,{family:Ra,maxW:Je-112,maxH:360,start:92,lh:1.04});ps(t,r,56,wt-150-r.lines.length*r.size*r.lh),ol(t,e,n,i)},(t,e)=>{t.fillStyle="#181818",t.fillRect(0,0,Je,wt),Sa(t,8),t.fillStyle=WA(e.color,yr,.35),t.fillRect(56,76,44,3),vn(t,e.kicker,56,124,"rgba(236,232,225,.6)","left",16),t.fillStyle=yr;const n=hs(t,e.title,{family:Ra,maxW:Je-112,maxH:420,start:92,lh:1.04});ps(t,n,56,190),ol(t,e,yr,"rgba(236,232,225,.55)")},(t,e)=>{t.fillStyle="#e4e1da",t.fillRect(0,0,Je,wt),Sa(t,6),vn(t,e.kicker,56,98,cs,"left",16),t.fillStyle=Pi;const n=hs(t,e.title,{family:E_,weight:600,maxW:Je-112,maxH:430,start:84,lh:1.06});ps(t,n,56,140),t.fillStyle=e.color,t.fillRect(56,wt-150,(Je-112)*.42,12),ol(t,e,Pi,cs)},(t,e)=>{t.fillStyle=yr,t.fillRect(0,0,Je,wt),Sa(t,7),t.strokeStyle=Pi,t.lineWidth=1.5,t.strokeRect(34,34,Je-68,wt-68),t.lineWidth=.8,t.strokeRect(44,44,Je-88,wt-88),vn(t,e.kicker,Je/2,140,cs,"center",15),t.fillStyle=e.color,t.fillRect(Je/2-24,170,48,2),t.fillStyle=Pi;const n=hs(t,e.title,{family:Ra,maxW:Je-150,maxH:380,start:84,lh:1.06});ps(t,n,Je/2,wt/2-n.lines.length*n.size*n.lh/2+10,"center"),vn(t,rh,Je/2,wt-124,Pi,"center",14,.14),vn(t,e.footer,Je/2,wt-96,cs,"center",13,.14)}];function sh({kicker:t="",title:e,footer:n="",color:i="#2c4f63",index:r=0,style:s}){const a=document.createElement("canvas");a.width=Je,a.height=wt;const o=a.getContext("2d",{willReadFrequently:!0}),l=rg[(s??r)%rg.length];return l(o,{kicker:t,title:e,footer:n,color:i,index:r}),a}function sg(t){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="#efe7d6",n.fillRect(0,0,256,256);for(let i=0;i<256;i+=2)n.fillStyle=`rgba(90,62,30,${.05+Math.random()*.12})`,t?n.fillRect(i,0,1,256):n.fillRect(0,i,256,1);return e}function XA({kicker:t="",title:e,footer:n="",color:i="#2c4f63"}){const r=document.createElement("canvas");r.width=Je,r.height=wt;const s=r.getContext("2d"),a=s.createLinearGradient(0,0,Je,0);a.addColorStop(0,"#e4dccb"),a.addColorStop(.08,"#f4eedf"),a.addColorStop(1,"#f1ead9"),s.fillStyle=a,s.fillRect(0,0,Je,wt),s.fillStyle=i,s.fillRect(Je/2-30,150,60,4),vn(s,t,Je/2,230,"#6b5a43","center",16),s.fillStyle="#16120d";const o=hs(s,e,{family:Ra,maxW:Je-150,maxH:330,start:70,min:24,lh:1.08});return ps(s,o,Je/2,280,"center"),s.fillStyle="#16120d",s.fillRect(Je/2-18,660,36,1.5),vn(s,rh,Je/2,720,"#16120d","center",16),vn(s,n,Je/2,756,"#6b5a43","center",14),vn(s,"BTS SIO · SLAM",Je/2,wt-70,"#8a7a63","center",12),r}function qA(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d");n.fillStyle="#808080",n.fillRect(0,0,256,256);for(let r=0;r<256;r+=2)n.fillStyle=`rgba(255,255,255,${.05+Math.random()*.12})`,n.fillRect(0,r,256,1),n.fillStyle=`rgba(0,0,0,${.05+Math.random()*.12})`,n.fillRect(r,0,1,256);const i=n.getImageData(0,0,256,256);for(let r=0;r<i.data.length;r+=4){const s=(Math.random()-.5)*30;i.data[r]+=s,i.data[r+1]+=s,i.data[r+2]+=s}return n.putImageData(i,0,0),e}async function w_(){if(document.fonts)try{await Promise.all([document.fonts.load('400 80px "Libre Caslon Display"'),document.fonts.load("500 20px Inter"),document.fonts.load("600 80px Inter")])}catch{}}const jd=.1786,$A=.174,rc=1.6,YA=2.5,KA="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";function T_(t){return Math.max(3,Math.ceil(1.9/(Math.max(t,1)*jd)))}const ZA=[.047,.047,.05],ag=(t,e,n)=>{const i=Math.min(1,Math.max(0,(n-t)/(e-t)));return i*i*(3-2*i)};function QA(){const t=e=>Array.from({length:e},()=>KA[Math.random()*36|0]).join("");return`${t(2+(Math.random()*2|0))} ${t(3+(Math.random()*2|0))}`}const og=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }
`,JA=`
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
`,eR=`
uniform float uX; uniform vec2 uRes; uniform float uS; uniform float uGrid; uniform vec4 uGR;
uniform float uMob; uniform float uCW;
varying vec2 vUv;
float topAt(float px) {
  float dxn = (px - uRes.x * 0.5) / uRes.x;
  float k = uMob > 0.5 ? ${rc.toFixed(1)} : 1.0;
  float base = uMob > 0.5 ? 0.26 : 0.217;
  return uRes.y * (base - 0.03 * smoothstep(0.30, 0.45, abs(dxn) * k));
}
float botAt() {
  float k = uMob > 0.5 ? ${rc.toFixed(1)} : 1.0;
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
`,tR=`
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
  // Apparition par cellules (5 × 7), chacune en fondu : sobre, sans pixels.
  vec2 cell = floor(vUv * vec2(5.0, 7.0));
  float r = hash(cell + uSeed) * 0.92 + 0.04;
  float show = smoothstep(r - 0.1, r + 0.02, uRev);
  col = mix(vec3(0.075, 0.075, 0.078), col, show);
  gl_FragColor = vec4(col, alpha * uAlpha);
}
`,nR=`
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
  // Réfraction douce, sans décomposition des couleurs (pas d'arc-en-ciel).
  vec2 off = -n * t * t * rim * 0.34;
  vec2 tang = vec2(-n.y, n.x);
  float spread = t * t * t * 0.002 * m;

  vec3 col = vec3(0.0);
  for (int k = -2; k <= 2; k++) {
    col += texture2D(uScene, tc(px + off + tang * float(k) * spread)).rgb;
  }
  col /= 5.0;

  // Bord de verre sobre : léger assombrissement et reflet neutre très discret.
  float xEdge = min(px.x, uRes.x - px.x);
  float bottom = px.y;
  float top = uRes.y - px.y;
  float k = clamp(min(min(xEdge / (0.12 * uRes.x), bottom / (0.19 * uRes.y)), top / (0.09 * uRes.y)), 0.0, 1.0);
  float mask = pow(1.0 - k, 1.7);
  col *= 1.0 - 0.3 * mask;
  col += vec3(0.91, 0.9, 0.88) * pow(mask, 2.4) * 0.035;
  gl_FragColor = vec4(col, 1.0);
}
`;function iR(t){var Be;const{container:e,canvas:n,items:i,labelEls:r=[],titleEl:s,tickEl:a,crossVideo:o,embedded:l=!1,onSelect:c,onCentre:d}=t,f=i.length,h=T_(f),m=f*h,x=window.matchMedia("(prefers-reduced-motion: reduce)").matches,_=new nh({canvas:n,antialias:!0,alpha:!1});_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.outputColorSpace=ii,_.autoClear=!1;const p=new Jf,u=[],v=Y=>(u.push(Y),Y),g=new ic,y=v(new Qs(1,1)),P={uBase:{value:new I(...ZA)},uRes:{value:new Qe(1,1)},uT:{value:0}},R=new at(y,v(new ni({uniforms:P,vertexShader:og,fragmentShader:JA,depthTest:!1,depthWrite:!1})));R.frustumCulled=!1,R.renderOrder=0,g.add(R);const C=v(new Qs(1,1,48,1)),O=i.map((Y,ne)=>{const N=v(new S_(sh({...Y.cover,index:Y.cover.styleIndex??ne})));return N.minFilter=Ys,N.anisotropy=_.capabilities.getMaxAnisotropy(),N}),M=Array.from({length:m},(Y,ne)=>{const N=ne%f,b={uTex:{value:O[N]},uX:{value:0},uRes:{value:P.uRes.value},uS:{value:1},uGrid:{value:0},uGR:{value:new ut},uMob:{value:0},uCW:{value:1},uSize:{value:new Qe(1,1)},uRev:{value:0},uSeed:{value:Math.random()*100},uHover:{value:0},uAlpha:{value:1},uImgA:{value:600/900}},te=new at(C,v(new ni({uniforms:b,vertexShader:eR,fragmentShader:tR,transparent:!0,depthTest:!1,depthWrite:!1})));return te.frustumCulled=!1,te.renderOrder=1,g.add(te),{m:ne,item:N,copy:Math.floor(ne/f),mesh:te,uni:b,x:0,s:1,hover:0,gr:[0,0,1,1],seen:!1,revStart:0,revDur:900,size:[1,1]}}),T=v(new nr(1,1,{depthBuffer:!1})),q={uScene:{value:T.texture},uRes:{value:P.uRes.value},uT:{value:0}},J=new ic,ue=new at(y,v(new ni({uniforms:q,vertexShader:og,fragmentShader:nR,depthTest:!1,depthWrite:!1})));ue.frustumCulled=!1,J.add(ue);const L={W:1,H:1,mob:!1,cw:1,pitch:jd};function G(){const Y=e.getBoundingClientRect();L.W=Math.max(1,Y.width),L.H=Math.max(1,Y.height),L.mob=L.W<760;const ne=L.mob?YA:1;L.cw=$A*ne*L.W,L.pitch=jd*ne,_.setSize(L.W,L.H,!1);const N=_.getPixelRatio();T.setSize(Math.round(L.W*N),Math.round(L.H*N)),P.uRes.value.set(L.W,L.H),$(),s!=null&&s.textContent&&Ce(s.dataset.scrambling==="1"?"XXXX XXXX":s.textContent)}function $(){const{W:Y,H:ne}=L,N=Math.min(L.mob?2:5,f),b=Math.ceil(f/N),te=.012*Y;let ae=(L.mob?.36:.13)*Y,_e=ae/.68;const K=ne*.74;b*_e+(b-1)*te>K&&(_e=(K-(b-1)*te)/b,ae=_e*.68);const He=N*ae+(N-1)*te,Ze=b*_e+(b-1)*te,it=(Y-He)/2,st=ne*.52-Ze/2;for(const Ge of M){const yt=Ge.item%N,zt=Math.floor(Ge.item/N);Ge.gr=[it+yt*(ae+te),st+zt*(_e+te),ae,_e]}}const ee=new ResizeObserver(G);ee.observe(e),G();let D=0,k=0;function z(Y){const{W:ne,H:N,mob:b}=L,te=(Y-ne/2)/ne;return N*((b?.26:.217)-.03*ag(.3,.45,Math.abs(te)*(b?rc:1)))}function ie(Y){const{H:ne,mob:N}=L;return ne*((N?.6:.659)-.135*ag(.12,.39,Math.abs(Y)*(N?rc:1)))}function Z(Y,ne,N){const{W:b,cw:te}=L,ae=b/2+Y.x*b,_e=ae+(ne-.5)*te,K=ie(Y.x),He=K+(z(_e)-K)*N,Ze=(z(ae)+K)/2;let it=ae+(_e-ae)*Y.s,st=Ze+(He-Ze)*Y.s;if(D>0){const[Ge,yt,zt,Kt]=Y.gr;it+=(Ge+ne*zt-it)*D,st+=(yt+(1-N)*Kt-st)*D}return[it,st]}function V(Y){return Y.copy===0?1:1-D}function re(Y,ne){let N=null;for(const b of M){if(V(b)<.5||D<.5&&Math.abs(b.x)>.62)continue;const[te]=Z(b,0,.5),[ae]=Z(b,1,.5);if(Y<Math.min(te,ae)||Y>Math.max(te,ae))continue;const _e=(Y-te)/(ae-te),[,K]=Z(b,_e,1),[,He]=Z(b,_e,0);ne>=K&&ne<=He&&(N=b)}return N}let de=null,fe=!1;function ye(Y){if(fe)try{de||(de=new(window.AudioContext||window.webkitAudioContext));const ne=de.createOscillator(),N=de.createGain();ne.type="square",ne.frequency.value=Y,N.gain.setValueAtTime(.03,de.currentTime),N.gain.exponentialRampToValueAtTime(1e-4,de.currentTime+.07),ne.connect(N).connect(de.destination),ne.start(),ne.stop(de.currentTime+.08)}catch{}}let Ne=0,be=0,Ae=null;const Pe={on:!1,id:null,x0:0,y0:0,start:0,moved:!1},B=Y=>{const ne=e.getBoundingClientRect();return[Y.clientX-ne.left,Y.clientY-ne.top]};function xt(Y){if(D>.5)return;const ne=Y.deltaMode===1?16:Y.deltaMode===2?L.H:1;let N;if(l){if(Math.abs(Y.deltaX)<=Math.abs(Y.deltaY))return;N=Y.deltaX}else N=Math.abs(Y.deltaX)>Math.abs(Y.deltaY)?Y.deltaX:Y.deltaY;Y.preventDefault(),be+=N*ne*42e-5*(L.mob?2:1)}function Le(Y){Y.button!==0||Y.target.closest("a, button")||(Pe.on=!0,Pe.id=Y.pointerId,[Pe.x0,Pe.y0]=B(Y),Pe.start=be,Pe.moved=!1)}function Ie(Y){const[ne,N]=B(Y);if(Pe.on&&Y.pointerId===Pe.id){const te=ne-Pe.x0;(Math.abs(te)>6||Math.abs(N-Pe.y0)>6)&&(Pe.moved=!0),D<.5&&Pe.moved&&(!l||Math.abs(te)>Math.abs(N-Pe.y0))&&(be=Pe.start-te/L.W*1.1)}const b=ne>=0&&N>=0&&ne<=L.W&&N<=L.H?re(ne,N):null;b!==Ae&&(Ae=b,e.classList.toggle("is-pointing",!!b))}function Te(Y){if(!Pe.on||Y.pointerId!==Pe.id||(Pe.on=!1,Pe.moved))return;const[ne,N]=B(Y),b=re(ne,N);b&&(ye(440),c==null||c(b.item))}function tt(){Ae&&(Ae=null,e.classList.remove("is-pointing"))}function Ue(Y){be=(Math.round(be/L.pitch)+Y)*L.pitch}function A(Y){D>.5||(Y.key==="ArrowRight"&&(Ue(1),Y.preventDefault()),Y.key==="ArrowLeft"&&(Ue(-1),Y.preventDefault()))}const S=l?e:window;e.addEventListener("wheel",xt,{passive:!1}),e.addEventListener("pointerdown",Le),window.addEventListener("pointermove",Ie,{passive:!0}),window.addEventListener("pointerup",Te),e.addEventListener("pointerleave",tt),S.addEventListener("keydown",A);const F=performance.now();function oe(Y,ne=0){for(const N of M)N.revStart=Y+ne+Math.random()*120,N.revDur=750}let se=!0;const le=new IntersectionObserver(([Y])=>{se=Y.isIntersecting});le.observe(e);let Me=0,he=F,ge=0,Re=-1,ke=null,j=0,Ee=!1;function ve(Y){!s||s.textContent===Y||(s.textContent=Y)}function Ce(Y){if(!s)return;const ne=(L.mob?.88:.64)*L.W,N=Math.min((L.mob?.1:.045)*L.W,ne/(.6*Math.max(Y.length,1)));s.style.fontSize=`${N}px`}function we(Y){var ae,_e;Me=requestAnimationFrame(we);const ne=Math.min(.05,(Y-he)/1e3);if(he=Y,!se||document.hidden)return;ge++;const N=(Y-F)/1e3;if(!Ee){Ee=!0;for(const K of M)K.x=me(K.m*L.pitch-Ne),K.revStart=F+200+Math.abs(K.x)*800,K.revDur=900,K.seen=Math.abs(K.x)<.62}Ne+=(be-Ne)*(1-Math.pow(1-.12,ne*30)),D+=(k-D)*(1-Math.pow(.88,ne*60)),Math.abs(k-D)<5e-4&&(D=k),P.uT.value=N,q.uT.value=N;let b=null;for(const K of M){K.x=me(K.m*L.pitch-Ne);const He=Math.abs(K.x)<.62;He&&!K.seen&&D<.5&&(K.revStart=Y+Math.random()*120,K.revDur=750),K.seen=He;const Ze=x?1.12:Math.min(1,Math.max(0,(Y-K.revStart)/K.revDur))*1.12,it=Ae===K?1:0;K.hover+=(it-K.hover)*.2,K.s=1+.015*K.hover;const[st]=Z(K,0,.5),[Ge]=Z(K,1,.5),[,yt]=Z(K,.5,1),[,zt]=Z(K,.5,0),Kt=K.uni;Kt.uX.value=K.x,Kt.uS.value=K.s,Kt.uGrid.value=D,Kt.uGR.value.set(...K.gr),Kt.uMob.value=L.mob?1:0,Kt.uCW.value=L.cw,Kt.uSize.value.set(Math.abs(Ge-st),Math.abs(zt-yt)),Kt.uRev.value=Ze,Kt.uHover.value=K.hover,Kt.uAlpha.value=V(K),K.mesh.visible=V(K)>.01&&(D>.01||Math.abs(K.x)<.75);const Wr=r[K.m];if(Wr){const[lr,aa]=Z(K,0,1),[jr,xo]=Z(K,1,1),yo=Math.atan2(xo-aa,jr-lr),Rc=K.mesh.visible&&(D>.5?K.copy===0:Math.abs(K.x)<.56);Wr.style.transform=`translate(${lr+2}px, ${aa-.006*L.H}px) rotate(${yo}rad) translateY(-100%)`,Wr.style.maxWidth=`${Math.abs(Ge-st)-4}px`,Wr.style.opacity=Rc?String(Math.min(1,Ze*1.4)*V(K)):"0"}(!b||Math.abs(K.x)<Math.abs(b.x))&&(b=K)}b&&b.item!==Re&&(Re=b.item,a&&(a.style.left=`${f>1?Re/(f-1)*100:0}%`),ye(1400),d==null||d(Re));const te=Math.abs(be-Ne)>.004;if(te&&!x)ge%3===0&&(ve(QA()),ke=null);else if(ke!==Re){ke=Re;const K=((ae=i[Re])==null?void 0:ae.title)??((_e=i[Re])==null?void 0:_e.label)??"";Ce(K),ve(K)}if(te&&s&&s.dataset.scrambling!=="1"?(s.dataset.scrambling="1",Ce("XXXX XXXX")):!te&&s&&(s.dataset.scrambling="0"),o&&ne>0){const K=Math.abs(Ne-j)/ne,He=Math.min(4,1+K*6);Math.abs(o.playbackRate-He)>.05&&(o.playbackRate=He)}j=Ne,_.setRenderTarget(T),_.clear(),_.render(g,p),_.setRenderTarget(null),_.clear(),_.render(J,p)}function me(Y){const ne=m*L.pitch;return((Y+ne/2)%ne+ne)%ne-ne/2}let Oe=!1;return(((Be=document.fonts)==null?void 0:Be.ready)??Promise.resolve()).then(()=>{Oe||(Me=requestAnimationFrame(we))}),{setGrid(Y){k=Y?1:0,oe(performance.now(),80)},jump(){Ue(3+Math.floor(Math.random()*4)),ye(220)},next(Y=1){Ue(Y)},setSfx(Y){fe=Y,Y&&ye(660)},get centre(){return Re},advance(Y){const ne=Math.round(Y*30);let N=performance.now();for(let b=0;b<ne;b++)N+=1e3/30,cancelAnimationFrame(Me),he=N-1e3/30,we(N)},dispose(){var Y;Oe=!0,cancelAnimationFrame(Me),ee.disconnect(),le.disconnect(),e.removeEventListener("wheel",xt),e.removeEventListener("pointerdown",Le),window.removeEventListener("pointermove",Ie),window.removeEventListener("pointerup",Te),e.removeEventListener("pointerleave",tt),S.removeEventListener("keydown",A),u.forEach(ne=>ne.dispose()),_.dispose(),(Y=de==null?void 0:de.close)==null||Y.call(de)}}}const A_=Q.forwardRef(function({items:e,embedded:n=!1,onSelect:i,onCentre:r,className:s="",grid:a=!1,children:o},l){const c=Q.useRef(null),d=Q.useRef(null),f=Q.useRef(null),h=Q.useRef(null),m=Q.useRef([]),x=Q.useRef(null),_=Q.useRef({onSelect:i,onCentre:r}),[p,u]=Q.useState(!1);_.current={onSelect:i,onCentre:r};const v=T_(e.length);return Q.useImperativeHandle(l,()=>({setGrid:g=>{var y;return(y=x.current)==null?void 0:y.setGrid(g)},next:g=>{var y;return(y=x.current)==null?void 0:y.next(g)}}),[]),Q.useEffect(()=>{let g=!1,y=null;return w_().then(()=>{if(!(g||!d.current))try{y=iR({container:c.current,canvas:d.current,items:e,labelEls:m.current,titleEl:f.current,tickEl:h.current,embedded:n,onSelect:P=>{var R,C;return(C=(R=_.current).onSelect)==null?void 0:C.call(R,P)},onCentre:P=>{var R,C;return(C=(R=_.current).onCentre)==null?void 0:C.call(R,P)}}),x.current=y}catch(P){console.warn("WebGL indisponible : galerie désactivée.",P),u(!0)}}),()=>{g=!0,y==null||y.dispose(),x.current=null}},[e,n]),Q.useEffect(()=>{var g;(g=x.current)==null||g.setGrid(a)},[a]),w.jsxs("div",{ref:c,className:`cg${n?" cg--embedded":""}${a?" is-grid":""} ${s}`,tabIndex:n?0:void 0,"aria-label":n?"Galerie : glissez ou utilisez les flèches pour parcourir":void 0,children:[!p&&w.jsx("canvas",{ref:d,className:"cg-canvas","aria-hidden":"true"}),w.jsx("div",{className:"cg-labels","aria-hidden":"true",children:Array.from({length:e.length*v},(g,y)=>w.jsx("span",{ref:P=>{m.current[y]=P},className:"cg-label",children:e[y%e.length].label},y))}),w.jsx("div",{ref:f,className:"cg-title","aria-live":"polite"}),w.jsx("div",{className:"cg-rule","aria-hidden":"true",children:w.jsx("i",{ref:h})}),p&&w.jsx("div",{className:"cg-fallback",children:e.map((g,y)=>w.jsx("button",{type:"button",onClick:()=>{var P,R;return(R=(P=_.current).onSelect)==null?void 0:R.call(P,y)},children:g.title??g.label},(g.title??g.label)+y))}),o]})});function rR(){const[t,e]=Q.useState(null);function n(i){i.preventDefault();const r=i.currentTarget;if(r.site_web.value)return;const s=r.nom.value.trim(),a=r.email.value.trim(),o=r.message.value.trim();if(!s||!a||!o){e({ok:!1,text:"Merci de remplir les trois champs."});return}const l=encodeURIComponent(`Contact portfolio — ${s}`),c=encodeURIComponent(`${o}

— ${s} (${a})`);window.location.href=`mailto:${Fs}?subject=${l}&body=${c}`,e({ok:!0,text:"Ta messagerie va s’ouvrir avec le message prêt à envoyer."})}return w.jsxs("form",{className:"form",onSubmit:n,noValidate:!0,children:[w.jsxs("div",{className:"form-honeypot","aria-hidden":"true",children:[w.jsx("label",{htmlFor:"site_web",children:"Ne pas remplir"}),w.jsx("input",{id:"site_web",name:"site_web",tabIndex:-1,autoComplete:"off"})]}),w.jsxs("label",{className:"form-row",children:[w.jsx("span",{children:"Nom"}),w.jsx("input",{name:"nom",required:!0,autoComplete:"name"})]}),w.jsxs("label",{className:"form-row",children:[w.jsx("span",{children:"Email"}),w.jsx("input",{name:"email",type:"email",required:!0,autoComplete:"email"})]}),w.jsxs("label",{className:"form-row",children:[w.jsx("span",{children:"Message"}),w.jsx("textarea",{name:"message",rows:4,required:!0})]}),w.jsx("button",{className:"pill pill-lg",type:"submit",children:"Envoyer"}),t&&w.jsx("p",{className:`form-note${t.ok?" is-ok":" is-err"}`,role:"status",children:t.text})]})}const sR=t=>`${t} compte${t>1?"s":""} rendu${t>1?"s":""}`,bs=`${Vn.label} · ${Vn.periode}`,lg=[...Os.map(t=>({label:bs,title:t.matiere,to:`/matiere/${t.slug}`,cover:{kicker:bs,title:t.matiere,footer:sR(t.comptes_rendus.length),color:t.couleur}})),{label:bs,title:"Contrôle",to:"/controle",cover:{kicker:bs,title:"Contrôle",footer:"PHP · GSB · Flutter",color:"#3a3a3a",styleIndex:2}}];function cg({bloc:t,index:e}){return w.jsx("div",{className:"matiere-row",style:{"--c":t.couleur},children:w.jsxs(en,{to:`/matiere/${t.slug}`,className:"matiere-title",children:[w.jsx("span",{className:"matiere-idx",children:jf(e+1)}),w.jsx("span",{className:"matiere-name",children:t.matiere}),w.jsxs("span",{className:"matiere-meta",children:[t.anneeLabel," · ",t.comptes_rendus.length," CR"]}),w.jsx("span",{className:"matiere-go","aria-hidden":"true",children:"→"})]})})}function aR(){const t=or(),e=Wf(),n=Q.useRef(null),i=Q.useRef(null),r=Q.useMemo(()=>lg.map(({label:s,title:a,cover:o})=>({label:s,title:a,cover:o})),[]);return Q.useEffect(()=>{var o;const s=(o=t.state)==null?void 0:o.scrollTo;if(!s)return;s==="archives"&&i.current&&(i.current.open=!0);const a=document.getElementById(s);a&&setTimeout(()=>a.scrollIntoView({behavior:"smooth",block:"start"}),50)},[t.key,t.state]),w.jsxs("main",{children:[w.jsx("section",{className:"hero-gallery",children:w.jsxs(A_,{ref:n,items:r,embedded:!0,onSelect:s=>e(lg[s].to),children:[w.jsxs("div",{className:"hg-eyebrow",children:["Délio Duchesne-Brajon · BTS SIO SLAM · ",bs]}),w.jsxs("div",{className:"hg-controls",children:[w.jsx("button",{type:"button",onClick:()=>{var s;return(s=n.current)==null?void 0:s.next(-1)},"aria-label":"Carte précédente",children:"←"}),w.jsx("span",{children:"Glissez · cliquez sur une carte"}),w.jsx("button",{type:"button",onClick:()=>{var s;return(s=n.current)==null?void 0:s.next(1)},"aria-label":"Carte suivante",children:"→"})]})]})}),w.jsxs("section",{className:"intro wrap",children:[w.jsx("div",{className:"eyebrow",children:"Portfolio — BTS SIO SLAM"}),w.jsx("p",{className:"lede-xl",children:"Étudiant en BTS SIO SLAM, je conçois des applications web métier et j’entretiens des infrastructures IT — du code jusqu’au câblage. J’aime transformer un besoin concret en outil fiable."}),w.jsxs("dl",{className:"facts",children:[w.jsxs("div",{children:[w.jsx("dt",{children:"Formation"}),w.jsx("dd",{children:"BTS SIO — SLAM, Lycée Dominique Villars, Gap"})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"Compétences"}),w.jsx("dd",{children:"PHP · MySQL · JavaScript · Java · UML · Réseaux"})]}),w.jsxs("div",{children:[w.jsx("dt",{children:Vn.label}),w.jsxs("dd",{children:[Pp," comptes rendus, ",Os.length," blocs"]})]})]})]}),w.jsxs("section",{className:"sommaire wrap",id:"sommaire",children:[w.jsxs("div",{className:"section-head",children:[w.jsxs("div",{className:"eyebrow",children:["01 — Sommaire · ",bs]}),w.jsx("h2",{className:"display",children:"Comptes rendus"}),w.jsxs("p",{className:"muted",children:["Les blocs de ",Vn.label,". Cliquez sur un titre pour ouvrir sa galerie."]})]}),w.jsxs("div",{className:"annee",id:`annee-${Vn.cle}`,children:[w.jsxs("div",{className:"annee-head",children:[w.jsx("h3",{className:"display",children:Vn.label}),w.jsxs("span",{className:"muted",children:[Vn.periode," · ",Os.length," blocs · ",Pp," comptes rendus"]})]}),w.jsx("div",{className:"matieres",children:Os.map((s,a)=>w.jsx(cg,{bloc:s,index:a},s.slug))})]}),Nd.map(s=>{const a=s.blocs.reduce((o,l)=>o+l.comptes_rendus.length,0);return w.jsxs("details",{className:"archives",id:"archives",ref:i,children:[w.jsxs("summary",{children:[w.jsxs("span",{className:"archives-title",children:["Archives — ",s.label]}),w.jsxs("span",{className:"muted",children:[s.periode," · ",s.blocs.length," matières · ",a," comptes rendus"]}),w.jsx("span",{className:"archives-plus","aria-hidden":"true"})]}),w.jsx("div",{className:"matieres",children:s.blocs.map((o,l)=>w.jsx(cg,{bloc:o,index:l},o.slug))})]},s.cle)})]}),w.jsxs("section",{className:"contact wrap",id:"contact",children:[w.jsx("div",{className:"eyebrow",children:"02 — Contact"}),w.jsx("h2",{className:"display contact-cta",children:w.jsx("a",{href:`mailto:${Fs}`,children:"Discutons de votre projet →"})}),w.jsxs("div",{className:"contact-grid",children:[w.jsxs("dl",{className:"facts",children:[w.jsxs("div",{children:[w.jsx("dt",{children:"Email"}),w.jsx("dd",{children:w.jsx("a",{href:`mailto:${Fs}`,children:Fs})})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"Formation"}),w.jsx("dd",{children:"BTS SIO — SLAM"})]}),w.jsxs("div",{children:[w.jsx("dt",{children:"Curriculum vitae"}),w.jsx("dd",{children:w.jsx("a",{href:oo(B0),download:!0,children:"Télécharger le CV ↓"})})]})]}),w.jsx(rR,{})]})]})]})}function ah(){return w.jsx("main",{className:"page-pad",children:w.jsxs("section",{className:"wrap notfound",children:[w.jsx("h1",{className:"display",children:"Page introuvable"}),w.jsx("p",{className:"muted",children:"Ce livre n’est pas (encore) sur l’étagère."}),w.jsx(en,{to:"/",className:"pill pill-lg",children:"Retour à l’accueil"})]})})}function oR({bloc:t,index:e,onClose:n}){const i=t.comptes_rendus[e],r=Q.useMemo(()=>H0(t)[e],[t,e]),s=Q.useMemo(()=>sh({...r,index:r.styleIndex}).toDataURL("image/png"),[r]),a=Q.useMemo(()=>Array.from({length:35},()=>300+Math.random()*700),[e]);return Q.useEffect(()=>{const o=l=>{l.key==="Escape"&&n()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[n]),w.jsxs("div",{className:"gx-detail",role:"dialog","aria-modal":"true","aria-label":i.titre,children:[w.jsx("button",{type:"button",className:"gx-link gx-close",onClick:n,children:"Fermer"}),w.jsxs("div",{className:"gx-detail-img",children:[w.jsx("img",{src:s,alt:""}),w.jsx("div",{className:"gx-blocks","aria-hidden":"true",children:a.map((o,l)=>w.jsx("i",{style:{animationDelay:`${o}ms`}},l))})]}),w.jsxs("div",{className:"gx-detail-txt",children:[w.jsxs("div",{className:"gx-mute",children:[t.anneeLabel," · Compte rendu ",jf(e+1)]}),w.jsx("h2",{className:"gx-detail-title",children:i.titre}),w.jsxs("p",{children:[Ar(i.date)," — ",t.matiere,". ",t.description]}),w.jsxs("div",{className:"gx-detail-actions",children:[w.jsx(en,{to:`/cr/${i.slug}`,className:"gx-btn",children:"Ouvrir la fiche →"}),w.jsxs("a",{href:oo(i.fichier),download:!0,className:"gx-link",children:["Télécharger ",z0(i.fichier)?"le PDF":"le fichier"," ↓"]})]})]})]})}function lR(){const{slug:t}=U0(),e=mM(t),[n,i]=Q.useState(!1),[r,s]=Q.useState(null),a=Q.useMemo(()=>e?H0(e).map((l,c)=>({label:e.comptes_rendus[c].titre,cover:l})):[],[e]);if(Q.useEffect(()=>(document.documentElement.classList.add("gx-lock"),()=>document.documentElement.classList.remove("gx-lock")),[]),!e)return w.jsx(ah,{});const o=e.comptes_rendus.length;return w.jsxs("main",{className:"gx",children:[w.jsxs(A_,{items:a,grid:n,onSelect:l=>s(l),children:[w.jsxs("div",{className:"gx-eyebrow",children:[e.anneeLabel," · ",e.periode," — ",e.matiere]}),w.jsxs("footer",{className:"gx-foot",children:[w.jsx(en,{to:"/",state:{scrollTo:"sommaire"},className:"gx-link gx-f-left",children:"← Sommaire"}),w.jsxs("span",{className:"gx-f-centre",children:[e.anneeLabel," — ",o," compte",o>1?"s":""," rendu",o>1?"s":""]}),w.jsx("button",{type:"button",className:"gx-link gx-f-right",onClick:()=>i(l=>!l),children:n?"Vue bande":"Vue grille"})]})]}),r!==null&&w.jsx(oR,{bloc:e,index:r,onClose:()=>s(null)})]})}function cR(){var c;const{slug:t}=U0(),e=gM(t);if(!e)return w.jsx(ah,{});const{bloc:n,cr:i,index:r}=e,s=z0(i.fichier),a=n.comptes_rendus[r-1],o=n.comptes_rendus[r+1],l=i.fichier.split(".").pop().toUpperCase();return w.jsx("main",{className:"page-pad",children:w.jsxs("section",{className:"wrap cr-detail",children:[w.jsxs(en,{to:`/matiere/${n.slug}`,className:"back",children:["← ",n.matiere]}),w.jsxs("header",{className:"cr-head",children:[w.jsxs("div",{className:"eyebrow",style:{"--c":n.couleur},children:[w.jsx("i",{className:"dot"})," ",n.anneeLabel," — ",n.matiere]}),w.jsx("h1",{className:"display cr-h1",children:i.titre}),w.jsx("div",{className:"muted",children:Ar(i.date)})]}),w.jsxs("div",{className:"cr-body",children:[w.jsxs("aside",{className:"cr-side",children:[w.jsx("p",{className:"lede",children:n.description}),((c=n.competences)==null?void 0:c.length)>0&&w.jsx("div",{className:"tags",children:n.competences.map(d=>w.jsx("span",{className:"tag",children:d},d))}),w.jsxs("a",{className:"pill pill-lg",href:oo(i.fichier),download:!0,children:["Télécharger ",s?"le PDF":"le fichier"," ↓"]}),w.jsxs("nav",{className:"cr-pager","aria-label":"Comptes rendus de la matière",children:[a?w.jsxs(en,{to:`/cr/${a.slug}`,children:["← ",a.titre]}):w.jsx("span",{}),o?w.jsxs(en,{to:`/cr/${o.slug}`,children:[o.titre," →"]}):w.jsx("span",{})]})]}),w.jsx("div",{className:"cr-preview",children:s?w.jsx("iframe",{src:oo(i.fichier),title:`Aperçu du PDF — ${i.titre}`,loading:"lazy"}):w.jsx("div",{className:"cr-fallback",children:w.jsxs("p",{children:["Ce document (",l,") ne s’affiche pas directement ici — télécharge-le pour le consulter."]})})})]})]})})}class uR extends ic{constructor(e=null){super();const n=new Mi;n.deleteAttribute("uv");const i=new Ii({side:rn}),r=new Ii;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const a=new BA(16777215,s,28,2);a.position.set(.418,16.199,.3),this.add(a);const o=new at(n,i);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const l=new at(n,r);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);const c=new at(n,r);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);const d=new at(n,r);d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),this.add(d);const f=new at(n,r);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);const h=new at(n,r);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const m=new at(n,r);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);const x=new at(n,us(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);const _=new at(n,us(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);const p=new at(n,us(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const u=new at(n,us(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const v=new at(n,us(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const g=new at(n,us(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function us(t){const e=new Qf;return e.color.setScalar(t),e}const Ma=new I;function An(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Ma.copy(e),Ma[i]=0,Ma.normalize();const c=.5*a/(a+o),d=1-Ma.angleTo(t)/l;return Math.sign(Ma[n])===1?d*c:o/(a+o)+c+c*(1-d)}class dR extends Mi{constructor(e=1,n=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,n/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new I,l=new I,c=new I(e,n,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,m=d.length/6,x=new I,_=.5/r;for(let p=0,u=0;p<d.length;p+=3,u+=2)switch(o.fromArray(d,p),l.copy(o),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),d[p+0]=c.x*Math.sign(o.x)+l.x*s,d[p+1]=c.y*Math.sign(o.y)+l.y*s,d[p+2]=c.z*Math.sign(o.z)+l.z*s,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:x.set(1,0,0),h[u+0]=An(x,l,"z","y",s,i),h[u+1]=1-An(x,l,"y","z",s,n);break;case 1:x.set(-1,0,0),h[u+0]=1-An(x,l,"z","y",s,i),h[u+1]=1-An(x,l,"y","z",s,n);break;case 2:x.set(0,1,0),h[u+0]=1-An(x,l,"x","z",s,e),h[u+1]=An(x,l,"z","x",s,i);break;case 3:x.set(0,-1,0),h[u+0]=1-An(x,l,"x","z",s,e),h[u+1]=1-An(x,l,"z","x",s,i);break;case 4:x.set(0,0,1),h[u+0]=1-An(x,l,"x","y",s,e),h[u+1]=1-An(x,l,"y","x",s,n);break;case 5:x.set(0,0,-1),h[u+0]=An(x,l,"x","y",s,e),h[u+1]=1-An(x,l,"y","x",s,n);break}}}const Fu=70,Ou=12.5,ug=4,ds=1,El=1.5,ll=.2,cl=.024,dg=.03,fR=-1.12-El/2,fg={hero:{pos:[3.6,2.15,7.4],look:[-1.4,.05,-.6],fov:19.5,fovPortrait:40,x0:1.55,center:!1},shelf:{pos:[3.2,1,9.2],look:[-.9,-.95,-.6],fov:21,x0:-1.1,center:!0,maxStep:.68,fitWidth:36}};function hR(t,{books:e,onHover:n,reduceMotion:i=!1,framing:r="hero"}){const s=fg[r]||fg.hero,a=new nh({canvas:t,antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.toneMapping=j0,a.toneMappingExposure=1.05,a.outputColorSpace=bt,a.setClearColor(0,0),a.shadowMap.enabled=!0,a.shadowMap.type=V0;const o=new ic,l=new Hd(a),c=l.fromScene(new uR,.04);o.environment=c.texture;const d=.55;o.environmentIntensity=d;const f=new tg(16774116,2.4);f.position.set(-4,6,6),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),f.shadow.radius=6,f.shadow.bias=-4e-4,f.shadow.normalBias=.02,Object.assign(f.shadow.camera,{left:-12,right:8,top:7,bottom:-7,near:.5,far:30});const h=new tg(12571391,1.1);h.position.set(6,3,-4),o.add(f,h,new HA(16777215,.12));const m=new OA({opacity:.42,depthWrite:!1}),x=new at(new Qs(60,60),m);x.rotation.x=-Math.PI/2,x.position.y=fR-.002,x.receiveShadow=!0,o.add(x);const _=new _n(s.fov,1,.1,100);_.position.set(...s.pos),_.lookAt(new I(...s.look));const p=a.capabilities.getMaxAnisotropy(),u=[c,l,m,x.geometry],v=(j,Ee=!0)=>{const ve=new S_(j);return Ee&&(ve.colorSpace=bt),ve.anisotropy=p,u.push(ve),ve},g=v(sg(!1)),y=v(sg(!0)),P=v(qA(),!1);P.wrapS=P.wrapT=Kl,P.repeat.set(5,7.5);const R=j=>(u.push(j),j),C=R(new Ii({map:g,roughness:.92,envMapIntensity:d})),O=R(new Ii({map:y,roughness:.92,envMapIntensity:d})),M=R(new Ii({color:15854297,roughness:.95,envMapIntensity:d})),T=ds-.03,q=El-.04,J=ll-2*cl-.004,ue=new Mi(ds,El,cl),L=new Mi(T,q,J),G=new dR(dg*2,El,ll,3,.012);u.push(ue,L,G);const $=e.length,ee=Math.min(s.maxStep??.95,Math.max(.5,12/Math.max($,1))),D=s.center?($-1)*ee/2+s.x0:s.x0,k=s.center?($-1)*ee*.4/2:.9,z=[],ie=e.map((j,Ee)=>{const ve=new Ye(j.color),Ce=ve.clone().multiplyScalar(.62),we=v(sh({...j,index:j.styleIndex??Ee})),me=v(XA(j)),Oe=R(new Zm({map:we,roughness:.42,clearcoat:.55,clearcoatRoughness:.35,bumpMap:P,bumpScale:.6,envMapIntensity:d})),Be=R(new Zm({color:Ce,roughness:.62,clearcoat:.25,bumpMap:P,bumpScale:.9,envMapIntensity:d})),Y=R(new Ii({color:ve.clone().lerp(new Ye(15854297),.78),roughness:.9,envMapIntensity:d})),ne=R(new Ii({map:me,roughness:.9,envMapIntensity:d})),N=new Rr;N.position.set(D-Ee*ee,-1.12,k-Ee*ee*.4),N.rotation.y=.32;const b=new Rr;N.add(b);const te=(K,He,Ze,it,st=b)=>{const Ge=new at(K,He);return Ge.position.set(Ze,0,it),Ge.castShadow=!0,Ge.receiveShadow=!0,Ge.userData.index=Ee,st.add(Ge),z.push(Ge),Ge};te(L,[C,M,O,O,ne,M],-ds/2+dg+T/2-.012,0),te(ue,[Be,Be,Be,Be,Y,Be],0,-ll/2+cl/2);const ae=new Rr;ae.position.set(-ds/2,0,ll/2-cl/2),b.add(ae),te(ue,[Be,Be,Be,Be,Oe,Y],ds/2,0,ae),te(G,Be,-ds/2+.002,0),o.add(N);const _e=i?0:-3;return b.position.y=_e,{group:N,root:b,hinge:ae,y:_e,vy:0,z:0,vz:0,a:0,va:0,delay:.25+($-Ee)*.035}});let Z=1,V=1;function re(){const j=t.getBoundingClientRect();if(Z=Math.max(1,j.width),V=Math.max(1,j.height),a.setSize(Z,V,!1),_.aspect=Z/V,s.fitWidth){const Ee=Math.tan(hm.degToRad(s.fitWidth/2))/_.aspect;_.fov=Math.max(s.fov,hm.radToDeg(2*Math.atan(Ee)))}else _.fov=Z<V?s.fovPortrait:s.fov;_.updateProjectionMatrix()}const de=new ResizeObserver(re);de.observe(t),re();const fe={x:0,y:0,inside:!1,lastMove:-1/0},ye=window.matchMedia("(pointer: coarse)").matches;let Ne=document.hasFocus(),be=null,Ae=null;const Pe=new GA,B=new Qe;function xt(j,Ee){const ve=t.getBoundingClientRect();if(j<ve.left||j>ve.right||Ee<ve.top||Ee>ve.bottom)return null;B.set((j-ve.left)/ve.width*2-1,-((Ee-ve.top)/ve.height)*2+1),Pe.setFromCamera(B,_);const Ce=Pe.intersectObjects(z,!1)[0];return Ce?Ce.object.userData.index:null}function Le(j){const Ee=t.getBoundingClientRect();fe.x=j.clientX-Ee.left,fe.y=j.clientY-Ee.top,fe.inside=fe.x>=0&&fe.y>=0&&fe.x<=Ee.width&&fe.y<=Ee.height,fe.lastMove=performance.now();const ve=fe.inside?xt(j.clientX,j.clientY):null;ve!==be&&(be=ve,n==null||n(ve))}function Ie(){fe.inside=!1,be!==null&&(be=null,n==null||n(null))}const Te=()=>{Ne=!1,Ie()},tt=()=>{Ne=!0};window.addEventListener("pointermove",Le,{passive:!0}),document.documentElement.addEventListener("pointerleave",Ie),window.addEventListener("blur",Te),window.addEventListener("focus",tt);const Ue=new I,A=(j,Ee)=>(Ue.set(0,.1,0),j.root.localToWorld(Ue),Ue.project(_),Ee.x=(Ue.x*.5+.5)*Z,Ee.y=(-Ue.y*.5+.5)*V,Ee),S={x:0,y:0},F={x:0,y:0},oe={x:0,y:0};let se=!0;const le=new IntersectionObserver(([j])=>{se=j.isIntersecting});le.observe(t);let Me=0,he=performance.now();const ge=he;function Re(j){Me=requestAnimationFrame(Re);const Ee=Math.min(.05,(j-he)/1e3);he=j,!(!se||document.hidden)&&ke(Ee,j,(j-ge)/1e3)}function ke(j,Ee,ve){let Ce=fe.x,we=fe.y,me=fe.inside&&Ne;const Oe=Ee-fe.lastMove>4e3;if(!i&&$>1&&Ae===null&&(ye||Oe)){const ne=(Math.sin(ve*.45)+1)/2;A(ie[Math.min($-1,Math.max(1,$-3))],F),A(ie[Math.min(1,$-1)],oe),Ce=F.x+(oe.x-F.x)*ne,we=F.y+(oe.y-F.y)*ne,me=!0}const Be=Math.max(window.innerWidth,window.innerHeight)*.085,Y=j/ug;for(let ne=0;ne<$;ne++){const N=ie[ne];let b=0;if(me&&Ae===null){A(N,S);const K=S.x-Ce,He=(S.y-we)*.55;b=.78*Math.exp(-(K*K+He*He)/(Be*Be))}let te=0;be===ne&&Ae===null&&(b=Math.max(b,.55),te=.32),Ae===ne&&(b=.9,te=1.95);const ae=!i&&ve<=N.delay?-3:b,_e=b*.35+(Ae===ne?.45:0);for(let K=0;K<ug;K++)N.vy+=((ae-N.y)*Fu-N.vy*Ou)*Y,N.y+=N.vy*Y,N.vz+=((_e-N.z)*Fu-N.vz*Ou)*Y,N.z+=N.vz*Y,N.va+=((te-N.a)*Fu*.6-N.va*Ou)*Y,N.a+=N.va*Y;N.root.position.y=N.y,N.root.position.z=N.z,N.root.rotation.x=-N.vy*.012,N.hinge.rotation.y=-Math.max(0,N.a)}a.render(o,_)}return Me=requestAnimationFrame(Re),{pick:xt,open(j){return Ae=j,new Promise(Ee=>setTimeout(Ee,i?0:520))},close(){Ae=null},advance(j,Ee={x:-1,y:-1},ve=null){Ee.x>=0&&(fe.x=Ee.x,fe.y=Ee.y,fe.inside=!0,fe.lastMove=performance.now()+j*1e3,Ne=!0),ve!==null&&(be=ve);const Ce=Math.round(j*60),we=performance.now()-ge;for(let me=1;me<=Ce;me++)ke(1/60,ge+we+me*1e3/60,(we+me*1e3/60)/1e3+5)},dispose(){cancelAnimationFrame(Me),de.disconnect(),le.disconnect(),window.removeEventListener("pointermove",Le),document.documentElement.removeEventListener("pointerleave",Ie),window.removeEventListener("blur",Te),window.removeEventListener("focus",tt),u.forEach(j=>j.dispose()),a.dispose()}}}const pR=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function mR({books:t,framing:e="hero",targetRef:n,className:i=""}){const r=Q.useRef(null),s=Q.useRef(null),a=Q.useRef(null),o=Q.useRef(!1),[l,c]=Q.useState(null),[d,f]=Q.useState(!1),h=Wf();Q.useEffect(()=>{let x=!1,_=null;return w_().then(()=>{if(!(x||!r.current))try{_=hR(r.current,{books:t,onHover:c,reduceMotion:pR(),framing:e}),a.current=_}catch(p){console.warn("WebGL indisponible : livres 3D désactivés.",p),f(!0)}}),()=>{x=!0,_==null||_.dispose(),a.current=null,c(null)}},[t,e]),Q.useEffect(()=>{const x=_=>{s.current&&(s.current.style.transform=`translate(${_.clientX+18}px, ${_.clientY+18}px)`)};return window.addEventListener("pointermove",x,{passive:!0}),()=>window.removeEventListener("pointermove",x)},[]),Q.useEffect(()=>{const x=n==null?void 0:n.current;if(!x)return;async function _(p){var y;if(o.current||p.target.closest("a, button, input, textarea, iframe"))return;const u=a.current,v=u==null?void 0:u.pick(p.clientX,p.clientY);if(v==null)return;const g=t[v];g.href&&window.open(g.href,"_blank","noopener"),o.current=!0,await u.open(v),o.current=!1,g.action?(u.close(),g.action()):g.to?h(g.to):(u.close(),g.anchor&&((y=document.getElementById(g.anchor))==null||y.scrollIntoView({behavior:"smooth",block:"start"})))}return x.addEventListener("click",_),()=>x.removeEventListener("click",_)},[t,h,n]),Q.useEffect(()=>{const x=n==null?void 0:n.current;x&&x.classList.toggle("is-pointing",l!=null)},[l,n]);const m=l!=null?t[l]:null;return w.jsxs(w.Fragment,{children:[!d&&w.jsx("canvas",{ref:r,className:`book-canvas ${i}`,"aria-hidden":"true"}),w.jsx("div",{ref:s,className:`hero-tip${m?" is-on":""}`,"aria-hidden":"true",children:m&&w.jsxs(w.Fragment,{children:[w.jsx("span",{className:"hero-tip-kicker",children:m.footer}),w.jsx("span",{children:m.title})]})})]})}const hg="cubic-bezier(.2,.8,.2,1)",gR=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function R_({wordmark:t,eyebrow:e,links:n=[],books:i}){const r=Q.useRef(null),s=Q.useRef(null),a=Q.useRef(null);Q.useEffect(()=>{if(gR())return;const l=[];return s.current&&l.push(s.current.animate([{opacity:0,transform:"translateY(4vh)",filter:"blur(14px)"},{opacity:1,transform:"translateY(0)",filter:"blur(0)"}],{duration:1400,delay:150,easing:hg,fill:"both"})),a.current&&l.push(a.current.animate([{opacity:0,transform:"translateY(1.2vh)"},{opacity:1,transform:"translateY(0)"}],{duration:900,delay:850,easing:hg,fill:"both"})),()=>l.forEach(c=>c.cancel())},[t]);const o=Math.max(5,[...t].length);return w.jsxs("section",{ref:r,className:`hero${o>12?" hero--long":""}`,style:{"--len":o},children:[e&&w.jsx("div",{className:"hero-eyebrow",children:e}),w.jsx("h1",{ref:s,className:"wordmark",children:t}),n.length>0&&w.jsx("nav",{ref:a,className:"hero-links","aria-label":"Accès direct",children:n.map(l=>l.onClick?w.jsx("button",{type:"button",onClick:l.onClick,children:l.label},l.label):w.jsx(en,{to:l.to,children:l.label},l.to+l.label))}),w.jsx(mR,{books:i,framing:"hero",targetRef:r,className:"hero-canvas"}),w.jsx("div",{className:"hero-hint","aria-hidden":"true",children:"Survolez les livres · cliquez pour ouvrir"})]})}function vR(){const{meta:t,mois:e}=fM,n=Q.useMemo(()=>e.map((i,r)=>({kicker:"Veille · IA & Santé",title:i.mois,footer:`${i.entrees.length} info${i.entrees.length>1?"s":""}`,color:ao(r*3+1),styleIndex:r+2,anchor:`mois-${r}`})),[e]);return w.jsxs("main",{children:[w.jsx(R_,{wordmark:"Veille",eyebrow:`${t.sujet} — depuis le ${Ar(t.debut)}`,books:n}),w.jsxs("section",{className:"wrap veille",children:[w.jsxs("div",{className:"section-head",children:[w.jsx("div",{className:"eyebrow",children:"Veille technologique — BTS SIO SLAM"}),w.jsx("h2",{className:"display",children:"IA & Santé"}),w.jsxs("p",{className:"lede",children:["Suivi régulier de l’actualité sur l’intelligence artificielle appliquée à la médecine — une information relevée tous les ",t.frequence," depuis le ",Ar(t.debut),"."]})]}),w.jsxs("div",{className:"stats",children:[w.jsxs("div",{children:[w.jsx("b",{className:"display",children:t.informations}),w.jsx("span",{children:"informations suivies"})]}),w.jsxs("div",{children:[w.jsx("b",{className:"display",children:t.mois}),w.jsx("span",{children:"mois de veille"})]}),w.jsxs("div",{children:[w.jsx("b",{className:"display",children:t.sources}),w.jsx("span",{children:"sources différentes"})]}),w.jsxs("div",{children:[w.jsx("b",{className:"display",children:"↻"}),w.jsx("span",{children:t.frequence})]})]}),w.jsxs("p",{className:"muted",children:["Mise à jour le ",Ar(t.maj),". Chaque entrée précise l’outil de veille utilisé et renvoie vers la source."]}),e.map((i,r)=>w.jsxs("div",{className:"mois",id:`mois-${r}`,children:[w.jsxs("div",{className:"mois-label",children:[w.jsx("h3",{className:"display",children:i.mois}),w.jsxs("span",{className:"muted",children:[i.entrees.length," info",i.entrees.length>1?"s":""]})]}),w.jsx("div",{className:"entrees",children:i.entrees.map(s=>w.jsxs("article",{className:"entree",children:[w.jsx("div",{className:"entree-date",children:Ar(s.date)}),w.jsxs("div",{children:[w.jsxs("div",{className:"entree-head",children:[w.jsx("span",{className:"tag",children:s.outil}),w.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",children:[s.source," ↗"]})]}),w.jsx("p",{children:s.texte})]})]},s.date+s.source))})]},i.mois))]})]})}const _R="PHP · GSB · FLUTTER",xR="Travaux évalués de 2de année en développement Symfony : le contrôle de PHP du 15 octobre 2026, une application de médiathèque contenant cinq anomalies à trouver et à corriger, et le projet GSB Frais réalisé en équipe et rendu le 14 octobre 2026. S'y ajoute le contrôle de Flutter du 6 novembre 2026, une application mobile de médiathèque à corriger.",yR=[{valeur:"2",label:"projets Symfony"},{valeur:"5",label:"anomalies corrigées"},{valeur:"3",label:"profils dans GSB"},{valeur:"7.4",label:"version de Symfony"}],SR={eyebrow:"01 — Livrables",titre:"Ce qui a été rendu",lede:"Le contrôle de PHP, le projet GSB puis le contrôle de Flutter : documents, archives et code source.",groupes:[{periode:"2de année · 15 oct. 2026",titre:"Contrôle PHP — Médiathèque",description_html:"Le projet est livré sans le dossier <code>vendor</code>. Pour le lancer : <code>composer install</code>, <code>php bin/console doctrine:migrations:migrate</code>, <code>php bin/console doctrine:fixtures:load</code> puis <code>symfony serve</code>. Les fixtures créent un compte élève et un compte documentaliste.",elements:[{titre:"Réponses du contrôle (REPONSES.md)",date:"15 oct. 2026",href:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/REPONSES.md",telechargement:!1},{titre:"Projet Symfony corrigé (.zip)",date:"15 oct. 2026",href:"reports/controle-php-mediatheque.zip",telechargement:!0},{titre:"Code source sur GitHub",date:"15 oct. 2026",href:"https://github.com/deliodcb-pixel/portefolio/tree/main/projets/controle-php",telechargement:!1}]},{periode:"AP en binôme · 14 oct. 2026",titre:"GSB Frais — Gestion des frais de déplacement",description_html:"Projet réalisé en binôme avec Fadi. Le projet est livré sans les dossiers <code>vendor</code> et <code>var</code> ni le fichier <code>.env.local</code> (identifiants de la base Supabase). Pour le lancer : <code>composer install</code>, renseigner <code>DATABASE_URL</code> dans <code>.env.local</code>, puis <code>php bin/console doctrine:migrations:migrate</code>.",elements:[{titre:"Présentation du projet",date:"14 oct. 2026",href:"reports/gsb-presentation.pdf",telechargement:!0},{titre:"Notice utilisateur",date:"14 oct. 2026",href:"reports/gsb-notice-utilisateur.pdf",telechargement:!0},{titre:"Dossier AP-GSB (cahier des charges, charte, diagramme de classe)",date:"14 oct. 2026",href:"reports/gsb-dossier-ap.pdf",telechargement:!0},{titre:"Maquette de l'écran de validation",date:"14 oct. 2026",href:"projets/gsb-frais/public/maquette/validation.html",telechargement:!1},{titre:"Projet Symfony complet (.zip)",date:"14 oct. 2026",href:"reports/gsb-frais-projet.zip",telechargement:!0},{titre:"Code source sur GitHub",date:"14 oct. 2026",href:"https://github.com/deliodcb-pixel/portefolio/tree/main/projets/gsb-frais",telechargement:!1}]},{periode:"2de année · 6 nov. 2026",titre:"Contrôle Flutter — MediaTech",description_html:"Le projet est livré sans les dossiers de plateforme. Pour le lancer : <code>flutter create . --project-name mediatech</code> et <code>flutter pub get</code> dans <code>mediatech_start</code>, <code>python3 serveur.py</code> dans <code>mediatech_api</code>, puis <code>flutter run -d chrome</code>.",elements:[{titre:"Réponses du contrôle (reponses.MD)",date:"6 nov. 2026",href:"https://github.com/deliodcb-pixel/controle_flutter/blob/main/mediatech_start/reponses.MD",telechargement:!1},{titre:"Projet Flutter corrigé (.zip)",date:"6 nov. 2026",href:"reports/DUCHESNE-BRAJON_Delio.zip",telechargement:!0},{titre:"Code source sur GitHub",date:"6 nov. 2026",href:"https://github.com/deliodcb-pixel/controle_flutter",telechargement:!1}]}]},MR=[{id:"anomalies",eyebrow:"02 — Contrôle PHP : anomalies",titre:"Cinq anomalies, cinq corrections",lede:"Pour chaque anomalie : ce que l'on constate, la cause trouvée dans le code et la correction apportée. Les numéros de ligne correspondent au projet fourni.",groupes:[{label:"Fonctionnement",count:"2 anomalies",entrees:[{titre:"Anomalie 01",tag:"Routage",source:{url:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/src/Controller/LivreController.php",label:"LivreController.php ↗"},html:`<p><span class="lbl">Constat</span>Avec le compte documentaliste, on ne peut pas ajouter de livre : on arrive sur une erreur 404 (dans <code>var/log/dev.log</code> : « App\\Entity\\Livre object not found »).</p> <p><span class="lbl">Cause</span>Ligne 27, la route <code>livre_show</code> (<code>/livres/{id}</code>) est déclarée avant <code>livre_new</code> (<code>/livres/nouveau</code>) et <code>{id}</code> accepte n'importe quel texte, donc Symfony prend « nouveau » pour l'id d'un livre. On le voit avec <code>debug:router</code>.</p> <p><span class="lbl">Correction</span>Ajout de <code>requirements: ['id' =&gt; '\\d+']</code> sur <code>livre_show</code> pour que <code>{id}</code> n'accepte que des chiffres.</p>`},{titre:"Anomalie 03",tag:"Doctrine",source:{url:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/src/Controller/LivreController.php",label:"LivreController.php ↗"},html:`<p><span class="lbl">Constat</span>Une fois la page d'ajout réparée, le message « Le livre a été ajouté au catalogue » s'affiche mais le livre n'apparaît pas dans le catalogue.</p> <p><span class="lbl">Cause</span>Ligne 43, il y a <code>$em-&gt;persist($livre)</code> mais pas de <code>$em-&gt;flush()</code>, donc rien n'est enregistré en base.</p> <p><span class="lbl">Correction</span>Ajout de <code>$em-&gt;flush()</code> après le <code>persist()</code>.</p>`}]},{label:"Sécurité",count:"3 anomalies",entrees:[{titre:"Anomalie 02",tag:"Faille XSS",source:{url:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/templates/livre/show.html.twig",label:"show.html.twig ↗"},html:`<p><span class="lbl">Constat</span>Quel que soit le compte, en ouvrant le septième livre (« Voyage au centre de la Terre »), un pop-up oblige à cliquer sur OK avant d'afficher la page. Même chose après une modification.</p> <p><span class="lbl">Cause</span>Ligne 15, la description est affichée avec <code>|raw</code> : Twig n'échappe pas le HTML et le script <code>alert(1)</code> présent dans la description est exécuté par le navigateur. Un script malveillant pourrait voler la session des utilisateurs.</p> <p><span class="lbl">Correction</span>Suppression du <code>|raw</code> : le script s'affiche maintenant comme du texte.</p>`},{titre:"Anomalie 04",tag:"Injection DQL",source:{url:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/src/Repository/LivreRepository.php",label:"LivreRepository.php ↗"},html:`<p><span class="lbl">Constat</span>Une recherche contenant une apostrophe (par exemple « l' ») provoque une erreur 500.</p> <p><span class="lbl">Cause</span>Ligne 32, le texte de la recherche est collé directement dans la requête DQL, l'utilisateur peut donc modifier la requête.</p> <p><span class="lbl">Correction</span>Utilisation d'un paramètre : <code>-&gt;andWhere('l.titre LIKE :q')-&gt;setParameter('q', '%' . $q . '%')</code>.</p>`},{titre:"Anomalie 05",tag:"Contrôle d'accès",source:{url:"https://github.com/deliodcb-pixel/portefolio/blob/main/projets/controle-php/config/packages/security.yaml",label:"security.yaml ↗"},html:`<p><span class="lbl">Constat</span>Avec le compte élève, on peut aller sur <code>/livres/1/modifier</code> et modifier un livre, alors que c'est réservé aux documentalistes.</p> <p><span class="lbl">Cause</span>Lignes 32-33, la règle <code>^/livres</code> (<code>ROLE_USER</code>) est placée avant celle des documentalistes. Symfony applique seulement la première règle qui correspond, celle des documentalistes n'est donc jamais utilisée.</p> <p><span class="lbl">Correction</span>La règle des documentalistes est placée avant <code>^/livres</code>. L'élève obtient maintenant une erreur 403 sur l'ajout, la modification et la suppression.</p>`}]}]},{id:"fonctionnalites",eyebrow:"03 — GSB Frais : fonctionnalités",titre:"Trois profils, trois espaces",lede:"Un formulaire de connexion commun, puis chaque utilisateur est envoyé vers son espace selon son rôle.",groupes:[{label:"Visiteur",count:"/visiteur",entrees:[{titre:"Fiche du mois",tag:"Saisie",source:null,html:"<p>Saisie des frais forfaitisés (nuitées, repas, étapes, kilomètres) et des frais hors forfait, modifiables tant que la fiche est en saisie.</p>"},{titre:"Véhicule",tag:"Barème",source:null,html:"<p>Le visiteur déclare sur chaque fiche le véhicule utilisé parmi les six possibilités du barème (trois tranches de puissance, diesel ou essence). Le tarif au kilomètre en dépend.</p>"},{titre:"Trajets",tag:"Distances",source:null,html:"<p>Le visiteur saisit une ville de départ et une ville d'arrivée, la distance par la route est calculée automatiquement et reportée sur la fiche.</p>"},{titre:"Justificatifs",tag:"Upload",source:null,html:"<p>Dépôt de factures (PDF, JPEG, PNG, WebP, 5 Mo maximum) rattachées à une ligne hors forfait, export PDF de la fiche et historique des fiches précédentes.</p>"}]},{label:"Comptable",count:"/comptable",entrees:[{titre:"Validation",tag:"Cas d'utilisation",source:null,html:"<p>Choix d'un visiteur et d'un mois, contrôle des montants et des justificatifs, correction des quantités forfaitisées, refus des lignes hors forfait non justifiées puis validation de la fiche.</p>"},{titre:"Paiement",tag:"Suivi",source:null,html:"<p>Mise en paiement des fiches validées et suivi jusqu'au remboursement, avec une vue de toutes les fiches rangées par état.</p>"},{titre:"Éditions",tag:"PDF",source:null,html:"<p>Impression d'une fiche, de toutes les fiches d'un visiteur ou du lot mensuel des fiches clôturées.</p>"}]},{label:"Administrateur",count:"/admin",entrees:[{titre:"Comptes",tag:"Gestion des accès",source:null,html:"<p>Création des comptes visiteurs et comptables, réinitialisation des mots de passe et suppression. L'administrateur peut aussi traiter les fiches comme un comptable, mais l'inverse n'est pas possible.</p>"}]}]},{id:"technique",eyebrow:"04 — GSB Frais : points techniques",titre:"Ce qui a demandé le plus de travail",lede:"",groupes:[{label:"Métier",count:"2 points",entrees:[{titre:"Distances",tag:"API publiques",source:null,html:"<p>Chaque ville est convertie en coordonnées GPS avec la Base Adresse Nationale, puis OSRM donne la distance par la route. Si OSRM ne répond pas, l'application calcule la distance à vol d'oiseau (formule de haversine) majorée de 30 % et le signale. Les résultats sont mis en cache.</p>"},{titre:"Barème",tag:"Frais kilométriques",source:null,html:'<p>Le forfait unique de 0,62 €/km est remplacé par un barème selon la puissance fiscale et le carburant :</p> <table class="bareme"> <thead><tr><th>Puissance</th><th>Diesel</th><th>Essence</th></tr></thead> <tbody> <tr><td>4 CV</td><td>0,52 €</td><td>0,62 €</td></tr> <tr><td>5 et 6 CV</td><td>0,58 €</td><td>0,67 €</td></tr> <tr><td>7 CV et plus</td><td>0,65 €</td><td>0,72 €</td></tr> </tbody> </table>'}]},{label:"Technique",count:"3 points",entrees:[{titre:"Base",tag:"Supabase",source:null,html:"<p>La base PostgreSQL existait déjà avec ses contraintes. Les six migrations sont uniquement additives : aucune table ni colonne n'a été supprimée ou renommée.</p>"},{titre:"PDF",tag:"Dompdf",source:null,html:"<p>Les fiches sont générées en PDF avec Dompdf à partir d'un gabarit Twig, au format de l'annexe 1 de l'énoncé.</p>"},{titre:"Sécurité",tag:"Justificatifs",source:null,html:"<p>Les factures sont stockées hors de la racine web, sous un nom non devinable, et servies par un contrôleur qui vérifie les droits. Tous les formulaires sont protégés par un jeton CSRF.</p>"}]}]}],ER={sous:_R,lede:xR,stats:yR,livrables:SR,sections:MR};function wR(t){return/^https?:/.test(t)?t:`./${t}`}function TR(){const{sous:t,lede:e,stats:n,livrables:i,sections:r}=ER,s=Q.useMemo(()=>[...i.groupes.map((a,o)=>({kicker:a.periode,title:a.titre,footer:`${a.elements.length} éléments`,color:ao(o*4+2),styleIndex:o*3+1,anchor:`livrable-${o}`})),...r.map((a,o)=>({kicker:a.eyebrow.replace(/^\d+\s—\s/,""),title:a.titre,footer:"Analyse",color:ao(o*5+9),styleIndex:o*3+4,anchor:a.id}))],[i,r]);return w.jsxs("main",{children:[w.jsx(R_,{wordmark:"Contrôle",eyebrow:t,books:s}),w.jsxs("section",{className:"wrap veille",children:[w.jsxs("div",{className:"section-head",children:[w.jsx("div",{className:"eyebrow",children:"Travaux évalués — 2de année"}),w.jsx("h2",{className:"display",children:t}),w.jsx("p",{className:"lede",children:e})]}),w.jsx("div",{className:"stats",children:n.map(a=>w.jsxs("div",{children:[w.jsx("b",{className:"display",children:a.valeur}),w.jsx("span",{children:a.label})]},a.label))}),w.jsxs("div",{className:"section-head controle-sub",children:[w.jsx("div",{className:"eyebrow",children:i.eyebrow}),w.jsx("h2",{className:"display",children:i.titre}),w.jsx("p",{className:"lede",children:i.lede})]}),i.groupes.map((a,o)=>w.jsxs("div",{className:"mois",id:`livrable-${o}`,children:[w.jsxs("div",{className:"mois-label",children:[w.jsx("h3",{className:"display",children:a.titre}),w.jsx("span",{className:"muted",children:a.periode})]}),w.jsxs("div",{children:[w.jsx("p",{className:"rich muted",dangerouslySetInnerHTML:{__html:a.description_html}}),w.jsx("ol",{className:"cr-list",children:a.elements.map((l,c)=>{const d=/^https?:/.test(l.href);return w.jsx("li",{children:w.jsxs("a",{className:"cr-item",href:wR(l.href),...l.telechargement?{download:!0}:{target:"_blank",rel:"noopener noreferrer"},children:[w.jsx("span",{className:"cr-idx",children:jf(c+1)}),w.jsx("span",{className:"cr-title",children:l.titre}),w.jsx("span",{className:"cr-date",children:l.date}),w.jsx("span",{className:"cr-arrow","aria-hidden":"true",children:l.telechargement?"↓":d?"↗":"→"})]})},l.href)})})]})]},a.titre)),r.map(a=>w.jsxs("div",{id:a.id,className:"controle-section",children:[w.jsxs("div",{className:"section-head controle-sub",children:[w.jsx("div",{className:"eyebrow",children:a.eyebrow}),w.jsx("h2",{className:"display",children:a.titre}),a.lede&&w.jsx("p",{className:"lede",children:a.lede})]}),a.groupes.map(o=>w.jsxs("div",{className:"mois",children:[w.jsxs("div",{className:"mois-label",children:[w.jsx("h3",{className:"display",children:o.label}),w.jsx("span",{className:"muted",children:o.count})]}),w.jsx("div",{className:"entrees",children:o.entrees.map(l=>w.jsxs("article",{className:"entree",children:[w.jsx("div",{className:"entree-date",children:l.titre}),w.jsxs("div",{children:[w.jsxs("div",{className:"entree-head",children:[l.tag&&w.jsx("span",{className:"tag",children:l.tag}),l.source&&w.jsx("a",{href:l.source.url,target:"_blank",rel:"noopener noreferrer",children:l.source.label})]}),w.jsx("div",{className:"rich",dangerouslySetInnerHTML:{__html:l.html}})]})]},l.titre+l.tag))})]},o.label))]},a.id))]})]})}function AR(){const{pathname:t,state:e}=or();return Q.useEffect(()=>{e!=null&&e.scrollTo||window.scrollTo(0,0)},[t,e]),null}function RR(){const{pathname:t}=or(),e=t.startsWith("/matiere/");return w.jsxs(w.Fragment,{children:[w.jsx(AR,{}),w.jsx(_M,{}),w.jsxs(QS,{children:[w.jsx(vr,{path:"/",element:w.jsx(aR,{})}),w.jsx(vr,{path:"/matiere/:slug",element:w.jsx(lR,{})}),w.jsx(vr,{path:"/cr/:slug",element:w.jsx(cR,{})}),w.jsx(vr,{path:"/veille",element:w.jsx(vR,{})}),w.jsx(vr,{path:"/controle",element:w.jsx(TR,{})}),w.jsx(vr,{path:"*",element:w.jsx(ah,{})})]}),!e&&w.jsx(xM,{})]})}A0(document.getElementById("root")).render(w.jsx(Q.StrictMode,{children:w.jsx(sM,{children:w.jsx(RR,{})})}));
