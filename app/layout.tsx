import type { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';
import './globals.css';
import MenuBar from '@/components/MenuBar';
import Footer from '@/components/Footer';

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
    <html lang="en">
      <body className={`${nanumGothic.variable} relative overflow-y-scroll`}>
        <MenuBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
