

## Descripción

Esta aplicación de React muestra una lista de personajes con filtros y ordenación. La aplicación obtiene datos de personajes a través de una API, permite filtrar por nombre y casa, y ordenar los personajes alfabéticamente. También incluye una página de detalles para cada personaje.

## Estructura del Proyecto

- `src/`
  - `components/`
    - `Header.js` - Componente de encabezado.
    - `Footer.js` - Componente de pie de página.
    - `ListCharacter.js` - Componente que muestra la lista de personajes.
    - `DetailCharacter.js` - Componente que muestra los detalles de un personaje.
    - `Filter/`
      - `FilterCharacter.js` - Componente para filtrar personajes por nombre.
      - `FilterHouse.js` - Componente para filtrar personajes por casa.
  - `services/`
    - `api.js` - Servicio para llamar a la API de datos.
  - `scss/`
    - `index.scss` - Estilos principales de la aplicación.
  - `App.js` - Componente principal que maneja las rutas y la lógica de filtrado y ordenación.
  - `index.js` - Archivo de entrada principal.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
