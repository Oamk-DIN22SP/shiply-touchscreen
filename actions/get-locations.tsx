import { Location } from "@/types";

const URL=`${process.env.BACKEND_API_URL}/locations`;

const getLocation = async () => {
  // const res = await fetch(`${URL}`);

  // return res.json();

  const demoData: Location[] = [{
    id: "1",
    title: "Market Street 9876F / Plaza Drive, Springfield, The Simpsons / Springfield",
  },
  {
    id: "2",
    title: "Main Road 2468D / Willow Lane, Narnia, Cair Paravel / Narnia",
  },
  {
    id: "3",
    title: "High Street 1357E / Castle Way, Asimovia, Foundation / Asimovia",
  },
  {
    id: "4",
    title: "Elmwood Avenue 4321G / Park Place, Atlantis, Poseidon / Atlantis",
  },
  {
    id: "5",
    title: "Market Street 9876F / Plaza Drive, Springfield, The Simpsons / Springfield",
  }
]

  return demoData;
};

export default getLocation;
