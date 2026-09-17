import { r as __toESM } from "../_runtime.mjs";
import { r as projects } from "./data-D-Bsdiz7.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as SiteNav, r as useReveal, t as SiteFooter } from "./useReveal-D4poK0TE.mjs";
import { t as PageHero } from "./PageHero-Bj7AWA96.mjs";
import { n as exotica_hero_default, t as exotica_about_default } from "./exotica-hero-D-UjHlwd.mjs";
import {
  n as project_hospitality_default,
  r as project_residence_default,
  t as project_commercial_default,
} from "./project-commercial-CELb8Tpn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-Dx7bMW0N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var imageMap = {
  hero: exotica_hero_default,
  about: exotica_about_default,
  residence: project_residence_default,
  hospitality: project_hospitality_default,
  commercial: project_commercial_default,
};
var categories = ["All", "Residential", "Commercial", "Hospitality"];
function ProjectsPage() {
  const [activeFilter, setActiveFilter] = (0, import_react.useState)("All");
  useReveal();
  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);
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
          { label: "Projects" },
        ],
        kicker: "Featured expertise",
        title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [
            "Spaces crafted",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "with precision." }),
          ],
        }),
        subtitle:
          "Homes, hotels, offices and commercial environments shaped through design excellence and dependable execution in Thiruvananthapuram, Kerala.",
        variant: "surface",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "projects-page-body",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "page-shell",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "projects-filter-bar",
              role: "group",
              "aria-label": "Filter projects by category",
              children: categories.map((cat) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: `filter-btn ${activeFilter === cat ? "filter-btn-active" : ""}`,
                    onClick: () => setActiveFilter(cat),
                    "aria-pressed": activeFilter === cat,
                    children: [
                      cat,
                      cat !== "All" &&
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                          style: {
                            marginLeft: ".5rem",
                            opacity: 0.55,
                          },
                          children: ["(", projects.filter((p) => p.category === cat).length, ")"],
                        }),
                    ],
                  },
                  cat,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "projects-page-grid",
              children: filtered.map((project) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "article",
                  {
                    className: "project-page-card",
                    "data-reveal": true,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "project-page-card-img",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                          src: imageMap[project.imageKey],
                          alt: project.title,
                          loading: "lazy",
                          width: 800,
                          height: 980,
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "project-page-card-meta",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                            children: [project.category, " · ", project.location],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                            children: project.title,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            children: project.description,
                          }),
                        ],
                      }),
                    ],
                  },
                  project.id,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "projects-disclaimer",
              children:
                "Representative imagery shown while the Exotica Lifespace project portfolio is being finalised. Photography from completed client projects will be added progressively.",
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "section-space",
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
                      children: "Our breadth",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                      children: [
                        "Every category,",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                          children: "one team.",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  children:
                    "We work across residential, commercial, retail and hospitality — bringing the same commitment to quality and precision to every project type.",
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
                          children: "Residential",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                          children: "Homes & Villas",
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
                          children: "Hospitality",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                          children: "Hotels & Restaurants",
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
                        alt: "Elegant contemporary commercial space",
                        loading: "lazy",
                        width: 1600,
                        height: 1104,
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Commercial",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                          children: "Offices & Retail",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "projects-cta",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "page-shell",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "eyebrow eyebrow-light",
              children: "Start your project",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              children: [
                "Ready to create",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
                  children: "something exceptional?",
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
export { ProjectsPage as component };
