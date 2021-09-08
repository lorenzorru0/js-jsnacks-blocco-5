// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
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
        'lunghezza': 15
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

var pesoTotale = 0;
for (let i = 0; i < zucchineVarie.length; i++) {
    pesoTotale += zucchineVarie[i].peso;
    document.getElementById(`zucchine`).innerHTML += `Varietà: ${zucchineVarie[i].varietà} <br>
                                                    Peso: ${zucchineVarie[i].peso} <br>
                                                    Lunghezza: ${zucchineVarie[i].lunghezza} <br>
                                                    `
}
document.getElementById(`zucchine`).innerHTML += `Peso totale: ${pesoTotale}gr`
console.log(zucchineVarie);
console.log(pesoTotale);