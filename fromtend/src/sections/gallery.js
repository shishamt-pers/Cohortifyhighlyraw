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
export function Gallery() {
  const captions = [
    "Session 01 — first networking round",
    "Mentor explaining stream choices",
    "Parents Q&A corner",
    "Cross-school friendship break",
    "Interactive quiz round",
    "Session 03 group photo",
  ];

  return `
    <section id="gallery" class="section">
      <div class="container">
        ${heading(
          "Previous sessions",
          "Pichhle sessions ki jhalak",
          "Kuch moments jo Cohortify sessions ko yaad rakhne layak banate hain — networking, laughter aur serious baatein, sab ek saath."
        )}

        <div class="gallery">
          ${images.gallery
            .map(
              (image, index) => `
                <button
                  class="gallery-card image-card ${index === 0 ? "big" : ""}"
                  data-gallery-index="${index}"
                  data-image="${image}"
                  data-fallback="${images.fallbackGallery[index]}"
                  style="background-image:linear-gradient(0deg,#1c1512c7,#1c151200 70%),url('${image}')"
                >
                  <span>${captions[index]}</span>
                  <i class="ri-zoom-in-line"></i>
                </button>
              `
            )
            .join("")}
        </div>
      </div>

      <div class="lightbox" data-lightbox>
        <button data-lightbox-close class="icon-btn"><i class="ri-close-line"></i></button>
        <img data-lightbox-image alt="Cohortify session gallery" />

        <div>
          <button data-gallery-prev class="icon-btn"><i class="ri-arrow-left-line"></i></button>
          <button data-gallery-next class="icon-btn"><i class="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </section>
  `;
}

