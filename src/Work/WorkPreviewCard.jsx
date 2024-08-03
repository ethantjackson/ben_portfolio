import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const WorkPreviewCard = ({ videoURL, projectName, thumbnailTimeSecond }) => {
  const [hovering, setHovering] = useState(false);
  const [showText, setShowText] = useState(false);
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (hovering) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = thumbnailTimeSecond;
    }

    setShowText(hovering);
    if (hovering) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setShowText(false), 2000);
    }
  }, [hovering, thumbnailTimeSecond]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#222',
          transition: 'transform 0.15s ease-in-out, filter 0.5s ease-in-out',
          transform: hovering ? 'scale(1.02)' : 'scale(1)',
          filter: showText ? 'blur(1px)' : '',
        }}
      >
        <video
          ref={videoRef}
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.5s ease-in-out',
            opacity: showText ? 0.8 : 1,
          }}
        >
          <source src={videoURL} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          textAlign: 'center',
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Typography
          variant='h3'
          sx={{
            color: 'white',
            opacity: showText ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            letterSpacing: '2px',
            fontWeight: 'bold',
          }}
        >
          {projectName}
        </Typography>
      </Box>
    </Box>
  );
};

export default WorkPreviewCard;
