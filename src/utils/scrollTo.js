export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  window.dispatchEvent(new Event("nav-wait-start"));
  target.scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => {
    window.dispatchEvent(new Event("nav-wait-end"));
  }, 700);
}
