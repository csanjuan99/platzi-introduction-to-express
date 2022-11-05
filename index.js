const express = require('express');
const faker = require('faker');
const app = express();
const config = {
  port: 3000,
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/new-route', (req, res) => {
  res.send('Hello, i am a new route!');
});

app.get('/products', (req, res) => {
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

app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    })
  } else {
    res.send('No limit or offset provided');
  }
});

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id: Number(id),
    name: `Product ${id}`,
  });
});

app.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const {categoryId, productsId} = req.params;
  res.json({
    categoryId: Number(categoryId),
    productsId: Number(productsId),
  });
});


app.listen(config.port, () => {
  console.log(`Server is running on localhost:${config.port}`);
});

