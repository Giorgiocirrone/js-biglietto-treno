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
