import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faAward,
  faBoxOpen,
  faCircleHalfStroke,
  faClock,
  faCube,
  faDumbbell,
  faLayerGroup,
  faRulerCombined,
  faShieldHalved,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { PRODUCTS } from "../data/products";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function chipClass(active?: boolean) {
  return cx(
    "rounded-full border px-3 py-1 text-xs font-semibold transition",
    active
      ? "border-neonPink/40 bg-neonPink/15 text-neonPink shadow-glowPink"
      : "border-white/10 bg-ink/30 text-white/70 hover:border-neonPink/25 hover:text-white",
  );
}

function sectionTitle(icon: React.ReactNode, title: string) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-white/85">
      <span className="text-neonPink/90">{icon}</span>
      {title}
    </div>
  );
}

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = React.useMemo(() => PRODUCTS.find((p) => p.id === id), [id]);

  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);
  const [selectedSize, setSelectedSize] = React.useState<
    "S" | "M" | "L" | "XL" | null
  >(null);

  React.useEffect(() => {
    if (!product) return;
    setSelectedColor(product.colors[0] ?? null);
    setSelectedSize(product.sizes[0] ?? null);
  }, [product]);

  if (!product) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-white/10 bg-night/40 p-10 text-center text-white/70 shadow-card">
          Product not found.
          <div className="mt-6">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-ink/30 px-4 py-2.5 text-sm font-semibold text-white/75 transition hover:border-neonPink/25 hover:text-white"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
              Back to Shop
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const certificates =
    product.certificates ??
    product.tags.filter((t) => /(^CE\b|\bECE\b|Rated\b|Armor\b)/i.test(t));
  const brand = product.brand ?? "Helmetarium";
  const sku = product.sku ?? `HLMT-${product.id.toUpperCase()}`;
  const modelYear = product.modelYear ?? 2026;
  const warrantyMonths = product.warrantyMonths ?? 24;
  const materials =
    product.materials ??
    (product.category === "Helmets"
      ? ["Polycarbonate shell", "Multi-density EPS", "Moisture-wick liner"]
      : product.category === "Gloves"
        ? ["Synthetic leather", "Stretch mesh", "Impact foam"]
        : product.category === "Gear"
          ? [
              "Abrasion-resistant textile",
              "Reinforced stitching",
              "Vent panels",
            ]
          : [
              "Anodized aluminum",
              "Weather-sealed polymer",
              "Stainless hardware",
            ]);
  const features = product.features ?? [
    "Premium neon-series finish",
    "Optimized for daily rides",
    "Comfort-focused ergonomics",
    "Easy-care materials",
  ];
  const inBox =
    product.inBox ??
    (product.category === "Helmets"
      ? ["Helmet", "Pinlock-ready insert (model dependent)", "Carry bag"]
      : ["Item", "Care guide"]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-ink/30 px-3 py-2 text-sm font-semibold text-white/75 transition hover:border-neonPink/25 hover:text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
          Back
        </Link>
        <div className="hidden rounded-2xl border border-white/10 bg-night/40 px-4 py-2.5 text-sm text-white/70 shadow-card sm:block">
          <span className="text-white/50">SKU:</span>{" "}
          <span className="text-white/90">{sku}</span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-night/40 shadow-card">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_280px_at_30%_0%,rgba(244,59,183,0.18),transparent_60%)]" />
            <div className="aspect-[4/3] overflow-hidden bg-ink/40">
              <img
                src={product.imageDataUri}
                alt={product.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="p-5">
            <div className="text-sm text-white/55">
              {product.category} · {product.subcategory} ·{" "}
              <span className="text-white/70">{brand}</span>
            </div>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white/95 sm:text-3xl">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-neonPink/35 bg-neonPink/15 px-4 py-2 text-neonPink shadow-glowPink">
                <div className="text-xs font-semibold text-neonPink/85">
                  Price
                </div>
                <div className="text-lg font-semibold text-neonPink text-glow-soft">
                  {product.price.toFixed(2)}₾
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.tags.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-ink/30 px-3 py-1 text-xs font-semibold text-white/70 transition hover:border-neonPink/25 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faTag} className="mr-2 h-3 w-3" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-white/10 bg-night/40 p-5 shadow-card">
            {sectionTitle(
              <FontAwesomeIcon icon={faCircleHalfStroke} className="h-4 w-4" />,
              "Pick your style",
            )}

            <div className="mt-4">
              <div className="text-xs font-semibold text-white/55">Colors</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    className={chipClass(selectedColor === c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold text-white/55">Sizes</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={chipClass(selectedSize === s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-2 text-sm text-white/65">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-ink/30 px-3 py-2">
                <span className="flex items-center gap-2 text-white/60">
                  <FontAwesomeIcon icon={faRulerCombined} className="h-4 w-4" />
                  Selected
                </span>
                <span className="text-white/85">
                  {selectedColor ?? "—"} · {selectedSize ?? "—"}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-ink/30 px-3 py-2">
                <span className="flex items-center gap-2 text-white/60">
                  <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                  Warranty
                </span>
                <span className="text-white/85">{warrantyMonths} months</span>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-night/40 p-5 shadow-card">
            {sectionTitle(
              <FontAwesomeIcon icon={faLayerGroup} className="h-4 w-4" />,
              "Specifications",
            )}

            <dl className="mt-4 grid gap-3 text-sm">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-ink/30 px-3 py-2">
                <dt className="text-white/55">Brand</dt>
                <dd className="text-white/85">{brand}</dd>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-ink/30 px-3 py-2">
                <dt className="text-white/55">Model year</dt>
                <dd className="text-white/85">{modelYear}</dd>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-ink/30 px-3 py-2">
                <dt className="text-white/55">SKU</dt>
                <dd className="text-white/85">{sku}</dd>
              </div>
              {typeof product.weightGrams === "number" ? (
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-ink/30 px-3 py-2">
                  <dt className="flex items-center gap-2 text-white/55">
                    <FontAwesomeIcon icon={faDumbbell} className="h-4 w-4" />
                    Weight
                  </dt>
                  <dd className="text-white/85">{product.weightGrams} g</dd>
                </div>
              ) : null}
              {product.season ? (
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-ink/30 px-3 py-2">
                  <dt className="text-white/55">Season</dt>
                  <dd className="text-white/85">{product.season}</dd>
                </div>
              ) : null}
              {product.fit ? (
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-ink/30 px-3 py-2">
                  <dt className="text-white/55">Fit</dt>
                  <dd className="text-white/85">{product.fit}</dd>
                </div>
              ) : null}
            </dl>
          </section>

          <section className="rounded-2xl border border-white/10 bg-night/40 p-5 shadow-card">
            {sectionTitle(
              <FontAwesomeIcon icon={faShieldHalved} className="h-4 w-4" />,
              "Materials & features",
            )}

            <div className="mt-4 grid gap-4">
              <div className="rounded-xl border border-white/10 bg-ink/30 p-4">
                <div className="text-xs font-semibold text-white/55">
                  <FontAwesomeIcon icon={faCube} className="mr-2 h-4 w-4" />
                  Materials
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                  {materials.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-ink/30 p-4">
                <div className="text-xs font-semibold text-white/55">
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    className="mr-2 h-4 w-4"
                  />
                  Features
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                  {features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-night/40 p-5 shadow-card">
            {sectionTitle(
              <FontAwesomeIcon icon={faAward} className="h-4 w-4" />,
              "Certificates",
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {certificates.length === 0 ? (
                <span className="text-sm text-white/60">
                  No certifications listed.
                </span>
              ) : (
                certificates.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-ink/30 px-3 py-1 text-xs font-semibold text-white/70"
                  >
                    {c}
                  </span>
                ))
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-night/40 p-5 shadow-card">
            {sectionTitle(
              <FontAwesomeIcon icon={faBoxOpen} className="h-4 w-4" />,
              "In the box",
            )}
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
              {inBox.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}
