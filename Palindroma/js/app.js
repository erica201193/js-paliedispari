//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

const parolaInserita = prompt ("Inserisci una parola per verificare se è palindroma!")



function onlyLetters(parolaDaControllare) {
    const caratteriAmmessi = "abcdefghilmnopqrstuvz";

    let validLetter = true;


    for (let i = 0; i < parolaDaControllare.length; i++) {
        const letteraCorrente = parolaDaControllare [i];

        if (caratteriAmmessi.indexOf(letteraCorrente) === -1) {
            validLetter = false;
        }       
    }

    return validLetter;
}




function revertWord(parolaInserita) {

    let parolaAlContrario = "";

    for (let i = parolaInserita.length -1; i >= 0; i--) {
        const letteraCorrente = parolaInserita[i];

        parolaAlContrario += letteraCorrente;
    }

    return parolaAlContrario
}



function palindromaCheck(parolaDaControllare) {

    if (!onlyLetters(parolaDaControllare)) {
        return alert("La parola inserita non è valida");
    }

    const parolaInvertita = revertWord(parolaDaControllare);

    return parolaDaControllare === parolaInvertita;
}



const risultato = palindromaCheck(parolaInserita)

if (risultato === true) { 
    alert("COMPLIMENTI! La parola inserita è palindroma!")    
}
else {
    alert("La parola inserita NON è palindroma!")
}



console.log(parolaInserita);
console.log(onlyLetters(parolaInserita));
console.log(revertWord(parolaInserita));
console.log(palindromaCheck(parolaInserita));
