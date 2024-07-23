import React from 'react';
import { Guide, InputForms } from '@/app/contact-us/components/views';

const DesktopContainer = () => {
  return (
    <div className="hidden lg:flex flex-row w-full flex-wrap">
      <Guide />
      <InputForms />
    </div>
  );
};

export default DesktopContainer;
