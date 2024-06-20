import { Module } from '@nestjs/common';
import { DatabaseModule } from './__common__/database/database.module';
import { ItemsModule } from './items/items.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [DatabaseModule, ItemsModule, StoresModule],
})
export class AppModule {}
