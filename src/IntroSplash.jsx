import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import Player from '@vimeo/player';

const IntroSplash = () => {
  const [opacity, setOpacity] = useState(0);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Fade in effect
    const fadeIn = setTimeout(() => setOpacity(1), 500);

    // Scroll listener to pause/play
    const handleScroll = () => {
      // Initialize Vimeo player
      if (!playerRef.current && iframeRef.current) {
        playerRef.current = new Player(iframeRef.current, {
          autoplay: true,
          muted: true,
          loop: true,
          background: true,
        });
      }

      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > window.innerHeight && playerRef.current) {
        playerRef.current.pause();
      } else {
        playerRef.current.play();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(fadeIn);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          height: '100vh',
          width: {
            xs: '200%',
            sm: '100%',
          },
          position: 'fixed',
          top: 0,
          left: {
            xs: '-50%',
            sm: 0,
          },
          zIndex: -2,
          overflow: 'hidden',
        }}
      >
        <iframe
          ref={iframeRef}
          src='https://player.vimeo.com/video/1107644434?h=6d77c5130d&autoplay=1&muted=1&loop=1&background=1'
          frameBorder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          allowFullScreen
          title='Intro Video'
          loading='lazy'
          style={{
            width: '100%',
            height: '100%',
            opacity: opacity,
            transition: 'opacity 3s ease-in-out',
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
          }}
        />
      </Box>
      <Box sx={{ height: '100vh' }} />
    </>
  );
};

export default IntroSplash;
