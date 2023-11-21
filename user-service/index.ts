import express from 'express';

const app = express();
const PORT = 3002;

const users = [
  { id: 1, name: 'abdelfatteh', email: 'abdelfatteh@example.com' },
  { id: 2, name: 'sakkat', email: 'sakkat@example.com' },
  { id: 3, name: 'User 3', email: 'user3@example.com' },
];

app.get('/users', (req, res) => {
  res.json({ users });
});

app.listen(PORT, () => {
  console.log(`User Service running on http://localhost:${PORT}`);
});
