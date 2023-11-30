"use client";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import useCabinet from "@/hooks/use-cabinet";
import toast from "react-hot-toast";

const dropPoint = [
  {
    value: "123",
    label: "Delivery Number 123",
  },
  {
    value: "456",
    label: "Delivery Number 456",
  },
  {
    value: "789",
    label: "Delivery Number 789",
  },
  {
    value: "1011",
    label: "Delivery Number 1011",
  },
];

const PlacePercel = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [deliveryNumber, setDeliveryNumber] = useState("");
  const cabinetStore = useCabinet();

  const onSubmit = async () => {
    try {
      setLoading(true);
      if (!value) {
        toast.error("Please select a drop off point.");
        return;
      }
      if (!deliveryNumber) {
        toast.error("Please enter a delivery number.");
        return;
      }
      // api call to match details
      // API call to update cabinet status
      cabinetStore.setState({ state: "complete" });
      // find id in store data and update status
      cabinetStore.data.find(
        (cabinet) => {
          if (cabinet.id === cabinetStore.activeCabinetId) {
            cabinet.status = "ready-to-pickup";
          }
        });
      // sycn data
      
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-[#4A4A4A] text-[23px] font-bold leading-8">
        Empty Cabinet
      </h1>
      <h2 className="text-[#686868] text-[16px] font-semibold leading-6">
        This is a representation of the stickers pasted to the parcels in the
        drivers inventory{" "}
        <span className="text-[12px]">
          (We imagine there are real boxes, driver looks at the boxes on
          stickers and fills the delivery number input)
        </span>
        .
      </h2>
      <div className="py-8 flex flex-col justify-center items-center gap-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              role="combobox"
              aria-expanded={open}
              className="flex items-center justify-between w-[300px] bg-transparent border border-[#42820F] rounded-sm px-4 py-2 text-[#4A4A4A] text-sm font-semibold leading-5"
            >
              {value
                ? dropPoint.find((point) => point.value === value)?.label
                : "Select Drop off point..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0 border border-[#42820F]">
            <Command>
              <CommandInput placeholder="Search point..." />
              <CommandEmpty>No point found.</CommandEmpty>
              <CommandGroup>
                {dropPoint.map((point) => (
                  <CommandItem
                    key={point.value}
                    value={point.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === point.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {point.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Input
          type="text"
          placeholder="Delivery Number"
          className="border border-[#42820F] focus:border-transparent focus:ring-0"
          value={deliveryNumber}
          onChange={(e) => setDeliveryNumber(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button
          onClick={onSubmit}
          disabled={loading}
          className="w-fit mt-6 bg-[#42820F]"
        >
          Lock
        </Button>
        <small>Leads to boxes and delivery number input.</small>
      </div>
    </div>
  );
};

export default PlacePercel;
