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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      categories {\\n        nodes {\\n          name\\n          slug\\n          id\\n          uri\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    query GraphQL {\\n      informationalPost(where: { categoryName: \",\n        \" }) {\\n        nodes {\\n          title\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar Category = function() {\n    var _this1 = _this;\n    var ref;\n    _s1();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), category = ref1[0], setCategory = ref1[1];\n    var GET_CATEGORY = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject());\n    var GET_LIST_POSTS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql)(_templateObject1(), category === null || category === void 0 ? void 0 : category.name);\n    useEffect(function() {\n        callGetListPosts();\n    }, [\n        third\n    ]);\n    var ref2 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_CATEGORY), loading = ref2.loading, error = ref2.error, data = ref2.data;\n    var ref3 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(GET_LIST_POSTS, {\n        fetchPolicy: \"network-only\"\n    }), 2), callGetListPosts = ref3[0], ref4 = ref3[1], listPosts = ref4.data;\n    var categoryList = data === null || data === void 0 ? void 0 : (ref = data.categories) === null || ref === void 0 ? void 0 : ref.nodes;\n    var getListPosts = function(item) {\n        setCategory(item);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 41,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map(function(item) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            onClick: function() {\n                                return getListPosts(item);\n                            },\n                            className: \"nav-link mt-4\",\n                            \"data-toggle\": \"tab\",\n                            href: \"#\",\n                            role: \"tab\",\n                            \"aria-selected\": \"false\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                },\n                                __self: _this1,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this1,\n                                    children: item.name\n                                })\n                            })\n                        });\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s1(Category, \"0PGthbM5n0zLNWQKLuYe9d7THxg=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR2pDLENBV3pCOzs7Ozs7Ozs7UUFDMkIsQ0FFa0I7UUFBaUIsQ0FNOUQ7Ozs7Ozs7O0FBdEJGLEdBQUssQ0FBQ0ssUUFBUSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7O1FBZ0NEQyxHQUFnQjs7SUEvQnJDLEdBQUssQ0FBMkJMLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXRDTSxRQUFRLEdBQWlCTixJQUFjLEtBQTdCTyxXQUFXLEdBQUlQLElBQWM7SUFDOUMsR0FBSyxDQUFDUSxZQUFZLEdBQUdQLG1EQUFHO0lBWXhCLEdBQUssQ0FBQ1EsY0FBYyxHQUFHUixtREFBRyxxQkFFcUJLLFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsSUFBSSxDQUFKQSxDQUFjLEdBQWRBLFFBQVEsQ0FBRUksSUFBSTtJQU83REMsU0FBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmQyxnQkFBZ0I7SUFDbEIsQ0FBQyxFQUFFLENBQUNDO1FBQUFBLEtBQUs7SUFBQSxDQUFDO0lBRVYsR0FBSyxDQUE0QlgsSUFBc0IsR0FBdEJBLHdEQUFRLENBQUNNLFlBQVksR0FBOUNNLE9BQU8sR0FBa0JaLElBQXNCLENBQS9DWSxPQUFPLEVBQUVDLEtBQUssR0FBV2IsSUFBc0IsQ0FBdENhLEtBQUssRUFBRVYsSUFBSSxHQUFLSCxJQUFzQixDQUEvQkcsSUFBSTtJQUM1QixHQUFLLENBQTJDRixJQUU5QyxrQkFGOENBLDREQUFZLENBQUNNLGNBQWMsRUFBRSxDQUFDO1FBQzVFTyxXQUFXLEVBQUUsQ0FBYztJQUM3QixDQUFDLE9BRk1KLGdCQUFnQixHQUF5QlQsSUFFOUMsWUFGOENBLElBRTlDLEtBRitCYyxTQUFTLFFBQWZaLElBQUk7SUFJL0IsR0FBSyxDQUFDYSxZQUFZLEdBQUdiLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLElBQWhCQSxHQUFnQixHQUFoQkEsSUFBSSxDQUFFYyxVQUFVLGNBQWhCZCxHQUFnQixLQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsSUFBSSxDQUFKQSxDQUFnQixHQUFoQkEsR0FBZ0IsQ0FBRWUsS0FBSztJQUU1QyxHQUFLLENBQUNDLFlBQVksR0FBRyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1FBQzlCZixXQUFXLENBQUNlLElBQUk7SUFDbEIsQ0FBQztJQUNELE1BQU0sc0VBQ0hDLENBQUc7Ozs7Ozs7d0ZBQ0RBLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXVCOzs7Ozs7OztxRkFDbkNDLENBQUM7b0JBQUNELFNBQVMsRUFBQyxDQUFhOzs7Ozs7OzhCQUFDLENBQVE7O3FGQUNsQ0QsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQThCOzs7Ozs7OzhCQUMxQ04sWUFBWSxhQUFaQSxZQUFZLEtBQVpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLFlBQVksQ0FBRVEsR0FBRyxDQUFDLFFBQVEsQ0FBUEosSUFBSTtzQ0FDdEIsTUFDVCxDQUFDLHVEQURTSyxDQUFDOzRCQUNBQyxPQUFPLEVBQUUsUUFBUTtnQ0FBRlAsTUFBTSxDQUFOQSxZQUFZLENBQUNDLElBQUk7OzRCQUNoQ0UsU0FBUyxFQUFDLENBQWU7NEJBQ3pCSyxDQUFXLGNBQUMsQ0FBSzs0QkFDakJDLElBQUksRUFBQyxDQUFHOzRCQUNSQyxJQUFJLEVBQUMsQ0FBSzs0QkFDVkMsQ0FBYSxnQkFBQyxDQUFPOzs7Ozs7OzJHQUVwQkMsQ0FBRTtnQ0FDRFQsU0FBUyxFQUFDLENBQTBCO2dDQUNwQ1UsRUFBRSxFQUFDLENBQU87Z0NBQ1ZILElBQUksRUFBQyxDQUFTOzs7Ozs7OytHQUViSSxDQUFFO29DQUFDWCxTQUFTLEVBQUMsQ0FBc0c7Ozs7Ozs7OENBQ2pIRixJQUFJLENBQUNaLElBQUk7Ozs7Ozs7OztBQVM1QixDQUFDO0lBbEVLTixRQUFROztRQTJCcUJGLG9EQUFRO1FBQ09DLHdEQUFZOzs7S0E1QnhEQyxRQUFRO0FBbUVkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvaW5kZXguanM/MmEzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnksIHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuY29uc3QgQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IEdFVF9DQVRFR09SWSA9IGdxbGBcbiAgICBxdWVyeSBHcmFwaFFMIHtcbiAgICAgIGNhdGVnb3JpZXMge1xuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBpZFxuICAgICAgICAgIHVyaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCBHRVRfTElTVF9QT1NUUyA9IGdxbGBcbiAgICBxdWVyeSBHcmFwaFFMIHtcbiAgICAgIGluZm9ybWF0aW9uYWxQb3N0KHdoZXJlOiB7IGNhdGVnb3J5TmFtZTogJHtjYXRlZ29yeT8ubmFtZX0gfSkge1xuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjYWxsR2V0TGlzdFBvc3RzKCk7XG4gIH0sIFt0aGlyZF0pXG4gIFxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfQ0FURUdPUlkpO1xuICBjb25zdCBbY2FsbEdldExpc3RQb3N0cywgeyBkYXRhOiBsaXN0UG9zdHMgfV0gPSB1c2VMYXp5UXVlcnkoR0VUX0xJU1RfUE9TVFMsIHtcbiAgICBmZXRjaFBvbGljeTogXCJuZXR3b3JrLW9ubHlcIixcbiAgfSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlMaXN0ID0gZGF0YT8uY2F0ZWdvcmllcz8ubm9kZXM7XG5cbiAgY29uc3QgZ2V0TGlzdFBvc3RzID0gKGl0ZW0pID0+IHtcbiAgICBzZXRDYXRlZ29yeShpdGVtKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5DYXRlbG9neTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlbG9neSBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAge2NhdGVnb3J5TGlzdD8ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZXRMaXN0UG9zdHMoaXRlbSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIG10LTRcIlxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgcm9sZT1cInRhYlwiXG4gICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJteVRhYlwiXG4gICAgICAgICAgICAgICAgcm9sZT1cInRhYmxpc3RcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHJvdW5kZWQgaC0yMCBtLTMgcC0zIG5hdi1pdGVtIG0tNCBiZy1jeWFuLTUwMCBzaGFkb3ctbGcgc2hhZG93LWN5YW4tNTAwLzUwIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ3FsIiwidXNlUXVlcnkiLCJ1c2VMYXp5UXVlcnkiLCJDYXRlZ29yeSIsImRhdGEiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiR0VUX0NBVEVHT1JZIiwiR0VUX0xJU1RfUE9TVFMiLCJuYW1lIiwidXNlRWZmZWN0IiwiY2FsbEdldExpc3RQb3N0cyIsInRoaXJkIiwibG9hZGluZyIsImVycm9yIiwiZmV0Y2hQb2xpY3kiLCJsaXN0UG9zdHMiLCJjYXRlZ29yeUxpc3QiLCJjYXRlZ29yaWVzIiwibm9kZXMiLCJnZXRMaXN0UG9zdHMiLCJpdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsImEiLCJvbkNsaWNrIiwiZGF0YS10b2dnbGUiLCJocmVmIiwicm9sZSIsImFyaWEtc2VsZWN0ZWQiLCJ1bCIsImlkIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ })

});