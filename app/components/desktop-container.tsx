'use client';

import React, { useCallback, useEffect } from 'react';
import {
  Analyze,
  AssertRecoble,
  Insight,
  Personalization,
  Prediction,
  Preview,
} from '@/app/components/views';
import { useDebounce, useWinSize } from '@/libs/hooks';

const DesktopContainer = () => {
  const { winWidth, setWinWidth } = useWinSize();

  const setClassName = useCallback(
    (tIdx: number) =>
      tIdx === 0
        ? 'appear'
        : tIdx === 1
          ? winWidth >= 400
            ? 'fade-in'
            : 'appear'
          : tIdx === 2
            ? 'appear-up-down'
            : 'fade-in',
    [winWidth],
  );

  const animateIntersectingImg = useDebounce((targetElements: NodeListOf<Element>[]) => {
    targetElements.forEach((targets, tIdx) => {
      targets.forEach((t) => t.classList.add(setClassName(tIdx)));
    });
  }, 600);

  useEffect(() => {
    setWinWidth(window.innerWidth);
    const contentElems = document.querySelectorAll('.content');
    const cardImages = document?.querySelectorAll('.card-img');
    const cardGraphs = document?.querySelectorAll('.card-graph');
    const cardTexts = document?.querySelectorAll('.card-text');
    const targetElements = [cardImages, cardGraphs, cardTexts];

    const observer = new IntersectionObserver((entries) => {
      targetElements.forEach((targets, tIdx) => {
        targets.forEach((t) => t.classList.remove('visible'));
        targets.forEach((t) => t.classList.add('invisible'));
        targets.forEach((t) => t.classList.remove(setClassName(tIdx)));
      });
      entries.forEach((entry) => {
        entry.isIntersecting && animateIntersectingImg(targetElements);
      });
    });

    contentElems.forEach((e) => {
      observer.observe(e);
    });

    return () => {
      observer.disconnect();
    };
  }, [winWidth, setWinWidth, setClassName, animateIntersectingImg]);

  return (
    <main className="hidden xl:flex flex-col items-center justify-between bg-white h-auto">
      <Preview />
      <Insight />
      <Analyze />
      <Prediction />
      <Personalization />
      <AssertRecoble />
    </main>
  );
};

export default DesktopContainer;
