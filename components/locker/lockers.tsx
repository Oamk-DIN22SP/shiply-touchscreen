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

  const onVerify = (cabinet_id: string) => {
    if (cabinet_id) {
      lockerOperations("open", cabinet_id);
      cabinetStore.setState({ form: false });
      cabinetStore.setState({ state: "open" });
      cabinetStore.setState({ activeCabinetId: cabinet_id });
    }
  };

  const lockerOperations = (status: string, cabinet_id: string) => {
    if (status === "open") {
      cabinetStore.setState({ operations: {
        btnText: "Close Cabinet Door",
        title: `Door ${cabinet_id} is open for Delivery!`,
        subtitle: "Take the sticker specifically generated for your parcel and stick it on your package. Touch your cabinet number to generate sticker again.",
        smallText: "Touch if the drop-off process is completed. This will lock the cabinet door. ",
      }});
    }
  };

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

      {cabinetStore?.form ? (
        <LockerForm 
        locationId={locationStore?.active?.id || ""}
        onVerify={onVerify}
        />
      ) : (
        <LockerOperations
          btnText= {cabinetStore?.operations?.btnText || ""}
          title= {cabinetStore?.operations?.title || ""}
          subtitle= {cabinetStore?.operations?.subtitle || ""}
          smallText= {cabinetStore?.operations?.smallText || ""}
        />
      )}
    </div>
  );
};

export default Lockers;
