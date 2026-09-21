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
export function Faq() {
  return `
    <section id="faq" class="section tinted">
      <div class="container faq-layout">
        <div>
          ${heading(
            "FAQ",
            "Common sawaal, seedhe jawaab",
            "Aur bhi kuch poochna hai? Session ke WhatsApp group mein host se direct pooch sakte ho."
          )}
          ${enrollButton("Enroll for the upcoming session")}
        </div>

        <div class="faq-list">
          ${faqs
            .map(
              ([question, answer], index) => `
                <div class="faq-item ${index === 0 ? "open" : ""}">
                  <button type="button">
                    <span>${question}</span>
                    <i class="ri-${index === 0 ? "subtract" : "add"}-line"></i>
                  </button>
                  <div class="faq-answer"><p>${answer}</p></div>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

