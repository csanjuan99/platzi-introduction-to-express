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
  res.json({
    products: [
      {
        id: 1,
        name: 'Product 1',
      },
      {
        id: 2,
        name: 'Product 2',
      }
    ],
  });
});

app.listen(config.port, () => {
  console.log(`Server is running on localhost:${config.port}`);
});

