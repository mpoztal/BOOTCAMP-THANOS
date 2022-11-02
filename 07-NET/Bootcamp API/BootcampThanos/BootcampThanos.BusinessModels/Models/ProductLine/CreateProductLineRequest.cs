using System.ComponentModel.DataAnnotations;

namespace BootcampThanos.BusinessModels.Models.ProductLine
{
    public class CreateProductLineRequest
    {
        [Required]
        [MaxLength(50, ErrorMessage = "El campo Code no puede tener una longitud mayor a 50")]
        public string Code { get; set; } = null!;
        public string? TextDescription { get; set; }
        public string? HtmlDescription { get; set; }
        public byte[]? Image { get; set; }
    }
}
