/*Snack 1
//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while

// eseguito con il for

var richieste = 5
var somma = 0

for ( var i = 1; i <= richieste; i++){
 var numero = parseInt(prompt('inserisci il numero' + i + 'di' + richieste) );
console.log(numero)

somma += numero;
}
console.log('totale',somma);  */



//eseguito con il while

/*var contatore = 1;
while (contatore <= richieste ) {
    var numero = parseInt(prompt('Inserisci numero ' + contatore +'di' + richieste));
    console.log(numero);

    somma += numero;
    contatore++;
}
 console.log('somma:',somma);*/


//snack 2
/*Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
var numero = parseInt(prompt('Inserisci un numero '));


if ( numero % 2 === 0){
    console.log('numero:',numero);
  } else {
      console.log(++numero);
  
  }                                                      */

/*Snack 3.
//Generatore di “nomi cognomi” casuali: 
//prendendo una lista di nomi e una lista di cognomi, 
// generare una falsa lista di 3 invitati.

//lista nomi
var arrayNomi = ['Aldo', 'Giovanni', 'Giacomo','Filippo', 'Lorenzo'];
console.log('lista nomi:',arrayNomi);


//lista cognomi
var arrayCognomi = ['Bianchi', 'Neri', 'Rossi','Gialli', 'Verdi'];
console.log('lista cognomi:',arrayCognomi);
 
var listaFake = []

for (var i = 0; i < 3; i++){

 var nomeRandom = Math.floor(Math.random() * arrayNomi.length);
 var cognomeRandom = Math.floor(Math.random() * arrayCognomi.length);

listaFake = arrayNomi[nomeRandom] + ' ' + arrayCognomi[cognomeRandom];
console.log(listaFake);
}   */
 
//Crea un array di numeri interi 
//fai la somma di tutti gli elementi che sono in posizione dispari

/*var numeri = ['5','6','8','3','7','9','8'];
 
var somma = 0;

for( var i = 0; i < numeri.length; i++) {
     console.log( numeri[i]);
    if( i % 2 !== 0 ){
        somma += numeri[i];      
    }
}

console.log('tot: ',somma);*/

//Esercizio 5 - Bonus
//Crea due array di numeri che hanno un numero di elementi diversi.
//Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


array1 = ['3','8','25','57','68'];

array2 = ['7', '54'];

while ()