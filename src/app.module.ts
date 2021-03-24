import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigurationModule } from './config/configuration.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, UserModule],
  providers: [],
  controllers: [AppController],
})
export class AppModule {}
