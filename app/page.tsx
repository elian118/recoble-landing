'use client';

import { Analyze, Insight, Personalization, Prediction, Preview } from '@/app/components';
import AssertRecoble from '@/app/components/AssertRecoble';
import { useEffect } from 'react';

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
              : entry.target.classList.add('appear-up')
          : entry.target.classList.contains('card-img')
            ? entry.target.classList.remove('appear')
            : entry.target.classList.contains('card-graph')
              ? entry.target.classList.remove('fade-in')
              : entry.target.classList.remove('appear-up');
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
      <Preview />
      <Insight />
      <Analyze />
      <Prediction />
      <Personalization />
      <AssertRecoble />
    </main>
  );
}
