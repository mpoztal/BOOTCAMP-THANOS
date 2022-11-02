namespace BootcampThanos.BusinessModels.Models
{
    public class BaseResponse<T>
    {
        public T Results { get; set; }
        public string Error { get; set; }
    }
}
