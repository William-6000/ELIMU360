import { useEffect, useState } from 'react';
import { PLATFORM_NAME, type HealthResponse } from '@elimu360/shared';
import { getHealth } from './lib/api';

export function App() {
  const [health, setHealth] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getHealth().then(setHealth).catch((err: unknown) => setError(err instanceof Error ? err.message : 'Unknown error'));
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
      <section className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-wide text-elimu-green">Production foundation</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">{PLATFORM_NAME}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          A nationwide Kenyan CBC Senior School learning platform foundation with React, NestJS,
          PostgreSQL, Redis, Docker, health checks, structured logging, configuration management,
          Tailwind, and Swagger.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {['Offline-first learning', 'CBC-aligned architecture', 'Secure school operations'].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-semibold">{item}</h2>
              <p className="mt-2 text-sm text-slate-600">Ready for modular expansion without rewriting completed work.</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-slate-900 p-5 text-white">
          <h2 className="font-semibold">API health</h2>
          {health ? <pre className="mt-3 overflow-auto text-sm">{JSON.stringify(health, null, 2)}</pre> : <p className="mt-3 text-sm text-slate-300">{error ?? 'Checking backend health...'}</p>}
        </div>
      </section>
    </main>
  );
}
