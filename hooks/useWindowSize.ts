import { useCallback, useEffect, useState } from 'react';
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

  const handleResize = useCallback(
    debounceFunction(() => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    }, delay),
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return windowSize;
};

export default useWindowSize;
