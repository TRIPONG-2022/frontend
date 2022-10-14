import { MutableRefObject, Ref, useCallback, useRef } from 'react';

export default function useComposedRef<T extends HTMLElement>(
  ref1: Ref<T>,
  ref2: Ref<T>,
) {
  return useCallback(
    (instance: T | null) => {
      if (ref1) {
        updateRef(ref1, instance);
      }
      if (ref2) {
        updateRef(ref2, instance);
      }
    },
    [ref1, ref2],
  );
}

function updateRef<T>(ref: NonNullable<Ref<T>>, instance: T | null): void {
  if (typeof ref === 'function') {
    ref(instance);
  } else {
    (ref as MutableRefObject<T | null>).current = instance;
  }
}
