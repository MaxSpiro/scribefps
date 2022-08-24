import { useState } from 'react';

interface PageFlipperProps {
  volume: string;
  issue: number;
  pages: number;
}
const PageFlipper = ({ volume, issue, pages }: PageFlipperProps) => {
  const [page, setPage] = useState(1);

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };
  return (
    <div className='flex items-center justify-center gap-6 p-6'>
      <img onClick={prevPage} className='cursor-pointer' width={40} height={40} src='/icons/arrow-left.svg' />
      <img src={`/vol${volume}/issue${issue}/${page}.png`} />
      <img onClick={nextPage} className='cursor-pointer' width={40} height={40} src='/icons/arrow-right.svg' />
    </div>
  );
};

export default PageFlipper;
