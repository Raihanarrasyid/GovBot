import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  log(`Server is running on http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
