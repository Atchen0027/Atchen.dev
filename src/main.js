import "./style.css";
import { Header } from "./components/header.js";
import { Hero } from "./components/hero.js";
import { Solution } from "./components/solution.js";
import { Pricing } from "./components/pricing.js";
import { Security } from "./components/security.js";
import { FAQ } from "./components/faq.js";
import { Contact } from "./components/contact.js";
import { Footer } from "./components/footer.js";

document.querySelector("#app").innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${Solution()}
    ${Pricing()}
    ${Security()}
    ${FAQ()}
    ${Contact()}
  </main>
  ${Footer()}
  
  <!-- Contact Modal -->
  <div id="contact-modal" class="modal-overlay">
    <div class="modal-content">
      <button id="modal-close" class="modal-close">&times;</button>
      <h2>Contáctame</h2>
      <div class="contact-item">
        <span class="contact-label">Teléfono</span>
        <a href="tel:610357068" class="contact-value">610 357 068</a>
      </div>
      <div class="contact-item">
        <span class="contact-label">Email</span>
        <a href="mailto:acen0027@gmail.com" class="contact-value">acen0027@gmail.com</a>
      </div>
      <div class="contact-item">
        <span class="contact-label">LinkedIn</span>
        <a href="https://www.linkedin.com/in/atchen-dev" target="_blank" class="contact-value">linkedin.com/in/atchen-dev</a>
      </div>
    </div>
  </div>
`;

// Modal Logic
const contactModal = document.getElementById("contact-modal");
const openModalBtn = document.getElementById("open-contact-modal");
const closeModalBtn = document.getElementById("modal-close");

if (openModalBtn && contactModal && closeModalBtn) {
  openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    contactModal.classList.add("active");
  });

  closeModalBtn.addEventListener("click", () => {
    contactModal.classList.remove("active");
  });

  contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove("active");
    }
  });
}

// Mobile Menu Logic
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    // Optional: Animate hamburger icon (turn into X)
    // For now simple toggle
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// Simple scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
