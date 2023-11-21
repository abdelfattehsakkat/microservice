import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = 3000;

// Proxy to product-service
app.use('/products', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

// Proxy to user-service
app.use('/users', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

// Proxy to order-service
app.use('/orders', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
