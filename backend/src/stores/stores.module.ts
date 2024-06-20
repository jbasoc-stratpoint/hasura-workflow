import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/__common__/repositories/repository.module';

import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';

@Module({
  imports: [RepositoryModule],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
