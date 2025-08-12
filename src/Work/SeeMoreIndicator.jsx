import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import './SeeMoreIndicator.css';

const SeeMoreIndicator = ({ modalRef }) => {
  const [showIndicator, setShowIndicator] = useState(false);
  const hasScrolled = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      if (!hasScrolled.current) setShowIndicator(true);
    }, 3000);

    const refCurrent = modalRef.current;
    const handleScroll = () => {
      if (!hasScrolled.current) hasScrolled.current = true;
      if (refCurrent?.scrollTop !== 0) {
        setShowIndicator(false);
      }
    };
    refCurrent?.addEventListener('scroll', handleScroll);

    return () => {
      refCurrent?.removeEventListener('scroll', handleScroll);
    };
  }, [modalRef]);

  return (
    <Box
      onClick={() => {
        if (!showIndicator) return;
        modalRef.current?.scrollBy({
          top: 300,
          behavior: 'smooth',
        });
      }}
      sx={{
        width: '100%',
        height: '100px',
        marginBottom: '-100px',
        bottom: '106px',
        position: 'relative',
        background: 'linear-gradient(to bottom, transparent, rgb(15,15,15))',
        color: 'rgb(230, 230, 230)',
        textAlign: 'center',
        cursor: showIndicator ? 'pointer' : 'default',
        opacity: showIndicator ? '0.7' : '0',
        transition: 'opacity 1.2s ease-in-out',
      }}
      pt={4.5}
    >
      <Typography mb={'-3px'}>See More</Typography>
      <DownIcon className='indicator' />
    </Box>
  );
};

export default SeeMoreIndicator;
