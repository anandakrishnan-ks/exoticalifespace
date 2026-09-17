import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect } from "react";

import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { useReveal } from "@/hooks/useReveal";
import { services } from "@/lib/data";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    return {
      meta: [
        { title: service ? `${service.title} | Exotica Lifespace` : "Service | Exotica Lifespace" },
        {
          name: "description",
          content: service?.short ?? "Exotica Lifespace service detail.",
        },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);
  useReveal();

  useEffect(() => {
    if (!service) navigate({ to: "/services" });
  }, [service, navigate]);

  if (!service) return null;

  // Related: up to 3 other services
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="bg-background">
      <SiteNav alwaysSolid />

      <PageHero
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
        kicker={`Service ${service.number}`}
        title={service.title}
        subtitle={service.short}
        variant="dark"
      />

      {/* ── Description + badge ── */}
      <section className="service-detail-body">
        <div className="page-shell">
          <div className="service-detail-grid">
            <div data-reveal>
              <span className="service-detail-badge">
                Service {service.number} of {services.length}
              </span>
              <h2>
                What this service
                <br />
                <em>covers.</em>
              </h2>
              <p className="service-detail-desc">{service.description}</p>
            </div>
            <div data-reveal>
              <p className="eyebrow">Project types</p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem,2.5vw,2.2rem)",
                  fontWeight: 400,
                  margin: "1.5rem 0 0",
                }}
              >
                We handle these types of projects
              </h3>
              <div className="project-type-tags" style={{ marginTop: "1.5rem" }}>
                {service.projectTypes.map((pt) => (
                  <span className="project-type-tag" key={pt}>
                    {pt}
                  </span>
                ))}
              </div>

              <div
                style={{
                  marginTop: "3rem",
                  paddingTop: "2.5rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <p className="eyebrow">Our approach</p>
                <p className="service-approach-text" style={{ marginTop: "1.2rem" }}>
                  {service.approach}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="service-included">
        <div className="page-shell">
          <div className="service-included-grid">
            <div data-reveal>
              <p className="eyebrow">What's included</p>
              <h2>
                Every aspect,
                <br />
                <em>fully managed.</em>
              </h2>
              <p
                style={{
                  maxWidth: "32rem",
                  color: "var(--muted-foreground)",
                  marginTop: "1.5rem",
                  lineHeight: 1.85,
                  fontSize: ".92rem",
                }}
              >
                We manage every component of this service in-house — no outsourcing, no handoffs, no
                gaps in accountability.
              </p>
            </div>
            <div data-reveal>
              <ul className="included-list" aria-label="What is included">
                {service.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="related-services-section">
        <div className="page-shell">
          <div data-reveal>
            <p className="eyebrow">Related services</p>
            <h2>
              You might also
              <br />
              <em>need these.</em>
            </h2>
          </div>
          <div className="service-list" style={{ marginTop: "3rem" }}>
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="service-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "5rem minmax(14rem,.9fr) minmax(18rem,1.2fr) 2rem",
                  alignItems: "center",
                  gap: "2rem",
                  minHeight: "9rem",
                  paddingInline: "0",
                  borderBottom: "1px solid var(--border)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "background .35s, padding .35s",
                }}
                data-reveal
              >
                <span className="service-number">{s.number}</span>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.2rem,2vw,1.8rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ margin: 0, color: "var(--muted-foreground)", fontSize: ".88rem" }}>
                  {s.short}
                </p>
                <ChevronRight className="service-arrow" size={20} aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link to="/services" className="text-link">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="service-cta-panel">
        <div className="page-shell">
          <div className="service-cta-inner">
            <div>
              <h2>
                Interested in
                <br />
                <em>{service.title.split(" ")[0]}?</em>
              </h2>
              <p>
                Tell us about your project and we'll schedule a free consultation at your
                convenience.
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
