# Internership E-commerce Backend

## Overview
This is a Node.js e-commerce backend built with Express.js and Sequelize ORM. It includes models for Users, Shops, Products, and Orders with proper associations and database migrations/seeds.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database ORM**: Sequelize
- **Database**: PostgreSQL/MySQL (configurable)
- **Authentication**: JWT, bcrypt
- **Validation**: validator.js

## Project Structure
```
src/
├── config/
│   └── db.js           # Database configuration
├── database/
│   ├── migration/      # Database migrations
│   ├── models/         # Sequelize models & associations
│   └── seeds/          # Database seed data
├── scripts/            # DB sync and seed scripts
└── [controllers/routes missing - to be implemented]
```

## Models
- **Users**: User authentication & profiles
- **Shops**: Store owners/vendors
- **Products**: Product catalog with shop association
- **Orders**: Customer orders with products

## Setup & Installation

1. **Clone & Install**
```bash
npm install
```

2. **Environment Setup**
Copy `.env.example` to `.env` and configure:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ecommerce
DB_USER=postgres
DB_PASS=yourpassword
JWT_SECRET=your_jwt_secret
PORT=3000
```

3. **Database Setup**
```bash
npm run db:migrate
npm run db:seed
```

4. **Run Server**
```bash
npm start
```

## Database Scripts
- `npm run db:sync` - Sync models to DB
- `npm run db:migrate` - Run migrations  
- `npm run db:seed` - Seed test data

## API Endpoints (TBD)
```
POST /auth/register
POST /auth/login
GET /products
POST /orders
```

## Future Features
- RESTful API controllers & routes
- Authentication middleware
- File uploads for product images
- Payment integration
- Admin dashboard

## License
MIT

