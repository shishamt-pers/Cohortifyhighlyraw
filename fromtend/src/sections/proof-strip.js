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
export function ProofStrip() {
  return `
    <section class="proof-strip">
      <div class="container">
        <div class="stats">
          ${[
            ["ri-user-follow-line", "5", "+", "Students enrolled", "primary"],
            ["ri-group-line", "9", "", "Total seats", "secondary"],
            ["ri-fire-line", "4", "", "Seats remaining", "accent"],
            ["ri-timer-flash-line", "90", " min", "Live session", "primary"],
          ]
            .map(
              ([icon, value, suffix, label, tone]) => `
                <div class="stat">
                  <i class="${icon} stat-icon ${tone}"></i>
                  <strong data-counter="${value}" data-suffix="${suffix}">0${suffix}</strong>
                  <span>${label}</span>
                </div>
              `
            )
            .join("")}
        </div>

        <div class="proof-bar">
          <div class="proof-badges">
            <span class="badge accent"><i class="ri-checkbox-circle-fill"></i>5+ enrolled</span>
            <span class="badge secondary"><i class="ri-armchair-line"></i>4 remaining</span>
            <span class="badge primary"><i class="ri-flashlight-fill"></i>Filling fast</span>
          </div>

          <div class="fill-wrap">
            <div>
              <span>Seats bhar rahe hain</span>
              <span>56% filled</span>
            </div>
            <div class="fill"><i data-fill></i></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

