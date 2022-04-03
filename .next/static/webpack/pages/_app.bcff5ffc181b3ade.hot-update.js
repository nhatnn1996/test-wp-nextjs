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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n          uri\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL($categoryName: String!) {\\n      informationalPost(where: { categoryName: $categoryName }) {\\n        nodes {\\n          title\\n          slug\\n          link\\n          featuredImage {\\n            node {\\n              uri\\n            }\\n          }\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref, ref1;\n    _s1();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), category = ref2[0], setCategory = ref2[1];\n    var GET_CATEGORY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject());\n    var GET_LIST_POSTS = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_templateObject1());\n    var ref3 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(GET_CATEGORY), loading = ref3.loading, error = ref3.error, data = ref3.data;\n    var ref4 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useLazyQuery)(GET_LIST_POSTS, {\n        fetchPolicy: \"network-only\"\n    }), 2), callGetListPosts = ref4[0], ref5 = ref4[1], listPosts = ref5.data;\n    var categoryList = data === null || data === void 0 ? void 0 : (ref = data.categories) === null || ref === void 0 ? void 0 : ref.nodes;\n    var postLists = data === null || data === void 0 ? void 0 : (ref1 = data.informationalPost) === null || ref1 === void 0 ? void 0 : ref1.nodes;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        first;\n        return function() {\n            second;\n        };\n    }, [\n        postLists\n    ]);\n    var getListPosts = function(item) {\n        setCategory(item.name);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (category) {\n            callGetListPosts({\n                variables: {\n                    categoryName: category\n                }\n            });\n        }\n    }, [\n        category\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 64,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            onClick: function() {\n                                return getListPosts(item);\n                            },\n                            className: \"nav-link mt-4\",\n                            \"data-toggle\": \"tab\",\n                            href: \"#\",\n                            role: \"tab\",\n                            \"aria-selected\": \"false\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: item.name\n                                })\n                            })\n                        });\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Posts by category\"\n                }),\n                postLists === null || postLists === void 0 ? void 0 : postLists.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"card\",\n                        __source: {\n                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                width: \"200\",\n                                height: \"100\",\n                                src: item.featuredImage.nodes.uri,\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                },\n                                __self: _this1,\n                                children: item.title\n                            })\n                        ]\n                    });\n                })\n            ]\n        })\n    }));\n};\n_s1(Category, \"biLXLrhJVbxaT/ouheuAaNr1Fp4=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useLazyQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhdGVnb3J5L2luZGV4LmpzPzJhMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5jb25zdCBDYXRlZ29yeSA9ICgpID0+IHtcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgR0VUX0NBVEVHT1JZID0gZ3FsYFxuICAgIHF1ZXJ5IEdyYXBoUUwge1xuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIG5vZGVzIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdXJpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IEdFVF9MSVNUX1BPU1RTID0gZ3FsYFxuICAgIHF1ZXJ5IEdyYXBoUUwoJGNhdGVnb3J5TmFtZTogU3RyaW5nISkge1xuICAgICAgaW5mb3JtYXRpb25hbFBvc3Qod2hlcmU6IHsgY2F0ZWdvcnlOYW1lOiAkY2F0ZWdvcnlOYW1lIH0pIHtcbiAgICAgICAgbm9kZXMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGxpbmtcbiAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICB1cmlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0NBVEVHT1JZKTtcbiAgY29uc3QgW2NhbGxHZXRMaXN0UG9zdHMsIHsgZGF0YTogbGlzdFBvc3RzIH1dID0gdXNlTGF6eVF1ZXJ5KEdFVF9MSVNUX1BPU1RTLCB7XG4gICAgZmV0Y2hQb2xpY3k6IFwibmV0d29yay1vbmx5XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGRhdGE/LmNhdGVnb3JpZXM/Lm5vZGVzO1xuICBjb25zdCBwb3N0TGlzdHMgPSBkYXRhPy5pbmZvcm1hdGlvbmFsUG9zdD8ubm9kZXM7XG51c2VFZmZlY3QoKCkgPT4ge1xuICBmaXJzdFxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgc2Vjb25kXG4gIH1cbn0sIFtwb3N0TGlzdHNdKVxuXG4gIGNvbnN0IGdldExpc3RQb3N0cyA9IChpdGVtKSA9PiB7XG4gICAgc2V0Q2F0ZWdvcnkoaXRlbS5uYW1lKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2F0ZWdvcnkpIHtcbiAgICAgIGNhbGxHZXRMaXN0UG9zdHMoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBjYXRlZ29yeU5hbWU6IGNhdGVnb3J5LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbY2F0ZWdvcnldKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNhdGVsb2d5PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVsb2d5IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7Y2F0ZWdvcnlMaXN0Py5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldExpc3RQb3N0cyhpdGVtKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbXQtNFwiXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBpZD1cIm15VGFiXCJcbiAgICAgICAgICAgICAgICByb2xlPVwidGFibGlzdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcm91bmRlZCBoLTIwIG0tMyBwLTMgbmF2LWl0ZW0gbS00IGJnLWN5YW4tNTAwIHNoYWRvdy1sZyBzaGFkb3ctY3lhbi01MDAvNTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Qb3N0cyBieSBjYXRlZ29yeTwvcD5cbiAgICAgICAge3Bvc3RMaXN0cz8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmZlYXR1cmVkSW1hZ2Uubm9kZXMudXJpfVxuICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VRdWVyeSIsInVzZUxhenlRdWVyeSIsImdxbCIsIkNhdGVnb3J5IiwiZGF0YSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJHRVRfQ0FURUdPUlkiLCJHRVRfTElTVF9QT1NUUyIsImxvYWRpbmciLCJlcnJvciIsImZldGNoUG9saWN5IiwiY2FsbEdldExpc3RQb3N0cyIsImxpc3RQb3N0cyIsImNhdGVnb3J5TGlzdCIsImNhdGVnb3JpZXMiLCJub2RlcyIsInBvc3RMaXN0cyIsImluZm9ybWF0aW9uYWxQb3N0IiwiZmlyc3QiLCJzZWNvbmQiLCJnZXRMaXN0UG9zdHMiLCJpdGVtIiwibmFtZSIsInZhcmlhYmxlcyIsImNhdGVnb3J5TmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJhIiwib25DbGljayIsImRhdGEtdG9nZ2xlIiwiaHJlZiIsInJvbGUiLCJhcmlhLXNlbGVjdGVkIiwidWwiLCJpZCIsImxpIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJmZWF0dXJlZEltYWdlIiwidXJpIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});