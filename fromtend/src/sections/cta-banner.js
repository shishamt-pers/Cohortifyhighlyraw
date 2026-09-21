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
export function CtaBanner() {
  return `
    <section class="cta" style="--cta-image:url('${images.cta}')">
      <div class="cta-shade"></div>
      <div class="cta-content">
        <span class="hero-pill"><i class="ri-flashlight-fill"></i>Seats bharte ja rahe hain</span>
        <h2>Aaj decide kariye, kal se aapke paas ek poora cohort hoga.</h2>
        <p>Where ambition meets alliance. Chhoti si fee, bada sa clarity — aur ek aisi dosti jo school ke gate ke bahar bhi chalti hai. Sirf 3 fields bharne hain.</p>

        <div class="cta-recap">
          <span><i class="ri-calendar-event-line"></i>${session.date}</span>
          <span><i class="ri-time-line"></i>${session.time}</span>
          <span><i class="ri-price-tag-3-line"></i>${session.fee} • NPR 800 pass</span>
          <span><i class="ri-fire-line"></i>${session.remaining} seats remaining</span>
        </div>

        <div class="cta-actions">
          ${enrollButton("Enroll for the upcoming session")}
          <a class="button ghost" href="#pricing">4-month pass dekho</a>
        </div>
      </div>
    </section>
  `;
}
