"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/MyForm.jsx":
/*!*******************************!*\
  !*** ./components/MyForm.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst MyForm = ()=>{\n    _s();\n    const [nameOption, setNameOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fullName, setFullName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    // const [arrivalDate, setArrivalDate] = useState(new Date());\n    const [timeOut, setTimeOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const [timeIn, setTimeIn] = useState(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleFormSubmit = (e)=>{\n        e.preventDefault();\n        // Format the data to be sent to the Telegram bot\n        const message = \"\\n    Full Name: \".concat(fullName.toUpperCase(), \"\\n     -Type: \").concat(nameOption, \"\\n     -Date: \").concat(date.toDateString(new Date()), \"\\n     -Time: \").concat(timeOut, \"\\n     -----------------------------\\n    Comment: \").concat(comment, \"\\n    \");\n        // Arrival Date: ${arrivalDate.toDateString(new Date())}\n        // Time: ${timeIn}\n        // Set your Telegram bot token and chat ID\n        const botToken = \"6522729915:AAEn3xO0gDpzcUPznx4gewhcT56bUKKTrnc\";\n        const chatId = \"-1002072072352\";\n        // Send the message to the Telegram bot\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"https://api.telegram.org/bot\".concat(botToken, \"/sendMessage\"), {\n            chat_id: chatId,\n            text: message\n        }).then((response)=>{\n            // Handle the response if needed\n            console.log(response.data);\n        }).catch((error)=>{\n            // Handle errors if any\n            console.error(error);\n        });\n        // Reset the form fields after submission\n        setNameOption(\"\");\n        setFullName(\"\");\n        setDate(new Date());\n        // setArrivalDate(new Date());\n        setTimeOut(\"\");\n        // setTimeIn(\"\");\n        setComment(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleFormSubmit,\n            className: \"bg-pink-400 drop-shadow-xl w-5/6 sm:w-2/3 m-auto mt-5 p-5 rounded-t-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl sm:text-2xl text-green-800 font-serif font-medium mb-3\",\n                    children: \"Check-In & Check-Out Form\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"nameOption\",\n                            className: \"block text-gray-700 font-sans \",\n                            children: \"Departure or Arrival?\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: nameOption,\n                            onChange: (e)=>setNameOption(e.target.value),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"please select option...\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"Departure\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"Arrival\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"Late Night\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"fullName\",\n                            className: \"block text-gray-700 font-sans \",\n                            children: \"Full Name\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"fullName\",\n                            placeholder: \"your full name...\",\n                            value: fullName,\n                            onChange: (e)=>setFullName(e.target.value),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"date\",\n                            className: \"block text-gray-700 font-sans \",\n                            children: \"Pick Date\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            id: \"date\",\n                            placeholderText: \"pick date...\",\n                            selected: date,\n                            onChange: (date)=>setDate(date),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"timeOut\",\n                            className: \"block text-gray-700 font-sans \",\n                            children: \"Pick Time\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"time\",\n                            id: \"timeOut\",\n                            placeholder: \"pick time...\",\n                            value: timeOut,\n                            onChange: (e)=>setTimeOut(e.target.value),\n                            className: \" px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 126,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"comment\",\n                            className: \"block text-gray-700 font-sans\",\n                            children: \"Detail:\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 173,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"comment\",\n                            placeholder: \"please provide more details following the option you've selected...\",\n                            value: comment,\n                            onChange: (e)=>setComment(e.target.value),\n                            className: \" w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            rows: \"4\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 176,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 172,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"mb-5 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 187,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n            lineNumber: 62,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n        lineNumber: 61,\n        columnNumber: 7\n    }, undefined);\n};\n_s(MyForm, \"Bti/7Zg9DdPlS5wjVD5RuBUAQ74=\");\n_c = MyForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyForm);\nvar _c;\n$RefreshReg$(_c, \"MyForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTXlGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ0U7QUFDVTtBQUMxQjtBQUUxQixNQUFNSSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLElBQUlVO0lBQ3JDLDhEQUE4RDtJQUM5RCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsNENBQTRDO0lBQzVDLE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNZSxtQkFBbUIsQ0FBQ0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsaURBQWlEO1FBQ2pELE1BQU1DLFVBQVUsb0JBRU5kLE9BREdFLFNBQVNhLFdBQVcsSUFBRyxrQkFFMUJYLE9BREFKLFlBQVcsa0JBRVhPLE9BREFILEtBQUtZLFlBQVksQ0FBQyxJQUFJVixTQUFRLGtCQUc3QkcsT0FGREYsU0FBUSx1REFFQyxPQUFSRSxTQUFRO1FBRW5CLHdEQUF3RDtRQUN2RCxrQkFBa0I7UUFFbkIsMENBQTBDO1FBQzFDLE1BQU1RLFdBQVc7UUFDakIsTUFBTUMsU0FBUztRQUVmLHVDQUF1QztRQUN2Q3BCLDZDQUFLQSxDQUNGcUIsSUFBSSxDQUFDLCtCQUF3QyxPQUFURixVQUFTLGlCQUFlO1lBQzNERyxTQUFTRjtZQUNURyxNQUFNUDtRQUNSLEdBQ0NRLElBQUksQ0FBQyxDQUFDQztZQUNMLGdDQUFnQztZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDRixTQUFTRyxJQUFJO1FBQzNCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOLHVCQUF1QjtZQUN2QkosUUFBUUksS0FBSyxDQUFDQTtRQUNoQjtRQUVGLHlDQUF5QztRQUN6QzNCLGNBQWM7UUFDZEUsWUFBWTtRQUNaRSxRQUFRLElBQUlDO1FBQ1osOEJBQThCO1FBQzlCRSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCRSxXQUFXO0lBQ2I7SUFFQSxxQkFDSSw4REFBQ21CO2tCQUNDLDRFQUFDQztZQUNDQyxVQUFVcEI7WUFDVnFCLFdBQVU7OzhCQUVWLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBaUU7Ozs7Ozs4QkFHL0UsOERBQUNIO29CQUFJRyxXQUFVOztzQ0FDZiw4REFBQ0U7NEJBQU1DLFNBQVE7NEJBQWFILFdBQVU7c0NBQWlDOzs7Ozs7c0NBR3JFLDhEQUFDSTs0QkFBT0MsT0FBT3JDOzRCQUVic0MsVUFBVSxDQUFDMUIsSUFBTVgsY0FBY1csRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDN0NMLFdBQVU7NEJBQ1ZRLFFBQVE7OzhDQUNSLDhEQUFDQzs4Q0FBTzs7Ozs7OzhDQUNSLDhEQUFDQTs4Q0FBTzs7Ozs7OzhDQUNSLDhEQUFDQTs4Q0FBTzs7Ozs7OzhDQUNSLDhEQUFDQTs4Q0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWdCWiw4REFBQ1o7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBTUMsU0FBUTs0QkFBV0gsV0FBVTtzQ0FBaUM7Ozs7OztzQ0FHckUsOERBQUNVOzRCQUNDQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaUixPQUFPbkM7NEJBQ1BvQyxVQUFVLENBQUMxQixJQUFNVCxZQUFZUyxFQUFFMkIsTUFBTSxDQUFDRixLQUFLOzRCQUMzQ0wsV0FBVTs0QkFDVlEsUUFBUTs7Ozs7Ozs7Ozs7OzhCQUlaLDhEQUFDWDtvQkFBSUcsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFNQyxTQUFROzRCQUFPSCxXQUFVO3NDQUFpQzs7Ozs7O3NDQUdqRSw4REFBQ25DLHlEQUFVQTs0QkFDVCtDLElBQUc7NEJBQ0hFLGlCQUFnQjs0QkFDaEJDLFVBQVUzQzs0QkFDVmtDLFVBQVUsQ0FBQ2xDLE9BQVNDLFFBQVFEOzRCQUM1QjRCLFdBQVU7NEJBQ1ZRLFFBQVE7Ozs7Ozs7Ozs7Ozs4QkFJWiw4REFBQ1g7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBTUMsU0FBUTs0QkFBVUgsV0FBVTtzQ0FBaUM7Ozs7OztzQ0FHcEUsOERBQUNVOzRCQUNDQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaUixPQUFPOUI7NEJBQ1ArQixVQUFVLENBQUMxQixJQUFNSixXQUFXSSxFQUFFMkIsTUFBTSxDQUFDRixLQUFLOzRCQUMxQ0wsV0FBVTs0QkFDVlEsUUFBUTs7Ozs7Ozs7Ozs7OzhCQW1DWiw4REFBQ1g7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBTUMsU0FBUTs0QkFBVUgsV0FBVTtzQ0FBZ0M7Ozs7OztzQ0FHbkUsOERBQUNnQjs0QkFDQ0osSUFBRzs0QkFDSEMsYUFBWTs0QkFDWlIsT0FBTzVCOzRCQUNQNkIsVUFBVSxDQUFDMUIsSUFBTUYsV0FBV0UsRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDMUNMLFdBQVU7NEJBQ1ZpQixNQUFLOzRCQUNMVCxRQUFROzs7Ozs7Ozs7Ozs7OEJBSVosOERBQUNVO29CQUNDUCxNQUFLO29CQUNMWCxXQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1YO0dBN0xNakM7S0FBQUE7QUErTE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NeUZvcm0uanN4P2Y0YTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwicmVhY3QtZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgTXlGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lT3B0aW9uLCBzZXROYW1lT3B0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmdWxsTmFtZSwgc2V0RnVsbE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgLy8gY29uc3QgW2Fycml2YWxEYXRlLCBzZXRBcnJpdmFsRGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbdGltZU91dCwgc2V0VGltZU91dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvLyBjb25zdCBbdGltZUluLCBzZXRUaW1lSW5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIEZvcm1hdCB0aGUgZGF0YSB0byBiZSBzZW50IHRvIHRoZSBUZWxlZ3JhbSBib3RcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXHJcbiAgICBGdWxsIE5hbWU6ICR7ZnVsbE5hbWUudG9VcHBlckNhc2UoKX1cclxuICAgICAtVHlwZTogJHtuYW1lT3B0aW9ufVxyXG4gICAgIC1EYXRlOiAke2RhdGUudG9EYXRlU3RyaW5nKG5ldyBEYXRlKCkpfVxyXG4gICAgIC1UaW1lOiAke3RpbWVPdXR9XHJcbiAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIENvbW1lbnQ6ICR7Y29tbWVudH1cclxuICAgIGA7XHJcbiAgICAvLyBBcnJpdmFsIERhdGU6ICR7YXJyaXZhbERhdGUudG9EYXRlU3RyaW5nKG5ldyBEYXRlKCkpfVxyXG4gICAgIC8vIFRpbWU6ICR7dGltZUlufVxyXG5cclxuICAgIC8vIFNldCB5b3VyIFRlbGVncmFtIGJvdCB0b2tlbiBhbmQgY2hhdCBJRFxyXG4gICAgY29uc3QgYm90VG9rZW4gPSBcIjY1MjI3Mjk5MTU6QUFFbjN4TzBnRHB6Y1VQem54NGdld2hjVDU2YlVLS1RybmNcIjtcclxuICAgIGNvbnN0IGNoYXRJZCA9IFwiLTEwMDIwNzIwNzIzNTJcIjtcclxuXHJcbiAgICAvLyBTZW5kIHRoZSBtZXNzYWdlIHRvIHRoZSBUZWxlZ3JhbSBib3RcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90JHtib3RUb2tlbn0vc2VuZE1lc3NhZ2VgLCB7XHJcbiAgICAgICAgY2hhdF9pZDogY2hhdElkLFxyXG4gICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIEhhbmRsZSB0aGUgcmVzcG9uc2UgaWYgbmVlZGVkXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBIYW5kbGUgZXJyb3JzIGlmIGFueVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBSZXNldCB0aGUgZm9ybSBmaWVsZHMgYWZ0ZXIgc3VibWlzc2lvblxyXG4gICAgc2V0TmFtZU9wdGlvbihcIlwiKTtcclxuICAgIHNldEZ1bGxOYW1lKFwiXCIpO1xyXG4gICAgc2V0RGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgIC8vIHNldEFycml2YWxEYXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgc2V0VGltZU91dChcIlwiKTtcclxuICAgIC8vIHNldFRpbWVJbihcIlwiKTtcclxuICAgIHNldENvbW1lbnQoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1waW5rLTQwMCBkcm9wLXNoYWRvdy14bCB3LTUvNiBzbTp3LTIvMyBtLWF1dG8gbXQtNSBwLTUgcm91bmRlZC10LTJ4bFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgc206dGV4dC0yeGwgdGV4dC1ncmVlbi04MDAgZm9udC1zZXJpZiBmb250LW1lZGl1bSBtYi0zXCI+XHJcbiAgICAgICAgICAgIENoZWNrLUluICYgQ2hlY2stT3V0IEZvcm1cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZU9wdGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1zYW5zIFwiPlxyXG4gICAgICAgICAgICAgIERlcGFydHVyZSBvciBBcnJpdmFsP1xyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtuYW1lT3B0aW9ufVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZU9wdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtdC0xIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5wbGVhc2Ugc2VsZWN0IG9wdGlvbi4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+RGVwYXJ0dXJlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5BcnJpdmFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj5MYXRlIE5pZ2h0PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZU9wdGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICBEZXBhcnR1cmUgb3IgQXJyaXZhbD9cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwibmFtZU9wdGlvblwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWVPcHRpb259XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lT3B0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIG10LTEgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnVsbE5hbWVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIGZvbnQtc2FucyBcIj5cclxuICAgICAgICAgICAgICBGdWxsIE5hbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZnVsbE5hbWVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91ciBmdWxsIG5hbWUuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmdWxsTmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZ1bGxOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIG10LTEgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1zYW5zIFwiPlxyXG4gICAgICAgICAgICAgIFBpY2sgRGF0ZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PVwicGljayBkYXRlLi4uXCJcclxuICAgICAgICAgICAgICBzZWxlY3RlZD17ZGF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtdC0xIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpbWVPdXRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIGZvbnQtc2FucyBcIj5cclxuICAgICAgICAgICAgICBQaWNrIFRpbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRpbWVcIlxyXG4gICAgICAgICAgICAgIGlkPVwidGltZU91dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwaWNrIHRpbWUuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aW1lT3V0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGltZU91dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHB4LTMgcHktMiBtdC0xIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiA8aHIgY2xhc3NOYW1lPVwibS1hdXRvIHctNjQgaC1weCBiZy1ncmVlbi05MDAgYm9yZGVyLTBcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gdy1mdWxsIHRleHQtbWQgZm9udC1zYW5zIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5BcnJpdmFsIE9wdGlvbjwvZGl2PlxyXG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm0tYXV0byB3LTY0IGgtcHggYmctZ3JlZW4tOTAwIGJvcmRlci0wXCIgLz4gKi99XHJcblxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFycml2YWxEYXRlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIEFycml2YWwgRGF0ZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgIGlkPVwiYXJyaXZhbERhdGVcIlxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXthcnJpdmFsRGF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldEFycml2YWxEYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGltZUluXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIEFycml2YWwgVGltZVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGltZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJ0aW1lSW5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aW1lSW59XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaW1lSW4oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbW1lbnRcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIGZvbnQtc2Fuc1wiPlxyXG4gICAgICAgICAgICAgIERldGFpbDpcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgaWQ9XCJjb21tZW50XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBsZWFzZSBwcm92aWRlIG1vcmUgZGV0YWlscyBmb2xsb3dpbmcgdGhlIG9wdGlvbiB5b3UndmUgc2VsZWN0ZWQuLi5cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTUgcHgtNCBweS0yIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTYwMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRhdGVQaWNrZXIiLCJheGlvcyIsIk15Rm9ybSIsIm5hbWVPcHRpb24iLCJzZXROYW1lT3B0aW9uIiwiZnVsbE5hbWUiLCJzZXRGdWxsTmFtZSIsImRhdGUiLCJzZXREYXRlIiwiRGF0ZSIsInRpbWVPdXQiLCJzZXRUaW1lT3V0IiwiY29tbWVudCIsInNldENvbW1lbnQiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZSIsInRvVXBwZXJDYXNlIiwidG9EYXRlU3RyaW5nIiwiYm90VG9rZW4iLCJjaGF0SWQiLCJwb3N0IiwiY2hhdF9pZCIsInRleHQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJoMiIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclRleHQiLCJzZWxlY3RlZCIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MyForm.jsx\n"));

/***/ })

});