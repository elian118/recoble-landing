import type { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';
import './globals.css';
import './home.css';
import MenuBar from '@/components/menu-bar';
import Footer from '@/components/footer';
import ClientLayer from '@/components/client-layer';
import Modal from '@/components/modal';

// const inter = Inter({ subsets: ['latin'] });

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal'],
  variable: '--nanumgothic',
});

export const metadata: Metadata = {
  title: {
    template: '레코블 | %s',
    default: 'Recoble - 레코블',
  },
  description: '모든 이커머스 플랫폼의 성공전략, "레코블" 지금 바로 확인해보세요',
  icons: {
    icon: '/icon.png',
  },
  authors: [{ name: 'elian118', url: 'https://github.com/elian118' }],
  creator: 'Rye & Catchers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
      모달 띄움(showModal() API 실행)은 최상단 html 태그에서 실행되므로,
      모달 띄움 직후 스크롤바 추가 생성으로 인한 화면 추가 밀림을 방지하려면
      overflow-y-scroll 역시 최상단 html 요소에 삽입해야 한다. */
    <html lang="en" data-theme="myTheme" className="overflow-y-scroll">
      <body className={`${nanumGothic.variable} relative`}>
        <ClientLayer>
          <MenuBar />
          {children}
          <Modal />
        </ClientLayer>
        <Footer />
      </body>
    </html>
  );
}
