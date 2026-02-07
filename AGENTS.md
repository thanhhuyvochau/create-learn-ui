# AGENTS.md - Coding Guidelines for create-learn-ui

This document provides essential information for agentic coding systems working in this repository.

## Build & Run Commands

### Development

```bash
npm run dev          # Start Next.js dev server with Turbopack (port 3000)
npm install          # Install dependencies
```

### Production Build & Start

```bash
npm run build        # Build for production (Turbopack enabled)
npm run start        # Start production server
```

### Linting & Formatting

```bash
npm run lint              # Run ESLint (flat config)
npm run lint -- --fix     # Auto-fix linting issues
npx prettier --write .    # Format all files with Prettier
```

### Single Test / Single File Validation

```bash
# ESLint a specific file
npm run lint -- src/path/to/file.tsx

# Format a specific file
npx prettier --write src/path/to/file.tsx
```

**Note:** No test framework is currently configured. When tests are added, use `npm run test` and `npm run test -- --testPathPattern="path/to/test"` for single test files.

## Code Style Guidelines

### Imports & Exports

- Use ES6 imports: `import { Component } from '@/components'`
- Import types explicitly: `import type { MyType } from '@/types'`
- Use path aliases: `@/*` maps to `./src/*` (configured in tsconfig.json)
- Group imports: standard library → third-party → local imports
- Order: types first, then default exports, then named exports

**Example:**

```typescript
import type { ApiListResponse } from '@/types';
import { fetchJSON } from '@/utils';
import { Component } from '@/components';
```

### Formatting & Indentation

- Tab width: 2 spaces (prettier: tabWidth: 2)
- Trailing commas: ES5 style (prettier: trailingComma: "es5")
- Print width: 80 characters
- Semicolons: always enabled
- Quotes: single quotes preferred (prettier: singleQuote: true)

**Config:** `.prettierrc.json` enforces these rules. Auto-format with `npx prettier --write`.

### TypeScript & Types

- Strict mode enabled (tsconfig.json: strict: true)
- Always annotate function parameters and return types
- Use type interfaces for public APIs; consider `type` for simple unions/tuples
- File naming: `*.models.ts` for domain types, `*.types.ts` for component props
- Generic constraints: use extends for clarity (e.g., `T extends BaseEntity`)

**Example:**

```typescript
interface ApiResponse<T extends BaseEntity> {
  status: number;
  data: T;
}

function fetchData<T extends BaseEntity>(id: string): Promise<ApiResponse<T>> {
  // implementation
}
```

### Naming Conventions

- **Files:** kebab-case for components (`ClassCard.tsx`), camelCase for utils (`authUtils.ts`)
- **Components:** PascalCase (React convention)
- **Variables & functions:** camelCase
- **Constants:** UPPER_SNAKE_CASE for true constants; preserve camelCase for exported objects
- **React hooks:** Prefix with `use` (custom hooks)
- **Type files:** Suffix `*.model.ts` or `*.types.ts` for clarity

### Component Structure

- Client components: Add `'use client'` directive at the top
- Server components: Default (no directive needed)
- Props interface: Define above component, typically named `[ComponentName]Props`
- Export default when appropriate

**Example:**

```typescript
'use client';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
```

### Error Handling

- Use custom error classes for domain errors (e.g., `HttpError`, `TimeoutError` in utils/httpUtils.ts)
- Include status and data in error context when applicable
- Always include try-catch for async operations
- Re-throw typed errors; wrap unknown errors: `throw new Error('message')`
- Log error details during development; use notifications for user-facing errors

**Example:**

```typescript
try {
  const data = await fetchJSON<T>(url, options);
  return data;
} catch (err) {
  if (err instanceof HttpError && err.status === 401) {
    // Handle unauthorized
  } else if (err instanceof TimeoutError) {
    // Handle timeout
  } else {
    throw err; // Re-throw unknown errors
  }
}
```

### API & Data Fetching

- Extend `BaseApiClient<T>` for domain-specific API clients
- Use `fetchJSON()` utility for low-level requests (handles timeouts, errors)
- Implement standard CRUD: `getAllPublicClasses()`, `getById()`, `create()`, `update()`, `delete()`
- Support FormData for file uploads; serialize automatically in `BaseApiClient`
- Use React Query (`@tanstack/react-query`) for client-side caching and synchronization

### Styling & CSS

- Mantine for component library (Button, Modal, Form, etc.)
- Tailwind CSS v4 for utility classes
- CSS modules for scoped styles (`.module.css` files)
- PostCSS with Tailwind + PostCSS plugin stack
- Avoid inline styles; prefer Tailwind classes or Mantine props

## Project Structure

```
src/
├─ app/               # Next.js App Router
├─ api/               # API client classes (extend BaseApiClient)
├─ components/        # Reusable React components
├─ contexts/          # React Context providers (Auth, etc.)
├─ hooks/             # Custom React hooks
├─ providers/         # Query Provider, Notification Provider
├─ types/             # TypeScript types & interfaces
└─ utils/             # Shared utilities (auth, HTTP, query helpers)
```

## Key Dependencies & Patterns

- **Next.js 15:** App Router, Server/Client components
- **React 19:** Latest hooks API
- **Mantine 8.3.5:** UI components with hooks
- **React Query:** Data fetching with caching
- **TypeScript 5:** Strict mode enabled
- **TailwindCSS v4:** Utility-first styling

## Additional Notes

- No test framework configured; add Jest/Vitest when needed
- ESLint extends `next/core-web-vitals` and `next/typescript` configs
- Environment variables: Use `.env.local` for local development (not committed)
- Production deployment: Build, then run `npm run start`

## Environment Configuration & Deployment

### Environment Files

The project supports environment-specific configuration:

- `.env.local` — Local development (overrides all others, not committed)
- `.env.development` — Development API URL: `http://103.81.84.247:8080`
- `.env.production` — Production API URL: `http://76.13.181.170:8080`

Next.js automatically loads `.env.local` in development and `.env.production` in production builds.

### Docker Build & Deployment

The Dockerfile supports environment-based builds via build argument:

```bash
# Build for development
docker build -t create-learn-ui:dev --build-arg NODE_ENV=development .

# Build for production
docker build -t create-learn-ui:prod --build-arg NODE_ENV=production .
```

### Deploy Script Usage

Use `deploy.sh` with profile argument:

```bash
# Deploy with dev profile (API: http://103.81.84.247:8080)
./deploy.sh dev

# Deploy with prod profile (API: http://76.13.181.170:8080)
./deploy.sh prod

# Default (dev profile)
./deploy.sh
```

The script automatically selects the correct API URL based on the profile and starts the Docker container on port 8888.

### Manual Environment Override

To override API URL at runtime:

```bash
./deploy.sh prod
# or with explicit override
export NEXT_PUBLIC_API_BASE_URL=http://custom-api:8080
./deploy.sh prod
```
