import { Menu } from '@/libs/types';

export const menus: Menu[] = [
  { name: 'Home', isMain: true, pathName: '/' },
  { name: 'About', isMain: true, pathName: '/about' },
  { name: 'Pricing', isMain: true, pathName: '/pricing' },
  { name: 'Contact us', isMain: false, pathName: '/contact-us' },
];
