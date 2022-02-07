console.log("JS loaded");

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then(buildPokedex)
  .catch(console.log);

// function buildPokedex(pokeDex) {
//   pokeDex.results.forEach((pokemon) => {
//     const newH1 = document.createElement("h1");
//     newH1.innerText = pokemon.name;

//     const newLink = document.createElement("a");
//     newLink.innerText = "Link to Pokémon";
//     newLink.href = pokemon.url;

//     document.body.appendChild(newH1);
//     document.body.appendChild(newLink);
//   });
// }

function buildPokedex(pokeDex) {
  pokeDex.results.forEach((pokemon) => {
    const newH1 = document.createElement("h1");
    newH1.innerText = pokemon.name;

    const newLink = document.createElement("a");
    newLink.innerText = "Link to Pokémon";
    newLink.href = pokemon.url;

    const newImg = document.createElement("img");
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((onePokemon) => {
        newImg.src = onePokemon.sprites.front_shiny;
        document.body.appendChild(newH1);
        document.body.appendChild(newImg);
        document.body.appendChild(newLink);
      });
  });
}
