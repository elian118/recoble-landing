'use client';

import React, { useEffect } from 'react';
import {
  Analyze,
  Insight,
  Personalization,
  Prediction,
  Preview,
  AssertRecoble,
} from '@/app/components/views';
import { useWinSize } from '@/libs/hooks';

const HomeContainer = () => {
  const { winWidth } = useWinSize();

  useEffect(() => {
    const contentElems = document.querySelectorAll('.content');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? entry.target.classList.contains('card-img')
            ? entry.target.classList.add('appear')
            : entry.target.classList.contains('card-graph')
              ? entry.target.classList.add(winWidth >= 400 ? 'fade-in' : 'appear')
              : entry.target.classList.add('appear-up-down')
          : entry.target.classList.contains('card-img')
            ? entry.target.classList.remove('appear')
            : entry.target.classList.contains('card-graph')
              ? entry.target.classList.remove(winWidth >= 400 ? 'fade-in' : 'appear')
              : entry.target.classList.remove('appear-up-down');
      });
    });

    contentElems.forEach((e) => {
      observer.observe(e);
    });

    return () => {
      observer.disconnect();
    };
  }, [winWidth]);

  return (
    <main className="flex flex-col items-center justify-between bg-white h-auto">
      <div className="carousel carousel-vertical w-full h-screen">
        <div className="carousel-item">
          <Preview />
        </div>
        <div className="carousel-item">
          <Insight />
        </div>
        <div className="carousel-item">
          <Analyze />
        </div>
        <div className="carousel-item">
          <Prediction />
        </div>
        <div className="carousel-item">
          <Personalization />
        </div>
        <div className="carousel-item">
          <AssertRecoble />
        </div>
      </div>
    </main>
  );
};

export default HomeContainer;
