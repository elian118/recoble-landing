import MobileSwiperContainer from '@/app/contact-us/components/mobile-swiper-container';
import DesktopContainer from '@/app/contact-us/components/desktop-container';

export default function Home() {
  return (
    <main className="contact-us">
      <DesktopContainer />
      <MobileSwiperContainer />
    </main>
  );
}
