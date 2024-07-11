import React from 'react';

type BallProps = {
  size: 'size-2' | 'size-4' | 'size-6' | 'size-8' | 'size-10' | 'size-12';
  color:
    | 'via-yellow-400 to-yellow-800'
    | 'via-green-400 to-green-800'
    | 'via-blue-400 to-blue-800'
    | 'via-gray-100 to-gray-500';
  delay: 'delay-0' | 'delay-75' | 'delay-100' | 'delay-150' | 'delay-200' | 'delay-500';
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

export const Ball = ({ size, color, delay, top, bottom, left, right }: BallProps) => {
  return (
    <div
      className="absolute appear"
      style={{
        top: top,
        bottom: bottom,
        left: left,
        right: right,
      }}
    >
      <div
        className={`${size} rounded-full shadow-lg bouncing-ball ${delay}
            bg-gradient-to-br from-white ${color}`}
      />
    </div>
  );
};
