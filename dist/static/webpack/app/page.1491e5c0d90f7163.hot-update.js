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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-datepicker */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"(app-pages-browser)/./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst MyForm = ()=>{\n    _s();\n    const [nameOption, setNameOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [fullName, setFullName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    // const [arrivalDate, setArrivalDate] = useState(new Date());\n    const [timeOut, setTimeOut] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const [timeIn, setTimeIn] = useState(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleFormSubmit = (e)=>{\n        e.preventDefault();\n        // Format the data to be sent to the Telegram bot\n        const message = \"\\n    Full Name: \".concat(fullName.toUpperCase(), \"\\n     -Type: \").concat(nameOption, \"\\n     -Date: \").concat(date.toDateString(new Date()), \"\\n     -Time: \").concat(timeOut, \"\\n     -----------------------------\\n    Comment: \").concat(comment, \"\\n    \");\n        // Arrival Date: ${arrivalDate.toDateString(new Date())}\n        // Time: ${timeIn}\n        // Set your Telegram bot token and chat ID\n        const botToken = \"6522729915:AAEn3xO0gDpzcUPznx4gewhcT56bUKKTrnc\";\n        const chatId = \"-1002072072352\";\n        // Send the message to the Telegram bot\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"https://api.telegram.org/bot\".concat(botToken, \"/sendMessage\"), {\n            chat_id: chatId,\n            text: message\n        }).then((response)=>{\n            // Handle the response if needed\n            console.log(response.data);\n        }).catch((error)=>{\n            // Handle errors if any\n            console.error(error);\n        });\n        // Reset the form fields after submission\n        setNameOption(\"\");\n        setFullName(\"\");\n        setDate(new Date());\n        // setArrivalDate(new Date());\n        setTimeOut(\"\");\n        // setTimeIn(\"\");\n        setComment(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleFormSubmit,\n            className: \"bg-white drop-shadow-2xl w-5/6 sm:w-2/3 m-auto mt-8 sm:p-8 p-5 rounded-t-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-lg sm:text-3xl text-pink-600 font-serif font-semibold mb-3\",\n                    children: \"Check In-Out Form\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"nameOption\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"Departure, Arrival or Late?\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: nameOption,\n                            onChange: (e)=>setNameOption(e.target.value),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"please select option...\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"1. Departure\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"2. Arrival\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    children: \"3. Late Night\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"fullName\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"Full Name\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"fullName\",\n                            placeholder: \"your full name...\",\n                            value: fullName,\n                            onChange: (e)=>setFullName(e.target.value),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"date\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"Pick Date\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_datepicker__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            id: \"date\",\n                            placeholderText: \"pick date...\",\n                            selected: date,\n                            onChange: (date)=>setDate(date),\n                            className: \"w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 116,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"timeOut\",\n                            className: \"block text-black font-medium font-sans \",\n                            children: \"Pick Time\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"time\",\n                            id: \"timeOut\",\n                            placeholder: \"pick time...\",\n                            value: timeOut,\n                            onChange: (e)=>setTimeOut(e.target.value),\n                            className: \" px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 126,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"comment\",\n                            className: \"block text-black font-medium font-sans\",\n                            children: \"Detail:\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 173,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            id: \"comment\",\n                            placeholder: \"please provide more details following the option you've selected...\",\n                            value: comment,\n                            onChange: (e)=>setComment(e.target.value),\n                            className: \" w-full px-3 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500\",\n                            rows: \"4\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                            lineNumber: 176,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 172,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"mb-5 px-4 py-2 text-white bg-blue-600 rounded hover:bg-pink-700\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 187,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-pink-700 text-center text-white drop-shadow-md p-3 mb-3 mt-3 text-lg sm:text-2xl rounded-md\",\n                    children: \"May God Bless You!\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n                    lineNumber: 193,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n            lineNumber: 62,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\ppjlc-check-in-out\\\\components\\\\MyForm.jsx\",\n        lineNumber: 61,\n        columnNumber: 7\n    }, undefined);\n};\n_s(MyForm, \"Bti/7Zg9DdPlS5wjVD5RuBUAQ74=\");\n_c = MyForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyForm);\nvar _c;\n$RefreshReg$(_c, \"MyForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTXlGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3dDO0FBQ0U7QUFDVTtBQUMxQjtBQUUxQixNQUFNSSxTQUFTOztJQUNiLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLElBQUlVO0lBQ3JDLDhEQUE4RDtJQUM5RCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsNENBQTRDO0lBQzVDLE1BQU0sQ0FBQ2EsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNZSxtQkFBbUIsQ0FBQ0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFaEIsaURBQWlEO1FBQ2pELE1BQU1DLFVBQVUsb0JBRU5kLE9BREdFLFNBQVNhLFdBQVcsSUFBRyxrQkFFMUJYLE9BREFKLFlBQVcsa0JBRVhPLE9BREFILEtBQUtZLFlBQVksQ0FBQyxJQUFJVixTQUFRLGtCQUc3QkcsT0FGREYsU0FBUSx1REFFQyxPQUFSRSxTQUFRO1FBRW5CLHdEQUF3RDtRQUN2RCxrQkFBa0I7UUFFbkIsMENBQTBDO1FBQzFDLE1BQU1RLFdBQVc7UUFDakIsTUFBTUMsU0FBUztRQUVmLHVDQUF1QztRQUN2Q3BCLDZDQUFLQSxDQUNGcUIsSUFBSSxDQUFDLCtCQUF3QyxPQUFURixVQUFTLGlCQUFlO1lBQzNERyxTQUFTRjtZQUNURyxNQUFNUDtRQUNSLEdBQ0NRLElBQUksQ0FBQyxDQUFDQztZQUNMLGdDQUFnQztZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDRixTQUFTRyxJQUFJO1FBQzNCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOLHVCQUF1QjtZQUN2QkosUUFBUUksS0FBSyxDQUFDQTtRQUNoQjtRQUVGLHlDQUF5QztRQUN6QzNCLGNBQWM7UUFDZEUsWUFBWTtRQUNaRSxRQUFRLElBQUlDO1FBQ1osOEJBQThCO1FBQzlCRSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCRSxXQUFXO0lBQ2I7SUFFQSxxQkFDSSw4REFBQ21CO2tCQUNDLDRFQUFDQztZQUNDQyxVQUFVcEI7WUFDVnFCLFdBQVU7OzhCQUVWLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBa0U7Ozs7Ozs4QkFHaEYsOERBQUNIO29CQUFJRyxXQUFVOztzQ0FDZiw4REFBQ0U7NEJBQU1DLFNBQVE7NEJBQWFILFdBQVU7c0NBQTBDOzs7Ozs7c0NBRzlFLDhEQUFDSTs0QkFBT0MsT0FBT3JDOzRCQUVic0MsVUFBVSxDQUFDMUIsSUFBTVgsY0FBY1csRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDN0NMLFdBQVU7NEJBQ1ZRLFFBQVE7OzhDQUNSLDhEQUFDQzs4Q0FBTzs7Ozs7OzhDQUNSLDhEQUFDQTs4Q0FBTzs7Ozs7OzhDQUNSLDhEQUFDQTs4Q0FBTzs7Ozs7OzhDQUNSLDhEQUFDQTs4Q0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWdCWiw4REFBQ1o7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBTUMsU0FBUTs0QkFBV0gsV0FBVTtzQ0FBMEM7Ozs7OztzQ0FHOUUsOERBQUNVOzRCQUNDQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaUixPQUFPbkM7NEJBQ1BvQyxVQUFVLENBQUMxQixJQUFNVCxZQUFZUyxFQUFFMkIsTUFBTSxDQUFDRixLQUFLOzRCQUMzQ0wsV0FBVTs0QkFDVlEsUUFBUTs7Ozs7Ozs7Ozs7OzhCQUlaLDhEQUFDWDtvQkFBSUcsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFNQyxTQUFROzRCQUFPSCxXQUFVO3NDQUEwQzs7Ozs7O3NDQUcxRSw4REFBQ25DLHlEQUFVQTs0QkFDVCtDLElBQUc7NEJBQ0hFLGlCQUFnQjs0QkFDaEJDLFVBQVUzQzs0QkFDVmtDLFVBQVUsQ0FBQ2xDLE9BQVNDLFFBQVFEOzRCQUM1QjRCLFdBQVU7NEJBQ1ZRLFFBQVE7Ozs7Ozs7Ozs7Ozs4QkFJWiw4REFBQ1g7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBTUMsU0FBUTs0QkFBVUgsV0FBVTtzQ0FBMEM7Ozs7OztzQ0FHN0UsOERBQUNVOzRCQUNDQyxNQUFLOzRCQUNMQyxJQUFHOzRCQUNIQyxhQUFZOzRCQUNaUixPQUFPOUI7NEJBQ1ArQixVQUFVLENBQUMxQixJQUFNSixXQUFXSSxFQUFFMkIsTUFBTSxDQUFDRixLQUFLOzRCQUMxQ0wsV0FBVTs0QkFDVlEsUUFBUTs7Ozs7Ozs7Ozs7OzhCQW1DWiw4REFBQ1g7b0JBQUlHLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBTUMsU0FBUTs0QkFBVUgsV0FBVTtzQ0FBeUM7Ozs7OztzQ0FHNUUsOERBQUNnQjs0QkFDQ0osSUFBRzs0QkFDSEMsYUFBWTs0QkFDWlIsT0FBTzVCOzRCQUNQNkIsVUFBVSxDQUFDMUIsSUFBTUYsV0FBV0UsRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDMUNMLFdBQVU7NEJBQ1ZpQixNQUFLOzRCQUNMVCxRQUFROzs7Ozs7Ozs7Ozs7OEJBSVosOERBQUNVO29CQUNDUCxNQUFLO29CQUNMWCxXQUFVOzhCQUNYOzs7Ozs7OEJBR0QsOERBQUNIO29CQUFJRyxXQUFVOzhCQUFpRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUg7R0E5TE1qQztLQUFBQTtBQWdNTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL015Rm9ybS5qc3g/ZjRhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBcInJlYWN0LWRhdGVwaWNrZXIvZGlzdC9yZWFjdC1kYXRlcGlja2VyLmNzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBNeUZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW25hbWVPcHRpb24sIHNldE5hbWVPcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICAvLyBjb25zdCBbYXJyaXZhbERhdGUsIHNldEFycml2YWxEYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xyXG4gIGNvbnN0IFt0aW1lT3V0LCBzZXRUaW1lT3V0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IFt0aW1lSW4sIHNldFRpbWVJbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gRm9ybWF0IHRoZSBkYXRhIHRvIGJlIHNlbnQgdG8gdGhlIFRlbGVncmFtIGJvdFxyXG4gICAgY29uc3QgbWVzc2FnZSA9IGBcclxuICAgIEZ1bGwgTmFtZTogJHtmdWxsTmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgIC1UeXBlOiAke25hbWVPcHRpb259XHJcbiAgICAgLURhdGU6ICR7ZGF0ZS50b0RhdGVTdHJpbmcobmV3IERhdGUoKSl9XHJcbiAgICAgLVRpbWU6ICR7dGltZU91dH1cclxuICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgQ29tbWVudDogJHtjb21tZW50fVxyXG4gICAgYDtcclxuICAgIC8vIEFycml2YWwgRGF0ZTogJHthcnJpdmFsRGF0ZS50b0RhdGVTdHJpbmcobmV3IERhdGUoKSl9XHJcbiAgICAgLy8gVGltZTogJHt0aW1lSW59XHJcblxyXG4gICAgLy8gU2V0IHlvdXIgVGVsZWdyYW0gYm90IHRva2VuIGFuZCBjaGF0IElEXHJcbiAgICBjb25zdCBib3RUb2tlbiA9IFwiNjUyMjcyOTkxNTpBQUVuM3hPMGdEcHpjVVB6bng0Z2V3aGNUNTZiVUtLVHJuY1wiO1xyXG4gICAgY29uc3QgY2hhdElkID0gXCItMTAwMjA3MjA3MjM1MlwiO1xyXG5cclxuICAgIC8vIFNlbmQgdGhlIG1lc3NhZ2UgdG8gdGhlIFRlbGVncmFtIGJvdFxyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Qke2JvdFRva2VufS9zZW5kTWVzc2FnZWAsIHtcclxuICAgICAgICBjaGF0X2lkOiBjaGF0SWQsXHJcbiAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gSGFuZGxlIHRoZSByZXNwb25zZSBpZiBuZWVkZWRcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIEhhbmRsZSBlcnJvcnMgaWYgYW55XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIFJlc2V0IHRoZSBmb3JtIGZpZWxkcyBhZnRlciBzdWJtaXNzaW9uXHJcbiAgICBzZXROYW1lT3B0aW9uKFwiXCIpO1xyXG4gICAgc2V0RnVsbE5hbWUoXCJcIik7XHJcbiAgICBzZXREYXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgLy8gc2V0QXJyaXZhbERhdGUobmV3IERhdGUoKSk7XHJcbiAgICBzZXRUaW1lT3V0KFwiXCIpO1xyXG4gICAgLy8gc2V0VGltZUluKFwiXCIpO1xyXG4gICAgc2V0Q29tbWVudChcIlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGRyb3Atc2hhZG93LTJ4bCB3LTUvNiBzbTp3LTIvMyBtLWF1dG8gbXQtOCBzbTpwLTggcC01IHJvdW5kZWQtdC0yeGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQtM3hsIHRleHQtcGluay02MDAgZm9udC1zZXJpZiBmb250LXNlbWlib2xkIG1iLTNcIj5cclxuICAgICAgICAgICAgQ2hlY2sgSW4tT3V0IEZvcm1cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZU9wdGlvblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmxhY2sgZm9udC1tZWRpdW0gZm9udC1zYW5zIFwiPlxyXG4gICAgICAgICAgICAgIERlcGFydHVyZSwgQXJyaXZhbCBvciBMYXRlP1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17bmFtZU9wdGlvbn1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWVPcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+cGxlYXNlIHNlbGVjdCBvcHRpb24uLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uPjEuIERlcGFydHVyZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+Mi4gQXJyaXZhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+My4gTGF0ZSBOaWdodDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVPcHRpb25cIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgRGVwYXJ0dXJlIG9yIEFycml2YWw/XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cIm5hbWVPcHRpb25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lT3B0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZU9wdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtdC0xIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZ1bGxOYW1lXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayBmb250LW1lZGl1bSBmb250LXNhbnMgXCI+XHJcbiAgICAgICAgICAgICAgRnVsbCBOYW1lXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBpZD1cImZ1bGxOYW1lXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInlvdXIgZnVsbCBuYW1lLi4uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17ZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGdWxsTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtdC0xIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIGZvbnQtc2FucyBcIj5cclxuICAgICAgICAgICAgICBQaWNrIERhdGVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dD1cInBpY2sgZGF0ZS4uLlwiXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2RhdGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aW1lT3V0XCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayBmb250LW1lZGl1bSBmb250LXNhbnMgXCI+XHJcbiAgICAgICAgICAgICAgUGljayBUaW1lXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0aW1lXCJcclxuICAgICAgICAgICAgICBpZD1cInRpbWVPdXRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGljayB0aW1lLi4uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGltZU91dH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpbWVPdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBweC0zIHB5LTIgbXQtMSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogPGhyIGNsYXNzTmFtZT1cIm0tYXV0byB3LTY0IGgtcHggYmctZ3JlZW4tOTAwIGJvcmRlci0wXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHctZnVsbCB0ZXh0LW1kIGZvbnQtc2FucyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+QXJyaXZhbCBPcHRpb248L2Rpdj5cclxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJtLWF1dG8gdy02NCBoLXB4IGJnLWdyZWVuLTkwMCBib3JkZXItMFwiIC8+ICovfVxyXG5cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhcnJpdmFsRGF0ZVwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICBBcnJpdmFsIERhdGVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICBpZD1cImFycml2YWxEYXRlXCJcclxuICAgICAgICAgICAgICBzZWxlY3RlZD17YXJyaXZhbERhdGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRBcnJpdmFsRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIG10LTEgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpbWVJblwiIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICBBcnJpdmFsIFRpbWVcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRpbWVcIlxyXG4gICAgICAgICAgICAgIGlkPVwidGltZUluXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGltZUlufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGltZUluKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIG10LTEgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb21tZW50XCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ibGFjayBmb250LW1lZGl1bSBmb250LXNhbnNcIj5cclxuICAgICAgICAgICAgICBEZXRhaWw6XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGlkPVwiY29tbWVudFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGVhc2UgcHJvdmlkZSBtb3JlIGRldGFpbHMgZm9sbG93aW5nIHRoZSBvcHRpb24geW91J3ZlIHNlbGVjdGVkLi4uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgcHgtMyBweS0yIG10LTEgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICByb3dzPVwiNFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi01IHB4LTQgcHktMiB0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIHJvdW5kZWQgaG92ZXI6YmctcGluay03MDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1waW5rLTcwMCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGRyb3Atc2hhZG93LW1kIHAtMyBtYi0zIG10LTMgdGV4dC1sZyBzbTp0ZXh0LTJ4bCByb3VuZGVkLW1kXCI+TWF5IEdvZCBCbGVzcyBZb3UhPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRhdGVQaWNrZXIiLCJheGlvcyIsIk15Rm9ybSIsIm5hbWVPcHRpb24iLCJzZXROYW1lT3B0aW9uIiwiZnVsbE5hbWUiLCJzZXRGdWxsTmFtZSIsImRhdGUiLCJzZXREYXRlIiwiRGF0ZSIsInRpbWVPdXQiLCJzZXRUaW1lT3V0IiwiY29tbWVudCIsInNldENvbW1lbnQiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZSIsInRvVXBwZXJDYXNlIiwidG9EYXRlU3RyaW5nIiwiYm90VG9rZW4iLCJjaGF0SWQiLCJwb3N0IiwiY2hhdF9pZCIsInRleHQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJoMiIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclRleHQiLCJzZWxlY3RlZCIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MyForm.jsx\n"));

/***/ })

});