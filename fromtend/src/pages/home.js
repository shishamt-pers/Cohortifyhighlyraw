import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import { EnrollModal } from "../popup/EnrollModal.js";
import { Hero } from "../sections/hero.js";
import { ProofStrip } from "../sections/proof-strip.js";
import { UpcomingSession } from "../sections/upcoming-session.js";
import { WhatYouGet } from "../sections/what-you-get.js";
import { MentorSection } from "../sections/mentor.js";
import { HostGuests } from "../sections/host-guests.js";
import { Gallery } from "../sections/gallery.js";
import { Testimonials } from "../sections/testimonials.js";
import { Pricing } from "../sections/pricing.js";
import { Faq } from "../sections/faq.js";
import { CtaBanner } from "../sections/cta-banner.js";

export function Home() {
  return `
    ${Navbar()}
    <main>
      ${Hero()}
      ${ProofStrip()}
      ${UpcomingSession()}
      ${WhatYouGet()}
      ${MentorSection()}
      ${HostGuests()}
      ${Gallery()}
      ${Testimonials()}
      ${Pricing()}
      ${Faq()}
      ${CtaBanner()}
    </main>
    ${Footer()}
    ${EnrollModal()}
  `;
}