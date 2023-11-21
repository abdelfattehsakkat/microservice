import express from 'express';

const app = express();
const PORT = 3003;

const orders = [
  { id: 1, userId: 1, productId: 1, quantity: 2 },
  { id: 2, userId: 2, productId: 3, quantity: 1 },
  { id: 3, userId: 3, productId: 2, quantity: 3 },
];

app.get('/orders', (req, res) => {
  res.json({ orders });
});

app.listen(PORT, () => {
  console.log(`Order Service running on http://localhost:${PORT}`);
});
