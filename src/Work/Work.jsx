import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import WorkPreviewCard from './WorkPreviewCard';
import { SCROLL_TIME_MS } from '../constants';
import { PROJECTS_INFO } from '../BEN_UPDATE_INFO_HERE/ProjectsInfo';
import workTextAnimation from '../LottieAnimations/Work_TextAnim.json';
import AnimateInView from '../LottieAnimations/AnimateInView';

const Work = ({ isScrollingToWork, winHeight, winWidth }) => {
  const [animStarted, setAnimStarted] = useState(false);
  const [descriptionOpacity, setDescriptionOpacity] = useState(0);
  const [dividerWidth, setDividerWidth] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const initiateIntroAnim = () => {
    if (animStarted) return;
    setAnimStarted(true);

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
        paddingBottom: { xs: '12px', sm: '8vh' },
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
        <Grid
          container
          justifyContent='center'
          sx={{
            paddingTop: { xs: '24px', sm: '10vh' },
          }}
        >
          <Grid item xs={12} sm={6} lg={4} xl={3} sx={{ textAlign: 'left' }}>
            <AnimateInView
              animationData={workTextAnimation}
              style={{
                height: '45px',
                width: '187px',
                marginTop: '8px',
              }}
            />
          </Grid>
          <Grid
            item
            xs
            sx={{
              textAlign: 'justify',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='h5'
              mt={{ xs: 3, sm: 0 }}
              sx={{
                opacity: descriptionOpacity,
                transition: 'opacity 0.7s ease-in-out',
              }}
            >
              A selection of things I’ve made covering everything from quick
              personal projects to client campaigns.
            </Typography>
          </Grid>
          <Grid
            item
            mt={{ xs: 3, sm: 6 }}
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
            const isWide = !isMobile && (idx % 4 === 0 || idx % 4 === 3);
            const widthFraction = isWide ? 21 / 37 : 16 / 37;
            let fadeInDelay = isMobile ? 0 : idx % 2 === 0 ? 300 : 500;
            // if (idx === 2) fadeInDelay = 500;
            // if (idx === 3) fadeInDelay = 800;

            return (
              <Grid
                item
                key={project.title}
                sx={{
                  width: {
                    xs: '100%',
                    sm: `${widthFraction * 100}%`,
                  },
                  aspectRatio: isWide ? '21/9' : '16/9',
                }}
              >
                <WorkPreviewCard
                  thumbnailURL={project.thumbnailURL}
                  thumbnailTimeSeconds={project.thumbnailTimeSeconds}
                  projectName={project.title}
                  projectDescription={project.description}
                  detailsContent={project.detailsContent}
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
