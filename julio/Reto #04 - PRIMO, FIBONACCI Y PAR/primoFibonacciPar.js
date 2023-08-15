let fibonacci = numero => {
    let numeroFibonacci2 = 1;
    let numeroFibonacci1 = 0;
    let nuevoNumeroFibonacci = 0;
    const listaDeFibonacci = [];
    while (numero >= nuevoNumeroFibonacci) {
        nuevoNumeroFibonacci = numeroFibonacci1 + numeroFibonacci2
        listaDeFibonacci.push(nuevoNumeroFibonacci)
        numeroFibonacci1 = numeroFibonacci2
        numeroFibonacci2 = nuevoNumeroFibonacci
    }
    if (listaDeFibonacci.includes(numero)) {
        return "Fibonacci"
    } else {
        return "no es Fibonacci"
    }
}
let par = numero => {
    if (numero % 2 == 0) {
        return "Es par"
    } else {
        return "es impar"
    }
}
let primo = numero => {
    if (numero < 1) {
        return "no es primo"
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) return "no es primo"
    }
    return "es primo"
}
respuesta = numero => {
    console.log(`${numero} ${primo(numero)}, ${fibonacci(numero)} y ${par(numero)}`)
}

respuesta(7)

