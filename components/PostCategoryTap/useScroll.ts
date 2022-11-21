import { useState, useEffect, useRef } from 'react';

import { createRAF } from '@/utils/scroll';

export type ScrolDirection = 'UP' | 'DOWN';

const useScroll = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrolDirection>();
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    let prevScroll = window.pageYOffset;

    const handleScroll = () => {
      const currScroll = window.pageYOffset;

      setScrollY(currScroll);

      const isUp = prevScroll > currScroll ? 'UP' : 'DOWN';

      if (isUp !== scrollDirection) {
        setScrollDirection(isUp);
      }
      prevScroll = currScroll;
    };

    const { rAFId, rAFFunc } = createRAF(handleScroll);

    window.addEventListener('scroll', rAFFunc);
    return () => {
      window.removeEventListener('scroll', rAFFunc);
      cancelAnimationFrame(rAFId);
    };
  }, [scrollDirection]);

  return { scrollDirection, setScrollDirection, scrollY };
};

export default useScroll;
