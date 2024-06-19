import React from 'react';
// import Lightbox from 'react-18-image-lightbox';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import imgApi from 'public/images/imgAPI';
import CaseCard from '../Cards/Case';
import useStyles from './case-study-style';
import useTitle from '../Title/title-style';

// const categories = ['corporate', 'advertising', 'marketing', 'government', 'creative'];
const caseData = [
  {
    bg: imgApi.agency[2],
    title: 'Real Estate Projects',
    desc: 'We participate in real estate development opportunities, including residential, commercial, and mixed-use projects. Our investments target sustainable and urban development initiatives that meet market demands and create long-term value.',
    size: 'big',
  },
  {
    bg: imgApi.agency[3],
    title: 'Entertainment Projects',
    desc: 'We explore investment opportunities in the entertainment industry, such as film production, music, gaming, and live events. We support projects that promote creativity, talent development, and engaging content for diverse audiences.',
    size: 'big',
    // simple: true,
  },
  {
    bg: imgApi.agency[4],
    title: 'Educational Projects',
    desc: 'We support educational initiatives that aim to improve access to quality education and skill development. We invest in educational institutions, e-learning platforms, vocational training programs, and projects focused on enhancing learning outcomes.',
    size: 'big',
    // simple: true,
  },
  {
    bg: imgApi.agency[5],
    title: 'Tourism Projects',
    desc: 'We invest in the flourishing tourism sector, including hotels, resorts, travel agencies, and cultural attractions. We seek projects that enhance visitor experiences, preserve natural and cultural heritage, and contribute to local economies.',
    size: 'big',
  },
  {
    bg: imgApi.agency[6],
    title: 'Agricultural Projects',
    desc: 'We invest in sustainable agriculture ventures, including crop cultivation, livestock farming, and agribusiness. Our focus is on innovative and eco-friendly farming practices, ensuring food security and maximizing yield.',
    size: 'big',
  },
  {
    bg: imgApi.agency[7],
    title: 'Technological Projects',
    desc: 'We discover promising technology ventures spanning software development, artificial intelligence, biotechnology, clean energy, and more. Our investments focus on cutting-edge innovations that have the potential to disrupt industries and drive societal progress.',
    size: 'big',
  },
  {
    bg: imgApi.agency[8],
    title: 'Industrial Projects',
    desc: 'We explore investment opportunities in the entertainment industry, such as film production, music, gaming, and live events. We support projects that promote creativity, talent development, and engaging content for diverse audiences.',
    size: 'big',
  },
];

function CaseStudies() {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Translation Function
  const { t } = useTranslation('common');

  // Image Gallery
  // const [photoIndex, setPhotoIndex] = useState(0);
  // const [open, setOpen] = useState(false);

  const { classes } = useStyles();
  const { classes: title } = useTitle();
  // const [selectedIndex, setSelectedIndex] = useState('corporate');

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

  const renderCard = (item, index) => (
    <CaseCard
      key={index.toString()}
      bg={item.bg}
      title={item.title}
      desc={item.desc}
      size={item.size}
      simple={item.simple || false}
    />
  );

  return (
    <div className={classes.root}>
      {/* {open && (
        <Lightbox
          mainSrc={caseData[photoIndex].bg || caseData[photoIndex].logo}
          nextSrc={caseData[(photoIndex + 1) % caseData.length].bg || caseData[(photoIndex + 1) % caseData.length].logo}
          prevSrc={caseData[(photoIndex + 1) % caseData.length].logo || null}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )} */}
      <Container fixed={isDesktop}>
        <Grid container spacing={5}>
          <Grid item md={3} xs={12}>
            <div>
              <Typography variant="h5" className={title.primary} style={{ textAlign: 'left' }}>
                {t('agency-landing.case_title')}
              </Typography>
            </div>
          </Grid>
          <Grid item md={9} xs={12}>
            <div className={classes.massonry}>
              <Grid container spacing={5}>
                {caseData.map((item, index) => (
                  <Grid item sm={4} key={index}>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInUpShort"
                      offset={-100}
                      delay={200 * index}
                      duration={0.4}
                    >
                      <div>
                        {renderCard(item, index)}
                      </div>
                    </ScrollAnimation>
                  </Grid>
        ))}
              </Grid>
            </div>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

export default CaseStudies;
