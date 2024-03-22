function multiplication(a,b){
    return a*b;
}

function addition(a,b){
    return a+b;
}

function soustraction(a,b){
    return a-b;
}

function division(a,b){
    if (b === 0) {
        return "Impossible de diviser par 0";
    } else {
        return a/b;   
    }

}

function ajouteroperation(valeur) {
    equation.value += valeur;
}

function reset() {
    equation.value = "";
}

function calculer() {
    let equation = document.getElementById("equation");
    let nombre1 = "";
    let nombre2 = "";
    let operateur = "";
    let resultat = 0;
    let faire_calcul = false;
    let liste_operateurs = ["+","-","*","/"];
    let index_operateur = 0;
    // console.log(equation.value);
    
    for (let i = 0; i < equation.value.length; i++) { 
        // console.log(equation.value[i]);
        if (liste_operateurs.includes(equation.value[i])) {
            operateur = equation.value[i];
            index_operateur = i;
            faire_calcul = true;

        }
    }
    index_operateur = index_operateur + 1-1;
    if (faire_calcul === true) {
        for (j=0; j<index_operateur; j++) {
            // console.log(equation.value[j]);
            nombre1 = nombre1 + equation.value[j];
        }
        for (k=index_operateur+1; k<equation.value.length; k++) {
            // console.log(equation.value[k]);
            nombre2 = nombre2 + equation.value[k];
        }
    }

    nombre1 = parseInt(nombre1);
    nombre2 = parseInt(nombre2);
    // console.log(nombre1);
    // console.log(nombre2);
    // console.log(operateur);

    if (operateur === "+") {
        // console.log("addition");
        resultat = addition(nombre1,nombre2);
    } else if (operateur === "-") {
        // console.log("soustraction");
        resultat = soustraction(nombre1,nombre2);
    } else if (operateur === "*") {
        // console.log("multiplication");
        resultat = multiplication(nombre1,nombre2);
    } else if (operateur === "/") {
        if (nombre2 === 0) {
            resultat = "Impossible de diviser par 0";
        } else {
            resultat = division(nombre1,nombre2);
    }

    }
    equation.value = resultat;
    console.log(resultat);
    return 0;
}

function calcul() {
    let premierNombre = document.getElementById("premierNombre").value;
    let secondNombre = document.getElementById("secondNombre").value;
    let operation = document.getElementById("operation").value;

    premierNombre = parseInt(premierNombre);
    secondNombre = parseInt(secondNombre);

    // console.log(premierNombre);
    // console.log(secondNombre);
    // console.log(operation);

    if (operation === "+") {
        resultat = addition(premierNombre,secondNombre);
    } else if (operation === "-") {
        resultat = soustraction(premierNombre,secondNombre);
    } else if (operation === "*") {
        resultat = multiplication(premierNombre,secondNombre);
    } else if (operation === "/") {
        if (secondNombre === 0) {
            resultat = "Impossible de diviser par 0";
        } else {
            resultat = division(premierNombre,secondNombre);
        }
    }

    document.getElementById("resultat").textContent = "Le résultat de votre opération est : " + resultat;
    console.log(resultat);
    return 0;
}