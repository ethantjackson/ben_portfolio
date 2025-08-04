import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FadeInOnScroll from '../Transitions/FadeInOnScroll';
import ExpandInOnScroll from '../Transitions/ExpandInOnScroll';
import { EXPERIMENTS_INFO } from '../BEN_UPDATE_INFO_HERE/ExperimentsInfo';

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
          <Grid item xs={5} xl={3} sx={{ textAlign: 'left' }}>
            <FadeInOnScroll offset={100} delay={200} translate={0}>
              <Typography variant='h3'>Experimentation</Typography>
              <Typography variant='h3'>+ Stills</Typography>
            </FadeInOnScroll>
          </Grid>
          <Grid item xs sx={{ textAlign: 'justify' }}>
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

        <Grid container spacing={3} alignItems='center' justifyContent='center'>
          {EXPERIMENTS_INFO.map((info, index) => (
            <Grid item xs={info.width} key={index}>
              <FadeInOnScroll delay={0} offset={0} translate={100}>
                <img width='100%' alt='ProjectImage' src={info.url} />
              </FadeInOnScroll>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experimentation;
