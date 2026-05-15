import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMapMarkerAlt,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ProductCard } from "../components/ProductCard";
import { PRODUCTS, CATEGORIES } from "../data/products";

export function Shop() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Show all products grouped by category
  const menuItems = React.useMemo(() => {
    const grouped = PRODUCTS.reduce(
      (acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      },
      {} as Record<string, typeof PRODUCTS>,
    );
    return grouped;
  }, []);

  const scrollToSection = (category: string) => {
    let element: HTMLElement | null = null;

    if (category === "All") {
      element = document.querySelector("main");
    } else {
      element = document.getElementById(`section-${category}`);
    }

    if (element) {
      const offset = 150; // height of your fixed header
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-night via-ink to-night">
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden">
          <div className="fixed right-0 top-0 h-full w-80 bg-night border-l border-white/10 shadow-2xl transform transition-transform duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white/60 hover:text-white"
                >
                  <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => scrollToSection(category)}
                    className="w-full text-left px-4 py-3 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors flex items-center justify-between"
                  >
                    {category}
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-sm font-semibold text-white/60 mb-4">
                  Contact Info
                </h3>
                <div className="space-y-3 text-sm text-white/60">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="h-4 w-4"
                    />
                    <span>Tbilisi, Georgia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
                    <span>+995 555 123 456</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                    <span>Daily 12:00 - 24:00</span>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href="https://www.facebook.com/Helmetarium"
                    className="text-white/60 hover:text-neonPink transition-colors"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/helmetarium/?hl=en"
                    className="text-white/60 hover:text-neonPink transition-colors"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        className="sticky z-40 bg-night/80 backdrop-blur border-b border-white/10"
        style={{ top: 65 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-white/80 hover:text-white"
            >
              <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
            </button>
            <h1 className="text-2xl font-bold text-white">Kitchen</h1>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => scrollToSection(category)}
                className="text-white/80 hover:text-neonPink transition-colors"
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-night to-ink">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Bold Flavors for{" "}
            <span className="text-neonPink text-glow-soft">Bold Riders</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Experience our rider-inspired cuisine, crafted with premium
            ingredients and neon energy.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {Object.entries(menuItems).map(([category, items]) => (
          <section key={category} id={`section-${category}`} className="mb-16">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">{category}</h3>
              <div className="w-16 h-1 bg-neonPink rounded-full"></div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <ProductCard product={item} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
