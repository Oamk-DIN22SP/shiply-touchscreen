import toast from "react-hot-toast";
import Button from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

const LockerForm = () => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [deliveryNumber, setDeliveryNumber] = useState("");

  const onSubmit = async () => {
    try {
      setLoading(true);
      if (!code) {
        toast.error("Please select a drop off point.");
        return;
      }
      if (!deliveryNumber) {
        toast.error("Please enter a delivery number.");
        return;
      }
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-[70%] pt-4 mx-auto">
      <p className="text-[#686868] text-[16px] font-semibold text-center">
      Please fill the information below to interact with your cabinet.
      </p>
      <div className="py-4 px-12 flex flex-col justify-center items-center gap-2">   
        <Input
          type="text"
          placeholder="Delivery Number"
          className="shadow-md"
          value={deliveryNumber}
          onChange={(e) => setDeliveryNumber(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Passcode"
          className="shadow-md"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button
          onClick={onSubmit}
          disabled={loading}
          className="w-fit bg-[#42820F] px-8 font-bold shadow-md"
        >
          OK
        </Button>
      </div>
    </div>
  );
};

export default LockerForm;
