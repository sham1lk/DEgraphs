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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Controller/myChart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Controller/myChart.js":
/*!***********************************!*\
  !*** ./src/Controller/myChart.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Model_RK_method_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model/RK_method.js */ \"./src/Model/RK_method.js\");\n/* harmony import */ var _Model_Euler_method_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/Euler_method.js */ \"./src/Model/Euler_method.js\");\n/* harmony import */ var _Model_Exact_method_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Model/Exact_method.js */ \"./src/Model/Exact_method.js\");\n/* harmony import */ var _Model_Imp_Euler_method_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/Imp_Euler_method.js */ \"./src/Model/Imp_Euler_method.js\");\n/* harmony import */ var _View_Chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../View/Chart.js */ \"./src/View/Chart.js\");\n\n\n\n\n\n\n\"use strict\";\n\n\n\n\n$(\"#renderBtn\").click(\n\n    function() {\n        let myChart = new _View_Chart_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Solutions\",\"myChart\",\"mcontainer\");\n        let myChart1 = new _View_Chart_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Global errors\",\"myChart1\",\"mcontainer1\");\n        let myChart2 = new _View_Chart_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"Local errors\",\"myChart2\",\"mcontainer2\");\n        myChart.createChart();\n        myChart1.createChart();\n        myChart2.createChart();\n        let x0 = document.getElementById(\"txt1\").value;\n        let y0 = document.getElementById(\"txt2\").value;\n        let x = document.getElementById(\"txt3\").value;\n        let h = document.getElementById(\"txt4\").value;\n        let N0 = document.getElementById(\"txt5\").value;\n        let e_method = new _Model_Euler_method_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x0,y0,x,h);\n        let i_e_method = new _Model_Imp_Euler_method_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](x0,y0,x,h);\n        let rk_method = new _Model_RK_method_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x0,y0,x,h);\n\n        if (document.getElementById(\"checkboxTwo\").checked == true) {\n            i_e_method.draw(myChart.chart);\n            i_e_method.local_err(myChart2.chart, \"IEM localerr\", \"#fcdacd\");\n            i_e_method.global_err(myChart1.chart,N0);\n        }\n        if (document.getElementById(\"checkboxOne\").checked == true) {\n            e_method.draw(myChart.chart);\n            e_method.local_err(myChart2.chart, \"E local err\", \"#dc5a7f\");\n            e_method.global_err(myChart1.chart,N0);\n\n        }\n\n        if (document.getElementById(\"checkboxThree\").checked == true) {\n            rk_method.draw(myChart.chart);\n            rk_method.local_err(myChart2.chart, \"RK local err\", \"#fba422\");\n            rk_method.global_err(myChart1.chart,N0);\n\n        }\n        let exact_method = new _Model_Exact_method_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](x0, y0, x, h);\n        exact_method.draw(myChart.chart);\n\n    }\n);\n\n//# sourceURL=webpack:///./src/Controller/myChart.js?");

/***/ }),

/***/ "./src/Model/Abstrct_method.js":
/*!*************************************!*\
  !*** ./src/Model/Abstrct_method.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Abstract_method; });\n/* harmony import */ var _View_Chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View/Chart.js */ \"./src/View/Chart.js\");\n\nclass Abstract_method {\n    constructor(x0, y0, x, n) {\n        this.x = x;\n        this.X = [x0];\n        this.Y = [y0];\n        this.n = n;\n    }\n    add(label, data, name, color, myChart) {\n        myChart.data.labels = label;\n        myChart.data.datasets.push({\n            label: name,\n            fill: false,\n            borderColor: color,\n            backgroundColor: color,\n            pointBackgroundColor: \"#55bae7\",\n            pointBorderColor: color,\n            pointHoverBackgroundColor: \"#55bae7\",\n            pointHoverBorderColor: \"#55bae7\",\n            data: data,\n        });\n        myChart.update();\n\n    }\n    local_err(myChart, name, color) {\n        let local_er = [0];\n        local_er.length = 1;\n\n        for (let i = 1; i <= this.n; i++)\n            local_er[i] = Math.abs((this.Y[i - 1] - this.solution(this.X[i - 1], this.X[0], this.Y[0])) - (this.Y[i] - this.solution(this.X[i], this.X[0], this.Y[0])));\n         for (let i = 1; i <= this.n; i++)\n            this.X[i] = this.X[i].toFixed(3);\n        this.add(this.X, local_er, name, color, myChart);\n\n    }\n    myfunction(x, y) {\n    let результат = (4 / (x * x)) - (y / x) - y * y;\n    return результат;\n    }\n\n    solution(x, x0, y0) {\n    let c = (2*Math.pow(x0, 4) - y0 * Math.pow(x0, 5)) / (2 + y0*x0);\n    return (-2/Number(x)) + ((4 * x * x * x) / (x * x * x * x + c));\n    }\n\n}\n\n//# sourceURL=webpack:///./src/Model/Abstrct_method.js?");

/***/ }),

/***/ "./src/Model/Euler_method.js":
/*!***********************************!*\
  !*** ./src/Model/Euler_method.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return E_method; });\n/* harmony import */ var _Abstrct_method_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Abstrct_method.js */ \"./src/Model/Abstrct_method.js\");\n\n\"use strict\";\nclass E_method extends _Abstrct_method_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    evaluate() {\n\n        this.Y.length = 1;\n        let h = (this.x - this.X[0]) / this.n;\n        for (let i = 1; i <= this.n; i++) {\n\n            this.X[i] = (Number(this.X[i - 1]) + Number(h));\n            this.Y[i] = Number(this.Y[i - 1]) + Number(h) * Number(super.myfunction(this.X[i - 1], this.Y[i - 1]));\n\n        }\n    }\n    draw(myChart)\n    {\n        this.evaluate();\n        super.add(this.X, this.Y, \"Euler method\", \"#55bae7\", myChart);\n    }\n    global_err(myChart1,N0){\n\n        let global_er = [];\n        let N = [];\n        let c = this.n;\n        let s = super.solution(this.x,this.X[0],this.Y[0]);\n        for(let i = N0; i<=Number(c); i++)\n        {\n            this.n = i;\n            N.push(i);\n            this.evaluate();\n            global_er.push(Math.abs(Number(this.Y[i])-Number(s)));\n            console.log(this.Y);\n        }\n        console.log(this.n);\n        super.add(N,global_er,\"E.G. err\",\"#f385da\", myChart1);\n\n    }\n\n}\n\n//# sourceURL=webpack:///./src/Model/Euler_method.js?");

/***/ }),

/***/ "./src/Model/Exact_method.js":
/*!***********************************!*\
  !*** ./src/Model/Exact_method.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Exact_method; });\n/* harmony import */ var _Abstrct_method_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Abstrct_method.js */ \"./src/Model/Abstrct_method.js\");\n\n\nclass Exact_method extends _Abstrct_method_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    evaluate() {\n\n        let h = (this.x - this.X[0]) / this.n;\n        for (let i = 1; i <= this.n; i++) {\n            this.X[i] = (Number(this.X[i - 1]) + Number(h)).toFixed(3);\n            this.Y[i] = super.solution(Number(this.X[i]), this.X[0], this.Y[0]);\n            console.log(this.Y);\n        }\n    }\n    draw(myChart)\n    {\n        this.evaluate();\n      super.add(this.X, this.Y, \"exact solution\", \"#95F095\", myChart);\n    }\n\n\n}\n\n//# sourceURL=webpack:///./src/Model/Exact_method.js?");

/***/ }),

/***/ "./src/Model/Imp_Euler_method.js":
/*!***************************************!*\
  !*** ./src/Model/Imp_Euler_method.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return I_E_method; });\n/* harmony import */ var _Abstrct_method_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Abstrct_method.js */ \"./src/Model/Abstrct_method.js\");\n\n\nclass I_E_method extends _Abstrct_method_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    evaluate() {\n        this.Y.length = 1;\n        let M = [0];\n        let local_err = [0];\n        local_err.length = 1;\n        let h = (this.x - this.X[0]) / this.n;\n        for (let i = 1; i <= this.n; i++) {\n            this.X[i] = (Number(this.X[i - 1]) + Number(h));\n            let m1 = super.myfunction(this.X[i-1], this.Y[i - 1]);\n            let m2 = super.myfunction(this.X[i],this.Y[i-1]+m1*h);\n            this.Y[i] = (Number(this.Y[i - 1]) + (m2+m1)/2 * h);\n        }\n\n        \n    }\n    draw(myChart)\n    {\n        this.evaluate();\n        super.add(this.X, this.Y, \"Improved Euler method\", \"#111\", myChart);\n    }\n    global_err(myChart1,N0){\n\n        let global_er = [];\n        let N = [];\n        let c = this.n;\n        let s = super.solution(this.x,this.X[0],this.Y[0]);\n        for(let i = N0; i<=Number(c); i++)\n        {\n            this.n = i;\n            N.push(i);\n            this.evaluate();\n            global_er.push(Math.abs(Number(this.Y[i])-Number(s)));\n            console.log(this.Y);\n        }\n        console.log(this.n);\n        super.add(N,global_er,\"I.E.G err\",\"#123456\", myChart1);\n\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/Model/Imp_Euler_method.js?");

/***/ }),

/***/ "./src/Model/RK_method.js":
/*!********************************!*\
  !*** ./src/Model/RK_method.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RK_method; });\n/* harmony import */ var _Abstrct_method_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Abstrct_method.js */ \"./src/Model/Abstrct_method.js\");\n\n\nclass RK_method extends _Abstrct_method_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    evaluate() {\n        let w;\n        this.Y.length = 1;\n\n        let h = (this.x - this.X[0]) / this.n;\n        for (let i = 1; i <= this.n; i++) {\n            let k1 = h * super.myfunction(this.X[i - 1], this.Y[i - 1]);\n            let k2 = h * super.myfunction(Number(this.X[i - 1]) + Number(0.5 * h), Number(this.Y[i - 1] + 0.5 * k1));\n            let k3 = h * super.myfunction(Number(this.X[i - 1]) + Number(0.5 * h), Number(this.Y[i - 1]) + Number(0.5 * k2));\n            let k4 = h * super.myfunction(Number(this.X[i - 1]) + Number(h), Number(this.Y[i - 1]) + k3);\n            this.Y[i] = Number(this.Y[i - 1]) + (k1 + 2 * k2 + 2 * k3 + k4)/6;\n            this.X[i] = (Number(this.X[i - 1]) + Number(h));\n        }\n\n    }\n    draw(myChart)\n    {\n        this.evaluate();\n       super.add(this.X, this.Y, \"Range-Kutta\", \"#35A095\", myChart);\n    }\n    global_err(myChart1,N0){\n\n        let global_er = [];\n        let N = [];\n        let c = this.n;\n        let s = super.solution(this.x,this.X[0],this.Y[0]);\n        for(let i = N0; i<=Number(c); i++)\n        {\n            this.n = i;\n            N.push(i);\n            this.evaluate();\n            global_er.push(Math.abs(Number(this.Y[i])-Number(s)));\n            console.log(this.Y);\n        }\n\n        super.add(N,global_er,\"R.K.G err\",\"#35A095\", myChart1);\n\n    }\n\n}\n\n//# sourceURL=webpack:///./src/Model/RK_method.js?");

/***/ }),

/***/ "./src/View/Chart.js":
/*!***************************!*\
  !*** ./src/View/Chart.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyChart; });\nclass MyChart{\n    constructor(text,id,container){\n        this.text=text;\n        this.id = id;\n        this.container = container;\n    }\n\n    createChart() {\n    document.getElementById(this.container).innerHTML = '<canvas id=\"' + this.id +'\"></canvas>';\n    let ctx = document.getElementById(this.id).getContext('2d');\n\n    Chart.defaults.global.defaultFontFamily = 'Lato';\n    Chart.defaults.global.defaultFontSize = 18;\n    Chart.defaults.global.defaultFontColor = '#777';\n\n    let myChart = new Chart(ctx, {\n        type: 'line',\n        data: {\n            labels: [],\n            datasets: []\n        },\n        options: {\n        title: {\n            display: true,\n            text: this.text\n        },\n        legend: {\n                display: true,\n                position: 'top',\n                labels: {\n                    boxWidth: 80,\n                    fontColor: 'green'\n                }\n            }\n    }\n    });\n    myChart.render();\n    this.chart = myChart;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/View/Chart.js?");

/***/ })

/******/ });