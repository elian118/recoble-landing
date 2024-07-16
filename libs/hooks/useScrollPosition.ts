'use client';

import { useState, useEffect } from 'react';
import { useThrottle } from '@/libs/hooks/useThrottle';

export const useScrollPosition = () => {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const updateScrollPosition = useThrottle(() => {
    window.scrollX !== scrollX && setScrollX(window.scrollX);
    window.scrollY !== scrollY && setScrollY(window.scrollY);
  }, 250);

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);

    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return { scrollX, scrollY };
};
