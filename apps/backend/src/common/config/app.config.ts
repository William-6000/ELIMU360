import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.BACKEND_PORT ?? 4000),
  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
  logLevel: process.env.LOG_LEVEL ?? 'info',
  databaseUrl: process.env.DATABASE_URL ?? 'postgresql://elimu360:elimu360_password@localhost:5432/elimu360',
  redisUrl: process.env.REDIS_URL ?? 'redis://localhost:6379',
}));
