/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */
// 0+1=1 / 1+1=2 / 1+2=3 / 2+3=5 / 3+5=8 / 5+8=13
fibonacci = numeroAProbar => {
    let numeroFibonacci2 = 1;
    let numeroFibonacci1 = 0;
    let nuevoNumeroFibonacci = 0;
    const listaDeFibonacci = [];
    while (numeroAProbar >= nuevoNumeroFibonacci) {
        nuevoNumeroFibonacci = numeroFibonacci1 + numeroFibonacci2
        listaDeFibonacci.push(nuevoNumeroFibonacci)
        numeroFibonacci1 = numeroFibonacci2
        numeroFibonacci2 = nuevoNumeroFibonacci
    }
    listaDeFibonacci.includes(numeroAProbar) ? console.log("Es Fibonacci") : console.log("No es Fibonacci")
}
par = numeroAProbar => {
    numeroAProbar % 2 == 0 ? console.log("Es par") : console.log("No es par")
}



