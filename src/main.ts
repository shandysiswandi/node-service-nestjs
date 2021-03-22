import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import * as helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global middlewares
  app.enableCors();
  app.use(helmet());
  app.use(compression());

  // global pipe for validation data request
  app.useGlobalPipes(new ValidationPipe());

  // global interceptor for manipulate req and res
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(process.env.PORT);
  console.log(`Application is running on port: ${process.env.PORT}`);
}
bootstrap();
