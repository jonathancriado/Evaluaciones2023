/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */
// 0+1=1 / 1+1=2 / 1+2=3 / 2+3=5 / 3+5=8 / 5+8=13
function fibonacci(numeroRandom) {
    let numeroFibonacci2 = 1;
    let numeroFibonacci1 = 0;
    let nuevoNumeroFibonacci = 0;
    const listaDeFibonacci = [0];
    while (numeroRandom >= nuevoNumeroFibonacci) {
        nuevoNumeroFibonacci = numeroFibonacci1 + numeroFibonacci2
        listaDeFibonacci.push(nuevoNumeroFibonacci)
        numeroFibonacci1 = numeroFibonacci2
        numeroFibonacci2 = nuevoNumeroFibonacci
    }
    console.log(listaDeFibonacci)
    console.log(numeroRandom)    
    listaDeFibonacci.includes(numeroRandom) ? console.log("Eureka") : console.log("Puta vida")
}
fibonacci(Math.floor(Math.random()*100))


// console.log(numeroRandom)

