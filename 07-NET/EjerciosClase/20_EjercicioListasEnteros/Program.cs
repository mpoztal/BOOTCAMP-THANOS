List<int> lista1 = new List<int>();

lista1.Add(1);
lista1.Add(2);
lista1.Add(3);

List<int> lista2 = new List<int>();

lista2.Add(4);
lista2.Add(5);
lista2.Add(6);

lista1.AddRange(lista2);

Imprimir();

Console.WriteLine("-------------------------------");

Console.WriteLine(lista1.Count);

Console.WriteLine("-------------------------------");

Console.WriteLine(lista2.Count);

lista1.Remove(1);

Imprimir();

lista1.RemoveAt(2);

Imprimir();

lista1.Add(1);

Imprimir();

lista1.Sort();

Imprimir();

void Imprimir()
{
    Console.WriteLine("-------------------------------");
    foreach(int item in lista1)
    {
        Console.WriteLine(item);
    }
}
