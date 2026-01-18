# API Component

Backend Cloudflare Worker using Hono framework with D1 database and Drizzle ORM.

## Tech Stack
- **Framework**: Hono
- **Database**: Cloudflare D1 + Drizzle ORM
- **Storage**: Cloudflare R2
- **AI**: Cloudflare Workers AI
- **Auth**: better-auth
- **Validation**: Zod

## Directory Structure

```
api/
├── index.ts          # App entry point (Hono app)
├── schemas/          # Zod schemas (single source of truth)
├── controllers/      # HTTP handlers (thin layer, delegates to services)
├── services/         # Business logic (no HTTP details)
├── middlewares/      # Auth, logging, error handling
├── models/           # Database models/DTOs
├── core/             # Utilities and helpers
├── exceptions/       # Custom error classes
├── crons/            # Background jobs
├── db/               # Database setup and migrations
└── tests/            # Mirrors api/ structure
    ├── controllers/
    ├── services/
    └── core/
```

## Conventions

- **Schemas**: Define in `schemas/` - these are the single source of truth
- **Controllers**: HTTP layer only - parse request, call service, return response
- **Services**: Pure business logic - no `c` (Hono context), no HTTP status codes
- **Imports**: Use `@/api/` alias for all imports

## Bindings Available

- `DB`: D1 database binding
- `STORAGE`: R2 bucket binding
- `AI`: Workers AI binding

## Testing

Tests use `@cloudflare/vitest-pool-workers` for running tests in the Workers runtime.
