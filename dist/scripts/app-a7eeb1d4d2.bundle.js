!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="multi \\src\\scripts\\app.js")}({g7Pl:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nav=document.querySelector(".js-header"),this.nav&&(window.onscroll=function(){t.setup()},this.setup())}var t,n,a;return t=e,(n=[{key:"setup",value:function(){document.body.scrollTop>80||document.documentElement.scrollTop>80?this.nav.classList.add("is-active"):this.nav.classList.remove("is-active")}}])&&r(t.prototype,n),a&&r(t,a),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parallaxContainer=document.querySelector(".js-parallax"),this.layers=this.parallaxContainer.children,this.setup()}var t,n,r;return t=e,(n=[{key:"setup",value:function(){var e=this;window.addEventListener("scroll",function(){window.requestAnimationFrame(function(){var t=e.parallaxContainer.getBoundingClientRect().top-window.innerHeight,n=e.parallaxContainer.offsetHeight,r=null,a=null,o=null;if(t<0)for(var i=0;i<e.layers.length;i+=1)a=(r=e.layers[i]).getAttribute("data-speed"),o=Math.round(-(t+n)*(100-a)/100),r.setAttribute("style","transform: translateY(".concat(o,"px)"))})})}}])&&o(t.prototype,n),r&&o(t,r),e}();new a,new i},"multi \\src\\scripts\\app.js":function(e,t,n){e.exports=n("g7Pl")}});
//# sourceMappingURL=app-9b633c5eb3.bundle.js.map