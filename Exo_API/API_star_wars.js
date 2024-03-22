// document.addEventListener("DOMContentLoaded", function () {
//     fetch("https://swapi.dev/api/films/")
    
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.results)
//     })
//     .catch((error) => console.error("Erreur lors de la récupération des films:",error))

// })

const afficherDetails = (filmId) => {

    fetch(`https://swapi.dev/api/films/${filmId}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        document.getElementById("titre").textContent = data.title
        document.getElementById("episode").textContent = `Episode ${data.episode_id}`
        document.getElementById("directeur").textContent = `Réalisateur : ${data.director}`
        document.getElementById("producteur").textContent = `Producteur : ${data.producer}`
        document.getElementById("date").textContent = `Date de sortie : ${data.release_date}`
        document.getElementById("resume").textContent = data.opening_crawl

        let personnage = []

        for (let i = 0; i < data.characters.length; i++) {
            fetch(data.characters[i])
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                personnage.push(data.name)
                console.log(personnage)
                document.getElementById("personnages").textContent = `Liste des personnages : ${personnage}`
            })
            .catch((error) => console.error("Erreur lors de la récupération des personnages:",error))
        }

    })
    
    .catch((error) => console.error("Erreur lors de la récupération des détails du film:",error))
}