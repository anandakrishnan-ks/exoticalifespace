import { a as e, c as t, d as n, l as r, s as i, t as a, u as o } from "./index-B3N1t6nc.js";
import { a as s, i as c, n as l, r as u, t as d } from "./useReveal-CG7izAE5.js";
import { t as f } from "./PageHero-0lVxN35G.js";
var p = n(o()),
  m = r();
function h() {
  let { slug: n } = a.useParams(),
    r = t(),
    o = e.find((e) => e.slug === n);
  if (
    (d(),
    (0, p.useEffect)(() => {
      o || r({ to: `/services` });
    }, [o, r]),
    !o)
  )
    return null;
  let h = e.filter((e) => e.slug !== n).slice(0, 3);
  return (0, m.jsxs)(`main`, {
    className: `bg-background`,
    children: [
      (0, m.jsx)(u, { alwaysSolid: !0 }),
      (0, m.jsx)(f, {
        breadcrumbs: [
          { label: `Home`, to: `/` },
          { label: `Services`, to: `/services` },
          { label: o.title },
        ],
        kicker: `Service ${o.number}`,
        title: o.title,
        subtitle: o.short,
        variant: `dark`,
      }),
      (0, m.jsx)(`section`, {
        className: `service-detail-body`,
        children: (0, m.jsx)(`div`, {
          className: `page-shell`,
          children: (0, m.jsxs)(`div`, {
            className: `service-detail-grid`,
            children: [
              (0, m.jsxs)(`div`, {
                "data-reveal": !0,
                children: [
                  (0, m.jsxs)(`span`, {
                    className: `service-detail-badge`,
                    children: [`Service `, o.number, ` of `, e.length],
                  }),
                  (0, m.jsxs)(`h2`, {
                    children: [
                      `What this service`,
                      (0, m.jsx)(`br`, {}),
                      (0, m.jsx)(`em`, { children: `covers.` }),
                    ],
                  }),
                  (0, m.jsx)(`p`, { className: `service-detail-desc`, children: o.description }),
                ],
              }),
              (0, m.jsxs)(`div`, {
                "data-reveal": !0,
                children: [
                  (0, m.jsx)(`p`, { className: `eyebrow`, children: `Project types` }),
                  (0, m.jsx)(`h3`, {
                    style: {
                      fontFamily: `var(--font-display)`,
                      fontSize: `clamp(1.5rem,2.5vw,2.2rem)`,
                      fontWeight: 400,
                      margin: `1.5rem 0 0`,
                    },
                    children: `We handle these types of projects`,
                  }),
                  (0, m.jsx)(`div`, {
                    className: `project-type-tags`,
                    style: { marginTop: `1.5rem` },
                    children: o.projectTypes.map((e) =>
                      (0, m.jsx)(`span`, { className: `project-type-tag`, children: e }, e),
                    ),
                  }),
                  (0, m.jsxs)(`div`, {
                    style: {
                      marginTop: `3rem`,
                      paddingTop: `2.5rem`,
                      borderTop: `1px solid var(--border)`,
                    },
                    children: [
                      (0, m.jsx)(`p`, { className: `eyebrow`, children: `Our approach` }),
                      (0, m.jsx)(`p`, {
                        className: `service-approach-text`,
                        style: { marginTop: `1.2rem` },
                        children: o.approach,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      (0, m.jsx)(`section`, {
        className: `service-included`,
        children: (0, m.jsx)(`div`, {
          className: `page-shell`,
          children: (0, m.jsxs)(`div`, {
            className: `service-included-grid`,
            children: [
              (0, m.jsxs)(`div`, {
                "data-reveal": !0,
                children: [
                  (0, m.jsx)(`p`, { className: `eyebrow`, children: `What's included` }),
                  (0, m.jsxs)(`h2`, {
                    children: [
                      `Every aspect,`,
                      (0, m.jsx)(`br`, {}),
                      (0, m.jsx)(`em`, { children: `fully managed.` }),
                    ],
                  }),
                  (0, m.jsx)(`p`, {
                    style: {
                      maxWidth: `32rem`,
                      color: `var(--muted-foreground)`,
                      marginTop: `1.5rem`,
                      lineHeight: 1.85,
                      fontSize: `.92rem`,
                    },
                    children: `We manage every component of this service in-house — no outsourcing, no handoffs, no gaps in accountability.`,
                  }),
                ],
              }),
              (0, m.jsx)(`div`, {
                "data-reveal": !0,
                children: (0, m.jsx)(`ul`, {
                  className: `included-list`,
                  "aria-label": `What is included`,
                  children: o.included.map((e) => (0, m.jsx)(`li`, { children: e }, e)),
                }),
              }),
            ],
          }),
        }),
      }),
      (0, m.jsx)(`section`, {
        className: `related-services-section`,
        children: (0, m.jsxs)(`div`, {
          className: `page-shell`,
          children: [
            (0, m.jsxs)(`div`, {
              "data-reveal": !0,
              children: [
                (0, m.jsx)(`p`, { className: `eyebrow`, children: `Related services` }),
                (0, m.jsxs)(`h2`, {
                  children: [
                    `You might also`,
                    (0, m.jsx)(`br`, {}),
                    (0, m.jsx)(`em`, { children: `need these.` }),
                  ],
                }),
              ],
            }),
            (0, m.jsx)(`div`, {
              className: `service-list`,
              style: { marginTop: `3rem` },
              children: h.map((e) =>
                (0, m.jsxs)(
                  i,
                  {
                    to: `/services/${e.slug}`,
                    className: `service-row`,
                    style: {
                      display: `grid`,
                      gridTemplateColumns: `5rem minmax(14rem,.9fr) minmax(18rem,1.2fr) 2rem`,
                      alignItems: `center`,
                      gap: `2rem`,
                      minHeight: `9rem`,
                      paddingInline: `0`,
                      borderBottom: `1px solid var(--border)`,
                      textDecoration: `none`,
                      color: `inherit`,
                      transition: `background .35s, padding .35s`,
                    },
                    "data-reveal": !0,
                    children: [
                      (0, m.jsx)(`span`, { className: `service-number`, children: e.number }),
                      (0, m.jsx)(`h3`, {
                        style: {
                          margin: 0,
                          fontFamily: `var(--font-display)`,
                          fontSize: `clamp(1.2rem,2vw,1.8rem)`,
                          fontWeight: 400,
                          lineHeight: 1.1,
                        },
                        children: e.title,
                      }),
                      (0, m.jsx)(`p`, {
                        style: { margin: 0, color: `var(--muted-foreground)`, fontSize: `.88rem` },
                        children: e.short,
                      }),
                      (0, m.jsx)(c, {
                        className: `service-arrow`,
                        size: 20,
                        "aria-hidden": `true`,
                      }),
                    ],
                  },
                  e.slug,
                ),
              ),
            }),
            (0, m.jsx)(`div`, {
              style: { marginTop: `2.5rem` },
              children: (0, m.jsxs)(i, {
                to: `/services`,
                className: `text-link`,
                children: [`View all services `, (0, m.jsx)(s, { size: 16 })],
              }),
            }),
          ],
        }),
      }),
      (0, m.jsx)(`section`, {
        className: `service-cta-panel`,
        children: (0, m.jsx)(`div`, {
          className: `page-shell`,
          children: (0, m.jsxs)(`div`, {
            className: `service-cta-inner`,
            children: [
              (0, m.jsxs)(`div`, {
                children: [
                  (0, m.jsxs)(`h2`, {
                    children: [
                      `Interested in`,
                      (0, m.jsx)(`br`, {}),
                      (0, m.jsxs)(`em`, { children: [o.title.split(` `)[0], `?`] }),
                    ],
                  }),
                  (0, m.jsx)(`p`, {
                    children: `Tell us about your project and we'll schedule a free consultation at your convenience.`,
                  }),
                ],
              }),
              (0, m.jsxs)(i, {
                to: `/contact`,
                className: `button-primary`,
                style: { flexShrink: 0 },
                children: [`Start a conversation `, (0, m.jsx)(s, { size: 17 })],
              }),
            ],
          }),
        }),
      }),
      (0, m.jsx)(l, {}),
    ],
  });
}
export { h as component };
