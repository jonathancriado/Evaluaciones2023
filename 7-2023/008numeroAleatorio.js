/*
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.
 *
 * Es más complicado de lo que parece...
 */

nuemroRandom = () => {
    let fecha = new Date()
    return Math.floor(fecha.getMilliseconds()/10)
}
console.log(nuemroRandom())

// NUMERO RANDOM USANDO LA MEMORIA RAM UTILIZADA

// const os = require('os');

// function obtenerMemoriaRamUtilizada() {
//     const memoriaLibre = os.freemem();
//     const memoriaTotal = os.totalmem();
//     const memoriaUtilizada = memoriaTotal - memoriaLibre;
//     let result = 0;
//     for (let i = 1; i <= 10000000000; i *= 10) {
//         let numeroDecimal = (memoriaUtilizada / i) - Math.floor(memoriaUtilizada / i);
//         let numeroRandom = numeroDecimal * 100
//         if (numeroRandom > 0 && numeroRandom < 100) {
//             return result = Math.floor(numeroRandom);
//         }
//     }
// }

// console.log(obtenerMemoriaRamUtilizada());