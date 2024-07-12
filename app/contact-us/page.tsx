import { Guide, InputForms } from '@/app/contact-us/components';

export default function Home() {
  return (
    <main className="contact-us">
      <div className="flex flex-row w-full flex-wrap">
        <Guide />
        <InputForms />
      </div>
    </main>
  );
}
