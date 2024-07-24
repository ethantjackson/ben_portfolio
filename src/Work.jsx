import { Box, Container } from '@mui/material';
import React from 'react';
import { INTRO_VID_ASPECT } from './constants';

const Work = ({ winHeight, winWidth }) => {
  return (
    <Box
      id='#WORK'
      sx={{
        marginTop: `${(winHeight - INTRO_VID_ASPECT * winWidth) / 2}px`,
        height: '100vh',
        backgroundColor: '#fff',
        position: 'relative',
        zIndex: '1',
      }}
    >
      <Container sx={{ border: '1px solid blue' }}>test</Container>
    </Box>
  );
};

export default Work;
