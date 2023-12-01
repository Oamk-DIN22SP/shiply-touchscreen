import useCabinet from "@/hooks/use-cabinet";
import { cn } from "@/lib/utils";
import { Cabinets } from "@/types";

interface LockerProps {
  cabinet: Cabinets;
}
const Locker: React.FC<LockerProps> = ({
  cabinet,
}) => {
  const cabinetStore = useCabinet(); 
  
  const getStatusColor = (status: String) => {
    switch (status) {
      case "empty-locker":
        return ["bg-[#A5F366]", "hover:bg-[#AEEEA0]"];
      case "ready-to-pickup":
        return ["bg-[#F53D3D]", "hover:bg-[#F3C1FE]"];
      case "to-be-delivered":
        return ["bg-[#F53D3D]", "hover:bg-[#A5F366]"];
      default:
        return ["", ""];
    }
  };
  
  const [bgColor, hoverColor] = getStatusColor(cabinet?.status);

  const changeDetailsState = () => {
    cabinetStore.setState({ state: cabinet?.status });
    cabinetStore.setState({ activeCabinetId: cabinet?.id });
  }
  return ( 
    <div className={`w-[120px] h-[120px] bg-[#E2E7FD] flex items-center justify-center rounded hover:cursor-pointer font-bold text-[58px] text-[#4A4A4A] ${bgColor} ${hoverColor}`} onClick={changeDetailsState}>
      {cabinet?.id}
    </div>
   );
}
 
export default Locker;