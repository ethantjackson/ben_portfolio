import { useMediaQuery, useTheme } from '@mui/material';
import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

const PreviewVideo = ({ src, play, seekTime = 0, hidden = false }) => {
  const playerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Seek to desired time when not playing
  useEffect(() => {
    if (!playerRef.current) return;

    if (play) {
      playerRef.current.play?.();
    } else {
      playerRef.current.currentTime = seekTime;
      playerRef.current.pause?.();
    }
  }, [play, seekTime]);

  const init = () => {
    if (!playerRef.current) return;
    playerRef.current.currentTime = seekTime;
    playerRef.current.pause?.();
  };

  const getCloudinaryThumbnail = (videoUrl, timestamp) => {
    if (!videoUrl) throw new Error('Video URL is required');

    // Ensure timestamp is in Cloudinary format (so_<seconds>)
    const ts = `so_${timestamp}`;

    // Insert the transformation right after `/upload/`
    return videoUrl
      .replace('/upload/', `/upload/${ts}/`)
      .replace(/\.(mp4|mov|webm)$/i, '.jpg');
  };

  return (
    <div
      style={{
        width: '100%',
        height: hidden ? '0' : '100%',
        overflow: 'hidden',
        transition: '0.5s ease-in-out',
      }}
    >
      <ReactPlayer
        ref={playerRef}
        src={src}
        playing={play}
        muted
        loop
        playsInline
        width='100%'
        height='100%'
        light={isMobile && getCloudinaryThumbnail(src, seekTime)}
        style={{
          objectFit: 'cover',
        }}
        onReady={init}
      />
    </div>
  );
};

export default PreviewVideo;
