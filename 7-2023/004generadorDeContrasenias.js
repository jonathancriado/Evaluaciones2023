/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */
// 
let numeroDeCaracteres = long => {
    return long >= 8 && long <= 16 ? true : false
}
console.log(numeroDeCaracteres(5))

let numeroAleatorio = Math.floor(Math.random()*1000);
console.log(numeroAleatorio)

let letra = String.fromCharCode(numeroAleatorio)
console.log(letra)
