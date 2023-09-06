function numVecesLetraRepite(palabra, letra) {
    const arrPalabra = palabra.split("");
    let contadorRepeticionesLetra = 0;

    arrPalabra.forEach(elem => { 
        if (elem === letra) contadorRepeticionesLetra++
    });
    return contadorRepeticionesLetra;
}
console.log(numVecesLetraRepite("atardecer", "e"))