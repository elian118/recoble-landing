import { Answer, Banner, QList } from '@/app/about/components';
import FooterInSection from '@/components/footer-in-section';
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center justify-between bg-white">
      <div className="carousel carousel-vertical w-full h-screen">
        <div className="carousel-item">
          <Banner />
        </div>
        <div className="carousel-item flex justify-center items-center w-full h-screen">
          <QList />
        </div>
        <div className="carousel-item flex flex-col justify-between items-center w-full h-screen">
          <Answer />
          <div className="w-full text-start">
            <FooterInSection />
          </div>
        </div>
      </div>
    </main>
  );
}
