/*
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
*/
// HETEROGRAMA : frase en la que las letras no se repiten
let heterograma = frase => {
    const letras = frase.replaceAll(" ", "").toLowerCase().split("");
    const cantidadDeCaracteres = []
    for (let i = 0; i < letras.length; i++) {
        let letra = letras[i]
        let arrCaracInd = letras.filter(elem => elem === letra)
        cantidadDeCaracteres.push(arrCaracInd.length)
    }
    let resultado = cantidadDeCaracteres.every(elem => elem === 1)
    if (resultado) {
        return "Es un heterograma"
    } else {
        return "No es un heterograma"
    }
}
// ISOGRAMA : frase en la que cada letra aparece el mismo numero de veces
let isograma = frase => {
    const abecedario = {
        "a": 0,
        "b": 0,
        "c": 0,
        "d": 0,
        "e": 0,
        "f": 0,
        "g": 0,
        "h": 0,
        "i": 0,
        "j": 0,
        "k": 0,
        "l": 0,
        "m": 0,
        "n": 0,
        "ñ": 0,
        "o": 0,
        "p": 0,
        "q": 0,
        "r": 0,
        "s": 0,
        "t": 0,
        "u": 0,
        "v": 0,
        "w": 0,
        "x": 0,
        "y": 0,
        "z": 0
    }
    const letras = frase
        .toLowerCase()
        .replaceAll(/[^a-zA-ZáéíóúüÁÉÍÓÚñÑ]/g, "")
    const arrAbecedario = Object.keys(abecedario)
    for (let i = 0; i < letras.length; i++) {
        for (let j = 0; j < arrAbecedario.length; j++) {
            if (letras[i] === arrAbecedario[j]) abecedario[letras[i]] += 1
        }
    }
    const abecedarioValores = Object.values(abecedario)
    cantidadDeRepeticiones = abecedarioValores.filter(elem => elem !== 0)
    resultado = cantidadDeRepeticiones.every(elem => elem === cantidadDeRepeticiones[0]) ? "Es un isograma" : "No es isograma"
    return resultado
}
// PANGRAMA : frase en la que aparecen todas las letras de un alfabeto
let pangrama = frase => {
    const letrasSinTilde = {
        "á": "a",
        "é": "e",
        "í": "i",
        "ó": "o",
        "ú": "u",
        "ü": "u",
    }
    const arrSinEspaciosSignos = frase
        .toLowerCase()
        .replaceAll(/[^a-zA-ZáéíóúüÁÉÍÓÚñÑ]/g, "")
        .split("")
    const tilde = Object.keys(letrasSinTilde)
    for (let i = 0; i < arrSinEspaciosSignos.length; i++) {
        for (let j = 0; j < tilde.length; j++)
            arrSinEspaciosSignos[i] === tilde[j] ? arrSinEspaciosSignos[i] = letrasSinTilde[tilde[j]] : arrSinEspaciosSignos[i]
    }
    let arrSinDuplicados = [...new Set(arrSinEspaciosSignos)]
    console.log(arrSinDuplicados.sort())
    let resultado = arrSinDuplicados.length === 27 ? "Es pangrama" : "No es pangrama"
    return resultado
}

console.log(heterograma("yuxtaponer"))
console.log(heterograma("centrifugaado"))
console.log(heterograma("luteranismo"))

// console.log(pangrama("El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja"))
// console.log(pangrama("Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!"))
// console.log(pangrama("La cigüeña tocaba el saxofó,mñvwxyzkhn detrás del palenque paja."))

// console.log(isograma("aaa 2bb bccc"))
// console.log(isograma("asf #gew r"))
// console.log(isograma("avcbnja!"))