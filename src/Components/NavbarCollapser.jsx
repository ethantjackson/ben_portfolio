import { Box, Fade } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { INTRO_VID_ASPECT, SCROLL_TIME_MS } from '../constants';

const NavbarCollapser = ({
  winHeight,
  winWidth,
  isNavbarCollapsed,
  triggerAnimations,
  setIsNavbarCollapsed,
  setIsStartNavbar,
}) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - 100) {
        setEnabled(true);
        setIsStartNavbar(false);
        triggerAnimations(0, 0, true);
        setIsNavbarCollapsed(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    setTimeout(
      () => {
        window.addEventListener('scroll', handleScroll);
      },
      window.scrollY > 0 ? SCROLL_TIME_MS : 0
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsNavbarCollapsed, setIsStartNavbar, triggerAnimations]);

  if (!enabled) return <></>;
  return (
    <Box
      sx={{
        position: 'fixed',
        right: '90px',
        zIndex: '2',
        top: `calc(max(${
          (winHeight - INTRO_VID_ASPECT * winWidth) / 4 - 18
        }px, 5vh - 18px))`,
        cursor: 'pointer',
      }}
      onClick={() => {
        if (isNavbarCollapsed) triggerAnimations(200, 200);
        else {
          triggerAnimations(0, 100, true);
        }
        setIsNavbarCollapsed(!isNavbarCollapsed);
      }}
    >
      <Fade in={enabled} timeout={800}>
        <MenuIcon fontSize='large' />
      </Fade>
    </Box>
  );
};

export default NavbarCollapser;
