import React from 'react';

const Spinner = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="border-4 border-blue-100 size-6 rounded-full relative">
        <div className="border-r-4 border-b-4 border-blue-500 size-6 rounded-full animate-spin absolute top-[-4px] left-[-4px]" />
      </div>
    </div>
  );
};

export default Spinner;
