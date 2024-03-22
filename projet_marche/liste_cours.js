let basket = []
prixTotal = 0
let ElementRetire = document.getElementById("ElementRetire")

function ajouterItem (basket, item, prixTotal, action) {

    let price = {"Pomme" : 0.5, "Banane" : 1.5, "Orange" : 0.75, "Papaye" : 2, "Kiwi" : 0.5, "Courgette" : 1.5, "Potiron" : 1.5, "Salade" : 1.5, "Tomate" : 1, "PommeDeTerre" : 2.0, "Paprika" : 3.0, "Piment" : 1.5, "Gingembre" : 3.5, "Oignon" : 2.5, "Basilic" : 1.0 }
    let table = document.getElementById("tableau")

    if (action === "ajouter") {

        // console.log(basket)
        // console.log(item)
        // console.log(table)
        // console.log(price[item])

        if (item in basket) {
            basket[item] += 1
            let row = table.rows.namedItem(item)

            row.cells[1].innerText = basket[item]
            row.cells[3].innerText = basket[item] * price[item] + " €"


        }else{
            // console.log(item)
            basket.push(item)
            basket[item] = 1

            let row = table.insertRow(1)
            // console.log(row)
            row.id = item
            let nom = row.insertCell(0)
            let quantite = row.insertCell(1)
            row.insertCell(2)
            row.insertCell(3)

            nom.innerText = item
            quantite.innerText = basket[item]

            // console.log(prix)
            // console.log(basket[item])
            // console.log(price[item])
            // console.log(basket[item] * price[item])

            row.cells[2].innerText = price[item] + " €"
            row.cells[3].innerText = basket[item] * price[item] + " €"  
        }

        prixTotal += price[item]
        document.getElementById("prixTotal").textContent = "Le prix total est de : " + prixTotal + " €";
        // console.log(basket)

    } else if (action === "retirer") {
        while (table.rows.length > 1){
            table.deleteRow(1);
        }
        basket.length = 0
        prixTotal = 0
        // console.log(prixTotal)
        document.getElementById("prixTotal").textContent = "Le prix total est de : " + prixTotal + " €";

        const props = Object.keys(basket)
        for (const prop of props) {
            delete basket[prop]
        }
    
        // console.log(basket, prixTotal)
        // console.log(basket.length)
    }
    return prixTotal
}