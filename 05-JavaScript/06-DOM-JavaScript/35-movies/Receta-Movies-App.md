# ==Receta:==	Movies App - v.1.0

## 1.- Inicio del proyecto

En nuestro caso hemos instalado ==bootstrap== y ==bootstrap-icons==  

* Creamos archivo `.scss` e importamos bootstrap vigilando que esté bién la ruta en tu árbol de carpetas.

  ```scss
  @import '../../../node_modules/bootstrap/scss/bootstrap.scss';
  ```

* Cambiamos las variables que queramos **antes de esa línea**

* Importamos la fuente de iconos de bootstrap arriba del todo con su propio archivo `.css` que te ofrecen.

  ```scss
  @import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
  ```

## 2.- Creación del markup con HTML

## 3.- Primeros pasos en JS

* Cazar todo lo necesario (formulario, caja de películas)
* añadir listener del submit
* evitar comportamiento por defecto del formulario
* guardar valores que me ha puesto el usuario
* revisar que no haya dejado ningún campo vacío
* una vez todo ok, guardamos esa nueva película en el array

## 4.- Imprimir las películas en pantalla

* Creamos una función externa (`displayMovies()`) que: 
  * recorrerá la "base de datos"
  * creará cada elemento
  * añadirá estilos, clases y contenido
  * los imprimirá en el DOM
* Separamos la parte de creación del `article` en el `DOM` en la función `createMovie()` y así tenemos una función para crear la película y otra para imprimirlas.
* ¡EXTRA! Creamos una función que seleccionará el color de la etiqueta de Género `selectColorForGenre(genre)`

## 5.- Cambiar una película de VISTA/NO VISTA

* Escuchar el botón de vista, y ejecutar una función que haga el cambio
* Tendremos que pasarle a esa función el ID de la película para saber cual cambiar
* Buscamos en el array la película a la que hemos hecho click y le cambiamos la propiedad `isSeen` por el inverso de lo que tenga.
  * Podemos cambiarlo directamente recorriendo el array con un `forEach` (mutando)
  * Podemos crear un nuevo array con la película a la que hemos hecho click modificada `map()`
* Volvemos a imprimir las películas.

## 6.- Eliminar una película

* Escuchar el botón de papelera, y ejecutar una función que borre el elemento
* Tendremos que pasarle a esa función el ID de la película para saber cual cambiar
* Buscamos en el array la película a la que hemos hecho click y lo eliminamos del array
  * Podemos hacer un splice *(mutamos el array)*
  * Podemos conseguir un nuevo array que tenga las mismas películas excepto la que has hecho click *(cambio de referencia)* `filter()`
* Volvemos a imprimir las películas.

## 7.- ¡EXTRA! Implementamos una alerta de error

Aprovechando que usamos bootstrap podemos incluir unos errores utilizando ==Alerts== o ==Toasts==

* Creamos una función que cree el markup de un ==alert== y la meta en el body
* Con estilos la ponemos donde queremos y le añadimos animaciones
* Hay que acordarse de borrar esa alert del `DOM` pasado un tiempo
  * Si tiene una animación podemos escuchar el evento `'animationend'` y luego hacer el remove
  * Si no tuviera animación podríamos hacer uso del `setTimeout()`

## 8.- Implementamos un botón de editar -> ✏

* Lo añadimos en `createMovie()`
* Le añadimos el listener que llame a la nueva función que creará el modal `createBootstrapModal()`

## 9.- Creamos el modal

* Creamos el markup que nos pide bootstrap.

* Creamos el objeto de tipo ==Modal== según nos dice la documentación de bootstrap. ¡IMPORTANTE! Habrá que añadir el script de bootstrap que nos permite usar javascript.

  ```javascript
  const boostrapModal = new bootstrap.Modal(modalCazado)
  ```

  ```html
  <!-- Si tienes bootstrap instalado cógelo de:-->
  <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Si no, del cdn de la página oficial -->
  ```

* Lanzamos el método `show()` para que aparezca el modal.

* Añadimos un eventListener que se activará al desaparecer el modal para poder eliminarlo del DOM.

  ```javascript
  modalCazado.addEventListener('hidden.bs.modal', () => modalCazado.remove())
  ```

## 10.- Añadimos los inputs con los valores de la movie

* Insertamos los inputs que editarán la película. Y les ponemos su `value` correspondiente
* Escuchamos el evento del botón de enviar del modal.
* Checkeamos que no hayan dejado el input vacío.
* Si está todo correcto enviamos los nuevos datos a una nueva función llamada `updateMovieInfo()`

## 11.- Guardamos los nuevos valores

* Para guardar los valores volveremos a hacer un `map()` para cambiar la película por los nuevos valores.

---

## 12.- Crear markup de los FILTROS

* Primero de todo creamos los botones y elementos que vayan a filtrar.
* De momento hemos creado un buscador de títulos, un selector de géneros y dos botones, uno para filtrar por vistas y otro por no vistas.

## 13.- Cazamos formulario y creamos listeners para cada filtro

* Para el formulario evitamos el submit que hace por defecto.

* Para el buscador "escuchamos" el evento `keyup` y lanzamos la función `searchMovieTitle()`
* Para el selector "escuchamos" el evento `change` y lanzamos la función `filterByGenre()`
* Para los botones "escuchamos" el evento `click` y lanzamos las funciones `filterBySeen()` y `filterByNotSeen()

## 14.- Hacemos los filtros para cada opción

* Filtramos el array original de películas ("base de datos") y creamos un nuevo array filtrado (no sustituímos al original)
* Imprimimos las películas del nuevo array
  * Para ello podemos utilizar la función que imprime todas las películas en pantalla.

---

## 15.- Implementamos ==localStorage==

* Allá donde hayas modificado el array de películas "base de datos", acto seguido lo guardas en `localStorage`
* Nada más empezar la aplicación, tendremos que revisar si YA HAY PELÍCULAS en `localStorage` :
  * si es así, las imprimimos
  * si no, lo dejamos vacío.

