'use client';

import React, { useEffect } from 'react';
import assertRecobleSlide from '@/public/images/assert_recoble_slide.png';
import Image, { StaticImageData } from 'next/image';
import FooterInSection from '@/components/footer-in-section';

export const AssertRecoble = () => {
  useEffect(() => {
    //
  }, []);

  return (
    <section className="assert-recoble-section">
      <div className="px-2 pt-24 sm:px-12 h-3/4 w-full">
        <div className="assert-recoble-container">
          {/* invisible */}
          <div className="assert-recoble-text content card-text">
            <p className="assert-recoble-title">
              모든 이커머스 플랫폼의
              <br />
              성공전략, <span className="font-bold">레코블</span>
            </p>
            <p className="text-2xl font-bold md:text-3xl xl:text-[48px] lg:mt-6 text-center lg:text-start">
              지금 바로 확인해보세요
            </p>
          </div>
          {/* invisible */}
          <div className="pl-8 pt-6 lg:pt-0 md:pl-0 w-full md:w-1/2 flex justify-end content card-graph">
            <Image
              className="object-contain object-right-bottom"
              src={assertRecobleSlide as StaticImageData}
              alt="Recommand you Recoble!"
              style={{ height: 'auto' }}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <FooterInSection />
      </div>
    </section>
  );
};
