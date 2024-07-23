'use client';

import React from 'react';
import { Banner, QList, Answer } from '@/app/about/components';
import FooterInSection from '@/components/footer-in-section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

const AboutContainer = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        className="h-screen" // 수직(vertical) 방향이면 반드시 높이를 지정해야 버그가 없다.
        modules={[Mousewheel]}
        direction="vertical"
        speed={1000}
        mousewheel
        slidesPerView={1}
      >
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center w-full h-screen">
            <QList />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-between items-center w-full h-screen">
            <Answer />
            <div className="w-full text-start">
              <FooterInSection />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutContainer;
