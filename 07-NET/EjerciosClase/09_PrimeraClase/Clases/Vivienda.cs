namespace _09_PrimeraClase.Clases
{
    public class Vivienda
    {
        public int Metros { get; set; }
        public string Direccion { get; set; }
        public bool TienePiscina { get; set; }
        private string Dueño { get; set; }

        public bool EsDeProteccionOficial()
        {
            //bool result = true;

            //if (Metros <= 90)
            //    result = true;
            //else
            //    result = false;
                   
            return Metros <= 90;
        }

        public void Reforma(int metros)
        {
            Metros += metros;
        }

        public bool TieneDueño()
        {
            return !string.IsNullOrEmpty(Dueño);
        }

    }
}
