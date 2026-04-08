import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faSliders,
  faVest,
  faHelmetUn,
} from "@fortawesome/free-solid-svg-icons";
import type { Category } from "../types";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const featured: Array<{
  title: Category;
  description: string;
  accent: "pink" | "purple" | "cyan" | "lime";
}> = [
  {
    title: "Helmets",
    description: "Futuristic protection, premium comfort.",
    accent: "pink",
  },
  {
    title: "Gloves",
    description: "Grip, control, and all-season feel.",
    accent: "cyan",
  },
  {
    title: "Gear",
    description: "Armor-ready jackets, pants, and boots.",
    accent: "purple",
  },
  {
    title: "Accessories",
    description: "Dial in your ride with sleek upgrades.",
    accent: "lime",
  },
];

function featuredIcon(title: Category) {
  switch (title) {
    case "Helmets":
      return faHelmetUn;
    case "Gloves":
      return faHand;
    case "Gear":
      return faVest;
    case "Accessories":
      return faSliders;
    default:
      return faSliders;
  }
}

function accentClass(a: (typeof featured)[number]["accent"]) {
  switch (a) {
    case "pink":
      return "from-neonPink/20 to-deepPurple/10";
    case "purple":
      return "from-deepPurple/30 to-neonPink/10";
    case "cyan":
      return "from-sky-400/15 to-neonPink/10";
    case "lime":
      return "from-lime-400/15 to-deepPurple/15";
    default:
      return "from-neonPink/20 to-deepPurple/10";
  }
}

export function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-hero" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="max-w-2xl">
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-night/50 px-3 py-1.5 text-xs text-white/70 shadow-card">
              <span className="h-1.5 w-1.5 rounded-full bg-neonPink shadow-glowPink" />
              motorcycle gear & accessories
            </div> */}

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              <span className="text-neonPink text-glow">Helmetarium</span>
            </h1>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              კაფე-ბარი დრაივი, სადაც შეგიძლიათ სასიამოვნოდ გაატაროთ დრო
              მოტომოყვარულებთან ერთად
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-xl border border-neonPink/35 bg-neonPink/15 px-5 py-3 text-sm font-semibold text-neonPink shadow-glowPink transition hover:bg-neonPink/20 hover:shadow-glowPinkStrong active:translate-y-[1px]"
              >
                Shop Now
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-night/40 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-neonPink/25 hover:text-white"
              >
                Browse all products
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((c) => (
              <Link
                key={c.title}
                to={`/shop?category=${encodeURIComponent(c.title)}`}
                className="group rounded-2xl border border-white/10 bg-night/40 p-5 shadow-card transition hover:border-neonPink/30 hover:shadow-glowPink"
              >
                <div
                  className={cx(
                    "grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ring-1 ring-white/10 transition group-hover:ring-neonPink/25",
                    accentClass(c.accent),
                  )}
                >
                  <FontAwesomeIcon
                    icon={featuredIcon(c.title)}
                    className="h-4 w-4 text-white/85"
                  />
                </div>
                <div className="mt-4 text-sm font-semibold text-white/90">
                  {c.title}
                </div>
                <div className="mt-1 text-sm text-white/65">
                  {c.description}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-neonPink/90 transition group-hover:text-neonPink">
                  Explore
                  <span className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
