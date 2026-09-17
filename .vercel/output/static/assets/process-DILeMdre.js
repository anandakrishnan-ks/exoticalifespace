import { l as e, r as t, s as n } from "./index-B3N1t6nc.js";
import { a as r, n as i, r as a, t as o } from "./useReveal-CG7izAE5.js";
import { t as s } from "./PageHero-0lVxN35G.js";
var c = e();
function l() {
  return (
    o(),
    (0, c.jsxs)(`main`, {
      className: `bg-background`,
      children: [
        (0, c.jsx)(a, { alwaysSolid: !0 }),
        (0, c.jsx)(s, {
          breadcrumbs: [{ label: `Home`, to: `/` }, { label: `Process` }],
          kicker: `How we work`,
          title: (0, c.jsxs)(c.Fragment, {
            children: [
              `A structured path`,
              (0, c.jsx)(`br`, {}),
              (0, c.jsx)(`em`, { children: `from idea to handover.` }),
            ],
          }),
          subtitle: `Transparency, quality and accountability are built into every stage of our delivery. Here's exactly what to expect when you work with us.`,
          variant: `dark`,
        }),
        (0, c.jsx)(`section`, {
          className: `process-page-section`,
          style: {
            background: `var(--dark)`,
            color: `var(--dark-foreground)`,
            paddingBottom: `clamp(6rem,11vw,10rem)`,
          },
          children: (0, c.jsx)(`div`, {
            className: `page-shell`,
            children: (0, c.jsx)(`div`, {
              className: `process-overview-strip`,
              "data-reveal": !0,
              children: t.map((e) =>
                (0, c.jsxs)(
                  `div`,
                  {
                    className: `process-overview-card`,
                    children: [
                      (0, c.jsx)(`span`, { children: e.number }),
                      (0, c.jsx)(`h3`, { children: e.title }),
                      (0, c.jsx)(`p`, { children: e.short }),
                    ],
                  },
                  e.number,
                ),
              ),
            }),
          }),
        }),
        (0, c.jsx)(`section`, {
          className: `process-deep`,
          children: (0, c.jsx)(`div`, {
            className: `page-shell`,
            children: t.map((e) =>
              (0, c.jsxs)(
                `div`,
                {
                  className: `process-deep-step`,
                  "data-reveal": !0,
                  children: [
                    (0, c.jsxs)(`div`, {
                      className: `process-step-label`,
                      children: [
                        (0, c.jsx)(`span`, { className: `process-step-num`, children: e.number }),
                        (0, c.jsx)(`h2`, { children: e.title }),
                        (0, c.jsx)(`span`, {
                          className: `process-step-duration`,
                          children: e.duration,
                        }),
                      ],
                    }),
                    (0, c.jsxs)(`div`, {
                      className: `process-step-body`,
                      children: [
                        (0, c.jsx)(`p`, { className: `body-lg`, children: e.detail }),
                        (0, c.jsx)(`p`, {
                          className: `eyebrow`,
                          style: { marginBottom: `1.2rem` },
                          children: `Key activities`,
                        }),
                        (0, c.jsx)(`ul`, {
                          className: `process-points`,
                          "aria-label": `Key activities for ${e.title}`,
                          children: e.points.map((e) => (0, c.jsx)(`li`, { children: e }, e)),
                        }),
                      ],
                    }),
                  ],
                },
                e.number,
              ),
            ),
          }),
        }),
        (0, c.jsx)(`section`, {
          className: `section-space`,
          style: { background: `var(--surface)` },
          children: (0, c.jsxs)(`div`, {
            className: `page-shell`,
            children: [
              (0, c.jsxs)(`div`, {
                "data-reveal": !0,
                style: { marginBottom: `clamp(3rem,6vw,5rem)` },
                children: [
                  (0, c.jsx)(`p`, { className: `eyebrow`, children: `Common questions` }),
                  (0, c.jsxs)(`h2`, {
                    children: [
                      `Things clients often`,
                      (0, c.jsx)(`br`, {}),
                      (0, c.jsx)(`em`, { children: `ask us about.` }),
                    ],
                  }),
                ],
              }),
              (0, c.jsx)(`div`, {
                style: { borderTop: `1px solid var(--border)` },
                children: [
                  {
                    q: `How long does a typical project take?`,
                    a: `Timelines vary by scope. A standard residential interior can take 8–14 weeks from design sign-off to handover. New construction or larger commercial projects typically run 4–12 months. We provide a detailed schedule at the design stage.`,
                  },
                  {
                    q: `Do you work on projects outside Thiruvananthapuram?`,
                    a: `Our primary focus is Thiruvananthapuram and the surrounding districts. For the right project, we do travel — please reach out and we'll discuss feasibility.`,
                  },
                  {
                    q: `Can we hire you just for design, without construction?`,
                    a: `Yes. While we specialise in integrated delivery, we also offer standalone interior design and planning services. We can guide you through design and hand over drawings and specifications to your preferred contractor.`,
                  },
                  {
                    q: `How do you handle budget overruns?`,
                    a: `Transparent cost management is central to how we work. We provide a detailed cost estimate before any work begins, and any change in scope is presented to you for approval before it's actioned. No surprises.`,
                  },
                  {
                    q: `What happens after handover?`,
                    a: `We remain available after handover to address any snag items and offer post-completion support. We take pride in our work and want you to be fully satisfied with the finished space.`,
                  },
                ].map(({ q: e, a: t }) =>
                  (0, c.jsxs)(
                    `details`,
                    {
                      style: { padding: `2rem 0`, borderBottom: `1px solid var(--border)` },
                      children: [
                        (0, c.jsxs)(`summary`, {
                          style: {
                            cursor: `pointer`,
                            fontFamily: `var(--font-display)`,
                            fontSize: `clamp(1.2rem,2vw,1.7rem)`,
                            fontWeight: 400,
                            listStyle: `none`,
                            display: `flex`,
                            justifyContent: `space-between`,
                            alignItems: `center`,
                            gap: `2rem`,
                          },
                          children: [
                            e,
                            (0, c.jsx)(`span`, {
                              style: {
                                color: `var(--primary)`,
                                fontSize: `1.5rem`,
                                lineHeight: 1,
                                flexShrink: 0,
                              },
                              children: `+`,
                            }),
                          ],
                        }),
                        (0, c.jsx)(`p`, {
                          style: {
                            marginTop: `1.5rem`,
                            color: `var(--muted-foreground)`,
                            lineHeight: 1.85,
                            maxWidth: `56rem`,
                            fontSize: `.93rem`,
                          },
                          children: t,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, c.jsx)(`section`, {
          className: `process-cta`,
          children: (0, c.jsxs)(`div`, {
            className: `page-shell`,
            children: [
              (0, c.jsx)(`p`, { className: `eyebrow`, children: `Ready to begin?` }),
              (0, c.jsxs)(`h2`, {
                children: [
                  `Let's start your`,
                  (0, c.jsx)(`br`, {}),
                  (0, c.jsx)(`em`, { children: `project together.` }),
                ],
              }),
              (0, c.jsxs)(n, {
                to: `/contact`,
                className: `button-primary`,
                children: [`Book a free consultation `, (0, c.jsx)(r, { size: 17 })],
              }),
            ],
          }),
        }),
        (0, c.jsx)(i, {}),
      ],
    })
  );
}
export { l as component };
