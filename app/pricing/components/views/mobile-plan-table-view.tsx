'use client';

import React, { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { plans } from '@/app/pricing/constants';
import { PlanTableElmView } from '@/app/pricing/components/views';

export const MobilePlanTableView = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();

  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();

  return (
    <div className="plan-table plan-table-mobile-align relative">
      <Swiper
        className="sm:hidden"
        modules={[Pagination]}
        slidesPerView={1}
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        onSwiper={(e) => {
          setSwiper(e);
        }}
        pagination
      >
        {plans.map((plan, pIdx) => (
          <SwiperSlide key={`plan-${pIdx}`} className="sm:hidden">
            <PlanTableElmView plan={plan} pIdx={pIdx} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <div className="w-7 flex justify-start overflow-clip absolute left-1 z-10">
          <button
            className={`btn btn-circle opacity-50 hover:opacity-100 ${swiperIndex === 0 && 'invisible'}`}
            onClick={handlePrev}
          >
            ❮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
        </div>
        <div className="w-7 flex justify-end overflow-clip absolute right-1 z-10">
          <button
            className={`btn btn-circle opacity-50 hover:opacity-100 ${swiperIndex === 3 && 'invisible'}`}
            onClick={handleNext}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❯
          </button>
        </div>
      </div>
    </div>
  );
};
