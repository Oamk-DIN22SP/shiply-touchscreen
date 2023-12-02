import { Cabinets } from "@/types";
import BACKEND_HOSTNAME from "../config/backend_config"
// IDK why ENV is not working, so I just hardcoded the BACKEND_HOSTNAME


const getCabinets = async (locationId: String) => {
  const res = await fetch(`${BACKEND_HOSTNAME}/locations/${locationId}/cabinets`);
  return res.json();

  const demoData: Cabinets[] = [
    {
      id: "1",
      number: "1",
      status: "empty-locker",
      location_id: "1",
      parcel_id: "",
      code: "",
    },
    {
      id: "2",
      number: "2",
      status: "empty-locker",
      location_id: "1",
      parcel_id: "",
      code: "",
    },
    {
      id: "3",
      number: "3",
      status: "empty-locker",
      location_id: "3",
      parcel_id: "",
      code: "",
    },
    {
      id: "4",
      number: "4",
      status: "empty-locker",
      location_id: "2",
      parcel_id: "",
      code: "",
    },
    {
      id: "5",
      number: "5",
      status: "empty-locker",
      location_id: "5",
      parcel_id: "",
      code: "",
    },
    {
      id: "6",
      number: "6",
      status: "ready-to-pickup",
      location_id: "1",
      parcel_id: "",
      code: "",
    },
    {
      id: "7",
      number: "7",
      status: "empty-locker",
      location_id: "1",
      parcel_id: "",
      code: "",
    },
    {
      id: "8",
      number: "8",
      status: "ready-to-pickup",
      location_id: "1",
      parcel_id: "",
      code: "",
    },
    {
      id: "9",
      number: "9",
      status: "empty-locker",
      location_id: "1",
      parcel_id: "",
      code: "",
    },
    {
      id: "10",
      number: "10",
      status: "empty-locker",
      location_id: "1",
      parcel_id: "",
      code: "",
    },
    {
      id: "11",
      number: "11",
      status: "empty-locker",
      location_id: "1",
      parcel_id: "",
      code: "",
    },
    {
      id: "12",
      number: "12",
      status: "empty-locker",
      location_id: "1",
      parcel_id: "",
      code: "",
    },
    {
      id: "13",
      number: "13",
      status: "ready-to-pickup",
      location_id: "1",
      parcel_id: "",
      code: "",
    },
    {
      id: "14",
      number: "14",
      status: "empty-locker",
      location_id: "3",
      parcel_id: "",
      code: "",
    },
    {
      id: "15",
      number: "15",
      status: "to-be-delivered",
      location_id: "4",
      parcel_id: "",
      code: "",
    },
  ];

  return demoData;
};

export default getCabinets;
