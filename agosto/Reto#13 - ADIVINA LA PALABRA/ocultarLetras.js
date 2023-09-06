// palabra al azar

const palabras = ["kilogramo", "viento", "diente", "cabello", "fuego", "lluvia", "esperanza", "compañia", "cambio", "progreso", "programador", "nostalgia", "frustracion", "emocion", "intransigencia", "pedestal", "acueducto", "trinchera", "escafandra"];
let posicionRandom = Math.floor(Math.random() * palabras.length)
let palabra = palabras[posicionRandom];
console.log("palabra a adivinar: " + palabra)

let numeroLetrasOcultar = Math.floor(palabra.length * 0.6)
console.log("numero de letras a ocultar: " + numeroLetrasOcultar)

// funcion para crear la letra random

function crearLetraRandom() {
    let posicionLetraRandom = Math.floor(Math.random() * palabra.length)
    console.log("posicion letra: " + posicionLetraRandom)

    let lR = palabra[posicionLetraRandom]
    console.log("letra random: " + lR)

    return lR;
}

// contador

function numVecesLetraRepite() {
    const arrPalabra = palabra.split("");
    let contadorRepeticionesLetra = 0;

    arrPalabra.forEach(elem => {
        if (elem === crearLetraRandom()) contadorRepeticionesLetra++
    });
    return contadorRepeticionesLetra;
}
console.log("numero de veces que se repite la letra random: " + numVecesLetraRepite())

// funcion para crear el objeto

const objIL = {}
function agregarLetraAlObj() {
    const arrPalabra = palabra.split("");

    for (let i = 0; i < arrPalabra.length; i++) {
        if (arrPalabra[i] === crearLetraRandom()) {
            objIL[i] = arrPalabra[i];
        }
    }
    return objIL;
}

console.log("agrego una letra al objeto index letra: " + agregarLetraAlObj())

// function crearObjetoIndexLetras() {
//     if (numeroLetrasOcultar === 0) return objIL
//     if (numeroLetrasOcultar < numVecesLetraRepite()) {
//         // cambiar letra
//         crearLetraRandom();
//         crearObjetoIndexLetras();
//     }
//     if (numeroLetrasOcultar >= numVecesLetraRepite()) {
//         numeroLetrasOcultar -= numVecesLetraRepite();
//         agregarLetraAlObj();
//         crearLetraRandom();
//         if (Object.values(objIL).some(elem => elem !== crearLetraRandom())) {
//             crearLetraRandom();
//             crearObjetoIndexLetras();
//         }
//     }
// }

// console.log(crearObjetoIndexLetras());
