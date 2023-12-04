import { DEV_API_URL, PROD_API_URL } from "@/config/backend_config";

const verifyPickUp = async (
  locationId: String,
  deliveryNumber: String,
  code: String
) => {
  const response = await fetch(`${DEV_API_URL}/locations/verify-pick-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      locationId,
      deliveryNumber,
      code,
    }),
  });
  const data = await response.json();
  return data;
};

export default verifyPickUp;
