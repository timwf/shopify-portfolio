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
  })), __jsx("a", {
    href: "https://twitter.com/TimWilliamsFow1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/twitter-grey.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 55
    }
  })), __jsx("a", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJIZXJvU2VjdGlvbiIsImFuaW1hdGVkU3R5bGUiLCJ1c2VTcHJpbmciLCJmcm9tIiwib3BhY2l0eSIsInRvIiwiZGVsYXkiLCJhbmltYXRlZFN0eWxlVHdvIiwicGhvdG9TbGlkZUluIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3RCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyw4REFBUyxDQUFDO0FBQzVCQyxRQUFJLEVBQUU7QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FEc0I7QUFFNUJDLE1BQUUsRUFBRTtBQUFDRCxhQUFPLEVBQUU7QUFBVixLQUZ3QjtBQUc1QkUsU0FBSyxFQUFFO0FBSHFCLEdBQUQsQ0FBL0I7QUFLRSxNQUFNQyxnQkFBZ0IsR0FBR0wsOERBQVMsQ0FBQztBQUNqQ0MsUUFBSSxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBRDJCO0FBRWpDQyxNQUFFLEVBQUU7QUFBQ0QsYUFBTyxFQUFFO0FBQVYsS0FGNkI7QUFHakNFLFNBQUssRUFBRTtBQUgwQixHQUFELENBQWxDO0FBTUEsTUFBTUUsWUFBWSxHQUFHTiw4REFBUyxDQUFDO0FBQzdCQyxRQUFJLEVBQUU7QUFBQ00sZUFBUyxFQUFFO0FBQVosS0FEdUI7QUFFN0JKLE1BQUUsRUFBRTtBQUFDSSxlQUFTLEVBQUU7QUFBWjtBQUZ5QixHQUFELENBQTlCO0FBS0YsU0FDQTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxREFBRCxDQUFVLEdBQVY7QUFBYyxTQUFLLEVBQUVSLGFBQXJCO0FBQXFDLE9BQUcsRUFBQyxtQkFBekM7QUFBNkQsT0FBRyxFQUFDLEVBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMscURBQUQsQ0FBVSxFQUFWO0FBQWEsU0FBSyxFQUFFQSxhQUFwQjtBQUFtQyxhQUFTLEVBQUMsVUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3RDtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUF4RCxzQ0FGSixDQURBLEVBTUEsTUFBQyxxREFBRCxDQUFVLENBQVY7QUFBWSxTQUFLLEVBQUVNLGdCQUFuQjtBQUFxQyxhQUFTLEVBQUMsV0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyRDtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa01BQTNELENBTkEsQ0FGSixDQURBLEVBZ0JBO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLGFBQVMsRUFBQyxVQUF4QjtBQUFrQyxTQUFLLEVBQUVDLFlBQXpDO0FBQXVELE9BQUcsRUFBQyxpQkFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBaEJBLENBREosRUFzQkk7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBRyxRQUFJLEVBQUMsMEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQztBQUFLLE9BQUcsRUFBQyxrQkFBVDtBQUE0QixPQUFHLEVBQUMsRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFuQyxDQURBLEVBRUE7QUFBRyxRQUFJLEVBQUMsZ0VBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5RTtBQUFLLE9BQUcsRUFBQyxvQkFBVDtBQUE4QixPQUFHLEVBQUMsRUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUF6RSxDQUZBLEVBR0E7QUFBRyxRQUFJLEVBQUMscUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QztBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixPQUFHLEVBQUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5QyxDQUhBLEVBSUE7QUFBRyxRQUFJLEVBQUMsMEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQztBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixPQUFHLEVBQUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFuQyxDQUpBLENBdEJKLENBREE7QUFrQ0YsQ0FwREY7O0dBQU1SLFc7VUFFb0JFLHNELEVBS0tBLHNELEVBTUpBLHNEOzs7S0FickJGLFc7QUFzRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xOTMyMmY3MmZlODYxOTQ4OTc3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGVkSGVyb0NvbnRlbnQgZnJvbSBcIi4vQW5pbWF0ZWRIZXJvQ29udGVudFwiO1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcclxuICAgIC8vIGNvbnN0IHByb3BzID0gdXNlU3ByaW5nKHsgZnJvbToge2NvbG9yOiAnZ3JlZW4nfSwgdG86IHsgY29sb3I6ICdyZWQnfSwgZGVsYXk6IDEwMH0pXHJcbiAgICBjb25zdCBhbmltYXRlZFN0eWxlID0gdXNlU3ByaW5nKHtcclxuICAgICAgICBmcm9tOiB7b3BhY2l0eTogMH0sIFxyXG4gICAgICAgIHRvOiB7b3BhY2l0eTogMX0sIFxyXG4gICAgICAgIGRlbGF5OiA3MDBcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGVkU3R5bGVUd28gPSB1c2VTcHJpbmcoe1xyXG4gICAgICAgIGZyb206IHtvcGFjaXR5OiAwfSwgXHJcbiAgICAgICAgdG86IHtvcGFjaXR5OiAxfSwgXHJcbiAgICAgICAgZGVsYXk6IDEwMDBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBwaG90b1NsaWRlSW4gPSB1c2VTcHJpbmcoe1xyXG4gICAgICAgIGZyb206IHttYXJnaW5Ub3A6ICctNTAwcHgnfSwgXHJcbiAgICAgICAgdG86IHttYXJnaW5Ub3A6ICctNTBweCd9LCBcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BvbnNlLWhlcm9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkLWhlcm8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxBbmltYXRlZEhlcm9Db250ZW50IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zdWItaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhbmltYXRlZC5pbWcgc3R5bGU9e2FuaW1hdGVkU3R5bGV9ICBzcmM9XCIvc2hvcGlmeS1sb2dvLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDxhbmltYXRlZC5oMyBzdHlsZT17YW5pbWF0ZWRTdHlsZX0gY2xhc3NOYW1lPVwiaGVyby1zdWJcIj48c3BhbiBjbGFzc05hbWU9XCJzaG9waWZ5LXRleHRcIj5TaG9waWZ5IDwvc3Bhbj4gfCBQYXJ0bmVyIHwgRGV2ZWxvcGVyIHwgRGVzaWduZXI8L2FuaW1hdGVkLmgzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5wIHN0eWxlPXthbmltYXRlZFN0eWxlVHdvfSBjbGFzc05hbWU9XCJ0aW0tYmx1cmJcIj48cCBjbGFzc05hbWU9XCJibHVyYi1pbm5lclwiPkhpLCBJJ20gVGltIC0gYSBCYW5na29rIGJhc2VkIFNob3BpZnkgZGV2b2xvcGVyIGFuZCBkZXNpZ25lci4gXHJcbiAgICAgICAgICAgIEkgaGF2ZSBleHBpZXJpZW5jZSBpbiB0aGVtZSBkZXZlbG9wbWVudCBpbmNsdWRpbmcgY3VzdG9tIGRlc2lnbiBhbmQgYXBwIGRldmVsb3BtZW50LiBDb250YWN0IG1lIG5vdyBmb3IgYSBmcmVlIGNvbnN1bHRhdGlvbiFcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPC9wPiAgICBcclxuICAgICAgICAgICAgPC9hbmltYXRlZC5wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGFuaW1hdGVkLmltZyBjbGFzc05hbWU9XCJtZS1pbWFnZVwic3R5bGU9e3Bob3RvU2xpZGVJbn0gc3JjPVwiL2hlcm8tcGhvdG8ucG5nXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc29jaWFsXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90aW13ZlwiPjxpbWcgc3JjPVwiL2dpdGh1Yi1ncmV5LnBuZ1wiIGFsdD1cIlwiLz48L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi90aW1vdGh5LXdpbGxpYW1zLWZvd2xlci02YTA0YTkxNzYvXCI+PGltZyBzcmM9XCIvbGlua2VkaW4tZ3JleS5wbmdcIiBhbHQ9XCJcIi8+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1RpbVdpbGxpYW1zRm93MVwiPjxpbWcgc3JjPVwiL3R3aXR0ZXItZ3JleS5wbmdcIiBhbHQ9XCJcIi8+PC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vdGltd2ZcIj48aW1nIHNyYz1cIi9jb2RlcGVuLWdyZXkucG5nXCIgYWx0PVwiXCIvPjwvYT4gXHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuKX07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=