import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'map' })((theme) => ({
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
    marginTop: '15%',
    marginLeft: '-30%',
    padding: theme.spacing(3, 5),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 2),
    }
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(),
    marginTop: theme.spacing(2),
    top: theme.spacing(),
    position: 'relative'
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
