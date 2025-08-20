import React, { useRef, useEffect, useState, Suspense, lazy } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

const ReactPlayer = lazy(() => import('react-player'));

const PreviewVideo = ({ src, play, seekTime = 0, hidden = false }) => {
  const playerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  // 👀 IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playerRef.current) return;
    if (!play) playerRef.current.currentTime = seekTime;
  }, [play, seekTime]);

  const init = () => {
    if (!playerRef.current) return;
    playerRef.current.currentTime = seekTime;
    playerRef.current.pause?.();
  };

  const getCloudinaryThumbnail = (videoUrl, timestamp) => {
    if (!videoUrl) throw new Error('Video URL is required');
    const ts = `so_${timestamp}`;
    return videoUrl
      .replace('/upload/', `/upload/${ts}/`)
      .replace(/\.(mp4|mov|webm)$/i, '.jpg');
  };

  return (
    <div
      ref={containerRef} // 👀 track visibility
      style={{
        width: '100%',
        height: hidden ? '0' : '100%',
        overflow: 'hidden',
        transition: '0.5s ease-in-out',
      }}
    >
      {inView && ( // 👀 only mount when in view
        <Suspense
          fallback={<div style={{ height: '100%', background: '#000' }} />}
        >
          <ReactPlayer
            ref={playerRef}
            src={src}
            playing={!isMobile && play}
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
        </Suspense>
      )}
    </div>
  );
};

export default PreviewVideo;
