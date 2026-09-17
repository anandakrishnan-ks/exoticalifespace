import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";

import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { useReveal } from "@/hooks/useReveal";
import { services } from "@/lib/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Exotica Lifespace" },
      {
        name: "description",
        content:
          "Explore the full range of services offered by Exotica Lifespace — from interior design and civil construction to turnkey project execution, custom furniture, MEP, and commercial interiors.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  useReveal();

  return (
    <main className="bg-background">
      <SiteNav alwaysSolid />

      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        kicker="What we offer"
        title={<>From your first idea<br /><em>to the final handover.</em></>}
        subtitle="Integrated design, construction and execution services for residential, commercial, retail and hospitality spaces — delivered by one accountable team."
        variant="teal"
      />

      {/* ── Intro ── */}
      <section className="services-page-intro">
        <div className="page-shell">
          <div className="services-intro-grid" data-reveal>
            <div>
              <p className="eyebrow">Six services</p>
              <h2>
                Everything your project
                <br />
                <em>needs, in one place.</em>
              </h2>
            </div>
            <p>
              From spatial planning and design to civil construction, MEP, custom furniture and complete turnkey
              delivery — we provide every service your project requires. No fragmented teams. No communication gaps. One
              team that's accountable for the whole.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services list ── */}
      <section className="services-full-list">
        <div className="page-shell">
          <div className="service-list" role="list">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="service-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "5rem minmax(14rem,.9fr) minmax(18rem,1.2fr) 2rem",
                  alignItems: "center",
                  gap: "2rem",
                  minHeight: "9.5rem",
                  paddingInline: "0",
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "background .35s, padding .35s",
                }}
                data-reveal
                role="listitem"
              >
                <span className="service-number">{service.number}</span>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.35rem,2.2vw,2rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ margin: 0, color: "var(--muted-foreground)", fontSize: ".9rem" }}>{service.short}</p>
                <ChevronRight className="service-arrow" size={22} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA panel ── */}
      <section className="service-cta-panel">
        <div className="page-shell">
          <div className="service-cta-inner">
            <div>
              <h2>
                Not sure which service
                <br />
                <em>you need?</em>
              </h2>
              <p>
                Book a free consultation and let's talk through your project. We'll help you understand the scope,
                timeline and cost — with no obligation.
              </p>
            </div>
            <Link to="/contact" className="button-primary" style={{ flexShrink: 0 }}>
              Start a conversation <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
