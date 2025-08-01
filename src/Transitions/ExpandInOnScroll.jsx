import React, { useEffect, useRef, useState } from 'react';
import { SCROLL_TIME_MS } from '../constants';
import { Zoom } from '@mui/material';

const ExpandInOnScroll = ({
  children,
  offset = 50,
  duration = 800,
  delay = 500,
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
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      handleScroll(); // Initial check
    }, SCROLL_TIME_MS);

    function handleScroll() {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        if (!isActive.current || isVisible || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const isAboveViewport = rect.bottom < 0;
        const isInView =
          rect.top < window.innerHeight - offset && rect.bottom > 0;

        if (isInView || isAboveViewport) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      }, 100); // debounce delay
    }

    return () => {
      clearTimeout(debounceTimeout.current);
      clearTimeout(activateTimeout.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [delay, offset, isVisible]);

  return (
    <Zoom ref={containerRef} timeout={duration} in={isVisible}>
      {children}
    </Zoom>
  );
};

export default ExpandInOnScroll;
