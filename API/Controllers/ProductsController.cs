using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [ApiController]
    public class ProductsController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        public ProductsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        [HttpGet]
        public async Task<IEnumerable<Product>> GetProducts()
        {
            var products = await _unitOfWork.ProductRepository.GetProductsAsync();
            return products;
        }
        [HttpGet("{id}")]
        public async Task<Product> GetProduct(Guid id)
        {
            var product = await _unitOfWork.ProductRepository.GetProductByIdAsync(id);
            return product;
        }

        [HttpPost("add")]
        public async Task<Product> AddProductAsync([FromBody]Product product)
        {
            if (product == null)
                throw new ArgumentNullException(nameof(product));
            var pro = await _unitOfWork.ProductRepository.AddAsync(product);
            return pro;
        }
        [HttpPut("{id}", Name = "update")]
        public async Task<bool> UpdateProductAsync(Guid id, [FromBody]Product product)
        {
            if (product == null)
                throw new ArgumentNullException(nameof(product));
            return await _unitOfWork.ProductRepository.UpdateAsync(product);

        }
    }
}
