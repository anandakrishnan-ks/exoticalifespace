import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import logoAsset from "../assets/exotica-lifespace-logo.png.asset.json";
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

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Process", "process"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

const services = [
  {
    number: "01",
    title: "Interior Design & Space Planning",
    text: "Efficient layouts, considered materials, lighting and finishes shaped around your needs, style and budget.",
  },
  {
    number: "02",
    title: "Civil Construction & Renovation",
    text: "New construction, renovation and structural alterations delivered with quality and close coordination.",
  },
  {
    number: "03",
    title: "Turnkey Project Execution",
    text: "Complete coordination of design, procurement, manpower and site execution through one accountable team.",
  },
  {
    number: "04",
    title: "Custom Furniture & Interior Fit-Outs",
    text: "Kitchens, wardrobes, cabinetry, panelling, ceilings and furniture made for how you live and work.",
  },
  {
    number: "05",
    title: "Electrical, Plumbing & MEP",
    text: "Essential building services integrated carefully into the design and construction process.",
  },
  {
    number: "06",
    title: "Commercial & Hospitality Interiors",
    text: "Offices, boutiques, cafés, hotels and wellness spaces that balance identity with operational needs.",
  },
];

const process = [
  ["01", "Consultation", "Understanding your vision, requirements, budget and timeline."],
  ["02", "Design & Planning", "Concept, layout, technical details and a clear execution strategy."],
  ["03", "Execution", "Procurement, site supervision, coordination and systematic quality checks."],
  ["04", "Handover", "Final finishing, inspection, snag clearance and complete project delivery."],
] as const;

const strengths = [
  ["Single-Point Responsibility", "Design, procurement, construction and interiors coordinated by one team."],
  ["Experienced Project Management", "Structured supervision, progress monitoring and quality control."],
  ["Transparent Communication", "Clarity across scope, materials, costs, timelines and progress."],
  ["Quality Without Compromise", "Careful material choices, workmanship, detailing and finishing."],
  ["Practical, Reliable Timelines", "Realistic planning with disciplined follow-up across every stage."],
  ["Designs Tailored to You", "Every decision responds to your requirements, preferences and budget."],
] as const;

function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [heroOffset, setHeroOffset] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (!reduceMotion) setHeroOffset(Math.min(window.scrollY * 0.18, 110));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.setAttribute("data-visible", "true")),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <main className="overflow-clip bg-background">
      <header className={`site-header ${scrolled || menuOpen ? "site-header-solid" : ""}`}>
        <a href="#home" className="logo-link" aria-label="Exotica Lifespace home">
          <img src={logoAsset.url} alt="Exotica Lifespace" className="site-logo" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="nav-link">{label}</a>
          ))}
        </nav>

        <a href="#contact" className="header-cta">Free consultation <ArrowRight size={15} /></a>
        <button
          type="button"
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`} aria-hidden={!menuOpen}>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, id], index) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>
                <span>0{index + 1}</span>{label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="button-primary" onClick={closeMenu}>Book a free consultation</a>
        </div>
      </header>

      <section id="home" className="hero-section">
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
          <h1>Thoughtfully designed.<br /><em>Carefully built.</em></h1>
          <p className="hero-copy">
            Interior design, construction and turnkey contracting in Thiruvananthapuram—one team from concept to completion.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button-primary">Book a free consultation <ArrowRight size={17} /></a>
            <a href="#projects" className="button-ghost">View our work</a>
          </div>
        </div>
        <a href="#about" className="scroll-cue" aria-label="Scroll to about"><ArrowDown size={18} /><span>Discover</span></a>
      </section>

      <div className="trust-strip" aria-label="Project types">
        {[
          ["01", "Residential"], ["02", "Commercial"], ["03", "Retail"], ["04", "Hospitality"],
        ].map(([number, label]) => <div key={label}><span>{number}</span>{label}</div>)}
      </div>

      <section id="about" className="about-section section-space">
        <div className="page-shell about-grid">
          <div className="about-visual" data-reveal>
            <img src={aboutImage} alt="Designer reviewing materials and plans on site" loading="lazy" width={1200} height={1504} />
            <div className="about-note"><span>Concept to completion</span><strong>One team.<br />One responsibility.</strong></div>
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow">About Exotica</p>
            <h2>Creative vision,<br /><em>engineering discipline.</em></h2>
            <p className="lead">We create spaces that are beautiful, functional, and built around the people who use them.</p>
            <p>Exotica Lifespace brings interior design, civil construction and turnkey execution together under one accountable team. From concept development and space planning to material selection, site coordination and final handover, we manage every stage with clarity.</p>
            <p>Our approach balances refined aesthetics with comfort, everyday usability and lasting value.</p>
            <a href="#services" className="text-link">Explore what we do <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="services" className="services-section section-space">
        <div className="page-shell">
          <div className="section-heading" data-reveal>
            <div><p className="eyebrow">What we do</p><h2>From your first idea<br /><em>to the final handover.</em></h2></div>
            <p>Integrated design, construction and execution for residential, commercial, retail and hospitality spaces.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number} data-reveal>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ChevronRight className="service-arrow" size={22} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="process-section section-space">
        <div className="page-shell">
          <div className="process-intro" data-reveal>
            <p className="eyebrow eyebrow-light">Our process</p>
            <h2>A structured path<br /><em>from idea to handover.</em></h2>
            <p>Transparency, quality and accountability are built into every stage.</p>
          </div>
          <div className="process-grid">
            {process.map(([number, title, text]) => (
              <article key={number} data-reveal>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section section-space">
        <div className="page-shell">
          <div className="section-heading" data-reveal>
            <div><p className="eyebrow">Featured expertise</p><h2>Spaces crafted<br /><em>with precision.</em></h2></div>
            <p>Homes, hotels, offices and commercial environments shaped through design excellence and dependable execution.</p>
          </div>
          <div className="project-editorial">
            <figure className="project-tall" data-reveal>
              <div className="image-wrap"><img src={residenceImage} alt="Contemporary tropical luxury residence" loading="lazy" width={1200} height={1504} /></div>
              <figcaption><span>01 / Residential</span><h3>Luxury Residences</h3></figcaption>
            </figure>
            <figure className="project-wide" data-reveal>
              <div className="image-wrap"><img src={hospitalityImage} alt="Refined Kerala hospitality interior" loading="lazy" width={1600} height={1104} /></div>
              <figcaption><span>02 / Hospitality</span><h3>Hotel & Hospitality</h3></figcaption>
            </figure>
            <figure className="project-wide project-offset" data-reveal>
              <div className="image-wrap"><img src={commercialImage} alt="Elegant contemporary commercial reception" loading="lazy" width={1600} height={1104} /></div>
              <figcaption><span>03 / Commercial</span><h3>Commercial Interiors</h3></figcaption>
            </figure>
          </div>
          <p className="project-disclaimer">Representative imagery shown while the Exotica Lifespace project portfolio is being prepared.</p>
        </div>
      </section>

      <section id="why-us" className="why-section section-space">
        <div className="page-shell why-grid">
          <div className="why-intro" data-reveal>
            <p className="eyebrow">Why Exotica</p>
            <h2>Premium design sensibility.<br /><em>Professional execution.</em></h2>
            <p>More than a contractor—an accountable project partner committed to turning your vision into a completed space.</p>
          </div>
          <div className="strength-list">
            {strengths.map(([title, text]) => (
              <article key={title} data-reveal><Check size={17} /><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-banner">
        <img src={heroImage} alt="" aria-hidden="true" loading="lazy" width={1920} height={1088} />
        <div className="vision-shade" />
        <div className="page-shell vision-content" data-reveal>
          <p className="eyebrow eyebrow-light">Our vision</p>
          <blockquote>“To create exceptional spaces through design excellence, engineering precision and dependable execution.”</blockquote>
          <p>Design · Engineering · Quality · Transparency · Timely Delivery</p>
        </div>
      </section>

      <section id="contact" className="contact-section section-space">
        <div className="page-shell contact-grid">
          <div className="contact-intro" data-reveal>
            <p className="eyebrow">Start a conversation</p>
            <h2>Let’s shape a space<br /><em>distinctly yours.</em></h2>
            <p>Tell us what you are planning—whether you are building, renovating or reimagining an existing interior.</p>
            <div className="address-list">
              <address><span>Office</span>TC 29/417, Althara Nagar, Opp. Vidhyadiraja Higher Secondary School, Vellayambalam, Thiruvananthapuram – 695010</address>
              <address><span>Registered</span>L-33, Ashtapadi, Lane B, LIC Lane, Pattom Palace PO, Thiruvananthapuram – 695004</address>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={submitEnquiry} data-reveal>
            <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" /></div>
            <div className="field-row">
              <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" required autoComplete="tel" /></div>
              <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
            </div>
            <div className="field">
              <label htmlFor="project-type">Project type</label>
              <select id="project-type" name="projectType" required defaultValue="">
                <option value="" disabled>Select a project type</option>
                <option>Residential interior</option><option>New construction</option><option>Renovation</option><option>Commercial or hospitality</option><option>Other</option>
              </select>
            </div>
            <div className="field"><label htmlFor="message">Tell us about your project</label><textarea id="message" name="message" rows={4} required /></div>
            <button className="button-primary form-submit" type="submit">Send enquiry <ArrowRight size={17} /></button>
            {sent && <p className="form-success" role="status"><Check size={16} /> Thank you. Your enquiry has been prepared for the Exotica team.</p>}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell">
          <div className="footer-top">
            <div className="footer-brand"><img src={logoAsset.url} alt="Exotica Lifespace" /><p>Thoughtfully designed.<br />Carefully built.</p></div>
            <div className="footer-links"><span>Navigate</span>{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
            <div className="footer-links footer-services"><span>Services</span>{services.slice(0, 4).map((service) => <a key={service.number} href="#services">{service.title}</a>)}</div>
            <div className="footer-cta"><p>Have a space in mind?</p><a href="#contact" className="text-link footer-text-link">Begin your project <ArrowRight size={16} /></a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Exotica Lifespace. All rights reserved.</span><span>Thiruvananthapuram, Kerala</span></div>
        </div>
      </footer>
    </main>
  );
}