/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */

const piedraPapelTijeraLagartoSpoke = (arr) => {
    let player1 = 0;
    let player2 = 0;
    arr.forEach(element => {
        if (element.includes("🗿") && (element.includes("✂️") || element.includes("🦎"))) {
            element.indexOf("🗿") == 0 ? player1++ : player2++
        }
        if (element.includes("✂️") && (element.includes("🦎") || element.includes("📄"))) {
            element.indexOf("✂️") == 0 ? player1++ : player2++
        }
        if (element.includes("🦎") && (element.includes("🖖") || element.includes("📄"))) {
            element.indexOf("🦎") == 0 ? player1++ : player2++
        }
        if (element.includes("🖖") && (element.includes("🗿") || element.includes("✂️"))) {
            element.indexOf("🖖") == 0 ? player1++ : player2++
        }
        if (element.includes("📄") && (element.includes("🖖") || element.includes("🗿"))) {
            element.indexOf("📄") == 0 ? player1++ : player2++
        }
    });
    if (player1 == player2) return 'empate';
    if (player1 > player2) return 'gano player1';
    if (player1 < player2) return 'gano player2';
}
// Partida 1, deberia ganar el Jugador 2
console.log(piedraPapelTijeraLagartoSpoke([["🗿", "✂️"], ["🗿", "🗿"], ["✂️", "🗿"], ["📄", "✂️"]]))
// Partida 2, deberia salir Empate
console.log(piedraPapelTijeraLagartoSpoke([["🗿", "✂️"], ["✂️", "🗿"]]))
// Partida 3, deberia ganar el Jugador 1
console.log(piedraPapelTijeraLagartoSpoke([["🖖", "✂️"], ["🦎", "📄"], ["🦎", "📄"]]))