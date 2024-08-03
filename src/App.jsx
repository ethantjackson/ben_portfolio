import IntroSplash from './IntroSplash';
import IntroNav from './IntroNav';
import Work from './Work/Work';
import { useEffect, useRef, useState } from 'react';
import { scroller } from 'react-scroll';
import { SCROLL_TIME_MS } from './constants';

function App() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.innerHeight);
  const isScrolling = useRef(false);

  const scrollTo = (targetID) => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    scroller.scrollTo(targetID);
    setTimeout(() => (isScrolling.current = false), SCROLL_TIME_MS);
  };

  useEffect(() => {
    const preventManualScroll = (e) => {
      if (isScrolling.current) e.preventDefault();
    };

    const handleScroll = (e) => {
      e.preventDefault();
      const deltaY = e.deltaY;
      if (deltaY < 0) {
        return;
      }
      scrollTo('#WORK');
      setTimeout(
        () => window.removeEventListener('wheel', handleScroll),
        SCROLL_TIME_MS
      );
    };

    window.scrollTo({ top: 0 });
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('wheel', preventManualScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('wheel', preventManualScroll);
    };
  }, []);

  useEffect(() => {
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
      <IntroSplash />
      <Work winHeight={winHeight} winWidth={winWidth} />
    </div>
  );
}

export default App;
