import React from 'react';
import Link from 'next/link';

const ContactBtn = () => {
  return (
    <Link
      className="rounded-full border-gray-900 border-[1px] px-5 py-2 font-semibold cursor-pointer"
      href={'/contact-us'}
    >
      문의하기
    </Link>
  );
};

export default ContactBtn;
