import type { HealthResponse } from '@elimu360/shared';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api/v1';

export async function getHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_BASE_URL}/health`);
  if (!response.ok) {
    throw new Error('Unable to reach Elimu360 API');
  }
  return response.json() as Promise<HealthResponse>;
}
