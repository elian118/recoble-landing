import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문의하기',
  description:
    '3개월간 레코블을 무료로 사용해보세요 !!추가비용은 없어요!! 기본 정보를 입력하시면 전담 컨설턴트가 고객의 고민과 문제를 파악해 규모/상황별 활용 방안을 안내해드려요.',
  authors: [{ name: 'elian118', url: 'https://github.com/elian118' }],
  creator: 'Rye & Catchers',
};

const ContactUsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default ContactUsLayout;
