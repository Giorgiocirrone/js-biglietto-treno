/*metti la consegna  */


/* 
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

*/
/*
// FASE DI PREPARAZIONE VARIABILI 

const pricePerKm = 0.21;
const message = 'Costo Bilgietto : '

//INPUT DATI IN INGRESSO UTENTE E CHILOMETRAGGIO 


const Km = parseInt(prompt('Km da percorrere', 100));
const age = parseInt(prompt('Età', 30));

//mettiamo in console 


console.log('KM', Km);
console.log('età', age);


//elaboraborazione dei dati 

// calcolo del prezzo di base 

const basePrice = Km * pricePerKm;

let finalPriece = basePrice;



//CONTROLLO DEI DATI 

if (age >= 65) {
    finalPriece *= 0.6;


} else if (age < 18) {
    finalPriece *= 0.8;

}


console.log(finalPriece)




*/

/*



Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*Nota
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Consigli:
Fate la scaletta degli step e commentate man mano che scrivete il codice
Usate i console.log per verificare che tutto sia a posto
Disattivate live server: può darvi problemi coi prompt.
Bonus
Stampare il prezzo finale sulla pagina invece che in console
Aggiungere, sempre in pagina, altre informazioni, come il prezzo prima dello sconto e l'età e il chilometraggio indicati dall'utente
Abbellire col CSS

*/



/**
 * scaletta 
 * 1-cheidere all'utente chilometri da percorrere ed età 
 * 2-0.21 euro per per chilometro 
 * 3-applicare uno sconto del 20% ai minorenni e del 40% per gli over 65
 */




//fase di preparazione e di raccota dei dati 

const pricePerKm = 0.21;

const UserAge = parseInt(prompt('dimmi la tua età:'));

const userKm = parseInt(prompt('quanti Km vuoi percorrere : '));

resultElement = document.getElementById('my-div');

//scontistica da applicare 
const young = 0.2;
const old = 0.4;


console.log(pricePerKm, userKm, UserAge);



//fase  lavora zione dei dati 
const finalPriece = userKm * pricePerKm;

console.log(finalPriece);



if (UserAge < 18) {

    finalPriece = finalPriece * young;

} else if (UserAge > 65) {

    finalPriece = finalPriece * old;
}



console.log('il prezzo finale è ', finalPriece);

const message = `<p>La tua età  ${UserAge} hai percorso ${userKm} al prezzo di ${pricePerKm}</p>`;
resultElement.innerHtlm = message;