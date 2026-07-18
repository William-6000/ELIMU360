+# Elimu360
+
+Production foundation for a nationwide Kenyan CBC Senior School learning platform.
+
+## Stack
+
+- NestJS backend with Swagger, validation, structured logging, and health checks
+- React + TypeScript frontend with Tailwind CSS
+- Shared TypeScript package for cross-app contracts
+- PostgreSQL and Redis
+- Docker and Docker Compose
+- GitHub Actions CI
+- Prettier, ESLint, Husky, and lint-staged
+
+## Quick start
+
+```bash
+cp .env.example .env
+npm install
+npm run dev
+```
+
+Open:
+
+- Frontend: http://localhost:3000
+- Backend: http://localhost:4000/api/v1
+- Swagger: http://localhost:4000/docs
+- Health: http://localhost:4000/api/v1/health
+
+## Local development without Docker
+
+Start PostgreSQL and Redis locally, then run:
+
+```bash
+cp .env.example .env
+npm install
+npm run dev:local
+```
+
+## Environment variables
+
+| Variable | Purpose | Default |
+| --- | --- | --- |
+| `NODE_ENV` | Runtime environment | `development` |
+| `POSTGRES_DB` | PostgreSQL database | `elimu360` |
+| `POSTGRES_USER` | PostgreSQL user | `elimu360` |
+| `POSTGRES_PASSWORD` | PostgreSQL password | `elimu360_password` |
+| `DATABASE_URL` | Backend PostgreSQL connection string | Docker service URL |
+| `REDIS_URL` | Backend Redis connection string | Docker service URL |
+| `BACKEND_PORT` | Backend port | `4000` |
+| `FRONTEND_PORT` | Frontend port | `3000` |
+| `CORS_ORIGIN` | Allowed frontend origin | `http://localhost:3000` |
+| `LOG_LEVEL` | Backend structured log level | `info` |
+| `VITE_API_BASE_URL` | Frontend API base URL | `http://localhost:4000/api/v1` |
+
+## Commands
+
+```bash
+npm run dev           # Start the full Docker Compose stack
+npm run dev:local     # Start backend and frontend locally
+npm run build         # Build all workspaces
+npm run lint          # Lint all workspaces
+npm run format        # Format repository
+npm run format:check  # Check formatting
+npm test              # Run workspace tests
+```
+
+## Architecture foundation
+
+```text
+apps/
+  backend/        NestJS API
+  frontend/       React PWA-ready frontend
+packages/
+  shared/         Shared TypeScript contracts and constants
+infrastructure/   Future IaC, Kubernetes, Helm, monitoring assets
+docker/           Local service initialization
+.github/          CI workflows
+```
+
+The repository is intentionally modular so identity, curriculum, content, assessments, offline sync, messaging, analytics, and audit modules can be added without rewriting the foundation.
+
+## Operational endpoints
+
+- `/api/v1/health` checks PostgreSQL and Redis dependencies.
+- `/docs` exposes Swagger/OpenAPI documentation.
+
+## Security baseline
+
+- Strict TypeScript configuration
+- Global NestJS validation pipe with whitelisting
+- CORS configuration from environment
+- No secrets committed; use `.env` locally and managed secrets in deployment
+- Structured logging without intentionally logging secrets
