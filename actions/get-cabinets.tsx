import { DEV_API_URL, PROD_API_URL } from "@/config/backend_config";

const getCabinets = async (locationId: String) => {
  const res = await fetch(`${DEV_API_URL}/locations/${locationId}/cabinets`);
  return res.json();
};

export default getCabinets;
