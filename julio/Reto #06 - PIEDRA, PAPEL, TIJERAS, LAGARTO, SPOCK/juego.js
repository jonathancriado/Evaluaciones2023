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