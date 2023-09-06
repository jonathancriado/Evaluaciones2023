// palabra random

const arrPalabras = ["viento", "fuego", "cambio", "hola", "clave", "token", "murcielago", "submarino", "dialogue", "autorice", "adulterio", "neumatico", "auditores"]
function palabraRandom() {
    let posicionRandom = Math.floor(Math.random() * arrPalabras.length)
    let palabra = arrPalabras[posicionRandom];
    return palabra;
}
let PR = palabraRandom();
console.log("la palabra es: " + PR)
// numero de letras a ocultar

function numLetrasOcultas(palabra) {
    let numDeLetrasOcultas = Math.floor(palabra.length * 0.6);
    return numDeLetrasOcultas;
}
let NLO = numLetrasOcultas(PR);
console.log("el numero de letras a ocultar es: " + NLO)

function ocultarLetras() {
    let copia = PR;
    let posicionRandomDeLetra = Math.floor(Math.random() * PR.length)
    const arrPosicionRandomLetra = [];
    arrPosicionRandomLetra.push(posicionRandomDeLetra)
    console.log("la posicion de la letra oculta es: " + arrPosicionRandomLetra)
    copia = copia.replace(copia[posicionRandomDeLetra], "_")
    console.log("la palabra con la letra oculta es: " + copia)
}
console.log(ocultarLetras())