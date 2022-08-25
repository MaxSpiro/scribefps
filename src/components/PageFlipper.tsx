import { useState } from 'react';

interface PageFlipperProps {
  volume: string;
  issue: number;
  pages: any[];
  numPages: number;
}
const PageFlipper = ({ volume, issue, pages, numPages }: PageFlipperProps) => {
  const [page, setPage] = useState(0);

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page < numPages - 1) {
      setPage(page + 1);
    }
  };
  return (
    <div className='flex items-center justify-center gap-6 p-6'>
      <img onClick={prevPage} className='cursor-pointer' width={40} height={40} src='/icons/arrow-left.svg' />
      {pages[page] && <img src={pages[page].pageUrl} />}
      <img onClick={nextPage} className='cursor-pointer' width={40} height={40} src='/icons/arrow-right.svg' />
    </div>
  );
};

export default PageFlipper;
