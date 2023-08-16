function divideNumbers(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Ambos parámetros deben ser números');
        }

        if (b === 0) {
            throw new Error('No es posible dividir por cero');
        }

        return a / b;
    } catch (error) {
        console.log('Ocurrió un error:', error.message);
        // También podrías lanzar el error nuevamente si quieres que se propague hacia arriba.
    }
}

console.log(divideNumbers(10, 2));  // Resultado: 5
console.log(divideNumbers(10, 0));  // Imprimirá el mensaje de error por la división entre cero
console.log(divideNumbers('a', 5)); 