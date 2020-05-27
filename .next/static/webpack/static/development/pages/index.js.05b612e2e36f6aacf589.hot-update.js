webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ServiceCard.jsx":
/*!************************************!*\
  !*** ./components/ServiceCard.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Tim\\Desktop\\React_projects\\shopify-portfolio\\components\\ServiceCard.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var calc = function calc(x, y) {
  return [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
};

var trans = function trans(x, y, s) {
  return "perspective(600px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(").concat(s, ")");
};

console.log(calc());

var ServicesCard = function ServicesCard(props) {
  _s();

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(function () {
    return {
      xys: [0, 0, 1],
      config: {
        mass: 5,
        tension: 350,
        friction: 40
      }
    };
  }),
      _useSpring2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
      propsAni = _useSpring2[0],
      set = _useSpring2[1];

  return __jsx("div", {
    className: "service-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.image,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "service-card-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 18
    }
  }, props.header)), __jsx("div", {
    className: "service-card-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, props.content)), __jsx("div", {
    className: "service-card-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "Find Our More")));
};

_s(ServicesCard, "ms35i0ezlUVtCiljdN1THTXv464=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"]];
});

_c = ServicesCard;
/* harmony default export */ __webpack_exports__["default"] = (ServicesCard);

var _c;

$RefreshReg$(_c, "ServicesCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlcnZpY2VDYXJkLmpzeCJdLCJuYW1lcyI6WyJjYWxjIiwieCIsInkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJ0cmFucyIsInMiLCJjb25zb2xlIiwibG9nIiwiU2VydmljZXNDYXJkIiwicHJvcHMiLCJ1c2VTcHJpbmciLCJ4eXMiLCJjb25maWciLCJtYXNzIiwidGVuc2lvbiIsImZyaWN0aW9uIiwicHJvcHNBbmkiLCJzZXQiLCJpbWFnZSIsImhlYWRlciIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FBVSxDQUFDLEVBQUVBLENBQUMsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLENBQTNCLElBQWdDLEVBQWpDLEVBQXFDLENBQUNILENBQUMsR0FBR0UsTUFBTSxDQUFDRSxVQUFQLEdBQW9CLENBQXpCLElBQThCLEVBQW5FLEVBQXVFLEdBQXZFLENBQVY7QUFBQSxDQUFiOztBQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNMLENBQUQsRUFBSUMsQ0FBSixFQUFPSyxDQUFQO0FBQUEsOENBQTJDTixDQUEzQywwQkFBNERDLENBQTVELHdCQUEyRUssQ0FBM0U7QUFBQSxDQUFkOztBQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsSUFBSSxFQUFoQjs7QUFHQSxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxtQkFDSkMsOERBQVMsQ0FBQztBQUFBLFdBQU87QUFBRUMsU0FBRyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQVA7QUFBa0JDLFlBQU0sRUFBRTtBQUFFQyxZQUFJLEVBQUUsQ0FBUjtBQUFXQyxlQUFPLEVBQUUsR0FBcEI7QUFBeUJDLGdCQUFRLEVBQUU7QUFBbkM7QUFBMUIsS0FBUDtBQUFBLEdBQUQsQ0FETDtBQUFBO0FBQUEsTUFDckJDLFFBRHFCO0FBQUEsTUFDWEMsR0FEVzs7QUFHNUIsU0FDSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBRVIsS0FBSyxDQUFDUyxLQUFoQjtBQUF1QixPQUFHLEVBQUMsRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVQsS0FBSyxDQUFDVSxNQUFWLENBREwsQ0FGSixFQUtJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlWLEtBQUssQ0FBQ1csT0FBVixDQURKLENBTEosRUFRSTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixDQVJKLENBREo7QUFlSCxDQWxCRDs7R0FBTVosWTtVQUNzQkUsc0Q7OztLQUR0QkYsWTtBQW9CU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjA1YjYxMmUyZTM2ZjZhYWNmNTg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJ1xyXG5cclxuY29uc3QgY2FsYyA9ICh4LCB5KSA9PiBbLSh5IC0gd2luZG93LmlubmVySGVpZ2h0IC8gMikgLyAyMCwgKHggLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC8gMjAsIDEuMV1cclxuY29uc3QgdHJhbnMgPSAoeCwgeSwgcykgPT4gYHBlcnNwZWN0aXZlKDYwMHB4KSByb3RhdGVYKCR7eH1kZWcpIHJvdGF0ZVkoJHt5fWRlZykgc2NhbGUoJHtzfSlgXHJcblxyXG5jb25zb2xlLmxvZyhjYWxjKCkpO1xyXG5cclxuXHJcbmNvbnN0IFNlcnZpY2VzQ2FyZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3Byb3BzQW5pLCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7IHh5czogWzAsIDAsIDFdLCBjb25maWc6IHsgbWFzczogNSwgdGVuc2lvbjogMzUwLCBmcmljdGlvbjogNDAgfSB9KSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNhcmRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1jYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgIDxwPntwcm9wcy5oZWFkZXJ9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Byb3BzLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNhcmQtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5GaW5kIE91ciBNb3JlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=