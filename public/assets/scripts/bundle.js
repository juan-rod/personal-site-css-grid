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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/eventListeners.js":
/*!***************************************!*\
  !*** ./src/scripts/eventListeners.js ***!
  \***************************************/
/*! exports provided: pageNav, subNav, pageCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageNav\", function() { return pageNav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subNav\", function() { return subNav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageCount\", function() { return pageCount; });\nvar pageNav = document.querySelectorAll('.horizontal-arrow');\nvar subNav = document.querySelectorAll('.vertical-arrow');\nvar pageCount = document.querySelectorAll('.page-count-line');\nvar routesRight = {\n  '/': 'projects',\n  '/projects': 'timeline',\n  '/timeline': 'contact',\n  '/contact': ''\n};\nvar routesLeft = {\n  '/': 'contact',\n  '/projects': '',\n  '/timeline': 'projects',\n  '/contact': 'timeline'\n};\npageNav.forEach(function (nav) {\n  console.log('nav', nav);\n  nav.addEventListener('click', function (e) {\n    return changeNavAttribute(e);\n  });\n});\nsubNav.forEach(function (nav) {\n  console.log('nav', nav);\n  nav.addEventListener('click', function (e) {\n    return changeSubNavAttribute(e);\n  });\n});\n\nfunction changeNavAttribute(e) {\n  var element = e.target;\n  var url = location.hash.slice(1) || '/';\n\n  if (element.classList.contains('right')) {\n    element.setAttribute('href', \"#/\".concat(routesRight[url]));\n  } else {\n    element.setAttribute('href', \"#/\".concat(routesLeft[url]));\n  }\n}\n\nfunction hashChanged() {\n  var url = location.hash.slice(1) || '/';\n  pageCount.forEach(function (sideNav) {\n    var sidenavClasses = sideNav.classList;\n    var sidenavAttribute = sideNav.getAttribute('href');\n    removePrevActiveClass(sidenavClasses);\n\n    if (sidenavAttribute === \"#\".concat(url)) {\n      sidenavClasses.add('active');\n    }\n  });\n}\n\nfunction removePrevActiveClass(sidenavClasses) {\n  if (sidenavClasses.contains('active')) sidenavClasses.remove('active');\n}\n\nfunction setWindowHistory(pathName) {\n  window.history.pushState({}, pathName, window.location.origin + '/public/index.html#' + pathName);\n}\n\nwindow.addEventListener('hashchange', hashChanged);\n\n//# sourceURL=webpack:///./src/scripts/eventListeners.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/scripts/router.js\");\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners.js */ \"./src/scripts/eventListeners.js\");\n\n // const baconEl = document.querySelector('.bacon');\n// GetBacon()\n//   .then(res => {\n//     const markup = res.reduce((acc, val) => (acc += `<p>${val}</p>`), '');\n//     baconEl.innerHTML = markup;\n//   }).catch(err => (baconEl.innerHTML = err));\n// function pageClick(e) {\n//   console.log('hey')\n//   console.log('pageClick', e)\n// }\n// window.onclick = pageClick\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/router.js":
/*!*******************************!*\
  !*** ./src/scripts/router.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ \"./src/scripts/templates/index.js\");\n\nvar routes = {\n  '/': Object(_templates__WEBPACK_IMPORTED_MODULE_0__[\"template\"])('home'),\n  '/projects': Object(_templates__WEBPACK_IMPORTED_MODULE_0__[\"template\"])('projects'),\n  '/timeline': Object(_templates__WEBPACK_IMPORTED_MODULE_0__[\"template\"])('timeline'),\n  '/contact': Object(_templates__WEBPACK_IMPORTED_MODULE_0__[\"template\"])('contact')\n};\nvar el = null;\nvar elLogo = null;\n\nfunction router() {\n  // Lazy load view element:\n  el = el || document.getElementById('view');\n  elLogo = elLogo || document.getElementById('logo');\n  elLogo.innerHTML = Object(_templates__WEBPACK_IMPORTED_MODULE_0__[\"template\"])('logo'); // Current route url (getting rid of '#' in hash as well):\n\n  var url = location.hash.slice(1) || '/'; // Get route by url:\n\n  var route = routes[url]; // Do we have both a view and a route?\n\n  if (el && route) {\n    window.history.pushState({}, url, window.location.origin + '/public/index.html#' + url); // Render route template with John Resig's template engine:\n\n    el.innerHTML = routes[url];\n  }\n} // Listen on hash change:\n\n\nwindow.addEventListener('hashchange', router); // Listen on page load:\n\nwindow.addEventListener('load', router);\n\n//# sourceURL=webpack:///./src/scripts/router.js?");

/***/ }),

/***/ "./src/scripts/templates/contact.js":
/*!******************************************!*\
  !*** ./src/scripts/templates/contact.js ***!
  \******************************************/
/*! exports provided: contactTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactTemplate\", function() { return contactTemplate; });\nvar contactTemplate = function contactTemplate() {\n  var template = {\n    img: './assets/images/juan_rodriguez--2019.png',\n    title1: 'contact',\n    title2: 'contact',\n    date: 'dec 2019'\n  };\n  return \"<div class=\\\"main__content__headshot\\\"></div>\\n  <div class=\\\"main__content__title\\\">\\n  <span>\".concat(template.title1, \"</span> \\n  <span>\").concat(template.title2, \"</span>\\n  <span class=\\\"title-description\\\">\\n    <span></span>\\n    <span></span>\\n    <span>\").concat(template.date, \"</span>\\n  </span>\\n</div>\");\n};\n\n//# sourceURL=webpack:///./src/scripts/templates/contact.js?");

/***/ }),

/***/ "./src/scripts/templates/home.js":
/*!***************************************!*\
  !*** ./src/scripts/templates/home.js ***!
  \***************************************/
/*! exports provided: homeTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homeTemplate\", function() { return homeTemplate; });\nvar homeTemplate = function homeTemplate() {\n  var template = {\n    img: './assets/images/juan_rodriguez--2019.png',\n    title1: 'Software',\n    title2: 'Developer',\n    date: 'may 2016'\n  };\n  return \"<div class=\\\"main__content__headshot\\\"></div>\\n  <div class=\\\"main__content__title\\\">\\n  <span>\".concat(template.title1, \"</span> \\n  <span>\").concat(template.title2, \"</span>\\n  <span class=\\\"title-description\\\">\\n    <span></span>\\n    <span></span>\\n    <span>\").concat(template.date, \"</span>\\n  </span>\\n</div>\");\n};\n\n//# sourceURL=webpack:///./src/scripts/templates/home.js?");

/***/ }),

/***/ "./src/scripts/templates/index.js":
/*!****************************************!*\
  !*** ./src/scripts/templates/index.js ***!
  \****************************************/
/*! exports provided: template */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"template\", function() { return template; });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/scripts/templates/home.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/scripts/templates/projects.js\");\n/* harmony import */ var _timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline */ \"./src/scripts/templates/timeline.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/scripts/templates/contact.js\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo */ \"./src/scripts/templates/logo.js\");\n\n\n\n\n // import { pageCountTemplate } from './page-count'\n\nfunction template(templateId) {\n  console.log('templateId in home', templateId);\n\n  switch (templateId) {\n    case 'home':\n      return Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"homeTemplate\"])();\n\n    case 'projects':\n      return Object(_projects__WEBPACK_IMPORTED_MODULE_1__[\"projectsTemplate\"])();\n\n    case 'timeline':\n      return Object(_timeline__WEBPACK_IMPORTED_MODULE_2__[\"timelineTemplate\"])();\n\n    case 'contact':\n      return Object(_contact__WEBPACK_IMPORTED_MODULE_3__[\"contactTemplate\"])();\n\n    case 'logo':\n      return Object(_logo__WEBPACK_IMPORTED_MODULE_4__[\"logoTemplate\"])();\n    // case 'page-count' : return pageCountTemplate()\n\n    default:\n      return Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"homeTemplate\"])();\n  }\n}\n\n//# sourceURL=webpack:///./src/scripts/templates/index.js?");

/***/ }),

/***/ "./src/scripts/templates/logo.js":
/*!***************************************!*\
  !*** ./src/scripts/templates/logo.js ***!
  \***************************************/
/*! exports provided: logoTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoTemplate\", function() { return logoTemplate; });\nvar logoTemplate = function logoTemplate() {\n  return \"<svg width=\\\"100%\\\" height=\\\"100%\\\" viewBox=\\\"0 0 47 10\\\" version=\\\"1.1\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\">\\n    <desc>Created with Sketch.</desc>\\n    <defs></defs>\\n    <g id=\\\"Page-1\\\" stroke=\\\"none\\\" stroke-width=\\\"1\\\" fill=\\\"none\\\" fill-rule=\\\"evenodd\\\" font-family=\\\"RobotoMono-Regular, Roboto Mono\\\" font-size=\\\"11\\\" font-weight=\\\"normal\\\" letter-spacing=\\\"0.1358024\\\">\\n        <g id=\\\"Desktop\\\" transform=\\\"translate(-324.000000, -211.000000)\\\" fill=\\\"#4A4A4A\\\">\\n            <text id=\\\"JUANROD\\\">\\n                <tspan x=\\\"323.920932\\\" y=\\\"220\\\">JUANROD</tspan>\\n            </text>\\n        </g>\\n    </g>\\n  </svg>\";\n};\n\n//# sourceURL=webpack:///./src/scripts/templates/logo.js?");

/***/ }),

/***/ "./src/scripts/templates/projects.js":
/*!*******************************************!*\
  !*** ./src/scripts/templates/projects.js ***!
  \*******************************************/
/*! exports provided: projectsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectsTemplate\", function() { return projectsTemplate; });\nvar projectsTemplate = function projectsTemplate() {\n  var template = {\n    img: './assets/images/juan_rodriguez--2019.png',\n    title1: 'Project',\n    title2: '1',\n    date: 'april 2016'\n  };\n  return \"<div class=\\\"main__content__headshot\\\"></div>\\n  <div class=\\\"main__content__title\\\">\\n  <span>\".concat(template.title1, \"</span> \\n  <span>\").concat(template.title2, \"</span>\\n  <span class=\\\"title-description\\\">\\n    <span></span>\\n    <span></span>\\n    <span>\").concat(template.date, \"</span>\\n  </span>\\n</div>\");\n};\n\n//# sourceURL=webpack:///./src/scripts/templates/projects.js?");

/***/ }),

/***/ "./src/scripts/templates/timeline.js":
/*!*******************************************!*\
  !*** ./src/scripts/templates/timeline.js ***!
  \*******************************************/
/*! exports provided: timelineTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timelineTemplate\", function() { return timelineTemplate; });\nvar timelineTemplate = function timelineTemplate() {\n  var template = {\n    img: './assets/images/juan_rodriguez--2019.png',\n    title1: 'Timeline',\n    title2: 'timeline',\n    date: 'january 2016'\n  };\n  return \"<div class=\\\"main__content__headshot\\\"></div>\\n  <div class=\\\"main__content__title\\\">\\n  <span>\".concat(template.title1, \"</span> \\n  <span>\").concat(template.title2, \"</span>\\n  <span class=\\\"title-description\\\">\\n    <span></span>\\n    <span></span>\\n    <span>\").concat(template.date, \"</span>\\n  </span>\\n</div>\");\n};\n\n//# sourceURL=webpack:///./src/scripts/templates/timeline.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });