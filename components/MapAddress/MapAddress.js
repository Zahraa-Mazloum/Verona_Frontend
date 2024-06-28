  import React from 'react';
  import PropTypes from 'prop-types';
  import useMediaQuery from '@mui/material/useMediaQuery';
  import { useTheme } from '@mui/material/styles';
  import ScrollAnimation from 'react-scroll-animation-wrapper';
  import Container from '@mui/material/Container';
  import Typography from '@mui/material/Typography';
  import Grid from '@mui/material/Grid';
  import Paper from '@mui/material/Paper';
  import EmailIcon from '@mui/icons-material/Email';
  import LocationIcon from '@mui/icons-material/LocationOn';
  import { Map, Marker } from 'google-maps-react18';
  import { useTranslation } from 'next-i18next';
  import useStyles from './map-address-style';
  import TitleDeco from '../Title/WithDecoration';
  function MapContainer(props) {
    const { google } = props;
    return (
      <Map
        google={google}
        style={{ width: '100%', height: '700px', position: 'relative' }}
        initialCenter={{
          lat: 37.759703,
          lng: -122.428093
        }}
        zoom={14}
      >
        <Marker
          position={{ lat: 37.759703, lng: -122.428093 }}
        />
      </Map>
    );
  }

  MapContainer.propTypes = {
    google: PropTypes.object.isRequired
  };

  function MapAdress() {
    // Theme breakpoints
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    // Translation Function
    const { t } = useTranslation('common');
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Container fixed>
          <Grid container spacing={6}>
            {isDesktop && (
              <Grid item md={1} />
            )}
            <Grid item md={isDesktop ? 5 : 6} xs={12}>
              <TitleDeco text={t('agency-landing.office_title')} />
              <div className={classes.block}>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeInLeftShort"
                  offset={-100}
                  delay={200}
                  duration={0.3}
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6" display="block">
                  {t('agency-landing.office_head')}
                </Typography>
                <Grid container>
                  <Grid item sm={6} xs={12}>
                    <EmailIcon className={classes.icon} />
                    info@verona.ai
                  </Grid>
                  <Grid item xs={12}>
                    <LocationIcon className={classes.icon} />
                    Abu Dhabi, UAE
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }

  export default MapAdress;
