import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { INTRO_VID_ASPECT, NAV_ITEMS } from './constants';
import NavbarCollapser from './Components/NavbarCollapser';
import AnimateForwardReverse from './LottieAnimations/AnimateForwardReverse';
import signatureAnimation from './LottieAnimations/Signature_Red_v1.json';

const IntroNav = ({ winHeight, winWidth, scrollTo }) => {
  const [animIdx, setAnimIdx] = useState(-1);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const [isStartNavbar, setIsStartNavbar] = useState(true);
  const [isStartNavbarDelayed, setIsStartNavbarDelayed] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const animationTimeoutsRef = useRef([]);

  const triggerAnimations = (startDelay, stepDelay, isReversed) => {
    animationTimeoutsRef.current.forEach(clearTimeout);
    animationTimeoutsRef.current = [];

    const count = NAV_ITEMS.length;

    for (let i = -1; i <= count; ++i) {
      const index = isReversed ? count - i - 1 : i;
      const timeoutId = setTimeout(
        () => setAnimIdx(index),
        startDelay + i * stepDelay
      );
      animationTimeoutsRef.current.push(timeoutId);
    }
  };

  useEffect(() => {
    triggerAnimations(3000, 300);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsStartNavbarDelayed(isStartNavbar);
    }, 1000);
  }, [isStartNavbar]);

  const handleLink = (event, targetID) => {
    event.preventDefault();
    scrollTo(targetID);
  };

  return (
    <>
      <Box
        sx={{
          translate: !isStartNavbar && isNavbarCollapsed ? '0 -100%' : '0',
          zIndex: isStartNavbar ? 0 : 2,
          transition: isStartNavbarDelayed
            ? ''
            : `translate ${isNavbarCollapsed ? 1.2 : 0.8}s ease-in-out`,
          position: 'fixed',
          width: '100%',
          height: {
            xs: '150px',
            sm: `${(winHeight - INTRO_VID_ASPECT * winWidth) / 2 - 10}px`,
          },
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
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            marginLeft: {
              xs: 0,
              sm: '15vw',
            },
          }}
        >
          <AnimateForwardReverse
            isAnimateIn={animIdx >= 0}
            animationData={signatureAnimation}
            style={{
              height: '80%',
              position: 'relative',
              maxHeight: isMobile ? '100px' : '120px',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              float: 'right',
              marginLeft: 'auto',
              marginRight: {
                xs: 'auto',
                sm: 'calc(100px + 7vw)',
              },
              width: '20vw',
              minWidth: '280px',
            }}
          >
            {NAV_ITEMS.map((item, idx) => (
              <Typography
                key={item}
                component='a'
                href={`#{${item}}`}
                onClick={(e) => {
                  handleLink(e, item);
                  setIsNavbarCollapsed(true);
                }}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  letterSpacing: '-1px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                  position: 'relative',
                  top: animIdx >= idx + 1 ? 0 : '16px',
                  opacity: animIdx >= idx + 1 ? 1 : 0,
                  transition:
                    'letter-spacing 0.3s, opacity 0.5s ease-in-out, top 1s ease',
                  '&:hover': {
                    fontWeight: '1000',
                    letterSpacing: 0,
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <NavbarCollapser
        winHeight={winHeight}
        winWidth={winWidth}
        isNavbarCollapsed={isNavbarCollapsed}
        triggerAnimations={triggerAnimations}
        setIsNavbarCollapsed={setIsNavbarCollapsed}
        isStartNavbar={isStartNavbar}
        setIsStartNavbar={setIsStartNavbar}
      />
    </>
  );
};

export default IntroNav;
