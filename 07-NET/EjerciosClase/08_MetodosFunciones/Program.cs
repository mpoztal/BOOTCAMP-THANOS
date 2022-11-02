
void Saludar(string nombre, string apellidos)
{
    Console.WriteLine("Hola " + nombre + apellidos);
}

void Despedirse()
{
    Console.WriteLine("Adios!");
}

Saludar("Pedro", "Sanchez");

Despedirse();

int Sumar(int num1,ref int num2)
{
    int suma = num1 + num2;

    num2 = 25;
    num1 = 25;

    return suma;
}

int SumarSinRef(int num1, int num2)
{
    int suma = num1 + num2;

    num2 = 25;
    num1 = 25;

    return suma;
}

void SumarConSalida(int num1, int num2, out int suma)
{
    suma = num1 + num2;
}

//------------------------------------------------------

int num1In = 1;
int num2In = 2;

int resultado = Sumar(num1In, ref num2In);

int num1InSinRef = 1;
int num2InSinRef = 2;

int resultadoSinRef = SumarSinRef(num1InSinRef, num2InSinRef);

Console.WriteLine("La suma es: " + resultado);






int resultadoSalida;

SumarConSalida(num1In, num2In, out resultadoSalida);
