const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = selectedFilter === "all" || selectedFilter === category;
      card.classList.toggle("hide", !shouldShow);
    });
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get("name");
  const email = data.get("email");
  const service = data.get("service");
  const message = data.get("message");

  const whatsappNumber = "50700000000"; // Reemplazar por el número real.
  const text = `Hola, soy ${name}. Mi correo es ${email}. Estoy interesado en: ${service}. Mensaje: ${message}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  formNote.textContent = "Abriendo WhatsApp para enviar la solicitud...";
  window.open(whatsappUrl, "_blank");
  contactForm.reset();
});
