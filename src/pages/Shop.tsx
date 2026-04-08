import React from "react";
import { useSearchParams } from "react-router-dom";
import { FilterSidebar } from "../components/FilterSidebar";
import { ProductCard } from "../components/ProductCard";
import { PRODUCTS } from "../data/products";
import type { Category, Filters } from "../types";
import { filterProducts } from "../utils/filterProducts";

const DEFAULT_FILTERS: Filters = {
  category: "All",
  subcategory: "All",
  colors: [],
  sizes: [],
};

function isCategory(v: string | null): v is Category {
  return (
    v === "Helmets" || v === "Gloves" || v === "Gear" || v === "Accessories"
  );
}

export function Shop() {
  const [params] = useSearchParams();
  const initialCategory = params.get("category");

  const [filters, setFilters] = React.useState<Filters>(() => {
    if (isCategory(initialCategory)) {
      return { ...DEFAULT_FILTERS, category: initialCategory };
    }
    return DEFAULT_FILTERS;
  });

  const filtered = React.useMemo(
    () => filterProducts(PRODUCTS, filters),
    [filters],
  );

  const reset = () => setFilters(DEFAULT_FILTERS);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-white/95">
            Shop{" "}
            <span className="text-neonPink text-glow-soft">Helmetarium</span>
          </h2>
        </div>
        <div className="hidden rounded-2xl border border-white/10 bg-night/40 px-4 py-3 text-sm text-white/70 shadow-card sm:block">
          <span className="text-white/50">Results:</span>{" "}
          <span className="text-white/90">{filtered.length}</span>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="lg:sticky lg:top-20 lg:self-start">
          <div className="lg:hidden">
            <details className="rounded-2xl border border-white/10 bg-night/40 shadow-card">
              <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-white/85">
                Filters
              </summary>
              <div className="p-4 pt-0">
                <FilterSidebar
                  filters={filters}
                  onChange={setFilters}
                  onReset={reset}
                />
              </div>
            </details>
          </div>
          <div className="hidden lg:block">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onReset={reset}
            />
          </div>
        </div>

        <section>
          <div className="mb-4 flex items-center justify-between gap-4 sm:hidden">
            <div className="rounded-2xl border border-white/10 bg-night/40 px-4 py-3 text-sm text-white/70 shadow-card">
              <span className="text-white/50">Results:</span>{" "}
              <span className="text-white/90">{filtered.length}</span>
            </div>
            <button
              type="button"
              onClick={reset}
              className="rounded-xl border border-white/10 bg-ink/30 px-3 py-3 text-xs font-semibold text-white/70 transition hover:border-neonPink/25 hover:text-white"
            >
              Reset
            </button>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-night/40 p-10 text-center text-white/70 shadow-card">
              No matches. Try resetting filters.
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
