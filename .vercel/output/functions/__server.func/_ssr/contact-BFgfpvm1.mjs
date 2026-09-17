import { r as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { a as ArrowRight, i as Check } from "../_libs/lucide-react.mjs";
import { n as SiteNav, r as useReveal, t as SiteFooter } from "./useReveal-D4poK0TE.mjs";
import { t as PageHero } from "./PageHero-Bj7AWA96.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BFgfpvm1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
  const [sent, setSent] = (0, import_react.useState)(false);
  useReveal();
  const submitEnquiry = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
    className: "bg-background",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, { alwaysSolid: true }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
        breadcrumbs: [
          {
            label: "Home",
            to: "/",
          },
          { label: "Contact" },
        ],
        kicker: "Start a conversation",
        title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            "Let's shape a space",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "distinctly yours." }),
          ],
        }),
        subtitle:
          "Tell us what you are planning — whether you are building, renovating or reimagining an existing interior. A free consultation is the best place to start.",
        variant: "dark",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "contact-page-body",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "page-shell",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "contact-page-cols",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                "data-reveal": true,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "eyebrow",
                    children: "Reach us",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                    children: [
                      "We'd love to hear",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "from you." }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "contact-intro-text",
                    children:
                      "Whether you have a clear brief or just an idea, we're happy to talk. Every project starts with a conversation — reach out and we'll respond within one working day.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "contact-info-card",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "contact-info-label",
                        children: "Office address",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
                        className: "contact-info-value",
                        children: [
                          "TC 29/417, Althara Nagar,",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                          "Opp. Vidhyadiraja Higher Secondary School,",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                          "Vellayambalam, Thiruvananthapuram – 695010",
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "contact-info-card",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "contact-info-label",
                        children: "Registered address",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
                        className: "contact-info-value",
                        children: [
                          "L-33, Ashtapadi, Lane B, LIC Lane,",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                          "Pattom Palace PO,",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                          "Thiruvananthapuram – 695004",
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "contact-info-card",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "contact-info-label",
                        children: "Working hours",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "contact-info-value",
                        children: "Monday – Saturday, 9 am – 6 pm IST",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "contact-info-card",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "contact-info-label",
                        children: "What to expect",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                        style: {
                          listStyle: "none",
                          padding: 0,
                          margin: "0.8rem 0 0",
                          display: "grid",
                          gap: ".6rem",
                        },
                        children: [
                          "Response within 1 working day",
                          "No obligation free consultation",
                          "Detailed project scope discussion",
                          "Transparent cost estimate provided",
                        ].map((item) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            "li",
                            {
                              style: {
                                display: "flex",
                                alignItems: "baseline",
                                gap: ".8rem",
                                color: "var(--muted-foreground)",
                                fontSize: ".85rem",
                              },
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
                                  size: 13,
                                  style: {
                                    color: "var(--primary)",
                                    flexShrink: 0,
                                    marginTop: ".15rem",
                                  },
                                }),
                                item,
                              ],
                            },
                            item,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                "data-reveal": true,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "eyebrow",
                    children: "Enquiry form",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                    style: { marginBottom: "2.5rem" },
                    children: [
                      "Tell us about",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                        children: "your project.",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
                    className: "enquiry-form",
                    onSubmit: submitEnquiry,
                    noValidate: true,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "field",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            htmlFor: "c-name",
                            children: "Full name",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            id: "c-name",
                            name: "name",
                            required: true,
                            autoComplete: "name",
                            placeholder: "Your full name",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "field-row",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "field",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                htmlFor: "c-phone",
                                children: "Phone number",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                id: "c-phone",
                                name: "phone",
                                type: "tel",
                                required: true,
                                autoComplete: "tel",
                                placeholder: "+91 00000 00000",
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "field",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                htmlFor: "c-email",
                                children: "Email address",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                id: "c-email",
                                name: "email",
                                type: "email",
                                required: true,
                                autoComplete: "email",
                                placeholder: "you@example.com",
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "field",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            htmlFor: "c-project-type",
                            children: "Project type",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
                            id: "c-project-type",
                            name: "projectType",
                            required: true,
                            defaultValue: "",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                value: "",
                                disabled: true,
                                children: "Select a project type",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "Residential interior design",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "New construction",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "Renovation or remodel",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "Commercial or hospitality",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "Custom furniture or fit-out",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "Turnkey project",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "Other",
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "field",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            htmlFor: "c-budget",
                            children: "Approximate budget",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
                            id: "c-budget",
                            name: "budget",
                            defaultValue: "",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                value: "",
                                disabled: true,
                                children: "Select a budget range (optional)",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "Below ₹10 lakhs",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "₹10 – ₹25 lakhs",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "₹25 – ₹50 lakhs",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "₹50 lakhs – ₹1 crore",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "Above ₹1 crore",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                children: "Prefer not to say",
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "field",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            htmlFor: "c-message",
                            children: "Tell us about your project",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                            id: "c-message",
                            name: "message",
                            rows: 5,
                            required: true,
                            placeholder:
                              "Describe your project, location, timeline and any specific requirements…",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        className: "button-primary form-submit",
                        type: "submit",
                        children: [
                          "Send enquiry ",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 }),
                        ],
                      }),
                      sent &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                          className: "form-success",
                          role: "status",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }),
                            " Thank you. Your enquiry has been received and our team will be in touch shortly.",
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
    ],
  });
}
//#endregion
export { ContactPage as component };
