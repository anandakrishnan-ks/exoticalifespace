import { useEffect } from "react";

/** Attach an IntersectionObserver to every [data-reveal] element in the DOM.
 *  Sets data-visible="true" when the element enters the viewport.
 *  Applies a staggered transition delay for elements intersecting at the same time.
 *  Cleans up the observer on unmount. */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    
    // Track elements intersecting in the current frame to apply stagger
    let staggerQueue: HTMLElement[] = [];
    let staggerTimeout: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            // Only stagger if not already visible
            if (target.getAttribute("data-visible") !== "true") {
              staggerQueue.push(target);
            }
          }
        });

        if (staggerQueue.length > 0 && !staggerTimeout) {
          staggerTimeout = setTimeout(() => {
            // Sort by DOM order or just use current order
            staggerQueue.forEach((el, index) => {
              el.style.transitionDelay = `${index * 120}ms`;
              // Force reflow before applying visible
              void el.offsetWidth;
              el.setAttribute("data-visible", "true");
            });
            staggerQueue = [];
            staggerTimeout = null;
          }, 10);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
