import {
  benefits,
  faqs,
  host,
  images,
  mentor,
  session,
  testimonials,
} from "../mock/data.js";
import { enrollButton } from "../components/EnrollButton.js";
import { heading } from "./heading.js";
export function WhatYouGet() {
  return `
    <section id="what-you-get" class="section tinted">
      <div class="container">
        ${heading(
          "What you get",
          "Sirf class nahi — ek poora experience",
          "Mentorship, guidance, naye dost, jokes aur perks. Sab kuch ek hi jagah, ek hi session mein."
        )}

        <div class="benefit-grid">
          ${benefits
            .map(
              ([icon, title, text], index) => `
                <article class="benefit tone-${index % 3}">
                  <i class="${icon}"></i>
                  <h3>${title}</h3>
                  <p>${text}</p>
                </article>
              `
            )
            .join("")}
        </div>

        <div class="benefit-cta">
          <div>
            <h3>Dekha? Ye sab ek session mein milta hai — NPR 250 mein.</h3>
            <p>Chhoti investment, badi clarity. Seat limited hai, isliye jaldi decide kariye.</p>
          </div>
          ${enrollButton("Enroll for the upcoming session")}
        </div>
      </div>
    </section>
  `;
}

