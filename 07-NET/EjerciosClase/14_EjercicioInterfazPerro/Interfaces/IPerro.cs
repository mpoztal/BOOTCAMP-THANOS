namespace _14_EjercicioInterfazPerro.Interfaces
{
    public interface IPerro
    {
        string Nombre { get; set; }
        void SetNombre(string nuevoNombre);
        void GetNombre();
        void Comer();
    }
}
