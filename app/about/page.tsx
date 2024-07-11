import { Answer, Banner, QList } from '@/app/about/components';

export default function Home() {
  return (
    <main className="flex flex-col items-center text-center justify-between bg-white">
      <Banner />
      <QList />
      <Answer />
    </main>
  );
}
