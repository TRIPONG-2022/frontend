import React, { useCallback } from 'react';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface ObserverBottomProps {
  getNextPage: () => void;
}

const ObserverBottom = ({ getNextPage }: ObserverBottomProps) => {
  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('observer callback 실행');
          getNextPage();
        }
      });
    },
    [getNextPage],
  );
  const bottom = useIntersectionObserver<HTMLDivElement>(observerCallback, {
    threshold: 0.5,
  });

  return <div ref={bottom}>로딩중 </div>;
};

export default ObserverBottom;
