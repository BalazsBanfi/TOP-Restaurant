(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>c});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([n.id,'/*****************\n***Root section***\n******************/\n\n:root {\n  --bodyBg: #ffb100;\n  --contentBg: #f0eccf;\n  --navBg: #a3bb98;\n  --fontColor: #fbc252;\n  --btnColor: #333333;\n  --white: #ffffff;\n  --padS: 0.5rem;\n  --padM: 1rem;\n  --padL: 1.5rem;\n  --padXL: 2rem;\n}\n\n* {\n  border: 1px solid red;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style-type: none;\n  text-decoration: none;\n}\n\nhtml {\n  font-size: 18px;\n  font-family: "Roboto", sans-serif;\n  color: var(--fontColor);\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  text-align: center;\n  background-color: var(--bodyBg);\n  display: grid;\n  place-items: center;\n}\n\n/************\n***Content***\n************/\n\n#content {\n  width: 80%;\n  min-height: 100vh;\n  background-color: var(--contentBg);\n  display: grid;\n  grid-template: 100px 60px 1fr 40px / 1fr;\n  align-items: center;\n  justify-items: center;\n}\n\n/********\n***Nav***\n*********/\n\n.nav {\n  width: 97%;\n  height: 100%;\n  background-color: var(--bodyBg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n}\n\n.nav button {\n  background-color: var(--navBg);\n  color: var(--btnColor);\n  padding: var(--padS);\n  font-weight: 700;\n  font-size: 0.875rem;\n  width: 20%;\n  transition-duration: 0.3s;\n  cursor: pointer;\n}\n\n.nav button:hover {\n  transform: scale(1.05);\n  opacity: 0.8;\n}\n\n.nav button:active {\n  transform: translateY(3px);\n}\n\n\n/*********\n***Main***\n**********/\n\nmain {\n    width: 97%;\n    height: 95%;\n    background-color: var(--bodyBg);\n}',""]);const c=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);t[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{const n=e.p+"48e6d3caf7bdd6e3b809.png";function t(t){main.innerHTML="";const e=new Image;e.src=n,main.appendChild(e)}var r=e(379),o=e.n(r),a=e(795),i=e.n(a),c=e(569),s=e.n(c),d=e(565),l=e.n(d),u=e(216),p=e.n(u),f=e(589),m=e.n(f),v=e(426),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),o()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const b=document.getElementById("content");(n=>{const t=document.createElement("header");t.setAttribute("class","header");const e=document.createElement("h1");e.textContent="Evy's glutenfree pizzas",t.appendChild(e),n.appendChild(t)})(b),(n=>{const t=document.createElement("nav");t.setAttribute("class","nav");const e=document.createElement("button");e.setAttribute("id","btn1"),e.innerHTML="Menu",t.appendChild(e);const r=document.createElement("button");r.setAttribute("id","btn2"),r.innerHTML="Contact",t.appendChild(r);const o=document.createElement("button");o.setAttribute("id","btn3"),o.innerHTML="Localization",t.appendChild(o);const a=document.createElement("main");a.setAttribute("id","main"),n.appendChild(t),n.appendChild(a)})(b),t(),(n=>{const t=document.createElement("footer");t.setAttribute("class","footer");const e=document.createElement("p");e.textContent="Copyright © BalazsBanfi",t.appendChild(e),n.appendChild(t)})(b),btn1.addEventListener("click",(()=>t())),btn2.addEventListener("click",(()=>{main.innerHTML="Contact"})),btn3.addEventListener("click",(()=>{main.innerHTML="Localization"}))})()})();