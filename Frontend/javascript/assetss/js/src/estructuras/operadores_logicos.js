
// OPERADORES LOGICOS
// && AND
// || OR
// ! NOT

// tabla de verdad AND
// true && true = true
// true && false = false
// false && true = false
// false && false = false

let email = "carlos@ejemplo.com";
let firstName = "Juan";
let object3 = false;
let object4 = false;

email && firstName && object3 && object4;

// tabla de verdad OR
// true || true = true
// true || false = true
// false || true = true
// false || false = false

email = false;
firstName = false;
email || firstName || object3 || object4;

let username = "juan1223";

let nickname = firstName || username;
console.log(nickname); // Juan


// combinar operadores and y or

let whatsapp = "519999999";
email = "henry@gmail.com"
password = null;

const loginMethod =  email && password || whatsapp;
console.log(Boolean(loginMethod)); // true


// operador de negacion ! NOT
let isActive = false;
let isMemberPremium = true;

// if (!isMemberPremium) {
//     console.log("no es miembro premium, enviar notificacion por email");
// }


/// operadores logicos ? Encadenamiento 

const persona = {
    nombre: "Carlos",
    edad: 30,
    // pasatiempos: {
    //     deporte: "futbol",
    //     musica: "rock"
    // },
}

// persona.pasatiempos.deporte; // futbol

persona?.pasatiempos?.deporte;


// operadoradores de comparacion
// == igualdad flex
// === igualdad estricta
let nombre = "carlos";
let edad = 20;
nombre === "carlos"
edad === 20

// !== diferente estricto
nombre !== "Pedro"

edad > 10;
edad < 10;
edad >= 18;
edad <= 18;