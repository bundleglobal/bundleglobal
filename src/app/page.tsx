import Image from 'next/image';
import { Globe } from './components/globe';

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <Globe />
      <div className='fixed select-none font-mono'>bundle.global</div>
    </main>
  );
}
