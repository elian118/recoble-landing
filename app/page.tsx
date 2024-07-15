import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import dynamic from 'next/dynamic';
import PageLoadingView from '@/components/page-loading-view';

const DynamicHomeContainer = dynamic(() => import('./components/home-container'), {
  ssr: false,
  loading: () => <PageLoadingView />,
});

export default function Home() {
  return <DynamicHomeContainer />;
}
