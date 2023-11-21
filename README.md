# Microservices Architecture -

This project represents a simple microservices architecture with three services (Product Service, User Service, Order Service) and an API Gateway.

## Project Structure

- **api-gateway:** Handles routing and acts as the entry point for client requests.
- **product-service:** Manages products and their information.
- **user-service:** Handles user-related operations.
- **order-service:** Manages order processing.

## Technologies Used

- Node.js
- TypeScript
- Express.js
- http-proxy-middleware (for API Gateway)

## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed

### Installation

1. Clone the repository:

   ```bash
   git clone  https://github.com/abdelfattehsakkat/microservice.git
```


Navigate to each service's directory and install dependencies:

```bash
cd api-gateway
npm install
```

Repeat this for `product-service`, `user-service`, and `order-service`.


Transpile TypeScript code:


```bash
cd api-gateway
npx tsc

cd product-service
npx tsc

cd user-service
npx tsc

cd order-service
npx tsc
```


### Running the Services
Start each service individually:

```bash
cd api-gateway
npm start # Or node index.js

cd product-service
npm start

cd user-service
npm start

cd order-service
npm start

```

The API Gateway will be running on http://localhost:3000.

**Accessing Services**
- API Gateway: http://localhost:3000
- Product Service: http://localhost:3001
- User Service: http://localhost:3002
- Order Service: http://localhost:3003

**API Endpoints**
- API Gateway:
  - /products - Routes to Product Service
  - /users - Routes to User Service
  - /orders - Routes to Order Service


- Product Service:
  - /products - Get all products
  - /products/:id - Get product by ID (comming soon)

- User Service:
  - /users - Get all users
  - /users/:id - Get user by ID (comming soon)

- Order Service:
  - /orders - Get all orders
  - /orders/:id - Get order by ID (comming soon)
 
**Example**


<img width="649" alt="Screenshot 2023-11-21 at 9 04 13 PM" src="https://github.com/abdelfattehsakkat/microservice/assets/61501905/ee2aed05-bd69-40ad-9e4c-7ea8fc970621">


