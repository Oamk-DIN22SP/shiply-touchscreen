"use client";

import { useEffect } from "react";
import useLocation from "@/hooks/use-location";
import getLocation from "@/actions/get-locations";
import LocationItem from "./item";

const Locations = () => {
  // hook to get data from store
  const locationStore = useLocation();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const locations = await getLocation();
        locationStore.setState({ data: locations });
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      {
        locationStore?.data?.length === 0 && (
          <div className="text-center py-20 flex justify-center items-center">
            <h1 className="text-[23px] font-bold leading-8 text-[#4A4A4A]">
              Backend API Not Connected
            </h1>
          </div>
        )
      }
      {
        locationStore?.data?.map((location) => (
          <LocationItem
            key={location.id}
            location={location}
          />
        ))
      }
    </div>
  );
};

export default Locations;
