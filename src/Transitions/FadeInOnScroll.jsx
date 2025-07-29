// FadeInOnScroll.js
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { SCROLL_TIME_MS } from '../constants';

const FadeInOnScroll = ({
  children,
  offset = 50,
  duration = 800,
  delay = 500,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const isActive = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      isActive.current = true;
    }, SCROLL_TIME_MS);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (isActive.current && entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        root: null,
        rootMargin: `0px 0px -${offset}px 0px`, // Trigger before bottom
        threshold: 0.1,
      }
    );

    const current = containerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [offset, delay]);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: '100%',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(30px)',
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
      }}
    >
      {children}
    </Box>
  );
};

export default FadeInOnScroll;
