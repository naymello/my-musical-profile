!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],l=t.base?o[0]+t.base:o[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=c(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:g(f,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function g(e,t){var n,r,i;if(t.singleton){var o=h++;n=p||(p=s(t)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=s(t),r=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=c(n[r]);a[i].references--}for(var o=l(e,t),s=0;s<n.length;s++){var d=c(n[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},,,,,,function(e,t,n){"use strict";n.r(t);n(8);const r=document.querySelector(".hamburger"),[i]=document.getElementsByTagName("nav"),[o]=document.getElementsByTagName("ul"),[a]=document.getElementsByTagName("body");r.addEventListener("click",()=>{r.classList.toggle("active"),i.classList.toggle("active"),o.classList.toggle("active"),a.classList.toggle("no-scroll")})},function(e,t,n){var r=n(0),i=n(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},a=(r(i,o),i.locals?i.locals:{});e.exports=a},function(e,t,n){(t=n(1)(!1)).push([e.i,"html{font-size:62.5%}@media (min-width: 600px){html{font-size:100%}}@media (min-width: 1800px){html{font-size:140%}}body{margin:0;font-family:'Poppins', sans-serif;box-sizing:border-box}body.no-scroll{overflow:hidden}nav{display:flex;position:fixed;width:100%;top:0;background-color:#FFF;height:12.5vh;z-index:2;transition:height .35s}nav.active{height:100vh;flex-direction:column;justify-content:center;align-items:center}nav img{position:absolute;top:20px;left:20px;width:65px;height:50px}nav ul{list-style-type:none;padding-left:0;pointer-events:none;display:none}nav ul.active{display:block}nav ul li{margin:2rem;font-size:2rem;font-weight:700;text-transform:uppercase;background-color:#EEFF00;padding:7.5px 10px;text-align:center}nav ul li a{text-decoration:none;color:#000}nav .hamburger{position:absolute;right:25px;top:25px;height:10px;cursor:pointer}nav .hamburger .line{transition:transform .25s;background-color:#000;width:30px;height:3px;margin-top:5px}nav .hamburger.active .line:first-child{transform:translateY(4px) translateX(0) rotate(45deg)}nav .hamburger.active .line:last-child{transform:translateY(-4px) translateX(0) rotate(-45deg)}.bg-colored-text{background-color:#EEFF00;padding:0 5px}header{margin:2rem;margin-top:.5rem;padding-top:12.5vh;font-size:2.6rem;font-weight:700;line-height:3.5rem}@media (min-width: 1200px){header{width:60%}}section{margin:2rem;margin-bottom:4rem;display:grid;grid-template-columns:2fr 1fr 1fr 1fr 2fr;grid-template-rows:1fr 1fr 10fr 1fr 1fr;height:100%}section img{width:100%}section .example:nth-child(1){grid-column:1/3;grid-row:3/6}section .example:nth-child(2){grid-column:2/5;grid-row:2/5}section .example:nth-child(3){grid-column:4/6;grid-row:1/4;box-shadow:0 0 5px 1px rgba(0,0,0,0.1)}@media (min-width: 600px){section{width:80%;margin:4rem auto}}@media (min-width: 900px){section{grid-template-columns:repeat(3, 1fr);grid-template-rows:1fr;column-gap:20px;margin:4rem 2rem;width:calc(100% - 4rem)}section .example:nth-child(1){grid-column:1/2;grid-row:1}section .example:nth-child(2){grid-column:2/3;grid-row:1}section .example:nth-child(3){grid-column:3/4;grid-row:1}}@media (min-width: 1200px){section{width:50%;margin:2rem 0}}button{cursor:pointer;margin:2rem;border:none;outline:none;background-color:#EEFF00;width:calc(100% - 4rem);font-size:2rem;font-weight:700;text-transform:uppercase;padding:1.5rem 4rem}button:nth-child(2){opacity:50%;display:none}@media (min-width: 1200px){button:nth-child(2){display:block}}@media (min-width: 1200px){button{width:100%;margin:.5rem}}.container{display:flex;flex-direction:column;width:100%}@media (min-width: 1200px){.container{flex-direction:row;align-items:center;justify-content:space-evenly}}\n",""]),e.exports=t}]);