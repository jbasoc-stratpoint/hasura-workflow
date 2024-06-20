import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/__common__/repositories/repository.module';

import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [RepositoryModule],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
