import useCabinet from "@/hooks/use-cabinet";
import Button from "../ui/button";
import useLocation from "@/hooks/use-location";
import { useRouter } from "next/navigation";
interface LockerOperationsProps {
  btnText: String;
  title: String;
  subtitle: String;
  smallText: String;
}
const LockerOperations: React.FC<LockerOperationsProps> = ({
  btnText,
  title,
  subtitle,
  smallText,
}) => {
  const cabinetStore = useCabinet();
  const locationStore = useLocation();
  const router = useRouter();

  const onBtnClick = () => {
    if (cabinetStore.state === "open-drop") {
      cabinetStore.setState({ state: "locked" });
      cabinetStore.setState({ operations: {
        btnText: "OK",
        title: `Drop-off completed.`,
        subtitle: "Your package is ready to deliver. Turn back to main screen to interact with cabinets.",
        smallText: "Touch to turn back to main screen.",
      }});
    }
    
    if (cabinetStore.state === "open-pick") {
      cabinetStore.setState({ state: "locked" });
      cabinetStore.setState({ operations: {
        btnText: "OK",
        title: `Pick up completed..`,
        subtitle: "Thanks for choosing us. Turn back to main screen to interact with cabinets.",
        smallText: "Touch to turn back to main screen. ",
      }});
    }

    if (cabinetStore.state === "locked") {
      cabinetStore.setState({ state: "initial" });
      locationStore.setState({ active: null });
      cabinetStore.setState({ form: true });
      cabinetStore.setState({ operations: {
        btnText: "",
        title: "",
        subtitle: "",
        smallText: "",
      }});
      cabinetStore.setState({ activeCabinetId: "" });
      router.push("/");
    }

  };
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-8">
      <h1 className="text-[28px] font-bold leading-8 text-[#4A4A4A]">
        {title}
      </h1>
      <h2 className="text-[16px] font-semibold leading-6 text-center">
        {subtitle}
      </h2>
      <Button className="px-6 py-3 mt-5 mb-2 w-fit font-bold bg-[#1D1D1D]" onClick={onBtnClick}>{btnText}</Button>
      <small>{smallText}</small>
    </div>
  );
};

export default LockerOperations;
