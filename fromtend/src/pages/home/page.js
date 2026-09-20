import { Navbar } from "../../components/feature/Navbar.js";
import { Footer } from "../../components/feature/Footer.js";
import { EnrollModal } from "../../components/feature/EnrollModal.js";
import { Hero, ProofStrip, UpcomingSession, WhatYouGet, MentorSection, HostGuests, Gallery, Testimonials, Pricing, Faq, CtaBanner } from "./components/sections.js";
export function Home() { return `${Navbar()}<main>${Hero()}${ProofStrip()}${UpcomingSession()}${WhatYouGet()}${MentorSection()}${HostGuests()}${Gallery()}${Testimonials()}${Pricing()}${Faq()}${CtaBanner()}</main>${Footer()}${EnrollModal()}`; }