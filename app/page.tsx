import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MobileContainer from '@/app/components/mobile-container';
import DesktopContainer from '@/app/components/desktop-container';

export default function Home() {
  return (
    <>
      <MobileContainer />
      <DesktopContainer />
    </>
  );
}
