/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serve-static */ \"serve-static\");\n/* harmony import */ var serve_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serve_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/ssr */ \"./src/ssr/ssr.jsx\");\n/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/context */ \"./src/context/context.js\");\n/* harmony import */ var _src_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/client */ \"./src/client/client.jsx\");\n/* harmony import */ var _src_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/api */ \"./src/api/index.js\");\n/* harmony import */ var _src_utils_get_language_by_accept_languages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/utils/get-language-by-accept-languages */ \"./src/utils/get-language-by-accept-languages.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\nconst __filename = (0,url__WEBPACK_IMPORTED_MODULE_3__.fileURLToPath)(\"file:///Users/rizus/projects/best-friends-quest/app.js\");\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_1___default().dirname(__filename);\n\napp.use('/static', serve_static__WEBPACK_IMPORTED_MODULE_2___default()(path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, 'dist', 'public')));\n\napp.use('/api', _src_api__WEBPACK_IMPORTED_MODULE_7__.router);\n\napp.use('/', async (req, res) => {\n   const lang = (0,_src_utils_get_language_by_accept_languages__WEBPACK_IMPORTED_MODULE_8__.getLanguageByAcceptLanguages)(req.acceptsLanguages());\n   const context = (0,_src_context__WEBPACK_IMPORTED_MODULE_5__.createContext)(lang);\n   const out = await (0,_src_ssr__WEBPACK_IMPORTED_MODULE_4__.ssr)(context, _src_client__WEBPACK_IMPORTED_MODULE_6__.Client, req.path);\n\n   res.send(out.html);\n})\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://best-friends-quest/./app.js?");

/***/ }),

/***/ "./dev-server.js":
/*!***********************!*\
  !*** ./dev-server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./app.js\");\n\n\nconst PORT = 3000;\n\n_app_js__WEBPACK_IMPORTED_MODULE_0__.default.listen(PORT, () => {\n    console.log(`Example app listening at http://localhost:${PORT}`)\n});\n\n//# sourceURL=webpack://best-friends-quest/./dev-server.js?");

/***/ }),

/***/ "./src/client/client.jsx":
/*!*******************************!*\
  !*** ./src/client/client.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Client\": () => (/* binding */ Client)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/home */ \"./src/client/routes/home/home.jsx\");\n/* harmony import */ var _routes_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/create */ \"./src/client/routes/create/create.jsx\");\n/* harmony import */ var _routes_quest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/quest */ \"./src/client/routes/quest/quest.jsx\");\n/* harmony import */ var _client_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client.css */ \"./src/client/client.css\");\n/* harmony import */ var _client_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_client_css__WEBPACK_IMPORTED_MODULE_6__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar Client = /*#__PURE__*/function (_Component) {\n  _inherits(Client, _Component);\n\n  var _super = _createSuper(Client);\n\n  function Client() {\n    var _this;\n\n    _classCallCheck(this, Client);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"provideContext\", function (component) {\n      component.contextType = Client.contextType;\n      return component;\n    });\n\n    return _this;\n  }\n\n  _createClass(Client, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: 'app',\n        onClick: this.handleClick\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n        path: \"/quest\",\n        component: this.provideContext(_routes_quest__WEBPACK_IMPORTED_MODULE_5__.Quest)\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n        path: \"/create\",\n        component: this.provideContext(_routes_create__WEBPACK_IMPORTED_MODULE_4__.Create)\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Route, {\n        path: \"/\",\n        component: this.provideContext(_routes_home__WEBPACK_IMPORTED_MODULE_3__.Home)\n      })), this.context.texts.TEST_TEXT);\n    }\n  }]);\n\n  return Client;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n//# sourceURL=webpack://best-friends-quest/./src/client/client.jsx?");

/***/ }),

/***/ "./src/client/routes/create/create.jsx":
/*!*********************************************!*\
  !*** ./src/client/routes/create/create.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Create\": () => (/* binding */ Create)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _create_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.css */ \"./src/client/routes/create/create.css\");\n/* harmony import */ var _create_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_create_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Create = /*#__PURE__*/function (_Component) {\n  _inherits(Create, _Component);\n\n  var _super = _createSuper(Create);\n\n  function Create() {\n    _classCallCheck(this, Create);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Create, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: 'create'\n      }, \"create\");\n    }\n  }]);\n\n  return Create;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n//# sourceURL=webpack://best-friends-quest/./src/client/routes/create/create.jsx?");

/***/ }),

/***/ "./src/client/routes/home/home.jsx":
/*!*****************************************!*\
  !*** ./src/client/routes/home/home.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_quest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/quest-service */ \"./src/client/services/quest-service.js\");\n/* harmony import */ var _services_question_sevice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/question-sevice */ \"./src/client/services/question-sevice.js\");\n/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.css */ \"./src/client/routes/home/home.css\");\n/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_Component) {\n  _inherits(Home, _Component);\n\n  var _super = _createSuper(Home);\n\n  function Home() {\n    var _this;\n\n    _classCallCheck(this, Home);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"questService\", new _services_quest_service__WEBPACK_IMPORTED_MODULE_1__.QuestService());\n\n    _defineProperty(_assertThisInitialized(_this), \"questionService\", new _services_question_sevice__WEBPACK_IMPORTED_MODULE_2__.QuestionService());\n\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: 'home'\n      }, \"home\");\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      //this.questService.createQuest('ddd', this.context.apiUrl);\n\n      /*this.questService.addAnswer(\n          'test question',\n          [\n              { text: '1 answer' },\n              { text: '2 answer' },\n              { text: '3 answer' },\n              { text: '4 answer' }\n          ],\n          0,\n          this.context.apiUrl\n      );*/\n      this.questService.addAnswerById('61a38ae1e92db486f7e0ef9c', this.context.apiUrl);\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n//# sourceURL=webpack://best-friends-quest/./src/client/routes/home/home.jsx?");

/***/ }),

/***/ "./src/client/routes/quest/quest.jsx":
/*!*******************************************!*\
  !*** ./src/client/routes/quest/quest.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Quest\": () => (/* binding */ Quest)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _quest_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quest.css */ \"./src/client/routes/quest/quest.css\");\n/* harmony import */ var _quest_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_quest_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar Quest = /*#__PURE__*/function (_Component) {\n  _inherits(Quest, _Component);\n\n  var _super = _createSuper(Quest);\n\n  function Quest() {\n    _classCallCheck(this, Quest);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Quest, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: 'quest'\n      }, \"quest\");\n    }\n  }]);\n\n  return Quest;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\n//# sourceURL=webpack://best-friends-quest/./src/client/routes/quest/quest.jsx?");

/***/ }),

/***/ "./src/ssr/ssr.jsx":
/*!*************************!*\
  !*** ./src/ssr/ssr.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ssr\": () => (/* binding */ ssr)\n/* harmony export */ });\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ \"core-js/stable\");\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nvar mockClientContext = {\n  apiUrl: ''\n};\nfunction ssr(_x, _x2) {\n  return _ssr.apply(this, arguments);\n}\n\nfunction _ssr() {\n  _ssr = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(context, Client) {\n    var path,\n        out,\n        appHtml,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            path = _args.length > 2 && _args[2] !== undefined ? _args[2] : '/';\n            out = {};\n            Client.contextType = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(Object.assign({}, mockClientContext, context));\n            appHtml = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {\n              context: context,\n              location: path\n            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Client, null)));\n            out.html = renderDocument(context, appHtml);\n            return _context.abrupt(\"return\", out);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _ssr.apply(this, arguments);\n}\n\nfunction renderDocument(context, appHtml) {\n  return \"\\n        <!doctype html>\\n        <html>\\n            <head>\\n                <link rel=\\\"stylesheet\\\" href=\\\"./static/bundle.css\\\">\\n            </head>\\n            <body>\\n                <div id=\\\"app\\\">\".concat(appHtml, \"</div>\\n            </body>\\n\\n            <script>window.context = '\").concat(JSON.stringify(context), \"';</script>\\n            <script src=\\\"./static/bundle.js\\\"></script>\\n        </html>\\n    \");\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/ssr/ssr.jsx?");

/***/ }),

/***/ "./src/client/client.css":
/*!*******************************!*\
  !*** ./src/client/client.css ***!
  \*******************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://best-friends-quest/./src/client/client.css?");

/***/ }),

/***/ "./src/client/routes/create/create.css":
/*!*********************************************!*\
  !*** ./src/client/routes/create/create.css ***!
  \*********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://best-friends-quest/./src/client/routes/create/create.css?");

/***/ }),

/***/ "./src/client/routes/home/home.css":
/*!*****************************************!*\
  !*** ./src/client/routes/home/home.css ***!
  \*****************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://best-friends-quest/./src/client/routes/home/home.css?");

/***/ }),

/***/ "./src/client/routes/quest/quest.css":
/*!*******************************************!*\
  !*** ./src/client/routes/quest/quest.css ***!
  \*******************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://best-friends-quest/./src/client/routes/quest/quest.css?");

/***/ }),

/***/ "./src/api/constants/cookie-names.js":
/*!*******************************************!*\
  !*** ./src/api/constants/cookie-names.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cookieNames\": () => (/* binding */ cookieNames)\n/* harmony export */ });\nconst cookieNames = {\n    idOfQuestBeingCreated: 'wgjrpj',\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/api/constants/cookie-names.js?");

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* reexport safe */ _router__WEBPACK_IMPORTED_MODULE_0__.default)\n/* harmony export */ });\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ \"./src/api/router.js\");\n\n\n\n\n\n//# sourceURL=webpack://best-friends-quest/./src/api/index.js?");

/***/ }),

/***/ "./src/api/router.js":
/*!***************************!*\
  !*** ./src/api/router.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routers_quest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routers/quest */ \"./src/api/routers/quest/quest.js\");\n/* harmony import */ var _routers_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routers/question */ \"./src/api/routers/question/question.js\");\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\nrouter.use(cookie_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n\nrouter.use('/quest', _routers_quest__WEBPACK_IMPORTED_MODULE_2__.default);\nrouter.use('/question', _routers_question__WEBPACK_IMPORTED_MODULE_3__.default);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://best-friends-quest/./src/api/router.js?");

/***/ }),

/***/ "./src/api/routers/quest/quest.js":
/*!****************************************!*\
  !*** ./src/api/routers/quest/quest.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_quest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/quest */ \"./src/constants/quest.js\");\n/* harmony import */ var _constants_cookie_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/cookie-names */ \"./src/api/constants/cookie-names.js\");\n/* harmony import */ var _mongodb_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mongodb/index */ \"./src/mongodb/index.js\");\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nconst questsService = new _mongodb_index__WEBPACK_IMPORTED_MODULE_4__.QuestsService();\nconst questionsService = new _mongodb_index__WEBPACK_IMPORTED_MODULE_4__.QuestionsService();\n\nrouter.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\n\nrouter.get('/create-status', async function(req, res) {\n    try {\n        const questId = req.cookies[_constants_cookie_names__WEBPACK_IMPORTED_MODULE_3__.cookieNames.idOfQuestBeingCreated];\n        validate();\n        const quest = await (0,_mongodb_index__WEBPACK_IMPORTED_MODULE_4__.connect)(async () => {\n            return await questsService.getQuestStatus(questId);\n        });\n\n        res.json(quest);\n    } catch (e) {\n        res.status(400).send({ message: e.toString() });\n    }\n});\n\nrouter.post('/create', async function (req, res) {\n    try {\n        const { name } = req.body;\n        const quest = await (0,_mongodb_index__WEBPACK_IMPORTED_MODULE_4__.connect)(async () => {\n            return await questsService.createQuest(name);\n        });\n\n        const { id } = quest;\n\n        delete quest.id;\n\n        res.cookie(\n            _constants_cookie_names__WEBPACK_IMPORTED_MODULE_3__.cookieNames.idOfQuestBeingCreated,\n            id,\n            { httpOnly: true, secure: true, maxAge: 90000000 }\n        );\n\n        res.json(quest);\n    } catch (e) {\n        res.status(400).send({ message: e.toString() });\n    }\n});\n\nrouter.post('/answer', async function (req, res) {\n    try {\n        const { question, answers, correctAnswerIndex, questionId } = req.body;\n        const questId = req.cookies[_constants_cookie_names__WEBPACK_IMPORTED_MODULE_3__.cookieNames.idOfQuestBeingCreated];\n        const quest = await (0,_mongodb_index__WEBPACK_IMPORTED_MODULE_4__.connect)(async () => {\n            //TODO можно оптимизировать запросы\n            const quest = await questsService.getQuestStatus(questId);\n\n            if (quest.questions.length >= _constants_quest__WEBPACK_IMPORTED_MODULE_2__.MAX_QUESTIONS_IN_QUEST) {\n                throw Error('maximum number of questions for this quest has been reached');\n            }\n\n            let record;\n\n            if (!questionId) {\n                record = await questionsService.createQuestion(question, answers, false);\n            } else {\n                record = await questionsService.getQuestion(questionId);\n\n                if (!record) {\n                    throw Error('invalid id');\n                }\n            }\n            \n            const isReady = quest.questions.length + 1 === _constants_quest__WEBPACK_IMPORTED_MODULE_2__.MAX_QUESTIONS_IN_QUEST;\n            await questsService.addQuestionForQuest(questId, record.id, correctAnswerIndex, isReady);\n\n            return await questsService.getQuestStatus(questId);\n        });\n\n        res.json(quest);\n    } catch (e) {\n        res.status(400).send({ message: e.toString() });\n    }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n\n//# sourceURL=webpack://best-friends-quest/./src/api/routers/quest/quest.js?");

/***/ }),

/***/ "./src/api/routers/question/question.js":
/*!**********************************************!*\
  !*** ./src/api/routers/question/question.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mongodb_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mongodb/index */ \"./src/mongodb/index.js\");\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nconst questionsService = new _mongodb_index__WEBPACK_IMPORTED_MODULE_2__.QuestionsService();\n\nrouter.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());\n\n\nrouter.post('/create', async function (req, res) {\n    try {\n        const { question, answers } = req.body;\n        const quest = await (0,_mongodb_index__WEBPACK_IMPORTED_MODULE_2__.connect)(async () => {\n            return await questionsService.createQuestion(question, answers, true);\n        });\n\n        res.json(quest);\n    } catch (e) {\n        res.status(400).send({ message: e.toString() });\n    }\n});\n\nrouter.get('/list', async function (req, res) {\n    try {\n        const { page } = req.query;\n\n        if (!page) {\n            throw Error('inpalit page number');\n        }\n\n        const list = await (0,_mongodb_index__WEBPACK_IMPORTED_MODULE_2__.connect)(async () => {\n            const list = await questionsService.getList(page);\n            return list.map(question => {\n                delete question.isPublic;\n                return question;\n            });\n        });\n\n        res.json(list);\n    } catch (e) {\n        res.status(400).send({ message: e.toString() });\n    }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n\n//# sourceURL=webpack://best-friends-quest/./src/api/routers/question/question.js?");

/***/ }),

/***/ "./src/client/services/quest-service.js":
/*!**********************************************!*\
  !*** ./src/client/services/quest-service.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuestService\": () => (/* binding */ QuestService)\n/* harmony export */ });\n/* harmony import */ var _utils_fetch_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fetch-json */ \"./src/client/utils/fetch-json.js\");\n\n\nlet instance;\n\nclass QuestService {\n    constructor() {\n        if (!instance) {\n            instance = this;\n        }\n\n        return instance;\n    }\n\n    createQuest(name, apiUrl) {\n        return (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_0__.fetchJSON)(`${apiUrl}/quest/create`, { method: 'POST' }, { name });\n    }\n\n    addAnswer(question, answers, correctAnswerIndex, apiUrl) {\n        const body = { question, answers, correctAnswerIndex };\n        return (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_0__.fetchJSON)(`${apiUrl}/quest/answer`, { method: 'POST' }, body);\n    }\n    \n    addAnswerById(questionId, apiUrl) {\n        const body = { questionId };\n        return (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_0__.fetchJSON)(`${apiUrl}/quest/answer`, { method: 'POST' }, body);\n    }\n\n    getQuestCreateStatus(apiUrl) {\n        return (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_0__.fetchJSON)(`${apiUrl}/quest/create-status`, { method: 'GET' });\n    }\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/client/services/quest-service.js?");

/***/ }),

/***/ "./src/client/services/question-sevice.js":
/*!************************************************!*\
  !*** ./src/client/services/question-sevice.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuestionService\": () => (/* binding */ QuestionService)\n/* harmony export */ });\n/* harmony import */ var _utils_fetch_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fetch-json */ \"./src/client/utils/fetch-json.js\");\n\n\nlet instance;\n\nclass QuestionService {\n    constructor() {\n        if (!instance) {\n            instance = this;\n        }\n\n        return instance;\n    }\n\n    getList(page, apiUrl) {\n        return (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_0__.fetchJSON)(`${apiUrl}/question/list?page=${page}`, { method: 'GET' });\n    }\n\n    createPublicQuestion(question, answers, apiUrl) {\n        return (0,_utils_fetch_json__WEBPACK_IMPORTED_MODULE_0__.fetchJSON)(`${apiUrl}/question/create`, { method: 'POST' }, { question, answers });\n    }\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/client/services/question-sevice.js?");

/***/ }),

/***/ "./src/client/utils/fetch-json.js":
/*!****************************************!*\
  !*** ./src/client/utils/fetch-json.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchJSON\": () => (/* binding */ fetchJSON)\n/* harmony export */ });\nfunction fetchJSON(url, init = {}, body) {\n    const initJson = Object.assign(\n        {},\n        init,\n        {\n            headers: Object.assign(\n                {},\n                init.headers || {},\n                {\n                    'Accept': 'application/json, text/plain, */*',\n                    'Content-Type': 'application/json'\n                }\n            ),\n            body: JSON.stringify(body),\n        },\n    );\n\n    if (body) {\n        initJson.body = JSON.stringify(body);\n    }\n\n    return fetch(url, initJson)\n        .then(req => req.json())\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/client/utils/fetch-json.js?");

/***/ }),

/***/ "./src/constants/quest.js":
/*!********************************!*\
  !*** ./src/constants/quest.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MAX_QUESTIONS_IN_QUEST\": () => (/* binding */ MAX_QUESTIONS_IN_QUEST)\n/* harmony export */ });\nconst MAX_QUESTIONS_IN_QUEST = 20;\n\n//# sourceURL=webpack://best-friends-quest/./src/constants/quest.js?");

/***/ }),

/***/ "./src/constants/question.js":
/*!***********************************!*\
  !*** ./src/constants/question.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QUESTIONS_OF_PAGE_COUNT\": () => (/* binding */ QUESTIONS_OF_PAGE_COUNT)\n/* harmony export */ });\nconst QUESTIONS_OF_PAGE_COUNT = 20;\n\n//# sourceURL=webpack://best-friends-quest/./src/constants/question.js?");

/***/ }),

/***/ "./src/context/constants/texts-map.js":
/*!********************************************!*\
  !*** ./src/context/constants/texts-map.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"textsMap\": () => (/* binding */ textsMap)\n/* harmony export */ });\n/* harmony import */ var _texts_ru_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../texts/ru.json */ \"./src/context/texts/ru.json\");\n/* harmony import */ var _texts_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../texts/en.json */ \"./src/context/texts/en.json\");\n\n\n\nconst textsMap = {\n    ru: _texts_ru_json__WEBPACK_IMPORTED_MODULE_0__,\n    en: _texts_en_json__WEBPACK_IMPORTED_MODULE_1__,\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/context/constants/texts-map.js?");

/***/ }),

/***/ "./src/context/context.js":
/*!********************************!*\
  !*** ./src/context/context.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContext\": () => (/* binding */ createContext)\n/* harmony export */ });\n/* harmony import */ var _constants_texts_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/texts-map */ \"./src/context/constants/texts-map.js\");\n\n\nfunction createContext(lang) {\n    return {\n        texts: _constants_texts_map__WEBPACK_IMPORTED_MODULE_0__.textsMap[lang],\n    };\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/context/context.js?");

/***/ }),

/***/ "./src/context/texts/en.json":
/*!***********************************!*\
  !*** ./src/context/texts/en.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"TEST_TEXT\":\"Hello React!\"}');\n\n//# sourceURL=webpack://best-friends-quest/./src/context/texts/en.json?");

/***/ }),

/***/ "./src/context/texts/ru.json":
/*!***********************************!*\
  !*** ./src/context/texts/ru.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"TEST_TEXT\":\"Привет React!\"}');\n\n//# sourceURL=webpack://best-friends-quest/./src/context/texts/ru.json?");

/***/ }),

/***/ "./src/mongodb/index.js":
/*!******************************!*\
  !*** ./src/mongodb/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuestionsService\": () => (/* reexport safe */ _services_questions_service__WEBPACK_IMPORTED_MODULE_0__.QuestionsService),\n/* harmony export */   \"QuestsService\": () => (/* reexport safe */ _services_quests_service__WEBPACK_IMPORTED_MODULE_1__.QuestsService),\n/* harmony export */   \"connect\": () => (/* reexport safe */ _utils_connect__WEBPACK_IMPORTED_MODULE_2__.connect)\n/* harmony export */ });\n/* harmony import */ var _services_questions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/questions-service */ \"./src/mongodb/services/questions-service.js\");\n/* harmony import */ var _services_quests_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/quests-service */ \"./src/mongodb/services/quests-service.js\");\n/* harmony import */ var _utils_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/connect */ \"./src/mongodb/utils/connect.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://best-friends-quest/./src/mongodb/index.js?");

/***/ }),

/***/ "./src/mongodb/mongodb.js":
/*!********************************!*\
  !*** ./src/mongodb/mongodb.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MongoDB\": () => (/* binding */ MongoDB)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet instance;\n\n\nclass MongoDB {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient('mongodb+srv://GDDwDMzsiQan3eJ9:jYPw23h7xtFy1nG1@cluster0.tiqcb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');\n    \n    constructor() {\n        if (!instance) {\n            instance = this;\n        }\n\n        return instance;\n    }\n\n    get db () {\n        return this.client.db('best-friends-quest');\n    }\n\n    get quests () {\n        return this.db.collection('quests');\n    }\n\n    get questions () {\n        return this.db.collection('questions');\n    }\n\n    async close() {\n        await this.client.close();\n    }\n \n    async connect() {\n        await this.client.connect();\n    }\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/mongodb/mongodb.js?");

/***/ }),

/***/ "./src/mongodb/services/questions-service.js":
/*!***************************************************!*\
  !*** ./src/mongodb/services/questions-service.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuestionsService\": () => (/* binding */ QuestionsService)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/question */ \"./src/constants/question.js\");\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mongodb */ \"./src/mongodb/mongodb.js\");\n\n\n\n\n\nlet instance;\n\n\nclass QuestionsService {\n    mongodb = new _mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoDB();\n\n    constructor() {\n        if (!instance) {\n            instance = this;\n        }\n\n        return instance;\n    }\n\n    async getQuestion(id) {\n        return this.mongodb.questions.findOne({ _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectID(id) })\n        .then(record => {\n            delete record._id;\n            return record;\n        });\n    }\n\n    async getList(page) {\n        const records = await this.mongodb.questions.find({ isPublic: true })\n            .skip(_constants_question__WEBPACK_IMPORTED_MODULE_1__.QUESTIONS_OF_PAGE_COUNT * (page - 1))\n            .limit(_constants_question__WEBPACK_IMPORTED_MODULE_1__.QUESTIONS_OF_PAGE_COUNT)\n            .toArray();\n\n        return records.map(record => {\n                record.id = record._id.toString();\n                delete record._id;\n                return record;\n            });\n    }\n\n    async getQuestions(ids) {\n        const mongoIds = ids.map(id => ({ _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectID(id) }));\n        const records = await this.mongodb.questions.find({ $or: mongoIds }).toArray();\n\n        return records.map(record => {\n            record.id = record._id.toString();\n            delete record._id;\n            return record;\n        });\n    }\n\n    async createQuestion(question, answers, isPublic) {\n        const record = { isPublic, question, answers };\n\n        return  new Promise((resolve, reject) =>\n            this.mongodb.questions.insertOne(\n                { ...record },\n                (err, result) => {\n                if (err) {\n                    reject('bd: failed to create a question');\n                }\n\n                resolve({ ...record, id: result.insertedId.toString() });\n                }\n            )\n        );\n    }\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/mongodb/services/questions-service.js?");

/***/ }),

/***/ "./src/mongodb/services/quests-service.js":
/*!************************************************!*\
  !*** ./src/mongodb/services/quests-service.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuestsService\": () => (/* binding */ QuestsService)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questions-service */ \"./src/mongodb/services/questions-service.js\");\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mongodb */ \"./src/mongodb/mongodb.js\");\n\n\n\n\n\nlet instance;\n\nconst defaultQuestConfig = Object.freeze({\n    questions: [],\n    friends: [],\n    isReady: false\n});\nconst questionsService = new _questions_service__WEBPACK_IMPORTED_MODULE_1__.QuestionsService();\n\nclass QuestsService {\n    mongodb = new _mongodb__WEBPACK_IMPORTED_MODULE_2__.MongoDB();\n\n    constructor() {\n        if (!instance) {\n            instance = this;\n        }\n\n        return instance;\n    }\n\n    async getQuest(id) {\n        return this.mongodb.quests.findOne({ _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectID(id) })\n            .then(record => {\n                if (!record) {\n                    throw new Error('invalid quest id');\n                }\n\n                record.id = record._id.toString();\n                delete record._id;\n                return record;\n            });\n    }\n\n    async getQuestStatus(id) {\n        const quest = await this.getQuest(id);\n        const questionsIds = quest.questions.map(({ id }) => id);\n        const questions = questionsIds.length === 0\n            ? []\n            : await questionsService.getQuestions(questionsIds);\n\n        quest.questions = quest.questions.map(({ id }) => {\n            const question = questions.find(question => question.id === id);\n            delete question.id;\n            delete question.isPublic;\n\n            return question;\n        });\n\n        return quest;\n    }\n\n    async createQuest(name) {\n        const quest = Object.assign({ name }, defaultQuestConfig);\n\n        return new Promise((resolve, reject) =>\n            this.mongodb.quests.insertOne(\n                { ...quest },\n                (err, result) => {\n                if (err) {\n                    reject('bd: failed to create a quest');\n                }\n\n                resolve({ ...quest, id: result.insertedId.toString() });\n                }\n            )\n        )\n    }\n\n    async addQuestionForQuest(questId, questionId, answerIndex, isReady) {\n        console.log(isReady);\n        return this.mongodb.quests.updateOne(\n            { _id:  new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectID(questId) },\n            {\n                $push: { questions: {id: questionId, answerIndex } },\n                $set: { isReady }\n            }\n        );\n    }\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/mongodb/services/quests-service.js?");

/***/ }),

/***/ "./src/mongodb/utils/connect.js":
/*!**************************************!*\
  !*** ./src/mongodb/utils/connect.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connect\": () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mongodb */ \"./src/mongodb/mongodb.js\");\n\n\nconst mongodb = new _mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoDB();\n\nlet users = 0;\nlet isOpenDB = false;\nlet disconnectTimeout = null;\nlet connectPromise = null; \n\nasync function connect(callback) {\n    users++;\n\n    if (!isOpenDB) {\n        try {\n            if (disconnectTimeout) {\n                clearTimeout(disconnectTimeout);\n                disconnectTimeout = null;\n            }\n\n            if (connectPromise) {\n                await connectPromise;\n                connectPromise = null;\n            } else {\n                connectPromise = mongodb.connect();\n                await connectPromise;\n                console.log('Logger: mongodb connect');\n            }\n\n            isOpenDB = true;\n        } catch (e) {\n            console.log('Logger: failed mongodb connect');\n            throw new Error('bd: failed to connect to the database');\n        }\n    }\n\n    try {\n        return await callback();\n    } catch (e) {\n        throw e;\n    } finally {\n        users--;\n        if (users === 0 && isOpenDB) {\n            disconnectTimeout = setTimeout(async () => {\n                if (isOpenDB) {\n                    await mongodb.close();\n                    isOpenDB = false;\n                    console.log('Logger: mongodb disconnect');\n                }\n            }, 1000 * 60);\n        }\n    }\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/mongodb/utils/connect.js?");

/***/ }),

/***/ "./src/utils/get-language-by-accept-languages.js":
/*!*******************************************************!*\
  !*** ./src/utils/get-language-by-accept-languages.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLanguageByAcceptLanguages\": () => (/* binding */ getLanguageByAcceptLanguages)\n/* harmony export */ });\nconst defaultLanguage = 'en';\n\nfunction getLanguageByAcceptLanguages(languages) {\n    return languages.includes('ru') ? 'ru' : defaultLanguage;\n}\n\n//# sourceURL=webpack://best-friends-quest/./src/utils/get-language-by-accept-languages.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "core-js/stable":
/*!*********************************!*\
  !*** external "core-js/stable" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/stable");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "serve-static":
/*!*******************************!*\
  !*** external "serve-static" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("serve-static");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

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