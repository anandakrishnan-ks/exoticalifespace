import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { useReveal } from "@/hooks/useReveal";
import { processSteps } from "@/lib/data";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process | Exotica Lifespace" },
      {
        name: "description",
        content:
          "Discover how Exotica Lifespace works — from initial consultation through design, execution and final handover. A structured, transparent process at every stage.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  useReveal();

  return (
    <main className="bg-background">
      <SiteNav alwaysSolid />

      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Process" }]}
        kicker="How we work"
        title={<>A structured path<br /><em>from idea to handover.</em></>}
        subtitle="Transparency, quality and accountability are built into every stage of our delivery. Here's exactly what to expect when you work with us."
        variant="dark"
      />

      {/* ── Overview strip (dark bg continues) ── */}
      <section
        className="process-page-section"
        style={{ background: "var(--dark)", color: "var(--dark-foreground)", paddingBottom: "clamp(6rem,11vw,10rem)" }}
      >
        <div className="page-shell">
          <div className="process-overview-strip" data-reveal>
            {processSteps.map((step) => (
              <div className="process-overview-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deep dive steps ── */}
      <section className="process-deep">
        <div className="page-shell">
          {processSteps.map((step) => (
            <div className="process-deep-step" key={step.number} data-reveal>
              {/* Sticky label */}
              <div className="process-step-label">
                <span className="process-step-num">{step.number}</span>
                <h2>{step.title}</h2>
                <span className="process-step-duration">{step.duration}</span>
              </div>

              {/* Detail */}
              <div className="process-step-body">
                <p className="body-lg">{step.detail}</p>
                <p className="eyebrow" style={{ marginBottom: "1.2rem" }}>Key activities</p>
                <ul className="process-points" aria-label={`Key activities for ${step.title}`}>
                  {step.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-space" style={{ background: "var(--surface)" }}>
        <div className="page-shell">
          <div data-reveal style={{ marginBottom: "clamp(3rem,6vw,5rem)" }}>
            <p className="eyebrow">Common questions</p>
            <h2>
              Things clients often
              <br />
              <em>ask us about.</em>
            </h2>
          </div>
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {[
              {
                q: "How long does a typical project take?",
                a: "Timelines vary by scope. A standard residential interior can take 8–14 weeks from design sign-off to handover. New construction or larger commercial projects typically run 4–12 months. We provide a detailed schedule at the design stage.",
              },
              {
                q: "Do you work on projects outside Thiruvananthapuram?",
                a: "Our primary focus is Thiruvananthapuram and the surrounding districts. For the right project, we do travel — please reach out and we'll discuss feasibility.",
              },
              {
                q: "Can we hire you just for design, without construction?",
                a: "Yes. While we specialise in integrated delivery, we also offer standalone interior design and planning services. We can guide you through design and hand over drawings and specifications to your preferred contractor.",
              },
              {
                q: "How do you handle budget overruns?",
                a: "Transparent cost management is central to how we work. We provide a detailed cost estimate before any work begins, and any change in scope is presented to you for approval before it's actioned. No surprises.",
              },
              {
                q: "What happens after handover?",
                a: "We remain available after handover to address any snag items and offer post-completion support. We take pride in our work and want you to be fully satisfied with the finished space.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                style={{ padding: "2rem 0", borderBottom: "1px solid var(--border)" }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.2rem,2vw,1.7rem)",
                    fontWeight: 400,
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  {q}
                  <span style={{ color: "var(--primary)", fontSize: "1.5rem", lineHeight: 1, flexShrink: 0 }}>+</span>
                </summary>
                <p
                  style={{
                    marginTop: "1.5rem",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.85,
                    maxWidth: "56rem",
                    fontSize: ".93rem",
                  }}
                >
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="process-cta">
        <div className="page-shell">
          <p className="eyebrow">Ready to begin?</p>
          <h2>
            Let's start your
            <br />
            <em>project together.</em>
          </h2>
          <Link to="/contact" className="button-primary">
            Book a free consultation <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
