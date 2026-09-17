import { n as processSteps } from "./data-D-Bsdiz7.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as SiteNav, r as useReveal, t as SiteFooter } from "./useReveal-D4poK0TE.mjs";
import { t as PageHero } from "./PageHero-Bj7AWA96.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-DmFKWPf7.js
var import_jsx_runtime = require_jsx_runtime();
function ProcessPage() {
  useReveal();
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
          { label: "Process" },
        ],
        kicker: "How we work",
        title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            "A structured path",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
              children: "from idea to handover.",
            }),
          ],
        }),
        subtitle:
          "Transparency, quality and accountability are built into every stage of our delivery. Here's exactly what to expect when you work with us.",
        variant: "dark",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "process-page-section",
        style: {
          background: "var(--dark)",
          color: "var(--dark-foreground)",
          paddingBottom: "clamp(6rem,11vw,10rem)",
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "page-shell",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "process-overview-strip",
            "data-reveal": true,
            children: processSteps.map((step) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  className: "process-overview-card",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.number }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.short }),
                  ],
                },
                step.number,
              ),
            ),
          }),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "process-deep",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "page-shell",
          children: processSteps.map((step) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "div",
              {
                className: "process-deep-step",
                "data-reveal": true,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "process-step-label",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "process-step-num",
                        children: step.number,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: step.title }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "process-step-duration",
                        children: step.duration,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "process-step-body",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "body-lg",
                        children: step.detail,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "eyebrow",
                        style: { marginBottom: "1.2rem" },
                        children: "Key activities",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                        className: "process-points",
                        "aria-label": `Key activities for ${step.title}`,
                        children: step.points.map((pt) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: pt }, pt),
                        ),
                      }),
                    ],
                  }),
                ],
              },
              step.number,
            ),
          ),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "section-space",
        style: { background: "var(--surface)" },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "page-shell",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              "data-reveal": true,
              style: { marginBottom: "clamp(3rem,6vw,5rem)" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "eyebrow",
                  children: "Common questions",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                  children: [
                    "Things clients often",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                      children: "ask us about.",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              style: { borderTop: "1px solid var(--border)" },
              children: [
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
              ].map(({ q, a }) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "details",
                  {
                    style: {
                      padding: "2rem 0",
                      borderBottom: "1px solid var(--border)",
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
                        style: {
                          cursor: "pointer",
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.2rem,2vw,1.7rem)",
                          fontWeight: 400,
                          listStyle: "none",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "2rem",
                        },
                        children: [
                          q,
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            style: {
                              color: "var(--primary)",
                              fontSize: "1.5rem",
                              lineHeight: 1,
                              flexShrink: 0,
                            },
                            children: "+",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        style: {
                          marginTop: "1.5rem",
                          color: "var(--muted-foreground)",
                          lineHeight: 1.85,
                          maxWidth: "56rem",
                          fontSize: ".93rem",
                        },
                        children: a,
                      }),
                    ],
                  },
                  q,
                ),
              ),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "process-cta",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "page-shell",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "eyebrow",
              children: "Ready to begin?",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              children: [
                "Let's start your",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                  children: "project together.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
              to: "/contact",
              className: "button-primary",
              children: [
                "Book a free consultation ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
    ],
  });
}
//#endregion
export { ProcessPage as component };
