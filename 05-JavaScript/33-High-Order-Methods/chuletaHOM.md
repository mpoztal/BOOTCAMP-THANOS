# Métodos de Primera Clase

## .forEach()

Úsalo como un `for...of`. Simplemente recorre el array y haz lo que quieras en cada vuelta.

```javascript// éste es el código
frutas.forEach( (valor, indice) => {
  console.log(valor, indice)
} )
```

## .map()

Úsalo cuando quieras usar cada valor del array original y después de hacerle modificaciones, guardarlo en un NUEVO ARRAY.

**SIEMPRE QUE TENGAS QUE MODIFICAR EL ARRAY, USA .map()**

* NORMA 1: Siempre tienes que retornar algo en el callback o tendrás un array de `undefined`.
* NORMA 2: Piensa que el `return` es el `push` de lo que quieras al nuevo array. 
* NORMA 3: Siempre te va a devolver un array exactamente igual de largo que el original

```javascript
const nuevoArray = numeros.map( (valor, indice) => {  
  return valor * 2  
} )
```
```javascript
const nuevoArray = numeros.map( (valor) => valor * 2 )
```

## .filter()

Úsalo cuando quieras FILTRAR UN ARRAY y obtener un nuevo array más corto solo con los elementos que cumplan una condición.

**SIEMPRE QUE QUIERAS UN ARRAY CON SOLO LOS ELEMENTOS QUE CUMPLAN UNA CONDICIÓN**

* NORMA 1: Para que el elemento se meta en el nuevo array, el callback tiene que retornar `true`, si no cumple ninguno, devolverá un array vacío `[]`

```javascript
const nuevoArray = numeros.filter( (valor, indice) => {  
  return valor > 100
} )
```
```javascript
const nuevoArray = numeros.filter( (valor) => valor > 100 )
```

## .find()

Úsalo cuando quieras encontrar UN SOLO ELEMENTO según una condición

* NORMA 1: Para que te devuelva un elemento, el callback tiene que retornar `true`, si no, devolverá `undefined`

```javascript
const elementoEncontrado = numeros.find( (valor, indice) => {  
  return valor % 7 === 0
} )
```
```javascript
const elementoEncontrado = numeros.find( (valor) => valor % 7 === 0 )
```