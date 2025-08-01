import React, { useEffect, useState } from 'react';

const FadeInOut = ({ isFadeIn, duration = 500, children }) => {
  const [visible, setVisible] = useState(isFadeIn);

  useEffect(() => {
    if (isFadeIn) {
      setVisible(true); // Mount overlay for fade in
    } else {
      // Delay hiding until after fade out transition
      const timeout = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timeout);
    }
  }, [isFadeIn, duration]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {visible && children}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'white',
          pointerEvents: 'none',
          opacity: isFadeIn ? 0 : 1,
          transition: `opacity ${duration}ms ease`,
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default FadeInOut;
