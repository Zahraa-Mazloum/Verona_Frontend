"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locale]",{

/***/ "./components/Title/title-style.js":
/*!*****************************************!*\
  !*** ./components/Title/title-style.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tss-react/mui */ \"./node_modules/tss-react/esm/mui.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\n\nvar titleBase = {\n  fontFamily: 'Roboto Condensed',\n  textTransform: 'capitalize',\n  fontWeight: 'bold',\n  marginBottom: 64,\n  position: 'relative'\n};\nvar titleStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_1__.makeStyles)({\n  uniqId: 'title'\n})(function (theme, _params, classes) {\n  var _objectSpread2, _objectSpread3, _h, _before, _before2, _h2, _iconDeco;\n\n  return {\n    \"default\": {\n      padding: theme.spacing(0, 4)\n    },\n    primary: _objectSpread((_objectSpread2 = {\n      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,\n      fontSize: 48,\n      lineHeight: '62px'\n    }, (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, theme.breakpoints.down('sm'), {\n      fontSize: 38,\n      lineHeight: '50px'\n    }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread2, theme.breakpoints.down('md'), {\n      textAlign: 'center',\n      marginBottom: theme.spacing(4),\n      fontSize: 32,\n      lineHeight: '42px'\n    }), _objectSpread2), titleBase),\n    secondary: _objectSpread((_objectSpread3 = {\n      color: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.dark,\n      fontSize: 48,\n      lineHeight: '62px'\n    }, (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread3, theme.breakpoints.down('sm'), {\n      fontSize: 38,\n      lineHeight: '50px'\n    }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread3, theme.breakpoints.down('md'), {\n      fontSize: 32,\n      lineHeight: '42px'\n    }), _objectSpread3), titleBase),\n    deco: {\n      position: 'relative',\n      '& h3': (_h = {\n        fontFamily: 'Roboto Condensed',\n        color: theme.palette.common.white,\n        width: 250,\n        position: 'relative',\n        textTransform: 'capitalize',\n        fontSize: 28,\n        fontWeight: 800,\n        textAlign: 'left',\n        lineHeight: '70px',\n        marginLeft: '-10%'\n      }, (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_h, theme.breakpoints.up('lg'), {\n        height: 160,\n        marginLeft: theme.spacing(3),\n        paddingLeft: 20\n      }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_h, theme.breakpoints.up('md'), {\n        paddingTop: 70,\n        marginTop: theme.spacing(10)\n      }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_h, theme.breakpoints.only('md'), {\n        marginLeft: theme.spacing(5)\n      }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_h, theme.breakpoints.down('lg'), {\n        fontSize: 30,\n        lineHeight: '50px'\n      }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_h, theme.breakpoints.down('md'), {\n        paddingLeft: 0,\n        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,\n        width: 'auto',\n        textAlign: 'center'\n      }), _h),\n      '&:before': (_before = {\n        content: '\"\"',\n        width: 210,\n        height: 210,\n        background: theme.palette.primary.main,\n        // background: `url(${imgAPI.agency[1]}) no-repeat center center`,\n        borderRadius: 24,\n        transform: 'rotate(45deg)',\n        position: 'absolute',\n        top: 0,\n        left: 0\n      }, (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_before, theme.breakpoints.down('sm'), {\n        left: theme.spacing(3)\n      }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_before, theme.breakpoints.down('md'), {\n        display: 'none'\n      }), _before)\n    },\n    extend: {},\n    iconDeco: (_iconDeco = {}, (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_iconDeco, theme.breakpoints.up('lg'), {\n      width: 350\n    }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_iconDeco, '&:before', (_before2 = {\n      content: '\"\"',\n      background: '#ffffff',\n      width: 480,\n      height: 480,\n      // background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,\n      borderRadius: 24,\n      transform: 'rotate(45deg)',\n      position: 'absolute',\n      top: theme.spacing(15),\n      right: theme.spacing(1)\n    }, (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_before2, theme.breakpoints.down('1500'), {\n      width: 380,\n      height: 380\n    }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_before2, theme.breakpoints.down('lg'), {\n      display: 'none'\n    }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_before2, theme.breakpoints.down('md'), {\n      display: 'none'\n    }), _before2)), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_iconDeco, \"&.\".concat(classes.extend), {\n      '&:before': {\n        boxShadow: \"-30px 20px 0px 0px \".concat(theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light)\n      }\n    }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_iconDeco, '& h3', (_h2 = {\n      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,\n      fontWeight: 700,\n      textTransform: 'capitalize',\n      fontFamily: 'Roboto Condensed',\n      lineHeight: '62px',\n      position: 'relative',\n      width: 500,\n      fontSize: 48,\n      textAlign: 'left'\n    }, (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_h2, theme.breakpoints.down('1500'), {\n      fontSize: 35\n    }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_h2, theme.breakpoints.down('lg'), {\n      fontSize: 38,\n      lineHeight: '50px',\n      width: '100%',\n      textAlign: 'center'\n    }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_h2, theme.breakpoints.down('md'), {\n      fontSize: 32,\n      lineHeight: '42px'\n    }), (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_h2, theme.breakpoints.down('sm'), {\n      fontSize: 32,\n      lineHeight: '42px'\n    }), _h2)), _iconDeco),\n    icon: (0,C_Users_HP_Downloads_Verona_Frontend_main_Verona_Frontend_main_node_modules_next_dist_compiled_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      position: 'relative',\n      fontSize: '100px !important',\n      color: theme.palette.secondary.light,\n      display: 'block',\n      margin: theme.spacing(20, 0, 3)\n    }, theme.breakpoints.down('lg'), {\n      display: 'none !important'\n    })\n  };\n}); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (titleStyles);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UGYsS0FBSyxDQUFDYSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQWxETyxFQWtEd0I7TUFDOUJILFFBQVEsRUFBRSxFQURvQjtNQUU5QkMsVUFBVSxFQUFFO0lBRmtCLENBbER4QiwrTEFzRFBaLEtBQUssQ0FBQ2EsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0F0RE8sRUFzRHdCO01BQzlCSCxRQUFRLEVBQUUsRUFEb0I7TUFFOUJDLFVBQVUsRUFBRTtJQUZrQixDQXREeEIsb0JBMUZ3RTtJQXNKaEY0QixJQUFJLEVBQUU7TUFDSjNDLFFBQVEsRUFBRSxVQURSO01BRUZjLFFBQVEsRUFBRSxrQkFGUjtNQUdGTCxLQUFLLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjUyxTQUFkLENBQXdCUCxLQUg3QjtNQUlGMEIsT0FBTyxFQUFFLE9BSlA7TUFLRk0sTUFBTSxFQUFFekMsS0FBSyxDQUFDSSxPQUFOLENBQWMsRUFBZCxFQUFrQixDQUFsQixFQUFxQixDQUFyQjtJQUxOLEdBTURKLEtBQUssQ0FBQ2EsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FOQyxFQU04QjtNQUM5QnFCLE9BQU8sRUFBRTtJQURxQixDQU45QjtFQXRKNEUsQ0FBOUI7QUFBQSxDQUFoQyxDQUFwQixFQWtLQTs7QUFDQSwrREFBZXJDLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaXRsZS90aXRsZS1zdHlsZS5qcz84OTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICd0c3MtcmVhY3QvbXVpJztcblxuY29uc3QgdGl0bGVCYXNlID0ge1xuICBmb250RmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsXG4gIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgZm9udFdlaWdodDogJ2JvbGQnLFxuICBtYXJnaW5Cb3R0b206IDY0LFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xufTtcblxuY29uc3QgdGl0bGVTdHlsZXMgPSBtYWtlU3R5bGVzKHsgdW5pcUlkOiAndGl0bGUnIH0pKCh0aGVtZSwgX3BhcmFtcywgY2xhc3NlcykgPT4gKHtcbiAgZGVmYXVsdDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgNCksXG4gIH0sXG4gIHByaW1hcnk6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgICBmb250U2l6ZTogNDgsXG4gICAgbGluZUhlaWdodDogJzYycHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgZm9udFNpemU6IDM4LFxuICAgICAgbGluZUhlaWdodDogJzUwcHgnXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgICBmb250U2l6ZTogMzIsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDJweCdcbiAgICB9LFxuICAgIC4uLnRpdGxlQmFzZSxcbiAgfSxcbiAgc2Vjb25kYXJ5OiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXG4gICAgZm9udFNpemU6IDQ4LFxuICAgIGxpbmVIZWlnaHQ6ICc2MnB4JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGZvbnRTaXplOiAzOCxcbiAgICAgIGxpbmVIZWlnaHQ6ICc1MHB4J1xuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICBmb250U2l6ZTogMzIsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDJweCdcbiAgICB9LFxuICAgIC4uLnRpdGxlQmFzZVxuICB9LFxuICBkZWNvOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyYgaDMnOiB7XG4gICAgICBmb250RmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICB3aWR0aDogMjUwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgICBmb250U2l6ZTogMjgsXG4gICAgICBmb250V2VpZ2h0OiA4MDAsXG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICc3MHB4JyxcbiAgICAgIG1hcmdpbkxlZnQ6ICctMTAlJyxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcbiAgICAgICAgaGVpZ2h0OiAxNjAsXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAyMCxcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IDcwLFxuICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTApLFxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5vbmx5KCdtZCcpXToge1xuICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDUpXG4gICAgICB9LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ2xnJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgICAgbGluZUhlaWdodDogJzUwcHgnXG4gICAgICB9LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB3aWR0aDogMjEwLFxuICAgICAgaGVpZ2h0OiAyMTAsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIC8vIGJhY2tncm91bmQ6IGB1cmwoJHtpbWdBUEkuYWdlbmN5WzFdfSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXJgLFxuICAgICAgYm9yZGVyUmFkaXVzOiAyNCxcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICAgIGxlZnQ6IHRoZW1lLnNwYWNpbmcoMylcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgZXh0ZW5kOiB7fSxcbiAgaWNvbkRlY286IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XG4gICAgICB3aWR0aDogMzUwLFxuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYmFja2dyb3VuZDogJyNmZmZmZmYnLFxuICAgICAgd2lkdGg6IDQ4MCxcbiAgICAgIGhlaWdodDogNDgwLFxuICAgICAgLy8gYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQuZGVmYXVsdCA6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgIGJvcmRlclJhZGl1czogMjQsXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDE1KSxcbiAgICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJzE1MDAnKV06IHtcbiAgICAgICAgd2lkdGg6IDM4MCxcbiAgICAgICAgaGVpZ2h0OiAzODAsXG4gICAgICB9LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ2xnJyldOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9LFxuICAgIFtgJi4ke2NsYXNzZXMuZXh0ZW5kfWBdOiB7XG4gICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIGJveFNoYWRvdzogYC0zMHB4IDIwcHggMHB4IDBweCAke3RoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0fWBcbiAgICAgIH1cbiAgICB9LFxuICAgJyYgaDMnOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gICAgZm9udFdlaWdodDogNzAwLFxuICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gIGZvbnRGYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJyxcbiAgbGluZUhlaWdodDogJzYycHgnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgd2lkdGg6IDUwMCxcbiAgZm9udFNpemU6IDQ4LFxuICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJzE1MDAnKV06IHtcbiAgICBmb250U2l6ZTogMzUsXG4gIH0sXG4gIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdsZycpXToge1xuICAgIGZvbnRTaXplOiAzOCxcbiAgICBsaW5lSGVpZ2h0OiAnNTBweCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB9LFxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICBmb250U2l6ZTogMzIsXG4gICAgbGluZUhlaWdodDogJzQycHgnLFxuICB9LFxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICBmb250U2l6ZTogMzIsXG4gICAgbGluZUhlaWdodDogJzQycHgnLFxuICB9XG59XG4gIH0sXG4gIGljb246IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmb250U2l6ZTogJzEwMHB4ICFpbXBvcnRhbnQnLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodCxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyMCwgMCwgMyksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ2xnJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSAhaW1wb3J0YW50J1xuICAgIH1cbiAgfVxufSkpO1xuXG4vLyBUT0RPIGpzcy10by10c3MtcmVhY3QgY29kZW1vZDogdXNhZ2VzIG9mIHRoaXMgaG9vayBvdXRzaWRlIG9mIHRoaXMgZmlsZSB3aWxsIG5vdCBiZSBjb252ZXJ0ZWQuXG5leHBvcnQgZGVmYXVsdCB0aXRsZVN0eWxlcztcbiJdLCJuYW1lcyI6WyJtYWtlU3R5bGVzIiwidGl0bGVCYXNlIiwiZm9udEZhbWlseSIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJ0aXRsZVN0eWxlcyIsInVuaXFJZCIsInRoZW1lIiwiX3BhcmFtcyIsImNsYXNzZXMiLCJwYWRkaW5nIiwic3BhY2luZyIsInByaW1hcnkiLCJjb2xvciIsInBhbGV0dGUiLCJtb2RlIiwibGlnaHQiLCJkYXJrIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwidGV4dEFsaWduIiwic2Vjb25kYXJ5IiwiZGVjbyIsImNvbW1vbiIsIndoaXRlIiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwidXAiLCJoZWlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJtYXJnaW5Ub3AiLCJvbmx5IiwiY29udGVudCIsImJhY2tncm91bmQiLCJtYWluIiwiYm9yZGVyUmFkaXVzIiwidHJhbnNmb3JtIiwidG9wIiwibGVmdCIsImRpc3BsYXkiLCJleHRlbmQiLCJpY29uRGVjbyIsInJpZ2h0IiwiYm94U2hhZG93IiwiaWNvbiIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Title/title-style.js\n"));

/***/ })

});