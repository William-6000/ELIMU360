import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './common/config/app.config';
import { HealthModule } from './common/health/health.module';
import { AppController } from './app.controller';
import { AppLogger } from './common/logging/logger.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [appConfig] }), HealthModule],
  controllers: [AppController],
  providers: [AppLogger],
})
export class AppModule {}
