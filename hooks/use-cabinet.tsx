import { create } from 'zustand';

import { Cabinets } from '@/types';

interface CabinetStore {
  data: Cabinets[];
  setState: (state: Partial<CabinetStore>) => void;
  state: String;
  activeCabinetId: String;
}

const useCabinet = create<CabinetStore>((set) => ({
  data: [],
  setState: (state) => set(state),
  state: "empty",
  activeCabinetId: "",
}));

export default useCabinet;