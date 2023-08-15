let contadorDeNumeros = () => {
    for (let contador = 1; contador <= 100; contador++) {
        if (contador % 3 == 0 && contador % 5 == 0) console.log("fizzbuzz");
        if (contador % 3 == 0) console.log("fizz");
        if (contador % 5 == 0) console.log("buzz");
        if (!((contador % 3 == 0 && contador % 5 == 0) || contador % 3 == 0 || contador % 5 == 0)) console.log(contador)
    }
}
contadorDeNumeros()