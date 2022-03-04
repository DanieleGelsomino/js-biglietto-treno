//check console
console.log('JS OK!')

// rihiesta chilometri da percorrere e età del passeggero
const numeroChilometri = prompt('indica il numero di km da percorrere');
console.log('km da percorrere: ' + numeroChilometri);

const etàPasseggero = prompt('indica l\'età del passeggero');
console.log('età passeggero: ' + etàPasseggero);

// calcolo prezzo del biglietto in base ai km (0.21€ al km)
const prezzoTicket = (0.21 * numeroChilometri);
console.log('prezzo ticket: ' + prezzoTicket);