import React from "react";
import { Link } from "react-router-dom";

function SocialIcon({
  title,
  url,
  children,
}: {
  title: string;
  url: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={url}
      aria-label={title}
      title={title}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-night/60 text-white/80 transition hover:text-white hover:shadow-glowPink hover:ring-1 hover:ring-neonPink/35"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold text-neonPink text-glow">
              Helmetarium
            </div>
            <p className="mt-2 max-w-sm text-sm text-white/70">
              Rider-inspired restaurant & bar.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-white/85">
              Contact
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <span className="text-white/50">Email:</span>{" "}
                <a
                  className="hover:text-white"
                  href="mailto:helmetarium@info.ge"
                >
                  helmetarium@info.ge
                </a>
              </li>
              <li>
                <span className="text-white/50">Phone:</span>{" "}
                <a className="hover:text-white" href="tel:+995555331589">
                  +995 555 33 15 89
                </a>
              </li>
              <li>
                <span className="text-white/50 mr-1">Address:</span>
                <a
                  className="hover:text-white"
                  href="https://maps.app.goo.gl/vg1h4Ubcjm4JUBy28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  დავით აღმაშენებლის ხეივანი N157/159
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold tracking-wide text-white/85">
              Social
            </div>
            <div className="mt-3 flex items-center gap-3">
              <SocialIcon
                title="Instagram"
                url="https://www.instagram.com/helm_shopharley/"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon
                title="Facebook"
                url="https://www.facebook.com/Helmetarium"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3l1-3h-4v-3c0-.6.4-1 1-1Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} Helmetarium. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
