'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type ContactBtnProps = {
  setIsOpenMenu: (val: boolean) => void;
};

const ContactBtn = ({ setIsOpenMenu }: ContactBtnProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { push } = useRouter();

  const onClickMenuIcon = (pathName: string) => {
    push(pathName);
    setIsOpenMenu(false);
  };

  return (
    <div
      className="contact-btn text-gray-900 hover:text-white"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={() => onClickMenuIcon('/contact-us')}
    >
      <div className="invisible">문의하기</div>
      <div className="rapid-transition z-10 bg-transparent absolute top-2 left-0 w-full text-center">
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
