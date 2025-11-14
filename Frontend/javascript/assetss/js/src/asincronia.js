
console.log("asincronia js cargado");

// metodos asicronicos


// console.log("Inicio del proceso asíncrono");
// setTimeout(
//     () => {
//         // console.log("Consultado API DE MENSAJES NUEVOS");
//         console.log("ABRIR CHATBOT, SALUDAR");
//     },
//     3000
// );
// console.log("FINAL del proceso asíncrono");



// setInterval(
//     () => {
//         const fecha = new Date();
//         console.log("Hora actual:", fecha.toLocaleTimeString());
//     },
//     2000
// );



// primer paso crear una promesa
function obtenerNotificaciones() {

    return new Promise((resolve, reject) => {


        // CALLBACK SIMULADO durante 3s
        setTimeout(() => {
            const TASK_COMPLETED = false;
            if (TASK_COMPLETED) {
                resolve("Notificaciones obtenidas correctamente.");
            } else {
                reject("Error al obtener notificaciones.");
            }
        }, 3000)

    })

}


// sefundo paso consumir la promesa (2 formas asincricas)

// metodo 1 .then y catch
// metodo 2 async y await

console.log("Solicitando notificaciones...");
// obtenerNotificaciones().
//     then((mensaje) => console.log("MENSAJE RECIBIDO", mensaje)).
//     catch((error) => console.error("MENSAJE RECIBIDO:", error));
// console.log("Proceso de solicitud de notificaciones en curso...");


async function manejarNotificaciones() {
    console.log("Solicitando notificaciones...");
    try {
        console.log("Bloqueado hasta obtener notificaciones...");
        const mensaje = await obtenerNotificaciones();
        console.log("MENSAJE RECIBIDO:", mensaje);
    } catch (error) {
        console.error("MENSAJE RECIBIDO:", error);
    }
}

function helloWorld(arg){
    console.log("Hello World desde asincronia.js", arg);
}

// helloWorld(1);
// helloWorld(2);
// helloWorld(3);

console.log("Iniciando manejo de notificaciones...");
manejarNotificaciones();
manejarNotificaciones();
manejarNotificaciones();
manejarNotificaciones();
manejarNotificaciones();
manejarNotificaciones();
console.log("Iniciando manejo de notificaciones...");

// manejarNotificaciones(2);
// manejarNotificaciones(3);
// manejarNotificaciones(4);