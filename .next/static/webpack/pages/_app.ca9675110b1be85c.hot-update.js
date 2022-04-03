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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n          uri\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref;\n    _s1();\n    var GET_CATEGORY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_CATEGORY), loading = ref1.loading, error = ref1.error, data = ref1.data;\n    var ref2 = _slicedToArray(useLazyQuery(SEARCH, {\n        variables: {\n            str: searchedText\n        },\n        pollInterval: 500\n    }), 2), callGetListPosts = ref2[0], ref3 = ref2[1], listPosts = ref3.data;\n    var categoryList = data === null || data === void 0 ? void 0 : (ref = data.categories) === null || ref === void 0 ? void 0 : ref.nodes;\n    var getListPosts = function(item) {\n        if (searchedText) search(); // Function for executing the query\n        if (data) setSuggestions(data);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            onClick: function() {\n                                return getListPosts(item);\n                            },\n                            className: \"nav-link mt-4\",\n                            \"data-toggle\": \"tab\",\n                            href: item.uri,\n                            role: \"tab\",\n                            \"aria-selected\": \"false\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: item.name\n                                })\n                            })\n                        });\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s1(Category, \"Nu9nuANVM1ZoCxyz2+7dlzGiAlY=\", true, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRW5CLENBV3pCOzs7Ozs7OztBQVpGLEdBQUssQ0FBQ0csUUFBUSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7O1FBa0JEQyxHQUFnQjs7SUFqQnJDLEdBQUssQ0FBQ0MsWUFBWSxHQUFHSixtREFBRztJQVl4QixHQUFLLENBQTRCQyxJQUFzQixHQUF0QkEsd0RBQVEsQ0FBQ0csWUFBWSxHQUE5Q0MsT0FBTyxHQUFrQkosSUFBc0IsQ0FBL0NJLE9BQU8sRUFBRUMsS0FBSyxHQUFXTCxJQUFzQixDQUF0Q0ssS0FBSyxFQUFFSCxJQUFJLEdBQUtGLElBQXNCLENBQS9CRSxJQUFJO0lBQzVCLEdBQUssQ0FBMkNJLElBRzlDLGtCQUg4Q0EsWUFBWSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztRQUNwRUMsU0FBUyxFQUFFLENBQUM7WUFBQ0MsR0FBRyxFQUFFQyxZQUFZO1FBQUMsQ0FBQztRQUNoQ0MsWUFBWSxFQUFFLEdBQUc7SUFDbkIsQ0FBQyxPQUhNQyxnQkFBZ0IsR0FBeUJOLElBRzlDLFlBSDhDQSxJQUc5QyxLQUgrQk8sU0FBUyxRQUFmWCxJQUFJO0lBSS9CLEdBQUssQ0FBQ1ksWUFBWSxHQUFHWixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixJQUFoQkEsR0FBZ0IsR0FBaEJBLElBQUksQ0FBRWEsVUFBVSxjQUFoQmIsR0FBZ0IsS0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLEdBQWdCLENBQUVjLEtBQUs7SUFFNUMsR0FBSyxDQUFDQyxZQUFZLEdBQUcsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztRQUM5QixFQUFFLEVBQUVSLFlBQVksRUFBRVMsTUFBTSxHQUFJLENBQW1DO1FBRS9ELEVBQUUsRUFBRWpCLElBQUksRUFBRWtCLGNBQWMsQ0FBQ2xCLElBQUk7SUFDL0IsQ0FBQztJQUNELE1BQU0sc0VBQ0htQixDQUFHOzs7Ozs7O3dGQUNEQSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUF1Qjs7Ozs7Ozs7cUZBQ25DQyxDQUFDO29CQUFDRCxTQUFTLEVBQUMsQ0FBYTs7Ozs7Ozs4QkFBQyxDQUFROztxRkFDbENELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUE4Qjs7Ozs7Ozs4QkFDMUNSLFlBQVksYUFBWkEsWUFBWSxLQUFaQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxZQUFZLENBQUVVLEdBQUcsQ0FBQyxRQUFRLENBQVBOLElBQUk7c0NBQ3RCLE1BQ1QsQ0FBQyx1REFEU08sQ0FBQzs0QkFDQUMsT0FBTyxFQUFFLFFBQVE7Z0NBQUZULE1BQU0sQ0FBTkEsWUFBWSxDQUFDQyxJQUFJOzs0QkFDaENJLFNBQVMsRUFBQyxDQUFlOzRCQUN6QkssQ0FBVyxjQUFDLENBQUs7NEJBQ2pCQyxJQUFJLEVBQUVWLElBQUksQ0FBQ1csR0FBRzs0QkFDZEMsSUFBSSxFQUFDLENBQUs7NEJBQ1ZDLENBQWEsZ0JBQUMsQ0FBTzs7Ozs7OzsyR0FFcEJDLENBQUU7Z0NBQ0RWLFNBQVMsRUFBQyxDQUEwQjtnQ0FDcENXLEVBQUUsRUFBQyxDQUFPO2dDQUNWSCxJQUFJLEVBQUMsQ0FBUzs7Ozs7OzsrR0FFYkksQ0FBRTtvQ0FBQ1osU0FBUyxFQUFDLENBQXNHOzs7Ozs7OzhDQUNqSEosSUFBSSxDQUFDaUIsSUFBSTs7Ozs7Ozs7O0FBUzVCLENBQUM7SUF0REtsQyxRQUFROztRQWFxQkQsb0RBQVE7OztLQWJyQ0MsUUFBUTtBQXVEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhdGVnb3J5L2luZGV4LmpzPzJhMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuY29uc3QgQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IEdFVF9DQVRFR09SWSA9IGdxbGBcbiAgICBxdWVyeSBHcmFwaFFMIHtcbiAgICAgIGNhdGVnb3JpZXMge1xuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBpZFxuICAgICAgICAgIHVyaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfQ0FURUdPUlkpO1xuICBjb25zdCBbY2FsbEdldExpc3RQb3N0cywgeyBkYXRhOiBsaXN0UG9zdHMgfV0gPSB1c2VMYXp5UXVlcnkoU0VBUkNILCB7XG4gICAgdmFyaWFibGVzOiB7IHN0cjogc2VhcmNoZWRUZXh0IH0sXG4gICAgcG9sbEludGVydmFsOiA1MDAsXG4gIH0pO1xuICBjb25zdCBjYXRlZ29yeUxpc3QgPSBkYXRhPy5jYXRlZ29yaWVzPy5ub2RlcztcblxuICBjb25zdCBnZXRMaXN0UG9zdHMgPSAoaXRlbSkgPT4ge1xuICAgIGlmIChzZWFyY2hlZFRleHQpIHNlYXJjaCgpOyAvLyBGdW5jdGlvbiBmb3IgZXhlY3V0aW5nIHRoZSBxdWVyeVxuXG4gICAgaWYgKGRhdGEpIHNldFN1Z2dlc3Rpb25zKGRhdGEpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNhdGVsb2d5PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVsb2d5IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7Y2F0ZWdvcnlMaXN0Py5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldExpc3RQb3N0cyhpdGVtKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbXQtNFwiXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgaHJlZj17aXRlbS51cml9XG4gICAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxuICAgICAgICAgICAgICBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwibXlUYWJcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJsaXN0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciByb3VuZGVkIGgtMjAgbS0zIHAtMyBuYXYtaXRlbSBtLTQgYmctY3lhbi01MDAgc2hhZG93LWxnIHNoYWRvdy1jeWFuLTUwMC81MCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJncWwiLCJ1c2VRdWVyeSIsIkNhdGVnb3J5IiwiZGF0YSIsIkdFVF9DQVRFR09SWSIsImxvYWRpbmciLCJlcnJvciIsInVzZUxhenlRdWVyeSIsIlNFQVJDSCIsInZhcmlhYmxlcyIsInN0ciIsInNlYXJjaGVkVGV4dCIsInBvbGxJbnRlcnZhbCIsImNhbGxHZXRMaXN0UG9zdHMiLCJsaXN0UG9zdHMiLCJjYXRlZ29yeUxpc3QiLCJjYXRlZ29yaWVzIiwibm9kZXMiLCJnZXRMaXN0UG9zdHMiLCJpdGVtIiwic2VhcmNoIiwic2V0U3VnZ2VzdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwiYSIsIm9uQ2xpY2siLCJkYXRhLXRvZ2dsZSIsImhyZWYiLCJ1cmkiLCJyb2xlIiwiYXJpYS1zZWxlY3RlZCIsInVsIiwiaWQiLCJsaSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});