
function palabraRandom(arrPalabras) {
    let posicionRandom = Math.floor(Math.random() * arrPalabras.length)
    let palabra = arrPalabras[posicionRandom];
    return palabra;
}

console.log(palabraRandom(["kilogramo", "viento", "diente", "fuego", "lluvia", "esperanza", "compañia", "cambio", "progreso", "programador", "nostalgia", "frustracion", "emocion", "intransigencia", "pedestal", "acueducto", "trinchera", "escafandra"]))