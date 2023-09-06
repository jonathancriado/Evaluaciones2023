function numLetrasOcultas(palabra) {
    let numDeLetrasOcultas = Math.floor(palabra.length * 0.6);   
    return numDeLetrasOcultas;
}
console.log(numLetrasOcultas("atardecer"));