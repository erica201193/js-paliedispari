// L’utente sceglie pari o dispari tramite un prompt
// L’utente inserisce anche un numero da 1 a 5.
// Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer

const sceltaUtente = prompt ("Scegli tra PARI e DISPARI, poi scrivi la tua scelta");

const numeroUtente = prompt ("Scegli un numero da 1 a 5, poi scrivi la tua scelta");

function randomComputerNumber() {
    let randomNumber = Math.floor(Math.random() * 5) + 1;

    return randomNumber
}

function somma(numeroUtente, randomComputerNumber) {

    const sommaNumeri = numeroUtente + randomComputerNumber

    return sommaNumeri
}

console.log(randomComputerNumber)
console.log(somma)
