
// paquetes nativos de JS
// paquetes de terceros (instalados via npm y CDN)

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

const producto = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    brand: "Apple",
    category: "smartphones"
};


console.log(JSON.stringify(producto)); // convierte objeto JS a JSON string

// convierte JSON string a objeto JS
const productoJSON = '{"id":1,"title":"iPhone 9","description":"An apple mobile which is nothing like apple","price":549,"brand":"Apple","category":"smartphones"}';

console.log(JSON.parse(productoJSON));



// paquetes de terceros axios

// axios.get('https://dummyjson.com/products/1')
//     .then(res => console.log(res.data))
//     .catch(console.error);



// const nuevoProductoPhone = {
//     title: 'Samsung Galaxy S21',
//     description: 'Latest Samsung flagship smartphone with advanced features',
//     price: 799,
//     brand: 'Samsung',
//     category: 'smartphones'
// };

// axios.post('https://dummyjson.com/products/add', nuevoProductoPhone)
//     .then(res => console.log("producto agregado", res.data))
//     .catch(console.error);



// axios.put('https://dummyjson.com/products/1', {
//     title: 'iPhone Galaxy Dojo'
// })
//     .then(res => console.log("producto actualizado", res.data))
//     .catch(console.error);




// axios.delete('https://dummyjson.com/products/1')
//     .then(res => console.log("producto eliminado", res.data))
//     .catch(console.error);


// libreria chartjs


const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Pink'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3, 7],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'pie',
  data: data,
};



new Chart(
    ctx,
    config
)


//  window.paypalLoadScript({
//     clientId: "test",
//     currency: "USD",
//   }).then((paypal) => {
//                 paypal.Buttons(
//                     {
//                         createOrder: function (data, actions) {
//                             return actions.order.create({
//                                 purchase_units: [{
//                                     amount: {
//                                         value: '10'
//                                     },
//                                     description: 'Bolsa de alta moda',
//                                     custom_id: 'CUST-HighFashions',
//                                     quantity: 1
//                                 }]
//                             });
//                         },
//                         onApprove: function (data, actions) {
//                             return actions.order.capture().then(function (details) {
//                                 alert('Transaction completed by ' + details.payer.name.given_name);
//                                 // Call your server to save the transaction
//                             });
//                         }
//                     }
//                  ).render("#paypal-buttons");
//             });



// paypal boton con sucripcion de 3 usd/ mes
// configurar  vault=true 



    window.paypalLoadScript({
    clientId: "test",
    currency: "USD",
    vault: true
  }).then((paypal) => {
                paypal.Buttons(
                    {
                        createSubscription: function (data, actions) {
                            return actions.subscription.create({
                                'plan_id': 'P-5ML4271244454362WXNWU5NQ' // Replace with your plan ID
                            });
                        },
                        onApprove: function (data, actions) {
                            alert('You have successfully created a subscription with ID: ' + data.subscriptionID);
                            // Call your server to save the subscription
                        }
                    }
                 ).render("#paypal-buttons");
            });



