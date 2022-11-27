import { useState, useEffect, useRef, useCallback } from 'react';

import usePrevious from './usePrevious';
import useRequestAnimationFrame from './useRequestAnimationFrame';

export type ScrolDirection = 'UP' | 'DOWN';

const useScroll = (): [ScrolDirection, number] => {
  const [scrollDirection, setScrollDirection] =
    useState<ScrolDirection>('DOWN');
  const [scrollY, setScrollY] = useState<number>(0);

  const prevScrollY = usePrevious(scrollY);

  const handleScroll = useCallback(() => {
    const currScroll = window.pageYOffset;
    const isUp = prevScrollY.current > currScroll ? 'UP' : 'DOWN';

    setScrollY(currScroll);

    if (isUp !== scrollDirection) {
      setScrollDirection(isUp);
    }
  }, [scrollDirection, prevScrollY]);

  const handler = useRequestAnimationFrame(handleScroll);

  useEffect(() => {
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [handler]);

  return [scrollDirection, scrollY];
};

export default useScroll;
