!function(e,t){"use strict"
"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,(function(e,t){"use strict"
function n(e,t){var n=(t=t||G).createElement("script")
n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}function r(e){var t=!!e&&"length"in e&&e.length,n=se.type(e)
return"function"!==n&&!se.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function i(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function o(e,t,n){return se.isFunction(t)?se.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?se.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?se.grep(e,(function(e){return ee.call(t,e)>-1!==n})):me.test(t)?se.filter(t,e,n):(t=se.filter(t,e),se.grep(e,(function(e){return ee.call(t,e)>-1!==n&&1===e.nodeType})))}function a(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function s(e){return e}function u(e){throw e}function l(e,t,n,r){var i
try{e&&se.isFunction(i=e.promise)?i.call(e).done(t).fail(n):e&&se.isFunction(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}function c(){G.removeEventListener("DOMContentLoaded",c),e.removeEventListener("load",c),se.ready()}function f(){this.expando=se.expando+f.uid++}function p(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(De,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:je.test(e)?JSON.parse(e):e)}(n)}catch(e){}Se.set(e,t,n)}else n=void 0
return n}function d(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return se.css(e,t,"")},u=s(),l=n&&n[3]||(se.cssNumber[t]?"":"px"),c=(se.cssNumber[t]||"px"!==l&&+u)&&qe.exec(se.css(e,t))
if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1
do{c/=o=o||".5",se.style(e,t,c+l)}while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function h(e){var t,n=e.ownerDocument,r=e.nodeName,i=Pe[r]
return i||(t=n.body.appendChild(n.createElement(r)),i=se.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),Pe[r]=i,i)}function g(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=Ae.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&Oe(r)&&(i[o]=h(r))):"none"!==n&&(i[o]="none",Ae.set(r,"display",n)))
for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o])
return e}function v(e,t){var n
return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&i(e,t)?se.merge([e],n):n}function m(e,t){for(var n=0,r=e.length;n<r;n++)Ae.set(e[n],"globalEval",!t||Ae.get(t[n],"globalEval"))}function y(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===se.type(o))se.merge(p,o.nodeType?[o]:o)
else if($e.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(Me.exec(o)||["",""])[1].toLowerCase(),u=Ie[s]||Ie._default,a.innerHTML=u[1]+se.htmlPrefilter(o)+u[2],c=u[0];c--;)a=a.lastChild
se.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o))
for(f.textContent="",d=0;o=p[d++];)if(r&&se.inArray(o,r)>-1)i&&i.push(o)
else if(l=se.contains(o.ownerDocument,o),a=v(f.appendChild(o),"script"),l&&m(a),n)for(c=0;o=a[c++];)We.test(o.type||"")&&n.push(o)
return f}function x(){return!0}function b(){return!1}function w(){try{return G.activeElement}catch(e){}}function T(e,t,n,r,i,o){var a,s
if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)T(e,s,n,r,t[s],o)
return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=b
else if(!i)return e
return 1===o&&(a=i,(i=function(e){return se().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=se.guid++)),e.each((function(){se.event.add(this,t,i,r,n)}))}function C(e,t){return i(e,"table")&&i(11!==t.nodeType?t:t.firstChild,"tr")&&se(">tbody",e)[0]||e}function E(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function k(e){var t=Ge.exec(e.type)
return t?e.type=t[1]:e.removeAttribute("type"),e}function N(e,t){var n,r,i,o,a,s,u,l
if(1===t.nodeType){if(Ae.hasData(e)&&(o=Ae.access(e),a=Ae.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)se.event.add(t,i,l[i][n])
Se.hasData(e)&&(s=Se.access(e),u=se.extend({},s),Se.set(t,u))}}function A(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&Re.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function S(e,t,r,i){t=K.apply([],t)
var o,a,s,u,l,c,f=0,p=e.length,d=p-1,h=t[0],g=se.isFunction(h)
if(g||p>1&&"string"==typeof h&&!ae.checkClone&&Ye.test(h))return e.each((function(n){var o=e.eq(n)
g&&(t[0]=h.call(this,n,o.html())),S(o,t,r,i)}))
if(p&&(a=(o=y(t,e[0].ownerDocument,!1,e,i)).firstChild,1===o.childNodes.length&&(o=a),a||i)){for(u=(s=se.map(v(o,"script"),E)).length;f<p;f++)l=o,f!==d&&(l=se.clone(l,!0,!0),u&&se.merge(s,v(l,"script"))),r.call(e[f],l,f)
if(u)for(c=s[s.length-1].ownerDocument,se.map(s,k),f=0;f<u;f++)l=s[f],We.test(l.type||"")&&!Ae.access(l,"globalEval")&&se.contains(c,l)&&(l.src?se._evalUrl&&se._evalUrl(l.src):n(l.textContent.replace(Qe,""),c))}return e}function j(e,t,n){for(var r,i=t?se.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||se.cleanData(v(r)),r.parentNode&&(n&&se.contains(r.ownerDocument,r)&&m(v(r,"script")),r.parentNode.removeChild(r))
return e}function D(e,t,n){var r,i,o,a,s=e.style
return(n=n||Ze(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||se.contains(e.ownerDocument,e)||(a=se.style(e,t)),!ae.pixelMarginRight()&&Ke.test(a)&&Je.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function L(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function q(e){var t=se.cssProps[e]
return t||(t=se.cssProps[e]=function(e){if(e in ot)return e
for(var t=e[0].toUpperCase()+e.slice(1),n=it.length;n--;)if((e=it[n]+t)in ot)return e}(e)||e),t}function H(e,t,n){var r=qe.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function O(e,t,n,r,i){var o,a=0
for(o=n===(r?"border":"content")?4:"width"===t?1:0;o<4;o+=2)"margin"===n&&(a+=se.css(e,n+He[o],!0,i)),r?("content"===n&&(a-=se.css(e,"padding"+He[o],!0,i)),"margin"!==n&&(a-=se.css(e,"border"+He[o]+"Width",!0,i))):(a+=se.css(e,"padding"+He[o],!0,i),"padding"!==n&&(a+=se.css(e,"border"+He[o]+"Width",!0,i)))
return a}function F(e,t,n){var r,i=Ze(e),o=D(e,t,i),a="border-box"===se.css(e,"boxSizing",!1,i)
return Ke.test(o)?o:(r=a&&(ae.boxSizingReliable()||o===e.style[t]),(o=parseFloat(o)||0)+O(e,t,n||(a?"border":"content"),r,i)+"px")}function P(e,t,n,r,i){return new P.prototype.init(e,t,n,r,i)}function R(){st&&(!1===G.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(R):e.setTimeout(R,se.fx.interval),se.fx.tick())}function M(){return e.setTimeout((function(){at=void 0})),at=se.now()}function W(e,t){var n,r=0,i={height:e}
for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=He[r])]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function I(e,t,n){for(var r,i=($.tweeners[t]||[]).concat($.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function $(e,t,n){var r,i,o=0,a=$.prefilters.length,s=se.Deferred().always((function(){delete u.elem})),u=function(){if(i)return!1
for(var t=at||M(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r)
return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:se.extend({},t),opts:se.extend(!0,{specialEasing:{},easing:se.easing._default},n),originalProperties:t,originalOptions:n,startTime:at||M(),duration:n.duration,tweens:[],createTween:function(t,n){var r=se.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
if(i)return this
for(i=!0;n<r;n++)l.tweens[n].run(1)
return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props
for(function(e,t){var n,r,i,o,a
for(n in e)if(i=t[r=se.camelCase(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=se.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i)
else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=$.prefilters[o].call(l,e,c,l.opts))return se.isFunction(r.stop)&&(se._queueHooks(l.elem,l.opts.queue).stop=se.proxy(r.stop,r)),r
return se.map(c,I,l),se.isFunction(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),se.fx.timer(se.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}function B(e){return(e.match(Te)||[]).join(" ")}function _(e){return e.getAttribute&&e.getAttribute("class")||""}function z(e,t,n,r){var i
if(Array.isArray(t))se.each(t,(function(t,i){n||xt.test(e)?r(e,i):z(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}))
else if(n||"object"!==se.type(t))r(e,t)
else for(i in t)z(e+"["+i+"]",t[i],n,r)}function X(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(Te)||[]
if(se.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function U(e,t,n,r){function i(s){var u
return o[s]=!0,se.each(e[s]||[],(function(e,s){var l=s(t,n,r)
return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)})),u}var o={},a=e===Dt
return i(t.dataTypes[0])||!o["*"]&&i("*")}function V(e,t){var n,r,i=se.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&se.extend(!0,e,r),e}var Y=[],G=e.document,Q=Object.getPrototypeOf,J=Y.slice,K=Y.concat,Z=Y.push,ee=Y.indexOf,te={},ne=te.toString,re=te.hasOwnProperty,ie=re.toString,oe=ie.call(Object),ae={},se=function(e,t){return new se.fn.init(e,t)},ue=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,le=/^-ms-/,ce=/-([a-z])/g,fe=function(e,t){return t.toUpperCase()}
se.fn=se.prototype={jquery:"3.2.0",constructor:se,length:0,toArray:function(){return J.call(this)},get:function(e){return null==e?J.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=se.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return se.each(this,e)},map:function(e){return this.pushStack(se.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(J.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:Z,sort:Y.sort,splice:Y.splice},se.extend=se.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1
for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||se.isFunction(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(se.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&se.isPlainObject(n)?n:{},a[t]=se.extend(l,o,r)):void 0!==r&&(a[t]=r))
return a},se.extend({expando:"jQuery"+("3.2.0"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===se.type(e)},isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=se.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n
return!(!e||"[object Object]"!==ne.call(e)||(t=Q(e))&&(n=re.call(t,"constructor")&&t.constructor,"function"!=typeof n||ie.call(n)!==oe))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?te[ne.call(e)]||"object":typeof e},globalEval:function(e){n(e)},camelCase:function(e){return e.replace(le,"ms-").replace(ce,fe)},each:function(e,t){var n,i=0
if(r(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break
return e},trim:function(e){return null==e?"":(e+"").replace(ue,"")},makeArray:function(e,t){var n=t||[]
return null!=e&&(r(Object(e))?se.merge(n,"string"==typeof e?[e]:e):Z.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:ee.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i])
return r},map:function(e,t,n){var i,o,a=0,s=[]
if(r(e))for(i=e.length;a<i;a++)null!=(o=t(e[a],a,n))&&s.push(o)
else for(a in e)null!=(o=t(e[a],a,n))&&s.push(o)
return K.apply([],s)},guid:1,proxy:function(e,t){var n,r,i
if("string"==typeof t&&(n=e[t],t=e,e=n),se.isFunction(e))return r=J.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(J.call(arguments)))}).guid=e.guid=e.guid||se.guid++,i},now:Date.now,support:ae}),"function"==typeof Symbol&&(se.fn[Symbol.iterator]=Y[Symbol.iterator]),se.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){te["[object "+t+"]"]=t.toLowerCase()}))
var pe=function(e){function t(e,t,n,r){var i,o,a,s,u,l,c,p=t&&t.ownerDocument,h=t?t.nodeType:9
if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n
if(!r&&((t?t.ownerDocument||t:$)!==H&&q(t),t=t||H,F)){if(11!==h&&(u=me.exec(e)))if(i=u[1]){if(9===h){if(!(a=t.getElementById(i)))return n
if(a.id===i)return n.push(a),n}else if(p&&(a=p.getElementById(i))&&W(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return K.apply(n,t.getElementsByTagName(e)),n
if((i=u[3])&&T.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(i)),n}if(T.qsa&&!U[e+" "]&&(!P||!P.test(e))){if(1!==h)p=t,c=e
else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(we,Te):t.setAttribute("id",s=I),o=(l=N(e)).length;o--;)l[o]="#"+s+" "+d(l[o])
c=l.join(","),p=ye.test(e)&&f(t.parentNode)||t}if(c)try{return K.apply(n,p.querySelectorAll(c)),n}catch(e){}finally{s===I&&t.removeAttribute("id")}}}return S(e.replace(se,"$1"),t,n,r)}function n(){var e=[]
return function t(n,r){return e.push(n+" ")>C.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function r(e){return e[I]=!0,e}function i(e){var t=H.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)C.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function s(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function l(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Ee(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function c(e){return r((function(t){return t=+t,r((function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))}))}))}function f(e){return e&&void 0!==e.getElementsByTagName&&e}function p(){}function d(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function h(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=_++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i)
return!1}:function(t,n,u){var l,c,f,p=[B,s]
if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(c=(f=t[I]||(t[I]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t
else{if((l=c[o])&&l[0]===B&&l[1]===s)return p[2]=l[2]
if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function g(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function v(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r)
return r}function m(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)))
return a}function y(e,t,n,i,o,a){return i&&!i[I]&&(i=y(i)),o&&!o[I]&&(o=y(o,a)),r((function(r,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=r||v(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?g:m(g,p,e,s,u),x=n?o||(r?e:h||i)?[]:a:y
if(n&&n(y,x,s,u),i)for(l=m(x,d),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(y[d[c]]=f))
if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(y[c]=f)
o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else x=m(x===a?x.splice(h,x.length):x),o?o(null,a,x,u):K.apply(a,x)}))}function x(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,u=h((function(e){return e===t}),a,!0),l=h((function(e){return ee(t,e)>-1}),a,!0),c=[function(e,n,r){var i=!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r))
return t=null,i}];s<i;s++)if(n=C.relative[e[s].type])c=[h(g(c),n)]
else{if((n=C.filter[e[s].type].apply(null,e[s].matches))[I]){for(r=++s;r<i&&!C.relative[e[r].type];r++);return y(s>1&&g(c),s>1&&d(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,s<r&&x(e.slice(s,r)),r<i&&x(e=e.slice(r)),r<i&&d(e))}c.push(n)}return g(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,d=0,h="0",g=r&&[],v=[],y=j,x=r||o&&C.find.TAG("*",l),b=B+=null==y?1:Math.random()||.1,w=x.length
for(l&&(j=a===H||a||l);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0,a||c.ownerDocument===H||(q(c),s=!F);p=e[f++];)if(p(c,a||H,s)){u.push(c)
break}l&&(B=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,v,a,s)
if(r){if(d>0)for(;h--;)g[h]||v[h]||(v[h]=Q.call(u))
v=m(v)}K.apply(u,v),l&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(B=b,j=y),g}
return i?r(a):a}var w,T,C,E,k,N,A,S,j,D,L,q,H,O,F,P,R,M,W,I="sizzle"+1*new Date,$=e.document,B=0,_=0,z=n(),X=n(),U=n(),V=function(e,t){return e===t&&(L=!0),0},Y={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,K=G.push,Z=G.slice,ee=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),de={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,xe=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),be=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},we=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Te=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},Ce=function(){q()},Ee=h((function(e){return!0===e.disabled&&("form"in e||"label"in e)}),{dir:"parentNode",next:"legend"})
try{K.apply(G=Z.call($.childNodes),$.childNodes),G[$.childNodes.length].nodeType}catch(e){K={apply:G.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}for(w in T=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},q=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:$
return r!==H&&9===r.nodeType&&r.documentElement?(O=(H=r).documentElement,F=!k(H),$!==H&&(n=H.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),T.attributes=i((function(e){return e.className="i",!e.getAttribute("className")})),T.getElementsByTagName=i((function(e){return e.appendChild(H.createComment("")),!e.getElementsByTagName("*").length})),T.getElementsByClassName=ve.test(H.getElementsByClassName),T.getById=i((function(e){return O.appendChild(e).id=I,!H.getElementsByName||!H.getElementsByName(I).length})),T.getById?(C.filter.ID=function(e){var t=e.replace(xe,be)
return function(e){return e.getAttribute("id")===t}},C.find.ID=function(e,t){if(void 0!==t.getElementById&&F){var n=t.getElementById(e)
return n?[n]:[]}}):(C.filter.ID=function(e){var t=e.replace(xe,be)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}},C.find.ID=function(e,t){if(void 0!==t.getElementById&&F){var n,r,i,o=t.getElementById(e)
if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o]
for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),C.find.TAG=T.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):T.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n)
return r}return o},C.find.CLASS=T.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&F)return t.getElementsByClassName(e)},R=[],P=[],(T.qsa=ve.test(H.querySelectorAll))&&(i((function(e){O.appendChild(e).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+I+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+I+"+*").length||P.push(".#.+[+~]")})),i((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
var t=H.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&P.push(":enabled",":disabled"),O.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")}))),(T.matchesSelector=ve.test(M=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&i((function(e){T.disconnectedMatch=M.call(e,"*"),M.call(e,"[s!='']:x"),R.push("!=",oe)})),P=P.length&&new RegExp(P.join("|")),R=R.length&&new RegExp(R.join("|")),t=ve.test(O.compareDocumentPosition),W=t||ve.test(O.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},V=t?function(e,t){if(e===t)return L=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!T.sortDetached&&t.compareDocumentPosition(e)===n?e===H||e.ownerDocument===$&&W($,e)?-1:t===H||t.ownerDocument===$&&W($,t)?1:D?ee(D,e)-ee(D,t):0:4&n?-1:1)}:function(e,t){if(e===t)return L=!0,0
var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t]
if(!i||!o)return e===H?-1:t===H?1:i?-1:o?1:D?ee(D,e)-ee(D,t):0
if(i===o)return a(e,t)
for(n=e;n=n.parentNode;)s.unshift(n)
for(n=t;n=n.parentNode;)u.unshift(n)
for(;s[r]===u[r];)r++
return r?a(s[r],u[r]):s[r]===$?-1:u[r]===$?1:0},H):H},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==H&&q(e),n=n.replace(ce,"='$1']"),T.matchesSelector&&F&&!U[n+" "]&&(!R||!R.test(n))&&(!P||!P.test(n)))try{var r=M.call(e,n)
if(r||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,H,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==H&&q(e),W(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==H&&q(e)
var n=C.attrHandle[t.toLowerCase()],r=n&&Y.call(C.attrHandle,t.toLowerCase())?n(e,t,!F):void 0
return void 0!==r?r:T.attributes||!F?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(we,Te)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0
if(L=!T.detectDuplicates,D=!T.sortStable&&e.slice(0),e.sort(V),L){for(;t=e[i++];)t===e[i]&&(r=n.push(i))
for(;r--;)e.splice(n[r],1)}return D=null,e},E=t.getText=function(e){var t,n="",r=0,i=e.nodeType
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=E(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=E(t)
return n},(C=t.selectors={cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xe,be),e[3]=(e[3]||e[4]||e[5]||"").replace(xe,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=N(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xe,be).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "]
return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&z(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e)
return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ae," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,m=s&&t.nodeName.toLowerCase(),y=!u&&!s,x=!1
if(v){if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1
h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&y){for(x=(d=(l=(c=(f=(p=v)[I]||(p[I]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===B&&l[1])&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(x=d=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){c[e]=[B,d,x]
break}}else if(y&&(x=d=(l=(c=(f=(p=t)[I]||(p[I]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===B&&l[1]),!1===x)for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++x||(y&&((c=(f=p[I]||(p[I]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[B,x]),p!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,n){var i,o=C.pseudos[e]||C.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e)
return o[I]?o(n):o.length>1?(i=[e,e,"",n],C.setFilters.hasOwnProperty(e.toLowerCase())?r((function(e,t){for(var r,i=o(e,n),a=i.length;a--;)e[r=ee(e,i[a])]=!(t[r]=i[a])})):function(e){return o(e,0,i)}):o}},pseudos:{not:r((function(e){var t=[],n=[],i=A(e.replace(se,"$1"))
return i[I]?r((function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))})):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}})),has:r((function(e){return function(n){return t(e,n).length>0}})),contains:r((function(e){return e=e.replace(xe,be),function(t){return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}})),lang:r((function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xe,be).toLowerCase(),function(t){var n
do{if(n=F?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===O},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:l(!1),disabled:l(!0),checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c((function(){return[0]})),last:c((function(e,t){return[t-1]})),eq:c((function(e,t,n){return[n<0?n+t:n]})),even:c((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:c((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:c((function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r)
return e})),gt:c((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}}).pseudos.nth=C.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=s(w)
for(w in{submit:!0,reset:!0})C.pseudos[w]=u(w)
return p.prototype=C.filters=C.pseudos,C.setFilters=new p,N=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=X[e+" "]
if(c)return n?0:c.slice(0)
for(s=e,u=[],l=C.preFilter;s;){for(a in r&&!(i=ue.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=le.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")}),s=s.slice(r.length)),C.filter)!(i=de[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length))
if(!r)break}return n?s.length:s?t.error(e):X(e,u).slice(0)},A=t.compile=function(e,t){var n,r=[],i=[],o=U[e+" "]
if(!o){for(t||(t=N(e)),n=t.length;n--;)(o=x(t[n]))[I]?r.push(o):i.push(o);(o=U(e,b(i,r))).selector=e}return o},S=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&N(e=l.selector||e)
if(n=n||[],1===c.length){if((o=c[0]=c[0].slice(0)).length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&F&&C.relative[o[1].type]){if(!(t=(C.find.ID(a.matches[0].replace(xe,be),t)||[])[0]))return n
l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=de.needsContext.test(e)?0:o.length;i--&&(a=o[i],!C.relative[s=a.type]);)if((u=C.find[s])&&(r=u(a.matches[0].replace(xe,be),ye.test(o[0].type)&&f(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&d(o)))return K.apply(n,r),n
break}}return(l||A(e,c))(r,t,!F,n,!t||ye.test(e)&&f(t.parentNode)||t),n},T.sortStable=I.split("").sort(V).join("")===I,T.detectDuplicates=!!L,q(),T.sortDetached=i((function(e){return 1&e.compareDocumentPosition(H.createElement("fieldset"))})),i((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||o("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),T.attributes&&i((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||o("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),i((function(e){return null==e.getAttribute("disabled")}))||o(te,(function(e,t,n){var r
if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),t}(e)
se.find=pe,se.expr=pe.selectors,se.expr[":"]=se.expr.pseudos,se.uniqueSort=se.unique=pe.uniqueSort,se.text=pe.getText,se.isXMLDoc=pe.isXML,se.contains=pe.contains,se.escapeSelector=pe.escape
var de=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&se(e).is(n))break
r.push(e)}return r},he=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},ge=se.expr.match.needsContext,ve=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,me=/^.[^:#\[\.,]*$/
se.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?se.find.matchesSelector(r,e)?[r]:[]:se.find.matches(e,se.grep(t,(function(e){return 1===e.nodeType})))},se.fn.extend({find:function(e){var t,n,r=this.length,i=this
if("string"!=typeof e)return this.pushStack(se(e).filter((function(){for(t=0;t<r;t++)if(se.contains(i[t],this))return!0})))
for(n=this.pushStack([]),t=0;t<r;t++)se.find(e,i[t],n)
return r>1?se.uniqueSort(n):n},filter:function(e){return this.pushStack(o(this,e||[],!1))},not:function(e){return this.pushStack(o(this,e||[],!0))},is:function(e){return!!o(this,"string"==typeof e&&ge.test(e)?se(e):e||[],!1).length}})
var ye,xe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(se.fn.init=function(e,t,n){var r,i
if(!e)return this
if(n=n||ye,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:xe.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(r[1]){if(t=t instanceof se?t[0]:t,se.merge(this,se.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:G,!0)),ve.test(r[1])&&se.isPlainObject(t))for(r in t)se.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r])
return this}return(i=G.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):se.isFunction(e)?void 0!==n.ready?n.ready(e):e(se):se.makeArray(e,this)}).prototype=se.fn,ye=se(G)
var be=/^(?:parents|prev(?:Until|All))/,we={children:!0,contents:!0,next:!0,prev:!0}
se.fn.extend({has:function(e){var t=se(e,this),n=t.length
return this.filter((function(){for(var e=0;e<n;e++)if(se.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&se(e)
if(!ge.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&se.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?se.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?ee.call(se(e),this[0]):ee.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(se.uniqueSort(se.merge(this.get(),se(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),se.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return de(e,"parentNode")},parentsUntil:function(e,t,n){return de(e,"parentNode",n)},next:function(e){return a(e,"nextSibling")},prev:function(e){return a(e,"previousSibling")},nextAll:function(e){return de(e,"nextSibling")},prevAll:function(e){return de(e,"previousSibling")},nextUntil:function(e,t,n){return de(e,"nextSibling",n)},prevUntil:function(e,t,n){return de(e,"previousSibling",n)},siblings:function(e){return he((e.parentNode||{}).firstChild,e)},children:function(e){return he(e.firstChild)},contents:function(e){return i(e,"iframe")?e.contentDocument:(i(e,"template")&&(e=e.content||e),se.merge([],e.childNodes))}},(function(e,t){se.fn[e]=function(n,r){var i=se.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=se.filter(r,i)),this.length>1&&(we[e]||se.uniqueSort(i),be.test(e)&&i.reverse()),this.pushStack(i)}}))
var Te=/[^\x20\t\r\n\f]+/g
se.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return se.each(e.match(Te)||[],(function(e,n){t[n]=!0})),t}(e):se.extend({},e)
var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)
e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){se.each(n,(function(n,r){se.isFunction(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==se.type(r)&&t(r)}))}(arguments),n&&!t&&u()),this},remove:function(){return se.each(arguments,(function(e,t){for(var n;(n=se.inArray(t,o,n))>-1;)o.splice(n,1),n<=s&&s--})),this},has:function(e){return e?se.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}}
return l},se.extend({Deferred:function(t){var n=[["notify","progress",se.Callbacks("memory"),se.Callbacks("memory"),2],["resolve","done",se.Callbacks("once memory"),se.Callbacks("once memory"),0,"resolved"],["reject","fail",se.Callbacks("once memory"),se.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments
return se.Deferred((function(t){se.each(n,(function(n,r){var i=se.isFunction(e[r[4]])&&e[r[4]]
o[r[1]]((function(){var e=i&&i.apply(this,arguments)
e&&se.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(t,r,i){function o(t,n,r,i){return function(){var l=this,c=arguments,f=function(){var e,f
if(!(t<a)){if((e=r.apply(l,c))===n.promise())throw new TypeError("Thenable self-resolution")
f=e&&("object"==typeof e||"function"==typeof e)&&e.then,se.isFunction(f)?i?f.call(e,o(a,n,s,i),o(a,n,u,i)):(a++,f.call(e,o(a,n,s,i),o(a,n,u,i),o(a,n,s,n.notifyWith))):(r!==s&&(l=void 0,c=[e]),(i||n.resolveWith)(l,c))}},p=i?f:function(){try{f()}catch(e){se.Deferred.exceptionHook&&se.Deferred.exceptionHook(e,p.stackTrace),t+1>=a&&(r!==u&&(l=void 0,c=[e]),n.rejectWith(l,c))}}
t?p():(se.Deferred.getStackHook&&(p.stackTrace=se.Deferred.getStackHook()),e.setTimeout(p))}}var a=0
return se.Deferred((function(e){n[0][3].add(o(0,e,se.isFunction(i)?i:s,e.notifyWith)),n[1][3].add(o(0,e,se.isFunction(t)?t:s)),n[2][3].add(o(0,e,se.isFunction(r)?r:u))})).promise()},promise:function(e){return null!=e?se.extend(e,i):i}},o={}
return se.each(n,(function(e,t){var a=t[2],s=t[5]
i[t[1]]=a.add,s&&a.add((function(){r=s}),n[3-e][2].disable,n[0][2].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith})),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=J.call(arguments),o=se.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?J.call(arguments):n,--t||o.resolveWith(r,i)}}
if(t<=1&&(l(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||se.isFunction(i[n]&&i[n].then)))return o.then()
for(;n--;)l(i[n],a(n),o.reject)
return o.promise()}})
var Ce=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
se.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Ce.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},se.readyException=function(t){e.setTimeout((function(){throw t}))}
var Ee=se.Deferred()
se.fn.ready=function(e){return Ee.then(e).catch((function(e){se.readyException(e)})),this},se.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--se.readyWait:se.isReady)||(se.isReady=!0,!0!==e&&--se.readyWait>0||Ee.resolveWith(G,[se]))}}),se.ready.then=Ee.then,"complete"===G.readyState||"loading"!==G.readyState&&!G.documentElement.doScroll?e.setTimeout(se.ready):(G.addEventListener("DOMContentLoaded",c),e.addEventListener("load",c))
var ke=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n
if("object"===se.type(n))for(s in i=!0,n)ke(e,t,s,n[s],!0,o,a)
else if(void 0!==r&&(i=!0,se.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(se(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)))
return i?e:l?t.call(e):u?t(e[0],n):o},Ne=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
f.uid=1,f.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},Ne(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e)
if("string"==typeof t)i[se.camelCase(t)]=n
else for(r in t)i[se.camelCase(r)]=t[r]
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][se.camelCase(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
if(void 0!==r){if(void 0!==t){Array.isArray(t)?t=t.map(se.camelCase):t=(t=se.camelCase(t))in r?[t]:t.match(Te)||[],n=t.length
for(;n--;)delete r[t[n]]}(void 0===t||se.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!se.isEmptyObject(t)}}
var Ae=new f,Se=new f,je=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,De=/[A-Z]/g
se.extend({hasData:function(e){return Se.hasData(e)||Ae.hasData(e)},data:function(e,t,n){return Se.access(e,t,n)},removeData:function(e,t){Se.remove(e,t)},_data:function(e,t,n){return Ae.access(e,t,n)},_removeData:function(e,t){Ae.remove(e,t)}}),se.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes
if(void 0===e){if(this.length&&(i=Se.get(o),1===o.nodeType&&!Ae.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(0===(r=a[n].name).indexOf("data-")&&(r=se.camelCase(r.slice(5)),p(o,r,i[r])))
Ae.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){Se.set(this,e)})):ke(this,(function(t){var n
if(o&&void 0===t){if(void 0!==(n=Se.get(o,e)))return n
if(void 0!==(n=p(o,e)))return n}else this.each((function(){Se.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){Se.remove(this,e)}))}}),se.extend({queue:function(e,t,n){var r
if(e)return t=(t||"fx")+"queue",r=Ae.get(e,t),n&&(!r||Array.isArray(n)?r=Ae.access(e,t,se.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
var n=se.queue(e,t),r=n.length,i=n.shift(),o=se._queueHooks(e,t)
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,(function(){se.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return Ae.get(e,n)||Ae.access(e,n,{empty:se.Callbacks("once memory").add((function(){Ae.remove(e,[t+"queue",n])}))})}}),se.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?se.queue(this[0],e):void 0===t?this:this.each((function(){var n=se.queue(this,e,t)
se._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&se.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){se.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=se.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Ae.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s))
return s(),i.promise(t)}})
var Le=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,qe=new RegExp("^(?:([+-])=|)("+Le+")([a-z%]*)$","i"),He=["Top","Right","Bottom","Left"],Oe=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&se.contains(e.ownerDocument,e)&&"none"===se.css(e,"display")},Fe=function(e,t,n,r){var i,o,a={}
for(o in t)a[o]=e.style[o],e.style[o]=t[o]
for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o]
return i},Pe={}
se.fn.extend({show:function(){return g(this,!0)},hide:function(){return g(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){Oe(this)?se(this).show():se(this).hide()}))}})
var Re=/^(?:checkbox|radio)$/i,Me=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,We=/^$|\/(?:java|ecma)script/i,Ie={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
Ie.optgroup=Ie.option,Ie.tbody=Ie.tfoot=Ie.colgroup=Ie.caption=Ie.thead,Ie.th=Ie.td
var $e=/<|&#?\w+;/
!function(){var e=G.createDocumentFragment().appendChild(G.createElement("div")),t=G.createElement("input")
t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),ae.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",ae.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}()
var Be=G.documentElement,_e=/^key/,ze=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Xe=/^([^.]*)(?:\.(.+)|)/
se.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Ae.get(e)
if(v)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&se.find.matchesSelector(Be,i),n.guid||(n.guid=se.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(t){return void 0!==se&&se.event.triggered!==t.type?se.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(Te)||[""]).length;l--;)d=g=(s=Xe.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=se.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=se.event.special[d]||{},c=se.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&se.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),se.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Ae.hasData(e)&&Ae.get(e)
if(v&&(u=v.events)){for(l=(t=(t||"").match(Te)||[""]).length;l--;)if(d=g=(s=Xe.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=se.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c))
a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||se.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)se.event.remove(e,d+t[l],n,r,!0)
se.isEmptyObject(u)&&Ae.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=se.event.fix(e),u=new Array(arguments.length),l=(Ae.get(this,"events")||{})[s.type]||[],c=se.event.special[s.type]||{}
for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t]
if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(a=se.event.handlers.call(this,s,l),t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((se.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target
if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?se(i,this).index(l)>-1:se.find(i,this,null,[l]).length),a[i]&&o.push(r)
o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(se.Event.prototype,e,{enumerable:!0,configurable:!0,get:se.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[se.expando]?e:new se.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==w()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===w()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(Re.test(this.type)&&this.click&&i(this,"input"))return this.click(),!1},_default:function(e){return i(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},se.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},se.Event=function(e,t){return this instanceof se.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?x:b,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&se.extend(this,t),this.timeStamp=e&&e.timeStamp||se.now(),void(this[se.expando]=!0)):new se.Event(e,t)},se.Event.prototype={constructor:se.Event,isDefaultPrevented:b,isPropagationStopped:b,isImmediatePropagationStopped:b,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=x,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=x,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=x,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},se.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button
return null==e.which&&_e.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&ze.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},se.event.addProp),se.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){se.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj
return i&&(i===r||se.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}})),se.fn.extend({on:function(e,t,n,r){return T(this,e,t,n,r)},one:function(e,t,n,r){return T(this,e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,se(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=b),this.each((function(){se.event.remove(this,e,n,t)}))}})
var Ue=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ve=/<script|<style|<link/i,Ye=/checked\s*(?:[^=]|=\s*.checked.)/i,Ge=/^true\/(.*)/,Qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
se.extend({htmlPrefilter:function(e){return e.replace(Ue,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=se.contains(e.ownerDocument,e)
if(!(ae.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||se.isXMLDoc(e)))for(a=v(s),r=0,i=(o=v(e)).length;r<i;r++)A(o[r],a[r])
if(t)if(n)for(o=o||v(e),a=a||v(s),r=0,i=o.length;r<i;r++)N(o[r],a[r])
else N(e,s)
return(a=v(s,"script")).length>0&&m(a,!u&&v(e,"script")),s},cleanData:function(e){for(var t,n,r,i=se.event.special,o=0;void 0!==(n=e[o]);o++)if(Ne(n)){if(t=n[Ae.expando]){if(t.events)for(r in t.events)i[r]?se.event.remove(n,r):se.removeEvent(n,r,t.handle)
n[Ae.expando]=void 0}n[Se.expando]&&(n[Se.expando]=void 0)}}}),se.fn.extend({detach:function(e){return j(this,e,!0)},remove:function(e){return j(this,e)},text:function(e){return ke(this,(function(e){return void 0===e?se.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return S(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||C(this,e).appendChild(e)}))},prepend:function(){return S(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=C(this,e)
t.insertBefore(e,t.firstChild)}}))},before:function(){return S(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return S(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(se.cleanData(v(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return se.clone(this,e,t)}))},html:function(e){return ke(this,(function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Ve.test(e)&&!Ie[(Me.exec(e)||["",""])[1].toLowerCase()]){e=se.htmlPrefilter(e)
try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(se.cleanData(v(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[]
return S(this,arguments,(function(t){var n=this.parentNode
se.inArray(this,e)<0&&(se.cleanData(v(this)),n&&n.replaceChild(t,this))}),e)}}),se.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){se.fn[e]=function(e){for(var n,r=[],i=se(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),se(i[a])[t](n),Z.apply(r,n.get())
return this.pushStack(r)}}))
var Je=/^margin/,Ke=new RegExp("^("+Le+")(?!px)[a-z%]+$","i"),Ze=function(t){var n=t.ownerDocument.defaultView
return n&&n.opener||(n=e),n.getComputedStyle(t)}
!function(){function t(){if(s){s.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",s.innerHTML="",Be.appendChild(a)
var t=e.getComputedStyle(s)
n="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,s.style.marginRight="50%",i="4px"===t.marginRight,Be.removeChild(a),s=null}}var n,r,i,o,a=G.createElement("div"),s=G.createElement("div")
s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",ae.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",a.appendChild(s),se.extend(ae,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return t(),r},pixelMarginRight:function(){return t(),i},reliableMarginLeft:function(){return t(),o}}))}()
var et=/^(none|table(?!-c[ea]).+)/,tt=/^--/,nt={position:"absolute",visibility:"hidden",display:"block"},rt={letterSpacing:"0",fontWeight:"400"},it=["Webkit","Moz","ms"],ot=G.createElement("div").style
se.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=D(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=se.camelCase(t),u=tt.test(t),l=e.style
return u||(t=q(s)),a=se.cssHooks[t]||se.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t]:("string"===(o=typeof n)&&(i=qe.exec(n))&&i[1]&&(n=d(e,t,i),o="number"),void(null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(se.cssNumber[s]?"":"px")),ae.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))))}},css:function(e,t,n,r){var i,o,a,s=se.camelCase(t)
return tt.test(t)||(t=q(s)),(a=se.cssHooks[t]||se.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=D(e,t,r)),"normal"===i&&t in rt&&(i=rt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),se.each(["height","width"],(function(e,t){se.cssHooks[t]={get:function(e,n,r){if(n)return!et.test(se.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?F(e,t,r):Fe(e,nt,(function(){return F(e,t,r)}))},set:function(e,n,r){var i,o=r&&Ze(e),a=r&&O(e,t,r,"border-box"===se.css(e,"boxSizing",!1,o),o)
return a&&(i=qe.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=se.css(e,t)),H(0,n,a)}}})),se.cssHooks.marginLeft=L(ae.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(D(e,"marginLeft"))||e.getBoundingClientRect().left-Fe(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),se.each({margin:"",padding:"",border:"Width"},(function(e,t){se.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+He[r]+t]=o[r]||o[r-2]||o[0]
return i}},Je.test(e)||(se.cssHooks[e+t].set=H)})),se.fn.extend({css:function(e,t){return ke(this,(function(e,t,n){var r,i,o={},a=0
if(Array.isArray(t)){for(r=Ze(e),i=t.length;a<i;a++)o[t[a]]=se.css(e,t[a],!1,r)
return o}return void 0!==n?se.style(e,t,n):se.css(e,t)}),e,t,arguments.length>1)}}),se.Tween=P,P.prototype={constructor:P,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||se.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(se.cssNumber[n]?"":"px")},cur:function(){var e=P.propHooks[this.prop]
return e&&e.get?e.get(this):P.propHooks._default.get(this)},run:function(e){var t,n=P.propHooks[this.prop]
return this.options.duration?this.pos=t=se.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):P.propHooks._default.set(this),this}},P.prototype.init.prototype=P.prototype,P.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=se.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){se.fx.step[e.prop]?se.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[se.cssProps[e.prop]]&&!se.cssHooks[e.prop]?e.elem[e.prop]=e.now:se.style(e.elem,e.prop,e.now+e.unit)}}},P.propHooks.scrollTop=P.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},se.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},se.fx=P.prototype.init,se.fx.step={}
var at,st,ut=/^(?:toggle|show|hide)$/,lt=/queueHooks$/
se.Animation=se.extend($,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return d(n.elem,e,qe.exec(t),n),n}]},tweener:function(e,t){se.isFunction(e)?(t=e,e=["*"]):e=e.match(Te)
for(var n,r=0,i=e.length;r<i;r++)n=e[r],$.tweeners[n]=$.tweeners[n]||[],$.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,v=e.nodeType&&Oe(e),m=Ae.get(e,"fxshow")
for(r in n.queue||(null==(a=se._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always((function(){p.always((function(){a.unqueued--,se.queue(e,"fx").length||a.empty.fire()}))}))),t)if(i=t[r],ut.test(i)){if(delete t[r],o=o||"toggle"===i,i===(v?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue
v=!0}d[r]=m&&m[r]||se.style(e,r)}if((u=!se.isEmptyObject(t))||!se.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=m&&m.display)&&(l=Ae.get(e,"display")),"none"===(c=se.css(e,"display"))&&(l?c=l:(g([e],!0),l=e.style.display||l,c=se.css(e,"display"),g([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===se.css(e,"float")&&(u||(p.done((function(){h.display=l})),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always((function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}))),u=!1,d)u||(m?"hidden"in m&&(v=m.hidden):m=Ae.access(e,"fxshow",{display:l}),o&&(m.hidden=!v),v&&g([e],!0),p.done((function(){for(r in v||g([e]),Ae.remove(e,"fxshow"),d)se.style(e,r,d[r])}))),u=I(v?m[r]:0,r,p),r in m||(m[r]=u.start,v&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?$.prefilters.unshift(e):$.prefilters.push(e)}}),se.speed=function(e,t,n){var r=e&&"object"==typeof e?se.extend({},e):{complete:n||!n&&t||se.isFunction(e)&&e,duration:e,easing:n&&t||t&&!se.isFunction(t)&&t}
return se.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in se.fx.speeds?r.duration=se.fx.speeds[r.duration]:r.duration=se.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){se.isFunction(r.old)&&r.old.call(this),r.queue&&se.dequeue(this,r.queue)},r},se.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Oe).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=se.isEmptyObject(e),o=se.speed(t,n,r),a=function(){var t=$(this,se.extend({},e),o);(i||Ae.get(this,"finish"))&&t.stop(!0)}
return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=se.timers,a=Ae.get(this)
if(i)a[i]&&a[i].stop&&r(a[i])
else for(i in a)a[i]&&a[i].stop&&lt.test(i)&&r(a[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1))
!t&&n||se.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=Ae.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=se.timers,a=r?r.length:0
for(n.finish=!0,se.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish}))}}),se.each(["toggle","show","hide"],(function(e,t){var n=se.fn[t]
se.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(W(t,!0),e,r,i)}})),se.each({slideDown:W("show"),slideUp:W("hide"),slideToggle:W("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){se.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),se.timers=[],se.fx.tick=function(){var e,t=0,n=se.timers
for(at=se.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||se.fx.stop(),at=void 0},se.fx.timer=function(e){se.timers.push(e),se.fx.start()},se.fx.interval=13,se.fx.start=function(){st||(st=!0,R())},se.fx.stop=function(){st=null},se.fx.speeds={slow:600,fast:200,_default:400},se.fn.delay=function(t,n){return t=se.fx&&se.fx.speeds[t]||t,n=n||"fx",this.queue(n,(function(n,r){var i=e.setTimeout(n,t)
r.stop=function(){e.clearTimeout(i)}}))},function(){var e=G.createElement("input"),t=G.createElement("select").appendChild(G.createElement("option"))
e.type="checkbox",ae.checkOn=""!==e.value,ae.optSelected=t.selected,(e=G.createElement("input")).value="t",e.type="radio",ae.radioValue="t"===e.value}()
var ct,ft=se.expr.attrHandle
se.fn.extend({attr:function(e,t){return ke(this,se.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){se.removeAttr(this,e)}))}}),se.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?se.prop(e,t,n):(1===o&&se.isXMLDoc(e)||(i=se.attrHooks[t.toLowerCase()]||(se.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void se.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=se.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!ae.radioValue&&"radio"===t&&i(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(Te)
if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?se.removeAttr(e,n):e.setAttribute(n,n),n}},se.each(se.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=ft[t]||se.find.attr
ft[t]=function(e,t,r){var i,o,a=t.toLowerCase()
return r||(o=ft[a],ft[a]=i,i=null!=n(e,t,r)?a:null,ft[a]=o),i}}))
var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i
se.fn.extend({prop:function(e,t){return ke(this,se.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[se.propFix[e]||e]}))}}),se.extend({prop:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&se.isXMLDoc(e)||(t=se.propFix[t]||t,i=se.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=se.find.attr(e,"tabindex")
return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ae.optSelected||(se.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),se.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){se.propFix[this.toLowerCase()]=this})),se.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0
if(se.isFunction(e))return this.each((function(t){se(this).addClass(e.call(this,t,_(this)))}))
if("string"==typeof e&&e)for(t=e.match(Te)||[];n=this[u++];)if(i=_(n),r=1===n.nodeType&&" "+B(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ")
i!==(s=B(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0
if(se.isFunction(e))return this.each((function(t){se(this).removeClass(e.call(this,t,_(this)))}))
if(!arguments.length)return this.attr("class","")
if("string"==typeof e&&e)for(t=e.match(Te)||[];n=this[u++];)if(i=_(n),r=1===n.nodeType&&" "+B(i)+" "){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ")
i!==(s=B(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):se.isFunction(e)?this.each((function(n){se(this).toggleClass(e.call(this,n,_(this),t),t)})):this.each((function(){var t,r,i,o
if("string"===n)for(r=0,i=se(this),o=e.match(Te)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t)
else void 0!==e&&"boolean"!==n||((t=_(this))&&Ae.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Ae.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+B(_(n))+" ").indexOf(t)>-1)return!0
return!1}})
var ht=/\r/g
se.fn.extend({val:function(e){var t,n,r,i=this[0]
return arguments.length?(r=se.isFunction(e),this.each((function(n){var i
1===this.nodeType&&(null==(i=r?e.call(this,n,se(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=se.map(i,(function(e){return null==e?"":e+""}))),(t=se.valHooks[this.type]||se.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=se.valHooks[i.type]||se.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(ht,""):null==n?"":n:void 0}}),se.extend({valHooks:{option:{get:function(e){var t=se.find.attr(e,"value")
return null!=t?t:B(se.text(e))}},select:{get:function(e){var t,n,r,o=e.options,a=e.selectedIndex,s="select-one"===e.type,u=s?null:[],l=s?a+1:o.length
for(r=a<0?l:s?a:0;r<l;r++)if(((n=o[r]).selected||r===a)&&!n.disabled&&(!n.parentNode.disabled||!i(n.parentNode,"optgroup"))){if(t=se(n).val(),s)return t
u.push(t)}return u},set:function(e,t){for(var n,r,i=e.options,o=se.makeArray(t),a=i.length;a--;)((r=i[a]).selected=se.inArray(se.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),se.each(["radio","checkbox"],(function(){se.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=se.inArray(se(e).val(),t)>-1}},ae.checkOn||(se.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}))
var gt=/^(?:focusinfocus|focusoutblur)$/
se.extend(se.event,{trigger:function(t,n,r,i){var o,a,s,u,l,c,f,p=[r||G],d=re.call(t,"type")?t.type:t,h=re.call(t,"namespace")?t.namespace.split("."):[]
if(a=s=r=r||G,3!==r.nodeType&&8!==r.nodeType&&!gt.test(d+se.event.triggered)&&(d.indexOf(".")>-1&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,(t=t[se.expando]?t:new se.Event(d,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:se.makeArray(n,[t]),f=se.event.special[d]||{},i||!f.trigger||!1!==f.trigger.apply(r,n))){if(!i&&!f.noBubble&&!se.isWindow(r)){for(u=f.delegateType||d,gt.test(u+d)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a
s===(r.ownerDocument||G)&&p.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,(c=(Ae.get(a,"events")||{})[t.type]&&Ae.get(a,"handle"))&&c.apply(a,n),(c=l&&a[l])&&c.apply&&Ne(a)&&(t.result=c.apply(a,n),!1===t.result&&t.preventDefault())
return t.type=d,i||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(p.pop(),n)||!Ne(r)||l&&se.isFunction(r[d])&&!se.isWindow(r)&&((s=r[l])&&(r[l]=null),se.event.triggered=d,r[d](),se.event.triggered=void 0,s&&(r[l]=s)),t.result}},simulate:function(e,t,n){var r=se.extend(new se.Event,n,{type:e,isSimulated:!0})
se.event.trigger(r,null,t)}}),se.fn.extend({trigger:function(e,t){return this.each((function(){se.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0]
if(n)return se.event.trigger(e,t,n,!0)}}),se.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){se.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})),se.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ae.focusin="onfocusin"in e,ae.focusin||se.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){se.event.simulate(t,e.target,se.event.fix(e))}
se.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Ae.access(r,t)
i||r.addEventListener(e,n,!0),Ae.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Ae.access(r,t)-1
i?Ae.access(r,t,i):(r.removeEventListener(e,n,!0),Ae.remove(r,t))}}}))
var vt=e.location,mt=se.now(),yt=/\?/
se.parseXML=function(t){var n
if(!t||"string"!=typeof t)return null
try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||se.error("Invalid XML: "+t),n}
var xt=/\[\]$/,bt=/\r?\n/g,wt=/^(?:submit|button|image|reset|file)$/i,Tt=/^(?:input|select|textarea|keygen)/i
se.param=function(e,t){var n,r=[],i=function(e,t){var n=se.isFunction(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
if(Array.isArray(e)||e.jquery&&!se.isPlainObject(e))se.each(e,(function(){i(this.name,this.value)}))
else for(n in e)z(n,e[n],t,i)
return r.join("&")},se.fn.extend({serialize:function(){return se.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=se.prop(this,"elements")
return e?se.makeArray(e):this})).filter((function(){var e=this.type
return this.name&&!se(this).is(":disabled")&&Tt.test(this.nodeName)&&!wt.test(e)&&(this.checked||!Re.test(e))})).map((function(e,t){var n=se(this).val()
return null==n?null:Array.isArray(n)?se.map(n,(function(e){return{name:t.name,value:e.replace(bt,"\r\n")}})):{name:t.name,value:n.replace(bt,"\r\n")}})).get()}})
var Ct=/%20/g,Et=/#.*$/,kt=/([?&])_=[^&]*/,Nt=/^(.*?):[ \t]*([^\r\n]*)$/gm,At=/^(?:GET|HEAD)$/,St=/^\/\//,jt={},Dt={},Lt="*/".concat("*"),qt=G.createElement("a")
qt.href=vt.href,se.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:vt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(vt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Lt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":se.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?V(V(e,se.ajaxSettings),t):V(se.ajaxSettings,e)},ajaxPrefilter:X(jt),ajaxTransport:X(Dt),ajax:function(t,n){function r(t,n,r,s){var l,p,d,b,w,T=n
c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",C.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i)
break}if(u[0]in n)o=u[0]
else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i
break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(h,C,r)),b=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice()
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u
else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]))
break}if(!0!==a)if(a&&e.throws)t=a(t)
else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(h,b,C,l),l?(h.ifModified&&((w=C.getResponseHeader("Last-Modified"))&&(se.lastModified[o]=w),(w=C.getResponseHeader("etag"))&&(se.etag[o]=w)),204===t||"HEAD"===h.type?T="nocontent":304===t?T="notmodified":(T=b.state,p=b.data,l=!(d=b.error))):(d=T,!t&&T||(T="error",t<0&&(t=0))),C.status=t,C.statusText=(n||T)+"",l?m.resolveWith(g,[p,T,C]):m.rejectWith(g,[C,T,d]),C.statusCode(x),x=void 0,f&&v.trigger(l?"ajaxSuccess":"ajaxError",[C,h,l?p:d]),y.fireWith(g,[C,T]),f&&(v.trigger("ajaxComplete",[C,h]),--se.active||se.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{}
var i,o,a,s,u,l,c,f,p,d,h=se.ajaxSetup({},n),g=h.context||h,v=h.context&&(g.nodeType||g.jquery)?se(g):se.event,m=se.Deferred(),y=se.Callbacks("once memory"),x=h.statusCode||{},b={},w={},T="canceled",C={readyState:0,getResponseHeader:function(e){var t
if(c){if(!s)for(s={};t=Nt.exec(a);)s[t[1].toLowerCase()]=t[2]
t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t
if(e)if(c)C.always(e[C.status])
else for(t in e)x[t]=[x[t],e[t]]
return this},abort:function(e){var t=e||T
return i&&i.abort(t),r(0,t),this}}
if(m.promise(C),h.url=((t||h.url||vt.href)+"").replace(St,vt.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Te)||[""],null==h.crossDomain){l=G.createElement("a")
try{l.href=h.url,l.href=l.href,h.crossDomain=qt.protocol+"//"+qt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=se.param(h.data,h.traditional)),U(jt,h,n,C),c)return C
for(p in(f=se.event&&h.global)&&0==se.active++&&se.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!At.test(h.type),o=h.url.replace(Et,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Ct,"+")):(d=h.url.slice(o.length),h.data&&(o+=(yt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(kt,"$1"),d=(yt.test(o)?"&":"?")+"_="+mt+++d),h.url=o+d),h.ifModified&&(se.lastModified[o]&&C.setRequestHeader("If-Modified-Since",se.lastModified[o]),se.etag[o]&&C.setRequestHeader("If-None-Match",se.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Lt+"; q=0.01":""):h.accepts["*"]),h.headers)C.setRequestHeader(p,h.headers[p])
if(h.beforeSend&&(!1===h.beforeSend.call(g,C,h)||c))return C.abort()
if(T="abort",y.add(h.complete),C.done(h.success),C.fail(h.error),i=U(Dt,h,n,C)){if(C.readyState=1,f&&v.trigger("ajaxSend",[C,h]),c)return C
h.async&&h.timeout>0&&(u=e.setTimeout((function(){C.abort("timeout")}),h.timeout))
try{c=!1,i.send(b,r)}catch(e){if(c)throw e
r(-1,e)}}else r(-1,"No Transport")
return C},getJSON:function(e,t,n){return se.get(e,t,n,"json")},getScript:function(e,t){return se.get(e,void 0,t,"script")}}),se.each(["get","post"],(function(e,t){se[t]=function(e,n,r,i){return se.isFunction(n)&&(i=i||r,r=n,n=void 0),se.ajax(se.extend({url:e,type:t,dataType:i,data:n,success:r},se.isPlainObject(e)&&e))}})),se._evalUrl=function(e){return se.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},se.fn.extend({wrapAll:function(e){var t
return this[0]&&(se.isFunction(e)&&(e=e.call(this[0])),t=se(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e})).append(this)),this},wrapInner:function(e){return se.isFunction(e)?this.each((function(t){se(this).wrapInner(e.call(this,t))})):this.each((function(){var t=se(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=se.isFunction(e)
return this.each((function(n){se(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){se(this).replaceWith(this.childNodes)})),this}}),se.expr.pseudos.hidden=function(e){return!se.expr.pseudos.visible(e)},se.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},se.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}}
var Ht={0:200,1223:204},Ot=se.ajaxSettings.xhr()
ae.cors=!!Ot&&"withCredentials"in Ot,ae.ajax=Ot=!!Ot,se.ajaxTransport((function(t){var n,r
if(ae.cors||Ot&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr()
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a]
for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a])
n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Ht[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout((function(){n&&r()}))},n=n("abort")
try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}})),se.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),se.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return se.globalEval(e),e}}}),se.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),se.ajaxTransport("script",(function(e){var t,n
if(e.crossDomain)return{send:function(r,i){t=se("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),G.head.appendChild(t[0])},abort:function(){n&&n()}}}))
var Ft=[],Pt=/(=)\?(?=&|$)|\?\?/
se.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ft.pop()||se.expando+"_"+mt++
return this[e]=!0,e}}),se.ajaxPrefilter("json jsonp",(function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Pt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Pt.test(t.data)&&"data")
if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=se.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Pt,"$1"+i):!1!==t.jsonp&&(t.url+=(yt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||se.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always((function(){void 0===o?se(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Ft.push(i)),a&&se.isFunction(o)&&o(a[0]),a=o=void 0})),"script"})),ae.createHTMLDocument=function(){var e=G.implementation.createHTMLDocument("").body
return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),se.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(ae.createHTMLDocument?((r=(t=G.implementation.createHTMLDocument("")).createElement("base")).href=G.location.href,t.head.appendChild(r)):t=G),o=!n&&[],(i=ve.exec(e))?[t.createElement(i[1])]:(i=y([e],t,o),o&&o.length&&se(o).remove(),se.merge([],i.childNodes)))
var r,i,o},se.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ")
return s>-1&&(r=B(e.slice(s)),e=e.slice(0,s)),se.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&se.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){o=arguments,a.html(r?se("<div>").append(se.parseHTML(e)).find(r):e)})).always(n&&function(e,t){a.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},se.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){se.fn[t]=function(e){return this.on(t,e)}})),se.expr.pseudos.animated=function(e){return se.grep(se.timers,(function(t){return e===t.elem})).length},se.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=se.css(e,"position"),c=se(e),f={}
"static"===l&&(e.style.position="relative"),s=c.offset(),o=se.css(e,"top"),u=se.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),se.isFunction(t)&&(t=t.call(e,n,se.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},se.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){se.offset.setOffset(this,e,t)}))
var t,n,r,i,o=this[0]
return o?o.getClientRects().length?(r=o.getBoundingClientRect(),n=(t=o.ownerDocument).documentElement,i=t.defaultView,{top:r.top+i.pageYOffset-n.clientTop,left:r.left+i.pageXOffset-n.clientLeft}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0}
return"fixed"===se.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),i(e[0],"html")||(r=e.offset()),r={top:r.top+se.css(e[0],"borderTopWidth",!0),left:r.left+se.css(e[0],"borderLeftWidth",!0)}),{top:t.top-r.top-se.css(n,"marginTop",!0),left:t.left-r.left-se.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===se.css(e,"position");)e=e.offsetParent
return e||Be}))}}),se.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t
se.fn[e]=function(r){return ke(this,(function(e,r,i){var o
return se.isWindow(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)}),e,r,arguments.length)}})),se.each(["top","left"],(function(e,t){se.cssHooks[t]=L(ae.pixelPosition,(function(e,n){if(n)return n=D(e,t),Ke.test(n)?se(e).position()[t]+"px":n}))})),se.each({Height:"height",Width:"width"},(function(e,t){se.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){se.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border")
return ke(this,(function(t,n,i){var o
return se.isWindow(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?se.css(t,n,s):se.style(t,n,i,s)}),t,a?i:void 0,a)}}))})),se.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},holdReady:function(e){e?se.readyWait++:se.ready(!0)}}),se.isArray=Array.isArray,se.parseJSON=JSON.parse,se.nodeName=i,"function"==typeof define&&define.amd&&define("jquery",[],(function(){return se}))
var Rt=e.jQuery,Mt=e.$
return se.noConflict=function(t){return e.$===se&&(e.$=Mt),t&&e.jQuery===se&&(e.jQuery=Rt),se},t||(e.jQuery=e.$=se),se})),function(e,t){"use strict"
"function"==typeof define&&define.amd?define([],(function(){return t.apply(e)})):"object"==typeof exports?module.exports=t.call(e):e.Waves=t.call(e)}("object"==typeof global?global:this,(function(){"use strict"
function e(e){return function(e){return null!==e&&e===e.window}(e)?e:9===e.nodeType&&e.defaultView}function t(e){var t=typeof e
return"function"===t||"object"===t&&!!e}function n(e){var n=l.call(e)
return"[object String]"===n?u(e):t(e)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(n)&&e.hasOwnProperty("length")?e:function(e){return t(e)&&e.nodeType>0}(e)?[e]:[]}function r(t){var n,r,i={top:0,left:0},o=t&&t.ownerDocument
return n=o.documentElement,void 0!==t.getBoundingClientRect&&(i=t.getBoundingClientRect()),r=e(o),{top:i.top+r.pageYOffset-n.clientTop,left:i.left+r.pageXOffset-n.clientLeft}}function i(e){var t=""
for(var n in e)e.hasOwnProperty(n)&&(t+=n+":"+e[n]+";")
return t}function o(e,t,n){if(n){n.classList.remove("waves-rippling")
var r=n.getAttribute("data-x"),o=n.getAttribute("data-y"),a=n.getAttribute("data-scale"),s=n.getAttribute("data-translate"),u=350-(Date.now()-Number(n.getAttribute("data-hold")))
0>u&&(u=0),"mousemove"===e.type&&(u=150)
var l="mousemove"===e.type?2500:f.duration
setTimeout((function(){var e={top:o+"px",left:r+"px",opacity:"0","-webkit-transition-duration":l+"ms","-moz-transition-duration":l+"ms","-o-transition-duration":l+"ms","transition-duration":l+"ms","-webkit-transform":a+" "+s,"-moz-transform":a+" "+s,"-ms-transform":a+" "+s,"-o-transform":a+" "+s,transform:a+" "+s}
n.setAttribute("style",i(e)),setTimeout((function(){try{t.removeChild(n)}catch(e){return!1}}),l)}),u)}}function a(e){var t=function(e){if(!1===d.allowEvent(e))return null
for(var t=null,n=e.target||e.srcElement;null!==n.parentElement;){if(n.classList.contains("waves-effect")&&!(n instanceof SVGElement)){t=n
break}n=n.parentElement}return t}(e)
if(null!==t){if(t.disabled||t.getAttribute("disabled")||t.classList.contains("disabled"))return
if(d.registerEvent(e),"touchstart"===e.type&&f.delay){var n=!1,r=setTimeout((function(){r=null,f.show(e,t)}),f.delay),i=function(i){r&&(clearTimeout(r),r=null,f.show(e,t)),n||(n=!0,f.hide(i,t))}
t.addEventListener("touchmove",(function(e){r&&(clearTimeout(r),r=null),i(e)}),!1),t.addEventListener("touchend",i,!1),t.addEventListener("touchcancel",i,!1)}else f.show(e,t),c&&(t.addEventListener("touchend",f.hide,!1),t.addEventListener("touchcancel",f.hide,!1)),t.addEventListener("mouseup",f.hide,!1),t.addEventListener("mouseleave",f.hide,!1)}}var s=s||{},u=document.querySelectorAll.bind(document),l=Object.prototype.toString,c="ontouchstart"in window,f={duration:750,delay:200,show:function(e,t,n){if(2===e.button)return!1
t=t||this
var o=document.createElement("div")
o.className="waves-ripple waves-rippling",t.appendChild(o)
var a=r(t),s=0,u=0
"touches"in e&&e.touches.length?(s=e.touches[0].pageY-a.top,u=e.touches[0].pageX-a.left):(s=e.pageY-a.top,u=e.pageX-a.left),u=u>=0?u:0,s=s>=0?s:0
var l="scale("+t.clientWidth/100*3+")",c="translate(0,0)"
n&&(c="translate("+n.x+"px, "+n.y+"px)"),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-x",u),o.setAttribute("data-y",s),o.setAttribute("data-scale",l),o.setAttribute("data-translate",c)
var p={top:s+"px",left:u+"px"}
o.classList.add("waves-notransition"),o.setAttribute("style",i(p)),o.classList.remove("waves-notransition"),p["-webkit-transform"]=l+" "+c,p["-moz-transform"]=l+" "+c,p["-ms-transform"]=l+" "+c,p["-o-transform"]=l+" "+c,p.transform=l+" "+c,p.opacity="1"
var d="mousemove"===e.type?2500:f.duration
p["-webkit-transition-duration"]=d+"ms",p["-moz-transition-duration"]=d+"ms",p["-o-transition-duration"]=d+"ms",p["transition-duration"]=d+"ms",o.setAttribute("style",i(p))},hide:function(e,t){for(var n=(t=t||this).getElementsByClassName("waves-rippling"),r=0,i=n.length;i>r;r++)o(e,t,n[r])}},p={input:function(e){var t=e.parentNode
if("i"!==t.tagName.toLowerCase()||!t.classList.contains("waves-effect")){var n=document.createElement("i")
n.className=e.className+" waves-input-wrapper",e.className="waves-button-input",t.replaceChild(n,e),n.appendChild(e)
var r=window.getComputedStyle(e,null),i=r.color,o=r.backgroundColor
n.setAttribute("style","color:"+i+";background:"+o),e.setAttribute("style","background-color:rgba(0,0,0,0);")}},img:function(e){var t=e.parentNode
if("i"!==t.tagName.toLowerCase()||!t.classList.contains("waves-effect")){var n=document.createElement("i")
t.replaceChild(n,e),n.appendChild(e)}}},d={touches:0,allowEvent:function(e){var t=!0
return/^(mousedown|mousemove)$/.test(e.type)&&d.touches&&(t=!1),t},registerEvent:function(e){var t=e.type
"touchstart"===t?d.touches+=1:/^(touchend|touchcancel)$/.test(t)&&setTimeout((function(){d.touches&&(d.touches-=1)}),500)}}
return s.init=function(e){var t=document.body
"duration"in(e=e||{})&&(f.duration=e.duration),"delay"in e&&(f.delay=e.delay),c&&(t.addEventListener("touchstart",a,!1),t.addEventListener("touchcancel",d.registerEvent,!1),t.addEventListener("touchend",d.registerEvent,!1)),t.addEventListener("mousedown",a,!1)},s.attach=function(e,t){e=n(e),"[object Array]"===l.call(t)&&(t=t.join(" ")),t=t?" "+t:""
for(var r,i,o=0,a=e.length;a>o;o++)i=(r=e[o]).tagName.toLowerCase(),-1!==["input","img"].indexOf(i)&&(p[i](r),r=r.parentElement),-1===r.className.indexOf("waves-effect")&&(r.className+=" waves-effect"+t)},s.ripple=function(e,t){var i=(e=n(e)).length
if((t=t||{}).wait=t.wait||0,t.position=t.position||null,i)for(var o,a,s,u={},l=0,c={type:"mousedown",button:1},p=function(e,t){return function(){f.hide(e,t)}};i>l;l++)if(o=e[l],a=t.position||{x:o.clientWidth/2,y:o.clientHeight/2},s=r(o),u.x=s.left+a.x,u.y=s.top+a.y,c.pageX=u.x,c.pageY=u.y,f.show(c,o),t.wait>=0&&null!==t.wait){setTimeout(p({type:"mouseup",button:1},o),t.wait)}},s.calm=function(e){for(var t={type:"mouseup",button:1},r=0,i=(e=n(e)).length;i>r;r++)f.hide(t,e[r])},s.displayEffect=function(e){s.init(e)},s}))
