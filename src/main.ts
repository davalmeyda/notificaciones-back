import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  Logger.log(`🚀 Servidor corriendo en http://localhost:${port}`, 'Bootstrap');
  Logger.log(`📡 WebSocket disponible para conexiones`, 'Bootstrap');
  Logger.log(
    `🔗 Webhook endpoint: POST http://localhost:${port}/webhook/notification`,
    'Bootstrap',
  );
}

void bootstrap();
