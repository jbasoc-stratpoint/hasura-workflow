import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ItemsRepository } from './items.repository';
import { StoresRepository } from './stores.repository';

@Module({
  imports: [DatabaseModule],
  providers: [ItemsRepository, StoresRepository],
  exports: [ItemsRepository, StoresRepository],
})
export class RepositoryModule {}
