import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '요금안내',
  description:
    '기업의 단계별로 좀 더 세밀하고 합리적인 가격 정책으로 가격의 경쟁 우위를 확보하여 SMB 고객의 마케팅 비용정감을 돕습니다.',
  authors: [{ name: 'elian118', url: 'https://github.com/elian118' }],
  creator: 'Rye & Catchers',
};

const PricingLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default PricingLayout;
