import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HealthResponse } from '@elimu360/shared';
import Redis from 'ioredis';
import { Client } from 'pg';

@Injectable()
export class HealthService {
  constructor(private readonly configService: ConfigService) {}

  async check(): Promise<HealthResponse> {
    const dependencies: HealthResponse['dependencies'] = {
      postgres: await this.checkPostgres(),
      redis: await this.checkRedis(),
    };

    const status = Object.values(dependencies).every((value) => value === 'ok') ? 'ok' : 'degraded';

    return {
      status,
      service: 'elimu360-backend',
      timestamp: new Date().toISOString(),
      dependencies,
    };
  }

  private async checkPostgres(): Promise<'ok' | 'unavailable'> {
    const client = new Client({ connectionString: this.configService.get<string>('app.databaseUrl') });
    try {
      await client.connect();
      await client.query('SELECT 1');
      return 'ok';
    } catch {
      return 'unavailable';
    } finally {
      await client.end().catch(() => undefined);
    }
  }

  private async checkRedis(): Promise<'ok' | 'unavailable'> {
    const redis = new Redis(this.configService.get<string>('app.redisUrl') ?? '', { lazyConnect: true });
    try {
      await redis.connect();
      await redis.ping();
      return 'ok';
    } catch {
      return 'unavailable';
    } finally {
      redis.disconnect();
    }
  }
}
