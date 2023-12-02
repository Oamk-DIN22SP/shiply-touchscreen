import { create } from 'zustand';

import { Cabinets } from '@/types';

interface CabinetStore {
  data: Cabinets[];
  setState: (state: Partial<CabinetStore>) => void;
  state: String;
  activeCabinetId: String;
  form: Boolean;
  operations: {
    btnText: String;
    title: String;
    subtitle: String;
    smallText: String;
  }
}

const useCabinet = create<CabinetStore>((set) => ({
  data: [],
  setState: (state) => set(state),
  state: "initial",
  activeCabinetId: "",
  form: true,
  operations: {
    btnText: "",
    title: "",
    subtitle: "",
    smallText: "",
  }
}));

export default useCabinet;