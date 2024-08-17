import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import WorkPreviewCard from './WorkPreviewCard';
import { SCROLL_TIME_MS } from '../constants';

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
      }}
    >
      <Container sx={{ paddingTop: '10vh' }}>
        <Grid container justifyContent='center'>
          <Grid item xs={3} sx={{ textAlign: 'left' }}>
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
            xs={11}
            mt={6}
            sx={{
              transform: `scaleX(${dividerWidth})`,
              transition: 'transform 0.6s ease-in-out',
              height: '2px',
              background:
                'linear-gradient(to right, rgba(0, 0, 0, 0), black, rgba(0, 0, 0, 0))',
            }}
          />
        </Grid>

        <Grid container mt={3} spacing={3}>
          <Grid item xs={7}>
            <WorkPreviewCard
              videoURL='https://res.cloudinary.com/workoutcloud/video/upload/v1722487797/transparentJet_final_01_ssujxx.mp4'
              projectName='QUINJET'
              thumbnailTimeSecond={1.5}
              winWidth={winWidth}
              winHeight={winHeight}
            />
          </Grid>
          <Grid item xs>
            <WorkPreviewCard
              videoURL='https://res.cloudinary.com/workoutcloud/video/upload/v1722488383/YerbaMate_MainVideo_yaa37n.mp4'
              projectName='YERBA MATTE'
              thumbnailTimeSecond={1}
              winWidth={winWidth}
              winHeight={winHeight}
            />
          </Grid>
          <Grid item xs={5}>
            <WorkPreviewCard
              videoURL='https://res.cloudinary.com/workoutcloud/video/upload/v1722489624/Guilt_MT_WideFormatCC_v7lxev.mp4'
              projectName='GUILT'
              thumbnailTimeSecond={6}
              winWidth={winWidth}
              winHeight={winHeight}
            />
          </Grid>
          <Grid item xs>
            <WorkPreviewCard
              videoURL='https://res.cloudinary.com/workoutcloud/video/upload/v1722488890/NiiiceShot_TitleSequence_MAINVideo_m6djde.mp4'
              projectName='NIIICE SHOT'
              thumbnailTimeSecond={1}
              winWidth={winWidth}
              winHeight={winHeight}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;
