import React from 'react';
import predict1 from '@/public/images/predict_1.png';
import predict2 from '@/public/images/predict_2.png';
import predict3 from '@/public/images/predict_3.png';
import predict4 from '@/public/images/predict_4.png';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel } from 'swiper/modules';

export const Prediction = () => {
  return (
    <section className="prediction-section">
      <div className="prediction-section-container">
        {/* invisible */}
        <div className="prediction-text content card-text">
          <p className="text-blue-600 text-2xl xl:text-[26px] font-semibold">
            Prediction
          </p>
          <p className="prediction-title">
            문제를 발견하여
            <br />
            예측하고 제안합니다.
          </p>
          <p className="text-lg sm:text-xl xl:text-[26px] xl:leading-[40px] font-medium lg:mt-6 xl:mb-28 text-center xl:text-start">
            전문가 없이도 누구나 쉽고 빠르게
            <br />
            데이터를 활용하여 문제점과 해결책을
            <br />
            파악할 수 있어요.
          </p>
        </div>
        {/* invisible */}
        <div className="prediction-swiper-container content card-graph">
          <Swiper
            modules={[Autoplay, Mousewheel]}
            spaceBetween={660}
            slidesPerView={1}
            mousewheel
            speed={2000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Image
                src={predict1 as StaticImageData}
                alt="recoble customer view"
                style={{ height: 'auto' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={predict2 as StaticImageData}
                alt="recoble customer view"
                style={{ height: 'auto' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={predict3 as StaticImageData}
                alt="recoble customer view"
                style={{ height: 'auto' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={predict4 as StaticImageData}
                alt="recoble customer view"
                style={{ height: 'auto' }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
