import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Work = () => {
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
            <Typography variant='h3'>WORK</Typography>
          </Grid>
          <Grid item xs sx={{ textAlign: 'justify' }}>
            <Typography variant='h5'>
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
              height: '2px',
              background:
                'linear-gradient(to right, rgba(0, 0, 0, 0), black, rgba(0, 0, 0, 0))',
            }}
          />
        </Grid>

        <Grid container mt={3} spacing={3}>
          <Grid item xs={7}>
            <video
              loop
              autoPlay
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source
                src='https://res.cloudinary.com/workoutcloud/video/upload/v1722487797/transparentJet_final_01_ssujxx.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <Grid item xs>
            <video
              loop
              autoPlay
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source
                src='https://res.cloudinary.com/workoutcloud/video/upload/v1722488383/YerbaMate_MainVideo_yaa37n.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <Grid item xs={5}>
            <video
              loop
              autoPlay
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source
                src='https://res.cloudinary.com/workoutcloud/video/upload/v1722489624/Guilt_MT_WideFormatCC_v7lxev.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </Grid>
          <Grid item xs>
            <video
              loop
              autoPlay
              muted
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source
                src='https://res.cloudinary.com/workoutcloud/video/upload/v1722488890/NiiiceShot_TitleSequence_MAINVideo_m6djde.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Work;
