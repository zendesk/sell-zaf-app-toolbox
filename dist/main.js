(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["zap-app-utils"] = factory(require("react"));
	else
		root["zap-app-utils"] = factory(root["react"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function memoized() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoizeOne);


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/components/ResponseHandler.tsx":
/*!********************************************!*\
  !*** ./src/components/ResponseHandler.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponseHandler: () => (/* binding */ ResponseHandler),
/* harmony export */   createCheckResponse: () => (/* binding */ createCheckResponse),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   hasError: () => (/* binding */ hasError),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isLoading: () => (/* binding */ isLoading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types.ts");



const isLoading = (response) => {
    const { feedback } = response;
    return feedback ? feedback.status === _types__WEBPACK_IMPORTED_MODULE_2__.FeedbackStatus.loading : true;
};
const hasError = (response) => {
    const { feedback } = response;
    return feedback ? feedback.status === _types__WEBPACK_IMPORTED_MODULE_2__.FeedbackStatus.error : false;
};
const isEmpty = (response) => {
    const { data } = response;
    return ([null, undefined].includes(data) ||
        (typeof data === 'object' && Object.keys(data).length === 0));
};
function createCheckResponse(responseArray) {
    return (check, customCheck) => {
        const checkFunc = customCheck ? customCheck : check;
        return responseArray.find(checkFunc);
    };
}
const mapResponses = (0,memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])((responseArray) => responseArray.map((el) => el.data));
function ResponseHandler({ children, response, responses, loadingView = null, emptyView = null, errorView = null, isEmpty: customIsEmpty, isLoading: customIsLoading, hasError: customHasError, }) {
    const responseArray = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const result = !!response ? [response] : responses;
        return result || [];
    }, [response, responses]);
    const checkResponse = createCheckResponse(responseArray);
    const responseWithError = checkResponse(hasError, customHasError);
    if (responseWithError) {
        return typeof errorView === 'function'
            ? errorView(responseWithError.error)
            : errorView;
    }
    if (checkResponse(isLoading, customIsLoading)) {
        return loadingView;
    }
    if (checkResponse(isEmpty, customIsEmpty)) {
        return emptyView;
    }
    const data = mapResponses(responseArray);
    return children(data);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseHandler);


/***/ }),

/***/ "./src/formatters/useAccountDateFormat.tsx":
/*!*************************************************!*\
  !*** ./src/formatters/useAccountDateFormat.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useAccountDateFormat: () => (/* binding */ useAccountDateFormat)
/* harmony export */ });
/* harmony import */ var _hooks_useClientInvoke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useClientInvoke */ "./src/hooks/useClientInvoke.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types.ts");


function useAccountDateFormat(date) {
    return (0,_hooks_useClientInvoke__WEBPACK_IMPORTED_MODULE_0__["default"])(_types__WEBPACK_IMPORTED_MODULE_1__.ClientInvokeOptions.formatDate, date, _types__WEBPACK_IMPORTED_MODULE_1__.ClientInvokeOptions.accountTimezone);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAccountDateFormat);


/***/ }),

/***/ "./src/formatters/useAccountDateTimeFormat.tsx":
/*!*****************************************************!*\
  !*** ./src/formatters/useAccountDateTimeFormat.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useAccountDateTimeFormat: () => (/* binding */ useAccountDateTimeFormat)
/* harmony export */ });
/* harmony import */ var _hooks_useClientInvoke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useClientInvoke */ "./src/hooks/useClientInvoke.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types.ts");


function useAccountDateTimeFormat(date) {
    return (0,_hooks_useClientInvoke__WEBPACK_IMPORTED_MODULE_0__["default"])(_types__WEBPACK_IMPORTED_MODULE_1__.ClientInvokeOptions.formatDateAndTime, date, _types__WEBPACK_IMPORTED_MODULE_1__.ClientInvokeOptions.accountTimezone);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAccountDateTimeFormat);


/***/ }),

/***/ "./src/formatters/useCurrencyFormat.tsx":
/*!**********************************************!*\
  !*** ./src/formatters/useCurrencyFormat.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useCurrencyFormat: () => (/* binding */ useCurrencyFormat)
/* harmony export */ });
/* harmony import */ var _hooks_useClientInvoke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useClientInvoke */ "./src/hooks/useClientInvoke.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types.ts");


function useCurrencyFormat(amount, currency) {
    return (0,_hooks_useClientInvoke__WEBPACK_IMPORTED_MODULE_0__["default"])(_types__WEBPACK_IMPORTED_MODULE_1__.ClientInvokeOptions.formatCurrency, amount, currency);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCurrencyFormat);


/***/ }),

/***/ "./src/formatters/useFormattedCurrency.tsx":
/*!*************************************************!*\
  !*** ./src/formatters/useFormattedCurrency.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useFormattedCurrency: () => (/* binding */ useFormattedCurrency)
/* harmony export */ });
/* harmony import */ var _useCurrencyFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCurrencyFormat */ "./src/formatters/useCurrencyFormat.tsx");

const useFormattedCurrency = (amount, currency) => {
    const { data: formattedCurrency, error } = (0,_useCurrencyFormat__WEBPACK_IMPORTED_MODULE_0__.useCurrencyFormat)(amount, currency);
    if (error) {
        return currency ? `${currency} ${amount}` : `${amount}`;
    }
    return formattedCurrency || '';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFormattedCurrency);


/***/ }),

/***/ "./src/formatters/useFormattedDate.tsx":
/*!*********************************************!*\
  !*** ./src/formatters/useFormattedDate.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useFormattedDate: () => (/* binding */ useFormattedDate)
/* harmony export */ });
/* harmony import */ var _useAccountDateFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAccountDateFormat */ "./src/formatters/useAccountDateFormat.tsx");

const formatDateToDefault = (date) => {
    return date.toLocaleDateString();
};
const useFormattedDate = (date) => {
    const { data, error } = (0,_useAccountDateFormat__WEBPACK_IMPORTED_MODULE_0__.useAccountDateFormat)(date);
    let formattedDate = data;
    if (error) {
        formattedDate = formatDateToDefault(date instanceof Date ? date : new Date(date));
    }
    return formattedDate || '';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFormattedDate);


/***/ }),

/***/ "./src/formatters/useFormattedDateTime.tsx":
/*!*************************************************!*\
  !*** ./src/formatters/useFormattedDateTime.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useFormattedDateTime: () => (/* binding */ useFormattedDateTime)
/* harmony export */ });
/* harmony import */ var _useAccountDateTimeFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAccountDateTimeFormat */ "./src/formatters/useAccountDateTimeFormat.tsx");

const formatDateTimeToDefault = (date) => {
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};
const useFormattedDateTime = (date) => {
    const { data, error } = (0,_useAccountDateTimeFormat__WEBPACK_IMPORTED_MODULE_0__.useAccountDateTimeFormat)(date);
    let formattedDateTime = data;
    if (error) {
        formattedDateTime = formatDateTimeToDefault(date instanceof Date ? date : new Date(date));
    }
    return formattedDateTime || '';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFormattedDateTime);


/***/ }),

/***/ "./src/formatters/useLocalDateFormat.tsx":
/*!***********************************************!*\
  !*** ./src/formatters/useLocalDateFormat.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useLocalDateFormat: () => (/* binding */ useLocalDateFormat)
/* harmony export */ });
/* harmony import */ var _hooks_useClientInvoke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useClientInvoke */ "./src/hooks/useClientInvoke.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types.ts");


function useLocalDateFormat(date) {
    return (0,_hooks_useClientInvoke__WEBPACK_IMPORTED_MODULE_0__["default"])(_types__WEBPACK_IMPORTED_MODULE_1__.ClientInvokeOptions.formatDate, date);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalDateFormat);


/***/ }),

/***/ "./src/formatters/useLocalDateTimeFormat.tsx":
/*!***************************************************!*\
  !*** ./src/formatters/useLocalDateTimeFormat.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useLocalDateTimeFormat: () => (/* binding */ useLocalDateTimeFormat)
/* harmony export */ });
/* harmony import */ var _hooks_useClientInvoke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hooks/useClientInvoke */ "./src/hooks/useClientInvoke.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types.ts");


function useLocalDateTimeFormat(date) {
    return (0,_hooks_useClientInvoke__WEBPACK_IMPORTED_MODULE_0__["default"])(_types__WEBPACK_IMPORTED_MODULE_1__.ClientInvokeOptions.formatDateAndTime, date);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalDateTimeFormat);


/***/ }),

/***/ "./src/helpers/getAppContextAsync.ts":
/*!*******************************************!*\
  !*** ./src/helpers/getAppContextAsync.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAppContextAsync: () => (/* binding */ getAppContextAsync)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const getAppContextAsync = (client) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    return yield client.context();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAppContextAsync);


/***/ }),

/***/ "./src/helpers/mergeFeedbacks.ts":
/*!***************************************!*\
  !*** ./src/helpers/mergeFeedbacks.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   mergeFeedbacks: () => (/* binding */ mergeFeedbacks)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/types.ts");

function mergeFeedbacks(feedbacks) {
    return feedbacks.reduce((result, feedback) => {
        if (!feedback) {
            return result;
        }
        else if (feedback.status === _types__WEBPACK_IMPORTED_MODULE_0__.FeedbackStatus.error) {
            return Object.assign({}, feedback);
        }
        else if (feedback.status === _types__WEBPACK_IMPORTED_MODULE_0__.FeedbackStatus.loading &&
            (!result.status || result.status === _types__WEBPACK_IMPORTED_MODULE_0__.FeedbackStatus.success)) {
            return Object.assign({}, feedback);
        }
        else if (feedback.status === _types__WEBPACK_IMPORTED_MODULE_0__.FeedbackStatus.success && !result.status) {
            return Object.assign({}, feedback);
        }
        return result;
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeFeedbacks);


/***/ }),

/***/ "./src/hooks/useClientGet.tsx":
/*!************************************!*\
  !*** ./src/hooks/useClientGet.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useClientGet: () => (/* binding */ useClientGet)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/ZAFClientContext */ "./src/providers/ZAFClientContext.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./src/types.ts");
/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useCounter */ "./src/hooks/useCounter.tsx");





function useClientGet(path, dependencies = [], options = { skip: false }) {
    const client = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_2__.ZAFClientContext);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [feedback, setFeedback] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { counter, increment: refetch } = (0,_useCounter__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const getData = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_3__.FeedbackStatus.loading });
        try {
            if (!client) {
                throw new Error('You forgot to use ZAFClientContext');
            }
            const result = yield client.get(path);
            setData(result[path]);
            setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_3__.FeedbackStatus.success });
            if (result.errors && Object.keys(result.errors).length > 0) {
                setError(result.errors);
                setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_3__.FeedbackStatus.error });
            }
        }
        catch (e) {
            setError(e);
            setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_3__.FeedbackStatus.error });
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!options.skip) {
            getData();
        }
    }, [path, counter, ...dependencies]);
    return { data, error, feedback, refetch };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClientGet);


/***/ }),

/***/ "./src/hooks/useClientHeight.tsx":
/*!***************************************!*\
  !*** ./src/hooks/useClientHeight.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useClientHeight: () => (/* binding */ useClientHeight)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/ZAFClientContext */ "./src/providers/ZAFClientContext.tsx");


/** Resizes iframe height whenever argument changes */
const useClientHeight = (height) => {
    const client = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_1__.ZAFClientContext);
    if (!client) {
        throw new Error('You forgot to use ZAFClientContext');
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        client.invoke('resize', { height });
    }, [height]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClientHeight);


/***/ }),

/***/ "./src/hooks/useClientInvoke.tsx":
/*!***************************************!*\
  !*** ./src/hooks/useClientInvoke.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useClientInvoke: () => (/* binding */ useClientInvoke)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/ZAFClientContext */ "./src/providers/ZAFClientContext.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "./src/types.ts");




function useClientInvoke(name, ...options) {
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [feedback, setFeedback] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const client = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_2__.ZAFClientContext);
    const invokeFunc = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_3__.FeedbackStatus.loading });
        try {
            if (!client) {
                throw new Error('You forgot to use ZAFClientContext');
            }
            const result = yield client.invoke(name, ...options);
            setData(result[name]);
            setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_3__.FeedbackStatus.success });
            if (result.errors && Object.keys(result.errors).length > 0) {
                setError(result.errors);
                setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_3__.FeedbackStatus.error });
            }
        }
        catch (e) {
            setError(e);
            setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_3__.FeedbackStatus.error });
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        invokeFunc();
    }, []);
    return { data, error, feedback };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClientInvoke);


/***/ }),

/***/ "./src/hooks/useClientRequest.tsx":
/*!****************************************!*\
  !*** ./src/hooks/useClientRequest.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useClientRequest: () => (/* binding */ useClientRequest)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types.ts");
/* harmony import */ var _providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/ZAFClientContext */ "./src/providers/ZAFClientContext.tsx");
/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useCounter */ "./src/hooks/useCounter.tsx");





const cache = {};
function useClientRequest(url, options = { skip: false }, dependencies, cacheKey) {
    const client = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_3__.ZAFClientContext);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [feedback, setFeedback] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { counter, increment: refetch } = (0,_useCounter__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const performRequest = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_2__.FeedbackStatus.loading });
        try {
            if (!client) {
                throw new Error('You forgot to use ZAFClientContext');
            }
            if (dependencies && dependencies.some((item) => !item)) {
                return;
            }
            let clientRequest;
            const { transformResponse, skip } = options, requestOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(options, ["transformResponse", "skip"]);
            if (cacheKey && cache[cacheKey]) {
                clientRequest = cache[cacheKey];
            }
            else {
                clientRequest = client.request(Object.assign({ url }, requestOptions));
                if (cacheKey)
                    cache[cacheKey] = clientRequest;
            }
            const response = yield clientRequest;
            setData(transformResponse ? transformResponse(response, data) : response);
            setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_2__.FeedbackStatus.success });
        }
        catch (e) {
            if (cacheKey)
                delete cache[cacheKey];
            // prevents by keeping data from previous request
            // which sometimes caused that ResponseHandler acted unexpectedly
            setData(null);
            setError(e);
            setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_2__.FeedbackStatus.error });
        }
    });
    const deps = dependencies ? dependencies : [];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (!options.skip) {
            performRequest();
        }
    }, [url, counter, cacheKey, ...deps]);
    return {
        data,
        feedback,
        error,
        refetch,
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClientRequest);


/***/ }),

/***/ "./src/hooks/useClientRequestWithAuth.tsx":
/*!************************************************!*\
  !*** ./src/hooks/useClientRequestWithAuth.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useClientRequestWithAuth: () => (/* binding */ useClientRequestWithAuth)
/* harmony export */ });
/* harmony import */ var _useClientRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useClientRequest */ "./src/hooks/useClientRequest.tsx");

/* parameter of type 'oauth' has to be added to manifest.json
  {
    "name" : "access_token",
    "type": "oauth"
  }
*/
function useClientRequestWithAuth(url, options = { skip: false }, dependencies, cacheKey) {
    const response = (0,_useClientRequest__WEBPACK_IMPORTED_MODULE_0__["default"])(url, Object.assign({ secure: true, dataType: 'json', contentType: 'application/json', headers: { authorization: 'Bearer {{setting.access_token}}' } }, options), dependencies, cacheKey);
    return response;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useClientRequestWithAuth);


/***/ }),

/***/ "./src/hooks/useCounter.tsx":
/*!**********************************!*\
  !*** ./src/hooks/useCounter.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useCounter = () => {
    const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const increment = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setCounter((c) => c + 1), []);
    return {
        counter,
        increment,
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCounter);


/***/ }),

/***/ "./src/hooks/useSellContactEmail.tsx":
/*!*******************************************!*\
  !*** ./src/hooks/useSellContactEmail.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useSellContactEmail: () => (/* binding */ useSellContactEmail)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types.ts");
/* harmony import */ var _providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/ZAFClientContext */ "./src/providers/ZAFClientContext.tsx");
/* harmony import */ var _helpers_getAppContextAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/getAppContextAsync */ "./src/helpers/getAppContextAsync.ts");





const API_EMAIL_FIELD_PER_LOCATION = {
    [_types__WEBPACK_IMPORTED_MODULE_2__.AppLocations.personCard]: 'contact.email',
    [_types__WEBPACK_IMPORTED_MODULE_2__.AppLocations.companyCard]: 'contact.email',
    [_types__WEBPACK_IMPORTED_MODULE_2__.AppLocations.leadCard]: 'lead.email',
    [_types__WEBPACK_IMPORTED_MODULE_2__.AppLocations.dealCard]: 'deal.contact.email',
};
const getSellContactEmail = (client, location) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
    const contactEmailField = API_EMAIL_FIELD_PER_LOCATION[location];
    if (!contactEmailField) {
        throw new Error(`Unsupported location: ${location}`);
    }
    const result = yield client.get(contactEmailField);
    if (result.errors && Object.keys(result.errors).length > 0)
        throw new Error(JSON.stringify(result.errors));
    return result[contactEmailField];
});
function useSellContactEmail() {
    const client = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_3__.ZAFClientContext);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [feedback, setFeedback] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const getSellContactEmailForLocation = () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        if (!client) {
            throw new Error('You forgot to use ZAFClientContext');
        }
        setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_2__.FeedbackStatus.loading });
        try {
            const { location } = yield (0,_helpers_getAppContextAsync__WEBPACK_IMPORTED_MODULE_4__.getAppContextAsync)(client);
            const result = yield getSellContactEmail(client, location);
            setData(result);
            setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_2__.FeedbackStatus.success });
            // listens to the contact email change
            client.on(`${API_EMAIL_FIELD_PER_LOCATION[location]}.changed`, (property) => {
                setData(property.newValue);
            });
        }
        catch (e) {
            setError(e);
            setFeedback({ status: _types__WEBPACK_IMPORTED_MODULE_2__.FeedbackStatus.error });
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        getSellContactEmailForLocation();
    }, []);
    return {
        data,
        error,
        feedback,
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSellContactEmail);


/***/ }),

/***/ "./src/providers/ZAFClientContext.tsx":
/*!********************************************!*\
  !*** ./src/providers/ZAFClientContext.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZAFClientContext: () => (/* binding */ ZAFClientContext),
/* harmony export */   ZAFClientContextProvider: () => (/* binding */ ZAFClientContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// ZAF_CLIENT has to be provided by context provider
const ZAF_CLIENT = undefined;
const ZAFClientContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(ZAF_CLIENT);
const ZAFClientContextProvider = ZAFClientContext.Provider;


/***/ }),

/***/ "./src/test/flushPromises.ts":
/*!***********************************!*\
  !*** ./src/test/flushPromises.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   flushPromises: () => (/* binding */ flushPromises)
/* harmony export */ });
// If there are promise callbacks already in javascript's queue pending to be processed at the time
// setImmediate is called, then these will be processed before the callback given
// to setImmediate is called. Therefore the new promise being generated in this
// library's flushPromises is guaranteed to resolve after the pending promises are resolved.
const flushPromises = () => {
    return new Promise((resolve) => setImmediate(resolve));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flushPromises);


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLocations: () => (/* binding */ AppLocations),
/* harmony export */   ClientInvokeOptions: () => (/* binding */ ClientInvokeOptions),
/* harmony export */   FeedbackStatus: () => (/* binding */ FeedbackStatus),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
var AppLocations;
(function (AppLocations) {
    AppLocations["dealCard"] = "deal_card";
    AppLocations["leadCard"] = "lead_card";
    AppLocations["personCard"] = "person_card";
    AppLocations["companyCard"] = "company_card";
    AppLocations["modal"] = "modal";
})(AppLocations || (AppLocations = {}));
var FeedbackStatus;
(function (FeedbackStatus) {
    FeedbackStatus["success"] = "success";
    FeedbackStatus["error"] = "error";
    FeedbackStatus["loading"] = "loading";
})(FeedbackStatus || (FeedbackStatus = {}));
var ClientInvokeOptions;
(function (ClientInvokeOptions) {
    ClientInvokeOptions["accountTimezone"] = "account";
    ClientInvokeOptions["formatDate"] = "formatDate";
    ClientInvokeOptions["formatDateAndTime"] = "formatDateAndTime";
    ClientInvokeOptions["formatCurrency"] = "formatCurrency";
})(ClientInvokeOptions || (ClientInvokeOptions = {}));
const version = '0.0.5';


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLocations: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_18__.AppLocations),
/* harmony export */   ClientInvokeOptions: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_18__.ClientInvokeOptions),
/* harmony export */   FeedbackStatus: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_18__.FeedbackStatus),
/* harmony export */   ResponseHandler: () => (/* reexport safe */ _components_ResponseHandler__WEBPACK_IMPORTED_MODULE_0__.ResponseHandler),
/* harmony export */   ZAFClientContext: () => (/* reexport safe */ _providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_14__.ZAFClientContext),
/* harmony export */   ZAFClientContextProvider: () => (/* reexport safe */ _providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_14__.ZAFClientContextProvider),
/* harmony export */   flushPromises: () => (/* reexport safe */ _test_flushPromises__WEBPACK_IMPORTED_MODULE_15__.flushPromises),
/* harmony export */   getAppContextAsync: () => (/* reexport safe */ _helpers_getAppContextAsync__WEBPACK_IMPORTED_MODULE_17__.getAppContextAsync),
/* harmony export */   hasError: () => (/* reexport safe */ _components_ResponseHandler__WEBPACK_IMPORTED_MODULE_0__.hasError),
/* harmony export */   mergeFeedbacks: () => (/* reexport safe */ _helpers_mergeFeedbacks__WEBPACK_IMPORTED_MODULE_16__.mergeFeedbacks),
/* harmony export */   useAccountDateFormat: () => (/* reexport safe */ _formatters_useAccountDateFormat__WEBPACK_IMPORTED_MODULE_10__.useAccountDateFormat),
/* harmony export */   useAccountDateTimeFormat: () => (/* reexport safe */ _formatters_useAccountDateTimeFormat__WEBPACK_IMPORTED_MODULE_12__.useAccountDateTimeFormat),
/* harmony export */   useClientGet: () => (/* reexport safe */ _hooks_useClientGet__WEBPACK_IMPORTED_MODULE_2__.useClientGet),
/* harmony export */   useClientHeight: () => (/* reexport safe */ _hooks_useClientHeight__WEBPACK_IMPORTED_MODULE_1__.useClientHeight),
/* harmony export */   useClientRequest: () => (/* reexport safe */ _hooks_useClientRequest__WEBPACK_IMPORTED_MODULE_3__.useClientRequest),
/* harmony export */   useClientRequestWithAuth: () => (/* reexport safe */ _hooks_useClientRequestWithAuth__WEBPACK_IMPORTED_MODULE_4__.useClientRequestWithAuth),
/* harmony export */   useCurrencyFormat: () => (/* reexport safe */ _formatters_useCurrencyFormat__WEBPACK_IMPORTED_MODULE_13__.useCurrencyFormat),
/* harmony export */   useFormattedCurrency: () => (/* reexport safe */ _formatters_useFormattedCurrency__WEBPACK_IMPORTED_MODULE_6__.useFormattedCurrency),
/* harmony export */   useFormattedDate: () => (/* reexport safe */ _formatters_useFormattedDate__WEBPACK_IMPORTED_MODULE_7__.useFormattedDate),
/* harmony export */   useFormattedDateTime: () => (/* reexport safe */ _formatters_useFormattedDateTime__WEBPACK_IMPORTED_MODULE_8__.useFormattedDateTime),
/* harmony export */   useLocalDateFormat: () => (/* reexport safe */ _formatters_useLocalDateFormat__WEBPACK_IMPORTED_MODULE_9__.useLocalDateFormat),
/* harmony export */   useLocalDateTimeFormat: () => (/* reexport safe */ _formatters_useLocalDateTimeFormat__WEBPACK_IMPORTED_MODULE_11__.useLocalDateTimeFormat),
/* harmony export */   useSellContactEmail: () => (/* reexport safe */ _hooks_useSellContactEmail__WEBPACK_IMPORTED_MODULE_5__.useSellContactEmail),
/* harmony export */   version: () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_18__.version)
/* harmony export */ });
/* harmony import */ var _components_ResponseHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ResponseHandler */ "./src/components/ResponseHandler.tsx");
/* harmony import */ var _hooks_useClientHeight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useClientHeight */ "./src/hooks/useClientHeight.tsx");
/* harmony import */ var _hooks_useClientGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useClientGet */ "./src/hooks/useClientGet.tsx");
/* harmony import */ var _hooks_useClientRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useClientRequest */ "./src/hooks/useClientRequest.tsx");
/* harmony import */ var _hooks_useClientRequestWithAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useClientRequestWithAuth */ "./src/hooks/useClientRequestWithAuth.tsx");
/* harmony import */ var _hooks_useSellContactEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSellContactEmail */ "./src/hooks/useSellContactEmail.tsx");
/* harmony import */ var _formatters_useFormattedCurrency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatters/useFormattedCurrency */ "./src/formatters/useFormattedCurrency.tsx");
/* harmony import */ var _formatters_useFormattedDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formatters/useFormattedDate */ "./src/formatters/useFormattedDate.tsx");
/* harmony import */ var _formatters_useFormattedDateTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formatters/useFormattedDateTime */ "./src/formatters/useFormattedDateTime.tsx");
/* harmony import */ var _formatters_useLocalDateFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formatters/useLocalDateFormat */ "./src/formatters/useLocalDateFormat.tsx");
/* harmony import */ var _formatters_useAccountDateFormat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formatters/useAccountDateFormat */ "./src/formatters/useAccountDateFormat.tsx");
/* harmony import */ var _formatters_useLocalDateTimeFormat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formatters/useLocalDateTimeFormat */ "./src/formatters/useLocalDateTimeFormat.tsx");
/* harmony import */ var _formatters_useAccountDateTimeFormat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./formatters/useAccountDateTimeFormat */ "./src/formatters/useAccountDateTimeFormat.tsx");
/* harmony import */ var _formatters_useCurrencyFormat__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formatters/useCurrencyFormat */ "./src/formatters/useCurrencyFormat.tsx");
/* harmony import */ var _providers_ZAFClientContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./providers/ZAFClientContext */ "./src/providers/ZAFClientContext.tsx");
/* harmony import */ var _test_flushPromises__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./test/flushPromises */ "./src/test/flushPromises.ts");
/* harmony import */ var _helpers_mergeFeedbacks__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/mergeFeedbacks */ "./src/helpers/mergeFeedbacks.ts");
/* harmony import */ var _helpers_getAppContextAsync__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/getAppContextAsync */ "./src/helpers/getAppContextAsync.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./types */ "./src/types.ts");
// components

// client hooks





// formatters








// providers

// helpers






})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});