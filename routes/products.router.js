const express = require('express');
const faker = require("faker");
const router = express.Router(); // not access to app, but access to router

router.get('/', (req, res) => {
  const products = [];
  const {limit} = req.query;
  const size = limit || 10;
  for (let i = 0; i < size; i++) {
    products.push({
      id: i + 1,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id: Number(id),
    name: `Product ${id}`,
  });
});


module.exports = router;