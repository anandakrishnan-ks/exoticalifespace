import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { navItems, services } from "@/lib/data";

const LOGO_URL = "/exotica-logo.png";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={LOGO_URL} alt="Exotica Lifespace" />
            <p>
              Thoughtfully designed.
              <br />
              Carefully built.
            </p>
          </div>

          <div className="footer-links">
            <span>Navigate</span>
            {navItems.map(({ label, to }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </div>

          <div className="footer-links footer-services">
            <span>Services</span>
            {services.slice(0, 4).map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`}>
                {s.title}
              </Link>
            ))}
          </div>

          <div className="footer-cta">
            <p>Have a space in mind?</p>
            <Link to="/contact" className="text-link footer-text-link">
              Begin your project <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Exotica Lifespace. All rights reserved.</span>
          <span>Thiruvananthapuram, Kerala</span>
        </div>
      </div>
    </footer>
  );
}
