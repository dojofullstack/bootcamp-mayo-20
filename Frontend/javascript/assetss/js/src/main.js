

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
