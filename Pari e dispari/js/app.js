// L’utente sceglie pari o dispari tramite un prompt
// L’utente inserisce anche un numero da 1 a 5.
// Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer

let sceltaGioco;
let userChoice = false;

while (userChoice === false) {
    sceltaGioco = prompt ("Pari o Dispari ?")

    if (sceltaGioco == "pari" || sceltaGioco == "dispari") {
        userChoice = true;
    } else {
        alert("Inserisci una scelta valida")
    }
}

let numeroScelto;
let numberChoice = false;

while (numberChoice === false) {
    numeroScelto = parseInt(prompt ("Fantastico! Ora inserisci un numero da 1 a 5"))

    if (numeroScelto > 0 && numeroScelto < 6 && !NaN && !null) {
        numberChoice = true;
    } else {
        alert("Inserisci un numero valido")
    }
}

console.log("Il numero scelto dell'umano è: " + numeroScelto);



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

let computerNumber = randomNumber(1, 5);

console.log("Il numero random del computer è: " + computerNumber);

const somma = numeroScelto + computerNumber;

console.log("La somma dei due numeri è: " + somma);

function pari_dispari(num) {
    if (num % 2 == 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

const pariOdispari = pari_dispari(somma);

console.log("Il numero " + somma + " è " + pariOdispari);

if (sceltaGioco == "pari" && pariOdispari == "pari") {
    alert(`Hai scelto ${sceltaGioco} e il numero che hai inserito è ${numeroScelto}. L'Ai ha scelto invece ${computerNumber}. ${numeroScelto} + ${computerNumber} = ${somma}, ovvero un numero ${pariOdispari}. HAI VINTO!`)
} else if (sceltaGioco == "dispari" && pariOdispari == "dispari") {
    alert (`Hai scelto ${sceltaGioco} e il numero che hai inserito è ${numeroScelto}. L'Ai ha scelto invece ${computerNumber}. ${numeroScelto} + ${computerNumber} = ${somma}, ovvero un numero ${pariOdispari}. HAI VINTO!`)
} else {
    alert (`Hai scelto ${sceltaGioco} e il numero che hai inserito è ${numeroScelto}. L'Ai ha scelto invece ${computerNumber}. ${numeroScelto} + ${computerNumber} = ${somma}, ovvero un numero ${pariOdispari}. HAI PERSO :'(`)
}