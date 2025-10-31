console.log("load stripe-payment.js");

// Configuración de Stripe
// IMPORTANTE: Reemplaza esta clave con tu propia clave pública de Stripe
// Obtén tu clave en: https://dashboard.stripe.com/test/apikeys
const STRIPE_PUBLIC_KEY = 'pk_test_51SO7H18WKHDD9kY2gU0RMVAeTbQab1DhnR4e7sTGhcVLBCe6JE4ZdTTyhao5ZdWNZWM6OXusqCIJEA0nF8cLNYqS00dhQXpVmj';

// Inicializar Stripe
const stripe = Stripe(STRIPE_PUBLIC_KEY);

// Crear elementos de Stripe con estilos personalizados
const elements = stripe.elements();

// Estilos personalizados para el campo de tarjeta
const cardStyle = {
    style: {
        base: {
            color: '#32325d',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    }
};

// Crear el elemento de tarjeta
const cardElement = elements.create('card', cardStyle);

// Montar el elemento de tarjeta en el DOM
cardElement.mount('#card-element');

// Manejar cambios en tiempo real (validación)
cardElement.on('change', (event) => {
    const displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});



// Manejar el envío del formulario
const form = document.getElementById('payment-form');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    // Deshabilitar el botón para evitar múltiples envíos
    submitButton.disabled = true;
    submitButton.classList.add('loading');

    // Obtener información adicional del formulario
    const nameInput = document.getElementById('cardholder-name');
    const emailInput = document.getElementById('email');

    try {
        // Crear método de pago
        const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                name: nameInput.value,
                email: emailInput.value,
            },
        });

        if (error) {
            // Mostrar error al usuario
            showError(error.message);
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
        } else {
            // ¡Éxito! El método de pago ha sido creado
            console.log('PaymentMethod created:', paymentMethod);
            
            // AQUÍ es donde normalmente enviarías el paymentMethod.id a tu servidor
            // para procesar el pago
            
            // Ejemplo de lo que harías en producción:
            // const response = await fetch('/api/process-payment', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({
            //         payment_method_id: paymentMethod.id,
            //         amount: 1999, // $19.99 en centavos
            //     })
            // });
            
            // Para este ejemplo educativo, simularemos un pago exitoso
            simulatePaymentSuccess(paymentMethod);
        }
    } catch (err) {
        console.error('Error al procesar el pago:', err);
        showError('Ocurrió un error inesperado. Por favor intenta de nuevo.');
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
});

// Función para mostrar errores
function showError(message) {
    const errorElement = document.getElementById('card-errors');
    errorElement.textContent = message;
    
    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
        errorElement.textContent = '';
    }, 5000);
}

// Función para simular un pago exitoso (solo para demostración)
function simulatePaymentSuccess(paymentMethod) {
    console.log('✅ Pago procesado exitosamente!');
    console.log('Payment Method ID:', paymentMethod.id);
    console.log('Últimos 4 dígitos:', paymentMethod.card.last4);
    console.log('Marca:', paymentMethod.card.brand);
    
    // Mostrar mensaje de éxito
    const successMessage = document.getElementById('success-message');
    successMessage.classList.add('show');
    
    // Resetear el formulario
    form.reset();
    cardElement.clear();
    
    // Habilitar el botón nuevamente
    submitButton.disabled = false;
    submitButton.classList.remove('loading');
    
    // Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

// Funcionalidad adicional: Detectar marca de tarjeta
cardElement.on('change', (event) => {
    if (event.brand) {
        console.log('Marca de tarjeta detectada:', event.brand);
        // Aquí podrías mostrar el icono de la marca de tarjeta
    }
});

// Prevenir copiar/pegar en campos sensibles (opcional, para mayor seguridad)
// Descomenta si quieres esta funcionalidad
/*
document.getElementById('card-element').addEventListener('paste', (e) => {
    e.preventDefault();
    showError('Por seguridad, no se permite pegar en este campo');
});
*/

console.log('✅ Sistema de pagos Stripe inicializado correctamente');
