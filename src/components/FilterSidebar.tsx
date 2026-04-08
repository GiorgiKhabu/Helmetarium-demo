import React from "react";
import type { Category, Filters } from "../types";
import { CATEGORIES, COLORS, SUBCATEGORIES } from "../data/products";

const SIZES: Filters["sizes"] = ["S", "M", "L", "XL"];

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
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  onReset: () => void;
}) {
  const subcats =
    filters.category === "All"
      ? []
      : (SUBCATEGORIES[filters.category as Category] ?? []);

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
            {CATEGORIES.map((c) => (
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
            Color
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {COLORS.map((c) => {
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

        <section>
          <div className="text-xs font-semibold tracking-wide text-white/70">
            Size
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {SIZES.map((s) => {
              const active = filters.sizes.includes(s);
              return (
                <TogglePill
                  key={s}
                  active={active}
                  onClick={() =>
                    onChange({
                      ...filters,
                      sizes: active
                        ? filters.sizes.filter((x) => x !== s)
                        : [...filters.sizes, s],
                    })
                  }
                >
                  {s}
                </TogglePill>
              );
            })}
          </div>
        </section>
      </div>
    </aside>
  );
}
