!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function c(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],l=t.base?i[0]+t.base:i[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var d=c(u),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(o[d].references++,o[d].updater(m)):o.push({identifier:u,updater:b(m,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function m(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,p=0;function b(e,t){var n,r,a;if(t.singleton){var i=p++;n=g||(g=s(t)),r=m.bind(null,n,i,!1),a=m.bind(null,n,i,!0)}else n=s(t),r=f.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=c(n[r]);o[a].references--}for(var i=l(e,t),s=0;s<n.length;s++){var u=c(n[s]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=i}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(o=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}var o,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},,,,function(e,t,n){var r=n(0),a=n(6);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=(r(a,i),a.locals?a.locals:{});e.exports=o},function(e,t,n){(t=n(1)(!1)).push([e.i,'body{margin:0;padding:0;font-family:\'Poppins\', sans-serif;background-color:#222222}.picture{padding:20px;margin:0;background-color:white;width:375px;height:667px;box-sizing:border-box}.bold{font-weight:700}.semi-bold{font-weight:600}span{color:black}header{font-size:20px;margin-bottom:20px}#first-item{display:grid;grid-template-columns:1fr 1.75fr;margin-bottom:20px}#img-0{width:100%}#side-text{display:flex;flex-direction:column;justify-content:flex-start;margin-left:15px}#other-items{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-areas:"title title title"\r "album-1 album-2 album-3"\r "album-4 album-5 album-6"\r "album-7 album-8 album-9";width:335px;margin-bottom:20px}#others{grid-area:title}#img-1{grid-area:album-1;width:100%}#img-2{grid-area:album-2;width:100%}#img-3{grid-area:album-3;width:100%}#img-4{grid-area:album-4;width:100%}#img-5{grid-area:album-5;width:100%}#img-6{grid-area:album-6;width:100%}#img-7{grid-area:album-7;width:100%}#img-8{grid-area:album-8;width:100%}#img-9{grid-area:album-9;width:100%}.bg-colored-text{background-color:#EEFF00;padding:0 2.5px 0 2.5px}#bg-colored-logo{background-color:#EEFF00;padding:0 30px 0 2.5px}#logo{font-size:10px}\n',""]),e.exports=t},,,,function(e,t,n){"use strict";n.r(t);n(5);const r=window.location,a=new URLSearchParams(r.search).get("type"),i=new URLSearchParams(r.search).get("time_range"),o=new URLSearchParams(r.search).get("theme");(async()=>{const e=await fetch(`/topmusic?type=${a}&time_range=${i}`),t=await e.json(),n=await fetch("/name"),r=await n.json();(async(e,t)=>{"tracks"===e?t.forEach(async(e,t)=>{document.getElementById(`img-${t}`).src=await e.album.images[1].url}):("albums"===e||"artists"===e)&&t.forEach(async(e,t)=>{document.getElementById(`img-${t}`).src=await e.images[1].url})})(a,t),(async(e,t,n,r)=>{const a=document.getElementById("name"),i=document.getElementById("type-title"),o=document.getElementById("line-1"),c=document.getElementById("line-2"),l=document.getElementById("line-3"),s=document.getElementById("others");n.length>=9&&(document.getElementsByTagName("header")[0].style.fontSize="18px"),a.innerHTML=`${n}'s `,"short"===t?i.innerHTML=`${e.slice(0,-1)} of the month`:"medium"===t?i.innerHTML=`${e.slice(0,-1)} of the semester`:"long"===t&&(i.innerHTML=`favorite ${e.slice(0,-1)}`);let u=r[0];"tracks"===e?(o.innerHTML=await u.name.substring(0,40).match(/^.*?(?= -)/)||u.name.substring(0,40),c.innerHTML=await u.album.name,l.innerHTML=await u.artists[0].name):"albums"===e?(o.innerHTML=await u.name,c.innerHTML=await u.artists[0].name,l.innerHTML=await u.release_date.match(/^.*?(?=-)/)):"artists"===e&&(o.innerHTML=await u.name,c.innerHTML=await u.genres[0],l.innerHTML=await u.genres[1]),s.innerHTML=`Other ${e}`})(a,i,r,t),(e=>{if("light"!==e){let t,n,r;"dark"===e?(t="#FFFFFF",n="#DC1F1F",r="#000000"):"colored"===e&&(t="#F9FF3E",n="#FF10A0",r="#2929B1"),document.querySelector(".picture").style.backgroundColor=r;const a=document.getElementsByTagName("span"),i=document.getElementsByClassName("bg-colored-text");for(let e of a)e.style.color=t;for(let e of i)e.style.backgroundColor=n;document.getElementById("bg-colored-logo").style.backgroundColor=n}})(o)})()}]);