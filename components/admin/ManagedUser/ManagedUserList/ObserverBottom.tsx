import React, { useCallback, useEffect, useRef, SetStateAction } from 'react';

import { SearchUserParams } from '@/types/search-params';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface Props {
  getNextPage: () => void;
}

const ObserverBottom = ({ getNextPage }: Props) => {
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
  const bottom = useIntersectionObserver(observerCallback, { threshold: 0.5 });

  return <div ref={bottom}>로딩중 </div>;
};

export default ObserverBottom;
