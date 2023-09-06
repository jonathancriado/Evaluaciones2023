function objIndexLetras(palabra, letra) {
    const arrPalabra = palabra.split("");
    const indexLetras = {}

    for (let i = 0; i < arrPalabra.length; i++) {
        if (arrPalabra[i] === letra) {
            indexLetras[i] = arrPalabra[i];
        }
    }
    return indexLetras;
}

console.log(objIndexLetras("palabra", "l"))