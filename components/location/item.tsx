"use client";

import useLocation from "@/hooks/use-location";
import { cn } from "@/lib/utils";
import { Location } from "@/types";
import Button from "../ui/button";
import { useEffect, useState } from "react";
interface LocationItemProps {
  location: Location;
}
const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("");
  useEffect(() => {
    const updateBreakpoint = () => {
      const screenWidth = window.innerWidth;

      // Check Tailwind CSS breakpoints
      if (screenWidth >= 1280) {
        setCurrentBreakpoint("lg");
      } else if (screenWidth >= 1024) {
        setCurrentBreakpoint("md");
      } else if (screenWidth >= 768) {
        setCurrentBreakpoint("sm");
      } else {
        setCurrentBreakpoint("xs");
      }
    };

    // Initial call
    updateBreakpoint();

    // Event listener for window resize
    window.addEventListener("resize", updateBreakpoint);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  const locationStore = useLocation();

  const setLocation = async () => {
    locationStore.setActive(location);
  };

  return (
    <div
      className={cn(
        "flex flex-row gap-3 shadow-md items-center hover:cursor-pointer h-[91px] hover:bg-[#D4DCFB] p-2 md:p-4 border rounded-sm bg-[#E2E7FD]",
        location?.id === locationStore.active?.id &&
          "bg-[#727EAF] text-white hover:bg-[#727EAF]"
      )}
      onClick={setLocation}
    >
      <p
        className={cn(
          "bg-[#979797] flex justify-center items-center text-white w-[60px] md:w-[68.33px] text-center border rounded-[2px] text-[18px] md:text-[58px] md:h-[70px]",
          location?.id === locationStore.active?.id && "bg-[#444B68] text-white"
        )}
      >
        {location?.id}
      </p>
      <p className="text-[12px] md:text-[18px] font-semibold max-w-[325px]">
        {
          currentBreakpoint === "xs" || currentBreakpoint === "sm"
            ? `${location?.title}`
            : `${location?.title} - ${location?.address}`
        }
      </p>
      <Button
        className={cn(
          "ml-auto shadow-md md:px-6 md:py-2 text-xs md:text-sm w-fit rounded font-bold text-[#686868] bg-[#F3F3F3]",
          location?.id === locationStore.active?.id && "bg-[#444B68] text-white"
        )}
      >
        {location?.id === locationStore.active?.id ? "Chosen" : "Choose"}
      </Button>
    </div>
  );
};

export default LocationItem;
