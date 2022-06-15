const nota = parseInt(prompt ('Dime una nota del 0 al 10'))
const numero = parseInt(prompt ('Ingresa un numero entero'))
const valor = parseInt(prompt ('Ingresa un valor'))
const edad = parseInt(prompt ('¿Que edad tienes?'))

const mes = parseInt(prompt ('Dime el mes'))


 if (nota > 5) {  
    console.log('Aprobado')
 
} else if (nota === 5) {  
    console.log('Aprobado por los pelos')
 
} else {
    console.log('Suspendido')
}


 if (numero >= 0 ) {
    console.log ('Numero Positivo')
  } else {
    console.log ('Numero Negativo')
  }

  
  if (numero % 2 === 0 ) {
    console.log("Es par")
  }else  {
    console.log("Es impar")
  }

  

  if (numero % 5 === 0) {
    console.log(" Es multiplo de 5 ")
  }


  if (valor > 100 ) {
    console.log ('Valor es mayor que 100')
  } else if (valor < 100 ) {
    console.log ('Valor es menor que 100')
  } else {
     console.log ('Valor es igual a 100')
  }
 

  if (edad < 6 || edad > 65) {
    console.log('Gratis')
  }else if (edad <= 13) {
    console.log('Pagan 4€')
  }else if (edad <= 65)  {

  }else  {
  console.log('Pagan 7€')
  }

  const dia = prompt ('¿Que dia de la semana es?')

  if (dia !== null) {
    if(dia.trim() !== '' && isNaN(dia)) {
      switch (dia) {
        case 'lunes':{
          console.log('Hoy hay crema de verduras')
          break
        }
        case 'martes':{
          console.log('Hoy hay lentejas')
          break
        }
        case 'miercoles':{
          console.log('Hoy hay pescado')
          break
        }
        case 'jueves':{
          console.log('Hoy hay carne')
          break
        }
        case 'viernes':{
          console.log('Hoy hay pasta')
          break
        }
        case 'sabado':{
          console.log('Hoy hay pollo asado')
          break
        }
        case 'domingo':{
          console.log('Hoy hay paella')
          break
        }
      } 
    } else{
      console.error('No es un valor correcto')
    }
  }else {
    console.log('Adiós')
  }
  
  
  







   if (mes === 2 ){
    console.log('28 dias tiene el mes')
   }else if (mes > 12 || mes < 1 ){
    console.log('El mes elegido es incorrecto')   
   } else if ((mes <= 7 && mes % 2 === 1)||(mes >7 && mes % 2 === 0)) {
    console.log('31 dias tiene el mes')
   } 
   else {
    console.log('30 dias tiene el mes')
   }
  
    
  
   
 
  
  
  