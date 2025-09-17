
console.log("load funciones.js");

function procesarFormulario(email, password, verificarEmail=false, callbackNotificacion) {
    console.log("Procesando formulario con los siguientes parámetros:", email, password, verificarEmail);
    
    if (verificarEmail) {
        // lógica para verificar el email
        console.log("Verificando email:", email);
        const emailValido = email.includes("@");
        if (!emailValido) {
            return "Email no es válido";
        }
        console.log("Email verificado correctamente");
        outputCallabck = callbackNotificacion(email);
        console.log("Output del callback de notificación:", outputCallabck);
        return "Formulario procesado correctamente con verificación de email";
    }

}


function saludarUsuario(email, nombre="invitado") {
    return `Hola ${nombre}, bienvenido al sistema. Tu email es: ${email}`;
}



// const outputFormulario = procesarFormulario("carlos@gmail.com", "pass******", verificarEmail=true);


// console.log(outputFormulario);


// const saludo = saludarUsuario("Carlos");

// console.log(saludo);


// prueba con callback
const outputFormulario = procesarFormulario("carlos@gmail.com", "pass******", verificarEmail=true, saludarUsuario);


const outputFormulario2 = procesarFormulario("henry@gmail.com", "pas1123s******", verificarEmail=true, () => {
    console.log("Hola desde el callback anónimo");
} );
