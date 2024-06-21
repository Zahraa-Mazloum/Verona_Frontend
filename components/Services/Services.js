import React, { useEffect, useRef } from 'react';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import Container from '@mui/material/Container';
// import Fab from '@mui/material/Fab';
// import Carousel from 'react-slick';
// import PrevIcon from '@mui/icons-material/ArrowBack';
// import NextIcon from '@mui/icons-material/ArrowForward';
// import { useTranslation } from 'next-i18next';
// import imgApi from 'public/images/imgAPI';
import AutoPlayCarousel from 'components/AutoPlayCarousel';
import imgAPI from 'public/images/imgAPI';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import BarChartIcon from '@mui/icons-material/BarChart';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useStyles from './services-style';
import useTitle from '../Title/title-style';
import SquareParallax from '../Parallax/SingleSquare';
// import TitleIcon from '../Title/WithIcon';
// import Card from '../Cards/Default';
// import DotsParallax from '../Parallax/Dots';
import TitleIcon from '../Title/WithIcon';

const items = [
  { image: imgAPI.services[0] },
  { image: imgAPI.services[1] },
  { image: imgAPI.services[2] },
  { image: imgAPI.services[3] },
  { image: imgAPI.services[4] },

];
function Services() {
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const { classes: title } = useTitle();
  const { classes: text } = useText();

  return (
    <div>

      <div className={classes.root}>
        <SquareParallax />
        <div className={classes.floatingTitle}>
          <div className={classes.title}>
            <TitleIcon
              text={t('agency-landing.services_title')}
              icon={<BarChartIcon sx={{ fontSize: 100 }} />}
              extended
              className="titleservice"
            />
          </div>
          <Typography className={cx(classes.visionDesc)} variant="body1">
            {t('agency-landing.services_desc')}
          </Typography>
        </div>
      </div>
      {/* carousel */}
      <div>
        <AutoPlayCarousel items={items} />
      </div>

    </div>
);
}

export default Services;
