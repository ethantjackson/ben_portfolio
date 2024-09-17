import { Grid, Typography } from '@mui/material';
import React from 'react';

const ProjectDetails = ({ projectName }) => {
  return (
    <Grid
      container
      justifyContent='center'
      sx={{
        width: '70%',
        marginLeft: '15%',
        paddingTop: '3rem',
        paddingBottom: '5rem',
      }}
    >
      <Grid item xs={4} sx={{ textAlign: 'left' }}>
        <Typography variant='h3'>{projectName}</Typography>
      </Grid>
      <Grid item xs={8} sx={{ textAlign: 'justify' }}>
        <Typography variant='h6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo
          perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi
          inventore ut earum?
        </Typography>
      </Grid>

      <Grid container spacing={3} alignItems='center' justifyContent='center'>
        <Grid item xs={8} mt={3}>
          <img
            width='100%'
            alt='ProjectImage'
            src='https://res.cloudinary.com/workoutcloud/image/upload/v1726534625/instaStill1_wa0f4y.png'
          />
        </Grid>
        <Grid item xs={3} mt={3}>
          <img
            width='100%'
            alt='ProjectImage'
            src='https://res.cloudinary.com/workoutcloud/image/upload/v1726534553/poster_z77luw.png'
          />
        </Grid>
        <Grid item xs={12} mt={3}>
          <img
            width='100%'
            alt='ProjectImage'
            src='https://res.cloudinary.com/workoutcloud/image/upload/v1726534623/still2_ypknws.png'
          />
        </Grid>
      </Grid>

      <Grid item xs={12} sx={{ textAlign: 'center' }} mt={3}>
        <Typography variant='h4' sx={{ fontWeight: '500' }}>
          The Process
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'justify' }} mt={1}>
        <Typography variant='h6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo
          perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi
          inventore ut earum?
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ textAlign: 'center' }} mt={3}>
        <Typography variant='h4' sx={{ fontWeight: '500' }}>
          Credits
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }} mt={1}>
        <Typography variant='h6'>Studio - Bing Chilling Labs</Typography>
        <Typography variant='h6'>Director - Ben Peterson</Typography>
        <Typography variant='h6'>Creative Direction - Ethan Jackson</Typography>
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
