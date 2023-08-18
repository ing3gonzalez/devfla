const pokemonContainer = document.getElementById("pokemonContainer");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

let pokemons = [];

// Fetch Pokemon data from JSON file
fetch("pokemons.json")
    .then(response => response.json())
    .then(data => {
        pokemons = data;
        displayPokemons(pokemons);
    });

// Display list of Pokemon cards
function displayPokemons(pokemonList) {
    pokemonContainer.innerHTML = "";
    pokemonList.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src="${pokemon.ThumbnailImage}" alt="" srcset=""><h3>${pokemon.name}</h3><p>Type: ${pokemon.type}</p>`;
        card.addEventListener("click", () => openModal(pokemon));
        pokemonContainer.appendChild(card);
    });
}

// Open modal with Pokemon details
function openModal(pokemon) {
    modalContent.innerHTML = `
        <h2>${pokemon.name}</h2>
        <p>Type: ${pokemon.type}</p>
        <p>Weight: ${pokemon.weight} kg</p>
        <h3>Moves:</h3>
        <ul>${pokemon.abilities.map(move => `<li>${move}</li>`).join("")}</ul>
    `;
    modal.style.display = "block";
}

// Close modal
modal.addEventListener("click", () => modal.style.display = "none");

// Search functionality
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
    displayPokemons(filteredPokemons);
});
