const navToggle = document.querySelector(".navbar__toggle");
const navLinks = document.querySelector(".navbar__links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("navbar__links_visible");
});