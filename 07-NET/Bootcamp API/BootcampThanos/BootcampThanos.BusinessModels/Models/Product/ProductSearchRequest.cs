﻿namespace BootcampThanos.BusinessModels.Models.Product
{
    public class ProductSearchRequest : PaginatedBaseRequest
    {
        public string Description { get; set; }
    }
}
