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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
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
    delay: 700
  });
  var animatedStyleTwo = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 1000
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
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "response-hero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "animated-hero-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_AnimatedHeroContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "hero-sub-header-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "sub-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].img, {
    style: animatedStyle,
    src: "/shopify-logo.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].h3, {
    style: animatedStyle,
    className: "hero-sub",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "shopify-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 73
    }
  }, "Shopify "), " | Partner | Developer | Designer")), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].p, {
    style: animatedStyleTwo,
    className: "tim-blurb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "blurb-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 72
    }
  }, "Hi, I'm Tim - a Bangkok based Shopify devoloper and designer. I have expierience in theme development including custom design and app development. Contact me now for a free consultation!")))), __jsx("div", {
    className: "hero-image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].img, {
    className: "me-image",
    style: photoSlideIn,
    src: "/hero-photo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }))), __jsx("div", {
    className: "hero-social",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://github.com/timwf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/github-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 44
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/timothy-williams-fowler-6a04a9176/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/linkedin-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 82
    }
  })), __jsx("img", {
    src: "/twitter-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx("a", {
    href: "https://codepen.io/timwf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/codepen-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 44
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJIZXJvU2VjdGlvbiIsImFuaW1hdGVkU3R5bGUiLCJ1c2VTcHJpbmciLCJmcm9tIiwib3BhY2l0eSIsInRvIiwiZGVsYXkiLCJhbmltYXRlZFN0eWxlVHdvIiwicGhvdG9TbGlkZUluIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3RCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyw4REFBUyxDQUFDO0FBQzVCQyxRQUFJLEVBQUU7QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FEc0I7QUFFNUJDLE1BQUUsRUFBRTtBQUFDRCxhQUFPLEVBQUU7QUFBVixLQUZ3QjtBQUc1QkUsU0FBSyxFQUFFO0FBSHFCLEdBQUQsQ0FBL0I7QUFLRSxNQUFNQyxnQkFBZ0IsR0FBR0wsOERBQVMsQ0FBQztBQUNqQ0MsUUFBSSxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBRDJCO0FBRWpDQyxNQUFFLEVBQUU7QUFBQ0QsYUFBTyxFQUFFO0FBQVYsS0FGNkI7QUFHakNFLFNBQUssRUFBRTtBQUgwQixHQUFELENBQWxDO0FBTUEsTUFBTUUsWUFBWSxHQUFHTiw4REFBUyxDQUFDO0FBQzdCQyxRQUFJLEVBQUU7QUFBQ00sZUFBUyxFQUFFO0FBQVosS0FEdUI7QUFFN0JKLE1BQUUsRUFBRTtBQUFDSSxlQUFTLEVBQUU7QUFBWjtBQUZ5QixHQUFELENBQTlCO0FBS0YsU0FDQTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxREFBRCxDQUFVLEdBQVY7QUFBYyxTQUFLLEVBQUVSLGFBQXJCO0FBQXFDLE9BQUcsRUFBQyxtQkFBekM7QUFBNkQsT0FBRyxFQUFDLEVBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMscURBQUQsQ0FBVSxFQUFWO0FBQWEsU0FBSyxFQUFFQSxhQUFwQjtBQUFtQyxhQUFTLEVBQUMsVUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3RDtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUF4RCxzQ0FGSixDQURBLEVBTUEsTUFBQyxxREFBRCxDQUFVLENBQVY7QUFBWSxTQUFLLEVBQUVNLGdCQUFuQjtBQUFxQyxhQUFTLEVBQUMsV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyRDtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa01BQTNELENBTkEsQ0FGSixDQURBLEVBZ0JBO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLGFBQVMsRUFBQyxVQUF4QjtBQUFrQyxTQUFLLEVBQUVDLFlBQXpDO0FBQXVELE9BQUcsRUFBQyxpQkFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBaEJBLENBREosRUFzQkk7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBRyxRQUFJLEVBQUMsMEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQztBQUFLLE9BQUcsRUFBQyxrQkFBVDtBQUE0QixPQUFHLEVBQUMsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFuQyxDQURBLEVBRUE7QUFBRyxRQUFJLEVBQUMsZ0VBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5RTtBQUFLLE9BQUcsRUFBQyxvQkFBVDtBQUE4QixPQUFHLEVBQUMsRUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF6RSxDQUZBLEVBR0E7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsT0FBRyxFQUFDLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIQSxFQUlBO0FBQUcsUUFBSSxFQUFDLDBCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUM7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsT0FBRyxFQUFDLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbkMsQ0FKQSxDQXRCSixDQURBO0FBa0NGLENBcERGOztHQUFNUixXO1VBRW9CRSxzRCxFQUtLQSxzRCxFQU1KQSxzRDs7O0tBYnJCRixXO0FBc0RTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZjc5ZGY5MzUwZGUzYzdjMTRjMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlZEhlcm9Db250ZW50IGZyb20gXCIuL0FuaW1hdGVkSGVyb0NvbnRlbnRcIjtcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgSGVyb1NlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCBwcm9wcyA9IHVzZVNwcmluZyh7IGZyb206IHtjb2xvcjogJ2dyZWVuJ30sIHRvOiB7IGNvbG9yOiAncmVkJ30sIGRlbGF5OiAxMDB9KVxyXG4gICAgY29uc3QgYW5pbWF0ZWRTdHlsZSA9IHVzZVNwcmluZyh7XHJcbiAgICAgICAgZnJvbToge29wYWNpdHk6IDB9LCBcclxuICAgICAgICB0bzoge29wYWNpdHk6IDF9LCBcclxuICAgICAgICBkZWxheTogNzAwXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBhbmltYXRlZFN0eWxlVHdvID0gdXNlU3ByaW5nKHtcclxuICAgICAgICBmcm9tOiB7b3BhY2l0eTogMH0sIFxyXG4gICAgICAgIHRvOiB7b3BhY2l0eTogMX0sIFxyXG4gICAgICAgIGRlbGF5OiAxMDAwXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcGhvdG9TbGlkZUluID0gdXNlU3ByaW5nKHtcclxuICAgICAgICBmcm9tOiB7bWFyZ2luVG9wOiAnLTUwMHB4J30sIFxyXG4gICAgICAgIHRvOiB7bWFyZ2luVG9wOiAnLTUwcHgnfSwgXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNwb25zZS1oZXJvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZC1oZXJvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8QW5pbWF0ZWRIZXJvQ29udGVudCAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc3ViLWhlYWRlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuaW1nIHN0eWxlPXthbmltYXRlZFN0eWxlfSAgc3JjPVwiL3Nob3BpZnktbG9nby5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgICA8YW5pbWF0ZWQuaDMgc3R5bGU9e2FuaW1hdGVkU3R5bGV9IGNsYXNzTmFtZT1cImhlcm8tc3ViXCI+PHNwYW4gY2xhc3NOYW1lPVwic2hvcGlmeS10ZXh0XCI+U2hvcGlmeSA8L3NwYW4+IHwgUGFydG5lciB8IERldmVsb3BlciB8IERlc2lnbmVyPC9hbmltYXRlZC5oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YW5pbWF0ZWQucCBzdHlsZT17YW5pbWF0ZWRTdHlsZVR3b30gY2xhc3NOYW1lPVwidGltLWJsdXJiXCI+PHAgY2xhc3NOYW1lPVwiYmx1cmItaW5uZXJcIj5IaSwgSSdtIFRpbSAtIGEgQmFuZ2tvayBiYXNlZCBTaG9waWZ5IGRldm9sb3BlciBhbmQgZGVzaWduZXIuIFxyXG4gICAgICAgICAgICBJIGhhdmUgZXhwaWVyaWVuY2UgaW4gdGhlbWUgZGV2ZWxvcG1lbnQgaW5jbHVkaW5nIGN1c3RvbSBkZXNpZ24gYW5kIGFwcCBkZXZlbG9wbWVudC4gQ29udGFjdCBtZSBub3cgZm9yIGEgZnJlZSBjb25zdWx0YXRpb24hXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIDwvcD4gICAgXHJcbiAgICAgICAgICAgIDwvYW5pbWF0ZWQucD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhbmltYXRlZC5pbWcgY2xhc3NOYW1lPVwibWUtaW1hZ2VcInN0eWxlPXtwaG90b1NsaWRlSW59IHNyYz1cIi9oZXJvLXBob3RvLnBuZ1wiLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNvY2lhbFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdGltd2ZcIj48aW1nIHNyYz1cIi9naXRodWItZ3JleS5wbmdcIiBhbHQ9XCJcIi8+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGltb3RoeS13aWxsaWFtcy1mb3dsZXItNmEwNGE5MTc2L1wiPjxpbWcgc3JjPVwiL2xpbmtlZGluLWdyZXkucG5nXCIgYWx0PVwiXCIvPjwvYT5cclxuICAgICAgICA8aW1nIHNyYz1cIi90d2l0dGVyLWdyZXkucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vdGltd2ZcIj48aW1nIHNyYz1cIi9jb2RlcGVuLWdyZXkucG5nXCIgYWx0PVwiXCIvPjwvYT4gXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuKX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=