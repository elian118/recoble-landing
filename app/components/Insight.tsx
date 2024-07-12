import React from 'react';
import graph1 from '@/public/images/graph_2.png';
import Image from 'next/image';

export const Insight = () => {
  return (
    <section className="w-full h-screen bg-blue-600 flex flex-col justify-center items-center gap-6 p-8">
      <div className="m-6 content card-graph">
        <Image
          width={900}
          height={700}
          src={graph1 as string}
          alt="recoble composition"
        />
      </div>
      <div className="content card-text flex flex-col justify-center items-center gap-6">
        <p className="text-3xl sm:text-5xl font-semibold text-white text-center sm:leading-tight">
          잠재 고객<span className="font-light">부터</span> 충성 고객까지
          <br />
          모두 잡을 수 있어요!
        </p>
        <p className="text-lg sm:text-2xl text-white text-center font-light sm:leading-relaxed">
          마케팅비용을 써서 힘들게 모은 고객은&nbsp;
          <br className="sm:hidden" />
          무엇 때문에 이탈할까요? 😢
          <br />
          복잡한 과정없이 우리의 고객이&nbsp;
          <br className="sm:hidden" />
          무엇을 원하는지 알아보세요
        </p>
      </div>
    </section>
  );
};
