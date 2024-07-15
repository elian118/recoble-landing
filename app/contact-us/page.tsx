import { Guide, InputForms } from '@/app/contact-us/components';

export default function Home() {
  return (
    <main className="contact-us">
      <div className="hidden lg:flex flex-row w-full flex-wrap">
        <Guide />
        <InputForms />
      </div>
      <div className="lg:hidden carousel carousel-vertical w-full h-screen">
        <div className="carousel-item">
          <Guide />
        </div>
        <div className="carousel-item">
          <InputForms />
        </div>
      </div>
    </main>
  );
}
