import { useEffect, useRef } from 'react';

function usePrevious<T>(state: T) {
  const ref = useRef<T>(state);

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref;
}

export default usePrevious;
