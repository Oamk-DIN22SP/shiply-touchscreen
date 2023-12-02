import BACKEND_HOSTNAME from "@/config/backend_config";
import { Cabinets } from "@/types";

// IDK why ENV is not working, so I just hardcoded the BACKEND_HOSTNAME


/* 
post request to verify drop off cabinet, return cabinet id, parcel_id, payload: locationId, deliveryNumber, code
{
  "locationId" : "1", 
  "deliveryNumber": "2830417231", 
  "code": "9960536"
}*/

const verifyDropOff = async (
  locationId: String,
  deliveryNumber: String,
  code: String
  ) => {
  const response = await fetch(`${BACKEND_HOSTNAME}/locations/verify-drop-off`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      locationId,
      deliveryNumber,
      code
    }),
  });
  const data = await response.json();
  return data;
};

export default verifyDropOff;
