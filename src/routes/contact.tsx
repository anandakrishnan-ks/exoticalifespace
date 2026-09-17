import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { useState, type FormEvent } from "react";

import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Exotica Lifespace" },
      {
        name: "description",
        content:
          "Get in touch with Exotica Lifespace. Book a free consultation for your interior design, construction or turnkey project in Thiruvananthapuram, Kerala.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  useReveal();

  const submitEnquiry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <main className="bg-background">
      <SiteNav alwaysSolid />

      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        kicker="Start a conversation"
        title={<>Let's shape a space<br /><em>distinctly yours.</em></>}
        subtitle="Tell us what you are planning — whether you are building, renovating or reimagining an existing interior. A free consultation is the best place to start."
        variant="dark"
      />

      {/* ── Contact body ── */}
      <section className="contact-page-body">
        <div className="page-shell">
          <div className="contact-page-cols">
            {/* Info column */}
            <div data-reveal>
              <p className="eyebrow">Reach us</p>
              <h2>
                We'd love to hear
                <br />
                <em>from you.</em>
              </h2>
              <p className="contact-intro-text">
                Whether you have a clear brief or just an idea, we're happy to talk. Every project starts with a
                conversation — reach out and we'll respond within one working day.
              </p>

              <div className="contact-info-card">
                <span className="contact-info-label">Office address</span>
                <address className="contact-info-value">
                  TC 29/417, Althara Nagar,
                  <br />
                  Opp. Vidhyadiraja Higher Secondary School,
                  <br />
                  Vellayambalam, Thiruvananthapuram – 695010
                </address>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-label">Registered address</span>
                <address className="contact-info-value">
                  L-33, Ashtapadi, Lane B, LIC Lane,
                  <br />
                  Pattom Palace PO,
                  <br />
                  Thiruvananthapuram – 695004
                </address>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-label">Working hours</span>
                <p className="contact-info-value">Monday – Saturday, 9 am – 6 pm IST</p>
              </div>

              <div className="contact-info-card">
                <span className="contact-info-label">What to expect</span>
                <ul style={{ listStyle: "none", padding: 0, margin: "0.8rem 0 0", display: "grid", gap: ".6rem" }}>
                  {[
                    "Response within 1 working day",
                    "No obligation free consultation",
                    "Detailed project scope discussion",
                    "Transparent cost estimate provided",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: ".8rem",
                        color: "var(--muted-foreground)",
                        fontSize: ".85rem",
                      }}
                    >
                      <Check size={13} style={{ color: "var(--primary)", flexShrink: 0, marginTop: ".15rem" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form column */}
            <div data-reveal>
              <p className="eyebrow">Enquiry form</p>
              <h2 style={{ marginBottom: "2.5rem" }}>
                Tell us about
                <br />
                <em>your project.</em>
              </h2>

              <form className="enquiry-form" onSubmit={submitEnquiry} noValidate>
                <div className="field">
                  <label htmlFor="c-name">Full name</label>
                  <input id="c-name" name="name" required autoComplete="name" placeholder="Your full name" />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="c-phone">Phone number</label>
                    <input id="c-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91 00000 00000" />
                  </div>
                  <div className="field">
                    <label htmlFor="c-email">Email address</label>
                    <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="c-project-type">Project type</label>
                  <select id="c-project-type" name="projectType" required defaultValue="">
                    <option value="" disabled>Select a project type</option>
                    <option>Residential interior design</option>
                    <option>New construction</option>
                    <option>Renovation or remodel</option>
                    <option>Commercial or hospitality</option>
                    <option>Custom furniture or fit-out</option>
                    <option>Turnkey project</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="c-budget">Approximate budget</label>
                  <select id="c-budget" name="budget" defaultValue="">
                    <option value="" disabled>Select a budget range (optional)</option>
                    <option>Below ₹10 lakhs</option>
                    <option>₹10 – ₹25 lakhs</option>
                    <option>₹25 – ₹50 lakhs</option>
                    <option>₹50 lakhs – ₹1 crore</option>
                    <option>Above ₹1 crore</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="c-message">Tell us about your project</label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Describe your project, location, timeline and any specific requirements…"
                  />
                </div>

                <button className="button-primary form-submit" type="submit">
                  Send enquiry <ArrowRight size={17} />
                </button>

                {sent && (
                  <p className="form-success" role="status">
                    <Check size={16} /> Thank you. Your enquiry has been received and our team will be in touch shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
