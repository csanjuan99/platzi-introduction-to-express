const express = require('express');
const app = express();
const api = require('./routes');

const config = {
  port: 3000,
};

api(app);
app.listen(config.port, () => {
  console.log(`Server is running on localhost:${config.port}`);
});

