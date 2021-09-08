// Scrivi una funzione che fonda due array(aventi lo stesso numero di
// elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3]→[a, 1, b, 2, c, 3].

/**
 * Functions
 */
function mergeArray(array1, array2) {
    let array = [];
    let i1 = 0;
    let i2 = 0;

    for (let i = 0; i < (array1.length + array2.length); i++) {
        if (i % 2 == 1) {
            array.push(array1[i1]);
            i1++;
        } else {
            array.push(array2[i2]);
            i2++;
        }
    }
    return array;
}

/**
 * Main code
 */
let array1 = [1, 2, 3, 4];
let array2 = ['A', 'B', 'C', 'D'];

let array = mergeArray(array1, array2);


console.log(array);