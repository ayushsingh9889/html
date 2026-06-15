// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// CTA button click
document.getElementById("ctaBtn").addEventListener("click", () => {
  alert("You clicked the CTA! 🎉");
});

// Theme toggle (dark <-> light)
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.setAttribute(
    "aria-pressed",
    document.body.classList.contains("light")
  );
});

// Simple form handler (no backend)
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  formMsg.textContent = `Thanks, ${name}! Your message is noted (demo mode).`;
  form.reset();
});
