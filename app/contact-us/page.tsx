import SwiperContainer from '@/app/contact-us/components/swiper-container';
import DesktopContainer from '@/app/contact-us/components/desktop-container';

export default function Home() {
  return (
    <main className="contact-us">
      <DesktopContainer />
      <SwiperContainer />
    </main>
  );
}
