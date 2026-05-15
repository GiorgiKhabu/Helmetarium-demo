import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faHand,
  faHelmetUn,
  faShieldHalved,
  faUtensils,
  faVest,
} from "@fortawesome/free-solid-svg-icons";

import helmBg from "../assets/images/helm-bg.jpg";
import r1 from "../assets/images/r1.jpg";
import r2 from "../assets/images/r2.jpg";
import r3 from "../assets/images/r3.jpg";
import r4 from "../assets/images/r4.jpg";
import r5 from "../assets/images/r5.jpg";
import r6 from "../assets/images/r6.jpg";
import maingBg from "../assets/images/bg-cover.png";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function fadeInClass(delay: number = 0) {
  return `animate-fade-in opacity-0 [animation-delay:${delay}ms] [animation-fill-mode:forwards]`;
}

export function ModeSelector() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-night via-ink to-night bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: `url(${helmBg})` }}
      >
        <div
          className="absolute inset-0 bg-black/35
        "
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className={cx(
              "transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
              <span className="text-neonPink text-glow-soft" style={{textShadow: '0 0 10px black'}}>Ride With</span>
              <br />
              <span className="text-white">Identity</span>
            </h1>
            {/* <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto font-semibold">
              Premium motorcycle gear for the discerning rider. Quality, style,
              and protection that defines you.
            </p> */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-neonPink text-white font-semibold rounded-full shadow-glowPink hover:shadow-glowPink-intense transition-all duration-300 hover:scale-105"
              >
                <FontAwesomeIcon icon={faHelmetUn} className="h-5 w-5" />
                Shop Now
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                to="/menu"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <FontAwesomeIcon icon={faUtensils} className="h-5 w-5" />
                Visit Kitchen
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div
            className="absolute left-1/2 transform -translate-x-1/2 animate-bounce"
            style={{ bottom: -150 }}
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className="h-6 w-6 text-white/60"
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 bg-night/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Premium{" "}
              <span className="text-neonPink text-glow-soft">Categories</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Discover our curated collection of motorcycle essentials, designed
              for performance and style.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: faHelmetUn,
                title: "Helmets",
                desc: "Advanced protection",
                link: "/shop?category=Helmets",
              },
              {
                icon: faVest,
                title: "Gear",
                desc: "Weather-resistant gear",
                link: "/shop?category=Gear",
              },
              {
                icon: faHand,
                title: "Gloves",
                desc: "Grip and comfort",
                link: "/shop?category=Gloves",
              },
              {
                icon: faShieldHalved,
                title: "Accessories",
                desc: "Complete your ride",
                link: "/shop?category=Accessories",
              },
            ].map((cat, i) => (
              <Link
                key={cat.title}
                to={cat.link}
                className={cx(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-ink/30 p-6 transition-all duration-300 hover:border-neonPink/35 hover:shadow-glowPink hover:scale-105",
                  fadeInClass(200 + i * 100),
                )}
              >
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-neonPink/20 to-purple-500/20 ring-1 ring-white/10">
                    <FontAwesomeIcon
                      icon={cat.icon}
                      className="h-8 w-8 text-neonPink"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-white/60">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 bg-gradient-to-r from-night to-ink bg-cover bg-center min-h-[800px] "
      style={{backgroundImage: `url(${maingBg})`}}>
        <div className="max-w-4xl mx-auto text-center bg-black/50 p-4 rounded-2xl shadow-glowPink">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            The{" "}
            <span className="text-neonPink text-glow-soft">Helmetarium</span>{" "}
            Story
          </h2>
          <div className="">
            <div className={cx("text-left", fadeInClass(400))}>
              <p className="text-lg text-white/80 mb-6">
                Born from a passion for the open road, Helmetarium represents
                the fusion of cutting-edge technology, premium materials, and
                uncompromising style. We believe that every rider deserves gear
                that not only protects but also expresses their unique identity.
              </p>
              <p className="text-lg text-white/80">
                From our neon-accented helmets to our meticulously crafted
                jackets, each piece is designed to withstand the demands of the
                road while turning heads off it.
              </p>
            </div>
            {/* <div className={cx("relative", fadeInClass(600))}>
              <img
                className="rounded-2xl shadow-glowPink"
                src={helmBg}
                alt="Helmetarium"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-night/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Rider{" "}
              <span className="text-neonPink text-glow-soft">Gallery</span>
            </h2>
            <p className="text-lg text-white/70">
              See our gear in action from the Helmetarium community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[r1, r2, r3, r4, r5, r6].map((src, i) => (
              <img
                src={src}
                alt={`Rider ${i + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-ink to-night">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Rider{" "}
              <span className="text-neonPink text-glow-soft">Testimonials</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Alex R.",
                text: "The quality of Helmetarium gear is unmatched. My Exo Combat Evo helmet saved me in a nasty spill.",
                rating: 5,
              },
              {
                name: "Sarah M.",
                text: "Love the style and protection. The neon accents make me stand out on the road!",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className={cx(
                  "rounded-2xl border border-white/10 bg-night/40 p-6",
                  fadeInClass(500 + i * 200),
                )}
              >
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }, (_, j) => (
                    <FontAwesomeIcon
                      key={j}
                      icon={faStar}
                      className="h-4 w-4 text-neonPink"
                    />
                  ))}
                </div>
                <p className="text-white/80 mb-4">"{testimonial.text}"</p>
                <p className="text-neonPink font-semibold">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
