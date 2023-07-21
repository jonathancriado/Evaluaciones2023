/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
 */

// Necesito que el valor random no sobrepase el largo del array 

let numeroDeCaracteres = long => {
    const listaDeCaracteres = ["A", "j", "2", "7", "#", "%"]
    const listaContraseña = []
    if (long >= 8 && long <= 16) {
        while (listaContraseña.length < long) {
            let posicionEnLaLista = Math.floor(Math.random() * listaDeCaracteres.length);
            listaContraseña.push(listaDeCaracteres[posicionEnLaLista])
    
            console.log(listaContraseña.join(""))
        }
    } else {
        console.log("Su contraseña debe contener entre 8 y 16 caracteres")
    }
}
numeroDeCaracteres(8)


