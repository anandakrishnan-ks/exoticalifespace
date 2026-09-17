import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  kicker?: string;
  title: ReactNode;
  subtitle?: string;
  /** Visual variant — controls background and text colour */
  variant?: "dark" | "teal" | "surface";
  className?: string;
}

/**
 * Consistent inner-page hero used on every non-home page.
 * Renders breadcrumb navigation, optional kicker, large H1, and subtitle.
 */
export function PageHero({
  breadcrumbs,
  kicker,
  title,
  subtitle,
  variant = "dark",
  className = "",
}: PageHeroProps) {
  return (
    <section className={`inner-hero inner-hero-${variant} ${className}`}>
      <div className="inner-hero-deco" aria-hidden="true" />
      <div className="page-shell">
        {/* Breadcrumb */}
        <nav className="breadcrumb inner-hero-breadcrumb" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="breadcrumb-item">
              {i > 0 && (
                <ChevronRight size={11} className="breadcrumb-sep" aria-hidden="true" />
              )}
              {crumb.to ? (
                <Link to={crumb.to} className="breadcrumb-link">
                  {crumb.label}
                </Link>
              ) : (
                <span className="breadcrumb-current" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        {kicker && <p className="eyebrow inner-hero-kicker">{kicker}</p>}
        <h1 className="inner-hero-title">{title}</h1>
        {subtitle && <p className="inner-hero-sub">{subtitle}</p>}
      </div>
    </section>
  );
}
