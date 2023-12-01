import { create } from 'zustand';

import { Cabinets } from '@/types';

interface CabinetStore {
  data: Cabinets[];
  setState: (state: Partial<CabinetStore>) => void;
  state: String;
  activeCabinetId: String;
}

const useCabinet = create<CabinetStore>((set) => ({
  data: [
    {
      id: "1",
      number: "1",
      status: "empty-locker",
    },
    {
      id: "2",
      number: "2",
      status: "empty-locker",
    },
    {
      id: "3",
      number: "3",
      status: "empty-locker",
    },
    {
      id: "4",
      number: "4",
      status: "empty-locker",
    },
    {
      id: "5",
      number: "5",
      status: "empty-locker",
    },
    {
      id: "6",
      number: "6",
      status: "ready-to-pickup",
    },
    {
      id: "7",
      number: "7",
      status: "empty-locker",
    },
    {
      id: "8",
      number: "8",
      status: "ready-to-pickup",
    },
    {
      id: "9",
      number: "9",
      status: "empty-locker",
    },
    {
      id: "10",
      number: "10",
      status: "empty-locker",
    },
    {
      id: "11",
      number: "11",
      status: "empty-locker",
    },
    {
      id: "12",
      number: "12",
      status: "empty-locker",
    },
    {
      id: "13",
      number: "13",
      status: "ready-to-pickup",
    },
    {
      id: "14",
      number: "14",
      status: "empty-locker",
    },
    {
      id: "15",
      number: "15",
      status: "to-be-delivered",
    }
  ],
  setState: (state) => set(state),
  state: "empty",
  activeCabinetId: "",
}));

export default useCabinet;