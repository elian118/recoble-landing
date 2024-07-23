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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

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
  }, 600);

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
      <Swiper
        className="h-screen" // 수직(vertical) 방향이면 반드시 높이를 지정해야 버그가 없다.
        modules={[Mousewheel]}
        direction="vertical"
        speed={1000}
        mousewheel
        slidesPerView={1}
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
      </Swiper>
    </div>
  );
};

export default SwiperContainer;
