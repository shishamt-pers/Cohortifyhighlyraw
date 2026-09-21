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
export function Hero() {
  return `
    <section id="top" class="hero" data-image="${images.hero}" data-fallback="${images.fallbackHero}" style="--hero-image:url('${images.hero}')">
      <div class="hero-shade"></div>
      <div class="hero-content">
        <span class="hero-pill"><i class="ri-live-line"></i>${session.label} • Enrollment open</span>
        <h1>Cohortify</h1>
        <p class="hero-tagline">Where ambition meets alliance.</p>
        <p class="hero-copy">Topper mentors, different schools ke naye dost, aur ek community jo sirf session tak seemit nahi rehti. 13–16 saal ke students aur unke parents ke liye bana ek aisa space jahan guidance boring nahi lagti.</p>
        <div class="hero-buttons">
          ${enrollButton()}
          <a class="button ghost" href="#upcoming-session">Session details dekho <i class="ri-arrow-down-line"></i></a>
        </div>

        <div class="hero-meta">
          <span><i class="ri-calendar-event-line"></i><small>Date</small><b>${session.date}</b></span>
          <span><i class="ri-time-line"></i><small>Time</small><b>${session.time}</b></span>
          <span><i class="ri-price-tag-3-line"></i><small>Session fee</small><b>${session.fee}</b></span>
        </div>
      </div>
    </section>
  `;
}

