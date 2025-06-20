const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;

toggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  toggle.textContent = next === "dark" ? "☀️" : "🌙";
});
