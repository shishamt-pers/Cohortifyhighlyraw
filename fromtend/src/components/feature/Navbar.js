import { brand, navLinks } from "../../mocks/data.js";

export function Navbar() {
  return `
    <header id="navbar">
      <nav class="nav">
        <a class="brand" href="#top">
          <span class="brand-mark"><i class="ri-group-2-fill"></i></span>
          <b>${brand.name}</b>
        </a>

        <div class="nav-links">
          ${navLinks.map(([label, id]) => `<a href="#${id}">${label}</a>`).join("")}
        </div>

        <div class="nav-actions">
          <button class="icon-btn" data-theme aria-label="Toggle theme">
            <i class="ri-moon-line"></i>
          </button>
          <button class="button small" data-enroll>
            Enroll Now <i class="ri-arrow-right-line"></i>
          </button>
          <button class="icon-btn menu-toggle" data-menu aria-label="Open menu">
            <i class="ri-menu-3-line"></i>
          </button>
        </div>
      </nav>

      <div class="mobile-menu" data-mobile-menu>
        <button class="icon-btn close-menu" data-menu><i class="ri-close-line"></i></button>
        ${navLinks.map(([label, id]) => `<a href="#${id}">${label}</a>`).join("")}
        <button class="button" data-enroll>Enroll for the upcoming session</button>
        <p>${brand.tagline}</p>
      </div>
    </header>
  `;
}