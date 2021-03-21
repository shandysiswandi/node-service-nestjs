import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        HOST: Joi.string().default('localhost'),
        PORT: Joi.number().default(3000),
        NAME: Joi.string().default('node service nestjs'),
        TZ: Joi.string().default('UTC'),

        ORM_TYPE: Joi.string().default('mysql'),
        ORM_HOST: Joi.string().default('localhost'),
        ORM_PORT: Joi.number().default(3306),
        ORM_USERNAME: Joi.string().default('root'),
        ORM_PASSWORD: Joi.string().empty(''),
        ORM_DATABASE: Joi.string().default('node-service-nestjs'),
        ORM_TIMEZONE: Joi.string().default('UTC'),
      }),
    }),
  ],
})
export class ConfigurationModule {}
