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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n          uri\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL($categoryId: Int!) {\\n      informationalPost(where: { categoryId: $categoryId }) {\\n        nodes {\\n          title\\n          slug\\n          link\\n          id\\n          featuredImage {\\n            node {\\n              uri\\n            }\\n          }\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref6, ref1;\n    _s1();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var GET_CATEGORY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\n    var GET_LIST_POSTS = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject1());\n    var ref2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_CATEGORY, {\n        fetchPolicy: \"cache-and-network\"\n    }), loading = ref2.loading, error = ref2.error, data = ref2.data;\n    var ref3 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useLazyQuery)(GET_LIST_POSTS, {\n        fetchPolicy: \"cache-and-network\"\n    }), 2), callGetListPosts = ref3[0], ref4 = ref3[1], listPosts = ref4.data;\n    var categoryList = data === null || data === void 0 ? void 0 : (ref6 = data.categories) === null || ref6 === void 0 ? void 0 : ref6.nodes;\n    var postLists = listPosts === null || listPosts === void 0 ? void 0 : (ref1 = listPosts.informationalPost) === null || ref1 === void 0 ? void 0 : ref1.nodes;\n    var getListPosts = function(item) {\n        console.log(item, 'item');\n        // router.push(\"/category/\" + item.slug);\n        callGetListPosts({\n            variables: {\n                categoryId: item.id\n            }\n        });\n    };\n    var callGetPost = function(item) {\n        console.log(item, \"item\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 61,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            onClick: function() {\n                                return getListPosts(item);\n                            },\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: item.name\n                                })\n                            })\n                        });\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Posts by category\"\n                }),\n                postLists === null || postLists === void 0 ? void 0 : postLists.map(function(item) {\n                    var ref, ref5;\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"card flex border bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 text-white rounded\",\n                        onClick: function() {\n                            return callGetPost(item);\n                        },\n                        __source: {\n                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                width: \"200\",\n                                height: \"100\",\n                                className: \"mr-3\",\n                                src: \"https://wordpress-749115-2523479.cloudwaysapps.com/\" + (item === null || item === void 0 ? void 0 : (ref = item.featuredImage) === null || ref === void 0 ? void 0 : (ref5 = ref.node) === null || ref5 === void 0 ? void 0 : ref5.uri),\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"mt-3\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                },\n                                __self: _this1,\n                                children: item.title\n                            })\n                        ]\n                    }));\n                })\n            ]\n        })\n    }));\n};\n_s1(Category, \"JcBSnG7YFVL3ed7AzpXnektGhXg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useLazyQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFNM0MsQ0FBQztJQTlGS3ZDLFFBQVE7O1FBQ0dELGtEQUFTO1FBK0JTSCxvREFBUTtRQUdPQyx3REFBWTs7O0tBbkN4REcsUUFBUTtBQStGZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhdGVnb3J5L2luZGV4LmpzPzJhMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBHRVRfQ0FURUdPUlkgPSBncWxgXG4gICAgcXVlcnkgR3JhcGhRTCB7XG4gICAgICBjYXRlZ29yaWVzIHtcbiAgICAgICAgbm9kZXMge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgaWRcbiAgICAgICAgICB1cmlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgR0VUX0xJU1RfUE9TVFMgPSBncWxgXG4gICAgcXVlcnkgR3JhcGhRTCgkY2F0ZWdvcnlJZDogSW50ISkge1xuICAgICAgaW5mb3JtYXRpb25hbFBvc3Qod2hlcmU6IHsgY2F0ZWdvcnlJZDogJGNhdGVnb3J5SWQgfSkge1xuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgbGlua1xuICAgICAgICAgIGlkXG4gICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgdXJpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9DQVRFR09SWSwge1xuICAgIGZldGNoUG9saWN5OiBcImNhY2hlLWFuZC1uZXR3b3JrXCIsXG4gIH0pO1xuICBjb25zdCBbY2FsbEdldExpc3RQb3N0cywgeyBkYXRhOiBsaXN0UG9zdHMgfV0gPSB1c2VMYXp5UXVlcnkoR0VUX0xJU1RfUE9TVFMsIHtcbiAgICBmZXRjaFBvbGljeTogXCJjYWNoZS1hbmQtbmV0d29ya1wiLFxuICB9KTtcblxuICBjb25zdCBjYXRlZ29yeUxpc3QgPSBkYXRhPy5jYXRlZ29yaWVzPy5ub2RlcztcbiAgY29uc3QgcG9zdExpc3RzID0gbGlzdFBvc3RzPy5pbmZvcm1hdGlvbmFsUG9zdD8ubm9kZXM7XG4gIGNvbnN0IGdldExpc3RQb3N0cyA9IChpdGVtKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhpdGVtLCdpdGVtJyk7XG4gICAgLy8gcm91dGVyLnB1c2goXCIvY2F0ZWdvcnkvXCIgKyBpdGVtLnNsdWcpO1xuICAgIGNhbGxHZXRMaXN0UG9zdHMoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhdGVnb3J5SWQ6IGl0ZW0uaWQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICBjb25zdCBjYWxsR2V0UG9zdCA9IChpdGVtKSA9PiB7XG4gICAgY29uc29sZS5sb2coaXRlbSwgXCJpdGVtXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC00XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Q2F0ZWxvZ3k8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWxvZ3kgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHtjYXRlZ29yeUxpc3Q/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBnZXRMaXN0UG9zdHMoaXRlbSl9PlxuICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwibXlUYWJcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJsaXN0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciByb3VuZGVkIGgtMjAgbS0zIHAtMyBuYXYtaXRlbSBtLTQgYmctY3lhbi01MDAgc2hhZG93LWxnIHNoYWRvdy1jeWFuLTUwMC81MCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+UG9zdHMgYnkgY2F0ZWdvcnk8L3A+XG4gICAgICAgIHtwb3N0TGlzdHM/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQgZmxleCBib3JkZXIgYmctY3lhbi01MDAgc2hhZG93LWxnIHNoYWRvdy1jeWFuLTUwMC81MCBtdC04IHRleHQtd2hpdGUgcm91bmRlZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjYWxsR2V0UG9zdChpdGVtKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItM1wiXG4gICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3dvcmRwcmVzcy03NDkxMTUtMjUyMzQ3OS5jbG91ZHdheXNhcHBzLmNvbS9cIiArXG4gICAgICAgICAgICAgICAgaXRlbT8uZmVhdHVyZWRJbWFnZT8ubm9kZT8udXJpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTNcIj57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVF1ZXJ5IiwidXNlTGF6eVF1ZXJ5IiwiZ3FsIiwidXNlUm91dGVyIiwiQ2F0ZWdvcnkiLCJkYXRhIiwibGlzdFBvc3RzIiwicm91dGVyIiwiR0VUX0NBVEVHT1JZIiwiR0VUX0xJU1RfUE9TVFMiLCJmZXRjaFBvbGljeSIsImxvYWRpbmciLCJlcnJvciIsImNhbGxHZXRMaXN0UG9zdHMiLCJjYXRlZ29yeUxpc3QiLCJjYXRlZ29yaWVzIiwibm9kZXMiLCJwb3N0TGlzdHMiLCJpbmZvcm1hdGlvbmFsUG9zdCIsImdldExpc3RQb3N0cyIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwiY2F0ZWdvcnlJZCIsImlkIiwiY2FsbEdldFBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwib25DbGljayIsInVsIiwicm9sZSIsImxpIiwibmFtZSIsImltZyIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJ1cmkiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});