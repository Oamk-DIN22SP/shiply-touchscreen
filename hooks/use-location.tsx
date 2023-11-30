import { create } from 'zustand';

import { Location } from '@/types';

interface LocationStore {
  data: Location[];
  setState: (state: Partial<LocationStore>) => void;
  active: Location | null;
  setActive: (location: Location) => void;
}

const useLocation = create<LocationStore>((set) => ({
  data: [],
  setState: (state) => set(state),
  active: null,
  setActive: (location) => set(() => ({ active: location })),
}));

export default useLocation;