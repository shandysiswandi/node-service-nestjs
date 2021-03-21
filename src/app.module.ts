import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration.module';
import { DatabaseModule } from './database.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
