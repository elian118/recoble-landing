import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';
import Loading from '@/components/loading';

const DynamicHomeContainer = dynamic(() => import('./components/home-container'), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  return <DynamicHomeContainer />;
}
