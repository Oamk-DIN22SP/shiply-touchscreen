"use client";
import useLocation from "@/hooks/use-location";
import Locker from "./locker";
import useCabinet from "@/hooks/use-cabinet";
import Button from "../ui/button";
import LockerOperations from "./operation";
import LockerLocationDetails from "./locker-location";
import LockerForm from "./locker-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import getCabinets from "@/actions/get-cabinets";

const Lockers = () => {
  const router = useRouter();
  const cabinetStore = useCabinet();
  const locationStore = useLocation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!locationStore.active) {
      router.push("/");
    }
    const fetchData = async () => {
      try {
        if (locationStore.active) {
          const cabinets = await getCabinets(locationStore.active.id);
          cabinetStore.setState({ data: cabinets });
        }
      } catch (error) {
        console.error("Error fetching cabinets:", error);
        toast.error("Error fetching cabinets");
      }
    };

    fetchData();
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <LockerLocationDetails
        title={locationStore?.active?.title || ""}
        address={locationStore?.active?.address || ""}
      />

      <div className="py-4 flex gap-4 flex-wrap items-center justify-center">
        {cabinetStore?.data?.map((cabinet) => (
          <Locker key={cabinet.id} cabinet={cabinet} />
        ))}
      </div>

      {/* <LockerOperations
        btnText="Close Cabinet Door"
        title="Door 10 is open for Delivery!"
        subtitle="Take the sticker specifically generated for your parcel and stick it on your package. Touch your cabinet number to generate sticker again."
        smallText="Touch if the drop-off process is completed. This will lock the cabinet door. "
        onBtnClick={() => {}}
      /> */}

      <LockerForm />
    </div>
  );
};

export default Lockers;
