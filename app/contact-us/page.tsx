import { Guide, InputForms } from '@/app/contact-us/components';

export default function Home() {
  return (
    <main className="flex flex-col items-center h-auto bg-gray-100 w-full">
      <div className="flex flex-row w-full flex-wrap">
        <Guide />
        <InputForms />
      </div>
    </main>
  );
}
