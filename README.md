# Helmetarium

Modern, responsive e-commerce UI for a motorcycle accessories shop. Dark neon theme with:

- Primary colors: **#f43bb7 (neon pink)** and **#461344 (deep purple)**
- Futuristic, sleek, minimal layout with glow accents and smooth hover transitions
- **React Router** pages: `Home`, `Shop`
- Mock product catalog (12 items) + fully dynamic frontend filtering (no backend)

## Tech

- React (functional components)
- Tailwind CSS (custom neon theme)
- React Router

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Project structure (high level)

- `src/pages/` — `Home`, `Shop`
- `src/components/` — `Navbar`, `Footer`, `ProductCard`, `FilterSidebar`
- `src/data/products.ts` — mock catalog + categories/subcategories
- `src/utils/filterProducts.ts` — filter logic
