const FadeInOut = ({ isFadeIn, duration = 500, children }) => {
  return (
    <div style={{ position: 'relative' }}>
      {children}
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
