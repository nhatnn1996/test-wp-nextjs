"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/category/index.js":
/*!*********************************!*\
  !*** ./pages/category/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref;\n    _s();\n    var GET_CATEGORY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_CATEGORY), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    console.log(data, \"data\");\n    var categoryList = data === null || data === void 0 ? void 0 : (ref = data.categories) === null || ref === void 0 ? void 0 : ref.nodes;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 19,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    },\n                    __self: _this1,\n                    children: item.name\n                });\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                    className: \"nav nav-tabs text-center\",\n                    id: \"myTab\",\n                    role: \"tablist\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            className: \"nav-item\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                className: \"nav-link\",\n                                \"data-toggle\": \"tab\",\n                                href: \"#schlankmacher\",\n                                role: \"tab\",\n                                \"aria-selected\": \"false\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 10\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: \"home-articles-icon image-fit\",\n                                        __source: {\n                                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 11\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            src: \"https://www.healthcanal.com/de/wp-content/uploads/2021/06/slim-1.svg\",\n                                            alt: \"slim 1\",\n                                            __source: {\n                                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                                lineNumber: 27,\n                                                columnNumber: 58\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                        __source: {\n                                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 11\n                                        },\n                                        __self: _this,\n                                        children: \"Schlankmacher\"\n                                    })\n                                ]\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            className: \"nav-item\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                className: \"nav-link\",\n                                \"data-toggle\": \"tab\",\n                                href: \"#gesundheit\",\n                                role: \"tab\",\n                                \"aria-selected\": \"false\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 10\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: \"home-articles-icon image-fit\",\n                                        __source: {\n                                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 11\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            src: \"https://www.healthcanal.com/de/wp-content/uploads/2021/06/healthcare-1.svg\",\n                                            alt: \"healthcare 1\",\n                                            __source: {\n                                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                                lineNumber: 33,\n                                                columnNumber: 58\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                        __source: {\n                                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 11\n                                        },\n                                        __self: _this,\n                                        children: \"Gesundheit\"\n                                    })\n                                ]\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            className: \"nav-item\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                className: \"nav-link active\",\n                                \"data-toggle\": \"tab\",\n                                href: \"#beauty\",\n                                role: \"tab\",\n                                \"aria-selected\": \"true\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 10\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: \"home-articles-icon image-fit\",\n                                        __source: {\n                                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 11\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            src: \"https://www.healthcanal.com/de/wp-content/uploads/2021/06/make-up-1.svg\",\n                                            alt: \"make-up 1\",\n                                            __source: {\n                                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 58\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                        __source: {\n                                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 11\n                                        },\n                                        __self: _this,\n                                        children: \"Beauty\"\n                                    })\n                                ]\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            className: \"nav-item\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                                className: \"nav-link \",\n                                \"data-toggle\": \"tab\",\n                                href: \"#schmerzhilfe\",\n                                role: \"tab\",\n                                \"aria-selected\": \"true\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 10\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                        className: \"home-articles-icon image-fit\",\n                                        __source: {\n                                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 11\n                                        },\n                                        __self: _this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                            src: \"https://www.healthcanal.com/de/wp-content/uploads/2021/06/pills-1.svg\",\n                                            alt: \"pills 1\",\n                                            __source: {\n                                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 58\n                                            },\n                                            __self: _this\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                        __source: {\n                                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 11\n                                        },\n                                        __self: _this,\n                                        children: \"Schmerzhilfe\"\n                                    })\n                                ]\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            className: \"nav-item\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                className: \"nav-link \",\n                                \"data-toggle\": \"tab\",\n                                href: \"#ernaehrung\",\n                                role: \"tab\",\n                                \"aria-selected\": \"true\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 10\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"home-articles-icon image-fit\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 11\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: \"https://www.healthcanal.com/de/wp-content/uploads/2021/06/vegetables-1.svg\",\n                                        alt: \"vegetables 1\",\n                                        __source: {\n                                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 58\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                            className: \"nav-item\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                className: \"nav-link \",\n                                \"data-toggle\": \"tab\",\n                                href: \"#testberichte\",\n                                role: \"tab\",\n                                \"aria-selected\": \"true\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 10\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                    className: \"home-articles-icon image-fit\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 11\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: \"https://www.healthcanal.com/de/wp-content/uploads/2021/06/statistics-1.svg\",\n                                        alt: \"statistics 1\",\n                                        __source: {\n                                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 58\n                                        },\n                                        __self: _this\n                                    })\n                                })\n                            })\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Category, \"OQZiY3KqWoytFPIJWw/H9Hrmbok=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEdBQUcsRUFBQyxDQUE0RTt3Q0FBQ0MsR0FBRyxFQUFDLENBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakssQ0FBQztHQTVESzNCLFFBQVE7O1FBWXFCRCxvREFBUTs7O0tBWnJDQyxRQUFRO0FBNkRkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvaW5kZXguanM/MmEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5jb25zdCBDYXRlZ29yeSA9ICgpID0+IHtcbiAgY29uc3QgR0VUX0NBVEVHT1JZID0gZ3FsYFxuICAgIHF1ZXJ5IEdyYXBoUUwge1xuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIG5vZGVzIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9DQVRFR09SWSk7XG4gIGNvbnNvbGUubG9nKGRhdGEsIFwiZGF0YVwiKTtcbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZGF0YT8uY2F0ZWdvcmllcz8ubm9kZXM7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtjYXRlZ29yeUxpc3Q/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8cD57aXRlbS5uYW1lfTwvcD5cbiAgICAgICkpfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyB0ZXh0LWNlbnRlclwiIGlkPVwibXlUYWJcIiByb2xlPVwidGFibGlzdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cblx0XHRcdFx0XHQgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIGhyZWY9XCIjc2NobGFua21hY2hlclwiIHJvbGU9XCJ0YWJcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj5cblx0XHRcdFx0XHQgICAgXHQ8c3BhbiBjbGFzc05hbWU9XCJob21lLWFydGljbGVzLWljb24gaW1hZ2UtZml0XCI+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWFsdGhjYW5hbC5jb20vZGUvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDYvc2xpbS0xLnN2Z1wiIGFsdD1cInNsaW0gMVwiLz48L3NwYW4+XG5cdFx0XHRcdFx0ICAgIFx0PGg0PlNjaGxhbmttYWNoZXI8L2g0PlxuXHRcdFx0XHRcdCAgICA8L2E+XG5cdFx0XHRcdFx0ICA8L2xpPlxuXHRcdFx0XHRcdCAgXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuXHRcdFx0XHRcdCAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNnZXN1bmRoZWl0XCIgcm9sZT1cInRhYlwiIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiPlxuXHRcdFx0XHRcdCAgICBcdDxzcGFuIGNsYXNzTmFtZT1cImhvbWUtYXJ0aWNsZXMtaWNvbiBpbWFnZS1maXRcIj48aW1nIHNyYz1cImh0dHBzOi8vd3d3LmhlYWx0aGNhbmFsLmNvbS9kZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNi9oZWFsdGhjYXJlLTEuc3ZnXCIgYWx0PVwiaGVhbHRoY2FyZSAxXCIvPjwvc3Bhbj5cblx0XHRcdFx0XHQgICAgXHQ8aDQ+R2VzdW5kaGVpdDwvaDQ+XG5cdFx0XHRcdFx0ICAgIDwvYT5cblx0XHRcdFx0XHQgIDwvbGk+XG5cdFx0XHRcdFx0ICBcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG5cdFx0XHRcdFx0ICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGFjdGl2ZVwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNiZWF1dHlcIiByb2xlPVwidGFiXCIgYXJpYS1zZWxlY3RlZD1cInRydWVcIj5cblx0XHRcdFx0XHQgICAgXHQ8c3BhbiBjbGFzc05hbWU9XCJob21lLWFydGljbGVzLWljb24gaW1hZ2UtZml0XCI+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWFsdGhjYW5hbC5jb20vZGUvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDYvbWFrZS11cC0xLnN2Z1wiIGFsdD1cIm1ha2UtdXAgMVwiLz48L3NwYW4+XG5cdFx0XHRcdFx0ICAgIFx0PGg0PkJlYXV0eTwvaDQ+XG5cdFx0XHRcdFx0ICAgIDwvYT5cblx0XHRcdFx0XHQgIDwvbGk+XG5cdFx0XHRcdFx0ICBcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG5cdFx0XHRcdFx0ICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiNzY2htZXJ6aGlsZmVcIiByb2xlPVwidGFiXCIgYXJpYS1zZWxlY3RlZD1cInRydWVcIj5cblx0XHRcdFx0XHQgICAgXHQ8c3BhbiBjbGFzc05hbWU9XCJob21lLWFydGljbGVzLWljb24gaW1hZ2UtZml0XCI+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWFsdGhjYW5hbC5jb20vZGUvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDYvcGlsbHMtMS5zdmdcIiBhbHQ9XCJwaWxscyAxXCIvPjwvc3Bhbj5cblx0XHRcdFx0XHQgICAgXHQ8aDQ+U2NobWVyemhpbGZlPC9oND5cblx0XHRcdFx0XHQgICAgPC9hPlxuXHRcdFx0XHRcdCAgPC9saT5cblx0XHRcdFx0XHQgIFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cblx0XHRcdFx0XHQgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiBocmVmPVwiI2VybmFlaHJ1bmdcIiByb2xlPVwidGFiXCIgYXJpYS1zZWxlY3RlZD1cInRydWVcIj5cblx0XHRcdFx0XHQgICAgXHQ8c3BhbiBjbGFzc05hbWU9XCJob21lLWFydGljbGVzLWljb24gaW1hZ2UtZml0XCI+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWFsdGhjYW5hbC5jb20vZGUvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDYvdmVnZXRhYmxlcy0xLnN2Z1wiIGFsdD1cInZlZ2V0YWJsZXMgMVwiLz48L3NwYW4+XG5cdFx0XHRcdFx0ICAgIDwvYT5cblx0XHRcdFx0XHQgIDwvbGk+XG5cdFx0XHRcdFx0ICBcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG5cdFx0XHRcdFx0ICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgaHJlZj1cIiN0ZXN0YmVyaWNodGVcIiByb2xlPVwidGFiXCIgYXJpYS1zZWxlY3RlZD1cInRydWVcIj5cblx0XHRcdFx0XHQgICAgXHQ8c3BhbiBjbGFzc05hbWU9XCJob21lLWFydGljbGVzLWljb24gaW1hZ2UtZml0XCI+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWFsdGhjYW5hbC5jb20vZGUvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDYvc3RhdGlzdGljcy0xLnN2Z1wiIGFsdD1cInN0YXRpc3RpY3MgMVwiLz48L3NwYW4+XG5cdFx0XHRcdFx0ICAgIDwvYT5cblx0XHRcdFx0XHQgIDwvbGk+XG5cdFx0XHRcdFx0ICBcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZ3FsIiwidXNlUXVlcnkiLCJDYXRlZ29yeSIsImRhdGEiLCJHRVRfQ0FURUdPUlkiLCJsb2FkaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnlMaXN0IiwiY2F0ZWdvcmllcyIsIm5vZGVzIiwiZGl2IiwibWFwIiwiaXRlbSIsInAiLCJuYW1lIiwiY2xhc3NOYW1lIiwidWwiLCJpZCIsInJvbGUiLCJsaSIsImEiLCJkYXRhLXRvZ2dsZSIsImhyZWYiLCJhcmlhLXNlbGVjdGVkIiwic3BhbiIsImltZyIsInNyYyIsImFsdCIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});