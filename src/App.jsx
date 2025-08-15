import IntroSplash from './IntroSplash';
import IntroNav from './IntroNav';
import Work from './Work/Work';
import { useEffect, useRef, useState } from 'react';
import { scroller } from 'react-scroll';
import {
  CONTACT,
  EXPERIMENTATION,
  NAV_ITEMS,
  SCROLL_TIME_MS,
  WORK,
} from './constants';
import Contact from './Contact/Contact';
import Experimentation from './Experimentation/Experimentation';
import FadeInOut from './Transitions/FadeInOut';
import { useMediaQuery, useTheme } from '@mui/material';

function App() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.innerHeight);
  const [scrollTarget, setScrollTarget] = useState('');
  const [inStatusMap, setInStatusMap] = useState(() =>
    Object.fromEntries(
      NAV_ITEMS.map((item) => {
        if (item === EXPERIMENTATION) {
          return [item, false];
        }
        return [item, true];
      })
    )
  );
  const [enabledStatusMap, setEnabledStatusMap] = useState(() =>
    Object.fromEntries(
      NAV_ITEMS.map((item) => {
        if (item === EXPERIMENTATION) {
          return [item, false];
        }
        return [item, true];
      })
    )
  );
  const isScrolling = useRef(false);

  useEffect(() => {
    console.log('i', inStatusMap);
  }, [inStatusMap]);
  useEffect(() => {
    console.log('e', enabledStatusMap);
  }, [enabledStatusMap]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const updateNonTargetStatus = (setStatusMap, targetID) => {
    setStatusMap((prevMap) => {
      const updatedMap = { ...prevMap };
      NAV_ITEMS.forEach((itemID) => {
        if (itemID !== targetID) {
          updatedMap[itemID] = false;
        }
      });
      return updatedMap;
    });
  };

  const updateTargetStatus = (setStatusMap, targetID, callback) => {
    setStatusMap((prev) => {
      const newState = {
        ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
        [targetID]: true,
      };
      // Delay callback until after render is scheduled
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          callback?.();
        });
      });
      return newState;
    });
  };

  const scrollTo = (targetID) => {
    const isInSamePage =
      [WORK, CONTACT].includes(scrollTarget) &&
      [WORK, CONTACT].includes(targetID);
    if (!isInSamePage) updateNonTargetStatus(setInStatusMap, targetID);
    setTimeout(
      () => {
        if (isScrolling.current) return;
        if (!isInSamePage)
          updateTargetStatus(setEnabledStatusMap, targetID, () => {
            scroller.scrollTo(`#${targetID}`);
          });
        else scroller.scrollTo(`#${targetID}`);

        setScrollTarget(targetID);

        setTimeout(() => {
          isScrolling.current = true;
          setTimeout(() => {
            isScrolling.current = false;
            if (!isInSamePage) {
              updateTargetStatus(setInStatusMap, targetID);
              updateNonTargetStatus(setEnabledStatusMap, targetID);
            }
          }, SCROLL_TIME_MS);
        }, 100);
      },
      scrollTarget ? 500 : 0
    );
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const workSection = document.getElementById(WORK);
      const hasReachedWorkSection =
        workSection?.getBoundingClientRect().top <= 0;
      if (!hasReachedWorkSection) e.preventDefault();
      const deltaY = e.deltaY;
      if (deltaY < 0) {
        return;
      }
      if (!isMobile || window.scrollY >= window.innerHeight) {
        scrollTo(WORK);
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('touchmove', handleScroll);
      }
    };

    if (!scrollTarget) {
      window.addEventListener('wheel', handleScroll, { passive: false });
      window.addEventListener('touchmove', handleScroll, { passive: false });
    }
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
    // eslint-disable-next-line
  }, [scrollTarget]);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const handleResize = () => {
      setWinWidth(window.innerWidth);
      setWinHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <IntroNav winHeight={winHeight} winWidth={winWidth} scrollTo={scrollTo} />
      {!enabledStatusMap[EXPERIMENTATION] && (
        <IntroSplash winHeight={winHeight} />
      )}
      {(enabledStatusMap[WORK] || enabledStatusMap[CONTACT]) && (
        <FadeInOut isFadeIn={inStatusMap[WORK] || inStatusMap[CONTACT]}>
          <Work
            isScrollingToWork={scrollTarget !== ''}
            winHeight={winHeight}
            winWidth={winWidth}
          />
        </FadeInOut>
      )}
      {(enabledStatusMap[CONTACT] || enabledStatusMap[WORK]) && (
        <FadeInOut isFadeIn={inStatusMap[CONTACT] || enabledStatusMap[WORK]}>
          <Contact />
        </FadeInOut>
      )}
      {enabledStatusMap[EXPERIMENTATION] && (
        <FadeInOut isFadeIn={inStatusMap[EXPERIMENTATION]}>
          <Experimentation winHeight={winHeight} winWidth={winWidth} />
        </FadeInOut>
      )}
    </div>
  );
}

export default App;
