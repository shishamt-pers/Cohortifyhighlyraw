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
export function Pricing() {
  return `
    <section id="pricing" class="section">
      <div class="container">
        ${heading(
          "Pricing",
          "Ek session try kariye, ya poore 4 mahine ka safar",
          "Dono options simple hain. Jo comfortable lage, wahi choose kariye — koi hidden charge nahi."
        )}

        <div class="pricing-grid">
          <article class="price-card">
            <div class="price-head">
              <div>
                <h3>Single Session</h3>
                <p>Try karke dekhiye</p>
              </div>
            </div>

            <strong>NPR 250</strong>
            <ul>
              <li><i class="ri-checkbox-circle-fill"></i>One live mentorship session</li>
              <li><i class="ri-checkbox-circle-fill"></i>Networking + study materials</li>
              <li><i class="ri-checkbox-circle-fill"></i>Temporary WhatsApp group</li>
            </ul>
            ${enrollButton("Enroll for one session", "wide")}
          </article>

          <article class="price-card featured">
            <div class="price-head">
              <div>
                <h3>4-Month Pass</h3>
                <p>Poora cohort experience</p>
              </div>
              <span class="plan-badge"><i class="ri-vip-crown-2-fill"></i>Best value</span>
            </div>

            <strong>NPR 800</strong>
            <ul>
              <li><i class="ri-checkbox-circle-fill"></i>Four live sessions</li>
              <li><i class="ri-checkbox-circle-fill"></i>Permanent community access</li>
              <li><i class="ri-checkbox-circle-fill"></i>Save NPR 200 overall</li>
            </ul>
            ${enrollButton("Choose 4-month pass", "wide")}
          </article>
        </div>

        <p class="fine-print">
          Payment details enrollment confirm hone ke baad share ki jaati hain. Seat confirm karne ke liye sirf basic details chahiye — naam, school aur WhatsApp number.
        </p>
      </div>
    </section>
  `;
}

