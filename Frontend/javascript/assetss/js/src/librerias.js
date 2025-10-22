
// paquetes nativos de JS
// paquetes de terceros (instalados via npm o yarn)

console.log("load libreias.js");

// metodos fetch API GET
// fetch('https://dummyjson.com/products/1').
// then(res => res.json()).
// then(res => console.log(res)).
// catch(console.error);


// metodos fetch API GET

const nuevoProducto = {
    title: 'Samsung Galaxy S21',
    description: 'Latest Samsung flagship smartphone with advanced features',
    price: 799,
    brand: 'Samsung',
    category: 'smartphones'
};

// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(nuevoProducto)})
// .then(res => res.json())
// .then(resultado => console.log("producto agregado", resultado));




/* updating title of product with id 1 */
// fetch('https://dummyjson.com/products/1', {
//   method: 'PUT', /* or PATCH */
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'iPhone Galaxy Dojo'
//   })
// })
// .then(res => res.json())
// .then(console.log);



// /* delete product    with id 1 */
// fetch('https://dummyjson.com/products/1', {
//   method: 'DELETE',
// })
// .then(res => res.json())
// .then(console.log);



// JSON METODOS
// JSON.stringify Y JSON.parse.