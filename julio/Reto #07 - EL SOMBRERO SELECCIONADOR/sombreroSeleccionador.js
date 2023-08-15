const questionsAndAnswers = [
    {
        question: "¿Cómo te definirías?",
        answer: [
            ["1. Valiente", "gryffindor"],
            ["2. Leal", "hufflepuff"],
            ["3. Sabio", "ravenclaw"],
            ["4. Ambicioso", "slytherin"]
        ]
    },
    {
        question: "¿Cuál es tu clase favorita?",
        answer: [
            ["1. Vuelo", "gryffindor"],
            ["2. Pociones", "ravenclaw"],
            ["3. Defensa contra las artes oscuras", "slytherin"],
            ["4. Animales fantásticos", "hufflepuff"]
        ]
    },
    {
        question: "¿Dónde pasarías más tiempo?",
        answer: [
            ["1. Invernadero", "hufflepuff"],
            ["2. Biblioteca", "ravenclaw"],
            ["3. En la sala común", "slytherin"],
            ["4. Explorando", "gryffindor"]
        ]
    },
    {
        question: "¿Cuál es tu color favorito?",
        answer: [
            ["1. Rojo", "gryffindor"],
            ["2. Azul", "ravenclaw"],
            ["3. Verde", "slytherin"],
            ["4. Amarillo", "hufflepuff"]
        ]
    },
    {
        question: "¿Cuál es tu mascota?",
        answer: [
            ["1. Sapo", "ravenclaw"],
            ["2. Lechuza", "gryffindor"],
            ["3. Gato", "hufflepuff"],
            ["4. Serpiente", "slytherin"]
        ]
    },
];
const houses = {
    "ravenclaw": 0,
    "gryffindor": 0,
    "hufflepuff": 0,
    "slytherin": 0,
};
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { Console } = require('node:console');
const rl = readline.createInterface({ input, output });
let preguntaNumero = 0;
function preguntar() {
    if (preguntaNumero < questionsAndAnswers.length) {
        let pregunta = questionsAndAnswers[preguntaNumero].question
        console.log(pregunta)
        let opciones = questionsAndAnswers[preguntaNumero].answer
        opciones.forEach(elem => console.log(elem[0]))
        rl.question("Seleccione una opcion: ", respuesta => {
            if (Number(respuesta) > 0 && Number(respuesta) < 5) {
                let posicionOpcionSeleccionada = questionsAndAnswers[preguntaNumero].answer[Number(respuesta) - 1][1];
                if (preguntaNumero === 1) {
                    if (posicionOpcionSeleccionada === "ravenclaw") houses["ravenclaw"] += 5;
                    if (posicionOpcionSeleccionada === "gryffindor") houses["gryffindor"] += 5;
                    if (posicionOpcionSeleccionada === "hufflepuff") houses["hufflepuff"] += 5;
                    if (posicionOpcionSeleccionada === "slytherin") houses["slytherin"] += 5;
                    preguntaNumero++;
                    preguntar();
                } else {
                    if (posicionOpcionSeleccionada === "ravenclaw") houses["ravenclaw"] += 3;
                    if (posicionOpcionSeleccionada === "gryffindor") houses["gryffindor"] += 3;
                    if (posicionOpcionSeleccionada === "hufflepuff") houses["hufflepuff"] += 3;
                    if (posicionOpcionSeleccionada === "slytherin") houses["slytherin"] += 3;
                    preguntaNumero++;
                    preguntar();
                }
            } else {
                console.log("Tu respuesta tiene que ser 1, 2, 3 o 4")
                preguntar()
            };
        });
    }
    if (preguntaNumero >= questionsAndAnswers.length) {
        return finalizar();
    };
}
function finalizar() {
    let arrayHousesValues = Object.values(houses)
    let numeroGanador = Math.max(...arrayHousesValues)
    let arrayHousesKeys = Object.keys(houses)
    let casaGanadora = arrayHousesKeys.find(key => houses[key] === numeroGanador)
    console.log(`Te pondré en ¡¡${casaGanadora}!!`)
    return rl.close();
}
preguntar()