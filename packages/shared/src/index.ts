export const PLATFORM_NAME = 'Elimu360';

export interface HealthResponse {
  status: 'ok' | 'degraded';
  service: string;
  timestamp: string;
  dependencies: Record<string, 'ok' | 'unavailable'>;
}

export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    correlationId: string;
    timestamp: string;
    details?: unknown;
  };
}
