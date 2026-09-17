import { useEffect } from "react";

/** Attach an IntersectionObserver to every [data-reveal] element in the DOM.
 *  Sets data-visible="true" when the element enters the viewport.
 *  Cleans up the observer on unmount. */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
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
