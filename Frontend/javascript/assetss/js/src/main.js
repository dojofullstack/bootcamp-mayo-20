/**
 * MÓDULO: TIPOS DE DATOS Y OPERACIONES BÁSICAS EN JAVASCRIPT
 * 
 * Este módulo cubre los fundamentos de JavaScript incluyendo:
 * - Tipos de datos primitivos (number, string, boolean, null, undefined)
 * - Tipos de datos complejos (array, object)
 * - Operaciones aritméticas básicas y abreviadas
 * - Métodos comunes de strings y arrays
 * - Manipulación de objetos y sus propiedades
 * - Introducción a funciones básicas
 * 
 * Objetivo: Comprender el sistema de tipado dinámico de JavaScript
 * y las operaciones fundamentales con cada tipo de dato.
 */

console.log("load main.js");

// tipos de datos
// JS en un lenguaje de tipado dinámico
// number
// string
// boolean tiene 2 opciones: si o no, true y false
// null
// undefined
// array
// object

// function


// number
let puntajeJuego = 10;
let precioJuego = 29.99;

// operaciones basicas
console.log(puntajeJuego + 12);
puntajeJuego = puntajeJuego + 12;
console.log(puntajeJuego - 12);
puntajeJuego = puntajeJuego - 12;
console.log(puntajeJuego * 12);
console.log(puntajeJuego / 12);

// forma abreviada
puntajeJuego += 1;
console.log(puntajeJuego += 12);
console.log(puntajeJuego -= 12);
console.log(puntajeJuego *= 12);
console.log(puntajeJuego /= 12);

// typeof

console.log(typeof puntajeJuego);
console.log(typeof precioJuego);

// parseFloat(precioJuego);

console.log(precioJuego);

console.log(parseInt(precioJuego));
console.log(parseFloat(puntajeJuego));
// Number()



// Tipo de dato string
let nombreJuego = "Pokemon v.3";
let desarrolladorJuego = "Game Freak";

typeof nombreJuego;

// nombreJuego + desarrolladorJuego

// formateo de datos o string
// se usa la comilla invertida o backtick `
console.log(`
                El juego ${nombreJuego}
                fue desarrollado por
                ${desarrolladorJuego}
                `);

// nombreJuego.concat(" es un gran juego");

// metodos comunes
console.log(nombreJuego.toUpperCase());
console.log(nombreJuego.toLowerCase());
console.log(nombreJuego.length);
console.log(nombreJuego.includes("v.3"));
let nombreJuegoReemplace = nombreJuego.replace("v.3", "versión 3");
// console.log(nombreJuegoReemplace);

console.log(nombreJuego);
console.log(nombreJuego.indexOf("P9k3"));
console.log(nombreJuego.endsWith("v.3"));
console.log(nombreJuego.startsWith("Poke"));

const texto = "Mi correo es ejemplo@dominio.com. Puedes contactarme en info@sitio.org        ";
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const resultado = texto.search(regex);
// console.log(resultado);


// texto.split(" ");
texto.trim(); // elimina espacios al inicio y al final
texto.slice(3, 10); // extrae una parte del string


// tipo de dato boolean
let esJuegoFavorito = true;
let tieneExpansiones = false;

console.log(typeof esJuegoFavorito);
console.log(typeof tieneExpansiones);


// tipos especiales
// null
// undefined

let valorNulo = null;
console.log(typeof valorNulo); // object (bug de JS)

let NombreJugador;

console.log(typeof NombreJugador);

NombreJugador = "henry gamer";

console.log(typeof NombreJugador);

/// tipo de dato array
const juegosFavoritos = ["Zelda", "Mario", "Metroid", "Pokemon"];
console.log(typeof juegosFavoritos); // object

console.log(juegosFavoritos);

// RALIZAR OPERACIONES CON EL ARRAY
juegosFavoritos.push("Kirby"); // agrega un elemento al final

console.log(juegosFavoritos);

juegosFavoritos.unshift("Donkey Kong"); // agrega un elemento al inicio

console.log(juegosFavoritos);

juegosFavoritos.pop(); // elimina el ultimo elemento

console.log(juegosFavoritos);

juegosFavoritos.shift(); // elimina el primer elemento

console.log(juegosFavoritos);

console.log(juegosFavoritos.length); // cantidad de elementos del array


console.log(juegosFavoritos[0]); // acceder a un elemento por su indice
console.log(juegosFavoritos[2]); 
console.log(juegosFavoritos[juegosFavoritos.length - 1]); // ultimo elemento

juegosFavoritos[0] = "Animal Crossing"; // modificar un elemento por su indice
juegosFavoritos[2] = "Final Fantasy";

console.log(juegosFavoritos);


console.log(juegosFavoritos.concat(["pikachu", "charizar"])); // une dos arrays
juegosFavoritos.push("pikachu", "charizar", "beathifull"); // agrega varios elementos al final

juegosFavoritos.splice(2, 1); // elimina elementos por su indice
console.log(juegosFavoritos);


console.log( juegosFavoritos.includes("charizar")); // verifica si un elemento existe en el array


// juegosFavoritos.filter
// juegosFavoritos.map
// juegosFavoritos.forEach


// tipo de dato object
const juego = {
        niveles: 10,
        nombre: "Zelda",
        desarrollador: "Nintendo",
        genero: "Aventura",
        esFavorito: true,
        plataformas: ["Switch", "Wii", "GameCube"],
        detalles: {
                lanzamiento: 1998,
                ventas: 1000000
        },
        resenas: null,
        // mostrarInfo: function() {
        //         console.log(`El juego ${this.nombre} fue desarrollado por ${this.desarrollador}`);
        // },
        // registrarUsuario: function(nombreUsuario) {
        //         console.log(`El usuario ${nombreUsuario} ha registrado el juego ${this.nombre}`);
        // }
}

console.log(typeof juego); // object
console.log(juego);


console.log(juego.niveles);
console.log(juego["niveles"]);

console.log(juego.plataformas);
// console.log(juego.plataformas[0]);  

console.log(juego.genero);
console.log(juego.detalles.lanzamiento);

juego.rating = 4.5; // agregar una nueva propiedad

juego.genero = "Accion";

// eliminar una propiedad
delete juego.resenas;
// delete juego["resenas"]

console.log(juego);



// function
function mostrarInfoJuego(juego) {
        console.log(`El juego ${juego.nombre} fue desarrollado por ${juego.desarrollador}`);
}


// mostrarInfoJuego(juego);