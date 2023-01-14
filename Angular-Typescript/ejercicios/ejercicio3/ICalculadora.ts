// 1º Implementamos el interfaz calculadora éste va a definir: una marca, un sumar....

export interface ICalculadora{
    marca: string;
    sumar(): number;
    restar(): number;
    multiplicar(): number;
    dividir():number;
}