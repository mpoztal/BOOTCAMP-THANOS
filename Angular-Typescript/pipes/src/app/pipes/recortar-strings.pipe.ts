import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarStrings'
})
export class RecortarStringsPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    //opcin 20 caracteres.
    //return value.slice(0, 20) + "...";

    //opcion 20 palabras
    console.log(args);
    let arr = value.split(" ");
    let final = (args[0] !== undefined) ? args[0] : 20;
    arr = arr.slice(0, final);
    let icono = (args[1] !== undefined) ? args[1] : '...'
    return `${arr.join(" ")} ${icono}`
  }

}
