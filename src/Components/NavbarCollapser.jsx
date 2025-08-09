import { Box, Fade } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { INTRO_VID_ASPECT, SCROLL_TIME_MS } from '../constants';
import menuIconAnimation from '../LottieAnimations/XAnimation.json';
import AnimateForwardReverse from '../LottieAnimations/AnimateForwardReverse';

const NavbarCollapser = ({
  winHeight,
  winWidth,
  isNavbarCollapsed,
  triggerAnimations,
  setIsNavbarCollapsed,
  isStartNavbar,
  setIsStartNavbar,
}) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 100 && isStartNavbar) {
        setIsStartNavbar(false);
        setEnabled(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    setTimeout(
      () => {
        window.addEventListener('scroll', handleScroll);
      },
      window.scrollY > 0 ? SCROLL_TIME_MS : 0
    );
  }, [isStartNavbar, setIsStartNavbar]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isNavbarCollapsed) {
        setIsNavbarCollapsed(true);
        triggerAnimations(0, 50, true);
      }
    };

    if (!isStartNavbar) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [
    isNavbarCollapsed,
    isStartNavbar,
    setIsNavbarCollapsed,
    triggerAnimations,
  ]);

  if (!enabled) return <></>;
  return (
    <Box
      sx={{
        position: 'fixed',
        right: {
          xs: '20px',
          sm: '90px',
        },
        zIndex: '2',
        top: {
          xs: '30px',
          sm: `calc(max(${
            (winHeight - INTRO_VID_ASPECT * winWidth) / 4 - 22
          }px, 5vh - 18px))`,
        },
        cursor: 'pointer',
      }}
      onClick={() => {
        if (isNavbarCollapsed) triggerAnimations(200, 200);
        else {
          triggerAnimations(0, 50, true);
        }
        setIsNavbarCollapsed(!isNavbarCollapsed);
      }}
    >
      <Fade in={enabled} timeout={3000}>
        <Box>
          <AnimateForwardReverse
            isAnimateIn={!isNavbarCollapsed}
            animationData={menuIconAnimation}
            style={{ height: '40px', width: '40px' }}
          />
        </Box>
      </Fade>
    </Box>
  );
};

export default NavbarCollapser;
