const faker = require("faker");

class ProductsService {

  constructor() {
    this.products = [];
    this.generate()
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: i + 1,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(product) {
    this.products.push(product);
  }

  async find() {
    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(this.products), 1000)
    );
  }

  async findOne(id) {
    const name = this.getTotal();
    return this.products.find(item => item.id === parseInt(id));
  }

  async update(id, product) {
    const index = this.products.findIndex(item => item.id === parseInt(id));
    this.products[index] = product;
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === parseInt(id));
    if (index === -1) {
      throw new Error("Product not found");
    }
    return this.products.splice(index, 1);
  }
}

module.exports = ProductsService;
