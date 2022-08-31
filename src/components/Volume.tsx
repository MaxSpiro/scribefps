import { Cover } from 'components/Cover';
interface VolumeProps {
  volNum: string;
  years: string;
  issues: any[];
}
export const Volume = ({ volNum, years, issues }: VolumeProps) => {
  return (
    <div className='flex w-full flex-col items-center rounded-3xl bg-gray-500 p-6'>
      <h1 className='mb-6 text-center text-5xl text-white'>
        Volume {volNum.toUpperCase()} | {years}
      </h1>
      <div className='w-full bg-gray-400 p-[0.01rem]'></div>
      <div className='flex w-full flex-wrap items-center justify-around'>
        {issues.map((issue) => (
          <Cover
            released
            key={issue.name}
            title={issue.name}
            issueNum={issue.number}
            volNum={volNum}
            imgSrc={issue.coverUrl}
          />
        ))}
      </div>
    </div>
  );
};
