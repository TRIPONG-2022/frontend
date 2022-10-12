import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(
  observerCallback: IntersectionObserverCallback,
  options: IntersectionObserverInit,
) {
  const bottom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!bottom.current) {
      return;
    }

    const observer = new IntersectionObserver(observerCallback, options);
    observer.observe(bottom.current);

    return () => observer.disconnect();
  }, [observerCallback, options]);

  return bottom;
}

export default useIntersectionObserver;
