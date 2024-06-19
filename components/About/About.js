import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Typewriter from 'typewriter-effect';
import TitleDeco from '../Title/WithDecoration';
import useStyles from './about-style';
import useTitle from '../Title/title-style';
import Counter from '../Counter';

function About() {
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const { classes: title } = useTitle();

  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={5} xs={12}>
            <div>
              <TitleDeco text={t('agency-landing.about_title')} />
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <Typography className={cx(title.default, text.subtitle, classes.subTtl)} variant="p">
              <Typewriter
                options={{
                  strings: [t('agency-landing.about_subtitle')],
                  autoStart: true,
                  // loop: true,
                  delay: 25,
                  deleteSpeed: Infinity,
                }}
              />
            </Typography>
            <Counter />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
