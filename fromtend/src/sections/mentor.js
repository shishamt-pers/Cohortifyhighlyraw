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
export function MentorSection() {
  return `
    <section id="mentor" class="section">
      <div class="container split">
        <div
          class="portrait portrait-mentor"
          data-image="${images.mentor}"
          data-fallback="${images.fallbackMentor}"
          style="background-image:linear-gradient(180deg,#2c1b1410,#2c1b14c9),url('${images.mentor}')"
        >
          <span>Meet the mentor</span>
          <strong>${mentor.name}<br /><small>${mentor.grade}</small></strong>
        </div>

        <div>
          ${heading(
            "Meet your mentor",
            "Har session mein ek naya topper mentor",
            "Mentor usually pichle ya pichle se pichle saal ka high-achieving student hota hai — jo abhi Class 11/12 mein hai aur wahi phase just cross kar chuka hai."
          )}

          <div class="quote">
            “Aapko perfect answer nahi, better questions aur ek honest next step chahiye.”
            <b>${mentor.name} · School topper • District science olympiad finalist</b>
          </div>

          ${enrollButton("Enroll for the upcoming session")}
        </div>
      </div>
    </section>
  `;
}

