
console.log("load tipos_funciones.js");

// 3 tipos de funciones en JavaScript

// declarativas
function miFuncionDeclarativa() {
    console.log("Hola soy una función declarativa");
}

// expresion
const miFuncionExpresion = function() {
    console.log("Hola soy una función de expresión");
    return "retorno de la función de expresión";
}

// console.log(miFuncionExpresion());


// arrow function (función flecha)

const miFuncionFlecha = () => {
    console.log("Hola soy una función flecha");
    return "retorno de la función flecha";
}

console.log(miFuncionFlecha());