### Receta para Input

     - paso 1: Crear un propiedad de html personalizada con el nombre que querais dentro 
     de la etiqueta del componente.
     - paso 2: Crear un propiedad de clase dentro del ts del componente decorada con @Input() esa propiedad tiene que tener el mismo nombre que la puesta en html

## Receta para Output

    - paso 1: Crear una propiedad personalizada decorada con @Ouput(). Esta propiedad es un Evento personalizado es de tipo EventEmitter
    - paso 2: Inicializado la propiedad creada en el constructor como new EventEmitter();
    - paso 3: Recogo el valor que quiero enviar y lo emito al padre a traves un evento emit del Output.
    - paso 4: en la etiqueta del componente crearo un evento personalizado. ()=""
      entre los parentesis pongo el nombre del Output y entre la comillas la funcion que llamará cuando reciba la emision. Pasandole como parametro $event
    - paso 5: Creo la funcion en el componente padre y realizo con el dato lo que necesite (push())



