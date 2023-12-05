"use client";

import { useRouter } from "next/navigation";
import Locations from "@/components/location/locations";
import Button from "@/components/ui/button";

export const revalidate = 0;
const HomePage = async () => {
  const router = useRouter();
  return (
    <div>
      <div className="pb-6">
        <h1 className="text-[23px] font-bold leading-8 text-[#4A4A4A]">
          Choose location
        </h1>
        <h2 className="text-[16px] font-semibold leading-6">
          This is a mere representation of the real-world location system and
          touch screen. Please choose the center where you will drop off/pick up
          your package.
        </h2>
      </div>
      <Locations />
      <div className="flex flex-col items-center justify-center gap-2 py-8">
        <Button
          onClick={() => router.push("/lockers")}
          className="px-6 py-2 w-fit font-bold bg-[#1D1D1D]"
        >
          GO
        </Button>
        <small>This will take you to your parcel center!</small>
      </div>
    </div>
  );
};

export default HomePage;
