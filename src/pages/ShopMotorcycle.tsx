import React from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FilterSidebar } from "../components/FilterSidebar";
import { ProductCard } from "../components/ProductCard";
import {
  MOTORCYCLE_PRODUCTS,
  MOTORCYCLE_CATEGORIES,
  MOTORCYCLE_SUBCATEGORIES,
  MOTORCYCLE_COLORS,
} from "../data/products";
import type { Filters } from "../types";
import { filterProducts } from "../utils/filterProducts";

const DEFAULT_FILTERS: Filters = {
  category: "All",
  subcategory: "All",
  colors: [],
  search: "",
};

function isMotorcycleCategory(
  v: string | null,
): v is "Helmets" | "Gloves" | "Gear" | "Accessories" {
  return (
    v === "Helmets" || v === "Gloves" || v === "Gear" || v === "Accessories"
  );
}

export function ShopMotorcycle() {
  const [params] = useSearchParams();
  const initialCategory = params.get("category");

  const [filters, setFilters] = React.useState<Filters>(() => {
    if (isMotorcycleCategory(initialCategory)) {
      return { ...DEFAULT_FILTERS, category: initialCategory };
    }
    return DEFAULT_FILTERS;
  });

  const [showFilters, setShowFilters] = React.useState(false);

  const filtered = React.useMemo(
    () => filterProducts(MOTORCYCLE_PRODUCTS, filters),
    [filters],
  );

  const reset = () => setFilters(DEFAULT_FILTERS);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Shop</h1>
        <p className="text-lg text-white/70 max-w-2xl">
          Discover premium motorcycle gear designed for performance, style, and
          protection.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40"
          />
          <input
            type="text"
            placeholder="Search products..."
            value={filters.search || ""}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-night/40 text-white placeholder-white/40 focus:border-neonPink/50 focus:outline-none transition-colors"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-sm text-white/60">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-night/40 text-white/80 hover:border-neonPink/25 hover:text-white transition-colors lg:hidden"
          >
            <FontAwesomeIcon icon={faSliders} className="h-4 w-4" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
        {/* Filters Sidebar */}
        <div className={`lg:block ${showFilters ? "block" : "hidden"}`}>
          <div className="sticky top-4">
            <FilterSidebar
              filters={filters}
              onChange={setFilters}
              onReset={reset}
              categories={MOTORCYCLE_CATEGORIES}
              subcategories={MOTORCYCLE_SUBCATEGORIES}
              colorLabel="Color"
              colorOptions={Array.from(MOTORCYCLE_COLORS)}
            />
          </div>
        </div>

        {/* Products Grid */}
        <section>
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-night/40 p-12 text-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="h-12 w-12 text-white/30 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-white/80 mb-2">
                No products found
              </h3>
              <p className="text-white/60 mb-6">
                Try adjusting your filters or search terms.
              </p>
              <button
                onClick={reset}
                className="px-6 py-2 bg-neonPink text-white rounded-full hover:bg-neonPink/80 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p, i) => (
                <div
                  key={p.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
