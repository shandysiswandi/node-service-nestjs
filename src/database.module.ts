import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('ORM_HOST'),
          port: configService.get('ORM_PORT'),
          username: configService.get('ORM_USERNAME'),
          password: configService.get('ORM_PASSWORD'),
          database: configService.get('ORM_DATABASE'),
          entities: [__dirname + '/entities/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
