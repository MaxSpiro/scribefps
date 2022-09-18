import { useState } from 'react';

const NavItems: { label: string; href: string; iconSrc: string }[] = [
  { label: 'Meet the Staff', href: '/staff', iconSrc: '/icons/person.svg' },
  { label: 'About Us', href: '/about', iconSrc: '/icons/group.svg' },
  { label: 'Archive', href: '/archive', iconSrc: '/icons/archive.svg' },
];

const Navbar = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='flex items-center justify-between overflow-hidden bg-pink-400 py-4 px-6 text-white shadow-2xl'>
        <a href='/'>
          <div className='ml-4 flex items-center justify-between gap-2'>
            <img src='/icons/cupcake.svg' alt='Scribe Logo' width={40} height={40} />
            <p className='text-2xl font-extralight decoration-2 transition duration-75 hover:underline active:text-black'>
              The Scribe FPS
            </p>
          </div>
        </a>
        <div className='mr-4 hidden items-center justify-between gap-16 md:flex'>
          {NavItems.map(({ label, href, iconSrc }) => (
            <a key={label} href={href} className='text-md btn btn-primary flex rounded-2xl p-2'>
              {/* <img src={iconSrc} width={25} /> */}
              {label}
            </a>
          ))}
        </div>
        <div onClick={() => setIsOpen((prev) => !prev)} className='group mr-4 cursor-pointer space-y-2 md:hidden'>
          <div className='h-0.5 w-8 bg-white transition duration-75 group-hover:bg-black'></div>
          <div className='h-0.5 w-8 bg-white transition duration-75 group-hover:bg-black'></div>
          <div className='h-0.5 w-8 bg-white transition duration-75 group-hover:bg-black'></div>
        </div>
      </div>
      <div
        style={{
          left: isOpen ? '0' : '-100%',
          transition: 'all .3s',
          visibility: !isOpen ? 'hidden' : 'visible',
        }}
        className='absolute top-0 z-10 flex h-screen w-screen flex-col gap-6 overflow-hidden border bg-pink-400 p-4 pr-6 pt-6 '
      >
        <div className='flex w-full justify-between'>
          <div className='flex items-center justify-between'>
            <a href='/'>
              <p className='flex gap-4 text-2xl font-extralight text-white decoration-2 transition duration-75 hover:underline active:text-black'>
                <img src='/icons/home.svg' width={25} />
                Home
              </p>
            </a>
          </div>
          <img className='cursor-pointer' src='icons/x.svg' width={25} onClick={() => setIsOpen(false)} />
        </div>
        <div className='flex flex-col gap-6'>
          {NavItems.map(({ label, href, iconSrc }) => (
            <a
              className='flex gap-4 text-xl font-light text-white decoration-2 transition duration-75 hover:underline active:text-black'
              key={label}
              href={href}
            >
              <img src={iconSrc} width={25} />
              {label}
            </a>
          ))}
        </div>
      </div>
      <div
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Navbar;
