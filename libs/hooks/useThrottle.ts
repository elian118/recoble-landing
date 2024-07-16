'use client';

export const useThrottle = (callback: () => void, delay: number) => {
  let timerId: any;

  return () => {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback();
    }, delay);
  };
};
