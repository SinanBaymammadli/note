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

eval("initApp = function() {\r\n\tfirebase.auth().onAuthStateChanged(function(user) {\r\n\t\tif (user) {\r\n\t\t\t// User is signed in.\r\n\t\t\tvar displayName = user.displayName;\r\n\t\t\tvar email = user.email;\r\n\t\t\tvar emailVerified = user.emailVerified;\r\n\t\t\tvar photoURL = user.photoURL;\r\n\t\t\tvar uid = user.uid;\r\n\t\t\tvar providerData = user.providerData;\r\n\t\t\tuser.getToken().then(function(accessToken) {\r\n\t\t\t\tdocument.getElementById('sign-in-status').textContent = 'Signed in';\r\n\t\t\t\tdocument.getElementById('sign-in').textContent = 'Sign out';\r\n\t\t\t\tdocument.getElementById('account-details').textContent = JSON.stringify({\r\n\t\t\t\t\tdisplayName: displayName,\r\n\t\t\t\t\temail: email,\r\n\t\t\t\t\temailVerified: emailVerified,\r\n\t\t\t\t\tphotoURL: photoURL,\r\n\t\t\t\t\tuid: uid,\r\n\t\t\t\t\taccessToken: accessToken,\r\n\t\t\t\t\tproviderData: providerData\r\n\t\t\t\t}, null, '  ');\r\n\t\t\t});\r\n\t\t} else {\r\n\t\t\t// User is signed out.\r\n\t\t\tdocument.getElementById('sign-in-status').textContent = 'Signed out';\r\n\t\t\tdocument.getElementById('sign-in').textContent = 'Sign in';\r\n\t\t\tdocument.getElementById('account-details').textContent = 'null';\r\n\t\t}\r\n\t}, function(error) {\r\n\t\tconsole.log(error);\r\n\t});\r\n};\r\n\r\nwindow.addEventListener('load', function() {\r\n\tinitApp()\r\n});\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvYXBwLmpzP2I3YzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW5pdEFwcCA9IGZ1bmN0aW9uKCkge1xyXG5cdGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoZnVuY3Rpb24odXNlcikge1xyXG5cdFx0aWYgKHVzZXIpIHtcclxuXHRcdFx0Ly8gVXNlciBpcyBzaWduZWQgaW4uXHJcblx0XHRcdHZhciBkaXNwbGF5TmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XHJcblx0XHRcdHZhciBlbWFpbCA9IHVzZXIuZW1haWw7XHJcblx0XHRcdHZhciBlbWFpbFZlcmlmaWVkID0gdXNlci5lbWFpbFZlcmlmaWVkO1xyXG5cdFx0XHR2YXIgcGhvdG9VUkwgPSB1c2VyLnBob3RvVVJMO1xyXG5cdFx0XHR2YXIgdWlkID0gdXNlci51aWQ7XHJcblx0XHRcdHZhciBwcm92aWRlckRhdGEgPSB1c2VyLnByb3ZpZGVyRGF0YTtcclxuXHRcdFx0dXNlci5nZXRUb2tlbigpLnRoZW4oZnVuY3Rpb24oYWNjZXNzVG9rZW4pIHtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi1pbi1zdGF0dXMnKS50ZXh0Q29udGVudCA9ICdTaWduZWQgaW4nO1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLWluJykudGV4dENvbnRlbnQgPSAnU2lnbiBvdXQnO1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NvdW50LWRldGFpbHMnKS50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRcdGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSxcclxuXHRcdFx0XHRcdGVtYWlsOiBlbWFpbCxcclxuXHRcdFx0XHRcdGVtYWlsVmVyaWZpZWQ6IGVtYWlsVmVyaWZpZWQsXHJcblx0XHRcdFx0XHRwaG90b1VSTDogcGhvdG9VUkwsXHJcblx0XHRcdFx0XHR1aWQ6IHVpZCxcclxuXHRcdFx0XHRcdGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcclxuXHRcdFx0XHRcdHByb3ZpZGVyRGF0YTogcHJvdmlkZXJEYXRhXHJcblx0XHRcdFx0fSwgbnVsbCwgJyAgJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gVXNlciBpcyBzaWduZWQgb3V0LlxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi1pbi1zdGF0dXMnKS50ZXh0Q29udGVudCA9ICdTaWduZWQgb3V0JztcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4nKS50ZXh0Q29udGVudCA9ICdTaWduIGluJztcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY291bnQtZGV0YWlscycpLnRleHRDb250ZW50ID0gJ251bGwnO1xyXG5cdFx0fVxyXG5cdH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblx0fSk7XHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdGluaXRBcHAoKVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);