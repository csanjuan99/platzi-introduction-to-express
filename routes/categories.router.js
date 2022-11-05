const express = require('express');
const router = express.Router();

router.get('/:categoryId/products/:productsId', (req, res) => {
  const {categoryId, productsId} = req.params;
  res.json({
    categoryId: Number(categoryId),
    productsId: Number(productsId),
  });
});

module.exports = router;
