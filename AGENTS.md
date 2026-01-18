Facets is a professional finance tracker Saas application. It supports multi-tenant user accounts with features like transaction (e.g Expenses, Incomes) tracking,accounts (e.g debit card, cash),debts management,loans management, goals, and scheduled payments and future new features. All Deploy in Cloudflare
### Tech Stack by Components

| Component                 | Location              | Tech Stack                                                                                                                                        |
| ------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend React App        | `ui/`                 | React 19 + Vite, TanStack Query, React Router with data mode, Tailwind 4, zustand, zod, shadcn, react-hook-form, motion, TanStack Table, recharts |
| Backend Cloudflare Worker | `api/`                | Hono + Cloudflare D1 + Drizzle ORM, Cloudflare R2, Cloudflare AI, zod, better auth                                                                |
| Testing                   | For api - `api/tests` | Vitest with [@cloudflare/vitest-pool-workers](https://www.npmjs.com/package/@cloudflare/vitest-pool-workers)                                      |

### Project structure 

- For ui Component `ui/`
```

New/Existing UI? → shadcn/ui + Tailwind
Used 1 feature? → features/{feature}/components | Used 2+? → components/{domain}/
Types (shared 2+) → types/{domain}.ts | Types (local 1) → {feature}/types.ts
Utils (shared 2+) → lib/ | Utils (local 1) → {feature}/utils/
Hooks (shared 2+) → hooks/ | Hooks (local 1) → {feature}/hooks.ts
shadcn components → components/shadcn/
styles globals in `/styles/`
```

- For api Component `api/`

```
api/  
│ ├── index.ts # App entry point  
│ │  
│ ├── schemas/ # Zod schemas (single source of truth)  
│ │ └── user.schema.ts  
│ │  
│ ├── controllers/ # HTTP handlers (thin layer)  
│ │ └── user.controller.ts  
│ │  
│ ├── services/ # Business logic (no HTTP details)  
│ │ └── user.service.ts  
│ │  
│ ├── middlewares/ # Auth, logging, error handling  
│ │ └── auth.middleware.ts  
│ │  
│ ├── models/ # Database models/DTOs  
│ │ └── user.model.ts  
│ │  
│ ├── core/ # Utilities and helpers  
│ │ ├── logger.ts  
│ │ ├── mailer.ts  
│ │ └── auth.ts  
│ │  
│ ├── exceptions/ # Custom error classes  
│ │ └── http-exceptions.ts  
│ │  
│ ├── crons/ # Background jobs  
│ │ └── cleanup.cron.ts  
│ │  
│ └── db/ # Database setup  
│ └── index.ts  
│  
└── tests/ # Mirrors api/ structure  
├── controllers/  
├── services/  
└── core/
```

### Project Alias

For references imports use `@/ui` for componente `ui` and use `@/api` for component `api` 

Create d1 database with command `wrangler d1 create` and include this project then create r2 bucket with command `wrangler r2 bucket create` and include this then include Worker IA, configurate bindings and types with `wrangler types`