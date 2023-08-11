/*
 * Dada una URL con parámetros, crea una función que obtenga sus valores.
 * No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.
 *
 * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0&name=jony
 * los parámetros serían ["2023", "0", "jony"]
 */

let parameters = url => {
    let urlChange = url.replaceAll("&", "=")
    let urlKeysAndValues = urlChange.split("=")
    const urlValues = []
    for (let i = 1; i < urlKeysAndValues.length; i += 2) {
        urlValues.push(urlKeysAndValues[i])
    }
    console.log(urlValues)
}

parameters("https://retosdeprogramacion.com?year=2023&challenge=0&name=jony")
