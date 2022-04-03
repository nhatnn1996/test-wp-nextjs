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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n          uri\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL($categoryName: String!) {\\n      informationalPost(where: { categoryName: $categoryName }) {\\n        nodes {\\n          title\\n          slug\\n          link\\n          id\\n          featuredImage {\\n            node {\\n              uri\\n            }\\n          }\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref6, ref1;\n    _s1();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var GET_CATEGORY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject());\n    var GET_LIST_POSTS = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_templateObject1());\n    var ref2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(GET_CATEGORY, {\n        fetchPolicy: \"cache-and-network\"\n    }), loading = ref2.loading, error = ref2.error, data = ref2.data;\n    var ref3 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useLazyQuery)(GET_LIST_POSTS, {\n        fetchPolicy: \"network-only\"\n    }), 2), callGetListPosts = ref3[0], ref4 = ref3[1], listPosts = ref4.data;\n    var categoryList = data === null || data === void 0 ? void 0 : (ref6 = data.categories) === null || ref6 === void 0 ? void 0 : ref6.nodes;\n    var postLists = listPosts === null || listPosts === void 0 ? void 0 : (ref1 = listPosts.informationalPost) === null || ref1 === void 0 ? void 0 : ref1.nodes;\n    var getListPosts = function(item) {\n        console.log(item, 'item');\n        if (item) {\n        }\n    // router.push(\"/category/\" + item.slug);\n    };\n    var callGetPost = function(item) {\n        console.log(item, \"item\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 60,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            onClick: function() {\n                                return getListPosts(item);\n                            },\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: item.name\n                                })\n                            })\n                        });\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Posts by category\"\n                }),\n                postLists === null || postLists === void 0 ? void 0 : postLists.map(function(item) {\n                    var ref, ref5;\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"card flex border bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 text-white rounded\",\n                        onClick: function() {\n                            return callGetPost(item);\n                        },\n                        __source: {\n                            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                width: \"200\",\n                                height: \"100\",\n                                className: \"mr-3\",\n                                src: \"https://wordpress-749115-2523479.cloudwaysapps.com/\" + (item === null || item === void 0 ? void 0 : (ref = item.featuredImage) === null || ref === void 0 ? void 0 : (ref5 = ref.node) === null || ref5 === void 0 ? void 0 : ref5.uri),\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                },\n                                __self: _this1\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"mt-3\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                },\n                                __self: _this1,\n                                children: item.title\n                            })\n                        ]\n                    }));\n                })\n            ]\n        })\n    }));\n};\n_s1(Category, \"JcBSnG7YFVL3ed7AzpXnektGhXg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useLazyQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVk7OztLQW5DeERHLFFBQVE7QUE4RmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcz8yYTM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTGF6eVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IENhdGVnb3J5ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgR0VUX0NBVEVHT1JZID0gZ3FsYFxuICAgIHF1ZXJ5IEdyYXBoUUwge1xuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIG5vZGVzIHtcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdXJpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IEdFVF9MSVNUX1BPU1RTID0gZ3FsYFxuICAgIHF1ZXJ5IEdyYXBoUUwoJGNhdGVnb3J5TmFtZTogU3RyaW5nISkge1xuICAgICAgaW5mb3JtYXRpb25hbFBvc3Qod2hlcmU6IHsgY2F0ZWdvcnlOYW1lOiAkY2F0ZWdvcnlOYW1lIH0pIHtcbiAgICAgICAgbm9kZXMge1xuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGxpbmtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xuICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgIHVyaVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcblxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfQ0FURUdPUlksIHtcbiAgICBmZXRjaFBvbGljeTogXCJjYWNoZS1hbmQtbmV0d29ya1wiLFxuICB9KTtcbiAgY29uc3QgW2NhbGxHZXRMaXN0UG9zdHMsIHsgZGF0YTogbGlzdFBvc3RzIH1dID0gdXNlTGF6eVF1ZXJ5KEdFVF9MSVNUX1BPU1RTLCB7XG4gICAgZmV0Y2hQb2xpY3k6IFwibmV0d29yay1vbmx5XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGRhdGE/LmNhdGVnb3JpZXM/Lm5vZGVzO1xuICBjb25zdCBwb3N0TGlzdHMgPSBsaXN0UG9zdHM/LmluZm9ybWF0aW9uYWxQb3N0Py5ub2RlcztcbiAgY29uc3QgZ2V0TGlzdFBvc3RzID0gKGl0ZW0pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0sJ2l0ZW0nKTtcbiAgICAgIGlmKGl0ZW0pe1xuXG4gICAgICB9XG4gICAgLy8gcm91dGVyLnB1c2goXCIvY2F0ZWdvcnkvXCIgKyBpdGVtLnNsdWcpO1xuICAgXG4gIH07XG4gIGNvbnN0IGNhbGxHZXRQb3N0ID0gKGl0ZW0pID0+IHtcbiAgICBjb25zb2xlLmxvZyhpdGVtLCBcIml0ZW1cIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5DYXRlbG9neTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlbG9neSBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAge2NhdGVnb3J5TGlzdD8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGdldExpc3RQb3N0cyhpdGVtKX0+XG4gICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJteVRhYlwiXG4gICAgICAgICAgICAgICAgcm9sZT1cInRhYmxpc3RcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHJvdW5kZWQgaC0yMCBtLTMgcC0zIG5hdi1pdGVtIG0tNCBiZy1jeWFuLTUwMCBzaGFkb3ctbGcgc2hhZG93LWN5YW4tNTAwLzUwIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Qb3N0cyBieSBjYXRlZ29yeTwvcD5cbiAgICAgICAge3Bvc3RMaXN0cz8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZCBmbGV4IGJvcmRlciBiZy1jeWFuLTUwMCBzaGFkb3ctbGcgc2hhZG93LWN5YW4tNTAwLzUwIG10LTggdGV4dC13aGl0ZSByb3VuZGVkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhbGxHZXRQb3N0KGl0ZW0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0zXCJcbiAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vd29yZHByZXNzLTc0OTExNS0yNTIzNDc5LmNsb3Vkd2F5c2FwcHMuY29tL1wiICtcbiAgICAgICAgICAgICAgICBpdGVtPy5mZWF0dXJlZEltYWdlPy5ub2RlPy51cmlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtM1wiPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUXVlcnkiLCJ1c2VMYXp5UXVlcnkiLCJncWwiLCJ1c2VSb3V0ZXIiLCJDYXRlZ29yeSIsImRhdGEiLCJsaXN0UG9zdHMiLCJyb3V0ZXIiLCJHRVRfQ0FURUdPUlkiLCJHRVRfTElTVF9QT1NUUyIsImZldGNoUG9saWN5IiwibG9hZGluZyIsImVycm9yIiwiY2FsbEdldExpc3RQb3N0cyIsImNhdGVnb3J5TGlzdCIsImNhdGVnb3JpZXMiLCJub2RlcyIsInBvc3RMaXN0cyIsImluZm9ybWF0aW9uYWxQb3N0IiwiZ2V0TGlzdFBvc3RzIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJjYWxsR2V0UG9zdCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJtYXAiLCJvbkNsaWNrIiwidWwiLCJpZCIsInJvbGUiLCJsaSIsIm5hbWUiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImZlYXR1cmVkSW1hZ2UiLCJub2RlIiwidXJpIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});