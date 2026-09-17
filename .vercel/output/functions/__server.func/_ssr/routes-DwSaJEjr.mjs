import { r as __toESM } from "../_runtime.mjs";
import { i as services, n as processSteps } from "./data-D-Bsdiz7.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, o as ArrowDown, r as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as SiteNav, r as useReveal, t as SiteFooter } from "./useReveal-D4poK0TE.mjs";
import { n as exotica_hero_default, t as exotica_about_default } from "./exotica-hero-D-UjHlwd.mjs";
import {
  n as project_hospitality_default,
  r as project_residence_default,
  t as project_commercial_default,
} from "./project-commercial-CELb8Tpn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DwSaJEjr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
  const [heroOffset, setHeroOffset] = (0, import_react.useState)(0);
  useReveal();
  (0, import_react.useEffect)(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      if (!reduceMotion) setHeroOffset(Math.min(window.scrollY * 0.18, 110));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
    className: "overflow-clip bg-background",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "hero-section",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            src: exotica_hero_default,
            alt: "Luxury tropical living room overlooking the Kerala landscape",
            className: "hero-image",
            width: 1920,
            height: 1088,
            fetchPriority: "high",
            style: { transform: `translate3d(0, ${heroOffset}px, 0) scale(1.08)` },
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-shade" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "hero-content page-shell",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "eyebrow hero-eyebrow",
                children: "Design · Build · Turnkey",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                children: [
                  "Thoughtfully designed.",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                    children: "Carefully built.",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "hero-copy",
                children:
                  "Interior design, construction and turnkey contracting in Thiruvananthapuram—one team from concept to completion.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "hero-actions",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                    to: "/contact",
                    className: "button-primary",
                    children: [
                      "Book a free consultation ",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                    to: "/projects",
                    className: "button-ghost",
                    children: "View our work",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
            to: "/about",
            className: "scroll-cue",
            "aria-label": "Scroll to about",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { size: 18 }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discover" }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "trust-strip",
        "aria-label": "Project types",
        children: ["Residential", "Commercial", "Retail", "Hospitality"].map((label, i) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "div",
            {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["0", i + 1] }),
                label,
              ],
            },
            label,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "about-section section-space",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "page-shell about-grid",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "about-visual",
              "data-reveal": true,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  src: exotica_about_default,
                  alt: "Designer reviewing materials and plans on site",
                  loading: "lazy",
                  width: 1200,
                  height: 1504,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "about-note",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      children: "Concept to completion",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
                      children: [
                        "One team.",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                        "One responsibility.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "about-copy",
              "data-reveal": true,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "eyebrow",
                  children: "About Exotica",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                  children: [
                    "Creative vision,",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                      children: "engineering discipline.",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "lead",
                  children:
                    "We create spaces that are beautiful, functional, and built around the people who use them.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  children:
                    "Exotica Lifespace brings interior design, civil construction and turnkey execution together under one accountable team. From concept development and space planning to material selection, site coordination and final handover, we manage every stage with clarity.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  children:
                    "Our approach balances refined aesthetics with comfort, everyday usability and lasting value.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                  to: "/about",
                  className: "text-link",
                  style: { marginTop: "2rem" },
                  children: [
                    "Our story & values ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "services-section section-space home-services-teaser",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "page-shell",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "section-heading",
              "data-reveal": true,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "eyebrow",
                      children: "What we do",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                      children: [
                        "From your first idea",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                          children: "to the final handover.",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  children:
                    "Integrated design, construction and execution for residential, commercial, retail and hospitality spaces.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "service-list",
              children: services.slice(0, 4).map((service) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  Link,
                  {
                    to: `/services/${service.slug}`,
                    className: "service-row",
                    style: {
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
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "service-number",
                        children: service.number,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        style: {
                          margin: 0,
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.35rem,2.2vw,2rem)",
                          fontWeight: 400,
                          lineHeight: 1.1,
                        },
                        children: service.title,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        style: {
                          margin: 0,
                          color: "var(--muted-foreground)",
                          fontSize: ".9rem",
                        },
                        children: service.short,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
                        className: "service-arrow",
                        size: 22,
                        "aria-hidden": "true",
                      }),
                    ],
                  },
                  service.slug,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              style: { marginTop: "3rem" },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                to: "/services",
                className: "text-link",
                children: [
                  "View all six services ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 }),
                ],
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "home-process-teaser",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "page-shell",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "section-heading",
              "data-reveal": true,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "eyebrow",
                      children: "Our process",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                      children: [
                        "A structured path",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                          children: "from idea to handover.",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  children:
                    "Transparency, quality and accountability are built into every stage of our delivery process.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "home-process-grid",
              children: processSteps.map((step) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "div",
                  {
                    className: "home-process-card",
                    "data-reveal": true,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: step.number,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.short }),
                    ],
                  },
                  step.number,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              style: { marginTop: "2.5rem" },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                to: "/process",
                className: "section-link",
                children: [
                  "How we work in detail ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 }),
                ],
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "projects-section section-space",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "page-shell",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "section-heading",
              "data-reveal": true,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "eyebrow",
                      children: "Featured expertise",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                      children: [
                        "Spaces crafted",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                          children: "with precision.",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  children:
                    "Homes, hotels, offices and commercial environments shaped through design excellence and dependable execution.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "project-editorial",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
                  className: "project-tall",
                  "data-reveal": true,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "image-wrap",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                        src: project_residence_default,
                        alt: "Contemporary tropical luxury residence",
                        loading: "lazy",
                        width: 1200,
                        height: 1504,
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "01 / Residential",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                          children: "Luxury Residences",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
                  className: "project-wide",
                  "data-reveal": true,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "image-wrap",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                        src: project_hospitality_default,
                        alt: "Refined Kerala hospitality interior",
                        loading: "lazy",
                        width: 1600,
                        height: 1104,
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "02 / Hospitality",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                          children: "Hotel & Hospitality",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
                  className: "project-wide project-offset",
                  "data-reveal": true,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "image-wrap",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                        src: project_commercial_default,
                        alt: "Elegant contemporary commercial reception",
                        loading: "lazy",
                        width: 1600,
                        height: 1104,
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "03 / Commercial",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                          children: "Commercial Interiors",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              style: {
                marginTop: "3rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "project-disclaimer",
                  children:
                    "Representative imagery shown while the Exotica Lifespace project portfolio is being prepared.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                  to: "/projects",
                  className: "text-link",
                  style: { marginTop: 0 },
                  children: [
                    "Browse all projects ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "vision-banner",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            src: exotica_hero_default,
            alt: "",
            "aria-hidden": "true",
            loading: "lazy",
            width: 1920,
            height: 1088,
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vision-shade" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "page-shell vision-content",
            "data-reveal": true,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "eyebrow eyebrow-light",
                children: "Our vision",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
                children:
                  '"To create exceptional spaces through design excellence, engineering precision and dependable execution."',
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                children: "Design · Engineering · Quality · Transparency · Timely Delivery",
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "home-cta-strip",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "page-shell",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              children: [
                "Let's shape a space",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                  children: "distinctly yours.",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              children:
                "Whether you're building, renovating or reimagining an existing interior—we'd love to hear about it.",
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
export { HomePage as component };
