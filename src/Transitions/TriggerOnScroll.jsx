import React, { useEffect, useRef } from 'react';

const TriggerOnScroll = ({
  children,
  onVisible = () => {},
  offset = 0,
  delay = 0,
}) => {
  const containerRef = useRef(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    function handleScroll() {
      if (hasTriggered.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isInView =
        rect.top < window.innerHeight - offset && rect.bottom > 0;

      if (isInView) {
        hasTriggered.current = true;
        setTimeout(() => {
          onVisible();
        }, delay);
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [onVisible, offset, delay]);

  return <div ref={containerRef}>{children}</div>;
};

export default TriggerOnScroll;
