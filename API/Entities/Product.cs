namespace API.Entities
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public decimal? CostPrice { get; set; }
        public decimal? SellPrice { get; set; }
        public int Qty { get; set; }
        public string? ImageUrl { get; set; }
    }
}
