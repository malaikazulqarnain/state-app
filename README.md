# State Management App (Zustand)

A React + Vite app demonstrating global state with Zustand and polished UI states.

## State Management
- Global store: `src/store/useTaskStore.js` (tasks, loading, error, actions)
- Task list and Navbar pending-count read from the same store, no prop-drilling
- Selectors used so components re-render only when their slice changes

## UI Polish
- Skeleton loader while fetching
- Empty state when there are no tasks
- Error state with retry button

## Run locally
npm install
npm run dev
