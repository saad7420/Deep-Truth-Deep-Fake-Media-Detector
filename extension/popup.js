(()=>{var $i=Object.defineProperty;var md=Object.getOwnPropertyDescriptor;var hd=Object.getOwnPropertyNames;var gd=Object.prototype.hasOwnProperty;var vd=(k,A)=>()=>(k&&(A=k(k=0)),A);var yd=(k,A)=>{for(var h in A)$i(k,h,{get:A[h],enumerable:!0})},wd=(k,A,h,ce)=>{if(A&&typeof A=="object"||typeof A=="function")for(let te of hd(A))!gd.call(k,te)&&te!==h&&$i(k,te,{get:()=>A[te],enumerable:!(ce=md(A,te))||ce.enumerable});return k};var xd=k=>wd($i({},"__esModule",{value:!0}),k);var ga={};yd(ga,{Component:()=>Td,Fragment:()=>zd,StrictMode:()=>_d,createContext:()=>Nd,createElement:()=>Pd,default:()=>w,useCallback:()=>kd,useContext:()=>Cd,useEffect:()=>Wi,useMemo:()=>Sd,useRef:()=>Ed,useState:()=>Zt});var ha,w,Zt,Wi,kd,Sd,Ed,Cd,Nd,zd,_d,Pd,Td,el=vd(()=>{(function(){"use strict";(function(k,A){typeof exports=="object"&&typeof module<"u"?A(exports):typeof define=="function"&&define.amd?define(["exports"],A):(k=k||self,A(k.React={}))})(this,function(k){function A(s){return s===null||typeof s!="object"?null:(s=bn&&s[bn]||s["@@iterator"],typeof s=="function"?s:null)}function h(s,m,S){this.props=s,this.context=m,this.refs=yn,this.updater=S||qn}function ce(){}function te(s,m,S){this.props=s,this.context=m,this.refs=yn,this.updater=S||qn}function hn(s,m,S){var T,I={},W=null,V=null;if(m!=null)for(T in m.ref!==void 0&&(V=m.ref),m.key!==void 0&&(W=""+m.key),m)tr.call(m,T)&&!nr.hasOwnProperty(T)&&(I[T]=m[T]);var $=arguments.length-2;if($===1)I.children=S;else if(1<$){for(var O=Array($),ne=0;ne<$;ne++)O[ne]=arguments[ne+2];I.children=O}if(s&&s.defaultProps)for(T in $=s.defaultProps,$)I[T]===void 0&&(I[T]=$[T]);return{$$typeof:H,type:s,key:W,ref:V,props:I,_owner:wn.current}}function $r(s,m){return{$$typeof:H,type:s.type,key:m,ref:s.ref,props:s.props,_owner:s._owner}}function gn(s){return typeof s=="object"&&s!==null&&s.$$typeof===H}function b(s){var m={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(S){return m[S]})}function st(s,m){return typeof s=="object"&&s!==null&&s.key!=null?b(""+s.key):m.toString(36)}function De(s,m,S,T,I){var W=typeof s;(W==="undefined"||W==="boolean")&&(s=null);var V=!1;if(s===null)V=!0;else switch(W){case"string":case"number":V=!0;break;case"object":switch(s.$$typeof){case H:case ve:V=!0}}if(V)return V=s,I=I(V),s=T===""?"."+st(V,0):T,er(I)?(S="",s!=null&&(S=s.replace(Lt,"$&/")+"/"),De(I,m,S,"",function(ne){return ne})):I!=null&&(gn(I)&&(I=$r(I,S+(!I.key||V&&V.key===I.key?"":(""+I.key).replace(Lt,"$&/")+"/")+s)),m.push(I)),1;if(V=0,T=T===""?".":T+":",er(s))for(var $=0;$<s.length;$++){W=s[$];var O=T+st(W,$);V+=De(W,m,S,O,I)}else if(O=A(s),typeof O=="function")for(s=O.call(s),$=0;!(W=s.next()).done;)W=W.value,O=T+st(W,$++),V+=De(W,m,S,O,I);else if(W==="object")throw m=String(s),Error("Objects are not valid as a React child (found: "+(m==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":m)+"). If you meant to render a collection of children, use an array instead.");return V}function ke(s,m,S){if(s==null)return s;var T=[],I=0;return De(s,T,"","",function(W){return m.call(S,W,I++)}),T}function Jt(s){if(s._status===-1){var m=s._result;m=m(),m.then(function(S){(s._status===0||s._status===-1)&&(s._status=1,s._result=S)},function(S){(s._status===0||s._status===-1)&&(s._status=2,s._result=S)}),s._status===-1&&(s._status=0,s._result=m)}if(s._status===1)return s._result.default;throw s._result}function bt(s,m){var S=s.length;s.push(m);e:for(;0<S;){var T=S-1>>>1,I=s[T];if(0<Se(I,m))s[T]=m,s[S]=I,S=T;else break e}}function de(s){return s.length===0?null:s[0]}function Pt(s){if(s.length===0)return null;var m=s[0],S=s.pop();if(S!==m){s[0]=S;e:for(var T=0,I=s.length,W=I>>>1;T<W;){var V=2*(T+1)-1,$=s[V],O=V+1,ne=s[O];if(0>Se($,S))O<I&&0>Se(ne,$)?(s[T]=ne,s[O]=S,T=O):(s[T]=$,s[V]=S,T=V);else if(O<I&&0>Se(ne,S))s[T]=ne,s[O]=S,T=O;else break e}}return m}function Se(s,m){var S=s.sortIndex-m.sortIndex;return S!==0?S:s.id-m.id}function at(s){for(var m=de(We);m!==null;){if(m.callback===null)Pt(We);else if(m.startTime<=s)Pt(We),m.sortIndex=m.expirationTime,bt(Fe,m);else break;m=de(We)}}function qt(s){if(tn=!1,at(s),!mt)if(de(Fe)!==null)mt=!0,qe(ct);else{var m=de(We);m!==null&&dt(qt,m.startTime-s)}}function ct(s,m){mt=!1,tn&&(tn=!1,or(ht),ht=-1),pt=!0;var S=Z;try{for(at(m),_e=de(Fe);_e!==null&&(!(_e.expirationTime>m)||s&&!be());){var T=_e.callback;if(typeof T=="function"){_e.callback=null,Z=_e.priorityLevel;var I=T(_e.expirationTime<=m);m=et(),typeof I=="function"?_e.callback=I:_e===de(Fe)&&Pt(Fe),at(m)}else Pt(Fe);_e=de(Fe)}if(_e!==null)var W=!0;else{var V=de(We);V!==null&&dt(qt,V.startTime-m),W=!1}return W}finally{_e=null,Z=S,pt=!1}}function be(){return!(et()-ir<lr)}function qe(s){En=s,tt||(tt=!0,Cn())}function dt(s,m){ht=kn(function(){s(et())},m)}function z(s){throw Error("act(...) is not supported in production builds of React.")}var H=Symbol.for("react.element"),ve=Symbol.for("react.portal"),en=Symbol.for("react.fragment"),Gn=Symbol.for("react.strict_mode"),Tt=Symbol.for("react.profiler"),Zn=Symbol.for("react.provider"),Wr=Symbol.for("react.context"),Br=Symbol.for("react.forward_ref"),Qr=Symbol.for("react.suspense"),Kr=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),bn=Symbol.iterator,qn={isMounted:function(s){return!1},enqueueForceUpdate:function(s,m,S){},enqueueReplaceState:function(s,m,S,T){},enqueueSetState:function(s,m,S,T){}},vn=Object.assign,yn={};h.prototype.isReactComponent={},h.prototype.setState=function(s,m){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,m,"setState")},h.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")},ce.prototype=h.prototype;var Ue=te.prototype=new ce;Ue.constructor=te,vn(Ue,h.prototype),Ue.isPureReactComponent=!0;var er=Array.isArray,tr=Object.prototype.hasOwnProperty,wn={current:null},nr={key:!0,ref:!0,__self:!0,__source:!0},Lt=/\/+/g,fe={current:null},xn={transition:null};if(typeof performance=="object"&&typeof performance.now=="function")var ft=performance,et=function(){return ft.now()};else{var rr=Date,tl=rr.now();et=function(){return rr.now()-tl}}var Fe=[],We=[],nl=1,_e=null,Z=3,pt=!1,mt=!1,tn=!1,kn=typeof setTimeout=="function"?setTimeout:null,or=typeof clearTimeout=="function"?clearTimeout:null,Sn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var tt=!1,En=null,ht=-1,lr=5,ir=-1,gt=function(){if(En!==null){var s=et();ir=s;var m=!0;try{m=En(!0,s)}finally{m?Cn():(tt=!1,En=null)}}else tt=!1};if(typeof Sn=="function")var Cn=function(){Sn(gt)};else if(typeof MessageChannel<"u"){Ue=new MessageChannel;var Yr=Ue.port2;Ue.port1.onmessage=gt,Cn=function(){Yr.postMessage(null)}}else Cn=function(){kn(gt,0)};Ue={ReactCurrentDispatcher:fe,ReactCurrentOwner:wn,ReactCurrentBatchConfig:xn,Scheduler:{__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(s,m){switch(s){case 1:case 2:case 3:case 4:case 5:break;default:s=3}var S=Z;Z=s;try{return m()}finally{Z=S}},unstable_next:function(s){switch(Z){case 1:case 2:case 3:var m=3;break;default:m=Z}var S=Z;Z=m;try{return s()}finally{Z=S}},unstable_scheduleCallback:function(s,m,S){var T=et();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?T+S:T):S=T,s){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=S+I,s={id:nl++,callback:m,priorityLevel:s,startTime:S,expirationTime:I,sortIndex:-1},S>T?(s.sortIndex=S,bt(We,s),de(Fe)===null&&s===de(We)&&(tn?(or(ht),ht=-1):tn=!0,dt(qt,S-T))):(s.sortIndex=I,bt(Fe,s),mt||pt||(mt=!0,qe(ct))),s},unstable_cancelCallback:function(s){s.callback=null},unstable_wrapCallback:function(s){var m=Z;return function(){var S=Z;Z=m;try{return s.apply(this,arguments)}finally{Z=S}}},unstable_getCurrentPriorityLevel:function(){return Z},unstable_shouldYield:be,unstable_requestPaint:function(){},unstable_continueExecution:function(){mt||pt||(mt=!0,qe(ct))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return de(Fe)},get unstable_now(){return et},unstable_forceFrameRate:function(s){0>s||125<s?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lr=0<s?Math.floor(1e3/s):5},unstable_Profiling:null}},k.Children={map:ke,forEach:function(s,m,S){ke(s,function(){m.apply(this,arguments)},S)},count:function(s){var m=0;return ke(s,function(){m++}),m},toArray:function(s){return ke(s,function(m){return m})||[]},only:function(s){if(!gn(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},k.Component=h,k.Fragment=en,k.Profiler=Tt,k.PureComponent=te,k.StrictMode=Gn,k.Suspense=Qr,k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ue,k.act=z,k.cloneElement=function(s,m,S){if(s==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+s+".");var T=vn({},s.props),I=s.key,W=s.ref,V=s._owner;if(m!=null){if(m.ref!==void 0&&(W=m.ref,V=wn.current),m.key!==void 0&&(I=""+m.key),s.type&&s.type.defaultProps)var $=s.type.defaultProps;for(O in m)tr.call(m,O)&&!nr.hasOwnProperty(O)&&(T[O]=m[O]===void 0&&$!==void 0?$[O]:m[O])}var O=arguments.length-2;if(O===1)T.children=S;else if(1<O){$=Array(O);for(var ne=0;ne<O;ne++)$[ne]=arguments[ne+2];T.children=$}return{$$typeof:H,type:s.type,key:I,ref:W,props:T,_owner:V}},k.createContext=function(s){return s={$$typeof:Wr,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},s.Provider={$$typeof:Zn,_context:s},s.Consumer=s},k.createElement=hn,k.createFactory=function(s){var m=hn.bind(null,s);return m.type=s,m},k.createRef=function(){return{current:null}},k.forwardRef=function(s){return{$$typeof:Br,render:s}},k.isValidElement=gn,k.lazy=function(s){return{$$typeof:Jn,_payload:{_status:-1,_result:s},_init:Jt}},k.memo=function(s,m){return{$$typeof:Kr,type:s,compare:m===void 0?null:m}},k.startTransition=function(s,m){m=xn.transition,xn.transition={};try{s()}finally{xn.transition=m}},k.unstable_act=z,k.useCallback=function(s,m){return fe.current.useCallback(s,m)},k.useContext=function(s){return fe.current.useContext(s)},k.useDebugValue=function(s,m){},k.useDeferredValue=function(s){return fe.current.useDeferredValue(s)},k.useEffect=function(s,m){return fe.current.useEffect(s,m)},k.useId=function(){return fe.current.useId()},k.useImperativeHandle=function(s,m,S){return fe.current.useImperativeHandle(s,m,S)},k.useInsertionEffect=function(s,m){return fe.current.useInsertionEffect(s,m)},k.useLayoutEffect=function(s,m){return fe.current.useLayoutEffect(s,m)},k.useMemo=function(s,m){return fe.current.useMemo(s,m)},k.useReducer=function(s,m,S){return fe.current.useReducer(s,m,S)},k.useRef=function(s){return fe.current.useRef(s)},k.useState=function(s){return fe.current.useState(s)},k.useSyncExternalStore=function(s,m,S){return fe.current.useSyncExternalStore(s,m,S)},k.useTransition=function(){return fe.current.useTransition()},k.version="18.3.1"})})();ha=window.React,w=ha,{useState:Zt,useEffect:Wi,useCallback:kd,useMemo:Sd,useRef:Ed,useContext:Cd,createContext:Nd,Fragment:zd,StrictMode:_d,createElement:Pd,Component:Td}=ha});el();(function(){"use strict";(function(k,A){typeof exports=="object"&&typeof module<"u"?A(exports,(el(),xd(ga))):typeof define=="function"&&define.amd?define(["exports","react"],A):(k=k||self,A(k.ReactDOM={},k.React))})(this,function(k,A){function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ce(e,t){te(e,t),te(e+"Capture",t)}function te(e,t){for(vr[e]=t,e=0;e<t.length;e++)Ds.add(t[e])}function hn(e){return ql.call(Os,e)?!0:ql.call(Fs,e)?!1:rc.test(e)?Os[e]=!0:(Fs[e]=!0,!1)}function $r(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gn(e,t,n,r){if(t===null||typeof t>"u"||$r(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}function st(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gn(t,n,o,r)&&(n=null),r||o===null?hn(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}function De(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}function ke(e,t,n){if(si===void 0)try{throw Error()}catch(r){si=(t=r.stack.trim().match(/\n( *(at )?)/))&&t[1]||""}return`
`+si+e}function Jt(e,t){if(!e||ai)return"";ai=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var o=p.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,u=l.length-1;1<=i&&0<=u&&o[i]!==l[u];)u--;for(;1<=i&&0<=u;i--,u--)if(o[i]!==l[u]){if(i!==1||u!==1)do if(i--,u--,0>u||o[i]!==l[u]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=u);break}}}finally{ai=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ke(e):""}function bt(e){switch(e.tag){case 5:return ke(e.type);case 16:return ke("Lazy");case 13:return ke("Suspense");case 19:return ke("SuspenseList");case 0:case 2:case 15:return e=Jt(e.type,!1),e;case 11:return e=Jt(e.type.render,!1),e;case 1:return e=Jt(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case Fn:return"Portal";case ri:return"Profiler";case ni:return"StrictMode";case li:return"Suspense";case ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Us:return(e.displayName||"Context")+".Consumer";case js:return(e._context.displayName||"Context")+".Provider";case oi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ui:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}function Pt(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(t);case 8:return t===ni?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function at(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qt(e){var t=at(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ct(e){e._valueTracker||(e._valueTracker=qt(e))}function be(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=at(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dt(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function z(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Se(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function H(e,t){t=t.checked,t!=null&&st(e,"checked",t,!1)}function ve(e,t){H(e,t);var n=Se(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gn(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gn(e,t.type,Se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function en(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gn(e,t,n){(t!=="number"||qe(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Tt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Se(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Zn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(yr(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Se(n)}}function Br(e,t){var n=Se(t.value),r=Se(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Qr(e,t){t=e.textContent,t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}function bn(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xr.hasOwnProperty(e)&&xr[e]?(""+t).trim():t+"px"}function qn(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=bn(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}function vn(e,t){if(t){if(lc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function yn(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Ue(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function er(e){if(e=cr(e)){if(typeof di!="function")throw Error(h(280));var t=e.stateNode;t&&(t=no(t),di(e.stateNode,e.type,t))}}function tr(e){jn?Un?Un.push(e):Un=[e]:jn=e}function wn(){if(jn){var e=jn,t=Un;if(Un=jn=null,er(e),t)for(e=0;e<t.length;e++)er(t[e])}}function nr(e,t,n){if(fi)return e(t,n);fi=!0;try{return Vs(e,t,n)}finally{fi=!1,(jn!==null||Un!==null)&&($s(),wn())}}function Lt(e,t){var n=e.stateNode;if(n===null)return null;var r=no(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}function fe(e,t,n,r,o,l,i,u,a){Sr=!1,No=null,ic.apply(uc,arguments)}function xn(e,t,n,r,o,l,i,u,a){if(fe.apply(this,arguments),Sr){if(Sr){var p=No;Sr=!1,No=null}else throw Error(h(198));zo||(zo=!0,mi=p)}}function ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function et(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rr(e){if(ft(e)!==e)throw Error(h(188))}function tl(e){var t=e.alternate;if(!t){if(t=ft(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return rr(o),e;if(l===r)return rr(o),t;l=l.sibling}throw Error(h(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i){for(u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function Fe(e){return e=tl(e),e!==null?We(e):null}function We(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=We(e);if(t!==null)return t;e=e.sibling}return null}function nl(e,t){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Po,e,void 0,(e.current.flags&128)===128)}catch{}}function _e(e){return e>>>=0,e===0?32:31-(fc(e)/pc|0)|0}function Z(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~o;u!==0?r=Z(u):(l&=i,l!==0&&(r=Z(l)))}else i=n&~o,i!==0?r=Z(i):l!==0&&(r=Z(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xe(t),o=1<<n,r|=e[n],t&=~o;return r}function mt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Xe(l),u=1<<i,a=o[i];a===-1?(!(u&n)||u&r)&&(o[i]=mt(u,t)):a<=t&&(e.expiredLanes|=u),l&=~u}}function kn(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function or(){var e=To;return To<<=1,!(To&4194240)&&(To=64),e}function Sn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function En(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Xe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ht(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function lr(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}function ir(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function gt(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=cr(t),t!==null&&ma(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Cn(e,t,n,r,o){switch(t){case"focusin":return Ht=gt(Ht,e,t,n,r,o),!0;case"dragenter":return Vt=gt(Vt,e,t,n,r,o),!0;case"mouseover":return $t=gt($t,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Er.set(l,gt(Er.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Cr.set(l,gt(Cr.get(l)||null,e,t,n,r,o)),!0}return!1}function Yr(e){var t=nn(e.target);if(t!==null){var n=ft(t);if(n!==null){if(t=n.tag,t===13){if(t=et(n),t!==null){e.blockedOn=t,dd(e.priority,function(){ad(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=O(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ci=r,n.target.dispatchEvent(r),ci=null}else return t=cr(n),t!==null&&ma(t),e.blockedOn=n,!1;t.shift()}return!0}function m(e,t,n){s(e)&&n.delete(t)}function S(){gi=!1,Ht!==null&&s(Ht)&&(Ht=null),Vt!==null&&s(Vt)&&(Vt=null),$t!==null&&s($t)&&($t=null),Er.forEach(m),Cr.forEach(m)}function T(e,t){e.blockedOn===t&&(e.blockedOn=null,gi||(gi=!0,Ws(Bs,S)))}function I(e){if(0<Mo.length){T(Mo[0],e);for(var t=1;t<Mo.length;t++){var n=Mo[t];n.blockedOn===e&&(n.blockedOn=null)}}for(Ht!==null&&T(Ht,e),Vt!==null&&T(Vt,e),$t!==null&&T($t,e),t=function(r){return T(r,e)},Er.forEach(t),Cr.forEach(t),t=0;t<Wt.length;t++)n=Wt[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<Wt.length&&(t=Wt[0],t.blockedOn===null);)Yr(t),t.blockedOn===null&&Wt.shift()}function W(e,t,n,r){var o=U,l=Rn.transition;Rn.transition=null;try{U=1,$(e,t,n,r)}finally{U=o,Rn.transition=l}}function V(e,t,n,r){var o=U,l=Rn.transition;Rn.transition=null;try{U=4,$(e,t,n,r)}finally{U=o,Rn.transition=l}}function $(e,t,n,r){if(Io){var o=O(e,t,n,r);if(o===null)il(e,t,r,Do,n),ir(e,r);else if(Cn(o,e,t,n,r))r.stopPropagation();else if(ir(e,r),t&4&&-1<mc.indexOf(e)){for(;o!==null;){var l=cr(o);if(l!==null&&sd(l),l=O(e,t,n,r),l===null&&il(e,t,r,Do,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else il(e,t,r,null,n)}}function O(e,t,n,r){if(Do=null,e=Ue(r),e=nn(e),e!==null)if(t=ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=et(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Do=e,null}function ne(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cc()){case hi:return 1;case Ys:return 4;case _o:case dc:return 16;case Xs:return 536870912;default:return 16}default:return 16}}function Bi(){if(Fo)return Fo;var e,t=vi,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Fo=o.slice(e,1<r?1-r:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function Qi(){return!1}function Oe(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Gr:Qi,this.isPropagationStopped=Qi,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),t}function xa(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_c[e])?!!t[e]:!1}function rl(e){return xa}function Ki(e,t){switch(e){case"keyup":return Uc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}function ka(e,t){switch(e){case"compositionend":return Yi(t);case"keypress":return t.which!==32?null:(ea=!0,qs);case"textInput":return e=t.data,e===qs&&ea?null:e;default:return null}}function Sa(e,t){if(Hn)return e==="compositionend"||!Si&&Ki(e,t)?(e=Bi(),Fo=vi=Bt=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bs&&t.locale!=="ko"?null:t.data;default:return null}}function Xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ac[e.type]:t==="textarea"}function Ea(e){if(!kt)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}function Gi(e,t,n,r){tr(r),t=qr(t,"onChange"),0<t.length&&(n=new yi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}function Ca(e){ou(e,0)}function Zr(e){var t=zn(e);if(be(t))return e}function Na(e,t){if(e==="change")return t}function Zi(){Pr&&(Pr.detachEvent("onpropertychange",Ji),Tr=Pr=null)}function Ji(e){if(e.propertyName==="value"&&Zr(Tr)){var t=[];Gi(t,Tr,e,Ue(e)),nr(Ca,t)}}function za(e,t,n){e==="focusin"?(Zi(),Pr=t,Tr=n,Pr.attachEvent("onpropertychange",Ji)):e==="focusout"&&Zi()}function _a(e,t){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zr(Tr)}function Pa(e,t){if(e==="click")return Zr(t)}function Ta(e,t){if(e==="input"||e==="change")return Zr(t)}function La(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}function ur(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ql.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function bi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qi(e,t){var n=bi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bi(n)}}function eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tu(){for(var e=window,t=qe();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qe(e.document)}return t}function ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ma(e){var t=tu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&eu(n.ownerDocument.documentElement,n)){if(r!==null&&ol(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=qi(n,l);var i=qi(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}function nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ci||Vn==null||Vn!==qe(r)||(r=Vn,"selectionStart"in r&&ol(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&ur(Lr,r)||(Lr=r,r=qr(Ei,"onSelect"),0<r.length&&(t=new yi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}function br(e){if(Ni[e])return Ni[e];if(!$n[e])return e;var t=$n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in na)return Ni[e]=t[n];return e}function Mt(e,t){ua.set(e,t),ce(t,[e])}function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xn(r,t,void 0,e),e.currentTarget=null}function ou(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],a=u.instance,p=u.currentTarget;if(u=u.listener,a!==l&&o.isPropagationStopped())break e;ru(o,u,p),l=a}else for(i=0;i<r.length;i++){if(u=r[i],a=u.instance,p=u.currentTarget,u=u.listener,a!==l&&o.isPropagationStopped())break e;ru(o,u,p),l=a}}}if(zo)throw e=mi,zo=!1,mi=null,e}function Q(e,t){var n=t[Ti];n===void 0&&(n=t[Ti]=new Set);var r=e+"__bubble";n.has(r)||(lu(t,e,2,!1),n.add(r))}function ll(e,t,n){var r=0;t&&(r|=4),lu(n,e,r,t)}function sr(e){if(!e[jo]){e[jo]=!0,Ds.forEach(function(n){n!=="selectionchange"&&(Vc.has(n)||ll(n,!1,e),ll(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[jo]||(t[jo]=!0,ll("selectionchange",!1,t))}}function lu(e,t,n,r,o){switch(ne(t)){case 1:o=W;break;case 4:o=V;break;default:o=$}n=o.bind(null,t,n,e),o=void 0,!pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function il(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;u!==null;){if(i=nn(u),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}u=u.parentNode}}r=r.return}nr(function(){var p=l,v=Ue(n),y=[];e:{var g=ua.get(e);if(g!==void 0){var E=yi,N=e;switch(e){case"keypress":if(Xr(n)===0)break e;case"keydown":case"keyup":E=Tc;break;case"focusin":N="focus",E=ki;break;case"focusout":N="blur",E=ki;break;case"beforeblur":case"afterblur":E=ki;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=vc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Ic;break;case ra:case oa:case la:E=xc;break;case ia:E=Fc;break;case"scroll":E=hc;break;case"wheel":E=jc;break;case"copy":case"cut":case"paste":E=Sc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Js}var _=(t&4)!==0,q=!_&&e==="scroll",d=_?g!==null?g+"Capture":null:g;_=[];for(var c=p,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,d!==null&&(x=Lt(c,d),x!=null&&_.push(ar(c,x,f)))),q)break;c=c.return}0<_.length&&(g=new E(g,N,null,n,v),y.push({event:g,listeners:_}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",g&&n!==ci&&(N=n.relatedTarget||n.fromElement)&&(nn(N)||N[Et]))break e;if((E||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,E?(N=n.relatedTarget||n.toElement,E=p,N=N?nn(N):null,N!==null&&(q=ft(N),N!==q||N.tag!==5&&N.tag!==6)&&(N=null)):(E=null,N=p),E!==N)){if(_=Gs,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Js,x="onPointerLeave",d="onPointerEnter",c="pointer"),q=E==null?g:zn(E),f=N==null?g:zn(N),g=new _(x,c+"leave",E,n,v),g.target=q,g.relatedTarget=f,x=null,nn(v)===p&&(_=new _(d,c+"enter",N,n,v),_.target=f,_.relatedTarget=q,x=_),q=x,E&&N)t:{for(_=E,d=N,c=0,f=_;f;f=Nn(f))c++;for(f=0,x=d;x;x=Nn(x))f++;for(;0<c-f;)_=Nn(_),c--;for(;0<f-c;)d=Nn(d),f--;for(;c--;){if(_===d||d!==null&&_===d.alternate)break t;_=Nn(_),d=Nn(d)}_=null}else _=null;E!==null&&iu(y,g,E,_,!1),N!==null&&q!==null&&iu(y,q,N,_,!0)}}e:{if(g=p?zn(p):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var P=Na;else if(Xi(g))if(ta)P=Ta;else{P=_a;var L=za}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=Pa);if(P&&(P=P(e,p))){Gi(y,P,n,v);break e}L&&L(e,g,p),e==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&Gn(g,"number",g.value)}switch(L=p?zn(p):window,e){case"focusin":(Xi(L)||L.contentEditable==="true")&&(Vn=L,Ei=p,Lr=null);break;case"focusout":Lr=Ei=Vn=null;break;case"mousedown":Ci=!0;break;case"contextmenu":case"mouseup":case"dragend":Ci=!1,nu(y,n,v);break;case"selectionchange":if(Hc)break;case"keydown":case"keyup":nu(y,n,v)}var M;if(Si)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Hn?Ki(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(bs&&n.locale!=="ko"&&(Hn||D!=="onCompositionStart"?D==="onCompositionEnd"&&Hn&&(M=Bi()):(Bt=v,vi="value"in Bt?Bt.value:Bt.textContent,Hn=!0)),L=qr(p,D),0<L.length&&(D=new Zs(D,e,null,n,v),y.push({event:D,listeners:L}),M?D.data=M:(M=Yi(n),M!==null&&(D.data=M)))),(M=Rc?ka(e,n):Sa(e,n))&&(p=qr(p,"onBeforeInput"),0<p.length&&(v=new Cc("onBeforeInput","beforeinput",null,n,v),y.push({event:v,listeners:p}),v.data=M))}ou(y,t)})}function ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Lt(e,n),l!=null&&r.unshift(ar(e,l,o)),l=Lt(e,t),l!=null&&r.push(ar(e,l,o))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var u=n,a=u.alternate,p=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&p!==null&&(u=p,o?(a=Lt(n,l),a!=null&&i.unshift(ar(n,a,u))):o||(a=Lt(n,l),a!=null&&i.push(ar(n,a,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}function uu(e){return(typeof e=="string"?e:""+e).replace($c,`
`).replace(Wc,"")}function eo(e,t,n,r){if(t=uu(t),uu(e)!==t&&n)throw Error(h(425))}function to(){}function ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function Ia(e){setTimeout(function(){throw e})}function sl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),I(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);I(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function nn(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=su(e);e!==null;){if(n=e[lt])return n;e=su(e)}return t}e=n,n=e.parentNode}return null}function cr(e){return e=e[lt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function no(e){return e[Ir]||null}function It(e){return{current:e}}function j(e,t){0>Bn||(e.current=Li[Bn],Li[Bn]=null,Bn--)}function B(e,t,n){Bn++,Li[Bn]=e.current,e.current=t}function _n(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function au(e,t,n){if(re.current!==Qt)throw Error(h(168));B(re,t),B(me,n)}function cu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(h(108,Pt(e)||"Unknown",o));return Y({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,cn=re.current,B(re,e),B(me,me.current),!0}function du(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=cu(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,j(me),j(re),B(re,e)):j(me),B(me,n)}function fu(e){Ct===null?Ct=[e]:Ct.push(e)}function Da(e){Uo=!0,fu(e)}function Dt(){if(!Mi&&Ct!==null){Mi=!0;var e=0,t=U;try{var n=Ct;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ct=null,Uo=!1}catch(o){throw Ct!==null&&(Ct=Ct.slice(e+1)),Qs(hi,Dt),o}finally{U=t,Mi=!1}}return null}function rn(e,t){Qn[Kn++]=Ao,Qn[Kn++]=Ro,Ro=e,Ao=t}function pu(e,t,n){He[Ve++]=Nt,He[Ve++]=zt,He[Ve++]=dn,dn=e;var r=Nt;e=zt;var o=32-Xe(r)-1;r&=~(1<<o),n+=1;var l=32-Xe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Nt=1<<32-Xe(t)+o|n<<o|r,zt=l+e}else Nt=1<<l|n<<o|r,zt=e}function al(e){e.return!==null&&(rn(e,1),pu(e,1,0))}function cl(e){for(;e===Ro;)Ro=Qn[--Kn],Qn[Kn]=null,Ao=Qn[--Kn],Qn[Kn]=null;for(;e===dn;)dn=He[--Ve],He[Ve]=null,zt=He[--Ve],He[Ve]=null,Nt=He[--Ve],He[Ve]=null}function mu(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function hu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Le=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:Nt,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Le=null,!0):!1;default:return!1}}function dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fl(e){if(K){var t=Le;if(t){var n=t;if(!hu(e,t)){if(dl(e))throw Error(h(418));t=vt(n.nextSibling);var r=je;t&&hu(e,t)?mu(r,n):(e.flags=e.flags&-4097|2,K=!1,je=e)}}else{if(dl(e))throw Error(h(418));e.flags=e.flags&-4097|2,K=!1,je=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function oo(e){if(e!==je)return!1;if(!K)return gu(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ul(e.type,e.memoizedProps)),t&&(t=Le)){if(dl(e)){for(e=Le;e;)e=vt(e.nextSibling);throw Error(h(418))}for(;t;)mu(e,t),t=vt(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=je?vt(e.stateNode.nextSibling):null;return!0}function Pn(){Le=je=null,K=!1}function pl(e){Ze===null?Ze=[e]:Ze.push(e)}function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var u=o.refs;i===null?delete u[l]:u[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function lo(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vu(e){var t=e._init;return t(e._payload)}function yu(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Rt(d,c),d.index=0,d.sibling=null,d}function l(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,c,f,x){return c===null||c.tag!==6?(c=Yl(f,d.mode,x),c.return=d,c):(c=o(c,f),c.return=d,c)}function a(d,c,f,x){var P=f.type;return P===On?v(d,c,f.props.children,x,f.key):c!==null&&(c.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===At&&vu(P)===c.type)?(x=o(c,f.props),x.ref=dr(d,c,f),x.return=d,x):(x=go(f.type,f.key,f.props,null,d.mode,x),x.ref=dr(d,c,f),x.return=d,x)}function p(d,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Xl(f,d.mode,x),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function v(d,c,f,x,P){return c===null||c.tag!==7?(c=an(f,d.mode,x,P),c.return=d,c):(c=o(c,f),c.return=d,c)}function y(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Yl(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Eo:return f=go(c.type,c.key,c.props,null,d.mode,f),f.ref=dr(d,null,c),f.return=d,f;case Fn:return c=Xl(c,d.mode,f),c.return=d,c;case At:var x=c._init;return y(d,x(c._payload),f)}if(yr(c)||De(c))return c=an(c,d.mode,f,null),c.return=d,c;lo(d,c)}return null}function g(d,c,f,x){var P=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return P!==null?null:u(d,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Eo:return f.key===P?a(d,c,f,x):null;case Fn:return f.key===P?p(d,c,f,x):null;case At:return P=f._init,g(d,c,P(f._payload),x)}if(yr(f)||De(f))return P!==null?null:v(d,c,f,x,null);lo(d,f)}return null}function E(d,c,f,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(f)||null,u(c,d,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Eo:return d=d.get(x.key===null?f:x.key)||null,a(c,d,x,P);case Fn:return d=d.get(x.key===null?f:x.key)||null,p(c,d,x,P);case At:var L=x._init;return E(d,c,f,L(x._payload),P)}if(yr(x)||De(x))return d=d.get(f)||null,v(c,d,x,P,null);lo(c,x)}return null}function N(d,c,f,x){for(var P=null,L=null,M=c,D=c=0,ae=null;M!==null&&D<f.length;D++){M.index>D?(ae=M,M=null):ae=M.sibling;var R=g(d,M,f[D],x);if(R===null){M===null&&(M=ae);break}e&&M&&R.alternate===null&&t(d,M),c=l(R,c,D),L===null?P=R:L.sibling=R,L=R,M=ae}if(D===f.length)return n(d,M),K&&rn(d,D),P;if(M===null){for(;D<f.length;D++)M=y(d,f[D],x),M!==null&&(c=l(M,c,D),L===null?P=M:L.sibling=M,L=M);return K&&rn(d,D),P}for(M=r(d,M);D<f.length;D++)ae=E(M,d,D,f[D],x),ae!==null&&(e&&ae.alternate!==null&&M.delete(ae.key===null?D:ae.key),c=l(ae,c,D),L===null?P=ae:L.sibling=ae,L=ae);return e&&M.forEach(function(Gt){return t(d,Gt)}),K&&rn(d,D),P}function _(d,c,f,x){var P=De(f);if(typeof P!="function")throw Error(h(150));if(f=P.call(f),f==null)throw Error(h(151));for(var L=P=null,M=c,D=c=0,ae=null,R=f.next();M!==null&&!R.done;D++,R=f.next()){M.index>D?(ae=M,M=null):ae=M.sibling;var Gt=g(d,M,R.value,x);if(Gt===null){M===null&&(M=ae);break}e&&M&&Gt.alternate===null&&t(d,M),c=l(Gt,c,D),L===null?P=Gt:L.sibling=Gt,L=Gt,M=ae}if(R.done)return n(d,M),K&&rn(d,D),P;if(M===null){for(;!R.done;D++,R=f.next())R=y(d,R.value,x),R!==null&&(c=l(R,c,D),L===null?P=R:L.sibling=R,L=R);return K&&rn(d,D),P}for(M=r(d,M);!R.done;D++,R=f.next())R=E(M,d,D,R.value,x),R!==null&&(e&&R.alternate!==null&&M.delete(R.key===null?D:R.key),c=l(R,c,D),L===null?P=R:L.sibling=R,L=R);return e&&M.forEach(function(pd){return t(d,pd)}),K&&rn(d,D),P}function q(d,c,f,x){if(typeof f=="object"&&f!==null&&f.type===On&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Eo:e:{for(var P=f.key,L=c;L!==null;){if(L.key===P){if(P=f.type,P===On){if(L.tag===7){n(d,L.sibling),c=o(L,f.props.children),c.return=d,d=c;break e}}else if(L.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===At&&vu(P)===L.type){n(d,L.sibling),c=o(L,f.props),c.ref=dr(d,L,f),c.return=d,d=c;break e}n(d,L);break}else t(d,L);L=L.sibling}f.type===On?(c=an(f.props.children,d.mode,x,f.key),c.return=d,d=c):(x=go(f.type,f.key,f.props,null,d.mode,x),x.ref=dr(d,c,f),x.return=d,d=x)}return i(d);case Fn:e:{for(L=f.key;c!==null;){if(c.key===L)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Xl(f,d.mode,x),c.return=d,d=c}return i(d);case At:return L=f._init,q(d,c,L(f._payload),x)}if(yr(f))return N(d,c,f,x);if(De(f))return _(d,c,f,x);lo(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=Yl(f,d.mode,x),c.return=d,d=c),i(d)):n(d,c)}return q}function ml(){Ii=Xn=Vo=null}function hl(e,t){t=Ho.current,j(Ho),e._currentValue=t}function gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){Vo=e,Ii=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Me=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Ii!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(Vo===null)throw Error(h(308));Xn=e,Vo.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}function vl(e){fn===null?fn=[e]:fn.push(e)}function wu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,vl(t)):(n.next=o.next,o.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Gc(e,n)}return o=r.interleaved,o===null?(t.next=t,vl(r)):(t.next=o.next,o.next=t),r.interleaved=t,yt(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ht(e,n)}}function ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var o=e.updateQueue;Kt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var a=u,p=a.next;a.next=null,i===null?l=p:i.next=p,i=a;var v=e.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==i&&(u===null?v.firstBaseUpdate=p:u.next=p,v.lastBaseUpdate=a))}if(l!==null){var y=o.baseState;i=0,v=p=a=null,u=l;do{var g=u.lane,E=u.eventTime;if((r&g)===g){v!==null&&(v=v.next={eventTime:E,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var N=e,_=u;switch(g=t,E=n,_.tag){case 1:if(N=_.payload,typeof N=="function"){y=N.call(E,y,g);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=_.payload,g=typeof N=="function"?N.call(E,y,g):N,g==null)break e;y=Y({},y,g);break e;case 2:Kt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[u]:g.push(u))}else E={eventTime:E,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(p=v=E,a=y):v=v.next=E,i|=g;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;g=u,u=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(v===null&&(a=y),o.baseState=a,o.firstBaseUpdate=p,o.lastBaseUpdate=v,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);mn|=i,e.lanes=i,e.memoizedState=y}}function Su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(h(191,o));o.call(r)}}}function on(e){if(e===Dr)throw Error(h(174));return e}function wl(e,t){switch(B(Or,t),B(Fr,e),B(it,Dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jn(t,e)}j(it),B(it,t)}function Ln(e){j(it),j(Fr),j(Or)}function Eu(e){on(Or.current);var t=on(it.current),n=Jn(t,e.type);t!==n&&(B(Fr,e),B(it,n))}function xl(e){Fr.current===e&&(j(it),j(Fr))}function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function kl(){for(var e=0;e<Di.length;e++)Di[e]._workInProgressVersionPrimary=null;Di.length=0}function ye(){throw Error(h(321))}function Sl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function El(e,t,n,r,o,l){if(pn=l,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$o.current=e===null||e.memoizedState===null?Jc:bc,e=n(r,o),jr){l=0;do{if(jr=!1,Ur=0,25<=l)throw Error(h(301));l+=1,ue=oe=null,t.updateQueue=null,$o.current=qc,e=n(r,o)}while(jr)}if($o.current=Bo,t=oe!==null&&oe.next!==null,pn=0,ue=oe=G=null,Wo=!1,t)throw Error(h(300));return e}function Cl(){var e=Ur!==0;return Ur=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?G.memoizedState=ue=e:ue=ue.next=e,ue}function Ae(){if(oe===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=ue===null?G.memoizedState:ue.next;if(t!==null)ue=t,oe=e;else{if(e===null)throw Error(h(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},ue===null?G.memoizedState=ue=e:ue=ue.next=e}return ue}function fr(e,t){return typeof t=="function"?t(e):t}function Nl(e,t,n){if(t=Ae(),n=t.queue,n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=oe,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var u=i=null,a=null,p=l;do{var v=p.lane;if((pn&v)===v)a!==null&&(a=a.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var y={lane:v,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};a===null?(u=a=y,i=r):a=a.next=y,G.lanes|=v,mn|=v}p=p.next}while(p!==null&&p!==l);a===null?i=r:a.next=u,Ge(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,G.lanes|=l,mn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zl(e,t,n){if(t=Ae(),n=t.queue,n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ge(l,t.memoizedState)||(Me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Cu(e,t,n){}function Nu(e,t,n){n=G;var r=Ae(),o=t(),l=!Ge(r.memoizedState,o);if(l&&(r.memoizedState=o,Me=!0),r=r.queue,_l(Pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,pr(9,_u.bind(null,n,r,o,t),void 0,null),se===null)throw Error(h(349));pn&30||zu(n,t,o)}return o}function zu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _u(e,t,n,r){t.value=n,t.getSnapshot=r,Tu(t)&&Lu(e)}function Pu(e,t,n){return n(function(){Tu(t)&&Lu(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Lu(e){var t=yt(e,1);t!==null&&Ke(t,e,1,-1)}function Mu(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fr,lastRenderedState:e},t.queue=e,e=e.dispatch=ja.bind(null,G,e),[t.memoizedState,e]}function pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Iu(e){return Ae().memoizedState}function ao(e,t,n,r){var o=nt();G.flags|=e,o.memoizedState=pr(1|t,n,void 0,r===void 0?null:r)}function co(e,t,n,r){var o=Ae();r=r===void 0?null:r;var l=void 0;if(oe!==null){var i=oe.memoizedState;if(l=i.destroy,r!==null&&Sl(r,i.deps)){o.memoizedState=pr(t,n,l,r);return}}G.flags|=e,o.memoizedState=pr(1|t,n,l,r)}function Du(e,t){return ao(8390656,8,e,t)}function _l(e,t){return co(2048,8,e,t)}function Fu(e,t){return co(4,2,e,t)}function Ou(e,t){return co(4,4,e,t)}function ju(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Uu(e,t,n){return n=n!=null?n.concat([e]):null,co(4,4,ju.bind(null,t,e),n)}function Pl(e,t){}function Ru(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Au(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Sl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hu(e,t,n){return pn&21?(Ge(n,t)||(n=or(),G.lanes|=n,mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n)}function Fa(e,t,n){n=U,U=n!==0&&4>n?n:4,e(!0);var r=Fi.transition;Fi.transition={};try{e(!1),t()}finally{U=n,Fi.transition=r}}function Vu(){return Ae().memoizedState}function Oa(e,t,n){var r=jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$u(e))Wu(t,n);else if(n=wu(e,t,n,r),n!==null){var o=Ce();Ke(n,e,r,o),Bu(n,t,r)}}function ja(e,t,n){var r=jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($u(e))Wu(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,u=l(i,n);if(o.hasEagerState=!0,o.eagerState=u,Ge(u,i)){var a=t.interleaved;a===null?(o.next=o,vl(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=wu(e,t,o,r),n!==null&&(o=Ce(),Ke(n,e,r,o),Bu(n,t,r))}}function $u(e){var t=e.alternate;return e===G||t!==null&&t===G}function Wu(e,t){jr=Wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ht(e,n)}}function Be(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Tl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}function Qu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!ur(n,r)||!ur(o,l):!0}function Ku(e,t,n){var r=!1,o=Qt,l=t.contextType;return typeof l=="object"&&l!==null?l=Re(l):(o=Pe(t)?cn:re.current,r=t.contextTypes,l=(r=r!=null)?_n(e,o):Qt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Qo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Qo.enqueueReplaceState(t,t.state,null)}function Ll(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},yl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Re(l):(l=Pe(t)?cn:re.current,o.context=_n(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Tl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Qo.enqueueReplaceState(o,o.state,null),uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",r=t;do n+=bt(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ml(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}function Xu(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,Hi=r),Il(e,t)},n}function Gu(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Il(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Il(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ed;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ya.bind(null,e,t,n),t.then(e,e))}function Ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}function Ee(e,t,n,r){t.child=e===null?ca(t,null,n,r):Yn(t,e.child,n,r)}function qu(e,t,n,r,o){n=n.render;var l=t.ref;return Tn(t,o),r=El(e,t,n,r,l,o),n=Cl(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(K&&n&&al(t),t.flags|=1,Ee(e,t,r,o),t.child)}function es(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Kl(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,ts(e,t,l,r,o)):(e=go(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(i,r)&&e.ref===t.ref)return xt(e,t,o)}return t.flags|=1,e=Rt(l,r),e.ref=t.ref,e.return=t,t.child=e}function ts(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(ur(l,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Me=!0);else return t.lanes=e.lanes,xt(e,t,o)}return Dl(e,t,n,r,o)}function ns(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(ut,ze),ze|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(ut,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,B(ut,ze),ze|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,B(ut,ze),ze|=r;return Ee(e,t,o,n),t.child}function rs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dl(e,t,n,r,o){var l=Pe(n)?cn:re.current;return l=_n(t,l),Tn(t,o),n=El(e,t,n,r,l,o),r=Cl(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,xt(e,t,o)):(K&&r&&al(t),t.flags|=1,Ee(e,t,n,o),t.child)}function os(e,t,n,r,o){if(Pe(n)){var l=!0;ro(t)}else l=!1;if(Tn(t,o),t.stateNode===null)po(e,t),Ku(t,n,r),Ll(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var a=i.context,p=n.contextType;typeof p=="object"&&p!==null?p=Re(p):(p=Pe(n)?cn:re.current,p=_n(t,p));var v=n.getDerivedStateFromProps,y=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function";y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==p)&&Yu(t,i,r,p),Kt=!1;var g=t.memoizedState;i.state=g,uo(t,r,i,o),a=t.memoizedState,u!==r||g!==a||me.current||Kt?(typeof v=="function"&&(Tl(t,n,v,r),a=t.memoizedState),(u=Kt||Qu(t,n,u,r,g,a,p))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=p,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,xu(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:Be(t.type,u),i.props=p,y=t.pendingProps,g=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Re(a):(a=Pe(n)?cn:re.current,a=_n(t,a));var E=n.getDerivedStateFromProps;(v=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==y||g!==a)&&Yu(t,i,r,a),Kt=!1,g=t.memoizedState,i.state=g,uo(t,r,i,o);var N=t.memoizedState;u!==y||g!==N||me.current||Kt?(typeof E=="function"&&(Tl(t,n,E,r),N=t.memoizedState),(p=Kt||Qu(t,n,p,r,g,N,a)||!1)?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,N,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,N,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),i.props=r,i.state=N,i.context=a,r=p):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Fl(e,t,n,r,l,o)}function Fl(e,t,n,r,o,l){rs(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&du(t,n,!1),xt(e,t,l);r=t.stateNode,td.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Yn(t,e.child,null,l),t.child=Yn(t,null,u,l)):Ee(e,t,u,l),t.memoizedState=r.state,o&&du(t,n,!0),t.child}function ls(e){var t=e.stateNode;t.pendingContext?au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&au(e,t.context,!1),wl(e,t.containerInfo)}function is(e,t,n,r,o){return Pn(),pl(o),t.flags|=256,Ee(e,t,n,r),t.child}function Ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function us(e,t,n){var r=t.pendingProps,o=X.current,l=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(X,o&1),e===null)return fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=vo(i,r,0,null),e=an(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ol(n),t.memoizedState=Oi,e):jl(t,i));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return Ua(e,t,i,r,u,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,u=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Rt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),u!==null?l=Rt(u,l):(l=an(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ol(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Oi,r}return l=e.child,e=l.sibling,r=Rt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jl(e,t,n){return t=vo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&pl(r),Yn(t,e.child,null,n),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ua(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Ml(Error(h(422))),fo(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=vo({mode:"visible",children:r.children},o,0,null),l=an(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Yn(t,e.child,null,i),t.child.memoizedState=Ol(i),t.memoizedState=Oi,l);if(!(t.mode&1))return fo(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;return r=u,l=Error(h(419)),r=Ml(l,r,void 0),fo(e,t,i,r)}if(u=(i&e.childLanes)!==0,Me||u){if(r=se,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,yt(e,o),Ke(r,e,o,-1))}return Ql(),r=Ml(Error(h(421))),fo(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Xa.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Le=vt(o.nextSibling),je=t,K=!0,Ze=null,e!==null&&(He[Ve++]=Nt,He[Ve++]=zt,He[Ve++]=dn,Nt=e.id,zt=e.overflow,dn=t),t=jl(t,r.children),t.flags|=4096,t)}function ss(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gl(e.return,t,n)}function Ul(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function as(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Ee(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ss(e,n,t);else if(e.tag===19)ss(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(X,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ul(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&so(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ul(t,!0,n,null,l);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Rt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ra(e,t,n){switch(t.tag){case 3:ls(t),Pn();break;case 5:Eu(t);break;case 1:Pe(t.type)&&ro(t);break;case 4:wl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(Ho,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?us(e,t,n):(B(X,X.current&1),e=xt(e,t,n),e!==null?e.sibling:null);B(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return as(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,ns(e,t,n)}return xt(e,t,n)}function mr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Aa(e,t,n){var r=t.pendingProps;switch(cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Pe(t.type)&&(j(me),j(re)),we(t),null;case 3:return r=t.stateNode,Ln(),j(me),j(re),kl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&(Wl(Ze),Ze=null))),da(e,t),we(t),null;case 5:xl(t);var o=on(Or.current);if(n=t.type,e!==null&&t.stateNode!=null)rd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return we(t),null}if(e=on(it.current),oo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[lt]=t,r[Ir]=l,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Mr.length;o++)Q(Mr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":z(r,l),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Q("invalid",r);break;case"textarea":Wr(r,l),Q("invalid",r)}vn(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="children"?typeof u=="string"?r.textContent!==u&&(l.suppressHydrationWarning!==!0&&eo(r.textContent,u,e),o=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&eo(r.textContent,u,e),o=["children",""+u]):vr.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&Q("scroll",r)}switch(n){case"input":ct(r),en(r,l,!0);break;case"textarea":ct(r),Qr(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=to)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kr(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[lt]=t,e[Ir]=r,nd(e,t,!1,!1),t.stateNode=e;e:{switch(i=yn(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Mr.length;o++)Q(Mr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":z(e,r),o=dt(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Wr(e,r),o=Zn(e,r),Q("invalid",e);break;default:o=r}vn(n,o),u=o;for(l in u)if(u.hasOwnProperty(l)){var a=u[l];l==="style"?qn(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Hs(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&wr(e,a):typeof a=="number"&&wr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(vr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&Q("scroll",e):a!=null&&st(e,l,a,i))}switch(n){case"input":ct(e),en(e,r,!1);break;case"textarea":ct(e),Qr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Se(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Tt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Tt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)od(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=on(Or.current),on(it.current),oo(t)){if(r=t.stateNode,n=t.memoizedProps,r[lt]=t,(l=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&eo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lt]=t,t.stateNode=r}return we(t),null;case 13:if(j(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Le!==null&&t.mode&1&&!(t.flags&128)){for(l=Le;l;)l=vt(l.nextSibling);Pn(),t.flags|=98560,l=!1}else if(l=oo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[lt]=t}else Pn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),l=!1}else Ze!==null&&(Wl(Ze),Ze=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?le===0&&(le=3):Ql())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Ln(),da(e,t),e===null&&sr(t.stateNode.containerInfo),we(t),null;case 10:return hl(t.type._context),we(t),null;case 17:return Pe(t.type)&&(j(me),j(re)),we(t),null;case 19:if(j(X),l=t.memoizedState,l===null)return we(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)mr(l,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=so(e),i!==null){for(t.flags|=128,mr(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(X,X.current&1|2),t.child}e=e.sibling}l.tail!==null&&ie()>Ai&&(t.flags|=128,r=!0,mr(l,!1),t.lanes=4194304)}else{if(!r)if(e=so(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!K)return we(t),null}else 2*ie()-l.renderingStartTime>Ai&&n!==1073741824&&(t.flags|=128,r=!0,mr(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ie(),t.sibling=null,n=X.current,B(X,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return ze=ut.current,j(ut),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function Ha(e,t,n){switch(cl(t),t.tag){case 1:return Pe(t.type)&&(j(me),j(re)),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),j(me),j(re),kl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xl(t),null;case 13:if(j(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Pn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(X),null;case 4:return Ln(),null;case 10:return hl(t.type._context),null;case 22:case 23:return ze=ut.current,j(ut),null;case 24:return null;default:return null}}function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function Rl(e,t,n){try{n()}catch(r){J(e,t,r)}}function Va(e,t){if(zi=Io,e=tu(),ol(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,u=-1,a=-1,p=0,v=0,y=e,g=null;t:for(;;){for(var E;y!==n||o!==0&&y.nodeType!==3||(u=i+o),y!==l||r!==0&&y.nodeType!==3||(a=i+r),y.nodeType===3&&(i+=y.nodeValue.length),(E=y.firstChild)!==null;)g=y,y=E;for(;;){if(y===e)break t;if(g===n&&++p===o&&(u=i),g===l&&++v===r&&(a=i),(E=y.nextSibling)!==null)break;y=g,g=y.parentNode}y=E}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(_i={focusedElem:e,selectionRange:n},Io=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var _=N.memoizedProps,q=N.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?_:Be(t.type,_),q);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(x){J(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return N=fa,fa=!1,N}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Rl(t,n,l)}o=o.next}while(o!==r)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cs(e){var t=e.alternate;t!==null&&(e.alternate=null,cs(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Ir],delete t[Ti],delete t[Kc],delete t[Yc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ds(e){return e.tag===5||e.tag===3||e.tag===4}function fs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ds(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}function Ot(e,t,n){for(n=n.child;n!==null;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Po,n)}catch{}switch(n.tag){case 5:xe||In(n,t);case 6:var r=he,o=Je;he=null,Ot(e,t,n),he=r,Je=o,he!==null&&(Je?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Je?(e=he,n=n.stateNode,e.nodeType===8?sl(e.parentNode,n):e.nodeType===1&&sl(e,n),I(e)):sl(he,n.stateNode));break;case 4:r=he,o=Je,he=n.stateNode.containerInfo,Je=!0,Ot(e,t,n),he=r,Je=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Rl(n,t,i),o=o.next}while(o!==r)}Ot(e,t,n);break;case 1:if(!xe&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){J(n,t,u)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Ot(e,t,n),xe=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function ms(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ld),t.forEach(function(r){var o=Ga.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Qe(e,t,n){if(n=t.deletions,n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:he=u.stateNode,Je=!1;break e;case 3:he=u.stateNode.containerInfo,Je=!0;break e;case 4:he=u.stateNode.containerInfo,Je=!0;break e}u=u.return}if(he===null)throw Error(h(160));ps(l,i,o),he=null,Je=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(p){J(o,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hs(t,e),t=t.sibling}function hs(e,t,n){var r=e.alternate;switch(n=e.flags,e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),rt(e),n&4){try{hr(3,e,e.return),mo(3,e)}catch(_){J(e,e.return,_)}try{hr(5,e,e.return)}catch(_){J(e,e.return,_)}}break;case 1:Qe(t,e),rt(e),n&512&&r!==null&&In(r,r.return);break;case 5:if(Qe(t,e),rt(e),n&512&&r!==null&&In(r,r.return),e.flags&32){var o=e.stateNode;try{wr(o,"")}catch(_){J(e,e.return,_)}}if(n&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=r!==null?r.memoizedProps:l,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&H(o,l),yn(u,i);var p=yn(u,l);for(i=0;i<a.length;i+=2){var v=a[i],y=a[i+1];v==="style"?qn(o,y):v==="dangerouslySetInnerHTML"?Hs(o,y):v==="children"?wr(o,y):st(o,v,y,p)}switch(u){case"input":ve(o,l);break;case"textarea":Br(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var E=l.value;E!=null?Tt(o,!!l.multiple,E,!1):g!==!!l.multiple&&(l.defaultValue!=null?Tt(o,!!l.multiple,l.defaultValue,!0):Tt(o,!!l.multiple,l.multiple?[]:"",!1))}o[Ir]=l}catch(_){J(e,e.return,_)}}break;case 6:if(Qe(t,e),rt(e),n&4){if(e.stateNode===null)throw Error(h(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(_){J(e,e.return,_)}}break;case 3:if(Qe(t,e),rt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{I(t.containerInfo)}catch(_){J(e,e.return,_)}break;case 4:Qe(t,e),rt(e);break;case 13:Qe(t,e),rt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Ri=ie())),n&4&&ms(e);break;case 22:if(v=r!==null&&r.memoizedState!==null,e.mode&1?(xe=(p=xe)||v,Qe(t,e),xe=p):Qe(t,e),rt(e),n&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!v&&e.mode&1)for(C=e,v=e.child;v!==null;){for(y=C=v;C!==null;){switch(g=C,E=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:In(g,g.return);var N=g.stateNode;if(typeof N.componentWillUnmount=="function"){n=g,t=g.return;try{r=n,N.props=r.memoizedProps,N.state=r.memoizedState,N.componentWillUnmount()}catch(_){J(n,t,_)}}break;case 5:In(g,g.return);break;case 22:if(g.memoizedState!==null){ys(y);continue}}E!==null?(E.return=g,C=E):ys(y)}v=v.sibling}e:for(v=null,y=e;;){if(y.tag===5){if(v===null){v=y;try{o=y.stateNode,p?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=y.stateNode,a=y.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=bn("display",i))}catch(_){J(e,e.return,_)}}}else if(y.tag===6){if(v===null)try{y.stateNode.nodeValue=p?"":y.memoizedProps}catch(_){J(e,e.return,_)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===e)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===e)break e;for(;y.sibling===null;){if(y.return===null||y.return===e)break e;v===y&&(v=null),y=y.return}v===y&&(v=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Qe(t,e),rt(e),n&4&&ms(e);break;case 21:break;default:Qe(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ds(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(wr(o,""),r.flags&=-33);var l=fs(e);Vl(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,u=fs(e);Hl(e,u,i);break;default:throw Error(h(161))}}catch(a){J(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $a(e,t,n){C=e,gs(e,t,n)}function gs(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ko;if(!i){var u=o.alternate,a=u!==null&&u.memoizedState!==null||xe;u=Ko;var p=xe;if(Ko=i,(xe=a)&&!p)for(C=o;C!==null;)i=C,a=i.child,i.tag===22&&i.memoizedState!==null?ws(o):a!==null?(a.return=i,C=a):ws(o);for(;l!==null;)C=l,gs(l,t,n),l=l.sibling;C=o,Ko=u,xe=p}vs(e,t,n)}else o.subtreeFlags&8772&&l!==null?(l.return=o,C=l):vs(e,t,n)}}function vs(e,t,n){for(;C!==null;){if(t=C,t.flags&8772){n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Su(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Su(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var v=p.memoizedState;if(v!==null){var y=v.dehydrated;y!==null&&I(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}xe||t.flags&512&&Al(t)}catch(g){J(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function ys(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function ws(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(a){J(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){J(t,o,a)}}var l=t.return;try{Al(t)}catch(a){J(t,l,a)}break;case 5:var i=t.return;try{Al(t)}catch(a){J(t,i,a)}}}catch(a){J(t,t.return,a)}if(t===e){C=null;break}var u=t.sibling;if(u!==null){u.return=t.return,C=u;break}C=t.return}}function gr(){Ai=ie()+500}function Ce(){return F&6?ie():bo!==-1?bo:bo=ie()}function jt(e){return e.mode&1?F&2&&ge!==0?ge&-ge:Xc.transition!==null?(qo===0&&(qo=or()),qo):(e=U,e!==0||(e=window.event,e=e===void 0?16:ne(e.type)),e):1}function Ke(e,t,n,r){if(50<Hr)throw Hr=0,Vi=null,Error(h(185));tt(e,n,r),(!(F&2)||e!==se)&&(e===se&&(!(F&2)&&(Xo|=n),le===4&&Ut(e,ge)),Te(e,r),n===1&&F===0&&!(t.mode&1)&&(gr(),Uo&&Dt()))}function Te(e,t){var n=e.callbackNode;tn(e,t);var r=pt(e,e===se?ge:0);if(r===0)n!==null&&Ks(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ks(n),t===1)e.tag===0?Da(ks.bind(null,e)):fu(ks.bind(null,e)),Qc(function(){!(F&6)&&Dt()}),n=null;else{switch(lr(r)){case 1:n=hi;break;case 4:n=Ys;break;case 16:n=_o;break;case 536870912:n=Xs;break;default:n=_o}n=Ps(n,xs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function xs(e,t){if(bo=-1,qo=0,F&6)throw Error(h(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=pt(e,e===se?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ho(e,r);else{t=r;var o=F;F|=2;var l=Es();(se!==e||ge!==t)&&(_t=null,gr(),un(e,t));do try{Qa();break}catch(u){Ss(e,u)}while(!0);ml(),Yo.current=l,F=o,ee!==null?t=0:(se=null,ge=0,t=le)}if(t!==0){if(t===2&&(o=kn(e),o!==0&&(r=o,t=$l(e,o))),t===1)throw n=Rr,un(e,0),Ut(e,r),Te(e,ie()),n;if(t===6)Ut(e,r);else{if(o=e.current.alternate,!(r&30)&&!Wa(o)&&(t=ho(e,r),t===2&&(l=kn(e),l!==0&&(r=l,t=$l(e,l))),t===1))throw n=Rr,un(e,0),Ut(e,r),Te(e,ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:sn(e,Ie,_t);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=Ri+500-ie(),10<t)){if(pt(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pi(sn.bind(null,e,Ie,_t),t);break}sn(e,Ie,_t);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Xe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*id(r/1960))-r,10<r){e.timeoutHandle=Pi(sn.bind(null,e,Ie,_t),r);break}sn(e,Ie,_t);break;case 5:sn(e,Ie,_t);break;default:throw Error(h(329))}}}return Te(e,ie()),e.callbackNode===n?xs.bind(null,e):null}function $l(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=ho(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Wl(t)),e}function Wl(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function Wa(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ge(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Ui,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),r=1<<n;e[n]=-1,t&=~r}}function ks(e){if(F&6)throw Error(h(327));Dn();var t=pt(e,0);if(!(t&1))return Te(e,ie()),null;var n=ho(e,t);if(e.tag!==0&&n===2){var r=kn(e);r!==0&&(t=r,n=$l(e,r))}if(n===1)throw n=Rr,un(e,0),Ut(e,t),Te(e,ie()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Ie,_t),Te(e,ie()),null}function Bl(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(gr(),Uo&&Dt())}}function ln(e){Xt!==null&&Xt.tag===0&&!(F&6)&&Dn();var t=F;F|=1;var n=Ne.transition,r=U;try{if(Ne.transition=null,U=1,e)return e()}finally{U=r,Ne.transition=n,F=t,!(F&6)&&Dt()}}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bc(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(cl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&(j(me),j(re));break;case 3:Ln(),j(me),j(re),kl();break;case 5:xl(r);break;case 4:Ln();break;case 13:j(X);break;case 19:j(X);break;case 10:hl(r.type._context);break;case 22:case 23:ze=ut.current,j(ut)}n=n.return}if(se=e,ee=e=Rt(e.current,null),ge=ze=t,le=0,Rr=null,Ui=Xo=mn=0,Ie=Ar=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}fn=null}return e}function Ss(e,t){do{var n=ee;try{if(ml(),$o.current=Bo,Wo){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Wo=!1}if(pn=0,ue=oe=G=null,jr=!1,Ur=0,ji.current=null,n===null||n.return===null){le=1,Rr=t,ee=null;break}e:{var l=e,i=n.return,u=n,a=t;if(t=ge,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var p=a,v=u,y=v.tag;if(!(v.mode&1)&&(y===0||y===11||y===15)){var g=v.alternate;g?(v.updateQueue=g.updateQueue,v.memoizedState=g.memoizedState,v.lanes=g.lanes):(v.updateQueue=null,v.memoizedState=null)}var E=Ju(i);if(E!==null){E.flags&=-257,bu(E,i,u,l,t),E.mode&1&&Zu(l,p,t),t=E,a=p;var N=t.updateQueue;if(N===null){var _=new Set;_.add(a),t.updateQueue=_}else N.add(a);break e}else{if(!(t&1)){Zu(l,p,t),Ql();break e}a=Error(h(426))}}else if(K&&u.mode&1){var q=Ju(i);if(q!==null){!(q.flags&65536)&&(q.flags|=256),bu(q,i,u,l,t),pl(Mn(a,u));break e}}l=a=Mn(a,u),le!==4&&(le=2),Ar===null?Ar=[l]:Ar.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Xu(l,a,t);ku(l,d);break e;case 1:u=a;var c=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Yt===null||!Yt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=Gu(l,u,t);ku(l,x);break e}}l=l.return}while(l!==null)}Ns(n)}catch(P){t=P,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function Es(){var e=Yo.current;return Yo.current=Bo,e===null?Bo:e}function Ql(){(le===0||le===3||le===2)&&(le=4),se===null||!(mn&268435455)&&!(Xo&268435455)||Ut(se,ge)}function ho(e,t){var n=F;F|=2;var r=Es();(se!==e||ge!==t)&&(_t=null,un(e,t));do try{Ba();break}catch(o){Ss(e,o)}while(!0);if(ml(),F=n,Yo.current=r,ee!==null)throw Error(h(261));return se=null,ge=0,le}function Ba(){for(;ee!==null;)Cs(ee)}function Qa(){for(;ee!==null&&!sc();)Cs(ee)}function Cs(e){var t=ud(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Ns(e):ee=t,ji.current=null}function Ns(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ha(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ee=null;return}}else if(n=Aa(n,t,ze),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);le===0&&(le=5)}function sn(e,t,n){var r=U,o=Ne.transition;try{Ne.transition=null,U=1,Ka(e,t,n,r)}finally{Ne.transition=o,U=r}return null}function Ka(e,t,n,r){do Dn();while(Xt!==null);if(F&6)throw Error(h(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(En(e,l),e===se&&(ee=se=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,Ps(_o,function(){return Dn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ne.transition,Ne.transition=null;var i=U;U=1;var u=F;F|=4,ji.current=null,Va(e,n),hs(n,e),Ma(_i),Io=!!zi,_i=zi=null,e.current=n,$a(n,e,o),ac(),F=u,U=i,Ne.transition=l}else e.current=n;if(Zo&&(Zo=!1,Xt=e,Jo=o),l=e.pendingLanes,l===0&&(Yt=null),nl(n.stateNode,r),Te(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Go)throw Go=!1,e=Hi,Hi=null,e;return Jo&1&&e.tag!==0&&Dn(),l=e.pendingLanes,l&1?e===Vi?Hr++:(Hr=0,Vi=e):Hr=0,Dt(),null}function Dn(){if(Xt!==null){var e=lr(Jo),t=Ne.transition,n=U;try{if(Ne.transition=null,U=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,Jo=0,F&6)throw Error(h(331));var o=F;for(F|=4,C=e.current;C!==null;){var l=C,i=l.child;if(C.flags&16){var u=l.deletions;if(u!==null){for(var a=0;a<u.length;a++){var p=u[a];for(C=p;C!==null;){var v=C;switch(v.tag){case 0:case 11:case 15:hr(8,v,l)}var y=v.child;if(y!==null)y.return=v,C=y;else for(;C!==null;){v=C;var g=v.sibling,E=v.return;if(cs(v),v===p){C=null;break}if(g!==null){g.return=E,C=g;break}C=E}}}var N=l.alternate;if(N!==null){var _=N.child;if(_!==null){N.child=null;do{var q=_.sibling;_.sibling=null,_=q}while(_!==null)}}C=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,C=i;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:hr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,C=d;break e}C=l.return}}var c=e.current;for(C=c;C!==null;){i=C;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,C=f;else e:for(i=c;C!==null;){if(u=C,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:mo(9,u)}}catch(P){J(u,u.return,P)}if(u===i){C=null;break e}var x=u.sibling;if(x!==null){x.return=u.return,C=x;break e}C=u.return}}if(F=o,Dt(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Po,e)}catch{}r=!0}return r}finally{U=n,Ne.transition=t}}return!1}function zs(e,t,n){t=Mn(n,t),t=Xu(e,t,1),e=Ft(e,t,1),t=Ce(),e!==null&&(tt(e,1,t),Te(e,t))}function J(e,t,n){if(e.tag===3)zs(e,e,n);else for(;t!==null;){if(t.tag===3){zs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=Mn(n,e),e=Gu(t,e,1),t=Ft(t,e,1),e=Ce(),t!==null&&(tt(t,1,e),Te(t,e));break}}t=t.return}}function Ya(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ge&n)===n&&(le===4||le===3&&(ge&130023424)===ge&&500>ie()-Ri?un(e,0):Ui|=n),Te(e,t)}function _s(e,t){t===0&&(e.mode&1?(t=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):t=1);var n=Ce();e=yt(e,t),e!==null&&(tt(e,t,n),Te(e,n))}function Xa(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_s(e,n)}function Ga(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),_s(e,n)}function Ps(e,t){return Qs(e,t)}function Za(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ja(e){if(typeof e=="function")return Kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oi)return 11;if(e===ui)return 14}return 2}function Rt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function go(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Kl(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case On:return an(n.children,o,l,t);case ni:i=8,o|=8;break;case ri:return e=$e(12,n,t,o|2),e.elementType=ri,e.lanes=l,e;case li:return e=$e(13,n,t,o),e.elementType=li,e.lanes=l,e;case ii:return e=$e(19,n,t,o),e.elementType=ii,e.lanes=l,e;case Rs:return vo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case js:i=10;break e;case Us:i=9;break e;case oi:i=11;break e;case ui:i=14;break e;case At:i=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=$e(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function an(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function vo(e,t,n,r){return e=$e(22,e,r,t),e.elementType=Rs,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ba(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gl(e,t,n,r,o,l,i,u,a,p){return e=new ba(e,t,n,u,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=$e(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yl(l),e}function qa(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ts(e){if(!e)return Qt;e=e._reactInternals;e:{if(ft(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Pe(n))return cu(e,n,t)}return t}function Ls(e,t,n,r,o,l,i,u,a,p){return e=Gl(n,r,!0,e,o,l,i,u,a),e.context=Ts(null),n=e.current,r=Ce(),o=jt(n),l=wt(r,o),l.callback=t??null,Ft(n,l,o),e.current.lanes=o,tt(e,o,r),Te(e,r),e}function yo(e,t,n,r){var o=t.current,l=Ce(),i=jt(o);return n=Ts(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(o,t,i),e!==null&&(Ke(e,o,i,l),io(e,o,i)),i}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ms(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zl(e,t){Ms(e,t),(e=e.alternate)&&Ms(e,t)}function ec(e){return e=Fe(e),e===null?null:e.stateNode}function tc(e){return null}function Jl(e){this._internalRoot=e}function xo(e){this._internalRoot=e}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ko(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Is(){}function nc(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var p=wo(i);l.call(p)}}var i=Ls(t,r,e,0,null,!1,!1,"",Is);return e._reactRootContainer=i,e[Et]=i.current,sr(e.nodeType===8?e.parentNode:e),ln(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var u=r;r=function(){var p=wo(a);u.call(p)}}var a=Gl(e,0,!1,null,null,!1,!1,"",Is);return e._reactRootContainer=a,e[Et]=a.current,sr(e.nodeType===8?e.parentNode:e),ln(function(){yo(t,a,n,r)}),a}function So(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var u=o;o=function(){var a=wo(i);u.call(a)}}yo(t,i,e,o)}else i=nc(n,t,e,o,r);return wo(i)}var Ds=new Set,vr={},kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,rc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fs={},Os={},pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){pe[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){pe[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){pe[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var ei=/[\-:]([a-z])/g,ti=function(e){return e[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ei,ti);pe[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ei,ti);pe[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ei,ti);pe[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),pe.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){pe[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});var St=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eo=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),ni=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),js=Symbol.for("react.provider"),Us=Symbol.for("react.context"),oi=Symbol.for("react.forward_ref"),li=Symbol.for("react.suspense"),ii=Symbol.for("react.suspense_list"),ui=Symbol.for("react.memo"),At=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var Rs=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var As=Symbol.iterator,Y=Object.assign,si,ai=!1,yr=Array.isArray,Co,Hs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Co=Co||document.createElement("div"),Co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}),wr=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t},xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oc=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){oc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xr[t]=xr[e]})});var lc=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),ci=null,di=null,jn=null,Un=null,Vs=function(e,t){return e(t)},$s=function(){},fi=!1,pi=!1;if(kt)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){pi=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{pi=!1}var ic=function(e,t,n,r,o,l,i,u,a){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(v){this.onError(v)}},Sr=!1,No=null,zo=!1,mi=null,uc={onError:function(e){Sr=!0,No=e}},Ye=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Ws=Ye.unstable_scheduleCallback,Bs=Ye.unstable_NormalPriority,Qs=Ws,Ks=Ye.unstable_cancelCallback,sc=Ye.unstable_shouldYield,ac=Ye.unstable_requestPaint,ie=Ye.unstable_now,cc=Ye.unstable_getCurrentPriorityLevel,hi=Ye.unstable_ImmediatePriority,Ys=Ye.unstable_UserBlockingPriority,_o=Bs,dc=Ye.unstable_LowPriority,Xs=Ye.unstable_IdlePriority,Po=null,ot=null,Xe=Math.clz32?Math.clz32:_e,fc=Math.log,pc=Math.LN2,To=64,Lo=4194304,U=0,gi=!1,Mo=[],Ht=null,Vt=null,$t=null,Er=new Map,Cr=new Map,Wt=[],mc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "),Rn=St.ReactCurrentBatchConfig,Io=!0,Do=null,Bt=null,vi=null,Fo=null,An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yi=Oe(An),Nr=Y({},An,{view:0,detail:0}),hc=Oe(Nr),wi,xi,zr,Oo=Y({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(wi=e.screenX-zr.screenX,xi=e.screenY-zr.screenY):xi=wi=0,zr=e),wi)},movementY:function(e){return"movementY"in e?e.movementY:xi}}),Gs=Oe(Oo),gc=Y({},Oo,{dataTransfer:0}),vc=Oe(gc),yc=Y({},Nr,{relatedTarget:0}),ki=Oe(yc),wc=Y({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),xc=Oe(wc),kc=Y({},An,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sc=Oe(kc),Ec=Y({},An,{data:0}),Zs=Oe(Ec),Cc=Zs,Nc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_c={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},Pc=Y({},Nr,{key:function(e){if(e.key){var t=Nc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tc=Oe(Pc),Lc=Y({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Js=Oe(Lc),Mc=Y({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),Ic=Oe(Mc),Dc=Y({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fc=Oe(Dc),Oc=Y({},Oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jc=Oe(Oc),Uc=[9,13,27,32],Si=kt&&"CompositionEvent"in window,_r=null;kt&&"documentMode"in document&&(_r=document.documentMode);var Rc=kt&&"TextEvent"in window&&!_r,bs=kt&&(!Si||_r&&8<_r&&11>=_r),qs=" ",ea=!1,Hn=!1,Ac={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Pr=null,Tr=null,ta=!1;kt&&(ta=Ea("input")&&(!document.documentMode||9<document.documentMode));var Ge=typeof Object.is=="function"?Object.is:La,Hc=kt&&"documentMode"in document&&11>=document.documentMode,Vn=null,Ei=null,Lr=null,Ci=!1,$n={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},Ni={},na={};kt&&(na=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);var ra=br("animationend"),oa=br("animationiteration"),la=br("animationstart"),ia=br("transitionend"),ua=new Map,sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");(function(){for(var e=0;e<sa.length;e++){var t=sa[e],n=t.toLowerCase();t=t[0].toUpperCase()+t.slice(1),Mt(n,"on"+t)}Mt(ra,"onAnimationEnd"),Mt(oa,"onAnimationIteration"),Mt(la,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(ia,"onTransitionEnd")})(),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),ce("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ce("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ce("onBeforeInput",["compositionend","keypress","textInput","paste"]),ce("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ce("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ce("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr)),jo="_reactListening"+Math.random().toString(36).slice(2),$c=/\r\n?/g,Wc=/\u0000|\uFFFD/g,zi=null,_i=null,Pi=typeof setTimeout=="function"?setTimeout:void 0,Bc=typeof clearTimeout=="function"?clearTimeout:void 0,aa=typeof Promise=="function"?Promise:void 0,Qc=typeof queueMicrotask=="function"?queueMicrotask:typeof aa<"u"?function(e){return aa.resolve(null).then(e).catch(Ia)}:Pi,Wn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Wn,Ir="__reactProps$"+Wn,Et="__reactContainer$"+Wn,Ti="__reactEvents$"+Wn,Kc="__reactListeners$"+Wn,Yc="__reactHandles$"+Wn,Li=[],Bn=-1,Qt={},re=It(Qt),me=It(!1),cn=Qt,Ct=null,Uo=!1,Mi=!1,Qn=[],Kn=0,Ro=null,Ao=0,He=[],Ve=0,dn=null,Nt=1,zt="",je=null,Le=null,K=!1,Ze=null,Xc=St.ReactCurrentBatchConfig,Yn=yu(!0),ca=yu(!1),Ho=It(null),Vo=null,Xn=null,Ii=null,fn=null,Gc=yt,Kt=!1,Dr={},it=It(Dr),Fr=It(Dr),Or=It(Dr),X=It(0),Di=[],$o=St.ReactCurrentDispatcher,Fi=St.ReactCurrentBatchConfig,pn=0,G=null,oe=null,ue=null,Wo=!1,jr=!1,Ur=0,Zc=0,Bo={readContext:Re,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Jc={readContext:Re,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ao(4194308,4,ju.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return ao(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Oa.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:Mu,useDebugValue:Pl,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=Mu(!1),t=e[0];return e=Fa.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(e,t,n){},useSyncExternalStore:function(e,t,n){var r=G,o=nt();if(K){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),se===null)throw Error(h(349));pn&30||zu(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Du(Pu.bind(null,r,l,e),[e]),r.flags|=2048,pr(9,_u.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=nt(),t=se.identifierPrefix;if(K){var n=zt,r=Nt;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},bc={readContext:Re,useCallback:Ru,useContext:Re,useEffect:_l,useImperativeHandle:Uu,useInsertionEffect:Fu,useLayoutEffect:Ou,useMemo:Au,useReducer:Nl,useRef:Iu,useState:function(e){return Nl(fr)},useDebugValue:Pl,useDeferredValue:function(e){var t=Ae();return Hu(t,oe.memoizedState,e)},useTransition:function(){var e=Nl(fr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Cu,useSyncExternalStore:Nu,useId:Vu,unstable_isNewReconciler:!1},qc={readContext:Re,useCallback:Ru,useContext:Re,useEffect:_l,useImperativeHandle:Uu,useInsertionEffect:Fu,useLayoutEffect:Ou,useMemo:Au,useReducer:zl,useRef:Iu,useState:function(e){return zl(fr)},useDebugValue:Pl,useDeferredValue:function(e){var t=Ae();return oe===null?t.memoizedState=e:Hu(t,oe.memoizedState,e)},useTransition:function(){var e=zl(fr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Cu,useSyncExternalStore:Nu,useId:Vu,unstable_isNewReconciler:!1},Qo={isMounted:function(e){return(e=e._reactInternals)?ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=jt(e),l=wt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Ft(e,l,o),t!==null&&(Ke(t,e,o,r),io(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=jt(e),l=wt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ft(e,l,o),t!==null&&(Ke(t,e,o,r),io(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=jt(e),o=wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ft(e,o,r),t!==null&&(Ke(t,e,r,n),io(t,e,r))}},ed=typeof WeakMap=="function"?WeakMap:Map,td=St.ReactCurrentOwner,Me=!1,Oi={dehydrated:null,treeContext:null,retryLane:0},nd=function(e,t,n,r){for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},da=function(e,t){},rd=function(e,t,n,r,o){var l=e.memoizedProps;if(l!==r){switch(e=t.stateNode,on(it.current),o=null,n){case"input":l=dt(e,l),r=dt(e,r),o=[];break;case"select":l=Y({},l,{value:void 0}),r=Y({},r,{value:void 0}),o=[];break;case"textarea":l=Zn(e,l),r=Zn(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}vn(n,r);var i;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var u=l[p];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(vr.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var a=r[p];if(u=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&a!==u&&(a!=null||u!=null))if(p==="style")if(u){for(i in u)!u.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&u[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(p,n)),n=a;else p==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(p,a)):p==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(p,""+a):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(vr.hasOwnProperty(p)?(a!=null&&p==="onScroll"&&Q("scroll",e),o||u===a||(o=[])):(o=o||[]).push(p,a))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}},od=function(e,t,n,r){n!==r&&(t.flags|=4)},Ko=!1,xe=!1,ld=typeof WeakSet=="function"?WeakSet:Set,C=null,fa=!1,he=null,Je=!1,id=Math.ceil,Yo=St.ReactCurrentDispatcher,ji=St.ReactCurrentOwner,Ne=St.ReactCurrentBatchConfig,F=0,se=null,ee=null,ge=0,ze=0,ut=It(0),le=0,Rr=null,mn=0,Xo=0,Ui=0,Ar=null,Ie=null,Ri=0,Ai=1/0,_t=null,Go=!1,Hi=null,Yt=null,Zo=!1,Xt=null,Jo=0,Hr=0,Vi=null,bo=-1,qo=0,ud=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)Me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Me=!1,Ra(e,t,n);Me=!!(e.flags&131072)}else Me=!1,K&&t.flags&1048576&&pu(t,Ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;po(e,t),e=t.pendingProps;var o=_n(t,re.current);Tn(t,n),o=El(null,t,r,e,o,n);var l=Cl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(l=!0,ro(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,yl(t),o.updater=Qo,t.stateNode=o,o._reactInternals=t,Ll(t,r,e,n),t=Fl(null,t,r,!0,l,n)):(t.tag=0,K&&l&&al(t),Ee(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(po(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Ja(r),e=Be(r,e),o){case 0:t=Dl(null,t,r,e,n);break e;case 1:t=os(null,t,r,e,n);break e;case 11:t=qu(null,t,r,e,n);break e;case 14:t=es(null,t,r,Be(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Dl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),os(e,t,r,o,n);case 3:e:{if(ls(t),e===null)throw Error(h(387));r=t.pendingProps,l=t.memoizedState,o=l.element,xu(e,t),uo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Mn(Error(h(423)),t),t=is(e,t,r,n,o);break e}else if(r!==o){o=Mn(Error(h(424)),t),t=is(e,t,r,n,o);break e}else for(Le=vt(t.stateNode.containerInfo.firstChild),je=t,K=!0,Ze=null,n=ca(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pn(),r===o){t=xt(e,t,n);break e}Ee(e,t,r,n)}t=t.child}return t;case 5:return Eu(t),e===null&&fl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ul(r,o)?i=null:l!==null&&ul(r,l)&&(t.flags|=32),rs(e,t),Ee(e,t,i,n),t.child;case 6:return e===null&&fl(t),null;case 13:return us(e,t,n);case 4:return wl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):Ee(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),qu(e,t,r,o,n);case 7:return Ee(e,t,t.pendingProps,n),t.child;case 8:return Ee(e,t,t.pendingProps.children,n),t.child;case 12:return Ee(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,B(Ho,r._currentValue),r._currentValue=i,l!==null)if(Ge(l.value,i)){if(l.children===o.children&&!me.current){t=xt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){i=l.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=wt(-1,n&-n),a.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var v=p.pending;v===null?a.next=a:(a.next=v.next,v.next=a),p.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),gl(l.return,n,t),u.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(h(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),gl(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Ee(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Tn(t,n),o=Re(o),r=r(o),t.flags|=1,Ee(e,t,r,n),t.child;case 14:return r=t.type,o=Be(r,t.pendingProps),o=Be(r.type,o),es(e,t,r,o,n);case 15:return ts(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),po(e,t),t.tag=1,Pe(r)?(e=!0,ro(t)):e=!1,Tn(t,n),Ku(t,r,o),Ll(t,r,o,n),Fl(null,t,r,!0,e,n);case 19:return as(e,t,n);case 22:return ns(e,t,n)}throw Error(h(156,t.tag))},$e=function(e,t,n,r){return new Za(e,t,n,r)},pa=typeof reportError=="function"?reportError:function(e){console.error(e)};xo.prototype.render=Jl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));yo(e,t,null,null)},xo.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){yo(null,e,null,null)}),t[Et]=null}},xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&Yr(e)}};var sd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Z(t.pendingLanes);n!==0&&(ht(t,n|1),Te(t,ie()),!(F&6)&&(gr(),Dt()))}break;case 13:ln(function(){var r=yt(e,1);if(r!==null){var o=Ce();Ke(r,e,1,o)}}),Zl(e,1)}},ma=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=Ce();Ke(t,e,134217728,n)}Zl(e,134217728)}},ad=function(e){if(e.tag===13){var t=jt(e),n=yt(e,t);if(n!==null){var r=Ce();Ke(n,e,t,r)}Zl(e,t)}},cd=function(){return U},dd=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};di=function(e,t,n){switch(t){case"input":if(ve(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=no(r);if(!o)throw Error(h(90));be(r),ve(r,o)}}}break;case"textarea":Br(e,n);break;case"select":t=n.value,t!=null&&Tt(e,!!n.multiple,t,!1)}},function(e,t,n){Vs=e,$s=n}(Bl,function(e,t,n,r,o){var l=U,i=Ne.transition;try{return Ne.transition=null,U=1,e(t,n,r,o)}finally{U=l,Ne.transition=i,F===0&&gr()}},ln);var fd={usingClientEntryPoint:!1,Events:[cr,zn,no,tr,wn,Bl]};(function(e){if(e={bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:ec,findFiberByHostInstance:e.findFiberByHostInstance||tc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1"},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")e=!1;else{var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)e=!0;else{try{Po=t.inject(e),ot=t}catch{}e=!!t.checkDCE}}return e})({findFiberByHostInstance:nn,bundleType:0,version:"18.3.1-next-f1338f8080-20240426",rendererPackageName:"react-dom"}),k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fd,k.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bl(t))throw Error(h(200));return qa(e,t,null,n)},k.createRoot=function(e,t){if(!bl(e))throw Error(h(299));var n=!1,r="",o=pa;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gl(e,1,!1,null,null,n,!1,r,o),e[Et]=t.current,sr(e.nodeType===8?e.parentNode:e),new Jl(t)},k.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=Fe(t),e=e===null?null:e.stateNode,e},k.flushSync=function(e){return ln(e)},k.hydrate=function(e,t,n){if(!ko(t))throw Error(h(200));return So(null,e,t,!0,n)},k.hydrateRoot=function(e,t,n){if(!bl(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=pa;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Ls(t,null,e,1,n??null,o,!1,l,i),e[Et]=t.current,sr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new xo(t)},k.render=function(e,t,n){if(!ko(t))throw Error(h(200));return So(null,e,t,!1,n)},k.unmountComponentAtNode=function(e){if(!ko(e))throw Error(h(40));return e._reactRootContainer?(ln(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1},k.unstable_batchedUpdates=Bl,k.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ko(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return So(e,t,n,!1,r)},k.version="18.3.1-next-f1338f8080-20240426"})})();var va=window.ReactDOM;var ya=va.createRoot,{render:Dd,hydrate:Fd}=va;el();(function(){let k=document.createElement("style");k.textContent=`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

/*
! tailwindcss v3.4.19 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container{
  width: 100% !important;
}
.container{
  width: 100%;
}
@media (min-width: 640px){

  .\\!container{
    max-width: 640px !important;
  }

  .container{
    max-width: 640px;
  }
}
@media (min-width: 768px){

  .\\!container{
    max-width: 768px !important;
  }

  .container{
    max-width: 768px;
  }
}
@media (min-width: 1024px){

  .\\!container{
    max-width: 1024px !important;
  }

  .container{
    max-width: 1024px;
  }
}
@media (min-width: 1280px){

  .\\!container{
    max-width: 1280px !important;
  }

  .container{
    max-width: 1280px;
  }
}
@media (min-width: 1536px){

  .\\!container{
    max-width: 1536px !important;
  }

  .container{
    max-width: 1536px;
  }
}
.absolute{
  position: absolute;
}
.relative{
  position: relative;
}
.left-0{
  left: 0px;
}
.left-1{
  left: 0.25rem;
}
.left-6{
  left: 1.5rem;
}
.right-0{
  right: 0px;
}
.top-0{
  top: 0px;
}
.top-0\\.5{
  top: 0.125rem;
}
.z-10{
  z-index: 10;
}
.mx-auto{
  margin-left: auto;
  margin-right: auto;
}
.mt-1{
  margin-top: 0.25rem;
}
.mt-1\\.5{
  margin-top: 0.375rem;
}
.block{
  display: block;
}
.flex{
  display: flex;
}
.grid{
  display: grid;
}
.contents{
  display: contents;
}
.h-1\\.5{
  height: 0.375rem;
}
.h-16{
  height: 4rem;
}
.h-2{
  height: 0.5rem;
}
.h-3{
  height: 0.75rem;
}
.h-4{
  height: 1rem;
}
.h-5{
  height: 1.25rem;
}
.h-6{
  height: 1.5rem;
}
.h-\\[1px\\]{
  height: 1px;
}
.max-h-\\[140px\\]{
  max-height: 140px;
}
.min-h-\\[550px\\]{
  min-height: 550px;
}
.w-1\\.5{
  width: 0.375rem;
}
.w-12{
  width: 3rem;
}
.w-16{
  width: 4rem;
}
.w-2{
  width: 0.5rem;
}
.w-3{
  width: 0.75rem;
}
.w-4{
  width: 1rem;
}
.w-5{
  width: 1.25rem;
}
.w-6{
  width: 1.5rem;
}
.w-full{
  width: 100%;
}
.min-w-0{
  min-width: 0px;
}
.max-w-\\[120px\\]{
  max-width: 120px;
}
.max-w-\\[200px\\]{
  max-width: 200px;
}
.max-w-\\[210px\\]{
  max-width: 210px;
}
.max-w-\\[280px\\]{
  max-width: 280px;
}
.flex-1{
  flex: 1 1 0%;
}
.transform{
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes ping{

  75%, 100%{
    transform: scale(2);
    opacity: 0;
  }
}
.animate-ping{
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes pulse{

  50%{
    opacity: .5;
  }
}
.animate-pulse{
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin{

  to{
    transform: rotate(360deg);
  }
}
.animate-spin{
  animation: spin 1s linear infinite;
}
.select-none{
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.grid-cols-2{
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.flex-col{
  flex-direction: column;
}
.items-start{
  align-items: flex-start;
}
.items-center{
  align-items: center;
}
.justify-center{
  justify-content: center;
}
.justify-between{
  justify-content: space-between;
}
.gap-1{
  gap: 0.25rem;
}
.gap-1\\.5{
  gap: 0.375rem;
}
.gap-2{
  gap: 0.5rem;
}
.gap-3{
  gap: 0.75rem;
}
.space-y-1 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-3 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.overflow-hidden{
  overflow: hidden;
}
.overflow-y-auto{
  overflow-y: auto;
}
.truncate{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rounded{
  border-radius: 0.25rem;
}
.rounded-full{
  border-radius: 9999px;
}
.rounded-lg{
  border-radius: 0.5rem;
}
.rounded-xl{
  border-radius: 0.75rem;
}
.border{
  border-width: 1px;
}
.border-2{
  border-width: 2px;
}
.border-b{
  border-bottom-width: 1px;
}
.border-l{
  border-left-width: 1px;
}
.border-t{
  border-top-width: 1px;
}
.border-dashed{
  border-style: dashed;
}
.border-amber-500\\/30{
  border-color: rgb(245 158 11 / 0.3);
}
.border-emerald-500\\/30{
  border-color: rgb(16 185 129 / 0.3);
}
.border-indigo-500{
  --tw-border-opacity: 1;
  border-color: rgb(99 102 241 / var(--tw-border-opacity, 1));
}
.border-indigo-500\\/20{
  border-color: rgb(99 102 241 / 0.2);
}
.border-indigo-500\\/30{
  border-color: rgb(99 102 241 / 0.3);
}
.border-rose-500\\/20{
  border-color: rgb(244 63 94 / 0.2);
}
.border-rose-500\\/30{
  border-color: rgb(244 63 94 / 0.3);
}
.border-slate-700{
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));
}
.border-slate-800{
  --tw-border-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-border-opacity, 1));
}
.border-slate-800\\/40{
  border-color: rgb(30 41 59 / 0.4);
}
.border-slate-800\\/80{
  border-color: rgb(30 41 59 / 0.8);
}
.border-slate-900{
  --tw-border-opacity: 1;
  border-color: rgb(15 23 42 / var(--tw-border-opacity, 1));
}
.border-yellow-500\\/30{
  border-color: rgb(234 179 8 / 0.3);
}
.border-t-transparent{
  border-top-color: transparent;
}
.bg-amber-400{
  --tw-bg-opacity: 1;
  background-color: rgb(251 191 36 / var(--tw-bg-opacity, 1));
}
.bg-amber-500\\/10{
  background-color: rgb(245 158 11 / 0.1);
}
.bg-emerald-400{
  --tw-bg-opacity: 1;
  background-color: rgb(52 211 153 / var(--tw-bg-opacity, 1));
}
.bg-emerald-500\\/10{
  background-color: rgb(16 185 129 / 0.1);
}
.bg-indigo-500{
  --tw-bg-opacity: 1;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity, 1));
}
.bg-indigo-500\\/10{
  background-color: rgb(99 102 241 / 0.1);
}
.bg-indigo-600{
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity, 1));
}
.bg-rose-400{
  --tw-bg-opacity: 1;
  background-color: rgb(251 113 133 / var(--tw-bg-opacity, 1));
}
.bg-rose-500\\/10{
  background-color: rgb(244 63 94 / 0.1);
}
.bg-slate-600{
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity, 1));
}
.bg-slate-800{
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));
}
.bg-slate-900{
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1));
}
.bg-slate-900\\/40{
  background-color: rgb(15 23 42 / 0.4);
}
.bg-slate-900\\/50{
  background-color: rgb(15 23 42 / 0.5);
}
.bg-slate-900\\/60{
  background-color: rgb(15 23 42 / 0.6);
}
.bg-slate-950{
  --tw-bg-opacity: 1;
  background-color: rgb(2 6 23 / var(--tw-bg-opacity, 1));
}
.bg-white{
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-500\\/10{
  background-color: rgb(234 179 8 / 0.1);
}
.bg-gradient-to-br{
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
.bg-gradient-to-r{
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-slate-900{
  --tw-gradient-from: #0f172a var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(15 23 42 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-transparent{
  --tw-gradient-from: transparent var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-indigo-500{
  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), #6366f1 var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.to-slate-950{
  --tw-gradient-to: #020617 var(--tw-gradient-to-position);
}
.to-transparent{
  --tw-gradient-to: transparent var(--tw-gradient-to-position);
}
.p-2{
  padding: 0.5rem;
}
.p-2\\.5{
  padding: 0.625rem;
}
.p-3{
  padding: 0.75rem;
}
.p-4{
  padding: 1rem;
}
.px-1\\.5{
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}
.px-2{
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.py-0\\.5{
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.py-1{
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\\.5{
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-12{
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.py-2{
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-4{
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.pb-1{
  padding-bottom: 0.25rem;
}
.pl-2{
  padding-left: 0.5rem;
}
.pr-1{
  padding-right: 0.25rem;
}
.pt-2{
  padding-top: 0.5rem;
}
.text-center{
  text-align: center;
}
.font-mono{
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
.text-\\[10px\\]{
  font-size: 10px;
}
.text-\\[11px\\]{
  font-size: 11px;
}
.text-\\[9px\\]{
  font-size: 9px;
}
.text-sm{
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl{
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs{
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-bold{
  font-weight: 700;
}
.font-semibold{
  font-weight: 600;
}
.uppercase{
  text-transform: uppercase;
}
.leading-relaxed{
  line-height: 1.625;
}
.tracking-tighter{
  letter-spacing: -0.05em;
}
.tracking-wider{
  letter-spacing: 0.05em;
}
.tracking-widest{
  letter-spacing: 0.1em;
}
.text-amber-400{
  --tw-text-opacity: 1;
  color: rgb(251 191 36 / var(--tw-text-opacity, 1));
}
.text-emerald-400{
  --tw-text-opacity: 1;
  color: rgb(52 211 153 / var(--tw-text-opacity, 1));
}
.text-indigo-400{
  --tw-text-opacity: 1;
  color: rgb(129 140 248 / var(--tw-text-opacity, 1));
}
.text-indigo-600{
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity, 1));
}
.text-rose-400{
  --tw-text-opacity: 1;
  color: rgb(251 113 133 / var(--tw-text-opacity, 1));
}
.text-slate-100{
  --tw-text-opacity: 1;
  color: rgb(241 245 249 / var(--tw-text-opacity, 1));
}
.text-slate-200{
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity, 1));
}
.text-slate-300{
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity, 1));
}
.text-slate-400{
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity, 1));
}
.text-slate-500{
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity, 1));
}
.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-yellow-400{
  --tw-text-opacity: 1;
  color: rgb(250 204 21 / var(--tw-text-opacity, 1));
}
.opacity-25{
  opacity: 0.25;
}
.opacity-75{
  opacity: 0.75;
}
.shadow-md{
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl{
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-indigo-500\\/20{
  --tw-shadow-color: rgb(99 102 241 / 0.2);
  --tw-shadow: var(--tw-shadow-colored);
}
.blur{
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter{
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all{
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-300{
  transition-duration: 300ms;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  width: 400px;
}

body {
  width: 400px;
  max-width: 400px;
  min-height: 550px;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-family: 'Space Grotesk', system-ui, sans-serif;
  background-color: #020617;
}

#root {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

/* Animations helper classes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out forwards;
}

.hover\\:border-slate-700:hover{
  --tw-border-opacity: 1;
  border-color: rgb(51 65 85 / var(--tw-border-opacity, 1));
}

.hover\\:bg-indigo-500:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-rose-500\\/5:hover{
  background-color: rgb(244 63 94 / 0.05);
}

.hover\\:text-indigo-300:hover{
  --tw-text-opacity: 1;
  color: rgb(165 180 252 / var(--tw-text-opacity, 1));
}

.hover\\:shadow-indigo-500\\/20:hover{
  --tw-shadow-color: rgb(99 102 241 / 0.2);
  --tw-shadow: var(--tw-shadow-colored);
}

.focus\\:border-indigo-500:focus{
  --tw-border-opacity: 1;
  border-color: rgb(99 102 241 / var(--tw-border-opacity, 1));
}

.focus\\:outline-none:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-indigo-500:focus{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity, 1));
}

.active\\:scale-\\[0\\.98\\]:active{
  --tw-scale-x: 0.98;
  --tw-scale-y: 0.98;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}`,document.head.appendChild(k)})();var Ld=()=>{let[k,A]=Zt({isEnabled:!0,apiUrl:"https://api.deep-truth.ai",isSimulatedMode:!0}),[h,ce]=Zt([]),[te,hn]=Zt(""),[$r,gn]=Zt(""),[b,st]=Zt(!1),[De,ke]=Zt("");Wi(()=>{chrome.storage.local.get(["isEnabled","apiUrl","isSimulatedMode","scanHistory"],H=>{A({isEnabled:H.isEnabled!==void 0?H.isEnabled:!0,apiUrl:H.apiUrl||"https://api.deep-truth.ai",isSimulatedMode:H.isSimulatedMode!==void 0?H.isSimulatedMode:!0}),H.scanHistory&&ce(H.scanHistory)}),chrome.tabs.query({active:!0,currentWindow:!0},H=>{var ve;(ve=H[0])!=null&&ve.url&&hn(H[0].url)});let z=H=>{(H.type==="ANALYSIS_UPDATED"||H.type==="STATE_CHANGE")&&chrome.storage.local.get(["scanHistory"],ve=>{ve.scanHistory&&ce(ve.scanHistory)})};return chrome.runtime.onMessage.addListener(z),()=>chrome.runtime.onMessage.removeListener(z)},[]);let Jt=()=>{let z=!k.isEnabled,H={...k,isEnabled:z};A(H),chrome.storage.local.set({isEnabled:z},()=>{chrome.tabs.query({active:!0,currentWindow:!0},ve=>{var en;(en=ve[0])!=null&&en.id&&chrome.tabs.sendMessage(ve[0].id,{type:"TOGGLE_SCANNING",enabled:z}).catch(()=>{})})})},bt=()=>{chrome.storage.local.set({apiUrl:k.apiUrl,isSimulatedMode:k.isSimulatedMode},()=>{ke("Settings updated successfully!"),setTimeout(()=>ke(""),3e3)})},de=()=>{chrome.storage.local.set({scanHistory:[]},()=>{ce([]),ke("History cleared."),setTimeout(()=>ke(""),2500)})},Pt=z=>{switch(z){case"Authentic":return"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30";case"Suspicious":return"bg-amber-500/10 text-amber-400 border border-amber-500/30";case"FAKE":return"bg-rose-500/10 text-rose-400 border border-rose-500/30";default:return"bg-slate-800 text-slate-400 border border-slate-700"}},Se=z=>z?z==="FAKE"?"MANIPULATED / FAKE":z.toUpperCase():"UNKNOWN",at=z=>z===void 0?"text-slate-400":z<.35?"text-emerald-400":z<=.65?"text-amber-400":"text-rose-400",qt=z=>z===void 0?"Unknown":z<.35?"Clear / Low Risk":z<=.65?"Anomalous Patterns Detected":"Critical Deepfake Probability",be=(z=>{try{return new URL(z).hostname.replace("www.","")}catch{return""}})(te),qe=["twitter.com","x.com","instagram.com","youtube.com"].some(z=>be.includes(z)),dt=["netflix.com","spotify.com"].some(z=>be.includes(z));return w.createElement("div",{className:"popup-container bg-slate-950 text-slate-100 flex flex-col min-h-[550px] relative select-none"},w.createElement("header",{className:"p-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between"},w.createElement("div",{className:"flex items-center gap-2"},w.createElement("div",{className:"relative"},w.createElement("div",{className:`w-3 h-3 rounded-full ${k.isEnabled?"bg-indigo-500 animate-ping absolute":""}`}),w.createElement("div",{className:`w-3 h-3 rounded-full relative z-10 ${k.isEnabled?"bg-indigo-500":"bg-slate-600"}`})),w.createElement("div",null,w.createElement("h1",{className:"text-sm font-bold uppercase tracking-wider text-white"},"Deep-Truth"),w.createElement("p",{className:"text-[10px] text-slate-400 font-mono"},"ACTIVE SECURITY v1.0.0"))),w.createElement("div",{className:"flex items-center gap-2"},w.createElement("span",{className:"text-[10px] font-bold font-mono tracking-tighter text-slate-400"},k.isEnabled?"GUARD ACTIVE":"SUSPENDED"),w.createElement("button",{onClick:Jt,className:`w-12 h-6 rounded-full transition-all duration-300 relative ${k.isEnabled?"bg-indigo-600 shadow-indigo-500/20":"bg-slate-800"}`},w.createElement("div",{className:`w-5 h-5 rounded-full bg-white shadow-md absolute top-0.5 transition-all duration-300 ${k.isEnabled?"left-6":"left-1"}`})))),w.createElement("main",{className:"flex-1 p-4 overflow-y-auto space-y-4"},w.createElement("div",{className:"flex items-center justify-between bg-slate-900 p-2.5 rounded-lg border border-slate-800"},w.createElement("div",{className:"flex items-center gap-2"},w.createElement("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),w.createElement("span",{className:"text-xs text-slate-300 font-mono"},k.isSimulatedMode?"Simulator Active":"API Node Connected")),w.createElement("button",{onClick:()=>st(!b),className:"text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-mono transition-colors"},b?"Close Settings":"Settings \u2699\uFE0F")),b&&w.createElement("div",{className:"bg-slate-900 border border-indigo-500/20 rounded-lg p-3 space-y-3 animate-fadeIn"},w.createElement("div",{className:"space-y-1"},w.createElement("label",{className:"text-[10px] uppercase font-bold tracking-wider text-slate-400"},"Backend API URL"),w.createElement("input",{type:"text",value:k.apiUrl,onChange:z=>A({...k,apiUrl:z.target.value}),className:"w-full text-xs bg-slate-950 border border-slate-800 p-2 rounded text-slate-100 font-mono focus:border-indigo-500 focus:outline-none",placeholder:"https://api.deep-truth.ai"})),w.createElement("div",{className:"flex items-center justify-between"},w.createElement("div",{className:"flex flex-col"},w.createElement("span",{className:"text-[11px] font-semibold text-slate-200"},"Simulation Engine"),w.createElement("span",{className:"text-[9px] text-slate-400"},"Test verification patterns mock-up")),w.createElement("input",{type:"checkbox",checked:k.isSimulatedMode,onChange:z=>A({...k,isSimulatedMode:z.target.checked}),className:"w-4 h-4 text-indigo-600 bg-slate-950 border-slate-800 rounded focus:ring-indigo-500"})),w.createElement("div",{className:"flex justify-between gap-2 pt-2"},w.createElement("button",{onClick:de,className:"flex-1 py-1 px-2 border border-rose-500/20 text-rose-400 text-xs rounded hover:bg-rose-500/5 transition-all font-mono"},"Clear History"),w.createElement("button",{onClick:bt,className:"flex-1 py-1 px-2 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-500 transition-all font-mono font-bold"},"Save Config")),De&&w.createElement("div",{className:"text-[10px] text-emerald-400 font-mono text-center"},De)),w.createElement("div",{className:"bg-slate-900/60 rounded-lg p-3 border border-slate-800/80 flex items-start justify-between"},w.createElement("div",null,w.createElement("div",{className:"text-[10px] text-slate-400 uppercase tracking-widest font-mono"},"Current DOM Watcher"),w.createElement("div",{className:"text-xs font-bold text-slate-200 truncate max-w-[200px]",title:te},be||"No Active Browser Tab")),w.createElement("div",null,dt?w.createElement("span",{className:"px-1.5 py-0.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 rounded text-[9px] font-bold font-mono"},"DRM RESTRICTED"):qe?w.createElement("span",{className:"px-1.5 py-0.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded text-[9px] font-bold font-mono"},"MONITORED"):w.createElement("span",{className:"px-1.5 py-0.5 bg-slate-800 text-slate-400 border border-slate-700 rounded text-[9px] font-mono"},"PASSIVE SCAN"))),h.length>0?w.createElement("div",{className:"space-y-3"},w.createElement("div",{className:"text-[10px] text-slate-400 uppercase tracking-widest font-mono border-b border-slate-800 pb-1"},"Active Session Inspection"),(()=>{let z=h[0],H=z.trustScore!==void 0?Math.round(z.trustScore*100):0;return w.createElement("div",{className:"bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-xl p-4 shadow-xl space-y-3 relative overflow-hidden"},w.createElement("div",{className:"absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse"}),w.createElement("div",{className:"flex items-start justify-between"},w.createElement("div",null,w.createElement("span",{className:"text-[9px] px-1.5 py-0.5 bg-slate-800 text-slate-300 font-mono rounded"},z.mediaType," RESOURCE"),w.createElement("h3",{className:"text-xs font-semibold text-slate-300 mt-1.5 font-mono truncate max-w-[210px]",title:z.mediaHash},"SHA256: ",z.mediaHash.substring(0,16),"...")),w.createElement("div",{className:`px-2 py-1 rounded text-xs font-bold font-mono ${Pt(z.verdict)}`},Se(z.verdict))),z.status==="COMPLETED"?w.createElement("div",{className:"grid grid-cols-2 gap-3 py-1 border-t border-b border-slate-800/80"},w.createElement("div",null,w.createElement("div",{className:"text-[10px] text-slate-500 font-mono uppercase"},"Trust Deviation"),w.createElement("div",{className:`text-xl font-bold font-mono ${at(z.trustScore)}`},H,"%"),w.createElement("div",{className:"text-[9px] text-slate-400"},qt(z.trustScore))),w.createElement("div",null,w.createElement("div",{className:"text-[10px] text-slate-500 font-mono uppercase"},"Confidence AI"),w.createElement("div",{className:"text-xl font-bold font-mono text-indigo-400"},z.confidence?`${z.confidence}%`:"N/A"),w.createElement("div",{className:"text-[9px] text-slate-400"},"Forensic confidence"))):w.createElement("div",{className:"flex items-center gap-3 py-4"},w.createElement("div",{className:"w-5 h-5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"}),w.createElement("span",{className:"text-xs text-slate-400 font-mono"},"Awaiting polling sequence...")),z.explanation&&w.createElement("p",{className:"text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded border border-slate-800/40 font-mono leading-relaxed"},z.explanation),z.status==="COMPLETED"&&w.createElement("a",{href:`https://deep-truth.example.com/reports/${z.taskId}`,target:"_blank",rel:"noreferrer",className:"block w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-center rounded-lg text-xs font-bold font-mono tracking-wider transition-all shadow-md hover:shadow-indigo-500/20 active:scale-[0.98]"},"VIEW FULL FORENSIC REPORT \u2197"))})(),h.length>1&&w.createElement("div",{className:"space-y-2 pt-2"},w.createElement("div",{className:"text-[10px] text-slate-400 uppercase tracking-widest font-mono"},"Analysis Timeline History"),w.createElement("div",{className:"max-h-[140px] overflow-y-auto space-y-1.5 pr-1 border-l border-slate-800 pl-2"},h.slice(1).map((z,H)=>{let ve=z.trustScore!==void 0?Math.round(z.trustScore*100):0;return w.createElement("div",{key:H,className:"flex items-center justify-between text-xs py-1.5 px-2 bg-slate-900/40 rounded border border-slate-800 hover:border-slate-700 transition-all"},w.createElement("div",{className:"flex items-center gap-2 min-w-0"},w.createElement("span",{className:`w-1.5 h-1.5 rounded-full ${z.verdict==="Authentic"?"bg-emerald-400":z.verdict==="Suspicious"?"bg-amber-400":"bg-rose-400"}`}),w.createElement("span",{className:"font-mono text-slate-400 uppercase text-[10px]"},z.mediaType),w.createElement("span",{className:"font-mono text-slate-200 truncate max-w-[120px]"},z.mediaHash.slice(0,12))),w.createElement("div",{className:"flex items-center gap-2 font-mono"},w.createElement("span",{className:`${at(z.trustScore)} font-bold`},ve,"%"),w.createElement("span",{className:"text-[10px] text-slate-500"},new Date(z.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))))})))):w.createElement("div",{className:"py-12 flex flex-col items-center justify-center text-center space-y-3"},w.createElement("div",{className:"w-16 h-16 rounded-full bg-slate-900 border-2 border-dashed border-slate-700 flex items-center justify-center"},w.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-slate-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),w.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}))),w.createElement("div",null,w.createElement("h3",{className:"text-sm font-semibold text-slate-300"},"Passive Defense Active"),w.createElement("p",{className:"text-xs text-slate-500 max-w-[280px] mt-1 mx-auto leading-relaxed"},"Deep-Truth is continuously scanning the background DOM for media feeds on social networks. Direct clicks on verification badges on-page will surface analytics here.")))),w.createElement("footer",{className:"p-3 border-t border-slate-900 bg-slate-950 flex items-center justify-between text-[10px] text-slate-500 font-mono"},w.createElement("div",null,"SHA-256 CONTEXT ENCRYPTED"),w.createElement("div",null,"POLICIES OK")))},wa=Ld;var Vr=document.getElementById("root");Vr||(Vr=document.createElement("div"),Vr.id="root",document.body.appendChild(Vr));var Md=ya(Vr);Md.render(w.createElement(w.StrictMode,null,w.createElement(wa,null)));})();
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
