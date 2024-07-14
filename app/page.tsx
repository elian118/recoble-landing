'use client';

import { Analyze, Insight, Personalization, Prediction, Preview } from '@/app/components';
import AssertRecoble from '@/app/components/AssertRecoble';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  useEffect(() => {
    const contentElems = document.querySelectorAll('.content');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? entry.target.classList.contains('card-img')
            ? entry.target.classList.add('appear')
            : entry.target.classList.contains('card-graph')
              ? entry.target.classList.add('fade-in')
              : entry.target.classList.add('appear-up-down')
          : entry.target.classList.contains('card-img')
            ? entry.target.classList.remove('appear')
            : entry.target.classList.contains('card-graph')
              ? entry.target.classList.remove('fade-in')
              : entry.target.classList.remove('appear-up-down');
      });
    });

    contentElems.forEach((e) => {
      observer.observe(e);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
}
