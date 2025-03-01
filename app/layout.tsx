import type { Metadata } from 'next';
import './globals.css';
import './home.css';
import Footer from '@/components/footer';
import ClientLayer from '@/components/client-layer';
import Modal from '@/components/modal';
import { ReactNodeLayout } from '@/libs/types';
import MenuBar from '@/components/menu-bar';
import { GoogleAnalytics } from '@next/third-parties/google';
import localFont from 'next/font/local';

// const inter = Inter({ subsets: ['latin'] });

// const nanumGothic = Nanum_Gothic({
//   subsets: ['latin'],
//   weight: ['400', '700', '800'],
//   style: ['normal'],
//   variable: '--nanumgothic',
// });

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.ttf',
  variable: '--pretendard',
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

export default function RootLayout({ children }: Readonly<ReactNodeLayout>) {
  return (
    /*
      모달 띄움(showModal() API 실행)은 최상단 html 태그에서 실행되므로,
      모달 띄움 직후 스크롤바 추가 생성으로 인한 화면 추가 밀림을 방지하려면
      overflow-y-scroll 역시 최상단 html 요소에 삽입해야 한다. */
    <html lang="en" data-theme="myTheme" className="overflow-y-scroll">
      <body className={`${pretendard.variable} relative`}>
        <ClientLayer>
          <MenuBar />
          {children}
          <Modal />
        </ClientLayer>
        <Footer />
        <GoogleAnalytics gaId="G-HPLS2B6GPV" />
      </body>
    </html>
  );
}
