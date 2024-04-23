# App de Podcasts con Itunes

Esta app es una Prueba técnica frontend de capitole para el cliente inditex

Visualizar la app en
https://tourmaline-cactus-b946da.netlify.app

## Nota importante 🚧:

1. A lo largo del documento me surgieron dudas para el reviewer o razonamientos que fui anotando con el comentario //? y //!
2. **Es importante saber que hay dos implementaciones de cache en este repo** ‼️‼️:
   a. Service worker. Funciona SOLAMENTE modo producción, corriendo el server con `npm run prod`. Tener en cuenta de que tambien cachea estaticos.
   b. React Query Cache (Con persistencia en localstorage). Corre en ambos entornos, pero las devtools (para limpiar el cache con devtools de react-query) funciona solo en modo development.
3. ADVERTENCIA ‼️‼️: Durante el desarrollo me estuvo andando mal la pagina de allOrigins y me quede varias veces sin servidor. Por lo que opte por **_cambiarlo momentaneamente a corsproxy.io_**, si se desea cambiar el reverse proxy, dejaré abierto un pull request con una branch llamada enhancement/change-to-allOrigins para switchear la feature rapidamente y no perder los dos

### Prerrequisitos 🔢

Esta aplicación utiliza Node v18.
Recomiendo utilizar NVM para poder mantener las versiones de node actualizadas y los entornos separados entre si.

Para utilizar la version de node del proyecto. Solo debes pararte en el root de esta app y correr en tu consola:

```bash

  nvm use

```

Si no tienes la version de node adecuada. Puede que algunas funcionalidades no te funcionen.
Para ello puedes instalar la version de node con el comando de NVM:

```bash

  nvm install v18

```

### Correr la aplicacion 🚀

#### Production

Para correr la app en modo production ejecuta en tu consola:

```bash

  npm run prod

```

La aplicación correra en localhost:8080

#### Development

Para correr la app en modo development ejecuta en tu consola:

```bash

  npm run dev

```

La aplicación correra en localhost:8080

#### Pruebas 🧪

Para correr las pruebas ejecuta en tu consola:

```bash

  npm test

```
