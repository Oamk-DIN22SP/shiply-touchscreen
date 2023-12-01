import useLocation from "@/hooks/use-location";
import { cn } from "@/lib/utils";
import { Location } from "@/types";
import Button from "../ui/button";
import useCabinet from "@/hooks/use-cabinet";
import getCabinets from "@/actions/get-cabinets";
interface LocationItemProps {
  location: Location;
}
const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
  const locationStore = useLocation();
  const cabinetStore = useCabinet();

  const setLocation = async () => {
    locationStore.setActive(location);
    const cabinets = await getCabinets(location?.id);
    cabinetStore.setState({ data: cabinets });
  };

  return (
    <div
      className={cn(
        "flex flex-row gap-3 shadow-md items-center hover:cursor-pointer h-[91px] hover:bg-[#D4DCFB] p-4 border rounded-sm bg-[#E2E7FD]",
        location?.id === locationStore.active?.id &&
          "bg-[#727EAF] text-white hover:bg-[#727EAF]"
      )}
      onClick={setLocation}
    >
      <p
        className={cn(
          "bg-[#979797] flex justify-center items-center text-white w-[68.33px] text-center border rounded-[2px] text-[58px] h-[70px]",
          location?.id === locationStore.active?.id && "bg-[#444B68] text-white"
        )}
      >
        {location?.id}
      </p>
      <p className="text-[18px] font-semibold max-w-[325px]">
        {location?.title +", "+ location?.address}
      </p>
      <Button
        className={cn(
          "ml-auto shadow-md px-6 py-2 w-fit rounded font-bold text-[#686868] bg-[#F3F3F3]",
          location?.id === locationStore.active?.id && "bg-[#444B68] text-white"
        )}
      >
        {location?.id === locationStore.active?.id ? "Chosen" : "Choose"}
      </Button>
    </div>
  );
};

export default LocationItem;
