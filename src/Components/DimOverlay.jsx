import { Box } from '@mui/material';
import React from 'react';

const DimOverlay = ({ active }) => {
  if (!active) return;
  return (
    <Box
      sx={{
        backdropFilter: 'brightness(80%) blur(5px)', // This creates the blur effect
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '2',
      }}
    />
  );
};

export default DimOverlay;
