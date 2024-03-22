# Cours dev web : JS, web api fetch et json

## Début JS

 - Diés = balise titre. (Nombre de diés = taille du titre.)

 - Balise u permet de souligner.

 - Balise i permet de mettre en italique.

 Markdown = documentation d'un code.

 Github = Site web qui offre des services.

## Role JavaScript 
 Permet de rendre les pages dynamiques. 

 Permet de coder/travailler dans des environnements différents.

## Commande JS

Séléctionner des éléments par ID :

```sh
let element = document.getElementById("monID")
```
Séléctionner des éléments par classe :

```sh
let element = document.getElementByClassName("maClasse")
```

Séléctionner des éléments par balise :

```sh
let element = document.getElementByTagName("maBalise")
```

Changer le texte :

```sh
document.getElementById("monId").textContent = "Nouveau texte !";
```

Ajouter un écouteur d'évenements :
(Au moment ou cet évenement à lieu, on excécute une fonction)

```sh
document.getElementById("monBouton").addEventListener("click",function(){alert("Bouton cliqué !");
});
```
Callback = fonction passer en paramètre dans une autre fonction.

 On veut éviter le rechargement de la page.
 Pour éviter ce comportement par défaut du formulaire, on peut utiliser la commande :

 ```sh
 event.preventDefault();
 ```

## Tableaux en JS

Déclaration de variable

```sh
let tab = ["pomme","cerise",...]
```

### Méthodes des tableaux

Ajouter un élément à la fin :

```sh
tab.push(var) #retourne la taille du tableau après avoir ajouté la variable
```

Enlever un élément dans un tableau :

```sh
tab.pop(index) #retourne l'élement enlevé
```

Crée un nouveau tableau avec les élément de tab

```sh
tab.slice() #retourne le tableau tab
```

## API Fetch et Java asynchrone

Mettre un temps d'attente dans un code :

```sh
setTimeout (() => {...code...}, 1000)
```

Pas de commentaire en JSON.

Pour convertir un objet JS en chaine JSON :

```sh
JSON.stringify(objet)
```

Pour convertir une chaine JSON en objet Javascript :

```sh
JSON.parse(chaine)
```

### Promesse

Une promesse peut etre dans 3 états :
 - pending : Etat initial
 - fulfilled : L'opération à été complétée
 - rejected : L'opération à échouée

Création d'une promesse :

```sh
let promesse = new Promise((resolve,reject) => {
    let condition = true
    if (condition) {
        setTimeout(() => resolve("Opération réussie"), 1000);
    } else {
        reject("Opération échouée")
    }
})
```

Fonction qui excecute seulement s'il y a un réponse (resolve et/ou reject) :

```sh
promesse.then()
```
Fonction qui excecute seulement si la requete est rejetée:

```sh
promesse.catch()
```

Fonction qui 

# Git 

Initialisé Git : 

```sh
Git init
```

Supprimer Git : supprimer le fichier .git

Savoir le statut de Git : 

```sh
git status
```

Commit = sauvegarde

Permet à Git de détecter les modifications de tout les fichiers du documents main : 

```sh
git add .
```

Faire une sauvegarde (en donnant un message) : 

```sh
git commit -m "first commit"
```

## Connexion Github

Générer un token via Github --> Settings --> Developer Settings --> Personal access token --> Generate new token

Créer et lier le répertoire :

```sh
git remote add origin url
```

Sauvegarder : 

```sh
git push -u origin master
```

# Remarques

Balise script après le code html pour plus de performance.(Si fichier Js volumineux car code excécuter dans l'ordre)

Les fichiers commencant par un point sont des fichiers cachés

Lecture intéressante : Pro git by Scott Chacon