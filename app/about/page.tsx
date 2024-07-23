import React from 'react';
import AboutContainer from '@/app/about/components/about-container';

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center justify-between bg-white">
      <AboutContainer />
    </main>
  );
}
