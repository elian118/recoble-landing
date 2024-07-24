'use client';

import React from 'react';
import {
  Analyze,
  AssertRecoble,
  Insight,
  Personalization,
  Prediction,
  Preview,
} from '@/app/components/views';
import { useDebounce } from '@/libs/hooks';
import { SwiperSlide } from 'swiper/react';
import VerticalScreenSwiper from '@/components/vertical-screen-swiper';

const SwiperContainer = () => {
  const setClassName = (tIdx: number) =>
    tIdx === 0
      ? 'appear'
      : tIdx === 1
        ? 'fade-in'
        : tIdx === 2
          ? 'appear-up-down'
          : 'fade-in';

  const animateIntersectingImg = useDebounce((targetElements: NodeListOf<Element>[]) => {
    targetElements.forEach((targets, tIdx) => {
      targets.forEach((t) => t.classList.add('visible'));
      targets.forEach((t) => t.classList.remove('invisible'));
      targets.forEach((t) => t.classList.add(setClassName(tIdx)));
    });
  }, 800);

  const onChangeSlide = () => {
    const cardImages = document?.querySelectorAll('.card-img');
    const cardGraphs = document?.querySelectorAll('.card-graph');
    const cardTexts = document?.querySelectorAll('.card-text');
    const targetElements = [cardImages, cardGraphs, cardTexts];

    targetElements.forEach((targets, tIdx) => {
      targets.forEach((t) => t.classList.remove('visible'));
      targets.forEach((t) => t.classList.add('invisible'));
      targets.forEach((t) => t.classList.remove(setClassName(tIdx)));
    });
    animateIntersectingImg(targetElements);
  };

  return (
    <div className="w-full h-full">
      <VerticalScreenSwiper
        onSwiper={() => onChangeSlide()}
        onSlideChange={() => onChangeSlide()}
      >
        <SwiperSlide>
          <Preview />
        </SwiperSlide>
        <SwiperSlide>
          <Insight />
        </SwiperSlide>
        <SwiperSlide>
          <Analyze />
        </SwiperSlide>
        <SwiperSlide>
          <Prediction />
        </SwiperSlide>
        <SwiperSlide>
          <Personalization />
        </SwiperSlide>
        <SwiperSlide>
          <AssertRecoble />
        </SwiperSlide>
      </VerticalScreenSwiper>
    </div>
  );
};

export default SwiperContainer;
