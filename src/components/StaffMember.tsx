interface StaffMemberProps {
  name: string;
  subtext: string;
  imgSrc: string;
  size: number;
  bg: string;
}
const StaffMember = ({ name, subtext, imgSrc, size, bg }: StaffMemberProps) => {
  return (
    <div className={`col-span-2 flex flex-col items-center rounded-xl bg-${bg} p-4`}>
      <div className='flex h-48 items-center justify-center overflow-hidden rounded-xl'>
        <img width={size} className='object-cover' src={imgSrc} />
      </div>
      <p className='mt-2 text-center text-3xl text-white'>{name}</p>
      <p className='text-lg font-extralight text-white'>{subtext}</p>
    </div>
  );
};

export default StaffMember;
