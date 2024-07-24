'use client';

import React from 'react';
import { Answer, Banner, QList } from '@/app/about/components/views';
import FooterInSection from '@/components/footer-in-section';
import { SwiperSlide } from 'swiper/react';
import VerticalScreenSwiper from '@/components/vertical-screen-swiper';

const AboutContainer = () => {
  return (
    <div className="w-full h-full">
      <VerticalScreenSwiper>
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
      </VerticalScreenSwiper>
    </div>
  );
};

export default AboutContainer;
