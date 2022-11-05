const express = require('express');
const productsRouter = require('./products.router');
const userRouter = require('./user.router');
const categoriesRouter = require('./categories.router');

function api(app) {
  const router = express.Router();
  router.use('/products', productsRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoriesRouter);
  app.use('/api/v1', router)
}

module.exports = api;
