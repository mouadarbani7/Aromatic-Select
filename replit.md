# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Luxe Parfum (perfume-store)

- **Preview path**: `/`
- **Type**: react-vite (frontend only, no backend)
- **Brand**: MAISON NOIR — luxury perfume e-commerce
- **Features**:
  - Homepage with hero, best sellers, countdown timer, reviews
  - Products catalog page (8 perfumes)
  - Product detail page with dynamic volume/price selector (10ml/$5, 20ml/$9, 30ml/$15, 50ml/$20)
  - Cart with quantity management
  - Checkout form (UI only)
  - Global CartContext for state management
  - Framer Motion animations throughout
  - Dark luxury theme (black/gold/white) with Cormorant Garamond + Montserrat fonts
  - AI-generated product imagery
  - Mobile-responsive with sticky glass-blur navbar
