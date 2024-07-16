import React from 'react';
import { description } from '@/app/about/constants';
import Image from 'next/image';

export const QList = () => {
  return (
    <div className="q-list">
      {description.map((e) => (
        <div key={e.title} className="question">
          <Image src={e.imgSrc} alt={e.title} style={{ width: 60, height: 60 }} />
          <div className="text-center lg:text-start flex flex-col gap-3 w-10/12">
            <div className={`text-lg lg:text-2xl font-medium ${e.titleColor}`}>
              {e.title}
            </div>
            <div className="text-base sm:text-lg lg:text-2xl font-medium">
              {e.comment}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
