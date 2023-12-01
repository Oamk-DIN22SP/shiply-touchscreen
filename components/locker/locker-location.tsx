interface LockerLocationProps {
  title: string;
  address: string;
}
const LockerLocationDetails: React.FC<LockerLocationProps> = ({
  title,
  address,
}) => {
  return (
    <div className="pb-2">
      <h1 className="text-[23px] font-bold leading-8 text-[#4A4A4A]">
        {title}
      </h1>
      <h2 className="text-[16px] font-semibold leading-6">
        {address}
      </h2>
    </div>
  );
};

export default LockerLocationDetails;
