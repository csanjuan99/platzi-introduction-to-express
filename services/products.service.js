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

  create(product) {
    this.products.push(product);
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === parseInt(id));
  }

  update(id, product) {
    const index = this.products.findIndex(item => item.id === parseInt(id));
    this.products[index] = product;
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === parseInt(id));
    return this.products.splice(index, 1);
  }
}

module.exports = ProductsService;
