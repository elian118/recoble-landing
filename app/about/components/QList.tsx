import React from 'react';
import { description } from '@/app/about/constants';
import Image from 'next/image';

export const QList = () => {
  return (
    <div className="flex flex-col py-20 gap-2 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 h-auto px-4 sm:px-0">
      {description.map((e) => (
        <div
          key={e.title}
          className="flex flex-col lg:flex-row gap-4 lg:gap-12 py-11 justify-center items-center border-b last:border-none"
        >
          <Image width={60} height={60} src={e.imgSrc} alt={e.title} />
          <div className="text-center lg:text-start flex flex-col gap-3 w-10/12">
            <div className={`text-lg lg:text-2xl font-medium ${e.titleColor}`}>
              {e.title}
            </div>
            <div className="text-lg lg:text-2xl font-medium">{e.comment}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
