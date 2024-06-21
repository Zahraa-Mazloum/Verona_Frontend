(() => {
var exports = {};
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 6584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ About_About)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4486);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Title/abttitle-style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const titleBase = {
  fontFamily: 'Roboto Condensed',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  marginBottom: 64,
  position: 'relative'
};
const titleStyles = (0,mui_.makeStyles)({
  uniqId: 'title'
})((theme, _params, classes) => ({
  default: {
    padding: theme.spacing(0, 4)
  },
  primary: _objectSpread({
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 48,
    lineHeight: '62px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 38,
      lineHeight: '50px'
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginBottom: theme.spacing(4),
      fontSize: 32,
      lineHeight: '42px'
    }
  }, titleBase),
  secondary: _objectSpread({
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.dark,
    fontSize: 48,
    lineHeight: '62px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 38,
      lineHeight: '50px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '42px'
    }
  }, titleBase),
  decora: {
    position: 'relative',
    '& h3': {
      fontFamily: 'Roboto Condensed',
      color: 'black',
      width: 150,
      position: 'relative',
      textTransform: 'capitalize',
      fontSize: 40,
      fontWeight: 700,
      textAlign: 'center',
      lineHeight: '40px',
      [theme.breakpoints.up('lg')]: {
        height: 160,
        marginLeft: theme.spacing(4),
        paddingLeft: 20
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: 40,
        marginTop: theme.spacing(10)
      },
      [theme.breakpoints.only('md')]: {
        marginLeft: theme.spacing(7)
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: 38,
        lineHeight: '50px'
      },
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        width: 'auto',
        textAlign: 'center'
      }
    },
    '&:before': {
      content: '""',
      width: 210,
      height: 210,
      background: 'rgba(255, 255,255, 0.5)',
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: 0,
      left: 0,
      filter: 'blur(1px)',
      [theme.breakpoints.down('sm')]: {
        left: theme.spacing(3)
      },
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    }
  },
  extend: {},
  iconDeco: {
    [theme.breakpoints.up('lg')]: {
      width: 350
    },
    '&:before': {
      content: '""',
      width: 480,
      height: 480,
      background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: theme.spacing(15),
      right: theme.spacing(10),
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    [`&.${classes.extend}`]: {
      '&:before': {
        boxShadow: `-30px 20px 0px 0px ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light}`
      }
    },
    '& h3': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontWeight: 700,
      textTransform: 'capitalize',
      fontFamily: 'Roboto Condensed',
      lineHeight: '40px',
      position: 'relative',
      width: 200,
      fontSize: 40,
      [theme.breakpoints.down('lg')]: {
        fontSize: 38,
        lineHeight: '50px',
        width: '100%',
        textAlign: 'center'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 32,
        lineHeight: '42px'
      }
    }
  },
  icon: {
    position: 'relative',
    fontSize: '100px !important',
    color: theme.palette.secondary.light,
    display: 'block',
    margin: theme.spacing(20, 0, 3),
    [theme.breakpoints.down('lg')]: {
      display: 'none !important'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const abttitle_style = (titleStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Title/abtWithDecoration.js





function WithDecoration(props) {
  const {
    classes
  } = abttitle_style();
  const {
    text,
    bg
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.decora,
      children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        className: bg ? classes.bgImg : '',
        variant: "h3",
        style: {
          backgroundImage: `url(${bg})`
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: text
        })
      })
    })
  });
}

WithDecoration.defaultProps = {
  bg: ''
};
/* harmony default export */ const abtWithDecoration = (WithDecoration);
;// CONCATENATED MODULE: ./components/About/about-style.js

const useStyles = (0,mui_.makeStyles)({
  uniqId: 'about'
})(theme => ({
  root: {
    '& blockquote': {
      fontSize: 28,
      fontStyle: 'italic',
      color: theme.palette.text.secondary,
      borderLeft: '4px solid',
      borderLeftColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.38)' : '#D8D8D8',
      paddingLeft: theme.spacing(5),
      margin: theme.spacing(5, 0, 0),
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(2),
        margin: 0,
        fontSize: 20,
        lineHeight: '32px'
      }
    },
    '& h4': {
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        marginTop: theme.spacing(-3)
      }
    },
    '& .MuiContainer-root': {
      [theme.breakpoints.up('sm')]: {// paddingTop: '10%',
        // background: 'red',
      }
    }
  },
  puzzle: {
    position: 'relative',
    left: 60,
    top: -70,
    '& > div': {
      transform: 'rotate(45deg)',
      overflow: 'hidden',
      position: 'absolute',
      background: '#dedede'
    },
    '& span': {
      background: '#b05d2e',
      backgroundSize: 'auto 800px',
      transform: 'rotate(-45deg)',
      width: 560,
      height: 1000,
      display: 'block',
      position: 'relative',
      top: -110,
      left: 0
    }
  },
  pieceBig: {
    width: 300,
    height: 150,
    top: -175,
    left: 100,
    borderRadius: 32
  },
  pieceSmallTop: {
    width: 100,
    height: 100,
    borderRadius: 24,
    top: 12,
    left: 170
  },
  pieceSmallBottom: {
    width: 100,
    height: 100,
    borderRadius: 0,
    top: 90,
    left: 90
  },
  subTtl: {
    fontSize: 22,
    textAlign: 'justify !important',
    padding: 0,
    width: '100%'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const about_style = (useStyles);
// EXTERNAL MODULE: ./components/Title/title-style.js
var title_style = __webpack_require__(7793);
;// CONCATENATED MODULE: ./components/Counter/counter-style.js

const counterStyles = (0,mui_.makeStyles)({
  uniqId: 'counter'
})((theme, _params, classes) => ({
  counterWrap: {
    margin: theme.spacing(3, 0)
  },
  text: {},
  counterItem: {
    '& p': {
      fontSize: 22,
      textTransform: 'capitalize'
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    alignItems: 'center',
    justifyContent: 'center',
    [`& .${classes.text}`]: {
      textAlign: 'center',
      '& h3': {
        position: 'relative',
        fontWeight: 'bold',
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(4),
        '&:after': {
          content: '""',
          width: 50,
          height: 8,
          borderRadius: 5,
          background: theme.palette.primary.main,
          position: 'absolute',
          bottom: theme.spacing(-2),
          left: 'calc(50% - 25px)'
        }
      }
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const counter_style = (counterStyles);
;// CONCATENATED MODULE: ./components/Counter/Counter.js










function Counter() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    classes
  } = counter_style();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.counterWrap,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        "justify-content": "center",
        alignItems: "center",
        spacing: 6,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          md: 4,
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.counterItem,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.text,
              children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h3",
                className: text.title,
                children: "+200"
              }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                component: "p",
                className: text.subtitle,
                children: t('agency-landing.about_employee')
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          md: 4,
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.counterItem,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.text,
              children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h3",
                className: text.title,
                children: "+500"
              }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                component: "p",
                className: text.subtitle,
                children: t('agency-landing.about_projects')
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          md: 4,
          item: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.counterItem,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.text,
              children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h3",
                className: text.title,
                children: "+300"
              }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                component: "p",
                className: text.subtitle,
                children: t('agency-landing.about_client')
              })]
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const Counter_Counter = (Counter);
;// CONCATENATED MODULE: ./components/Counter/index.js

;// CONCATENATED MODULE: ./components/About/About.js





 // import Typewriter from 'typewriter-effect';








function About() {
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    classes,
    cx
  } = about_style();
  const {
    classes: title
  } = (0,title_style/* default */.Z)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 5,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(abtWithDecoration, {
              text: t('agency-landing.about_title')
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          item: true,
          md: 7,
          xs: 12,
          children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            className: cx(title.default, text.subtitle, classes.subTtl),
            variant: "p",
            children: t('agency-landing.about_subtitle')
          }), /*#__PURE__*/jsx_runtime_.jsx(Counter_Counter, {})]
        })]
      })
    })
  });
}

/* harmony default export */ const About_About = (About);
;// CONCATENATED MODULE: ./components/About/index.js


/***/ }),

/***/ 338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ CallAction_CallAction)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/icons-material/Send"
var Send_ = __webpack_require__(4731);
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__(69);
// EXTERNAL MODULE: ./components/Link/index.js + 1 modules
var Link = __webpack_require__(1482);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./components/CallAction/action-style.js


const useStyles = (0,mui_.makeStyles)({
  uniqId: 'cta'
})(theme => ({
  root: {
    position: 'relative'
  },
  background: {
    fill: theme.palette.mode === 'dark' ? (0,styles_.darken)(theme.palette.primary.light, 0.8) : (0,styles_.lighten)(theme.palette.primary.light, 0.8),
    width: 560,
    height: 560,
    top: theme.spacing(-50),
    left: '20%',
    position: 'absolute',
    transform: 'scale(3)'
  },
  btncontainer: {
    display: 'flex',
    gap: '2px',
    background: '#f16c21',
    borderRadius: 25,
    transition: 'background-color 0.3s ease',
    textAlign: 'center',
    textDecoration: 'none',
    paddingTop: '7%',
    width: '100%',
    '&:hover': {
      backgroundColor: '#743410'
    },
    [theme.breakpoints.up('md')]: {
      width: 240,
      height: 64,
      fontSize: 20
    },
    [theme.breakpoints.down('lg')]: {
      margin: '0 auto'
    }
  },
  paper: {
    padding: theme.spacing(4),
    border: `2px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 10),
      margin: theme.spacing(0, 4)
    },
    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 1),
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: 700,
      fontSize: 28,
      color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      fontFamily: 'Roboto Condensed',
      [theme.breakpoints.down('md')]: {
        fontSize: 28,
        marginBottom: theme.spacing(2)
      }
    },
    '& p': {
      fontSize: 24,
      [theme.breakpoints.down('lg')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 18,
        marginBottom: theme.spacing(3)
      }
    }
  },
  rightIcon: {
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
    fontSize: '20px',
    color: 'white',
    textAlign: 'center',
    marginTop: '3%',
    marginLeft: '3%'
  },
  btninv: {
    textDecoration: 'none',
    color: 'white',
    paddingLeft: '5px'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const action_style = (useStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/CallAction/CallAction.js
 // import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';














function CallAction() {
  // Theme breakpoints
  // const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  // Translation Function
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    classes
  } = action_style();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
      fill: "#cccccc",
      width: 845,
      height: 1099,
      className: classes.background,
      children: /*#__PURE__*/jsx_runtime_.jsx("use", {
        xlinkHref: "/images/decoration/square-deco-primary.svg#square"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: classes.root,
        children: /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
          className: classes.paper,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
            container: true,
            alignItems: "center",
            children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              md: 9,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h4",
                gutterBottom: true,
                display: "block",
                children: t('agency-landing.cta_title')
              })
            }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              item: true,
              md: 3,
              xs: 12,
              children: /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                container: true,
                alignItems: "center",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.btncontainer,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    className: classes.btninv,
                    children: t('agency-landing.btn_inv')
                  }), /*#__PURE__*/jsx_runtime_.jsx((Send_default()), {
                    className: classes.rightIcon
                  })]
                })
              })
            })]
          })
        })
      })
    })]
  });
}

/* harmony default export */ const CallAction_CallAction = (CallAction);
;// CONCATENATED MODULE: ./components/CallAction/index.js


/***/ }),

/***/ 6456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_images_decoration_frame_deco_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2806);
/* harmony import */ var public_images_decoration_frame_deco_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_images_decoration_frame_deco_png__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'cards'
})((theme, _params, classes) => ({
  text: {},
  title: {},

  /* Default Card */
  defaultCard: {
    direction: 'ltr',
    borderRadius: 12,
    width: 240,
    height: 350,
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 1),
    '& figure': {
      borderRadius: 12,
      boxShadow: '0 1.5px 12px 6px rgba(0, 0, 0, 0.12)',
      overflow: 'hidden',
      height: 125,
      margin: theme.spacing(-5, 0, 2),
      '& img': {
        height: '100%',
        minWidth: '100%'
      }
    },
    '& h6': {
      marginBottom: theme.spacing(2)
    },
    '& p': {
      height: 90,
      overflow: 'hidden',
      marginBottom: theme.spacing(3)
    }
  },
  button: {
    boxShadow: 'none'
  },

  /* Testimonial Card */
  testiCard: {
    direction: 'ltr',
    position: 'relative'
  },
  paper: {
    padding: theme.spacing(3),
    width: 240,
    height: 240,
    borderRadius: '50px 50px 50px 0',
    '& p': {
      height: 130,
      overflow: 'hidden'
    }
  },
  rating: {
    marginTop: theme.spacing(4)
  },
  starIcon: {
    color: '#FFC107'
  },
  starIconDisable: {
    color: theme.palette.divider
  },
  avatar: {
    border: '4px solid #FFF',
    boxShadow: theme.shadows[1]
  },
  person: {
    display: 'flex',
    marginTop: theme.spacing(3),
    [`& .${classes.avatar}`]: {
      width: 55,
      height: 55
    },
    [`& .${classes.title}`]: {
      fontStyle: 'italic',
      fontWeight: 300
    }
  },
  name: {
    marginLeft: theme.spacing(2)
  },

  /* Case Studies Card */
  caseCard: {
    maxHeight: 360,
    borderRadius: 24,
    marginBottom: theme.spacing(3),
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.secondary.light,
    [theme.breakpoints.up('lg')]: {
      minHeight: 170
    },
    [`& .${classes.figure}`]: {
      margin: 0,
      display: 'block',
      '& img': {
        width: '100%'
      }
    },
    [`& .${classes.title}`]: {
      lineHeight: '22px',
      marginBottom: theme.spacing(2),
      fontSize: '1.25rem',
      fontWeight: '500'
    },
    [`& .${classes.logo}`]: {
      display: 'block',
      position: 'relative',
      '& img': {
        width: '100%'
      }
    },
    [`&.${classes.small}`]: {
      [`& .${classes.title}`]: {
        display: 'block'
      },
      [`& .${classes.logo}`]: {
        margin: '0 auto 16px'
      },
      [`& .${classes.property}`]: {
        textAlign: 'center',
        bottom: 0
      },
      [`& .${classes.figure}`]: {
        [theme.breakpoints.down('md')]: {
          width: '100%'
        }
      }
    },
    [`&.${classes.big}`]: {
      [`& .${classes.property}`]: {
        [theme.breakpoints.down('sm')]: {
          textAlign: 'center',
          bottom: 0
        }
      }
    },
    '&:hover': {
      [theme.breakpoints.up('lg')]: {
        [`& .${classes.property}`]: {
          background: theme.palette.primary.main,
          height: '100%',
          bottom: 0,
          opacity: 1,
          '& p': {
            opacity: 1,
            bottom: 0
          },
          [`& .${classes.desc}`]: {
            // opacity: 1,
            display: 'block',
            fontSize: '15px'
          }
        }
      }
    }
  },
  desc: {
    // opacity: 0, // Hide the desc by default
    display: 'none',
    transition: 'opacity 0.3s ease-out' // Transition effect for opacity

  },
  property: {
    transition: 'all 0.3s ease-out',
    position: 'absolute',
    width: '100%',
    height: '110%',
    padding: theme.spacing(3),
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    bottom: -60,
    left: 0,
    color: theme.palette.common.white,
    background: 'linear-gradient(to bottom, rgba(238, 238, 238, 0) 20%, #000 90%)',
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(1),
      textAlign: 'center',
      bottom: 0,
      [`& .${classes.desc}`]: {
        display: 'none'
      }
    },
    [`& .${classes.title}`]: {
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        paddingBottom: '50%',
        textAlign: 'center'
      }
    },
    '& h6': {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(2),
      lineHeight: '22px'
    },
    [`&.${classes.fullHide}`]: {
      background: 'none',
      opacity: 0
    },
    '& p': {
      opacity: 0,
      transition: 'bottom 0.5s ease-out',
      position: 'relative',
      bottom: -20
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ 8870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ CaseStudies_CaseStudies)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(5967);
;// CONCATENATED MODULE: external "@mui/material/ButtonBase"
const ButtonBase_namespaceObject = require("@mui/material/ButtonBase");
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_namespaceObject);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(6456);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/Case.js







function Case(props) {
  const {
    classes,
    cx
  } = (0,cards_style/* default */.Z)();
  const {
    bg,
    title,
    desc,
    size,
    simple,
    openPopup
  } = props;

  const setSize = sizeProp => {
    switch (sizeProp) {
      case 'small':
        return classes.small;

      case 'big':
        return classes.big;

      default:
        return classes.medium;
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((ButtonBase_default()), {
    className: cx(classes.caseCard, setSize(size)),
    focusRipple: true,
    onClick: openPopup,
    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
      className: classes.figure,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: bg,
        alt: "img"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      className: cx(classes.property, simple && classes.fullHide),
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: classes.title,
        children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          component: "span",
          className: classes.title,
          children: title
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        component: "span",
        className: classes.desc,
        children: desc
      })]
    })]
  });
}

Case.defaultProps = {
  bg: '',
  size: 'medium',
  simple: false,
  openPopup: () => {}
};
/* harmony default export */ const Cards_Case = (Case);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/CaseStudies/case-study-style.js


const useStyles = (0,mui_.makeStyles)({
  uniqId: 'case'
})(theme => ({
  root: {
    position: 'relative',
    zIndex: 10,
    paddingTop: '8%',
    background: theme.palette.mode === 'dark' ? (0,styles_.darken)(theme.palette.primary.light, 0.8) : (0,styles_.lighten)(theme.palette.primary.light, 0.8),
    '& nav': {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        overflow: 'auto'
      }
    }
  },
  filter: {
    borderRadius: theme.rounded.small,
    textTransform: 'capitalize',
    marginBottom: theme.spacing(),
    padding: theme.spacing(0.5, 2),
    width: '90%',
    [theme.breakpoints.down('md')]: {
      '& > div': {
        textAlign: 'center'
      }
    }
  },
  active: {
    background: `${theme.palette.primary.light} !important`,
    color: theme.palette.primary.dark
  },
  massonry: {
    '& button': {
      width: '100%'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const case_study_style = (useStyles);
// EXTERNAL MODULE: ./components/Title/title-style.js
var title_style = __webpack_require__(7793);
;// CONCATENATED MODULE: ./components/CaseStudies/CaseStudies.js
 // import Lightbox from 'react-18-image-lightbox';




 // import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';







 // const categories = ['corporate', 'advertising', 'marketing', 'government', 'creative'];



const caseData = [{
  bg: imgAPI/* default.agency.2 */.Z.agency[2],
  title: 'Real Estate Projects',
  desc: 'We participate in real estate development opportunities, including residential, commercial, and mixed-use projects. Our investments target sustainable and urban development initiatives that meet market demands and create long-term value.',
  size: 'big'
}, {
  bg: imgAPI/* default.agency.3 */.Z.agency[3],
  title: 'Entertainment Projects',
  desc: 'We explore investment opportunities in the entertainment industry, such as film production, music, gaming, and live events. We support projects that promote creativity, talent development, and engaging content for diverse audiences.',
  size: 'big' // simple: true,

}, {
  bg: imgAPI/* default.agency.4 */.Z.agency[4],
  title: 'Educational Projects',
  desc: 'We support educational initiatives that aim to improve access to quality education and skill development. We invest in educational institutions, e-learning platforms, vocational training programs, and projects focused on enhancing learning outcomes.',
  size: 'big' // simple: true,

}, {
  bg: imgAPI/* default.agency.5 */.Z.agency[5],
  title: 'Tourism Projects',
  desc: 'We invest in the flourishing tourism sector, including hotels, resorts, travel agencies, and cultural attractions. We seek projects that enhance visitor experiences, preserve natural and cultural heritage, and contribute to local economies.',
  size: 'big'
}, {
  bg: imgAPI/* default.agency.6 */.Z.agency[6],
  title: 'Agricultural Projects',
  desc: 'We invest in sustainable agriculture ventures, including crop cultivation, livestock farming, and agribusiness. Our focus is on innovative and eco-friendly farming practices, ensuring food security and maximizing yield.',
  size: 'big'
}, {
  bg: imgAPI/* default.agency.7 */.Z.agency[7],
  title: 'Technological Projects',
  desc: 'We discover promising technology ventures spanning software development, artificial intelligence, biotechnology, clean energy, and more. Our investments focus on cutting-edge innovations that have the potential to disrupt industries and drive societal progress.',
  size: 'big'
}, {
  bg: imgAPI/* default.agency.8 */.Z.agency[8],
  title: 'Industrial Projects',
  desc: 'We explore investment opportunities in the entertainment industry, such as film production, music, gaming, and live events. We support projects that promote creativity, talent development, and engaging content for diverse audiences.',
  size: 'big'
}];

function CaseStudies() {
  // Theme breakpoints
  const theme = (0,styles_.useTheme)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg')); // Translation Function

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common'); // Image Gallery
  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [open, setOpen] = useState(false);

  const {
    classes
  } = case_study_style();
  const {
    classes: title
  } = (0,title_style/* default */.Z)(); // const [selectedIndex, setSelectedIndex] = useState('corporate');
  // function handleListItemClick(event, index) {
  //   console.log(index);
  //   setSelectedIndex(index);
  // }
  // function onMovePrevRequest() {
  //   setPhotoIndex((photoIndex + caseData.length - 1) % caseData.length);
  // }
  // function onMoveNextRequest() {
  //   setPhotoIndex((photoIndex + caseData.length + 1) % caseData.length);
  // }
  // function showPopup(index) {
  //   setOpen(true);
  //   setPhotoIndex(index);
  // }

  const renderCard = (item, index) => /*#__PURE__*/jsx_runtime_.jsx(Cards_Case, {
    bg: item.bg,
    title: item.title,
    desc: item.desc,
    size: item.size,
    simple: item.simple || false
  }, index.toString());

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: isDesktop,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 5,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 3,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              variant: "h5",
              className: title.primary,
              style: {
                textAlign: 'left'
              },
              children: t('agency-landing.case_title')
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 9,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.massonry,
            children: /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
              container: true,
              spacing: 5,
              children: caseData.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
                item: true,
                sm: 4,
                children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                  animateOnce: true,
                  animateIn: "fadeInUpShort",
                  offset: -100,
                  delay: 200 * index,
                  duration: 0.4,
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: renderCard(item, index)
                  })
                })
              }, index))
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const CaseStudies_CaseStudies = (CaseStudies);
;// CONCATENATED MODULE: ./components/CaseStudies/index.js


/***/ }),

/***/ 2701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Expertise_Expertise)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
;// CONCATENATED MODULE: external "react-spring"
const external_react_spring_namespaceObject = require("react-spring");
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4486);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
// EXTERNAL MODULE: ./public/images/agency/green_buble.png
var green_buble = __webpack_require__(4848);
var green_buble_default = /*#__PURE__*/__webpack_require__.n(green_buble);
// EXTERNAL MODULE: ./public/images/agency/blue_buble.png
var blue_buble = __webpack_require__(7692);
var blue_buble_default = /*#__PURE__*/__webpack_require__.n(blue_buble);
// EXTERNAL MODULE: ./public/images/agency/violet_buble.png
var violet_buble = __webpack_require__(3725);
var violet_buble_default = /*#__PURE__*/__webpack_require__.n(violet_buble);
;// CONCATENATED MODULE: ./components/Expertise/expertise-style.js





const useStyles = (0,mui_.makeStyles)({
  uniqId: 'expertise'
})((theme, _params, classes) => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    '& h4': {
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(-3)
      }
    },
    '& .MuiContainer-root': {
      [theme.breakpoints.up('sm')]: {
        padding: 0
      }
    }
  },
  background: {
    fill: theme.palette.mode === 'dark' ? (0,styles_.darken)(theme.palette.primary.light, 0.8) : (0,styles_.lighten)(theme.palette.primary.light, 0.8),
    width: 560,
    height: 560,
    top: theme.spacing(100),
    left: '20%',
    position: 'absolute',
    transform: 'scale(3)',
    [theme.breakpoints.down('md')]: {
      top: theme.spacing(80)
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  decoration: {
    fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    stroke: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    height: 600,
    width: 600,
    position: 'absolute',
    top: -200,
    left: -240,
    backgroundSize: '100%'
  },
  titleDeco: {
    position: 'relative'
  },
  desc: {
    lineHeight: '32px',
    padding: theme.spacing(4, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4)
    }
  },
  parallaxWrap: {
    position: 'absolute',
    top: -200,
    left: 50,
    '& span': {
      backgroundSize: '100%',
      position: 'absolute'
    },
    '& > div > div': {
      position: 'absolute'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  iconGreen: {
    top: -230,
    left: -130,
    width: 320,
    height: 600,
    background: `url(${(green_buble_default())}) no-repeat`
  },
  iconViolet: {
    width: 560,
    height: 560,
    top: 120,
    left: -250,
    background: `url(${(violet_buble_default())}) no-repeat`
  },
  iconBlue: {
    width: 560,
    height: 560,
    left: -10,
    top: 50,
    background: `url(${(blue_buble_default())}) no-repeat`
  },
  tagGroup: {
    marginTop: theme.spacing(2)
  },
  tagContainer: {
    marginBottom: theme.spacing(1)
  },
  tagItem: {
    display: 'inline-block',
    borderRadius: 4,
    textTransform: 'capitalize',
    padding: theme.spacing(0.5, 2),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    border: '1px solid transparent',
    transition: 'all 0.3s ease-in'
  },
  tagItemWhite: {
    background: 'white',
    color: 'black',
    borderColor: '#f16c21',
    borderRadius: 15,
    '&:hover': {
      background: '#f3a64a',
      color: 'black',
      borderColor: 'white'
    }
  },
  tagItemOrange: {
    background: '#f16c21',
    color: theme.palette.common.white,
    borderColor: theme.palette.primary.main,
    borderRadius: 15,
    '&:hover': {
      background: '#f3a64a',
      color: 'black',
      borderColor: 'white'
    }
  }
}));
/* harmony default export */ const expertise_style = (useStyles);
// EXTERNAL MODULE: ./components/Title/title-style.js
var title_style = __webpack_require__(7793);
// EXTERNAL MODULE: ./components/Title/WithDecoration.js
var WithDecoration = __webpack_require__(402);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Expertise/Expertise.js















const expertiseList = [['Continuous Development', 'Building Accomplished Cadres', 'Professionalism', 'Innovation and Community Impact', 'Individual-Centric Approach']];

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;

const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;

const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;

function Expertise() {
  const {
    0: loaded,
    1: setLoaded
  } = (0,external_react_.useState)(false); // Theme breakpoints

  const theme = (0,styles_.useTheme)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg')); // const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    classes,
    cx
  } = expertise_style();
  const {
    classes: title
  } = (0,title_style/* default */.Z)();
  const [position, setPosition] = (0,external_react_spring_namespaceObject.useSpring)(() => ({
    xy: [0, 0],
    config: {
      mass: 50,
      tension: 550,
      friction: 140
    }
  }));
  (0,external_react_.useEffect)(() => {
    setLoaded(true);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("svg", {
      fill: "#cccccc",
      width: 845,
      height: 1099,
      className: classes.background,
      children: /*#__PURE__*/jsx_runtime_.jsx("use", {
        xlinkHref: "/images/decoration/square-deco-primary.svg#square"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.root,
      children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
        fixed: true,
        onMouseMove: ({
          clientX: x,
          clientY: y
        }) => setPosition({
          xy: calc(x, y)
        }),
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          container: true,
          spacing: 6,
          children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            lg: 1
          }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
            item: true,
            md: 4,
            xs: 12,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: classes.titleDeco,
              children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx("svg", {
                fill: "#cccccc",
                width: 845,
                height: 1099,
                className: classes.decoration,
                children: /*#__PURE__*/jsx_runtime_.jsx("use", {
                  xlinkHref: "/images/agency/wave_decoration.svg#main"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(WithDecoration/* default */.Z, {
                text: t('agency-landing.expertise_title')
              }), loaded && isDesktop && /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
                animateOnce: true,
                animateIn: "zoomInShort",
                offset: -100,
                delay: 100,
                duration: 0.6,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: classes.parallaxWrap,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_spring_namespaceObject.animated.div, {
                    style: {
                      transform: position.xy.interpolate(trans1)
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: classes.iconGreen
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_spring_namespaceObject.animated.div, {
                    style: {
                      transform: position.xy.interpolate(trans2)
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: classes.iconViolet
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_spring_namespaceObject.animated.div, {
                    style: {
                      transform: position.xy.interpolate(trans3)
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: classes.iconBlue
                    })
                  })]
                })
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
            item: true,
            lg: 7,
            md: 8,
            xs: 12,
            children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              className: cx(title.default, text.subtitle),
              variant: "h4",
              children: t('agency-landing.expertise_subtitle')
            }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              className: cx(classes.desc, text.paragraph),
              children: t('agency-landing.expertise_paragraph')
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.tagGroup,
              children: expertiseList.map((group, indexGroup) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: classes.tagContainer,
                children: group.map((item, indexChild) => /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: cx(classes.tagItem, indexChild % 2 === 0 ? classes.tagItemOrange : classes.tagItemWhite),
                  children: t(item)
                }, indexChild.toString()))
              }, indexGroup.toString()))
            })]
          })]
        })
      })
    })]
  });
}

/* harmony default export */ const Expertise_Expertise = (Expertise);
;// CONCATENATED MODULE: ./components/Expertise/index.js


/***/ }),

/***/ 4675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ MapAddress)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "react-scroll-animation-wrapper"
var external_react_scroll_animation_wrapper_ = __webpack_require__(5902);
var external_react_scroll_animation_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_animation_wrapper_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
;// CONCATENATED MODULE: external "@mui/icons-material/Email"
const Email_namespaceObject = require("@mui/icons-material/Email");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/LocalPhone"
const LocalPhone_namespaceObject = require("@mui/icons-material/LocalPhone");
;// CONCATENATED MODULE: external "@mui/icons-material/LocationOn"
const LocationOn_namespaceObject = require("@mui/icons-material/LocationOn");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_namespaceObject);
;// CONCATENATED MODULE: external "google-maps-react18"
const external_google_maps_react18_namespaceObject = require("google-maps-react18");
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/MapAddress/map-address-style.js

const useStyles = (0,mui_.makeStyles)({
  uniqId: 'map'
})(theme => ({
  root: {
    position: 'relative',
    '& .MuiContainer-root': {
      [theme.breakpoints.up('sm')]: {
        padding: 0
      }
    }
  },
  block: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(20)
    }
  },
  paper: {
    padding: theme.spacing(3, 5),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 2)
    }
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(),
    marginTop: theme.spacing(2),
    top: theme.spacing(),
    position: 'relative'
  },
  map: {
    background: '#dedede',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: 700,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(-6)
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const map_address_style = (useStyles);
// EXTERNAL MODULE: ./components/Title/WithDecoration.js
var WithDecoration = __webpack_require__(402);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/MapAddress/MapAddress.js


















function MapContainer(props) {
  const {
    google
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(external_google_maps_react18_namespaceObject.Map, {
    google: google,
    style: {
      width: '100%',
      height: '700px',
      position: 'relative'
    },
    initialCenter: {
      lat: 37.759703,
      lng: -122.428093
    },
    zoom: 14,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_google_maps_react18_namespaceObject.Marker, {
      position: {
        lat: 37.759703,
        lng: -122.428093
      }
    })
  });
}

const MapWithAMarker = (0,external_google_maps_react18_namespaceObject.GoogleApiWrapper)({
  apiKey: null
})(MapContainer);

function MapAdress() {
  // Theme breakpoints
  const theme = (0,styles_.useTheme)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg')); // Translation Function

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    classes
  } = map_address_style();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: classes.root,
    children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      fixed: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 1
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
          item: true,
          md: isDesktop ? 5 : 6,
          xs: 12,
          children: [/*#__PURE__*/jsx_runtime_.jsx(WithDecoration/* default */.Z, {
            text: t('agency-landing.office_title')
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.block,
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scroll_animation_wrapper_default()), {
              animateOnce: true,
              animateIn: "fadeInLeftShort",
              offset: -100,
              delay: 200,
              duration: 0.3,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Paper_default()), {
                className: classes.paper,
                children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                  variant: "h6",
                  display: "block",
                  children: t('agency-landing.office_head')
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
                  container: true,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    sm: 6,
                    xs: 12,
                    children: [/*#__PURE__*/jsx_runtime_.jsx((Email_default()), {
                      className: classes.icon
                    }), "info@veronaai"]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
                    item: true,
                    xs: 12,
                    children: [/*#__PURE__*/jsx_runtime_.jsx((LocationOn_default()), {
                      className: classes.icon
                    }), "Abu Dhabi, UAE"]
                  })]
                })]
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 6,
          xs: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx((Paper_default()), {
            className: classes.map,
            elevation: 10,
            children: /*#__PURE__*/jsx_runtime_.jsx(MapWithAMarker, {
              googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
              loadingElement: /*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  height: '100%'
                }
              }),
              containerElement: /*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  height: '700px'
                }
              }),
              mapElement: /*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  height: '100%'
                }
              })
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const MapAddress = (MapAdress);
;// CONCATENATED MODULE: ./components/MapAddress/index.js


/***/ }),

/***/ 7551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ PageNav_PageNav)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__(2217);
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);
// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__(6578);
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/ArrowUpward"
const ArrowUpward_namespaceObject = require("@mui/icons-material/ArrowUpward");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tooltip"
const Tooltip_namespaceObject = require("@mui/material/Tooltip");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__(9560);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/PageNav/pagenav-style.js


const pagenav = (0,mui_.makeStyles)({
  uniqId: 'pagenav'
})((theme, _params, classes) => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    position: 'relative',
    bottom: 0,
    right: 0,
    background: theme.palette.primary.light,
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: theme.palette.primary.dark,
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.light
      }
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    [`&.${classes.show}`]: {
      [`& .${classes.fab}`]: {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    '& ul': {
      margin: '8px 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: (0,styles_.alpha)(theme.palette.common.white, 0.3),
        border: `1px solid ${theme.palette.primary.dark}`,
        display: 'block',
        transition: 'all 0.4s ease',
        borderRadius: 3,
        transform: 'rotate(45deg)'
      },
      '&[class="active"] a': {
        background: theme.palette.primary.dark,
        border: `1px solid ${theme.palette.primary.light}`
      }
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important'
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.primary.dark,
    fontSize: 14
  }
}));
/* harmony default export */ const pagenav_style = (pagenav);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/PageNav/PageNav.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function createData(id, name, url) {
  return {
    id,
    name,
    url
  };
}

const LinkBtn = /*#__PURE__*/external_react_default().forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_anchor_link_smooth_scroll_default()), _objectSpread({
    to: props.to
  }, props)); // eslint-disable-line
});

function PageNav() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = scroll > 500;

    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  (0,external_react_.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const {
    classes,
    cx
  } = pagenav_style();
  const {
    0: menuList
  } = (0,external_react_.useState)([createData(1, menu/* default.0 */.Z[0], '#' + menu/* default.0.replace */.Z[0].replace(/ /g, '_')), createData(2, menu/* default.1 */.Z[1], '#' + menu/* default.1.replace */.Z[1].replace(/ /g, '_')), createData(3, menu/* default.2 */.Z[2], '#' + menu/* default.2.replace */.Z[2].replace(/ /g, '_')), createData(4, menu/* default.3 */.Z[3], '#' + menu/* default.3.replace */.Z[3].replace(/ /g, '_'))]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: cx(classes.pageNav, show && classes.show),
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: classes.sectionNav,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_scrollspy_default()), {
        items: menu/* default */.Z,
        currentClassName: "active",
        children: menuList.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
          style: {
            top: 30 * (menu/* default.length */.Z.length - item.id)
          },
          "data-id": item.id,
          children: /*#__PURE__*/jsx_runtime_.jsx((Tooltip_default()), {
            title: t('agency-landing.header_' + item.name),
            placement: "left",
            classes: {
              tooltip: classes.tooltip
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(LinkBtn, {
                href: item.url
              })
            })
          })
        }, item.id.toString()))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Tooltip_default()), {
      title: "To Top",
      placement: "left",
      classes: {
        tooltip: classes.tooltip
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: /*#__PURE__*/jsx_runtime_.jsx((Fab_default()), {
          color: "primary",
          "aria-label": "To top",
          component: LinkBtn,
          offset: "40",
          href: "#home",
          className: classes.fab,
          children: /*#__PURE__*/jsx_runtime_.jsx((ArrowUpward_default()), {})
        })
      })
    })]
  });
}

/* harmony default export */ const PageNav_PageNav = (PageNav);
;// CONCATENATED MODULE: ./components/PageNav/index.js


/***/ }),

/***/ 8130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SingleSquare)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7446);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parallax_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(628);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function SingleSquare() {
  const {
    classes,
    cx
  } = (0,_parallax_style__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: classes.parallaxWrap,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.ParallaxProvider, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: cx(classes.testi, classes.innerParallax),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
          translateY: [10, 30],
          className: "figure",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: cx(classes.parallaxSquare, classes.parallaxSecondarySingle)
          })
        })
      })
    })
  });
}

/***/ }),

/***/ 7670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Square)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7446);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parallax_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(628);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function Square() {
  const {
    classes,
    cx
  } = (0,_parallax_style__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: classes.parallaxWrap,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.ParallaxProvider, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: cx(classes.about, classes.innerParallax),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
          translateY: [-50, 10],
          className: "figure",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: cx(classes.parallaxSquare, classes.parallaxSecondary)
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallax, {
          translateY: [-40, 10],
          className: "figure",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: cx(classes.parallaxSquare, classes.parallaxPrimary)
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ 628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_images_imgAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5967);


const parallaxStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'parallax'
})((theme, _params, classes) => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class="figure"]': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute'
    },
    '& [class="figure"] > div': {
      display: 'block',
      position: 'absolute',
      top: 0
    }
  },
  innerParallaxSingle: {
    height: '100vh',
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class="figure"]': {
      height: '100vh',
      width: '100%',
      display: 'block',
      position: 'absolute'
    },
    '& [class="figure"] > div': {
      height: '100vh',
      width: '100%',
      display: 'block',
      position: 'absolute'
    }
  },
  parallaxSquare: {
    transform: 'rotate(45deg)',
    position: 'absolute',
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  parallaxPrimary: {
    background: `url(${public_images_imgAPI__WEBPACK_IMPORTED_MODULE_1__/* ["default"].agency[1] */ .Z.agency[1]}) no-repeat`,
    width: 405,
    height: 405,
    // opacity: 0.08,
    borderRadius: 80
  },
  parallaxSecondary: {
    background: theme.palette.secondary.main,
    width: 205,
    height: 205,
    opacity: 0.2,
    borderRadius: 40
  },
  parallaxSecondarySingle: {
    background: theme.palette.secondary.main,
    width: 305,
    height: 305,
    opacity: 0.08,
    borderRadius: 40
  },
  banner: {
    top: 400,
    [`& .${classes.parallaxPrimary}`]: {
      right: 340
    },
    [`& .${classes.parallaxSecondary}`]: {
      right: 100,
      top: 100
    }
  },
  about: {
    top: 800,
    [`& .${classes.parallaxPrimary}`]: {
      left: 40,
      top: '70px !important'
    },
    [`& .${classes.parallaxSecondary}`]: {
      left: -30
    }
  },
  dotsWrap: {
    top: -100
  },
  testi: {
    top: -100
  },
  parallaxDot: {
    fill: theme.palette.text.disabled,
    width: 845,
    height: 1099,
    opacity: 0.2,
    top: '90 !important',
    left: 0,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    position: 'absolute'
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parallaxStyles);

/***/ }),

/***/ 4599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Services_Services)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-multi-carousel"
const external_react_multi_carousel_namespaceObject = require("react-multi-carousel");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/AutoPlayCarousel.js
// AutoPlayCarousel.js




const responsive = {
  superLargeDesktop: {
    breakpoint: {
      max: 4000,
      min: 3000
    },
    items: 5
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 4
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  }
};

const AutoPlayCarousel = ({
  items
}) => /*#__PURE__*/jsx_runtime_.jsx((external_react_multi_carousel_default()), {
  responsive: responsive,
  autoPlay: true,
  autoPlaySpeed: 3000,
  infinite: true,
  arrows: false,
  ssr: true,
  children: items.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "slidesImg",
    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
      src: item.image,
      alt: `Item ${index + 1}`,
      width: 450,
      height: 300,
      className: "carouselCardImg",
      style: {
        verticalAlign: 'middle'
      }
    })
  }, index))
});

/* harmony default export */ const components_AutoPlayCarousel = (AutoPlayCarousel);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(5967);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4486);
;// CONCATENATED MODULE: external "@mui/icons-material/BarChart"
const BarChart_namespaceObject = require("@mui/icons-material/BarChart");
var BarChart_default = /*#__PURE__*/__webpack_require__.n(BarChart_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Services/services-style.js


const useStyles = (0,mui_.makeStyles)({
  uniqId: 'services'
})((theme, _params, classes) => ({
  root: {
    width: '100%',
    height: '60vh',
    background: theme.palette.mode === 'dark' ? (0,styles_.darken)(theme.palette.primary.light, 0.8) : (0,styles_.lighten)(theme.palette.primary.light, 0.8),
    position: 'relative',
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(15)
    }
  },
  title: {
    fontSize: '20px'
  },
  // carouselHandle: {
  //   height: 380,
  //   position: 'relative',
  //   zIndex: 10
  // },
  // carouselWrap: {
  //   position: 'absolute',
  //   zIndex: 2,
  //   width: '100%',
  //   overflow: 'hidden',
  // },
  // item: {
  //   '&:focus': {
  //     outline: 'none'
  //   }
  // },
  // carouselProp: {
  //   [theme.breakpoints.down('lg')]: {
  //     display: 'none'
  //   },
  //   '& div': {
  //     width: theme.direction === 'rtl' ? 500 : 300
  //   }
  // },
  floatingTitle: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3),
      top: theme.spacing(-10)
    },
    [theme.breakpoints.up(1400)]: {
      left: theme.spacing(10)
    },
    [`& .${classes.title}`]: {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5)
      },
      [theme.breakpoints.up('lg')]: {
        float: 'right'
      },
      [theme.breakpoints.up(1400)]: {
        marginRight: theme.spacing(-5)
      }
    }
  },
  // arrow: {
  //   direction: theme.direction === 'rtl' ? 'rtl' : 'ltr',
  //   marginTop: theme.direction === 'rtl' ? 160 : 140,
  //   right: theme.direction === 'rtl' ? 160 : 0,
  //   position: 'relative',
  //   zIndex: 10,
  //   '& button': {
  //     background: theme.palette.background.paper,
  //     margin: theme.spacing(0.5),
  //     color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
  //   },
  //   [theme.breakpoints.down(1280)]: {
  //     display: 'none'
  //   },
  //   [theme.breakpoints.down('lg')]: {
  //     display: 'none',
  //     marginTop: 560
  //   },
  // },
  // sliderImg: {
  // width: '300px',
  //   height: '200px',
  //   objectFit: 'cover',
  visionDesc: {
    margin: '0 auto',
    width: '50%',
    textAlign: 'justify',
    fontWeight: 500,
    fontSize: 26,
    paddingTop: '10%',
    paddingRight: '25%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      width: '80%'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
      width: '80%'
    }
  }
}));
/* harmony default export */ const services_style = (useStyles);
// EXTERNAL MODULE: ./components/Title/title-style.js
var title_style = __webpack_require__(7793);
// EXTERNAL MODULE: ./components/Parallax/SingleSquare.js
var SingleSquare = __webpack_require__(8130);
// EXTERNAL MODULE: ./components/Title/WithIcon.js + 1 modules
var WithIcon = __webpack_require__(4885);
;// CONCATENATED MODULE: ./components/Services/Services.js
 // import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import Fab from '@mui/material/Fab';
// import Carousel from 'react-slick';
// import PrevIcon from '@mui/icons-material/ArrowBack';
// import NextIcon from '@mui/icons-material/ArrowForward';
// import { useTranslation } from 'next-i18next';
// import imgApi from 'public/images/imgAPI';









 // import TitleIcon from '../Title/WithIcon';
// import Card from '../Cards/Default';
// import DotsParallax from '../Parallax/Dots';




const items = [{
  image: imgAPI/* default.services.0 */.Z.services[0]
}, {
  image: imgAPI/* default.services.1 */.Z.services[1]
}, {
  image: imgAPI/* default.services.2 */.Z.services[2]
}, {
  image: imgAPI/* default.services.3 */.Z.services[3]
}, {
  image: imgAPI/* default.services.4 */.Z.services[4]
}];

function Services() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    classes,
    cx
  } = services_style();
  const {
    classes: title
  } = (0,title_style/* default */.Z)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.root,
      children: [/*#__PURE__*/jsx_runtime_.jsx(SingleSquare/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.floatingTitle,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.title,
          children: /*#__PURE__*/jsx_runtime_.jsx(WithIcon/* default */.Z, {
            text: t('agency-landing.services_title'),
            icon: /*#__PURE__*/jsx_runtime_.jsx((BarChart_default()), {
              sx: {
                fontSize: 100
              }
            }),
            extended: true,
            className: "titleservice"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          className: cx(classes.visionDesc, text.subtitle),
          variant: "body1",
          children: t('agency-landing.services_desc')
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_AutoPlayCarousel, {
        items: items
      })
    })]
  });
}

/* harmony default export */ const Services_Services = (Services);
;// CONCATENATED MODULE: ./components/Services/index.js


/***/ }),

/***/ 2955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Testimonials_Testimonials)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(5967);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(1168);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
;// CONCATENATED MODULE: external "@mui/material/Avatar"
const Avatar_namespaceObject = require("@mui/material/Avatar");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/icons-material/Star"
const Star_namespaceObject = require("@mui/icons-material/Star");
var Star_default = /*#__PURE__*/__webpack_require__.n(Star_namespaceObject);
// EXTERNAL MODULE: ./components/Cards/cards-style.js
var cards_style = __webpack_require__(6456);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Cards/Testimonial.js









function Testimonial(props) {
  const {
    classes
  } = (0,cards_style/* default */.Z)();
  const {
    avatar,
    title,
    name,
    text,
    star
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.testiCard,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((Paper_default()), {
      className: classes.paper,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
        display: "block",
        component: "p",
        children: text
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.rating,
        children: [[...Array(star)].map((e, index) => /*#__PURE__*/jsx_runtime_.jsx((Star_default()), {
          className: classes.starIcon
        }, index.toString())), [...Array(5 - star)].map((e, index) => /*#__PURE__*/jsx_runtime_.jsx((Star_default()), {
          className: classes.starIconDisable
        }, index.toString()))]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: classes.person,
      children: [/*#__PURE__*/jsx_runtime_.jsx((Avatar_default()), {
        alt: name,
        src: avatar,
        className: classes.avatar
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.name,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          display: "block",
          variant: "h6",
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
          variant: "caption",
          className: classes.title,
          children: title
        })]
      })]
    })]
  });
}

/* harmony default export */ const Cards_Testimonial = (Testimonial);
// EXTERNAL MODULE: ./components/Title/WithIcon.js + 1 modules
var WithIcon = __webpack_require__(4885);
// EXTERNAL MODULE: ./components/Parallax/SingleSquare.js
var SingleSquare = __webpack_require__(8130);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/Testimonials/testi-style.js


const testiStyles = (0,mui_.makeStyles)({
  uniqId: 'testimonial'
})((theme, _params, classes) => ({
  root: {
    width: '100%',
    background: theme.palette.mode === 'dark' ? (0,styles_.darken)(theme.palette.primary.light, 0.8) : (0,styles_.lighten)(theme.palette.primary.light, 0.8),
    position: 'relative',
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(15)
    }
  },
  carousel: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-10)
    },
    '& ul[class*="slick-dots"]': {
      bottom: theme.spacing(-8),
      '& li': {
        width: 10,
        height: 10,
        transition: 'width 0.3s ease',
        background: theme.palette.secondary.light,
        borderRadius: 15,
        margin: theme.spacing(0, 0.5),
        '&[class="slick-active"]': {
          width: 35
        },
        '& button': {
          opacity: 0
        }
      }
    }
  },
  item: {
    padding: theme.spacing(2),
    '&:focus': {
      outline: 'none'
    }
  },
  title: {},
  floatingTitle: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3),
      top: theme.spacing(-10)
    },
    [theme.breakpoints.up('xl')]: {
      left: theme.spacing(10)
    },
    [`& .${classes.title}`]: {
      [theme.breakpoints.up('lg')]: {
        marginRight: theme.spacing(5),
        float: 'right'
      },
      [theme.breakpoints.up('xl')]: {
        marginRight: theme.spacing(-5)
      }
    }
  },
  itemPropsFirst: {
    width: theme.direction === 'rtl' ? 450 : 160
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 160 : 350
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const testi_style = (testiStyles);
;// CONCATENATED MODULE: ./components/Testimonials/Testimonials.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // import CompanyLogo from '../CompanyLogo';





const testiContent = [{
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
  avatar: imgAPI/* default.avatar.10 */.Z.avatar[10],
  name: 'John Doe',
  title: 'Chief Digital Officer',
  rating: 5
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.1 */.Z.avatar[1],
  name: 'Jean Doe',
  title: 'Chief Digital Officer',
  rating: 4
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.2 */.Z.avatar[2],
  name: 'Jena Doe',
  title: 'Graphic Designer',
  rating: 4
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
  avatar: imgAPI/* default.avatar.3 */.Z.avatar[3],
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer',
  rating: 3
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.4 */.Z.avatar[4],
  name: 'Jihan Doe',
  title: 'CEO Software House',
  rating: 5
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: imgAPI/* default.avatar.6 */.Z.avatar[6],
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer',
  rating: 5
}];

function Testimonials() {
  // Theme breakpoints
  const theme = (0,styles_.useTheme)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  const {
    classes
  } = testi_style(); // Carousel Setting

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }]
  }; // Translation function

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common'); // Carousel

  const slider = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    if (theme.direction === 'ltr' && window.innerWidth > 1279) {
      const limit = window.innerWidth > 1400 ? 3 : 2;
      const lastSlide = Math.floor(testiContent.length - limit);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.root,
    children: [/*#__PURE__*/jsx_runtime_.jsx(SingleSquare/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.carousel,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({
        ref: slider
      }, settings), {}, {
        children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.item,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.itemPropsFirst
          })
        }), testiContent.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.item,
          children: /*#__PURE__*/jsx_runtime_.jsx(Cards_Testimonial, {
            avatar: item.avatar,
            title: item.title,
            name: item.name,
            text: item.text,
            star: item.rating
          })
        }, index.toString())), isDesktop && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.item,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.itemPropsLast
          })
        })]
      }))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: classes.floatingTitle,
      children: /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
        fixed: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: classes.title,
          children: /*#__PURE__*/jsx_runtime_.jsx(WithIcon/* default */.Z, {
            text: t('agency-landing.testimonial_title'),
            icon: "format_quote"
          })
        })
      })
    })]
  });
}

/* harmony default export */ const Testimonials_Testimonials = (Testimonials);
;// CONCATENATED MODULE: ./components/Testimonials/index.js


/***/ }),

/***/ 402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7793);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function WithDecoration(props) {
  const {
    classes
  } = (0,_title_style__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
  const {
    text,
    bg
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: classes.deco,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
        className: bg ? classes.bgImg : '',
        variant: "h3",
        style: {
          backgroundImage: `url(${bg})`
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          children: text
        })
      })
    })
  });
}

WithDecoration.defaultProps = {
  bg: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithDecoration);

/***/ }),

/***/ 4885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ WithIcon)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/Icon"
const Icon_namespaceObject = require("@mui/material/Icon");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_namespaceObject);
// EXTERNAL MODULE: ./components/Title/title-style.js
var title_style = __webpack_require__(7793);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Title/WithIcon.js







function WithDecoration(props) {
  const {
    classes,
    cx
  } = (0,title_style/* default */.Z)();
  const {
    text,
    extended,
    icon
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: cx(classes.iconDeco, extended && classes.extend),
    children: [/*#__PURE__*/jsx_runtime_.jsx((Icon_default()), {
      className: classes.icon,
      children: icon
    }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
      variant: "h3",
      children: text
    })]
  });
}

WithDecoration.defaultProps = {
  extended: false,
  icon: 'apps'
};
/* harmony default export */ const WithIcon = (WithDecoration);

/***/ }),

/***/ 7793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const titleBase = {
  fontFamily: 'Roboto Condensed',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  marginBottom: 64,
  position: 'relative'
};
const titleStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({
  uniqId: 'title'
})((theme, _params, classes) => ({
  default: {
    padding: theme.spacing(0, 4)
  },
  primary: _objectSpread({
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 48,
    lineHeight: '62px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 38,
      lineHeight: '50px'
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      marginBottom: theme.spacing(4),
      fontSize: 32,
      lineHeight: '42px'
    }
  }, titleBase),
  secondary: _objectSpread({
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.dark,
    fontSize: 48,
    lineHeight: '62px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 38,
      lineHeight: '50px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '42px'
    }
  }, titleBase),
  deco: {
    position: 'relative',
    '& h3': {
      fontFamily: 'Roboto Condensed',
      color: theme.palette.common.white,
      width: 120,
      position: 'relative',
      textTransform: 'capitalize',
      fontSize: 35,
      fontWeight: 700,
      lineHeight: '62px',
      [theme.breakpoints.up('lg')]: {
        height: 160,
        marginLeft: theme.spacing(3),
        paddingLeft: 20
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: 30,
        marginTop: theme.spacing(10)
      },
      [theme.breakpoints.only('md')]: {
        marginLeft: theme.spacing(7)
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: 30,
        lineHeight: '50px'
      },
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        width: 'auto',
        textAlign: 'center'
      }
    },
    '&:before': {
      content: '""',
      width: 210,
      height: 210,
      background: theme.palette.primary.main,
      // background: `url(${imgAPI.agency[1]}) no-repeat center center`,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: 0,
      left: 0,
      [theme.breakpoints.down('sm')]: {
        left: theme.spacing(3)
      },
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    }
  },
  extend: {},
  iconDeco: {
    [theme.breakpoints.up('lg')]: {
      width: 350
    },
    '&:before': {
      content: '""',
      width: 480,
      height: 480,
      background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: theme.spacing(15),
      right: theme.spacing(10),
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    [`&.${classes.extend}`]: {
      '&:before': {
        boxShadow: `-30px 20px 0px 0px ${theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light}`
      }
    },
    '& h3': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontWeight: 700,
      textTransform: 'capitalize',
      fontFamily: 'Roboto Condensed',
      lineHeight: '62px',
      position: 'relative',
      width: 200,
      fontSize: 48,
      [theme.breakpoints.down('lg')]: {
        fontSize: 38,
        lineHeight: '50px',
        width: '100%',
        textAlign: 'center'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 32,
        lineHeight: '42px'
      }
    }
  },
  icon: {
    position: 'relative',
    fontSize: '100px !important',
    color: theme.palette.secondary.light,
    display: 'block',
    margin: theme.spacing(20, 0, 3),
    [theme.breakpoints.down('lg')]: {
      display: 'none !important'
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (titleStyles);

/***/ }),

/***/ 3286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ VideoBanner_VideoBanner)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/icons-material/PlayArrow"
const PlayArrow_namespaceObject = require("@mui/icons-material/PlayArrow");
var PlayArrow_default = /*#__PURE__*/__webpack_require__.n(PlayArrow_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Pause"
const Pause_namespaceObject = require("@mui/icons-material/Pause");
var Pause_default = /*#__PURE__*/__webpack_require__.n(Pause_namespaceObject);
;// CONCATENATED MODULE: external "react-youtube"
const external_react_youtube_namespaceObject = require("react-youtube");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__(4486);
// EXTERNAL MODULE: ./public/images/imgAPI.js
var imgAPI = __webpack_require__(5967);
// EXTERNAL MODULE: ./youtube.js
var youtube = __webpack_require__(1794);
var youtube_default = /*#__PURE__*/__webpack_require__.n(youtube);
// EXTERNAL MODULE: external "tss-react/mui"
var mui_ = __webpack_require__(6508);
;// CONCATENATED MODULE: ./components/VideoBanner/banner-style.js

const useStyles = (0,mui_.makeStyles)({
  uniqId: 'banner'
})((theme, _params, classes) => ({
  decoTop: {},
  decoBottom: {},
  heroContent: {
    position: 'relative',
    '& > div': {
      paddingLeft: 0,
      paddingRight: 0
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(6),
      marginBottom: 0
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: 0,
      paddingBottom: theme.spacing(15)
    }
  },
  bannerText: {
    position: 'relative',
    zIndex: 10,
    color: theme.palette.text.primary,
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 0)
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: 640,
      margin: '0 auto',
      textAlign: 'center',
      color: theme.palette.common.white
    }
  },
  title: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(15)
    },
    '& h3': {
      fontFamily: 'Roboto Condensed'
    }
  },
  textHelper: {
    display: 'inline-block',
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(10)
    }
  },
  secondRow: {
    display: 'flex',
    alignItems: 'center'
  },
  subtitle: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5)
    }
  },
  button: {
    minWidth: 200,
    height: 48,
    [theme.breakpoints.down('md')]: {
      color: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.light
    }
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'transform: rotate(180deg)' : 'none'
  },
  mobileCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
    height: '100%',
    background: theme.palette.common.black,
    '& img': {
      minWidth: '100%',
      height: '100%',
      opacity: 0.5
    }
  },
  videoWrap: {
    position: 'relative'
  },
  videoFigure: {
    borderRadius: 80,
    background: theme.palette.primary.main,
    overflow: 'hidden',
    position: 'absolute',
    width: 1040,
    height: 840,
    top: 0,
    left: 0,
    boxShadow: `-30px 20px 0px 0px ${theme.palette.primary.main}`,
    [theme.breakpoints.up('sm')]: {
      top: -920,
      left: -110,
      transform: theme.direction === 'rtl' ? 'rotate(75deg)' : 'rotate(-75deg)'
    },
    [theme.breakpoints.up('md')]: {
      transform: theme.direction === 'rtl' ? 'rotate(45deg)' : 'rotate(-45deg)',
      width: 1200,
      top: -660,
      left: -200
    }
  },
  video: {},
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: theme.palette.common.black,
    opacity: 0.6,
    width: '100%',
    height: '100%',
    zIndex: 10
  },
  innerFigure: {
    background: theme.palette.common.black,
    width: '100%',
    height: '100%',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      top: -140,
      left: 400,
      transform: theme.direction === 'rtl' ? 'rotate(-75deg)' : 'rotate(75deg)',
      transformOrigin: 'top left'
    },
    [theme.breakpoints.up('md')]: {
      transform: theme.direction === 'rtl' ? 'rotate(-45deg)' : 'rotate(45deg)',
      left: 130
    },
    '& img': {
      display: 'block',
      width: '100%',
      zIndex: 2,
      position: 'relative'
    },
    [`& .${classes.video}`]: {
      display: 'block',
      width: '100%',
      top: 98,
      position: 'fixed',
      left: 30,
      '& iframe': {
        width: '100%'
      }
    },
    '&:hover': {
      [`& .${classes.btnPlay}`]: {
        opacity: 1
      }
    }
  },
  btnPlay: {
    position: 'absolute',
    top: '46%',
    left: '46%',
    zIndex: 20,
    width: 80,
    height: 80,
    opacity: 0,
    transition: 'opacity 0.5s ease',
    background: '#FFF !important',
    boxShadow: theme.shadows[3],
    '& svg': {
      width: 50,
      height: 50,
      fill: theme.palette.primary.main
    }
  }
})); // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.

/* harmony default export */ const banner_style = (useStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/VideoBanner/VideoBanner.js



 // import Button from '@mui/material/Button';



 // import SendIcon from '@mui/icons-material/Send';












function VideoBanner() {
  // Theme breakpoints
  const theme = (0,styles_.useTheme)();
  const {
    classes: text
  } = (0,common/* useText */.XK)();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery_default()(theme.breakpoints.up('sm'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md')); // Translation function

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common'); // Youtube player

  const {
    0: play,
    1: setPlayed
  } = (0,external_react_.useState)(false);
  const {
    0: playCtrl,
    1: setPlayedCtrl
  } = (0,external_react_.useState)(true);
  const {
    0: player,
    1: setPlayer
  } = (0,external_react_.useState)([]);
  const {
    classes,
    cx
  } = banner_style();
  (0,external_react_.useEffect)(() => {
    if (isDesktop) {
      /* Attention
      ** HandleScroll function to optimize site with video background may give an error log
      ** Uncaught TypeError: Cannot read property 'src' of null
      ** It's because HMR in development mode, and react-youtube need to refresh.
      ** The error log will not happen in production mode or just reload browser (development mode)
      ** You can uncomment _onPlay() function, if you don't want see error browser log.
      ** But then every changes you make, the browser will auto reload.
      */
      // _onPlay();
    }
  }, []);

  const _onEnd = event => {
    event.target.playVideo();
  };

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();

    if (curTime > 0) {
      setPlayed(true);
      setPlayedCtrl(true);
    }
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const _onTogglePause = () => {
    setPlayedCtrl(!playCtrl);

    if (playCtrl) {
      player[0].pauseVideo();
    } else {
      player[0].playVideo();
    }
  };

  const opts = {
    height: '720',
    width: '1080',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:3001'
    }
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes.heroContent,
    children: [isMobile && /*#__PURE__*/jsx_runtime_.jsx("figure", {
      className: classes.mobileCover,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: imgAPI/* default.agency.0 */.Z.agency[0],
        alt: "cover"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((Container_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        spacing: 6,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 6,
          xs: 12,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: classes.bannerText,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.title,
              children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
                variant: "h3",
                className: cx(classes.textHelper, text.title, 'banner_title'),
                children: t('agency-landing.banner_title')
              })
            }), /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
              className: cx(classes.subtitle, text.subtitle, '  Bsubtitle'),
              variant: "h5",
              children: t('agency-landing.banner_subtitle')
            })]
          })
        }), isTablet && /*#__PURE__*/jsx_runtime_.jsx((Grid_default()), {
          item: true,
          md: 6,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.videoWrap,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: classes.videoFigure,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: classes.innerFigure,
                children: [isDesktop && /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
                  className: classes.btnPlay,
                  onClick: _onTogglePause,
                  size: "large",
                  children: playCtrl ? /*#__PURE__*/jsx_runtime_.jsx((Pause_default()), {}) : /*#__PURE__*/jsx_runtime_.jsx((PlayArrow_default()), {})
                }), !play || isMobile ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: imgAPI/* default.agency.0 */.Z.agency[0],
                  alt: "cover"
                }) : null, /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.overlay
                }), (youtube_default()).use && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: classes.video,
                  children: isDesktop && /*#__PURE__*/jsx_runtime_.jsx((external_react_youtube_default()), {
                    videoId: "rX2T9jH0OxA",
                    opts: opts,
                    onReady: _onReady,
                    onEnd: _onEnd,
                    onPlay: _onPlay
                  })
                })]
              })
            })
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const VideoBanner_VideoBanner = (VideoBanner);
;// CONCATENATED MODULE: ./components/VideoBanner/index.js


/***/ }),

/***/ 3919:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ lib_getStatic__WEBPACK_IMPORTED_MODULE_6__.Fe),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6508);
/* harmony import */ var tss_react_mui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tss_react_mui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_getStatic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1458);
/* harmony import */ var public_text_brand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8664);
/* harmony import */ var public_text_brand__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(public_text_brand__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_MainContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4229);
/* harmony import */ var components_VideoBanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3286);
/* harmony import */ var components_Parallax_Square__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7670);
/* harmony import */ var components_About__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6584);
/* harmony import */ var components_Services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4599);
/* harmony import */ var components_Testimonials__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2955);
/* harmony import */ var components_Expertise__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2701);
/* harmony import */ var components_CaseStudies__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8870);
/* harmony import */ var components_CallAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(338);
/* harmony import */ var components_MapAddress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4675);
/* harmony import */ var components_PageNav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7551);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_MainContainer__WEBPACK_IMPORTED_MODULE_8__]);
components_MainContainer__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





 // Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)













 // import Notification from 'components/Notification';



const items = [{
  image: 'image1.jpg'
}, {
  image: 'image2.jpg'
}, {
  image: 'image3.jpg'
}, {
  image: 'image4.jpg'
}, {
  image: 'image5.jpg'
}];

const sectionMargin = margin => margin * 20;

const useStyles = (0,tss_react_mui__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  uniqId: 'home'
})(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    color: theme.palette.text.primary
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(6)
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(10)
    }
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10)
  },
  spaceTopShort: {
    marginTop: theme.spacing(10)
  },
  containerWrap: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10)
    },
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const {
    classes
  } = useStyles();
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  const isTablet = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.down('lg'));
  const isMobile = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.down('md'));
  const {
    onToggleDark,
    onToggleDir
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("title", {
        children: (public_text_brand__WEBPACK_IMPORTED_MODULE_7___default().agency.name) + ' - Home Page'
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(components_MainContainer__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      onToggleDark: onToggleDark,
      onToggleDir: onToggleDir,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("main", {
          className: classes.containerWrap,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(components_Parallax_Square__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
            id: "home",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(components_VideoBanner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
            className: isTablet ? classes.spaceTopShort : classes.spaceTop,
            id: "about",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(components_About__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
            className: classes.spaceTop,
            id: "services",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(components_Services__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
              items: items
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
            className: isTablet ? classes.spaceTopShort : classes.spaceTop,
            id: "our-expertise",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(components_Expertise__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
            className: isMobile ? classes.spaceTopShort : classes.spaceTop,
            id: "testimonials",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(components_Testimonials__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
            id: "case-studies",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(components_CaseStudies__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
            className: classes.spaceTopShort,
            id: "call-to-action",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(components_CallAction__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx("section", {
            className: classes.spaceTopShort,
            id: "address",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(components_MapAddress__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
          })]
        }), !isTablet && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx(components_PageNav__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing); // Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });
// Use this below for Static Site Generation (SSG)

const getStaticProps = (0,lib_getStatic__WEBPACK_IMPORTED_MODULE_6__/* .makeStaticProps */ .pc)(['common']);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/967x725/ea6d6d/ffffff', 'https://via.placeholder.com/1280x849/ea6db7/ffffff', 'https://via.placeholder.com/967x725/bb6dea/ffffff', 'https://via.placeholder.com/1048x701/6d6fea/ffffff', 'https://via.placeholder.com/1050x700/6dc0ea/ffffff', 'https://via.placeholder.com/970x725/6deaa6/ffffff', 'https://via.placeholder.com/1051x700/b8de27/ffffff', 'https://via.placeholder.com/1051x701/de9f27/ffffff', 'https://via.placeholder.com/1050x700/ef4545/ffffff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  agency: [// header , parallax style
  'https://via.placeholder.com/964x723/1071ef/FFFFFF', '/images/aboutus.png', // '/images/logos/VeronaLogo.png',
  '/images/caseStudies/Real-Estate-Projects.webp', '/images/caseStudies/Entertainment-Projects.webp', '/images/caseStudies/Educational-Projects.webp', '/images/caseStudies/Tourism-Projects.webp', '/images/caseStudies/Agricultural-Projects.webp', '/images/caseStudies/Technological-Projects.webp', '/images/caseStudies/Industrial-Projects.webp' // '/images/caseStudies/Agricultural-Projects.webp',
  ],
  services: ['/images/slider/image-1.png', '/images/slider/image-4.png', '/images/slider/image-3.png', '/images/slider/image-5.png', '/images/slider/image-2.png']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imgAPI);

/***/ }),

/***/ 1794:
/***/ ((module) => {

module.exports = {
  use: true
};

/***/ }),

/***/ 7692:
/***/ ((module) => {

module.exports = "/_next/static/images/blue_buble-69bf4faf189babaf27c68580c6e837ba.png";

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = "/_next/static/images/green_buble-2b2bb2f66f17337e41fe0d29dfd28bc4.png";

/***/ }),

/***/ 3725:
/***/ ((module) => {

module.exports = "/_next/static/images/violet_buble-b43673f46231c0f1fa65f1e57b63b38c.png";

/***/ }),

/***/ 2806:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAAGWvHq+AAAABGdBTUEAALGPC/xhBQAABY1JREFUaAXdmluoFlUUx885HQWt7CJ2k4xjihXZVQh6CCTyqStRPthzBJEv0kOvQRco8KWHCIyi61sERhg9nYrU0KgoK9G0SEuJrPOSkufr95++PayZ2TOz5/Z93/kWrLP3Xnv913+t+WZmz+wzExMp6fV6b1jTpB0w2XPjSUT9KWewk7Ix3ql2ko485zXwyAVRmDTaOjqKt6zR9V0e0VhRjLzqnBJt32FJwmgHOGy34/gYCOkmHG9u9nJQ7THCIV3rynLjRFsc1rna8C4hNxe11kGGuJSEF4OMI+HSPpmEBZKkHf+39v6y9gjMxPL+ZAZknekv6/s9KLuO4zHayzWoKlOUcgWgu6oCM0eULH536ee0v5aSeIAbS0FpB4IcQjM/UdovHuO8IcW8Ip7M6wB4MQWKhnn+kR2Pgz6Qs1lwnD+Tuj/EY+tk++4niRwV0U6W9QUuvCKLAmRO/iJnO1cbWKtGmK+Mj2LoAUocVZd7GdiB5B8zloEtSL6+g7PMBXFtGuTsmZaUr1XaSN5qk8GUGgh2WRQy++emUnBVBzi2ZHm8lumqsTP+hN3lDV1sPJsJZAyZM8HNEfNv+ue7cc32B06Ga9LYxFkE0bQroAVCca3rx3vGErvLcz3Gr+1ER/0bqPwb3b7ehWBzRyTesDq8c96ZDo3u8K6G41CHPDb0THQicZwP92852+xsy/0l4kCOeC8Zfud9EN7SAuk/kOQ/7PoIID/TP+WrNp/74gXbYIsW6EDWJ4IDhzhCuraAeCYkRiMfyNeje9Cv0HsaBQsBQ/IlmpYTIdhaPjCdSLOZ8Y+1ghaBCB5yJn9YFCN4DrIqZ68Kfz44uM+RAOcpSg152Bev1AbR6hpkFnJjKYl1AHmnRTfoL7dxc/sQbG1A4oMWP6iBeM2HampLVxivMgTezeRtaYeWxvOsNue4WG4R11uxXsG7lFMQXySCKSrcQ9s1obguhOs7dWq/VwpcUzYMg3Rf4mG7ZuZVYdMifa8qqqH/U+7s/Y1AlzYMFgI/xhm80l6nZ0AtCkHW9PkWwuuFjX9TDItrBguBve8IE6R9ZJxESKRAn6chvL/Qlwu47hoKNCMPFJLZSaBrMvDqBr1+VhM4NlXniRFh66gvJUI8GYcJ7xSvnz6itA2udwL5Cjc30nFLx5D6HrBtLolN8tKAoQ4wnLQspt/+Q7ZNCqIvDJm6L9v5keqT3FJ0h7IskN3MrR2pxEOTIXHdY/SvgipyHOeZUI6h+pGo7mVzVarz+O7Fdu5QC8kjJ7Ft6Lwn6Sam1/P4BmqngkXom00qCcRuHWhhjozkVqDpO2JgzrXdToPc6HKo0sYPn6EgiG7GV/sng3hCzkvrOBO386h3JM8hbQ9+1qTAzehpAuxHh1mkatA/wH8iHy1JS2VoLAR6Dh118X/KUVY9VWmB/2DUq/Pk93hebYlrFOBVOO5C1+UBFoBdl9cmrt9Zm2tUKAWuwfgZeomdXOB9bYjphvWz6tCGlV5SD6LjVKRqW4kepb63NdB+1fe0C/lUVR1l8pKWl3/LvMZg/m4V+ugYFFJWwqy7GWmHeS+qm9K4ySfckO7QLzpB509UL723onOyjYH8Qg3XqUjVEhXqisK4H9WnR1vQSp+VuRgj0H5KDhdTxyr0QFA+3JFfQBeKvEKi8X+Xggq0ToD1vvnRiFZ7lrwes/nm9ROPgHlOshNQbyx6erpa4yHLKfjv49Sc7SwPCtZnrk33gwhRSw6AWtVZcb7AED6Ctr0/lFf9Tibaee/0FRNiI4Htedm1YH82JIeB+VDQYvTjFgpTCO0L1fvwY1AVk6A+tj2M1hFtXLf/UW6XxZOwblh/BFarjery7/YbJhy8vNThoQA9ed2LPoTq35faeT+JapnawfIQfVBBv3P5DyZMDs7ecFq6AAAAAElFTkSuQmCC"

/***/ }),

/***/ 6959:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Check");

/***/ }),

/***/ 8148:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/ExpandMore");

/***/ }),

/***/ 5418:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Language");

/***/ }),

/***/ 4731:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Send");

/***/ }),

/***/ 32:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 9409:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Accordion");

/***/ }),

/***/ 8279:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AccordionDetails");

/***/ }),

/***/ 4604:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AccordionSummary");

/***/ }),

/***/ 3882:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4475:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ 4960:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 5612:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 5246:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ 4192:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 3787:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 1211:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemSecondaryAction");

/***/ }),

/***/ 8315:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 9685:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/ListSubheader");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 7730:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/OutlinedInput");

/***/ }),

/***/ 1168:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 5768:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 2651:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Select");

/***/ }),

/***/ 4180:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SwipeableDrawer");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9868:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/useMediaQuery");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2217:
/***/ ((module) => {

"use strict";
module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ 5902:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-animation-wrapper");

/***/ }),

/***/ 7446:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll-parallax");

/***/ }),

/***/ 6578:
/***/ ((module) => {

"use strict";
module.exports = require("react-scrollspy");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6508:
/***/ ((module) => {

"use strict";
module.exports = require("tss-react/mui");

/***/ }),

/***/ 3707:
/***/ ((module) => {

"use strict";
module.exports = import("next-language-detector");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [270,676,63,600,229], () => (__webpack_exec__(3919)));
module.exports = __webpack_exports__;

})();