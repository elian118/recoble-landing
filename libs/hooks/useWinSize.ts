'use client';

import { useEffect, useState } from 'react';

type WinDimensions = {
  winWidth: number;
  winHeight: number;
};

export const useWinSize = () => {
  const [winDimensions, setWinDimensions] = useState<WinDimensions>({
    winWidth: 0,
    winHeight: 0,
  });

  useEffect(() => {
    const getWindowDimensions = (): WinDimensions => {
      return {
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      };
    };

    const handleResize = () => setWinDimensions(getWindowDimensions());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return winDimensions;
};
