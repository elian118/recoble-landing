import React from 'react';
import { description } from '@/app/about/constants';

export const QList = () => {
  return (
    <div className="flex flex-col py-20 w-2/5 h-[540px]">
      {description.map((e) => (
        <div key={e.title} className="flex flex-row gap-4 justify-between items-center">
          <div className="w-14 h-14 bg-cyan-400" />
          <div className="text-start py-8 flex flex-col gap-3 w-10/12">
            <p className={`text-2xl font-medium ${e.titleColor}`}>{e.title}</p>
            <p className="text-2xl font-medium">{e.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
