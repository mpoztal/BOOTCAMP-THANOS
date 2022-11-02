namespace _15_EjercicioInterfazPersona.Interfaces
{
    public interface IPersona
    {
        int Edad { get; set; }

        void SetNombre(string nombre);
        void GetNombre();
        void SetEdad(int edad);
        void GetAñoNacimiento();
    }
}
