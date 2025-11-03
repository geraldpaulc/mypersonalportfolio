// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      mobileNav.classList.toggle("show");
      navToggle.classList.toggle("active")
    });
    document.querySelectorAll("#mobileNav a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("show");
      });
    });
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = 'Sending...';
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = 'Send';
      alert('Thank you! Your message was submitted (demo). Replace this with a real form handler like Formspree or EmailJS.');
      form.reset();
    }, 900);
  });
}