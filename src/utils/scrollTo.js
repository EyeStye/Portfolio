export function scrollToSection(id) {
  const el = document.getElementById(id.replace("#", ""));
  if (!el) return;
  const navOffset = 84;
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
  window.scrollTo({ top, behavior: "smooth" });
}
