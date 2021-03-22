import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/configuration.module';
import { DatabaseModule } from './config/database.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
