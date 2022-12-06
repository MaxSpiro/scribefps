import { useEffect, useState } from 'react';

interface PageFlipperProps {
  volume: string;
  issue: number;
  pages: any[];
  numPages: number;
}

const PageFlipper = ({ volume, issue, pages, numPages }: PageFlipperProps) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [inputValue, setInputValue] = useState((pageIndex + 1).toString());

  const currentPage = pages[pageIndex];

  const height = 800; // or 1056 or 640
  const width = Math.floor((height * 8.5) / 11);
  const arrowSize = height / 30;

  const prevPage = () => {
    if (pageIndex > 0) {
      const newPageIndex = pageIndex - 1;
      setPageIndex(newPageIndex);
      setInputValue((newPageIndex + 1).toString());
    }
  };
  const nextPage = () => {
    if (pageIndex < numPages - 1) {
      const newPageIndex = pageIndex + 1;
      setPageIndex(newPageIndex);
      setInputValue((newPageIndex + 1).toString());
    }
  };

  const handleChange = (value: string) => {
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
    if (Number(value)) {
      const index = Number(value) - 1;
      if (index <= 0) {
        setPageIndex(0);
        setInputValue('1');
      } else if (index >= numPages) {
        setPageIndex(numPages - 1);
        setInputValue(numPages.toString());
      } else {
        setPageIndex(index);
      }
    }
  };
  return (
    <>
      <div className='flex items-center justify-center md:gap-6'>
        <img
          onClick={prevPage}
          className='cursor-pointer'
          width={arrowSize}
          height={arrowSize}
          src='/icons/arrow-left.svg'
        />
        {currentPage && <img height={height} width={width} src={currentPage.pageUrl} />}
        <img
          onClick={nextPage}
          className='cursor-pointer'
          width={arrowSize}
          height={arrowSize}
          src='/icons/arrow-right.svg'
        />
      </div>
      <div className='mt-4 flex items-center justify-center gap-2'>
        <p className='text-2xl'>Jump to page:</p>
        <input
          className='input flex max-w-[60px] items-center justify-center'
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default PageFlipper;
