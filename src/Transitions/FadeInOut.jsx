import { useEffect, useState } from 'react';

const FadeInOut = ({
  isFadeIn,
  duration = 500,
  children,
  delay = 0,
  styles = {},
}) => {
  const [isFadeInWithDelay, setIsFadeInWithDelay] = useState(isFadeIn);
  useEffect(() => {
    setTimeout(() => {
      setIsFadeInWithDelay(isFadeIn);
    }, delay);
  }, [isFadeIn, delay]);

  return (
    <div style={{ position: 'relative', ...styles }}>
      {children}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'white',
          pointerEvents: 'none',
          opacity: isFadeInWithDelay ? 0 : 1,
          transition: `opacity ${duration}ms ease`,
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default FadeInOut;
