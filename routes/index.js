const productsRouter = require('./products.router');
const userRouter = require('./user.router');
const categoriesRouter = require('./categories.router');

function api(app) {
  app.use('/products', productsRouter);
  app.use('/users', userRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = api;
