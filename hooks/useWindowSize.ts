import { startTransition, useEffect, useState } from 'react';
import debounceFunction from './debounceFunction';

export interface windowSizeType {
  windowWidth: number;
  windowHeight: number;
}

const useWindowSize = (delay: number): windowSizeType => {
  const [windowSize, setWindowSize] = useState<windowSizeType>({
    windowWidth: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    setWindowSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    const debounced = debounceFunction(handleResize, delay);
    window.addEventListener('resize', debounced);
    return () => {
      window.removeEventListener('resize', debounced);
    };
  }, [delay]);

  return windowSize;
};

export default useWindowSize;
