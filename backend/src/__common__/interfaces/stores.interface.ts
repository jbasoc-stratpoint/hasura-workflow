import { Stores as StoreEntity } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface IStores extends Partial<StoreEntity> {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: Decimal;
  latitude: Decimal;
  longitude: Decimal;
  created: Date;
  updated: Date;
}