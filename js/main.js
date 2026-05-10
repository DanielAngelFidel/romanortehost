const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    burger?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

document.querySelectorAll("[data-current]").forEach((link) => {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (link.getAttribute("href") === path) link.classList.add("active");
});

document.querySelectorAll("[data-faq]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".card");
    item?.classList.toggle("open");
  });
});

const form = document.getElementById("estimateForm");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  form.style.display = "none";
  document.getElementById("successMsg").style.display = "block";
});
