import { useState, useEffect } from 'react';

const useScrollUp = () => {
  const [scrollUp, setScrollUp] = useState<boolean>(false);

  useEffect(() => {
    let prevScroll = window.pageYOffset;

    const handleScroll = () => {
      requestAnimationFrame(() => {
        const currScroll = window.pageYOffset;

        if (currScroll < 160) {
          setScrollUp(false);
          return;
        }

        const isUp = prevScroll > currScroll;

        if (isUp !== scrollUp) {
          setScrollUp(isUp);
        }
        prevScroll = currScroll;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollUp]);

  return scrollUp;
};

export default useScrollUp;
