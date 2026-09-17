import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { useReveal } from "@/hooks/useReveal";
import { services, processSteps } from "@/lib/data";

import heroImage from "../assets/exotica-hero.jpg";
import aboutImage from "../assets/exotica-about.jpg";
import residenceImage from "../assets/project-residence.jpg";
import hospitalityImage from "../assets/project-hospitality.jpg";
import commercialImage from "../assets/project-commercial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Exotica Lifespace | Interior Design & Construction" },
      {
        name: "description",
        content:
          "Premium interior design, civil construction and turnkey project execution in Thiruvananthapuram, Kerala.",
      },
      { property: "og:title", content: "Exotica Lifespace | Thoughtfully Designed" },
      {
        property: "og:description",
        content: "Concept to completion. One team. One responsibility.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [heroOffset, setHeroOffset] = useState(0);
  useReveal();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      if (!reduceMotion) setHeroOffset(Math.min(window.scrollY * 0.18, 110));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="overflow-clip bg-background">
      <SiteNav />

      {/* ── Hero ── */}
      <section className="hero-section">
        <img
          src={heroImage}
          alt="Luxury tropical living room overlooking the Kerala landscape"
          className="hero-image"
          width={1920}
          height={1088}
          fetchPriority="high"
          style={{ transform: `translate3d(0, ${heroOffset}px, 0) scale(1.08)` }}
        />
        <div className="hero-shade" />
        <div className="hero-content page-shell">
          <p className="eyebrow hero-eyebrow">Design · Build · Turnkey</p>
          <h1>
            Thoughtfully designed.
            <br />
            <em>Carefully built.</em>
          </h1>
          <p className="hero-copy">
            Interior design, construction and turnkey contracting in Thiruvananthapuram—one team
            from concept to completion.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="button-primary">
              Book a free consultation <ArrowRight size={17} />
            </Link>
            <Link to="/projects" className="button-ghost">
              View our work
            </Link>
          </div>
        </div>
        <Link to="/about" className="scroll-cue" aria-label="Scroll to about">
          <ArrowDown size={18} />
          <span>Discover</span>
        </Link>
      </section>

      {/* ── Trust strip ── */}
      <div className="trust-strip" aria-label="Project types">
        {(["Residential", "Commercial", "Retail", "Hospitality"] as const).map((label, i) => (
          <div key={label}>
            <span>0{i + 1}</span>
            {label}
          </div>
        ))}
      </div>

      {/* ── About teaser ── */}
      <section className="about-section section-space">
        <div className="page-shell about-grid">
          <div className="about-visual" data-reveal>
            <img
              src={aboutImage}
              alt="Designer reviewing materials and plans on site"
              loading="lazy"
              width={1200}
              height={1504}
            />
            <div className="about-note">
              <span>Concept to completion</span>
              <strong>
                One team.
                <br />
                One responsibility.
              </strong>
            </div>
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow">About Exotica</p>
            <h2>
              Creative vision,
              <br />
              <em>engineering discipline.</em>
            </h2>
            <p className="lead">
              We create spaces that are beautiful, functional, and built around the people who use
              them.
            </p>
            <p>
              Exotica Lifespace brings interior design, civil construction and turnkey execution
              together under one accountable team. From concept development and space planning to
              material selection, site coordination and final handover, we manage every stage with
              clarity.
            </p>
            <p>
              Our approach balances refined aesthetics with comfort, everyday usability and lasting
              value.
            </p>
            <Link to="/about" className="text-link" style={{ marginTop: "2rem" }}>
              Our story &amp; values <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services teaser ── */}
      <section className="services-section section-space home-services-teaser">
        <div className="page-shell">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">What we do</p>
              <h2>
                From your first idea
                <br />
                <em>to the final handover.</em>
              </h2>
            </div>
            <p>
              Integrated design, construction and execution for residential, commercial, retail and
              hospitality spaces.
            </p>
          </div>
          <div className="service-list">
            {services.slice(0, 4).map((service) => (
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
                <p style={{ margin: 0, color: "var(--muted-foreground)", fontSize: ".9rem" }}>
                  {service.short}
                </p>
                <ChevronRight className="service-arrow" size={22} aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Link to="/services" className="text-link">
              View all six services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Process teaser ── */}
      <section className="home-process-teaser">
        <div className="page-shell">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Our process</p>
              <h2>
                A structured path
                <br />
                <em>from idea to handover.</em>
              </h2>
            </div>
            <p>
              Transparency, quality and accountability are built into every stage of our delivery
              process.
            </p>
          </div>
          <div className="home-process-grid">
            {processSteps.map((step) => (
              <div className="home-process-card" key={step.number} data-reveal>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.short}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link to="/process" className="section-link">
              How we work in detail <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Projects teaser ── */}
      <section className="projects-section section-space">
        <div className="page-shell">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Featured expertise</p>
              <h2>
                Spaces crafted
                <br />
                <em>with precision.</em>
              </h2>
            </div>
            <p>
              Homes, hotels, offices and commercial environments shaped through design excellence
              and dependable execution.
            </p>
          </div>
          <div className="project-editorial">
            <figure data-reveal>
              <div className="image-wrap">
                <img
                  src={residenceImage}
                  alt="Contemporary tropical luxury residence"
                  loading="lazy"
                  width={1200}
                  height={1504}
                />
              </div>
              <figcaption>
                <span>01 / Residential</span>
                <h3>Luxury Residences</h3>
              </figcaption>
            </figure>
            <figure data-reveal>
              <div className="image-wrap">
                <img
                  src={hospitalityImage}
                  alt="Refined Kerala hospitality interior"
                  loading="lazy"
                  width={1600}
                  height={1104}
                />
              </div>
              <figcaption>
                <span>02 / Hospitality</span>
                <h3>Hotel &amp; Hospitality</h3>
              </figcaption>
            </figure>
            <figure data-reveal>
              <div className="image-wrap">
                <img
                  src={commercialImage}
                  alt="Elegant contemporary commercial reception"
                  loading="lazy"
                  width={1600}
                  height={1104}
                />
              </div>
              <figcaption>
                <span>03 / Commercial</span>
                <h3>Commercial Interiors</h3>
              </figcaption>
            </figure>
          </div>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p className="project-disclaimer">
              Representative imagery shown while the Exotica Lifespace project portfolio is being
              prepared.
            </p>
            <Link to="/projects" className="text-link" style={{ marginTop: 0 }}>
              Browse all projects <ArrowRight size={16} />
            </Link>
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

      {/* ── CTA strip ── */}
      <section className="home-cta-strip">
        <div className="page-shell">
          <h2>
            Let's shape a space
            <br />
            <em>distinctly yours.</em>
          </h2>
          <p>
            Whether you're building, renovating or reimagining an existing interior—we'd love to
            hear about it.
          </p>
          <Link to="/contact" className="button-primary">
            Book a free consultation <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
