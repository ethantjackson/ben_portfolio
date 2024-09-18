import { Box, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { MODAL_ANIM_TIME_MS } from '../constants';
import DimOverlay from '../Components/DimOverlay';
import ProjectDetails from './ProjectDetails';

const WorkPreviewCard = ({
  videoURL,
  projectName,
  thumbnailTimeSecond,
  winWidth,
  winHeight,
}) => {
  const [hovering, setHovering] = useState(false);
  const [showText, setShowText] = useState(false);
  const [xScale, setXScale] = useState(1);
  const [yScale, setYScale] = useState(1);
  const [leftPos, setLeftPos] = useState(0);
  const [topPos, setTopPos] = useState(0);
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const modalRef = useRef(null);

  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [detailModalOpenDelayed, setDetailModalOpenDelayed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDetailModalOpenDelayed(detailModalOpen);
    }, MODAL_ANIM_TIME_MS);

    if (detailModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      if (modalRef.current) {
        modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [detailModalOpen]);

  useEffect(() => {
    if (hovering || detailModalOpen) {
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
  }, [hovering, thumbnailTimeSecond, detailModalOpen]);

  const expandToModal = (modalOpen) => {
    if (!modalOpen) {
      setXScale(1);
      setYScale(1);
      setLeftPos(0);
      setTopPos(0);
      return;
    }
    const dims = cardRef?.current.getBoundingClientRect();
    const newXScale = (winWidth * 0.9) / dims.width;
    const newYScale = (winHeight * 0.9) / dims.height;
    setXScale(newXScale);
    setYScale(newYScale);

    const newLeft = winWidth * 0.05 - dims.left;
    const newTop = winHeight * 0.05 - dims.top;
    setLeftPos(newLeft);
    setTopPos(newTop);
  };

  return (
    <>
      <DimOverlay active={detailModalOpen} />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '45vh',
          zIndex: detailModalOpen || detailModalOpenDelayed ? '3' : '1',
          cursor: !detailModalOpen ? 'pointer' : 'auto',
        }}
        onClick={() => {
          if (!detailModalOpen) {
            expandToModal(!detailModalOpen);
            setDetailModalOpen(!detailModalOpen);
          }
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        ref={cardRef}
      >
        <Box
          ref={modalRef}
          sx={{
            borderRadius:
              detailModalOpen || detailModalOpenDelayed ? '1.2rem' : '0',
            backgroundColor: 'white',
            overflowY:
              detailModalOpen && detailModalOpenDelayed ? 'scroll' : 'hidden',
            width: `${100 * xScale}%`,
            height: `${100 * yScale}%`,
            left: `${leftPos}px`,
            top: `${topPos}px`,
            position: 'absolute',
            transition: `width ${
              MODAL_ANIM_TIME_MS / 1000
            }s ease-in-out, height ${
              MODAL_ANIM_TIME_MS / 1000
            }s ease-in-out, left ${
              MODAL_ANIM_TIME_MS / 1000
            }s ease-in-out, top ${
              MODAL_ANIM_TIME_MS / 1000
            }s ease-in-out, transform 0.15s ease-in-out, filter 0.5s ease-in-out`,
            transform:
              hovering && !detailModalOpen ? 'scale(1.02)' : 'scale(1)',
            filter:
              showText && !detailModalOpen ? 'brightness(60%) blur(1px)' : '',
          }}
        >
          {detailModalOpen && (
            <Box
              sx={{
                position: 'sticky',
                textAlign: 'right',
                color: '#ddd',
                top: '0',
                height: '0',
                zIndex: '1',
              }}
            >
              <CloseIcon
                sx={{
                  position: 'relative',
                  top: '16px',
                  right: '16px',
                  cursor: 'pointer',
                  fontSize: '24px',
                  fontWeight: '100',
                }}
                onClick={() => {
                  if (detailModalOpen) {
                    expandToModal(!detailModalOpen);
                    setDetailModalOpen(!detailModalOpen);
                  }
                }}
              />
            </Box>
          )}
          <video
            ref={videoRef}
            loop
            muted
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src={videoURL} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <ProjectDetails projectName={projectName} />
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          sx={{
            pointerEvents: 'none',
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
            }s ease-in-out, left ${
              MODAL_ANIM_TIME_MS / 1000
            }s ease-in-out, top ${MODAL_ANIM_TIME_MS / 1000}s ease-in-out`,
          }}
        >
          <Typography
            variant='h3'
            sx={{
              color: 'white',
              transform: `scale(${xScale}, ${yScale})`,
              opacity: showText && !detailModalOpen ? 1 : 0,
              transition: `all ${MODAL_ANIM_TIME_MS / 1000}s ease-in-out`,
              letterSpacing: '2px',
              fontWeight: 'bold',
            }}
          >
            {projectName}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default WorkPreviewCard;
