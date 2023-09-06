const arrPalabras = ["viento", "fuego", "cambio", "hola", "clave", "token", "murcielago"]
function palabraRandom() {
    let posicionRandom = Math.floor(Math.random() * arrPalabras.length)
    let palabra = arrPalabras[posicionRandom];
    return palabra;
}

console.log(palabraRandom())