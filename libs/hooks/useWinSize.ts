'use client';

import { useEffect, useState } from 'react';

type WinDimensions = {
  winWidth: number;
  winHeight: number;
};

const getWindowDimensions = (): WinDimensions => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    winWidth: width,
    winHeight: height,
  };
};

export const useWinSize = () => {
  const [winDimensions, setWinDimensions] =
    useState<WinDimensions>(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => setWinDimensions(getWindowDimensions());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return winDimensions;
};
