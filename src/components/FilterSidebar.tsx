import React from "react";
import type { Filters } from "../types";
import {
  CATEGORIES,
  DIETARY_OPTIONS,
  SUBCATEGORIES,
} from "../data/products";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function TogglePill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
        active
          ? "border-neonPink/40 bg-neonPink/15 text-neonPink shadow-glowPink"
          : "border-white/10 bg-ink/25 text-white/70 hover:border-neonPink/25 hover:text-white",
      )}
    >
      {children}
    </button>
  );
}

export function FilterSidebar({
  filters,
  onChange,
  onReset,
  categories = CATEGORIES,
  subcategories = SUBCATEGORIES,
  colorLabel = "Dietary",
  colorOptions = Array.from(DIETARY_OPTIONS),
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  onReset: () => void;
  categories?: readonly string[];
  subcategories?: Record<string, string[]>;
  colorLabel?: string;
  colorOptions?: string[];
}) {
  const subcats =
    filters.category === "All" ? [] : (subcategories[filters.category] ?? []);

  return (
    <aside className="rounded-2xl border border-white/10 bg-night/40 p-4 shadow-card">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-white/85">Filters</div>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="rounded-xl border border-white/10 bg-ink/30 px-3 py-2 text-xs font-semibold text-white/70 transition hover:border-neonPink/25 hover:text-white"
        >
          Reset
        </button>
      </div>

      <div className="mt-6 space-y-6">
        <section>
          <div className="text-xs font-semibold tracking-wide text-white/70">
            Category
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <TogglePill
              active={filters.category === "All"}
              onClick={() =>
                onChange({
                  ...filters,
                  category: "All",
                  subcategory: "All",
                })
              }
            >
              All
            </TogglePill>
            {categories.map((c) => (
              <TogglePill
                key={c}
                active={filters.category === c}
                onClick={() =>
                  onChange({
                    ...filters,
                    category: c,
                    subcategory: "All",
                  })
                }
              >
                {c}
              </TogglePill>
            ))}
          </div>
        </section>

        {subcats.length > 0 && (
          <section>
            <div className="text-xs font-semibold tracking-wide text-white/70">
              Subcategory
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <TogglePill
                active={filters.subcategory === "All"}
                onClick={() => onChange({ ...filters, subcategory: "All" })}
              >
                All
              </TogglePill>
              {subcats.map((s) => (
                <TogglePill
                  key={s}
                  active={filters.subcategory === s}
                  onClick={() => onChange({ ...filters, subcategory: s })}
                >
                  {s}
                </TogglePill>
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="text-xs font-semibold tracking-wide text-white/70">
            {colorLabel}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {colorOptions.map((c) => {
              const active = filters.colors.includes(c);
              return (
                <TogglePill
                  key={c}
                  active={active}
                  onClick={() =>
                    onChange({
                      ...filters,
                      colors: active
                        ? filters.colors.filter((x) => x !== c)
                        : [...filters.colors, c],
                    })
                  }
                >
                  {c}
                </TogglePill>
              );
            })}
          </div>
        </section>
      </div>
    </aside>
  );
}
