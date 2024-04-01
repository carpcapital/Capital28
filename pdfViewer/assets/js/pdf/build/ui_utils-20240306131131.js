const CSS_UNITS=96/72,DEFAULT_SCALE_VALUE="auto",DEFAULT_SCALE=1,MIN_SCALE=.25,MAX_SCALE=10,UNKNOWN_SCALE=0,MAX_AUTO_SCALE=1.25,SCROLLBAR_PADDING=40,VERTICAL_PADDING=5,CLEANUP_TIMEOUT=3e4,RenderingStates={INITIAL:0,RUNNING:1,PAUSED:2,FINISHED:3,ERROR:4},PresentationModeState={UNKNOWN:0,NORMAL:1,CHANGING:2,FULLSCREEN:3},RendererType={CANVAS:"canvas",SVG:"svg"}
function formatL10nValue(e,n){return n?e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,t){return t in n?n[t]:"{{"+t+"}}"})):e}function getOutputScale(e){var n=(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)
return{sx:n,sy:n,scaled:1!==n}}function scrollIntoView(e,n,t){t=t||!1
var i=e.offsetParent
if(i){for(var o=e.offsetTop+e.clientTop,a=e.offsetLeft+e.clientLeft;i.clientHeight===i.scrollHeight||t&&"hidden"===getComputedStyle(i).overflow;)if(i.dataset._scaleY&&(o/=i.dataset._scaleY,a/=i.dataset._scaleX),o+=i.offsetTop,a+=i.offsetLeft,!(i=i.offsetParent))return
n&&(void 0!==n.top&&(o+=n.top),void 0!==n.left&&(a+=n.left,i.scrollLeft=a)),i.scrollTop=o}else console.error("offsetParent is not set -- cannot scroll")}function watchScroll(e,n){var t=function(t){o||(o=window.requestAnimationFrame((function(){o=null
var t=e.scrollTop,a=i.lastY
t!==a&&(i.down=t>a),i.lastY=t,n(i)})))},i={down:!0,lastY:e.scrollTop,_eventHandler:t},o=null
return e.addEventListener("scroll",t,!0),i}function parseQueryString(e){for(var n=e.split("&"),t=Object.create(null),i=0,o=n.length;i<o;++i){var a=n[i].split("="),r=a[0].toLowerCase(),l=a.length>1?a[1]:null
t[decodeURIComponent(r)]=decodeURIComponent(l)}return t}function binarySearchFirstItem(e,n){var t=0,i=e.length-1
if(0===e.length||!n(e[i]))return e.length
if(n(e[t]))return t
for(;t<i;){var o=t+i>>1
n(e[o])?i=o:t=o+1}return t}function approximateFraction(e){if(Math.floor(e)===e)return[e,1]
var n=1/e
if(n>8)return[1,8]
if(Math.floor(n)===n)return[1,n]
for(var t=e>1?n:e,i=0,o=1,a=1,r=1;;){var l=i+a,d=o+r
if(d>8)break
t<=l/d?(a=l,r=d):(i=l,o=d)}return t-i/o<a/r-t?t===e?[i,o]:[o,i]:t===e?[a,r]:[r,a]}function roundToDivide(e,n){var t=e%n
return 0===t?e:Math.round(e-t+n)}function getVisibleElements(e,n,t){t=t||!1
var i=e.scrollTop,o=i+e.clientHeight,a=e.scrollLeft,r=a+e.clientWidth
for(var l,d,E,u,s,p,c=[],f=0===n.length?0:binarySearchFirstItem(n,(function(e){var n=e.div
return n.offsetTop+n.clientTop+n.clientHeight>i})),v=n.length;f<v&&(E=(d=(l=n[f]).div).offsetTop+d.clientTop,u=d.clientHeight,!(E>o));f++)(p=d.offsetLeft+d.clientLeft)+d.clientWidth<a||p>r||(s=100*(u-(Math.max(0,i-E)+Math.max(0,E+u-o)))/u|0,c.push({id:l.id,x:p,y:E,view:null,percent:s}))
var O=c[0],R=c[c.length-1]
return t&&c.sort((function(e,n){var t=e.percent-n.percent
return Math.abs(t)>.001?-t:e.id-n.id})),{first:O,last:R,views:c}}function noContextMenuHandler(e){e.preventDefault()}function isDataSchema(e){for(var n=0,t=e.length;n<t&&""===e[n].trim();)n++
return"data:"===e.substr(n,5).toLowerCase()}function getPDFFileNameFromURL(e,n){if(n=n||"document.pdf",isDataSchema(e))return console.warn('getPDFFileNameFromURL: ignoring "data:" URL for performance reasons.'),n
const t=/[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i
var i=/^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(e),o=t.exec(i[1])||t.exec(i[2])||t.exec(i[3])
if(o&&-1!==(o=o[0]).indexOf("%"))try{o=t.exec(decodeURIComponent(o))[0]}catch(a){}return o||n}function normalizeWheelEventDelta(e){var n=Math.sqrt(e.deltaX*e.deltaX+e.deltaY*e.deltaY),t=Math.atan2(e.deltaY,e.deltaX);-.25*Math.PI<t&&t<.75*Math.PI&&(n=-n)
return 0===e.deltaMode?n/=900:1===e.deltaMode&&(n/=30),n}function isValidRotation(e){return Number.isInteger(e)&&e%90==0}function cloneObj(e){var n=Object.create(null)
for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])
return n}var TextLayerMode={DISABLE:0,ENABLE:1,ENABLE_ENHANCE:2}
const WaitOnType={EVENT:"event",TIMEOUT:"timeout"}
function waitOnEventOrTimeout(e,n,t){if(t=t||0,"object"!=typeof e||!n||"string"!=typeof n||!(Number.isInteger(t)&&t>=0))return Promise.reject(new Error("waitOnEventOrTimeout - invalid paramaters."))
var i=createPromiseCapability()
function o(t){e instanceof EventBus?e.off(n,a):e.removeEventListener(n,a),l&&clearTimeout(l),i.resolve(t)}var a=o.bind(null,WaitOnType.EVENT)
e instanceof EventBus?e.on(n,a):e.addEventListener(n,a)
var r=o.bind(null,WaitOnType.TIMEOUT),l=setTimeout(r,t)
return i.promise}var mozL10n,animationStarted=new Promise((function(e){window.requestAnimationFrame(e)})),localized=Promise.resolve()
function clamp(e,n,t){return Math.min(Math.max(e,n),t)}var compatibilityParams=Object.create(null),userAgent="undefined"!=typeof navigator&&navigator.userAgent||"",platform="undefined"!=typeof navigator&&navigator.platform||"",maxTouchPoints="undefined"!=typeof navigator&&navigator.maxTouchPoints||1,isAndroid=/Android/.test(userAgent),isIOS=/\b(iPad|iPhone|iPod)(?=;)/.test(userAgent)||"MacIntel"===platform&&maxTouchPoints>1
function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(isIOS||isAndroid)&&(compatibilityParams.maxCanvasPixels=5242880)
var viewerCompatibilityParams=Object.freeze(compatibilityParams),OptionKind={VIEWER:2,API:4,WORKER:8,PREFERENCE:128},defaultOptions={cursorToolOnLoad:{value:0,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},defaultUrl:{value:"compressed.tracemonkey-pldi-09.pdf",kind:OptionKind.VIEWER},defaultZoomValue:{value:"",kind:OptionKind.VIEWER+OptionKind.PREFERENCE},disableHistory:{value:!1,kind:OptionKind.VIEWER},disablePageLabels:{value:!1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},enablePrintAutoRotate:{value:!1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},enableWebGL:{value:!1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},eventBusDispatchToDOM:{value:!1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},externalLinkRel:{value:"noopener noreferrer nofollow",kind:OptionKind.VIEWER},externalLinkTarget:{value:0,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},historyUpdateUrl:{value:!1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},imageResourcesPath:{value:"./images/",kind:OptionKind.VIEWER},maxCanvasPixels:{value:16777216,compatibility:viewerCompatibilityParams.maxCanvasPixels,kind:OptionKind.VIEWER},pdfBugEnabled:{value:!1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},renderer:{value:"canvas",kind:OptionKind.VIEWER+OptionKind.PREFERENCE},renderInteractiveForms:{value:!1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},sidebarViewOnLoad:{value:-1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},scrollModeOnLoad:{value:-1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},spreadModeOnLoad:{value:-1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},textLayerMode:{value:1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},useOnlyCssZoom:{value:!1,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},viewOnLoad:{value:0,kind:OptionKind.VIEWER+OptionKind.PREFERENCE},cMapPacked:{value:!0,kind:OptionKind.API},cMapUrl:{value:"../web/cmaps/",kind:OptionKind.API},disableAutoFetch:{value:!1,kind:OptionKind.API+OptionKind.PREFERENCE},disableCreateObjectURL:{value:!1,compatibility:pdfjsLib.apiCompatibilityParams.disableCreateObjectURL,kind:OptionKind.API},disableFontFace:{value:!1,kind:OptionKind.API+OptionKind.PREFERENCE},disableRange:{value:!1,kind:OptionKind.API+OptionKind.PREFERENCE},disableStream:{value:!1,kind:OptionKind.API+OptionKind.PREFERENCE},docBaseUrl:{value:"",kind:OptionKind.API},isEvalSupported:{value:!0,kind:OptionKind.API},maxImageSize:{value:-1,kind:OptionKind.API},pdfBug:{value:!1,kind:OptionKind.API},verbosity:{value:1,kind:OptionKind.API},workerPort:{value:null,kind:OptionKind.WORKER},workerSrc:{value:"../build/pdf.worker-20240306131131.js",kind:OptionKind.WORKER}},userOptions=Object.create(null),AppOptions=function(){function e(){throw _classCallCheck(this,e),new Error("Cannot initialize AppOptions.")}return _createClass(e,null,[{key:"get",value:function(e){var n=userOptions[e]
if(void 0!==n)return n
var t=defaultOptions[e]
return void 0!==t?t.compatibility||t.value:void 0}},{key:"getAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=Object.create(null)
for(var t in defaultOptions){var i=defaultOptions[t]
if(e){if(0==(e&i.kind))continue
if(e===OptionKind.PREFERENCE){var o=i.value,a=_typeof(o)
if("boolean"===a||"string"===a||"number"===a&&Number.isInteger(o)){n[t]=o
continue}throw new Error("Invalid type for preference: ".concat(t))}}var r=userOptions[t]
n[t]=void 0!==r?r:i.compatibility||i.value}return n}},{key:"set",value:function(e,n){userOptions[e]=n}},{key:"remove",value:function(e){delete userOptions[e]}}]),e}()
