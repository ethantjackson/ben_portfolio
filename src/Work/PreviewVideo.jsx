import React, { useEffect, useRef } from 'react';

const PreviewVideo = ({ src, play, seekTime = 0, hidden = false }) => {
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
  );
};

export default PreviewVideo;
