namespace BootcampThanos.BusinessModels.Models
{
    public class PaginatedResponse<T> where T : class
    {
        public List<T> Results { get; set; }
        public int Total { get; set; }
        public int Page { get; set; }
        public int ItemsPerPage { get; set; }

        public PaginatedResponse()
        {
            Results = new List<T>();
        }
    }
}
