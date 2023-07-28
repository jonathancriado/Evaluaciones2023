/*
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.
 *
 * Es más complicado de lo que parece...
 */
let fecha = new Date()
nuemroRandom = () => Math.floor(fecha.getMilliseconds()/10)
console.log(nuemroRandom())

// NUMERO RANDOM USANDO LA MEMORIA RAM UTILIZADA

// const os = require('os');

// function obtenerMemoriaRamUtilizada() {
//     const memoriaLibre = os.freemem();
//     const memoriaTotal = os.totalmem();
//     const memoriaUtilizada = memoriaTotal - memoriaLibre;
//     return memoriaUtilizada
// }

// numeroPseudorandom = () => {
//     const nuemroRandom = (obtenerMemoriaRamUtilizada() / 100000000) - Math.floor(obtenerMemoriaRamUtilizada() / 100000000);
//     if (nuemroRandom > 0 && nuemroRandom < 100) return Math.floor(nuemroRandom * 100)
// }
// console.log('Numero pseudorandom', numeroPseudorandom());