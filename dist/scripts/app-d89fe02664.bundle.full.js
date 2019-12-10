/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "multi \\src\\scripts\\app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "g7Pl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/scripts/modules/header.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Header =
/*#__PURE__*/
function () {
  function Header() {
    var _this = this;

    _classCallCheck(this, Header);

    this.nav = document.querySelector('.js-header');
    if (!this.nav) return;

    if (!this.nav.classList.contains('is-active')) {
      window.onscroll = function () {
        _this.setup();
      };

      this.setup();
    }
  }

  _createClass(Header, [{
    key: "setup",
    value: function setup() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        this.nav.classList.add('is-active');
      } else {
        this.nav.classList.remove('is-active');
      }
    }
  }]);

  return Header;
}();

/* harmony default export */ var header = (function () {
  return new Header();
});
// CONCATENATED MODULE: ./src/scripts/modules/parallax.js
function parallax__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function parallax__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function parallax__createClass(Constructor, protoProps, staticProps) { if (protoProps) parallax__defineProperties(Constructor.prototype, protoProps); if (staticProps) parallax__defineProperties(Constructor, staticProps); return Constructor; }

var Parallax =
/*#__PURE__*/
function () {
  function Parallax() {
    var _this = this;

    parallax__classCallCheck(this, Parallax);

    this.parallaxContainer = document.querySelector('.js-parallax');
    this.layers = this.parallaxContainer.children;
    this.setup();
    window.addEventListener('scroll', function () {
      _this.setup();
    });
  }

  parallax__createClass(Parallax, [{
    key: "setup",
    value: function setup() {
      var rect = this.parallaxContainer.getBoundingClientRect();
      var top = rect.top - window.innerHeight;
      var h = this.parallaxContainer.offsetHeight;
      var layer = null;
      var speed = null;
      var yPos = null;

      if (top < 0) {
        for (var i = 0; i < this.layers.length; i += 1) {
          layer = this.layers[i];
          speed = layer.getAttribute('data-speed');
          yPos = Math.round(-((top + h) * (100 - speed) / 100));
          layer.setAttribute('style', "transform: translateY(".concat(yPos, "px)"));
        }
      }
    }
  }]);

  return Parallax;
}();

/* harmony default export */ var parallax = (function () {
  return new Parallax();
});
// CONCATENATED MODULE: ./src/scripts/modules/hero.js
function hero__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hero__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hero__createClass(Constructor, protoProps, staticProps) { if (protoProps) hero__defineProperties(Constructor.prototype, protoProps); if (staticProps) hero__defineProperties(Constructor, staticProps); return Constructor; }

var Hero =
/*#__PURE__*/
function () {
  function Hero() {
    var _this = this;

    hero__classCallCheck(this, Hero);

    this.video = document.querySelector('.js-hero-video');

    window.onresize = function () {
      _this.setup();
    };

    this.setup();
  }

  hero__createClass(Hero, [{
    key: "setup",
    value: function setup() {
      if (window.screen.width < 1024) {
        this.video.removeAttribute('autoplay');
      } else {
        this.video.setAttribute('autoplay', true);
      }
    }
  }]);

  return Hero;
}();

/* harmony default export */ var hero = (function () {
  return new Hero();
});
// CONCATENATED MODULE: ./src/scripts/app.js
/*
  Project: Soldat Page
  Author: kentee
 */



header();
parallax();
hero();

/***/ }),

/***/ "multi \\src\\scripts\\app.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("g7Pl");


/***/ })

/******/ });
