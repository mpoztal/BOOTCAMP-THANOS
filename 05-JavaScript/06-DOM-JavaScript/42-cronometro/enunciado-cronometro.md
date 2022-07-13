# Hacer un cronómetro

## Crear una clase Crono

```javascript
class Crono {
    //...
}
```

### Cada instancia de Crono va a tener unas propiedades que empezarán en ==0==

### Cada Crono va a poder:

* **ARRANCAR** el cronómetro
* **PARAR** el cronómetro
* **RESETEAR** el cronómetro
* **MOSTRAR** el tiempo que ha pasado

  ### Hay que revisar y evaluar posibles errores:

* Si el cronómetro está encendido no podemos encenderlo otra vez.
* Si el cronómetro está parado no podemos volverlo a parar.
* Si el cronómetro está en marcha o nunca se ha encendido, no podemos resetear.

##### Tests

Crear una instancia de Crono:

```javascript
const c1 = new Crono();
```



* Encended, apagad y mirad si muestra milisegundos en consola.
* Encended y volved a encender -> debería mostrar un error
* Encended, apagad y volved a apagar -> debería mostrar un error
* Resetead con el reloj ya en 0 -> debería dar un error
* Encended y resetear -> debería dar un error

##### ¡EXTRA!

HACED LO MISMO CON BOTONES Y OUTPUT EN EL DOM 

