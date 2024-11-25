const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

function showCharacterDetails(characterId) {
  const characterDetails = {
    character1: {
      name: "Naruto Uzumaki ",
      img: "assets/images/character1.png",
      description: "Rasengan: Uma esfera de energia concentrada, capaz de causar grandes danos."

    },
    character2: {
      name: "Sasuke Uchiha",
      img: "assets/images/character2.webp",
      description: "Sharingan: Permite copiar técnicas e prever movimentos do oponente.",
    },
    character3: {
      name: ">Sakura Uchiha",
      img: "assets/images/character3.webp",
      description: "Habilidades de cura: Pode curar ferimentos rapidamente, ajudando aliados em combate.",
    },
  };

  const character = characterDetails[characterId];
  modalBody.innerHTML = `
    <h2>${character.name}</h2>
    <img src="${character.img}" alt="${character.name}" style="width: 100%; border-radius: 10px;">
    <p>${character.description}</p>
  `;

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => section.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
}

function openTrailer(trailerUrl) {
  window.open(trailerUrl, "_blank");
}

// Alternar Tema
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Validação do Formulário de Contato
const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.classList.remove("hidden");
  setTimeout(() => successMessage.classList.add("hidden"), 3000);
});
