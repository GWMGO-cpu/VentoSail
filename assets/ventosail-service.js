const mobileToggle = document.getElementById("mobileToggle");
const mobilePanel = document.getElementById("mobilePanel");

if (mobileToggle && mobilePanel) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = mobilePanel.classList.toggle("open");
    mobileToggle.setAttribute("aria-expanded", String(isOpen));
    mobileToggle.querySelector(".material-symbols-outlined").textContent = isOpen ? "close" : "menu";
  });

  mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobilePanel.classList.remove("open");
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileToggle.querySelector(".material-symbols-outlined").textContent = "menu";
    });
  });
}

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});
