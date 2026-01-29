// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);

items.forEach((el) => observer.observe(el));
