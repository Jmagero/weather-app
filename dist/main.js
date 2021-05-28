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

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showWeather\": () => (/* binding */ showWeather),\n/* harmony export */   \"fahrenheit\": () => (/* binding */ fahrenheit),\n/* harmony export */   \"celcius\": () => (/* binding */ celcius)\n/* harmony export */ });\nlet  fahrenheit;\r\nlet celcius;\r\n\r\nconst showWeather = (d) => { \r\n  celcius = Math.round(parseFloat(d.main.temp) - 273.15);\r\n  fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);\r\n  const name = d.sys.country;\r\n  const city = d.name;\r\n  const visibility = Math.round(d.visibility / 1000);\r\n  const wind = d.wind.speed;\r\n  const { humidity } = d.main;\r\n  const { description } = d.weather[0];\r\n\r\n  document.getElementById('temp').innerText = `temp: ${celcius}°C`\r\n  document.getElementById('city').innerHTML = ` ${city},${name}`;\r\n  document.getElementById('visibility').innerText = `Visibility:${visibility}km`;\r\n  document.getElementById('wind').innerText = `Wind Speed: ${wind}m/s`;\r\n  document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;\r\n  document.getElementById('description').innerText = description;\r\n\r\n  if (description.indexOf('rain') > 0) {\r\n    document.body.className = 'rainy';\r\n  } else if (description.indexOf('cloud') > 0) {\r\n    document.body.className = 'cloudy';\r\n  } else if (description.indexOf('sunny') > 0) {\r\n    document.body.className = 'sunny';\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/display.js?");

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ \"./src/utility.js\");\n\r\n\r\n\r\nfunction fetchData(country) {\r\n  const url = `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${_utility__WEBPACK_IMPORTED_MODULE_1__.default}`;\r\n  fetch(url, { mode: 'cors' })\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      (0,_display__WEBPACK_IMPORTED_MODULE_0__.showWeather)(data)\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n//# sourceURL=webpack://weather-app/./src/fetch.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ \"./src/fetch.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\r\n\r\n\r\n\r\nconst form = document.getElementById('form');\r\nconst checkbox = document.getElementById('checkbox');\r\nlet currenttemp = document.getElementById('temp');\r\n\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const country = document.getElementById('location').value;\r\n  (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.default)(country);\r\n});\r\n\r\ncheckbox.addEventListener('change', (event) => {\r\n  if (event.currentTarget.checked) {\r\n    currenttemp.textContent = `temp: ${_display__WEBPACK_IMPORTED_MODULE_2__.fahrenheit}°F`;\r\n  } else {\r\n    currenttemp.textContent =  `temp: ${_display__WEBPACK_IMPORTED_MODULE_2__.celcius}°C`;\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/script.js?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst api = '4ea782e9c99b65d202507144f946ba05';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n//# sourceURL=webpack://weather-app/./src/utility.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;