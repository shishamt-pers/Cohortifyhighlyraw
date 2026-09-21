export function enrollButton(label = "Enroll for the upcoming session", extra = "") {
  return `<button class="button ${extra}" data-enroll>${label} <i class="ri-arrow-right-line"></i></button>`;
}