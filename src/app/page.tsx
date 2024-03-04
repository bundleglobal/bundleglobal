import { CobeGlobe } from './components/cobe';
// import { Globe } from './components/globe';

export default function Home() {
  return (
    <main className='flex min-h-[100dvh] max-h-[100dvh] text-white text-sm md:text-base'>
      <div className='fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
        {/* <Globe /> */}
        <CobeGlobe />
      </div>
      <div className='fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 select-none font-mono text-center max-w-[80dvw]'>
        <div>
          bundle.global <br />
          BUNDLE SP. Z O.O. <br />
          <a href='mailto:contact@bundle.global'>contact@bundle.global</a>{' '}
          <br />
          <a href='https://github.com/bundleglobal'>github</a> <br />
        </div>

        <div className='flex flex-col md:flex-row gap-4 md:gap-8 mt-8 md:justify-center'>
          <div>
            Kacper <br />
            <a href='mailto:kacper@bundle.global'>kacper@bundle.global</a>{' '}
            <br />
            {/* <a href='https://twitter.com/nightspite3'>twitter</a> <br /> */}
            <a href='https://github.com/nightspite'>github</a>
          </div>
          <div>
            Marcel <br />
            <a href='mailto:kacper@bundle.global'>marcel@bundle.global</a>{' '}
            <br />
            <a href='https://github.com/winterodin'>github</a> <br />
          </div>
        </div>

        <div className='mt-8'>
          <div>Projects</div>
          <div>
            <a href='https://bundle.social'>bundle.social</a>
            <p className='text-zinc-400'>
              Bundle your social media presence
              <br /> into a single app.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
