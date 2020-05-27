webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/WorkSection.jsx":
/*!************************************!*\
  !*** ./components/WorkSection.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Tim\\Desktop\\React_projects\\shopify-portfolio\\components\\WorkSection.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var WorkSection = function WorkSection() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inview = _useState[0],
      setInview = _useState[1];

  var animatedStyle = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    transform: inview ? 'scale(1.0)' : 'scale(0.8)',
    delay: 0
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var observer = new IntersectionObserver(function (entries) {
      console.log('working');

      if (entries[0].isIntersecting === true) {
        setInview(true);
      }
    }, {
      threshold: [0]
    });
    observer.observe(document.querySelector(".service-section-container"));
    return function () {};
  }, []);
  return __jsx("div", {
    className: "work-section-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio/nordic-furniture-design",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    style: inview ? animatedStyle : null,
    className: "work-section-indi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "work-section-indi-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "wok-cover-img",
    style: {
      width: 'auto',
      height: '50px'
    },
    src: "/nordic-logo.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  })), __jsx("img", {
    src: "/nordic-cover.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio/samual-smith",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "work-section-indi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "work-section-indi-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "wok-cover-img",
    style: {
      width: 'auto',
      height: '25px'
    },
    src: "/sam-smith-logo.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })), __jsx("img", {
    src: "/samsmith-cover.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "work-section-indi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "work-section-indi-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "wok-cover-img",
    style: {
      width: 'auto',
      height: '30px'
    },
    src: "/primitive-logo.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx("img", {
    src: "/primitive-cover.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "work-section-indi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "work-section-indi-overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "wok-cover-img",
    style: {
      width: 'auto',
      height: '40px'
    },
    src: "/furbabies-logo.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })), __jsx("img", {
    src: "/furbabies-cover.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  })));
};

_s(WorkSection, "iS1E3FgYjD3VGOiQLwWBETSod/Q=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"]];
});

_c = WorkSection;
/* harmony default export */ __webpack_exports__["default"] = (WorkSection);

var _c;

$RefreshReg$(_c, "WorkSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dvcmtTZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJXb3JrU2VjdGlvbiIsInVzZVN0YXRlIiwiaW52aWV3Iiwic2V0SW52aWV3IiwiYW5pbWF0ZWRTdHlsZSIsInVzZVNwcmluZyIsInRyYW5zZm9ybSIsImRlbGF5IiwidXNlRWZmZWN0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJjb25zb2xlIiwibG9nIiwiaXNJbnRlcnNlY3RpbmciLCJ0aHJlc2hvbGQiLCJvYnNlcnZlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLEtBQUQsQ0FEZDtBQUFBLE1BQ2ZDLE1BRGU7QUFBQSxNQUNQQyxTQURPOztBQUV0QixNQUFNQyxhQUFhLEdBQUdDLDhEQUFTLENBQUM7QUFDNUJDLGFBQVMsRUFBR0osTUFBTSxHQUFHLFlBQUgsR0FBa0IsWUFEUjtBQUU1QkssU0FBSyxFQUFFO0FBRnFCLEdBQUQsQ0FBL0I7QUFNQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSUMsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCLFVBQVNDLE9BQVQsRUFBa0I7QUFDdERDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7O0FBQ0EsVUFBR0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxjQUFYLEtBQThCLElBQWpDLEVBQXNDO0FBQ3BDWCxpQkFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEO0FBQ0osS0FMYyxFQUtaO0FBQUVZLGVBQVMsRUFBRSxDQUFDLENBQUQ7QUFBYixLQUxZLENBQWY7QUFNQU4sWUFBUSxDQUFDTyxPQUFULENBQWlCQyxRQUFRLENBQUNDLGFB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QUMsRUFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBREosRUFJSTtBQUFLLE9BQUcsRUFBQyxzQkFBVDtBQUFnQyxPQUFHLEVBQUMsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBdkJBLENBREo7QUFtQ0gsQ0F4REQ7O0dBQU1wQixXO1VBRW9CSyxzRDs7O0tBRnBCTCxXO0FBMERTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuY2VhMGI5OTc1Mzg1ZmRlOTFjNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcclxuXHJcblxyXG5cclxuY29uc3QgV29ya1NlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaW52aWV3LCBzZXRJbnZpZXddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBhbmltYXRlZFN0eWxlID0gdXNlU3ByaW5nKHtcclxuICAgICAgICB0cmFuc2Zvcm06ICBpbnZpZXcgPyAnc2NhbGUoMS4wKScgOiAnc2NhbGUoMC44KScsXHJcbiAgICAgICAgZGVsYXk6IDBcclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uKGVudHJpZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dvcmtpbmcnKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZW50cmllc1swXS5pc0ludGVyc2VjdGluZyA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgc2V0SW52aWV3KHRydWUpICBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICB9LCB7IHRocmVzaG9sZDogWzBdIH0pO1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlLXNlY3Rpb24tY29udGFpbmVyXCIpKTsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstc2VjdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL3BvcnRmb2xpby9ub3JkaWMtZnVybml0dXJlLWRlc2lnblwiPlxyXG4gICAgICAgICAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXtpbnZpZXcgPyBhbmltYXRlZFN0eWxlOiBudWxsfSBjbGFzc05hbWU9XCJ3b3JrLXNlY3Rpb24taW5kaVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLXNlY3Rpb24taW5kaS1vdmVybGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3b2stY292ZXItaW1nXCIgc3R5bGU9e3t3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICc1MHB4J319IHNyYz1cIi9ub3JkaWMtbG9nby5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbm9yZGljLWNvdmVyLnBuZ1wiIGFsdD1cIlwiLz4gICAgICAgIFxyXG4gICAgICAgIDwvYW5pbWF0ZWQuZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3BvcnRmb2xpby9zYW11YWwtc21pdGhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstc2VjdGlvbi1pbmRpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1zZWN0aW9uLWluZGktb3ZlcmxheVwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIndvay1jb3Zlci1pbWdcIiBzdHlsZT17e3dpZHRoOiAnYXV0bycsIGhlaWdodDogJzI1cHgnfX0gc3JjPVwiL3NhbS1zbWl0aC1sb2dvLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NhbXNtaXRoLWNvdmVyLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLXNlY3Rpb24taW5kaVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstc2VjdGlvbi1pbmRpLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3b2stY292ZXItaW1nXCIgc3R5bGU9e3t3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICczMHB4J319IHNyYz1cIi9wcmltaXRpdmUtbG9nby5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wcmltaXRpdmUtY292ZXIucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLXNlY3Rpb24taW5kaVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstc2VjdGlvbi1pbmRpLW92ZXJsYXlcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3b2stY292ZXItaW1nXCIgc3R5bGU9e3t3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICc0MHB4J319IHNyYz1cIi9mdXJiYWJpZXMtbG9nby5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9mdXJiYWJpZXMtY292ZXIucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtTZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==