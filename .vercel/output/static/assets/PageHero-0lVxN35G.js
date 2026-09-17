import { l as e, s as t } from "./index-B3N1t6nc.js";
import { i as n } from "./useReveal-CG7izAE5.js";
var r = e();
function i({
  breadcrumbs: e,
  kicker: i,
  title: a,
  subtitle: o,
  variant: s = `dark`,
  className: c = ``,
}) {
  return (0, r.jsxs)(`section`, {
    className: `inner-hero inner-hero-${s} ${c}`,
    children: [
      (0, r.jsx)(`div`, { className: `inner-hero-deco`, "aria-hidden": `true` }),
      (0, r.jsxs)(`div`, {
        className: `page-shell`,
        children: [
          (0, r.jsx)(`nav`, {
            className: `breadcrumb inner-hero-breadcrumb`,
            "aria-label": `Breadcrumb`,
            children: e.map((e, i) =>
              (0, r.jsxs)(
                `span`,
                {
                  className: `breadcrumb-item`,
                  children: [
                    i > 0 &&
                      (0, r.jsx)(n, {
                        size: 11,
                        className: `breadcrumb-sep`,
                        "aria-hidden": `true`,
                      }),
                    e.to
                      ? (0, r.jsx)(t, { to: e.to, className: `breadcrumb-link`, children: e.label })
                      : (0, r.jsx)(`span`, {
                          className: `breadcrumb-current`,
                          "aria-current": `page`,
                          children: e.label,
                        }),
                  ],
                },
                e.label,
              ),
            ),
          }),
          i && (0, r.jsx)(`p`, { className: `eyebrow inner-hero-kicker`, children: i }),
          (0, r.jsx)(`h1`, { className: `inner-hero-title`, children: a }),
          o && (0, r.jsx)(`p`, { className: `inner-hero-sub`, children: o }),
        ],
      }),
    ],
  });
}
export { i as t };
