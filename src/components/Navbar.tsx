const NavItems: { label: string; href: string }[] = [
  { label: 'Meet the Staff', href: '/staff' },
  { label: 'About Us', href: '/about' },
  { label: 'Archive', href: '/archive' },
];

const Navbar = () => {
  return (
    <div className='flex items-center justify-between overflow-hidden bg-pink-400 p-4 text-white shadow-2xl'>
      <a href='/'>
        <div className='ml-4 flex items-center justify-between gap-4'>
          <img src='/icons/cupcake.svg' alt='Scribe Logo' width={60} height={60} /> 
          <p className='text-3xl font-extralight decoration-2 transition duration-75 hover:underline active:text-black'>
            The Scribe FPS
          </p>
        </div>
      </a>
      <div className='mr-4 flex items-center justify-between gap-16'>
        {NavItems.map(({ label, href }) => (
          <a key={label} href={href}>
            <p className='text-xl transition duration-75 hover:underline active:text-black'>{label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
