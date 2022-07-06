const nota = parseInt(prompt ('Dime una nota del 0 al 10'))
const numero = parseInt(prompt ('Ingresa un numero entero'))
const valor = parseInt(prompt ('Ingresa un valor'))
const edad = parseInt(prompt ('¿Que edad tienes?'))




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
      switch (dia.toLowerCase()) {
        case 'lunes':{
          console.log('Hoy hay crema de verduras')
          break
        }
        case 'martes':{
          console.log('Hoy hay lentejas')
          break
        }
        //ACENTOS
        case 'miercoles':
          case 'miércoles':{
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
          //ACENTOS
          case 'sabado':
            case 'sábado':{
              console.log('Hoy hay pollo asado')
              break
            }
            case 'domingo':{
              console.log('Hoy hay paella')
              break
            }
            default:{
              console.error('No es un dia de la semana correcto')
            }
          } 
        } else{
          console.error('No es un valor correcto')
    }
  }else {
    console.log('Adiós')
  }
  
  
  const mes = parseInt(prompt ('Dime el mes'))
  const mesMenorQue7YEsImpar = (mes <= 7 && mes % 2 === 1)
  const mesMayorQue7YEsPar = (mes >7 && mes % 2 === 0)
  if (mes !== null){
    if(mes.trim() !== '' && !isNaN(mes)){

      if (mes === 2 ){
       console.log('28 dias tiene el mes')
      }else if (mes > 12 || mes < 1 ){
       console.log('El mes elegido es incorrecto')   
      } else if ((mesMenorQue7YEsImpar)||(mesMayorQue7YEsPar)) {
       console.log('31 dias tiene el mes')
      } 
      else {
       console.log('30 dias tiene el mes')
      }

    }else {
      console.error('No es un valor correcto');
    }

  }else {
      console.log('¡Adiós!')
  }

  let horas = Number(prompt('Dime las horas:'))
  let minutos = Number(prompt('Dime los minutos:'))
  let segundos = Number(prompt('Dime los segundos:'))
  
  if (horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59 && segundos >= 0 && segundos <= 59) {
  
    // Sumar un segundo a los segundos
    segundos++
  
    // Si los segundos son 60
    if (segundos === 60) {
      // pasar los segundos a 0
      segundos = 0
      // sumar un minuto
      minutos++
    }
  
    // Si los minutos ahora son 60
    if(minutos === 60) {
      // pasar los minutos a 0
      minutos = 0
      // sumar una hora
      horas++    
    }
    
    // si las horas ahora son 24
    if (horas === 24) {
      // pasar las horas a 0 
      horas = 0
    }
  
    console.log(`La NUEVA HORA es: ${horas}:${minutos}:${segundos}`)
  
  
  
  
  
  }else {
    console.error('No es una hora correcta.');
  }
  


  


    
  
   
 
  
  
  