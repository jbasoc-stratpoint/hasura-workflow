import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { BaseRepository } from './__base.repository';
import { Items } from '@prisma/client';

@Injectable()
export class ItemsRepository extends BaseRepository<Items> {
  constructor(private readonly database: DatabaseService) {
    super(database.items);
  }
}
