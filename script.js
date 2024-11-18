import { fruitsArray } from "./fruitsArray.js";

window.renderArchive = () => {
  const archive = document.querySelector(".archive");
  archive.innerHTML = fruitsArray
    .map(
      (fruit) => `
      <div 
        class="fruit-card"
        onclick="renderSingleFruit(${fruit.id})"
        data-color="${fruit.color}"
        style="background-color: white;"
      >
        <img src="https://via.placeholder.com/200x150?text=Fruit" alt="${fruit.name}" class="fruit-image" />
        <h2 class="fruit-name" style="color: ${fruit.color}">${fruit.name}</h2>
      </div>
      `
    )
    .join("");

  const fruitCards = document.querySelectorAll('.fruit-card');
  fruitCards.forEach(card => {
    const color = card.getAttribute('data-color');
    const fruitName = card.querySelector('.fruit-name');
    
    card.addEventListener('mouseenter', () => {
      card.style.backgroundColor = color;
      fruitName.style.color = 'white'; 
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.backgroundColor = 'white';
      fruitName.style.color = color; 
    });
  });
};

window.renderSingleFruit = (id) => {
  const fruit = fruitsArray.find((fruit) => fruit.id === id);
  const archive = document.querySelector(".archive");
  archive.innerHTML = `
  <div class="single-fruit-card">
    <h2 class="fruit-name">${fruit.name}</h2>
      <div class="single-card-content">
        <img src="https://via.placeholder.com/200x150?text=Fruit" alt="${fruit.name}" class="single-fruit-image" />
        <div class="info-container">
        <p class="info">${fruit.info}</p>
        </div>
      </div>
    <button onclick="renderArchive()" class="return-btn">Back to archive</button>
  </div>
  `;
};

renderArchive();
