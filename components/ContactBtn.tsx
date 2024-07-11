'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ContactBtn = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { push } = useRouter();
  return (
    <div
      className="menu-bar text-gray-900 hover:text-white"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={() => push('/contact-us')}
    >
      <div style={{ visibility: 'hidden' }}>문의하기</div>
      <div className="base-transition z-10 bg-transparent absolute top-2 left-5">
        문의하기
      </div>
      <div
        className={`
          bg-blue-600 w-full h-full absolute top-0 left-0
          base-transition
          ${isHovered ? 'translate-x-0 translate-y-0' : '-translate-x-28 -translate-y-12'} `}
      />
    </div>
  );
};

export default ContactBtn;
