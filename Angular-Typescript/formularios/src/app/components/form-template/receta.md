### Forms de tipo de template

      
      1 - importamos en app-module.ts la libreria FormsModule (la misma que TWO WAY DATA)
      
      2 - Creamos la maqueta de formulario en el html con la etique form. 
      
      3 - A este form le colocamos un nombre o template de las misma forma que lo haciamos en directivas (ngIf else #bloqueElse). E igualamos ese nombre a ngForm de esta forma 
                        #nombreForm = "ngForm"
      
      4 - Crea un evento de tipo submit que en este caso se llama (ngSubmit)="funcionTs(nombreForm)". Ojo funcionTs es un nombre generico. A esta funcion le pasaremos obligatoriamente como parametro el nombre formulario creado antes.
      
      5 - todos lo campos del formulario (input, chackbox, select, textarea....) deberan llevar un name="" y un atributo ngModel. Ojo sin parentesis ni corchetes.

      6 - la funcion devolvera un objeto json con cada uno de los campos de formulario con su name=""
