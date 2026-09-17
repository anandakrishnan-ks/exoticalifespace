import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

const LOGO_URL = "/exotica-logo.png";

interface SiteNavProps {
  /** When true the header is always in its "solid" (opaque) state — used on all interior pages. */
  alwaysSolid?: boolean;
}

export function SiteNav({ alwaysSolid = false }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (alwaysSolid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysSolid]);

  const solid = alwaysSolid || scrolled || menuOpen;
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${solid ? "site-header-solid" : ""}`}>
      <Link to="/" className="logo-link" aria-label="Exotica Lifespace home">
        <img src={LOGO_URL} alt="Exotica Lifespace" className="site-logo" />
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(({ label, to }) => (
          <Link key={to} to={to} className="nav-link">
            {label}
          </Link>
        ))}
      </nav>

      <Link to="/contact" className="header-cta">
        Free consultation <ArrowRight size={15} />
      </Link>

      <button
        type="button"
        className="menu-button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {navItems.map(({ label, to }, index) => (
            <Link key={to} to={to} onClick={closeMenu}>
              <span>0{index + 1}</span>
              {label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="button-primary" onClick={closeMenu}>
          Book a free consultation
        </Link>
      </div>
    </header>
  );
}
