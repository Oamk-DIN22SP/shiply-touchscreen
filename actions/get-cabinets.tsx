const URL = `${process.env.NEXT_PUBLIC_API_URL}/locations`;

const getCabinets = async (locationId: String) => {
  const res = await fetch(`${URL}/${locationId}/cabinets`);
  return res.json();
};

export default getCabinets;
