"use client";
import useLocation from "@/hooks/use-location";
import Locker from "./locker";
import useCabinet from "@/hooks/use-cabinet";
import Button from "../ui/button";
import LockerOperations from "./operation";
import LockerLocationDetails from "./locker-location";
import LockerForm from "./locker-form";

const Lockers = () => {
  const cabinetStore = useCabinet();
  const locationStore = useLocation();
  return (
    <div>
      <LockerLocationDetails
        title="Market Street 9876F"
        address="Plaza Drive, Springfield, The Simpsons / Springfield"
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
