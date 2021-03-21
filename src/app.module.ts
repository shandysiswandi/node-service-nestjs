import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
