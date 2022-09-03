import { useEffect, useState } from 'react';

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
  const [page, setPage] = useState(0);
  const [height, setHeight] = useState<number>(PageSizes.LG);
  const width = Math.floor((height * 8.5) / 11);
  const arrowSize = height / 30;

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
      <div className='my-2 grid w-full grid-cols-4 gap-2 px-6'>
        {Object.keys(PageSizes).map((pageSize) => {
          return (
            <button
              className={`rounded-xl ${height === PageSizes[pageSize] ? 'bg-gray-400' : 'bg-gray-300'}`}
              onClick={() => setHeight(PageSizes[pageSize])}
            >
              {pageSize}
            </button>
          );
        })}
      </div>
      <div className='flex items-center justify-center md:gap-6'>
        <img
          onClick={prevPage}
          className='cursor-pointer'
          width={arrowSize}
          height={arrowSize}
          src='/icons/arrow-left.svg'
        />
        {pages[page] && <img height={height} width={width} src={pages[page].pageUrl} />}
        <img
          onClick={nextPage}
          className='cursor-pointer'
          width={arrowSize}
          height={arrowSize}
          src='/icons/arrow-right.svg'
        />
      </div>
    </>
  );
};

export default PageFlipper;
