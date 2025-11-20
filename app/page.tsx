import Image from 'next/image';
import Countdown from './component/Countdown';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black bg-[url("/img/Kambodja.png")] bg-cover bg-center'>
      <Countdown target='2026-02-05T00:00:00' />
    </div>
  );
}
