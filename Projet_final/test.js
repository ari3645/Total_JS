function chercherPokemon() {
    console.log("https://pokeapi.co/api/v2/pokemon-species/aegislash")
    var nomPokemon = document.getElementById("pokemonNameInput").value.toLowerCase();
    var apiUrl = "https://pokeapi.co/api/v2/pokemon/" + nomPokemon;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("pokemonName").textContent = data.name;
            document.getElementById("pokemonImage").src = data.sprites.front_default;
            document.getElementById("pokemonType").textContent = data.types[0].type.name;
            document.getElementById("pokemonWeight").textContent = data.weight;
            document.getElementById("pokemonHeight").textContent = data.height;
            document.getElementById("pokemonDisplay").style.display = "block";
        })
        .catch(error => {
            console.error('Une erreur s\'est produite:', error);
            alert("Le Pokémon n'a pas été trouvé. Veuillez vérifier le nom.");
        });
}

