const species = [
  { name: "Lion", image: "images/lion.jpg" },
  { name: "Tigre", image: "images/lion.jpg" },
  { name: "Aigle", image: "images/lion.jpg" },
  { name: "Girafe", image: "images/girafe.jpg" }
];

const items = document.querySelectorAll(".species-item");
const nameDisplay = document.querySelector(".active-species-name");
const background = document.getElementById("background");

let activeIndex = 0;

// Fonction pour changer d’espèce
function setActive(index) {
  items[activeIndex].classList.remove("active");
  activeIndex = index;
  items[activeIndex].classList.add("active");

  // Change le texte et l’image de fond
  nameDisplay.textContent = species[activeIndex].name;
  background.style.backgroundImage = `url('${species[activeIndex].image}')`;
}

// Clic manuel
items.forEach((item, index) => {
  item.addEventListener("click", () => setActive(index));
});

// Défilement automatique
setInterval(() => {
  setActive((activeIndex + 1) % items.length);
}, 10000);

// Image de départ
background.style.backgroundImage = `url('${species[0].image}')`;
