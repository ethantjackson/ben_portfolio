import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const IntroSplash = ({ winHeight }) => {
  const [opacity, setOpacity] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setOpacity(1), 500);

    const pauseVideoWhenHidden = () => {
      if (window.scrollY >= window.innerHeight) {
        videoRef?.current?.pause();
      } else {
        videoRef?.current?.play();
      }
    };
    window.addEventListener('scrollend', pauseVideoWhenHidden);

    return () => {
      window.removeEventListener('scrollend', pauseVideoWhenHidden);
    };
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
          autoPlay
          ref={videoRef}
          loop
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
