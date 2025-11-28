# Frontend React Bootcamp - AI Coding Instructions

## Project Overview
This is a **dual React + Vite workspace** with two independent applications:
- **takeapp**: Store creation application (uses Tailwind CSS + DaisyUI)
- **app-chat**: Chat application template (basic React template)

Both projects follow React 19, use Vite with rolldown, and implement multiple architectural patterns mentioned in `arquitecturas_desarrollo.md` (layered, modular/features, Atomic Design, hexagonal).

## Architecture & Directory Structure

### Each project structure:
```
├── src/
│   ├── main.jsx          # Entry point with React 19 StrictMode
│   ├── components/       # Reusable UI components (Atomic Design pattern)
│   ├── views/            # Page/screen level components
│   ├── utils/            # Utility functions
│   └── assets/           # Static assets
├── vite.config.js        # Vite + React + Tailwind configuration
├── eslint.config.js      # Flat config ESLint (v9+)
└── tailwind.config.js    # (takeapp only - for Tailwind + DaisyUI)
```

### Key Patterns:
1. **Views > Components hierarchy**: Views are page-level containers, components are reusable
2. **Atomic Design**: Components are atomic building blocks (see `takeapp/src/components/`)
3. **State management**: Currently props-based; each component is functional/declarative
4. **Styling**: Tailwind CSS with DaisyUI components (takeapp) or plain CSS (app-chat)

## Development Workflow

### Running projects:
```bash
cd takeapp        # or app-chat
npm install       # First time setup
npm run dev       # Start dev server (HMR enabled)
npm run build     # Production build to dist/
npm run lint      # ESLint validation
npm run preview   # Preview production build
```

### Key technologies:
- **React 19.2.0** with Fast Refresh via Babel (@vitejs/plugin-react)
- **Vite/rolldown** (npm:rolldown-vite@7.2.5) - fast bundler with HMR
- **ESLint v9** with flat config format
- **Tailwind CSS v4.1** via @tailwindcss/vite plugin (takeapp only)
- **DaisyUI v5.5** for themed components (takeapp only)

## Code Patterns & Conventions

### Component Structure (takeapp example):
```jsx
// FormularioStore.jsx - Functional, declarative component
const FormularioStore = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Crear Nueva Tienda</h2>
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300...">
          {/* DaisyUI fieldset pattern */}
        </fieldset>
        <button className="btn btn-secondary">Crear Tienda</button>
      </form>
    </>
  );
};
export default FormularioStore;
```

### DaisyUI component usage (takeapp):
- Use DaisyUI classes: `btn btn-secondary`, `fieldset`, `label`, `input`
- Configure via Tailwind theme extensions
- Components are already styled; override with Tailwind modifiers

### View composition pattern:
```jsx
// CreateStoreView.jsx - Composes multiple components
const CreateStoreView = () => {
  return (
    <>
      <Header/>
      <main>
        <section className="flex flex-col items-center justify-center...">
          <FormularioStore/>
          <PreviewStore/>
        </section>
      </main>
    </>
  );
};
```

## ESLint & Code Quality

**ESLint Config Rules** (flat config in `eslint.config.js`):
- Extends: `js.configs.recommended`, `reactHooks.configs.flat.recommended`, `reactRefresh.configs.vite`
- Custom rule: `'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]` (components/constants OK)
- Files: `**/*.{js,jsx}`
- ECMAVersion: 2020, JSX support enabled

**When developing**: Run `npm run lint` to catch issues. Fix errors before commit.

## Critical Integration Points

### Tailwind + DaisyUI (takeapp):
- Vite plugin automatically processes Tailwind (no PostCSS config needed unless customizing)
- DaisyUI themes loaded from node_modules
- Tailwind classes: spacing (`text-2xl`, `mb-4`, `p-4`), flexbox (`flex flex-col`), colors from DaisyUI palette

### React 19 + Vite HMR:
- StrictMode in main.jsx enables development warnings
- Fast Refresh via @vitejs/plugin-react (Babel-based)
- Modifying components auto-updates without losing state

### Form handling (FormularioStore):
- Currently uncontrolled form (no useState hooks seen yet)
- Ready for state integration: add `useState` for form fields
- DaisyUI `input`, `button` classes for styling

## Important Gotchas

1. **Two separate projects**: `takeapp` and `app-chat` are independent. Run commands in each dir.
2. **No TypeScript yet**: Project uses `.jsx` files without TS. Type safety via ESLint only.
3. **Rolldown Vite override**: Custom vite override in package.json - use this exact version.
4. **DaisyUI only in takeapp**: app-chat doesn't use DaisyUI; don't add to both projects unless consistent.
5. **Component exports**: Always export components as `export default ComponentName;`

## Common Tasks

### Add a new component to takeapp:
1. Create `src/components/YourComponent.jsx`
2. Use Tailwind + DaisyUI classes (no separate CSS files needed)
3. Export as default
4. Import and use in views (e.g., `CreateStoreView.jsx`)

### Add state to a component:
```jsx
import { useState } from 'react';

const FormularioStore = () => {
  const [title, setTitle] = useState('');
  // ... use state
};
```

### Debug with ESLint:
- Run `npm run lint` to see all issues
- Rules in `eslint.config.js` - modify if needed for project standards

## File References
- **Entry points**: `takeapp/src/main.jsx`, `app-chat/src/main.jsx`
- **Architecture docs**: `arquitecturas_desarrollo.md`
- **Main app**: `takeapp/src/views/CreateStoreView.jsx` (orchestrates components)
- **Form component**: `takeapp/src/components/FormularioStore.jsx` (needs state integration)
