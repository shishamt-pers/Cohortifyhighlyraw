export function setupTheme() {
  const saved = localStorage.getItem("cohortify-theme");

  if (saved === "dark") {
    document.documentElement.classList.add("dark");
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme]");

    if (!button) {
      return;
    }

    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "cohortify-theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );

    button.innerHTML = `<i class="ri-${document.documentElement.classList.contains("dark") ? "sun" : "moon"}-line"></i>`;
  });
}