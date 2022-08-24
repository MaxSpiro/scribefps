import Link from 'next/link';
import Image from 'next/image';

interface CoverProps {
  released?: boolean;
  title: string;
  imgSrc: string;
  issueNum: number;
  volNum: string;
}

export const Cover = ({ released = false, title, imgSrc, issueNum, volNum }: CoverProps) => {
  return (
    <div className='align-center mx-12 mb-12 flex flex-col'>
      {released && imgSrc ? (
        <div className='shadow-lg'>
          <Link href={`/archive/${volNum}/${issueNum}`}>
            <a>
              <Image width={400} height={550} src={imgSrc} />
            </a>
          </Link>
        </div>
      ) : (
        <div className='h-96 w-72 border-4 border-dashed bg-pink-400' />
      )}
      <h1 className='mt-6 text-lg text-white'>
        {released ? `Issue ${issueNum} - ${title}` : 'Coming soon!'}
      </h1>
    </div>
  );
};
