namespace BootcampThanos.BusinessModels.Models.ProductLine
{
    public class ProductLineSearchRequest : PaginatedBaseRequest
    {
        public string Description { get; set; }
    }
}
