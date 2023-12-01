import Button from "../ui/button";
interface LockerOperationsProps {
  btnText: string;
  title: string;
  subtitle: string;
  smallText: string;
  onBtnClick: () => void;
}
const LockerOperations: React.FC<LockerOperationsProps> = ({
  btnText,
  title,
  subtitle,
  smallText,
  onBtnClick
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8">
      <h1 className="text-[28px] font-bold leading-8 text-[#4A4A4A]">
        {title}
      </h1>
      <h2 className="text-[16px] font-semibold leading-6 text-center">
        {subtitle}
      </h2>
      <Button className="px-6 py-3 mt-5 mb-2 w-fit font-bold bg-[#1D1D1D]" onClick={onBtnClick}>{btnText}</Button>
      <small>{smallText}</small>
    </div>
  );
};

export default LockerOperations;
