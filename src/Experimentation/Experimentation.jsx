import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FadeInOnScroll from '../Transitions/FadeInOnScroll';
import ExpandInOnScroll from '../Transitions/ExpandInOnScroll';
import { EXPERIMENTS_INFO } from '../BEN_UPDATE_INFO_HERE/ExperimentsInfo';
import AnimateInView from '../LottieAnimations/AnimateInView';
import experimentationTextAnimation from '../LottieAnimations/ExperimentationStills_TextAnim_shapes.json';
import FlippableImageCard from '../Components/FlippableImageCard';
import { INTRO_VID_ASPECT } from '../constants';

const Experimentation = ({ winHeight, winWidth }) => {
  return (
    <Box
      id='#EXPERIMENTATION'
      sx={{
        backgroundColor: '#fff',
        paddingTop: {
          xs: '180px',
          sm: `calc(${(winHeight - INTRO_VID_ASPECT * winWidth) / 2 + 50}px)`,
          xl: `calc(${(winHeight - INTRO_VID_ASPECT * winWidth) / 2 + 60}px)`,
        },
        paddingBottom: '8vh',
        minHeight: '100vh',
      }}
    >
      <Container
        sx={{
          maxWidth: {
            xs: 'calc(100% - 24px) !important',
            sm: 'calc(100% - 200px) !important',
          },
        }}
      >
        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={6} lg={5} xl={4} sx={{ textAlign: 'left' }}>
            <AnimateInView
              animationData={experimentationTextAnimation}
              style={{
                height: '78px',
                width: '390px',
                paddingRight: '10px',
                maxWidth: 'calc(100vw - 50px)',
              }}
            />
          </Grid>
          <Grid
            item
            xs
            sx={{ textAlign: { xs: 'justify', sm: 'left' } }}
            mt={{ xs: 1, sm: 0 }}
          >
            <FadeInOnScroll offset={100} delay={400} translate={0}>
              <Typography variant='h5'>
                A home for creative practice, weird ideas, and half-baked
                projects.
              </Typography>
            </FadeInOnScroll>
          </Grid>

          <ExpandInOnScroll offset={100} delay={500}>
            <Grid
              item
              mt={{ xs: 3, sm: 6 }}
              mb={{ xs: 3, sm: 8 }}
              sx={{
                height: '2px',
                background: 'black',
                width: { xs: 'calc(100% - 24px)', sm: '80%' },
              }}
            />
          </ExpandInOnScroll>
        </Grid>

        <Grid
          container
          spacing={{ xs: 2, lg: 3, xl: 4 }}
          alignItems='center'
          justifyContent='center'
        >
          {EXPERIMENTS_INFO.map((info, index) => (
            <Grid item xs={12} sm={info.width} key={index}>
              {info.url && (
                <FadeInOnScroll delay={0} offset={0} translate={100}>
                  <FlippableImageCard src={info.url} text={info.text} />
                </FadeInOnScroll>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experimentation;
