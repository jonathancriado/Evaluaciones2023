// HETEROGRAMA : frase en la que las letras no se repiten
let heterograma = frase => {
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
    resultado = arrSinDuplicados.length === arrSinEspaciosSignos.length ? "Es un heterograma" : "No es un heterograma"
    return resultado
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
    const arrAbecedario = Object.keys(abecedario)
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
    // falta ver 
    for (let i = 0; i < arrSinEspaciosSignos.length; i++) {
        for (let j = 0; j < arrAbecedario.length; j++) {
            if (arrSinEspaciosSignos[i] === arrAbecedario[j]) abecedario[arrSinEspaciosSignos[i]] += 1
        }
    }
    const abecedarioValores = Object.values(abecedario)
    cantidadDeRepeticiones = abecedarioValores.filter(elem => elem !== 0)
    resultado = cantidadDeRepeticiones.every(elem => elem === cantidadDeRepeticiones[0]) ? "Es un isograma" : "No es isograma";
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
    let resultado = arrSinDuplicados.length === 27 ? "Es pangrama" : "No es pangrama"
    return resultado;
}

console.log(heterograma("yuxtap oner"))
console.log(heterograma("ce nt#ri fugado"))
console.log(heterograma("lut +eraa nis  mo"))

console.log(isograma("aÁa 2bb bccc"))
console.log(isograma("asf #g,ew r"))
console.log(isograma("avcbánj!"))

console.log(pangrama("El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja"))
console.log(pangrama("Jovencillo emponzoñado de whisky, ¡qué figurota exhibe!"))
console.log(pangrama("La cigüeña tocaba el saxofón, detrás del palenque paja."))
