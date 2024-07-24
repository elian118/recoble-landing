import React from 'react';
import personalizationSlide from '@/public/images/personalization_slide.png';
import Image, { StaticImageData } from 'next/image';

export const Personalization = () => {
  return (
    <section className="personalization-section">
      <div className="personalization-container">
        <div className="personalization-text content card-text">
          <p className="text-white text-2xl xl:text-[26px] font-semibold">
            personalization
          </p>
          <p className="personalization-title">
            개인화된 맞춤형
            <br />
            경험을 제공합니다.
          </p>
          <p className="personalization-describe">
            고객에게 맞춤형 메시지를 보내어 브랜드에
            <br />
            대한 긍정적인 경험을 심어줄 수 있어요.
          </p>
        </div>
        <Image
          className="personalization-image content card-graph"
          src={personalizationSlide as StaticImageData}
          alt="recoble personalization"
          style={{ height: 'auto' }}
        />
      </div>
    </section>
  );
};
