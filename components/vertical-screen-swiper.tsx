'use client';

import React from 'react';
import { Swiper } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';

type VerticalScreenSwiperProps = {
  children: React.ReactNode;
  onSwiper?: ((swiper: SwiperClass) => void) | undefined;
  onSlideChange?: ((swiper: SwiperClass) => void) | undefined;
};

const VerticalScreenSwiper = ({ children, ...props }: VerticalScreenSwiperProps) => {
  return (
    <Swiper
      className="h-screen" // 수직(vertical) 방향이면 반드시 높이를 지정해야 버그가 없다.
      modules={[Mousewheel]}
      direction="vertical"
      speed={800}
      mousewheel
      slidesPerView={1}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default VerticalScreenSwiper;
