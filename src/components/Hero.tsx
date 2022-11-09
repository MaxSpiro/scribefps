import Typical from 'react-typical';

const Hero = () => {
  return (
    <div className='flex flex-1 flex-col justify-center gap-6 text-black'>
      <div>
        <p className='text-4xl font-bold text-pink-400 md:mb-[0.75rem] md:text-5xl'>The Scribe FPS</p>
        <p className='text-4xl font-bold md:text-5xl'>
          <Typical steps={['Online', 3000, '', 2000]} loop={Infinity} />
        </p>
      </div>
      <p className='font-light'>The place for all your favorite articles</p>
      <div className='flex gap-6'>
        <a href='/archive'>
          <button className='rounded-full bg-pink-400 py-2 px-4 text-white transition hover:bg-pink-500'>
            Latest Issue
          </button>
        </a>
        <a href='/about'>
          <button className='rounded-full bg-slate-200 px-4 py-2 text-black transition hover:bg-slate-300'>
            About Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
