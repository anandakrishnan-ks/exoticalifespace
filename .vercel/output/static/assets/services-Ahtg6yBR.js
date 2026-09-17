import { a as e, l as t, s as n } from "./index-B3N1t6nc.js";
import { a as r, i, n as a, r as o, t as s } from "./useReveal-CG7izAE5.js";
import { t as c } from "./PageHero-0lVxN35G.js";
var l = t();
function u() {
  return (
    s(),
    (0, l.jsxs)(`main`, {
      className: `bg-background`,
      children: [
        (0, l.jsx)(o, { alwaysSolid: !0 }),
        (0, l.jsx)(c, {
          breadcrumbs: [{ label: `Home`, to: `/` }, { label: `Services` }],
          kicker: `What we offer`,
          title: (0, l.jsxs)(l.Fragment, {
            children: [
              `From your first idea`,
              (0, l.jsx)(`br`, {}),
              (0, l.jsx)(`em`, { children: `to the final handover.` }),
            ],
          }),
          subtitle: `Integrated design, construction and execution services for residential, commercial, retail and hospitality spaces — delivered by one accountable team.`,
          variant: `teal`,
        }),
        (0, l.jsx)(`section`, {
          className: `services-page-intro`,
          children: (0, l.jsx)(`div`, {
            className: `page-shell`,
            children: (0, l.jsxs)(`div`, {
              className: `services-intro-grid`,
              "data-reveal": !0,
              children: [
                (0, l.jsxs)(`div`, {
                  children: [
                    (0, l.jsx)(`p`, { className: `eyebrow`, children: `Six services` }),
                    (0, l.jsxs)(`h2`, {
                      children: [
                        `Everything your project`,
                        (0, l.jsx)(`br`, {}),
                        (0, l.jsx)(`em`, { children: `needs, in one place.` }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(`p`, {
                  children: `From spatial planning and design to civil construction, MEP, custom furniture and complete turnkey delivery — we provide every service your project requires. No fragmented teams. No communication gaps. One team that's accountable for the whole.`,
                }),
              ],
            }),
          }),
        }),
        (0, l.jsx)(`section`, {
          className: `services-full-list`,
          children: (0, l.jsx)(`div`, {
            className: `page-shell`,
            children: (0, l.jsx)(`div`, {
              className: `service-list`,
              role: `list`,
              children: e.map((e) =>
                (0, l.jsxs)(
                  n,
                  {
                    to: `/services/${e.slug}`,
                    className: `service-row`,
                    style: {
                      display: `grid`,
                      gridTemplateColumns: `5rem minmax(14rem,.9fr) minmax(18rem,1.2fr) 2rem`,
                      alignItems: `center`,
                      gap: `2rem`,
                      minHeight: `9.5rem`,
                      paddingInline: `0`,
                      borderBottom: `1px solid var(--border)`,
                      textDecoration: `none`,
                      color: `inherit`,
                      transition: `background .35s, padding .35s`,
                    },
                    "data-reveal": !0,
                    role: `listitem`,
                    children: [
                      (0, l.jsx)(`span`, { className: `service-number`, children: e.number }),
                      (0, l.jsx)(`h3`, {
                        style: {
                          margin: 0,
                          fontFamily: `var(--font-display)`,
                          fontSize: `clamp(1.35rem,2.2vw,2rem)`,
                          fontWeight: 400,
                          lineHeight: 1.1,
                        },
                        children: e.title,
                      }),
                      (0, l.jsx)(`p`, {
                        style: { margin: 0, color: `var(--muted-foreground)`, fontSize: `.9rem` },
                        children: e.short,
                      }),
                      (0, l.jsx)(i, {
                        className: `service-arrow`,
                        size: 22,
                        "aria-hidden": `true`,
                      }),
                    ],
                  },
                  e.slug,
                ),
              ),
            }),
          }),
        }),
        (0, l.jsx)(`section`, {
          className: `service-cta-panel`,
          children: (0, l.jsx)(`div`, {
            className: `page-shell`,
            children: (0, l.jsxs)(`div`, {
              className: `service-cta-inner`,
              children: [
                (0, l.jsxs)(`div`, {
                  children: [
                    (0, l.jsxs)(`h2`, {
                      children: [
                        `Not sure which service`,
                        (0, l.jsx)(`br`, {}),
                        (0, l.jsx)(`em`, { children: `you need?` }),
                      ],
                    }),
                    (0, l.jsx)(`p`, {
                      children: `Book a free consultation and let's talk through your project. We'll help you understand the scope, timeline and cost — with no obligation.`,
                    }),
                  ],
                }),
                (0, l.jsxs)(n, {
                  to: `/contact`,
                  className: `button-primary`,
                  style: { flexShrink: 0 },
                  children: [`Start a conversation `, (0, l.jsx)(r, { size: 17 })],
                }),
              ],
            }),
          }),
        }),
        (0, l.jsx)(a, {}),
      ],
    })
  );
}
export { u as component };
