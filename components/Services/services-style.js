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
  floatingTitle: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3),
      top: theme.spacing(-10),
    },
    [theme.breakpoints.down(1500)]: {
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
  visionDesc: {
    margin: '0 auto',
    width: '90%',
    textAlign: 'justify',
    fontWeight: 350,
    fontSize: 16,
    paddingTop: '10%',
    paddingRight: '43%',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
      width: '100%',
      marginRight: 14,
      textAlign: 'left',
      paddingTop: '2%',

    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 14,
      width: '100%',
      marginRight: 14,
      textAlign: 'left',
      paddingTop: '2%',

    },
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
      width: '100%',
      marginRight: 14,
      textAlign: 'left',
            paddingTop: '2%',

    },
  }
}));

export default useStyles;
