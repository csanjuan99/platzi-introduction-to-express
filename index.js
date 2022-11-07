const express = require('express');
const app = express();
const api = require('./routes');
const {logErrors, errorHandler} = require('./middleware/error.handler');

const config = {
  port: 3000,
};
app.use(express.json());

api(app);
app.use(logErrors);
app.use(errorHandler);
app.listen(config.port, () => {
  console.log(`Server is running on localhost:${config.port}`);
});

