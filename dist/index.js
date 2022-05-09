(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),s.push([e.id,'* {\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  font-family: "Roboto", "sans-serif";\n}\n\n.container {\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 1000px;\n}\n\n.title {\n  font-size: 2rem;\n  margin: 10px 0;\n}\n\n.textarea {\n  font-family: "Roboto", "sans-serif";\n  overflow: hidden;\n  width: 700px;\n  height: 200px;\n  padding: 10px;\n}\n\n.description {\n  margin: 10px 0;\n}\n\n.keyboard {\n  background: aliceblue;\n  margin: 10px auto;\n  padding: 15px;\n  border: black 10px solid;\n  border-radius: 40px;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.key {\n  background: orchid;\n  cursor: pointer;\n  border-radius: 3px;\n  margin: 3px 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45px;\n  height: 45px;\n  box-shadow: fuchsia 1px 2px;\n  transition: all 0.1s ease-in;\n}\n\n.backspace, .capslock, .ShiftLeft {\n  width: 100px;\n}\n\n.tab {\n  width: 50px;\n}\n\n.enter, .ShiftRight {\n  width: 97px;\n}\n\n.space {\n  width: 355px;\n}\n\n.hover {\n  background: #ff7cfb;\n}\n\n.active {\n  background: #ff0bb5;\n  border-radius: 40px;\n}\n\n.caps {\n  background: #ff0bb5;\n  border-radius: 40px;\n}\n',""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&s[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var f=n(l),y={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(y);else{var h=o(y,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:h,references:1})}s.push(l)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=r(e,o),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),s=n.n(a),i=n(565),c=n.n(i),d=n(216),u=n.n(d),l=n(589),f=n.n(l),y=n(426),h={};function p(e,t,...n){const r=document.createElement(e);return r.classList.add(...n),r.innerHTML=t,r}h.styleTagTransform=f(),h.setAttributes=c(),h.insert=s().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),t()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;const k=JSON.parse('[[{"key":{"ru":"ё","en":"`"},"shift":{"ru":"Ё","en":"~"},"code":"Backquote"},{"key":{"ru":"1","en":"1"},"shift":{"ru":"!","en":"!"},"code":"Digit1"},{"key":{"ru":"2","en":"2"},"shift":{"ru":"\\"","en":"@"},"code":"Digit2"},{"key":{"ru":"3","en":"3"},"shift":{"ru":"№","en":"#"},"code":"Digit3"},{"key":{"ru":"4","en":"4"},"shift":{"ru":";","en":"$"},"code":"Digit4"},{"key":{"ru":"5","en":"5"},"shift":{"ru":"%","en":"%"},"code":"Digit5"},{"key":{"ru":"6","en":"6"},"shift":{"ru":":","en":"^"},"code":"Digit6"},{"key":{"ru":"7","en":"7"},"shift":{"ru":"?","en":"&"},"code":"Digit7"},{"key":{"ru":"8","en":"8"},"shift":{"ru":"*","en":"*"},"code":"Digit8"},{"key":{"ru":"9","en":"9"},"shift":{"ru":"(","en":"("},"code":"Digit9"},{"key":{"ru":"0","en":"0"},"shift":{"ru":")","en":")"},"code":"Digit0"},{"key":{"ru":"-","en":"-"},"shift":{"ru":"_","en":"_"},"code":"Minus"},{"key":{"ru":"=","en":"="},"shift":{"ru":"+","en":"+"},"code":"Equal"},{"key":"Backspace","code":"Backspace","class":"backspace","noType":"true"}],[{"key":"Tab","code":"Tab","class":"tab","noType":"true"},{"key":{"ru":"й","en":"q"},"shift":{"ru":"Й","en":"Q"},"code":"KeyQ"},{"key":{"ru":"ц","en":"w"},"shift":{"ru":"Ц","en":"W"},"code":"KeyW"},{"key":{"ru":"у","en":"e"},"shift":{"ru":"У","en":"E"},"code":"KeyE"},{"key":{"ru":"к","en":"r"},"shift":{"ru":"К","en":"R"},"code":"KeyR"},{"key":{"ru":"е","en":"t"},"shift":{"ru":"Е","en":"T"},"code":"KeyT"},{"key":{"ru":"н","en":"y"},"shift":{"ru":"Н","en":"Y"},"code":"KeyY"},{"key":{"ru":"г","en":"u"},"shift":{"ru":"Г","en":"U"},"code":"KeyU"},{"key":{"ru":"ш","en":"i"},"shift":{"ru":"Ш","en":"I"},"code":"KeyI"},{"key":{"ru":"щ","en":"o"},"shift":{"ru":"Щ","en":"O"},"code":"KeyO"},{"key":{"ru":"з","en":"p"},"shift":{"ru":"З","en":"P"},"code":"KeyP"},{"key":{"ru":"х","en":"["},"shift":{"ru":"Х","en":"{"},"code":"BracketLeft"},{"key":{"ru":"ъ","en":"]"},"shift":{"ru":"Ъ","en":"}"},"code":"BracketRight"},{"key":{"ru":"\\\\","en":"\\\\"},"shift":{"ru":"|","en":"|"},"code":"Backslash","class":"backslash"},{"key":"Del","code":"Delete","class":"Del","noType":"true"}],[{"key":"CapsLock","code":"CapsLock","class":"capslock","noType":"true"},{"key":{"ru":"ф","en":"a"},"shift":{"ru":"Ф","en":"A"},"code":"KeyA"},{"key":{"ru":"ы","en":"s"},"shift":{"ru":"Ы","en":"S"},"code":"KeyS"},{"key":{"ru":"в","en":"d"},"shift":{"ru":"В","en":"D"},"code":"KeyD"},{"key":{"ru":"а","en":"f"},"shift":{"ru":"А","en":"F"},"code":"KeyF"},{"key":{"ru":"п","en":"g"},"shift":{"ru":"П","en":"G"},"code":"KeyG"},{"key":{"ru":"р","en":"h"},"shift":{"ru":"Р","en":"H"},"code":"KeyH"},{"key":{"ru":"о","en":"j"},"shift":{"ru":"О","en":"J"},"code":"KeyJ"},{"key":{"ru":"л","en":"k"},"shift":{"ru":"Л","en":"K"},"code":"KeyK"},{"key":{"ru":"д","en":"l"},"shift":{"ru":"Д","en":"L"},"code":"KeyL"},{"key":{"ru":"ж","en":";"},"shift":{"ru":"Ж","en":":"},"code":"Semicolon"},{"key":{"ru":"э","en":"\'"},"shift":{"ru":"Э","en":"\\""},"code":"Quote"},{"key":"Enter","code":"Enter","class":"enter","noType":"true"}],[{"key":"Shift","code":"ShiftLeft","class":"ShiftLeft","noType":"true"},{"key":{"ru":"я","en":"z"},"shift":{"ru":"Я","en":"Z"},"code":"KeyZ"},{"key":{"ru":"ч","en":"x"},"shift":{"ru":"Ч","en":"X"},"code":"KeyX"},{"key":{"ru":"с","en":"c"},"shift":{"ru":"С","en":"C"},"code":"KeyC"},{"key":{"ru":"м","en":"v"},"shift":{"ru":"М","en":"V"},"code":"KeyV"},{"key":{"ru":"и","en":"b"},"shift":{"ru":"И","en":"B"},"code":"KeyB"},{"key":{"ru":"т","en":"n"},"shift":{"ru":"Т","en":"N"},"code":"KeyN"},{"key":{"ru":"ь","en":"m"},"shift":{"ru":"Ь","en":"M"},"code":"KeyM"},{"key":{"ru":"б","en":","},"shift":{"ru":"Б","en":"<"},"code":"Comma"},{"key":{"ru":"ю","en":"."},"shift":{"ru":"Ю","en":">"},"code":"Period"},{"key":{"ru":".","en":"/"},"shift":{"ru":",","en":"?"},"code":"Slash"},{"key":"▲","code":"ArrowUp"},{"key":"Shift","code":"ShiftRight","class":"ShiftRight","noType":"true"}],[{"key":"Ctrl","code":"ControlLeft","class":"ControlLeft","noType":"true"},{"key":"Win","code":"MetaLeft","class":"MetaLeft","noType":"true"},{"key":"Alt","code":"AltLeft","class":"AltLeft","noType":"true"},{"key":" ","code":"Space","class":"space"},{"key":"Alt","code":"AltRight","class":"AltRight","noType":"true"},{"key":"◄","code":"ArrowLeft"},{"key":"▼","code":"ArrowDown"},{"key":"►","code":"ArrowRight"},{"key":"Ctrl","code":"ControlRight","class":"ControlRight","noType":"true"}]]'),g=new class{constructor(){this.lang="en",this.caps="off",this.shift=!1}pressKey(e,t,n){let r="";const o=document.querySelector("textarea");if(e.preventDefault(),o.focus(),t.dataset.noType||(r=t.textContent),"CapsLock"===n&&this.changeCapsLock(e),("AltLeft"===n&&e.ctrlKey||"AltRight"===n&&e.ctrlKey||"ControlLeft"===n&&e.altKey||"ControlRight"===n&&e.altKey)&&this.changeLanguage(e),"ShiftLeft"!==n&&"ShiftRight"!==n||this.updateKeyboard(e),"Tab"===n&&(r="\t"),"Backspace"===n&&(r="-1"),"Delete"===n&&(r="+1"),"Enter"===n&&(r="\n"),r){let e=o.selectionStart,t=o.value.substring(0,e),n=o.value.substring(o.selectionEnd);"-1"===r&&(r="",t=t.slice(0,-1),e-=e>0?2:1),"+1"===r&&(r="",n=n.slice(1),e-=1),o.value=t+r+n,o.setSelectionRange(e+1,e+1)}}languageCheck(){localStorage.getItem("language")?this.lang=localStorage.getItem("language"):localStorage.setItem("language",this.lang)}changeLanguage(e){"en"===this.lang?this.lang="ru":this.lang="en",localStorage.setItem("language",this.lang),this.updateKeyboard(e)}changeCapsLock(e){const t=document.querySelector(".capslock");"on"===this.caps?(this.caps="off",t.classList.remove("caps")):(this.caps="on",t.classList.add("caps")),this.updateKeyboard(e)}updateKeyboard(e){const{lang:t}=this;e.shiftKey||this.shift?document.querySelectorAll(".key").forEach((e=>{e.dataset[`${t}Shift`]?"on"===this.caps?e.innerHTML=e.dataset[`${t}Shift`].toLowerCase():e.innerHTML=e.dataset[`${t}Shift`]:e.dataset[t]&&(e.innerHTML=e.dataset[t])})):document.querySelectorAll(".key").forEach((n=>{n.dataset[t]&&("on"!==this.caps||e.shiftKey||this.shift?n.innerHTML=n.dataset[t]:n.innerHTML=n.dataset[t].toUpperCase())}))}createKeyboard(){const e=p("div","","keyboard");this.languageCheck();for(let t=0;t<k.length;t+=1){const n=p("div","","row");k[t].forEach((e=>{const t=p("div",e.key.ru&&e.key.en?e.key[this.lang]:e.key,"key");e.class&&t.classList.add(e.class),t.dataset.code=e.code,e.key.ru&&e.key.en&&(t.dataset.ru=e.key.ru,t.dataset.en=e.key.en),e.shift&&(t.dataset.ruShift=e.shift.ru,t.dataset.enShift=e.shift.en),e.noType&&(t.dataset.noType="true"),n.append(t)})),e.append(n)}return e}removeShiftStyle(e){this.shift&&(this.shift=!this.shift,document.querySelector(".ShiftLeft").classList.remove("active"),document.querySelector(".ShiftRight").classList.remove("active"),this.updateKeyboard(e))}},m=p("div","","container");m.append(p("h1","Виртуальная клавиатура","title")),m.append(p("textarea","","textarea")),m.append(g.createKeyboard()),m.append(p("p","Клавиатура создана в операционной системе Windows","description")),m.append(p("p","Для переключения языка комбинация: ctrl + alt","language")),document.body.append(m),document.addEventListener("keydown",(e=>{const t=document.querySelector(`[data-code=${e.code}]`);t&&(t.classList.add("active"),g.pressKey(e,t,e.code))})),document.addEventListener("keyup",(e=>{const t=document.querySelector(`[data-code=${e.code}]`);t&&(t.classList.remove("active"),"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||(g.removeShiftStyle(e),g.updateKeyboard(e)))})),document.querySelector(".keyboard").addEventListener("mousedown",(e=>{if(e.target.closest(".key")){const t=e.target.closest(".key");"ShiftLeft"!==t.dataset.code&&"ShiftRight"!==t.dataset.code||(g.shift=!g.shift),t.classList.add("active"),g.pressKey(e,t,t.dataset.code)}})),document.querySelector(".keyboard").addEventListener("mouseup",(e=>{if(e.target.closest(".key")){const t=e.target.closest(".key");t.classList.remove("active"),"ShiftLeft"!==t.dataset.code&&"ShiftRight"!==t.dataset.code||(g.shift=!g.shift,g.pressKey(e,t,t.dataset.code))}})),document.querySelector(".keyboard").addEventListener("mouseover",(e=>{e.target.closest(".key")&&e.target.closest(".key").classList.add("hover")})),document.querySelector(".keyboard").addEventListener("mouseout",(e=>{e.target.closest(".key")&&e.target.closest(".key").classList.remove("hover","active")}))})()})();