import { r as __toESM } from "../_runtime.mjs";
import { i as services } from "./data-D-Bsdiz7.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, r as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as SiteNav, r as useReveal, t as SiteFooter } from "./useReveal-D4poK0TE.mjs";
import { t as PageHero } from "./PageHero-Bj7AWA96.mjs";
import { t as Route } from "./services._slug-BPl-_fw6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-BlePHpSm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);
  useReveal();
  (0, import_react.useEffect)(() => {
    if (!service) navigate({ to: "/services" });
  }, [service, navigate]);
  if (!service) return null;
  const related = services.filter((s) => s.slug !== slug).slice(0, 3);
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
          {
            label: "Services",
            to: "/services",
          },
          { label: service.title },
        ],
        kicker: `Service ${service.number}`,
        title: service.title,
        subtitle: service.short,
        variant: "dark",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "service-detail-body",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "page-shell",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "service-detail-grid",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                "data-reveal": true,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "service-detail-badge",
                    children: ["Service ", service.number, " of ", services.length],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                    children: [
                      "What this service",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "covers." }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "service-detail-desc",
                    children: service.description,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                "data-reveal": true,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "eyebrow",
                    children: "Project types",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    style: {
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem,2.5vw,2.2rem)",
                      fontWeight: 400,
                      margin: "1.5rem 0 0",
                    },
                    children: "We handle these types of projects",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "project-type-tags",
                    style: { marginTop: "1.5rem" },
                    children: service.projectTypes.map((pt) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "span",
                        {
                          className: "project-type-tag",
                          children: pt,
                        },
                        pt,
                      ),
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    style: {
                      marginTop: "3rem",
                      paddingTop: "2.5rem",
                      borderTop: "1px solid var(--border)",
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "eyebrow",
                        children: "Our approach",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "service-approach-text",
                        style: { marginTop: "1.2rem" },
                        children: service.approach,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "service-included",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "page-shell",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "service-included-grid",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                "data-reveal": true,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "eyebrow",
                    children: "What's included",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                    children: [
                      "Every aspect,",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                        children: "fully managed.",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    style: {
                      maxWidth: "32rem",
                      color: "var(--muted-foreground)",
                      marginTop: "1.5rem",
                      lineHeight: 1.85,
                      fontSize: ".92rem",
                    },
                    children:
                      "We manage every component of this service in-house — no outsourcing, no handoffs, no gaps in accountability.",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                "data-reveal": true,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  className: "included-list",
                  "aria-label": "What is included",
                  children: service.included.map((item) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item),
                  ),
                }),
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "related-services-section",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "page-shell",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              "data-reveal": true,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "eyebrow",
                  children: "Related services",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                  children: [
                    "You might also",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "need these." }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "service-list",
              style: { marginTop: "3rem" },
              children: related.map((s) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  Link,
                  {
                    to: `/services/${s.slug}`,
                    className: "service-row",
                    style: {
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
                    },
                    "data-reveal": true,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "service-number",
                        children: s.number,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        style: {
                          margin: 0,
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(1.2rem,2vw,1.8rem)",
                          fontWeight: 400,
                          lineHeight: 1.1,
                        },
                        children: s.title,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        style: {
                          margin: 0,
                          color: "var(--muted-foreground)",
                          fontSize: ".88rem",
                        },
                        children: s.short,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
                        className: "service-arrow",
                        size: 20,
                        "aria-hidden": "true",
                      }),
                    ],
                  },
                  s.slug,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              style: { marginTop: "2.5rem" },
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                to: "/services",
                className: "text-link",
                children: [
                  "View all services ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 }),
                ],
              }),
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "service-cta-panel",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "page-shell",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "service-cta-inner",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                    children: [
                      "Interested in",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", {
                        children: [service.title.split(" ")[0], "?"],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    children:
                      "Tell us about your project and we'll schedule a free consultation at your convenience.",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                to: "/contact",
                className: "button-primary",
                style: { flexShrink: 0 },
                children: [
                  "Start a conversation ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 17 }),
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
export { ServiceDetailPage as component };
