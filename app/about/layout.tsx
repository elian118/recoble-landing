import { Metadata } from 'next';
import './about.css';

export const metadata: Metadata = {
  title: '레코블이란?',
  description:
    '레코블은 부푼 꿈을 안고 시작된 우리의 서비스를 운영하면서 만났던 수 많은 문제점에서 시작되었습니다. 우리와 같은 문제들이 반복되지 않도록 레코블을 사용해보세요!',
  authors: [{ name: 'elian118', url: 'https://github.com/elian118' }],
  creator: 'Rye & Catchers',
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default AboutLayout;
