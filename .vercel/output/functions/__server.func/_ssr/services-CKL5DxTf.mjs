import { i as services } from "./data-D-Bsdiz7.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, r as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as SiteNav, r as useReveal, t as SiteFooter } from "./useReveal-D4poK0TE.mjs";
import { t as PageHero } from "./PageHero-Bj7AWA96.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CKL5DxTf.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
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
          { label: "Services" },
        ],
        kicker: "What we offer",
        title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            "From your first idea",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
              children: "to the final handover.",
            }),
          ],
        }),
        subtitle:
          "Integrated design, construction and execution services for residential, commercial, retail and hospitality spaces — delivered by one accountable team.",
        variant: "teal",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "services-page-intro",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "page-shell",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "services-intro-grid",
            "data-reveal": true,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "eyebrow",
                    children: "Six services",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                    children: [
                      "Everything your project",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                        children: "needs, in one place.",
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                children:
                  "From spatial planning and design to civil construction, MEP, custom furniture and complete turnkey delivery — we provide every service your project requires. No fragmented teams. No communication gaps. One team that's accountable for the whole.",
              }),
            ],
          }),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "services-full-list",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "page-shell",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "service-list",
            role: "list",
            children: services.map((service) =>
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
                  "data-reveal": true,
                  role: "listitem",
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
                      "Not sure which service",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "you need?" }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    children:
                      "Book a free consultation and let's talk through your project. We'll help you understand the scope, timeline and cost — with no obligation.",
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
export { ServicesPage as component };
