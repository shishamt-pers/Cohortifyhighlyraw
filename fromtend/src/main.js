import { renderApp } from "./router/index.js";
import { setupTheme } from "./context/ThemeContext.js";
import { setupEnrollment } from "./context/EnrollContext.js";
import { images } from "./mocks/data.js";

renderApp(document.querySelector("#app"));
setupTheme();
setupEnrollment();

const navbar = document.querySelector("#navbar");
window.addEventListener(
  "scroll",
  () => navbar.classList.toggle("scrolled", window.scrollY > 24),
  { passive: true }
);

document.addEventListener("click", (event) => {
  const menu = document.querySelector("[data-mobile-menu]");

  if (event.target.closest("[data-menu]")) {
    menu.classList.toggle("open");
  }

  if (event.target.closest(".mobile-menu a, .mobile-menu [data-enroll]")) {
    menu.classList.remove("open");
  }
});

const routeMap = {
  sessions: "upcoming-session",
  benefits: "what-you-get",
  reviews: "testimonials",
};
const section = routeMap[location.pathname.slice(1)] || location.hash.slice(1);

if (section) {
  document.getElementById(section)?.scrollIntoView();
}

document
  .querySelectorAll(
    ".section > .container > *, .session-grid > *, .benefit, .testimonial, .price-card, .gallery-card, .portrait"
  )
  .forEach((element, index) => {
    element.classList.add("cf-reveal");
    element.style.animationDelay = `${Math.min(index * 55, 420)}ms`;
  });

document.querySelectorAll("[data-counter]").forEach((counter) => {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        observer.unobserve(entry.target);

        const target = Number(counter.dataset.counter);
        const suffix = counter.dataset.suffix || "";
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / 1400, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          counter.textContent = `${Math.round(eased * target)}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      }),
    { threshold: 0.4 }
  );

  observer.observe(counter);
});

const fill = document.querySelector("[data-fill]");

if (fill) {
  const fillObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fill.style.width = "56%";
          fillObserver.unobserve(entry.target);
        }
      }),
    { threshold: 0.4 }
  );

  fillObserver.observe(fill);
}

const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".cf-reveal").forEach((element) => revealObserver.observe(element));

const lightbox = document.querySelector("[data-lightbox]");
let galleryIndex = 0;

const showGalleryImage = (index) => {
  galleryIndex = (index + images.gallery.length) % images.gallery.length;
  lightbox.querySelector("[data-lightbox-image]").src = images.gallery[galleryIndex];
  lightbox.classList.add("open");
  document.body.classList.add("locked");
};

document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-gallery-index]");

  if (card) {
    showGalleryImage(Number(card.dataset.galleryIndex));
  }

  if (event.target.closest("[data-gallery-prev]")) {
    showGalleryImage(galleryIndex - 1);
  }

  if (event.target.closest("[data-gallery-next]")) {
    showGalleryImage(galleryIndex + 1);
  }

  if (event.target === lightbox || event.target.closest("[data-lightbox-close]")) {
    lightbox.classList.remove("open");
    document.body.classList.remove("locked");
  }
});

document.querySelectorAll(".faq-item button").forEach((button) =>
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");

    document.querySelectorAll(".faq-item").forEach((other) => {
      if (other !== item) {
        other.classList.remove("open");
        other.querySelector("i").className = "ri-add-line";
      }
    });

    item.classList.toggle("open");
    item.querySelector("i").className = `ri-${item.classList.contains("open") ? "subtract" : "add"}-line`;
  })
);