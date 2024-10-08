import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import WorkPreviewCard from './WorkPreviewCard';
import { SCROLL_TIME_MS } from '../constants';
import { PROJECTS_INFO } from '../ProjectsInfo';

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

        <Grid container mt={3} spacing={3} mb={5}>
          {PROJECTS_INFO.map((project, idx) => (
            <Grid
              item
              xs={idx % 4 === 0 || idx % 4 === 3 ? 7 : 5}
              key={project.title}
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
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;
