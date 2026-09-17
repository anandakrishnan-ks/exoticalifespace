import { d as e, i as t, l as n, s as r, u as i } from "./index-B3N1t6nc.js";
import { a, n as o, r as s, t as c } from "./useReveal-CG7izAE5.js";
import { t as l } from "./PageHero-0lVxN35G.js";
import { n as u, t as d } from "./exotica-hero-C0Ebm1g_.js";
import { n as f, r as p, t as m } from "./project-commercial-B8yxn48M.js";
var h = e(i()),
  g = n(),
  _ = { hero: d, about: u, residence: p, hospitality: f, commercial: m },
  v = [`All`, `Residential`, `Commercial`, `Hospitality`];
function y() {
  let [e, n] = (0, h.useState)(`All`);
  c();
  let i = e === `All` ? t : t.filter((t) => t.category === e);
  return (0, g.jsxs)(`main`, {
    className: `bg-background`,
    children: [
      (0, g.jsx)(s, { alwaysSolid: !0 }),
      (0, g.jsx)(l, {
        breadcrumbs: [{ label: `Home`, to: `/` }, { label: `Projects` }],
        kicker: `Featured expertise`,
        title: (0, g.jsxs)(g.Fragment, {
          children: [
            `Spaces crafted`,
            (0, g.jsx)(`br`, {}),
            (0, g.jsx)(`em`, { children: `with precision.` }),
          ],
        }),
        subtitle: `Homes, hotels, offices and commercial environments shaped through design excellence and dependable execution in Thiruvananthapuram, Kerala.`,
        variant: `surface`,
      }),
      (0, g.jsx)(`section`, {
        className: `projects-page-body`,
        children: (0, g.jsxs)(`div`, {
          className: `page-shell`,
          children: [
            (0, g.jsx)(`div`, {
              className: `projects-filter-bar`,
              role: `group`,
              "aria-label": `Filter projects by category`,
              children: v.map((r) =>
                (0, g.jsxs)(
                  `button`,
                  {
                    type: `button`,
                    className: `filter-btn ${e === r ? `filter-btn-active` : ``}`,
                    onClick: () => n(r),
                    "aria-pressed": e === r,
                    children: [
                      r,
                      r !== `All` &&
                        (0, g.jsxs)(`span`, {
                          style: { marginLeft: `.5rem`, opacity: 0.55 },
                          children: [`(`, t.filter((e) => e.category === r).length, `)`],
                        }),
                    ],
                  },
                  r,
                ),
              ),
            }),
            (0, g.jsx)(`div`, {
              className: `projects-page-grid`,
              children: i.map((e) =>
                (0, g.jsxs)(
                  `article`,
                  {
                    className: `project-page-card`,
                    "data-reveal": !0,
                    children: [
                      (0, g.jsx)(`div`, {
                        className: `project-page-card-img`,
                        children: (0, g.jsx)(`img`, {
                          src: _[e.imageKey],
                          alt: e.title,
                          loading: `lazy`,
                          width: 800,
                          height: 980,
                        }),
                      }),
                      (0, g.jsxs)(`div`, {
                        className: `project-page-card-meta`,
                        children: [
                          (0, g.jsxs)(`span`, { children: [e.category, ` · `, e.location] }),
                          (0, g.jsx)(`h3`, { children: e.title }),
                          (0, g.jsx)(`p`, { children: e.description }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
            (0, g.jsx)(`p`, {
              className: `projects-disclaimer`,
              children: `Representative imagery shown while the Exotica Lifespace project portfolio is being finalised. Photography from completed client projects will be added progressively.`,
            }),
          ],
        }),
      }),
      (0, g.jsx)(`section`, {
        className: `section-space`,
        children: (0, g.jsxs)(`div`, {
          className: `page-shell`,
          children: [
            (0, g.jsxs)(`div`, {
              className: `section-heading`,
              "data-reveal": !0,
              children: [
                (0, g.jsxs)(`div`, {
                  children: [
                    (0, g.jsx)(`p`, { className: `eyebrow`, children: `Our breadth` }),
                    (0, g.jsxs)(`h2`, {
                      children: [
                        `Every category,`,
                        (0, g.jsx)(`br`, {}),
                        (0, g.jsx)(`em`, { children: `one team.` }),
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(`p`, {
                  children: `We work across residential, commercial, retail and hospitality — bringing the same commitment to quality and precision to every project type.`,
                }),
              ],
            }),
            (0, g.jsxs)(`div`, {
              className: `project-editorial`,
              children: [
                (0, g.jsxs)(`figure`, {
                  className: `project-tall`,
                  "data-reveal": !0,
                  children: [
                    (0, g.jsx)(`div`, {
                      className: `image-wrap`,
                      children: (0, g.jsx)(`img`, {
                        src: p,
                        alt: `Contemporary tropical luxury residence`,
                        loading: `lazy`,
                        width: 1200,
                        height: 1504,
                      }),
                    }),
                    (0, g.jsxs)(`figcaption`, {
                      children: [
                        (0, g.jsx)(`span`, { children: `Residential` }),
                        (0, g.jsx)(`h3`, { children: `Homes & Villas` }),
                      ],
                    }),
                  ],
                }),
                (0, g.jsxs)(`figure`, {
                  className: `project-wide`,
                  "data-reveal": !0,
                  children: [
                    (0, g.jsx)(`div`, {
                      className: `image-wrap`,
                      children: (0, g.jsx)(`img`, {
                        src: f,
                        alt: `Refined Kerala hospitality interior`,
                        loading: `lazy`,
                        width: 1600,
                        height: 1104,
                      }),
                    }),
                    (0, g.jsxs)(`figcaption`, {
                      children: [
                        (0, g.jsx)(`span`, { children: `Hospitality` }),
                        (0, g.jsx)(`h3`, { children: `Hotels & Restaurants` }),
                      ],
                    }),
                  ],
                }),
                (0, g.jsxs)(`figure`, {
                  className: `project-wide project-offset`,
                  "data-reveal": !0,
                  children: [
                    (0, g.jsx)(`div`, {
                      className: `image-wrap`,
                      children: (0, g.jsx)(`img`, {
                        src: m,
                        alt: `Elegant contemporary commercial space`,
                        loading: `lazy`,
                        width: 1600,
                        height: 1104,
                      }),
                    }),
                    (0, g.jsxs)(`figcaption`, {
                      children: [
                        (0, g.jsx)(`span`, { children: `Commercial` }),
                        (0, g.jsx)(`h3`, { children: `Offices & Retail` }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      (0, g.jsx)(`section`, {
        className: `projects-cta`,
        children: (0, g.jsxs)(`div`, {
          className: `page-shell`,
          children: [
            (0, g.jsx)(`p`, { className: `eyebrow eyebrow-light`, children: `Start your project` }),
            (0, g.jsxs)(`h2`, {
              children: [
                `Ready to create`,
                (0, g.jsx)(`br`, {}),
                (0, g.jsx)(`em`, { children: `something exceptional?` }),
              ],
            }),
            (0, g.jsxs)(r, {
              to: `/contact`,
              className: `button-primary`,
              children: [`Book a free consultation `, (0, g.jsx)(a, { size: 17 })],
            }),
          ],
        }),
      }),
      (0, g.jsx)(o, {}),
    ],
  });
}
export { y as component };
