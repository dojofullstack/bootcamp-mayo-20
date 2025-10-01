

//  forEach y map (pendiente)
// filter()

log("load tipos_iteradoradores_for.js");

const pokemones = ["Pikachu", "Charizar", "Bulbasaur", "Squirtle"];

// pokemones.forEach
// pokemones.map
// pokemones.filter


function fusionarPokemon(elemento) {
    console.log("hola desde el fusionarPokemon", elemento);
    return elemento + " fusionado";
}


pokemones.forEach(fusionarPokemon);
