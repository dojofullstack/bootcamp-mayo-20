# Frontend Bootcamp - Mayo 2020

## 📋 Descripción del Proyecto

Repositorio educativo de bootcamp enfocado en la enseñanza progresiva de desarrollo web frontend. El proyecto está diseñado para guiar a los estudiantes desde los fundamentos de HTML hasta conceptos avanzados de JavaScript, con ejercicios prácticos y proyectos reales.

## 🎯 Objetivos de Aprendizaje

- Dominar la estructura semántica de HTML5
- Crear layouts modernos con CSS (Flexbox, Grid)
- Desarrollar lógica de programación con JavaScript vanilla
- Implementar frameworks CSS (Bootstrap, TailwindCSS)
- Preparación para frameworks modernos (ReactJS)
- Integración con APIs y servicios externos

## 📁 Estructura del Proyecto

```
Frontend/
├── html/                      # Módulo de HTML5
├── aprende-css/              # Módulo de CSS y Flexbox
├── javascript/               # Módulo de JavaScript vanilla
├── bootstrap/                # Módulo de Bootstrap (en preparación)
├── taildwindCSS/             # Módulo de TailwindCSS (en preparación)
├── project-mercadolibre/     # Proyecto práctico: Clon de MercadoLibre
├── project-setup/            # Configuraciones iniciales
└── take-app-clone/           # Proyecto: Clon de app de delivery
```

## 📚 Módulos de Aprendizaje

### 1️⃣ HTML (Módulo `html/`)

Ejercicios fundamentales de HTML5 con énfasis en estructura semántica.

**Archivos principales:**
- `index2.html` - Página principal de navegación
- `semantica.html` - Etiquetas semánticas (header, nav, section, article, footer)
- `formularios.html` - Formularios y elementos de entrada
- `tablas.html` - Tablas y estructuras tabulares
- `multimedia/` - Audio, video, iframes e imágenes

**Temas cubiertos:**
- Tipos de etiquetas y su uso
- Títulos, párrafos y listas
- Enlaces y navegación
- Formularios y validación
- Contenido multimedia
- Iconos y elementos enriquecidos

### 2️⃣ CSS (Módulo `aprende-css/`)

Ejemplos progresivos desde selectores básicos hasta layouts modernos.

**Archivos principales:**
- `index.html` - Selectores, pseudo-clases y especificidad
- `catalogo-flex.html` - Layout de catálogo con Flexbox
- `aprende-position.html` - Posicionamiento CSS
- `tweet.html` - Ejercicio de maquetación de tweet
- `chatgpt.html` - Ejercicio de interfaz tipo ChatGPT

**Temas cubiertos:**
- Selectores CSS (clase, ID, descendientes, pseudo-clases)
- Box Model y posicionamiento
- Flexbox para layouts responsivos
- CSS Variables (Custom Properties)
- Grid de productos y catálogos
- Diseño responsive

**CSS Variables definidas:**
```css
:root {
  --primary-color: #3498db;
  --dojofullstack: #e74c3c;
}
```

### 3️⃣ JavaScript (Módulo `javascript/`)

Arquitectura modular para aprendizaje progresivo de JavaScript vanilla.

**Estructura de archivos en `assetss/js/src/`:**

```
src/
├── app.js                    # Variables (var, let, const)
├── main.js                   # Tipos de datos primitivos
├── constantes.js             # Constantes globales (API keys)
├── funciones.js              # Funciones y callbacks
├── tipos_funciones.js        # Arrow functions, IIFE
├── dom.js                    # Manipulación del DOM
├── estructuras/              # Estructuras de control
│   ├── condiciones.js        # if, else, switch
│   ├── operadores_logicos.js # &&, ||, !
│   ├── iteradores.js         # while, do-while
│   ├── tipos_iteradoradores_for.js  # for, for-in, for-of
│   ├── foreach_map.js        # Métodos de arrays
│   └── control_errores.js    # try-catch-finally
├── components/               # (Preparado para componentes)
├── services/                 # (Preparado para servicios API)
└── views/                    # (Preparado para vistas)
```

**Temas cubiertos:**
- Variables y tipos de datos
- Operadores y expresiones
- Estructuras de control (condicionales, bucles)
- Funciones (declarativas, expresivas, arrow)
- Manipulación del DOM
- Eventos y callbacks
- Arrays y métodos (forEach, map, filter)
- Manejo de errores

**Convenciones de código:**
```javascript
// Variables: camelCase
let nombreUsuario = "Juan";
const edadMinima = 18;

// Constantes globales: UPPER_SNAKE_CASE
const API_KEY_CHATGPT = "sk-xxx";
const API_BASE = "https://api.example.com";

// Console logs para tracking
console.log("load app.js");
```

### 4️⃣ Bootstrap (Módulo `bootstrap/`)

**Estado:** En preparación
**Contenido planeado:** Componentes, grid system, utilidades

### 5️⃣ TailwindCSS (Módulo `taildwindCSS/`)

**Estado:** En preparación
**Contenido planeado:** Utility-first CSS, responsive design

## 🚀 Proyectos Prácticos

### Project: MercadoLibre Clone (`project-mercadolibre/`)

Clon de la interfaz de MercadoLibre para practicar layouts y componentes.

**Características:**
- Carrusel Bootstrap con productos destacados
- Grid responsivo (`col-6 col-md-3`)
- Video autoplay para banners
- Imágenes desde CDN de MercadoLibre
- Estilos personalizados

**Tecnologías:**
- HTML5
- CSS3 custom
- Bootstrap 5.3.2 (CDN)

**Estilos destacados:**
```css
.carousel-inner img {
  height: 400px;
  object-fit: cover;
}
```

### Project: Take App Clone (`take-app-clone/`)

Clone de aplicación de delivery/pedidos.

**Páginas:**
- `index.html` - Landing page
- `producto.html` - Detalle de producto
- `pedido.html` - Carrito y checkout

## 📖 Próximos Temas (Roadmap)

Según `javascript/TodoList.md`:

1. ✅ **GitHub Copilot AI** - Uso de asistentes de código
2. 📚 **Librerías JavaScript**
   - Fetch API
   - Axios (ya incluido en proyecto)
   - Chart.js (ya incluido en proyecto)
   - Payment gateways (PayPal, Stripe)
3. 🔄 **JSON** - Manejo de datos estructurados
4. 💾 **LocalStorage & Cookies** - Persistencia en navegador
5. ⚡ **JavaScript Asíncrono**
   - Promises
   - Async/Await
   - Fetch API
6. 🛒 **Proyecto Tienda Virtual WhatsApp**
7. ⚛️ **Intro a ReactJS** - JSX y componentes
8. 🔧 **Backend & Database & Cloud** - Full Stack

## 🛠️ Dependencias y Librerías

El proyecto no usa npm ni gestión de dependencias. Todas las librerías se cargan vía CDN:

```html
<!-- Bootstrap 5.3.2 -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Axios 1.6.7 -->
<script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
```

## 🎨 Convenciones de Código

### Naming Conventions

| Tipo | Convención | Ejemplo |
|------|------------|---------|
| Variables JS | camelCase | `sombreroMagico`, `nombreJuego` |
| Constantes | UPPER_SNAKE_CASE | `API_KEY`, `API_BASE` |
| Clases CSS | kebab-case | `btn-payment`, `catalogo-flex` |
| IDs HTML | kebab-case | `title-blog`, `load-more-btn` |

### Arquitectura CSS

- **CSS Variables**: Definir en `:root` para reutilización
- **Layout preferido**: Flexbox para grids y catálogos
- **Archivos externos**: Organizar en `assets/css/` por componente
- **Estilos inline**: Solo para ejemplos educativos

### Patterns JavaScript

- **Scripts**: Cargar al final del `<body>` para optimizar
- **Selección DOM**: Preferir `querySelector` sobre `getElementById`
- **Console logs**: Usar para demostración educativa
- **Comentarios**: En español, descriptivos

## 🚦 Cómo Usar este Proyecto

### Requisitos

- Navegador web moderno (Chrome, Firefox, Edge)
- Editor de código (VS Code recomendado)
- Extensión Live Server (opcional, para hot reload)

### Instrucciones

1. **Clonar o descargar** el repositorio
2. **Abrir** cualquier archivo HTML en el navegador
3. **Para JavaScript**: Abrir `javascript/index.html`
4. **Habilitar scripts**: Descomentar las líneas `<script src="...">` que quieras ejecutar
5. **Ver console**: Abrir DevTools (F12) para ver los `console.log()`

### Ejemplo de uso

```html
<!-- En javascript/index.html -->
<body>
  <!-- Descomentar para activar módulos -->
  <script src="./assetss/js/src/app.js"></script>
  <script src="./assetss/js/src/main.js"></script>
  <script src="./assetss/js/src/funciones.js"></script>
  <!-- ... más scripts -->
</body>
```

## 📝 Filosofía Educativa

Este proyecto sigue estos principios:

1. **Progresión gradual**: De conceptos básicos a avanzados
2. **Código legible**: Prioridad en claridad sobre optimización
3. **Ejemplos prácticos**: Casos del mundo real (tiendas, Pokémon, juegos)
4. **Sin build tools**: Funciona directamente en el navegador
5. **Comentarios en español**: Para mejor comprensión
6. **Console logs**: Para tracking y debugging visual

## 🤝 Contribuir

Este es un proyecto educativo. Sugerencias para mejorar:

- Mantener el propósito didáctico
- Código simple y bien comentado
- Ejemplos del mundo real
- Respetar la progresión de aprendizaje
- No sobre-optimizar (código de aprendizaje, no producción)

## 📧 Contacto

**Organización:** DojoFullStack  
**Repositorio:** github.com/dojofullstack/bootcamp-mayo-20

---

## 📊 Estado del Proyecto

| Módulo | Estado | Completitud |
|--------|--------|-------------|
| HTML | ✅ Completo | 100% |
| CSS | ✅ Completo | 100% |
| JavaScript Básico | ✅ Completo | 100% |
| JavaScript Intermedio | 🔄 En progreso | 70% |
| Bootstrap | ⏳ Pendiente | 0% |
| TailwindCSS | ⏳ Pendiente | 0% |
| ReactJS | ⏳ Pendiente | 0% |

---

**Última actualización:** Octubre 2025  
**Versión del Bootcamp:** Mayo 2020

¡Bienvenido al bootcamp! 🎓 Happy coding! 💻
