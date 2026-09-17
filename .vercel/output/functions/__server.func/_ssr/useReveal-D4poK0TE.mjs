import { r as __toESM } from "../_runtime.mjs";
import { i as services, t as navItems } from "./data-D-Bsdiz7.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, n as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useReveal-D4poK0TE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LOGO_URL$1 = "/exotica-logo.png";
function SiteNav({ alwaysSolid = false }) {
  const [scrolled, setScrolled] = (0, import_react.useState)(false);
  const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (alwaysSolid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysSolid]);
  const solid = alwaysSolid || scrolled || menuOpen;
  const closeMenu = () => setMenuOpen(false);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
    className: `site-header ${solid ? "site-header-solid" : ""}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
        to: "/",
        className: "logo-link",
        "aria-label": "Exotica Lifespace home",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
          src: LOGO_URL$1,
          alt: "Exotica Lifespace",
          className: "site-logo",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
        className: "desktop-nav",
        "aria-label": "Main navigation",
        children: navItems.map(({ label, to }) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Link,
            {
              to,
              className: "nav-link",
              children: label,
            },
            to,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
        to: "/contact",
        className: "header-cta",
        children: [
          "Free consultation ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        type: "button",
        className: "menu-button",
        "aria-label": menuOpen ? "Close menu" : "Open menu",
        "aria-expanded": menuOpen,
        onClick: () => setMenuOpen((o) => !o),
        children: menuOpen
          ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
          : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: `mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`,
        "aria-hidden": !menuOpen,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
            "aria-label": "Mobile navigation",
            children: navItems.map(({ label, to }, index) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                Link,
                {
                  to,
                  onClick: closeMenu,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      children: ["0", index + 1],
                    }),
                    label,
                  ],
                },
                to,
              ),
            ),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/contact",
            className: "button-primary",
            onClick: closeMenu,
            children: "Book a free consultation",
          }),
        ],
      }),
    ],
  });
}
var LOGO_URL = "/exotica-logo.png";
function SiteFooter() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
    className: "site-footer",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "page-shell",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "footer-top",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "footer-brand",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  src: LOGO_URL,
                  alt: "Exotica Lifespace",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  children: [
                    "Thoughtfully designed.",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                    "Carefully built.",
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "footer-links",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Navigate" }),
                navItems.map(({ label, to }) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Link,
                    {
                      to,
                      children: label,
                    },
                    to,
                  ),
                ),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "footer-links footer-services",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Services" }),
                services.slice(0, 4).map((s) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Link,
                    {
                      to: `/services/${s.slug}`,
                      children: s.title,
                    },
                    s.slug,
                  ),
                ),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "footer-cta",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  children: "Have a space in mind?",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                  to: "/contact",
                  className: "text-link footer-text-link",
                  children: [
                    "Begin your project ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 16 }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "footer-bottom",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
              children: [
                "© ",
                /* @__PURE__ */ new Date().getFullYear(),
                " Exotica Lifespace. All rights reserved.",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              children: "Thiruvananthapuram, Kerala",
            }),
          ],
        }),
      ],
    }),
  });
}
/** Attach an IntersectionObserver to every [data-reveal] element in the DOM.
 *  Sets data-visible="true" when the element enters the viewport.
 *  Cleans up the observer on unmount. */
function useReveal() {
  (0, import_react.useEffect)(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
        }),
      { threshold: 0.08 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
//#endregion
export { SiteNav as n, useReveal as r, SiteFooter as t };
