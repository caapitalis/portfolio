import { useEffect } from "react";

const REVEAL_SELECTOR = ".sr,.srl,.srr,.srs,.srb";

export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("iv")),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const els = document.querySelectorAll(REVEAL_SELECTOR);
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
