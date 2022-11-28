import { useCallback, useEffect, useRef, useState } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

interface ScreenType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const getScreenType = (width: number): ScreenType => {
  return {
    isMobile: width < 768,
    isTablet: 768 <= width && width < 1280,
    isDesktop: 1280 <= width,
  };
};

export default function useScreenType(): ScreenType {
  const width = useRef<number>();
  const [screenType, setScreenType] = useState<ScreenType>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  const handleResize = useCallback(() => {
    width.current = window.innerWidth;
    setScreenType(getScreenType(width.current));
  }, []);

  useIsomorphicLayoutEffect(() => {
    handleResize();
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return screenType;
}
