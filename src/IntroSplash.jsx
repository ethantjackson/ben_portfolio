import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const IntroSplash = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => setOpacity(1), 500);
  }, []);

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          overflow: 'hidden',
          backgroundColor: '#fff',
          zIndex: -2,
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
          <source
            src='https://res.cloudinary.com/workoutcloud/video/upload/v1721628080/ThatWhichWeLeftBehindWide_v3fvqe.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Box sx={{ height: '100vh' }} />
    </>
  );
};

export default IntroSplash;
