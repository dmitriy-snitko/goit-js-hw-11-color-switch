parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"ebdG":[function(require,module,exports) {
module.exports=["#cfdb80","#c9d770","#c3d260","#bdce50","#a9bb35","#97a72f","#85932a","#737f24","#616b1e","#4f5819","#99d496","#8bce88","#7dc879","#6fc26b","#4fb54a","#47a343","#3f913b","#387f34","#306d2c","#285b25","#29ffe2","#0affde","#00ebcb","#00ccb1","#009e89","#008f7c","#00806f","#007061","#006154","#005247","#38b3ff","#1aa7ff","#009afa","#0087db","#006bad","#00619e","#00588f","#004f80","#004570","#003c61","#df7cb1","#da67a4","#d55398","#d03e8c","#b52c75","#a4286a","#942460","#832055","#731c4a","#631840","#f48086","#f37279","#f2646b","#f0565e","#ed2c35","#e6141e","#ca121b","#ae0f17","#910d13","#750a10","#f9b380","#f8aa72","#f8a163","#f79855","#f57e29","#f46c0b","#d65f0a","#b95209","#9c4507","#7f3806","#f4f185","#f3ef77","#f2ee69","#efea4d","#ede731","#ebe314","#cec812","#b2ad10","#96920d","#7a760b"];
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var t=n(require("../colors.json"));function n(t){return t&&t.__esModule?t:{default:t}}var e={body:document.querySelector("body"),startBtn:document.querySelector("button[data-action = start]"),stopBtn:document.querySelector("button[data-action = stop]"),resetBtn:document.querySelector("button[data-action = reset]")},o=[e.startBtn,e.stopBtn,e.resetBtn],r=null;window.onload=function(){e.stopBtn.disabled=!0,e.startBtn.addEventListener("click",a),e.stopBtn.addEventListener("click",u),e.resetBtn.addEventListener("click",c)};var a=function(){d(o),s(),r=setInterval(function(){s()},1e3)},u=function(){d(o),clearInterval(r)},c=function(){return e.body.style.backgroundColor="white"},s=function(){var n=i(0,t.default.length-1);e.body.style.backgroundColor=t.default[n]},d=function(t){t.forEach(function(t){return t.toggleAttribute("disabled")})},i=function(t,n){return Math.floor(Math.random()*(n-t+1)+t)};
},{"./sass/main.scss":"clu1","../colors.json":"ebdG"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.4ea51b88.js.map