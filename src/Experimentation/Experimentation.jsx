import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FadeInOnScroll from '../Transitions/FadeInOnScroll';
import ExpandInOnScroll from '../Transitions/ExpandInOnScroll';

const Experimentation = () => {
  return (
    <Box
      id='#EXPERIMENTATION'
      sx={{
        backgroundColor: '#fff',
        paddingTop: '8vh',
        paddingBottom: '8vh',
        minHeight: '100vh',
      }}
    >
      <Container sx={{ maxWidth: 'calc(100% - 200px) !important' }}>
        <Grid container justifyContent='center'>
          <Grid item xs={3} sx={{ textAlign: 'left' }}>
            <FadeInOnScroll offset={100} delay={200} translate={0}>
              <Typography variant='h3'>Experimentation + Stills</Typography>
            </FadeInOnScroll>
          </Grid>
          <Grid item xs sx={{ textAlign: 'justify' }} pl={3}>
            <FadeInOnScroll offset={100} delay={400} translate={0}>
              <Typography variant='h5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                illo perspiciatis repellat delectus tenetur eum in neque rem
                Lorem eligendi inventore ut earum?
              </Typography>
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
        </Grid>
      </Container>
    </Box>
  );
};

export default Experimentation;
