import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Explore", href: "#explore" },
  { label: "Simulations", href: "#simulations" },
  { label: "About", href: "#about" },
];

/**
 * Top navigation bar. Kept as a single reusable component so it can sit at
 * the top of every page (homepage now, individual topic pages later)
 * without duplicating markup.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lab-border/80 bg-lab-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-signal-cyan/40 bg-signal-cyan/10 font-display text-signal-cyan">
            ∞
          </span>
          <span className="font-display text-lg tracking-tight text-lab-text">
            Math Lab
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-lab-muted transition-colors hover:text-lab-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-lab-border text-lab-text md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-4 bg-current transition-transform ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col border-t border-lab-border/80 px-5 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm text-lab-muted transition-colors hover:text-lab-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
