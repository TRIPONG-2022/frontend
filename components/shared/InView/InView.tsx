import React, { useCallback } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface InViewProps {
  onChange: (isInView: boolean, entry: IntersectionObserverEntry) => void;
  children?: React.ReactNode;
  rootMargin?: string;
  threshold?: number | number[];
}

export default function InView({
  children,
  onChange,
  rootMargin,
  threshold,
}: InViewProps) {
  const onIntersect: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        onChange(entry.isIntersecting, entry);
      });
    },
    [onChange],
  );

  const ref = useIntersectionObserver<HTMLDivElement>(onIntersect, {
    rootMargin,
    threshold,
  });

  return (
    <div>
      {children}
      <div ref={ref} />
    </div>
  );
}
