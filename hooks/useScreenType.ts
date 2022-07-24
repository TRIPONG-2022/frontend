import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

interface ScreenType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export default function useScreenType(): ScreenType {
  const [width, setWidth] = useState<number>(0);
  const [screenType, setScreenType] = useState<ScreenType>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setScreenType({
      isMobile: width < 768,
      isTablet: 768 <= width && width < 1280,
      isDesktop: 1280 <= width,
    });
  }, [width]);

  return screenType;
}
