import { Injectable } from "@angular/core";
import { Entreno } from "src/app/interfaces/entreno.interface";
import { ENTRENOS } from "../bd/ejercicios.bd";

@Injectable({
    providedIn: 'root'
})
export class EntrenosService {
    id: number = 3;

    private arrEntrenos: Entreno[] = [];

    constructor() {
        this.arrEntrenos = ENTRENOS;
    }

//Este método siempre ha de existir.
    getAll(): Entreno[] {
        return this.arrEntrenos;
    }

// Con ésta funcion no modificamos el array original
    delete(pId: number): boolean {
       let posicion = this.arrEntrenos.findIndex(entreno => entreno.id === pId);
        if (posicion !== -1){
            this.arrEntrenos.splice(posicion, 1)
            return true;
        }
        return false;

    }

    create(pEntreno: Entreno): boolean{
        pEntreno.id = this.id;
        this.arrEntrenos.push(pEntreno);
        return true;
    }

    getTotalTime(): number {
        let time = 0;
        this.arrEntrenos.forEach(entrenos => time += entrenos.tiempo);
        return time;
    }

    getTotalCalorias(): number{
        let calorias = 0;
        this.arrEntrenos.forEach(entrenos => calorias += (entrenos.tiempo * 4))
        return calorias;

    }

//Filtro
    getByTitle(pBusqueda: string) : Entreno[]{
        return this.arrEntrenos.filter(entreno => entreno.titulo.toLowerCase().includes(pBusqueda.toLowerCase()))
    }

   
}




