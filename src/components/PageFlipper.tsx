import { useState } from 'react';

interface PageFlipperProps {
  volume: string;
  issue: number;
  pages: any[];
  numPages: number;
}

const PageSizes: {
  [key: string]: number;
} = {
  XL: 1056,
  LG: 800,
  MD: 640,
  SM: 480,
};
const PageFlipper = ({ volume, issue, pages, numPages }: PageFlipperProps) => {
  const widthFromHeight = (height: number) => Math.floor((height * 8.5) / 11);
  const [page, setPage] = useState(0);
  const [height, setHeight] = useState<number>(PageSizes.LG);
  console.log(Object.keys(PageSizes));

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
    <>
      <div className='grid w-full grid-cols-4 gap-2 px-6 py-4'>
        {Object.keys(PageSizes).map((pageSize) => {
          return (
            <button className='rounded-xl bg-pink-600' onClick={() => setHeight(PageSizes[pageSize])}>
              {pageSize}
            </button>
          );
        })}
      </div>
      <div className='flex items-center justify-center gap-6 p-6'>
        <img onClick={prevPage} className='cursor-pointer' width={40} height={40} src='/icons/arrow-left.svg' />
        {pages[page] && <img height={height} width={widthFromHeight(height)} src={pages[page].pageUrl} />}
        <img onClick={nextPage} className='cursor-pointer' width={40} height={40} src='/icons/arrow-right.svg' />
      </div>
    </>
  );
};

export default PageFlipper;
