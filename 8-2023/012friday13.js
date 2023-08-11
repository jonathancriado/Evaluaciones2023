/*
 * Crea una función que sea capaz de detectar si existe un viernes 13 en el mes y el año indicados.
 * - La función recibirá el mes y el año y retornará verdadero o falso.
 */
let friday13 = (year, month) => {
    const date = new Date(year, month, day = 13);
    let result = date.getDay() === 5 ? true : false
    return result
}
console.log(friday13(2024, 11))