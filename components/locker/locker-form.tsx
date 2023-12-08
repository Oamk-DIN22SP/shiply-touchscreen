import toast from "react-hot-toast";
import Button from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import verifyDropOff from "@/actions/verify-drop";
import verifyPickUp from "@/actions/verify-pickup";
interface LockerFormProps {
  locationId: string;
  onVerify: (id: string, state: string) => void;
}
const LockerForm: React.FC<LockerFormProps> = ({ locationId, onVerify }) => {
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [deliveryNumber, setDeliveryNumber] = useState("");

  const onPickUpORDropOff = async () => {
    try {
      setLoading(true);
      if (!code) {
        toast.error("Please enter security code.");
        return;
      }
      if (!deliveryNumber) {
        toast.error("Please enter your delivery number.");
        return;
      }

      // Verify pick up
      const res = await verifyPickUp(locationId, deliveryNumber, code);
      if (res.cabinet_id) {
        console.log(res);
        toast.success("Successfully verified pick up.");
        onVerify(res.cabinet_id, "pick");
      } else {
        // Verify drop off
        const res = await verifyDropOff(locationId, deliveryNumber, code);
        if (res.cabinet_id) {
          console.log(res);
          toast.success("Successfully verified drop off.");
          onVerify(res.cabinet_id, "drop");
        }else {
          toast.error(res.error);
          onVerify("", "");
        }
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
      <div className="py-4 md:px-12 flex flex-col justify-center items-center gap-2">
        <Input
          type="text"
          placeholder="Traking number"
          className="shadow-md"
          value={deliveryNumber}
          onChange={(e) => setDeliveryNumber(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Security Code"
          className="shadow-md"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <Button
          onClick={onPickUpORDropOff}
          disabled={loading}
          className="w-fit bg-[#42820F] py-2 px-8 font-bold shadow-md"
        >
          OK
        </Button>
      </div>
    </div>
  );
};

export default LockerForm;
