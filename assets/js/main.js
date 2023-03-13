/* 

1) Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

- Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.


2) Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


Prima di partire a scrivere codice poniamoci qualche domanda:

Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
- scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
- javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
- si ma noi cosa vogliamo fare?
- torniamo a scrivere in italiano
- proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

*/

/*

Strumenti:
- prompt
- console.log
- const / let
- array
- for function()
- if / else
- getElementById / querySelector
- createElement
- append() / innerHTML / 
- Math.floor / Math.ceil / Math.rounded
- Math.random

*/

//MAIL

/*

//Metodo 1
//chiedere all'utente la sua mail con un prompt e loggare il risultato
const mailUser = prompt('Scrivi la tua email');
console.log(mailUser);
//selezionare l'elemento in cui stampare il risultato
const h1Element = document.querySelector('h1');

*/

//Metodo 2
//BONUS inserire un tag input ed un button per chiedere l'invio della mail


//inserire in tag input e chiedere di inserire la mail
//loggare il valore del tag input per la verifica della mail

//BONUS stampare sulla schermata l'esito del controllo

//creare una lista di chi può accedere e loggare i vari elementi
const mailAccess = [
    'pippo@gmail.com',
    'pluto@gmail.com',
    'paperino@gmail.com'
];
console.log(mailAccess);


const buttonEl = document.querySelector('button');
const h1Element = document.querySelector('h1');

//creare un addEventListener per inviare la mail
buttonEl.addEventListener ('click', function(){
    const mailUser = document.querySelector('input').value
    console.log(mailUser);

    //creare un ciclo per il controllo della mai
    for (let i = 0; i < mailAccess.length; i++) {

        //controllare se la mail sia nella lista di chi può accedere o meno
        if (mailUser == mailAccess[0],[1],[2]) {     
    
            //stampare un messaggio che indichi che si può accedere
            h1Element.innerHTML = 'complimenti sei in lista';
    
        } else {
    
            //stampare un messaggio che indichi che non si può accedere
            h1Element.innerHTML = 'mi dispiace non sei in lista';
        }
    }


//DADI

//selezionare l'elemento in dom nel quale stampare il risultato della sfida
const h2Element = document.querySelector('h2')

//generare con math.random un numero che va da 1 a 6 per l'utente e loggarlo
const userDice = Math.floor(Math.random() * 6) + 1;
console.log(userDice);

//generare con math.random un numero che va da 1 a 6 per il computer e loggarlo
const computerDice = Math.floor(Math.random() * 6) + 1;
console.log(computerDice);

//verificare quale dei due numeri è maggiore
if (userDice > computerDice) {
    console.log('HAI VINTO');
    h2Element.innerHTML = 'HAI VINTO';
    
} else if (computerDice > userDice) {
    console.log('HAI PERSO');
    h2Element.innerHTML = 'HAI PERSO';

} else {
    console.log('PAREGGIO');
    h2Element.innerHTML = 'PAREGGIO';
}

})

