'use client';

import { useRef } from 'react';

export const useThrottle = <T extends any[]>(
  callback: (...params: T) => void,
  delay: number,
) => {
  let timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...params: T) => {
    if (!timerId.current) {
      timerId.current = setTimeout(() => {
        callback(...params);
        timerId.current = null;
      }, delay ?? 0);
    }
  };
};
