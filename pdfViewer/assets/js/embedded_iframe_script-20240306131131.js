try{function appendCcfpScript(){var e="";(window.parent&&window.parent.initViewer||window.initViewer)&&(e=(window.parent.initViewer()||window.initViewer()).ccfp_URL||"")
const t=document.createElement("script")
t.src=e,document.body.appendChild(t)}appendCcfpScript()}catch(error){}try{window.$actibook_device?reSetIframeSize():loadDeviceJs()}catch(error){loadDeviceJs()}function reSetIframeSize(){var e=document.getElementById("actibookone_iframe"),t=document.getElementsByName("actibookone_iframe_name")
if(t&&t.length>0)for(var i=0;i<t.length;i++)window.$actibook_device.mobile()?(t[i].style["min-width"]="320px",t[i].style["min-height"]="210px"):(t[i].style["min-width"]="557px",t[i].style["min-height"]="270px")
else e&&(window.$actibook_device.mobile()?(e.style["min-width"]="320px",e.style["min-height"]="210px"):(e.style["min-width"]="557px",e.style["min-height"]="270px"))}function loadDeviceJs(){var e=document.getElementById("actibookone_script")
if(!e){var t=document.getElementById("actibookone_iframe"),i=document.getElementsByName("actibookone_iframe_name")
i&&i.length>0?e=i[0].nextSibling:t&&(e=t.nextSibling)}if(!e||!e.src)return!1
var n=e.src.replace("embedded_iframe_script-20240306131131.js",""),o=document.createElement("script")
o.src=n+"device-20240306131131.js",o.charset="utf-8",document.getElementsByTagName("head")[0].appendChild(o),o.onload=function(){reSetIframeSize()},o.onerror=function(){}}