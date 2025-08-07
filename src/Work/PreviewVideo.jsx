import React, { useEffect, useRef } from 'react';
import { MODAL_ANIM_TIME_MS } from '../constants';
import { Box, Typography } from '@mui/material';

const PreviewVideo = ({
  src,
  play,
  seekTime = 0,
  hidden = false,
  projectName,
  xScale,
  yScale,
  leftPos,
  topPos,
  showText,
  detailModalOpen,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (play) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = seekTime;
    }
  }, [play, seekTime]);

  return (
    <>
      <video
        ref={videoRef}
        loop
        muted
        style={{
          width: '100%',
          height: hidden ? '0' : '100%',
          objectFit: 'cover',
          transition: '0.5s ease-in-out',
        }}
      >
        <source src={src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          textAlign: 'center',
          position: 'absolute',
          width: `${100 * xScale}%`,
          height: `${100 * yScale}%`,
          left: `${leftPos}px`,
          top: `${topPos}px`,
          transition: `width ${
            MODAL_ANIM_TIME_MS / 1000
          }s ease-in-out, height ${
            MODAL_ANIM_TIME_MS / 1000
          }s ease-in-out, left ${MODAL_ANIM_TIME_MS / 1000}s ease-in-out, top ${
            MODAL_ANIM_TIME_MS / 1000
          }s ease-in-out`,
        }}
      >
        <Typography
          variant='h3'
          sx={{
            color: 'white',
            transform: `scale(${xScale}, ${yScale})`,
            opacity: showText && !detailModalOpen ? 1 : 0,
            zIndex: 5,
            transition: `all ${MODAL_ANIM_TIME_MS / 1000}s ease-in-out`,
            letterSpacing: '2px',
            fontWeight: 'bold',
          }}
        >
          {projectName}
        </Typography>
      </Box>
    </>
  );
};

export default PreviewVideo;
