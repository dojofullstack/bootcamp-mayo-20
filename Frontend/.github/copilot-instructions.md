# Frontend Bootcamp - Copilot Instructions

## Proyecto Overview
Este es un repositorio de bootcamp enfocado en enseñanza de desarrollo web frontend (Mayo 2020). Contiene múltiples módulos de aprendizaje organizados por tecnología: HTML, CSS (incluyendo Flexbox y próximamente TailwindCSS), JavaScript vanilla, Bootstrap, y preparación para ReactJS.

## Estructura del Proyecto

### Módulos Principales
- **`html/`** - Ejercicios fundamentales de HTML5 con estructura semántica
- **`aprende-css/`** - Ejemplos progresivos de CSS (selectores, Flexbox, pseudo-clases)
- **`javascript/`** - Ejercicios de JavaScript vanilla organizados por conceptos
- **`bootstrap/`** - (Vacío) Preparado para ejercicios de Bootstrap
- **`taildwindCSS/`** - (En preparación) Para ejercicios de TailwindCSS
- **`project-mercadolibre/`** - Proyecto práctico clonando UI de MercadoLibre
- **`project-setup/`** - Configuraciones iniciales de proyectos
- **`take-app-clone/`** - Otro proyecto de clonación de UI

### JavaScript - Arquitectura de Archivos
Los archivos JavaScript siguen una estructura de aprendizaje modular en `javascript/assetss/js/src/`:

```
src/
├── app.js              # Introducción a variables (var, let, const)
├── main.js             # Tipos de datos y operaciones básicas
├── constantes.js       # Definición de constantes (API keys, etc.)
├── funciones.js        # Funciones, callbacks y parámetros por defecto
├── tipos_funciones.js  # Tipos avanzados de funciones
├── dom.js              # Manipulación del DOM
├── estructuras/        # Estructuras de control
│   ├── condiciones.js
│   ├── operadores_logicos.js
│   ├── iteradores.js
│   ├── tipos_iteradoradores_for.js
│   ├── foreach_map.js
│   └── control_errores.js
├── components/         # (Vacío) Preparado para componentes reutilizables
└── services/           # (Vacío) Preparado para servicios API
```

## Convenciones de Código

### Naming Conventions
- **Variables JS**: camelCase (`sombreroMagico`, `nombreJuego`, `companeros_juego`)
- **Constantes**: UPPER_SNAKE_CASE para constantes globales (`API_BASE`, `API_KEY_CHATGPT`)
- **Clases CSS**: kebab-case con prefijos descriptivos (`btn-payment`, `btn-whatsapp`, `catalogo-flex`)
- **IDs**: kebab-case (`title-blog`, `load-more-btn`, `poke-container`)

### CSS Architecture
- **CSS Variables**: Definidas en `:root` para reutilización (`--primary-color`, `--dojofullstack`)
- **Layout preferido**: Flexbox para catálogos y grids (`display: flex; flex-wrap: wrap`)
- **Estilos inline**: Solo para ejemplos educativos en HTML
- **Archivos CSS externos**: Organizados en `assets/css/` por componente

### JavaScript Patterns
- **Carga de scripts**: Scripts al final del `<body>` para optimizar carga
- **Console logs**: Usados extensivamente para demostración (`console.log("load [filename]")`)
- **Selección DOM**: Preferir `querySelector/querySelectorAll` sobre `getElementById` (ver `dom.js`)
- **Comentarios**: En español, descriptivos para propósitos educativos

## Temas Pendientes (TodoList.md)
Según `javascript/TodoList.md`, los próximos temas a implementar son:
1. GitHub Copilot AI
2. Librerías: Fetch, Axios, ChartJS, Payment (PayPal, Stripe)
3. JSON (JavaScript Object Notation)
4. LocalStorage & Cookies
5. JavaScript Asincrónico
6. Proyecto Tienda Virtual para WhatsApp
7. Intro a ReactJS (JSX)
8. Backend & Database & Cloud Services

## Dependencies & External Libraries
- **Bootstrap 5.3.2**: Usado en `project-mercadolibre/` con CDN
- **Chart.js**: Incluido vía CDN en `javascript/index.html`
- **Axios 1.6.7**: Incluido vía CDN en `javascript/index.html`
- **No package.json**: Este es un proyecto educativo sin gestión de dependencias npm

## Debugging & Development
- **Live Preview**: Abrir archivos HTML directamente en navegador
- **Console**: Todos los scripts incluyen `console.log()` para tracking de carga
- **Scripts habilitados**: Descomentar `<script src="...">` en `javascript/index.html` para activar diferentes módulos

## Proyecto Específico: MercadoLibre Clone
Características del `project-mercadolibre/`:
- Carrusel Bootstrap con imágenes de productos
- Grid responsivo (`col-6 col-md-3`) para productos
- Estilo customizado en `style.css` (carousel height: 400px)
- Video autoplay muted para banners multimedia
- Usa imágenes externas de MercadoLibre CDN

## AI Agent Guidelines
Al ayudar con este código:
1. **Mantén el propósito educativo**: Código debe ser legible y bien comentado en español
2. **No sobre-optimices**: Este es código de aprendizaje, no de producción
3. **Respeta la progresión**: Los conceptos van de básico a avanzado
4. **Ejemplos prácticos**: Usa ejemplos del mundo real (tiendas, Pokémon, juegos)
5. **Estilo consistente**: Mantén español en comentarios, inglés en nombres de funciones estándar
6. **No agregues build tools**: El proyecto está diseñado para funcionar sin compilación
