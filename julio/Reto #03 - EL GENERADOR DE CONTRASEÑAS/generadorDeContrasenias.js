/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - longituditud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

// Necesito que el valor random no sobrepase el largo del array 

function generarContraseña(longitud, mayuscula, numeros, simbolo) {
    const listaDeMayusculas = ["A", "B", "C", "D", "E"];
    const listaDeMinusculas = ["a", "b","c", "d", "e"];
    const listaDeNumeros = ["1", "2", "3", "4", "5", "6", "7"];
    const listaDeSimbolos = ["!", "#", "$", "%", "&", "/", "?"];
    const listaDeCaracteres = [];
    const listaContraseña = [];
    if (mayuscula) {
        listaDeMinusculas.map(letra => listaDeCaracteres.push(letra))
        listaDeMayusculas.map(letra => listaDeCaracteres.push(letra))
    } else {
        listaDeMinusculas.map(letra => listaDeCaracteres.push(letra))
    }
    if (numeros) listaDeNumeros.map(num => listaDeCaracteres.push(num))
    if (simbolo) listaDeSimbolos.map(sim => listaDeCaracteres.push(sim))
    if (longitud >= 8 && longitud <= 16) {
        while (listaContraseña.length < longitud) {
            let posicionEnLaLista = Math.floor(Math.random() * listaDeCaracteres.length);
            listaContraseña.push(listaDeCaracteres[posicionEnLaLista])
        }
        console.log(listaContraseña.join(""))
    } else {
        console.log("Su contraseña debe contener entre 8 y 16 caracteres")
    }
}
generarContraseña(8, true, true, true)


