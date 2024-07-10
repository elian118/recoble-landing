import type { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal'],
  variable: '--nanumgothic',
});

export const metadata: Metadata = {
  title: {
    template: '%s, 레코블',
    default: 'Recoble',
  },
  description: '레코블 인사이트로 고객을 놓치지 마세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nanumGothic.variable}`}>{children}</body>
    </html>
  );
}
