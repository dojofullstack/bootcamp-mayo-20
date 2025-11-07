

// Tipos de almacenamiento en JavaScript
// LocalStorage y Cookies (basadas en escritura)

// States (basada en memoria)


// LocalStorage

localStorage.setItem('nombre', 'Juan');
localStorage.setItem('email', 'Juan@gmail.com');
localStorage.setItem('nombre', 'henry');


localStorage.removeItem('email');

const name =  localStorage.getItem('nombre');

console.log(name);

console.log(localStorage);

const customTheme = {
    theme: 'dark',
    fontSize: '16px',
    showSidebar: true
}

const profile = {
    name: 'Juan',
    age: 30,
    email: 'Juan@gmail.com'
}


localStorage.setItem('customTheme', JSON.stringify(customTheme));

localStorage.setItem('profile', JSON.stringify(profile));


// Cookies

document.cookie = "marketingTTracking=001920192121; path=/";


// eliminar cookie o autoexpire
document.cookie = "marketingTTracking=73763762736273672; path=/; expires=Fri, 31 Dec 2024 23:59:59 GMT";


// const dateExpires = "Fri, 03 Dec 2025 23:59:59 GMT"
const dateExpires = new Date();
console.log(dateExpires);
const horaExpires = dateExpires.getTime() + 60*60*1000; // 1 hora en milisegundos
dateExpires.setTime(horaExpires);
console.log(dateExpires);


document.cookie = "sessionId=$3535542154251; path=/; expires=".concat(dateExpires.toUTCString());

console.log(document.cookie);


// generar funcion que obtenga lo cookie

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const cookiePair = cookies[i].split('=');
        if (cookiePair[0] === name) {
            return cookiePair[1];
        }
    }
    return null;
}

const sessionId = getCookie('sessionId');
console.log('Session ID:', sessionId);