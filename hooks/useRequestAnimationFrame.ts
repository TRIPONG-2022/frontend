import { useCallback, useEffect, useRef } from 'react';

const useRequestAnimationFrame = (callback: () => void) => {
  const rAFID = useRef(0);

  const rAFHandler = useCallback(() => {
    rAFID.current = requestAnimationFrame(callback);
  }, [callback]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rAFID.current);
    };
  }, []);

  return rAFHandler;
};

export default useRequestAnimationFrame;
