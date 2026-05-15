import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-night/40 shadow-card transition hover:border-neonPink/35 hover:shadow-glowPink">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(600px_200px_at_30%_0%,rgba(244,59,183,0.14),transparent_55%)]" />
      </div>

      <div className="aspect-[4/3] overflow-hidden bg-ink/40">
        <img
          src={product.imageDataUri}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-sm text-white/55">
              {product.category} · {product.subcategory}
            </div>
            <h3 className="mt-1 text-base font-semibold text-white/90">
              {product.name}
            </h3>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-sm text-white/50">Price</div>
            <div className="text-lg font-semibold text-neonPink text-glow-soft">
              {product.price.toFixed(2)}₾
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-ink/30 px-2.5 py-1 text-xs text-white/70 transition group-hover:border-neonPink/25"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          to={product.category === "Appetizers" || product.category === "Mains" || product.category === "Desserts" || product.category === "Drinks" ? `/item/${product.id}` : `/product/${product.id}`}
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neonPink/30 bg-neonPink/15 px-4 py-2.5 text-sm font-semibold text-neonPink shadow-glowPink transition hover:bg-neonPink/20 hover:shadow-glowPinkStrong active:translate-y-[1px]"
        >
          See details
        </Link>
      </div>
    </article>
  );
}
