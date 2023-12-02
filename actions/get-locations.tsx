import { DEV_API_URL, PROD_API_URL } from "@/config/backend_config";

const getLocation = async () => {
  const res = await fetch(`${DEV_API_URL}/locations`);
  return res.json();
};

export default getLocation;
