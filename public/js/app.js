/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("initApp = function() {\r\n\tfirebase.auth().onAuthStateChanged(function(user) {\r\n\t\tif (user) {\r\n\t\t\t// User is signed in.\r\n\t\t\tvar displayName = user.displayName;\r\n\t\t\tvar email = user.email;\r\n\t\t\tvar emailVerified = user.emailVerified;\r\n\t\t\tvar photoURL = user.photoURL;\r\n\t\t\tvar uid = user.uid;\r\n\t\t\tvar providerData = user.providerData;\r\n\r\n\t\t\tuser.getToken().then(function(accessToken) {\r\n\r\n\t\t\t\tdocument.getElementById('not-logged-in').style.display = 'none';\r\n\t\t\t\tdocument.getElementById('app').style.display = 'block';\r\n\r\n\t\t\t\tdocument.getElementById('account-details').textContent = displayName;\r\n\r\n\t\t\t\tdocument.getElementById('sign-out-btn').addEventListener('click', function() {\r\n\t\t\t\t\tfirebase.auth().signOut();\r\n\t\t\t\t})\r\n\r\n\t\t\t});\r\n\t\t} else {\r\n\t\t\t// User is signed out.\r\n\r\n\t\t\tdocument.getElementById('not-logged-in').style.display = 'block';\r\n\t\t\tdocument.getElementById('app').style.display = 'none';\r\n\t\t}\r\n\t}, function(error) {\r\n\t\tconsole.log(error);\r\n\t});\r\n};\r\n\r\nwindow.addEventListener('load', function() {\r\n\tinitApp()\r\n});\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvYXBwLmpzP2I3YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW5pdEFwcCA9IGZ1bmN0aW9uKCkge1xyXG5cdGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoZnVuY3Rpb24odXNlcikge1xyXG5cdFx0aWYgKHVzZXIpIHtcclxuXHRcdFx0Ly8gVXNlciBpcyBzaWduZWQgaW4uXHJcblx0XHRcdGNvbnN0IGRpc3BsYXlOYW1lID0gdXNlci5kaXNwbGF5TmFtZTtcclxuXHRcdFx0Y29uc3QgZW1haWwgPSB1c2VyLmVtYWlsO1xyXG5cdFx0XHRjb25zdCBlbWFpbFZlcmlmaWVkID0gdXNlci5lbWFpbFZlcmlmaWVkO1xyXG5cdFx0XHRjb25zdCBwaG90b1VSTCA9IHVzZXIucGhvdG9VUkw7XHJcblx0XHRcdGNvbnN0IHVpZCA9IHVzZXIudWlkO1xyXG5cdFx0XHRjb25zdCBwcm92aWRlckRhdGEgPSB1c2VyLnByb3ZpZGVyRGF0YTtcclxuXHJcblx0XHRcdHVzZXIuZ2V0VG9rZW4oKS50aGVuKGZ1bmN0aW9uKGFjY2Vzc1Rva2VuKSB7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3QtbG9nZ2VkLWluJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NvdW50LWRldGFpbHMnKS50ZXh0Q29udGVudCA9IGRpc3BsYXlOYW1lO1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi1vdXQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gVXNlciBpcyBzaWduZWQgb3V0LlxyXG5cclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdC1sb2dnZWQtaW4nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHR9XHJcblx0fSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHR9KTtcclxufTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcblx0aW5pdEFwcCgpXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);