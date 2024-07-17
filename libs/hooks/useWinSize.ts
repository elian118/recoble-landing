'use client';

import { useEffect, useState } from 'react';
import { useThrottle } from '@/libs/hooks/useThrottle';

export const useWinSize = () => {
  const [winWidth, setWinWidth] = useState<number>(0);
  const [winHeight, setWinHeight] = useState<number>(0);

  const updateWindowSize = useThrottle(() => {
    winWidth !== window.innerWidth && setWinWidth(window.innerWidth);
    winHeight !== window.innerHeight && setWinHeight(window.innerHeight);
  }, 250);

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  return { winWidth, winHeight };
};
