/*
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
*/

// HETEROGRAMA : frase en la que las letras no se repiten

// ISOGRAMA : frase en la que cada letra aparece el mismo numero de veces
let isograma = frase => {
    const letras = frase.replaceAll(" ", "").toLowerCase().split("");
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

