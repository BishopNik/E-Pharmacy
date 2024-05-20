/** @format */

import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import usersRouter from './routes/api/users.js';
import dashboardRouter from './routes/api/dashboard.js';
import customersRouter from './routes/api/customers.js';
import ordersRouter from './routes/api/orders.js';
import productsRouter from './routes/api/products.js';
import suppliersRouter from './routes/api/suppliers.js';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger.json' with { type: "json" };

dotenv.config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

// Api-docs
// app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// LogIn & LogOut
app.use('/api/users', usersRouter);

// Dashboard
app.use('/api/dashboard', dashboardRouter);

// // Customers
// app.use('/api/customers', customersRouter);

// // Orders
// app.use('/api/orders', ordersRouter);

// // Product
// app.use('/api/products', productsRouter);

// // Suppliers
// app.use('/api/suppliers', suppliersRouter);

app.use((_req, res) => {
	res.status(404).json({ message: 'Not found' });
});

app.use((err, _req, res, next) => {
	const { status = 500, message = 'Server error' } = err;
	res.status(status).json({ message });
});

export default app;
