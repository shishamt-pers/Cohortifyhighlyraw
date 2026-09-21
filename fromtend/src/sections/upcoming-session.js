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
export function UpcomingSession() {
  return `
    <section id="upcoming-session" class="section">
      <div class="container">
        ${heading(
          "Upcoming Session",
          "Agla session — aapke liye ready hai",
          "Ek session mein mentor, host, special guests aur poora networking round. Details dekh lijiye, phir seat book kar lijiye."
        )}

        <div class="session-grid">
          <article class="panel session-main">
            <div>
              <span class="status"><i></i>${"Enrollment open"}</span>
              <span class="label">${session.label}</span>
            </div>

            <h3>${session.title}</h3>
            <p>${session.description}</p>

            <div class="meta-grid">
              <span><i class="ri-calendar-event-line"></i><small>Date</small><b>${session.date}</b></span>
              <span><i class="ri-time-line"></i><small>Time</small><b>${session.time}</b></span>
              <span><i class="ri-vidicon-line"></i><small>Mode</small><b>${session.mode}</b></span>
              <span><i class="ri-user-heart-line"></i><small>Kiske liye</small><b>${session.age}</b></span>
            </div>

            <h4>Session mein kya hoga</h4>
            <ul class="check-list">
              ${session.agenda.map((item) => `<li><i class="ri-checkbox-circle-fill"></i>${item}</li>`).join("")}
            </ul>

            <div class="people-row">
              <span><i class="ri-user-star-line"></i><small>Is session ka mentor</small><b>${mentor.name} • ${mentor.grade}</b></span>
              <span><i class="ri-mic-line"></i><small>Host</small><b>${host.name} • ${host.role}</b></span>
            </div>
          </article>

          <aside class="panel fee-panel">
            <span class="eyebrow">Session fee</span>
            <strong>${session.fee}</strong>
            <span>/ session</span>

            <div class="progress-box">
              <b>Enrollment status</b>
              <b>${session.enrolled} enrolled</b>
              <div class="progress"><i style="width:${(session.enrolled / session.seats) * 100}%"></i></div>
              <small>${session.remaining} seats left</small>
            </div>

            <ul class="simple-list">
              <li><i class="ri-shield-check-line"></i>Parents/guardians bhi join kar sakte hain</li>
              <li><i class="ri-whatsapp-line"></i>Session WhatsApp group access</li>
              <li><i class="ri-gift-2-line"></i>Study materials + bumper prize chance</li>
            </ul>

            ${enrollButton("Enroll for the upcoming session", "wide")}
            <a class="text-link" href="#pricing">See pricing options</a>
          </aside>
        </div>
      </div>
    </section>
  `;
}

