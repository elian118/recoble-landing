'use client';

import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Guide, InputForms } from '@/app/contact-us/components/views';
import VerticalScreenSwiper from '@/components/vertical-screen-swiper';

const MobileSwiperContainer = () => {
  return (
    <div className="lg:hidden w-full h-full">
      <VerticalScreenSwiper>
        <SwiperSlide>
          <Guide />
        </SwiperSlide>
        <SwiperSlide>
          <InputForms />
        </SwiperSlide>
      </VerticalScreenSwiper>
    </div>
  );
};

export default MobileSwiperContainer;
