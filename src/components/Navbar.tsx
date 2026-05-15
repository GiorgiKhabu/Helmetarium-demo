import React from "react";
import { Link, NavLink } from "react-router-dom";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const navLinkBase =
    "relative rounded-full px-3 py-2 text-sm transition outline-none after:pointer-events-none after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:scale-x-0 after:origin-center after:rounded-full after:bg-neonPink after:shadow-glowPink after:transition-transform after:duration-200";
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-wide"
        >
          <span className="text-xl text-white/95 transition group-hover:text-white">
            <span className="text-neonPink text-glow">Helmetarium</span>
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              cx(
                navLinkBase,
                isActive
                  ? "text-white after:scale-x-100"
                  : "text-white/75 hover:text-white hover:after:scale-x-100",
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              cx(
                navLinkBase,
                isActive
                  ? "text-white after:scale-x-100"
                  : "text-white/75 hover:text-white hover:after:scale-x-100",
              )
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              cx(
                navLinkBase,
                isActive
                  ? "text-white after:scale-x-100"
                  : "text-white/75 hover:text-white hover:after:scale-x-100",
              )
            }
          >
            Menu
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
