# Projet Final : Pokedex API
## Création de la page Web (Partie HTML) :

Question 1 : Comment structurer une page HTML pour afficher une liste de Pokémon et un formulaire de recherche ?

Réponse : 
- Créer et définir les paramètres de la pages,
- Créer une division qui contiendra la liste des pokémons,
- Créer un formulaire de recherche avec un input et un bouton,
- Créer une division qui contiendra les résultats de la recherche.

### Création de l'en tête de la page Web : 
```sh
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    #Titre de la page Web
    <title>Pokedex</title>

    #Lien au fichier pokedex.css qui permet la mise en forme de la page
    <link rel="stylesheet" href="pokedex.css">
</head>
```

### Première section : Division pour afficher la liste des Pokémon :

Création d'un header avec le nom "Pokedex" :
```sh
<header>Pokedex</header>
```

Création d'une division (son id est pokemon_container) qui contiendra plus tard la liste de tous les pokémons :
```sh
<div id="pokemon_container" class="center"><h1>Liste de tous les Pokémons</h1></div>
```

### Deuxième section : Formulaire de recherche : 
#### Création du formulaire de recherche et de la zone d'affichage du résultat :

Création de la zone où l'on va rentrer le nom du pokémon que l'on veut :
```sh
<div class="input-container">
    #L'id de cet input est PokemonName
    <input type="text" id="pokemonName" placeholder="Entrez le nom d'un Pokémon">
```
Création du bouton qui lorsqu'il va être appyé déclenchera la recherche :
```sh
    #L'event Onclick permet de déclencher la fonction chercherPokemon
    <button id="submitBtn" onclick="chercherPokemon()">Afficher le Pokémon</button>
</div>
```

Création de la divison pour afficher les résultats de la recherche :
```sh

#Le style "display:none" permet de ne pas afficher cette division, 
#lorsqu'il y aura eu une recherche, display deviendra True,
#et on affichera alors la division avec la réponse.
<div id="pokemonDisplay" style="display: none;">
    <div class="pokemon-card">

        #Le nom du pokémon sera placé dans cette balise Titre
        <h2 class="pokemon-name" id="pokemonName"></h2>

        #L'image du pokémon sera placé dans cette balise Image
        <img class="pokemon-image" id="pokemonImage" alt="Image du Pokémon">

        #Les informations du pokémon seront placées et réparties dans trois balises textes différentes
        <p class="pokemon-info">Type: <span id="pokemonType"></span></p>
        <p class="pokemon-info">Poids: <span id="pokemonWeight"></span></p>
        <p class="pokemon-info">Taille: <span id="pokemonHeight"></span></p>
    </div>
</div>
```

## Affichage de plusieurs Pokémon issus d'une liste :

Question 2 : Comment récupérer et afficher une liste initiale de Pokémon avec l'API PokeAPI ?

Réponse :
- Obtenir la liste complète des pokémons et l'afficher,
- Passer les données au format .JSON
- Afficher les informations en fonction du nom du pokémon grâce aux URLs fournit par l'API

### Obtention et affichage de la liste :

Pour obtenir la liste de tous les pokémons, on utilise l'url :

```sh
https://pokeapi.co/api/v2/pokemon/
#Cette URL nous retourne une liste d'objets qui contient tous les pokémons 

#On peut aussi préciser le nombre de pokémons 
#maximum que l'on veut en ajoutant "?limit=nb_max".

https://pokeapi.co/api/v2/pokemon?limit=150
#retourne un liste d'objets contenant 150 pokémons.
```

Pour l'afficher dans la console, il suffit d'écrire :

```sh
url = https://pokeapi.co/api/v2/pokemon/
console.log(url)
#retourne la liste de tous les pokémons.
```

### Affichage des informations et des images en fonction du nom grâce aux URLs :

Tout d'abord, il faut passer cette liste au format JSON. 
Pour cela, il suffit d'écrire la commande :

```sh
#Liste contient obligatoirement une liste d'objets.
liste = liste.json
```

Ensuite, pour afficher le nom ou l'image, il faut utiliser les URL suivantes :

```sh
#Pour afficher la liste d'informations du pokémon en fonction de son nom.
https://pokeapi.co/api/v2/pokemon/nom_pokémon

#Pour afficher l'image du pokémon en fonction de son ID
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png
```

## Présentation de l'API PokeAPI :

Question 3 : Comment explorer l'API PokeAPI pour trouver les informations nécessaires ?

Réponse :
- Comprendre la structuration de l'API
- Chercher les URLs correspondant aux informations nécessaires.

### Structuration de l'API :

L'url de base de l'API est : 

```
https://pokeapi.co/api/v2/
```

Ensuite nous pouvons rajouter des paramètres dans cette URL pour avoir plus de précisions et/ou voir d'autres choses sur les pokémons.
Par exemple : 

```sh
#Grâce à cette URL, on récupère la vitesse de croissance du 
#pokémon en fonction de son id ou de son nom.
https://pokeapi.co/api/v2/growth-rate/${id_or_name}/
```

### Trouver les URLs qui nous permettront de récupérer les informations dont nous auront besoin.

Pour chercher le pokémon en fonction de son nom, nous allons utiliser la ligne de code suivante :

```sh
"https://pokeapi.co/api/v2/pokemon/" + nomPokemon
```
Ceci nous permettra de rechercher les informations du pokémon en fonction de son nom.

Pour avoir les détails de tout les pokémons, on utilisera l'URL suivante :
```sh
#Il y a 1025 pokémons si on ne compte pas les fusions ou différentes formes des pokémons. Nous mettons donc la limite à 1025.
https://pokeapi.co/api/v2/pokemon?limit=1025
```

Pour avoir les images des pokémons en fonction de leur ID : 
```sh
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ID}.png`
```

Pour avoir les pokémons en fonction de leur ID : 
```sh
https://pokeapi.co/api/v2/pokemon/${pokemonId}
```

## Recherche d'un pokémon grâce au formulaire :

Question 4 : Comment implémenter une fonctionnalité de recherche pour trouver des Pokémon par leur nom ?

Réponse :
- Créer un bouton et un événement qui réagit lorsque ce bouton est cliqué.
- Obtenir des détails spécifiques sur un pokémon.
- Afficher les données sur la page HTML.

### Bouton et événements :

Nous allons maintenant créer un évenement sur le bouton de la recherche pour savoir lorsqu'il est cliqué.
Pour cela, il existe un paramètre qui exécute ce que l'on veut lorsque le bouton est cliqué : c'est le paramètre "onclick"

```sh
#Commencons par créer un bouton qui n'exécute rien lorsque l'on clique dessus.
<button class="submitButton" id="submitButton">Afficher le Pokémon</button>

#Rajoutons maintenant le paramètre onclick.
<button class="submitButton" id="submitButton" onclick="chercherPokemon()">Afficher le Pokémon</button>
#Maintenant, quand le bouton sera cliqué, la page exécutera la fonction chercherPokemon que l'on définira plus tard dans le script JavaScript

```

### Obtention des détails d'un pokémon spécifique :

Commencons par intercepter les informations dans le formulaire (nom du pokémon) :

```sh
var nomPokemon = document.getElementById("pokemonNameInput").value.toLowerCase();
```
La ligne précédente nous permet de récuperer le nom du pokémon qui a été entré dans le imput.
La fonction "tolowerCase" nous permet de mettre le nom du pokémon en minuscule pour qu'il n'y ait pas de problème lié à la casse.


Pour récuperer les données d'un pokémon, il faudra alors simplement écrire le code suivant :

```sh
"https://pokeapi.co/api/v2/pokemon/" + nomPokemon
```

### Affichage des données sur la page HTML:
Pour cela, nous allons devoir créer une promesse.
Nous verrons plus tard ce qu'est une promesse, mais pour faire simple, une promesse est une demande pour aller chercher des données. 
On dit qu'une requete est résolue si elle ne renvoie pas de message d'erreur et qu'elle a pu trouver les données que nous demandions. Et si la requete est résolue alors le programme va exécuter un bloc de code.

```sh

#Création de la promesse
fetch(url)

    #Si la requete est résolue, on récupére nos données et les transforme au format JSON.
    .then(response => response.json())

    #Puis on injecte les données du pokémon dans les différentes balises que nous avions créer tout à l'heure dans notre HTML
    .then(data => {

        #Ajoute le nom dans la balise qui à l'ID "pokemonName"
        document.getElementById("pokemonName").textContent = data.name;

        #Ajoute l'image dans la balise qui à l'ID "pokemonImage"
        document.getElementById("pokemonImage").src = data.sprites.front_default;

        #Ajoute le type dans la balise qui à l'ID "pokemonType"
        document.getElementById("pokemonType").textContent = data.types[0].type.name;

        #Ajoute le poids dans la balise qui à l'ID "pokemonWeight"
        document.getElementById("pokemonWeight").textContent = data.weight + " hg";

        #Ajoute la hateur dans la balise qui à l'ID "pokemonHeight"
        document.getElementById("pokemonHeight").textContent = data.height + " dm";

        #Permet d'afficher la division qui contient toutes les informations sur la pokémon
        document.getElementById("pokemonDisplay").style.display = "block";
        }
    );
```
Nous reviendrons plus tard sur la gestion de tableaux et d'objets en JavaScript.

## Gestion d'erreur :

Question 5 : Comment gérer les erreurs, comme une recherche qui ne retourne aucun résultat ?

Réponse :
- Utiliser la fonction catch,
- Utilise la valeur de response.ok.

### Fonction catch :

La fonction catch est utilisée avec les promesses. En effet, si la fonction catch permet d'exécuter un certain bloc de code si la promesse n'est pas résolue.

Définissons donc une promesse et regardons comment marche la fonction catch.

```sh
fetch(url)
.then(...) #Nous reviendrons plus tard sur la fonction .then

#Quand on rencontre une erreur quelconque lors de la récupération des données, on rentre dans le .catch
.catch(error => {

    #On affiche un message d'erreur dans la console.
    #La variable error contient le type et les détails sur l'erreur.
    console.error ('Erreur lors de la récupération des données du Pokémon :', error)
})
```

### Valeur response.ok :

On peut aussi utiliser la valeur de response.ok pour savoir si l'on a une erreur.
Si response.ok est True alors on a bien eu une réponse et nous n'avons pas besoin de retourner une erreur.

Regardons un exemple que l'on utilisera dans notre code: 

```sh
#Promesses
fetch(url)

    #Nous reviendrons plus tard sur la fonction .then
    .then(response => {

        #Si la réponse n'est pas True, on retourne une erreur.
        #!response.ok <==> reponse.ok === False.
        if (!response.ok) {
            console.error('Erreur lors de la récupération des données du Pokémon :', error);
            }

        #Si on a une réponse alors on la retourne.
        return response.json();

```

## Traitement des tableaux de données :

Question 6 : Comment manipuler les objets et tableaux retournés par l'API pour afficher les informations des
Pokémon ? 

Réponse : 
- Utiliser des fonctions telles que foreach ou .map,
- Accéder valeurs des tableaux et objets.

### Fonction .map et forEach :

#### Fonction .map

Commencons par la fonction .map. Cette fonction nous permet d'exécuter une fonction pour chaque élément dans le tableau.

Prenons l'exemple que nous utiliserons dans notre code :

```sh
const types = pokemonData.types.map(typeEntry => typeEntry.type.name);
```

Dans cet exemple, on définit une constante types qui contiendra un tableau.
Ici, pour chaque valeur dans le tableau pokemonData.types, on va exécuter ce qu'il y a à l'intérieur de la fonction .map. 

La fonction .map retourne un autre tableau.
Pour chaque élément on va donc aller chercher son type.name et on va l'ajouter dans un autre tableau.

#### ForEach

La méthode forEach permet de parcourir un tableau et d'exécuter du code à chaque élément du tableau.

Dans notre code, on retrouve la fonction forEach pour parcourir la liste de tout les pokémons et les afficher.

```sh
#Fonction pour afficher la liste de tout les pokémon.
function displayAllPokemon(pokemonList) {

            #On récupére la zone où l'on va afficher la liste de tous les pokémons.
            const pokemonContainer = document.getElementById('pokemon_container');

            #Pour chaque élément dans pokemonList (qui est la liste contenant tous les pokémons), on lui crée une carte.
            pokemonList.forEach((pokemon, index) => {
                createPokemonCard(pokemon, index + 1, pokemonContainer);
            });
```

### Récupérer les valeurs des tableaux et objets :

#### Tableaux :

Les tableaux fonctionnent sous forme index/valeur, c'est à dire que l'on récupère une valeur dans un tableau grâce à son index.

Il faut savoir que les indexs d'un tableau commence à 0.
On peut aussi utiliser des incréments négatifs qui partiront de la fin.

Exemple :

```sh

tab = ["Poison", 1, "P", var]
tab[0] = "Poison"
tab[3] = var
tab[-1] = var
```

#### Objets

Contrairement aux tableaux, les objets fontcionnent sous la fomre clé/valeur.
Il faut imaginer que la clé est lié à sa valeur
Pour récupérer une valeur, il faudra forcément passer par sa clé.

Prenons un exemple dans notre code :

```sh
#Promesse
fetch(url)

    #On récupère la réponse et la passe au format JSON
    .then(response => response.json())

    .then(data => {
    #data est un objet qui est la réponse au format JSON.
    #data est sous la forme : {name: nom_pokemon, weight: 50, height: 200}
    
    #Pour aller chercher des informations dans un objet.
        echo data.name; #Va afficher la valeur de la clé name (nom_pokemon)
        echo data.weight; #Va afficher la valeur de la clé weight (50)
        echo data.height; #Va afficher la valeur de la clé height (200)
    })
}
```

## Utilisation de fetch et promesses

Question 7 : Comment utiliser fetch pour faire des requêtes asynchrones et traiter les données retournées ?

Réponse : 
-Utilisation de .then()

### Utilisation de .then()

La fonction .then() nous permet d'exécuter un bloc de code si la promesse a été résolue.

Reprenons un exemple de notre code : 

```sh
#Promesses
fetch(url)

    #Si la promesse est résolue alors on exécute le code suivant.
    .then(response => {

        #Si réponse.ok n'est pas True, on retourne une erreur.
        #!response.ok <==> reponse.ok === False.
        if (!response.ok) {
            console.error('Erreur lors de la récupération des données du Pokémon :', error);
            }

        #Si on a une réponse alors on la retourne.
        return response.json();

```

Plusieurs .then peuvent être enchainés :

```sh

fetch(url)

    #D'abord on transoforme la réponse au format JSON
    .then(response => response.json())

    #Puis on ajoute les informations du pokémon
    .then(data => {
        document.getElementById("pokemonName").textContent = data.name;
        document.getElementById("pokemonImage").src = data.sprites.front_default;
        document.getElementById("pokemonType").textContent = data.types[0].type.name;
        document.getElementById("pokemonWeight").textContent = data.weight + " hg";
        document.getElementById("pokemonHeight").textContent = data.height + " dm";
        document.getElementById("pokemonDisplay").style.display = "block";
        })
}
```

## Usage du format JSON

Question 8 : Comment travailler avec le format JSON pour extraire les données retournées par l'API ?

Réponse : 
- Utilisation de la fonction .json,
- Structure et utilisation du JSON grâce aux objets.

### Utilisation de la fonction .json

Pour passer le résultat de la requête dans un language que l'on peut exploiter, on utilise la fonction .json() qui convertit des données au format .json()

Exemple : 

```sh
fetch(url)
    .then(response => response.json())
```

### Structure et utilisation du format JSON

Le format JSON est un format d'objets. Pour comprenddre comment l'utiliser il suffit de comprendre comment marche les objets. 

Il faut donc se référrer à la partie de récupération des données d'un objets. (##Traitements des tableaux de données/###Récupération/Utilisation des données/####Objets).