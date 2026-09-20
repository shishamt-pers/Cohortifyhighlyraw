import { brand } from "../../mocks/data.js";

export function Footer() {
  return `
    <footer>
      <div class="footer-grid">
        <div>
          <a class="brand" href="#top">
            <span class="brand-mark"><i class="ri-group-2-fill"></i></span>
            <b>${brand.name}</b>
          </a>
          <p class="footer-copy">${brand.tagline}<br />A growing community for curious students and supportive parents.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="#upcoming-session">Upcoming session</a>
          <a href="#what-you-get">What you get</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div>
          <h4>Connect</h4>
          <a href="#faq">FAQs</a>
          <a href="mailto:${brand.email}">${brand.email}</a>
          <span>${brand.location}</span>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© 2026 Cohortify</span>
        <span>Made for the next chapter.</span>
      </div>
    </footer>
  `;
}