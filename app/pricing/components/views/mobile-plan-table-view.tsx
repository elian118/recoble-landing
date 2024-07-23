'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { plans } from '@/app/pricing/constants';
import { PlanTableElmView } from '@/app/pricing/components/views';
import { useWinSize } from '@/libs/hooks';

export const MobilePlanTableView = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();
  const { winWidth, setWinWidth } = useWinSize();

  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();

  useEffect(() => {
    setWinWidth(window.innerWidth);
  }, [winWidth, setWinWidth]);

  return (
    <div
      className={`plan-table-mobile-align sm:hidden relative ${winWidth < 400 ? 'px-4' : 'px-8'}`}
    >
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        direction="horizontal"
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        onSwiper={(e) => {
          setSwiper(e);
        }}
        onSlideChange={() => console.log('slide change')}
        pagination
      >
        {plans.map((plan, pIdx) => (
          <SwiperSlide key={`plan-${pIdx}`}>
            <PlanTableElmView plan={plan} pIdx={pIdx} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <div
          className={`
            w-6 flex overflow-clip absolute z-10
            ${winWidth < 400 ? 'justify-end' : 'justify-start'} 
            ${winWidth < 400 ? 'left-4' : 'left-2'}
          `}
        >
          <button
            className={`
              btn btn-circle opacity-50 hover:opacity-100 
              ${swiperIndex === 0 && 'invisible'}
            `}
            onClick={handlePrev}
          >
            ❮&nbsp;&nbsp;&nbsp;❮
          </button>
        </div>
        <div
          className={`
            w-6 flex overflow-clip absolute z-10
            ${winWidth < 400 ? 'justify-start' : 'justify-end'} 
            ${winWidth < 400 ? 'right-4' : 'right-2'}
          `}
        >
          <button
            className={`
              btn btn-circle opacity-50 hover:opacity-100 
              ${swiperIndex === 3 && 'invisible'}
            `}
            onClick={handleNext}
          >
            ❯&nbsp;&nbsp;&nbsp;❯
          </button>
        </div>
      </div>
    </div>
  );
};
