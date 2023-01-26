import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(value: any): string {
    if (value !== null && value !== 'undefined') {
      //tengo desgranar mi objeto para sacar el nombre la moneda y el simbolo y devolverlo en un string
      const moneda: any = Object.values(value);
      //console.log(moneda)
      let result = "";
      moneda.forEach((value: any) => result += value.name + ' - ' + value.symbol + '  ');
      return result;
    }
    return "No hay datos de moneda";
  }

}
