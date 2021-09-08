// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri(“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

/**
 * Functions
 */
function functionArray(array, a, b) {
    let arrayTagliato = [];
    for(let i = (a-1); i < b; i++) {
        arrayTagliato.push(array[i]);
    }
    return arrayTagliato;
}

/**
 * Main code
 */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20];
for(let i = 0; i < array.length; i++) {
    document.getElementById(`stampaArray`).innerHTML += `${array[i]}  `
}
document.getElementById(`a`).value = '';
document.getElementById(`b`).value = '';
let btnTaglia = document.getElementById(`taglia`);
btnTaglia.addEventListener(`click`,
    () => {
        let a = parseInt(document.getElementById(`a`).value);
        let b = parseInt(document.getElementById(`b`).value);
        if(isNaN(a) || isNaN(b) || b <= a) {
            alert(`Inserisci dei dati corretti!!`)
        }
        let arrayTagliato = functionArray(array, a, b);
        for (let i = 0; i < arrayTagliato.length; i++) {
            document.getElementById(`arrayTagliato`).innerHTML += `${arrayTagliato[i]}  `
        }
    }
);
