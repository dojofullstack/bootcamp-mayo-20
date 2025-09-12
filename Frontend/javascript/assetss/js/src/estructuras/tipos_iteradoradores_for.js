console.log("load tipos_iteradores_for.js");

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js", "django", "python"];


//forloop que el clasico iterador
for ( let contador = 0; contador < tecnologias.length; contador++) {

    const elemento = tecnologias[contador];

    // if (elemento === "React") {
    //     console.log("encontre React, saliendo del for");
    //     break;
    // }

    if (elemento === "Node.js") {
        tecnologias[contador] = "NodeJS";
        console.log("encontre Node.js, saltando a la siguiente iteracion");
        continue;
    }

    console.log("hola iterando",  elemento);

}



console.log(tecnologias);

// breakpoints
// break y continue

// for of
// for in
// forEach
// map


// for of
// for (const elemento of tecnologias) {
//     console.log("hola iterando", elemento);
// }

// for in
for (const indice in tecnologias) {
    console.log("hola iterando con for in", tecnologias[indice]);
}

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2020,
    color: "Blanco"
};

for (const propiedad in auto) {
    console.log(`Auto ${propiedad}: ${auto[propiedad]}`);
}

// forEach
// map


const pokemones = ["Pikachu", "Charizar", "Bulbasaur", "Squirtle"];


function maquinaFusionarPokemon(elemento) {
    console.log("hola desde el maquinaFusionarPokemon", elemento);
}

pokemones.forEach(maquinaFusionarPokemon);

// pokemones.map(maquinaFusionarPokemon);


// pokemones.filter();


// maquinaFusionarPokemon("Pikachu");

