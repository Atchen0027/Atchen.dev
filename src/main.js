import "./style.css";
import { Header } from "./components/header.js";
import { Hero } from "./components/hero.js";
import { Solution } from "./components/solution.js";
import { About } from "./components/about.js";
import { Pricing } from "./components/pricing.js";
import { Security } from "./components/security.js";
import { Gallery } from "./components/gallery.js";
import { Testimonials } from "./components/testimonials.js";
import { FAQ } from "./components/faq.js";
import { Contact } from "./components/contact.js";
import { Footer } from "./components/footer.js";

document.querySelector("#app").innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${Solution()}
    ${About()}
    ${Pricing()}
    ${Security()}
    ${Gallery()}
    <!-- ${Testimonials()} (Hidden until first feedback) -->
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

// Lightbox Logic
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const galleryItems = document.querySelectorAll(".gallery-item");
const closeBtn = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("lightbox-prev");
const nextBtn = document.getElementById("lightbox-next");

let currentIndex = 0;

function showImage(index) {
  if (index >= galleryItems.length) currentIndex = 0;
  else if (index < 0) currentIndex = galleryItems.length - 1;
  else currentIndex = index;

  const item = galleryItems[currentIndex];
  const img = item.querySelector("img");
  const caption = item.querySelector(".gallery-caption").textContent;

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption;
}

if (lightbox) {
  // Open Lightbox
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      lightbox.classList.add("active");
      showImage(index);
    });
  });

  // Close Lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  // Navigation
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage(currentIndex - 1);
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage(currentIndex + 1);
  });

  // Keyboard Navigation
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") lightbox.classList.remove("active");
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });
}
