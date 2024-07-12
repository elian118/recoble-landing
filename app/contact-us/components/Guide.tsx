import React from 'react';
import recobleImg from '@/public/images/recoble-img.png';
import Image, { StaticImageData } from 'next/image';

export const Guide = () => {
  return (
    <div className="guide">
      <div className="flex flex-col gap-4 w-full xl:w-8/12">
        <div className="flex flex-col items-start gap-3">
          <p className="text-3xl font-semibold">Recoble</p>
          <Image
            className="fade-in"
            src={recobleImg as StaticImageData}
            alt="recoble home"
          />
        </div>
      </div>
      <div className="guide-text appear-up-down">
        <p className="text-xl md:text-2xl font-semibold">레코블을 사용해 보세요!</p>
        <ul className="guide-description">
          <li>
            회원 탈퇴, 장기 미접속 등의 직접적인 이탈 사유를 알고 개선점을 도출하고 싶을
            때
          </li>
          <li>최근 사용자의 MAU, 회원가입 수 등에 대한 감소 원인을 파악하고 싶을 때</li>
          <li>
            현재 서비스 미이용의 이유를 알고 전환을 위한 마케팅 전략을 계획하고 싶을 때
          </li>
        </ul>
      </div>
    </div>
  );
};
