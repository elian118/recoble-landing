import React from 'react';
import { description } from '@/app/about/constants';

export const QList = () => {
  return (
    <div className="flex flex-col py-20 w-full sm:w-4/5 md:w-3/5 h-auto px-4 sm:px-0">
      {description.map((e) => (
        <div
          key={e.title}
          className="flex flex-col lg:flex-row gap-4 py-11 justify-center lg:justify-between items-center border-b last:border-none"
        >
          <div className="w-16 h-16 bg-cyan-400" />
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
