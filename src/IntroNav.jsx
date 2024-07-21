import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { INTRO_VID_ASPECT, NAV_ITEMS } from './constants';

const IntroNav = () => {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: `${(winHeight - INTRO_VID_ASPECT * winWidth) / 2}px`,
        minHeight: '10vh',
        backgroundColor: '#fff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Container>
          <Typography variant='p' fontWeight='bold'>
            BEN PETERSON
          </Typography>
          <Box
            sx={{
              width: '40%',
              display: 'flex',
              justifyContent: 'space-around',
              float: 'right',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Typography
                key={item}
                variant='p'
                sx={{
                  letterSpacing: '-1.75px',
                  cursor: 'pointer',
                  fontWeight: '300',
                  transition: 'letter-spacing 0.3s',
                  '&:hover': {
                    fontWeight: '800',
                    letterSpacing: 0,
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default IntroNav;
