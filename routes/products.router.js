const express = require('express');
const router = express.Router(); // not access to app, but access to router
const ProductsServices = require('../services/products.service');

const service = new ProductsServices();

router.post('/', (req, res) => {
  const {body} = req;
  const product = service.create(body);
  res.status(201).json(product);
});

router.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json({
    data: products
  });
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id);
  res.status(200).json(product);
});

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const {body} = req;
  const product = service.update(id, body);
  res.status(200).json(product);
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.delete(id);
  res.status(200).json(product);
});

module.exports = router;
