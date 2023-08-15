function puntosHasta40(secuenciaDePuntos) {
    let puntajeP1 = 0;
    let puntajeP2 = 0;
    const puntos = ["Love", 15, 30, 40]

    for (let i = 0; i < secuenciaDePuntos.length; i++) {
        if (secuenciaDePuntos != [] && (secuenciaDePuntos[i] == "P1" || secuenciaDePuntos[i] == "P2")) {
            let puntuacionActual = "";
            secuenciaDePuntos[i] == "P1" ? puntajeP1++ : puntajeP2++
            if (puntajeP1 >= 3 && puntajeP2 >= 3) {
                if (puntajeP1 == puntajeP2) puntuacionActual = "Deuce"
                if (puntajeP1 > puntajeP2) puntuacionActual = "Ventaja P1"
                if (puntajeP1 < puntajeP2) puntuacionActual = "Ventaja P2"
            } else {
                puntuacionActual = `${puntos[puntajeP1]} - ${puntos[puntajeP2]}`
            }
            if (puntajeP1 >= 4 && puntajeP1 - puntajeP2 >= 2) {
                puntuacionActual = "Victoria P1"
            } else if (puntajeP2 >= 4 && puntajeP2 - puntajeP1 >= 2) {
                puntuacionActual = "Victoria P2"
            }
            console.log(puntuacionActual)
        }
    }
}
puntosHasta40(["P1", "P1", "P1", 2, "P2", "P1", "AS", "P1", "P2"])
// puntosHasta40(["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"])
// puntosHasta40(["P1", "P2", "P1", "P2", "P1", "P2", "P1", "P2", "P2", "P1"])
