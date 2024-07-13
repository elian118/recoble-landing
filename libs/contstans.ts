import { Menu } from '@/libs/types';

type Routes = {
  [key: string]: boolean;
};

export const publicUrls: Routes = {
  '/': true,
  '/about': true,
  '/pricing': true,
  '/contact-us': true,
};

export const menus: Menu[] = [
  { name: 'Home', isMain: true, pathName: '/' },
  { name: 'About', isMain: true, pathName: '/about' },
  { name: 'Pricing', isMain: true, pathName: '/pricing' },
  { name: 'Contact us', isMain: false, pathName: '/contact-us' },
];

export enum INVALID {
  TOO_SHORT = '너무 짧습니다.',
  TOO_LONG = '너무 깁니다.',
  EMAIL = '잘못된 이메일 형식입니다.',
  STRING = '문자여야 합니다.',
  INPUT = '입력해주세요.',
}
