import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global middlewares
  app.enableCors();
  app.use(helmet());

  await app.listen(process.env.PORT);
  console.log(`Application is running on port: ${process.env.PORT}`);
}
bootstrap();
