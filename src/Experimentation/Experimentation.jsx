import { Box, Container } from '@mui/material';
import React from 'react';
import { SCROLL_TIME_MS } from '../constants';

const Experimentation = () => {
  return (
    <Box
      id='#EXPERIMENTATION'
      sx={{
        // top: '100vh',
        backgroundColor: '#fff',
        width: '100vw',
        height: '100vh',
        // position: 'fixed',
        // transition: `top ${SCROLL_TIME_MS / 1000}s ease-in-out`,
      }}
    >
      <Container sx={{ maxWidth: 'calc(100% - 200px) !important' }}>
        Test
      </Container>
    </Box>
  );
};

export default Experimentation;
