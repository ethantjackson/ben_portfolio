import IntroSplash from './IntroSplash';
import IntroNav from './IntroNav';
import Work from './Work/Work';
import { useEffect, useRef, useState } from 'react';
import { scroller } from 'react-scroll';
import { SCROLL_TIME_MS } from './constants';
import Contact from './Contact/Contact';

function App() {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.innerHeight);
  const [scrollTarget, setScrollTarget] = useState('');
  const isScrolling = useRef(false);

  const scrollTo = (targetID) => {
    if (isScrolling.current) return;
    setScrollTarget(targetID);
    isScrolling.current = true;
    scroller.scrollTo(targetID);
    setTimeout(() => (isScrolling.current = false), SCROLL_TIME_MS);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const workSection = document.getElementById('#WORK');
      const hasReachedWorkSection =
        workSection?.getBoundingClientRect().top <= 0;
      if (!hasReachedWorkSection) e.preventDefault();
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
    return () => {
      window.removeEventListener('wheel', handleScroll);
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
      <IntroSplash winHeight={winHeight} />
      <Work
        isScrollingToWork={scrollTarget !== ''}
        winHeight={winHeight}
        winWidth={winWidth}
      />
      <Contact />
    </div>
  );
}

export default App;
