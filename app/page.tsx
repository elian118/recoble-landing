import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperContainer from '@/app/components/swiper-container';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white">
      {/*<HomeContainer />*/}
      <SwiperContainer />
    </main>
  );
}
