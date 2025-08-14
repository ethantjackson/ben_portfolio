import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { SCROLL_TIME_MS } from '../constants';

const FadeInOnScroll = ({
  children,
  offset = 50,
  duration = 800,
  delay = 500,
  translate = 30,
  inline = false,
  styles = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const isActive = useRef(false);
  const debounceTimeout = useRef(null);
  const activateTimeout = useRef(null);

  useEffect(() => {
    // Activate scroll detection after delay
    activateTimeout.current = setTimeout(() => {
      isActive.current = true;
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      handleScroll(); // Initial check
    }, SCROLL_TIME_MS);

    function checkVisibility() {
      if (!isActive.current || isVisible || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isAboveViewport = rect.bottom < 0;
      const isInView =
        rect.top < window.innerHeight - offset + translate && rect.bottom > 0;

      if (isInView || isAboveViewport) {
        setTimeout(() => {
          setIsVisible(true);
        }, delay);
      }
    }

    function handleScroll() {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(checkVisibility, 50);
    }

    function handleTouchMove() {
      // No debounce on touchmove for immediate response
      checkVisibility();
    }

    return () => {
      clearTimeout(debounceTimeout.current);
      clearTimeout(activateTimeout.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [delay, offset, isVisible, translate]);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: inline ? 'inline' : 'block',
        height: '100%',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : `translateY(${translate}px)`,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        ...styles,
      }}
    >
      {children}
    </Box>
  );
};

export default FadeInOnScroll;
