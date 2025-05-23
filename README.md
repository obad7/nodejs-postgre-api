# 🛠️ Node.js API with PostgreSQL, Express & Joi

A simple user management API built with **Node.js**, **Express**, **PostgreSQL**, and **Joi** for validation.

## Features

- User registration (with hashed password)
- Input validation using `Joi`
- PostgreSQL database integration via `pg`
- Secure password hashing with `bcrypt`
- Modular code structure (Controllers, Services, Routes, Middleware)
- Error handling and validation middleware
- `.env` configuration

---
## API Endpoint
- **Create User** : Post /user/create_user
- **Get All Users** : Get /user/get_all_users
---

## Project Structure

```
src/
├─ Controllers/
│ └─ userController.js
├─ DB/
│ ├─ connection.js # PostgreSQL connection config
│ └─ createUserTable.js # Script to create 'users' table
├─ Middlewares/
│ └─ validationMiddleware.js # Joi validation handler
├─ Routes/
│ └─ userRouter.js # User routes
├─ Services/
│ └─ userService.js # Business logic for user creation
├─ Utils/
│ └─ hashing.js # Bcrypt-based hashing utility
├─ Validation/
│ └─ userValidation.js # Joi schema for users
└─ app.server.js # Express app setup
.env
```


---

## Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/obad7/nodejs-postgre-api
cd nodejs-postgre-api
```
### 2. Install dependencies
```bash
npm install
```


### 3. Configure .env
Create a .env file in the root directory with the following:
```bash
PORT=5000

DB_HOST=localhost
DB_USER=your_pg_user
DB_PASSWORD=your_pg_password
DB_NAME=your_database_name
DB_PORT=5432

SALT_ROUNDS=10
```
Replace your_pg_user and others with actual PostgreSQL credentials.

---
## Create Users Table
```bash
node src/DB/createUserTable.js
```
