import React from 'react';
import { description } from '@/app/about/constants';
import Image from 'next/image';

export const QList = () => {
  return (
    <div className="q-list">
      {description.map((e) => (
        <div key={e.title} className="question">
          <Image src={e.imgSrc} alt={e.title} style={{ width: 62, height: 'auto' }} />
          <div className="text-center lg:text-start flex flex-col gap-1 sm:gap-3 w-10/12">
            <div
              className={`text-xl xl:text-[28px] lg:text-2xl font-semibold ${e.titleColor}`}
            >
              {e.title}
            </div>
            <div className="text-base sm:text-xl md:text-2xl xl:text-[26px] font-[400px]">
              {e.comment}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
