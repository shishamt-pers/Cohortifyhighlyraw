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
export function HostGuests() {
  return `
    <section id="host" class="section tinted">
      <div class="container split reverse">
        <div>
          <span class="eyebrow">Host & Guests</span>
          <h2>Session ko chalata kaun hai, aur kaun aata hai</h2>
          <p class="lead">Host poore session ko smoothly chalata hai, aur special guests session se thoda pehle announce kiye jaate hain.</p>

          <div class="stat-row">
            <span><strong>90</strong><small>minutes</small></span>
            <span><strong>4</strong><small>guest spots</small></span>
            <span><strong>1</strong><small>growing cohort</small></span>
          </div>
        </div>

        <div
          class="portrait portrait-host"
          data-image="${images.host}"
          data-fallback="${images.fallbackHost}"
          style="background-image:linear-gradient(180deg,#2c1b1410,#2c1b14c9),url('${images.host}')"
        >
          <span>Community host</span>
          <strong>${host.name}<br /><small>${host.grade}</small></strong>
        </div>
      </div>
    </section>
  `;
}

