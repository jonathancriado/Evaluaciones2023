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
    const letras = frase
        .toLowerCase()
        .replaceAll(/[^a-zA-ZáéíóúüÁÉÍÓÚñÑ]/g, "")
        .split("");  
    const cantidadDeCaracteres = []
    for (let i = 0; i < letras.length; i++) {
        let letra = letras[i]
        let arrCaracInd = letras.filter(elem => elem === letra)
        cantidadDeCaracteres.push(arrCaracInd.length)
    }
    let valorAConfirmar = cantidadDeCaracteres[0]
    let respuesta = cantidadDeCaracteres.every(elem => elem === valorAConfirmar) ? "Es un isograma" : "No es un isograma"
    return respuesta
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

// console.log(isograma(""))
// console.log(isograma(""))
// console.log(isograma(""))