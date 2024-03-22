// Fonction qui permet de retoruner les informations d'un pokemon en fonction de son nom.
function chercherPokemon() {

    // Récupération du nom du Pokémon et mise en place de l'URL pour la requête à l'API.
    var nomPokemon = document.getElementById("pokemonNameInput").value.toLowerCase();
    var url = "https://pokeapi.co/api/v2/pokemon/" + nomPokemon;

    // Requête des informations du pokémons à l'API.
    fetch(url)

        //Récupération des données, passage au format JSON et affichage des informations du Pokémon.
        .then(response => response.json())
        .then(data => {
            document.getElementById("pokemonName").textContent = data.name;
            document.getElementById("pokemonImage").src = data.sprites.front_default;
            document.getElementById("pokemonType").textContent = data.types[0].type.name;
            document.getElementById("pokemonWeight").textContent = data.weight + " hg";
            document.getElementById("pokemonHeight").textContent = data.height + " dm";
            document.getElementById("pokemonInformation").style.display = "block";
        })

        // Si le pokémon n'est pas trouvé, on affiche un message d'erreur.
        .catch(error => {
            console.error('Une erreur s\'est produite:', error);
            alert("Le Pokémon n'a pas été trouvé. Veuillez vérifier le nom.");
        });
}

// Fonction qui permet de retourner les informations de tous les pokémons.
function getAllPokemon() {

    // Requête des informations de tous les pokémons à l'API.
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1025')

        //Récupération des données, passage au format JSON et ajout des cartes de tous les pokémons.
        .then(response => response.json())
        .then(data => {
            displayAllPokemon(data.results);
        })

        // Si une erreur se produit, on l'affiche dans la console.
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });
 }

// Fonction qui permet d'afficher les cartes de tous les pokémons.
function displayAllPokemon(pokemonList) {

            // Récupaération de la division où l'on affichera les cartes des pokémons.
            const pokemonContainer = document.getElementById('pokemonListe');

            // Parcours de la liste de pokémons et création des cartes pour chacun d'entre eux.
            pokemonList.forEach((pokemon, index) => {

                // index + 1 car l'API commence à compter à partir de 1 alors que les indexs des tableaux commencent à 0.
                createPokemonCard(pokemon, index + 1, pokemonContainer);
            });
}

// Fonction qui permet de créer une carte (HTML) pour un pokémon.
function createPokemonCard(pokemon, index, container) {

            // Création de la carte du pokémon qui sera une division en HTML.
            const pokemonCard = document.createElement('div');

            // Permet de déterminer la classe de la carte du pokémon pour la mise en forme (CSS).
            pokemonCard.classList.add('pokemon-card');

            //Si on clique sur la carte on affiche les informations du pokémon.
            pokemonCard.addEventListener('click', () => {
                document.getElementById("pokemonInformation").style.display = "none";
                afficherBoutonRetour();
                getPokemonInfo(index);
            });

            // Création du nom du pokémon sous forme d'un titre en majuscules (toUpperCase()).
            const pokemonName = document.createElement('h2');
            pokemonName.textContent = pokemon.name.toUpperCase();

            // Création d'un élément image
            const pokemonImage = document.createElement('img');

            // Permet de déterminer la classe de l'image du pokémon pour la mise en forme (CSS).
            pokemonImage.classList.add('pokemon-image');

            //URL de l'image du pokémon.
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;

            // Attribution de l'URL de l'image du pokémon et de son nom.
            pokemonImage.src = imageUrl;
            pokemonImage.alt = pokemon.name;

            // Ajout des informations du pokémon à la carte du pokémon.
            pokemonCard.appendChild(pokemonName);
            pokemonCard.appendChild(pokemonImage);

            // Ajout de la carte du pokémon à la division où l'on affiche les cartes des pokémons.
            container.appendChild(pokemonCard);
}

// Fonction qui permet de retourner les informations d'un pokémon.
function getPokemonInfo(pokemonId) {

    // URL pour la requête à l'API.
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    // Requête des informations du pokémon à l'API.
    fetch(url)

        //Si la requête n'est pas valide, on affiche un message d'erreur dans la console.
        .then(response => {
            if (!response.ok) {
                console.error('Erreur lors de la récupération des données du Pokémon :', error);
            }
            return response.json();
        })

        //Récupération des données, passage au format JSON et affichage des informations du Pokémon.
        .then(pokemonData => {

            // Récupaération de la division où l'on affichera les informations du pokémon.
            const pokemonContainer = document.getElementById('pokemonListe');

            // Requête des informations du pokémon à l'API.
            fetch(pokemonData.species.url)

                // Passage au format JSON.
                .then(response => response.json())

                //Affichage des informations du pokémon.
                .then(Data => {

                    // Récupération des types du pokémon.
                    const types = pokemonData.types.map(typeEntry => typeEntry.type.name);

                    // Affichage des informations du pokémon.
                    pokemonContainer.innerHTML = `
                        <h2>${pokemonData.name}</h2>
                        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                        <p><strong>ID:</strong> ${pokemonData.id}</p>
                        <p><strong>Types:</strong> ${types.join(", ")}</p>
                        <p><strong>Taille:</strong> ${pokemonData.height} dm</p>
                        <p><strong>Poids:</strong> ${pokemonData.weight} hg</p>
                    `;
                }
            )
            // Si une erreur se produit, on l'affiche dans la console.
            .catch(error => {
                console.error('Erreur lors de la récupération des données du Pokémon :', error);
            });
        }
    )
}

// Fonction qui permet d'afficher le bouton de retour.
function afficherBoutonRetour() {
    var boutonRetour = document.getElementById("backButton");
    boutonRetour.style.display = "block";
}

// Fonction qui permet le retour à la liste des pokémons.
function retour() {
    document.getElementById("pokemonInformation").style.display = "none";
    document.getElementById("backButton").style.display = "none";
    document.getElementById("pokemonListe").innerHTML = "<h1>Liste des Pokémons</h1>";
    getAllPokemon();
    document.getElementById("pokemonListe").style.display = "block";
}

// Appel de la fonction pour afficher les informations de tous les pokémons.
getAllPokemon();