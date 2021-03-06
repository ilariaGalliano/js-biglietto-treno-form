/*
* Programma biglietto treno
*
*/

// Referenza
var biglietto = document.getElementById('biglietto');
var genera = document.getElementById('genera');
var annulla = document.getElementById('annulla');

// Funzionalità click
genera.addEventListener('click' , function() {
  // Dati utente
  var nome = document.getElementById('nome').value;
  var kmPercorrere = document.getElementById('km').value;
  var utenteEta = document.getElementById('eta-utente').value;

  // calcolo prezzo biglietti
  var prezzoTicket = 0.21;
  var costoTicket = prezzoTicket * kmPercorrere;

  // Offerta
  var offerta = 'Biglietto';

  // Sconto minorenni
  // var discountYoung = (costoTicket / 100) * 20;
  // // Sconto Over65
  // var discountOld = (costoTicket / 100) * 40;

  if (utenteEta == 'minorenni' ) {
      // sconto 20%
      costoTicket -= costoTicket * 0.2;
      //var totalCost: (costoTicket - discountYoung).toFixed(2) + '€';
      offerta = 'Sconto minorenni';
  }
  else if (utenteEta == 'over65') {
      // sconto 40%
      //var totalCost: (costoTicket - discountOld).toFixed(2) + '€';
      costoTicket -= costoTicket * 0.4;
      offerta = 'Sconto over 65';
  }
  else {
      //var totalCost: costoTicket.toFixed(2) + '€';
      offerta = 'biglietto standard';
  }

  costoTicket = costoTicket.toFixed(2)+ '€';


  // Carrozza
  var numeroCarr = Math.floor( Math.random( ) * 10) + 1;

  // Codice CP da 9000 a 10000 escluso
  var codCp = Math.floor( Math.random () * (10000 - 9000) ) + 9000;

  // Valori biglietto
  document.getElementById('passeggero').innerHTML = nome;
  document.getElementById('offerta').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = numeroCarr;
  document.getElementById('codice-cp').innerHTML = codCp;
  document.getElementById('costo').innerHTML = costoTicket;


// Visibilità Biglietto
  biglietto.className = 'visible';
})

// Annulla biglietto
  annulla.addEventListener('click' , function() {

  document.getElementById('nome').value = ' ';
  document.getElementById('km').value = ' ';
  document.getElementById('eta-utente').value = ' ';

  // Valori biglietto
  document.getElementById('passeggero').innerHTML = ' ';
  document.getElementById('offerta').innerHTML = ' ';
  document.getElementById('carrozza').innerHTML = ' ';
  document.getElementById('codice-cp').innerHTML = ' ';
  document.getElementById('costo').innerHTML = ' ';

// Visibilità Biglietto
  biglietto.className = 'hidden';
})
