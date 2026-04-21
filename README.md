# ShoppyGlobe-api
ShoppyGlobe API is a RESTful backend built using Node.js, Express, and MongoDB. It provides secure authentication and APIs for managing products and shopping cart functionality for an e-commerce application.

ShoppyGlobe API is a backend application built using Node.js, Express.js, and MongoDB. It provides RESTful APIs for an e-commerce platform, including user authentication, product management, and cart functionality.

---

## Features
- User Registration & Login (JWT Authentication)
- Get all products
- Get single product
- Add product (optional)
- Add to cart
- Update cart
- Delete cart

---

## Tech Stack
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT (Authentication)  

---

## Project Structure
```
shoppyglobe-api/
│── models/
│── routes/
│── middleware/
│── server.js
│── .env
│── package.json
```

---

## Installation

### 1. Clone repository
```
git clone https://github.com/codedriftlab/ShoppyGlobe-api.git
cd shoppyglobe-api
```

### 2. Install dependencies
```
npm install
```

### 3. Create `.env` file
```
MONGO_URI=mongodb://127.0.0.1:27017/shoppyglobe
JWT_SECRET=secret123
```

### 4. Run server
```
npm run dev
```

---

## Base URL
```
http://localhost:3000/api
```

---

## Authentication APIs

### Register
```
POST /auth/register
```

### Login
```
POST /auth/login
```

---

## Product APIs

### Get all products
```
GET /products
```

### Get single product
```
GET /products/:id
```

### Add product
```
POST /products
```

---

## Cart APIs (Protected)

> Add token in headers:
```
Authorization: your_token
```

### Add to cart
```
POST /cart
```

### Update cart
```
PUT /cart/:id
```

### Delete cart
```
DELETE /cart/:id
```

---

##  Testing
All APIs tested using Thunder Client (VS Code extension).

---

## ❗ Error Handling
- 401 Unauthorized  
- 400 Bad Request  
- 500 Internal Server Error  

---

##  Future Improvements
- Add order system  
- Payment integration  
- Admin dashboard  

---

## Author
Manglesh Kumar