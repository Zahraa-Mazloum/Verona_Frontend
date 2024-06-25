import React, { useEffect, useRef } from 'react';
import AutoPlayCarousel from 'components/AutoPlayCarousel';
import imgAPI from 'public/images/imgAPI';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import BarChartIcon from '@mui/icons-material/BarChart';
import Typography from '@mui/material/Typography';
import useStyles from './services-style';
import useTitle from '../Title/title-style';
import SquareParallax from '../Parallax/SingleSquare';
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
          <Typography className={cx(classes.visionDesc, text.subtitle)} variant="body1">
            {t('agency-landing.services_desc')}
          </Typography>
        </div>
      </div>
      <div>
        <AutoPlayCarousel items={items} />
      </div>

    </div>
);
}

export default Services;
