import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export type Description = {
  title: string;
  titleColor: string;
  comment: ReactNode;
  imgSrc: StaticImageData;
};
