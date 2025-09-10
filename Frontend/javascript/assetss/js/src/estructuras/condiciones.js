
// condiciones en Javascript

let condicion = true;

let email = "carlos-ejemplo.com";

if ( condicion ) {
    console.log("La condicion es verdadera, el bloque de codigo se ejecuta");
}


if ( email.includes("@") ) {
    console.log("El email es válido");
} else {
    console.log("El email NO es válido, por favor revisar");
    // alert("El email NO es válido, por favor revisar");
}


puntajeJuego = 100;
// if anidados

if ( puntajeJuego === 100 ) {
    console.log("¡Felicidades! Has alcanzado el puntaje máximo.");
} else if ( puntajeJuego === 0){
    console.log("No tienes puntaje, intenta de nuevo");
} else if( puntajeJuego > 60 ) {
    console.log("obtuviste un punto extra, sigue avanzando");
} else if( puntajeJuego >= 90 ){
    console.log("obtuviste una ESTRELLA, PASA AL SIGUIENTE NIVEL");
} else {
    console.log("Lo siento, perdiste, intenta de nuevo");
}