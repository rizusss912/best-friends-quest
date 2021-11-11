/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serve-static */ \"serve-static\");\n/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serve_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_ssr_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/ssr/index.js */ \"./src/ssr/index.js\");\n/* harmony import */ var _src_context_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/context/index.js */ \"./src/context/index.js\");\n/* harmony import */ var _src_client_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/client/index.js */ \"./src/client/index.js\");\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\nconst __filename = (0,url__WEBPACK_IMPORTED_MODULE_3__.fileURLToPath)(\"file:///Users/rizus/projects/best-friends-quest/app.js\");\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_1___default().dirname(__filename);\n\napp.use('/static', serve_static__WEBPACK_IMPORTED_MODULE_2___default()(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, 'dist', 'public')));\n\napp.get('/', async (req, res) => {\n   const context = (0,_src_context_index_js__WEBPACK_IMPORTED_MODULE_5__.createContext)();\n   const out = await (0,_src_ssr_index_js__WEBPACK_IMPORTED_MODULE_4__.ssr)(context, _src_client_index_js__WEBPACK_IMPORTED_MODULE_6__.Client);\n\n   res.send(out.html);\n})\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://best-friends-quest/./app.js?");

/***/ }),

/***/ "./dev-server.js":
/*!***********************!*\
  !*** ./dev-server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./app.js\");\n\n\nconst PORT = 3000;\n\n_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(PORT, () => {\n    console.log(`Example app listening at http://localhost:${PORT}`)\n});\n\n//# sourceURL=webpack://best-friends-quest/./dev-server.js?");

/***/ }),

/***/ "./src/client/client.jsx":
/*!*******************************!*\
  !*** ./src/client/client.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Client\": () => (/* binding */ Client)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar Client = /*#__PURE__*/function (_Component) {\n  _inherits(Client, _Component);\n\n  var _super = _createSuper(Client);\n\n  function Client() {\n    var _this;\n\n    _classCallCheck(this, Client);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleClick\", function (e) {\n      console.log(e);\n    });\n\n    return _this;\n  }\n\n  _createClass(Client, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        onClick: this.handleClick\n      }, this.context.text);\n    }\n  }]);\n\n  return Client;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n//# sourceURL=webpack://best-friends-quest/./src/client/client.jsx?");

/***/ }),

/***/ "./src/ssr/ssr.jsx":
/*!*************************!*\
  !*** ./src/ssr/ssr.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ssr\": () => (/* binding */ ssr)\n/* harmony export */ });\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ \"core-js/stable\");\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nfunction ssr(_x, _x2) {\n  return _ssr.apply(this, arguments);\n}\n\nfunction _ssr() {\n  _ssr = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(context, Client) {\n    var out, appHtml;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            out = {};\n            Client.contextType = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createContext(context);\n            appHtml = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Client, null));\n            out.html = renderDocument(context, appHtml);\n            return _context.abrupt(\"return\", out);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _ssr.apply(this, arguments);\n}\n\nfunction renderDocument(context, appHtml) {\n  return \"\\n        <!doctype html>\\n        <html>\\n            <head>\\n            </head>\\n            <body>\\n                <div id=\\\"app\\\">\\n                    \".concat(appHtml, \"\\n                </div>\\n            </body>\\n            <script>\\n                window.context = '\").concat(JSON.stringify(context), \"';\\n            </script>\\n            <script src=\\\"./static/bundle.js\\\"></script>\\n        </html>\\n    \");\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/ssr/ssr.jsx?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Client\": () => (/* reexport safe */ _client_jsx__WEBPACK_IMPORTED_MODULE_0__.Client)\n/* harmony export */ });\n/* harmony import */ var _client_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.jsx */ \"./src/client/client.jsx\");\n\n\n//# sourceURL=webpack://best-friends-quest/./src/client/index.js?");

/***/ }),

/***/ "./src/context/context.js":
/*!********************************!*\
  !*** ./src/context/context.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContext\": () => (/* binding */ createContext)\n/* harmony export */ });\nfunction createContext() {\n    return {\n        text: 'Привет React!',\n    };\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/context/context.js?");

/***/ }),

/***/ "./src/context/index.js":
/*!******************************!*\
  !*** ./src/context/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContext\": () => (/* reexport safe */ _context_js__WEBPACK_IMPORTED_MODULE_0__.createContext)\n/* harmony export */ });\n/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ \"./src/context/context.js\");\n\n\n//# sourceURL=webpack://best-friends-quest/./src/context/index.js?");

/***/ }),

/***/ "./src/ssr/index.js":
/*!**************************!*\
  !*** ./src/ssr/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ssr\": () => (/* reexport safe */ _ssr_jsx__WEBPACK_IMPORTED_MODULE_0__.ssr)\n/* harmony export */ });\n/* harmony import */ var _ssr_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr.jsx */ \"./src/ssr/ssr.jsx\");\n\n\n//# sourceURL=webpack://best-friends-quest/./src/ssr/index.js?");

/***/ }),

/***/ "core-js/stable":
/*!*********************************!*\
  !*** external "core-js/stable" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("core-js/stable");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "serve-static":
/*!*******************************!*\
  !*** external "serve-static" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("serve-static");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dev-server.js");
/******/ 	
/******/ })()
;