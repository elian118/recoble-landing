import React from 'react';
import predict1 from '@/public/images/predict_1.png';
import predict2 from '@/public/images/predict_2.png';
import predict3 from '@/public/images/predict_3.png';
import predict4 from '@/public/images/predict_4.png';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export const Prediction = () => {
  return (
    <section className="prediction-section">
      <div className="w-full md:w-11/12 xl:w-9/12 flex flex-wrap justify-center xl:justify-between items-center">
        <div className="prediction-text content card-text">
          <p className="text-blue-600 text-2xl">Prediction</p>
          <p className="prediction-title">
            문제를 발견하여
            <br />
            예측하고 제안합니다.
          </p>
          <p className="text-lg sm:text-xl lg:mt-6 xl:mb-28 text-center xl:text-start">
            전문가 없이도 누구나 쉽고 빠르게
            <br />
            데이터를 활용하여 문제점과 해결책을
            <br />
            파악할 수 있어요.
          </p>
        </div>
        <div className="prediction-swiper-container content card-graph invisible">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Image
                src={predict1 as StaticImageData}
                alt="recoble customer view"
                style={{ width: 'auto', height: 'auto' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={predict2 as StaticImageData}
                alt="recoble customer view"
                style={{ width: 'auto', height: 'auto' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={predict3 as StaticImageData}
                alt="recoble customer view"
                style={{ width: 'auto', height: 'auto' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={predict4 as StaticImageData}
                alt="recoble customer view"
                style={{ width: 'auto', height: 'auto' }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
