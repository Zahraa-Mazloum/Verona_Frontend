import { lighten, darken } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'services' })((theme, _params, classes) => ({
  root: {
    width: '100%',
    height: '60vh',
    background: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.8) : lighten(theme.palette.primary.light, 0.8),
    position: 'relative',
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(15),
    }
  },
  title: {
    fontSize: '20px',
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
      top: theme.spacing(-10),
    },
    [theme.breakpoints.up(1400)]: {
      left: theme.spacing(10),
    },
    [`& .${classes.title}`]: {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5),
      },
      [theme.breakpoints.up('lg')]: {
        float: 'right',
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
      fontSize: 16,
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      width: '100%',
    },
  }
}));

export default useStyles;
