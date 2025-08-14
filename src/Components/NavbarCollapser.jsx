import { Box, Fade } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { INTRO_VID_ASPECT, SCROLL_TIME_MS } from '../constants';
import menuIconAnimation from '../LottieAnimations/XAnimation_v3.json';
import AnimateForwardReverse from '../LottieAnimations/AnimateForwardReverse';

const NavbarCollapser = ({
  winHeight,
  winWidth,
  isNavbarCollapsed,
  triggerAnimations,
  setIsNavbarCollapsed,
  isStartNavbar,
  setIsStartNavbar,
  forceExpanded,
  navbarHeight,
}) => {
  const [enabled, setEnabled] = useState(false);
  const [localForceExpanded, setLocalForceExpanded] = useState(false);

  // Sync prop-based forceExpanded with local state & timeout
  useEffect(() => {
    if (forceExpanded) {
      setLocalForceExpanded(true);
      const timeoutId = setTimeout(() => {
        setLocalForceExpanded(false); // revert to scroll control after delay
      }, SCROLL_TIME_MS * 2);

      return () => clearTimeout(timeoutId);
    }
  }, [forceExpanded]);

  // Initial activation after leaving start section
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

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStartNavbar, setIsStartNavbar]);

  // Collapse/expand + enable/disable based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const isInTopSection =
        !forceExpanded && window.scrollY < window.innerHeight - navbarHeight;

      if (localForceExpanded) {
        // Keep navbar expanded during temporary force
        if (isNavbarCollapsed) {
          setIsNavbarCollapsed(false);
          triggerAnimations(200, 200);
        }
        setEnabled(true); // button visible while forced
        return;
      }

      if (isInTopSection) {
        if (isNavbarCollapsed) {
          setIsNavbarCollapsed(false);
          triggerAnimations(200, 200);
        }
        setEnabled(false);
      } else {
        if (!isNavbarCollapsed) {
          setIsNavbarCollapsed(true);
          triggerAnimations(0, 50, true);
        }
        setEnabled(true);
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
    localForceExpanded,
    forceExpanded,
    navbarHeight,
  ]);

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
        cursor: enabled ? 'pointer' : 'default',
      }}
      onClick={() => {
        if (!enabled) return;
        if (isNavbarCollapsed) triggerAnimations(200, 200);
        else triggerAnimations(0, 50, true);
        setIsNavbarCollapsed(!isNavbarCollapsed);
      }}
    >
      <Fade in={enabled} timeout={1000}>
        <Box>
          <AnimateForwardReverse
            isAnimateIn={enabled && !isNavbarCollapsed}
            animationData={menuIconAnimation}
            style={{ height: '40px', width: '40px' }}
          />
        </Box>
      </Fade>
    </Box>
  );
};

export default NavbarCollapser;
