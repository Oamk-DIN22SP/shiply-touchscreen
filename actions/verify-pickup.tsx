const URL = `${process.env.NEXT_PUBLIC_API_URL}/locations/verify-pick-up`;

const verifyPickUp = async (
  locationId: String,
  deliveryNumber: String,
  code: String
) => {
  const response = await fetch(`${URL}`, {
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
