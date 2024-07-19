import { useThrottle } from '@/libs/hooks/useThrottle';
import { useEffect, useState } from 'react';

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
  }, [updateWindowSize]);

  return { winWidth, setWinWidth, winHeight, setWinHeight };
};
