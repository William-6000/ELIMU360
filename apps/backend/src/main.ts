import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppLogger } from './common/logging/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const logger = app.get(AppLogger);
  const configService = app.get(ConfigService);

  app.useLogger(logger);
  app.setGlobalPrefix('api/v1');
  app.enableCors({ origin: configService.get<string>('app.corsOrigin'), credentials: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true, forbidNonWhitelisted: true }));

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Elimu360 API')
    .setDescription('Production foundation API for the Elimu360 CBC Senior School platform.')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();
  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, swaggerConfig));

  const port = configService.get<number>('app.port') ?? 4000;
  await app.listen(port, '0.0.0.0');
  logger.log(`Elimu360 backend listening on port ${port}`, 'Bootstrap');
}

void bootstrap();
