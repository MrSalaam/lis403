# NexLibris - Glassmorphism Design System

## Build & Development Commands

- **Dev**: `npm run dev` - Start Vite dev server on port 3000
- **Build**: `npm build` - Build for production
- **Preview**: `npm run preview` - Preview production build
- **No test suite** - No lint, test commands configured

## Architecture

**React + TypeScript + Vite** SPA with Google Gemini AI integration. Fully responsive with glassmorphism design pattern.

**Key Directories:**
- `components/` - 7 React UI components (Navbar, Hero, FeaturedCollections, Services, SmartLibrarian, Footer, Button)
- `services/` - geminiService.ts for Google Gemini API integration
- `types.ts` - TypeScript interfaces (Book, Service, ChatMessage, ChatSender enum)

**No Database** - Purely frontend SPA with Gemini API for AI chat.

## Code Style & Conventions

**Design System:**
- **Glassmorphism**: Frosted glass effects via `glass-effect`, `glass-dark`, `glass-navy` CSS classes
- **Color Palette**: Navy/white theme (navy-50 to navy-900), gradients, no solid colors
- **Responsive**: Mobile-first approach with Tailwind breakpoints (sm, md, lg)

**Imports & Paths:**
- Use `@/` alias for root imports (tsconfig.json, vite.config.ts)

**React & Components:**
- Functional components with React.FC typing
- Hooks: useState, useRef, useEffect for state
- Tailwind CSS with custom navy color palette
- Export default

**Naming:**
- Components: PascalCase (e.g., SmartLibrarian.tsx)
- Utility classes: glass-effect, glass-dark, glass-navy
- Font families: `font-display` (Sora) for headings, `font-sans` (Inter) for body

**Error Handling:**
- Try-catch in async services with user-friendly messages
- Graceful degradation when API keys missing

**TypeScript:**
- Target ES2022, module ESNext, strict typing
