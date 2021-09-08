// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata(es.Ciao -> oaiC)
/**
*Functions
*/
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
*Main code
*/
document.getElementById('reverse').addEventListener('click',
    () => {
        let str = document.getElementById('string').value;
        str = reverseString(str);
        document.getElementById('reverseString').innerHTML = `String reverse: ${str}`;
    }
);