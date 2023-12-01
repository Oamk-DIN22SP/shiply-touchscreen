export interface Location {
  id: string;
  title: string;
  address: string;
};

export interface Cabinets {
  id: string;
  number: string;
  status: string;
  location_id: string;
  parcel_id: string;
  code: string;
};

// type State = "empty" | "empty-locker" | "complete" | "ready-to-pickup" | "picked-up" | "to-be-delivered" | "place-percel";