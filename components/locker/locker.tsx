import useCabinet from "@/hooks/use-cabinet";
import { cn } from "@/lib/utils";
import { Cabinets } from "@/types";

interface LockerProps {
  cabinet: Cabinets;
}
const Locker: React.FC<LockerProps> = ({ cabinet }) => {
  const cabinetStore = useCabinet();

  const { activeCabinetId, state } = cabinetStore;
  const { id } = cabinet;

  console.log(cabinetStore);
  return (
    <div
      className={cn(
        "w-[50px] h-[50px] md:w-[120px] md:h-[120px] flex bg-[#E2E7FD] items-center justify-center rounded hover:cursor-pointer font-bold md:text-[58px] text-[#4A4A4A]",
        id === activeCabinetId && state === "locked" && "bg-[#F53D3D]",
        id === activeCabinetId && (state === "open-drop" || state === "open-pick" ) && "bg-[#A5F366]", 
      )}
    >
      {cabinet?.number}
    </div>
  );
};

export default Locker;
