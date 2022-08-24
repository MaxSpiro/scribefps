import { Cover } from './Cover';
interface VolumeProps {
  volNum: string;
  years: string;
}
export const Volume = ({ volNum, years }: VolumeProps) => {
  return (
    <div className='flex w-full flex-col items-center rounded-3xl bg-gray-500 p-6'>
      <h1 className='mb-6 text-center text-5xl text-white'>
        Volume {volNum.toUpperCase()} | {years}
      </h1>
      <div className='w-full bg-gray-400 p-[0.01rem]'></div>
      <div className='flex flex-wrap items-center justify-around'>
        <Cover released title='Gen Z' imgSrc='/covers/issue1-front.jpg' issueNum={1} volNum={volNum} />
        <Cover released title='Pop Culture' imgSrc='/covers/issue2-front.jpg' issueNum={2} volNum={volNum} />
        <Cover released title='The Scribble' imgSrc='/covers/issue3-front.jpg' issueNum={3} volNum={volNum} />
        <Cover released title='Senior' imgSrc='/covers/issue4-front.jpg' issueNum={4} volNum={volNum} />
      </div>
    </div>
  );
};
