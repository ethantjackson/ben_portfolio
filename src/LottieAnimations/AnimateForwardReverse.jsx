import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';

const AnimateForwardReverse = ({ isAnimateIn, animationData, style = {} }) => {
  const lottieRef = useRef();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!lottieRef.current || initialized) return;
    // Start paused at the first frame
    lottieRef.current.goToAndStop(0, true);
  }, [initialized]);

  useEffect(() => {
    if (!lottieRef.current || (!isAnimateIn && !initialized)) return;
    if (!initialized) {
      setInitialized(true);
    }

    const instance = lottieRef.current;
    if (isAnimateIn) {
      instance.setDirection(1);
      lottieRef.current.goToAndPlay(0, true);
    } else {
      instance.setDirection(-1);
      lottieRef.current.play();
    }
  }, [isAnimateIn, initialized]);

  const handleComplete = () => {
    if (!lottieRef.current) return;
    const totalFrames = lottieRef.current.getDuration(true);
    const frameToStop = isAnimateIn ? totalFrames : 0;
    lottieRef.current.goToAndStop(frameToStop, true);
  };

  return (
    <Lottie
      lottieRef={lottieRef}
      style={style}
      animationData={animationData}
      autoplay={false}
      loop={false}
      onComplete={handleComplete}
    />
  );
};

export default AnimateForwardReverse;
