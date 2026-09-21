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
export function Testimonials() {
  return `
    <section id="testimonials" class="section tinted">
      <div class="container">
        ${heading(
          "Reviews",
          "Students aur parents kya kehte hain",
          "Real reactions sessions ke baad — students se aur unke parents se."
        )}

        <div class="testimonial-grid">
          ${testimonials
            .map(
              ([name, quote], index) => `
                <article class="testimonial">
                  <div class="stars">★★★★★</div>
                  <p>“${quote}”</p>
                  <div class="testimonial-person">
                    <img src="${images.avatars[index]}" alt="${name} — Cohortify review" />
                    <span>
                      <b>${name}</b>
                      <small>Cohortify community</small>
                    </span>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

