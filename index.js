const express = require('express');

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
  res.json([
    {
      id: 1,
      name: 'Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
    }
  ]);
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

