import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { useReveal } from "@/hooks/useReveal";
import { strengths } from "@/lib/data";

import aboutImage from "../assets/exotica-about.jpg";
import heroImage from "../assets/exotica-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Exotica Lifespace" },
      {
        name: "description",
        content:
          "Learn about Exotica Lifespace — our story, design philosophy, values, and what makes us a trusted name in interior design and construction in Thiruvananthapuram.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    number: "01",
    title: "Creativity",
    desc: "Design that balances artistic vision with technical precision—every space we create is original, considered, and purposeful.",
  },
  {
    number: "02",
    title: "Integrity",
    desc: "Transparent communication, honest pricing, accurate timelines and no hidden surprises from start to handover.",
  },
  {
    number: "03",
    title: "Quality",
    desc: "No shortcuts. No compromises. Every material is carefully chosen and every finish is executed to the highest standard.",
  },
  {
    number: "04",
    title: "Partnership",
    desc: "We treat your project as our own. One team, one contract, one point of accountability—from concept to completion.",
  },
] as const;

function AboutPage() {
  useReveal();

  return (
    <main className="bg-background">
      <SiteNav alwaysSolid />

      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        kicker="Exotica Lifespace"
        title={
          <>
            Creative vision,
            <br />
            <em>engineering discipline.</em>
          </>
        }
        subtitle="We bring interior design, civil construction and turnkey project execution together under one accountable team — creating spaces that are beautiful, functional, and built to last."
        variant="dark"
      />

      {/* ── Company Story ── */}
      <section className="about-story">
        <div className="page-shell">
          <div className="about-story-grid">
            <div className="about-story-text" data-reveal>
              <p className="eyebrow">Our story</p>
              <h2>
                Built on clarity,
                <br />
                <em>delivered with care.</em>
              </h2>
              <p className="lead">
                Exotica Lifespace was founded on a simple but ambitious belief: that great spaces
                should be accessible, not just aspirational.
              </p>
              <p>
                We bring together the disciplines of interior design, civil construction, and
                turnkey project execution under one roof. Our team includes experienced designers,
                engineers, project managers, and skilled craftspeople who collaborate from the first
                sketch to the final snag check.
              </p>
              <p>
                Based in Thiruvananthapuram, Kerala, we work across residential, commercial, retail
                and hospitality sectors — serving clients who value quality, clarity and a team that
                actually delivers on its commitments.
              </p>
              <p>
                Our philosophy is straightforward: listen carefully, design thoughtfully, build
                honestly, and hand over with pride.
              </p>
              <Link to="/services" className="text-link" style={{ marginTop: "2rem" }}>
                What we offer <ArrowRight size={16} />
              </Link>
            </div>
            <div className="about-story-image" data-reveal>
              <img
                src={aboutImage}
                alt="Designer reviewing materials and construction plans on site"
                loading="lazy"
                width={1200}
                height={1504}
              />
              <div className="about-story-caption">
                <span>Thiruvananthapuram, Kerala</span>
                <strong>
                  Concept to completion.
                  <br />
                  One team.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="values-section">
        <div className="page-shell">
          <div className="values-section-head" data-reveal>
            <div>
              <p className="eyebrow">What guides us</p>
              <h2>
                Our principles,
                <br />
                <em>in every project.</em>
              </h2>
            </div>
            <p>
              These aren't slogans — they're the standards we hold ourselves to on every project,
              regardless of size or budget.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.number} data-reveal>
                <span className="value-number">{v.number}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strengths ── */}
      <section className="about-strengths">
        <div className="page-shell">
          <div className="about-strengths-head" data-reveal>
            <div>
              <p className="eyebrow">Why Exotica</p>
              <h2>
                Premium design sensibility.
                <br />
                <em>Professional execution.</em>
              </h2>
            </div>
            <p>
              More than a contractor — an accountable project partner committed to turning your
              vision into a completed space you're proud of.
            </p>
          </div>
          <div className="strengths-full-grid">
            {strengths.map(([title, text]) => (
              <article className="strength-full-item" key={title} data-reveal>
                <Check size={17} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision banner ── */}
      <section className="vision-banner">
        <img src={heroImage} alt="" aria-hidden="true" loading="lazy" width={1920} height={1088} />
        <div className="vision-shade" />
        <div className="page-shell vision-content" data-reveal>
          <p className="eyebrow eyebrow-light">Our vision</p>
          <blockquote>
            "To create exceptional spaces through design excellence, engineering precision and
            dependable execution."
          </blockquote>
          <p>Design · Engineering · Quality · Transparency · Timely Delivery</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="page-shell">
          <h2>
            Ready to start
            <br />
            <em>your project?</em>
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
