/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api-client/base/axios-client.js":
/*!*****************************************!*\
  !*** ./api-client/base/axios-client.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"constructCallBack\": () => (/* binding */ constructCallBack),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nlet callbackErrorAuthentication = ()=>{\n};\nconst constructCallBack = (handle)=>{\n    callbackErrorAuthentication = handle;\n};\nconst axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: process.env.API_URL + '/api',\n    headers: {\n        'Content-Type': 'application/json'\n    }\n});\n// Add a response interceptor\naxiosClient.interceptors.response.use(function(response) {\n    // Any status code that lie within the range of 2xx cause this function to trigger\n    // Do something with response data\n    return response.data;\n}, function(error) {\n    if (error.response.status === 401) {\n        callbackErrorAuthentication();\n    }\n    // Any status codes that falls outside the range of 2xx cause this function to trigger\n    // Do something with response error\n    return Promise.reject(error);\n});\naxiosClient.interceptors.request.use(function(config) {\n    var ref;\n    const token = window === null || window === void 0 ? void 0 : (ref = window.localStorage) === null || ref === void 0 ? void 0 : ref.getItem('token');\n    if (token) config.headers.Authorization = 'Bearer ' + token;\n    return config;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosClient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGktY2xpZW50L2Jhc2UvYXhpb3MtY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUI7QUFFekIsR0FBRyxDQUFDQywyQkFBMkIsT0FBUyxDQUFDO0FBQUEsQ0FBQztBQUVuQyxLQUFLLENBQUNDLGlCQUFpQixJQUFJQyxNQUFNLEdBQUssQ0FBQztJQUM1Q0YsMkJBQTJCLEdBQUdFLE1BQU07QUFDdEMsQ0FBQztBQUVELEtBQUssQ0FBQ0MsV0FBVyxHQUFHSixtREFBWSxDQUFDLENBQUM7SUFDaENNLE9BQU8sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sR0FBRyxDQUFNO0lBQ3JDQyxPQUFPLEVBQUUsQ0FBQztRQUNSLENBQWMsZUFBRSxDQUFrQjtJQUNwQyxDQUFDO0FBQ0gsQ0FBQztBQUVELEVBQTZCO0FBQzdCTixXQUFXLENBQUNPLFlBQVksQ0FBQ0MsUUFBUSxDQUFDQyxHQUFHLENBQ25DLFFBQVEsQ0FBRUQsUUFBUSxFQUFFLENBQUM7SUFDbkIsRUFBa0Y7SUFDbEYsRUFBa0M7SUFDbEMsTUFBTSxDQUFDQSxRQUFRLENBQUNFLElBQUk7QUFDdEIsQ0FBQyxFQUNELFFBQVEsQ0FBRUMsS0FBSyxFQUFFLENBQUM7SUFDaEIsRUFBRSxFQUFFQSxLQUFLLENBQUNILFFBQVEsQ0FBQ0ksTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2xDZiwyQkFBMkI7SUFDN0IsQ0FBQztJQUNELEVBQXNGO0lBQ3RGLEVBQW1DO0lBQ25DLE1BQU0sQ0FBQ2dCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLO0FBQzdCLENBQUM7QUFHSFgsV0FBVyxDQUFDTyxZQUFZLENBQUNRLE9BQU8sQ0FBQ04sR0FBRyxDQUFDLFFBQVEsQ0FBRU8sTUFBTSxFQUFFLENBQUM7UUFDeENDLEdBQW9CO0lBQWxDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHRCxNQUFNLGFBQU5BLE1BQU0sS0FBTkEsSUFBSSxDQUFKQSxDQUFvQixHQUFwQkEsSUFBSSxDQUFKQSxDQUFvQixJQUFwQkEsR0FBb0IsR0FBcEJBLE1BQU0sQ0FBRUUsWUFBWSxjQUFwQkYsR0FBb0IsS0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLElBQUksQ0FBSkEsQ0FBb0IsR0FBcEJBLEdBQW9CLENBQUVHLE9BQU8sQ0FBQyxDQUFPO0lBQ25ELEVBQUUsRUFBRUYsS0FBSyxFQUFFRixNQUFNLENBQUNWLE9BQU8sQ0FBQ2UsYUFBYSxHQUFHLENBQVMsV0FBR0gsS0FBSztJQUMzRCxNQUFNLENBQUNGLE1BQU07QUFDZixDQUFDO0FBRUQsaUVBQWVoQixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi13ZWJzaXRlLy4vYXBpLWNsaWVudC9iYXNlL2F4aW9zLWNsaWVudC5qcz8zMTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmxldCBjYWxsYmFja0Vycm9yQXV0aGVudGljYXRpb24gPSAoKSA9PiB7fTtcblxuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdENhbGxCYWNrID0gKGhhbmRsZSkgPT4ge1xuICBjYWxsYmFja0Vycm9yQXV0aGVudGljYXRpb24gPSBoYW5kbGU7XG59O1xuXG5jb25zdCBheGlvc0NsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQSV9VUkwgKyAnL2FwaScsXG4gIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH1cbn0pO1xuXG4vLyBBZGQgYSByZXNwb25zZSBpbnRlcmNlcHRvclxuYXhpb3NDbGllbnQuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgLy8gQW55IHN0YXR1cyBjb2RlIHRoYXQgbGllIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMnh4IGNhdXNlIHRoaXMgZnVuY3Rpb24gdG8gdHJpZ2dlclxuICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlc3BvbnNlIGRhdGFcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcbiAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICBjYWxsYmFja0Vycm9yQXV0aGVudGljYXRpb24oKTtcbiAgICB9XG4gICAgLy8gQW55IHN0YXR1cyBjb2RlcyB0aGF0IGZhbGxzIG91dHNpZGUgdGhlIHJhbmdlIG9mIDJ4eCBjYXVzZSB0aGlzIGZ1bmN0aW9uIHRvIHRyaWdnZXJcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBlcnJvclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbik7XG5cbmF4aW9zQ2xpZW50LmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGNvbnN0IHRva2VuID0gd2luZG93Py5sb2NhbFN0b3JhZ2U/LmdldEl0ZW0oJ3Rva2VuJyk7XG4gIGlmICh0b2tlbikgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCZWFyZXIgJyArIHRva2VuO1xuICByZXR1cm4gY29uZmlnO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGF4aW9zQ2xpZW50O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiY2FsbGJhY2tFcnJvckF1dGhlbnRpY2F0aW9uIiwiY29uc3RydWN0Q2FsbEJhY2siLCJoYW5kbGUiLCJheGlvc0NsaWVudCIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiQVBJX1VSTCIsImhlYWRlcnMiLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImRhdGEiLCJlcnJvciIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY29uZmlnIiwid2luZG93IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQXV0aG9yaXphdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api-client/base/axios-client.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/base/axios-client */ \"./api-client/base/axios-client.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"./node_modules/katex/dist/katex.min.css\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category */ \"./pages/category/index.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst variants = {\n    hidden: {\n        opacity: 0,\n        x: -200,\n        y: 0\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: -100\n    }\n};\nfunction MyApp({ Component , pageProps  }) {\n    // const { logout, profile, error } = useAuth();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const handleErrorAuthentication = ()=>{\n        logout();\n    };\n    (0,_api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__.constructCallBack)(handleErrorAuthentication);\n    const permission = Component.permission;\n    const theme = Component.layout;\n    const asPath = router.asPath;\n    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_8__.ApolloClient({\n        uri: 'https://wordpress-749115-2523479.cloudwaysapps.com/graphql',\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_8__.InMemoryCache()\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n            lineNumber: 39,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_apollo_client__WEBPACK_IMPORTED_MODULE_8__.ApolloProvider, {\n            client: client,\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {\n                    value: {\n                        fetcher: (url)=>{\n                            return _api_base_axios_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(url);\n                        },\n                        dedupingInterval: 60 * 60 * 1000,\n                        revalidateOnFocus: false,\n                        shouldRetryOnError: false\n                    },\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/_app.js\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNMO0FBQytDO0FBQ3pDO0FBQ0U7QUFDTTtBQUNOO0FBUVY7QUFFdkIsS0FBSyxDQUFDVyxRQUFRLEdBQUcsQ0FBQztJQUNoQkMsTUFBTSxFQUFFLENBQUM7UUFBQ0MsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxHQUFHLEdBQUc7UUFBRUMsQ0FBQyxFQUFFLENBQUM7SUFBQyxDQUFDO0lBQ3JDQyxLQUFLLEVBQUUsQ0FBQztRQUFDSCxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztJQUFDLENBQUM7SUFDakNFLElBQUksRUFBRSxDQUFDO1FBQUNKLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsR0FBRyxHQUFHO0lBQUMsQ0FBQztBQUNyQyxDQUFDO1NBRVFHLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLEVBQWdEO0lBQ2hELEtBQUssQ0FBQ0MsTUFBTSxHQUFHakIsc0RBQVM7SUFDeEIsS0FBSyxDQUFDa0IseUJBQXlCLE9BQVMsQ0FBQztRQUN2Q0MsTUFBTTtJQUNSLENBQUM7SUFDRHJCLHlFQUFpQixDQUFDb0IseUJBQXlCO0lBQzNDLEtBQUssQ0FBQ0UsVUFBVSxHQUFHTCxTQUFTLENBQUNLLFVBQVU7SUFDdkMsS0FBSyxDQUFDQyxLQUFLLEdBQUdOLFNBQVMsQ0FBQ08sTUFBTTtJQUU5QixLQUFLLENBQUNDLE1BQU0sR0FBR04sTUFBTSxDQUFDTSxNQUFNO0lBQzVCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ3RCLHdEQUFZLENBQUMsQ0FBQztRQUMvQnVCLEdBQUcsRUFBRSxDQUE0RDtRQUNqRUMsS0FBSyxFQUFFLEdBQUcsQ0FBQ3ZCLHlEQUFhO0lBQzFCLENBQUM7SUFDRCxNQUFNLHNFQUNIUCx1REFBYzs7Ozs7Ozt3RkFDWlEsMERBQWM7WUFBQ29CLE1BQU0sRUFBRUEsTUFBTTs7Ozs7Ozs7cUZBQzNCdkIsaURBQVE7Ozs7Ozs7O3FGQUNWRiwwQ0FBUztvQkFDUjZCLEtBQUssRUFBRSxDQUFDO3dCQUNOQyxPQUFPLEdBQUdDLEdBQUcsR0FBSyxDQUFDOzRCQUNqQixNQUFNLENBQUNqQyxrRUFBZSxDQUFDaUMsR0FBRzt3QkFDNUIsQ0FBQzt3QkFDREUsZ0JBQWdCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO3dCQUNoQ0MsaUJBQWlCLEVBQUUsS0FBSzt3QkFDeEJDLGtCQUFrQixFQUFFLEtBQUs7b0JBQzNCLENBQUM7Ozs7Ozs7Ozs7O0FBWVQsQ0FBQztBQUVELGlFQUFlcEIsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4td2Vic2l0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zQ2xpZW50LCB7IGNvbnN0cnVjdENhbGxCYWNrIH0gZnJvbSAnQC9hcGkvYmFzZS9heGlvcy1jbGllbnQnO1xuaW1wb3J0IHsgU1dSQ29uZmlnIH0gZnJvbSAnc3dyJztcbmltcG9ydCAna2F0ZXgvZGlzdC9rYXRleC5taW4uY3NzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeVwiXG5cbmltcG9ydCB7XG4gIEFwb2xsb0NsaWVudCxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgQXBvbGxvUHJvdmlkZXIsXG4gIHVzZVF1ZXJ5LFxuICBncWxcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeDogLTIwMCwgeTogMCB9LFxuICBlbnRlcjogeyBvcGFjaXR5OiAxLCB4OiAwLCB5OiAwIH0sXG4gIGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogMCwgeTogLTEwMCB9XG59O1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgLy8gY29uc3QgeyBsb2dvdXQsIHByb2ZpbGUsIGVycm9yIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBoYW5kbGVFcnJvckF1dGhlbnRpY2F0aW9uID0gKCkgPT4ge1xuICAgIGxvZ291dCgpO1xuICB9O1xuICBjb25zdHJ1Y3RDYWxsQmFjayhoYW5kbGVFcnJvckF1dGhlbnRpY2F0aW9uKTtcbiAgY29uc3QgcGVybWlzc2lvbiA9IENvbXBvbmVudC5wZXJtaXNzaW9uO1xuICBjb25zdCB0aGVtZSA9IENvbXBvbmVudC5sYXlvdXQ7XG5cbiAgY29uc3QgYXNQYXRoID0gcm91dGVyLmFzUGF0aDtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiAnaHR0cHM6Ly93b3JkcHJlc3MtNzQ5MTE1LTI1MjM0NzkuY2xvdWR3YXlzYXBwcy5jb20vZ3JhcGhxbCcsXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAgPENhdGVnb3J5PjwvQ2F0ZWdvcnk+XG4gICAgICA8U1dSQ29uZmlnXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgZmV0Y2hlcjogKHVybCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF4aW9zQ2xpZW50LmdldCh1cmwpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVkdXBpbmdJbnRlcnZhbDogNjAgKiA2MCAqIDEwMDAsIC8vIDFoclxuICAgICAgICAgIHJldmFsaWRhdGVPbkZvY3VzOiBmYWxzZSxcbiAgICAgICAgICBzaG91bGRSZXRyeU9uRXJyb3I6IGZhbHNlXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsvKiA8SGVhZGVyIC8+ICovfVxuICAgICAgICB7LyogPFRoZW1lTWFuYWdlciB0aGVtZT17dGhlbWV9PiAqL31cbiAgICAgICAgICB7LyogPE1pZGRsZXdhcmVBdXRoIGF1dGg9e3Blcm1pc3Npb24gIT09ICdwdWJsaWMnfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXthc1BhdGh9IC8+XG4gICAgICAgICAgPC9NaWRkbGV3YXJlQXV0aD4gKi99XG4gICAgICAgIHsvKiA8L1RoZW1lTWFuYWdlcj4gKi99XG4gICAgICA8L1NXUkNvbmZpZz5cbiAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvc0NsaWVudCIsImNvbnN0cnVjdENhbGxCYWNrIiwiU1dSQ29uZmlnIiwidXNlUm91dGVyIiwiQ2F0ZWdvcnkiLCJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiQXBvbGxvUHJvdmlkZXIiLCJ1c2VRdWVyeSIsImdxbCIsInZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsIngiLCJ5IiwiZW50ZXIiLCJleGl0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVFcnJvckF1dGhlbnRpY2F0aW9uIiwibG9nb3V0IiwicGVybWlzc2lvbiIsInRoZW1lIiwibGF5b3V0IiwiYXNQYXRoIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiLCJGcmFnbWVudCIsInZhbHVlIiwiZmV0Y2hlciIsInVybCIsImdldCIsImRlZHVwaW5nSW50ZXJ2YWwiLCJyZXZhbGlkYXRlT25Gb2N1cyIsInNob3VsZFJldHJ5T25FcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/category/index.js":
/*!*********************************!*\
  !*** ./pages/category/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Category = ()=>{\n    var ref;\n    const { 0: category , 1: setCategory  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const GET_CATEGORY = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`\n    query GraphQL {\n      categories {\n        nodes {\n          name\n          slug\n          id\n          uri\n        }\n      }\n    }\n  `;\n    const GET_LIST_POSTS = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`\n      query GraphQL {\n        informationalPost(where: { categoryName: ${category === null || category === void 0 ? void 0 : category.name} }) {\n          nodes {\n            title\n          }\n        }\n      }\n    `;\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(GET_CATEGORY);\n    const [callGetListPosts, { data: listPosts  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(GET_LIST_POSTS, {\n        fetchPolicy: \"network-only\"\n    });\n    const categoryList = data === null || data === void 0 ? void 0 : (ref = data.categories) === null || ref === void 0 ? void 0 : ref.nodes;\n    const getListPosts = (item)=>{\n        setCategory(item);\n        callGetListPosts({\n            variables: {\n                categoryName: item.name\n            }\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n            lineNumber: 43,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto p-4\",\n            __source: {\n                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    className: \"text-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: \"Catelogy\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"catelogy flex justify-center\",\n                    __source: {\n                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: categoryList === null || categoryList === void 0 ? void 0 : categoryList.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            onClick: ()=>getListPosts(item)\n                            ,\n                            className: \"nav-link mt-4\",\n                            \"data-toggle\": \"tab\",\n                            href: \"#\",\n                            role: \"tab\",\n                            \"aria-selected\": \"false\",\n                            __source: {\n                                fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                                className: \"nav nav-tabs text-center\",\n                                id: \"myTab\",\n                                role: \"tablist\",\n                                __source: {\n                                    fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                },\n                                __self: undefined,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    className: \"cursor-pointer rounded h-20 m-3 p-3 nav-item m-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white\",\n                                    __source: {\n                                        fileName: \"/Users/admin/Documents/Freelance/test-wp-nextjs/pages/category/index.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    },\n                                    __self: undefined,\n                                    children: item.name\n                                })\n                            })\n                        })\n                    )\n                })\n            ]\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNVO0FBQzVELEtBQUssQ0FBQ00sUUFBUSxPQUFTLENBQUM7UUE2QkRDLEdBQWdCO0lBNUJyQyxLQUFLLE1BQUVDLFFBQVEsTUFBRUMsV0FBVyxNQUFJUiwrQ0FBUSxDQUFDLElBQUk7SUFDN0MsS0FBSyxDQUFDUyxZQUFZLEdBQUdQLCtDQUFHLENBQUM7SUFZekIsS0FBSyxDQUFDUTtJQVVOLEtBQUssQ0FBQyxDQUFDLENBQUNFO0lBQ1IsS0FBSyxFQUFFRTtRQUNMRTtJQUNGLENBQUM7SUFFRCxLQUFLLENBQUNDO0lBRU4sS0FBSyxDQUFDRztRQUNKWjs7OztZQUlFLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU07Ozs7Ozs7c0NBRURnQixDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VGQUVoQztvQkFBQ0EsU0FBUyxFQUFDLENBQThCOzs7Ozs7Ozs0QkFHdkNJLEVBQUFBLHNEQUFBQSxDQUFPLE1BQVFUOzs0QkFDZks7NEJBQ0FLLENBQVcsY0FBQyxDQUFLOzRCQUNqQkMsSUFBSSxFQUFDLENBQUc7NEJBQ1JDLElBQUksRUFBQyxDQUFLOzs7Ozs7Ozt5REFHVEUsQ0FBRTtnQ0FDRFQ7Z0NBQ0FVLEVBQUUsRUFBQyxDQUFPOzs7Ozs7Ozs7b0NBR05WOzs7Ozs7Ozs7Ozs7Ozs7O0FBVXBCLENBQUM7QUFDRCxNQUFNLFNBQVNwQixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhcm4td2Vic2l0ZS8uL3BhZ2VzL2NhdGVnb3J5L2luZGV4LmpzPzJhMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnksIHVzZUxhenlRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuY29uc3QgQ2F0ZWdvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IEdFVF9DQVRFR09SWSA9IGdxbGBcbiAgICBxdWVyeSBHcmFwaFFMIHtcbiAgICAgIGNhdGVnb3JpZXMge1xuICAgICAgICBub2RlcyB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgICBpZFxuICAgICAgICAgIHVyaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCBHRVRfTElTVF9QT1NUUyA9IGdxbGBcbiAgICAgIHF1ZXJ5IEdyYXBoUUwge1xuICAgICAgICBpbmZvcm1hdGlvbmFsUG9zdCh3aGVyZTogeyBjYXRlZ29yeU5hbWU6ICR7Y2F0ZWdvcnk/Lm5hbWV9IH0pIHtcbiAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0NBVEVHT1JZKTtcbiAgY29uc3QgW2NhbGxHZXRMaXN0UG9zdHMsIHsgZGF0YTogbGlzdFBvc3RzIH1dID0gdXNlTGF6eVF1ZXJ5KEdFVF9MSVNUX1BPU1RTLCB7XG4gICAgZmV0Y2hQb2xpY3k6IFwibmV0d29yay1vbmx5XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGNhdGVnb3J5TGlzdCA9IGRhdGE/LmNhdGVnb3JpZXM/Lm5vZGVzO1xuXG4gIGNvbnN0IGdldExpc3RQb3N0cyA9IChpdGVtKSA9PiB7XG4gICAgc2V0Q2F0ZWdvcnkoaXRlbSk7XG4gICAgY2FsbEdldExpc3RQb3N0cyh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgY2F0ZWdvcnlOYW1lOiBpdGVtLm5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNhdGVsb2d5PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVsb2d5IGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7Y2F0ZWdvcnlMaXN0Py5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdldExpc3RQb3N0cyhpdGVtKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbXQtNFwiXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICByb2xlPVwidGFiXCJcbiAgICAgICAgICAgICAgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBpZD1cIm15VGFiXCJcbiAgICAgICAgICAgICAgICByb2xlPVwidGFibGlzdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcm91bmRlZCBoLTIwIG0tMyBwLTMgbmF2LWl0ZW0gbS00IGJnLWN5YW4tNTAwIHNoYWRvdy1sZyBzaGFkb3ctY3lhbi01MDAvNTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJncWwiLCJ1c2VRdWVyeSIsInVzZUxhenlRdWVyeSIsIkNhdGVnb3J5IiwiZGF0YSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJHRVRfQ0FURUdPUlkiLCJHRVRfTElTVF9QT1NUUyIsIm5hbWUiLCJsb2FkaW5nIiwiZXJyb3IiLCJjYWxsR2V0TGlzdFBvc3RzIiwibGlzdFBvc3RzIiwiZmV0Y2hQb2xpY3kiLCJjYXRlZ29yeUxpc3QiLCJjYXRlZ29yaWVzIiwibm9kZXMiLCJnZXRMaXN0UG9zdHMiLCJpdGVtIiwidmFyaWFibGVzIiwiY2F0ZWdvcnlOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsImEiLCJvbkNsaWNrIiwiZGF0YS10b2dnbGUiLCJocmVmIiwicm9sZSIsImFyaWEtc2VsZWN0ZWQiLCJ1bCIsImlkIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/index.js\n");

/***/ }),

/***/ "./node_modules/katex/dist/katex.min.css":
/*!***********************************************!*\
  !*** ./node_modules/katex/dist/katex.min.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("swr");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();