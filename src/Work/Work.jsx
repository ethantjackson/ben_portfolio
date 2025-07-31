import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import WorkPreviewCard from './WorkPreviewCard';
import { SCROLL_TIME_MS } from '../constants';
import { PROJECTS_INFO } from '../ProjectsInfo';
// import Lottie from 'lottie-react';
// import workTextAnimation from '../LottieAnimations/WorkText.json';

const Work = ({ isScrollingToWork, winHeight, winWidth }) => {
  const [animStarted, setAnimStarted] = useState(false);
  const [titleOpacity, setTitleOpacity] = useState(0);
  const [descriptionOpacity, setDescriptionOpacity] = useState(0);
  const [dividerWidth, setDividerWidth] = useState(0);

  const initiateIntroAnim = () => {
    if (animStarted) return;
    setAnimStarted(true);

    setTimeout(() => {
      setTitleOpacity(1);
    }, SCROLL_TIME_MS * 0.5);
    setTimeout(() => {
      setDescriptionOpacity(1);
    }, SCROLL_TIME_MS * 0.3);
    setTimeout(() => {
      setDividerWidth(1);
    }, SCROLL_TIME_MS * 0.7);
  };

  useEffect(() => {
    if (isScrollingToWork) initiateIntroAnim();
    //eslint-disable-next-line
  }, [isScrollingToWork]);

  return (
    <Box
      id='#WORK'
      sx={{
        backgroundColor: '#fff',
        position: 'relative',
        paddingBottom: '8vh',
      }}
    >
      <Container
        sx={{ paddingTop: '10vh', maxWidth: 'calc(100% - 200px) !important' }}
      >
        <Grid container justifyContent='center'>
          <Grid item xs={3} sx={{ textAlign: 'left' }}>
            {/* Lottie animation POC */}
            {/* <Lottie animationData={workTextAnimation} loop={true} /> */}
            <Typography
              variant='h3'
              sx={{
                opacity: titleOpacity,
                transition: 'opacity 0.7s ease-in-out',
              }}
            >
              WORK
            </Typography>
          </Grid>
          <Grid item xs sx={{ textAlign: 'justify' }}>
            <Typography
              variant='h5'
              sx={{
                opacity: descriptionOpacity,
                transition: 'opacity 0.7s ease-in-out',
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              illo perspiciatis repellat delectus tenetur eum in neque rem Lorem
              eligendi inventore ut earum?
            </Typography>
          </Grid>
          <Grid
            item
            mt={6}
            sx={{
              transform: `scaleX(${dividerWidth})`,
              transition: 'transform 0.6s ease-in-out',
              height: '2px',
              background: 'black',
              width: '80%',
            }}
          />
        </Grid>

        <Grid container pt={{ xs: 4, xl: 6 }} spacing={{ xs: 2, xl: 3 }} mb={5}>
          {PROJECTS_INFO.map((project, idx) => {
            const isWide = idx % 4 === 0 || idx % 4 === 3;
            const widthFraction = isWide ? 21 / 37 : 16 / 37;
            let fadeInDelay = idx % 2 === 0 ? 300 : 500;
            if (idx === 2) fadeInDelay = 500;
            if (idx === 3) fadeInDelay = 800;

            return (
              <Grid
                item
                key={project.title}
                sx={{
                  width: `${widthFraction * 100}%`,
                  aspectRatio: isWide ? '21/9' : '16/9',
                }}
              >
                <WorkPreviewCard
                  videoURL={project.previewURL}
                  projectName={project.title}
                  projectDescription={project.description}
                  detailsContent={project.detailsContent}
                  thumbnailTimeSeconds={project.thumbnailTimeSeconds}
                  projectCredits={project.credits}
                  winWidth={winWidth}
                  winHeight={winHeight}
                  fadeInDelay={fadeInDelay}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;
