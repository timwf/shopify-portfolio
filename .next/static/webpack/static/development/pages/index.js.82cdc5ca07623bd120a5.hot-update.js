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
    delay: 1000
  });
  var animatedStyleTwo = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 1400
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
  }, "Hi, I'm Tim - a Bangkok based Shopify devoloper and designer. I have expierience in theme development including custom design and app development. Contact me now for a free consultation!")))), __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div, {
    style: photoSlideIn,
    className: "hero-image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].img, {
    className: "me-image",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uLmpzeCJdLCJuYW1lcyI6WyJIZXJvU2VjdGlvbiIsImFuaW1hdGVkU3R5bGUiLCJ1c2VTcHJpbmciLCJmcm9tIiwib3BhY2l0eSIsInRvIiwiZGVsYXkiLCJhbmltYXRlZFN0eWxlVHdvIiwicGhvdG9TbGlkZUluIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUtBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEI7QUFDQSxNQUFNQyxhQUFhLEdBQUdDLDhEQUFTLENBQUM7QUFDNUJDLFFBQUksRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQURzQjtBQUU1QkMsTUFBRSxFQUFFO0FBQUNELGFBQU8sRUFBRTtBQUFWLEtBRndCO0FBRzVCRSxTQUFLLEVBQUU7QUFIcUIsR0FBRCxDQUEvQjtBQUtFLE1BQU1DLGdCQUFnQixHQUFHTCw4REFBUyxDQUFDO0FBQ2pDQyxRQUFJLEVBQUU7QUFBQ0MsYUFBTyxFQUFFO0FBQVYsS0FEMkI7QUFFakNDLE1BQUUsRUFBRTtBQUFDRCxhQUFPLEVBQUU7QUFBVixLQUY2QjtBQUdqQ0UsU0FBSyxFQUFFO0FBSDBCLEdBQUQsQ0FBbEM7QUFNQSxNQUFNRSxZQUFZLEdBQUdOLDhEQUFTLENBQUM7QUFDN0JDLFFBQUksRUFBRTtBQUFDTSxlQUFTLEVBQUU7QUFBWixLQUR1QjtBQUU3QkosTUFBRSxFQUFFO0FBQUNJLGVBQVMsRUFBRTtBQUFaO0FBRnlCLEdBQUQsQ0FBOUI7QUFLRixTQUNBO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLFNBQUssRUFBRVIsYUFBckI7QUFBcUMsT0FBRyxFQUFDLG1CQUF6QztBQUE2RCxPQUFHLEVBQUMsRUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxxREFBRCxDQUFVLEVBQVY7QUFBYSxTQUFLLEVBQUVBLGFBQXBCO0FBQW1DLGFBQVMsRUFBQyxVQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdEO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXhELHNDQUZKLENBREEsRUFNQSxNQUFDLHFEQUFELENBQVUsQ0FBVjtBQUFZLFNBQUssRUFBRU0sZ0JBQW5CO0FBQXFDLGFBQVMsRUFBQyxXQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJEO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrTUFBM0QsQ0FOQSxDQUZKLENBREEsRUFnQkEsTUFBQyxxREFBRCxDQUFVLEdBQVY7QUFBYyxTQUFLLEVBQUVDLFlBQXJCO0FBQW1DLGFBQVMsRUFBQyxzQkFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsYUFBUyxFQUFDLFVBQXhCO0FBQW1DLE9BQUcsRUFBQyxpQkFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLENBaEJBLENBREosRUFzQkk7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsT0FBRyxFQUFDLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUssT0FBRyxFQUFDLG9CQUFUO0FBQThCLE9BQUcsRUFBQyxFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFLLE9BQUcsRUFBQyxtQkFBVDtBQUE2QixPQUFHLEVBQUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsT0FBRyxFQUFDLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQXRCSixDQURBO0FBa0NGLENBcERGOztHQUFNUixXO1VBRW9CRSxzRCxFQUtLQSxzRCxFQU1KQSxzRDs7O0tBYnJCRixXO0FBc0RTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODJjZGM1Y2EwNzYyM2JkMTIwYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRlZEhlcm9Db250ZW50IGZyb20gXCIuL0FuaW1hdGVkSGVyb0NvbnRlbnRcIjtcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEhlcm9TZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgcHJvcHMgPSB1c2VTcHJpbmcoeyBmcm9tOiB7Y29sb3I6ICdncmVlbid9LCB0bzogeyBjb2xvcjogJ3JlZCd9LCBkZWxheTogMTAwfSlcclxuICAgIGNvbnN0IGFuaW1hdGVkU3R5bGUgPSB1c2VTcHJpbmcoe1xyXG4gICAgICAgIGZyb206IHtvcGFjaXR5OiAwfSwgXHJcbiAgICAgICAgdG86IHtvcGFjaXR5OiAxfSwgXHJcbiAgICAgICAgZGVsYXk6IDEwMDBcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGVkU3R5bGVUd28gPSB1c2VTcHJpbmcoe1xyXG4gICAgICAgIGZyb206IHtvcGFjaXR5OiAwfSwgXHJcbiAgICAgICAgdG86IHtvcGFjaXR5OiAxfSwgXHJcbiAgICAgICAgZGVsYXk6IDE0MDBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBwaG90b1NsaWRlSW4gPSB1c2VTcHJpbmcoe1xyXG4gICAgICAgIGZyb206IHttYXJnaW5Ub3A6ICctNTAwcHgnfSwgXHJcbiAgICAgICAgdG86IHttYXJnaW5Ub3A6ICctNTBweCd9LCBcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BvbnNlLWhlcm9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkLWhlcm8tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxBbmltYXRlZEhlcm9Db250ZW50IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zdWItaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhbmltYXRlZC5pbWcgc3R5bGU9e2FuaW1hdGVkU3R5bGV9ICBzcmM9XCIvc2hvcGlmeS1sb2dvLnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDxhbmltYXRlZC5oMyBzdHlsZT17YW5pbWF0ZWRTdHlsZX0gY2xhc3NOYW1lPVwiaGVyby1zdWJcIj48c3BhbiBjbGFzc05hbWU9XCJzaG9waWZ5LXRleHRcIj5TaG9waWZ5IDwvc3Bhbj4gfCBQYXJ0bmVyIHwgRGV2ZWxvcGVyIHwgRGVzaWduZXI8L2FuaW1hdGVkLmgzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxhbmltYXRlZC5wIHN0eWxlPXthbmltYXRlZFN0eWxlVHdvfSBjbGFzc05hbWU9XCJ0aW0tYmx1cmJcIj48cCBjbGFzc05hbWU9XCJibHVyYi1pbm5lclwiPkhpLCBJJ20gVGltIC0gYSBCYW5na29rIGJhc2VkIFNob3BpZnkgZGV2b2xvcGVyIGFuZCBkZXNpZ25lci4gXHJcbiAgICAgICAgICAgIEkgaGF2ZSBleHBpZXJpZW5jZSBpbiB0aGVtZSBkZXZlbG9wbWVudCBpbmNsdWRpbmcgY3VzdG9tIGRlc2lnbiBhbmQgYXBwIGRldmVsb3BtZW50LiBDb250YWN0IG1lIG5vdyBmb3IgYSBmcmVlIGNvbnN1bHRhdGlvbiFcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgPC9wPiAgICBcclxuICAgICAgICAgICAgPC9hbmltYXRlZC5wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YW5pbWF0ZWQuZGl2IHN0eWxlPXtwaG90b1NsaWRlSW59IGNsYXNzTmFtZT1cImhlcm8taW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGFuaW1hdGVkLmltZyBjbGFzc05hbWU9XCJtZS1pbWFnZVwiIHNyYz1cIi9oZXJvLXBob3RvLnBuZ1wiLz5cclxuICAgICAgICA8L2FuaW1hdGVkLmRpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNvY2lhbFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9naXRodWItZ3JleS5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpbmtlZGluLWdyZXkucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi90d2l0dGVyLWdyZXkucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9jb2RlcGVuLWdyZXkucG5nXCIgYWx0PVwiXCIvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbil9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9