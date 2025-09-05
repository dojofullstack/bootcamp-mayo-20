
console.log("Inicio del programa control de errores");

// console.log(hola);

// control de errores
// try {
//     console.log("hola mundo");
//     console.log(hola);
// } catch (error) {
//     console.log("Se produjo un error:");
//     console.log(error);
// }


try {
    console.log("Consulat api pokemnos");
    // consultar api GET https://pokeapi.co/api/v2/pokemon/pikachu

    // fallo la consulta
    const resultado = null; 
    throw "fallo la consulta del api";
} catch (error) {
    console.log("Se produjo un error:");
    console.log(error);
}



try {
    let hola = "Hola mundo";
    console.log("hola mundo");
    console.log(hola);

} catch (error) {
    console.log("Se produjo un error:");
    console.log(error);
} finally {
    console.log("El bloque finally siempre se ejecuta");
}


console.log("Enviar saludo al usuario");