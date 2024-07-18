# Intern Tasks Documentation

## Overview

This documentation outlines the tasks for interns. Each task involves creating various endpoints for different functionalities. Interns will need to create Data Transfer Objects (DTOs), collection functions, and routes for each endpoint, and also consume them to ensure they work as expected.

---

### 1. User Management

#### Task 1: Create SignUp Endpoint

- **Description**: Create an endpoint for user registration.
- **Requirements**:
  - Create a `SignUpDto`.
  - Implement a collection function to handle user registration.
  - Define the route `/api/auth/signup`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 2: Create Login Endpoint

- **Description**: Create an endpoint for user login.
- **Requirements**:
  - Create a `LoginDto`.
  - Implement a collection function to handle user authentication.
  - Define the route `/api/auth/login`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 3: Create Forgot Password Endpoint

- **Description**: Create an endpoint for password recovery.
- **Requirements**:
  - Create a `ForgotPasswordDto`.
  - Implement a collection function to handle password recovery.
  - Define the route `/api/auth/forgot-password`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 4: Create Update User Details Endpoint

- **Description**: Create an endpoint for updating user details.
- **Requirements**:
  - Create an `UpdateUserDto`.
  - Implement a collection function to handle user detail updates.
  - Define the route `/api/user/update`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

---

### 2. Product Management

#### Task 5: Create Products Endpoint

- **Description**: Create an endpoint for adding new products.
- **Requirements**:
  - Create a `CreateProductDto`.
  - Implement a collection function to handle product creation.
  - Define the route `/api/products`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 6: Fetch Products by UserId Endpoint

- **Description**: Create an endpoint to fetch products by user ID.
- **Requirements**:
  - Create a `FetchProductsByUserDto`.
  - Implement a collection function to retrieve products by user ID.
  - Define the route `/api/products/user/:userId`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 7: Fetch All Products Endpoint

- **Description**: Create an endpoint to fetch all products.
- **Requirements**:
  - Create a `FetchAllProductsDto`.
  - Implement a collection function to retrieve all products.
  - Define the route `/api/products`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 8: Delete Products Endpoint

- **Description**: Create an endpoint to delete a product.
- **Requirements**:
  - Create a `DeleteProductDto`.
  - Implement a collection function to delete a product.
  - Define the route `/api/products/:productId`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 9: Update Products Endpoint

- **Description**: Create an endpoint to update a product.
- **Requirements**:
  - Create an `UpdateProductDto`.
  - Implement a collection function to update product details.
  - Define the route `/api/products/:productId`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 10: Fetch Product by ID Endpoint

- **Description**: Create an endpoint to fetch a product by ID.
- **Requirements**:
  - Create a `FetchProductByIdDto`.
  - Implement a collection function to retrieve a product by its ID.
  - Define the route `/api/products/:productId`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

---

### 3. Chat Management

#### Task 11: Initialize Chat Endpoint

- **Description**: Create an endpoint to initialize a chat.
- **Requirements**:
  - Create an `InitializeChatDto`.
  - Implement a collection function to initialize a chat.
  - Define the route `/api/chat/init`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 12: Fetch Chats Endpoint

- **Description**: Create an endpoint to fetch chats.
- **Requirements**:
  - Create a `FetchChatsDto`.
  - Implement a collection function to retrieve chats.
  - Define the route `/api/chat`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

---

### 4. Purchase Management

#### Task 13: History of Purchases Endpoint

- **Description**: Create an endpoint to fetch the history of purchases.
- **Requirements**:
  - Create a `FetchPurchaseHistoryDto`.
  - Implement a collection function to retrieve the purchase history.
  - Define the route `/api/purchases/history`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 14: Purchase Endpoint

- **Description**: Create an endpoint to make a purchase.
- **Requirements**:
  - Create a `PurchaseDto`.
  - Implement a collection function to handle purchases.
  - Define the route `/api/purchases`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

---

### 5. Order Management

#### Task 15: Get All Orders for User Endpoint

- **Description**: Create an endpoint to fetch all orders for a user.
- **Requirements**:
  - Create a `FetchUserOrdersDto`.
  - Implement a collection function to retrieve all orders for a user.
  - Define the route `/api/orders/user/:userId`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 16: Get All Orders Endpoint

- **Description**: Create an endpoint to fetch all orders.
- **Requirements**:
  - Create a `FetchAllOrdersDto`.
  - Implement a collection function to retrieve all orders.
  - Define the route `/api/orders`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

#### Task 17: Get Order by ID Endpoint

- **Description**: Create an endpoint to fetch an order by ID.
- **Requirements**:
  - Create a `FetchOrderByIdDto`.
  - Implement a collection function to retrieve an order by its ID.
  - Define the route `/api/orders/:orderId`.
  - Ensure the endpoint can be consumed (e.g., via Postman or a frontend form).

---

## Additional Instructions

1. **DTO Creation**: Each Data Transfer Object (DTO) should have appropriate validation rules using libraries such as `class-validator`.
2. **Collection Functions**: Implement collection functions to interact with the database. Use an ORM like Prisma or Sequelize for database operations.
3. **Routes**: Define routes using a web framework like Express.js.
4. **Testing**: Test each endpoint thoroughly using tools like Postman or automated tests to ensure they function as expected.
5. **Consumption**: Ensure that each endpoint is consumed by a frontend application or API client to validate its functionality.

---

## Timeline

Interns are expected to complete the tasks as soon as possible:

## Resources

- Documentation for `class-validator`: [class-validator](https://github.com/typestack/class-validator)
- Documentation for Express.js: [Express.js](https://expressjs.com/)
- Documentation for Prisma: [Prisma](https://www.prisma.io/docs/)

---

By following this documentation, interns will gain hands-on experience in creating, testing, and consuming various API endpoints, as well as in using DTOs, collection functions, and routes. This will prepare them for full-stack development tasks.
