import { Items as ItemEntity } from '@prisma/client';

export interface IItems extends Partial<ItemEntity> {
  id: number;
  name: string;
  created: Date;
  updated: Date;
}
