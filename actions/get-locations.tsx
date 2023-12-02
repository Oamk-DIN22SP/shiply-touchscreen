import BACKEND_HOSTNAME from "@/config/backend_config";
import { Location } from "@/types";

// IDK why ENV is not working, so I just hardcoded the BACKEND_HOSTNAME


const getLocation = async () => {
  const res = await fetch(`${BACKEND_HOSTNAME}/locations`);
  return res.json();

  const demoData: Location[] = [
    {
      id: "1",
      title: "Market Street 9876F",
      address: "Plaza Drive, Springfield, The Simpsons / Springfield",
    },
    {
      id: "2",
      title: "Main Road 2468D",
      address: "Willow Lane, Narnia, Cair Paravel / Narnia",
    },
    {
      id: "3",
      title: "High Street 1357E",
      address: "Castle Way, Asimovia, Foundation / Asimovia",
    },
    {
      id: "4",
      title: "Elmwood Avenue 4321G",
      address: "Park Place, Atlantis, Poseidon / Atlantis",
    },
    {
      id: "5",
      title: "Market Street 9876F",
      address: "Plaza Drive, Springfield, The Simpsons / Springfield",
    },
  ];
  return demoData;
};

export default getLocation;
