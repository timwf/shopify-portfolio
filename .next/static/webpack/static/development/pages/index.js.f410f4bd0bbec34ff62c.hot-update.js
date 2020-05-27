webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/HeroSection.jsx":
/*!************************************!*\
  !*** ./components/HeroSection.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AnimatedHeroContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimatedHeroContent */ "./components/AnimatedHeroContent.jsx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Tim\\Desktop\\React_projects\\shopify-portfolio\\components\\HeroSection.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var HeroSection = function HeroSection() {
  _s();

  // const props = useSpring({ from: {color: 'green'}, to: { color: 'red'}, delay: 100})
  var animatedStyle = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 800
  });
  var animatedStyleTwo = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 1200
  });
  var photoSlideIn = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    from: {
      marginTop: '-500px'
    },
    to: {
      marginTop: '-50px'
    }
  });
  return __jsx("div", {
    className: "hero-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "response-hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animated-hero-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_AnimatedHeroContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "hero-sub-header-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "sub-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].img, {
    style: animatedStyle,
    src: "/shopify-logo.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].h3, {
    style: animatedStyle,
    className: "hero-sub",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "shopify-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 73
    }
  }, "Shopify "), " | Partner | Developer | Designer")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: animatedStyleTwo,
    className: "tim-blurb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "blurb-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 72
    }
  }, "Hi, I'm Tim - a Bangkok based Shopify devoloper and designer. I have expierience in theme development including custom design and app development. Contact me now for a free consultation!")))), __jsx("div", {
    className: "hero-image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].img, {
    className: "me-image",
    style: photoSlideIn,
    src: "/hero-photo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }))), __jsx("div", {
    className: "hero-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/github-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/linkedin-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/twitter-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx("img", {
    src: "/codepen-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })));
};

_s(HeroSection, "1/TB1RK+N891Zhn3jYsT+ii7ePU=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"], react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"], react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"]];
});

_c = HeroSection;
/* harmony default export */ __webpack_exports__["default"] = (HeroSection);

var _c;

$RefreshReg$(_c, "HeroSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJIZXJvU2VjdGlvbiIsImFuaW1hdGVkU3R5bGUiLCJ1c2VTcHJpbmciLCJmcm9tIiwib3BhY2l0eSIsInRvIiwiZGVsYXkiLCJhbmltYXRlZFN0eWxlVHdvIiwicGhvdG9TbGlkZUluIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUtBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEI7QUFDQSxNQUFNQyxhQUFhLEdBQUdDLDhEQUFTLENBQUM7QUFDNUJDLFFBQUksRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQURzQjtBQUU1QkMsTUFBRSxFQUFFO0FBQUNELGFBQU8sRUFBRTtBQUFWLEtBRndCO0FBRzVCRSxTQUFLLEVBQUU7QUFIcUIsR0FBRCxDQUEvQjtBQUtFLE1BQU1DLGdCQUFnQixHQUFHTCw4REFBUyxDQUFDO0FBQ2pDQyxRQUFJLEVBQUU7QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FEMkI7QUFFakNDLE1BQUUsRUFBRTtBQUFDRCxhQUFPLEVBQUU7QUFBVixLQUY2QjtBQUdqQ0UsU0FBSyxFQUFFO0FBSDBCLEdBQUQsQ0FBbEM7QUFNQSxNQUFNRSxZQUFZLEdBQUdOLDhEQUFTLENBQUM7QUFDN0JDLFFBQUksRUFBRTtBQUFDTSxlQUFTLEVBQUU7QUFBWixLQUR1QjtBQUU3QkosTUFBRSxFQUFFO0FBQUNJLGVBQVMsRUFBRTtBQUFaO0FBRnlCLEdBQUQsQ0FBOUI7QUFLRixTQUNBO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLFNBQUssRUFBRVIsYUFBckI7QUFBcUMsT0FBRyxFQUFDLG1CQUF6QztBQUE2RCxPQUFHLEVBQUMsRUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxxREFBRCxDQUFVLEVBQVY7QUFBYSxTQUFLLEVBQUVBLGFBQXBCO0FBQW1DLGFBQVMsRUFBQyxVQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdEO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXhELHNDQUZKLENBREEsRUFNQSxNQUFDLHFEQUFELENBQVUsQ0FBVjtBQUFZLFNBQUssRUFBRU0sZ0JBQW5CO0FBQXFDLGFBQVMsRUFBQyxXQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJEO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrTUFBM0QsQ0FOQSxDQUZKLENBREEsRUFnQkE7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsYUFBUyxFQUFDLFVBQXhCO0FBQWtDLFNBQUssRUFBRUMsWUFBekM7QUFBdUQsT0FBRyxFQUFDLGlCQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FoQkEsQ0FESixFQXNCSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxrQkFBVDtBQUE0QixPQUFHLEVBQUMsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxPQUFHLEVBQUMsb0JBQVQ7QUFBOEIsT0FBRyxFQUFDLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQUssT0FBRyxFQUFDLG1CQUFUO0FBQTZCLE9BQUcsRUFBQyxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixPQUFHLEVBQUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBdEJKLENBREE7QUFrQ0YsQ0FwREY7O0dBQU1SLFc7VUFFb0JFLHNELEVBS0tBLHNELEVBTUpBLHNEOzs7S0FickJGLFc7QUFzRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mNDEwZjRiZDBiYmVjMzRmZjYyYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkSGVyb0NvbnRlbnQgZnJvbSBcIi4vQW5pbWF0ZWRIZXJvQ29udGVudFwiO1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSGVyb1NlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7IGZyb206IHtjb2xvcjogJ2dyZWVuJ30sIHRvOiB7IGNvbG9yOiAncmVkJ30sIGRlbGF5OiAxMDB9KVxyXG4gICAgY29uc3QgYW5pbWF0ZWRTdHlsZSA9IHVzZVNwcmluZyh7XHJcbiAgICAgICAgZnJvbToge29wYWNpdHk6IDB9LCBcclxuICAgICAgICB0bzoge29wYWNpdHk6IDF9LCBcclxuICAgICAgICBkZWxheTogODAwXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBhbmltYXRlZFN0eWxlVHdvID0gdXNlU3ByaW5nKHtcclxuICAgICAgICBmcm9tOiB7b3BhY2l0eTogMH0sIFxyXG4gICAgICAgIHRvOiB7b3BhY2l0eTogMX0sIFxyXG4gICAgICAgIGRlbGF5OiAxMjAwXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcGhvdG9TbGlkZUluID0gdXNlU3ByaW5nKHtcclxuICAgICAgICBmcm9tOiB7bWFyZ2luVG9wOiAnLTUwMHB4J30sIFxyXG4gICAgICAgIHRvOiB7bWFyZ2luVG9wOiAnLTUwcHgnfSwgXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNwb25zZS1oZXJvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZC1oZXJvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8QW5pbWF0ZWRIZXJvQ29udGVudCAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc3ViLWhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuaW1nIHN0eWxlPXthbmltYXRlZFN0eWxlfSAgc3JjPVwiL3Nob3BpZnktbG9nby5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuaDMgc3R5bGU9e2FuaW1hdGVkU3R5bGV9IGNsYXNzTmFtZT1cImhlcm8tc3ViXCI+PHNwYW4gY2xhc3NOYW1lPVwic2hvcGlmeS10ZXh0XCI+U2hvcGlmeSA8L3NwYW4+IHwgUGFydG5lciB8IERldmVsb3BlciB8IERlc2lnbmVyPC9hbmltYXRlZC5oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YW5pbWF0ZWQucCBzdHlsZT17YW5pbWF0ZWRTdHlsZVR3b30gY2xhc3NOYW1lPVwidGltLWJsdXJiXCI+PHAgY2xhc3NOYW1lPVwiYmx1cmItaW5uZXJcIj5IaSwgSSdtIFRpbSAtIGEgQmFuZ2tvayBiYXNlZCBTaG9waWZ5IGRldm9sb3BlciBhbmQgZGVzaWduZXIuIFxyXG4gICAgICAgICAgICBJIGhhdmUgZXhwaWVyaWVuY2UgaW4gdGhlbWUgZGV2ZWxvcG1lbnQgaW5jbHVkaW5nIGN1c3RvbSBkZXNpZ24gYW5kIGFwcCBkZXZlbG9wbWVudC4gQ29udGFjdCBtZSBub3cgZm9yIGEgZnJlZSBjb25zdWx0YXRpb24hXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDwvcD4gICAgXHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQucD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhbmltYXRlZC5pbWcgY2xhc3NOYW1lPVwibWUtaW1hZ2VcInN0eWxlPXtwaG90b1NsaWRlSW59IHNyYz1cIi9oZXJvLXBob3RvLnBuZ1wiLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNvY2lhbFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9naXRodWItZ3JleS5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpbmtlZGluLWdyZXkucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi90d2l0dGVyLWdyZXkucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9jb2RlcGVuLWdyZXkucG5nXCIgYWx0PVwiXCIvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbil9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9