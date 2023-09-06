
function palabraRandom() {
    const arrPalabras = ["kilogramo", "viento", "diente", "fuego", "lluvia", "esperanza", "compañia", "cambio", "progreso", "programador", "nostalgia", "frustracion", "emocion", "intransigencia", "pedestal", "acueducto", "trinchera", "escafandra"]
    let posicionRandom = Math.floor(Math.random() * arrPalabras.length)
    let palabra = arrPalabras[posicionRandom];
    return palabra;
}
let palabra = palabraRandom();

function crearLetraRandom(palabra) {
    let posicionLetraRandom = Math.floor(Math.random() * palabra.length)
    let letraRandom = palabra[posicionLetraRandom]
    return letraRandom;
}
console.log(crearLetraRandom())