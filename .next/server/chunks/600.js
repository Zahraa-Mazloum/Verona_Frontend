exports.id = 600;
exports.ids = [600];
exports.modules = {

/***/ 1482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Link)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Link/Link.js
const _excluded = ["children", "skipLocaleHandling", "to"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const LinkComponent = /*#__PURE__*/external_react_default().forwardRef((props, ref) => {
  const {
    children,
    skipLocaleHandling,
    to
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const router = (0,router_.useRouter)();
  const locale = rest.locale || router.query.locale || '';
  let href = to || router.asPath;
  if (href.indexOf('http') === 0) skipLocaleHandling = true;

  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : router.pathname.replace('[locale]', locale);
  }

  return /*#__PURE__*/jsx_runtime_.jsx((link_default()), _objectSpread(_objectSpread({
    href: href
  }, rest), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: children
    })
  }));
});
/* harmony default export */ const Link = (LinkComponent);
;// CONCATENATED MODULE: ./components/Link/index.js


/***/ }),

/***/ 1458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "pc": () => (/* binding */ makeStaticProps)
/* harmony export */ });
/* unused harmony exports getI18nPaths, getI18nProps */
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2241);
/* harmony import */ var _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_i18next_config__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getI18nPaths = () => _next_i18next_config__WEBPACK_IMPORTED_MODULE_1___default().i18n.locales.map(lng => ({
  params: {
    locale: lng
  }
}));
const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
});
const getI18nProps = async (ctx, ns = ['common', 'agency-landing']) => {
  const locale = ctx?.params?.locale;

  const props = _objectSpread({}, await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_0__.serverSideTranslations)(locale, ns));

  return props;
};
const makeStaticProps = (ns = []) => async ctx => ({
  props: await getI18nProps(ctx, ns)
});

/***/ }),

/***/ 2241:
/***/ ((module) => {

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    fallbackLng: 'en'
  },
  ssg: true
};

/***/ }),

/***/ 8664:
/***/ ((module) => {

module.exports = {
  agency: {
    name: 'Verona',
    desc: 'Luxiren Agency - React Single Landing Page Template',
    prefix: 'luxiren',
    footerText: 'Luxiren Agency - All Rights Reserved 2021',
    logoText: 'Luxiren Agency',
    projectName: 'Verona Invesments',
    url: 'luxireact.ux-maestro.com/agency',
    img: '/static/images/agency-logo.png',
    notifMsg: 'Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.'
  }
};

/***/ }),

/***/ 69:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const link = {
  agency: {
    home: '/',
    contact: '/contact'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (link);

/***/ }),

/***/ 4486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lr": () => (/* binding */ useTextAlign),
/* harmony export */   "XK": () => (/* binding */ useText)
/* harmony export */ });
/* unused harmony exports useFloat, useHidden */
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
 // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useTextAlign = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'textAlign'
})({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
}); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useFloat = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'float'
})({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  }
}); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useText = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'text'
})(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      lineHeight: '44px'
    }
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('lg')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
      lineHeight: '36px'
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 24,
      lineHeight: '36px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '28px'
    }
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 20,
      lineHeight: '32px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      lineHeight: '22px'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

const useHidden = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'hidden'
})(theme => ({
  lgDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

/***/ })

};
;