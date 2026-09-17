import { a as e, d as t, l as n, n as r, s as i, u as a } from "./index-B3N1t6nc.js";
var o = t(a()),
  s = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  c = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  l = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())),
  u = (e) => {
    let t = l(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  d = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  f = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  p = (0, o.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: c,
        ...l
      },
      u,
    ) =>
      (0, o.createElement)(
        `svg`,
        {
          ref: u,
          ...d,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: s(`lucide`, i),
          ...(!a && !f(l) && { "aria-hidden": `true` }),
          ...l,
        },
        [...c.map(([e, t]) => (0, o.createElement)(e, t)), ...(Array.isArray(a) ? a : [a])],
      ),
  ),
  m = (e, t) => {
    let n = (0, o.forwardRef)(({ className: n, ...r }, i) =>
      (0, o.createElement)(p, {
        ref: i,
        iconNode: t,
        className: s(`lucide-${c(u(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = u(e)), n);
  },
  h = m(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  g = m(`chevron-right`, [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]]),
  _ = m(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  v = m(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  y = n(),
  b = `/exotica-logo.png`;
function x({ alwaysSolid: e = !1 }) {
  let [t, n] = (0, o.useState)(!1),
    [a, s] = (0, o.useState)(!1);
  (0, o.useEffect)(() => {
    if (e) return;
    let t = () => n(window.scrollY > 40);
    return (
      t(),
      window.addEventListener(`scroll`, t, { passive: !0 }),
      () => window.removeEventListener(`scroll`, t)
    );
  }, [e]);
  let c = e || t || a,
    l = () => s(!1);
  return (0, y.jsxs)(`header`, {
    className: `site-header ${c ? `site-header-solid` : ``}`,
    children: [
      (0, y.jsx)(i, {
        to: `/`,
        className: `logo-link`,
        "aria-label": `Exotica Lifespace home`,
        children: (0, y.jsx)(`img`, { src: b, alt: `Exotica Lifespace`, className: `site-logo` }),
      }),
      (0, y.jsx)(`nav`, {
        className: `desktop-nav`,
        "aria-label": `Main navigation`,
        children: r.map(({ label: e, to: t }) =>
          (0, y.jsx)(i, { to: t, className: `nav-link`, children: e }, t),
        ),
      }),
      (0, y.jsxs)(i, {
        to: `/contact`,
        className: `header-cta`,
        children: [`Free consultation `, (0, y.jsx)(h, { size: 15 })],
      }),
      (0, y.jsx)(`button`, {
        type: `button`,
        className: `menu-button`,
        "aria-label": a ? `Close menu` : `Open menu`,
        "aria-expanded": a,
        onClick: () => s((e) => !e),
        children: a ? (0, y.jsx)(v, {}) : (0, y.jsx)(_, {}),
      }),
      (0, y.jsxs)(`div`, {
        className: `mobile-menu ${a ? `mobile-menu-open` : ``}`,
        "aria-hidden": !a,
        children: [
          (0, y.jsx)(`nav`, {
            "aria-label": `Mobile navigation`,
            children: r.map(({ label: e, to: t }, n) =>
              (0, y.jsxs)(
                i,
                {
                  to: t,
                  onClick: l,
                  children: [(0, y.jsxs)(`span`, { children: [`0`, n + 1] }), e],
                },
                t,
              ),
            ),
          }),
          (0, y.jsx)(i, {
            to: `/contact`,
            className: `button-primary`,
            onClick: l,
            children: `Book a free consultation`,
          }),
        ],
      }),
    ],
  });
}
var S = `/exotica-logo.png`;
function C() {
  return (0, y.jsx)(`footer`, {
    className: `site-footer`,
    children: (0, y.jsxs)(`div`, {
      className: `page-shell`,
      children: [
        (0, y.jsxs)(`div`, {
          className: `footer-top`,
          children: [
            (0, y.jsxs)(`div`, {
              className: `footer-brand`,
              children: [
                (0, y.jsx)(`img`, { src: S, alt: `Exotica Lifespace` }),
                (0, y.jsxs)(`p`, {
                  children: [`Thoughtfully designed.`, (0, y.jsx)(`br`, {}), `Carefully built.`],
                }),
              ],
            }),
            (0, y.jsxs)(`div`, {
              className: `footer-links`,
              children: [
                (0, y.jsx)(`span`, { children: `Navigate` }),
                r.map(({ label: e, to: t }) => (0, y.jsx)(i, { to: t, children: e }, t)),
              ],
            }),
            (0, y.jsxs)(`div`, {
              className: `footer-links footer-services`,
              children: [
                (0, y.jsx)(`span`, { children: `Services` }),
                e
                  .slice(0, 4)
                  .map((e) =>
                    (0, y.jsx)(i, { to: `/services/${e.slug}`, children: e.title }, e.slug),
                  ),
              ],
            }),
            (0, y.jsxs)(`div`, {
              className: `footer-cta`,
              children: [
                (0, y.jsx)(`p`, { children: `Have a space in mind?` }),
                (0, y.jsxs)(i, {
                  to: `/contact`,
                  className: `text-link footer-text-link`,
                  children: [`Begin your project `, (0, y.jsx)(h, { size: 16 })],
                }),
              ],
            }),
          ],
        }),
        (0, y.jsxs)(`div`, {
          className: `footer-bottom`,
          children: [
            (0, y.jsxs)(`span`, {
              children: [
                `© `,
                new Date().getFullYear(),
                ` Exotica Lifespace. All rights reserved.`,
              ],
            }),
            (0, y.jsx)(`span`, { children: `Thiruvananthapuram, Kerala` }),
          ],
        }),
      ],
    }),
  });
}
function w() {
  (0, o.useEffect)(() => {
    let e = document.querySelectorAll(`[data-reveal]`),
      t = new IntersectionObserver(
        (e) =>
          e.forEach((e) => {
            e.isIntersecting && e.target.setAttribute(`data-visible`, `true`);
          }),
        { threshold: 0.08 },
      );
    return (e.forEach((e) => t.observe(e)), () => t.disconnect());
  }, []);
}
export { h as a, g as i, C as n, m as o, x as r, w as t };
