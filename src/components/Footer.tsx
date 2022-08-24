import igIcon from '/icons/instagram.svg';
const Footer = () => {
  return (
    <div className='flex w-full justify-between bg-pink-300 px-6 py-2 font-light'>
      <p className='text-2xl'>Francis Parker School - Since 1912</p>
      <p className='mr-4 ml-auto text-lg'>Follow us on Instagram!</p>
      <img src={igIcon} alt='instagram logo' />
    </div>
  );
};

export default Footer;
