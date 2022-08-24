import { useState } from 'react';

const NavItems: { label: string; href: string }[] = [
  { label: 'Meet the Staff', href: '/staff' },
  { label: 'About Us', href: '/about' },
  { label: 'Archive', href: '/archive' },
];

const Navbar = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className='flex items-center justify-between overflow-hidden bg-pink-400 p-4 text-white shadow-2xl'>
        <a href='/'>
          <div className='ml-4 flex items-center justify-between gap-4'>
            <img src='/icons/cupcake.svg' alt='Scribe Logo' width={60} height={60} />
            <p className='text-3xl font-extralight decoration-2 transition duration-75 hover:underline active:text-black'>
              The Scribe FPS
            </p>
          </div>
        </a>
        <div className='mr-4 hidden items-center justify-between gap-16 md:flex'>
          {NavItems.map(({ label, href }) => (
            <a key={label} href={href}>
              <p className='text-xl transition duration-75 hover:underline active:text-black'>{label}</p>
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
        className='absolute z-10 flex h-full w-1/4 flex-col gap-6 overflow-hidden border bg-pink-400 '
      >
        {NavItems.map(({ label, href }) => (
          <a
            className='pl-6 text-xl font-light text-white decoration-2 transition duration-75 hover:underline active:text-black'
            key={label}
            href={href}
          >
            {label}
          </a>
        ))}
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
