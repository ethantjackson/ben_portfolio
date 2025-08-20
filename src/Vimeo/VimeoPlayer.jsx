import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';

const VimeoPlayer = ({ vimeoID }) => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const [aspectRatio, setAspectRatio] = useState(16 / 9); // fallback

  useEffect(() => {
    if (!vimeoID || !containerRef.current) return;

    if (playerRef.current) {
      playerRef.current.destroy();
    }

    const player = new Player(containerRef.current, {
      id: vimeoID,
      responsive: true,
    });

    playerRef.current = player;

    // Fetch video dimensions after load
    Promise.all([player.getVideoWidth(), player.getVideoHeight()])
      .then(([width, height]) => {
        if (width && height) {
          setAspectRatio(width / height);
        }
      })
      .catch((err) => {
        console.warn('Could not fetch video dimensions:', err);
      });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [vimeoID]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${100 / aspectRatio}%`,
        textAlign: 'center',
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default VimeoPlayer;
