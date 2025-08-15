import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Instagram, LinkedIn } from '@mui/icons-material';
import { ReactComponent as BehanceIcon } from '../Icons/Behance.svg';
import React from 'react';
import FadeInOnScroll from '../Transitions/FadeInOnScroll';
import ExpandInOnScroll from '../Transitions/ExpandInOnScroll';
import AnimateInView from '../LottieAnimations/AnimateInView';
import contactTextAnimation from '../LottieAnimations/Contact_TextAnim.json';
import linksTextAnimation from '../LottieAnimations/Links_TextAnim.json';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box id='#CONTACT' sx={{ backgroundColor: '#fff', paddingBottom: '8vh' }}>
      <Container
        sx={{
          maxWidth: {
            xs: 'calc(100% - 24px) !important',
            sm: 'calc(100% - 200px) !important',
          },
        }}
      >
        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={3} xl={2} sx={{ textAlign: 'left' }}>
            <AnimateInView
              animationData={contactTextAnimation}
              style={{
                height: '35px',
                width: isMobile ? '100%' : '220px',
                marginTop: '8px',
              }}
            />
          </Grid>
          <Grid item xs pl={isMobile ? 0 : 2} sx={{ textAlign: 'justify' }}>
            <FadeInOnScroll offset={100} delay={400} translate={0}>
              <Typography
                variant='h5'
                mt={{ xs: 2, sm: 0 }}
                mb={{ xs: 2, sm: 5 }}
              >
                If you like what you see, I’m currently freelancing full time
                and happy to discuss your project. I’ve had the privilege of
                working with companies like Disney, Marvel and PBS, and with
                clients ranging from large agency teams to individual directors.
              </Typography>
              <Typography
                variant='h5'
                mt={{ xs: 2, sm: 0 }}
                mb={{ xs: 2, sm: 5 }}
              >
                I work in everything from creative concepting to 2D and 3D
                animation, and I most enjoy spending my time getting into the
                nitty-gritty of pre-production and crafting bespoke looks that
                complement any given project.
              </Typography>
              <Typography variant='h5'>Get in touch!</Typography>
            </FadeInOnScroll>
          </Grid>
          <ExpandInOnScroll offset={100} delay={500}>
            <Grid
              item
              mt={{ xs: 3, sm: 6 }}
              mb={{ xs: 3, sm: 8 }}
              ml={{ xs: '12px', sm: '10%' }}
              sx={{
                height: '2px',
                background: 'black',
                width: { xs: 'calc(100% - 24px)', sm: '80%' },
              }}
            />
          </ExpandInOnScroll>

          <Grid item xs={12} sm={3} xl={2} sx={{ textAlign: 'left' }}>
            <AnimateInView
              animationData={linksTextAnimation}
              style={{
                height: '35px',
                width: isMobile ? '100%' : '127px',
                marginTop: '8px',
              }}
            />
          </Grid>
          <Grid
            item
            xs
            pl={isMobile ? 0 : 2}
            sx={{ textAlign: { xs: 'center', sm: 'justify' } }}
          >
            <FadeInOnScroll offset={100} delay={800} translate={0} inline>
              <Typography
                variant='h5'
                mb={{ xs: 2, sm: 5 }}
                mt={{ xs: 2, sm: 0 }}
              >
                Email: bentmotion100@gmail.com
              </Typography>
            </FadeInOnScroll>
            <Box
              sx={{
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
                columnGap: '25pt',
                justifyContent: { xs: 'space-around', sm: 'start' },
              }}
            >
              <ExpandInOnScroll offset={50} delay={800}>
                <a
                  href={'https://www.instagram.com/bent.motion/'}
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <Instagram
                    sx={{
                      fontSize: '50pt',
                      cursor: 'pointer',
                      transition: '0.3s !important',
                      '&:hover': {
                        transform: 'scale(1.1) !important',
                      },
                    }}
                  />
                </a>
              </ExpandInOnScroll>
              <ExpandInOnScroll offset={50} delay={1000}>
                <a
                  href={'https://www.linkedin.com/in/ben-thomas-6051201b0/'}
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <LinkedIn
                    sx={{
                      fontSize: '52pt',
                      cursor: 'pointer',
                      transition: '0.3s !important',
                      '&:hover': {
                        transform: 'scale(1.1) !important',
                      },
                    }}
                  />
                </a>
              </ExpandInOnScroll>
              <ExpandInOnScroll offset={50} delay={1200}>
                <Box
                  sx={{
                    cursor: 'pointer',
                    transition: '0.6s !important',
                    '&:hover': {
                      transform: 'scale(1.1) !important',
                    },
                    display: 'inline-flex',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <a
                    href={'https://www.behance.net/benjamipeterso6'}
                    target='_blank'
                    rel='noreferrer'
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <BehanceIcon
                      style={{
                        height: '50pt',
                        width: '50pt',
                      }}
                    />
                  </a>
                </Box>
              </ExpandInOnScroll>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
