import React from 'react';
import predict1 from '@/public/images/predict_1.png';
import predict2 from '@/public/images/predict_2.png';
import predict3 from '@/public/images/predict_3.png';
import predict4 from '@/public/images/predict_4.png';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

export const Prediction = () => {
  return (
    <section className="w-full min-h-screen bg-white p-8 flex flex-row justify-center items-center">
      <div className="w-full md:w-11/12 xl:w-9/12 flex flex-wrap justify-between items-center">
        <div className="my-8 xl:my-0 flex flex-col gap-4 w-full items-center lg:items-start lg:w-2/3 xl:w-2/5 content card-text">
          <p className="text-blue-600 text-2xl">Prediction</p>
          <p className="text-3xl sm:text-5xl font-semibold leading-normal sm:leading-tight text-center lg:text-start">
            문제를 발견하여
            <br />
            예측하고 제안합니다.
          </p>
          <p className="text-lg sm:text-xl lg:mt-6 xl:mb-28 text-center lg:text-start">
            전문가 없이도 누구나 쉽고 빠르게
            <br />
            데이터를 활용하여 문제점과 해결책을
            <br />
            파악할 수 있어요.
          </p>
        </div>
        <div className="w-full lg:w-1/2 xl:w-3/5 mb-8 xl:mb-0 flex gap-12 justify-center md:justify-start items-center flex-wrap md:flex-nowrap content card-graph">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Image src={predict1 as StaticImageData} alt="recoble customer view" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={predict2 as StaticImageData} alt="recoble customer view" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={predict3 as StaticImageData} alt="recoble customer view" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={predict4 as StaticImageData} alt="recoble customer view" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
