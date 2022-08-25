interface CoverProps {
  released?: boolean;
  title: string;
  imgSrc: string;
  issueNum: number;
  volNum: string;
}

export const Cover = ({ released = false, title, imgSrc, issueNum, volNum }: CoverProps) => {
  return (
    <div className='my-6 flex flex-col'>
      {released && imgSrc ? (
        <div className='h-[32rem] shadow-lg'>
          <a href={`/archive/${volNum}/${issueNum}`}>
            <img src={imgSrc} className='h-full object-cover' />
          </a>{' '}
        </div>
      ) : (
        <div className='h-[32rem] border-4 border-dashed bg-pink-400' />
      )}
      <h1 className='mt-6 text-lg text-white'>{released ? `Issue ${issueNum} - ${title}` : 'Coming soon!'}</h1>
    </div>
  );
};
