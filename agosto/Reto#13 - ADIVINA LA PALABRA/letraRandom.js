
function crearLetraRandom(palabra) {
    let posicionLetraRandom = Math.floor(Math.random() * palabra.length)
    let letraRandom = palabra[posicionLetraRandom]
    return letraRandom;
}
console.log(crearLetraRandom("atardecer"))