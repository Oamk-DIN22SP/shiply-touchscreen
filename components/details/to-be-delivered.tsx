"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import useCabinet from "@/hooks/use-cabinet";
import { Dot } from "lucide-react";

const ToBeDelivered = () => {
  const cabinetStore = useCabinet();

  const onPickUp = () => {
    // api call to update status
    cabinetStore.setState({ state: "picked-up" });
    // find id in store data and update status
    cabinetStore.data.find((cabinet) => {
      if (cabinet.id === cabinetStore.activeCabinetId) {
        cabinet.status = "empty-locker";
      }
    });
  };
  return (
    <>
      <div className="text-[#4A4A4A] text-[16px]">
        <h1 className="text-[23px] font-bold leading-8">To be delivered!</h1>
        <h2 className="font-normal leading-6">
          This parcel should be delivered to{" "}
          <span className="font-bold">LOCKER CENTER 5</span>.
        </h2>
        <p className="py-4">Follow the instructions to complete: </p>
        <ul>
          <li className="py-1 font-semibold">- Pick the parcel from the cabinet and close the door </li>
          <li className="py-1 font-semibold">- Use the lock button to change the status</li>
          <li className="py-1 font-semibold">- Check the cabinet color from the system</li>
          <li className="py-1 font-semibold">- Deliver the parcel to related Locker center</li>
        </ul>
        <p className="p-8 pb-4 text-center">
          Once cabinet is locked cabinet color in system will change from red to
          green as below;
        </p>
        <Image
          src="/temp/to_be_delivered.png"
          alt="Empty Cabinet"
          width={214}
          height={40}
          className="mx-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button onClick={onPickUp} className="w-fit mt-6 bg-[#872222]">
          Lock
        </Button>
        <small>Finalise the delivery!.</small>
      </div>
    </>
  );
};

export default ToBeDelivered;
