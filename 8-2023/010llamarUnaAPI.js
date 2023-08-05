/*
 * Llamar a una API es una de las tareas más comunes en programación.
 *
 * Implementa una llamada HTTP a una API (la que tú quieras) y muestra su
 * resultado a través de la terminal. Por ejemplo: Pokémon, Marvel...
 *
 * Aquí tienes un listado de posibles APIs: 
 * https://github.com/public-apis/public-apis
 */

// 1) instalar npm
// 2) npm init -y
// 3) npm install node-fetch@2

const apiUrl = 'https://rickandmortyapi.com/api/character/1';

// Solicitar la lista de películas al servidor utilizando el verbo GET
function rick() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log(`Mi nombre es ${data.name} soy el ser mas inteligente del universo. Provengo de ${data.origin.name}`))
    .catch((error) => console.error("Error al obtener películas:", error));
  
}
rick()


