import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { useReveal } from "@/hooks/useReveal";
import { projects, type Project } from "@/lib/data";

import heroImage from "../assets/exotica-hero.jpg";
import aboutImage from "../assets/exotica-about.jpg";
import residenceImage from "../assets/project-residence.jpg";
import hospitalityImage from "../assets/project-hospitality.jpg";
import commercialImage from "../assets/project-commercial.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Exotica Lifespace" },
      {
        name: "description",
        content:
          "Browse Exotica Lifespace projects across residential, commercial, retail and hospitality categories — spaces built through design excellence and dependable execution.",
      },
    ],
  }),
  component: ProjectsPage,
});

const imageMap: Record<Project["imageKey"], string> = {
  hero: heroImage,
  about: aboutImage,
  residence: residenceImage,
  hospitality: hospitalityImage,
  commercial: commercialImage,
};

const categories = ["All", "Residential", "Commercial", "Hospitality"] as const;
type Category = (typeof categories)[number];

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  useReveal();

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="bg-background">
      <SiteNav alwaysSolid />

      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Projects" }]}
        kicker="Featured expertise"
        title={
          <>
            Spaces crafted
            <br />
            <em>with precision.</em>
          </>
        }
        subtitle="Homes, hotels, offices and commercial environments shaped through design excellence and dependable execution in Thiruvananthapuram, Kerala."
        variant="surface"
      />

      {/* ── Projects grid ── */}
      <section className="projects-page-body">
        <div className="page-shell">
          {/* Filter bar */}
          <div
            className="projects-filter-bar"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeFilter === cat ? "filter-btn-active" : ""}`}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
              >
                {cat}
                {cat !== "All" && (
                  <span style={{ marginLeft: ".5rem", opacity: 0.55 }}>
                    ({projects.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="projects-page-grid">
            {filtered.map((project) => (
              <article className="project-page-card" key={project.id} data-reveal>
                <div className="project-page-card-img">
                  <img
                    src={imageMap[project.imageKey]}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={980}
                  />
                </div>
                <div className="project-page-card-meta">
                  <span>
                    {project.category} · {project.location}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="projects-disclaimer">
            Representative imagery shown while the Exotica Lifespace project portfolio is being
            finalised. Photography from completed client projects will be added progressively.
          </p>
        </div>
      </section>

      {/* ── Editorial teaser ── */}
      <section className="section-space">
        <div className="page-shell">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Our breadth</p>
              <h2>
                Every category,
                <br />
                <em>one team.</em>
              </h2>
            </div>
            <p>
              We work across residential, commercial, retail and hospitality — bringing the same
              commitment to quality and precision to every project type.
            </p>
          </div>
          <div className="project-editorial">
            <figure className="project-tall" data-reveal>
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
                <span>Residential</span>
                <h3>Homes & Villas</h3>
              </figcaption>
            </figure>
            <figure className="project-wide" data-reveal>
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
                <span>Hospitality</span>
                <h3>Hotels & Restaurants</h3>
              </figcaption>
            </figure>
            <figure className="project-wide project-offset" data-reveal>
              <div className="image-wrap">
                <img
                  src={commercialImage}
                  alt="Elegant contemporary commercial space"
                  loading="lazy"
                  width={1600}
                  height={1104}
                />
              </div>
              <figcaption>
                <span>Commercial</span>
                <h3>Offices & Retail</h3>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="projects-cta">
        <div className="page-shell">
          <p className="eyebrow eyebrow-light">Start your project</p>
          <h2>
            Ready to create
            <br />
            <em>something exceptional?</em>
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
