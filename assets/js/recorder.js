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

/***/ "./src/client/js/recorder.js":
/*!***********************************!*\
  !*** ./src/client/js/recorder.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst startBtn = document.getElementById(\"startBtn\");\nconst preview = document.getElementById(\"preview\");\nlet stream;\nlet recorder;\nlet videoFile;\n\nconst handleDownload = () => {\n  const a = document.createElement(\"a\");\n  a.href = videoFile;\n  a.download = \"MyRecording.webm\";\n  document.body.appendChild(a);\n  a.click();\n};\n\nconst handleStart = () => {\n  startBtn.innerText = \"Stop Recording\";\n  startBtn.removeEventListener(\"click\", handleStart);\n  startBtn.addEventListener(\"click\", handleStop);\n  recorder = new MediaRecorder(stream, {\n    mimeType: \"video/webm\"\n  });\n\n  recorder.ondataavailable = event => {\n    videoFile = URL.createObjectURL(event.data);\n    preview.srcObject = null;\n    preview.src = videoFile;\n  };\n\n  recorder.start();\n};\n\nconst handleStop = async () => {\n  startBtn.innerText = \"Download Recording\";\n  startBtn.removeEventListener(\"click\", handleStop);\n  startBtn.addEventListener(\"click\", handleDownload);\n  recorder.stop();\n};\n\nconst init = async () => {\n  stream = await navigator.mediaDevices.getUserMedia({\n    audio: false,\n    video: true\n  });\n  preview.srcObject = stream;\n  preview.play();\n};\n\ninit();\nstartBtn.addEventListener(\"click\", handleStart);\n\n//# sourceURL=webpack://chaetube/./src/client/js/recorder.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/recorder.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;