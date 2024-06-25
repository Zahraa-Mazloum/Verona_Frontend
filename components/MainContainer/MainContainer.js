import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import Header from 'components/Header';
import Footer from 'components/Footer';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'main_container' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(10),
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
  },
  whatsappButton: {
    position: 'fixed',
    zIndex: 5,
    left: '20px',
    bottom: '20px',
    backgroundColor: '#25D366',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1DA851',
    }
  }
}));

function MainContainer(props) {
  const { classes } = useStyles();
  const {
    onToggleDark, onToggleDir,
    children, invert
  } = props;

  return (
    <div className={classes.mainWrap}>
      <IconButton
        className={classes.whatsappButton}
        href="https://wa.me/+96181474846"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon style={{ fontSize: 40 }} />
      </IconButton>
      <Header
        onToggleDark={onToggleDark}
        onToggleDir={onToggleDir}
        invert={invert}
      />
      {children}
      <section className={classes.spaceTopShort}>
        <Footer toggleDir={onToggleDir} />
      </section>
    </div>
  );
}

MainContainer.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool
};

MainContainer.defaultProps = {
  invert: false
};

export default MainContainer;
