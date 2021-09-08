// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
const zucchineVarie = [
    {
        'varietà': "chiara",
        'peso': 200,
        'lunghezza': 13
    },
    {
        'varietà': "bianca",
        'peso': 240,
        'lunghezza': 15
    },
    {
        'varietà': "scura",
        'peso': 270,
        'lunghezza': 16
    },
    {
        'varietà': "mini",
        'peso': 120,
        'lunghezza': 9
    },
    {
        'varietà': "verde",
        'peso': 210,
        'lunghezza': 12
    },
    {
        'varietà': "viola",
        'peso': 240,
        'lunghezza': 17
    },
    {
        'varietà': "blu",
        'peso': 300,
        'lunghezza': 20
    },
    {
        'varietà': "rosa",
        'peso': 350,
        'lunghezza': 17
    },
    {
        'varietà': "marrone",
        'peso': 150,
        'lunghezza': 11
    },
    {
        'varietà': "nera",
        'peso': 230,
        'lunghezza': 15
    },
];
const zucchinePiccole = [];
const zucchineGrandi = [];
let pesoPiccole = 0; 
let pesoGrandi = 0;

for(let i = 0; i < zucchineVarie.length; i++) {
    if(zucchineVarie[i].lunghezza <= 15) {
        zucchinePiccole.push(zucchineVarie[i]);
    } else {
        zucchineGrandi.push(zucchineVarie[i]);
    }
}

document.getElementById(`zucchine`).innerHTML += `<br>Zucchine piccole: <br>`;
for (let i = 0; i < zucchinePiccole.length; i++) {
    pesoPiccole += zucchinePiccole[i].peso;
    document.getElementById(`zucchine`).innerHTML += `Varietà: ${zucchinePiccole[i].varietà} <br>
                                                    Peso: ${zucchinePiccole[i].peso} <br>
                                                    Lunghezza: ${zucchinePiccole[i].lunghezza} <br>
                                                    `
}
document.getElementById(`zucchine`).innerHTML += `Peso zucchine piccole: ${pesoPiccole}gr <br>`

document.getElementById(`zucchine`).innerHTML += `<br>Zucchine grandi: <br>`;
for (let i = 0; i < zucchineGrandi.length; i++) {
    pesoGrandi += zucchineGrandi[i].peso;
    document.getElementById(`zucchine`).innerHTML += `Varietà: ${zucchineGrandi[i].varietà} <br>
                                                    Peso: ${zucchineGrandi[i].peso} <br>
                                                    Lunghezza: ${zucchineGrandi[i].lunghezza} <br>
                                                    `
}
document.getElementById(`zucchine`).innerHTML += `Peso zucchine grandi: ${pesoGrandi}gr`

console.log(zucchinePiccole);
console.log(zucchineGrandi);