# Math Lab — Interactive 3D Mathematics Laboratory

Foundation build: homepage + reusable 3D visualization architecture.

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

- `npm run dev` — start the local dev server with hot reload
- `npm run build` — type-check and build a production bundle into `dist/`
- `npm run preview` — locally preview the production build

## Folder structure

```
src/
  components/
    layout/          Navbar, Footer
    ui/               ParameterSlider, VisualizationControls, EquationDisplay, TopicCard
    visualizations/   Axis, GridPlane, CoordinateSystem, Point3D, HeroScene
  pages/
    Home.tsx
    mathematics/      One page per math topic (CoordinateExplorer.tsx is the first)
  data/               Static content (topic list, featured simulations)
  types/              Shared TypeScript types
  utils/              Pure math/formatting helper functions (no UI code)
  hooks/              Reserved for reusable interaction hooks (drag, animation loop, etc.)
```
