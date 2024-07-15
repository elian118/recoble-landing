import React from 'react';
import assertRecobleSlide from '@/public/images/assert_recoble_slide.png';
import Image, { StaticImageData } from 'next/image';
import FooterInSection from '@/components/footer-in-section';

const AssertRecoble = () => {
  return (
    <section className="assert-recoble-section">
      <div className="assert-recoble-container">
        <div className="assert-recoble-text content card-text">
          <p className="assert-recoble-title">
            모든 이커머스 플랫폼의
            <br />
            성공전략, <span className="font-semibold">레코블</span>
          </p>
          <p className="text-2xl font-semibold md:text-3xl xl:text-5xl lg:mt-6 text-center lg:text-start">
            지금 바로 확인해보세요
          </p>
        </div>
        <div className="pl-8 pt-6 lg:pt-0 md:pl-0 w-full md:w-1/2 flex justify-end content card-graph">
          <Image
            className="object-contain object-right-bottom"
            src={assertRecobleSlide as StaticImageData}
            alt="Recommand you Recoble!"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
      <div className="w-full">
        <FooterInSection />
      </div>
    </section>
  );
};

export default AssertRecoble;
