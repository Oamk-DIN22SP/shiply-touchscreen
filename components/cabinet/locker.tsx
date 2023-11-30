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
        return ["bg-[#D5F9B8]", "hover:bg-[#AEEEA0]"];
      case "ready-to-pickup":
        return ["bg-[#F3C1FE]", "hover:bg-[#D9A8E6]"];
      case "to-be-delivered":
        return ["bg-[#FAA6A6]", "hover:bg-[#E18383]"];
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
    <div className={`w-[80px] h-[80px] bg-[#D5F9B8] flex items-center justify-center rounded hover:cursor-pointer font-bold ${bgColor} ${hoverColor}`} onClick={changeDetailsState}>
      {cabinet?.id}
    </div>
   );
}
 
export default Locker;