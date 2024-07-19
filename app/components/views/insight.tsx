import React from 'react';
import graph1 from '@/public/images/graph_2.png';
import Image, { StaticImageData } from 'next/image';

export const Insight = () => {
  return (
    <section className="insight-section">
      <div className="mt-4 mb-4 xl:mt-14 content card-graph invisible">
        <Image
          src={graph1 as StaticImageData}
          alt="recoble composition"
          style={{ maxHeight: 468 }}
        />
      </div>
      <div className="content card-text flex flex-col justify-center items-center gap-6">
        <p className="insight-title">
          잠재 고객<span className="font-medium">부터</span> 충성 고객
          <span className="font-medium">까지</span>
          <br />
          모두 잡을 수 있어요!
        </p>
        <p className="insight-text">
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
