## Comando /tiempo

- OBJETIVO PRINCIPAL: cuando lance este comando sobre el bot, me devuelva datos
  de temperatura actual en la localización que se le especifique

- EJECUCIÓN DEL COMANDO

  - /tiempo Madrid
  - /tiempo Mostoles

- ## TAREAS:
  - Definir en index.js el comando
  - Generar el fichero que gestione el comando y probar que funciona
  - Extraer del texto del comando la ciudad de la cual queremos conocer su
    temperatura
    - ¿De dónde saco el texto del comando? -> hay que mirar en ctx.message
    - ¿Cómo extraigo únicamente el nombre de la ciudad?
  - ¿Cómo hago la petición para extraer los datos de temperaturas?
    - https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API
      key}
    - El API key se obtiene en el registro de la api de openweathermap
    - Para poder realizar la petición debemos usar AXIOS
  - Como respuesta mandamos: temperatura actual, temperatura máxima, mínima y
    humedad

## DONDE

- OBJETIVO: La ejecución de este comando seguido de una dirección nos devuelve
  la lat y long donde se situa dicha dirección.

- USO: /donde Gran Vía 23, Madrid

### TAREAS:

- Generar el fichero específico para el comando
- Extraer la dirección
- A través de la librería node-geocoder recuperar lat y long a partir de la
  dirección
