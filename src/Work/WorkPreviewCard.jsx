import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { MODAL_ANIM_TIME_MS } from '../constants';
import DimOverlay from '../Components/DimOverlay';
import ProjectDetails from './ProjectDetails';
// import SeeMoreIndicator from './SeeMoreIndicator';
import FadeInOnScroll from '../Transitions/FadeInOnScroll';
import PreviewVideo from './PreviewVideo';

const WorkPreviewCard = ({
  thumbnailURL,
  thumbnailTimeSeconds,
  projectName,
  projectDescription,
  detailsContent,
  projectCredits,
  winWidth,
  winHeight,
  fadeInDelay,
}) => {
  const [hovering, setHovering] = useState(false);
  const [showText, setShowText] = useState(false);
  const [xScale, setXScale] = useState(1);
  const [yScale, setYScale] = useState(1);
  const [leftPos, setLeftPos] = useState(0);
  const [topPos, setTopPos] = useState(0);
  const timeoutRef = useRef(null);
  const cardRef = useRef(null);
  const modalRef = useRef(null);

  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [detailModalOpenDelayed, setDetailModalOpenDelayed] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const expandToModal = useCallback(
    (modalOpen) => {
      if (!modalOpen) {
        setXScale(1);
        setYScale(1);
        setLeftPos(0);
        setTopPos(0);
        return;
      }
      const dims = cardRef?.current.getBoundingClientRect();

      const widthFactor = isMobile ? 1 : 0.9;
      const heightFactor = isMobile ? 1 : 0.9;

      const newXScale = (winWidth * widthFactor) / dims.width;
      const newYScale = (winHeight * heightFactor) / dims.height;
      setXScale(newXScale);
      setYScale(newYScale);

      const newLeft = winWidth * ((1 - widthFactor) / 2) - dims.left;
      const newTop = winHeight * ((1 - heightFactor) / 2) - dims.top;
      setLeftPos(newLeft);
      setTopPos(newTop);
    },
    [winWidth, winHeight, isMobile] // include isMobile in dependencies
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        detailModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        expandToModal(false);
        setDetailModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [detailModalOpen, expandToModal]);

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
  }, [detailModalOpen, winHeight]);

  useEffect(() => {
    setShowText(hovering);
    if (hovering) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setShowText(false), 2000);
    }
  }, [hovering]);

  return (
    <>
      <DimOverlay active={detailModalOpen} />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: detailModalOpen || detailModalOpenDelayed ? '3' : '1',
          cursor: !detailModalOpen ? 'pointer' : 'auto',
        }}
        onClick={() => {
          if (!detailModalOpen) {
            expandToModal(!detailModalOpen);
            setDetailModalOpen(!detailModalOpen);
          }
        }}
        onMouseEnter={() => {
          if (!isMobile) {
            setHovering(true);
          }
        }}
        onMouseLeave={() => setHovering(false)}
        ref={cardRef}
      >
        <FadeInOnScroll delay={fadeInDelay} offset={0}>
          <Box
            ref={modalRef}
            sx={{
              borderRadius: {
                xs: 'none',
                sm: detailModalOpen || detailModalOpenDelayed ? '1.2rem' : '0',
              },
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

            <PreviewVideo
              src={thumbnailURL}
              play={hovering || detailModalOpen}
              seekTime={thumbnailTimeSeconds}
              hidden={detailModalOpen}
            />

            {/* {detailModalOpen && <SeeMoreIndicator modalRef={modalRef} />} */}
            <Box
              sx={{
                opacity: detailModalOpen && detailModalOpenDelayed ? 1 : 0,
                transition: `opacity ${detailModalOpen ? 2 : 0.3}s`,
              }}
            >
              {(detailModalOpen || detailModalOpenDelayed) && (
                <ProjectDetails
                  projectName={projectName}
                  projectDescription={projectDescription}
                  detailsContent={detailsContent}
                  projectCredits={projectCredits}
                />
              )}
            </Box>
          </Box>

          {/* Preview card title */}
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
                fontFamily: '"Creato Display", sans-serif',
                fontWeight: 700,
              }}
            >
              {projectName}
            </Typography>
          </Box>
        </FadeInOnScroll>
      </Box>
    </>
  );
};

export default WorkPreviewCard;
