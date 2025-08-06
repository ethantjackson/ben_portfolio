import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { SCROLL_TIME_MS } from '../constants';

const AnimateInView = ({
  animationData,
  threshold = 1,
  delay = 500,
  style = {},
}) => {
  const lottieRef = useRef();
  const observerRef = useRef();

  useEffect(() => {
    if (!lottieRef.current) return;

    // Start paused at the first frame
    lottieRef.current.goToAndStop(0, true);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            lottieRef.current.play();
          }, delay);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
    });

    if (observerRef.current) {
      setTimeout(() => {
        observer.observe(observerRef.current);
      }, SCROLL_TIME_MS);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay]);

  const handleComplete = () => {
    if (!lottieRef.current) return;
    const totalFrames = lottieRef.current.getDuration(true);
    lottieRef.current.goToAndStop(totalFrames, true);
  };

  return (
    <div ref={observerRef}>
      <Lottie
        lottieRef={lottieRef}
        style={style}
        animationData={animationData}
        autoplay={false}
        loop={false}
        onComplete={handleComplete}
      />
    </div>
  );
};

export default AnimateInView;
