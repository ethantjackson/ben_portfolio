import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { INTRO_VID_ASPECT, NAV_ITEMS } from './constants';

const START_DELAY = 3000;
const STEP_DELAY = 300;

const IntroNav = () => {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.innerHeight);
  const [animIdx, setAnimIdx] = useState(-1);

  useEffect(() => {
    for (let i = 0; i < 1 + NAV_ITEMS.length; ++i) {
      setTimeout(() => setAnimIdx(i), START_DELAY + i * STEP_DELAY);
    }

    const handleResize = () => {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(animIdx);
  }, [animIdx]);

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
          <Typography
            variant='p'
            fontWeight='bold'
            sx={{
              fontWeight: '600',
              position: 'relative',
              top: animIdx >= 0 ? 0 : '16px',
              opacity: animIdx >= 0 ? 1 : 0,
              transition: 'opacity 1s ease-in-out, top 1s ease',
            }}
          >
            BEN PETERSON
          </Typography>
          <Box
            sx={{
              width: '40%',
              display: 'flex',
              justifyContent: 'space-around',
              float: 'right',
              opacity: 'q',
            }}
          >
            {NAV_ITEMS.map((item, idx) => (
              <Typography
                key={item}
                variant='p'
                sx={{
                  letterSpacing: '-1.75px',
                  cursor: 'pointer',
                  fontWeight: '300',
                  position: 'relative',
                  top: animIdx >= idx + 1 ? 0 : '16px',
                  opacity: animIdx >= idx + 1 ? 1 : 0,
                  transition:
                    'letter-spacing 0.3s, opacity 1s ease-in-out, top 1s ease',
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
