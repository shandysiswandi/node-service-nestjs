import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import * as helmet from 'helmet';
import * as compression from 'compression';
import {
  HttpStatus,
  UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
    cors: true,
  });

  // routes prefix
  // app.setGlobalPrefix(process.env.NAME);

  // global middlewares
  app.use(helmet());
  app.use(compression());

  // global filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // global interceptor for manipulate req and res
  app.useGlobalInterceptors(new ResponseInterceptor());

  // global pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true,
      dismissDefaultMessages: false,
      exceptionFactory: (errors: ValidationError[]) =>
        new UnprocessableEntityException(errors),
    }),
  );

  await app.listen(process.env.PORT);
  console.log(`Application is running on port: ${process.env.PORT}`);
}
bootstrap();
