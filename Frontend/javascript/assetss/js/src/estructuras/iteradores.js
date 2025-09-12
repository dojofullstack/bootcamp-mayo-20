
// iteradores.js
console.log("load iteradores.js");

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js", "django", "python"];


//forloop que el clasico iterador
for ( let contador = 0; contador < tecnologias.length; contador++) {

    const elemento = tecnologias[contador];

    // if (elemento === "React") {
    //     console.log("encontre React, saliendo del for");
    //     break;
    // }

    if (elemento === "Node.js") {
        console.log("encontre Node.js, saltando a la siguiente iteracion");
        continue;
    }

    console.log("hola iterando",  elemento);

}

// breakpoints
// break y continue

// for of
// for in
// forEach
// map


// iterador while

let companeros_juego = 5;

while (companeros_juego > 0) {

    if (companeros_juego === 2) {
        console.log("solo quedan algunos compañero de juego, saliendo del while");
        break;
    }

    console.log("Quedan", companeros_juego, "compañeros de juego");

    companeros_juego--;
}