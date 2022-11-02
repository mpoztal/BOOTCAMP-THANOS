namespace BootcampThanos.BusinessModels.Models.ProductLine
{
    public class ProductLineResponse
    {
        public string Code { get; set; } = null!;
        public string? TextDescription { get; set; }
        public string? HtmlDescription { get; set; }
        public byte[]? Image { get; set; }
    }
}
