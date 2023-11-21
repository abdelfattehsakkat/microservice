import express from 'express';

const app = express();
const PORT = 3001;

const products = [
  { id: 1, name: 'Product 1', price: 20.99 },
  { id: 2, name: 'Product 2', price: 30.49 },
  { id: 3, name: 'Product 3', price: 15.99 },
];

app.get('/products', (req, res) => {
  res.json({ products });
});

app.listen(PORT, () => {
  console.log(`Product Service running on http://localhost:${PORT}`);
});
