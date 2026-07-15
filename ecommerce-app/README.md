# E-Commerce App

A full-stack e-commerce web application built using **React**, **Node.js**, **Express**, and **MongoDB**.

## Features

- User Registration & Login (JWT Authentication)
- Product Listing
- Add to Cart
- Checkout Page
- Protected Routes
- Backend REST APIs
- MongoDB Database Integration

## Tech Stack

### Frontend
- React
- React Router
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

## Project Structure
```text
ecommerce-app/
│
├── frontend/      # React frontend
├── backend/       # Node.js + Express backend
└── README.md
```

## How to Run the Project

### Backend
```bash
cd backend
npm install
npm start
Runs on: http://localhost:5000

Frontend
cd frontend
npm install
npm start
Runs on: http://localhost:3000

Authentication Flow
User registers
User logs in
JWT token stored in localStorage
Protected pages redirect to login if token is missing

Future Enhancements
Payment Gateway Integration
Admin Dashboard
Product Filters
Order History

## Credits
This project is based on an open-source project from GitHub and is used for learning and practice purposes.
