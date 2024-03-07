import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { BaseRepository } from './__base.repository';
import { Stores } from '@prisma/client';


@Injectable()
export class StoresRepository extends BaseRepository<Stores> {
  constructor(
    private readonly database: DatabaseService,
  ) {
    super(database.stores);
  }
}
