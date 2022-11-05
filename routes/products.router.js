const express = require('express');
const router = express.Router(); // not access to app, but access to router
const ProductsServices = require('../services/products.service');

const service = new ProductsServices();

router.post('/', async (req, res) => {
  const {body} = req;
  const product = await service.create(body);
  res.status(201).json(product);
});

router.get('/', async (req, res) => {
  const products = await service.find();
  res.status(200).json({
    data: products
  });
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const product = await service.findOne(id);
  res.status(200).json(product);
});

router.put('/:id', async (req, res) => {
  const {id} = req.params;
  const {body} = req;
  const product = await service.update(id, body);
  res.status(200).json(product);
});

router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const product = await service.delete(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

module.exports = router;
