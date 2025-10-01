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


const pokemones = ["Pikachu", "Charizar", "Bulbasaur", "Squirtle",  "Eevee", "Snorlax", "Mewtwo", "Gengar", "Dragonite", "Moltres", "Zapdos", "Articuno"];

const pokeDex = [];


function obtenerInfoPokedex(nombrePokemon) {
    console.log("hola desde el obtenerInfoPokedex", nombrePokemon);

    axios.get('https://pokeapi.co/api/v2/pokemon/' + nombrePokemon.toLowerCase())
    .then(result => {
        console.log("result", result.data);
        pokeDex.push(result.data);
    })
    .catch(err => console.error(err.message));

    return `Info de ${nombrePokemon} obtenida`;

}




// console.log("pokemones", pokemones);
// pokemones.forEach(obtenerInfoPokedex);
// console.log("Despues del forEach", pokeMap);

// console.log("pokemones", pokemones);
// const pokeMap = pokemones.map(obtenerInfoPokedex);
// console.log("Despues del map", pokeMap);


// console.log("pokeDex", pokeDex);
// setTimeout(() => {
//     console.log("pokeDex", pokeDex);

//     let htmlDiv = "";

//     pokeDex.forEach(pokemon => {
//         htmlDiv += `
//             <div class="pokemon-card">
//                 <h3>${pokemon.name}</h3>
//                 <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
//                 <p>Category: ${pokemon.category || 'N/A'}</p>
//             </div>
//         `;
//     });

//     document.querySelector("#poke-container").innerHTML = htmlDiv;

// }, 4000);






// ejemplo con map

// console.log( pokemones.map(getPokemonImportantFields));
//



const pokemonesTipos = [
    { nombre: "Pikachu", tipo: "Eléctrico" },
    { nombre: "Charizar", tipo: "Fuego" },
    { nombre: "Bulbasaur", tipo: "Planta" },
    { nombre: "Squirtle", tipo: "Agua" },
    { nombre: "Eevee", tipo: "Normal" },
    { nombre: "Snorlax", tipo: "Normal" },
    { nombre: "Mewtwo", tipo: "Psíquico" },
    { nombre: "Gengar", tipo: "Fantasma" },
    { nombre: "Dragonite", tipo: "Dragón" },
    { nombre: "Moltres", tipo: "Fuego" },
    { nombre: "Zapdos", tipo: "Eléctrico" },
    { nombre: "Articuno", tipo: "Hielo" }
]


const pokemonesFuego = pokemonesTipos.filter( (item) => {
    return item.tipo === "Fuego";
});


console.log("pokemonesFuego", pokemonesFuego);


const productos = [
  { nombre: "Laptop", precio: 800, stock: 0 },
  { nombre: "Mouse", precio: 20, stock: 15 },
  { nombre: "Teclado", precio: 50, stock: 8 },
  { nombre: "Monitor", precio: 200, stock: 0 }
];

const disponibles = productos.filter(prod => prod.stock > 0);
console.log("Productos disponibles:", disponibles);


// EJEMPLO 4: Filtrar palabras largas
const palabras = ["sol", "mariposa", "luz", "computadora", "aire"];
const palabrasLargas = palabras.filter(palabra => palabra.length > 5);
console.log("Palabras largas:", palabrasLargas); // ["mariposa", "computadora"]