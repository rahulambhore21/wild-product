(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var kd={exports:{}},$a={},Pd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function pT(){if(zg)return Re;zg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),E=Symbol.iterator;function R(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,q={};function $(V,Q,xe){this.props=V,this.context=Q,this.refs=q,this.updater=xe||j}$.prototype.isReactComponent={},$.prototype.setState=function(V,Q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,Q,"setState")},$.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function H(){}H.prototype=$.prototype;function Z(V,Q,xe){this.props=V,this.context=Q,this.refs=q,this.updater=xe||j}var ne=Z.prototype=new H;ne.constructor=Z,W(ne,$.prototype),ne.isPureReactComponent=!0;var ve=Array.isArray,ge=Object.prototype.hasOwnProperty,Se={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function x(V,Q,xe){var Ae,Ce={},ke=null,je=null;if(Q!=null)for(Ae in Q.ref!==void 0&&(je=Q.ref),Q.key!==void 0&&(ke=""+Q.key),Q)ge.call(Q,Ae)&&!P.hasOwnProperty(Ae)&&(Ce[Ae]=Q[Ae]);var Oe=arguments.length-2;if(Oe===1)Ce.children=xe;else if(1<Oe){for(var qe=Array(Oe),$t=0;$t<Oe;$t++)qe[$t]=arguments[$t+2];Ce.children=qe}if(V&&V.defaultProps)for(Ae in Oe=V.defaultProps,Oe)Ce[Ae]===void 0&&(Ce[Ae]=Oe[Ae]);return{$$typeof:n,type:V,key:ke,ref:je,props:Ce,_owner:Se.current}}function C(V,Q){return{$$typeof:n,type:V.type,key:Q,ref:V.ref,props:V.props,_owner:V._owner}}function D(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function N(V){var Q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(xe){return Q[xe]})}var O=/\/+/g;function A(V,Q){return typeof V=="object"&&V!==null&&V.key!=null?N(""+V.key):Q.toString(36)}function ze(V,Q,xe,Ae,Ce){var ke=typeof V;(ke==="undefined"||ke==="boolean")&&(V=null);var je=!1;if(V===null)je=!0;else switch(ke){case"string":case"number":je=!0;break;case"object":switch(V.$$typeof){case n:case e:je=!0}}if(je)return je=V,Ce=Ce(je),V=Ae===""?"."+A(je,0):Ae,ve(Ce)?(xe="",V!=null&&(xe=V.replace(O,"$&/")+"/"),ze(Ce,Q,xe,"",function($t){return $t})):Ce!=null&&(D(Ce)&&(Ce=C(Ce,xe+(!Ce.key||je&&je.key===Ce.key?"":(""+Ce.key).replace(O,"$&/")+"/")+V)),Q.push(Ce)),1;if(je=0,Ae=Ae===""?".":Ae+":",ve(V))for(var Oe=0;Oe<V.length;Oe++){ke=V[Oe];var qe=Ae+A(ke,Oe);je+=ze(ke,Q,xe,qe,Ce)}else if(qe=R(V),typeof qe=="function")for(V=qe.call(V),Oe=0;!(ke=V.next()).done;)ke=ke.value,qe=Ae+A(ke,Oe++),je+=ze(ke,Q,xe,qe,Ce);else if(ke==="object")throw Q=String(V),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return je}function $e(V,Q,xe){if(V==null)return V;var Ae=[],Ce=0;return ze(V,Ae,"","",function(ke){return Q.call(xe,ke,Ce++)}),Ae}function bt(V){if(V._status===-1){var Q=V._result;Q=Q(),Q.then(function(xe){(V._status===0||V._status===-1)&&(V._status=1,V._result=xe)},function(xe){(V._status===0||V._status===-1)&&(V._status=2,V._result=xe)}),V._status===-1&&(V._status=0,V._result=Q)}if(V._status===1)return V._result.default;throw V._result}var Xe={current:null},re={transition:null},fe={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:re,ReactCurrentOwner:Se};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:$e,forEach:function(V,Q,xe){$e(V,function(){Q.apply(this,arguments)},xe)},count:function(V){var Q=0;return $e(V,function(){Q++}),Q},toArray:function(V){return $e(V,function(Q){return Q})||[]},only:function(V){if(!D(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Re.Component=$,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=Z,Re.StrictMode=i,Re.Suspense=p,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Re.act=ae,Re.cloneElement=function(V,Q,xe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ae=W({},V.props),Ce=V.key,ke=V.ref,je=V._owner;if(Q!=null){if(Q.ref!==void 0&&(ke=Q.ref,je=Se.current),Q.key!==void 0&&(Ce=""+Q.key),V.type&&V.type.defaultProps)var Oe=V.type.defaultProps;for(qe in Q)ge.call(Q,qe)&&!P.hasOwnProperty(qe)&&(Ae[qe]=Q[qe]===void 0&&Oe!==void 0?Oe[qe]:Q[qe])}var qe=arguments.length-2;if(qe===1)Ae.children=xe;else if(1<qe){Oe=Array(qe);for(var $t=0;$t<qe;$t++)Oe[$t]=arguments[$t+2];Ae.children=Oe}return{$$typeof:n,type:V.type,key:Ce,ref:ke,props:Ae,_owner:je}},Re.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Re.createElement=x,Re.createFactory=function(V){var Q=x.bind(null,V);return Q.type=V,Q},Re.createRef=function(){return{current:null}},Re.forwardRef=function(V){return{$$typeof:f,render:V}},Re.isValidElement=D,Re.lazy=function(V){return{$$typeof:w,_payload:{_status:-1,_result:V},_init:bt}},Re.memo=function(V,Q){return{$$typeof:y,type:V,compare:Q===void 0?null:Q}},Re.startTransition=function(V){var Q=re.transition;re.transition={};try{V()}finally{re.transition=Q}},Re.unstable_act=ae,Re.useCallback=function(V,Q){return Xe.current.useCallback(V,Q)},Re.useContext=function(V){return Xe.current.useContext(V)},Re.useDebugValue=function(){},Re.useDeferredValue=function(V){return Xe.current.useDeferredValue(V)},Re.useEffect=function(V,Q){return Xe.current.useEffect(V,Q)},Re.useId=function(){return Xe.current.useId()},Re.useImperativeHandle=function(V,Q,xe){return Xe.current.useImperativeHandle(V,Q,xe)},Re.useInsertionEffect=function(V,Q){return Xe.current.useInsertionEffect(V,Q)},Re.useLayoutEffect=function(V,Q){return Xe.current.useLayoutEffect(V,Q)},Re.useMemo=function(V,Q){return Xe.current.useMemo(V,Q)},Re.useReducer=function(V,Q,xe){return Xe.current.useReducer(V,Q,xe)},Re.useRef=function(V){return Xe.current.useRef(V)},Re.useState=function(V){return Xe.current.useState(V)},Re.useSyncExternalStore=function(V,Q,xe){return Xe.current.useSyncExternalStore(V,Q,xe)},Re.useTransition=function(){return Xe.current.useTransition()},Re.version="18.3.1",Re}var Bg;function Cf(){return Bg||(Bg=1,Pd.exports=pT()),Pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function mT(){if($g)return $a;$g=1;var n=Cf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,y){var w,E={},R=null,j=null;y!==void 0&&(R=""+y),p.key!==void 0&&(R=""+p.key),p.ref!==void 0&&(j=p.ref);for(w in p)i.call(p,w)&&!l.hasOwnProperty(w)&&(E[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)E[w]===void 0&&(E[w]=p[w]);return{$$typeof:e,type:f,key:R,ref:j,props:E,_owner:o.current}}return $a.Fragment=t,$a.jsx=c,$a.jsxs=c,$a}var qg;function gT(){return qg||(qg=1,kd.exports=mT()),kd.exports}var I=gT(),qu={},Nd={exports:{}},Xt={},bd={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function yT(){return Hg||(Hg=1,(function(n){function e(re,fe){var ae=re.length;re.push(fe);e:for(;0<ae;){var V=ae-1>>>1,Q=re[V];if(0<o(Q,fe))re[V]=fe,re[ae]=Q,ae=V;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var fe=re[0],ae=re.pop();if(ae!==fe){re[0]=ae;e:for(var V=0,Q=re.length,xe=Q>>>1;V<xe;){var Ae=2*(V+1)-1,Ce=re[Ae],ke=Ae+1,je=re[ke];if(0>o(Ce,ae))ke<Q&&0>o(je,Ce)?(re[V]=je,re[ke]=ae,V=ke):(re[V]=Ce,re[Ae]=ae,V=Ae);else if(ke<Q&&0>o(je,ae))re[V]=je,re[ke]=ae,V=ke;else break e}}return fe}function o(re,fe){var ae=re.sortIndex-fe.sortIndex;return ae!==0?ae:re.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var p=[],y=[],w=1,E=null,R=3,j=!1,W=!1,q=!1,$=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(re){for(var fe=t(y);fe!==null;){if(fe.callback===null)i(y);else if(fe.startTime<=re)i(y),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=t(y)}}function ve(re){if(q=!1,ne(re),!W)if(t(p)!==null)W=!0,bt(ge);else{var fe=t(y);fe!==null&&Xe(ve,fe.startTime-re)}}function ge(re,fe){W=!1,q&&(q=!1,H(x),x=-1),j=!0;var ae=R;try{for(ne(fe),E=t(p);E!==null&&(!(E.expirationTime>fe)||re&&!N());){var V=E.callback;if(typeof V=="function"){E.callback=null,R=E.priorityLevel;var Q=V(E.expirationTime<=fe);fe=n.unstable_now(),typeof Q=="function"?E.callback=Q:E===t(p)&&i(p),ne(fe)}else i(p);E=t(p)}if(E!==null)var xe=!0;else{var Ae=t(y);Ae!==null&&Xe(ve,Ae.startTime-fe),xe=!1}return xe}finally{E=null,R=ae,j=!1}}var Se=!1,P=null,x=-1,C=5,D=-1;function N(){return!(n.unstable_now()-D<C)}function O(){if(P!==null){var re=n.unstable_now();D=re;var fe=!0;try{fe=P(!0,re)}finally{fe?A():(Se=!1,P=null)}}else Se=!1}var A;if(typeof Z=="function")A=function(){Z(O)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,$e=ze.port2;ze.port1.onmessage=O,A=function(){$e.postMessage(null)}}else A=function(){$(O,0)};function bt(re){P=re,Se||(Se=!0,A())}function Xe(re,fe){x=$(function(){re(n.unstable_now())},fe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){W||j||(W=!0,bt(ge))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(re){switch(R){case 1:case 2:case 3:var fe=3;break;default:fe=R}var ae=R;R=fe;try{return re()}finally{R=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,fe){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ae=R;R=re;try{return fe()}finally{R=ae}},n.unstable_scheduleCallback=function(re,fe,ae){var V=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,re){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=ae+Q,re={id:w++,callback:fe,priorityLevel:re,startTime:ae,expirationTime:Q,sortIndex:-1},ae>V?(re.sortIndex=ae,e(y,re),t(p)===null&&re===t(y)&&(q?(H(x),x=-1):q=!0,Xe(ve,ae-V))):(re.sortIndex=Q,e(p,re),W||j||(W=!0,bt(ge))),re},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(re){var fe=R;return function(){var ae=R;R=fe;try{return re.apply(this,arguments)}finally{R=ae}}}})(Dd)),Dd}var Wg;function _T(){return Wg||(Wg=1,bd.exports=yT()),bd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function vT(){if(Kg)return Xt;Kg=1;var n=Cf(),e=_T();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},E={};function R(r){return p.call(E,r)?!0:p.call(w,r)?!1:y.test(r)?E[r]=!0:(w[r]=!0,!1)}function j(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function W(r,s,a,h){if(s===null||typeof s>"u"||j(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(r,s,a,h,d,m,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=m,this.removeEmptyString=v}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){$[r]=new q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];$[s]=new q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){$[r]=new q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){$[r]=new q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){$[r]=new q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){$[r]=new q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){$[r]=new q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){$[r]=new q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){$[r]=new q(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function Z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,Z);$[s]=new q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,Z);$[s]=new q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,Z);$[s]=new q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){$[r]=new q(r,1,!1,r.toLowerCase(),null,!1,!1)}),$.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){$[r]=new q(r,1,!1,r.toLowerCase(),null,!0,!0)});function ne(r,s,a,h){var d=$.hasOwnProperty(s)?$[s]:null;(d!==null?d.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(W(s,a,d,h)&&(a=null),h||d===null?R(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,h=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var ve=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ge=Symbol.for("react.element"),Se=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),$e=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Xe=Symbol.for("react.offscreen"),re=Symbol.iterator;function fe(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,V;function Q(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var xe=!1;function Ae(r,s){if(!r||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(U){var h=U}Reflect.construct(r,[],s)}else{try{s.call()}catch(U){h=U}r.call(s.prototype)}else{try{throw Error()}catch(U){h=U}r()}}catch(U){if(U&&h&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),m=h.stack.split(`
`),v=d.length-1,S=m.length-1;1<=v&&0<=S&&d[v]!==m[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==m[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==m[S]){var k=`
`+d[v].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=v&&0<=S);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function Ce(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function ke(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case Se:return"Portal";case C:return"Profiler";case x:return"StrictMode";case A:return"Suspense";case ze:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case N:return(r.displayName||"Context")+".Consumer";case D:return(r._context.displayName||"Context")+".Provider";case O:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case $e:return s=r.displayName||null,s!==null?s:ke(r.type)||"Memo";case bt:s=r._payload,r=r._init;try{return ke(r(s))}catch{}}return null}function je(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(s);case 8:return s===x?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Oe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function qe(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function $t(r){var s=qe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){h=""+v,m.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(v){h=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Ns(r){r._valueTracker||(r._valueTracker=$t(r))}function Qo(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=qe(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function $r(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function bs(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function kl(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Oe(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ds(r,s){s=s.checked,s!=null&&ne(r,"checked",s,!1)}function Fi(r,s){Ds(r,s);var a=Oe(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?ct(r,s.type,a):s.hasOwnProperty("defaultValue")&&ct(r,s.type,Oe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Yo(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ct(r,s,a){(s!=="number"||$r(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var ot=Array.isArray;function In(r,s,a,h){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Oe(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,h&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Jo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Xo(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(ot(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Oe(a)}}function Pl(r,s){var a=Oe(s.value),h=Oe(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function qr(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function Zo(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vs(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?Zo(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Hr,Nl=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,d)})}:r})(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Hr=Hr||document.createElement("div"),Hr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Hr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ji(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bl=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(r){bl.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Wr[s]=Wr[r]})});function Kr(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Wr.hasOwnProperty(r)&&Wr[r]?(""+s).trim():s+"px"}function Os(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,d=Kr(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,d):r[a]=d}}var ea=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sn(r,s){if(s){if(ea[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ls(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gr=null;function Ms(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var gr=null,yr=null,it=null;function ta(r){if(r=Ca(r)){if(typeof gr!="function")throw Error(t(280));var s=r.stateNode;s&&(s=su(s),gr(r.stateNode,r.type,s))}}function Qr(r){yr?it?it.push(r):it=[r]:yr=r}function Yr(){if(yr){var r=yr,s=it;if(it=yr=null,ta(r),s)for(r=0;r<s.length;r++)ta(s[r])}}function Dl(r,s){return r(s)}function Vl(){}var Bn=!1;function Ol(r,s,a){if(Bn)return r(s,a);Bn=!0;try{return Dl(r,s,a)}finally{Bn=!1,(yr!==null||it!==null)&&(Vl(),Yr())}}function Ui(r,s){var a=r.stateNode;if(a===null)return null;var h=su(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Jr=!1;if(f)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Jr=!1}function Ll(r,s,a,h,d,m,v,S,k){var U=Array.prototype.slice.call(arguments,3);try{s.apply(a,U)}catch(J){this.onError(J)}}var _r=!1,$n=null,Fs=!1,dn=null,Ml={onError:function(r){_r=!0,$n=r}};function Fl(r,s,a,h,d,m,v,S,k){_r=!1,$n=null,Ll.apply(Ml,arguments)}function na(r,s,a,h,d,m,v,S,k){if(Fl.apply(this,arguments),_r){if(_r){var U=$n;_r=!1,$n=null}else throw Error(t(198));Fs||(Fs=!0,dn=U)}}function xn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function ra(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function jl(r){if(xn(r)!==r)throw Error(t(188))}function Ul(r){var s=r.alternate;if(!s){if(s=xn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(h=d.return,h!==null){a=h;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return jl(d),r;if(m===h)return jl(d),s;m=m.sibling}throw Error(t(188))}if(a.return!==h.return)a=d,h=m;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,h=m;break}if(S===h){v=!0,h=d,a=m;break}S=S.sibling}if(!v){for(S=m.child;S;){if(S===a){v=!0,a=m,h=d;break}if(S===h){v=!0,h=m,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function zl(r){return r=Ul(r),r!==null?zi(r):null}function zi(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=zi(r);if(s!==null)return s;r=r.sibling}return null}var ia=e.unstable_scheduleCallback,js=e.unstable_cancelCallback,Bi=e.unstable_shouldYield,vr=e.unstable_requestPaint,Ge=e.unstable_now,oh=e.unstable_getCurrentPriorityLevel,Us=e.unstable_ImmediatePriority,sa=e.unstable_UserBlockingPriority,$i=e.unstable_NormalPriority,oa=e.unstable_LowPriority,zs=e.unstable_IdlePriority,qi=null,en=null;function Bl(r){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(qi,r,void 0,(r.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Hi,qn=Math.log,fn=Math.LN2;function Hi(r){return r>>>=0,r===0?32:31-(qn(r)/fn|0)|0}var Hn=64,Zr=4194304;function Fe(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function wr(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,d=r.suspendedLanes,m=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?h=Fe(S):(m&=v,m!==0&&(h=Fe(m)))}else v=a&~d,v!==0?h=Fe(v):m!==0&&(h=Fe(m));if(h===0)return 0;if(s!==0&&s!==h&&(s&d)===0&&(d=h&-h,m=s&-s,d>=m||d===16&&(m&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-tn(s),d=1<<a,h|=r[a],s&=~d;return h}function Wi(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ki(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,d=r.expirationTimes,m=r.pendingLanes;0<m;){var v=31-tn(m),S=1<<v,k=d[v];k===-1?((S&a)===0||(S&h)!==0)&&(d[v]=Wi(S,s)):k<=s&&(r.expiredLanes|=S),m&=~S}}function aa(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function la(){var r=Hn;return Hn<<=1,(Hn&4194240)===0&&(Hn=64),r}function ua(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Gi(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-tn(s),r[s]=a}function ah(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-tn(a),m=1<<d;s[d]=0,h[d]=-1,r[d]=-1,a&=~m}}function ca(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-tn(a),d=1<<h;d&s|r[h]&s&&(r[h]|=s),a&=~d}}var De=0;function Wn(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ha,Bs,da,fa,pa,Kn=!1,$s=[],Gn=null,Qn=null,xt=null,Qi=new Map,Er=new Map,nn=[],$l="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ei(r,s){switch(r){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Qi.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(s.pointerId)}}function An(r,s,a,h,d,m){return r===null||r.nativeEvent!==m?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:m,targetContainers:[d]},s!==null&&(s=Ca(s),s!==null&&Bs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function ql(r,s,a,h,d){switch(s){case"focusin":return Gn=An(Gn,r,s,a,h,d),!0;case"dragenter":return Qn=An(Qn,r,s,a,h,d),!0;case"mouseover":return xt=An(xt,r,s,a,h,d),!0;case"pointerover":var m=d.pointerId;return Qi.set(m,An(Qi.get(m)||null,r,s,a,h,d)),!0;case"gotpointercapture":return m=d.pointerId,Er.set(m,An(Er.get(m)||null,r,s,a,h,d)),!0}return!1}function qs(r){var s=Zi(r.target);if(s!==null){var a=xn(s);if(a!==null){if(s=a.tag,s===13){if(s=ra(a),s!==null){r.blockedOn=s,pa(r.priority,function(){da(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function He(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Hs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Gr=h,a.target.dispatchEvent(h),Gr=null}else return s=Ca(a),s!==null&&Bs(s),r.blockedOn=a,!1;s.shift()}return!0}function Hl(r,s,a){He(r)&&a.delete(s)}function lh(){Kn=!1,Gn!==null&&He(Gn)&&(Gn=null),Qn!==null&&He(Qn)&&(Qn=null),xt!==null&&He(xt)&&(xt=null),Qi.forEach(Hl),Er.forEach(Hl)}function ti(r,s){r.blockedOn===s&&(r.blockedOn=null,Kn||(Kn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lh)))}function ni(r){function s(d){return ti(d,r)}if(0<$s.length){ti($s[0],r);for(var a=1;a<$s.length;a++){var h=$s[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Gn!==null&&ti(Gn,r),Qn!==null&&ti(Qn,r),xt!==null&&ti(xt,r),Qi.forEach(s),Er.forEach(s),a=0;a<nn.length;a++)h=nn[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<nn.length&&(a=nn[0],a.blockedOn===null);)qs(a),a.blockedOn===null&&nn.shift()}var Tr=ve.ReactCurrentBatchConfig,Ir=!0;function Yn(r,s,a,h){var d=De,m=Tr.transition;Tr.transition=null;try{De=1,ma(r,s,a,h)}finally{De=d,Tr.transition=m}}function Wl(r,s,a,h){var d=De,m=Tr.transition;Tr.transition=null;try{De=4,ma(r,s,a,h)}finally{De=d,Tr.transition=m}}function ma(r,s,a,h){if(Ir){var d=Hs(r,s,a,h);if(d===null)vh(r,s,h,Jn,a),ei(r,h);else if(ql(d,r,s,a,h))h.stopPropagation();else if(ei(r,h),s&4&&-1<$l.indexOf(r)){for(;d!==null;){var m=Ca(d);if(m!==null&&ha(m),m=Hs(r,s,a,h),m===null&&vh(r,s,h,Jn,a),m===d)break;d=m}d!==null&&h.stopPropagation()}else vh(r,s,h,null,a)}}var Jn=null;function Hs(r,s,a,h){if(Jn=null,r=Ms(h),r=Zi(r),r!==null)if(s=xn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=ra(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Jn=r,null}function Ws(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(oh()){case Us:return 1;case sa:return 4;case $i:case oa:return 16;case zs:return 536870912;default:return 16}default:return 16}}var rn=null,Ks=null,Sr=null;function Kl(){if(Sr)return Sr;var r,s=Ks,a=s.length,h,d="value"in rn?rn.value:rn.textContent,m=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(h=1;h<=v&&s[a-h]===d[m-h];h++);return Sr=d.slice(r,1<h?1-h:void 0)}function Yi(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Xn(){return!0}function ga(){return!1}function Dt(r){function s(a,h,d,m,v){this._reactName=a,this._targetInst=d,this.type=h,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Xn:ga,this.isPropagationStopped=ga,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),s}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=Dt(Zn),ri=ae({},Zn,{view:0,detail:0}),Gs=Dt(ri),Qs,Ys,sn,Xi=ae({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Te,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==sn&&(sn&&r.type==="mousemove"?(Qs=r.screenX-sn.screenX,Ys=r.screenY-sn.screenY):Ys=Qs=0,sn=r),Qs)},movementY:function(r){return"movementY"in r?r.movementY:Ys}}),ya=Dt(Xi),Gl=ae({},Xi,{dataTransfer:0}),Ql=Dt(Gl),Js=ae({},ri,{relatedTarget:0}),At=Dt(Js),Yl=ae({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jl=Dt(Yl),ii=ae({},Zn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),u=Dt(ii),g=ae({},Zn,{data:0}),_=Dt(g),T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function te(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=B[r])?!!s[r]:!1}function Te(){return te}var at=ae({},ri,{key:function(r){if(r.key){var s=T[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Yi(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?M[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Te,charCode:function(r){return r.type==="keypress"?Yi(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Yi(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Be=Dt(at),ht=ae({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),on=Dt(ht),xr=ae({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Te}),er=Dt(xr),tr=ae({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xs=Dt(tr),_a=ae({},Xi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),lE=Dt(_a),uE=[9,13,27,32],uh=f&&"CompositionEvent"in window,va=null;f&&"documentMode"in document&&(va=document.documentMode);var cE=f&&"TextEvent"in window&&!va,Dp=f&&(!uh||va&&8<va&&11>=va),Vp=" ",Op=!1;function Lp(r,s){switch(r){case"keyup":return uE.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Zs=!1;function hE(r,s){switch(r){case"compositionend":return Mp(s);case"keypress":return s.which!==32?null:(Op=!0,Vp);case"textInput":return r=s.data,r===Vp&&Op?null:r;default:return null}}function dE(r,s){if(Zs)return r==="compositionend"||!uh&&Lp(r,s)?(r=Kl(),Sr=Ks=rn=null,Zs=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Dp&&s.locale!=="ko"?null:s.data;default:return null}}var fE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!fE[r.type]:s==="textarea"}function jp(r,s,a,h){Qr(h),s=nu(s,"onChange"),0<s.length&&(a=new Ji("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var wa=null,Ea=null;function pE(r){rm(r,0)}function Xl(r){var s=io(r);if(Qo(s))return r}function mE(r,s){if(r==="change")return s}var Up=!1;if(f){var ch;if(f){var hh="oninput"in document;if(!hh){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),hh=typeof zp.oninput=="function"}ch=hh}else ch=!1;Up=ch&&(!document.documentMode||9<document.documentMode)}function Bp(){wa&&(wa.detachEvent("onpropertychange",$p),Ea=wa=null)}function $p(r){if(r.propertyName==="value"&&Xl(Ea)){var s=[];jp(s,Ea,r,Ms(r)),Ol(pE,s)}}function gE(r,s,a){r==="focusin"?(Bp(),wa=s,Ea=a,wa.attachEvent("onpropertychange",$p)):r==="focusout"&&Bp()}function yE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Xl(Ea)}function _E(r,s){if(r==="click")return Xl(s)}function vE(r,s){if(r==="input"||r==="change")return Xl(s)}function wE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Rn=typeof Object.is=="function"?Object.is:wE;function Ta(r,s){if(Rn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var d=a[h];if(!p.call(s,d)||!Rn(r[d],s[d]))return!1}return!0}function qp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Hp(r,s){var a=qp(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qp(a)}}function Wp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Wp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Kp(){for(var r=window,s=$r();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=$r(r.document)}return s}function dh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function EE(r){var s=Kp(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Wp(a.ownerDocument.documentElement,a)){if(h!==null&&dh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,m=Math.min(h.start,d);h=h.end===void 0?m:Math.min(h.end,d),!r.extend&&m>h&&(d=h,h=m,m=d),d=Hp(a,m);var v=Hp(a,h);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),m>h?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var TE=f&&"documentMode"in document&&11>=document.documentMode,eo=null,fh=null,Ia=null,ph=!1;function Gp(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ph||eo==null||eo!==$r(h)||(h=eo,"selectionStart"in h&&dh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ia&&Ta(Ia,h)||(Ia=h,h=nu(fh,"onSelect"),0<h.length&&(s=new Ji("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=eo)))}function Zl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var to={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},mh={},Qp={};f&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function eu(r){if(mh[r])return mh[r];if(!to[r])return r;var s=to[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Qp)return mh[r]=s[a];return r}var Yp=eu("animationend"),Jp=eu("animationiteration"),Xp=eu("animationstart"),Zp=eu("transitionend"),em=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function si(r,s){em.set(r,s),l(s,[r])}for(var gh=0;gh<tm.length;gh++){var yh=tm[gh],IE=yh.toLowerCase(),SE=yh[0].toUpperCase()+yh.slice(1);si(IE,"on"+SE)}si(Yp,"onAnimationEnd"),si(Jp,"onAnimationIteration"),si(Xp,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(Zp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function nm(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,na(h,s,void 0,r),r.currentTarget=null}function rm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],d=h.event;h=h.listeners;e:{var m=void 0;if(s)for(var v=h.length-1;0<=v;v--){var S=h[v],k=S.instance,U=S.currentTarget;if(S=S.listener,k!==m&&d.isPropagationStopped())break e;nm(d,S,U),m=k}else for(v=0;v<h.length;v++){if(S=h[v],k=S.instance,U=S.currentTarget,S=S.listener,k!==m&&d.isPropagationStopped())break e;nm(d,S,U),m=k}}}if(Fs)throw r=dn,Fs=!1,dn=null,r}function Qe(r,s){var a=s[xh];a===void 0&&(a=s[xh]=new Set);var h=r+"__bubble";a.has(h)||(im(s,r,2,!1),a.add(h))}function _h(r,s,a){var h=0;s&&(h|=4),im(a,r,h,s)}var tu="_reactListening"+Math.random().toString(36).slice(2);function xa(r){if(!r[tu]){r[tu]=!0,i.forEach(function(a){a!=="selectionchange"&&(xE.has(a)||_h(a,!1,r),_h(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[tu]||(s[tu]=!0,_h("selectionchange",!1,s))}}function im(r,s,a,h){switch(Ws(s)){case 1:var d=Yn;break;case 4:d=Wl;break;default:d=ma}a=d.bind(null,s,a,r),d=void 0,!Jr||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),h?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function vh(r,s,a,h,d){var m=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var v=h.tag;if(v===3||v===4){var S=h.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=h.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Zi(S),v===null)return;if(k=v.tag,k===5||k===6){h=m=v;continue e}S=S.parentNode}}h=h.return}Ol(function(){var U=m,J=Ms(a),X=[];e:{var Y=em.get(r);if(Y!==void 0){var ie=Ji,ue=r;switch(r){case"keypress":if(Yi(a)===0)break e;case"keydown":case"keyup":ie=Be;break;case"focusin":ue="focus",ie=At;break;case"focusout":ue="blur",ie=At;break;case"beforeblur":case"afterblur":ie=At;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Ql;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=er;break;case Yp:case Jp:case Xp:ie=Jl;break;case Zp:ie=Xs;break;case"scroll":ie=Gs;break;case"wheel":ie=lE;break;case"copy":case"cut":case"paste":ie=u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=on}var ce=(s&4)!==0,lt=!ce&&r==="scroll",L=ce?Y!==null?Y+"Capture":null:Y;ce=[];for(var b=U,F;b!==null;){F=b;var ee=F.stateNode;if(F.tag===5&&ee!==null&&(F=ee,L!==null&&(ee=Ui(b,L),ee!=null&&ce.push(Aa(b,ee,F)))),lt)break;b=b.return}0<ce.length&&(Y=new ie(Y,ue,null,a,J),X.push({event:Y,listeners:ce}))}}if((s&7)===0){e:{if(Y=r==="mouseover"||r==="pointerover",ie=r==="mouseout"||r==="pointerout",Y&&a!==Gr&&(ue=a.relatedTarget||a.fromElement)&&(Zi(ue)||ue[Ar]))break e;if((ie||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=U,ue=ue?Zi(ue):null,ue!==null&&(lt=xn(ue),ue!==lt||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=U),ie!==ue)){if(ce=ya,ee="onMouseLeave",L="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(ce=on,ee="onPointerLeave",L="onPointerEnter",b="pointer"),lt=ie==null?Y:io(ie),F=ue==null?Y:io(ue),Y=new ce(ee,b+"leave",ie,a,J),Y.target=lt,Y.relatedTarget=F,ee=null,Zi(J)===U&&(ce=new ce(L,b+"enter",ue,a,J),ce.target=F,ce.relatedTarget=lt,ee=ce),lt=ee,ie&&ue)t:{for(ce=ie,L=ue,b=0,F=ce;F;F=no(F))b++;for(F=0,ee=L;ee;ee=no(ee))F++;for(;0<b-F;)ce=no(ce),b--;for(;0<F-b;)L=no(L),F--;for(;b--;){if(ce===L||L!==null&&ce===L.alternate)break t;ce=no(ce),L=no(L)}ce=null}else ce=null;ie!==null&&sm(X,Y,ie,ce,!1),ue!==null&&lt!==null&&sm(X,lt,ue,ce,!0)}}e:{if(Y=U?io(U):window,ie=Y.nodeName&&Y.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Y.type==="file")var he=mE;else if(Fp(Y))if(Up)he=vE;else{he=yE;var pe=gE}else(ie=Y.nodeName)&&ie.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(he=_E);if(he&&(he=he(r,U))){jp(X,he,a,J);break e}pe&&pe(r,Y,U),r==="focusout"&&(pe=Y._wrapperState)&&pe.controlled&&Y.type==="number"&&ct(Y,"number",Y.value)}switch(pe=U?io(U):window,r){case"focusin":(Fp(pe)||pe.contentEditable==="true")&&(eo=pe,fh=U,Ia=null);break;case"focusout":Ia=fh=eo=null;break;case"mousedown":ph=!0;break;case"contextmenu":case"mouseup":case"dragend":ph=!1,Gp(X,a,J);break;case"selectionchange":if(TE)break;case"keydown":case"keyup":Gp(X,a,J)}var me;if(uh)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Zs?Lp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Dp&&a.locale!=="ko"&&(Zs||we!=="onCompositionStart"?we==="onCompositionEnd"&&Zs&&(me=Kl()):(rn=J,Ks="value"in rn?rn.value:rn.textContent,Zs=!0)),pe=nu(U,we),0<pe.length&&(we=new _(we,r,null,a,J),X.push({event:we,listeners:pe}),me?we.data=me:(me=Mp(a),me!==null&&(we.data=me)))),(me=cE?hE(r,a):dE(r,a))&&(U=nu(U,"onBeforeInput"),0<U.length&&(J=new _("onBeforeInput","beforeinput",null,a,J),X.push({event:J,listeners:U}),J.data=me))}rm(X,s)})}function Aa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function nu(r,s){for(var a=s+"Capture",h=[];r!==null;){var d=r,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Ui(r,a),m!=null&&h.unshift(Aa(r,m,d)),m=Ui(r,s),m!=null&&h.push(Aa(r,m,d))),r=r.return}return h}function no(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function sm(r,s,a,h,d){for(var m=s._reactName,v=[];a!==null&&a!==h;){var S=a,k=S.alternate,U=S.stateNode;if(k!==null&&k===h)break;S.tag===5&&U!==null&&(S=U,d?(k=Ui(a,m),k!=null&&v.unshift(Aa(a,k,S))):d||(k=Ui(a,m),k!=null&&v.push(Aa(a,k,S)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var AE=/\r\n?/g,RE=/\u0000|\uFFFD/g;function om(r){return(typeof r=="string"?r:""+r).replace(AE,`
`).replace(RE,"")}function ru(r,s,a){if(s=om(s),om(r)!==s&&a)throw Error(t(425))}function iu(){}var wh=null,Eh=null;function Th(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ih=typeof setTimeout=="function"?setTimeout:void 0,CE=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,kE=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(r){return am.resolve(null).then(r).catch(PE)}:Ih;function PE(r){setTimeout(function(){throw r})}function Sh(r,s){var a=s,h=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(h===0){r.removeChild(d),ni(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=d}while(a);ni(s)}function oi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function lm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var ro=Math.random().toString(36).slice(2),nr="__reactFiber$"+ro,Ra="__reactProps$"+ro,Ar="__reactContainer$"+ro,xh="__reactEvents$"+ro,NE="__reactListeners$"+ro,bE="__reactHandles$"+ro;function Zi(r){var s=r[nr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ar]||a[nr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=lm(r);r!==null;){if(a=r[nr])return a;r=lm(r)}return s}r=a,a=r.parentNode}return null}function Ca(r){return r=r[nr]||r[Ar],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function io(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function su(r){return r[Ra]||null}var Ah=[],so=-1;function ai(r){return{current:r}}function Ye(r){0>so||(r.current=Ah[so],Ah[so]=null,so--)}function We(r,s){so++,Ah[so]=r.current,r.current=s}var li={},Vt=ai(li),Kt=ai(!1),es=li;function oo(r,s){var a=r.type.contextTypes;if(!a)return li;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=s[m];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(r){return r=r.childContextTypes,r!=null}function ou(){Ye(Kt),Ye(Vt)}function um(r,s,a){if(Vt.current!==li)throw Error(t(168));We(Vt,s),We(Kt,a)}function cm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var d in h)if(!(d in s))throw Error(t(108,je(r)||"Unknown",d));return ae({},a,h)}function au(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||li,es=Vt.current,We(Vt,r),We(Kt,Kt.current),!0}function hm(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=cm(r,s,es),h.__reactInternalMemoizedMergedChildContext=r,Ye(Kt),Ye(Vt),We(Vt,r)):Ye(Kt),We(Kt,a)}var Rr=null,lu=!1,Rh=!1;function dm(r){Rr===null?Rr=[r]:Rr.push(r)}function DE(r){lu=!0,dm(r)}function ui(){if(!Rh&&Rr!==null){Rh=!0;var r=0,s=De;try{var a=Rr;for(De=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Rr=null,lu=!1}catch(d){throw Rr!==null&&(Rr=Rr.slice(r+1)),ia(Us,ui),d}finally{De=s,Rh=!1}}return null}var ao=[],lo=0,uu=null,cu=0,pn=[],mn=0,ts=null,Cr=1,kr="";function ns(r,s){ao[lo++]=cu,ao[lo++]=uu,uu=r,cu=s}function fm(r,s,a){pn[mn++]=Cr,pn[mn++]=kr,pn[mn++]=ts,ts=r;var h=Cr;r=kr;var d=32-tn(h)-1;h&=~(1<<d),a+=1;var m=32-tn(s)+d;if(30<m){var v=d-d%5;m=(h&(1<<v)-1).toString(32),h>>=v,d-=v,Cr=1<<32-tn(s)+d|a<<d|h,kr=m+r}else Cr=1<<m|a<<d|h,kr=r}function Ch(r){r.return!==null&&(ns(r,1),fm(r,1,0))}function kh(r){for(;r===uu;)uu=ao[--lo],ao[lo]=null,cu=ao[--lo],ao[lo]=null;for(;r===ts;)ts=pn[--mn],pn[mn]=null,kr=pn[--mn],pn[mn]=null,Cr=pn[--mn],pn[mn]=null}var an=null,ln=null,Ze=!1,Cn=null;function pm(r,s){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function mm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,an=r,ln=oi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,an=r,ln=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ts!==null?{id:Cr,overflow:kr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,an=r,ln=null,!0):!1;default:return!1}}function Ph(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Nh(r){if(Ze){var s=ln;if(s){var a=s;if(!mm(r,s)){if(Ph(r))throw Error(t(418));s=oi(a.nextSibling);var h=an;s&&mm(r,s)?pm(h,a):(r.flags=r.flags&-4097|2,Ze=!1,an=r)}}else{if(Ph(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ze=!1,an=r}}}function gm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;an=r}function hu(r){if(r!==an)return!1;if(!Ze)return gm(r),Ze=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Th(r.type,r.memoizedProps)),s&&(s=ln)){if(Ph(r))throw ym(),Error(t(418));for(;s;)pm(r,s),s=oi(s.nextSibling)}if(gm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){ln=oi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}ln=null}}else ln=an?oi(r.stateNode.nextSibling):null;return!0}function ym(){for(var r=ln;r;)r=oi(r.nextSibling)}function uo(){ln=an=null,Ze=!1}function bh(r){Cn===null?Cn=[r]:Cn.push(r)}var VE=ve.ReactCurrentBatchConfig;function ka(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var d=h,m=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===m?s.ref:(s=function(v){var S=d.refs;v===null?delete S[m]:S[m]=v},s._stringRef=m,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function du(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function _m(r){var s=r._init;return s(r._payload)}function vm(r){function s(L,b){if(r){var F=L.deletions;F===null?(L.deletions=[b],L.flags|=16):F.push(b)}}function a(L,b){if(!r)return null;for(;b!==null;)s(L,b),b=b.sibling;return null}function h(L,b){for(L=new Map;b!==null;)b.key!==null?L.set(b.key,b):L.set(b.index,b),b=b.sibling;return L}function d(L,b){return L=yi(L,b),L.index=0,L.sibling=null,L}function m(L,b,F){return L.index=F,r?(F=L.alternate,F!==null?(F=F.index,F<b?(L.flags|=2,b):F):(L.flags|=2,b)):(L.flags|=1048576,b)}function v(L){return r&&L.alternate===null&&(L.flags|=2),L}function S(L,b,F,ee){return b===null||b.tag!==6?(b=Id(F,L.mode,ee),b.return=L,b):(b=d(b,F),b.return=L,b)}function k(L,b,F,ee){var he=F.type;return he===P?J(L,b,F.props.children,ee,F.key):b!==null&&(b.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===bt&&_m(he)===b.type)?(ee=d(b,F.props),ee.ref=ka(L,b,F),ee.return=L,ee):(ee=Lu(F.type,F.key,F.props,null,L.mode,ee),ee.ref=ka(L,b,F),ee.return=L,ee)}function U(L,b,F,ee){return b===null||b.tag!==4||b.stateNode.containerInfo!==F.containerInfo||b.stateNode.implementation!==F.implementation?(b=Sd(F,L.mode,ee),b.return=L,b):(b=d(b,F.children||[]),b.return=L,b)}function J(L,b,F,ee,he){return b===null||b.tag!==7?(b=cs(F,L.mode,ee,he),b.return=L,b):(b=d(b,F),b.return=L,b)}function X(L,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Id(""+b,L.mode,F),b.return=L,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ge:return F=Lu(b.type,b.key,b.props,null,L.mode,F),F.ref=ka(L,null,b),F.return=L,F;case Se:return b=Sd(b,L.mode,F),b.return=L,b;case bt:var ee=b._init;return X(L,ee(b._payload),F)}if(ot(b)||fe(b))return b=cs(b,L.mode,F,null),b.return=L,b;du(L,b)}return null}function Y(L,b,F,ee){var he=b!==null?b.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return he!==null?null:S(L,b,""+F,ee);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ge:return F.key===he?k(L,b,F,ee):null;case Se:return F.key===he?U(L,b,F,ee):null;case bt:return he=F._init,Y(L,b,he(F._payload),ee)}if(ot(F)||fe(F))return he!==null?null:J(L,b,F,ee,null);du(L,F)}return null}function ie(L,b,F,ee,he){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return L=L.get(F)||null,S(b,L,""+ee,he);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case ge:return L=L.get(ee.key===null?F:ee.key)||null,k(b,L,ee,he);case Se:return L=L.get(ee.key===null?F:ee.key)||null,U(b,L,ee,he);case bt:var pe=ee._init;return ie(L,b,F,pe(ee._payload),he)}if(ot(ee)||fe(ee))return L=L.get(F)||null,J(b,L,ee,he,null);du(b,ee)}return null}function ue(L,b,F,ee){for(var he=null,pe=null,me=b,we=b=0,It=null;me!==null&&we<F.length;we++){me.index>we?(It=me,me=null):It=me.sibling;var Me=Y(L,me,F[we],ee);if(Me===null){me===null&&(me=It);break}r&&me&&Me.alternate===null&&s(L,me),b=m(Me,b,we),pe===null?he=Me:pe.sibling=Me,pe=Me,me=It}if(we===F.length)return a(L,me),Ze&&ns(L,we),he;if(me===null){for(;we<F.length;we++)me=X(L,F[we],ee),me!==null&&(b=m(me,b,we),pe===null?he=me:pe.sibling=me,pe=me);return Ze&&ns(L,we),he}for(me=h(L,me);we<F.length;we++)It=ie(me,L,we,F[we],ee),It!==null&&(r&&It.alternate!==null&&me.delete(It.key===null?we:It.key),b=m(It,b,we),pe===null?he=It:pe.sibling=It,pe=It);return r&&me.forEach(function(_i){return s(L,_i)}),Ze&&ns(L,we),he}function ce(L,b,F,ee){var he=fe(F);if(typeof he!="function")throw Error(t(150));if(F=he.call(F),F==null)throw Error(t(151));for(var pe=he=null,me=b,we=b=0,It=null,Me=F.next();me!==null&&!Me.done;we++,Me=F.next()){me.index>we?(It=me,me=null):It=me.sibling;var _i=Y(L,me,Me.value,ee);if(_i===null){me===null&&(me=It);break}r&&me&&_i.alternate===null&&s(L,me),b=m(_i,b,we),pe===null?he=_i:pe.sibling=_i,pe=_i,me=It}if(Me.done)return a(L,me),Ze&&ns(L,we),he;if(me===null){for(;!Me.done;we++,Me=F.next())Me=X(L,Me.value,ee),Me!==null&&(b=m(Me,b,we),pe===null?he=Me:pe.sibling=Me,pe=Me);return Ze&&ns(L,we),he}for(me=h(L,me);!Me.done;we++,Me=F.next())Me=ie(me,L,we,Me.value,ee),Me!==null&&(r&&Me.alternate!==null&&me.delete(Me.key===null?we:Me.key),b=m(Me,b,we),pe===null?he=Me:pe.sibling=Me,pe=Me);return r&&me.forEach(function(fT){return s(L,fT)}),Ze&&ns(L,we),he}function lt(L,b,F,ee){if(typeof F=="object"&&F!==null&&F.type===P&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ge:e:{for(var he=F.key,pe=b;pe!==null;){if(pe.key===he){if(he=F.type,he===P){if(pe.tag===7){a(L,pe.sibling),b=d(pe,F.props.children),b.return=L,L=b;break e}}else if(pe.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===bt&&_m(he)===pe.type){a(L,pe.sibling),b=d(pe,F.props),b.ref=ka(L,pe,F),b.return=L,L=b;break e}a(L,pe);break}else s(L,pe);pe=pe.sibling}F.type===P?(b=cs(F.props.children,L.mode,ee,F.key),b.return=L,L=b):(ee=Lu(F.type,F.key,F.props,null,L.mode,ee),ee.ref=ka(L,b,F),ee.return=L,L=ee)}return v(L);case Se:e:{for(pe=F.key;b!==null;){if(b.key===pe)if(b.tag===4&&b.stateNode.containerInfo===F.containerInfo&&b.stateNode.implementation===F.implementation){a(L,b.sibling),b=d(b,F.children||[]),b.return=L,L=b;break e}else{a(L,b);break}else s(L,b);b=b.sibling}b=Sd(F,L.mode,ee),b.return=L,L=b}return v(L);case bt:return pe=F._init,lt(L,b,pe(F._payload),ee)}if(ot(F))return ue(L,b,F,ee);if(fe(F))return ce(L,b,F,ee);du(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,b!==null&&b.tag===6?(a(L,b.sibling),b=d(b,F),b.return=L,L=b):(a(L,b),b=Id(F,L.mode,ee),b.return=L,L=b),v(L)):a(L,b)}return lt}var co=vm(!0),wm=vm(!1),fu=ai(null),pu=null,ho=null,Dh=null;function Vh(){Dh=ho=pu=null}function Oh(r){var s=fu.current;Ye(fu),r._currentValue=s}function Lh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function fo(r,s){pu=r,Dh=ho=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(Qt=!0),r.firstContext=null)}function gn(r){var s=r._currentValue;if(Dh!==r)if(r={context:r,memoizedValue:s,next:null},ho===null){if(pu===null)throw Error(t(308));ho=r,pu.dependencies={lanes:0,firstContext:r}}else ho=ho.next=r;return s}var rs=null;function Mh(r){rs===null?rs=[r]:rs.push(r)}function Em(r,s,a,h){var d=s.interleaved;return d===null?(a.next=a,Mh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Pr(r,h)}function Pr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ci=!1;function Fh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Nr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function hi(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Le&2)!==0){var d=h.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),h.pending=s,Pr(r,a)}return d=h.interleaved,d===null?(s.next=s,Mh(h)):(s.next=d.next,d.next=s),h.interleaved=s,Pr(r,a)}function mu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ca(r,a)}}function Im(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=s:m=m.next=s}else d=m=s;a={baseState:h.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function gu(r,s,a,h){var d=r.updateQueue;ci=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var k=S,U=k.next;k.next=null,v===null?m=U:v.next=U,v=k;var J=r.alternate;J!==null&&(J=J.updateQueue,S=J.lastBaseUpdate,S!==v&&(S===null?J.firstBaseUpdate=U:S.next=U,J.lastBaseUpdate=k))}if(m!==null){var X=d.baseState;v=0,J=U=k=null,S=m;do{var Y=S.lane,ie=S.eventTime;if((h&Y)===Y){J!==null&&(J=J.next={eventTime:ie,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ue=r,ce=S;switch(Y=s,ie=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(ie,X,Y);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Y=typeof ue=="function"?ue.call(ie,X,Y):ue,Y==null)break e;X=ae({},X,Y);break e;case 2:ci=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,Y=d.effects,Y===null?d.effects=[S]:Y.push(S))}else ie={eventTime:ie,lane:Y,tag:S.tag,payload:S.payload,callback:S.callback,next:null},J===null?(U=J=ie,k=X):J=J.next=ie,v|=Y;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;Y=S,S=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(J===null&&(k=X),d.baseState=k,d.firstBaseUpdate=U,d.lastBaseUpdate=J,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else m===null&&(d.shared.lanes=0);os|=v,r.lanes=v,r.memoizedState=X}}function Sm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],d=h.callback;if(d!==null){if(h.callback=null,h=a,typeof d!="function")throw Error(t(191,d));d.call(h)}}}var Pa={},rr=ai(Pa),Na=ai(Pa),ba=ai(Pa);function is(r){if(r===Pa)throw Error(t(174));return r}function jh(r,s){switch(We(ba,s),We(Na,r),We(rr,Pa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Vs(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=Vs(s,r)}Ye(rr),We(rr,s)}function po(){Ye(rr),Ye(Na),Ye(ba)}function xm(r){is(ba.current);var s=is(rr.current),a=Vs(s,r.type);s!==a&&(We(Na,r),We(rr,a))}function Uh(r){Na.current===r&&(Ye(rr),Ye(Na))}var tt=ai(0);function yu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var zh=[];function Bh(){for(var r=0;r<zh.length;r++)zh[r]._workInProgressVersionPrimary=null;zh.length=0}var _u=ve.ReactCurrentDispatcher,$h=ve.ReactCurrentBatchConfig,ss=0,nt=null,gt=null,Et=null,vu=!1,Da=!1,Va=0,OE=0;function Ot(){throw Error(t(321))}function qh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Rn(r[a],s[a]))return!1;return!0}function Hh(r,s,a,h,d,m){if(ss=m,nt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,_u.current=r===null||r.memoizedState===null?jE:UE,r=a(h,d),Da){m=0;do{if(Da=!1,Va=0,25<=m)throw Error(t(301));m+=1,Et=gt=null,s.updateQueue=null,_u.current=zE,r=a(h,d)}while(Da)}if(_u.current=Tu,s=gt!==null&&gt.next!==null,ss=0,Et=gt=nt=null,vu=!1,s)throw Error(t(300));return r}function Wh(){var r=Va!==0;return Va=0,r}function ir(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?nt.memoizedState=Et=r:Et=Et.next=r,Et}function yn(){if(gt===null){var r=nt.alternate;r=r!==null?r.memoizedState:null}else r=gt.next;var s=Et===null?nt.memoizedState:Et.next;if(s!==null)Et=s,gt=r;else{if(r===null)throw Error(t(310));gt=r,r={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Et===null?nt.memoizedState=Et=r:Et=Et.next=r}return Et}function Oa(r,s){return typeof s=="function"?s(r):s}function Kh(r){var s=yn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=gt,d=h.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}h.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,h=h.baseState;var S=v=null,k=null,U=m;do{var J=U.lane;if((ss&J)===J)k!==null&&(k=k.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),h=U.hasEagerState?U.eagerState:r(h,U.action);else{var X={lane:J,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};k===null?(S=k=X,v=h):k=k.next=X,nt.lanes|=J,os|=J}U=U.next}while(U!==null&&U!==m);k===null?v=h:k.next=S,Rn(h,s.memoizedState)||(Qt=!0),s.memoizedState=h,s.baseState=v,s.baseQueue=k,a.lastRenderedState=h}if(r=a.interleaved,r!==null){d=r;do m=d.lane,nt.lanes|=m,os|=m,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Gh(r){var s=yn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,d=a.pending,m=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=r(m,v.action),v=v.next;while(v!==d);Rn(m,s.memoizedState)||(Qt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),a.lastRenderedState=m}return[m,h]}function Am(){}function Rm(r,s){var a=nt,h=yn(),d=s(),m=!Rn(h.memoizedState,d);if(m&&(h.memoizedState=d,Qt=!0),h=h.queue,Qh(Pm.bind(null,a,h,r),[r]),h.getSnapshot!==s||m||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,La(9,km.bind(null,a,h,d,s),void 0,null),Tt===null)throw Error(t(349));(ss&30)!==0||Cm(a,s,d)}return d}function Cm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function km(r,s,a,h){s.value=a,s.getSnapshot=h,Nm(s)&&bm(r)}function Pm(r,s,a){return a(function(){Nm(s)&&bm(r)})}function Nm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Rn(r,a)}catch{return!0}}function bm(r){var s=Pr(r,1);s!==null&&bn(s,r,1,-1)}function Dm(r){var s=ir();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:r},s.queue=r,r=r.dispatch=FE.bind(null,nt,r),[s.memoizedState,r]}function La(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=nt.updateQueue,s===null?(s={lastEffect:null,stores:null},nt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function Vm(){return yn().memoizedState}function wu(r,s,a,h){var d=ir();nt.flags|=r,d.memoizedState=La(1|s,a,void 0,h===void 0?null:h)}function Eu(r,s,a,h){var d=yn();h=h===void 0?null:h;var m=void 0;if(gt!==null){var v=gt.memoizedState;if(m=v.destroy,h!==null&&qh(h,v.deps)){d.memoizedState=La(s,a,m,h);return}}nt.flags|=r,d.memoizedState=La(1|s,a,m,h)}function Om(r,s){return wu(8390656,8,r,s)}function Qh(r,s){return Eu(2048,8,r,s)}function Lm(r,s){return Eu(4,2,r,s)}function Mm(r,s){return Eu(4,4,r,s)}function Fm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function jm(r,s,a){return a=a!=null?a.concat([r]):null,Eu(4,4,Fm.bind(null,s,r),a)}function Yh(){}function Um(r,s){var a=yn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&qh(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function zm(r,s){var a=yn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&qh(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function Bm(r,s,a){return(ss&21)===0?(r.baseState&&(r.baseState=!1,Qt=!0),r.memoizedState=a):(Rn(a,s)||(a=la(),nt.lanes|=a,os|=a,r.baseState=!0),s)}function LE(r,s){var a=De;De=a!==0&&4>a?a:4,r(!0);var h=$h.transition;$h.transition={};try{r(!1),s()}finally{De=a,$h.transition=h}}function $m(){return yn().memoizedState}function ME(r,s,a){var h=mi(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},qm(r))Hm(s,a);else if(a=Em(r,s,a,h),a!==null){var d=Ht();bn(a,r,h,d),Wm(a,s,h)}}function FE(r,s,a){var h=mi(r),d={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(qm(r))Hm(s,d);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var v=s.lastRenderedState,S=m(v,a);if(d.hasEagerState=!0,d.eagerState=S,Rn(S,v)){var k=s.interleaved;k===null?(d.next=d,Mh(s)):(d.next=k.next,k.next=d),s.interleaved=d;return}}catch{}finally{}a=Em(r,s,d,h),a!==null&&(d=Ht(),bn(a,r,h,d),Wm(a,s,h))}}function qm(r){var s=r.alternate;return r===nt||s!==null&&s===nt}function Hm(r,s){Da=vu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Wm(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ca(r,a)}}var Tu={readContext:gn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},jE={readContext:gn,useCallback:function(r,s){return ir().memoizedState=[r,s===void 0?null:s],r},useContext:gn,useEffect:Om,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,wu(4194308,4,Fm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return wu(4194308,4,r,s)},useInsertionEffect:function(r,s){return wu(4,2,r,s)},useMemo:function(r,s){var a=ir();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=ir();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=ME.bind(null,nt,r),[h.memoizedState,r]},useRef:function(r){var s=ir();return r={current:r},s.memoizedState=r},useState:Dm,useDebugValue:Yh,useDeferredValue:function(r){return ir().memoizedState=r},useTransition:function(){var r=Dm(!1),s=r[0];return r=LE.bind(null,r[1]),ir().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=nt,d=ir();if(Ze){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));(ss&30)!==0||Cm(h,s,a)}d.memoizedState=a;var m={value:a,getSnapshot:s};return d.queue=m,Om(Pm.bind(null,h,m,r),[r]),h.flags|=2048,La(9,km.bind(null,h,m,a,s),void 0,null),a},useId:function(){var r=ir(),s=Tt.identifierPrefix;if(Ze){var a=kr,h=Cr;a=(h&~(1<<32-tn(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Va++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=OE++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},UE={readContext:gn,useCallback:Um,useContext:gn,useEffect:Qh,useImperativeHandle:jm,useInsertionEffect:Lm,useLayoutEffect:Mm,useMemo:zm,useReducer:Kh,useRef:Vm,useState:function(){return Kh(Oa)},useDebugValue:Yh,useDeferredValue:function(r){var s=yn();return Bm(s,gt.memoizedState,r)},useTransition:function(){var r=Kh(Oa)[0],s=yn().memoizedState;return[r,s]},useMutableSource:Am,useSyncExternalStore:Rm,useId:$m,unstable_isNewReconciler:!1},zE={readContext:gn,useCallback:Um,useContext:gn,useEffect:Qh,useImperativeHandle:jm,useInsertionEffect:Lm,useLayoutEffect:Mm,useMemo:zm,useReducer:Gh,useRef:Vm,useState:function(){return Gh(Oa)},useDebugValue:Yh,useDeferredValue:function(r){var s=yn();return gt===null?s.memoizedState=r:Bm(s,gt.memoizedState,r)},useTransition:function(){var r=Gh(Oa)[0],s=yn().memoizedState;return[r,s]},useMutableSource:Am,useSyncExternalStore:Rm,useId:$m,unstable_isNewReconciler:!1};function kn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Jh(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Iu={isMounted:function(r){return(r=r._reactInternals)?xn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Ht(),d=mi(r),m=Nr(h,d);m.payload=s,a!=null&&(m.callback=a),s=hi(r,m,d),s!==null&&(bn(s,r,d,h),mu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Ht(),d=mi(r),m=Nr(h,d);m.tag=1,m.payload=s,a!=null&&(m.callback=a),s=hi(r,m,d),s!==null&&(bn(s,r,d,h),mu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Ht(),h=mi(r),d=Nr(a,h);d.tag=2,s!=null&&(d.callback=s),s=hi(r,d,h),s!==null&&(bn(s,r,h,a),mu(s,r,h))}};function Km(r,s,a,h,d,m,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,m,v):s.prototype&&s.prototype.isPureReactComponent?!Ta(a,h)||!Ta(d,m):!0}function Gm(r,s,a){var h=!1,d=li,m=s.contextType;return typeof m=="object"&&m!==null?m=gn(m):(d=Gt(s)?es:Vt.current,h=s.contextTypes,m=(h=h!=null)?oo(r,d):li),s=new s(a,m),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Iu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=m),s}function Qm(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&Iu.enqueueReplaceState(s,s.state,null)}function Xh(r,s,a,h){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Fh(r);var m=s.contextType;typeof m=="object"&&m!==null?d.context=gn(m):(m=Gt(s)?es:Vt.current,d.context=oo(r,m)),d.state=r.memoizedState,m=s.getDerivedStateFromProps,typeof m=="function"&&(Jh(r,s,m,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Iu.enqueueReplaceState(d,d.state,null),gu(r,a,d,h),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function mo(r,s){try{var a="",h=s;do a+=Ce(h),h=h.return;while(h);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:s,stack:d,digest:null}}function Zh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function ed(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var BE=typeof WeakMap=="function"?WeakMap:Map;function Ym(r,s,a){a=Nr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Pu||(Pu=!0,md=h),ed(r,s)},a}function Jm(r,s,a){a=Nr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var d=s.value;a.payload=function(){return h(d)},a.callback=function(){ed(r,s)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){ed(r,s),typeof h!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function Xm(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new BE;var d=new Set;h.set(s,d)}else d=h.get(s),d===void 0&&(d=new Set,h.set(s,d));d.has(a)||(d.add(a),r=nT.bind(null,r,s,a),s.then(r,r))}function Zm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function eg(r,s,a,h,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Nr(-1,1),s.tag=2,hi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var $E=ve.ReactCurrentOwner,Qt=!1;function qt(r,s,a,h){s.child=r===null?wm(s,null,a,h):co(s,r.child,a,h)}function tg(r,s,a,h,d){a=a.render;var m=s.ref;return fo(s,d),h=Hh(r,s,a,h,m,d),a=Wh(),r!==null&&!Qt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,br(r,s,d)):(Ze&&a&&Ch(s),s.flags|=1,qt(r,s,h,d),s.child)}function ng(r,s,a,h,d){if(r===null){var m=a.type;return typeof m=="function"&&!Td(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=m,rg(r,s,m,h,d)):(r=Lu(a.type,null,h,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(m=r.child,(r.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ta,a(v,h)&&r.ref===s.ref)return br(r,s,d)}return s.flags|=1,r=yi(m,h),r.ref=s.ref,r.return=s,s.child=r}function rg(r,s,a,h,d){if(r!==null){var m=r.memoizedProps;if(Ta(m,h)&&r.ref===s.ref)if(Qt=!1,s.pendingProps=h=m,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Qt=!0);else return s.lanes=r.lanes,br(r,s,d)}return td(r,s,a,h,d)}function ig(r,s,a){var h=s.pendingProps,d=h.children,m=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(yo,un),un|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(yo,un),un|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=m!==null?m.baseLanes:a,We(yo,un),un|=h}else m!==null?(h=m.baseLanes|a,s.memoizedState=null):h=a,We(yo,un),un|=h;return qt(r,s,d,a),s.child}function sg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function td(r,s,a,h,d){var m=Gt(a)?es:Vt.current;return m=oo(s,m),fo(s,d),a=Hh(r,s,a,h,m,d),h=Wh(),r!==null&&!Qt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,br(r,s,d)):(Ze&&h&&Ch(s),s.flags|=1,qt(r,s,a,d),s.child)}function og(r,s,a,h,d){if(Gt(a)){var m=!0;au(s)}else m=!1;if(fo(s,d),s.stateNode===null)xu(r,s),Gm(s,a,h),Xh(s,a,h,d),h=!0;else if(r===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var k=v.context,U=a.contextType;typeof U=="object"&&U!==null?U=gn(U):(U=Gt(a)?es:Vt.current,U=oo(s,U));var J=a.getDerivedStateFromProps,X=typeof J=="function"||typeof v.getSnapshotBeforeUpdate=="function";X||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==h||k!==U)&&Qm(s,v,h,U),ci=!1;var Y=s.memoizedState;v.state=Y,gu(s,h,v,d),k=s.memoizedState,S!==h||Y!==k||Kt.current||ci?(typeof J=="function"&&(Jh(s,a,J,h),k=s.memoizedState),(S=ci||Km(s,a,S,h,Y,k,U))?(X||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),v.props=h,v.state=k,v.context=U,h=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{v=s.stateNode,Tm(r,s),S=s.memoizedProps,U=s.type===s.elementType?S:kn(s.type,S),v.props=U,X=s.pendingProps,Y=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=gn(k):(k=Gt(a)?es:Vt.current,k=oo(s,k));var ie=a.getDerivedStateFromProps;(J=typeof ie=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==X||Y!==k)&&Qm(s,v,h,k),ci=!1,Y=s.memoizedState,v.state=Y,gu(s,h,v,d);var ue=s.memoizedState;S!==X||Y!==ue||Kt.current||ci?(typeof ie=="function"&&(Jh(s,a,ie,h),ue=s.memoizedState),(U=ci||Km(s,a,U,h,Y,ue,k)||!1)?(J||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(h,ue,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(h,ue,k)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ue),v.props=h,v.state=ue,v.context=k,h=U):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Y===r.memoizedState||(s.flags|=1024),h=!1)}return nd(r,s,a,h,m,d)}function nd(r,s,a,h,d,m){sg(r,s);var v=(s.flags&128)!==0;if(!h&&!v)return d&&hm(s,a,!1),br(r,s,m);h=s.stateNode,$E.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&v?(s.child=co(s,r.child,null,m),s.child=co(s,null,S,m)):qt(r,s,S,m),s.memoizedState=h.state,d&&hm(s,a,!0),s.child}function ag(r){var s=r.stateNode;s.pendingContext?um(r,s.pendingContext,s.pendingContext!==s.context):s.context&&um(r,s.context,!1),jh(r,s.containerInfo)}function lg(r,s,a,h,d){return uo(),bh(d),s.flags|=256,qt(r,s,a,h),s.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function id(r){return{baseLanes:r,cachePool:null,transitions:null}}function ug(r,s,a){var h=s.pendingProps,d=tt.current,m=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(m=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),We(tt,d&1),r===null)return Nh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=h.children,r=h.fallback,m?(h=s.mode,m=s.child,v={mode:"hidden",children:v},(h&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Mu(v,h,0,null),r=cs(r,h,a,null),m.return=s,r.return=s,m.sibling=r,s.child=m,s.child.memoizedState=id(a),s.memoizedState=rd,r):sd(s,v));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return qE(r,s,v,h,S,d,a);if(m){m=h.fallback,v=s.mode,d=r.child,S=d.sibling;var k={mode:"hidden",children:h.children};return(v&1)===0&&s.child!==d?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=yi(d,k),h.subtreeFlags=d.subtreeFlags&14680064),S!==null?m=yi(S,m):(m=cs(m,v,a,null),m.flags|=2),m.return=s,h.return=s,h.sibling=m,s.child=h,h=m,m=s.child,v=r.child.memoizedState,v=v===null?id(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=r.childLanes&~a,s.memoizedState=rd,h}return m=r.child,r=m.sibling,h=yi(m,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function sd(r,s){return s=Mu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Su(r,s,a,h){return h!==null&&bh(h),co(s,r.child,null,a),r=sd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function qE(r,s,a,h,d,m,v){if(a)return s.flags&256?(s.flags&=-257,h=Zh(Error(t(422))),Su(r,s,v,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(m=h.fallback,d=s.mode,h=Mu({mode:"visible",children:h.children},d,0,null),m=cs(m,d,v,null),m.flags|=2,h.return=s,m.return=s,h.sibling=m,s.child=h,(s.mode&1)!==0&&co(s,r.child,null,v),s.child.memoizedState=id(v),s.memoizedState=rd,m);if((s.mode&1)===0)return Su(r,s,v,null);if(d.data==="$!"){if(h=d.nextSibling&&d.nextSibling.dataset,h)var S=h.dgst;return h=S,m=Error(t(419)),h=Zh(m,h,void 0),Su(r,s,v,h)}if(S=(v&r.childLanes)!==0,Qt||S){if(h=Tt,h!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(h.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Pr(r,d),bn(h,r,d,-1))}return Ed(),h=Zh(Error(t(421))),Su(r,s,v,h)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=rT.bind(null,r),d._reactRetry=s,null):(r=m.treeContext,ln=oi(d.nextSibling),an=s,Ze=!0,Cn=null,r!==null&&(pn[mn++]=Cr,pn[mn++]=kr,pn[mn++]=ts,Cr=r.id,kr=r.overflow,ts=s),s=sd(s,h.children),s.flags|=4096,s)}function cg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Lh(r.return,s,a)}function od(r,s,a,h,d){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:d}:(m.isBackwards=s,m.rendering=null,m.renderingStartTime=0,m.last=h,m.tail=a,m.tailMode=d)}function hg(r,s,a){var h=s.pendingProps,d=h.revealOrder,m=h.tail;if(qt(r,s,h.children,a),h=tt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&cg(r,a,s);else if(r.tag===19)cg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(tt,h),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&yu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),od(s,!1,d,a,m);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&yu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}od(s,!0,a,null,m);break;case"together":od(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function xu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function br(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),os|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=yi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=yi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function HE(r,s,a){switch(s.tag){case 3:ag(s),uo();break;case 5:xm(s);break;case 1:Gt(s.type)&&au(s);break;case 4:jh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,d=s.memoizedProps.value;We(fu,h._currentValue),h._currentValue=d;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(tt,tt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?ug(r,s,a):(We(tt,tt.current&1),r=br(r,s,a),r!==null?r.sibling:null);We(tt,tt.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return hg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(tt,tt.current),h)break;return null;case 22:case 23:return s.lanes=0,ig(r,s,a)}return br(r,s,a)}var dg,ad,fg,pg;dg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ad=function(){},fg=function(r,s,a,h){var d=r.memoizedProps;if(d!==h){r=s.stateNode,is(rr.current);var m=null;switch(a){case"input":d=bs(r,d),h=bs(r,h),m=[];break;case"select":d=ae({},d,{value:void 0}),h=ae({},h,{value:void 0}),m=[];break;case"textarea":d=Jo(r,d),h=Jo(r,h),m=[];break;default:typeof d.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=iu)}Sn(a,h);var v;a=null;for(U in d)if(!h.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var S=d[U];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(o.hasOwnProperty(U)?m||(m=[]):(m=m||[]).push(U,null));for(U in h){var k=h[U];if(S=d!=null?d[U]:void 0,h.hasOwnProperty(U)&&k!==S&&(k!=null||S!=null))if(U==="style")if(S){for(v in S)!S.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&S[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(m||(m=[]),m.push(U,a)),a=k;else U==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,S=S?S.__html:void 0,k!=null&&S!==k&&(m=m||[]).push(U,k)):U==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(U,""+k):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(o.hasOwnProperty(U)?(k!=null&&U==="onScroll"&&Qe("scroll",r),m||S===k||(m=[])):(m=m||[]).push(U,k))}a&&(m=m||[]).push("style",a);var U=m;(s.updateQueue=U)&&(s.flags|=4)}},pg=function(r,s,a,h){a!==h&&(s.flags|=4)};function Ma(r,s){if(!Ze)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Lt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags&14680064,h|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,h|=d.subtreeFlags,h|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function WE(r,s,a){var h=s.pendingProps;switch(kh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(s),null;case 1:return Gt(s.type)&&ou(),Lt(s),null;case 3:return h=s.stateNode,po(),Ye(Kt),Ye(Vt),Bh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(hu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Cn!==null&&(_d(Cn),Cn=null))),ad(r,s),Lt(s),null;case 5:Uh(s);var d=is(ba.current);if(a=s.type,r!==null&&s.stateNode!=null)fg(r,s,a,h,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Lt(s),null}if(r=is(rr.current),hu(s)){h=s.stateNode,a=s.type;var m=s.memoizedProps;switch(h[nr]=s,h[Ra]=m,r=(s.mode&1)!==0,a){case"dialog":Qe("cancel",h),Qe("close",h);break;case"iframe":case"object":case"embed":Qe("load",h);break;case"video":case"audio":for(d=0;d<Sa.length;d++)Qe(Sa[d],h);break;case"source":Qe("error",h);break;case"img":case"image":case"link":Qe("error",h),Qe("load",h);break;case"details":Qe("toggle",h);break;case"input":kl(h,m),Qe("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!m.multiple},Qe("invalid",h);break;case"textarea":Xo(h,m),Qe("invalid",h)}Sn(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var S=m[v];v==="children"?typeof S=="string"?h.textContent!==S&&(m.suppressHydrationWarning!==!0&&ru(h.textContent,S,r),d=["children",S]):typeof S=="number"&&h.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&ru(h.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Qe("scroll",h)}switch(a){case"input":Ns(h),Yo(h,m,!0);break;case"textarea":Ns(h),qr(h);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(h.onclick=iu)}h=d,s.updateQueue=h,h!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Zo(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=v.createElement(a,{is:h.is}):(r=v.createElement(a),a==="select"&&(v=r,h.multiple?v.multiple=!0:h.size&&(v.size=h.size))):r=v.createElementNS(r,a),r[nr]=s,r[Ra]=h,dg(r,s,!1,!1),s.stateNode=r;e:{switch(v=Ls(a,h),a){case"dialog":Qe("cancel",r),Qe("close",r),d=h;break;case"iframe":case"object":case"embed":Qe("load",r),d=h;break;case"video":case"audio":for(d=0;d<Sa.length;d++)Qe(Sa[d],r);d=h;break;case"source":Qe("error",r),d=h;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),d=h;break;case"details":Qe("toggle",r),d=h;break;case"input":kl(r,h),d=bs(r,h),Qe("invalid",r);break;case"option":d=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},d=ae({},h,{value:void 0}),Qe("invalid",r);break;case"textarea":Xo(r,h),d=Jo(r,h),Qe("invalid",r);break;default:d=h}Sn(a,d),S=d;for(m in S)if(S.hasOwnProperty(m)){var k=S[m];m==="style"?Os(r,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Nl(r,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ji(r,k):typeof k=="number"&&ji(r,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Qe("scroll",r):k!=null&&ne(r,m,k,v))}switch(a){case"input":Ns(r),Yo(r,h,!1);break;case"textarea":Ns(r),qr(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Oe(h.value));break;case"select":r.multiple=!!h.multiple,m=h.value,m!=null?In(r,!!h.multiple,m,!1):h.defaultValue!=null&&In(r,!!h.multiple,h.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=iu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Lt(s),null;case 6:if(r&&s.stateNode!=null)pg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=is(ba.current),is(rr.current),hu(s)){if(h=s.stateNode,a=s.memoizedProps,h[nr]=s,(m=h.nodeValue!==a)&&(r=an,r!==null))switch(r.tag){case 3:ru(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ru(h.nodeValue,a,(r.mode&1)!==0)}m&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[nr]=s,s.stateNode=h}return Lt(s),null;case 13:if(Ye(tt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ze&&ln!==null&&(s.mode&1)!==0&&(s.flags&128)===0)ym(),uo(),s.flags|=98560,m=!1;else if(m=hu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=s.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[nr]=s}else uo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Lt(s),m=!1}else Cn!==null&&(_d(Cn),Cn=null),m=!0;if(!m)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(tt.current&1)!==0?yt===0&&(yt=3):Ed())),s.updateQueue!==null&&(s.flags|=4),Lt(s),null);case 4:return po(),ad(r,s),r===null&&xa(s.stateNode.containerInfo),Lt(s),null;case 10:return Oh(s.type._context),Lt(s),null;case 17:return Gt(s.type)&&ou(),Lt(s),null;case 19:if(Ye(tt),m=s.memoizedState,m===null)return Lt(s),null;if(h=(s.flags&128)!==0,v=m.rendering,v===null)if(h)Ma(m,!1);else{if(yt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=yu(r),v!==null){for(s.flags|=128,Ma(m,!1),h=v.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)m=a,r=h,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,r=v.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(tt,tt.current&1|2),s.child}r=r.sibling}m.tail!==null&&Ge()>_o&&(s.flags|=128,h=!0,Ma(m,!1),s.lanes=4194304)}else{if(!h)if(r=yu(v),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ma(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ze)return Lt(s),null}else 2*Ge()-m.renderingStartTime>_o&&a!==1073741824&&(s.flags|=128,h=!0,Ma(m,!1),s.lanes=4194304);m.isBackwards?(v.sibling=s.child,s.child=v):(a=m.last,a!==null?a.sibling=v:s.child=v,m.last=v)}return m.tail!==null?(s=m.tail,m.rendering=s,m.tail=s.sibling,m.renderingStartTime=Ge(),s.sibling=null,a=tt.current,We(tt,h?a&1|2:a&1),s):(Lt(s),null);case 22:case 23:return wd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(un&1073741824)!==0&&(Lt(s),s.subtreeFlags&6&&(s.flags|=8192)):Lt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function KE(r,s){switch(kh(s),s.tag){case 1:return Gt(s.type)&&ou(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return po(),Ye(Kt),Ye(Vt),Bh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Uh(s),null;case 13:if(Ye(tt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));uo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(tt),null;case 4:return po(),null;case 10:return Oh(s.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var Au=!1,Mt=!1,GE=typeof WeakSet=="function"?WeakSet:Set,le=null;function go(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){st(r,s,h)}else a.current=null}function ld(r,s,a){try{a()}catch(h){st(r,s,h)}}var mg=!1;function QE(r,s){if(wh=Ir,r=Kp(),dh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var d=h.anchorOffset,m=h.focusNode;h=h.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,S=-1,k=-1,U=0,J=0,X=r,Y=null;t:for(;;){for(var ie;X!==a||d!==0&&X.nodeType!==3||(S=v+d),X!==m||h!==0&&X.nodeType!==3||(k=v+h),X.nodeType===3&&(v+=X.nodeValue.length),(ie=X.firstChild)!==null;)Y=X,X=ie;for(;;){if(X===r)break t;if(Y===a&&++U===d&&(S=v),Y===m&&++J===h&&(k=v),(ie=X.nextSibling)!==null)break;X=Y,Y=X.parentNode}X=ie}a=S===-1||k===-1?null:{start:S,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Eh={focusedElem:r,selectionRange:a},Ir=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ue=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,lt=ue.memoizedState,L=s.stateNode,b=L.getSnapshotBeforeUpdate(s.elementType===s.type?ce:kn(s.type,ce),lt);L.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var F=s.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){st(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ue=mg,mg=!1,ue}function Fa(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var d=h=h.next;do{if((d.tag&r)===r){var m=d.destroy;d.destroy=void 0,m!==void 0&&ld(s,a,m)}d=d.next}while(d!==h)}}function Ru(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function ud(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function gg(r){var s=r.alternate;s!==null&&(r.alternate=null,gg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[nr],delete s[Ra],delete s[xh],delete s[NE],delete s[bE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function yg(r){return r.tag===5||r.tag===3||r.tag===4}function _g(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||yg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function cd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=iu));else if(h!==4&&(r=r.child,r!==null))for(cd(r,s,a),r=r.sibling;r!==null;)cd(r,s,a),r=r.sibling}function hd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(hd(r,s,a),r=r.sibling;r!==null;)hd(r,s,a),r=r.sibling}var Rt=null,Pn=!1;function di(r,s,a){for(a=a.child;a!==null;)vg(r,s,a),a=a.sibling}function vg(r,s,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(qi,a)}catch{}switch(a.tag){case 5:Mt||go(a,s);case 6:var h=Rt,d=Pn;Rt=null,di(r,s,a),Rt=h,Pn=d,Rt!==null&&(Pn?(r=Rt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Pn?(r=Rt,a=a.stateNode,r.nodeType===8?Sh(r.parentNode,a):r.nodeType===1&&Sh(r,a),ni(r)):Sh(Rt,a.stateNode));break;case 4:h=Rt,d=Pn,Rt=a.stateNode.containerInfo,Pn=!0,di(r,s,a),Rt=h,Pn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){d=h=h.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&ld(a,s,v),d=d.next}while(d!==h)}di(r,s,a);break;case 1:if(!Mt&&(go(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(S){st(a,s,S)}di(r,s,a);break;case 21:di(r,s,a);break;case 22:a.mode&1?(Mt=(h=Mt)||a.memoizedState!==null,di(r,s,a),Mt=h):di(r,s,a);break;default:di(r,s,a)}}function wg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new GE),s.forEach(function(h){var d=iT.bind(null,r,h);a.has(h)||(a.add(h),h.then(d,d))})}}function Nn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var d=a[h];try{var m=r,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Rt=S.stateNode,Pn=!1;break e;case 3:Rt=S.stateNode.containerInfo,Pn=!0;break e;case 4:Rt=S.stateNode.containerInfo,Pn=!0;break e}S=S.return}if(Rt===null)throw Error(t(160));vg(m,v,d),Rt=null,Pn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(U){st(d,s,U)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Eg(s,r),s=s.sibling}function Eg(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Nn(s,r),sr(r),h&4){try{Fa(3,r,r.return),Ru(3,r)}catch(ce){st(r,r.return,ce)}try{Fa(5,r,r.return)}catch(ce){st(r,r.return,ce)}}break;case 1:Nn(s,r),sr(r),h&512&&a!==null&&go(a,a.return);break;case 5:if(Nn(s,r),sr(r),h&512&&a!==null&&go(a,a.return),r.flags&32){var d=r.stateNode;try{ji(d,"")}catch(ce){st(r,r.return,ce)}}if(h&4&&(d=r.stateNode,d!=null)){var m=r.memoizedProps,v=a!==null?a.memoizedProps:m,S=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&Ds(d,m),Ls(S,v);var U=Ls(S,m);for(v=0;v<k.length;v+=2){var J=k[v],X=k[v+1];J==="style"?Os(d,X):J==="dangerouslySetInnerHTML"?Nl(d,X):J==="children"?ji(d,X):ne(d,J,X,U)}switch(S){case"input":Fi(d,m);break;case"textarea":Pl(d,m);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ie=m.value;ie!=null?In(d,!!m.multiple,ie,!1):Y!==!!m.multiple&&(m.defaultValue!=null?In(d,!!m.multiple,m.defaultValue,!0):In(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ra]=m}catch(ce){st(r,r.return,ce)}}break;case 6:if(Nn(s,r),sr(r),h&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,m=r.memoizedProps;try{d.nodeValue=m}catch(ce){st(r,r.return,ce)}}break;case 3:if(Nn(s,r),sr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{ni(s.containerInfo)}catch(ce){st(r,r.return,ce)}break;case 4:Nn(s,r),sr(r);break;case 13:Nn(s,r),sr(r),d=r.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(pd=Ge())),h&4&&wg(r);break;case 22:if(J=a!==null&&a.memoizedState!==null,r.mode&1?(Mt=(U=Mt)||J,Nn(s,r),Mt=U):Nn(s,r),sr(r),h&8192){if(U=r.memoizedState!==null,(r.stateNode.isHidden=U)&&!J&&(r.mode&1)!==0)for(le=r,J=r.child;J!==null;){for(X=le=J;le!==null;){switch(Y=le,ie=Y.child,Y.tag){case 0:case 11:case 14:case 15:Fa(4,Y,Y.return);break;case 1:go(Y,Y.return);var ue=Y.stateNode;if(typeof ue.componentWillUnmount=="function"){h=Y,a=Y.return;try{s=h,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(ce){st(h,a,ce)}}break;case 5:go(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Sg(X);continue}}ie!==null?(ie.return=Y,le=ie):Sg(X)}J=J.sibling}e:for(J=null,X=r;;){if(X.tag===5){if(J===null){J=X;try{d=X.stateNode,U?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=X.stateNode,k=X.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,S.style.display=Kr("display",v))}catch(ce){st(r,r.return,ce)}}}else if(X.tag===6){if(J===null)try{X.stateNode.nodeValue=U?"":X.memoizedProps}catch(ce){st(r,r.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===r)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===r)break e;for(;X.sibling===null;){if(X.return===null||X.return===r)break e;J===X&&(J=null),X=X.return}J===X&&(J=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Nn(s,r),sr(r),h&4&&wg(r);break;case 21:break;default:Nn(s,r),sr(r)}}function sr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(yg(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var d=h.stateNode;h.flags&32&&(ji(d,""),h.flags&=-33);var m=_g(r);hd(r,m,d);break;case 3:case 4:var v=h.stateNode.containerInfo,S=_g(r);cd(r,S,v);break;default:throw Error(t(161))}}catch(k){st(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function YE(r,s,a){le=r,Tg(r)}function Tg(r,s,a){for(var h=(r.mode&1)!==0;le!==null;){var d=le,m=d.child;if(d.tag===22&&h){var v=d.memoizedState!==null||Au;if(!v){var S=d.alternate,k=S!==null&&S.memoizedState!==null||Mt;S=Au;var U=Mt;if(Au=v,(Mt=k)&&!U)for(le=d;le!==null;)v=le,k=v.child,v.tag===22&&v.memoizedState!==null?xg(d):k!==null?(k.return=v,le=k):xg(d);for(;m!==null;)le=m,Tg(m),m=m.sibling;le=d,Au=S,Mt=U}Ig(r)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,le=m):Ig(r)}}function Ig(r){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Mt||Ru(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Mt)if(a===null)h.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:kn(s.type,a.memoizedProps);h.componentDidUpdate(d,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var m=s.updateQueue;m!==null&&Sm(s,m,h);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Sm(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var U=s.alternate;if(U!==null){var J=U.memoizedState;if(J!==null){var X=J.dehydrated;X!==null&&ni(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&ud(s)}catch(Y){st(s,s.return,Y)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function Sg(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function xg(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Ru(4,s)}catch(k){st(s,a,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var d=s.return;try{h.componentDidMount()}catch(k){st(s,d,k)}}var m=s.return;try{ud(s)}catch(k){st(s,m,k)}break;case 5:var v=s.return;try{ud(s)}catch(k){st(s,v,k)}}}catch(k){st(s,s.return,k)}if(s===r){le=null;break}var S=s.sibling;if(S!==null){S.return=s.return,le=S;break}le=s.return}}var JE=Math.ceil,Cu=ve.ReactCurrentDispatcher,dd=ve.ReactCurrentOwner,_n=ve.ReactCurrentBatchConfig,Le=0,Tt=null,dt=null,Ct=0,un=0,yo=ai(0),yt=0,ja=null,os=0,ku=0,fd=0,Ua=null,Yt=null,pd=0,_o=1/0,Dr=null,Pu=!1,md=null,fi=null,Nu=!1,pi=null,bu=0,za=0,gd=null,Du=-1,Vu=0;function Ht(){return(Le&6)!==0?Ge():Du!==-1?Du:Du=Ge()}function mi(r){return(r.mode&1)===0?1:(Le&2)!==0&&Ct!==0?Ct&-Ct:VE.transition!==null?(Vu===0&&(Vu=la()),Vu):(r=De,r!==0||(r=window.event,r=r===void 0?16:Ws(r.type)),r)}function bn(r,s,a,h){if(50<za)throw za=0,gd=null,Error(t(185));Gi(r,a,h),((Le&2)===0||r!==Tt)&&(r===Tt&&((Le&2)===0&&(ku|=a),yt===4&&gi(r,Ct)),Jt(r,h),a===1&&Le===0&&(s.mode&1)===0&&(_o=Ge()+500,lu&&ui()))}function Jt(r,s){var a=r.callbackNode;Ki(r,s);var h=wr(r,r===Tt?Ct:0);if(h===0)a!==null&&js(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&js(a),s===1)r.tag===0?DE(Rg.bind(null,r)):dm(Rg.bind(null,r)),kE(function(){(Le&6)===0&&ui()}),a=null;else{switch(Wn(h)){case 1:a=Us;break;case 4:a=sa;break;case 16:a=$i;break;case 536870912:a=zs;break;default:a=$i}a=Og(a,Ag.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Ag(r,s){if(Du=-1,Vu=0,(Le&6)!==0)throw Error(t(327));var a=r.callbackNode;if(vo()&&r.callbackNode!==a)return null;var h=wr(r,r===Tt?Ct:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=Ou(r,h);else{s=h;var d=Le;Le|=2;var m=kg();(Tt!==r||Ct!==s)&&(Dr=null,_o=Ge()+500,ls(r,s));do try{eT();break}catch(S){Cg(r,S)}while(!0);Vh(),Cu.current=m,Le=d,dt!==null?s=0:(Tt=null,Ct=0,s=yt)}if(s!==0){if(s===2&&(d=aa(r),d!==0&&(h=d,s=yd(r,d))),s===1)throw a=ja,ls(r,0),gi(r,h),Jt(r,Ge()),a;if(s===6)gi(r,h);else{if(d=r.current.alternate,(h&30)===0&&!XE(d)&&(s=Ou(r,h),s===2&&(m=aa(r),m!==0&&(h=m,s=yd(r,m))),s===1))throw a=ja,ls(r,0),gi(r,h),Jt(r,Ge()),a;switch(r.finishedWork=d,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:us(r,Yt,Dr);break;case 3:if(gi(r,h),(h&130023424)===h&&(s=pd+500-Ge(),10<s)){if(wr(r,0)!==0)break;if(d=r.suspendedLanes,(d&h)!==h){Ht(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Ih(us.bind(null,r,Yt,Dr),s);break}us(r,Yt,Dr);break;case 4:if(gi(r,h),(h&4194240)===h)break;for(s=r.eventTimes,d=-1;0<h;){var v=31-tn(h);m=1<<v,v=s[v],v>d&&(d=v),h&=~m}if(h=d,h=Ge()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*JE(h/1960))-h,10<h){r.timeoutHandle=Ih(us.bind(null,r,Yt,Dr),h);break}us(r,Yt,Dr);break;case 5:us(r,Yt,Dr);break;default:throw Error(t(329))}}}return Jt(r,Ge()),r.callbackNode===a?Ag.bind(null,r):null}function yd(r,s){var a=Ua;return r.current.memoizedState.isDehydrated&&(ls(r,s).flags|=256),r=Ou(r,s),r!==2&&(s=Yt,Yt=a,s!==null&&_d(s)),r}function _d(r){Yt===null?Yt=r:Yt.push.apply(Yt,r)}function XE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var d=a[h],m=d.getSnapshot;d=d.value;try{if(!Rn(m(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function gi(r,s){for(s&=~fd,s&=~ku,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-tn(s),h=1<<a;r[a]=-1,s&=~h}}function Rg(r){if((Le&6)!==0)throw Error(t(327));vo();var s=wr(r,0);if((s&1)===0)return Jt(r,Ge()),null;var a=Ou(r,s);if(r.tag!==0&&a===2){var h=aa(r);h!==0&&(s=h,a=yd(r,h))}if(a===1)throw a=ja,ls(r,0),gi(r,s),Jt(r,Ge()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,us(r,Yt,Dr),Jt(r,Ge()),null}function vd(r,s){var a=Le;Le|=1;try{return r(s)}finally{Le=a,Le===0&&(_o=Ge()+500,lu&&ui())}}function as(r){pi!==null&&pi.tag===0&&(Le&6)===0&&vo();var s=Le;Le|=1;var a=_n.transition,h=De;try{if(_n.transition=null,De=1,r)return r()}finally{De=h,_n.transition=a,Le=s,(Le&6)===0&&ui()}}function wd(){un=yo.current,Ye(yo)}function ls(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,CE(a)),dt!==null)for(a=dt.return;a!==null;){var h=a;switch(kh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&ou();break;case 3:po(),Ye(Kt),Ye(Vt),Bh();break;case 5:Uh(h);break;case 4:po();break;case 13:Ye(tt);break;case 19:Ye(tt);break;case 10:Oh(h.type._context);break;case 22:case 23:wd()}a=a.return}if(Tt=r,dt=r=yi(r.current,null),Ct=un=s,yt=0,ja=null,fd=ku=os=0,Yt=Ua=null,rs!==null){for(s=0;s<rs.length;s++)if(a=rs[s],h=a.interleaved,h!==null){a.interleaved=null;var d=h.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,h.next=v}a.pending=h}rs=null}return r}function Cg(r,s){do{var a=dt;try{if(Vh(),_u.current=Tu,vu){for(var h=nt.memoizedState;h!==null;){var d=h.queue;d!==null&&(d.pending=null),h=h.next}vu=!1}if(ss=0,Et=gt=nt=null,Da=!1,Va=0,dd.current=null,a===null||a.return===null){yt=1,ja=s,dt=null;break}e:{var m=r,v=a.return,S=a,k=s;if(s=Ct,S.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var U=k,J=S,X=J.tag;if((J.mode&1)===0&&(X===0||X===11||X===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var ie=Zm(v);if(ie!==null){ie.flags&=-257,eg(ie,v,S,m,s),ie.mode&1&&Xm(m,U,s),s=ie,k=U;var ue=s.updateQueue;if(ue===null){var ce=new Set;ce.add(k),s.updateQueue=ce}else ue.add(k);break e}else{if((s&1)===0){Xm(m,U,s),Ed();break e}k=Error(t(426))}}else if(Ze&&S.mode&1){var lt=Zm(v);if(lt!==null){(lt.flags&65536)===0&&(lt.flags|=256),eg(lt,v,S,m,s),bh(mo(k,S));break e}}m=k=mo(k,S),yt!==4&&(yt=2),Ua===null?Ua=[m]:Ua.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,s&=-s,m.lanes|=s;var L=Ym(m,k,s);Im(m,L);break e;case 1:S=k;var b=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(fi===null||!fi.has(F)))){m.flags|=65536,s&=-s,m.lanes|=s;var ee=Jm(m,S,s);Im(m,ee);break e}}m=m.return}while(m!==null)}Ng(a)}catch(he){s=he,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function kg(){var r=Cu.current;return Cu.current=Tu,r===null?Tu:r}function Ed(){(yt===0||yt===3||yt===2)&&(yt=4),Tt===null||(os&268435455)===0&&(ku&268435455)===0||gi(Tt,Ct)}function Ou(r,s){var a=Le;Le|=2;var h=kg();(Tt!==r||Ct!==s)&&(Dr=null,ls(r,s));do try{ZE();break}catch(d){Cg(r,d)}while(!0);if(Vh(),Le=a,Cu.current=h,dt!==null)throw Error(t(261));return Tt=null,Ct=0,yt}function ZE(){for(;dt!==null;)Pg(dt)}function eT(){for(;dt!==null&&!Bi();)Pg(dt)}function Pg(r){var s=Vg(r.alternate,r,un);r.memoizedProps=r.pendingProps,s===null?Ng(r):dt=s,dd.current=null}function Ng(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=WE(a,s,un),a!==null){dt=a;return}}else{if(a=KE(a,s),a!==null){a.flags&=32767,dt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{yt=6,dt=null;return}}if(s=s.sibling,s!==null){dt=s;return}dt=s=r}while(s!==null);yt===0&&(yt=5)}function us(r,s,a){var h=De,d=_n.transition;try{_n.transition=null,De=1,tT(r,s,a,h)}finally{_n.transition=d,De=h}return null}function tT(r,s,a,h){do vo();while(pi!==null);if((Le&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(ah(r,m),r===Tt&&(dt=Tt=null,Ct=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Nu||(Nu=!0,Og($i,function(){return vo(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=_n.transition,_n.transition=null;var v=De;De=1;var S=Le;Le|=4,dd.current=null,QE(r,a),Eg(a,r),EE(Eh),Ir=!!wh,Eh=wh=null,r.current=a,YE(a),vr(),Le=S,De=v,_n.transition=m}else r.current=a;if(Nu&&(Nu=!1,pi=r,bu=d),m=r.pendingLanes,m===0&&(fi=null),Bl(a.stateNode),Jt(r,Ge()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],h(d.value,{componentStack:d.stack,digest:d.digest});if(Pu)throw Pu=!1,r=md,md=null,r;return(bu&1)!==0&&r.tag!==0&&vo(),m=r.pendingLanes,(m&1)!==0?r===gd?za++:(za=0,gd=r):za=0,ui(),null}function vo(){if(pi!==null){var r=Wn(bu),s=_n.transition,a=De;try{if(_n.transition=null,De=16>r?16:r,pi===null)var h=!1;else{if(r=pi,pi=null,bu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,le=r.current;le!==null;){var m=le,v=m.child;if((le.flags&16)!==0){var S=m.deletions;if(S!==null){for(var k=0;k<S.length;k++){var U=S[k];for(le=U;le!==null;){var J=le;switch(J.tag){case 0:case 11:case 15:Fa(8,J,m)}var X=J.child;if(X!==null)X.return=J,le=X;else for(;le!==null;){J=le;var Y=J.sibling,ie=J.return;if(gg(J),J===U){le=null;break}if(Y!==null){Y.return=ie,le=Y;break}le=ie}}}var ue=m.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var lt=ce.sibling;ce.sibling=null,ce=lt}while(ce!==null)}}le=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,le=v;else e:for(;le!==null;){if(m=le,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Fa(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,le=L;break e}le=m.return}}var b=r.current;for(le=b;le!==null;){v=le;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,le=F;else e:for(v=b;le!==null;){if(S=le,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Ru(9,S)}}catch(he){st(S,S.return,he)}if(S===v){le=null;break e}var ee=S.sibling;if(ee!==null){ee.return=S.return,le=ee;break e}le=S.return}}if(Le=d,ui(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(qi,r)}catch{}h=!0}return h}finally{De=a,_n.transition=s}}return!1}function bg(r,s,a){s=mo(a,s),s=Ym(r,s,1),r=hi(r,s,1),s=Ht(),r!==null&&(Gi(r,1,s),Jt(r,s))}function st(r,s,a){if(r.tag===3)bg(r,r,a);else for(;s!==null;){if(s.tag===3){bg(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(fi===null||!fi.has(h))){r=mo(a,r),r=Jm(s,r,1),s=hi(s,r,1),r=Ht(),s!==null&&(Gi(s,1,r),Jt(s,r));break}}s=s.return}}function nT(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Ht(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(Ct&a)===a&&(yt===4||yt===3&&(Ct&130023424)===Ct&&500>Ge()-pd?ls(r,0):fd|=a),Jt(r,s)}function Dg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Zr,Zr<<=1,(Zr&130023424)===0&&(Zr=4194304)));var a=Ht();r=Pr(r,s),r!==null&&(Gi(r,s,a),Jt(r,a))}function rT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Dg(r,a)}function iT(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Dg(r,a)}var Vg;Vg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Kt.current)Qt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return Qt=!1,HE(r,s,a);Qt=(r.flags&131072)!==0}else Qt=!1,Ze&&(s.flags&1048576)!==0&&fm(s,cu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;xu(r,s),r=s.pendingProps;var d=oo(s,Vt.current);fo(s,a),d=Hh(null,s,h,r,d,a);var m=Wh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Gt(h)?(m=!0,au(s)):m=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Fh(s),d.updater=Iu,s.stateNode=d,d._reactInternals=s,Xh(s,h,r,a),s=nd(null,s,h,!0,m,a)):(s.tag=0,Ze&&m&&Ch(s),qt(null,s,d,a),s=s.child),s;case 16:h=s.elementType;e:{switch(xu(r,s),r=s.pendingProps,d=h._init,h=d(h._payload),s.type=h,d=s.tag=oT(h),r=kn(h,r),d){case 0:s=td(null,s,h,r,a);break e;case 1:s=og(null,s,h,r,a);break e;case 11:s=tg(null,s,h,r,a);break e;case 14:s=ng(null,s,h,kn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:kn(h,d),td(r,s,h,d,a);case 1:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:kn(h,d),og(r,s,h,d,a);case 3:e:{if(ag(s),r===null)throw Error(t(387));h=s.pendingProps,m=s.memoizedState,d=m.element,Tm(r,s),gu(s,h,null,a);var v=s.memoizedState;if(h=v.element,m.isDehydrated)if(m={element:h,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){d=mo(Error(t(423)),s),s=lg(r,s,h,a,d);break e}else if(h!==d){d=mo(Error(t(424)),s),s=lg(r,s,h,a,d);break e}else for(ln=oi(s.stateNode.containerInfo.firstChild),an=s,Ze=!0,Cn=null,a=wm(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(uo(),h===d){s=br(r,s,a);break e}qt(r,s,h,a)}s=s.child}return s;case 5:return xm(s),r===null&&Nh(s),h=s.type,d=s.pendingProps,m=r!==null?r.memoizedProps:null,v=d.children,Th(h,d)?v=null:m!==null&&Th(h,m)&&(s.flags|=32),sg(r,s),qt(r,s,v,a),s.child;case 6:return r===null&&Nh(s),null;case 13:return ug(r,s,a);case 4:return jh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=co(s,null,h,a):qt(r,s,h,a),s.child;case 11:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:kn(h,d),tg(r,s,h,d,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,d=s.pendingProps,m=s.memoizedProps,v=d.value,We(fu,h._currentValue),h._currentValue=v,m!==null)if(Rn(m.value,v)){if(m.children===d.children&&!Kt.current){s=br(r,s,a);break e}}else for(m=s.child,m!==null&&(m.return=s);m!==null;){var S=m.dependencies;if(S!==null){v=m.child;for(var k=S.firstContext;k!==null;){if(k.context===h){if(m.tag===1){k=Nr(-1,a&-a),k.tag=2;var U=m.updateQueue;if(U!==null){U=U.shared;var J=U.pending;J===null?k.next=k:(k.next=J.next,J.next=k),U.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Lh(m.return,a,s),S.lanes|=a;break}k=k.next}}else if(m.tag===10)v=m.type===s.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Lh(v,a,s),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===s){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}qt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,h=s.pendingProps.children,fo(s,a),d=gn(d),h=h(d),s.flags|=1,qt(r,s,h,a),s.child;case 14:return h=s.type,d=kn(h,s.pendingProps),d=kn(h.type,d),ng(r,s,h,d,a);case 15:return rg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,d=s.pendingProps,d=s.elementType===h?d:kn(h,d),xu(r,s),s.tag=1,Gt(h)?(r=!0,au(s)):r=!1,fo(s,a),Gm(s,h,d),Xh(s,h,d,a),nd(null,s,h,!0,r,a);case 19:return hg(r,s,a);case 22:return ig(r,s,a)}throw Error(t(156,s.tag))};function Og(r,s){return ia(r,s)}function sT(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(r,s,a,h){return new sT(r,s,a,h)}function Td(r){return r=r.prototype,!(!r||!r.isReactComponent)}function oT(r){if(typeof r=="function")return Td(r)?1:0;if(r!=null){if(r=r.$$typeof,r===O)return 11;if(r===$e)return 14}return 2}function yi(r,s){var a=r.alternate;return a===null?(a=vn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Lu(r,s,a,h,d,m){var v=2;if(h=r,typeof r=="function")Td(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case P:return cs(a.children,d,m,s);case x:v=8,d|=8;break;case C:return r=vn(12,a,s,d|2),r.elementType=C,r.lanes=m,r;case A:return r=vn(13,a,s,d),r.elementType=A,r.lanes=m,r;case ze:return r=vn(19,a,s,d),r.elementType=ze,r.lanes=m,r;case Xe:return Mu(a,d,m,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case D:v=10;break e;case N:v=9;break e;case O:v=11;break e;case $e:v=14;break e;case bt:v=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=vn(v,a,s,d),s.elementType=r,s.type=h,s.lanes=m,s}function cs(r,s,a,h){return r=vn(7,r,h,s),r.lanes=a,r}function Mu(r,s,a,h){return r=vn(22,r,h,s),r.elementType=Xe,r.lanes=a,r.stateNode={isHidden:!1},r}function Id(r,s,a){return r=vn(6,r,null,s),r.lanes=a,r}function Sd(r,s,a){return s=vn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function aT(r,s,a,h,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ua(0),this.expirationTimes=ua(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ua(0),this.identifierPrefix=h,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function xd(r,s,a,h,d,m,v,S,k){return r=new aT(r,s,a,S,k),s===1?(s=1,m===!0&&(s|=8)):s=0,m=vn(3,null,null,s),r.current=m,m.stateNode=r,m.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fh(m),r}function lT(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Lg(r){if(!r)return li;r=r._reactInternals;e:{if(xn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Gt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Gt(a))return cm(r,a,s)}return s}function Mg(r,s,a,h,d,m,v,S,k){return r=xd(a,h,!0,r,d,m,v,S,k),r.context=Lg(null),a=r.current,h=Ht(),d=mi(a),m=Nr(h,d),m.callback=s??null,hi(a,m,d),r.current.lanes=d,Gi(r,d,h),Jt(r,h),r}function Fu(r,s,a,h){var d=s.current,m=Ht(),v=mi(d);return a=Lg(a),s.context===null?s.context=a:s.pendingContext=a,s=Nr(m,v),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=hi(d,s,v),r!==null&&(bn(r,d,v,m),mu(r,d,v)),v}function ju(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Fg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Ad(r,s){Fg(r,s),(r=r.alternate)&&Fg(r,s)}function uT(){return null}var jg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Rd(r){this._internalRoot=r}Uu.prototype.render=Rd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Fu(r,s,null,null)},Uu.prototype.unmount=Rd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;as(function(){Fu(null,r,null,null)}),s[Ar]=null}};function Uu(r){this._internalRoot=r}Uu.prototype.unstable_scheduleHydration=function(r){if(r){var s=fa();r={blockedOn:null,target:r,priority:s};for(var a=0;a<nn.length&&s!==0&&s<nn[a].priority;a++);nn.splice(a,0,r),a===0&&qs(r)}};function Cd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function zu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Ug(){}function cT(r,s,a,h,d){if(d){if(typeof h=="function"){var m=h;h=function(){var U=ju(v);m.call(U)}}var v=Mg(s,h,r,0,null,!1,!1,"",Ug);return r._reactRootContainer=v,r[Ar]=v.current,xa(r.nodeType===8?r.parentNode:r),as(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof h=="function"){var S=h;h=function(){var U=ju(k);S.call(U)}}var k=xd(r,0,!1,null,null,!1,!1,"",Ug);return r._reactRootContainer=k,r[Ar]=k.current,xa(r.nodeType===8?r.parentNode:r),as(function(){Fu(s,k,a,h)}),k}function Bu(r,s,a,h,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var S=d;d=function(){var k=ju(v);S.call(k)}}Fu(s,v,r,d)}else v=cT(a,s,r,d,h);return ju(v)}ha=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Fe(s.pendingLanes);a!==0&&(ca(s,a|1),Jt(s,Ge()),(Le&6)===0&&(_o=Ge()+500,ui()))}break;case 13:as(function(){var h=Pr(r,1);if(h!==null){var d=Ht();bn(h,r,1,d)}}),Ad(r,1)}},Bs=function(r){if(r.tag===13){var s=Pr(r,134217728);if(s!==null){var a=Ht();bn(s,r,134217728,a)}Ad(r,134217728)}},da=function(r){if(r.tag===13){var s=mi(r),a=Pr(r,s);if(a!==null){var h=Ht();bn(a,r,s,h)}Ad(r,s)}},fa=function(){return De},pa=function(r,s){var a=De;try{return De=r,s()}finally{De=a}},gr=function(r,s,a){switch(s){case"input":if(Fi(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var d=su(h);if(!d)throw Error(t(90));Qo(h),Fi(h,d)}}}break;case"textarea":Pl(r,a);break;case"select":s=a.value,s!=null&&In(r,!!a.multiple,s,!1)}},Dl=vd,Vl=as;var hT={usingClientEntryPoint:!1,Events:[Ca,io,su,Qr,Yr,vd]},Ba={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dT={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=zl(r),r===null?null:r.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||uT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{qi=$u.inject(dT),en=$u}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hT,Xt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cd(s))throw Error(t(200));return lT(r,s,null,a)},Xt.createRoot=function(r,s){if(!Cd(r))throw Error(t(299));var a=!1,h="",d=jg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=xd(r,1,!1,null,null,a,!1,h,d),r[Ar]=s.current,xa(r.nodeType===8?r.parentNode:r),new Rd(s)},Xt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=zl(s),r=r===null?null:r.stateNode,r},Xt.flushSync=function(r){return as(r)},Xt.hydrate=function(r,s,a){if(!zu(s))throw Error(t(200));return Bu(null,r,s,!0,a)},Xt.hydrateRoot=function(r,s,a){if(!Cd(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,d=!1,m="",v=jg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=Mg(s,null,r,1,a??null,d,!1,m,v),r[Ar]=s.current,xa(r),h)for(r=0;r<h.length;r++)a=h[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new Uu(s)},Xt.render=function(r,s,a){if(!zu(s))throw Error(t(200));return Bu(null,r,s,!1,a)},Xt.unmountComponentAtNode=function(r){if(!zu(r))throw Error(t(40));return r._reactRootContainer?(as(function(){Bu(null,null,r,!1,function(){r._reactRootContainer=null,r[Ar]=null})}),!0):!1},Xt.unstable_batchedUpdates=vd,Xt.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!zu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Bu(r,s,a,!1,h)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var Gg;function wT(){if(Gg)return Nd.exports;Gg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Nd.exports=vT(),Nd.exports}var Qg;function ET(){if(Qg)return qu;Qg=1;var n=wT();return qu.createRoot=n.createRoot,qu.hydrateRoot=n.hydrateRoot,qu}var TT=ET(),z=Cf();/**
 * react-router v7.13.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yg="popstate";function Jg(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function IT(n={}){function e(i,o){var y;let l=(y=o.state)==null?void 0:y.masked,{pathname:c,search:f,hash:p}=l||i.location;return Zd("",{pathname:c,search:f,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function t(i,o){return typeof o=="string"?o:il(o)}return xT(e,t,null,n)}function et(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Mn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ST(){return Math.random().toString(36).substring(2,10)}function Xg(n,e){return{usr:n.state,key:n.key,idx:e,masked:n.unstable_mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function Zd(n,e,t=null,i,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Fo(e):e,state:t,key:e&&e.key||i||ST(),unstable_mask:o}}function il({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Fo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function xT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,f="POP",p=null,y=w();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function w(){return(c.state||{idx:null}).idx}function E(){f="POP";let $=w(),H=$==null?null:$-y;y=$,p&&p({action:f,location:q.location,delta:H})}function R($,H){f="PUSH";let Z=Jg($)?$:Zd(q.location,$,H);y=w()+1;let ne=Xg(Z,y),ve=q.createHref(Z.unstable_mask||Z);try{c.pushState(ne,"",ve)}catch(ge){if(ge instanceof DOMException&&ge.name==="DataCloneError")throw ge;o.location.assign(ve)}l&&p&&p({action:f,location:q.location,delta:1})}function j($,H){f="REPLACE";let Z=Jg($)?$:Zd(q.location,$,H);y=w();let ne=Xg(Z,y),ve=q.createHref(Z.unstable_mask||Z);c.replaceState(ne,"",ve),l&&p&&p({action:f,location:q.location,delta:0})}function W($){return AT($)}let q={get action(){return f},get location(){return n(o,c)},listen($){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Yg,E),p=$,()=>{o.removeEventListener(Yg,E),p=null}},createHref($){return e(o,$)},createURL:W,encodeLocation($){let H=W($);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:R,replace:j,go($){return c.go($)}};return q}function AT(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),et(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:il(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function W_(n,e,t="/"){return RT(n,e,t,!1)}function RT(n,e,t,i){let o=typeof e=="string"?Fo(e):e,l=Mr(o.pathname||"/",t);if(l==null)return null;let c=K_(n);CT(c);let f=null;for(let p=0;f==null&&p<c.length;++p){let y=jT(l);f=MT(c[p],y,i)}return f}function K_(n,e=[],t=[],i="",o=!1){let l=(c,f,p=o,y)=>{let w={relativePath:y===void 0?c.path||"":y,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(i)&&p)return;et(w.relativePath.startsWith(i),`Absolute route path "${w.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(i.length)}let E=ar([i,w.relativePath]),R=t.concat(w);c.children&&c.children.length>0&&(et(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),K_(c.children,e,R,E,p)),!(c.path==null&&!c.index)&&e.push({path:E,score:OT(E,c.index),routesMeta:R})};return n.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))l(c,f);else for(let y of G_(c.path))l(c,f,!0,y)}),e}function G_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=G_(i.join("/")),f=[];return f.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...c),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function CT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:LT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var kT=/^:[\w-]+$/,PT=3,NT=2,bT=1,DT=10,VT=-2,Zg=n=>n==="*";function OT(n,e){let t=n.split("/"),i=t.length;return t.some(Zg)&&(i+=VT),e&&(i+=NT),t.filter(o=>!Zg(o)).reduce((o,l)=>o+(kT.test(l)?PT:l===""?bT:DT),i)}function LT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function MT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",c=[];for(let f=0;f<i.length;++f){let p=i[f],y=f===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",E=hc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),R=p.route;if(!E&&y&&t&&!i[i.length-1].route.index&&(E=hc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},w)),!E)return null;Object.assign(o,E.params),c.push({params:o,pathname:ar([l,E.pathname]),pathnameBase:$T(ar([l,E.pathnameBase])),route:R}),E.pathnameBase!=="/"&&(l=ar([l,E.pathnameBase]))}return c}function hc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=FT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,{paramName:w,isOptional:E},R)=>{if(w==="*"){let W=f[R]||"";c=l.slice(0,l.length-W.length).replace(/(.)\/+$/,"$1")}const j=f[R];return E&&!j?y[w]=void 0:y[w]=(j||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function FT(n,e=!1,t=!0){Mn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,p,y,w)=>{if(i.push({paramName:f,isOptional:p!=null}),p){let E=w.charAt(y+c.length);return E&&E!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function jT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Mr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}var UT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function zT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Fo(n):n,l;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?l=ey(t.substring(1),"/"):l=ey(t,e)):l=e,{pathname:l,search:qT(i),hash:HT(o)}}function ey(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Vd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function BT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function kf(n){let e=BT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Dc(n,e,t,i=!1){let o;typeof n=="string"?o=Fo(n):(o={...n},et(!o.pathname||!o.pathname.includes("?"),Vd("?","pathname","search",o)),et(!o.pathname||!o.pathname.includes("#"),Vd("#","pathname","hash",o)),et(!o.search||!o.search.includes("#"),Vd("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let E=e.length-1;if(!i&&c.startsWith("..")){let R=c.split("/");for(;R[0]==="..";)R.shift(),E-=1;o.pathname=R.join("/")}f=E>=0?e[E]:"/"}let p=zT(o,f),y=c&&c!=="/"&&c.endsWith("/"),w=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}var ar=n=>n.join("/").replace(/\/\/+/g,"/"),$T=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),qT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,HT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,WT=class{constructor(n,e,t,i=!1){this.status=n,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function KT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function GT(n){return n.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Q_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Y_(n,e){let t=n;if(typeof t!="string"||!UT.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,o=!1;if(Q_)try{let l=new URL(window.location.href),c=t.startsWith("//")?new URL(l.protocol+t):new URL(t),f=Mr(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:o=!0}catch{Mn(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var J_=["POST","PUT","PATCH","DELETE"];new Set(J_);var QT=["GET",...J_];new Set(QT);var jo=z.createContext(null);jo.displayName="DataRouter";var Vc=z.createContext(null);Vc.displayName="DataRouterState";var YT=z.createContext(!1),X_=z.createContext({isTransitioning:!1});X_.displayName="ViewTransition";var JT=z.createContext(new Map);JT.displayName="Fetchers";var XT=z.createContext(null);XT.displayName="Await";var hn=z.createContext(null);hn.displayName="Navigation";var yl=z.createContext(null);yl.displayName="Location";var mr=z.createContext({outlet:null,matches:[],isDataRoute:!1});mr.displayName="Route";var Pf=z.createContext(null);Pf.displayName="RouteError";var Z_="REACT_ROUTER_ERROR",ZT="REDIRECT",eI="ROUTE_ERROR_RESPONSE";function tI(n){if(n.startsWith(`${Z_}:${ZT}:{`))try{let e=JSON.parse(n.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function nI(n){if(n.startsWith(`${Z_}:${eI}:{`))try{let e=JSON.parse(n.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new WT(e.status,e.statusText,e.data)}catch{}}function rI(n,{relative:e}={}){et(Uo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=z.useContext(hn),{hash:o,pathname:l,search:c}=_l(n,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:ar([t,l])),i.createHref({pathname:f,search:c,hash:o})}function Uo(){return z.useContext(yl)!=null}function Br(){return et(Uo(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(yl).location}var ev="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function tv(n){z.useContext(hn).static||z.useLayoutEffect(n)}function Oc(){let{isDataRoute:n}=z.useContext(mr);return n?gI():iI()}function iI(){et(Uo(),"useNavigate() may be used only in the context of a <Router> component.");let n=z.useContext(jo),{basename:e,navigator:t}=z.useContext(hn),{matches:i}=z.useContext(mr),{pathname:o}=Br(),l=JSON.stringify(kf(i)),c=z.useRef(!1);return tv(()=>{c.current=!0}),z.useCallback((p,y={})=>{if(Mn(c.current,ev),!c.current)return;if(typeof p=="number"){t.go(p);return}let w=Dc(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:ar([e,w.pathname])),(y.replace?t.replace:t.push)(w,y.state,y)},[e,t,l,o,n])}z.createContext(null);function _l(n,{relative:e}={}){let{matches:t}=z.useContext(mr),{pathname:i}=Br(),o=JSON.stringify(kf(t));return z.useMemo(()=>Dc(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function sI(n,e){return nv(n,e)}function nv(n,e,t){var $;et(Uo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=z.useContext(hn),{matches:o}=z.useContext(mr),l=o[o.length-1],c=l?l.params:{},f=l?l.pathname:"/",p=l?l.pathnameBase:"/",y=l&&l.route;{let H=y&&y.path||"";iv(f,!y||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let w=Br(),E;if(e){let H=typeof e=="string"?Fo(e):e;et(p==="/"||(($=H.pathname)==null?void 0:$.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${H.pathname}" was given in the \`location\` prop.`),E=H}else E=w;let R=E.pathname||"/",j=R;if(p!=="/"){let H=p.replace(/^\//,"").split("/");j="/"+R.replace(/^\//,"").split("/").slice(H.length).join("/")}let W=W_(n,{pathname:j});Mn(y||W!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Mn(W==null||W[W.length-1].route.element!==void 0||W[W.length-1].route.Component!==void 0||W[W.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=cI(W&&W.map(H=>Object.assign({},H,{params:Object.assign({},c,H.params),pathname:ar([p,i.encodeLocation?i.encodeLocation(H.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?p:ar([p,i.encodeLocation?i.encodeLocation(H.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),o,t);return e&&q?z.createElement(yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...E},navigationType:"POP"}},q):q}function oI(){let n=mI(),e=KT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:l},"ErrorBoundary")," or"," ",z.createElement("code",{style:l},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),t?z.createElement("pre",{style:o},t):null,c)}var aI=z.createElement(oI,null),rv=class extends z.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const t=nI(n.digest);t&&(n=t)}let e=n!==void 0?z.createElement(mr.Provider,{value:this.props.routeContext},z.createElement(Pf.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?z.createElement(lI,{error:n},e):e}};rv.contextType=YT;var Od=new WeakMap;function lI({children:n,error:e}){let{basename:t}=z.useContext(hn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=tI(e.digest);if(i){let o=Od.get(e);if(o)throw o;let l=Y_(i.location,t);if(Q_&&!Od.get(e))if(l.isExternal||i.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:i.replace}));throw Od.set(e,c),c}return z.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return n}function uI({routeContext:n,match:e,children:t}){let i=z.useContext(jo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(mr.Provider,{value:n},t)}function cI(n,e=[],t){let i=t==null?void 0:t.state;if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let o=n,l=i==null?void 0:i.errors;if(l!=null){let w=o.findIndex(E=>E.route.id&&(l==null?void 0:l[E.route.id])!==void 0);et(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,w+1))}let c=!1,f=-1;if(t&&i){c=i.renderFallback;for(let w=0;w<o.length;w++){let E=o[w];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(f=w),E.route.id){let{loaderData:R,errors:j}=i,W=E.route.loader&&!R.hasOwnProperty(E.route.id)&&(!j||j[E.route.id]===void 0);if(E.route.lazy||W){t.isStatic&&(c=!0),f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}}let p=t==null?void 0:t.onError,y=i&&p?(w,E)=>{var R,j;p(w,{location:i.location,params:((j=(R=i.matches)==null?void 0:R[0])==null?void 0:j.params)??{},unstable_pattern:GT(i.matches),errorInfo:E})}:void 0;return o.reduceRight((w,E,R)=>{let j,W=!1,q=null,$=null;i&&(j=l&&E.route.id?l[E.route.id]:void 0,q=E.route.errorElement||aI,c&&(f<0&&R===0?(iv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),W=!0,$=null):f===R&&(W=!0,$=E.route.hydrateFallbackElement||null)));let H=e.concat(o.slice(0,R+1)),Z=()=>{let ne;return j?ne=q:W?ne=$:E.route.Component?ne=z.createElement(E.route.Component,null):E.route.element?ne=E.route.element:ne=w,z.createElement(uI,{match:E,routeContext:{outlet:w,matches:H,isDataRoute:i!=null},children:ne})};return i&&(E.route.ErrorBoundary||E.route.errorElement||R===0)?z.createElement(rv,{location:i.location,revalidation:i.revalidation,component:q,error:j,children:Z(),routeContext:{outlet:null,matches:H,isDataRoute:!0},onError:y}):Z()},null)}function Nf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hI(n){let e=z.useContext(jo);return et(e,Nf(n)),e}function dI(n){let e=z.useContext(Vc);return et(e,Nf(n)),e}function fI(n){let e=z.useContext(mr);return et(e,Nf(n)),e}function bf(n){let e=fI(n),t=e.matches[e.matches.length-1];return et(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function pI(){return bf("useRouteId")}function mI(){var i;let n=z.useContext(Pf),e=dI("useRouteError"),t=bf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function gI(){let{router:n}=hI("useNavigate"),e=bf("useNavigate"),t=z.useRef(!1);return tv(()=>{t.current=!0}),z.useCallback(async(o,l={})=>{Mn(t.current,ev),t.current&&(typeof o=="number"?await n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var ty={};function iv(n,e,t){!e&&!ty[n]&&(ty[n]=!0,Mn(!1,t))}z.memo(yI);function yI({routes:n,future:e,state:t,isStatic:i,onError:o}){return nv(n,void 0,{state:t,isStatic:i,onError:o})}function _I({to:n,replace:e,state:t,relative:i}){et(Uo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=z.useContext(hn);Mn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=z.useContext(mr),{pathname:c}=Br(),f=Oc(),p=Dc(n,kf(l),c,i==="path"),y=JSON.stringify(p);return z.useEffect(()=>{f(JSON.parse(y),{replace:e,state:t,relative:i})},[f,y,i,e,t]),null}function Xu(n){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vI({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1,unstable_useTransitions:c}){et(!Uo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),p=z.useMemo(()=>({basename:f,navigator:o,static:l,unstable_useTransitions:c,future:{}}),[f,o,l,c]);typeof t=="string"&&(t=Fo(t));let{pathname:y="/",search:w="",hash:E="",state:R=null,key:j="default",unstable_mask:W}=t,q=z.useMemo(()=>{let $=Mr(y,f);return $==null?null:{location:{pathname:$,search:w,hash:E,state:R,key:j,unstable_mask:W},navigationType:i}},[f,y,w,E,R,j,i,W]);return Mn(q!=null,`<Router basename="${f}"> is not able to match the URL "${y}${w}${E}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:z.createElement(hn.Provider,{value:p},z.createElement(yl.Provider,{children:e,value:q}))}function wI({children:n,location:e}){return sI(ef(n),e)}function ef(n,e=[]){let t=[];return z.Children.forEach(n,(i,o)=>{if(!z.isValidElement(i))return;let l=[...e,o];if(i.type===z.Fragment){t.push.apply(t,ef(i.props.children,l));return}et(i.type===Xu,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=ef(i.props.children,l)),t.push(c)}),t}var Zu="get",ec="application/x-www-form-urlencoded";function Lc(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function EI(n){return Lc(n)&&n.tagName.toLowerCase()==="button"}function TI(n){return Lc(n)&&n.tagName.toLowerCase()==="form"}function II(n){return Lc(n)&&n.tagName.toLowerCase()==="input"}function SI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function xI(n,e){return n.button===0&&(!e||e==="_self")&&!SI(n)}var Hu=null;function AI(){if(Hu===null)try{new FormData(document.createElement("form"),0),Hu=!1}catch{Hu=!0}return Hu}var RI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ld(n){return n!=null&&!RI.has(n)?(Mn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ec}"`),null):n}function CI(n,e){let t,i,o,l,c;if(TI(n)){let f=n.getAttribute("action");i=f?Mr(f,e):null,t=n.getAttribute("method")||Zu,o=Ld(n.getAttribute("enctype"))||ec,l=new FormData(n)}else if(EI(n)||II(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||f.getAttribute("action");if(i=p?Mr(p,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||Zu,o=Ld(n.getAttribute("formenctype"))||Ld(f.getAttribute("enctype"))||ec,l=new FormData(f,n),!AI()){let{name:y,type:w,value:E}=n;if(w==="image"){let R=y?`${y}.`:"";l.append(`${R}x`,"0"),l.append(`${R}y`,"0")}else y&&l.append(y,E)}}else{if(Lc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Zu,i=null,o=ec,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Df(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function kI(n,e,t,i){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${i}`:o.pathname=`${o.pathname}.${i}`:o.pathname==="/"?o.pathname=`_root.${i}`:e&&Mr(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${i}`,o}async function PI(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function NI(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function bI(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await PI(l,t);return c.links?c.links():[]}return[]}));return LI(i.flat(1).filter(NI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ny(n,e,t,i,o,l){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,f=(p,y)=>{var w;return t[y].pathname!==p.pathname||((w=t[y].route.path)==null?void 0:w.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>c(p,y)||f(p,y)):l==="data"?e.filter((p,y)=>{var E;let w=i.routes[p.route.id];if(!w||!w.hasLoader)return!1;if(c(p,y)||f(p,y))return!0;if(p.route.shouldRevalidate){let R=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function DI(n,e,{includeHydrateFallback:t}={}){return VI(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function VI(n){return[...new Set(n)]}function OI(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function LI(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(OI(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function sv(){let n=z.useContext(jo);return Df(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function MI(){let n=z.useContext(Vc);return Df(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Vf=z.createContext(void 0);Vf.displayName="FrameworkContext";function ov(){let n=z.useContext(Vf);return Df(n,"You must render this element inside a <HydratedRouter> element"),n}function FI(n,e){let t=z.useContext(Vf),[i,o]=z.useState(!1),[l,c]=z.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:y,onMouseLeave:w,onTouchStart:E}=e,R=z.useRef(null);z.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let q=H=>{H.forEach(Z=>{c(Z.isIntersecting)})},$=new IntersectionObserver(q,{threshold:.5});return R.current&&$.observe(R.current),()=>{$.disconnect()}}},[n]),z.useEffect(()=>{if(i){let q=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(q)}}},[i]);let j=()=>{o(!0)},W=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,R,{}]:[l,R,{onFocus:qa(f,j),onBlur:qa(p,W),onMouseEnter:qa(y,j),onMouseLeave:qa(w,W),onTouchStart:qa(E,j)}]:[!1,R,{}]}function qa(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function jI({page:n,...e}){let{router:t}=sv(),i=z.useMemo(()=>W_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?z.createElement(zI,{page:n,matches:i,...e}):null}function UI(n){let{manifest:e,routeModules:t}=ov(),[i,o]=z.useState([]);return z.useEffect(()=>{let l=!1;return bI(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),i}function zI({page:n,matches:e,...t}){let i=Br(),{future:o,manifest:l,routeModules:c}=ov(),{basename:f}=sv(),{loaderData:p,matches:y}=MI(),w=z.useMemo(()=>ny(n,e,y,l,i,"data"),[n,e,y,l,i]),E=z.useMemo(()=>ny(n,e,y,l,i,"assets"),[n,e,y,l,i]),R=z.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let q=new Set,$=!1;if(e.forEach(Z=>{var ve;let ne=l.routes[Z.route.id];!ne||!ne.hasLoader||(!w.some(ge=>ge.route.id===Z.route.id)&&Z.route.id in p&&((ve=c[Z.route.id])!=null&&ve.shouldRevalidate)||ne.hasClientLoader?$=!0:q.add(Z.route.id))}),q.size===0)return[];let H=kI(n,f,o.unstable_trailingSlashAwareDataRequests,"data");return $&&q.size>0&&H.searchParams.set("_routes",e.filter(Z=>q.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[H.pathname+H.search]},[f,o.unstable_trailingSlashAwareDataRequests,p,i,l,w,e,n,c]),j=z.useMemo(()=>DI(E,l),[E,l]),W=UI(E);return z.createElement(z.Fragment,null,R.map(q=>z.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...t})),j.map(q=>z.createElement("link",{key:q,rel:"modulepreload",href:q,...t})),W.map(({key:q,link:$})=>z.createElement("link",{key:q,nonce:t.nonce,...$,crossOrigin:$.crossOrigin??t.crossOrigin})))}function BI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var $I=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$I&&(window.__reactRouterVersion="7.13.2")}catch{}function qI({basename:n,children:e,unstable_useTransitions:t,window:i}){let o=z.useRef();o.current==null&&(o.current=IT({window:i,v5Compat:!0}));let l=o.current,[c,f]=z.useState({action:l.action,location:l.location}),p=z.useCallback(y=>{t===!1?f(y):z.startTransition(()=>f(y))},[t]);return z.useLayoutEffect(()=>l.listen(p),[l,p]),z.createElement(vI,{basename:n,children:e,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:t})}var av=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lv=z.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:c,unstable_mask:f,state:p,target:y,to:w,preventScrollReset:E,viewTransition:R,unstable_defaultShouldRevalidate:j,...W},q){let{basename:$,navigator:H,unstable_useTransitions:Z}=z.useContext(hn),ne=typeof w=="string"&&av.test(w),ve=Y_(w,$);w=ve.to;let ge=rI(w,{relative:o}),Se=Br(),P=null;if(f){let $e=Dc(f,[],Se.unstable_mask?Se.unstable_mask.pathname:"/",!0);$!=="/"&&($e.pathname=$e.pathname==="/"?$:ar([$,$e.pathname])),P=H.createHref($e)}let[x,C,D]=FI(i,W),N=GI(w,{replace:c,unstable_mask:f,state:p,target:y,preventScrollReset:E,relative:o,viewTransition:R,unstable_defaultShouldRevalidate:j,unstable_useTransitions:Z});function O($e){e&&e($e),$e.defaultPrevented||N($e)}let A=!(ve.isExternal||l),ze=z.createElement("a",{...W,...D,href:(A?P:void 0)||ve.absoluteURL||ge,onClick:A?O:e,ref:BI(q,C),target:y,"data-discover":!ne&&t==="render"?"true":void 0});return x&&!ne?z.createElement(z.Fragment,null,ze,z.createElement(jI,{page:ge})):ze});lv.displayName="Link";var HI=z.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:c,viewTransition:f,children:p,...y},w){let E=_l(c,{relative:y.relative}),R=Br(),j=z.useContext(Vc),{navigator:W,basename:q}=z.useContext(hn),$=j!=null&&ZI(E)&&f===!0,H=W.encodeLocation?W.encodeLocation(E).pathname:E.pathname,Z=R.pathname,ne=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;t||(Z=Z.toLowerCase(),ne=ne?ne.toLowerCase():null,H=H.toLowerCase()),ne&&q&&(ne=Mr(ne,q)||ne);const ve=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ge=Z===H||!o&&Z.startsWith(H)&&Z.charAt(ve)==="/",Se=ne!=null&&(ne===H||!o&&ne.startsWith(H)&&ne.charAt(H.length)==="/"),P={isActive:ge,isPending:Se,isTransitioning:$},x=ge?e:void 0,C;typeof i=="function"?C=i(P):C=[i,ge?"active":null,Se?"pending":null,$?"transitioning":null].filter(Boolean).join(" ");let D=typeof l=="function"?l(P):l;return z.createElement(lv,{...y,"aria-current":x,className:C,ref:w,style:D,to:c,viewTransition:f},typeof p=="function"?p(P):p)});HI.displayName="NavLink";var WI=z.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:c=Zu,action:f,onSubmit:p,relative:y,preventScrollReset:w,viewTransition:E,unstable_defaultShouldRevalidate:R,...j},W)=>{let{unstable_useTransitions:q}=z.useContext(hn),$=JI(),H=XI(f,{relative:y}),Z=c.toLowerCase()==="get"?"get":"post",ne=typeof f=="string"&&av.test(f),ve=ge=>{if(p&&p(ge),ge.defaultPrevented)return;ge.preventDefault();let Se=ge.nativeEvent.submitter,P=(Se==null?void 0:Se.getAttribute("formmethod"))||c,x=()=>$(Se||ge.currentTarget,{fetcherKey:e,method:P,navigate:t,replace:o,state:l,relative:y,preventScrollReset:w,viewTransition:E,unstable_defaultShouldRevalidate:R});q&&t!==!1?z.startTransition(()=>x()):x()};return z.createElement("form",{ref:W,method:Z,action:H,onSubmit:i?p:ve,...j,"data-discover":!ne&&n==="render"?"true":void 0})});WI.displayName="Form";function KI(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uv(n){let e=z.useContext(jo);return et(e,KI(n)),e}function GI(n,{target:e,replace:t,unstable_mask:i,state:o,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:y}={}){let w=Oc(),E=Br(),R=_l(n,{relative:c});return z.useCallback(j=>{if(xI(j,e)){j.preventDefault();let W=t!==void 0?t:il(E)===il(R),q=()=>w(n,{replace:W,unstable_mask:i,state:o,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p});y?z.startTransition(()=>q()):q()}},[E,w,R,t,i,o,e,n,l,c,f,p,y])}var QI=0,YI=()=>`__${String(++QI)}__`;function JI(){let{router:n}=uv("useSubmit"),{basename:e}=z.useContext(hn),t=pI(),i=n.fetch,o=n.navigate;return z.useCallback(async(l,c={})=>{let{action:f,method:p,encType:y,formData:w,body:E}=CI(l,e);if(c.navigate===!1){let R=c.fetcherKey||YI();await i(R,t,c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:w,body:E,formMethod:c.method||p,formEncType:c.encType||y,flushSync:c.flushSync})}else await o(c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:w,body:E,formMethod:c.method||p,formEncType:c.encType||y,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[i,o,e,t])}function XI(n,{relative:e}={}){let{basename:t}=z.useContext(hn),i=z.useContext(mr);et(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={..._l(n||".",{relative:e})},c=Br();if(n==null){l.search=c.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(w=>w==="")){f.delete("index"),p.filter(E=>E).forEach(E=>f.append("index",E));let w=f.toString();l.search=w?`?${w}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:ar([t,l.pathname])),il(l)}function ZI(n,{relative:e}={}){let t=z.useContext(X_);et(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=uv("useViewTransitionState"),o=_l(n,{relative:e});if(!t.isTransitioning)return!1;let l=Mr(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Mr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return hc(o.pathname,c)!=null||hc(o.pathname,l)!=null}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tS=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),ry=n=>{const e=tS(n);return e.charAt(0).toUpperCase()+e.slice(1)},cv=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=z.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:c,...f},p)=>z.createElement("svg",{ref:p,...nS,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:cv("lucide",o),...f},[...c.map(([y,w])=>z.createElement(y,w)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=(n,e)=>{const t=z.forwardRef(({className:i,...o},l)=>z.createElement(rS,{ref:l,iconNode:e,className:cv(`lucide-${eS(ry(n))}`,`lucide-${n}`,i),...o}));return t.displayName=ry(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],sS=Bt("calendar",iS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aS=Bt("circle-alert",oS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],uS=Bt("circle-check-big",lS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]],hS=Bt("heart-pulse",cS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],hv=Bt("leaf",dS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Mc=Bt("loader-circle",fS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ps=Bt("lock",pS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],gS=Bt("log-out",mS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],_S=Bt("map-pin",yS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],sl=Bt("message-circle",vS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],Of=Bt("phone-call",wS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],iy=Bt("phone",ES);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],IS=Bt("search",TS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],xS=Bt("shield-check",SS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],sy=Bt("users",AS);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],CS=Bt("zap",RS),kS=()=>{};var oy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},PS=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,w=l>>2,E=(l&3)<<4|f>>4;let R=(f&15)<<2|y>>6,j=y&63;p||(j=64,c||(R=64)),i.push(t[w],t[E],t[R],t[j])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):PS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||E==null)throw new NS;const R=l<<2|f>>4;if(i.push(R),y!==64){const j=f<<4&240|y>>2;if(i.push(j),E!==64){const W=y<<6&192|E;i.push(W)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class NS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bS=function(n){const e=dv(n);return fv.encodeByteArray(e,!0)},dc=function(n){return bS(n).replace(/\./g,"")},pv=function(n){try{return fv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=()=>DS().__FIREBASE_DEFAULTS__,OS=()=>{if(typeof process>"u"||typeof oy>"u")return;const n=oy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},LS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pv(n[1]);return e&&JSON.parse(e)},Fc=()=>{try{return kS()||VS()||OS()||LS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},mv=n=>{var e,t;return(t=(e=Fc())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},MS=n=>{const e=mv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},gv=()=>{var n;return(n=Fc())==null?void 0:n.config},yv=n=>{var e;return(e=Fc())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}},...n};return[dc(JSON.stringify(t)),dc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function US(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function zS(){var e;const n=(e=Fc())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _v(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $S(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qS(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function HS(){return!zS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vv(){try{return typeof indexedDB=="object"}catch{return!1}}function wv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)==null?void 0:l.message)||"")}}catch(t){e(t)}})}function WS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="FirebaseError";class zn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=KS,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?GS(l,i):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new zn(o,f,i)}}function GS(n,e){return n.replace(QS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const QS=/\{\$([^}]+)}/g;function YS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Pi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(ay(l)&&ay(c)){if(!Pi(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function ay(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Wa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ka(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function JS(n,e){const t=new XS(n,e);return t.subscribe.bind(t)}class XS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");ZS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Md),o.error===void 0&&(o.error=Md),o.complete===void 0&&(o.complete=Md);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Md(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=1e3,t1=2,n1=14400*1e3,r1=.5;function ly(n,e=e1,t=t1){const i=e*Math.pow(t,n),o=Math.round(r1*i*(Math.random()-.5)*2);return Math.min(n1,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ev(n){return(await fetch(n,{credentials:"include"})).ok}class Fn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new FS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o1(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(o)}return o}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:s1(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s1(n){return n===hs?void 0:n}function o1(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new i1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const l1={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},u1=Pe.INFO,c1={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},h1=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=c1[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jc{constructor(e){this.name=e,this._logLevel=u1,this._logHandler=h1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const d1=(n,e)=>e.some(t=>n instanceof t);let uy,cy;function f1(){return uy||(uy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p1(){return cy||(cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tv=new WeakMap,tf=new WeakMap,Iv=new WeakMap,Fd=new WeakMap,Lf=new WeakMap;function m1(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(xi(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Tv.set(t,n)}).catch(()=>{}),Lf.set(e,n),e}function g1(n){if(tf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});tf.set(n,e)}let nf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return tf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Iv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function y1(n){nf=n(nf)}function _1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(jd(this),e,...t);return Iv.set(i,e.sort?e.sort():[e]),xi(i)}:p1().includes(n)?function(...e){return n.apply(jd(this),e),xi(Tv.get(this))}:function(...e){return xi(n.apply(jd(this),e))}}function v1(n){return typeof n=="function"?_1(n):(n instanceof IDBTransaction&&g1(n),d1(n,f1())?new Proxy(n,nf):n)}function xi(n){if(n instanceof IDBRequest)return m1(n);if(Fd.has(n))return Fd.get(n);const e=v1(n);return e!==n&&(Fd.set(n,e),Lf.set(e,n)),e}const jd=n=>Lf.get(n);function Sv(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=xi(c);return i&&c.addEventListener("upgradeneeded",p=>{i(xi(c.result),p.oldVersion,p.newVersion,xi(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const w1=["get","getKey","getAll","getAllKeys","count"],E1=["put","add","delete","clear"],Ud=new Map;function hy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ud.get(e))return Ud.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=E1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||w1.includes(t)))return;const l=async function(c,...f){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return Ud.set(e,l),l}y1(n=>({...n,get:(e,t,i)=>hy(e,t)||n.get(e,t,i),has:(e,t)=>!!hy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(I1(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function I1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rf="@firebase/app",dy="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new jc("@firebase/app"),S1="@firebase/app-compat",x1="@firebase/analytics-compat",A1="@firebase/analytics",R1="@firebase/app-check-compat",C1="@firebase/app-check",k1="@firebase/auth",P1="@firebase/auth-compat",N1="@firebase/database",b1="@firebase/data-connect",D1="@firebase/database-compat",V1="@firebase/functions",O1="@firebase/functions-compat",L1="@firebase/installations",M1="@firebase/installations-compat",F1="@firebase/messaging",j1="@firebase/messaging-compat",U1="@firebase/performance",z1="@firebase/performance-compat",B1="@firebase/remote-config",$1="@firebase/remote-config-compat",q1="@firebase/storage",H1="@firebase/storage-compat",W1="@firebase/firestore",K1="@firebase/ai",G1="@firebase/firestore-compat",Q1="firebase",Y1="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="[DEFAULT]",J1={[rf]:"fire-core",[S1]:"fire-core-compat",[A1]:"fire-analytics",[x1]:"fire-analytics-compat",[C1]:"fire-app-check",[R1]:"fire-app-check-compat",[k1]:"fire-auth",[P1]:"fire-auth-compat",[N1]:"fire-rtdb",[b1]:"fire-data-connect",[D1]:"fire-rtdb-compat",[V1]:"fire-fn",[O1]:"fire-fn-compat",[L1]:"fire-iid",[M1]:"fire-iid-compat",[F1]:"fire-fcm",[j1]:"fire-fcm-compat",[U1]:"fire-perf",[z1]:"fire-perf-compat",[B1]:"fire-rc",[$1]:"fire-rc-compat",[q1]:"fire-gcs",[H1]:"fire-gcs-compat",[W1]:"fire-fst",[G1]:"fire-fst-compat",[K1]:"fire-vertex","fire-js":"fire-js",[Q1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Map,X1=new Map,of=new Map;function fy(n,e){try{n.container.addComponent(e)}catch(t){Fr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fr(n){const e=n.name;if(of.has(e))return Fr.debug(`There were multiple attempts to register component ${e}.`),!1;of.set(e,n);for(const t of fc.values())fy(t,n);for(const t of X1.values())fy(t,n);return!0}function Ss(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ai=new Is("app","Firebase",Z1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=Y1;function xv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:sf,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw Ai.create("bad-app-name",{appName:String(o)});if(t||(t=gv()),!t)throw Ai.create("no-options");const l=fc.get(o);if(l){if(Pi(t,l.options)&&Pi(i,l.config))return l;throw Ai.create("duplicate-app",{appName:o})}const c=new a1(o);for(const p of of.values())c.addComponent(p);const f=new ex(t,i,c);return fc.set(o,f),f}function Mf(n=sf){const e=fc.get(n);if(!e&&n===sf&&gv())return xv();if(!e)throw Ai.create("no-app",{appName:n});return e}function Tn(n,e,t){let i=J1[n]??n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fr.warn(c.join(" "));return}fr(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx="firebase-heartbeat-database",nx=1,ol="firebase-heartbeat-store";let zd=null;function Av(){return zd||(zd=Sv(tx,nx,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ol)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ai.create("idb-open",{originalErrorMessage:n.message})})),zd}async function rx(n){try{const t=(await Av()).transaction(ol),i=await t.objectStore(ol).get(Rv(n));return await t.done,i}catch(e){if(e instanceof zn)Fr.warn(e.message);else{const t=Ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fr.warn(t.message)}}}async function py(n,e){try{const i=(await Av()).transaction(ol,"readwrite");await i.objectStore(ol).put(e,Rv(n)),await i.done}catch(t){if(t instanceof zn)Fr.warn(t.message);else{const i=Ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Fr.warn(i.message)}}}function Rv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=1024,sx=30;class ox{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lx(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=my();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>sx){const c=ux(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Fr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=my(),{heartbeatsToSend:i,unsentEntries:o}=ax(this._heartbeatsCache.heartbeats),l=dc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Fr.warn(t),""}}}function my(){return new Date().toISOString().substring(0,10)}function ax(n,e=ix){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),gy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),gy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class lx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vv()?wv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return py(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return py(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gy(n){return dc(JSON.stringify({version:2,heartbeats:n})).length}function ux(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(n){fr(new Fn("platform-logger",e=>new T1(e),"PRIVATE")),fr(new Fn("heartbeat",e=>new ox(e),"PRIVATE")),Tn(rf,dy,n),Tn(rf,dy,"esm2020"),Tn("fire-js","")}cx("");var yy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ri,Cv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,x){function C(){}C.prototype=x.prototype,P.F=x.prototype,P.prototype=new C,P.prototype.constructor=P,P.D=function(D,N,O){for(var A=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)A[ze-2]=arguments[ze];return x.prototype[N].apply(D,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,x,C){C||(C=0);const D=Array(16);if(typeof x=="string")for(var N=0;N<16;++N)D[N]=x.charCodeAt(C++)|x.charCodeAt(C++)<<8|x.charCodeAt(C++)<<16|x.charCodeAt(C++)<<24;else for(N=0;N<16;++N)D[N]=x[C++]|x[C++]<<8|x[C++]<<16|x[C++]<<24;x=P.g[0],C=P.g[1],N=P.g[2];let O=P.g[3],A;A=x+(O^C&(N^O))+D[0]+3614090360&4294967295,x=C+(A<<7&4294967295|A>>>25),A=O+(N^x&(C^N))+D[1]+3905402710&4294967295,O=x+(A<<12&4294967295|A>>>20),A=N+(C^O&(x^C))+D[2]+606105819&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(x^N&(O^x))+D[3]+3250441966&4294967295,C=N+(A<<22&4294967295|A>>>10),A=x+(O^C&(N^O))+D[4]+4118548399&4294967295,x=C+(A<<7&4294967295|A>>>25),A=O+(N^x&(C^N))+D[5]+1200080426&4294967295,O=x+(A<<12&4294967295|A>>>20),A=N+(C^O&(x^C))+D[6]+2821735955&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(x^N&(O^x))+D[7]+4249261313&4294967295,C=N+(A<<22&4294967295|A>>>10),A=x+(O^C&(N^O))+D[8]+1770035416&4294967295,x=C+(A<<7&4294967295|A>>>25),A=O+(N^x&(C^N))+D[9]+2336552879&4294967295,O=x+(A<<12&4294967295|A>>>20),A=N+(C^O&(x^C))+D[10]+4294925233&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(x^N&(O^x))+D[11]+2304563134&4294967295,C=N+(A<<22&4294967295|A>>>10),A=x+(O^C&(N^O))+D[12]+1804603682&4294967295,x=C+(A<<7&4294967295|A>>>25),A=O+(N^x&(C^N))+D[13]+4254626195&4294967295,O=x+(A<<12&4294967295|A>>>20),A=N+(C^O&(x^C))+D[14]+2792965006&4294967295,N=O+(A<<17&4294967295|A>>>15),A=C+(x^N&(O^x))+D[15]+1236535329&4294967295,C=N+(A<<22&4294967295|A>>>10),A=x+(N^O&(C^N))+D[1]+4129170786&4294967295,x=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(x^C))+D[6]+3225465664&4294967295,O=x+(A<<9&4294967295|A>>>23),A=N+(x^C&(O^x))+D[11]+643717713&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^x&(N^O))+D[0]+3921069994&4294967295,C=N+(A<<20&4294967295|A>>>12),A=x+(N^O&(C^N))+D[5]+3593408605&4294967295,x=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(x^C))+D[10]+38016083&4294967295,O=x+(A<<9&4294967295|A>>>23),A=N+(x^C&(O^x))+D[15]+3634488961&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^x&(N^O))+D[4]+3889429448&4294967295,C=N+(A<<20&4294967295|A>>>12),A=x+(N^O&(C^N))+D[9]+568446438&4294967295,x=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(x^C))+D[14]+3275163606&4294967295,O=x+(A<<9&4294967295|A>>>23),A=N+(x^C&(O^x))+D[3]+4107603335&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^x&(N^O))+D[8]+1163531501&4294967295,C=N+(A<<20&4294967295|A>>>12),A=x+(N^O&(C^N))+D[13]+2850285829&4294967295,x=C+(A<<5&4294967295|A>>>27),A=O+(C^N&(x^C))+D[2]+4243563512&4294967295,O=x+(A<<9&4294967295|A>>>23),A=N+(x^C&(O^x))+D[7]+1735328473&4294967295,N=O+(A<<14&4294967295|A>>>18),A=C+(O^x&(N^O))+D[12]+2368359562&4294967295,C=N+(A<<20&4294967295|A>>>12),A=x+(C^N^O)+D[5]+4294588738&4294967295,x=C+(A<<4&4294967295|A>>>28),A=O+(x^C^N)+D[8]+2272392833&4294967295,O=x+(A<<11&4294967295|A>>>21),A=N+(O^x^C)+D[11]+1839030562&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^x)+D[14]+4259657740&4294967295,C=N+(A<<23&4294967295|A>>>9),A=x+(C^N^O)+D[1]+2763975236&4294967295,x=C+(A<<4&4294967295|A>>>28),A=O+(x^C^N)+D[4]+1272893353&4294967295,O=x+(A<<11&4294967295|A>>>21),A=N+(O^x^C)+D[7]+4139469664&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^x)+D[10]+3200236656&4294967295,C=N+(A<<23&4294967295|A>>>9),A=x+(C^N^O)+D[13]+681279174&4294967295,x=C+(A<<4&4294967295|A>>>28),A=O+(x^C^N)+D[0]+3936430074&4294967295,O=x+(A<<11&4294967295|A>>>21),A=N+(O^x^C)+D[3]+3572445317&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^x)+D[6]+76029189&4294967295,C=N+(A<<23&4294967295|A>>>9),A=x+(C^N^O)+D[9]+3654602809&4294967295,x=C+(A<<4&4294967295|A>>>28),A=O+(x^C^N)+D[12]+3873151461&4294967295,O=x+(A<<11&4294967295|A>>>21),A=N+(O^x^C)+D[15]+530742520&4294967295,N=O+(A<<16&4294967295|A>>>16),A=C+(N^O^x)+D[2]+3299628645&4294967295,C=N+(A<<23&4294967295|A>>>9),A=x+(N^(C|~O))+D[0]+4096336452&4294967295,x=C+(A<<6&4294967295|A>>>26),A=O+(C^(x|~N))+D[7]+1126891415&4294967295,O=x+(A<<10&4294967295|A>>>22),A=N+(x^(O|~C))+D[14]+2878612391&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~x))+D[5]+4237533241&4294967295,C=N+(A<<21&4294967295|A>>>11),A=x+(N^(C|~O))+D[12]+1700485571&4294967295,x=C+(A<<6&4294967295|A>>>26),A=O+(C^(x|~N))+D[3]+2399980690&4294967295,O=x+(A<<10&4294967295|A>>>22),A=N+(x^(O|~C))+D[10]+4293915773&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~x))+D[1]+2240044497&4294967295,C=N+(A<<21&4294967295|A>>>11),A=x+(N^(C|~O))+D[8]+1873313359&4294967295,x=C+(A<<6&4294967295|A>>>26),A=O+(C^(x|~N))+D[15]+4264355552&4294967295,O=x+(A<<10&4294967295|A>>>22),A=N+(x^(O|~C))+D[6]+2734768916&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~x))+D[13]+1309151649&4294967295,C=N+(A<<21&4294967295|A>>>11),A=x+(N^(C|~O))+D[4]+4149444226&4294967295,x=C+(A<<6&4294967295|A>>>26),A=O+(C^(x|~N))+D[11]+3174756917&4294967295,O=x+(A<<10&4294967295|A>>>22),A=N+(x^(O|~C))+D[2]+718787259&4294967295,N=O+(A<<15&4294967295|A>>>17),A=C+(O^(N|~x))+D[9]+3951481745&4294967295,P.g[0]=P.g[0]+x&4294967295,P.g[1]=P.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+O&4294967295}i.prototype.v=function(P,x){x===void 0&&(x=P.length);const C=x-this.blockSize,D=this.C;let N=this.h,O=0;for(;O<x;){if(N==0)for(;O<=C;)o(this,P,O),O+=this.blockSize;if(typeof P=="string"){for(;O<x;)if(D[N++]=P.charCodeAt(O++),N==this.blockSize){o(this,D),N=0;break}}else for(;O<x;)if(D[N++]=P[O++],N==this.blockSize){o(this,D),N=0;break}}this.h=N,this.o+=x},i.prototype.A=function(){var P=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);P[0]=128;for(var x=1;x<P.length-8;++x)P[x]=0;x=this.o*8;for(var C=P.length-8;C<P.length;++C)P[C]=x&255,x/=256;for(this.v(P),P=Array(16),x=0,C=0;C<4;++C)for(let D=0;D<32;D+=8)P[x++]=this.g[C]>>>D&255;return P};function l(P,x){var C=f;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=x(P)}function c(P,x){this.h=x;const C=[];let D=!0;for(let N=P.length-1;N>=0;N--){const O=P[N]|0;D&&O==x||(C[N]=O,D=!1)}this.g=C}var f={};function p(P){return-128<=P&&P<128?l(P,function(x){return new c([x|0],x<0?-1:0)}):new c([P|0],P<0?-1:0)}function y(P){if(isNaN(P)||!isFinite(P))return E;if(P<0)return $(y(-P));const x=[];let C=1;for(let D=0;P>=C;D++)x[D]=P/C|0,C*=4294967296;return new c(x,0)}function w(P,x){if(P.length==0)throw Error("number format error: empty string");if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(P.charAt(0)=="-")return $(w(P.substring(1),x));if(P.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=y(Math.pow(x,8));let D=E;for(let O=0;O<P.length;O+=8){var N=Math.min(8,P.length-O);const A=parseInt(P.substring(O,O+N),x);N<8?(N=y(Math.pow(x,N)),D=D.j(N).add(y(A))):(D=D.j(C),D=D.add(y(A)))}return D}var E=p(0),R=p(1),j=p(16777216);n=c.prototype,n.m=function(){if(q(this))return-$(this).m();let P=0,x=1;for(let C=0;C<this.g.length;C++){const D=this.i(C);P+=(D>=0?D:4294967296+D)*x,x*=4294967296}return P},n.toString=function(P){if(P=P||10,P<2||36<P)throw Error("radix out of range: "+P);if(W(this))return"0";if(q(this))return"-"+$(this).toString(P);const x=y(Math.pow(P,6));var C=this;let D="";for(;;){const N=ve(C,x).g;C=H(C,N.j(x));let O=((C.g.length>0?C.g[0]:C.h)>>>0).toString(P);if(C=N,W(C))return O+D;for(;O.length<6;)O="0"+O;D=O+D}},n.i=function(P){return P<0?0:P<this.g.length?this.g[P]:this.h};function W(P){if(P.h!=0)return!1;for(let x=0;x<P.g.length;x++)if(P.g[x]!=0)return!1;return!0}function q(P){return P.h==-1}n.l=function(P){return P=H(this,P),q(P)?-1:W(P)?0:1};function $(P){const x=P.g.length,C=[];for(let D=0;D<x;D++)C[D]=~P.g[D];return new c(C,~P.h).add(R)}n.abs=function(){return q(this)?$(this):this},n.add=function(P){const x=Math.max(this.g.length,P.g.length),C=[];let D=0;for(let N=0;N<=x;N++){let O=D+(this.i(N)&65535)+(P.i(N)&65535),A=(O>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);D=A>>>16,O&=65535,A&=65535,C[N]=A<<16|O}return new c(C,C[C.length-1]&-2147483648?-1:0)};function H(P,x){return P.add($(x))}n.j=function(P){if(W(this)||W(P))return E;if(q(this))return q(P)?$(this).j($(P)):$($(this).j(P));if(q(P))return $(this.j($(P)));if(this.l(j)<0&&P.l(j)<0)return y(this.m()*P.m());const x=this.g.length+P.g.length,C=[];for(var D=0;D<2*x;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(let N=0;N<P.g.length;N++){const O=this.i(D)>>>16,A=this.i(D)&65535,ze=P.i(N)>>>16,$e=P.i(N)&65535;C[2*D+2*N]+=A*$e,Z(C,2*D+2*N),C[2*D+2*N+1]+=O*$e,Z(C,2*D+2*N+1),C[2*D+2*N+1]+=A*ze,Z(C,2*D+2*N+1),C[2*D+2*N+2]+=O*ze,Z(C,2*D+2*N+2)}for(P=0;P<x;P++)C[P]=C[2*P+1]<<16|C[2*P];for(P=x;P<2*x;P++)C[P]=0;return new c(C,0)};function Z(P,x){for(;(P[x]&65535)!=P[x];)P[x+1]+=P[x]>>>16,P[x]&=65535,x++}function ne(P,x){this.g=P,this.h=x}function ve(P,x){if(W(x))throw Error("division by zero");if(W(P))return new ne(E,E);if(q(P))return x=ve($(P),x),new ne($(x.g),$(x.h));if(q(x))return x=ve(P,$(x)),new ne($(x.g),x.h);if(P.g.length>30){if(q(P)||q(x))throw Error("slowDivide_ only works with positive integers.");for(var C=R,D=x;D.l(P)<=0;)C=ge(C),D=ge(D);var N=Se(C,1),O=Se(D,1);for(D=Se(D,2),C=Se(C,2);!W(D);){var A=O.add(D);A.l(P)<=0&&(N=N.add(C),O=A),D=Se(D,1),C=Se(C,1)}return x=H(P,N.j(x)),new ne(N,x)}for(N=E;P.l(x)>=0;){for(C=Math.max(1,Math.floor(P.m()/x.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),O=y(C),A=O.j(x);q(A)||A.l(P)>0;)C-=D,O=y(C),A=O.j(x);W(O)&&(O=R),N=N.add(O),P=H(P,A)}return new ne(N,P)}n.B=function(P){return ve(this,P).h},n.and=function(P){const x=Math.max(this.g.length,P.g.length),C=[];for(let D=0;D<x;D++)C[D]=this.i(D)&P.i(D);return new c(C,this.h&P.h)},n.or=function(P){const x=Math.max(this.g.length,P.g.length),C=[];for(let D=0;D<x;D++)C[D]=this.i(D)|P.i(D);return new c(C,this.h|P.h)},n.xor=function(P){const x=Math.max(this.g.length,P.g.length),C=[];for(let D=0;D<x;D++)C[D]=this.i(D)^P.i(D);return new c(C,this.h^P.h)};function ge(P){const x=P.g.length+1,C=[];for(let D=0;D<x;D++)C[D]=P.i(D)<<1|P.i(D-1)>>>31;return new c(C,P.h)}function Se(P,x){const C=x>>5;x%=32;const D=P.g.length-C,N=[];for(let O=0;O<D;O++)N[O]=x>0?P.i(O+C)>>>x|P.i(O+C+1)<<32-x:P.i(O+C);return new c(N,P.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Cv=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=w,Ri=c}).apply(typeof yy<"u"?yy:typeof self<"u"?self:typeof window<"u"?window:{});var Wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kv,Ga,Pv,tc,af,Nv,bv,Dv;(function(){var n,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wu=="object"&&Wu];for(var g=0;g<u.length;++g){var _=u[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,g){if(g)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in _))break e;_=_[M]}u=u[u.length-1],T=_[u],g=g(T),g!=T&&g!=null&&e(_,u,{configurable:!0,writable:!0,value:g})}}o("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(u){return u||function(g){var _=[],T;for(T in g)Object.prototype.hasOwnProperty.call(g,T)&&_.push([T,g[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function p(u,g,_){return u.call.apply(u.bind,arguments)}function y(u,g,_){return y=p,y.apply(null,arguments)}function w(u,g){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function E(u,g){function _(){}_.prototype=g.prototype,u.Z=g.prototype,u.prototype=new _,u.prototype.constructor=u,u.Ob=function(T,M,B){for(var te=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)te[Te-2]=arguments[Te];return g.prototype[M].apply(T,te)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function j(u){const g=u.length;if(g>0){const _=Array(g);for(let T=0;T<g;T++)_[T]=u[T];return _}return[]}function W(u,g){for(let T=1;T<arguments.length;T++){const M=arguments[T];var _=typeof M;if(_=_!="object"?_:M?Array.isArray(M)?"array":_:"null",_=="array"||_=="object"&&typeof M.length=="number"){_=u.length||0;const B=M.length||0;u.length=_+B;for(let te=0;te<B;te++)u[_+te]=M[te]}else u.push(M)}}class q{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function $(u){c.setTimeout(()=>{throw u},0)}function H(){var u=P;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class Z{constructor(){this.h=this.g=null}add(g,_){const T=ne.get();T.set(g,_),this.h?this.h.next=T:this.g=T,this.h=T}}var ne=new q(()=>new ve,u=>u.reset());class ve{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,Se=!1,P=new Z,x=()=>{const u=Promise.resolve(void 0);ge=()=>{u.then(C)}};function C(){for(var u;u=H();){try{u.h.call(u.g)}catch(_){$(_)}var g=ne;g.j(u),g.h<100&&(g.h++,u.next=g.g,g.g=u)}Se=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};c.addEventListener("test",_,g),c.removeEventListener("test",_,g)}catch{}return u})();function A(u){return/^[\s\xa0]*$/.test(u)}function ze(u,g){N.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,g)}E(ze,N),ze.prototype.init=function(u,g){const _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget,g||(_=="mouseover"?g=u.fromElement:_=="mouseout"&&(g=u.toElement)),this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&ze.Z.h.call(this)},ze.prototype.h=function(){ze.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var $e="closure_listenable_"+(Math.random()*1e6|0),bt=0;function Xe(u,g,_,T,M){this.listener=u,this.proxy=null,this.src=g,this.type=_,this.capture=!!T,this.ha=M,this.key=++bt,this.da=this.fa=!1}function re(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fe(u,g,_){for(const T in u)g.call(_,u[T],T,u)}function ae(u,g){for(const _ in u)g.call(void 0,u[_],_,u)}function V(u){const g={};for(const _ in u)g[_]=u[_];return g}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xe(u,g){let _,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(_ in T)u[_]=T[_];for(let B=0;B<Q.length;B++)_=Q[B],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function Ae(u){this.src=u,this.g={},this.h=0}Ae.prototype.add=function(u,g,_,T,M){const B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);const te=ke(u,g,T,M);return te>-1?(g=u[te],_||(g.fa=!1)):(g=new Xe(g,this.src,B,!!T,M),g.fa=_,u.push(g)),g};function Ce(u,g){const _=g.type;if(_ in u.g){var T=u.g[_],M=Array.prototype.indexOf.call(T,g,void 0),B;(B=M>=0)&&Array.prototype.splice.call(T,M,1),B&&(re(g),u.g[_].length==0&&(delete u.g[_],u.h--))}}function ke(u,g,_,T){for(let M=0;M<u.length;++M){const B=u[M];if(!B.da&&B.listener==g&&B.capture==!!_&&B.ha==T)return M}return-1}var je="closure_lm_"+(Math.random()*1e6|0),Oe={};function qe(u,g,_,T,M){if(Array.isArray(g)){for(let B=0;B<g.length;B++)qe(u,g[B],_,T,M);return null}return _=Yo(_),u&&u[$e]?u.J(g,_,f(T)?!!T.capture:!1,M):$t(u,g,_,!1,T,M)}function $t(u,g,_,T,M,B){if(!g)throw Error("Invalid event type");const te=f(M)?!!M.capture:!!M;let Te=Ds(u);if(Te||(u[je]=Te=new Ae(u)),_=Te.add(g,_,T,te,B),_.proxy)return _;if(T=Ns(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)O||(M=te),M===void 0&&(M=!1),u.addEventListener(g.toString(),T,M);else if(u.attachEvent)u.attachEvent(bs(g.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ns(){function u(_){return g.call(u.src,u.listener,_)}const g=kl;return u}function Qo(u,g,_,T,M){if(Array.isArray(g))for(var B=0;B<g.length;B++)Qo(u,g[B],_,T,M);else T=f(T)?!!T.capture:!!T,_=Yo(_),u&&u[$e]?(u=u.i,B=String(g).toString(),B in u.g&&(g=u.g[B],_=ke(g,_,T,M),_>-1&&(re(g[_]),Array.prototype.splice.call(g,_,1),g.length==0&&(delete u.g[B],u.h--)))):u&&(u=Ds(u))&&(g=u.g[g.toString()],u=-1,g&&(u=ke(g,_,T,M)),(_=u>-1?g[u]:null)&&$r(_))}function $r(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[$e])Ce(g.i,u);else{var _=u.type,T=u.proxy;g.removeEventListener?g.removeEventListener(_,T,u.capture):g.detachEvent?g.detachEvent(bs(_),T):g.addListener&&g.removeListener&&g.removeListener(T),(_=Ds(g))?(Ce(_,u),_.h==0&&(_.src=null,g[je]=null)):re(u)}}}function bs(u){return u in Oe?Oe[u]:Oe[u]="on"+u}function kl(u,g){if(u.da)u=!0;else{g=new ze(g,this);const _=u.listener,T=u.ha||u.src;u.fa&&$r(u),u=_.call(T,g)}return u}function Ds(u){return u=u[je],u instanceof Ae?u:null}var Fi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Yo(u){return typeof u=="function"?u:(u[Fi]||(u[Fi]=function(g){return u.handleEvent(g)}),u[Fi])}function ct(){D.call(this),this.i=new Ae(this),this.M=this,this.G=null}E(ct,D),ct.prototype[$e]=!0,ct.prototype.removeEventListener=function(u,g,_,T){Qo(this,u,g,_,T)};function ot(u,g){var _,T=u.G;if(T)for(_=[];T;T=T.G)_.push(T);if(u=u.M,T=g.type||g,typeof g=="string")g=new N(g,u);else if(g instanceof N)g.target=g.target||u;else{var M=g;g=new N(T,u),xe(g,M)}M=!0;let B,te;if(_)for(te=_.length-1;te>=0;te--)B=g.g=_[te],M=In(B,T,!0,g)&&M;if(B=g.g=u,M=In(B,T,!0,g)&&M,M=In(B,T,!1,g)&&M,_)for(te=0;te<_.length;te++)B=g.g=_[te],M=In(B,T,!1,g)&&M}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var u=this.i;for(const g in u.g){const _=u.g[g];for(let T=0;T<_.length;T++)re(_[T]);delete u.g[g],u.h--}}this.G=null},ct.prototype.J=function(u,g,_,T){return this.i.add(String(u),g,!1,_,T)},ct.prototype.K=function(u,g,_,T){return this.i.add(String(u),g,!0,_,T)};function In(u,g,_,T){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();let M=!0;for(let B=0;B<g.length;++B){const te=g[B];if(te&&!te.da&&te.capture==_){const Te=te.listener,at=te.ha||te.src;te.fa&&Ce(u.i,te),M=Te.call(at,T)!==!1&&M}}return M&&!T.defaultPrevented}function Jo(u,g){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=y(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:c.setTimeout(u,g||0)}function Xo(u){u.g=Jo(()=>{u.g=null,u.i&&(u.i=!1,Xo(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class Pl extends D{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Xo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(u){D.call(this),this.h=u,this.g={}}E(qr,D);var Zo=[];function Vs(u){fe(u.g,function(g,_){this.g.hasOwnProperty(_)&&$r(g)},u),u.g={}}qr.prototype.N=function(){qr.Z.N.call(this),Vs(this)},qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hr=c.JSON.stringify,Nl=c.JSON.parse,ji=class{stringify(u){return c.JSON.stringify(u,void 0)}parse(u){return c.JSON.parse(u,void 0)}};function Wr(){}function bl(){}var Kr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Os(){N.call(this,"d")}E(Os,N);function ea(){N.call(this,"c")}E(ea,N);var Sn={},Ls=null;function Gr(){return Ls=Ls||new ct}Sn.Ia="serverreachability";function Ms(u){N.call(this,Sn.Ia,u)}E(Ms,N);function gr(u){const g=Gr();ot(g,new Ms(g))}Sn.STAT_EVENT="statevent";function yr(u,g){N.call(this,Sn.STAT_EVENT,u),this.stat=g}E(yr,N);function it(u){const g=Gr();ot(g,new yr(g,u))}Sn.Ja="timingevent";function ta(u,g){N.call(this,Sn.Ja,u),this.size=g}E(ta,N);function Qr(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){u()},g)}function Yr(){this.g=!0}Yr.prototype.ua=function(){this.g=!1};function Dl(u,g,_,T,M,B){u.info(function(){if(u.g)if(B){var te="",Te=B.split("&");for(let Be=0;Be<Te.length;Be++){var at=Te[Be].split("=");if(at.length>1){const ht=at[0];at=at[1];const on=ht.split("_");te=on.length>=2&&on[1]=="type"?te+(ht+"="+at+"&"):te+(ht+"=redacted&")}}}else te=null;else te=B;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+g+`
`+_+`
`+te})}function Vl(u,g,_,T,M,B,te){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+g+`
`+_+`
`+B+" "+te})}function Bn(u,g,_,T){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ui(u,_)+(T?" "+T:"")})}function Ol(u,g){u.info(function(){return"TIMEOUT: "+g})}Yr.prototype.info=function(){};function Ui(u,g){if(!u.g)return g;if(!g)return null;try{const B=JSON.parse(g);if(B){for(u=0;u<B.length;u++)if(Array.isArray(B[u])){var _=B[u];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var M=T[0];if(M!="noop"&&M!="stop"&&M!="close")for(let te=1;te<T.length;te++)T[te]=""}}}}return Hr(B)}catch{return g}}var Jr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ll;function _r(){}E(_r,Wr),_r.prototype.g=function(){return new XMLHttpRequest},Ll=new _r;function $n(u){return encodeURIComponent(String(u))}function Fs(u){var g=1;u=u.split(":");const _=[];for(;g>0&&u.length;)_.push(u.shift()),g--;return u.length&&_.push(u.join(":")),_}function dn(u,g,_,T){this.j=u,this.i=g,this.l=_,this.S=T||1,this.V=new qr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ml}function Ml(){this.i=null,this.g="",this.h=!1}var Fl={},na={};function xn(u,g,_){u.M=1,u.A=wr(fn(g)),u.u=_,u.R=!0,ra(u,null)}function ra(u,g){u.F=Date.now(),zi(u),u.B=fn(u.A);var _=u.B,T=u.S;Array.isArray(T)||(T=[String(T)]),fa(_.i,"t",T),u.C=0,_=u.j.L,u.h=new Ml,u.g=Gl(u.j,_?g:null,!u.u),u.P>0&&(u.O=new Pl(y(u.Y,u,u.g),u.P)),g=u.V,_=u.g,T=u.ba;var M="readystatechange";Array.isArray(M)||(M&&(Zo[0]=M.toString()),M=Zo);for(let B=0;B<M.length;B++){const te=qe(_,M[B],T||g.handleEvent,!1,g.h||g);if(!te)break;g.g[te.key]=te}g=u.J?V(u.J):{},u.u?(u.v||(u.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,g)):(u.v="GET",u.g.ea(u.B,u.v,null,g)),gr(),Dl(u.i,u.v,u.B,u.l,u.S,u.u)}dn.prototype.ba=function(u){u=u.target;const g=this.O;g&&Yn(u)==3?g.j():this.Y(u)},dn.prototype.Y=function(u){try{if(u==this.g)e:{const Te=Yn(this.g),at=this.g.ya(),Be=this.g.ca();if(!(Te<3)&&(Te!=3||this.g&&(this.h.h||this.g.la()||Wl(this.g)))){this.K||Te!=4||at==7||(at==8||Be<=0?gr(3):gr(2)),js(this);var g=this.g.ca();this.X=g;var _=jl(this);if(this.o=g==200,Vl(this.i,this.v,this.B,this.l,this.S,Te,g),this.o){if(this.U&&!this.L){t:{if(this.g){var T,M=this.g;if((T=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(T)){var B=T;break t}}B=null}if(u=B)Bn(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ge(this,u);else{this.o=!1,this.m=3,it(12),vr(this),Bi(this);break e}}if(this.R){u=!0;let ht;for(;!this.K&&this.C<_.length;)if(ht=zl(this,_),ht==na){Te==4&&(this.m=4,it(14),u=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==Fl){this.m=4,it(15),Bn(this.i,this.l,_,"[Invalid Chunk]"),u=!1;break}else Bn(this.i,this.l,ht,null),Ge(this,ht);if(Ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||_.length!=0||this.h.h||(this.m=1,it(16),u=!1),this.o=this.o&&u,!u)Bn(this.i,this.l,_,"[Invalid Chunked Response]"),vr(this),Bi(this);else if(_.length>0&&!this.W){this.W=!0;var te=this.j;te.g==this&&te.aa&&!te.P&&(te.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Ji(te),te.P=!0,it(11))}}else Bn(this.i,this.l,_,null),Ge(this,_);Te==4&&vr(this),this.o&&!this.K&&(Te==4?Qs(this.j,this):(this.o=!1,zi(this)))}else ma(this.g),g==400&&_.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),vr(this),Bi(this)}}}catch{}finally{}};function jl(u){if(!Ul(u))return u.g.la();const g=Wl(u.g);if(g==="")return"";let _="";const T=g.length,M=Yn(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return vr(u),Bi(u),"";u.h.i=new c.TextDecoder}for(let B=0;B<T;B++)u.h.h=!0,_+=u.h.i.decode(g[B],{stream:!(M&&B==T-1)});return g.length=0,u.h.g+=_,u.C=0,u.h.g}function Ul(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function zl(u,g){var _=u.C,T=g.indexOf(`
`,_);return T==-1?na:(_=Number(g.substring(_,T)),isNaN(_)?Fl:(T+=1,T+_>g.length?na:(g=g.slice(T,T+_),u.C=T+_,g)))}dn.prototype.cancel=function(){this.K=!0,vr(this)};function zi(u){u.T=Date.now()+u.H,ia(u,u.H)}function ia(u,g){if(u.D!=null)throw Error("WatchDog timer not null");u.D=Qr(y(u.aa,u),g)}function js(u){u.D&&(c.clearTimeout(u.D),u.D=null)}dn.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(Ol(this.i,this.B),this.M!=2&&(gr(),it(17)),vr(this),this.m=2,Bi(this)):ia(this,this.T-u)};function Bi(u){u.j.I==0||u.K||Qs(u.j,u)}function vr(u){js(u);var g=u.O;g&&typeof g.dispose=="function"&&g.dispose(),u.O=null,Vs(u.V),u.g&&(g=u.g,u.g=null,g.abort(),g.dispose())}function Ge(u,g){try{var _=u.j;if(_.I!=0&&(_.g==u||oa(_.h,u))){if(!u.L&&oa(_.h,u)&&_.I==3){try{var T=_.Ba.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<u.F)Gs(_),rn(_);else break e;Zn(_),it(18)}}else _.xa=M[1],0<_.xa-_.K&&M[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Qr(y(_.Va,_),6e3));$i(_.h)<=1&&_.ta&&(_.ta=void 0)}else sn(_,11)}else if((u.L||_.g==u)&&Gs(_),!A(g))for(M=_.Ba.g.parse(g),g=0;g<M.length;g++){let Be=M[g];const ht=Be[0];if(!(ht<=_.K))if(_.K=ht,Be=Be[1],_.I==2)if(Be[0]=="c"){_.M=Be[1],_.ba=Be[2];const on=Be[3];on!=null&&(_.ka=on,_.j.info("VER="+_.ka));const xr=Be[4];xr!=null&&(_.za=xr,_.j.info("SVER="+_.za));const er=Be[5];er!=null&&typeof er=="number"&&er>0&&(T=1.5*er,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const tr=u.g;if(tr){const Xs=tr.g?tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xs){var B=T.h;B.g||Xs.indexOf("spdy")==-1&&Xs.indexOf("quic")==-1&&Xs.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(zs(B,B.h),B.h=null))}if(T.G){const _a=tr.g?tr.g.getResponseHeader("X-HTTP-Session-Id"):null;_a&&(T.wa=_a,Fe(T.J,T.G,_a))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-u.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var te=u;if(T.na=ya(T,T.L?T.ba:null,T.W),te.L){qi(T.h,te);var Te=te,at=T.O;at&&(Te.H=at),Te.D&&(js(Te),zi(Te)),T.g=te}else Dt(T);_.i.length>0&&Sr(_)}else Be[0]!="stop"&&Be[0]!="close"||sn(_,7);else _.I==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?sn(_,7):Ws(_):Be[0]!="noop"&&_.l&&_.l.qa(Be),_.A=0)}}gr(4)}catch{}}var oh=class{constructor(u,g){this.g=u,this.map=g}};function Us(u){this.l=u||10,c.PerformanceNavigationTiming?(u=c.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sa(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function $i(u){return u.h?1:u.g?u.g.size:0}function oa(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function zs(u,g){u.g?u.g.add(g):u.h=g}function qi(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}Us.prototype.cancel=function(){if(this.i=en(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function en(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const _ of u.g.values())g=g.concat(_.G);return g}return j(u.i)}var Bl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tn(u,g){if(u){u=u.split("&");for(let _=0;_<u.length;_++){const T=u[_].indexOf("=");let M,B=null;T>=0?(M=u[_].substring(0,T),B=u[_].substring(T+1)):M=u[_],g(M,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function qn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;u instanceof qn?(this.l=u.l,Hi(this,u.j),this.o=u.o,this.g=u.g,Hn(this,u.u),this.h=u.h,Zr(this,pa(u.i)),this.m=u.m):u&&(g=String(u).match(Bl))?(this.l=!1,Hi(this,g[1]||"",!0),this.o=Wi(g[2]||""),this.g=Wi(g[3]||"",!0),Hn(this,g[4]),this.h=Wi(g[5]||"",!0),Zr(this,g[6]||"",!0),this.m=Wi(g[7]||"")):(this.l=!1,this.i=new De(null,this.l))}qn.prototype.toString=function(){const u=[];var g=this.j;g&&u.push(Ki(g,la,!0),":");var _=this.g;return(_||g=="file")&&(u.push("//"),(g=this.o)&&u.push(Ki(g,la,!0),"@"),u.push($n(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&u.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Ki(_,_.charAt(0)=="/"?Gi:ua,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Ki(_,ca)),u.join("")},qn.prototype.resolve=function(u){const g=fn(this);let _=!!u.j;_?Hi(g,u.j):_=!!u.o,_?g.o=u.o:_=!!u.g,_?g.g=u.g:_=u.u!=null;var T=u.h;if(_)Hn(g,u.u);else if(_=!!u.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var M=g.h.lastIndexOf("/");M!=-1&&(T=g.h.slice(0,M+1)+T)}if(M=T,M==".."||M==".")T="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){T=M.lastIndexOf("/",0)==0,M=M.split("/");const B=[];for(let te=0;te<M.length;){const Te=M[te++];Te=="."?T&&te==M.length&&B.push(""):Te==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),T&&te==M.length&&B.push("")):(B.push(Te),T=!0)}T=B.join("/")}else T=M}return _?g.h=T:_=u.i.toString()!=="",_?Zr(g,pa(u.i)):_=!!u.m,_&&(g.m=u.m),g};function fn(u){return new qn(u)}function Hi(u,g,_){u.j=_?Wi(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function Hn(u,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);u.u=g}else u.u=null}function Zr(u,g,_){g instanceof De?(u.i=g,$s(u.i,u.l)):(_||(g=Ki(g,ah)),u.i=new De(g,u.l))}function Fe(u,g,_){u.i.set(g,_)}function wr(u){return Fe(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Wi(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ki(u,g,_){return typeof u=="string"?(u=encodeURI(u).replace(g,aa),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function aa(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var la=/[#\/\?@]/g,ua=/[#\?:]/g,Gi=/[#\?]/g,ah=/[#\?@]/g,ca=/#/g;function De(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function Wn(u){u.g||(u.g=new Map,u.h=0,u.i&&tn(u.i,function(g,_){u.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}n=De.prototype,n.add=function(u,g){Wn(this),this.i=null,u=Kn(this,u);let _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(g),this.h+=1,this};function ha(u,g){Wn(u),g=Kn(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function Bs(u,g){return Wn(u),g=Kn(u,g),u.g.has(g)}n.forEach=function(u,g){Wn(this),this.g.forEach(function(_,T){_.forEach(function(M){u.call(g,M,T,this)},this)},this)};function da(u,g){Wn(u);let _=[];if(typeof g=="string")Bs(u,g)&&(_=_.concat(u.g.get(Kn(u,g))));else for(u=Array.from(u.g.values()),g=0;g<u.length;g++)_=_.concat(u[g]);return _}n.set=function(u,g){return Wn(this),this.i=null,u=Kn(this,u),Bs(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},n.get=function(u,g){return u?(u=da(this,u),u.length>0?String(u[0]):g):g};function fa(u,g,_){ha(u,g),_.length>0&&(u.i=null,u.g.set(Kn(u,g),j(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(let T=0;T<g.length;T++){var _=g[T];const M=$n(_);_=da(this,_);for(let B=0;B<_.length;B++){let te=M;_[B]!==""&&(te+="="+$n(_[B])),u.push(te)}}return this.i=u.join("&")};function pa(u){const g=new De;return g.i=u.i,u.g&&(g.g=new Map(u.g),g.h=u.h),g}function Kn(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function $s(u,g){g&&!u.j&&(Wn(u),u.i=null,u.g.forEach(function(_,T){const M=T.toLowerCase();T!=M&&(ha(this,T),fa(this,M,_))},u)),u.j=g}function Gn(u,g){const _=new Yr;if(c.Image){const T=new Image;T.onload=w(xt,_,"TestLoadImage: loaded",!0,g,T),T.onerror=w(xt,_,"TestLoadImage: error",!1,g,T),T.onabort=w(xt,_,"TestLoadImage: abort",!1,g,T),T.ontimeout=w(xt,_,"TestLoadImage: timeout",!1,g,T),c.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else g(!1)}function Qn(u,g){const _=new Yr,T=new AbortController,M=setTimeout(()=>{T.abort(),xt(_,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:T.signal}).then(B=>{clearTimeout(M),B.ok?xt(_,"TestPingServer: ok",!0,g):xt(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(M),xt(_,"TestPingServer: error",!1,g)})}function xt(u,g,_,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(_)}catch{}}function Qi(){this.g=new ji}function Er(u){this.i=u.Sb||null,this.h=u.ab||!1}E(Er,Wr),Er.prototype.g=function(){return new nn(this.i,this.h)};function nn(u,g){ct.call(this),this.H=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(nn,ct),n=nn.prototype,n.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=g,this.readyState=1,An(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(g.body=u),(this.H||c).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;$l(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function $l(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?ei(this):An(this),this.readyState==3&&$l(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,ei(this))},n.Na=function(u){this.g&&(this.response=u,ei(this))},n.ga=function(){this.g&&ei(this)};function ei(u){u.readyState=4,u.l=null,u.j=null,u.B=null,An(u)}n.setRequestHeader=function(u,g){this.A.append(u,g)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=g.next();return u.join(`\r
`)};function An(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function ql(u){let g="";return fe(u,function(_,T){g+=T,g+=":",g+=_,g+=`\r
`}),g}function qs(u,g,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=ql(_),typeof u=="string"?_!=null&&$n(_):Fe(u,g,_))}function He(u){ct.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(He,ct);var Hl=/^https?$/i,lh=["POST","PUT"];n=He.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,g,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ll.g(),this.g.onreadystatechange=R(y(this.Ca,this));try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(B){ti(this,B);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)_.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const B of T.keys())_.set(B,T.get(B));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),M=c.FormData&&u instanceof c.FormData,!(Array.prototype.indexOf.call(lh,g,void 0)>=0)||T||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,te]of _)this.g.setRequestHeader(B,te);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(B){ti(this,B)}};function ti(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.o=5,ni(u),Ir(u)}function ni(u){u.A||(u.A=!0,ot(u,"complete"),ot(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,ot(this,"complete"),ot(this,"abort"),Ir(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),He.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Tr(this):this.Xa())},n.Xa=function(){Tr(this)};function Tr(u){if(u.h&&typeof l<"u"){if(u.v&&Yn(u)==4)setTimeout(u.Ca.bind(u),0);else if(ot(u,"readystatechange"),Yn(u)==4){u.h=!1;try{const B=u.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var _;if(!(_=g)){var T;if(T=B===0){let te=String(u.D).match(Bl)[1]||null;!te&&c.self&&c.self.location&&(te=c.self.location.protocol.slice(0,-1)),T=!Hl.test(te?te.toLowerCase():"")}_=T}if(_)ot(u,"complete"),ot(u,"success");else{u.o=6;try{var M=Yn(u)>2?u.g.statusText:""}catch{M=""}u.l=M+" ["+u.ca()+"]",ni(u)}}finally{Ir(u)}}}}function Ir(u,g){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const _=u.g;u.g=null,g||ot(u,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Yn(u){return u.g?u.g.readyState:0}n.ca=function(){try{return Yn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),Nl(g)}};function Wl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ma(u){const g={};u=(u.g&&Yn(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(A(u[T]))continue;var _=Fs(u[T]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=g[M]||[];g[M]=B,B.push(_)}ae(g,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(u,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||g}function Hs(u){this.za=0,this.i=[],this.j=new Yr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Jn("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Jn("baseRetryDelayMs",5e3,u),this.Za=Jn("retryDelaySeedMs",1e4,u),this.Ta=Jn("forwardChannelMaxRetries",2,u),this.va=Jn("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Us(u&&u.concurrentRequestLimit),this.Ba=new Qi,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Hs.prototype,n.ka=8,n.I=1,n.connect=function(u,g,_,T){it(0),this.W=u,this.H=g||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=ya(this,null,this.W),Sr(this)};function Ws(u){if(Ks(u),u.I==3){var g=u.V++,_=fn(u.J);if(Fe(_,"SID",u.M),Fe(_,"RID",g),Fe(_,"TYPE","terminate"),Xn(u,_),g=new dn(u,u.j,g),g.M=2,g.A=wr(fn(_)),_=!1,c.navigator&&c.navigator.sendBeacon)try{_=c.navigator.sendBeacon(g.A.toString(),"")}catch{}!_&&c.Image&&(new Image().src=g.A,_=!0),_||(g.g=Gl(g.j,null),g.g.ea(g.A)),g.F=Date.now(),zi(g)}Xi(u)}function rn(u){u.g&&(Ji(u),u.g.cancel(),u.g=null)}function Ks(u){rn(u),u.v&&(c.clearTimeout(u.v),u.v=null),Gs(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&c.clearTimeout(u.m),u.m=null)}function Sr(u){if(!sa(u.h)&&!u.m){u.m=!0;var g=u.Ea;ge||x(),Se||(ge(),Se=!0),P.add(g,u),u.D=0}}function Kl(u,g){return $i(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=g.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=Qr(y(u.Ea,u,g),Ys(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const M=new dn(this,this.j,u);let B=this.o;if(this.U&&(B?(B=V(B),xe(B,this.U)):B=this.U),this.u!==null||this.R||(M.J=B,B=null),this.S)e:{for(var g=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(g+=T,g>4096){g=_;break e}if(g===4096||_===this.i.length-1){g=_+1;break e}}g=1e3}else g=1e3;g=ga(this,M,g),_=fn(this.J),Fe(_,"RID",u),Fe(_,"CVER",22),this.G&&Fe(_,"X-HTTP-Session-Id",this.G),Xn(this,_),B&&(this.R?g="headers="+$n(ql(B))+"&"+g:this.u&&qs(_,this.u,B)),zs(this.h,M),this.Ra&&Fe(_,"TYPE","init"),this.S?(Fe(_,"$req",g),Fe(_,"SID","null"),M.U=!0,xn(M,_,null)):xn(M,_,g),this.I=2}}else this.I==3&&(u?Yi(this,u):this.i.length==0||sa(this.h)||Yi(this))};function Yi(u,g){var _;g?_=g.l:_=u.V++;const T=fn(u.J);Fe(T,"SID",u.M),Fe(T,"RID",_),Fe(T,"AID",u.K),Xn(u,T),u.u&&u.o&&qs(T,u.u,u.o),_=new dn(u,u.j,_,u.D+1),u.u===null&&(_.J=u.o),g&&(u.i=g.G.concat(u.i)),g=ga(u,_,1e3),_.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),zs(u.h,_),xn(_,T,g)}function Xn(u,g){u.H&&fe(u.H,function(_,T){Fe(g,T,_)}),u.l&&fe({},function(_,T){Fe(g,T,_)})}function ga(u,g,_){_=Math.min(u.i.length,_);const T=u.l?y(u.l.Ka,u.l,u):null;e:{var M=u.i;let Te=-1;for(;;){const at=["count="+_];Te==-1?_>0?(Te=M[0].g,at.push("ofs="+Te)):Te=0:at.push("ofs="+Te);let Be=!0;for(let ht=0;ht<_;ht++){var B=M[ht].g;const on=M[ht].map;if(B-=Te,B<0)Te=Math.max(0,M[ht].g-100),Be=!1;else try{B="req"+B+"_"||"";try{var te=on instanceof Map?on:Object.entries(on);for(const[xr,er]of te){let tr=er;f(er)&&(tr=Hr(er)),at.push(B+xr+"="+encodeURIComponent(tr))}}catch(xr){throw at.push(B+"type="+encodeURIComponent("_badmap")),xr}}catch{T&&T(on)}}if(Be){te=at.join("&");break e}}te=void 0}return u=u.i.splice(0,_),g.G=u,te}function Dt(u){if(!u.g&&!u.v){u.Y=1;var g=u.Da;ge||x(),Se||(ge(),Se=!0),P.add(g,u),u.A=0}}function Zn(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=Qr(y(u.Da,u),Ys(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,ri(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=Qr(y(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),rn(this),ri(this))};function Ji(u){u.B!=null&&(c.clearTimeout(u.B),u.B=null)}function ri(u){u.g=new dn(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var g=fn(u.na);Fe(g,"RID","rpc"),Fe(g,"SID",u.M),Fe(g,"AID",u.K),Fe(g,"CI",u.F?"0":"1"),!u.F&&u.ia&&Fe(g,"TO",u.ia),Fe(g,"TYPE","xmlhttp"),Xn(u,g),u.u&&u.o&&qs(g,u.u,u.o),u.O&&(u.g.H=u.O);var _=u.g;u=u.ba,_.M=1,_.A=wr(fn(g)),_.u=null,_.R=!0,ra(_,u)}n.Va=function(){this.C!=null&&(this.C=null,rn(this),Zn(this),it(19))};function Gs(u){u.C!=null&&(c.clearTimeout(u.C),u.C=null)}function Qs(u,g){var _=null;if(u.g==g){Gs(u),Ji(u),u.g=null;var T=2}else if(oa(u.h,g))_=g.G,qi(u.h,g),T=1;else return;if(u.I!=0){if(g.o)if(T==1){_=g.u?g.u.length:0,g=Date.now()-g.F;var M=u.D;T=Gr(),ot(T,new ta(T,_)),Sr(u)}else Dt(u);else if(M=g.m,M==3||M==0&&g.X>0||!(T==1&&Kl(u,g)||T==2&&Zn(u)))switch(_&&_.length>0&&(g=u.h,g.i=g.i.concat(_)),M){case 1:sn(u,5);break;case 4:sn(u,10);break;case 3:sn(u,6);break;default:sn(u,2)}}}function Ys(u,g){let _=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(_*=2),_*g}function sn(u,g){if(u.j.info("Error code "+g),g==2){var _=y(u.bb,u),T=u.Ua;const M=!T;T=new qn(T||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Hi(T,"https"),wr(T),M?Gn(T.toString(),_):Qn(T.toString(),_)}else it(2);u.I=0,u.l&&u.l.pa(g),Xi(u),Ks(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Xi(u){if(u.I=0,u.ja=[],u.l){const g=en(u.h);(g.length!=0||u.i.length!=0)&&(W(u.ja,g),W(u.ja,u.i),u.h.i.length=0,j(u.i),u.i.length=0),u.l.oa()}}function ya(u,g,_){var T=_ instanceof qn?fn(_):new qn(_);if(T.g!="")g&&(T.g=g+"."+T.g),Hn(T,T.u);else{var M=c.location;T=M.protocol,g=g?g+"."+M.hostname:M.hostname,M=+M.port;const B=new qn(null);T&&Hi(B,T),g&&(B.g=g),M&&Hn(B,M),_&&(B.h=_),T=B}return _=u.G,g=u.wa,_&&g&&Fe(T,_,g),Fe(T,"VER",u.ka),Xn(u,T),T}function Gl(u,g,_){if(g&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Aa&&!u.ma?new He(new Er({ab:_})):new He(u.ma),g.Fa(u.L),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ql(){}n=Ql.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Js(){}Js.prototype.g=function(u,g){return new At(u,g)};function At(u,g){ct.call(this),this.g=new Hs(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(u?u["X-WebChannel-Client-Profile"]=g.sa:u={"X-WebChannel-Client-Profile":g.sa}),this.g.U=u,(u=g&&g.Qb)&&!A(u)&&(this.g.u=u),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!A(g)&&(this.g.G=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new ii(this)}E(At,ct),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Ws(this.g)},At.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.v&&(_={},_.__data__=Hr(u),u=_);g.i.push(new oh(g.Ya++,u)),g.I==3&&Sr(g)},At.prototype.N=function(){this.g.l=null,delete this.j,Ws(this.g),delete this.g,At.Z.N.call(this)};function Yl(u){Os.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){e:{for(const _ in g){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}E(Yl,Os);function Jl(){ea.call(this),this.status=1}E(Jl,ea);function ii(u){this.g=u}E(ii,Ql),ii.prototype.ra=function(){ot(this.g,"a")},ii.prototype.qa=function(u){ot(this.g,new Yl(u))},ii.prototype.pa=function(u){ot(this.g,new Jl)},ii.prototype.oa=function(){ot(this.g,"b")},Js.prototype.createWebChannel=Js.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Dv=function(){return new Js},bv=function(){return Gr()},Nv=Sn,af={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Jr.NO_ERROR=0,Jr.TIMEOUT=8,Jr.HTTP_ERROR=6,tc=Jr,Xr.COMPLETE="complete",Pv=Xr,bl.EventType=Kr,Kr.OPEN="a",Kr.CLOSE="b",Kr.ERROR="c",Kr.MESSAGE="d",ct.prototype.listen=ct.prototype.J,Ga=bl,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,kv=He}).apply(typeof Wu<"u"?Wu:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}jt.UNAUTHENTICATED=new jt(null),jt.GOOGLE_CREDENTIALS=new jt("google-credentials-uid"),jt.FIRST_PARTY=new jt("first-party-uid"),jt.MOCK_USER=new jt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo="12.11.0";function hx(n){Bo=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new jc("@firebase/firestore");function wo(){return ys.logLevel}function oe(n,...e){if(ys.logLevel<=Pe.DEBUG){const t=e.map(Ff);ys.debug(`Firestore (${Bo}): ${n}`,...t)}}function jr(n,...e){if(ys.logLevel<=Pe.ERROR){const t=e.map(Ff);ys.error(`Firestore (${Bo}): ${n}`,...t)}}function _s(n,...e){if(ys.logLevel<=Pe.WARN){const t=e.map(Ff);ys.warn(`Firestore (${Bo}): ${n}`,...t)}}function Ff(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Vv(n,i,t)}function Vv(n,e,t){let i=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw jr(i),new Error(i)}function Ue(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Vv(e,o,i)}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends zn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(jt.UNAUTHENTICATED)))}shutdown(){}}class fx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class px{constructor(e){this.t=e,this.currentUser=jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0,42304);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new ms;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ms,e.enqueueRetryable((()=>o(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await o(this.currentUser)}))},f=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ms)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ue(typeof i.accessToken=="string",31837,{l:i}),new Ov(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new jt(e)}}class mx{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=jt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class gx{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new mx(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(jt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class _y{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yx{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0,3512);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new _y(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new _y(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=_x(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ne(n,e){return n<e?-1:n>e?1:0}function lf(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const o=n.charAt(i),l=e.charAt(i);if(o!==l)return Bd(o)===Bd(l)?Ne(o,l):Bd(o)?1:-1}return Ne(n.length,e.length)}const vx=55296,wx=57343;function Bd(n){const e=n.charCodeAt(0);return e>=vx&&e<=wx}function bo(n,e,t){return n.length===e.length&&n.every(((i,o)=>t(i,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="__name__";class or{constructor(e,t,i){t===void 0?t=0:t>e.length&&_e(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&_e(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return or.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=or.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ne(e.length,t.length)}static compareSegments(e,t){const i=or.isNumericId(e),o=or.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?or.extractNumericId(e).compare(or.extractNumericId(t)):lf(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ri.fromString(e.substring(4,e.length-2))}}class Ke extends or{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new se(K.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((o=>o.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const Ex=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends or{construct(e,t,i){return new Pt(e,t,i)}static isValidIdentifier(e){return Ex.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vy}static keyField(){return new Pt([vy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new se(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new se(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new se(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else f==="`"?(c=!c,o++):f!=="."||c?(i+=f,o++):(l(),o++)}if(l(),c)throw new se(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ke.fromString(e))}static fromName(e){return new de(Ke.fromString(e).popFirst(5))}static empty(){return new de(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(n,e,t){if(!t)throw new se(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Tx(n,e,t,i){if(e===!0&&i===!0)throw new se(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function wy(n){if(!de.isDocumentKey(n))throw new se(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ey(n){if(de.isDocumentKey(n))throw new se(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mv(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Uc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_e(12329,{type:typeof n})}function Xa(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Uc(n);throw new se(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(n,e){const t={typeString:n};return e&&(t.value=e),t}function El(n,e){if(!Mv(n))throw new se(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const c=n[i];if(o&&typeof c!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new se(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=-62135596800,Iy=1e6;class Je{static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Iy);return new Je(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ty)throw new se(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Iy}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(El(e,Je._jsonSchema))return new Je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ty;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Je._jsonSchemaVersion="firestore/timestamp/1.0",Je._jsonSchema={type:mt("string",Je._jsonSchemaVersion),seconds:mt("number"),nanoseconds:mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new Je(0,0))}static max(){return new Ee(new Je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=-1;function Ix(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ee.fromTimestamp(i===1e9?new Je(t+1,0):new Je(t,i));return new Ni(o,de.empty(),e)}function Sx(n){return new Ni(n.readTime,n.key,al)}class Ni{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ni(Ee.min(),de.empty(),al)}static max(){return new Ni(Ee.max(),de.empty(),al)}}function xx(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(n){if(n.code!==K.FAILED_PRECONDITION||n.message!==Ax)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_e(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G(((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):G.reject(t)}static resolve(e){return new G(((t,i)=>{t(e)}))}static reject(e){return new G(((t,i)=>{i(e)}))}static waitFor(e){return new G(((t,i)=>{let o=0,l=0,c=!1;e.forEach((f=>{++o,f.next((()=>{++l,c&&l===o&&t()}),(p=>i(p)))})),c=!0,l===o&&t()}))}static or(e){let t=G.resolve(!1);for(const i of e)t=t.next((o=>o?G.resolve(o):i()));return t}static forEach(e,t){const i=[];return e.forEach(((o,l)=>{i.push(t.call(this,o,l))})),this.waitFor(i)}static mapArray(e,t){return new G(((i,o)=>{const l=e.length,c=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next((w=>{c[y]=w,++f,f===l&&i(c)}),(w=>o(w)))}}))}static doWhile(e,t){return new G(((i,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):i()};l()}))}}function Cx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}zc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=-1;function Bc(n){return n==null}function pc(n){return n===0&&1/n==-1/0}function kx(n){return typeof n=="number"&&Number.isInteger(n)&&!pc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="";function Px(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Sy(e)),e=Nx(n.get(t),e);return Sy(e)}function Nx(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case Fv:t+="";break;default:t+=l}}return t}function Sy(n){return n+Fv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ku(this.root,e,this.comparator,!0)}}class Ku{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??kt.RED,this.left=o??kt.EMPTY,this.right=l??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new kt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return kt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ay(this.data.getIterator())}getIteratorFrom(e){return new Ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new vt(this.comparator);return t.data=e,t}}class Ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new vt(Pt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Uv("Invalid base64 string: "+l):l}})(e);return new Nt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l})(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const bx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bi(n){if(Ue(!!n,39018),typeof n=="string"){let e=0;const t=bx.exec(n);if(Ue(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ut(n.seconds),nanos:ut(n.nanos)}}function ut(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Di(n){return typeof n=="string"?Nt.fromBase64String(n):Nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="server_timestamp",Bv="__type__",$v="__previous_value__",qv="__local_write_time__";function zf(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Bv])==null?void 0:i.stringValue)===zv}function $c(n){const e=n.mapValue.fields[$v];return zf(e)?$c(e):e}function ll(n){const e=bi(n.mapValue.fields[qv].timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,t,i,o,l,c,f,p,y,w,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y,this.isUsingEmulator=w,this.apiKey=E}}const mc="(default)";class ul{constructor(e,t){this.projectId=e,this.database=t||mc}static empty(){return new ul("","")}get isDefaultDatabase(){return this.database===mc}isEqual(e){return e instanceof ul&&e.projectId===this.projectId&&e.database===this.database}}function Vx(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new se(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ul(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv="__type__",Ox="__max__",Gu={mapValue:{}},Wv="__vector__",gc="value";function Vi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zf(n)?4:Mx(n)?9007199254740991:Lx(n)?10:11:_e(28295,{value:n})}function pr(n,e){if(n===e)return!0;const t=Vi(n);if(t!==Vi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ll(n).isEqual(ll(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=bi(o.timestampValue),f=bi(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Di(o.bytesValue).isEqual(Di(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ut(o.geoPointValue.latitude)===ut(l.geoPointValue.latitude)&&ut(o.geoPointValue.longitude)===ut(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ut(o.integerValue)===ut(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ut(o.doubleValue),f=ut(l.doubleValue);return c===f?pc(c)===pc(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return bo(n.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return(function(o,l){const c=o.mapValue.fields||{},f=l.mapValue.fields||{};if(xy(c)!==xy(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!pr(c[p],f[p])))return!1;return!0})(n,e);default:return _e(52216,{left:n})}}function cl(n,e){return(n.values||[]).find((t=>pr(t,e)))!==void 0}function Do(n,e){if(n===e)return 0;const t=Vi(n),i=Vi(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=ut(l.integerValue||l.doubleValue),p=ut(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return Ry(n.timestampValue,e.timestampValue);case 4:return Ry(ll(n),ll(e));case 5:return lf(n.stringValue,e.stringValue);case 6:return(function(l,c){const f=Di(l),p=Di(c);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),p=c.split("/");for(let y=0;y<f.length&&y<p.length;y++){const w=Ne(f[y],p[y]);if(w!==0)return w}return Ne(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Ne(ut(l.latitude),ut(c.latitude));return f!==0?f:Ne(ut(l.longitude),ut(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Cy(n.arrayValue,e.arrayValue);case 10:return(function(l,c){var R,j,W,q;const f=l.fields||{},p=c.fields||{},y=(R=f[gc])==null?void 0:R.arrayValue,w=(j=p[gc])==null?void 0:j.arrayValue,E=Ne(((W=y==null?void 0:y.values)==null?void 0:W.length)||0,((q=w==null?void 0:w.values)==null?void 0:q.length)||0);return E!==0?E:Cy(y,w)})(n.mapValue,e.mapValue);case 11:return(function(l,c){if(l===Gu.mapValue&&c===Gu.mapValue)return 0;if(l===Gu.mapValue)return 1;if(c===Gu.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=c.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let E=0;E<p.length&&E<w.length;++E){const R=lf(p[E],w[E]);if(R!==0)return R;const j=Do(f[p[E]],y[w[E]]);if(j!==0)return j}return Ne(p.length,w.length)})(n.mapValue,e.mapValue);default:throw _e(23264,{he:t})}}function Ry(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=bi(n),i=bi(e),o=Ne(t.seconds,i.seconds);return o!==0?o:Ne(t.nanos,i.nanos)}function Cy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Do(t[o],i[o]);if(l)return l}return Ne(t.length,i.length)}function Vo(n){return uf(n)}function uf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=bi(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Di(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return de.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=uf(l);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${uf(t.fields[c])}`;return o+"}"})(n.mapValue):_e(61005,{value:n})}function nc(n){switch(Vi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$c(n);return e?16+nc(e):16;case 5:return 2*n.stringValue.length;case 6:return Di(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((o,l)=>o+nc(l)),0)})(n.arrayValue);case 10:case 11:return(function(i){let o=0;return xs(i.fields,((l,c)=>{o+=l.length+nc(c)})),o})(n.mapValue);default:throw _e(13486,{value:n})}}function ky(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function cf(n){return!!n&&"integerValue"in n}function Bf(n){return!!n&&"arrayValue"in n}function Py(n){return!!n&&"nullValue"in n}function Ny(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rc(n){return!!n&&"mapValue"in n}function Lx(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hv])==null?void 0:i.stringValue)===Wv}function Za(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return xs(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Za(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Za(n.arrayValue.values[t]);return e}return{...n}}function Mx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ox}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!rc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Za(t)}setAll(e){let t=Pt.emptyPath(),i={},o=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=f.popLast()}c?i[f.lastSegment()]=Za(c):o.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());rc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];rc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){xs(t,((o,l)=>e[o]=l));for(const o of i)delete e[o]}clone(){return new wn(Za(this.value))}}function Kv(n){const e=[];return xs(n.fields,((t,i)=>{const o=new Pt([t]);if(rc(i)){const l=Kv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)})),new Vn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,i,o,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new Ut(e,0,Ee.min(),Ee.min(),Ee.min(),wn.empty(),0)}static newFoundDocument(e,t,i,o){return new Ut(e,1,t,Ee.min(),i,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Ee.min(),Ee.min(),wn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Ee.min(),Ee.min(),wn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.position=e,this.inclusive=t}}function by(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=de.comparator(de.fromName(c.referenceValue),t.key):i=Do(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Dy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{}class pt extends Gv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Ux(e,t,i):t==="array-contains"?new $x(e,i):t==="in"?new qx(e,i):t==="not-in"?new Hx(e,i):t==="array-contains-any"?new Wx(e,i):new pt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new zx(e,i):new Bx(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Do(t,this.value)):t!==null&&Vi(this.value)===Vi(t)&&this.matchesComparison(Do(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends Gv{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new jn(e,t)}matches(e){return Qv(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Qv(n){return n.op==="and"}function Yv(n){return jx(n)&&Qv(n)}function jx(n){for(const e of n.filters)if(e instanceof jn)return!1;return!0}function hf(n){if(n instanceof pt)return n.field.canonicalString()+n.op.toString()+Vo(n.value);if(Yv(n))return n.filters.map((e=>hf(e))).join(",");{const e=n.filters.map((t=>hf(t))).join(",");return`${n.op}(${e})`}}function Jv(n,e){return n instanceof pt?(function(i,o){return o instanceof pt&&i.op===o.op&&i.field.isEqual(o.field)&&pr(i.value,o.value)})(n,e):n instanceof jn?(function(i,o){return o instanceof jn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce(((l,c,f)=>l&&Jv(c,o.filters[f])),!0):!1})(n,e):void _e(19439)}function Xv(n){return n instanceof pt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Vo(t.value)}`})(n):n instanceof jn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Xv).join(" ,")+"}"})(n):"Filter"}class Ux extends pt{constructor(e,t,i){super(e,t,i),this.key=de.fromName(i.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class zx extends pt{constructor(e,t){super(e,"in",t),this.keys=Zv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Bx extends pt{constructor(e,t){super(e,"not-in",t),this.keys=Zv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Zv(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>de.fromName(i.referenceValue)))}class $x extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bf(t)&&cl(t.arrayValue,this.value)}}class qx extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cl(this.value.arrayValue,t)}}class Hx extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!cl(this.value.arrayValue,t)}}class Wx extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>cl(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,t=null,i=[],o=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=f,this.Te=null}}function Vy(n,e=null,t=[],i=[],o=null,l=null,c=null){return new Kx(n,e,t,i,o,l,c)}function $f(n){const e=Ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>hf(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),Bc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Vo(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Vo(i))).join(",")),e.Te=t}return e.Te}function qf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Fx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Jv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Dy(n.startAt,e.startAt)&&Dy(n.endAt,e.endAt)}function df(n){return de.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t=null,i=[],o=[],l=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=p,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Gx(n,e,t,i,o,l,c,f){return new Ho(n,e,t,i,o,l,c,f)}function Hf(n){return new Ho(n)}function Oy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qx(n){return de.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function e0(n){return n.collectionGroup!==null}function el(n){const e=Ie(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new vt(Pt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((y=>{y.isInequality()&&(f=f.add(y.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new hl(l,i))})),t.has(Pt.keyField().canonicalString())||e.Ee.push(new hl(Pt.keyField(),i))}return e.Ee}function lr(n){const e=Ie(n);return e.Ie||(e.Ie=Yx(e,el(n))),e.Ie}function Yx(n,e){if(n.limitType==="F")return Vy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new hl(o.field,l)}));const t=n.endAt?new yc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new yc(n.startAt.position,n.startAt.inclusive):null;return Vy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function ff(n,e){const t=n.filters.concat([e]);return new Ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Jx(n,e){const t=n.explicitOrderBy.concat([e]);return new Ho(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function pf(n,e,t){return new Ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qc(n,e){return qf(lr(n),lr(e))&&n.limitType===e.limitType}function t0(n){return`${$f(lr(n))}|lt:${n.limitType}`}function Eo(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((o=>Xv(o))).join(", ")}]`),Bc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((o=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(o))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((o=>Vo(o))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((o=>Vo(o))).join(",")),`Target(${i})`})(lr(n))}; limitType=${n.limitType})`}function Hc(n,e){return e.isFoundDocument()&&(function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):de.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(n,e)&&(function(i,o){for(const l of el(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(i,o){return!(i.startAt&&!(function(c,f,p){const y=by(c,f,p);return c.inclusive?y<=0:y<0})(i.startAt,el(i),o)||i.endAt&&!(function(c,f,p){const y=by(c,f,p);return c.inclusive?y>=0:y>0})(i.endAt,el(i),o))})(n,e)}function Xx(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function n0(n){return(e,t)=>{let i=!1;for(const o of el(n)){const l=Zx(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function Zx(n,e,t){const i=n.field.isKeyField()?de.comparator(e.key,t.key):(function(l,c,f){const p=c.data.field(l),y=f.data.field(l);return p!==null&&y!==null?Do(p,y):_e(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return _e(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,((t,i)=>{for(const[o,l]of i)e(o,l)}))}isEmpty(){return jv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=new rt(de.comparator);function Ur(){return eA}const r0=new rt(de.comparator);function Qa(...n){let e=r0;for(const t of n)e=e.insert(t.key,t);return e}function i0(n){let e=r0;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function ds(){return tl()}function s0(){return tl()}function tl(){return new As((n=>n.toString()),((n,e)=>n.isEqual(e)))}const tA=new rt(de.comparator),nA=new vt(de.comparator);function be(...n){let e=nA;for(const t of n)e=e.add(t);return e}const rA=new vt(Ne);function iA(){return rA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pc(e)?"-0":e}}function o0(n){return{integerValue:""+n}}function sA(n,e){return kx(e)?o0(e):Wf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this._=void 0}}function oA(n,e,t){return n instanceof dl?(function(o,l){const c={fields:{[Bv]:{stringValue:zv},[qv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&zf(l)&&(l=$c(l)),l&&(c.fields[$v]=l),{mapValue:c}})(t,e):n instanceof fl?l0(n,e):n instanceof pl?u0(n,e):(function(o,l){const c=a0(o,l),f=Ly(c)+Ly(o.Ae);return cf(c)&&cf(o.Ae)?o0(f):Wf(o.serializer,f)})(n,e)}function aA(n,e,t){return n instanceof fl?l0(n,e):n instanceof pl?u0(n,e):t}function a0(n,e){return n instanceof _c?(function(i){return cf(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class dl extends Wc{}class fl extends Wc{constructor(e){super(),this.elements=e}}function l0(n,e){const t=c0(e);for(const i of n.elements)t.some((o=>pr(o,i)))||t.push(i);return{arrayValue:{values:t}}}class pl extends Wc{constructor(e){super(),this.elements=e}}function u0(n,e){let t=c0(e);for(const i of n.elements)t=t.filter((o=>!pr(o,i)));return{arrayValue:{values:t}}}class _c extends Wc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ly(n){return ut(n.integerValue||n.doubleValue)}function c0(n){return Bf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t){this.field=e,this.transform=t}}function uA(n,e){return n.field.isEqual(e.field)&&(function(i,o){return i instanceof fl&&o instanceof fl||i instanceof pl&&o instanceof pl?bo(i.elements,o.elements,pr):i instanceof _c&&o instanceof _c?pr(i.Ae,o.Ae):i instanceof dl&&o instanceof dl})(n.transform,e.transform)}class cA{constructor(e,t){this.version=e,this.transformResults=t}}class Lr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Lr}static exists(e){return new Lr(void 0,e)}static updateTime(e){return new Lr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ic(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Kc{}function h0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new f0(n.key,Lr.none()):new Tl(n.key,n.data,Lr.none());{const t=n.data,i=wn.empty();let o=new vt(Pt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Rs(n.key,i,new Vn(o.toArray()),Lr.none())}}function hA(n,e,t){n instanceof Tl?(function(o,l,c){const f=o.value.clone(),p=Fy(o.fieldTransforms,l,c.transformResults);f.setAll(p),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Rs?(function(o,l,c){if(!ic(o.precondition,l))return void l.convertToUnknownDocument(c.version);const f=Fy(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(d0(o)),p.setAll(f),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function nl(n,e,t,i){return n instanceof Tl?(function(l,c,f,p){if(!ic(l.precondition,c))return f;const y=l.value.clone(),w=jy(l.fieldTransforms,p,c);return y.setAll(w),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null})(n,e,t,i):n instanceof Rs?(function(l,c,f,p){if(!ic(l.precondition,c))return f;const y=jy(l.fieldTransforms,p,c),w=c.data;return w.setAll(d0(l)),w.setAll(y),c.convertToFoundDocument(c.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((E=>E.field)))})(n,e,t,i):(function(l,c,f){return ic(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function dA(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=a0(i.transform,o||null);l!=null&&(t===null&&(t=wn.empty()),t.set(i.field,l))}return t||null}function My(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&bo(i,o,((l,c)=>uA(l,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Tl extends Kc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Rs extends Kc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function d0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Fy(n,e,t){const i=new Map;Ue(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,f=e.data.field(l.field);i.set(l.field,aA(c,f,t[o]))}return i}function jy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,oA(l,c,e))}return i}class f0 extends Kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fA extends Kc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&hA(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=nl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=nl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=s0();return this.mutations.forEach((o=>{const l=e.get(o.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(o.key)?null:f;const p=h0(c,f);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ee.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),be())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,((t,i)=>My(t,i)))&&bo(this.baseMutations,e.baseMutations,((t,i)=>My(t,i)))}}class Kf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Ue(e.mutations.length===i.length,58842,{me:e.mutations.length,fe:i.length});let o=(function(){return tA})();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new Kf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft,Ve;function yA(n){switch(n){case K.OK:return _e(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return _e(15467,{code:n})}}function p0(n){if(n===void 0)return jr("GRPC error has no .code"),K.UNKNOWN;switch(n){case ft.OK:return K.OK;case ft.CANCELLED:return K.CANCELLED;case ft.UNKNOWN:return K.UNKNOWN;case ft.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case ft.INTERNAL:return K.INTERNAL;case ft.UNAVAILABLE:return K.UNAVAILABLE;case ft.UNAUTHENTICATED:return K.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case ft.NOT_FOUND:return K.NOT_FOUND;case ft.ALREADY_EXISTS:return K.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return K.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case ft.ABORTED:return K.ABORTED;case ft.OUT_OF_RANGE:return K.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return K.UNIMPLEMENTED;case ft.DATA_LOSS:return K.DATA_LOSS;default:return _e(39323,{code:n})}}(Ve=ft||(ft={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=new Ri([4294967295,4294967295],0);function Uy(n){const e=_A().encode(n),t=new Cv;return t.update(e),new Uint8Array(t.digest())}function zy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ri([t,i],0),new Ri([o,l],0)]}class Gf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ya(`Invalid padding: ${t}`);if(i<0)throw new Ya(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ya(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ya(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Ri.fromNumber(this.ge)}ye(e,t,i){let o=e.add(t.multiply(Ri.fromNumber(i)));return o.compare(vA)===1&&(o=new Ri([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Uy(e),[i,o]=zy(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,o,l);if(!this.we(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Gf(l,o,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.ge===0)return;const t=Uy(e),[i,o]=zy(t);for(let l=0;l<this.hashCount;l++){const c=this.ye(i,o,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Il.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Gc(Ee.min(),o,new rt(Ne),Ur(),be())}}class Il{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Il(i,t,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t,i,o){this.be=e,this.removedTargetIds=t,this.key=i,this.De=o}}class m0{constructor(e,t){this.targetId=e,this.Ce=t}}class g0{constructor(e,t,i=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class By{constructor(){this.ve=0,this.Fe=$y(),this.Me=Nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=be(),t=be(),i=be();return this.Fe.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:_e(38017,{changeType:l})}})),new Il(this.Me,this.xe,e,t,i)}qe(){this.Oe=!1,this.Fe=$y()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class wA{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ur(),this.Je=Qu(),this.He=Qu(),this.Ze=new rt(Ne)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.qe(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:_e(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,o)=>{this.rt(o)&&t(o)}))}st(e){const t=e.targetId,i=e.Ce.count,o=this.ot(t);if(o){const l=o.target;if(df(l))if(i===0){const c=new de(l.path);this.et(t,c,Ut.newNoDocument(c,Ee.min()))}else Ue(i===1,20013,{expectedCount:i});else{const c=this._t(t);if(c!==i){const f=this.ut(e),p=f?this.ct(f,e,c):1;if(p!==0){this.it(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,y)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,f;try{c=Di(i).toUint8Array()}catch(p){if(p instanceof Uv)return _s("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Gf(c,o,l)}catch(p){return _s(p instanceof Ya?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.ge===0?null:f}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let o=0;return i.forEach((l=>{const c=this.Ge.ht(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.et(t,l,null),o++)})),o}Tt(e){const t=new Map;this.ze.forEach(((l,c)=>{const f=this.ot(c);if(f){if(l.current&&df(f.target)){const p=new de(f.target.path);this.Et(p).has(c)||this.It(c,p)||this.et(c,p,Ut.newNoDocument(p,e))}l.Be&&(t.set(c,l.ke()),l.qe())}}));let i=be();this.He.forEach(((l,c)=>{let f=!0;c.forEachWhile((p=>{const y=this.ot(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.je.forEach(((l,c)=>c.setReadTime(e)));const o=new Gc(e,t,this.Ze,this.je,i);return this.je=Ur(),this.Je=Qu(),this.He=Qu(),this.Ze=new rt(Ne),o}Ye(e,t){if(!this.rt(e))return;const i=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,i),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const o=this.nt(e);this.It(e,t)?o.Ke(t,1):o.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new By,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new vt(Ne),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new vt(Ne),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new By),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Qu(){return new rt(de.comparator)}function $y(){return new rt(de.comparator)}const EA={asc:"ASCENDING",desc:"DESCENDING"},TA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IA={and:"AND",or:"OR"};class SA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mf(n,e){return n.useProto3Json||Bc(e)?e:{value:e}}function vc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xA(n,e){return vc(n,e.toTimestamp())}function ur(n){return Ue(!!n,49232),Ee.fromTimestamp((function(t){const i=bi(t);return new Je(i.seconds,i.nanos)})(n))}function Qf(n,e){return gf(n,e).canonicalString()}function gf(n,e){const t=(function(o){return new Ke(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function _0(n){const e=Ke.fromString(n);return Ue(I0(e),10190,{key:e.toString()}),e}function yf(n,e){return Qf(n.databaseId,e.path)}function $d(n,e){const t=_0(e);if(t.get(1)!==n.databaseId.projectId)throw new se(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new de(w0(t))}function v0(n,e){return Qf(n.databaseId,e)}function AA(n){const e=_0(n);return e.length===4?Ke.emptyPath():w0(e)}function _f(n){return new Ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function w0(n){return Ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function qy(n,e,t){return{name:yf(n,e),fields:t.value.mapValue.fields}}function RA(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_e(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,w){return y.useProto3Json?(Ue(w===void 0||typeof w=="string",58123),Nt.fromBase64String(w||"")):(Ue(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Nt.fromUint8Array(w||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(y){const w=y.code===void 0?K.UNKNOWN:p0(y.code);return new se(w,y.message||"")})(c);t=new g0(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=$d(n,i.document.name),l=ur(i.document.updateTime),c=i.document.createTime?ur(i.document.createTime):Ee.min(),f=new wn({mapValue:{fields:i.document.fields}}),p=Ut.newFoundDocument(o,l,c,f),y=i.targetIds||[],w=i.removedTargetIds||[];t=new sc(y,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=$d(n,i.document),l=i.readTime?ur(i.readTime):Ee.min(),c=Ut.newNoDocument(o,l),f=i.removedTargetIds||[];t=new sc([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=$d(n,i.document),l=i.removedTargetIds||[];t=new sc([],l,o,null)}else{if(!("filter"in e))return _e(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new gA(o,l),f=i.targetId;t=new m0(f,c)}}return t}function CA(n,e){let t;if(e instanceof Tl)t={update:qy(n,e.key,e.value)};else if(e instanceof f0)t={delete:yf(n,e.key)};else if(e instanceof Rs)t={update:qy(n,e.key,e.data),updateMask:MA(e.fieldMask)};else{if(!(e instanceof fA))return _e(16599,{dt:e.type});t={verify:yf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof dl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof fl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof pl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof _c)return{fieldPath:c.field.canonicalString(),increment:f.Ae};throw _e(20930,{transform:c.transform})})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:xA(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:_e(27497)})(n,e.precondition)),t}function kA(n,e){return n&&n.length>0?(Ue(e!==void 0,14353),n.map((t=>(function(o,l){let c=o.updateTime?ur(o.updateTime):ur(l);return c.isEqual(Ee.min())&&(c=ur(l)),new cA(c,o.transformResults||[])})(t,e)))):[]}function PA(n,e){return{documents:[v0(n,e.path)]}}function NA(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=v0(n,o);const l=(function(y){if(y.length!==0)return T0(jn.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(y){if(y.length!==0)return y.map((w=>(function(R){return{field:To(R.field),direction:VA(R.dir)}})(w)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=mf(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ft:t,parent:o}}function bA(n){let e=AA(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Ue(i===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=(function(E){const R=E0(E);return R instanceof jn&&Yv(R)?R.getFilters():[R]})(t.where));let c=[];t.orderBy&&(c=(function(E){return E.map((R=>(function(W){return new hl(Io(W.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(R)))})(t.orderBy));let f=null;t.limit&&(f=(function(E){let R;return R=typeof E=="object"?E.value:E,Bc(R)?null:R})(t.limit));let p=null;t.startAt&&(p=(function(E){const R=!!E.before,j=E.values||[];return new yc(j,R)})(t.startAt));let y=null;return t.endAt&&(y=(function(E){const R=!E.before,j=E.values||[];return new yc(j,R)})(t.endAt)),Gx(e,o,c,l,f,"F",p,y)}function DA(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function E0(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Io(t.unaryFilter.field);return pt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Io(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Io(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Io(t.unaryFilter.field);return pt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _e(61313);default:return _e(60726)}})(n):n.fieldFilter!==void 0?(function(t){return pt.create(Io(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _e(58110);default:return _e(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return jn.create(t.compositeFilter.filters.map((i=>E0(i))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _e(1026)}})(t.compositeFilter.op))})(n):_e(30097,{filter:n})}function VA(n){return EA[n]}function OA(n){return TA[n]}function LA(n){return IA[n]}function To(n){return{fieldPath:n.canonicalString()}}function Io(n){return Pt.fromServerFormat(n.fieldPath)}function T0(n){return n instanceof pt?(function(t){if(t.op==="=="){if(Ny(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NAN"}};if(Py(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ny(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NAN"}};if(Py(t.value))return{unaryFilter:{field:To(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:To(t.field),op:OA(t.op),value:t.value}}})(n):n instanceof jn?(function(t){const i=t.getFilters().map((o=>T0(o)));return i.length===1?i[0]:{compositeFilter:{op:LA(t.op),filters:i}}})(n):_e(54877,{filter:n})}function MA(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function I0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function S0(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,i,o,l=Ee.min(),c=Ee.min(),f=Nt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.yt=e}}function jA(n){const e=bA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?pf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.bn=new zA}addToCollectionParentIndex(e,t){return this.bn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Ni.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Ni.min())}updateCollectionGroup(e,t,i){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class zA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new vt(Ke.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new vt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},x0=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(x0,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Oo(0)}static ar(){return new Oo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="LruGarbageCollector",BA=1048576;function Ky([n,e],[t,i]){const o=Ne(n,t);return o===0?Ne(e,i):o}class $A{constructor(e){this.Pr=e,this.buffer=new vt(Ky),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Ky(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){oe(Wy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qo(t)?oe(Wy,"Ignoring IndexedDB error during garbage collection: ",t):await $o(t)}await this.Ar(3e5)}))}}class HA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return G.resolve(zc.ce);const i=new $A(t);return this.Vr.forEachTarget(e,(o=>i.Ir(o.sequenceNumber))).next((()=>this.Vr.mr(e,(o=>i.Ir(o))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Hy)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hy):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,o,l,c,f,p,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),o=this.params.maximumSequenceNumbersToCollect):o=E,c=Date.now(),this.nthSequenceNumber(e,o)))).next((E=>(i=E,f=Date.now(),this.removeTargets(e,i,t)))).next((E=>(l=E,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((E=>(y=Date.now(),wo()<=Pe.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-w}ms
	Determined least recently used ${o} in `+(f-c)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${E} documents in `+(y-p)+`ms
Total Duration: ${y-w}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:E}))))}}function WA(n,e){return new HA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.changes=new As((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?G.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(i=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(i!==null&&nl(i.mutation,o,Vn.empty(),Je.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,be()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=be()){const o=ds();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,i).next((l=>{let c=Qa();return l.forEach(((f,p)=>{c=c.insert(f,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=ds();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,be())))}populateOverlays(e,t,i){const o=[];return i.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,o){let l=Ur();const c=tl(),f=(function(){return tl()})();return t.forEach(((p,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Rs)?l=l.insert(y.key,y):w!==void 0?(c.set(y.key,w.mutation.getFieldMask()),nl(w.mutation,y,w.mutation.getFieldMask(),Je.now())):c.set(y.key,Vn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((y,w)=>c.set(y,w))),t.forEach(((y,w)=>f.set(y,new GA(w,c.get(y)??null)))),f)))}recalculateAndSaveOverlays(e,t){const i=tl();let o=new rt(((c,f)=>c-f)),l=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((p=>{const y=t.get(p);if(y===null)return;let w=i.get(p)||Vn.empty();w=f.applyToLocalView(y,w),i.set(p,w);const E=(o.get(f.batchId)||be()).add(p);o=o.insert(f.batchId,E)}))})).next((()=>{const c=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,w=p.value,E=s0();w.forEach((R=>{if(!l.has(R)){const j=h0(t.get(R),i.get(R));j!==null&&E.set(R,j),l=l.add(R)}})),c.push(this.documentOverlayCache.saveOverlays(e,y,E))}return G.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,o){return Qx(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):e0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next((l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):G.resolve(ds());let f=al,p=l;return c.next((y=>G.forEach(y,((w,E)=>(f<E.largestBatchId&&(f=E.largestBatchId),l.get(w)?G.resolve():this.remoteDocumentCache.getEntry(e,w).next((R=>{p=p.insert(w,R)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,p,y,be()))).next((w=>({batchId:f,changes:i0(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((i=>{let o=Qa();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=Qa();return this.indexManager.getCollectionParents(e,l).next((f=>G.forEach(f,(p=>{const y=(function(E,R){return new Ho(R,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next((w=>{w.forEach(((E,R)=>{c=c.insert(E,R)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o)))).next((c=>{l.forEach(((p,y)=>{const w=y.getKey();c.get(w)===null&&(c=c.insert(w,Ut.newInvalidDocument(w)))}));let f=Qa();return c.forEach(((p,y)=>{const w=l.get(p);w!==void 0&&nl(w.mutation,y,Vn.empty(),Je.now()),Hc(t,y)&&(f=f.insert(p,y))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return G.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:ur(o.createTime)}})(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(o){return{name:o.name,query:jA(o.bundledQuery),readTime:ur(o.readTime)}})(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.overlays=new rt(de.comparator),this.Lr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ds();return G.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&i.set(o,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((o,l)=>{this.St(e,t,l)})),G.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Lr.get(i);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Lr.delete(i)),G.resolve()}getOverlaysForCollection(e,t,i){const o=ds(),l=t.length+1,c=new de(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new rt(((y,w)=>y-w));const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=ds(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=ds(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((y,w)=>f.set(y,w))),!(f.size()>=o)););return G.resolve(f)}St(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Lr.get(o.largestBatchId).delete(i.key);this.Lr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new mA(t,i));let l=this.Lr.get(t);l===void 0&&(l=be(),this.Lr.set(t,l)),this.Lr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.kr=new vt(St.qr),this.Kr=new vt(St.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new St(e,t);this.kr=this.kr.add(i),this.Kr=this.Kr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new St(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new de(new Ke([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Kr.forEachInRange([i,o],(c=>{this.Wr(c),l.push(c.key)})),l}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new de(new Ke([])),i=new St(t,e),o=new St(t,e+1);let l=be();return this.Kr.forEachInRange([i,o],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new St(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return de.comparator(e.key,t.key)||Ne(e.Jr,t.Jr)}static Ur(e,t){return Ne(e.Jr,t.Jr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new vt(St.qr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new pA(l,t,i,o);this.mutationQueue.push(c);for(const f of o)this.Hr=this.Hr.add(new St(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(c)}lookupMutationBatch(e,t){return G.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Uf:this.Yn-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Hr.forEachInRange([i,o],(c=>{const f=this.Zr(c.Jr);l.push(f)})),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new vt(Ne);return t.forEach((o=>{const l=new St(o,0),c=new St(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([l,c],(f=>{i=i.add(f.Jr)}))})),G.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;de.isDocumentKey(l)||(l=l.child(""));const c=new St(new de(l),0);let f=new vt(Ne);return this.Hr.forEachWhile((p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.Jr)),!0)}),c),G.resolve(this.Yr(f))}Yr(e){const t=[];return e.forEach((i=>{const o=this.Zr(i);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ue(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return G.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Hr=i}))}nr(e){}containsKey(e,t){const i=new St(t,0),o=this.Hr.firstAfterOrEqual(i);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.ti=e,this.docs=(function(){return new rt(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return G.resolve(i?i.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let i=Ur();return t.forEach((o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))})),G.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Ur();const c=t.path,f=new de(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||xx(Sx(w),i)<=0||(o.has(w.key)||Hc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,i,o){_e(9500)}ni(e,t){return G.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new tR(this)}getSize(e){return G.resolve(this.size)}}class tR extends KA{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,o)=>{o.isValidDocument()?t.push(this.Mr.addEntry(e,o)):this.Mr.removeEntry(i)})),G.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.persistence=e,this.ri=new As((t=>$f(t)),qf),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.ii=0,this.si=new Yf,this.targetCount=0,this.oi=Oo._r()}forEachTarget(e,t){return this.ri.forEach(((i,o)=>t(o))),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),G.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Oo(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.lr(t),G.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ri.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ri.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)})),G.waitFor(l).next((()=>o))}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return G.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),G.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((c=>{l.push(o.markPotentiallyOrphaned(e,c))})),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return G.resolve(i)}containsKey(e,t){return G.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,t){this._i={},this.overlays={},this.ai=new zc(0),this.ui=!1,this.ui=!0,this.ci=new XA,this.referenceDelegate=e(this),this.li=new nR(this),this.indexManager=new UA,this.remoteDocumentCache=(function(o){return new eR(o)})((i=>this.referenceDelegate.hi(i))),this.serializer=new FA(t),this.Pi=new YA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new JA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new ZA(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new rR(this.ai.next());return this.referenceDelegate.Ti(),i(o).next((l=>this.referenceDelegate.Ei(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ii(e,t){return G.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class rR extends Rx{constructor(e){super(),this.currentSequenceNumber=e}}class Jf{constructor(e){this.persistence=e,this.Ri=new Yf,this.Ai=null}static Vi(e){return new Jf(e)}get di(){if(this.Ai)return this.Ai;throw _e(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),G.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),G.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((o=>this.di.add(o.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.di.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.di,(i=>{const o=de.fromPath(i);return this.mi(e,o).next((l=>{l||t.removeEntry(o,Ee.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return G.or([()=>G.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class wc{constructor(e,t){this.persistence=e,this.fi=new As((i=>Px(i.path)),((i,o)=>i.isEqual(o))),this.garbageCollector=WA(this,t)}static Vi(e,t){return new wc(e,t)}Ti(){}Ei(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((o=>i+o))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return G.forEach(this.fi,((i,o)=>this.wr(e,i,o).next((l=>l?G.resolve():t(o)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ni(e,(c=>this.wr(e,c,t).next((f=>{f||(i++,l.removeEntry(c,Ee.min()))})))).next((()=>l.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),G.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),G.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=nc(e.data.value)),t}wr(e,t,i){return G.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.fi.get(t);return G.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Ts=i,this.Es=o}static Is(e,t){let i=be(),o=be();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Xf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return HS()?8:Cx(zt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.gs(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.ps(e,t,o,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new iR;return this.ys(e,t,c).next((f=>{if(l.result=f,this.As)return this.ws(e,t,c,f.size)}))})).next((()=>l.result))}ws(e,t,i,o){return i.documentReadCount<this.Vs?(wo()<=Pe.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),G.resolve()):(wo()<=Pe.DEBUG&&oe("QueryEngine","Query:",Eo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ds*o?(wo()<=Pe.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(t))):G.resolve())}gs(e,t){if(Oy(t))return G.resolve(null);let i=lr(t);return this.indexManager.getIndexType(e,i).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=pf(t,null,"F"),i=lr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=be(...l);return this.fs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const y=this.Ss(t,f);return this.bs(t,y,c,p.readTime)?this.gs(e,pf(t,null,"F")):this.Ds(e,y,t,p)}))))})))))}ps(e,t,i,o){return Oy(t)||o.isEqual(Ee.min())?G.resolve(null):this.fs.getDocuments(e,i).next((l=>{const c=this.Ss(t,l);return this.bs(t,c,i,o)?G.resolve(null):(wo()<=Pe.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Eo(t)),this.Ds(e,c,t,Ix(o,al)).next((f=>f)))}))}Ss(e,t){let i=new vt(n0(e));return t.forEach(((o,l)=>{Hc(e,l)&&(i=i.add(l))})),i}bs(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ys(e,t,i){return wo()<=Pe.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Eo(t)),this.fs.getDocumentsMatchingQuery(e,t,Ni.min(),i)}Ds(e,t,i,o){return this.fs.getDocumentsMatchingQuery(e,i,o).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="LocalStore",oR=3e8;class aR{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.vs=new rt(Ne),this.Fs=new As((l=>$f(l)),qf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QA(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function lR(n,e,t,i){return new aR(n,e,t,i)}async function R0(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next((l=>(o=l,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let p=be();for(const y of o){c.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(i,p).next((y=>({Ns:y,removedBatchIds:c,addedBatchIds:f})))}))}))}function uR(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const o=e.batch.keys(),l=t.xs.newChangeBuffer({trackRemovals:!0});return(function(f,p,y,w){const E=y.batch,R=E.keys();let j=G.resolve();return R.forEach((W=>{j=j.next((()=>w.getEntry(p,W))).next((q=>{const $=y.docVersions.get(W);Ue($!==null,48541),q.version.compareTo($)<0&&(E.applyToRemoteDocument(q,y),q.isValidDocument()&&(q.setReadTime(y.commitVersion),w.addEntry(q)))}))})),j.next((()=>f.mutationQueue.removeMutationBatch(p,E)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=be();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,o)))}))}function C0(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function cR(n,e){const t=Ie(n),i=e.snapshotVersion;let o=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.xs.newChangeBuffer({trackRemovals:!0});o=t.vs;const f=[];e.targetChanges.forEach(((w,E)=>{const R=o.get(E);if(!R)return;f.push(t.li.removeMatchingKeys(l,w.removedDocuments,E).next((()=>t.li.addMatchingKeys(l,w.addedDocuments,E))));let j=R.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?j=j.withResumeToken(Nt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):w.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(w.resumeToken,i)),o=o.insert(E,j),(function(q,$,H){return q.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=oR?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(R,j,w)&&f.push(t.li.updateTargetData(l,j))}));let p=Ur(),y=be();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))})),f.push(hR(l,c,e.documentUpdates).next((w=>{p=w.Bs,y=w.Ls}))),!i.isEqual(Ee.min())){const w=t.li.getLastRemoteSnapshotVersion(l).next((E=>t.li.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(w)}return G.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,y))).next((()=>p))})).then((l=>(t.vs=o,l)))}function hR(n,e,t){let i=be(),o=be();return t.forEach((l=>i=i.add(l))),e.getEntries(n,i).next((l=>{let c=Ur();return t.forEach(((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(Ee.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):oe(Zf,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)})),{Bs:c,Ls:o}}))}function dR(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=Uf),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function fR(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let o;return t.li.getTargetData(i,e).next((l=>l?(o=l,G.resolve(o)):t.li.allocateTargetId(i).next((c=>(o=new Si(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,o).next((()=>o)))))))})).then((i=>{const o=t.vs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function vf(n,e,t){const i=Ie(n),o=i.vs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,o)))}catch(c){if(!qo(c))throw c;oe(Zf,`Failed to update sequence numbers for target ${e}: ${c}`)}i.vs=i.vs.remove(e),i.Fs.delete(o.target)}function Gy(n,e,t){const i=Ie(n);let o=Ee.min(),l=be();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,y,w){const E=Ie(p),R=E.Fs.get(w);return R!==void 0?G.resolve(E.vs.get(R)):E.li.getTargetData(y,w)})(i,c,lr(e)).next((f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(c,f.targetId).next((p=>{l=p}))})).next((()=>i.Cs.getDocumentsMatchingQuery(c,e,t?o:Ee.min(),t?l:be()))).next((f=>(pR(i,Xx(e),f),{documents:f,ks:l})))))}function pR(n,e,t){let i=n.Ms.get(e)||Ee.min();t.forEach(((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),n.Ms.set(e,i)}class Qy{constructor(){this.activeTargetIds=iA()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mR{constructor(){this.vo=new Qy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Qy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="ConnectivityMonitor";class Jy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){oe(Yy,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){oe(Yy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu=null;function wf(){return Yu===null?Yu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yu++,"0x"+Yu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="RestConnection",yR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class _R{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.$o=this.databaseId.database===mc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const c=wf(),f=this.Qo(e,t.toUriEncodedString());oe(qd,`Sending RPC '${e}' ${c}:`,f,i);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,o,l);const{host:y}=new URL(f),w=wl(y);return this.zo(e,f,p,i,w).then((E=>(oe(qd,`Received RPC '${e}' ${c}: `,E),E)),(E=>{throw _s(qd,`RPC '${e}' ${c} failed with error: `,E,"url: ",f,"request:",i),E}))}jo(e,t,i,o,l,c){return this.Wo(e,t,i,o,l)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),i&&i.headers.forEach(((o,l)=>e[l]=o))}Qo(e,t){const i=yR[e];let o=`${this.Ko}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection",Ha=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(o){setTimeout((()=>{throw o}),0)}}))};class xo extends _R{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!xo.c_){const e=bv();Ha(e,Nv.STAT_EVENT,(t=>{t.stat===af.PROXY?oe(Ft,"STAT_EVENT: detected buffering proxy"):t.stat===af.NOPROXY&&oe(Ft,"STAT_EVENT: detected no buffering proxy")})),xo.c_=!0}}zo(e,t,i,o,l){const c=wf();return new Promise(((f,p)=>{const y=new kv;y.setWithCredentials(!0),y.listenOnce(Pv.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case tc.NO_ERROR:const E=y.getResponseJson();oe(Ft,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(E)),f(E);break;case tc.TIMEOUT:oe(Ft,`RPC '${e}' ${c} timed out`),p(new se(K.DEADLINE_EXCEEDED,"Request time out"));break;case tc.HTTP_ERROR:const R=y.getStatus();if(oe(Ft,`RPC '${e}' ${c} failed with status:`,R,"response text:",y.getResponseText()),R>0){let j=y.getResponseJson();Array.isArray(j)&&(j=j[0]);const W=j==null?void 0:j.error;if(W&&W.status&&W.message){const q=(function(H){const Z=H.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(Z)>=0?Z:K.UNKNOWN})(W.status);p(new se(q,W.message))}else p(new se(K.UNKNOWN,"Server responded with status "+y.getStatus()))}else p(new se(K.UNAVAILABLE,"Connection failed."));break;default:_e(9055,{l_:e,streamId:c,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{oe(Ft,`RPC '${e}' ${c} completed.`)}}));const w=JSON.stringify(o);oe(Ft,`RPC '${e}' ${c} sending request:`,o),y.send(t,"POST",w,i,15)}))}T_(e,t,i){const o=wf(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,t,i),f.encodeInitMessageHeaders=!0;const y=l.join("");oe(Ft,`Creating RPC '${e}' stream ${o}: ${y}`,f);const w=c.createWebChannel(y,f);this.E_(w);let E=!1,R=!1;const j=new vR({Jo:W=>{R?oe(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,W):(E||(oe(Ft,`Opening RPC '${e}' stream ${o} transport.`),w.open(),E=!0),oe(Ft,`RPC '${e}' stream ${o} sending:`,W),w.send(W))},Ho:()=>w.close()});return Ha(w,Ga.EventType.OPEN,(()=>{R||(oe(Ft,`RPC '${e}' stream ${o} transport opened.`),j.i_())})),Ha(w,Ga.EventType.CLOSE,(()=>{R||(R=!0,oe(Ft,`RPC '${e}' stream ${o} transport closed`),j.o_(),this.I_(w))})),Ha(w,Ga.EventType.ERROR,(W=>{R||(R=!0,_s(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),j.o_(new se(K.UNAVAILABLE,"The operation could not be completed")))})),Ha(w,Ga.EventType.MESSAGE,(W=>{var q;if(!R){const $=W.data[0];Ue(!!$,16349);const H=$,Z=(H==null?void 0:H.error)||((q=H[0])==null?void 0:q.error);if(Z){oe(Ft,`RPC '${e}' stream ${o} received error:`,Z);const ne=Z.status;let ve=(function(P){const x=ft[P];if(x!==void 0)return p0(x)})(ne),ge=Z.message;ne==="NOT_FOUND"&&ge.includes("database")&&ge.includes("does not exist")&&ge.includes(this.databaseId.database)&&_s(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ve===void 0&&(ve=K.INTERNAL,ge="Unknown error status: "+ne+" with message "+Z.message),R=!0,j.o_(new se(ve,ge)),w.close()}else oe(Ft,`RPC '${e}' stream ${o} received:`,$),j.__($)}})),xo.u_(),setTimeout((()=>{j.s_()}),0),j}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Dv()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(n){return new xo(n)}function Hd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n){return new SA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xo.c_=!1;class k0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=o,this.V_=l,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="PersistentStream";class P0{constructor(e,t,i,o,l,c,f,p){this.Ci=e,this.S_=i,this.b_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new k0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(jr(t.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,o])=>{this.D_===t&&this.G_(i,o)}),(i=>{e((()=>{const o=new se(K.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(o)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((o=>{i((()=>this.z_(o)))})),this.stream.onMessage((o=>{i((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return oe(Xy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(oe(Xy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ER extends P0{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=RA(this.serializer,e),i=(function(l){if(!("targetChange"in l))return Ee.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ee.min():c.readTime?ur(c.readTime):Ee.min()})(e);return this.listener.H_(t,i)}Z_(e){const t={};t.database=_f(this.serializer),t.addTarget=(function(l,c){let f;const p=c.target;if(f=df(p)?{documents:PA(l,p)}:{query:NA(l,p).ft},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=y0(l,c.resumeToken);const y=mf(l,c.expectedCount);y!==null&&(f.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ee.min())>0){f.readTime=vc(l,c.snapshotVersion.toTimestamp());const y=mf(l,c.expectedCount);y!==null&&(f.expectedCount=y)}return f})(this.serializer,e);const i=DA(this.serializer,e);i&&(t.labels=i),this.q_(t)}X_(e){const t={};t.database=_f(this.serializer),t.removeTarget=e,this.q_(t)}}class TR extends P0{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=kA(e.writeResults,e.commitTime),i=ur(e.commitTime);return this.listener.na(i,t)}ra(){const e={};e.database=_f(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>CA(this.serializer,i)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{}class SR extends IR{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new se(K.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Wo(e,gf(t,i),o,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new se(K.UNKNOWN,l.toString())}))}jo(e,t,i,o,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.jo(e,gf(t,i),o,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new se(K.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function xR(n,e,t,i){return new SR(n,e,t,i)}class AR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(jr(t),this.aa=!1):oe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="RemoteStore";class RR{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=l,this.Aa.Mo((c=>{i.enqueueAndForget((async()=>{Cs(this)&&(oe(vs,"Restarting streams for network reachability change."),await(async function(p){const y=Ie(p);y.Ia.add(4),await Sl(y),y.Va.set("Unknown"),y.Ia.delete(4),await Yc(y)})(this))}))})),this.Va=new AR(i,o)}}async function Yc(n){if(Cs(n))for(const e of n.Ra)await e(!0)}async function Sl(n){for(const e of n.Ra)await e(!1)}function N0(n,e){const t=Ie(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),rp(t)?np(t):Wo(t).O_()&&tp(t,e))}function ep(n,e){const t=Ie(n),i=Wo(t);t.Ea.delete(e),i.O_()&&b0(t,e),t.Ea.size===0&&(i.O_()?i.L_():Cs(t)&&t.Va.set("Unknown"))}function tp(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wo(n).Z_(e)}function b0(n,e){n.da.$e(e),Wo(n).X_(e)}function np(n){n.da=new wA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Wo(n).start(),n.Va.ua()}function rp(n){return Cs(n)&&!Wo(n).x_()&&n.Ea.size>0}function Cs(n){return Ie(n).Ia.size===0}function D0(n){n.da=void 0}async function CR(n){n.Va.set("Online")}async function kR(n){n.Ea.forEach(((e,t)=>{tp(n,e)}))}async function PR(n,e){D0(n),rp(n)?(n.Va.ha(e),np(n)):n.Va.set("Unknown")}async function NR(n,e,t){if(n.Va.set("Online"),e instanceof g0&&e.state===2&&e.cause)try{await(async function(o,l){const c=l.cause;for(const f of l.targetIds)o.Ea.has(f)&&(await o.remoteSyncer.rejectListen(f,c),o.Ea.delete(f),o.da.removeTarget(f))})(n,e)}catch(i){oe(vs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Ec(n,i)}else if(e instanceof sc?n.da.Xe(e):e instanceof m0?n.da.st(e):n.da.tt(e),!t.isEqual(Ee.min()))try{const i=await C0(n.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.da.Tt(c);return f.targetChanges.forEach(((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.Ea.get(y);w&&l.Ea.set(y,w.withResumeToken(p.resumeToken,c))}})),f.targetMismatches.forEach(((p,y)=>{const w=l.Ea.get(p);if(!w)return;l.Ea.set(p,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),b0(l,p);const E=new Si(w.target,p,y,w.sequenceNumber);tp(l,E)})),l.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(i){oe(vs,"Failed to raise snapshot:",i),await Ec(n,i)}}async function Ec(n,e,t){if(!qo(e))throw e;n.Ia.add(1),await Sl(n),n.Va.set("Offline"),t||(t=()=>C0(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{oe(vs,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Yc(n)}))}function V0(n,e){return e().catch((t=>Ec(n,t,e)))}async function Jc(n){const e=Ie(n),t=Oi(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Uf;for(;bR(e);)try{const o=await dR(e.localStore,i);if(o===null){e.Ta.length===0&&t.L_();break}i=o.batchId,DR(e,o)}catch(o){await Ec(e,o)}O0(e)&&L0(e)}function bR(n){return Cs(n)&&n.Ta.length<10}function DR(n,e){n.Ta.push(e);const t=Oi(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function O0(n){return Cs(n)&&!Oi(n).x_()&&n.Ta.length>0}function L0(n){Oi(n).start()}async function VR(n){Oi(n).ra()}async function OR(n){const e=Oi(n);for(const t of n.Ta)e.ea(t.mutations)}async function LR(n,e,t){const i=n.Ta.shift(),o=Kf.from(i,e,t);await V0(n,(()=>n.remoteSyncer.applySuccessfulWrite(o))),await Jc(n)}async function MR(n,e){e&&Oi(n).Y_&&await(async function(i,o){if((function(c){return yA(c)&&c!==K.ABORTED})(o.code)){const l=i.Ta.shift();Oi(i).B_(),await V0(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Jc(i)}})(n,e),O0(n)&&L0(n)}async function Zy(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),oe(vs,"RemoteStore received new credentials");const i=Cs(t);t.Ia.add(3),await Sl(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Yc(t)}async function FR(n,e){const t=Ie(n);e?(t.Ia.delete(2),await Yc(t)):e||(t.Ia.add(2),await Sl(t),t.Va.set("Unknown"))}function Wo(n){return n.ma||(n.ma=(function(t,i,o){const l=Ie(t);return l.sa(),new ER(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:CR.bind(null,n),Yo:kR.bind(null,n),t_:PR.bind(null,n),H_:NR.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),rp(n)?np(n):n.Va.set("Unknown")):(await n.ma.stop(),D0(n))}))),n.ma}function Oi(n){return n.fa||(n.fa=(function(t,i,o){const l=Ie(t);return l.sa(),new TR(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:VR.bind(null,n),t_:MR.bind(null,n),ta:OR.bind(null,n),na:LR.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Jc(n)):(await n.fa.stop(),n.Ta.length>0&&(oe(vs,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,f=new ip(e,t,c,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sp(n,e){if(jr("AsyncQueue",`${e}: ${n}`),qo(n))return new se(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||de.comparator(t.key,i.key):(t,i)=>de.comparator(t.key,i.key),this.keyedMap=Qa(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ao;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.ga=new rt(de.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):_e(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Lo{constructor(e,t,i,o,l,c,f,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new Lo(e,t,Ao.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class UR{constructor(){this.queries=t_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const o=Ie(t),l=o.queries;o.queries=t_(),l.forEach(((c,f)=>{for(const p of f.Sa)p.onError(i)}))})(this,new se(K.ABORTED,"Firestore shutting down"))}}function t_(){return new As((n=>t0(n)),qc)}async function zR(n,e){const t=Ie(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.ba()&&e.Da()&&(i=2):(l=new jR,i=e.Da()?0:1);try{switch(i){case 0:l.wa=await t.onListen(o,!0);break;case 1:l.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const f=sp(c,`Initialization of query '${Eo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.Sa.push(e),e.va(t.onlineState),l.wa&&e.Fa(l.wa)&&op(t)}async function BR(n,e){const t=Ie(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?o=e.Da()?0:1:!l.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function $R(n,e){const t=Ie(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const f of c.Sa)f.Fa(o)&&(i=!0);c.wa=o}}i&&op(t)}function qR(n,e,t){const i=Ie(n),o=i.queries.get(e);if(o)for(const l of o.Sa)l.onError(t);i.queries.delete(e)}function op(n){n.Ca.forEach((e=>{e.next()}))}var Ef,n_;(n_=Ef||(Ef={})).Ma="default",n_.Cache="cache";class HR{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Lo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ef.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.key=e}}class F0{constructor(e){this.key=e}}class WR{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=be(),this.mutatedKeys=be(),this.eu=n0(e),this.tu=new Ao(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new e_,o=t?t.tu:this.tu;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,E)=>{const R=o.get(w),j=Hc(this.query,E)?E:null,W=!!R&&this.mutatedKeys.has(R.key),q=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let $=!1;R&&j?R.data.isEqual(j.data)?W!==q&&(i.track({type:3,doc:j}),$=!0):this.su(R,j)||(i.track({type:2,doc:j}),$=!0,(p&&this.eu(j,p)>0||y&&this.eu(j,y)<0)&&(f=!0)):!R&&j?(i.track({type:0,doc:j}),$=!0):R&&!j&&(i.track({type:1,doc:R}),$=!0,(p||y)&&(f=!0)),$&&(j?(c=c.add(j),l=q?l.add(w):l.delete(w)):(c=c.delete(w),l=l.delete(w)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const w=this.query.limitType==="F"?c.last():c.first();c=c.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{tu:c,iu:i,bs:f,mutatedKeys:l}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((w,E)=>(function(j,W){const q=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e(20277,{Vt:$})}};return q(j)-q(W)})(w.type,E.type)||this.eu(w.doc,E.doc))),this.ou(i),o=o??!1;const f=t&&!o?this._u():[],p=this.Ya.size===0&&this.current&&!o?1:0,y=p!==this.Xa;return this.Xa=p,c.length!==0||y?{snapshot:new Lo(this.query,e.tu,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:f}:{au:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new e_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=be(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new F0(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new M0(i))})),t}cu(e){this.Za=e.ks,this.Ya=be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Lo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ap="SyncEngine";class KR{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class GR{constructor(e){this.key=e,this.hu=!1}}class QR{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new As((f=>t0(f)),qc),this.Eu=new Map,this.Iu=new Set,this.Ru=new rt(de.comparator),this.Au=new Map,this.Vu=new Yf,this.du={},this.mu=new Map,this.fu=Oo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function YR(n,e,t=!0){const i=q0(n);let o;const l=i.Tu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.lu()):o=await j0(i,e,t,!0),o}async function JR(n,e){const t=q0(n);await j0(t,e,!0,!1)}async function j0(n,e,t,i){const o=await fR(n.localStore,lr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await XR(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&N0(n.remoteStore,o),f}async function XR(n,e,t,i,o){n.pu=(E,R,j)=>(async function(q,$,H,Z){let ne=$.view.ru(H);ne.bs&&(ne=await Gy(q.localStore,$.query,!1).then((({documents:P})=>$.view.ru(P,ne))));const ve=Z&&Z.targetChanges.get($.targetId),ge=Z&&Z.targetMismatches.get($.targetId)!=null,Se=$.view.applyChanges(ne,q.isPrimaryClient,ve,ge);return i_(q,$.targetId,Se.au),Se.snapshot})(n,E,R,j);const l=await Gy(n.localStore,e,!0),c=new WR(e,l.ks),f=c.ru(l.documents),p=Il.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(f,n.isPrimaryClient,p);i_(n,t,y.au);const w=new KR(e,t,c);return n.Tu.set(e,w),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),y.snapshot}async function ZR(n,e,t){const i=Ie(n),o=i.Tu.get(e),l=i.Eu.get(o.targetId);if(l.length>1)return i.Eu.set(o.targetId,l.filter((c=>!qc(c,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await vf(i.localStore,o.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(o.targetId),t&&ep(i.remoteStore,o.targetId),Tf(i,o.targetId)})).catch($o)):(Tf(i,o.targetId),await vf(i.localStore,o.targetId,!0))}async function eC(n,e){const t=Ie(n),i=t.Tu.get(e),o=t.Eu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),ep(t.remoteStore,i.targetId))}async function tC(n,e,t){const i=lC(n);try{const o=await(function(c,f){const p=Ie(c),y=Je.now(),w=f.reduce(((j,W)=>j.add(W.key)),be());let E,R;return p.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let W=Ur(),q=be();return p.xs.getEntries(j,w).next(($=>{W=$,W.forEach(((H,Z)=>{Z.isValidDocument()||(q=q.add(H))}))})).next((()=>p.localDocuments.getOverlayedDocuments(j,W))).next(($=>{E=$;const H=[];for(const Z of f){const ne=dA(Z,E.get(Z.key).overlayedDocument);ne!=null&&H.push(new Rs(Z.key,ne,Kv(ne.value.mapValue),Lr.exists(!0)))}return p.mutationQueue.addMutationBatch(j,y,H,f)})).next(($=>{R=$;const H=$.applyToLocalDocumentSet(E,q);return p.documentOverlayCache.saveOverlays(j,$.batchId,H)}))})).then((()=>({batchId:R.batchId,changes:i0(E)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),(function(c,f,p){let y=c.du[c.currentUser.toKey()];y||(y=new rt(Ne)),y=y.insert(f,p),c.du[c.currentUser.toKey()]=y})(i,o.batchId,t),await xl(i,o.changes),await Jc(i.remoteStore)}catch(o){const l=sp(o,"Failed to persist write");t.reject(l)}}async function U0(n,e){const t=Ie(n);try{const i=await cR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const c=t.Au.get(l);c&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?c.hu=!0:o.modifiedDocuments.size>0?Ue(c.hu,14607):o.removedDocuments.size>0&&(Ue(c.hu,42227),c.hu=!1))})),await xl(t,i,e)}catch(i){await $o(i)}}function r_(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Tu.forEach(((l,c)=>{const f=c.view.va(e);f.snapshot&&o.push(f.snapshot)})),(function(c,f){const p=Ie(c);p.onlineState=f;let y=!1;p.queries.forEach(((w,E)=>{for(const R of E.Sa)R.va(f)&&(y=!0)})),y&&op(p)})(i.eventManager,e),o.length&&i.Pu.H_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function nC(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Au.get(e),l=o&&o.key;if(l){let c=new rt(de.comparator);c=c.insert(l,Ut.newNoDocument(l,Ee.min()));const f=be().add(l),p=new Gc(Ee.min(),new Map,new rt(Ne),c,f);await U0(i,p),i.Ru=i.Ru.remove(l),i.Au.delete(e),lp(i)}else await vf(i.localStore,e,!1).then((()=>Tf(i,e,t))).catch($o)}async function rC(n,e){const t=Ie(n),i=e.batch.batchId;try{const o=await uR(t.localStore,e);B0(t,i,null),z0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await xl(t,o)}catch(o){await $o(o)}}async function iC(n,e,t){const i=Ie(n);try{const o=await(function(c,f){const p=Ie(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let w;return p.mutationQueue.lookupMutationBatch(y,f).next((E=>(Ue(E!==null,37113),w=E.keys(),p.mutationQueue.removeMutationBatch(y,E)))).next((()=>p.mutationQueue.performConsistencyCheck(y))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w))).next((()=>p.localDocuments.getDocuments(y,w)))}))})(i.localStore,e);B0(i,e,t),z0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await xl(i,o)}catch(o){await $o(o)}}function z0(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function B0(n,e,t){const i=Ie(n);let o=i.du[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.du[i.currentUser.toKey()]=o}}function Tf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Eu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||$0(n,i)}))}function $0(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(ep(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),lp(n))}function i_(n,e,t){for(const i of t)i instanceof M0?(n.Vu.addReference(i.key,e),sC(n,i)):i instanceof F0?(oe(ap,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||$0(n,i.key)):_e(19791,{wu:i})}function sC(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(i)||(oe(ap,"New document in limbo: "+t),n.Iu.add(i),lp(n))}function lp(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new de(Ke.fromString(e)),i=n.fu.next();n.Au.set(i,new GR(t)),n.Ru=n.Ru.insert(t,i),N0(n.remoteStore,new Si(lr(Hf(t.path)),i,"TargetPurposeLimboResolution",zc.ce))}}async function xl(n,e,t){const i=Ie(n),o=[],l=[],c=[];i.Tu.isEmpty()||(i.Tu.forEach(((f,p)=>{c.push(i.pu(p,e,t).then((y=>{var w;if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))==null?void 0:w.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Xf.Is(p.targetId,y);l.push(E)}})))})),await Promise.all(c),i.Pu.H_(o),await(async function(p,y){const w=Ie(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>G.forEach(y,(R=>G.forEach(R.Ts,(j=>w.persistence.referenceDelegate.addReference(E,R.targetId,j))).next((()=>G.forEach(R.Es,(j=>w.persistence.referenceDelegate.removeReference(E,R.targetId,j)))))))))}catch(E){if(!qo(E))throw E;oe(Zf,"Failed to update sequence numbers: "+E)}for(const E of y){const R=E.targetId;if(!E.fromCache){const j=w.vs.get(R),W=j.snapshotVersion,q=j.withLastLimboFreeSnapshotVersion(W);w.vs=w.vs.insert(R,q)}}})(i.localStore,l))}async function oC(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){oe(ap,"User change. New user:",e.toKey());const i=await R0(t.localStore,e);t.currentUser=e,(function(l,c){l.mu.forEach((f=>{f.forEach((p=>{p.reject(new se(K.CANCELLED,c))}))})),l.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await xl(t,i.Ns)}}function aC(n,e){const t=Ie(n),i=t.Au.get(e);if(i&&i.hu)return be().add(i.key);{let o=be();const l=t.Eu.get(e);if(!l)return o;for(const c of l){const f=t.Tu.get(c);o=o.unionWith(f.view.nu)}return o}}function q0(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=U0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nC.bind(null,e),e.Pu.H_=$R.bind(null,e.eventManager),e.Pu.yu=qR.bind(null,e.eventManager),e}function lC(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iC.bind(null,e),e}class Tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return lR(this.persistence,new sR,e.initialUser,this.serializer)}Cu(e){return new A0(Jf.Vi,this.serializer)}Du(e){return new mR}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tc.provider={build:()=>new Tc};class uC extends Tc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ue(this.persistence.referenceDelegate instanceof wc,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new qA(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new A0((i=>wc.Vi(i,t)),this.serializer)}}class If{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>r_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=oC.bind(null,this.syncEngine),await FR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new UR})()}createDatastore(e){const t=Qc(e.databaseInfo.databaseId),i=wR(e.databaseInfo);return xR(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,o,l,c,f){return new RR(i,o,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>r_(this.syncEngine,t,0)),(function(){return Jy.v()?new Jy:new gR})())}createSyncEngine(e,t){return(function(o,l,c,f,p,y,w){const E=new QR(o,l,c,f,p,y);return w&&(E.gu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Ie(o);oe(vs,"RemoteStore shutting down."),l.Ia.add(5),await Sl(l),l.Aa.shutdown(),l.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}If.provider={build:()=>new If};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="FirestoreClient";class hC{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=o,this.user=jt.UNAUTHENTICATED,this.clientId=jf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,(async c=>{oe(Li,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(i,(c=>(oe(Li,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=sp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Wd(n,e){n.asyncQueue.verifyOperationInProgress(),oe(Li,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async o=>{i.isEqual(o)||(await R0(e.localStore,o),i=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function s_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await dC(n);oe(Li,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Zy(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,o)=>Zy(e.remoteStore,o))),n._onlineComponents=e}async function dC(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe(Li,"Using user provided OfflineComponentProvider");try{await Wd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;_s("Error using user provided cache. Falling back to memory cache: "+t),await Wd(n,new Tc)}}else oe(Li,"Using default OfflineComponentProvider"),await Wd(n,new uC(void 0));return n._offlineComponents}async function H0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe(Li,"Using user provided OnlineComponentProvider"),await s_(n,n._uninitializedComponentsProvider._online)):(oe(Li,"Using default OnlineComponentProvider"),await s_(n,new If))),n._onlineComponents}function fC(n){return H0(n).then((e=>e.syncEngine))}async function o_(n){const e=await H0(n),t=e.eventManager;return t.onListen=YR.bind(null,e.syncEngine),t.onUnlisten=ZR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=JR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=eC.bind(null,e.syncEngine),t}function pC(n,e,t,i){const o=new cC(i),l=new HR(e,o,t);return n.asyncQueue.enqueueAndForget((async()=>zR(await o_(n),l))),()=>{o.Nu(),n.asyncQueue.enqueueAndForget((async()=>BR(await o_(n),l)))}}function mC(n,e){const t=new ms;return n.asyncQueue.enqueueAndForget((async()=>tC(await fC(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="ComponentProvider",a_=new Map;function yC(n,e,t,i,o){return new Dx(n,e,t,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,W0(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="firestore.googleapis.com",l_=!0;class u_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new se(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=K0,this.ssl=l_}else this.host=e.host,this.ssl=e.ssl??l_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=x0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BA)throw new se(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Tx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=W0(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new se(K.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,o){return i.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new u_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new u_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new dx;switch(i.type){case"firstParty":return new gx(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new se(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=a_.get(t);i&&(oe(gC,"Removing Datastore"),a_.delete(t),i.terminate())})(this),Promise.resolve()}}function _C(n,e,t,i={}){var y;n=Xa(n,Xc);const o=wl(e),l=n._getSettings(),c={...l,emulatorOptions:n._getEmulatorOptions()},f=`${e}:${t}`;o&&Ev(`https://${f}`),l.host!==K0&&l.host!==f&&_s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...l,host:f,ssl:o,emulatorOptions:i};if(!Pi(p,c)&&(n._setSettings(p),i.mockUserToken)){let w,E;if(typeof i.mockUserToken=="string")w=i.mockUserToken,E=jt.MOCK_USER;else{w=jS(i.mockUserToken,(y=n._app)==null?void 0:y.options.projectId);const R=i.mockUserToken.sub||i.mockUserToken.user_id;if(!R)throw new se(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new jt(R)}n._authCredentials=new fx(new Ov(w,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ks(this.firestore,e,this._query)}}class _t{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}toJSON(){return{type:_t._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(El(t,_t._jsonSchema))return new _t(e,i||null,new de(Ke.fromString(t.referencePath)))}}_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:mt("string",_t._jsonSchemaVersion),referencePath:mt("string")};class Ci extends ks{constructor(e,t,i){super(e,t,Hf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new de(e))}withConverter(e){return new Ci(this.firestore,e,this._path)}}function G0(n,e,...t){if(n=wt(n),Lv("collection","path",e),n instanceof Xc){const i=Ke.fromString(e,...t);return Ey(i),new Ci(n,null,i)}{if(!(n instanceof _t||n instanceof Ci))throw new se(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return Ey(i),new Ci(n.firestore,null,i)}}function vC(n,e,...t){if(n=wt(n),arguments.length===1&&(e=jf.newId()),Lv("doc","path",e),n instanceof Xc){const i=Ke.fromString(e,...t);return wy(i),new _t(n,null,new de(i))}{if(!(n instanceof _t||n instanceof Ci))throw new se(K.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return wy(i),new _t(n.firestore,n instanceof Ci?n.converter:null,new de(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="AsyncQueue";class h_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new k0(this,"async_queue_retry"),this._c=()=>{const i=Hd();i&&oe(c_,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Hd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Hd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ms;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!qo(e))throw e;oe(c_,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,jr("INTERNAL UNHANDLED ERROR: ",d_(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=ip.createAndSchedule(this,e,t,i,(l=>this.hc(l)));return this.tc.push(o),o}uc(){this.nc&&_e(47125,{Pc:d_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function d_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ic extends Xc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new h_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new h_(e),this._firestoreClient=void 0,await e}}}function wC(n,e){const t=typeof n=="object"?n:Mf(),i=typeof n=="string"?n:mc,o=Ss(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=MS("firestore");l&&_C(o,...l)}return o}function Q0(n){if(n._terminated)throw new se(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||EC(n),n._firestoreClient}function EC(n){var i,o,l,c;const e=n._freezeSettings(),t=yC(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(o=n._app)==null?void 0:o.options.apiKey,e);n._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((c=e.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new hC(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(p){const y=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(y),_online:y}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this._byteString=e}static fromBase64String(e){try{return new En(Nt.fromBase64String(e))}catch(t){throw new se(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new En(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:En._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(El(e,En._jsonSchema))return En.fromBase64String(e.bytes)}}En._jsonSchemaVersion="firestore/bytes/1.0",En._jsonSchema={type:mt("string",En._jsonSchemaVersion),bytes:mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cr._jsonSchemaVersion}}static fromJSON(e){if(El(e,cr._jsonSchema))return new cr(e.latitude,e.longitude)}}cr._jsonSchemaVersion="firestore/geoPoint/1.0",cr._jsonSchema={type:mt("string",cr._jsonSchemaVersion),latitude:mt("number"),longitude:mt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(El(e,Ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ln(e.vectorValues);throw new se(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ln._jsonSchemaVersion="firestore/vectorValue/1.0",Ln._jsonSchema={type:mt("string",Ln._jsonSchemaVersion),vectorValues:mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=/^__.*__$/;class IC{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Rs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Tl(e,this.data,t,this.fieldTransforms)}}function J0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{dataSource:n})}}class cp{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new cp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.mc(e),i}fc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),i=this.i({path:t,arrayElement:!1});return i.Ac(),i}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Sc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(J0(this.dataSource)&&TC.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class SC{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Qc(e)}A(e,t,i,o=!1){return new cp({dataSource:e,methodName:t,targetDoc:i,path:Pt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function X0(n){const e=n._freezeSettings(),t=Qc(n._databaseId);return new SC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xC(n,e,t,i,o,l={}){const c=n.A(l.merge||l.mergeFields?2:0,e,t,o);tw("Data must be an object, but it was:",c,i);const f=Z0(i,c);let p,y;if(l.merge)p=new Vn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const w=[];for(const E of l.mergeFields){const R=Zc(e,E,t);if(!c.contains(R))throw new se(K.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);kC(w,R)||w.push(R)}p=new Vn(w),y=c.fieldTransforms.filter((E=>p.covers(E.field)))}else p=null,y=c.fieldTransforms;return new IC(new wn(f),p,y)}class hp extends up{_toFieldTransform(e){return new lA(e.path,new dl)}isEqual(e){return e instanceof hp}}function AC(n,e,t,i=!1){return dp(t,n.A(i?4:3,e))}function dp(n,e){if(ew(n=wt(n)))return tw("Unsupported field value:",e,n),Z0(n,e);if(n instanceof up)return(function(i,o){if(!J0(o.dataSource))throw o.yc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.yc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(i,o){const l=[];let c=0;for(const f of i){let p=dp(f,o.gc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(n,e)}return(function(i,o){if((i=wt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return sA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Je.fromDate(i);return{timestampValue:vc(o.serializer,l)}}if(i instanceof Je){const l=new Je(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:vc(o.serializer,l)}}if(i instanceof cr)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof En)return{bytesValue:y0(o.serializer,i._byteString)};if(i instanceof _t){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.yc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Qf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Ln)return(function(c,f){const p=c instanceof Ln?c.toArray():c;return{mapValue:{fields:{[Hv]:{stringValue:Wv},[gc]:{arrayValue:{values:p.map((w=>{if(typeof w!="number")throw f.yc("VectorValues must only contain numeric values.");return Wf(f.serializer,w)}))}}}}}})(i,o);if(S0(i))return i._toProto(o.serializer);throw o.yc(`Unsupported field value: ${Uc(i)}`)})(n,e)}function Z0(n,e){const t={};return jv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(n,((i,o)=>{const l=dp(o,e.dc(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function ew(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Je||n instanceof cr||n instanceof En||n instanceof _t||n instanceof up||n instanceof Ln||S0(n))}function tw(n,e,t){if(!ew(t)||!Mv(t)){const i=Uc(t);throw i==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+i)}}function Zc(n,e,t){if((e=wt(e))instanceof Y0)return e._internalPath;if(typeof e=="string")return CC(n,e);throw Sc("Field path arguments must be of type string or ",n,!1,void 0,t)}const RC=new RegExp("[~\\*/\\[\\]]");function CC(n,e,t){if(e.search(RC)>=0)throw Sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Y0(...e.split("."))._internalPath}catch{throw Sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Sc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new se(K.INVALID_ARGUMENT,f+n+p)}function kC(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{convertValue(e,t="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _e(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return xs(e,((o,l)=>{i[o]=this.convertValue(l,t)})),i}convertVectorValue(e){var i,o,l;const t=(l=(o=(i=e.fields)==null?void 0:i[gc].arrayValue)==null?void 0:o.values)==null?void 0:l.map((c=>ut(c.doubleValue)));return new Ln(t)}convertGeoPoint(e){return new cr(ut(e.latitude),ut(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=$c(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ll(e));default:return null}}convertTimestamp(e){const t=bi(e);return new Je(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);Ue(I0(i),9688,{name:e});const o=new ul(i.get(1),i.get(3)),l=new de(i.popFirst(5));return o.isEqual(t)||jr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw extends PC{constructor(e){super(),this.firestore=e}convertBytes(e){return new En(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function NC(){return new hp("serverTimestamp")}const f_="@firebase/firestore",p_="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Zc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bC extends rw{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fp{}class iw extends fp{}function VC(n,e,...t){let i=[];e instanceof fp&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof mp)).length,f=l.filter((p=>p instanceof pp)).length;if(c>1||c>0&&f>0)throw new se(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const o of i)n=o._apply(n);return n}class pp extends iw{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new pp(e,t,i)}_apply(e){const t=this._parse(e);return sw(e._query,t),new ks(e.firestore,e.converter,ff(e._query,t))}_parse(e){const t=X0(e.firestore);return(function(l,c,f,p,y,w,E){let R;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new se(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){y_(E,w);const W=[];for(const q of E)W.push(g_(p,l,q));R={arrayValue:{values:W}}}else R=g_(p,l,E)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||y_(E,w),R=AC(f,c,E,w==="in"||w==="not-in");return pt.create(y,w,R)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class mp extends fp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mp(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:jn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let c=o;const f=l.getFlattenedFilters();for(const p of f)sw(c,p),c=ff(c,p)})(e._query,t),new ks(e.firestore,e.converter,ff(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gp extends iw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new gp(e,t)}_apply(e){const t=(function(o,l,c){if(o.startAt!==null)throw new se(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new se(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hl(l,c)})(e._query,this._field,this._direction);return new ks(e.firestore,e.converter,Jx(e._query,t))}}function OC(n,e="asc"){const t=e,i=Zc("orderBy",n);return gp._create(i,t)}function g_(n,e,t){if(typeof(t=wt(t))=="string"){if(t==="")throw new se(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e0(e)&&t.indexOf("/")!==-1)throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!de.isDocumentKey(i))throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return ky(n,new de(i))}if(t instanceof _t)return ky(n,t._key);throw new se(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uc(t)}.`)}function y_(n,e){if(!Array.isArray(n)||n.length===0)throw new se(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sw(n,e){const t=(function(o,l){for(const c of o)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(n.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new se(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function LC(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class Ja{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gs extends rw{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Zc("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gs._jsonSchemaVersion="firestore/documentSnapshot/1.0",gs._jsonSchema={type:mt("string",gs._jsonSchemaVersion),bundleSource:mt("string","DocumentSnapshot"),bundleName:mt("string"),bundle:mt("string")};class oc extends gs{data(e={}){return super.data(e)}}class Ro{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ja(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new oc(this._firestore,this._userDataWriter,i.key,i,new Ja(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map((f=>{const p=new oc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new oc(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ja(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return f.type!==0&&(y=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),w=c.indexOf(f.doc.key)),{type:MC(f.type),doc:p,oldIndex:y,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ro._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ro._jsonSchemaVersion="firestore/querySnapshot/1.0",Ro._jsonSchema={type:mt("string",Ro._jsonSchemaVersion),bundleSource:mt("string","QuerySnapshot"),bundleName:mt("string"),bundle:mt("string")};function FC(n,e){const t=Xa(n.firestore,Ic),i=vC(n),o=LC(n.converter,e),l=X0(n.firestore);return UC(t,[xC(l,"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Lr.exists(!1))]).then((()=>i))}function jC(n,...e){var y,w,E;n=wt(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||m_(e[i])||(t=e[i++]);const o={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(m_(e[i])){const R=e[i];e[i]=(y=R.next)==null?void 0:y.bind(R),e[i+1]=(w=R.error)==null?void 0:w.bind(R),e[i+2]=(E=R.complete)==null?void 0:E.bind(R)}let l,c,f;if(n instanceof _t)c=Xa(n.firestore,Ic),f=Hf(n._key.path),l={next:R=>{e[i]&&e[i](zC(c,n,R))},error:e[i+1],complete:e[i+2]};else{const R=Xa(n,ks);c=Xa(R.firestore,Ic),f=R._query;const j=new nw(c);l={next:W=>{e[i]&&e[i](new Ro(c,j,R,W))},error:e[i+1],complete:e[i+2]},DC(n._query)}const p=Q0(c);return pC(p,f,o,l)}function UC(n,e){const t=Q0(n);return mC(t,e)}function zC(n,e,t){const i=t.docs.get(e._key),o=new nw(n);return new gs(n,o,e._key,i,new Ja(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){hx(zo),fr(new Fn("firestore",((i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new Ic(new px(i.getProvider("auth-internal")),new yx(c,i.getProvider("app-check-internal")),Vx(c,o),c);return l={useFetchStreams:t,...l},f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),Tn(f_,p_,e),Tn(f_,p_,"esm2020")})();var BC="firebase",$C="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(BC,$C,"app");function ow(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qC=ow,aw=new Is("auth","Firebase",ow());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new jc("@firebase/auth");function HC(n,...e){xc.logLevel<=Pe.WARN&&xc.warn(`Auth (${zo}): ${n}`,...e)}function ac(n,...e){xc.logLevel<=Pe.ERROR&&xc.error(`Auth (${zo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(n,...e){throw yp(n,...e)}function hr(n,...e){return yp(n,...e)}function lw(n,e,t){const i={...qC(),[e]:t};return new Is("auth","Firebase",i).create(e,{appName:n.name})}function ki(n){return lw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return aw.create(n,...e)}function ye(n,e,...t){if(!n)throw yp(e,...t)}function Vr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ac(e),new Error(e)}function zr(n,e){n||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function WC(){return __()==="http:"||__()==="https:"}function __(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WC()||_v()||"connection"in navigator)?navigator.onLine:!0}function GC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this.shortDelay=e,this.longDelay=t,zr(t>e,"Short delay should be less than long delay!"),this.isMobile=US()||$S()}get(){return KC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n,e){zr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JC=new Al(3e4,6e4);function Ps(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Mi(n,e,t,i,o={}){return cw(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=vl({key:n.config.apiKey,...c}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y={method:e,headers:p,...l};return BS()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&wl(n.emulatorConfig.host)&&(y.credentials="include"),uw.fetch()(await hw(n,n.config.apiHost,t,f),y)})}async function cw(n,e,t){n._canInitEmulator=!1;const i={...QC,...e};try{const o=new ZC(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Ju(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ju(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Ju(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Ju(n,"user-disabled",c);const w=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw lw(n,w,y);Un(n,w)}}catch(o){if(o instanceof zn)throw o;Un(n,"network-request-failed",{message:String(o)})}}async function eh(n,e,t,i,o={}){const l=await Mi(n,e,t,i,o);return"mfaPendingCredential"in l&&Un(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function hw(n,e,t,i){const o=`${e}${t}?${i}`,l=n,c=l.config.emulator?_p(n.config,o):`${n.config.apiScheme}://${o}`;return YC.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function XC(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(hr(this.auth,"network-request-failed")),JC.get())})}}function Ju(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=hr(n,e,i);return o.customData._tokenResponse=t,o}function v_(n){return n!==void 0&&n.enterprise!==void 0}class ek{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return XC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tk(n,e){return Mi(n,"GET","/v2/recaptchaConfig",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(n,e){return Mi(n,"POST","/v1/accounts:delete",e)}async function Ac(n,e){return Mi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rk(n,e=!1){const t=wt(n),i=await t.getIdToken(e),o=vp(i);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:rl(Kd(o.auth_time)),issuedAtTime:rl(Kd(o.iat)),expirationTime:rl(Kd(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Kd(n){return Number(n)*1e3}function vp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ac("JWT malformed, contained fewer than 3 sections"),null;try{const o=pv(t);return o?JSON.parse(o):(ac("Failed to decode base64 JWT payload"),null)}catch(o){return ac("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function w_(n){const e=vp(n);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof zn&&ik(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ik({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rl(this.lastLoginAt),this.creationTime=rl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(n){var E;const e=n.auth,t=await n.getIdToken(),i=await ml(n,Ac(e,{idToken:t}));ye(i==null?void 0:i.users.length,e,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const l=(E=o.providerUserInfo)!=null&&E.length?dw(o.providerUserInfo):[],c=ak(n.providerData,l),f=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),y=f?p:!1,w={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new xf(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,w)}async function ok(n){const e=wt(n);await Rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ak(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function dw(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(n,e){const t=await cw(n,{},async()=>{const i=vl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=await hw(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:i};return n.emulatorConfig&&wl(n.emulatorConfig.host)&&(p.credentials="include"),uw.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function uk(n,e){return Mi(n,"POST","/v2/accounts:revokeToken",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):w_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=w_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await lk(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Co;return i&&(ye(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(ye(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(ye(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n,e){ye(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class On{constructor({uid:e,auth:t,stsTokenManager:i,...o}){this.providerId="firebase",this.proactiveRefresh=new sk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new xf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await ml(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rk(this,e)}reload(){return ok(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new On({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Rc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(ki(this.auth));const e=await this.getIdToken();return await ml(this,nk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,o=t.email??void 0,l=t.phoneNumber??void 0,c=t.photoURL??void 0,f=t.tenantId??void 0,p=t._redirectEventId??void 0,y=t.createdAt??void 0,w=t.lastLoginAt??void 0,{uid:E,emailVerified:R,isAnonymous:j,providerData:W,stsTokenManager:q}=t;ye(E&&q,e,"internal-error");const $=Co.fromJSON(this.name,q);ye(typeof E=="string",e,"internal-error"),vi(i,e.name),vi(o,e.name),ye(typeof R=="boolean",e,"internal-error"),ye(typeof j=="boolean",e,"internal-error"),vi(l,e.name),vi(c,e.name),vi(f,e.name),vi(p,e.name),vi(y,e.name),vi(w,e.name);const H=new On({uid:E,auth:e,email:o,emailVerified:R,displayName:i,isAnonymous:j,photoURL:c,phoneNumber:l,tenantId:f,stsTokenManager:$,createdAt:y,lastLoginAt:w});return W&&Array.isArray(W)&&(H.providerData=W.map(Z=>({...Z}))),p&&(H._redirectEventId=p),H}static async _fromIdTokenResponse(e,t,i=!1){const o=new Co;o.updateFromServerResponse(t);const l=new On({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Rc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?dw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Co;f.updateFromIdToken(i);const p=new On({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new xf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=new Map;function Or(n){zr(n instanceof Function,"Expected a class definition");let e=E_.get(n);return e?(zr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,E_.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fw.type="NONE";const T_=fw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n,e,t){return`firebase:${n}:${e}:${t}`}class ko{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=lc(this.userKey,o.apiKey,l),this.fullPersistenceKey=lc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ac(this.auth,{idToken:e}).catch(()=>{});return t?On._fromGetAccountInfoResponse(this.auth,t,e):null}return On._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ko(Or(T_),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Or(T_);const c=lc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(c);if(w){let E;if(typeof w=="string"){const R=await Ac(e,{idToken:w}).catch(()=>{});if(!R)break;E=await On._fromGetAccountInfoResponse(e,R,w)}else E=On._fromJSON(e,w);y!==l&&(f=E),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new ko(l,e,i):(l=p[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new ko(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vw(e))return"Blackberry";if(ww(e))return"Webos";if(mw(e))return"Safari";if((e.includes("chrome/")||gw(e))&&!e.includes("edge/"))return"Chrome";if(_w(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function pw(n=zt()){return/firefox\//i.test(n)}function mw(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gw(n=zt()){return/crios\//i.test(n)}function yw(n=zt()){return/iemobile/i.test(n)}function _w(n=zt()){return/android/i.test(n)}function vw(n=zt()){return/blackberry/i.test(n)}function ww(n=zt()){return/webos/i.test(n)}function wp(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ck(n=zt()){var e;return wp(n)&&!!((e=window.navigator)!=null&&e.standalone)}function hk(){return qS()&&document.documentMode===10}function Ew(n=zt()){return wp(n)||_w(n)||ww(n)||vw(n)||/windows phone/i.test(n)||yw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(n,e=[]){let t;switch(n){case"Browser":t=I_(zt());break;case"Worker":t=`${I_(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const p=e(l);c(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fk(n,e={}){return Mi(n,"GET","/v2/passwordPolicy",Ps(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=6;class mk{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??pk,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new S_(this),this.idTokenSubscription=new S_(this),this.beforeStateQueue=new dk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Or(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await ko.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ac(this,{idToken:e}),i=await On._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var l;if(Dn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(l=this.redirectUser)==null?void 0:l._redirectEventId,f=i==null?void 0:i._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&(p!=null&&p.user)&&(i=p.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(ki(this));const t=e?wt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(ki(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(ki(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fk(this),t=new mk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await uk(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Or(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await ko.create(this,[Or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&HC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ko(n){return wt(n)}class S_{constructor(e){this.auth=e,this.observer=null,this.addObserver=JS(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let th={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yk(n){th=n}function Iw(n){return th.loadJS(n)}function _k(){return th.recaptchaEnterpriseScript}function vk(){return th.gapiScript}function wk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Ek{constructor(){this.enterprise=new Tk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Tk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ik="recaptcha-enterprise",Sw="NO_RECAPTCHA";class Sk{constructor(e){this.type=Ik,this.auth=Ko(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{tk(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new ek(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,c,f){const p=window.grecaptcha;v_(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(Sw)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ek().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&v_(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=_k();p.length!==0&&(p+=f),Iw(p).then(()=>{o(f,l,c)}).catch(y=>{c(y)})}}).catch(f=>{c(f)})})}}async function x_(n,e,t,i=!1,o=!1){const l=new Sk(n);let c;if(o)c=Sw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function A_(n,e,t,i,o){var l;if((l=n._getRecaptchaConfig())!=null&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await x_(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await x_(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(n,e){const t=Ss(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Pi(l,e??{}))return o;Un(o,"already-initialized")}return t.initialize({options:e})}function Ak(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Or);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Rk(n,e,t){const i=Ko(n);ye(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=xw(e),{host:c,port:f}=Ck(e),p=f===null?"":`:${f}`,y={url:`${l}//${c}${p}/`},w=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ye(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ye(Pi(y,i.config.emulator)&&Pi(w,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=w,i.settings.appVerificationDisabledForTesting=!0,wl(c)?Ev(`${l}//${c}${p}`):kk()}function xw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ck(n){const e=xw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:R_(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:R_(c)}}}function R_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function kk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function Pk(n,e){return Mi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nk(n,e){return eh(n,"POST","/v1/accounts:signInWithPassword",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(n,e){return eh(n,"POST","/v1/accounts:signInWithEmailLink",Ps(n,e))}async function Dk(n,e){return eh(n,"POST","/v1/accounts:signInWithEmailLink",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Ep{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new gl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new gl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return A_(e,t,"signInWithPassword",Nk);case"emailLink":return bk(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return A_(e,i,"signUpPassword",Pk);case"emailLink":return Dk(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(n,e){return eh(n,"POST","/v1/accounts:signInWithIdp",Ps(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk="http://localhost";class ws extends Ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o,...l}=t;if(!i||!o)return null;const c=new ws(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Po(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Po(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Po(e,t)}buildRequest(){const e={requestUri:Vk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lk(n){const e=Wa(Ka(n)).link,t=e?Wa(Ka(e)).deep_link_id:null,i=Wa(Ka(n)).deep_link_id;return(i?Wa(Ka(i)).link:null)||i||t||e||n}class Tp{constructor(e){const t=Wa(Ka(e)),i=t.apiKey??null,o=t.oobCode??null,l=Ok(t.mode??null);ye(i&&o&&l,"argument-error"),this.apiKey=i,this.operation=l,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Lk(e);try{return new Tp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.providerId=Go.PROVIDER_ID}static credential(e,t){return gl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Tp.parseLink(t);return ye(i,"argument-error"),gl._fromEmailAndCode(e,i.code,i.tenantId)}}Go.PROVIDER_ID="password";Go.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Aw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Rl{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ws._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ei.credential(t,i)}catch{return null}}}Ei.GOOGLE_SIGN_IN_METHOD="google.com";Ei.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Rl{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Rl{constructor(){super("twitter.com")}static credential(e,t){return ws._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ii.credential(t,i)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await On._fromIdTokenResponse(e,i,o),c=C_(i);return new Mo({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=C_(i);return new Mo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function C_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends zn{constructor(e,t,i,o){super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Cc(e,t,i,o)}}function Rw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(n,l,e,i):l})}async function Mk(n,e,t=!1){const i=await ml(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mo._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(n,e,t=!1){const{auth:i}=n;if(Dn(i.app))return Promise.reject(ki(i));const o="reauthenticate";try{const l=await ml(n,Rw(i,o,e,n),t);ye(l.idToken,i,"internal-error");const c=vp(l.idToken);ye(c,i,"internal-error");const{sub:f}=c;return ye(n.uid===f,i,"user-mismatch"),Mo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Un(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(n,e,t=!1){if(Dn(n.app))return Promise.reject(ki(n));const i="signIn",o=await Rw(n,i,e),l=await Mo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function jk(n,e){return Cw(Ko(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(n){const e=Ko(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function zk(n,e,t){return Dn(n.app)?Promise.reject(ki(n)):jk(wt(n),Go.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Uk(n),i})}function Bk(n,e,t,i){return wt(n).onIdTokenChanged(e,t,i)}function $k(n,e,t){return wt(n).beforeAuthStateChanged(e,t)}function qk(n,e,t,i){return wt(n).onAuthStateChanged(e,t,i)}function Hk(n){return wt(n).signOut()}const kc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kc,"1"),this.storage.removeItem(kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=1e3,Kk=10;class Pw extends kw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ew(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);hk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Kk):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pw.type="LOCAL";const Gk=Pw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw extends kw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nw.type="SESSION";const bw=Nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new nh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(c).map(async y=>y(t.origin,l)),p=await Qk(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,p)=>{const y=Ip("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const R=E;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(R.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){return window}function Jk(n){dr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function Xk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function eP(){return Dw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="firebaseLocalStorageDb",tP=1,Pc="firebaseLocalStorage",Ow="fbase_key";class Cl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function rh(n,e){return n.transaction([Pc],e?"readwrite":"readonly").objectStore(Pc)}function nP(){const n=indexedDB.deleteDatabase(Vw);return new Cl(n).toPromise()}function Af(){const n=indexedDB.open(Vw,tP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Pc,{keyPath:Ow})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Pc)?e(i):(i.close(),await nP(),e(await Af()))})})}async function k_(n,e,t){const i=rh(n,!0).put({[Ow]:e,value:t});return new Cl(i).toPromise()}async function rP(n,e){const t=rh(n,!1).get(e),i=await new Cl(t).toPromise();return i===void 0?null:i.value}function P_(n,e){const t=rh(n,!0).delete(e);return new Cl(t).toPromise()}const iP=800,sP=3;class Lw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Af(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>sP)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nh._getInstance(eP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await Xk(),!this.activeServiceWorker)return;this.sender=new Yk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Af();return await k_(e,kc,"1"),await P_(e,kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>k_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>rP(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>P_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=rh(o,!1).getAll();return new Cl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lw.type="LOCAL";const oP=Lw;new Al(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(n,e){return e?Or(e):(ye(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp extends Ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Po(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Po(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Po(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lP(n){return Cw(n.auth,new Sp(n),n.bypassAuthState)}function uP(n){const{auth:e,user:t}=n;return ye(t,e,"internal-error"),Fk(t,new Sp(n),n.bypassAuthState)}async function cP(n){const{auth:e,user:t}=n;return ye(t,e,"internal-error"),Mk(t,new Sp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lP;case"linkViaPopup":case"linkViaRedirect":return cP;case"reauthViaPopup":case"reauthViaRedirect":return uP;default:Un(this.auth,"internal-error")}}resolve(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=new Al(2e3,1e4);class So extends Mw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,So.currentPopupAction&&So.currentPopupAction.cancel(),So.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){zr(this.filter.length===1,"Popup operations only handle one event");const e=Ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(hr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(hr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,So.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hP.get())};e()}}So.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="pendingRedirect",uc=new Map;class fP extends Mw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=uc.get(this.auth._key());if(!e){try{const i=await pP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}uc.set(this.auth._key(),e)}return this.bypassAuthState||uc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pP(n,e){const t=yP(e),i=gP(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function mP(n,e){uc.set(n._key(),e)}function gP(n){return Or(n._redirectPersistence)}function yP(n){return lc(dP,n.config.apiKey,n.name)}async function _P(n,e,t=!1){if(Dn(n.app))return Promise.reject(ki(n));const i=Ko(n),o=aP(i,e),c=await new fP(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=600*1e3;class wP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Fw(e)){const o=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(hr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vP&&this.cachedEventUids.clear(),this.cachedEventUids.has(N_(e))}saveEventToCache(e){this.cachedEventUids.add(N_(e)),this.lastProcessedEventTime=Date.now()}}function N_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(n,e={}){return Mi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SP=/^https?/;async function xP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await TP(n);for(const t of e)try{if(AP(t))return}catch{}Un(n,"unauthorized-domain")}function AP(n){const e=Sf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!SP.test(t))return!1;if(IP.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=new Al(3e4,6e4);function b_(){const n=dr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function CP(n){return new Promise((e,t)=>{var o,l,c;function i(){b_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{b_(),t(hr(n,"network-request-failed"))},timeout:RP.get()})}if((l=(o=dr().gapi)==null?void 0:o.iframes)!=null&&l.Iframe)e(gapi.iframes.getContext());else if((c=dr().gapi)!=null&&c.load)i();else{const f=wk("iframefcb");return dr()[f]=()=>{gapi.load?i():t(hr(n,"network-request-failed"))},Iw(`${vk()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw cc=null,e})}let cc=null;function kP(n){return cc=cc||CP(n),cc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=new Al(5e3,15e3),NP="__/auth/iframe",bP="emulator/auth/iframe",DP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OP(n){const e=n.config;ye(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?_p(e,bP):`https://${n.config.authDomain}/${NP}`,i={apiKey:e.apiKey,appName:n.name,v:zo},o=VP.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${vl(i).slice(1)}`}async function LP(n){const e=await kP(n),t=dr().gapi;return ye(t,n,"internal-error"),e.open({where:document.body,url:OP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DP,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=hr(n,"network-request-failed"),f=dr().setTimeout(()=>{l(c)},PP.get());function p(){dr().clearTimeout(f),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FP=500,jP=600,UP="_blank",zP="http://localhost";class D_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BP(n,e,t,i=FP,o=jP){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p={...MP,width:i.toString(),height:o.toString(),top:l,left:c},y=zt().toLowerCase();t&&(f=gw(y)?UP:t),pw(y)&&(e=e||zP,p.scrollbars="yes");const w=Object.entries(p).reduce((R,[j,W])=>`${R}${j}=${W},`,"");if(ck(y)&&f!=="_self")return $P(e||"",f),new D_(null);const E=window.open(e||"",f,w);ye(E,n,"popup-blocked");try{E.focus()}catch{}return new D_(E)}function $P(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="__/auth/handler",HP="emulator/auth/handler",WP=encodeURIComponent("fac");async function V_(n,e,t,i,o,l){ye(n.config.authDomain,n,"auth-domain-config-required"),ye(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:zo,eventId:o};if(e instanceof Aw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",YS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,E]of Object.entries({}))c[w]=E}if(e instanceof Rl){const w=e.getScopes().filter(E=>E!=="");w.length>0&&(c.scopes=w.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await n._getAppCheckToken(),y=p?`#${WP}=${encodeURIComponent(p)}`:"";return`${KP(n)}?${vl(f).slice(1)}${y}`}function KP({config:n}){return n.emulator?_p(n,HP):`https://${n.authDomain}/${qP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="webStorageSupport";class GP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bw,this._completeRedirectFn=_P,this._overrideRedirectResult=mP}async _openPopup(e,t,i,o){var c;zr((c=this.eventManagers[e._key()])==null?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await V_(e,t,i,Sf(),o);return BP(e,l,Ip())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await V_(e,t,i,Sf(),o);return Jk(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(zr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await LP(e),i=new wP(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gd,{type:Gd},o=>{var c;const l=(c=o==null?void 0:o[0])==null?void 0:c[Gd];l!==void 0&&t(!!l),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ew()||mw()||wp()}}const QP=GP;var O_="@firebase/auth",L_="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XP(n){fr(new Fn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;ye(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tw(n)},y=new gk(i,o,l,p);return Ak(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),fr(new Fn("auth-internal",e=>{const t=Ko(e.getProvider("auth").getImmediate());return(i=>new YP(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(O_,L_,JP(n)),Tn(O_,L_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=300,eN=yv("authIdTokenMaxAge")||ZP;let M_=null;const tN=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>eN)return;const o=t==null?void 0:t.token;M_!==o&&(M_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function nN(n=Mf()){const e=Ss(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xk(n,{popupRedirectResolver:QP,persistence:[oP,Gk,bw]}),i=yv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=tN(l.toString());$k(t,c,()=>c(t.currentUser)),Bk(t,f=>c(f))}}const o=mv("auth");return o&&Rk(t,`http://${o}`),t}function rN(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}yk({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=hr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",rN().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XP("Browser");const jw="@firebase/installations",xp="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=1e4,zw=`w:${xp}`,Bw="FIS_v2",iN="https://firebaseinstallations.googleapis.com/v1",sN=3600*1e3,oN="installations",aN="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Es=new Is(oN,aN,lN);function $w(n){return n instanceof zn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw({projectId:n}){return`${iN}/projects/${n}/installations`}function Hw(n){return{token:n.token,requestStatus:2,expiresIn:cN(n.expiresIn),creationTime:Date.now()}}async function Ww(n,e){const i=(await e.json()).error;return Es.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Kw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function uN(n,{refreshToken:e}){const t=Kw(n);return t.append("Authorization",hN(e)),t}async function Gw(n){const e=await n();return e.status>=500&&e.status<600?n():e}function cN(n){return Number(n.replace("s","000"))}function hN(n){return`${Bw} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dN({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=qw(n),o=Kw(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={fid:t,authVersion:Bw,appId:n.appId,sdkVersion:zw},f={method:"POST",headers:o,body:JSON.stringify(c)},p=await Gw(()=>fetch(i,f));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:Hw(y.authToken)}}else throw await Ww("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fN(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=/^[cdef][\w-]{21}$/,Rf="";function mN(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=gN(n);return pN.test(t)?t:Rf}catch{return Rf}}function gN(n){return fN(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=new Map;function Jw(n,e){const t=ih(n);Xw(t,e),yN(t,e)}function Xw(n,e){const t=Yw.get(n);if(t)for(const i of t)i(e)}function yN(n,e){const t=_N();t&&t.postMessage({key:n,fid:e}),vN()}let fs=null;function _N(){return!fs&&"BroadcastChannel"in self&&(fs=new BroadcastChannel("[Firebase] FID Change"),fs.onmessage=n=>{Xw(n.data.key,n.data.fid)}),fs}function vN(){Yw.size===0&&fs&&(fs.close(),fs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN="firebase-installations-database",EN=1,Ts="firebase-installations-store";let Qd=null;function Ap(){return Qd||(Qd=Sv(wN,EN,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ts)}}})),Qd}async function Nc(n,e){const t=ih(n),o=(await Ap()).transaction(Ts,"readwrite"),l=o.objectStore(Ts),c=await l.get(t);return await l.put(e,t),await o.done,(!c||c.fid!==e.fid)&&Jw(n,e.fid),e}async function Zw(n){const e=ih(n),i=(await Ap()).transaction(Ts,"readwrite");await i.objectStore(Ts).delete(e),await i.done}async function sh(n,e){const t=ih(n),o=(await Ap()).transaction(Ts,"readwrite"),l=o.objectStore(Ts),c=await l.get(t),f=e(c);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!c||c.fid!==f.fid)&&Jw(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(n){let e;const t=await sh(n.appConfig,i=>{const o=TN(i),l=IN(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Rf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function TN(n){const e=n||{fid:mN(),registrationStatus:0};return eE(e)}function IN(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Es.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=SN(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xN(n)}:{installationEntry:e}}async function SN(n,e){try{const t=await dN(n,e);return Nc(n.appConfig,t)}catch(t){throw $w(t)&&t.customData.serverCode===409?await Zw(n.appConfig):await Nc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function xN(n){let e=await F_(n.appConfig);for(;e.registrationStatus===1;)await Qw(100),e=await F_(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Rp(n);return i||t}return e}function F_(n){return sh(n,e=>{if(!e)throw Es.create("installation-not-found");return eE(e)})}function eE(n){return AN(n)?{fid:n.fid,registrationStatus:0}:n}function AN(n){return n.registrationStatus===1&&n.registrationTime+Uw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN({appConfig:n,heartbeatServiceProvider:e},t){const i=CN(n,t),o=uN(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const c={installation:{sdkVersion:zw,appId:n.appId}},f={method:"POST",headers:o,body:JSON.stringify(c)},p=await Gw(()=>fetch(i,f));if(p.ok){const y=await p.json();return Hw(y)}else throw await Ww("Generate Auth Token",p)}function CN(n,{fid:e}){return`${qw(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(n,e=!1){let t;const i=await sh(n.appConfig,l=>{if(!tE(l))throw Es.create("not-registered");const c=l.authToken;if(!e&&NN(c))return l;if(c.requestStatus===1)return t=kN(n,e),l;{if(!navigator.onLine)throw Es.create("app-offline");const f=DN(l);return t=PN(n,f),f}});return t?await t:i.authToken}async function kN(n,e){let t=await j_(n.appConfig);for(;t.authToken.requestStatus===1;)await Qw(100),t=await j_(n.appConfig);const i=t.authToken;return i.requestStatus===0?Cp(n,e):i}function j_(n){return sh(n,e=>{if(!tE(e))throw Es.create("not-registered");const t=e.authToken;return VN(t)?{...e,authToken:{requestStatus:0}}:e})}async function PN(n,e){try{const t=await RN(n,e),i={...e,authToken:t};return await Nc(n.appConfig,i),t}catch(t){if($w(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Zw(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Nc(n.appConfig,i)}throw t}}function tE(n){return n!==void 0&&n.registrationStatus===2}function NN(n){return n.requestStatus===2&&!bN(n)}function bN(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+sN}function DN(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function VN(n){return n.requestStatus===1&&n.requestTime+Uw<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(n){const e=n,{installationEntry:t,registrationPromise:i}=await Rp(e);return i?i.catch(console.error):Cp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(n,e=!1){const t=n;return await MN(t),(await Cp(t,e)).token}async function MN(n){const{registrationPromise:e}=await Rp(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(n){if(!n||!n.options)throw Yd("App Configuration");if(!n.name)throw Yd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Yd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Yd(n){return Es.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="installations",jN="installations-internal",UN=n=>{const e=n.getProvider("app").getImmediate(),t=FN(e),i=Ss(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},zN=n=>{const e=n.getProvider("app").getImmediate(),t=Ss(e,nE).getImmediate();return{getId:()=>ON(t),getToken:o=>LN(t,o)}};function BN(){fr(new Fn(nE,UN,"PUBLIC")),fr(new Fn(jN,zN,"PRIVATE"))}BN();Tn(jw,xp);Tn(jw,xp,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="analytics",$N="firebase_id",qN="origin",HN=60*1e3,WN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new jc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},cn=new Is("analytics","Analytics",KN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(n){if(!n.startsWith(kp)){const e=cn.create("invalid-gtag-resource",{gtagURL:n});return Wt.warn(e.message),""}return n}function rE(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function QN(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function YN(n,e){const t=QN("firebase-js-sdk-policy",{createScriptURL:GN}),i=document.createElement("script"),o=`${kp}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function JN(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function XN(n,e,t,i,o,l){const c=i[o];try{if(c)await e[c];else{const p=(await rE(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(f){Wt.error(f)}n("config",o,l)}async function ZN(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let c=o.send_to;Array.isArray(c)||(c=[c]);const f=await rE(t);for(const p of c){const y=f.find(E=>E.measurementId===p),w=y&&e[y.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){Wt.error(l)}}function e2(n,e,t,i){async function o(l,...c){try{if(l==="event"){const[f,p]=c;await ZN(n,e,t,f,p)}else if(l==="config"){const[f,p]=c;await XN(n,e,t,i,f,p)}else if(l==="consent"){const[f,p]=c;n("consent",f,p)}else if(l==="get"){const[f,p,y]=c;n("get",f,p,y)}else if(l==="set"){const[f]=c;n("set",f)}else n(l,...c)}catch(f){Wt.error(f)}}return o}function t2(n,e,t,i,o){let l=function(...c){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=e2(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function n2(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(kp)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2=30,i2=1e3;class s2{constructor(e={},t=i2){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const iE=new s2;function o2(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function a2(n){var c;const{appId:e,apiKey:t}=n,i={method:"GET",headers:o2(t)},o=WN.replace("{app-id}",e),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let f="";try{const p=await l.json();(c=p.error)!=null&&c.message&&(f=p.error.message)}catch{}throw cn.create("config-fetch-failed",{httpStatus:l.status,responseMessage:f})}return l.json()}async function l2(n,e=iE,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw cn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw cn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new h2;return setTimeout(async()=>{f.abort()},HN),sE({appId:i,apiKey:o,measurementId:l},c,f,e)}async function sE(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=iE){var f;const{appId:l,measurementId:c}=n;try{await u2(i,e)}catch(p){if(c)return Wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:c};throw p}try{const p=await a2(n);return o.deleteThrottleMetadata(l),p}catch(p){const y=p;if(!c2(y)){if(o.deleteThrottleMetadata(l),c)return Wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:l,measurementId:c};throw p}const w=Number((f=y==null?void 0:y.customData)==null?void 0:f.httpStatus)===503?ly(t,o.intervalMillis,r2):ly(t,o.intervalMillis),E={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(l,E),Wt.debug(`Calling attemptFetch again in ${w} millis`),sE(n,E,i,o)}}function u2(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(cn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function c2(n){if(!(n instanceof zn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class h2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function d2(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,c={...i,send_to:l};n("event",t,c)}}async function f2(n,e,t,i){if(i&&i.global){const o={};for(const l of Object.keys(t))o[`user_properties.${l}`]=t[l];return n("set",o),Promise.resolve()}else{const o=await e;n("config",o,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(){if(vv())try{await wv()}catch(n){return Wt.warn(cn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Wt.warn(cn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function m2(n,e,t,i,o,l,c){const f=l2(n);f.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&Wt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>Wt.error(R)),e.push(f);const p=p2().then(R=>{if(R)return i.getId()}),[y,w]=await Promise.all([f,p]);n2(l)||YN(l,y.measurementId),o("js",new Date);const E=(c==null?void 0:c.config)??{};return E[qN]="firebase",E.update=!0,w!=null&&(E[$N]=w),o("config",y.measurementId,E),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.app=e}_delete(){return delete No[this.app.options.appId],Promise.resolve()}}let No={},U_=[];const z_={};let Jd="dataLayer",y2="gtag",B_,Pp,$_=!1;function _2(){const n=[];if(_v()&&n.push("This is a browser extension environment."),WS()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=cn.create("invalid-analytics-context",{errorInfo:e});Wt.warn(t.message)}}function v2(n,e,t){_2();const i=n.options.appId;if(!i)throw cn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw cn.create("no-api-key");if(No[i]!=null)throw cn.create("already-exists",{id:i});if(!$_){JN(Jd);const{wrappedGtag:l,gtagCore:c}=t2(No,U_,z_,Jd,y2);Pp=l,B_=c,$_=!0}return No[i]=m2(n,U_,z_,e,B_,Jd,t),new g2(n)}function w2(n=Mf()){n=wt(n);const e=Ss(n,bc);return e.isInitialized()?e.getImmediate():E2(n)}function E2(n,e={}){const t=Ss(n,bc);if(t.isInitialized()){const o=t.getImmediate();if(Pi(e,t.getOptions()))return o;throw cn.create("already-initialized")}return t.initialize({options:e})}function T2(n,e,t){n=wt(n),f2(Pp,No[n.app.options.appId],e,t).catch(i=>Wt.error(i))}function I2(n,e,t,i){n=wt(n),d2(Pp,No[n.app.options.appId],e,t,i).catch(o=>Wt.error(o))}const q_="@firebase/analytics",H_="0.10.21";function S2(){fr(new Fn(bc,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return v2(i,o,t)},"PUBLIC")),fr(new Fn("analytics-internal",n,"PRIVATE")),Tn(q_,H_),Tn(q_,H_,"esm2020");function n(e){try{const t=e.getProvider(bc).getImmediate();return{logEvent:(i,o,l)=>I2(t,i,o,l),setUserProperties:(i,o)=>T2(t,i,o)}}catch(t){throw cn.create("interop-component-reg-failed",{reason:t})}}}S2();const x2={apiKey:"AIzaSyA3NTKM0-Menbt8_ZFiB4FtHywHKPgQ3eA",authDomain:"ayurvedic-leads.firebaseapp.com",projectId:"ayurvedic-leads",storageBucket:"ayurvedic-leads.firebasestorage.app",messagingSenderId:"513979466144",appId:"1:513979466144:web:79c74af33e025d3ba9a4c5",measurementId:"G-SM46KG15P1"},Np=xv(x2),oE=wC(Np),Xd=nN(Np);typeof window<"u"&&w2(Np);const A2="/assets/267aadc9670f30ef0f1dd141d69d99164c2da01e-DzdkWT0q.png",R2="/assets/2-BT8CBRAz.jpeg",C2=()=>I.jsxs("div",{className:"bg-[#050505] min-h-screen text-gray-300 font-sans selection:bg-amber-600/30 selection:text-amber-200 overflow-x-hidden",children:[I.jsx("div",{className:"fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-screen",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}),I.jsxs("div",{className:"hidden md:block fixed inset-0 pointer-events-none z-0",children:[I.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-amber-700/5 blur-[120px] rounded-full mix-blend-screen"}),I.jsx("div",{className:"absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-orange-700/5 blur-[100px] rounded-full mix-blend-screen"})]}),I.jsxs("main",{className:"relative z-10 mx-auto w-full max-w-lg md:max-w-6xl pb-24 md:pb-12 flex flex-col bg-[#050505] md:bg-transparent",children:[I.jsx(k2,{}),I.jsx(P2,{}),I.jsx(N2,{}),I.jsx(b2,{}),I.jsx(D2,{})]}),I.jsx(V2,{})]}),k2=()=>I.jsxs("section",{className:"px-5 pt-6 md:pt-20 pb-10 md:pb-16 flex flex-col md:flex-row items-center text-center md:text-left relative md:gap-12 lg:gap-20",children:[I.jsxs("div",{className:"order-1 md:order-2 relative w-full max-w-[280px] md:max-w-[420px] lg:max-w-[500px] mx-auto mb-6 md:mb-0 flex-1",children:[I.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-600/10 blur-2xl rounded-full pointer-events-none"}),I.jsxs("div",{className:"relative z-10 flex gap-3 md:gap-4 items-center justify-center",children:[I.jsx("img",{src:A2,alt:"Wild Capsule and Power Oil",className:"w-[48%] h-auto drop-shadow-2xl object-contain"}),I.jsx("img",{src:R2,alt:"Wild Capsule and Power Oil",className:"w-[48%] h-auto drop-shadow-2xl object-contain"})]})]}),I.jsxs("div",{className:"order-2 md:order-1 flex flex-col items-center md:items-start flex-1 w-full",children:[I.jsx("div",{className:"hidden md:inline-block px-3 py-1 mb-6 rounded-sm bg-amber-950/30 border border-amber-900/50 text-amber-500 text-xs font-medium tracking-wider uppercase",children:"Premium Ayurvedic Wellness"}),I.jsxs("h1",{className:"text-[28px] sm:text-[34px] md:text-[46px] lg:text-[56px] font-bold text-white mb-3 md:mb-6 leading-[1.2]",style:{fontFamily:"'Cinzel', serif"},children:["Relationship me dooriyan?",I.jsx("br",{className:"hidden md:block"}),I.jsx("span",{className:"text-amber-500 md:mt-2 md:block",children:"Confidence wapas laiye."})]}),I.jsxs("p",{className:"text-[15px] md:text-[18px] text-neutral-300 mb-8 md:mb-10 max-w-[320px] md:max-w-lg leading-relaxed",children:["Natural aur safe Ayurvedic support jo aapka purana confidence lautaye.",I.jsx("span",{className:"hidden md:inline",children:" Bina kisi side-effect ke, 100% privacy ke saath."})]}),I.jsx("button",{onClick:()=>window.open("https://wa.me/919643338004?text=Hi%20I%20am%20interested%20in%20Wild%20Capsule%20and%20Power%20Oil","_blank"),className:"w-full md:w-auto md:px-14 h-14 md:h-16 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-bold rounded-xl md:rounded-lg text-[17px] md:text-[19px] shadow-[0_4px_20px_rgba(217,119,6,0.25)] transition-transform active:scale-[0.98] flex items-center justify-center cursor-pointer",children:"Order Now"}),I.jsxs("div",{className:"flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mt-5 md:mt-8 text-[13px] md:text-[14px] text-neutral-400 font-medium w-full",children:[I.jsxs("span",{className:"flex items-center gap-1.5",children:[I.jsx(hv,{className:"w-4 h-4 md:w-4.5 md:h-4.5 text-green-500/80"})," 100% Ayurvedic"]}),I.jsxs("span",{className:"flex items-center gap-1.5",children:[I.jsx(ps,{className:"w-4 h-4 md:w-4.5 md:h-4.5 text-amber-500/80"})," Private Delivery"]}),I.jsxs("span",{className:"flex items-center gap-1.5",children:[I.jsx(xS,{className:"w-4 h-4 md:w-4.5 md:h-4.5 text-blue-400/80"})," Safe"]})]})]})]}),P2=()=>I.jsx("section",{className:"px-5 py-10 md:py-20 bg-[#0a0a0a] md:bg-transparent border-y border-neutral-900 md:border-none text-center relative z-10",children:I.jsxs("div",{className:"md:max-w-4xl md:mx-auto md:bg-[#0a0a0a] md:border md:border-neutral-800/60 md:rounded-2xl md:p-14 md:shadow-2xl",children:[I.jsxs("p",{className:"text-[22px] md:text-[32px] lg:text-[36px] text-neutral-200 font-medium leading-snug mb-5 md:mb-8",style:{fontFamily:"'Cinzel', serif"},children:['"Har problem dikhti nahi hoti…',I.jsx("br",{}),I.jsx("span",{className:"text-neutral-400 mt-2 md:mt-4 block text-[18px] md:text-[24px] lg:text-[28px]",children:'Confidence ki kami rishton me dooriyan la deti hai."'})]}),I.jsx("div",{className:"w-12 md:w-24 h-[1px] bg-amber-800/50 mx-auto mb-5 md:mb-8"}),I.jsx("p",{className:"text-[15px] md:text-[18px] lg:text-[20px] text-amber-500/90 font-medium max-w-[300px] md:max-w-[600px] mx-auto leading-relaxed",children:"Wild Capsule & Power Oil apka natural Ayurvedic solution stamina badhane ke liye."})]})}),N2=()=>I.jsxs("section",{className:"px-5 py-10 md:py-20",children:[I.jsxs("h2",{className:"text-[26px] md:text-[40px] font-bold text-white text-center mb-8 md:mb-14",style:{fontFamily:"'Cinzel', serif"},children:["Kyun Chunein ",I.jsx("span",{className:"text-amber-500",children:"Wild"}),"?"]}),I.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto",children:[I.jsxs("div",{className:"bg-[#0a0a0a] p-5 md:p-8 rounded-xl md:rounded-2xl border border-neutral-800/60 flex flex-col items-center text-center gap-3 md:gap-4 md:hover:border-amber-900/50 transition-colors",children:[I.jsx(CS,{className:"w-7 h-7 md:w-10 md:h-10 text-amber-500/90"}),I.jsxs("span",{className:"text-[15px] md:text-[20px] font-bold text-neutral-200",style:{fontFamily:"'Cinzel', serif"},children:["Boost",I.jsx("br",{className:"md:hidden"})," Confidence"]}),I.jsx("p",{className:"hidden md:block text-[14px] text-neutral-400",children:"Natural energy aur self-assurance."})]}),I.jsxs("div",{className:"bg-[#0a0a0a] p-5 md:p-8 rounded-xl md:rounded-2xl border border-neutral-800/60 flex flex-col items-center text-center gap-3 md:gap-4 md:hover:border-amber-900/50 transition-colors",children:[I.jsx(hS,{className:"w-7 h-7 md:w-10 md:h-10 text-rose-500/90"}),I.jsxs("span",{className:"text-[15px] md:text-[20px] font-bold text-neutral-200",style:{fontFamily:"'Cinzel', serif"},children:["Improve",I.jsx("br",{className:"md:hidden"})," Stamina"]}),I.jsx("p",{className:"hidden md:block text-[14px] text-neutral-400",children:"Din bhar ka support aur endurance."})]}),I.jsxs("div",{className:"bg-[#0a0a0a] p-5 md:p-8 rounded-xl md:rounded-2xl border border-neutral-800/60 flex flex-col items-center text-center gap-3 md:gap-4 md:hover:border-amber-900/50 transition-colors",children:[I.jsx(hv,{className:"w-7 h-7 md:w-10 md:h-10 text-green-500/90"}),I.jsxs("span",{className:"text-[15px] md:text-[20px] font-bold text-neutral-200",style:{fontFamily:"'Cinzel', serif"},children:["Ayurvedic",I.jsx("br",{className:"md:hidden"})," & Safe"]}),I.jsx("p",{className:"hidden md:block text-[14px] text-neutral-400",children:"Sirf natural herbs. No chemicals."})]}),I.jsxs("div",{className:"bg-[#0a0a0a] p-5 md:p-8 rounded-xl md:rounded-2xl border border-neutral-800/60 flex flex-col items-center text-center gap-3 md:gap-4 md:hover:border-amber-900/50 transition-colors",children:[I.jsx(ps,{className:"w-7 h-7 md:w-10 md:h-10 text-blue-400/90"}),I.jsxs("span",{className:"text-[15px] md:text-[20px] font-bold text-neutral-200",style:{fontFamily:"'Cinzel', serif"},children:["Private",I.jsx("br",{className:"md:hidden"})," Delivery"]}),I.jsx("p",{className:"hidden md:block text-[14px] text-neutral-400",children:"Bina branding ka secure package."})]})]})]}),b2=()=>{const[n,e]=z.useState({name:"",phone:"",city:"",contactMethod:"whatsapp"}),[t,i]=z.useState(!1),[o,l]=z.useState(!1),[c,f]=z.useState(""),p=async E=>{E.preventDefault(),i(!0),f("");try{await FC(G0(oE,"leads"),{...n,timestamp:NC()}),l(!0),e({name:"",phone:"",city:"",contactMethod:"whatsapp"})}catch(R){f("Failed to submit. Please try again."),console.error("Form submission error:",R)}finally{i(!1)}},y=E=>{e({...n,[E.target.name]:E.target.value})},w=()=>{l(!1)};return I.jsxs(I.Fragment,{children:[I.jsx("section",{className:"px-5 py-10 md:py-20",children:I.jsx("div",{className:"max-w-md mx-auto",children:I.jsxs("div",{className:"bg-[#0a0a0a] rounded-2xl md:rounded-3xl p-6 md:p-10 border border-neutral-800/60 shadow-[0_8px_30px_rgba(0,0,0,0.4)]",children:[I.jsxs("div",{className:"text-center mb-8 md:mb-10",children:[I.jsx("h2",{className:"text-[26px] md:text-[36px] font-bold text-white mb-3",style:{fontFamily:"'Cinzel', serif"},children:"Get Private Consultation"}),I.jsxs("p",{className:"text-[14px] md:text-[15px] text-neutral-400 flex items-center justify-center gap-2",children:[I.jsx(ps,{className:"w-4 h-4 text-amber-500/80"}),"Your details are 100% confidential"]})]}),c&&I.jsx("div",{className:"mb-5 p-4 bg-red-900/20 border border-red-700/50 rounded-xl text-red-400 text-[14px] text-center",children:c}),I.jsxs("form",{onSubmit:p,className:"space-y-5",children:[I.jsx("div",{children:I.jsx("input",{type:"text",name:"name",value:n.name,onChange:y,placeholder:"Enter your name",required:!0,disabled:t,className:"w-full h-[52px] md:h-[56px] bg-[#050505] border border-neutral-700 rounded-xl px-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all text-[15px] md:text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"})}),I.jsx("div",{children:I.jsx("input",{type:"tel",name:"phone",value:n.phone,onChange:y,placeholder:"Enter your mobile number",required:!0,pattern:"[0-9]{10}",disabled:t,className:"w-full h-[52px] md:h-[56px] bg-[#050505] border border-neutral-700 rounded-xl px-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all text-[15px] md:text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"})}),I.jsx("div",{children:I.jsx("input",{type:"text",name:"city",value:n.city,onChange:y,placeholder:"Your city",disabled:t,className:"w-full h-[52px] md:h-[56px] bg-[#050505] border border-neutral-700 rounded-xl px-5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all text-[15px] md:text-[16px] disabled:opacity-50 disabled:cursor-not-allowed"})}),I.jsxs("div",{children:[I.jsx("p",{className:"text-neutral-300 text-[14px] md:text-[15px] mb-3 font-medium",children:"Preferred Contact"}),I.jsxs("div",{className:"flex gap-3",children:[I.jsxs("label",{className:"flex-1 cursor-pointer",children:[I.jsx("input",{type:"radio",name:"contactMethod",value:"call",checked:n.contactMethod==="call",onChange:y,disabled:t,className:"peer sr-only"}),I.jsxs("div",{className:"h-[48px] bg-[#050505] border border-neutral-700 rounded-xl flex items-center justify-center gap-2 text-neutral-400 peer-checked:border-amber-600 peer-checked:bg-amber-600/10 peer-checked:text-amber-500 transition-all text-[15px] font-medium peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",children:[I.jsx(Of,{className:"w-4 h-4"}),"Call"]})]}),I.jsxs("label",{className:"flex-1 cursor-pointer",children:[I.jsx("input",{type:"radio",name:"contactMethod",value:"whatsapp",checked:n.contactMethod==="whatsapp",onChange:y,disabled:t,className:"peer sr-only"}),I.jsxs("div",{className:"h-[48px] bg-[#050505] border border-neutral-700 rounded-xl flex items-center justify-center gap-2 text-neutral-400 peer-checked:border-amber-600 peer-checked:bg-amber-600/10 peer-checked:text-amber-500 transition-all text-[15px] font-medium peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",children:[I.jsx(sl,{className:"w-4 h-4"}),"WhatsApp"]})]})]})]}),I.jsx("button",{type:"submit",disabled:t,className:"w-full h-[56px] md:h-[60px] bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-bold rounded-xl text-[17px] md:text-[18px] shadow-[0_6px_24px_rgba(217,119,6,0.3)] transition-all active:scale-[0.98] mt-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2",children:t?I.jsxs(I.Fragment,{children:[I.jsx(Mc,{className:"w-5 h-5 animate-spin"}),"Submitting..."]}):"Request Call Now"}),I.jsx("div",{className:"text-center pt-2",children:I.jsxs("p",{className:"text-[12px] md:text-[13px] text-neutral-500 flex items-center justify-center gap-2 flex-wrap",children:[I.jsxs("span",{className:"flex items-center gap-1",children:[I.jsx(ps,{className:"w-3 h-3 text-neutral-400"}),"100% Private"]}),I.jsx("span",{children:"•"}),I.jsx("span",{children:"No spam"}),I.jsx("span",{children:"•"}),I.jsx("span",{children:"Discreet support"})]})})]})]})})}),o&&I.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm",children:I.jsxs("div",{className:"bg-[#0a0a0a] border border-neutral-800/60 rounded-2xl md:rounded-3xl p-8 md:p-12 max-w-md w-full shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in duration-300",children:[I.jsx("div",{className:"flex justify-center mb-6",children:I.jsx("div",{className:"w-16 h-16 md:w-20 md:h-20 bg-green-600/20 rounded-full flex items-center justify-center",children:I.jsx(uS,{className:"w-10 h-10 md:w-12 md:h-12 text-green-500"})})}),I.jsx("h3",{className:"text-[24px] md:text-[32px] font-bold text-white text-center mb-4",style:{fontFamily:"'Cinzel', serif"},children:"Request Received!"}),I.jsx("p",{className:"text-[15px] md:text-[16px] text-neutral-300 text-center mb-3 leading-relaxed",children:"Thank you for reaching out. Our team will contact you shortly for a private consultation."}),I.jsxs("p",{className:"text-[13px] md:text-[14px] text-neutral-400 text-center mb-8",children:[I.jsx(ps,{className:"w-4 h-4 text-amber-500/80 inline mr-1"}),"Your information is completely confidential"]}),I.jsx("button",{onClick:w,className:"w-full h-[52px] md:h-[56px] bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-bold rounded-xl text-[16px] md:text-[17px] shadow-[0_6px_24px_rgba(217,119,6,0.3)] transition-all active:scale-[0.98]",children:"Close"})]})})]})},D2=()=>I.jsx("section",{className:"px-5 py-10 md:py-24 mb-8 md:mb-16 text-center bg-[#0a0a0a] md:bg-transparent border-y md:border-none border-neutral-900",children:I.jsxs("div",{className:"md:max-w-4xl md:mx-auto md:bg-[#0a0a0a] md:border md:border-neutral-800/60 md:rounded-[2rem] md:p-16 md:shadow-2xl md:relative overflow-hidden",children:[I.jsx("div",{className:"hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent pointer-events-none"}),I.jsxs("h2",{className:"relative z-10 text-[26px] md:text-[42px] lg:text-[48px] font-bold text-white mb-6 md:mb-10 leading-tight",style:{fontFamily:"'Cinzel', serif"},children:["Fir se ",I.jsx("span",{className:"text-amber-500",children:"confident"})," feel karne ke liye tayyar hain?"]}),I.jsx("p",{className:"hidden md:block relative z-10 text-lg text-neutral-400 mb-10 max-w-xl mx-auto",children:"Take the first step towards a better you. Safe, discreet aur 100% private."}),I.jsxs("div",{className:"relative z-10 flex flex-col md:flex-row gap-3 md:gap-5 w-full md:justify-center",children:[I.jsxs("button",{onClick:()=>window.open("https://wa.me/919643338004?text=Hi%20I%20am%20interested%20in%20Wild%20Capsule%20and%20Power%20Oil","_blank"),className:"w-full md:w-[260px] h-14 md:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl md:rounded-lg flex items-center justify-center gap-2 text-[17px] md:text-[18px] active:scale-[0.98] transition-transform cursor-pointer",children:[I.jsx(sl,{className:"w-6 h-6 md:w-5 md:h-5"})," WhatsApp Us"]}),I.jsxs("button",{onClick:()=>window.location.href="tel:+919643338004",className:"w-full md:w-[260px] h-14 md:h-16 bg-neutral-800 hover:bg-neutral-700 text-white font-bold rounded-xl md:rounded-lg flex items-center justify-center gap-2 text-[17px] md:text-[18px] border border-neutral-700 active:scale-[0.98] transition-transform cursor-pointer",children:[I.jsx(Of,{className:"w-5 h-5"})," Call: +91 96433 38004"]})]}),I.jsxs("div",{className:"hidden md:flex relative z-10 items-center justify-center gap-2 text-sm text-neutral-500 mt-8 font-medium",children:[I.jsx(ps,{className:"w-4 h-4 text-neutral-400"})," 100% Secure & Confidential"]})]})}),V2=()=>I.jsxs("div",{className:"md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#050505] border-t border-neutral-800/80 p-3 flex gap-3 pb-safe sm:pb-3 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] mx-auto w-full max-w-lg",children:[I.jsxs("a",{href:"tel:+919643338004",className:"flex-1 h-12 bg-neutral-800 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-transform active:scale-[0.96] text-[15px] border border-neutral-700",children:[I.jsx(Of,{className:"w-4 h-4"})," Call Now"]}),I.jsxs("a",{href:"https://wa.me/919643338004",target:"_blank",rel:"noreferrer",className:"flex-1 h-12 bg-gradient-to-r from-amber-600 to-orange-500 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-transform active:scale-[0.96] text-[15px] shadow-[0_4px_12px_rgba(217,119,6,0.3)]",children:[I.jsx(sl,{className:"w-4 h-4"})," WhatsApp"]})]}),aE=z.createContext(void 0),bp=()=>{const n=z.useContext(aE);if(!n)throw new Error("useAuth must be used within AuthProvider");return n},O2=({children:n})=>{const[e,t]=z.useState(null),[i,o]=z.useState(!0);z.useEffect(()=>qk(Xd,y=>{t(y),o(!1)}),[]);const f={user:e,loading:i,login:async(p,y)=>{await zk(Xd,p,y)},logout:async()=>{await Hk(Xd)}};return I.jsx(aE.Provider,{value:f,children:n})},L2=()=>{const[n,e]=z.useState(""),[t,i]=z.useState(""),[o,l]=z.useState(""),[c,f]=z.useState(!1),{login:p}=bp(),y=Oc(),w=async E=>{E.preventDefault(),l(""),f(!0);try{await p(n,t),y("/admin/dashboard")}catch(R){console.error("Login error:",R),R.code==="auth/invalid-credential"||R.code==="auth/user-not-found"||R.code==="auth/wrong-password"?l("Invalid email or password"):R.code==="auth/too-many-requests"?l("Too many failed attempts. Please try again later."):l("Failed to sign in. Please try again.")}finally{f(!1)}};return I.jsxs("div",{className:"min-h-screen bg-[#050505] flex items-center justify-center px-5 py-12",children:[I.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0",children:[I.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-amber-700/5 blur-[120px] rounded-full"}),I.jsx("div",{className:"absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-700/5 blur-[100px] rounded-full"})]}),I.jsx("div",{className:"relative z-10 w-full max-w-md",children:I.jsxs("div",{className:"bg-[#0a0a0a] rounded-2xl md:rounded-3xl p-8 md:p-10 border border-neutral-800/60 shadow-[0_8px_30px_rgba(0,0,0,0.4)]",children:[I.jsxs("div",{className:"text-center mb-8",children:[I.jsx("div",{className:"w-16 h-16 bg-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-4",children:I.jsx(ps,{className:"w-8 h-8 text-amber-500"})}),I.jsx("h1",{className:"text-3xl font-bold text-white mb-2",style:{fontFamily:"'Cinzel', serif"},children:"Admin Login"}),I.jsx("p",{className:"text-neutral-400 text-sm",children:"Sign in to access the leads dashboard"})]}),o&&I.jsxs("div",{className:"mb-6 p-4 bg-red-900/20 border border-red-700/50 rounded-xl flex items-start gap-3",children:[I.jsx(aS,{className:"w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"}),I.jsx("p",{className:"text-red-400 text-sm",children:o})]}),I.jsxs("form",{onSubmit:w,className:"space-y-5",children:[I.jsxs("div",{children:[I.jsx("label",{htmlFor:"email",className:"block text-neutral-300 text-sm font-medium mb-2",children:"Email"}),I.jsx("input",{id:"email",type:"email",value:n,onChange:E=>e(E.target.value),placeholder:"admin@example.com",required:!0,disabled:c,className:"w-full h-12 bg-[#050505] border border-neutral-700 rounded-xl px-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"password",className:"block text-neutral-300 text-sm font-medium mb-2",children:"Password"}),I.jsx("input",{id:"password",type:"password",value:t,onChange:E=>i(E.target.value),placeholder:"Enter your password",required:!0,disabled:c,className:"w-full h-12 bg-[#050505] border border-neutral-700 rounded-xl px-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"})]}),I.jsx("button",{type:"submit",disabled:c,className:"w-full h-12 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-500 hover:to-orange-400 text-white font-bold rounded-xl shadow-[0_6px_24px_rgba(217,119,6,0.3)] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2",children:c?I.jsxs(I.Fragment,{children:[I.jsx(Mc,{className:"w-5 h-5 animate-spin"}),"Signing in..."]}):"Sign In"})]}),I.jsx("div",{className:"mt-6 text-center",children:I.jsx("p",{className:"text-neutral-500 text-xs",children:"Contact your administrator if you need access"})})]})})]})},M2=()=>{const{logout:n,user:e}=bp(),t=Oc(),[i,o]=z.useState([]),[l,c]=z.useState([]),[f,p]=z.useState(!0),[y,w]=z.useState(""),[E,R]=z.useState("all"),[j,W]=z.useState("newest");z.useEffect(()=>{const H=VC(G0(oE,"leads"),OC("timestamp","desc")),Z=jC(H,ne=>{const ve=[];ne.forEach(ge=>{ve.push({id:ge.id,...ge.data()})}),o(ve),p(!1)},ne=>{console.error("Error fetching leads:",ne),p(!1)});return()=>Z()},[]),z.useEffect(()=>{let H=[...i];if(y){const Z=y.toLowerCase();H=H.filter(ne=>ne.name.toLowerCase().includes(Z)||ne.phone.includes(Z)||ne.city.toLowerCase().includes(Z))}E!=="all"&&(H=H.filter(Z=>Z.contactMethod===E)),H.sort((Z,ne)=>{switch(j){case"newest":return ne.timestamp.seconds-Z.timestamp.seconds;case"oldest":return Z.timestamp.seconds-ne.timestamp.seconds;case"name-asc":return Z.name.localeCompare(ne.name);case"name-desc":return ne.name.localeCompare(Z.name);default:return 0}}),c(H)},[i,y,E,j]);const q=async()=>{try{await n(),t("/admin/login")}catch(H){console.error("Logout error:",H)}},$=H=>{const Z=H.toDate();return new Intl.DateTimeFormat("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(Z)};return I.jsxs("div",{className:"min-h-screen bg-[#050505] text-gray-300",children:[I.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0",children:[I.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-amber-700/5 blur-[120px] rounded-full"}),I.jsx("div",{className:"absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-700/5 blur-[100px] rounded-full"})]}),I.jsxs("div",{className:"relative z-10",children:[I.jsx("header",{className:"bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-neutral-800/60 sticky top-0 z-20",children:I.jsxs("div",{className:"max-w-7xl mx-auto px-5 py-4 flex items-center justify-between",children:[I.jsxs("div",{children:[I.jsx("h1",{className:"text-2xl font-bold text-white",style:{fontFamily:"'Cinzel', serif"},children:"Leads Dashboard"}),I.jsxs("p",{className:"text-sm text-neutral-400 mt-1",children:["Welcome back, ",e==null?void 0:e.email]})]}),I.jsxs("button",{onClick:q,className:"flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-colors",children:[I.jsx(gS,{className:"w-4 h-4"}),"Logout"]})]})}),I.jsxs("main",{className:"max-w-7xl mx-auto px-5 py-8",children:[I.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:[I.jsx("div",{className:"bg-[#0a0a0a] rounded-xl p-6 border border-neutral-800/60",children:I.jsxs("div",{className:"flex items-center gap-3",children:[I.jsx("div",{className:"w-12 h-12 bg-amber-600/10 rounded-lg flex items-center justify-center",children:I.jsx(sy,{className:"w-6 h-6 text-amber-500"})}),I.jsxs("div",{children:[I.jsx("p",{className:"text-neutral-400 text-sm",children:"Total Leads"}),I.jsx("p",{className:"text-2xl font-bold text-white",children:i.length})]})]})}),I.jsx("div",{className:"bg-[#0a0a0a] rounded-xl p-6 border border-neutral-800/60",children:I.jsxs("div",{className:"flex items-center gap-3",children:[I.jsx("div",{className:"w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center",children:I.jsx(iy,{className:"w-6 h-6 text-blue-500"})}),I.jsxs("div",{children:[I.jsx("p",{className:"text-neutral-400 text-sm",children:"Call Requests"}),I.jsx("p",{className:"text-2xl font-bold text-white",children:i.filter(H=>H.contactMethod==="call").length})]})]})}),I.jsx("div",{className:"bg-[#0a0a0a] rounded-xl p-6 border border-neutral-800/60",children:I.jsxs("div",{className:"flex items-center gap-3",children:[I.jsx("div",{className:"w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center",children:I.jsx(sl,{className:"w-6 h-6 text-green-500"})}),I.jsxs("div",{children:[I.jsx("p",{className:"text-neutral-400 text-sm",children:"WhatsApp Requests"}),I.jsx("p",{className:"text-2xl font-bold text-white",children:i.filter(H=>H.contactMethod==="whatsapp").length})]})]})})]}),I.jsx("div",{className:"bg-[#0a0a0a] rounded-xl p-5 border border-neutral-800/60 mb-6",children:I.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[I.jsxs("div",{className:"relative",children:[I.jsx(IS,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"}),I.jsx("input",{type:"text",placeholder:"Search by name, phone, or city...",value:y,onChange:H=>w(H.target.value),className:"w-full h-11 bg-[#050505] border border-neutral-700 rounded-lg pl-10 pr-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all"})]}),I.jsx("div",{children:I.jsxs("select",{value:E,onChange:H=>R(H.target.value),className:"w-full h-11 bg-[#050505] border border-neutral-700 rounded-lg px-4 text-white focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all",children:[I.jsx("option",{value:"all",children:"All Contact Methods"}),I.jsx("option",{value:"call",children:"Call Only"}),I.jsx("option",{value:"whatsapp",children:"WhatsApp Only"})]})}),I.jsx("div",{children:I.jsxs("select",{value:j,onChange:H=>W(H.target.value),className:"w-full h-11 bg-[#050505] border border-neutral-700 rounded-lg px-4 text-white focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all",children:[I.jsx("option",{value:"newest",children:"Newest First"}),I.jsx("option",{value:"oldest",children:"Oldest First"}),I.jsx("option",{value:"name-asc",children:"Name (A-Z)"}),I.jsx("option",{value:"name-desc",children:"Name (Z-A)"})]})})]})}),I.jsx("div",{className:"bg-[#0a0a0a] rounded-xl border border-neutral-800/60 overflow-hidden",children:f?I.jsx("div",{className:"flex items-center justify-center py-20",children:I.jsx(Mc,{className:"w-8 h-8 text-amber-500 animate-spin"})}):l.length===0?I.jsxs("div",{className:"text-center py-20",children:[I.jsx(sy,{className:"w-16 h-16 text-neutral-600 mx-auto mb-4"}),I.jsx("p",{className:"text-neutral-400 text-lg",children:y||E!=="all"?"No leads match your filters":"No leads yet"}),I.jsx("p",{className:"text-neutral-500 text-sm mt-2",children:y||E!=="all"?"Try adjusting your search criteria":"Leads will appear here when submitted"})]}):I.jsx("div",{className:"overflow-x-auto",children:I.jsxs("table",{className:"w-full",children:[I.jsx("thead",{className:"bg-[#050505] border-b border-neutral-800",children:I.jsxs("tr",{children:[I.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-neutral-300",children:"Name"}),I.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-neutral-300",children:"Phone"}),I.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-neutral-300",children:"City"}),I.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-neutral-300",children:"Contact Method"}),I.jsx("th",{className:"text-left px-6 py-4 text-sm font-semibold text-neutral-300",children:"Date & Time"})]})}),I.jsx("tbody",{className:"divide-y divide-neutral-800/60",children:l.map(H=>I.jsxs("tr",{className:"hover:bg-[#0f0f0f] transition-colors",children:[I.jsx("td",{className:"px-6 py-4 text-white font-medium",children:H.name}),I.jsx("td",{className:"px-6 py-4",children:I.jsx("a",{href:`tel:${H.phone}`,className:"text-amber-500 hover:text-amber-400 transition-colors",children:H.phone})}),I.jsx("td",{className:"px-6 py-4",children:I.jsxs("div",{className:"flex items-center gap-2 text-neutral-300",children:[I.jsx(_S,{className:"w-4 h-4 text-neutral-500"}),H.city||"N/A"]})}),I.jsx("td",{className:"px-6 py-4",children:H.contactMethod==="call"?I.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm",children:[I.jsx(iy,{className:"w-3.5 h-3.5"}),"Call"]}):I.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-green-600/10 text-green-400 rounded-full text-sm",children:[I.jsx(sl,{className:"w-3.5 h-3.5"}),"WhatsApp"]})}),I.jsx("td",{className:"px-6 py-4",children:I.jsxs("div",{className:"flex items-center gap-2 text-neutral-400 text-sm",children:[I.jsx(sS,{className:"w-4 h-4"}),$(H.timestamp)]})})]},H.id))})]})})}),!f&&l.length>0&&I.jsxs("div",{className:"mt-4 text-center text-neutral-500 text-sm",children:["Showing ",l.length," of ",i.length," leads"]})]})]})]})},F2=({children:n})=>{const{user:e,loading:t}=bp();return t?I.jsx("div",{className:"min-h-screen bg-[#050505] flex items-center justify-center",children:I.jsx(Mc,{className:"w-8 h-8 text-amber-500 animate-spin"})}):e?I.jsx(I.Fragment,{children:n}):I.jsx(_I,{to:"/admin/login",replace:!0})};TT.createRoot(document.getElementById("root")).render(I.jsx(qI,{children:I.jsx(O2,{children:I.jsxs(wI,{children:[I.jsx(Xu,{path:"/",element:I.jsx(C2,{})}),I.jsx(Xu,{path:"/admin/login",element:I.jsx(L2,{})}),I.jsx(Xu,{path:"/admin/dashboard",element:I.jsx(F2,{children:I.jsx(M2,{})})})]})})}));
