# UI Component

Frontend React application using Vite as build tool.

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router (data mode)
- **State Management**: TanStack Query + Zustand
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Forms**: react-hook-form + Zod
- **Animation**: Motion
- **Tables**: TanStack Table
- **Charts**: Recharts

## Directory Structure

```
ui/
├── main.tsx              # App entry point
├── vite-env.d.ts         # Vite type declarations
├── styles/               # Global styles
│   └── globals.css       # Tailwind imports + base styles
├── components/           # Shared components (used by 2+ features)
│   └── shadcn/           # shadcn/ui components
├── features/             # Feature-based modules
│   └── {feature}/
│       ├── components/   # Feature-specific components
│       ├── hooks.ts      # Feature-specific hooks
│       ├── types.ts      # Feature-specific types
│       └── utils/        # Feature-specific utilities
├── types/                # Shared types (used by 2+ features)
├── lib/                  # Shared utilities (used by 2+ features)
├── hooks/                # Shared hooks (used by 2+ features)
└── pages/                # Route pages
```

## Conventions

### Component Organization
- **Used by 1 feature?** → `features/{feature}/components/`
- **Used by 2+ features?** → `components/{domain}/`
- **shadcn components** → `components/shadcn/`

### Types Organization
- **Local to 1 feature?** → `{feature}/types.ts`
- **Shared by 2+ features?** → `types/{domain}.ts`

### Utils/Hooks Organization
- **Local to 1 feature?** → `{feature}/utils/` or `{feature}/hooks.ts`
- **Shared by 2+ features?** → `lib/` or `hooks/`

### Imports
- Use `@/ui/` alias for all imports
- Example: `import { Button } from "@/ui/components/shadcn/button"`

## Styling

Using Tailwind CSS 4 with the Vite plugin. Global styles in `styles/globals.css`.
