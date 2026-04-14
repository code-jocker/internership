import express from 'express';
import { getAllOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../controllers/orders.js';

const orderRoutes = express.Router();

orderRoutes.get('/getAllOrders', getAllOrders);
orderRoutes.post('/createOrder', createOrder);
orderRoutes.get('/getOrder/:id', getOrder);
orderRoutes.put('/updateOrder/:id', updateOrder);
orderRoutes.delete('/deleteOrder/:id', deleteOrder);

export default orderRoutes;

