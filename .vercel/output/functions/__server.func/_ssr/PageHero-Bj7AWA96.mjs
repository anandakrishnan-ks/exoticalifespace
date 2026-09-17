import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-Bj7AWA96.js
var import_jsx_runtime = require_jsx_runtime();
/**
 * Consistent inner-page hero used on every non-home page.
 * Renders breadcrumb navigation, optional kicker, large H1, and subtitle.
 */
function PageHero({ breadcrumbs, kicker, title, subtitle, variant = "dark", className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
    className: `inner-hero inner-hero-${variant} ${className}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "inner-hero-deco",
        "aria-hidden": "true",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "page-shell",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
            className: "breadcrumb inner-hero-breadcrumb",
            "aria-label": "Breadcrumb",
            children: breadcrumbs.map((crumb, i) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "span",
                {
                  className: "breadcrumb-item",
                  children: [
                    i > 0 &&
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
                        size: 11,
                        className: "breadcrumb-sep",
                        "aria-hidden": "true",
                      }),
                    crumb.to
                      ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
                          to: crumb.to,
                          className: "breadcrumb-link",
                          children: crumb.label,
                        })
                      : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "breadcrumb-current",
                          "aria-current": "page",
                          children: crumb.label,
                        }),
                  ],
                },
                crumb.label,
              ),
            ),
          }),
          kicker &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "eyebrow inner-hero-kicker",
              children: kicker,
            }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
            className: "inner-hero-title",
            children: title,
          }),
          subtitle &&
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "inner-hero-sub",
              children: subtitle,
            }),
        ],
      }),
    ],
  });
}
//#endregion
export { PageHero as t };
