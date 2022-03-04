//check console
console.log('JS OK!')

// rihiesta chilometri da percorrere e età del passeggero
const numeroChilometri = prompt('indica il numero di km da percorrere');
console.log('km da percorrere: ' + numeroChilometri);

const etàPasseggero = prompt('indica l\'età del passeggero');
console.log('età passeggero: ' + etàPasseggero);

// calcolo prezzo del biglietto in base ai km (0.21€ al km)
const prezzoTicket = (0.21 * numeroChilometri);
console.log('prezzo del biglietto: ' + prezzoTicket.toFixed(2) + '€');

// calcolo prezzo del biglietto con lo sconto del 20% se etàPasseggero è < 18 
if (etàPasseggero <=18){
    const prezzoTotale = (prezzoTicket / 100) * 80;
    const prezzoTotaleFinale = prezzoTotale.toFixed(2);
    console.log('costo totale del biglietto scontato al 20%: ' + prezzoTotaleFinale + '€')
    document.getElementById("prezzoTotale").innerHTML = 
    `Il costo totale del biglietto <span>(-20%)</span> per il passeggero con età ${etàPasseggero} anni è di:
    <span>${prezzoTotaleFinale} €</span> `;

// calcolo prezzo del biglietto con lo sconto del 40% se etàPasseggero è > 65 
}else if(etàPasseggero >=65){
    const prezzoTotale = (prezzoTicket / 100) * 60;
    const prezzoTotaleFinale = prezzoTotale.toFixed(2);
    console.log('costo totale del biglietto scontato al 40%: ' + prezzoTotaleFinale + '€')
    document.getElementById("prezzoTotale").innerHTML = 
    `Il costo totale del biglietto <span>(-40%)</span> per il passeggero con età ${etàPasseggero} anni è di:
    <span>${prezzoTotaleFinale} €</span>`;

}else{
    const prezzoTotale = prezzoTicket;
    const prezzoTotaleFinale = prezzoTotale.toFixed(2);
    console.log('costo totale del biglietto: ' + prezzoTotaleFinale + '€')
    document.getElementById("prezzoTotale").innerText = 
    `Il costo totale del biglietto per il passeggero con età ${etàPasseggero} anni è di:
    ${prezzoTotaleFinale} €`;
}
