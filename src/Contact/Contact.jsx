import { Box, Container, Grid, Typography } from '@mui/material';
import { Instagram, LinkedIn } from '@mui/icons-material';
import { ReactComponent as BehanceIcon } from '../Icons/Behance.svg';
import React from 'react';
import FadeInOnScroll from '../Transitions/FadeInOnScroll';
import ExpandInOnScroll from '../Transitions/ExpandInOnScroll';

const Contact = () => {
  return (
    <Box id='#CONTACT' sx={{ backgroundColor: '#fff', paddingBottom: '8vh' }}>
      <Container sx={{ maxWidth: 'calc(100% - 200px) !important' }}>
        <Grid container justifyContent='center'>
          <Grid item xs={3} sx={{ textAlign: 'left' }}>
            <FadeInOnScroll offset={100} delay={200} translate={0}>
              <Typography variant='h3'>CONTACT</Typography>
            </FadeInOnScroll>
          </Grid>
          <Grid item xs sx={{ textAlign: 'justify' }}>
            <FadeInOnScroll offset={100} delay={400} translate={0}>
              <Typography variant='h5' mb={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                illo perspiciatis repellat delectus tenetur eum in neque rem
                Lorem eligendi inventore ut earum?
              </Typography>
              <Typography variant='h5' mb={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                illo perspiciatis repellat delectus tenetur eum in neque rem
                Lorem eligendi inventore ut earum?
              </Typography>
              <Typography variant='h5'>Get in touch!</Typography>
            </FadeInOnScroll>
          </Grid>
          <ExpandInOnScroll offset={100} delay={500}>
            <Grid
              item
              mt={6}
              mb={8}
              sx={{
                height: '2px',
                background: 'black',
                width: '80%',
              }}
            />
          </ExpandInOnScroll>

          <Grid item xs={3} sx={{ textAlign: 'left' }}>
            <FadeInOnScroll offset={100} delay={600} translate={0}>
              <Typography variant='h3'>LINKS</Typography>
            </FadeInOnScroll>
          </Grid>
          <Grid item xs sx={{ textAlign: 'justify' }}>
            <FadeInOnScroll offset={100} delay={800} translate={0}>
              <Typography variant='h5' mb={5}>
                Email: bcpeters100@gmail.com
              </Typography>
            </FadeInOnScroll>
            <Box
              sx={{
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
                columnGap: '25pt',
              }}
            >
              <ExpandInOnScroll offset={50} delay={800}>
                <Instagram
                  sx={{
                    fontSize: '50pt',
                    cursor: 'pointer',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
              </ExpandInOnScroll>
              <ExpandInOnScroll offset={50} delay={900}>
                <LinkedIn
                  sx={{
                    fontSize: '52pt',
                    cursor: 'pointer',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
              </ExpandInOnScroll>
              <ExpandInOnScroll offset={50} delay={1000}>
                <Box
                  sx={{
                    cursor: 'pointer',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                    display: 'inline-flex',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <BehanceIcon
                    style={{
                      height: '50pt',
                      width: '50pt',
                    }}
                  />
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
