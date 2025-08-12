import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

const FLIP_DURATION = 800; // ms
const MAX_TILT_ANGLE = 10; // max degrees tilt on X and Y

const FlippableImageCard = ({ src, text }) => {
  const [flipped, setFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const cardRef = useRef(null);
  const flipTimeoutRef = useRef(null);

  useEffect(() => {
    setIsFlipping(true);
    if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
    flipTimeoutRef.current = setTimeout(() => {
      setIsFlipping(false);
    }, FLIP_DURATION);

    return () => {
      if (flipTimeoutRef.current) clearTimeout(flipTimeoutRef.current);
    };
  }, [flipped]);

  // Update tilt based on mouse position
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const cardX = rect.left + rect.width / 2;
    const cardY = rect.top + rect.height / 2;

    // Calculate mouse offset from center, normalized between -1 and 1
    const offsetX = (e.clientX - cardX) / (rect.width / 2);
    const offsetY = (cardY - e.clientY) / (rect.height / 2);

    // Clamp between -1 and 1
    const clampedX = Math.max(-1, Math.min(1, offsetX));
    const clampedY = Math.max(-1, Math.min(1, offsetY));

    // Calculate rotation angles
    // If flipped, invert tilt direction for consistency
    const rotateY = clampedX * MAX_TILT_ANGLE * (flipped ? -1 : 1);
    const rotateX = clampedY * MAX_TILT_ANGLE * (flipped ? -1 : 1);

    setTilt({ rotateX, rotateY });
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const getTransition = () => {
    if (isFlipping) {
      return `transform ${FLIP_DURATION}ms ease-in-out`; // slow flip
    }
    if (isHovered && !flipped) {
      return 'transform 150ms ease-out'; // fast tilt
    }
    return 'transform 600ms ease-in-out'; // slow idle
  };

  // Compose the transform string
  const baseRotation = flipped ? 180 : 0;

  let transform;
  if (isFlipping) {
    // Ignore tilt during flip animation
    transform = `rotateY(${baseRotation}deg)`;
  } else if (!flipped) {
    // Tilt only when front is showing
    transform = `rotateX(${tilt.rotateX}deg) rotateY(${
      baseRotation + tilt.rotateY
    }deg)`;
  } else {
    // Backside has no tilt
    transform = `rotateY(${baseRotation}deg)`;
  }

  return (
    <Box
      ref={cardRef}
      sx={{
        perspective: '3000px',
        display: 'inline-block',
      }}
      onClick={() => setFlipped((prev) => !prev)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <Box
        sx={{
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: getTransition(),
          transform,
          cursor: 'pointer',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {/* Front side */}
        <Box
          sx={{
            overflow: 'hidden',
            backfaceVisibility: 'hidden',
            borderRadius: 2,
          }}
        >
          <img
            src={src}
            alt='ProjectImage'
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 'inherit',
            }}
          />
        </Box>

        {/* Back side */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: 2,
            boxShadow: 3,
            p: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant='body1'>{text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FlippableImageCard;
