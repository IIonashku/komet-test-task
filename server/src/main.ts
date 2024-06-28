import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:5173/',
      'https://main--willowy-gumption-1db5fb.netlify.app/',
    ],
  });
  await app.listen(PORT);
}
bootstrap();
