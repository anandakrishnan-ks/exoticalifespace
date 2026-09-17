import { d as e, l as t, u as n } from "./index-B3N1t6nc.js";
import { a as r, n as i, r as a, t as o } from "./useReveal-CG7izAE5.js";
import { t as s } from "./check-C5lF4MBw.js";
import { t as c } from "./PageHero-0lVxN35G.js";
var l = e(n()),
  u = t();
function d() {
  let [e, t] = (0, l.useState)(!1);
  return (
    o(),
    (0, u.jsxs)(`main`, {
      className: `bg-background`,
      children: [
        (0, u.jsx)(a, { alwaysSolid: !0 }),
        (0, u.jsx)(c, {
          breadcrumbs: [{ label: `Home`, to: `/` }, { label: `Contact` }],
          kicker: `Start a conversation`,
          title: (0, u.jsxs)(u.Fragment, {
            children: [
              `Let's shape a space`,
              (0, u.jsx)(`br`, {}),
              (0, u.jsx)(`em`, { children: `distinctly yours.` }),
            ],
          }),
          subtitle: `Tell us what you are planning — whether you are building, renovating or reimagining an existing interior. A free consultation is the best place to start.`,
          variant: `dark`,
        }),
        (0, u.jsx)(`section`, {
          className: `contact-page-body`,
          children: (0, u.jsx)(`div`, {
            className: `page-shell`,
            children: (0, u.jsxs)(`div`, {
              className: `contact-page-cols`,
              children: [
                (0, u.jsxs)(`div`, {
                  "data-reveal": !0,
                  children: [
                    (0, u.jsx)(`p`, { className: `eyebrow`, children: `Reach us` }),
                    (0, u.jsxs)(`h2`, {
                      children: [
                        `We'd love to hear`,
                        (0, u.jsx)(`br`, {}),
                        (0, u.jsx)(`em`, { children: `from you.` }),
                      ],
                    }),
                    (0, u.jsx)(`p`, {
                      className: `contact-intro-text`,
                      children: `Whether you have a clear brief or just an idea, we're happy to talk. Every project starts with a conversation — reach out and we'll respond within one working day.`,
                    }),
                    (0, u.jsxs)(`div`, {
                      className: `contact-info-card`,
                      children: [
                        (0, u.jsx)(`span`, {
                          className: `contact-info-label`,
                          children: `Office address`,
                        }),
                        (0, u.jsxs)(`address`, {
                          className: `contact-info-value`,
                          children: [
                            `TC 29/417, Althara Nagar,`,
                            (0, u.jsx)(`br`, {}),
                            `Opp. Vidhyadiraja Higher Secondary School,`,
                            (0, u.jsx)(`br`, {}),
                            `Vellayambalam, Thiruvananthapuram – 695010`,
                          ],
                        }),
                      ],
                    }),
                    (0, u.jsxs)(`div`, {
                      className: `contact-info-card`,
                      children: [
                        (0, u.jsx)(`span`, {
                          className: `contact-info-label`,
                          children: `Registered address`,
                        }),
                        (0, u.jsxs)(`address`, {
                          className: `contact-info-value`,
                          children: [
                            `L-33, Ashtapadi, Lane B, LIC Lane,`,
                            (0, u.jsx)(`br`, {}),
                            `Pattom Palace PO,`,
                            (0, u.jsx)(`br`, {}),
                            `Thiruvananthapuram – 695004`,
                          ],
                        }),
                      ],
                    }),
                    (0, u.jsxs)(`div`, {
                      className: `contact-info-card`,
                      children: [
                        (0, u.jsx)(`span`, {
                          className: `contact-info-label`,
                          children: `Working hours`,
                        }),
                        (0, u.jsx)(`p`, {
                          className: `contact-info-value`,
                          children: `Monday – Saturday, 9 am – 6 pm IST`,
                        }),
                      ],
                    }),
                    (0, u.jsxs)(`div`, {
                      className: `contact-info-card`,
                      children: [
                        (0, u.jsx)(`span`, {
                          className: `contact-info-label`,
                          children: `What to expect`,
                        }),
                        (0, u.jsx)(`ul`, {
                          style: {
                            listStyle: `none`,
                            padding: 0,
                            margin: `0.8rem 0 0`,
                            display: `grid`,
                            gap: `.6rem`,
                          },
                          children: [
                            `Response within 1 working day`,
                            `No obligation free consultation`,
                            `Detailed project scope discussion`,
                            `Transparent cost estimate provided`,
                          ].map((e) =>
                            (0, u.jsxs)(
                              `li`,
                              {
                                style: {
                                  display: `flex`,
                                  alignItems: `baseline`,
                                  gap: `.8rem`,
                                  color: `var(--muted-foreground)`,
                                  fontSize: `.85rem`,
                                },
                                children: [
                                  (0, u.jsx)(s, {
                                    size: 13,
                                    style: {
                                      color: `var(--primary)`,
                                      flexShrink: 0,
                                      marginTop: `.15rem`,
                                    },
                                  }),
                                  e,
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, u.jsxs)(`div`, {
                  "data-reveal": !0,
                  children: [
                    (0, u.jsx)(`p`, { className: `eyebrow`, children: `Enquiry form` }),
                    (0, u.jsxs)(`h2`, {
                      style: { marginBottom: `2.5rem` },
                      children: [
                        `Tell us about`,
                        (0, u.jsx)(`br`, {}),
                        (0, u.jsx)(`em`, { children: `your project.` }),
                      ],
                    }),
                    (0, u.jsxs)(`form`, {
                      className: `enquiry-form`,
                      onSubmit: (e) => {
                        (e.preventDefault(), t(!0), e.currentTarget.reset());
                      },
                      noValidate: !0,
                      children: [
                        (0, u.jsxs)(`div`, {
                          className: `field`,
                          children: [
                            (0, u.jsx)(`label`, { htmlFor: `c-name`, children: `Full name` }),
                            (0, u.jsx)(`input`, {
                              id: `c-name`,
                              name: `name`,
                              required: !0,
                              autoComplete: `name`,
                              placeholder: `Your full name`,
                            }),
                          ],
                        }),
                        (0, u.jsxs)(`div`, {
                          className: `field-row`,
                          children: [
                            (0, u.jsxs)(`div`, {
                              className: `field`,
                              children: [
                                (0, u.jsx)(`label`, {
                                  htmlFor: `c-phone`,
                                  children: `Phone number`,
                                }),
                                (0, u.jsx)(`input`, {
                                  id: `c-phone`,
                                  name: `phone`,
                                  type: `tel`,
                                  required: !0,
                                  autoComplete: `tel`,
                                  placeholder: `+91 00000 00000`,
                                }),
                              ],
                            }),
                            (0, u.jsxs)(`div`, {
                              className: `field`,
                              children: [
                                (0, u.jsx)(`label`, {
                                  htmlFor: `c-email`,
                                  children: `Email address`,
                                }),
                                (0, u.jsx)(`input`, {
                                  id: `c-email`,
                                  name: `email`,
                                  type: `email`,
                                  required: !0,
                                  autoComplete: `email`,
                                  placeholder: `you@example.com`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, u.jsxs)(`div`, {
                          className: `field`,
                          children: [
                            (0, u.jsx)(`label`, {
                              htmlFor: `c-project-type`,
                              children: `Project type`,
                            }),
                            (0, u.jsxs)(`select`, {
                              id: `c-project-type`,
                              name: `projectType`,
                              required: !0,
                              defaultValue: ``,
                              children: [
                                (0, u.jsx)(`option`, {
                                  value: ``,
                                  disabled: !0,
                                  children: `Select a project type`,
                                }),
                                (0, u.jsx)(`option`, { children: `Residential interior design` }),
                                (0, u.jsx)(`option`, { children: `New construction` }),
                                (0, u.jsx)(`option`, { children: `Renovation or remodel` }),
                                (0, u.jsx)(`option`, { children: `Commercial or hospitality` }),
                                (0, u.jsx)(`option`, { children: `Custom furniture or fit-out` }),
                                (0, u.jsx)(`option`, { children: `Turnkey project` }),
                                (0, u.jsx)(`option`, { children: `Other` }),
                              ],
                            }),
                          ],
                        }),
                        (0, u.jsxs)(`div`, {
                          className: `field`,
                          children: [
                            (0, u.jsx)(`label`, {
                              htmlFor: `c-budget`,
                              children: `Approximate budget`,
                            }),
                            (0, u.jsxs)(`select`, {
                              id: `c-budget`,
                              name: `budget`,
                              defaultValue: ``,
                              children: [
                                (0, u.jsx)(`option`, {
                                  value: ``,
                                  disabled: !0,
                                  children: `Select a budget range (optional)`,
                                }),
                                (0, u.jsx)(`option`, { children: `Below ₹10 lakhs` }),
                                (0, u.jsx)(`option`, { children: `₹10 – ₹25 lakhs` }),
                                (0, u.jsx)(`option`, { children: `₹25 – ₹50 lakhs` }),
                                (0, u.jsx)(`option`, { children: `₹50 lakhs – ₹1 crore` }),
                                (0, u.jsx)(`option`, { children: `Above ₹1 crore` }),
                                (0, u.jsx)(`option`, { children: `Prefer not to say` }),
                              ],
                            }),
                          ],
                        }),
                        (0, u.jsxs)(`div`, {
                          className: `field`,
                          children: [
                            (0, u.jsx)(`label`, {
                              htmlFor: `c-message`,
                              children: `Tell us about your project`,
                            }),
                            (0, u.jsx)(`textarea`, {
                              id: `c-message`,
                              name: `message`,
                              rows: 5,
                              required: !0,
                              placeholder: `Describe your project, location, timeline and any specific requirements…`,
                            }),
                          ],
                        }),
                        (0, u.jsxs)(`button`, {
                          className: `button-primary form-submit`,
                          type: `submit`,
                          children: [`Send enquiry `, (0, u.jsx)(r, { size: 17 })],
                        }),
                        e &&
                          (0, u.jsxs)(`p`, {
                            className: `form-success`,
                            role: `status`,
                            children: [
                              (0, u.jsx)(s, { size: 16 }),
                              ` Thank you. Your enquiry has been received and our team will be in touch shortly.`,
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        (0, u.jsx)(i, {}),
      ],
    })
  );
}
export { d as component };
