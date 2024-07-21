import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const IntroSplash = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => setOpacity(1), 200);
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#fff',
        zIndex: -1,
      }}
    >
      <video
        loop
        autoPlay
        muted
        style={{
          width: '100%',
          height: '100%',
          opacity: opacity,
          transition: 'opacity 3s ease-in-out',
        }}
      >
        <source src={'ThatWhichWeLeftBehindWide.mp4'} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default IntroSplash;