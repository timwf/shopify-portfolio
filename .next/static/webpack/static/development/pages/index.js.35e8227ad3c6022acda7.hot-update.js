webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Tim\\Desktop\\React_projects\\shopify-portfolio\\components\\Navbar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Navbar = function Navbar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      scroll = _useState[0],
      setScroll = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      mobilopen = _useState3[0],
      setMobilopen = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      contactOpen = _useState4[0],
      setContactOpen = _useState4[1];

  var getPosition = function getPosition() {
    window.scrollY > 50 ? setScroll(true) : setScroll(false);
  };

  var getWidth = function getWidth() {
    setWidth(window.innerWidth);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setWidth(window.innerWidth);
    window.addEventListener("scroll", getPosition);
    return function () {
      return window.removeEventListener("scroll", getPosition);
    };
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("resize", getWidth);
    return function () {
      return window.removeEventListener("resize", getWidth);
    };
  });

  if (width > 1000) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: scroll ? 'nav white' : 'nav',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "logo-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 32
      }
    }, __jsx("img", {
      src: "/logo.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 35
      }
    })))), __jsx("div", {
      className: "menu-items",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "nav-item-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, __jsx("img", {
      style: {},
      src: "/home-logo.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }, "home"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/services",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "nav-item-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, __jsx("img", {
      style: {},
      src: "/services-logo.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, "services"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/portfolio",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "nav-item-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, __jsx("img", {
      style: {},
      src: "/portfolio-logo.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, "portfolio"))), __jsx("p", {
      onClick: function onClick() {
        return setContactOpen(true);
      },
      className: "nav-contact",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 81
      }
    }, "Contact Me")))), __jsx("div", {
      onClick: function onClick() {
        return setContactOpen(false);
      },
      className: contactOpen ? "active-contact-wrapper pop-up-contact-wrapper" : "pop-up-contact-wrapper",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: contactOpen ? "active-contact-container pop-up-contact-container" : "pop-up-contact-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "mob-contact-inner",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    }, __jsx("h1", {
      className: "mob-contact-contact",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, "CONTACT"), __jsx("h1", {
      className: "mob-contact-me",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, "ME"), __jsx("h1", {
      className: "mob-contact-now",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, "NOW"), __jsx("div", {
      className: "mob-contact-icons",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "mailto:timothy-williams-fowler@protonmail.com",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/contact-mail.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 69
      }
    })), __jsx("a", {
      href: "https://wa.me/447342087132",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/contact-whatsapp.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 50
      }
    })), __jsx("a", {
      href: "http://m.me/tim.williamsfowler",
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/contact-messenger.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 70
      }
    })), __jsx("a", {
      href: "skype:live.timwfowler0?chat",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/contact-skype.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 51
      }
    })), __jsx("a", {
      href: "https://www.linkedin.com/in/timothy-williams-fowler-6a04a9176/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/contact-linkedin.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 87
      }
    })), __jsx("a", {
      href: "https://github.com/timwf",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/contact-github.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 48
      }
    })), __jsx("a", {
      href: "tel:+66-806-468-608",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/contact-phone.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 43
      }
    })), __jsx("a", {
      href: "https://twitter.com/TimWilliamsFow1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "/contact-twitter.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 59
      }
    })))))));
  } else return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: scroll ? 'mobile-nav white' : 'mobile-nav',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mobile-menu-toggle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/hamburger.png",
    onClick: function onClick() {
      return setMobilopen(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: mobilopen ? 'show-mobile-menu' : 'hide-mobile-menu',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mobile-menu-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "close-mobile-container",
    onClick: function onClick() {
      return setMobilopen(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mobile-items-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "close-icon-mobile-menu",
    src: "/close-icon.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 36
    }
  }, "home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/services",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 44
    }
  }, "services")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 45
    }
  }, "portfolio")), __jsx("div", {
    onClick: function onClick() {
      return setContactOpen(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 64
    }
  }, "contact"))))))), __jsx("div", {
    className: "mobile-menu-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 28
    }
  }, __jsx("img", {
    src: "/logo.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 31
    }
  }))))), __jsx("div", {
    onClick: function onClick() {
      return setContactOpen(false);
    },
    className: contactOpen ? "active-contact-wrapper pop-up-contact-wrapper" : "pop-up-contact-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: contactOpen ? "active-contact-container pop-up-contact-container" : "pop-up-contact-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "mob-contact-inner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "mob-contact-contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "CONTACT"), __jsx("h1", {
    className: "mob-contact-me",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, "ME"), __jsx("h1", {
    className: "mob-contact-now",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "NOW"), __jsx("div", {
    className: "mob-contact-icons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "mailto:timothy-williams-fowler@protonmail.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/contact-mail.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 69
    }
  })), __jsx("a", {
    href: "https://wa.me/447342087132",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/contact-whatsapp.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 50
    }
  })), __jsx("a", {
    href: "http://m.me/tim.williamsfowler",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/contact-messenger.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 70
    }
  })), __jsx("a", {
    href: "skype:live.timwfowler0?chat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/contact-skype.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 51
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/timothy-williams-fowler-6a04a9176/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/contact-linkedin.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 87
    }
  })), __jsx("a", {
    href: "https://github.com/timwf",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/contact-github.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 48
    }
  })), __jsx("a", {
    href: "tel:+66-806-468-608",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/contact-phone.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 43
    }
  })), __jsx("a", {
    href: "https://twitter.com/TimWilliamsFow1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/contact-twitter.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 59
    }
  })))))));
};

_s(Navbar, "Ya0iZm6B7/hszB7K8WWum7p4igk=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsIndpZHRoIiwic2V0V2lkdGgiLCJtb2JpbG9wZW4iLCJzZXRNb2JpbG9wZW4iLCJjb250YWN0T3BlbiIsInNldENvbnRhY3RPcGVuIiwiZ2V0UG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZ2V0V2lkdGgiLCJpbm5lcldpZHRoIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBSUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEtBQUQsQ0FEbkI7QUFBQSxNQUNWQyxNQURVO0FBQUEsTUFDRkMsU0FERTs7QUFBQSxtQkFFU0Ysc0RBQVEsRUFGakI7QUFBQSxNQUVWRyxLQUZVO0FBQUEsTUFFSEMsUUFGRzs7QUFBQSxtQkFHaUJKLHNEQUFRLENBQUMsS0FBRCxDQUh6QjtBQUFBLE1BR1ZLLFNBSFU7QUFBQSxNQUdDQyxZQUhEOztBQUFBLG1CQUlxQk4sc0RBQVEsQ0FBQyxLQUFELENBSjdCO0FBQUEsTUFJVk8sV0FKVTtBQUFBLE1BSUdDLGNBSkg7O0FBUWpCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJDLFVBQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUFqQixHQUFzQlQsU0FBUyxDQUFDLElBQUQsQ0FBL0IsR0FBd0NBLFNBQVMsQ0FBQyxLQUFELENBQWpEO0FBQ0MsR0FGTDs7QUFJQSxNQUFNVSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CUixZQUFRLENBQUNNLE1BQU0sQ0FBQ0csVUFBUixDQUFSO0FBQ0gsR0FGRDs7QUFJQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RW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QUFBO0FBQUE7QUFBQSxLQUFtQztBQUFLLE9BQUcsRUFBQyxxQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQW5DLENBTkEsRUFPQTtBQUFHLFFBQUksRUFBQyxxQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThCO0FBQUssT0FBRyxFQUFDLG9CQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUIsQ0FQQSxFQVFBO0FBQUcsUUFBSSxFQUFDLHFDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBOEM7QUFBSyxPQUFHLEVBQUMsc0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUE5QyxDQVJBLENBSkosQ0FEQSxDQUhKLENBNUJBLENBRE87QUFxREgsQ0F2SVI7O0dBQU1SLE07O0tBQUFBLE07QUF5SVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNWU4MjI3YWQzYzYwMjJhY2RhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW21vYmlsb3Blbiwgc2V0TW9iaWxvcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2NvbnRhY3RPcGVuLCBzZXRDb250YWN0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIFxyXG4gICAgXHJcbiBcclxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxZID4gNTAgPyBzZXRTY3JvbGwodHJ1ZSkgOiBzZXRTY3JvbGwoZmFsc2UpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0V2lkdGggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGgpICAgICAgIFxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBnZXRQb3NpdGlvbik7XHJcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBnZXRQb3NpdGlvbik7ICAgICAgICBcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGdldFdpZHRoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZ2V0V2lkdGgpOyAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAod2lkdGggPiAxMDAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzY3JvbGwgPyAnbmF2IHdoaXRlJyA6ICduYXYnfSA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvLWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPjxpbWcgc3JjPVwiL2xvZ28ucG5nXCIvPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtaXRlbXNcIj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e319IHNyYz1cIi9ob21lLWxvZ28ucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPmhvbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e319IHNyYz1cIi9zZXJ2aWNlcy1sb2dvLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5zZXJ2aWNlczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1pdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7fX0gc3JjPVwiL3BvcnRmb2xpby1sb2dvLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5wb3J0Zm9saW88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiBzZXRDb250YWN0T3Blbih0cnVlKX0gY2xhc3NOYW1lPVwibmF2LWNvbnRhY3RcIj48YT5Db250YWN0IE1lPC9hPjwvcD4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNldENvbnRhY3RPcGVuKGZhbHNlKX0gXHJcbiAgICBjbGFzc05hbWU9e2NvbnRhY3RPcGVuID8gXCJhY3RpdmUtY29udGFjdC13cmFwcGVyIHBvcC11cC1jb250YWN0LXdyYXBwZXJcIiA6IFwicG9wLXVwLWNvbnRhY3Qtd3JhcHBlclwifVxyXG4gICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWN0T3BlbiA/IFwiYWN0aXZlLWNvbnRhY3QtY29udGFpbmVyIHBvcC11cC1jb250YWN0LWNvbnRhaW5lclwiIDogXCJwb3AtdXAtY29udGFjdC1jb250YWluZXJcIn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2ItY29udGFjdC1pbm5lclwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibW9iLWNvbnRhY3QtY29udGFjdFwiPkNPTlRBQ1Q8L2gxPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibW9iLWNvbnRhY3QtbWVcIj5NRTwvaDE+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtb2ItY29udGFjdC1ub3dcIj5OT1c8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYi1jb250YWN0LWljb25zXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86dGltb3RoeS13aWxsaWFtcy1mb3dsZXJAcHJvdG9ubWFpbC5jb21cIj48aW1nIHNyYz1cIi9jb250YWN0LW1haWwucG5nXCIvPjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2EubWUvNDQ3MzQyMDg3MTMyXCI+PGltZyBzcmM9XCIvY29udGFjdC13aGF0c2FwcC5wbmdcIi8+PC9hPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL20ubWUvdGltLndpbGxpYW1zZm93bGVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIvY29udGFjdC1tZXNzZW5nZXIucG5nXCIvPjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cInNreXBlOmxpdmUudGltd2Zvd2xlcjA/Y2hhdFwiPjxpbWcgc3JjPVwiL2NvbnRhY3Qtc2t5cGUucG5nXCIvPjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi90aW1vdGh5LXdpbGxpYW1zLWZvd2xlci02YTA0YTkxNzYvXCIgPjxpbWcgc3JjPVwiL2NvbnRhY3QtbGlua2VkaW4ucG5nXCIvPjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS90aW13ZlwiPjxpbWcgc3JjPVwiL2NvbnRhY3QtZ2l0aHViLnBuZ1wiLz48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzY2LTgwNi00NjgtNjA4XCI+PGltZyBzcmM9XCIvY29udGFjdC1waG9uZS5wbmdcIi8+PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9UaW1XaWxsaWFtc0ZvdzFcIj48aW1nIHNyYz1cIi9jb250YWN0LXR3aXR0ZXIucG5nXCIvPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHJldHVybiAoIFxyXG4gICAgPD5cclxuICAgIDxkaXYgIGNsYXNzTmFtZT17c2Nyb2xsID8gJ21vYmlsZS1uYXYgd2hpdGUnIDogJ21vYmlsZS1uYXYnfSA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS10b2dnbGVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaGFtYnVyZ2VyLnBuZ1wiIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsb3Blbih0cnVlKX0+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17bW9iaWxvcGVuID8gJ3Nob3ctbW9iaWxlLW1lbnUnIDogJ2hpZGUtbW9iaWxlLW1lbnUnfSA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW1vYmlsZS1jb250YWluZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbG9wZW4oZmFsc2UpfT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZS1pdGVtcy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNsb3NlLWljb24tbW9iaWxlLW1lbnVcIiBzcmM9XCIvY2xvc2UtaWNvbi5wbmdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxoMT5ob21lPC9oMT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPjxoMT5zZXJ2aWNlczwvaDE+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+PGgxPnBvcnRmb2xpbzwvaDE+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0Q29udGFjdE9wZW4odHJ1ZSl9ID48aDE+Y29udGFjdDwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW1lbnUtbG9nb1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPjxpbWcgc3JjPVwiL2xvZ28ucG5nXCIvPjwvYT48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gXHJcbiAgIFxyXG4gICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRDb250YWN0T3BlbihmYWxzZSl9IFxyXG4gICAgY2xhc3NOYW1lPXtjb250YWN0T3BlbiA/IFwiYWN0aXZlLWNvbnRhY3Qtd3JhcHBlciBwb3AtdXAtY29udGFjdC13cmFwcGVyXCIgOiBcInBvcC11cC1jb250YWN0LXdyYXBwZXJcIn1cclxuICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFjdE9wZW4gPyBcImFjdGl2ZS1jb250YWN0LWNvbnRhaW5lciBwb3AtdXAtY29udGFjdC1jb250YWluZXJcIiA6IFwicG9wLXVwLWNvbnRhY3QtY29udGFpbmVyXCJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iLWNvbnRhY3QtaW5uZXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1vYi1jb250YWN0LWNvbnRhY3RcIj5DT05UQUNUPC9oMT5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1vYi1jb250YWN0LW1lXCI+TUU8L2gxPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibW9iLWNvbnRhY3Qtbm93XCI+Tk9XPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2ItY29udGFjdC1pY29uc1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnRpbW90aHktd2lsbGlhbXMtZm93bGVyQHByb3Rvbm1haWwuY29tXCI+PGltZyBzcmM9XCIvY29udGFjdC1tYWlsLnBuZ1wiLz48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3dhLm1lLzQ0NzM0MjA4NzEzMlwiPjxpbWcgc3JjPVwiL2NvbnRhY3Qtd2hhdHNhcHAucG5nXCIvPjwvYT4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9tLm1lL3RpbS53aWxsaWFtc2Zvd2xlclwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiL2NvbnRhY3QtbWVzc2VuZ2VyLnBuZ1wiLz48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJza3lwZTpsaXZlLnRpbXdmb3dsZXIwP2NoYXRcIj48aW1nIHNyYz1cIi9jb250YWN0LXNreXBlLnBuZ1wiLz48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGltb3RoeS13aWxsaWFtcy1mb3dsZXItNmEwNGE5MTc2L1wiID48aW1nIHNyYz1cIi9jb250YWN0LWxpbmtlZGluLnBuZ1wiLz48L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdGltd2ZcIj48aW1nIHNyYz1cIi9jb250YWN0LWdpdGh1Yi5wbmdcIi8+PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwidGVsOis2Ni04MDYtNDY4LTYwOFwiPjxpbWcgc3JjPVwiL2NvbnRhY3QtcGhvbmUucG5nXCIvPjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vVGltV2lsbGlhbXNGb3cxXCI+PGltZyBzcmM9XCIvY29udGFjdC10d2l0dGVyLnBuZ1wiLz48L2E+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgPC8+XHJcbiAgICAgKSB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==