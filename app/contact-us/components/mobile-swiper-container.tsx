'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Guide, InputForms } from '@/app/contact-us/components/views';
import { Mousewheel } from 'swiper/modules';

const MobileSwiperContainer = () => {
  return (
    <div className="lg:hidden w-full h-full">
      <Swiper
        className="h-screen" // 수직(vertical) 방향이면 반드시 높이를 지정해야 버그가 없다.
        modules={[Mousewheel]}
        direction="vertical"
        speed={1000}
        mousewheel
        slidesPerView={1}
      >
        <SwiperSlide>
          <Guide />
        </SwiperSlide>
        <SwiperSlide>
          <InputForms />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MobileSwiperContainer;
