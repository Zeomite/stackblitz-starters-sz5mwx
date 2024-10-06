const express = require('express');
const app = express();
const port = 3000;

let products = require('./products.js');
products = products.products;

app.get('/products/sort/popularity', (req, res) => {
  const sortedProducts = products.slice().sort((a, b) => b.rating - a.rating);
  res.json({ products: sortedProducts });
});

app.get('/products/sort/price-high-to-low', (req, res) => {
  const sortedProducts = products.slice().sort((a, b) => b.price - a.price);
  res.json({ products: sortedProducts });
});

app.get('/products/sort/price-low-to-high', (req, res) => {
  const sortedProducts = products.slice().sort((a, b) => a.price - b.price);
  res.json({ products: sortedProducts });
});

app.get('/products/filter/ram', (req, res) => {
  const ram = parseInt(req.query.ram);
  const filteredProducts = products.filter((product) => product.ram === ram);
  res.json(filteredProducts);
});

app.get('/products/filter/rom', (req, res) => {
  const rom = parseInt(req.query.rom);
  const filteredProducts = products.filter((product) => product.rom === rom);
  res.json(filteredProducts);
});

app.get('/products/filter/brand', (req, res) => {
  const brand = req.query.brand.toLowerCase();
  const filteredProducts = products.filter(
    (product) => product.brand.toLowerCase() === brand
  );
  res.json(filteredProducts);
});

app.get('/products/filter/os', (req, res) => {
  const os = req.query.os.toLowerCase();
  const filteredProducts = products.filter(
    (product) => product.os.toLowerCase() === os
  );
  res.json(filteredProducts );
});

app.get('/products/filter/price', (req, res) => {
  const price = parseInt(req.query.price);
  const filteredProducts = products.filter((product) => product.price <= price);
  res.json( filteredProducts );
});

app.get('/products', (req, res) => {
  res.json( products);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
