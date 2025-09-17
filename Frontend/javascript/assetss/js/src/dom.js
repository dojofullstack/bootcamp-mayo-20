

console.log("load dom.js");

// DOM - Document Object Model
// es una interfaz de programación para los documentos HTML y XML. Proporciona una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código.

// getElementById
// getElementsByClassName
// getElementsByTagName

// querySelector()
// querySelectorAll()


const titleBlog  = document.getElementById("title-blog");
titleBlog.innerHTML = "Nuevo título del blog desde JavaScript";

titleBlog.style.backgroundColor = "purple";
titleBlog.style.color = "white";
titleBlog.style.padding = "10px";

const elementosClase = document.getElementsByClassName("post");
console.log(elementosClase[1]);


const elementosPost = document.querySelectorAll(".post");
console.log(elementosPost[0]);



// document.addEventListener("click", () => {
//     console.log("click en el documento");
// });


const botonCargarMas = document.getElementById("load-more-btn");



// botonCargarMas.addEventListener("click", () => {
//     console.log("click en el boton cargar más");
// });


document.createElement("button");